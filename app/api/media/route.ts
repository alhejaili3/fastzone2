import {allowedAdmin} from '@/lib/admin';import {presignObject} from '@/lib/r2-storage';
export async function POST(req:Request){try{
 if(!await allowedAdmin())return Response.json({error:'غير مصرح'},{status:403});
 const {type,size}=await req.json() as {type:string,size:number};const isPdf=type==='application/pdf',image=['image/jpeg','image/png','image/webp'].includes(type);
 if((!isPdf&&!image)||!Number.isSafeInteger(size)||size<1||size>(isPdf?25000000:5000000))return Response.json({error:'صورة حتى 5 ميغابايت أو PDF حتى 25 ميغابايت.'},{status:400});
 const extension=isPdf?'pdf':type==='image/png'?'png':type==='image/webp'?'webp':'jpg',key=crypto.randomUUID()+'.'+extension;
 return Response.json({uploadUrl:presignObject(key,'PUT',type),url:'/api/media/'+key,contentType:type})
 }catch{return Response.json({error:'تعذر تجهيز رفع الملف. تحقق من إعدادات التخزين.'},{status:503})}}
