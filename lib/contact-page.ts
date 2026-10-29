export const socialPlatforms = [
  {id:'instagram', label:'إنستغرام', hint:'instagram.com', hosts:['instagram.com']},
  {id:'snapchat', label:'سناب شات', hint:'snapchat.com/add/…', hosts:['snapchat.com','t.snapchat.com']},
  {id:'tiktok', label:'تيك توك', hint:'tiktok.com/@…', hosts:['tiktok.com','vm.tiktok.com','vt.tiktok.com']},
  {id:'x', label:'إكس', hint:'x.com', hosts:['x.com','twitter.com']},
  {id:'youtube', label:'يوتيوب', hint:'youtube.com/@…', hosts:['youtube.com','youtu.be']},
  {id:'facebook', label:'فيسبوك', hint:'facebook.com', hosts:['facebook.com','fb.com','fb.me']},
  {id:'telegram', label:'تيليجرام', hint:'t.me', hosts:['t.me']},
  {id:'linkedin', label:'لينكدإن', hint:'linkedin.com', hosts:['linkedin.com']},
] as const;
export type SocialId = typeof socialPlatforms[number]['id'];
export type ContactPageConfig = {
  enabled:boolean; title:string; subtitle:string; phone:string; whatsapp:string;
  address:string; hours:string; maps:string; website:string;
  showPhone:boolean; showWhatsapp:boolean; showMaps:boolean; showWebsite:boolean;
  socials:Record<SocialId,{url:string; visible:boolean}>;
};
export function httpsUrl(value: unknown, hosts?: readonly string[]) {
  if(typeof value!=='string'||!value.trim())return '';
  try {
    const url=new URL(value.trim());
    const host=url.hostname.replace(/^www\./,'');
    return url.protocol==='https:'&&!url.username&&!url.password&&(!hosts||hosts.includes(host))?url.href:'';
  } catch { return ''; }
}
export function phoneDigits(value:string) {
  return value.replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-1632)).replace(/[۰-۹]/g,c=>String(c.charCodeAt(0)-1776)).replace(/\D/g,'');
}
export function internationalPhone(value:string) {
  let digits=phoneDigits(value);
  if(digits.startsWith('00'))digits=digits.slice(2);
  if(digits.startsWith('0')&&digits.length===10)digits='966'+digits.slice(1);
  return /^\d{7,15}$/.test(digits)?digits:'';
}
export function contactConfig(settings:Record<string,string>):ContactPageConfig {
  let saved:Partial<ContactPageConfig>={};
  try { const parsed=JSON.parse(settings.contactPage||'{}');if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))saved=parsed; } catch { /* defaults */ }
  const text=(key:keyof ContactPageConfig,fallback:string)=>typeof saved[key]==='string'&&(saved[key] as string).trim()?(saved[key] as string).trim():fallback;
  const address=text('address',settings.address||'المدينة المنورة – العزيزية – الدائري الثالث – محطة شموخ');
  const socials=Object.fromEntries(socialPlatforms.map(p=>[p.id,{url:httpsUrl(saved.socials?.[p.id]?.url,p.hosts),visible:saved.socials?.[p.id]?.visible!==false}])) as ContactPageConfig['socials'];
  return {
    enabled:saved.enabled!==false,title:text('title','فاست زون لصيانة السيارات'),
    subtitle:text('subtitle','نعتني بتفاصيل سيارتك. تواصل معنا بالطريقة التي تناسبك.'),
    phone:text('phone',settings.phone||''),whatsapp:text('whatsapp',settings.whatsapp||''),
    address,hours:text('hours',settings.hours||''),
    maps:httpsUrl(saved.maps,['google.com','maps.google.com','maps.app.goo.gl','goo.gl'])||httpsUrl(settings.maps,['google.com','maps.google.com','maps.app.goo.gl','goo.gl'])||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}&query_place_id=ChIJHwosUQDHvRURpu0eHNLuQps`,
    website:httpsUrl(saved.website)||'https://www.fastzone.sa/',
    showPhone:saved.showPhone!==false,showWhatsapp:saved.showWhatsapp!==false,
    showMaps:saved.showMaps!==false,showWebsite:saved.showWebsite!==false,socials,
  };
}
export function validateContactConfig(value:unknown):{config?:ContactPageConfig;error?:string} {
  if(!value||typeof value!=='object'||Array.isArray(value))return {error:'بيانات صفحة التواصل غير صالحة'};
  const v=value as Record<string,unknown>;
  for(const key of ['enabled','showPhone','showWhatsapp','showMaps','showWebsite'])if(typeof v[key]!=='boolean')return {error:'خيارات الظهور غير صالحة'};
  const limits:Record<string,number>={title:100,subtitle:240,phone:30,whatsapp:30,address:240,hours:160,maps:1600,website:600};
  for(const [key,max] of Object.entries(limits))if(typeof v[key]!=='string'||(v[key] as string).length>max)return {error:'تحقق من طول الحقل: '+key};
  if(!(v.title as string).trim())return {error:'اكتب عنوان الصفحة'};
  for(const key of ['phone','whatsapp'])if((v[key] as string).trim()&&!internationalPhone(v[key] as string))return {error:key==='phone'?'رقم الاتصال غير صالح':'رقم واتساب غير صالح'};
  if(v.website&&!httpsUrl(v.website))return {error:'أدخل رابط موقع يبدأ بـ https://'};
  if(v.maps&&!httpsUrl(v.maps,['google.com','maps.google.com','maps.app.goo.gl','goo.gl']))return {error:'أدخل رابطًا صالحًا من خرائط Google'};
  if(!v.socials||typeof v.socials!=='object'||Array.isArray(v.socials))return {error:'روابط التواصل غير صالحة'};
  const socials=v.socials as Record<string,unknown>;
  for(const platform of socialPlatforms) {
    const entry=socials[platform.id] as {url?:unknown;visible?:unknown}|undefined;
    if(!entry||typeof entry.url!=='string'||entry.url.length>600||typeof entry.visible!=='boolean')return {error:'تحقق من بيانات '+platform.label};
    if(entry.url&&!httpsUrl(entry.url,platform.hosts))return {error:'أدخل رابط '+platform.label+' الصحيح؛ مثال: https://'+platform.hint};
  }
  const config=contactConfig({contactPage:JSON.stringify(v)});
  // Preserve blank overrides so the page continues to inherit current shared settings.
  for(const key of Object.keys(limits)) (config as unknown as Record<string,unknown>)[key]=(v[key] as string).trim();
  return {config};
}
