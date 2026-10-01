import type {Item} from '@/lib/site';
export function LocalReviews({items,compact=false}:{items:Item[],compact?:boolean}){
 const rated=items.filter(x=>x.rating>=1&&x.rating<=5),average=rated.length?rated.reduce((sum,x)=>sum+x.rating,0)/rated.length:0;
 return <section className="local-reviews" aria-label="تقييمات عملاء فاست زون">
  <div className="local-review-heading"><div><span className="eyebrow">تقييمات الموقع</span><h2 className="h2">آراء عملائنا في فاست زون</h2><p className="muted">تقييمات أرسلها العملاء عبر هذا الموقع، وليست من Google.</p></div>{rated.length>0&&<div className="local-review-summary"><strong>{average.toFixed(1)} <span>★</span></strong><small>من 5 · {rated.length} تقييم</small></div>}</div>
  {items.length?<div className="grid3 local-review-grid">{(compact?items.slice(0,3):items).map(x=><article className="card local-review-card" key={x.id}>{x.rating>0&&<div className="local-review-stars" aria-label={`${x.rating} من 5 نجوم`}>{'★'.repeat(x.rating)}<span>{'☆'.repeat(5-x.rating)}</span></div>}<p>{x.body}</p><div className="local-review-by"><strong>{x.title}</strong><time dateTime={x.createdAt}>{new Date(x.createdAt).toLocaleDateString('ar-SA',{year:'numeric',month:'long',day:'numeric'})}</time></div></article>)}</div>:<div className="empty">لا توجد تقييمات منشورة بعد. شاركنا تجربتك وكن أول من يقيّم المركز.</div>}
 </section>
}
