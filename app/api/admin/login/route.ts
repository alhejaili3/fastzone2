import {cookies} from 'next/headers';
import {createHmac} from 'node:crypto';
import {adminCookie,createSession,sameSecret,trustedOrigin} from '@/lib/admin';
import {d1} from '@/lib/d1-rest';
export async function POST(req:Request){
 if(!trustedOrigin(req.headers.get('origin')))return new Response('Forbidden',{status:403});
 if(!process.env.ADMIN_USERNAME||!process.env.ADMIN_PASSWORD||process.env.ADMIN_PASSWORD.length<16||!process.env.ADMIN_SESSION_SECRET||process.env.ADMIN_SESSION_SECRET.length<32)return new Response('Complete administrator environment configuration.',{status:503});
 try{
 const form=await req.formData(),user=String(form.get('username')||''),password=String(form.get('password')||'');
 const ip=req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';const key=createHmac('sha256',process.env.ADMIN_SESSION_SECRET).update(ip).digest('hex');const now=Date.now();
 const counter=await d1.prepare('INSERT INTO auth_attempts (id,attempts,expires) VALUES (?,1,?) ON CONFLICT(id) DO UPDATE SET attempts=CASE WHEN expires<? THEN 1 ELSE attempts+1 END, expires=CASE WHEN expires<? THEN ? ELSE expires END RETURNING attempts').bind(key,now+900000,now,now,now+900000).all<{attempts:number}>();
 if((counter.results[0]?.attempts||99)>8)return Response.redirect(new URL('/admin/login?error=1',process.env.SITE_URL||'http://localhost:3000'),303);
 if(!sameSecret(user,process.env.ADMIN_USERNAME)||!sameSecret(password,process.env.ADMIN_PASSWORD))return Response.redirect(new URL('/admin/login?error=1',process.env.SITE_URL||'http://localhost:3000'),303);
 await d1.prepare('DELETE FROM auth_attempts WHERE id=? OR expires<?').bind(key,now).run();
 (await cookies()).set(adminCookie,createSession(),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:43200});
 return Response.redirect(new URL('/admin',process.env.SITE_URL||'http://localhost:3000'),303)
 }catch{return new Response('Login unavailable. Check database configuration.',{status:503})}
}
