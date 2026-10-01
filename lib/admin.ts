import 'server-only';
import {cookies,headers} from 'next/headers';
import {createHmac,timingSafeEqual,createHash} from 'node:crypto';
export const adminCookie='fz_admin_session';
function secret(){const key=process.env.ADMIN_SESSION_SECRET;if(!key||key.length<32)throw Error('Set ADMIN_SESSION_SECRET to at least 32 characters');return key}
const sign=(value:string)=>createHmac('sha256',secret()).update(value).digest('base64url');
export function sameSecret(a:string,b:string){return timingSafeEqual(createHash('sha256').update(a).digest(),createHash('sha256').update(b).digest())}
export function createSession(){const value=Buffer.from(JSON.stringify({user:process.env.ADMIN_USERNAME,expires:Date.now()+12*60*60*1000})).toString('base64url');return value+'.'+sign(value)}
export function validSession(value:string){try{const parts=value.split('.');if(parts.length!==2||!sameSecret(parts[1],sign(parts[0])))return false;const data=JSON.parse(Buffer.from(parts[0],'base64url').toString());return !!process.env.ADMIN_USERNAME&&data.user===process.env.ADMIN_USERNAME&&Number.isFinite(data.expires)&&data.expires>Date.now()}catch{return false}}
export function trustedOrigin(origin:string|null){try{return !!origin&&new URL(origin).origin===new URL(process.env.SITE_URL||'http://localhost:3000').origin}catch{return false}}
export async function allowedAdmin(){const h=await headers();if(h.get('origin')&&!trustedOrigin(h.get('origin')))return false;return validSession((await cookies()).get(adminCookie)?.value||'')}
