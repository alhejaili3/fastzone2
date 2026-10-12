import {allowedAdmin} from '@/lib/admin';
import {d1Request} from '@/lib/d1-rest';
import {ensureMediaStore,mediaInfo,removeUpload,MEDIA_CHUNK_SIZE,MAX_PDF_SIZE,MEDIA_BUDGET} from '@/lib/media-store';
export const runtime='nodejs';
export const maxDuration=60;
const fail=(error:string,status=400)=>Response.json({error},{status});
export async function POST(req:Request){try{
 if(!await allowedAdmin())return fail('غير مصرح',403);
 const {type,size}=await req.json() as {type:string,size:number};const pdf=type==='application/pdf',image=['image/jpeg','image/png','image/webp'].includes(type);
 if((!pdf&&!image)||!Number.isSafeInteger(size)||size<1||size>(pdf?MAX_PDF_SIZE:5_000_000))return fail('يسمح بملف PDF حتى 75 ميغابايت أو صورة حتى 5 ميغابايت.');
 await ensureMediaStore();
 const expiry=Date.now()-24*60*60*1000;
 await d1Request('DELETE FROM media_chunks WHERE id IN (SELECT id FROM media_uploads WHERE complete=0 AND created_at<?)',[expiry]);
 await d1Request('DELETE FROM media_uploads WHERE complete=0 AND created_at<?',[expiry]);
 const id=crypto.randomUUID()+'.'+(pdf?'pdf':type==='image/png'?'png':type==='image/webp'?'webp':'jpg');
 const r=await d1Request('INSERT INTO media_uploads(id,type,size,created_at) SELECT ?,?,?,? WHERE (SELECT COALESCE(SUM(size),0) FROM media_uploads)+?<=?',[id,type,size,Date.now(),size,MEDIA_BUDGET]);
 if(!r.meta.changes)return fail('مساحة الملفات ممتلئة. تواصل مع إدارة الموقع لتنظيف الملفات غير المستخدمة.',413);
 return Response.json({id,url:'/api/media/'+id,chunkSize:MEDIA_CHUNK_SIZE});
 }catch{return fail('تعذر تجهيز الرفع. حاول مجددًا.',503)}}
export async function PUT(req:Request){try{
 if(!await allowedAdmin())return fail('غير مصرح',403);
 const q=new URL(req.url).searchParams,id=q.get('id')||'',part=Number(q.get('part'));
 if(!/^[a-f0-9-]+\.(pdf|jpg|png|webp)$/.test(id)||!q.has('part')||!Number.isInteger(part)||part<0)return fail('طلب رفع غير صالح.');
 const m=await mediaInfo(id);if(!m||m.complete)return fail('جلسة الرفع غير متاحة.',409);
 const expected=Math.min(MEDIA_CHUNK_SIZE,m.size-part*MEDIA_CHUNK_SIZE);if(expected<=0)return fail('جزء غير صالح.');
 const data=Buffer.from(await req.arrayBuffer());if(data.length!==expected)return fail('حجم الجزء غير صالح.');
 if(part===0){const valid=m.type==='application/pdf'?data.subarray(0,5).toString()==='%PDF-':m.type==='image/png'?data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):m.type==='image/jpeg'?data[0]===255&&data[1]===216:data.subarray(0,4).toString()==='RIFF'&&data.subarray(8,12).toString()==='WEBP';if(!valid)return fail('محتوى الملف لا يطابق نوعه.');}
 await d1Request('INSERT INTO media_chunks(id,part,data,bytes) SELECT ?,?,?,? WHERE EXISTS(SELECT 1 FROM media_uploads WHERE id=? AND complete=0) ON CONFLICT(id,part) DO UPDATE SET data=excluded.data,bytes=excluded.bytes WHERE EXISTS(SELECT 1 FROM media_uploads WHERE id=? AND complete=0)',[id,part,data.toString('base64'),data.length,id,id]);
 return Response.json({ok:true});
 }catch{return fail('تعذر رفع هذا الجزء. حاول مجددًا.',503)}}
export async function PATCH(req:Request){try{
 if(!await allowedAdmin())return fail('غير مصرح',403);const {id}=await req.json() as {id:string};const m=await mediaInfo(String(id));if(!m)return fail('الملف غير موجود.',404);
 const r=await d1Request('UPDATE media_uploads SET complete=1 WHERE id=? AND (SELECT COUNT(*) FROM media_chunks WHERE id=?)=? AND (SELECT COALESCE(SUM(bytes),0) FROM media_chunks WHERE id=?)=size',[id,id,Math.ceil(m.size/MEDIA_CHUNK_SIZE),id]);
 if(!r.meta.changes)return fail('الملف غير مكتمل. أعد الرفع.',409);return Response.json({url:'/api/media/'+id});
 }catch{return fail('تعذر إكمال الرفع.',503)}}
export async function DELETE(req:Request){try{if(!await allowedAdmin())return fail('غير مصرح',403);const {id}=await req.json() as {id:string};const m=await mediaInfo(String(id));if(m&&!m.complete)await removeUpload(m.id);return Response.json({ok:true})}catch{return fail('تعذر إلغاء الرفع.',503)}}
