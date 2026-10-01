import {loadSite} from '@/lib/site';
import {Shell} from '@/components/site-shell';
import {Catalog} from '@/components/catalog';
export const dynamic='force-dynamic';
export const metadata={title:'الخدمات'};
export default async function Services(){
 const {items,settings}=await loadSite();
 return <Shell s={settings}><main className="section wrap"><span className="eyebrow">خدمات فاست زون</span><h1 className="h2">خدمات سيارتك حسب أجزائها.</h1><p className="muted" style={{marginBottom:30}}>اختر جزء السيارة أو اعرض جميع الخدمات والأسعار المبدئية.</p><Catalog kind="service" items={items.filter(x=>x.kind==='service'&&x.status==='published')} categories={items.filter(x=>x.kind==='category')}/></main></Shell>
}
