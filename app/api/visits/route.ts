import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {adminCookie, trustedOrigin, validSession} from '@/lib/admin';
import {recentVisit, recordVisit, visitCookie, visitToken, visitWindow} from '@/lib/visits';
export async function POST(req: Request) {
  if (!trustedOrigin(req.headers.get('origin'))) return new Response(null, {status: 403});
  const jar = await cookies();
  const userAgent = req.headers.get('user-agent') || '';
  if (/bot|crawler|spider|headless|preview/i.test(userAgent) || validSession(jar.get(adminCookie)?.value || '') || recentVisit(jar.get(visitCookie)?.value || '')) return new Response(null, {status: 204});
  try {
    const token = visitToken();
    await recordVisit();
    const response = new NextResponse(null, {status: 204});
    response.headers.set('Cache-Control', 'no-store');
    response.cookies.set(visitCookie, token, {httpOnly: true, secure: new URL(req.url).protocol === 'https:', sameSite: 'lax', path: '/', maxAge: visitWindow});
    return response;
  } catch { return new Response(null, {status: 503}); }
}
