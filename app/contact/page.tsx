import {ContactActionIcon} from '@/components/contact-action-icon';
import {notFound} from 'next/navigation';
import {MapPin,ArrowUpLeft,Clock3} from 'lucide-react';
import {loadSite,safeImage} from '@/lib/site';
import {contactConfig,internationalPhone,socialPlatforms} from '@/lib/contact-page';
import {ContactFrame} from '@/components/contact-frame';
import {SocialMark} from '@/components/social-mark';
import './contact.css';
export const dynamic='force-dynamic';
export const metadata={title:'تواصل معنا',description:'اتصل بمركز فاست زون، تواصل عبر واتساب، افتح موقعنا على الخرائط وتابع حساباتنا من مكان واحد.'};
export default async function ContactPage(){
  const {settings}=await loadSite();const c=contactConfig(settings);
  if(!c.enabled)notFound();
  const phone=internationalPhone(c.phone),wa=internationalPhone(c.whatsapp);
  const socials=socialPlatforms.filter(p=>c.socials[p.id].visible&&c.socials[p.id].url);
  return <ContactFrame defaultTheme={c.defaultTheme}>
      <div className="contact-identity"><div className="contact-emblem"><img src={safeImage(settings.logo)||'/fast-zone-emblem-transparent.png'} alt="شعار فاست زون" width={76} height={76}/></div><div className="contact-brand-text"><div className="contact-wordmark" dir="ltr"><span>FAST</span> ZONE<small>AUTO SERVICE</small></div><h1>{c.title}</h1><span className="contact-city"><span/>المدينة المنورة</span></div></div>
      <p className="contact-intro">{c.subtitle}</p>
      <section className="contact-actions" aria-label="الاتصال المباشر">
        {c.showPhone&&phone&&<a className="contact-primary contact-call" href={'tel:+'+phone}><ContactActionIcon kind="phone"/><span><strong>اتصل بنا</strong><small dir="ltr">{c.phone}</small></span><ArrowUpLeft size={18}/></a>}
        {c.showWhatsapp&&wa&&<a className="contact-primary contact-whatsapp" href={'https://wa.me/'+wa+'?text='+encodeURIComponent(settings.whatsappGreeting||'مرحبًا فاست زون، أود الاستفسار.')} target="_blank" rel="noopener noreferrer"><ContactActionIcon kind="whatsapp"/><span><strong>واتساب</strong><small>يسعدنا الرد عليك</small></span><ArrowUpLeft size={18}/></a>}

        {c.showMaps&&c.maps&&<a className="contact-primary contact-map" href={c.maps} target="_blank" rel="noopener noreferrer"><ContactActionIcon kind="location"/><span><strong>موقعنا على الخريطة</strong><small>خرائط Google</small></span><ArrowUpLeft size={20}/></a>}
        {c.showWebsite&&c.website&&<a className="contact-primary contact-website" href={c.website} target="_blank" rel="noopener noreferrer"><ContactActionIcon kind="website"/><span><strong>الموقع الإلكتروني</strong><small dir="ltr">{new URL(c.website).hostname}</small></span><ArrowUpLeft size={20}/></a>}
      </section>
      {socials.length>0&&<section className="contact-social-section" aria-labelledby="contact-social-title"><div className="contact-section-label"><h2 id="contact-social-title">تابع فاست زون</h2></div><div className="contact-social-grid">{socials.map(p=><a key={p.id} className={'contact-social contact-social-'+p.id} href={c.socials[p.id].url} target="_blank" rel="noopener noreferrer" aria-label={'فاست زون على '+p.label}><span className="contact-social-icon"><SocialMark id={p.id}/></span><strong>{p.label}</strong></a>)}</div></section>}
      <div className="contact-info"><div className="contact-location"><MapPin size={14}/><span>{c.address}</span></div>
      {c.hours&&<div className="contact-hours"><Clock3 size={17}/><span>{c.hours}</span></div>}
      </div><footer className="contact-footer"><span>فاست زون .. خيارك المضمون</span><small dir="ltr">© {new Date().getFullYear()} FAST ZONE</small></footer>
  </ContactFrame>;
}
