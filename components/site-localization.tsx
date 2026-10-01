'use client';
import {useEffect} from 'react';
import {englishFor} from '@/lib/english';

const skip='script,style,textarea,input,[contenteditable],.admin-layout,[data-no-translate]';
const langKey='fast-zone-language';
const themeKey='fast-zone-theme';
export function SiteLocalization({custom}:{custom:Record<string,string>}){
 useEffect(()=>{
  const root=document.documentElement;
  const english=!location.pathname.startsWith('/admin')&&localStorage.getItem(langKey)==='en';
  const light=localStorage.getItem(themeKey)==='light';
  root.lang=english?'en':'ar';root.dir=english?'ltr':'rtl';root.dataset.theme=light&&!location.pathname.startsWith('/admin')?'light':'dark';root.dataset.language=english?'en':'ar';
  if(!english){root.classList.remove('localizing');return}
  let scheduled=false;
  function translate(){
   scheduled=false;
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
    const parent=node.parentElement;
    if(!parent||parent.closest(skip))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
   }});
   let node:Node|null;
   while((node=walker.nextNode())){
    const current=node.nodeValue||'';
    const trimmed=current.trim();if(!trimmed||!/[\u0600-\u06ff]/.test(trimmed))continue;
    const translated=englishFor(trimmed,custom);
    if(translated!==trimmed)node.nodeValue=current.replace(trimmed,translated);
   }
   document.querySelectorAll<HTMLElement>('input,textarea,button,a,img,iframe,select,[aria-label]').forEach(el=>{
    if(el.closest('.admin-layout'))return;
    for(const key of ['placeholder','aria-label','title','alt']){
     const original=el.getAttribute(key);
     if(original&&/[\u0600-\u06ff]/.test(original)){const result=englishFor(original,custom);if(result!==original)el.setAttribute(key,result)}
    }
   });
   root.classList.remove('localizing');
  }
  const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(translate)}});
  observer.observe(document.body,{childList:true,characterData:true,subtree:true});
  translate();return()=>observer.disconnect();
 },[custom]);
 return null;
}
export function changeLanguage(lang:'ar'|'en'){localStorage.setItem(langKey,lang);location.reload()}
export function changeTheme(theme:'dark'|'light'){localStorage.setItem(themeKey,theme);document.documentElement.dataset.theme=theme;window.dispatchEvent(new Event('fast-zone-theme'))}
