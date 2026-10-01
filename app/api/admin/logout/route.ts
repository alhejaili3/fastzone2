import {cookies} from 'next/headers';import {adminCookie,trustedOrigin} from '@/lib/admin';
export async function POST(req:Request){if(!trustedOrigin(req.headers.get('origin')))return new Response('Forbidden',{status:403});(await cookies()).delete(adminCookie);return Response.redirect(new URL('/admin/login',process.env.SITE_URL||'http://localhost:3000'),303)}
