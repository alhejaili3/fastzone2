import {mediaInfo,MEDIA_CHUNK_SIZE} from '@/lib/media-store';
import {d1Request} from '@/lib/d1-rest';
import {presignObject} from '@/lib/r2-storage';
export const runtime='nodejs';export const maxDuration=60;
async function media(req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;if(!/^[a-f0-9-]+\.(jpg|png|webp|pdf)$/.test(id))return new Response('Not found',{status:404});
 try{const m=await mediaInfo(id);if(!m){try{return Response.redirect(presignObject(id,req.method==='HEAD'?'HEAD':'GET'),307)}catch{return new Response('Not found',{status:404})}}if(!m.complete)return new Response('Not found',{status:404});
 const headers=new Headers({'Content-Type':m.type,'Accept-Ranges':'bytes','Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff','Content-Disposition':'inline'});
 let start=0,end=m.size-1,status=200;const range=req.headers.get('range');
 if(range){const match=/^bytes=(\d*)-(\d*)$/.exec(range);if(!match||(!match[1]&&!match[2]))return new Response(null,{status:416,headers:{'Content-Range':`bytes */${m.size}`}});if(match[1]){start=Number(match[1]);end=match[2]?Math.min(end,Number(match[2])):end}else start=Math.max(0,m.size-Number(match[2]));if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=m.size)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${m.size}`}});status=206;headers.set('Content-Range',`bytes ${start}-${end}/${m.size}`)}
 headers.set('Content-Length',String(end-start+1));if(req.method==='HEAD')return new Response(null,{status,headers});
 let part=Math.floor(start/MEDIA_CHUNK_SIZE),cancelled=false;const last=Math.floor(end/MEDIA_CHUNK_SIZE);
 const stream=new ReadableStream<Uint8Array>({async pull(controller){try{const stop=Math.min(last,part+3);const r=await d1Request('SELECT part,data FROM media_chunks WHERE id=? AND part BETWEEN ? AND ? ORDER BY part',[id,part,stop]);if(cancelled)return;if(r.results.length!==stop-part+1)throw Error('Incomplete media');for(const row of r.results){const index=Number(row.part),data=Buffer.from(String(row.data),'base64'),offset=index*MEDIA_CHUNK_SIZE;controller.enqueue(data.subarray(Math.max(0,start-offset),Math.min(data.length,end-offset+1)))}part=stop+1;if(part>last)controller.close()}catch(e){if(!cancelled)controller.error(e)}},cancel(){cancelled=true}});
 return new Response(stream,{status,headers});
 }catch{return new Response('Media unavailable',{status:503})}}
export const GET=media;export const HEAD=media;
