import {allowedAdmin} from '@/lib/admin';
import {visitStats} from '@/lib/visits';
export const dynamic = 'force-dynamic';
export async function GET() {
  if (!await allowedAdmin()) return Response.json({error: 'غير مصرح'}, {status: 403});
  try { const stats=await visitStats(); console.info('visit-audit', JSON.stringify({status:'admin-read',...stats})); return Response.json(stats, {headers: {'Cache-Control': 'private, no-store'}}); }
  catch { return Response.json({error: 'تعذر تحميل إحصاءات الزيارات'}, {status: 503}); }
}
