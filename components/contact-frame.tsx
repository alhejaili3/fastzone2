'use client';
import {useState} from 'react';
import {Sun,Moon,ChevronRight} from 'lucide-react';
import {ContactShare} from '@/components/contact-share';
export function ContactFrame({defaultTheme,children}:{defaultTheme:'light'|'dark';children:React.ReactNode}){
  const [theme,setTheme]=useState(defaultTheme);
  return <div className="contact-page" data-contact-theme={theme} lang="ar" dir="rtl" data-no-translate>
    <div className="contact-watermark" aria-hidden="true">FAST ZONE</div>
    <main className="contact-card">
      <header className="contact-top"><a href="/" aria-label="العودة إلى موقع فاست زون"><ChevronRight size={18}/><span>الموقع الرئيسي</span></a><div className="contact-tools"><ContactShare compact/><button className="contact-theme-toggle" type="button" aria-label={theme==='light'?'التبديل إلى المظهر الداكن':'التبديل إلى المظهر الفاتح'} title={theme==='light'?'المظهر الداكن':'المظهر الفاتح'} onClick={()=>setTheme(t=>t==='light'?'dark':'light')}>{theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button></div></header>
      {children}
    </main>
  </div>;
}
