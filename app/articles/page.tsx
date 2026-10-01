import {loadSite} from '@/lib/site';
import {Shell} from '@/components/site-shell';
import {Catalog} from '@/components/catalog';
export const dynamic='force-dynamic';
export const metadata={title:'النصائح والمقالات'};
export default async function Articles(){
 const {items,settings}=await loadSite();
 return <Shell s={settings}><main className="section wrap" style={{minHeight:'65vh'}}><span className="eyebrow">النصائح والمقالات</span><h1 className="h2">تعرّف على سيارتك جزءًا بجزء.</h1><p className="muted" style={{marginBottom:30}}>نصائح عملية لفهم الصيانة والعناية اليومية بسيارتك.</p><Catalog kind="article" items={items.filter(x=>x.kind==='article'&&x.status==='published')} categories={items.filter(x=>x.kind==='category')}/></main></Shell>
}
