import {d1} from '@/lib/d1-rest';
import {getDb} from '@/db';
import {records,settings} from '@/db/schema';
import {eq} from 'drizzle-orm';
import {cleanText,defaults} from '@/lib/site';
import {bookingConfig,slotsForDate} from '@/lib/booking-slots';

async function context(){const db=getDb();const all=await db.select().from(settings);const s={...defaults,...Object.fromEntries(all.map(x=>[x.key,x.value]))};return {db,s,config:bookingConfig(s)}}
export async function GET(req:Request){
 try{
  const date=new URL(req.url).searchParams.get('date')||'';
  const {config}=await context();const slots=slotsForDate(date,config);
  if(!slots.length)return Response.json({slots:[],capacity:config.capacity});
  const rows=await d1.prepare("SELECT time, COUNT(*) AS used FROM bookings WHERE date = ? AND status IN ('new','confirmed') GROUP BY time").bind(date).all<{time:string,used:number}>();
  const used=new Map((rows.results||[]).map(x=>[x.time,x.used]));
  return Response.json({slots:slots.map(time=>({time,remaining:Math.max(0,config.capacity-(used.get(time)||0))})),capacity:config.capacity},{headers:{'Cache-Control':'no-store'}});
 }catch{return Response.json({error:'تعذر تحميل المواعيد المتاحة'},{status:503})}
}
export async function POST(req:Request){
 try{
  const d=await req.json() as Record<string,unknown>;
  const name=cleanText(d.name,100),phone=cleanText(d.phone,20),car=cleanText(d.car,100),service=cleanText(d.service,150),packageId=cleanText(d.package,100),date=cleanText(d.date,10),time=cleanText(d.time,5);
  if(!name||!car||!service||!/^\+?[0-9() -]{8,20}$/.test(phone))return Response.json({error:'تحقق من الاسم ورقم الجوال والسيارة.'},{status:400});
  const {db,s,config}=await context();
  if(!slotsForDate(date,config).includes(time))return Response.json({error:'هذا الموعد غير متاح. اختر وقتًا آخر.'},{status:400});
  const match=await db.select().from(records).where(eq(records.id,service));
  if(match[0]?.kind!=='service'||match[0].status!=='published')return Response.json({error:'اختر خدمة متاحة.'},{status:400});
  let label=match[0].title;
  if(packageId){const pkg=await db.select().from(records).where(eq(records.id,packageId));if(pkg[0]?.kind!=='package'||pkg[0].meta!==service||pkg[0].status!=='published')return Response.json({error:'اختر باقة متاحة.'},{status:400});label+=' — '+pkg[0].title}
  const id=crypto.randomUUID();
  // One D1 statement makes the capacity check and insert atomic for concurrent requests.
  const saved=await d1.prepare("INSERT INTO bookings (id,name,phone,car,service,date,time,status,created_at) SELECT ?,?,?,?,?,?,?,'new',? WHERE (SELECT COUNT(*) FROM bookings WHERE date=? AND time=? AND status IN ('new','confirmed')) < ?")
   .bind(id,name,phone,car,label,date,time,new Date().toISOString(),date,time,config.capacity).run();
  if(!saved.meta?.changes)return Response.json({error:'اكتمل هذا الموعد للتو. اختر وقتًا آخر.'},{status:409});
  const wa=s.whatsapp.replace(/\D/g,'');
  const message=`مرحبًا فاست زون، أرسل طلب حجز بانتظار تأكيدكم.\nرقم الطلب: ${id.slice(0,8)}\nالاسم: ${name}\nالجوال: ${phone}\nالسيارة: ${car}\nالخدمة: ${label}\nالموعد: ${date} · ${time}`;
  return Response.json({ok:true,whatsappUrl:wa?`https://wa.me/${wa}?text=${encodeURIComponent(message)}`:null});
 }catch{return Response.json({error:'تعذر تسجيل الطلب حاليًا.'},{status:503})}
}
