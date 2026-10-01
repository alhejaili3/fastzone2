import {ArrowUpLeft, Cog, Droplets, Fan, Wind, Gauge, BatteryCharging, Wrench, BookOpen, type LucideIcon} from 'lucide-react';
import type {Item} from '@/lib/site';
import {categoryFor} from '@/lib/catalog';

const iconMap:Record<string,LucideIcon>={engine:Cog,oils:Droplets,cooling:Fan,exhaust:Wind,steering:Gauge,electrical:BatteryCharging,general:Wrench};
const iconForCategory=(key:string)=>key.replace(/^cat-/, '');
export function CategoryIcon({name,size=26}:{name:string,size?:number}){const Icon=iconMap[iconForCategory(name)]||Wrench;return <Icon size={size} strokeWidth={1.8} aria-hidden="true"/>}

export function ServiceCard({item,categoryName}:{item:Item,categoryName?:string}){
  return <a href={'/services/'+encodeURIComponent(item.id)} className="catalog-card card">
    {item.image&&<img src={item.image} alt="" className="catalog-card-image" loading="lazy"/>}
    <div className="catalog-card-heading"><span className="catalog-card-icon"><CategoryIcon name={categoryFor(item)}/></span><div><small>{categoryName||'خدمات السيارات'}</small><h3>{item.title}</h3></div></div>
    <p className="muted">{item.body.slice(0,150)}</p>
    <div className="catalog-card-bottom"><span>{item.price||'اطلب التفاصيل'}</span><ArrowUpLeft size={20} aria-hidden="true"/></div>
  </a>
}
export function ArticleCard({item,categoryName}:{item:Item,categoryName?:string}){
  return <a href={'/articles/'+encodeURIComponent(item.id)} className="catalog-card card">
    {item.image&&<img src={item.image} alt="" className="catalog-card-image" loading="lazy"/>}
    <div className="catalog-card-heading"><span className="catalog-card-icon"><CategoryIcon name={categoryFor(item)} size={24}/></span><div><small>{categoryName||'نصائح السيارات'}</small><h3>{item.title}</h3></div></div>
    <p className="muted">{item.body.slice(0,160)}{item.body.length>160?'…':''}</p>
    <div className="catalog-card-bottom"><span>اقرأ النصيحة</span><ArrowUpLeft size={20} aria-hidden="true"/></div>
  </a>
}
