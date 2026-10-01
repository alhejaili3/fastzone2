import {presignObject} from '@/lib/r2-storage';
function media(req:Request,{params}:{params:Promise<{id:string}>}){return params.then(({id})=>{if(!/^[a-f0-9-]+\.(jpg|png|webp|pdf)$/.test(id))return new Response('Not found',{status:404});try{return Response.redirect(presignObject(id,req.method==='HEAD'?'HEAD':'GET'),307)}catch{return new Response('Storage unavailable',{status:503})}})}
export const GET=media;export const HEAD=media;
