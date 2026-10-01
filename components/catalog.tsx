'use client';
import {useState} from 'react';
import {Layers3,List,ArrowLeft} from 'lucide-react';
import type {Item} from '@/lib/site';
import {categoryFor} from '@/lib/catalog';
import {ServiceCard,ArticleCard,CategoryIcon} from '@/components/cards';

export function Catalog({items,categories,kind}:{items:Item[],categories:Item[],kind:'service'|'article'}){
 const [selected,setSelected]=useState('all');
 const [view,setView]=useState<'categories'|'all'>(kind==='service'?'categories':'all');
 const active=categories.filter(c=>c.status==='published'&&items.some(i=>categoryFor(i)===c.id));
 const filtered=selected==='all'?items:items.filter(item=>categoryFor(item)===selected);
 const label=kind==='service'?'جميع الخدمات':'جميع النصائح';
 return <>
   {kind==='service'&&<div className="catalog-view-toggle" role="group" aria-label="طريقة تصفح الخدمات"><button type="button" className={view==='categories'?'active':''} aria-pressed={view==='categories'} onClick={()=>{setView('categories');setSelected('all')}}><Layers3 size={18}/> تصفح حسب الأقسام</button><button type="button" className={view==='all'?'active':''} aria-pressed={view==='all'} onClick={()=>{setView('all');setSelected('all')}}><List size={18}/> مشاهدة جميع الباقات والخدمات</button></div>}
   {view==='categories'&&kind==='service'?<div className="grid3 category-grid">{active.map(c=>{const count=items.filter(x=>categoryFor(x)===c.id).length;return <button type="button" key={c.id} className="card category-tile" onClick={()=>{setSelected(c.id);setView('all')}}>{c.image?<img src={c.image} alt="" loading="lazy"/>:<div className="category-tile-art"><CategoryIcon name={c.meta||c.id} size={56}/></div>}<div className="category-tile-body"><h2>{c.title}</h2><p>{c.body}</p><div><strong>{count} {count===1?'خدمة متاحة':'خدمات متاحة'}</strong><span>عرض الخدمات والباقات <ArrowLeft size={17}/></span></div></div></button>})}</div>:<>
   <div className="catalog-filters" role="group" aria-label={kind==='service'?'تصفية الخدمات حسب جزء السيارة':'تصفية النصائح حسب جزء السيارة'}>
     <button type="button" aria-pressed={selected==='all'} className={'catalog-filter'+(selected==='all'?' active':'')} onClick={()=>setSelected('all')}>{label}<span>{items.length}</span></button>
     {active.map(category=><button type="button" key={category.id} aria-pressed={selected===category.id} className={'catalog-filter'+(selected===category.id?' active':'')} onClick={()=>setSelected(category.id)}><CategoryIcon name={category.meta||category.id} size={20}/>{category.title}<span>{items.filter(item=>categoryFor(item)===category.id).length}</span></button>)}
   </div>
   <p className="catalog-count" aria-live="polite">{selected==='all'?label:categories.find(c=>c.id===selected)?.title} · {filtered.length} {kind==='service'?'خدمات':'نصائح'}</p>
   {filtered.length?<div className="grid3">{filtered.map(item=>kind==='service'?<ServiceCard key={item.id} item={item} categoryName={categories.find(c=>c.id===categoryFor(item))?.title}/>:<ArticleCard key={item.id} item={item} categoryName={categories.find(c=>c.id===categoryFor(item))?.title}/>)}</div>:<div className="empty">لا توجد عناصر منشورة في هذا التصنيف حاليًا.</div>}
   </>}
 </>
}
