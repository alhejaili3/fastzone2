import {notFound} from 'next/navigation';
import {Phone,MessageCircle,MapPin,Globe,ArrowUpLeft,Clock3,ChevronRight} from 'lucide-react';
import {loadSite,safeImage} from '@/lib/site';
import {contactConfig,internationalPhone,socialPlatforms} from '@/lib/contact-page';
import {ContactShare} from '@/components/contact-share';
import {SocialMark} from '@/components/social-mark';
import './contact.css';
export const dynamic='force-dynamic';
export const metadata={title:'تواصل معنا | فاست زون',description:'اتصل بمركز فاست زون، تواصل عبر واتساب، افتح موقعنا على الخرائط وتابع حساباتنا من مكان واحد.'};
export default async function ContactPage(){
  const {settings}=await loadSite();const c=contactConfig(settings);
  if(!c.enabled)notFound();
  const phone=internationalPhone(c.phone),wa=internationalPhone(c.whatsapp);
  const socials=socialPlatforms.filter(p=>c.socials[p.id].visible&&c.socials[p.id].url);
  return <div className="contact-page" lang="ar" dir="rtl" data-no-translate>
    <div className="contact-watermark" aria-hidden="true">FAST ZONE</div>
    <main className="contact-card">
      <header className="contact-top"><a href="/" aria-label="العودة إلى موقع فاست زون"><ChevronRight size={17}/>الموقع الرئيسي</a><span dir="ltr">AUTO SERVICE</span></header>
      <div className="contact-identity"><div className="contact-emblem"><img src={safeImage(settings.logo)||'/fast-zone-emblem-transparent.png'} alt="شعار فاست زون" width={116} height={116}/></div><div className="contact-wordmark" dir="ltr"><span>FAST</span> ZONE</div><span className="contact-city"><span/>المدينة المنورة</span><h1>{c.title}</h1><p>{c.subtitle}</p></div>
      <section className="contact-actions" aria-label="الاتصال المباشر">
        {c.showPhone&&phone&&<a className="contact-primary contact-call" href={'tel:+'+phone}><Phone size={24}/><span><strong>اتصل بنا</strong><small dir="ltr">{c.phone}</small></span><ArrowUpLeft size={18}/></a>}
        {c.showWhatsapp&&wa&&<a className="contact-primary contact-whatsapp" href={'https://wa.me/'+wa+'?text='+encodeURIComponent(settings.whatsappGreeting||'مرحبًا فاست زون، أود الاستفسار.')} target="_blank" rel="noopener noreferrer"><MessageCircle size={25}/><span><strong>واتساب</strong><small>يسعدنا الرد عليك</small></span><ArrowUpLeft size={18}/></a>}
      </section>
      <section className="contact-destinations" aria-label="موقع المركز والموقع الإلكتروني">
        {c.showMaps&&c.maps&&<a className="contact-destination" href={c.maps} target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><MapPin size={23}/></span><span><strong>موقعنا على خرائط Google</strong><small>{c.address}</small></span><ArrowUpLeft size={20}/></a>}
        {c.showWebsite&&c.website&&<a className="contact-destination" href={c.website} target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Globe size={23}/></span><span><strong>اكتشف خدماتنا وباقاتنا</strong><small dir="ltr">{new URL(c.website).hostname}</small></span><ArrowUpLeft size={20}/></a>}
      </section>
      {socials.length>0&&<section className="contact-social-section" aria-labelledby="contact-social-title"><div className="contact-section-label"><h2 id="contact-social-title">تابع فاست زون</h2><span>نبقى على تواصل</span></div><div className="contact-social-grid">{socials.map(p=><a key={p.id} className={'contact-social contact-social-'+p.id} href={c.socials[p.id].url} target="_blank" rel="noopener noreferrer" aria-label={'فاست زون على '+p.label}><span className="contact-social-icon"><SocialMark id={p.id}/></span><strong>{p.label}</strong><ArrowUpLeft size={16}/></a>)}</div></section>}
      {c.hours&&<div className="contact-hours"><Clock3 size={17}/><span>{c.hours}</span></div>}
      <ContactShare/>
      <footer className="contact-footer"><span>فاست زون .. خيارك المضمون</span><small dir="ltr">© {new Date().getFullYear()} FAST ZONE</small></footer>
    </main>
  </div>;
}
