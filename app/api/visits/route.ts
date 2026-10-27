import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {adminCookie, trustedOrigin, validSession} from '@/lib/admin';
import {recentVisit, recordPageView, visitCookie, visitToken, visitWindow} from '@/lib/visits';
export async function POST(req: Request) {
  if (!trustedOrigin(req.headers.get('origin'))) return new Response(null, {status: 403});
  const jar = await cookies();
  const userAgent = req.headers.get('user-agent') || '';
  if (/bot|crawler|spider|headless|preview/i.test(userAgent) || validSession(jar.get(adminCookie)?.value || '')) return new Response(null, {status: 204});
  try {
    if (Number(req.headers.get('content-length') || 0) > 256) return new Response(null, {status: 413});
    const body = await req.text();
    if (body.length > 256) return new Response(null, {status: 413});
    let eventId: unknown;
    try { eventId = (JSON.parse(body) as {eventId?: unknown})?.eventId; }
    catch { return new Response(null, {status: 400}); }
    if (typeof eventId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(eventId)) return new Response(null, {status: 400});
    const newSession = !recentVisit(jar.get(visitCookie)?.value || '');
    const token = newSession ? visitToken() : '';
    await recordPageView(eventId, newSession);
    const response = new NextResponse(null, {status: 204});
    response.headers.set('Cache-Control', 'no-store');
    if (newSession) response.cookies.set(visitCookie, token, {httpOnly: true, secure: new URL(req.url).protocol === 'https:', sameSite: 'lax', path: '/', maxAge: visitWindow});
    return response;
  } catch { return new Response(null, {status: 503}); }
}
