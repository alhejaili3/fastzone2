'use client';
import {useEffect, useState} from 'react';
type Stats = {total: number; today: number; since: string | null};
export function VisitStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function refresh() {
    setLoading(true); setError(false);
    try {
      const response = await fetch('/api/admin/visits', {cache: 'no-store'});
      if (!response.ok) throw Error();
      setStats(await response.json() as Stats);
    } catch { setError(true); }
    finally { setLoading(false); }
  }
  useEffect(() => { void refresh(); }, []);
  return <section className="card" style={{padding: 24, marginBottom: 22}} aria-label="إحصاءات زيارات الموقع">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
      <h2 style={{fontSize: 22}}>زيارات الموقع</h2>
      <button type="button" className="btn small ghost" disabled={loading} onClick={() => void refresh()}>{loading ? 'جارٍ التحديث…' : 'تحديث العدد'}</button>
    </div>
    <div aria-live="polite">
      {error ? <p role="alert">تعذر تحميل عدد الزيارات. اضغط تحديث العدد للمحاولة مجددًا.</p> : stats ? <div className="admin-stats">
        {([['إجمالي الزيارات', stats.total], ['زيارات اليوم', stats.today]] as const).map(([label, value]) => <div key={label}><span className="muted">{label}</span><strong style={{display: 'block', fontSize: 37, color: '#e84b45'}}>{value.toLocaleString('ar-SA')}</strong></div>)}
      </div> : <p>جارٍ تحميل الزيارات…</p>}
    </div>
    <p className="muted" style={{fontSize: 13}}>يبدأ العد من تفعيل هذه الميزة؛ زيارة واحدة لكل متصفح خلال 30 دقيقة. اليوم حسب توقيت السعودية. تُستثنى صفحات الإدارة وزيارات المدير المسجّل دخوله.{stats?.since ? ' بداية التسجيل: ' + stats.since : ''}</p>
  </section>;
}
