'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
type Stats = {total: number; today: number; since: string | null; pageViews: number; pageViewsToday: number; pageViewsSince: string | null};
export function VisitStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = useRef<AbortController | null>(null);
  const refresh = useCallback(async () => {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setLoading(true); setError(false);
    try {
      const response = await fetch('/api/admin/visits', {cache: 'no-store', signal: controller.signal});
      if (!response.ok) throw Error();
      const next = await response.json() as Stats;
      if (!controller.signal.aborted) setStats(next);
    } catch { if (!controller.signal.aborted) setError(true); }
    finally { if (!controller.signal.aborted) setLoading(false); }
  }, []);
  useEffect(() => {
    void refresh();
    const onVisible = () => { if (document.visibilityState === 'visible') void refresh(); };
    const timer = setInterval(onVisible, 30000);
    document.addEventListener('visibilitychange', onVisible);
    return () => { clearInterval(timer); document.removeEventListener('visibilitychange', onVisible); request.current?.abort(); };
  }, [refresh]);
  return <section className="card" style={{padding: 24, marginBottom: 22}} aria-label="إحصاءات زيارات الموقع">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
      <h2 style={{fontSize: 22}}>زيارات الموقع</h2>
      <button type="button" className="btn small ghost" disabled={loading} onClick={() => void refresh()}>{loading ? 'جارٍ التحديث…' : 'تحديث العدد'}</button>
    </div>
    <div aria-live="polite">
      {error ? <p role="alert">تعذر تحميل عدد الزيارات. اضغط تحديث العدد للمحاولة مجددًا.</p> : stats ? <div className="admin-stats">
        {([['إجمالي مشاهدات الصفحات', stats.pageViews], ['مشاهدات اليوم', stats.pageViewsToday], ['إجمالي جلسات الزيارة', stats.total], ['جلسات اليوم', stats.today]] as const).map(([label, value]) => <div key={label}><span className="muted">{label}</span><strong style={{display: 'block', fontSize: 37, color: '#e84b45'}}>{value.toLocaleString('ar-SA')}</strong></div>)}
      </div> : <p>جارٍ تحميل الزيارات…</p>}
    </div>
    <p className="muted" style={{fontSize: 13}}>مشاهدة الصفحة: كل فتح أو تحديث أو انتقال إلى صفحة أخرى في الموقع. جلسة الزيارة: زيارة واحدة لكل متصفح خلال 30 دقيقة. الجلسات السابقة محفوظة؛ مشاهدات الصفحات تبدأ مع هذا التحديث ولا تشمل الفترة السابقة.{stats?.pageViewsSince ? ' بداية تسجيل المشاهدات: ' + stats.pageViewsSince + '.' : ''}</p>
    <p className="muted" style={{fontSize: 13}}>تتحدث الأرقام تلقائيًا كل 30 ثانية أثناء عرض اللوحة. التوقيت سعودي. تُستثنى صفحات الإدارة وزيارات المدير المسجّل دخوله وبرامج الزحف المعروفة. الأرقام المسجلة لا تشمل الزيارات التي يمنع متصفحها إرسال الإحصاءات.{stats?.since ? ' بداية تسجيل الجلسات: ' + stats.since + '.' : ''}</p>
  </section>;
}
