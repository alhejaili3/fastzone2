import {bookingsEnabled} from '@/lib/booking-visibility';
import {notFound,redirect} from 'next/navigation';
import {ArrowUpLeft,Check} from 'lucide-react';
import {loadSite} from '@/lib/site';
import {categoryFor} from '@/lib/catalog';
import {CategoryIcon} from '@/components/cards';
import {whatsappLink} from '@/lib/whatsapp';
import {MessageCircle} from 'lucide-react';
import {Shell} from '@/components/site-shell';
import {AddToCart} from '@/components/service-cart';
import {ArrowRight} from 'lucide-react';
export const dynamic='force-dynamic';
export default async function Detail({params}:{params:Promise<{id:string}>}){
 const {id}=await params;
 if(["engine-head","smoke","battery"].includes(id))redirect("/services/specialized-inspection");
 const {items,settings}=await loadSite();
 const item=items.find(x=>x.id===id&&x.kind==='service'&&x.status==='published');
 if(!item)notFound();
 const category=items.find(x=>x.id===categoryFor(item)&&x.kind==='category');
 const packages=items.filter(x=>x.kind==='package'&&x.meta===id&&x.status==='published').sort((a,b)=>a.position-b.position);
 const features=items.filter(x=>x.kind==='service_feature'&&x.meta===id&&x.status==='published').sort((a,b)=>a.position-b.position);
 const included=features.filter(x=>x.id!=='clean-egr-extra');
 const extras=[...features.filter(x=>x.id==='clean-egr-extra'),...items.filter(x=>x.kind==='service_extra'&&x.meta===id&&x.status==='published')].sort((a,b)=>a.position-b.position);
 const notes=items.filter(x=>x.kind==='service_note'&&x.meta===id&&x.status==='published');
 const posters=items.filter(x=>x.kind==='service_poster'&&x.meta===id&&x.status==='published');
 return <Shell s={settings}><main className="section wrap" style={{minHeight:'65vh'}}>
  <a href="/services" className="back-link"><ArrowRight size={18}/> رجوع إلى الخدمات</a><nav aria-label="مسار الصفحة" className="muted" style={{fontSize:14}}><a href="/services">الخدمات</a> / {category?.title||'خدمات السيارات'} / {item.title}</nav>
  <div className="service-detail-intro"><span className="catalog-card-icon" style={{width:74,height:74}}><CategoryIcon name={category?.meta||categoryFor(item)} size={38}/></span><div><span className="eyebrow">{category?.title||'خدمات السيارات'}</span><h1 className="h2" style={{fontSize:'clamp(36px,5vw,62px)'}}>{item.title}</h1></div></div>
  {item.image&&<img src={item.image} alt={item.title} className={"service-detail-image"+(item.image.startsWith("/approved-")?" service-poster-hero":"")}/>}
  <p style={{fontSize:18,lineHeight:2.1,color:'var(--muted-foreground)',whiteSpace:'pre-wrap',maxWidth:870}}>{item.body}</p>
  {item.price&&<p className="service-start-price">{item.price}</p>}
  {notes.length>0&&<section className="service-notes" aria-label="ملاحظات الخدمة"><h2>ملاحظات الخدمة</h2>{notes.map(note=><article key={note.id}><h3>{note.title}</h3><p>{note.body}</p></article>)}</section>}
  <div className="service-actions">{bookingsEnabled(settings)&&<a className="btn" href={'/?service='+encodeURIComponent(item.id)+'#booking'}>احجز هذه الخدمة <ArrowUpLeft size={18}/></a>}{bookingsEnabled(settings)&&<AddToCart choice={{id:item.id,title:item.title,service:item.title,price:item.price}}/>}{whatsappLink(settings,item.title)&&<a className="btn ghost" href={whatsappLink(settings,item.title)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> إرسال استفسار عبر واتساب</a>}<a href="/services" className="btn ghost">إضافة مزيد من الخدمات</a></div>
  {included.length>0&&<section className="service-feature-section" aria-labelledby="service-features-heading"><span className="eyebrow">ماذا تشمل هذه الخدمة؟</span><h2 className="h2" id="service-features-heading">أعمال الخدمة</h2><div className="service-feature-grid">{included.map((feature,index)=><article className="card service-feature-card" key={feature.id}>{feature.image&&<img src={feature.image} alt="" loading="lazy"/>}<div className="service-feature-copy"><span className="service-feature-index">{String(index+1).padStart(2,'0')}</span><h3>{feature.title}</h3><p>{feature.body}</p></div></article>)}</div></section>}
  {extras.length>0&&<section className="service-extras" aria-label="خدمة إضافية برسوم"><strong>خدمة إضافية برسوم</strong>{extras.map(feature=><div key={feature.id} className="service-extra-item">{feature.image&&<img src={feature.image} alt="" loading="lazy"/>}<div><h3>{feature.title}</h3><p style={{whiteSpace:"pre-line"}}>{feature.body}</p><strong className="extra-price">{feature.price||"اسأل عن السعر قبل التنفيذ"}</strong></div></div>)}</section>}
  {packages.length>0?<section aria-labelledby="packages-heading" style={{marginTop:64}}><span className="eyebrow">اختر ما يناسب سيارتك</span><h2 id="packages-heading" className="h2">باقات {item.title}</h2>{item.id==='catalytic'&&<p className="muted">الأسعار للدبة الواحدة. يحدد الفحص مدى ملاءمة التنظيف لحالة الدبة.</p>}<div className={'grid3'+(item.id==='catalytic'?' catalytic-package-grid':'')} style={{marginTop:26}}>{packages.map(p=><article className="card package-card" key={p.id}><img src={p.image||(item.id==='radiator'?'/package-cooling.webp':item.id==='catalytic'?'/package-exhaust.webp':'/fast-zone-emblem-transparent.png')} alt={p.image?p.title:''} loading="lazy" className={'package-image'+(!p.image&&!['radiator','catalytic'].includes(item.id)?' package-image-placeholder':'')}/><div className="package-content"><div className="package-mark"><Check size={21}/></div><h3>{p.title}</h3>{p.body.includes('\n')?<ul className="package-feature-list">{p.body.split('\n').filter(Boolean).map((line,i)=><li key={i}>{line}</li>)}</ul>:<p>{p.body}</p>}<div className="package-footer"><strong>{p.price||'اسأل عن السعر'}</strong><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{bookingsEnabled(settings)&&<a href={'/?service='+encodeURIComponent(item.id)+'&package='+encodeURIComponent(p.id)+'#booking'} className="btn small">اطلب موعدًا <ArrowUpLeft size={17}/></a>}{bookingsEnabled(settings)&&<AddToCart choice={{id:p.id,title:p.title,service:item.title,price:p.price}}/>}{whatsappLink(settings,item.title,p.title)&&<a href={whatsappLink(settings,item.title,p.title)} className="btn small ghost" target="_blank" rel="noopener noreferrer" aria-label={"استفسر عبر واتساب عن باقة "+p.title}><MessageCircle size={17}/> واتساب</a>}</div></div></div></article>)}</div></section>:<div style={{marginTop:32}}>{item.price&&<strong style={{display:'block',color:'var(--primary)',fontSize:22,marginBottom:18}}>{item.price}</strong>}</div>}

  {posters.map(poster=><details className="service-poster" key={poster.id}><summary>عرض الإعلان كاملًا</summary><img src={poster.image} alt={poster.title} loading="lazy"/></details>)}
 </main></Shell>
}
