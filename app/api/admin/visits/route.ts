import {allowedAdmin} from '@/lib/admin';
import {visitStats} from '@/lib/visits';
export const dynamic = 'force-dynamic';
export async function GET() {
  if (!await allowedAdmin()) return Response.json({error: 'غير مصرح'}, {status: 403});
  try { return Response.json(await visitStats(), {headers: {'Cache-Control': 'private, no-store'}}); }
  catch { return Response.json({error: 'تعذر تحميل إحصاءات الزيارات'}, {status: 503}); }
}
