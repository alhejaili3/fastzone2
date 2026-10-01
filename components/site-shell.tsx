'use client';
import {useState,useEffect} from 'react';
import {whatsappLink} from '@/lib/whatsapp';
import {Menu,X,ArrowUpLeft,Phone,MapPin,Clock3,ExternalLink,MessageCircle,Sun,Moon,Languages} from 'lucide-react';
import {changeLanguage,changeTheme} from '@/components/site-localization';
import {ServiceCart} from '@/components/service-cart';

const locationQuery='مركز فاست زون لصيانة السيارات، محطة شموخ، طريق الملك خالد (الدائري الثالث)، العزيزية، المدينة المنورة';
const fallbackMap=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;
const fallbackEmbed=`https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&output=embed`;
function googleMapsUrl(value:string|undefined, fallback:string){
  if(!value)return fallback;
  try{
    const url=new URL(value);
    if(url.protocol==='https:'&&['google.com','www.google.com','maps.google.com','maps.app.goo.gl'].includes(url.hostname))return url.href;
  }catch{ /* use the address search */ }
  return fallback;
}

export function Header({s}:{s:Record<string,string>}){
  const [open,setOpen]=useState(false);
  const [lang,setLang]=useState<'ar'|'en'>('ar');const [theme,setTheme]=useState<'dark'|'light'>('dark');
  useEffect(()=>{setLang(localStorage.getItem('fast-zone-language')==='en'?'en':'ar');setTheme(localStorage.getItem('fast-zone-theme')==='light'?'light':'dark')},[]);
  const nav=[['/','الرئيسية'],['/services','الخدمات'],['/articles','النصائح والمقالات'],['/catalog','الكتالوج'],['/reviews','آراء العملاء']];
  return <>
    <div className="brand-topline"><div className="wrap" style={{padding:'6px 0'}}>نعتني بتفاصيل سيارتك</div></div>
    <header className="brand-header"><div className="wrap" style={{minHeight:84,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
      <a href="/" className="brand-lockup" aria-label="فاست زون لصيانة السيارات، الرئيسية">
        {s.logo&&<img src={s.logo} alt="" className="brand-logo"/>}<span className="brand-arabic"><span>فاست</span> زون<small>لصيانة السيارات</small></span>
        <span className="brand-english" dir="ltr"><strong>FAST</strong> ZONE<small>AUTO SERVICE</small></span>
      </a>
      <nav className="desktop-nav" style={{display:'flex',gap:28,fontSize:15,fontWeight:700}}>{nav.map(([href,label])=><a key={href} href={href} style={{color:'#e4e4e4'}}>{label}</a>)}</nav>
      <div className="site-controls"><button type="button" aria-label={lang==='ar'?'Switch to English':'التبديل إلى العربية'} title={lang==='ar'?'English':'العربية'} onClick={()=>changeLanguage(lang==='ar'?'en':'ar')}><Languages size={18}/><span>{lang==='ar'?'EN':'عربي'}</span></button><button type="button" aria-label={theme==='dark'?'تفعيل المظهر الفاتح':'Switch to dark theme'} title={theme==='dark'?'المظهر الفاتح':'Dark theme'} onClick={()=>{const next=theme==='dark'?'light':'dark';setTheme(next);changeTheme(next)}}>{theme==='dark'?<Sun size={19}/>:<Moon size={19}/>}</button></div>
      <div className="desktop-nav"><a className="btn small" href="/#booking">احجز موعدك <ArrowUpLeft size={17}/></a></div>
      <button aria-label="القائمة" className="mobile-menu" onClick={()=>setOpen(!open)} style={{background:'none',border:0,color:'#fff'}}>{open?<X/>:<Menu/>}</button>
    </div>{open&&<nav className="mobile-links" style={{padding:'16px 22px 24px',borderTop:'1px solid #333'}}>{nav.map(([href,label])=><a onClick={()=>setOpen(false)} key={href} href={href}>{label}</a>)}<a href="/#booking" onClick={()=>setOpen(false)}>احجز موعدك</a></nav>}</header>
  </>;
}

export function Footer({s}:{s:Record<string,string>}){
  const wa=whatsappLink(s);
  const mapUrl=googleMapsUrl(s.maps,fallbackMap);
  const mapEmbed=googleMapsUrl(s.mapsEmbed,fallbackEmbed);
  return <footer style={{background:'#080808',borderTop:'1px solid #373a3c',padding:'62px 0 25px'}}><div className="wrap">
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:35}}>
      <div><strong style={{fontSize:25}}><span style={{color:'var(--primary)'}}>فاست</span> زون</strong><p className="muted" style={{lineHeight:2}}>{s.footer}</p></div>
      <div><strong>استكشف</strong><p><a href="/services">جميع الخدمات</a></p><p><a href="/articles">النصائح والمقالات</a></p><p><a href="/reviews">آراء العملاء</a></p><p><a href="/catalog">كتالوج العروض</a></p></div>
      <div><strong>تواصل معنا</strong><p className="muted"><MapPin size={16} style={{display:'inline',verticalAlign:'middle'}}/> {s.address}</p><p className="muted"><Clock3 size={16} style={{display:'inline',verticalAlign:'middle'}}/> {s.hours}</p>{s.phone&&<p><a href={'tel:'+s.phone}><Phone size={16} style={{display:'inline'}}/> {s.phone}</a></p>}</div>
      <div><strong>جاهز لخدمة سيارتك</strong><p className="muted">احجز موعدك بسهولة وسنتواصل معك لتأكيد التفاصيل.</p><a className="btn small" href="/#booking">اطلب موعدًا</a>{wa&&<p><a href={wa} target="_blank" rel="noopener noreferrer">تواصل عبر واتساب ↗</a></p>}</div>
    </div>
    <section className="location-panel" aria-label="موقع المركز على الخريطة">
      <div className="location-info"><span className="eyebrow">موقع المركز</span><h2>ننتظرك في فاست زون.</h2><p>{s.address}</p><a className="btn small" href={mapUrl} target="_blank" rel="noopener noreferrer">افتح في خرائط Google <ExternalLink size={17}/></a></div>
      <iframe title="خريطة منطقة مركز فاست زون" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
    </section>
    <div className="line" style={{margin:'48px 0 20px'}}/><div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10,color:'#888',fontSize:13}}><span>© {new Date().getFullYear()} فاست زون. جميع الحقوق محفوظة.</span><span><a href="/privacy">الخصوصية</a> · <a href="/terms">شروط الاستخدام</a></span></div>
  </div></footer>;
}
export function Shell({s,children}:{s:Record<string,string>,children:React.ReactNode}){return <div className="site-shell" style={{'--primary':/^#[0-9a-fA-F]{6}$/.test(s.accent)?s.accent:'#d3201c','--background':/^#[0-9a-fA-F]{6}$/.test(s.surface)?s.surface:'#080808'} as React.CSSProperties}><Header s={s}/>{children}<Footer s={s}/><ServiceCart whatsapp={s.whatsapp||''}/>{whatsappLink(s)&&<a className="wa-float" href={whatsappLink(s)} target="_blank" rel="noopener noreferrer" aria-label="تواصل مع فاست زون عبر واتساب" title="تواصل عبر واتساب"><MessageCircle size={26} strokeWidth={2.2}/><span>واتساب</span></a>}</div>}
