import {notFound} from 'next/navigation';
import {ArrowRight} from 'lucide-react';
import {loadSite} from '@/lib/site';
import {categoryFor} from '@/lib/catalog';
import {CategoryIcon} from '@/components/cards';
import {Shell} from '@/components/site-shell';
import {ArticleStory} from '@/components/article-story';
export const dynamic='force-dynamic';
export default async function Article({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const {items,settings}=await loadSite();
 const item=items.find(x=>x.id===id&&x.kind==='article'&&x.status==='published');if(!item)notFound();
 const category=items.find(x=>x.id===categoryFor(item)&&x.kind==='category');
 const sections=items.filter(x=>x.kind==='article_section'&&x.meta===id&&x.status==='published').sort((a,b)=>a.position-b.position);
 return <Shell s={settings}><article className="section wrap editorial" style={{minHeight:'65vh'}}>
 <a href="/articles" className="back-link"><ArrowRight size={18}/> رجوع إلى النصائح والمقالات</a>
 <header className="editorial-heading"><span className="catalog-card-icon"><CategoryIcon name={category?.meta||categoryFor(item)} size={27}/></span><span className="eyebrow">{category?.title||'نصائح السيارات'}</span><h1>{item.title}</h1>{(sections.length>0||item.body.length>220)&&<p>{item.body.split(/\n/)[0]}</p>}</header>
 {item.image&&<figure className="editorial-cover"><img src={item.image} alt={item.title}/></figure>}
 <ArticleStory intro={item.body} sections={sections}/><footer className="editorial-end"><span>فاست زون · نعتني بتفاصيل سيارتك</span><a href="/articles" className="btn ghost">تصفح بقية المقالات</a></footer>
 </article></Shell>
}
