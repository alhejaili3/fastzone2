'use client';
import {useState} from 'react';
import {Share2,Check} from 'lucide-react';
export function ContactShare(){
  const [message,setMessage]=useState('');
  async function share(){
    try{
      const url=location.origin+'/contact';
      if(navigator.share){await navigator.share({title:'فاست زون | تواصل معنا',url});}
      else if(navigator.clipboard){await navigator.clipboard.writeText(url);setMessage('تم نسخ رابط الصفحة');}
      else setMessage('رابط الصفحة: '+url);
    }catch(error){if(!(error instanceof Error&&error.name==='AbortError'))setMessage('يمكنك نسخ رابط الصفحة من شريط العنوان');}
  }
  return <div className="contact-share"><button type="button" onClick={()=>void share()} aria-label="مشاركة صفحة التواصل"><Share2 size={18}/><span>مشاركة البطاقة</span></button>{message&&<span role="status"><Check size={14}/>{message}</span>}</div>;
}
