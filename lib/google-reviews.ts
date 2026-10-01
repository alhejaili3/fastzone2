import {getDb} from '@/db';
import {settings} from '@/db/schema';
import {eq} from 'drizzle-orm';

type GoogleReview={name?:string;text?:{text?:string};rating?:number;relativePublishTimeDescription?:string;googleMapsUri?:string;authorAttribution?:{displayName?:string;uri?:string;photoUri?:string};};
type GooglePlace={id?:string;displayName?:{text?:string};rating?:number;userRatingCount?:number;googleMapsUri?:string;googleMapsLinks?:{writeAReviewUri?:string;reviewsUri?:string};attributions?:{provider?:string;providerUri?:string}[];reviews?:GoogleReview[]};
export type GoogleReviewData={name:string;rating:number;count:number;url:string;writeUrl:string;attributions:{provider:string;providerUri:string}[];reviews:{id:string;author:string;authorUrl:string;avatar:string;rating:number;text:string;when:string;url:string}[]};
const googleUrl=(s:string|undefined)=>{try{if(!s)return '';const u=new URL(s);return u.protocol==='https:'&&['google.com','www.google.com','maps.google.com','maps.app.goo.gl','g.page','search.google.com'].includes(u.hostname)?u.href:''}catch{return ''}};
const avatarUrl=(s:string|undefined)=>{try{if(!s)return '';const u=new URL(s);return u.protocol==='https:'&&['googleusercontent.com','lh3.googleusercontent.com','maps.gstatic.com'].includes(u.hostname)?u.href:''}catch{return ''}};
export async function loadGoogleReviews(placeId:string,manualWriteUrl:string):Promise<GoogleReviewData|null>{
 if(!/^[A-Za-z0-9_-]{10,200}$/.test(placeId))return null;
 try{
  const row=await getDb().select().from(settings).where(eq(settings.key,'googlePlacesApiKey'));
  const key=row[0]?.value;if(!key)return null;
  const response=await fetch('https://places.googleapis.com/v1/places/'+encodeURIComponent(placeId)+'?languageCode=ar',{headers:{'X-Goog-Api-Key':key,'X-Goog-FieldMask':'id,displayName,rating,userRatingCount,reviews,googleMapsUri,googleMapsLinks,attributions'},signal:AbortSignal.timeout(6000),cache:'no-store'});
  if(!response.ok){console.error('Google Places request failed',response.status);return null}
  const place=await response.json() as GooglePlace;if(place.id!==placeId)return null;
  return {name:place.displayName?.text||'',rating:place.rating||0,count:place.userRatingCount||0,url:googleUrl(place.googleMapsLinks?.reviewsUri)||googleUrl(place.googleMapsUri),writeUrl:googleUrl(manualWriteUrl)||googleUrl(place.googleMapsLinks?.writeAReviewUri),attributions:(place.attributions||[]).map(a=>({provider:a.provider||'',providerUri:googleUrl(a.providerUri)})).filter(a=>a.provider),reviews:(place.reviews||[]).filter(r=>!!r.googleMapsUri).map(r=>({id:r.name||r.googleMapsUri||'',author:r.authorAttribution?.displayName||'مستخدم Google',authorUrl:googleUrl(r.authorAttribution?.uri),avatar:avatarUrl(r.authorAttribution?.photoUri),rating:Math.min(5,Math.max(0,r.rating||0)),text:r.text?.text||'',when:r.relativePublishTimeDescription||'',url:googleUrl(r.googleMapsUri)})).filter(r=>r.url)};
 }catch(error){console.error('Google Places unavailable',error instanceof Error?error.name:'unknown');return null}
}
