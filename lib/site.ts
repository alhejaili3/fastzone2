import {cache} from 'react';
import {transmissionServiceItems,transmissionServiceEnglish} from "./transmission-service";
import {approvedServiceItems,replacedServiceIds,approvedEnglish} from './approved-services';
export {approvedServiceItems} from './approved-services';
import { getDb } from '@/db';
import { records, settings, bookings } from '@/db/schema';
import { asc, eq } from 'drizzle-orm';
import {catalyticOffer,catalyticOfferFeatures,previousCatalyticCopy} from './catalytic-offer';
import {engineTuneArticle} from './engine-tune-article';
import {catalystArticle} from './catalyst-article';
import {transmissionArticle} from './transmission-article';
import {coolingArticle} from './cooling-article';
import {maintenanceArticles} from './maintenance-articles';
import {deepCleaningService,deepCleaningPackages,serviceFeatures} from './service-content';
export type Item = typeof records.$inferSelect;
export const defaults: Record<string,string> = {
 brand:'فاست زون', logo:'/fast-zone-emblem-transparent.png', introCaption:'مركز فاست زون لصيانة السيارات', introServices:'فحص دقيق|صيانة متقنة|عناية بكل تفصيلة', tag:'عناية أدق. طريق أطول.', heroTitle:'سيارتك في أيدٍ تعرف التفاصيل.',
 heroBody:'فحص دقيق، خدمة واضحة، وتجربة صيانة تستحق ثقتك في المدينة المنورة.',
 phone:'0558075854', whatsapp:'966558075854', whatsappGreeting:'مرحبًا فاست زون، أود الاستفسار عن خدماتكم.', whatsappServiceTemplate:'مرحبًا فاست زون، أود معرفة تفاصيل خدمة {service}{package}.', address:'المدينة المنورة – العزيزية – طريق الملك خالد (الدائري الثالث) – محطة شموخ', hours:'يوميًا من 9:30 صباحًا حتى 9:30 مساءً',
 maps:'', mapsEmbed:'', googlePlaceId:'', googleReviewUrl:'', accent:'#d3201c', surface:'#080808', heroImage:'',
 bookingEnabled:'true',
 bookingNote:'سنتواصل معك لتأكيد الموعد. إرسال الطلب لا يعني تأكيد الحجز.',
 bookingTerms:'نرجو التشرف للمركز مباشرة للخدمة بشكل أسرع، وتأكيد الموعد المحجوز يخضع لجدول التوفر وضغط العمل داخل الورشة.\nالحضور قبل الموعد بـ 15 دقيقة على الأقل.\nيتطلب الحجز المسبق مهلة 30 دقيقة على الأقل قبل الموعد.\nفي حال التأخر أكثر من 20 دقيقة، يلغى الموعد تلقائيًا ويعاد جدولته حسب التوفر.\nيرجى إحضار استمارة السيارة عند الحضور.',
 bankName:'',bankAccount:'',bankIban:'',bankBeneficiary:'',bankNotice:'بيانات التحويل البنكي (عربون / رسوم حجز)',
 bookingStart:'09:30',bookingEnd:'21:30',bookingInterval:'30',bookingCapacity:'4',bookingDays:'14',
 footer:'نعتني بكل تفصيلة قبل أن تعود إلى الطريق.'
};
const seed = (kind:string,id:string,title:string,body:string,price='',position=0,meta=''):Item => ({kind,id,title,body,price,rating:0,position,image:'',meta,status:'published',createdAt:'2026-09-23T00:00:00.000Z'});
export const initialItems:Item[] = [
 seed('category','cat-engine','المحرك','فحص وصيانة مكونات المحرك وأدائه','',0,'engine'),
 seed('category','cat-oils','الزيوت والفلاتر','تغيير الزيوت والعناية بالفلاتر','',1,'oils'),
 seed('category','cat-cooling','نظام التبريد','الرديتر والليات وسوائل التبريد','',2,'cooling'),
 seed('category','cat-exhaust','العادم والانبعاثات','دبة البيئة وحساسات العادم','',3,'exhaust'),
 seed('category','cat-steering','نظام التوجيه','زيت الدركسون ومكونات التوجيه','',4,'steering'),
 seed('category','cat-electrical','الكهرباء والتشخيص','البطارية والفحص الإلكتروني','',5,'electrical'),
 seed('service','engine-oil','تغيير زيت الماكينة','تغيير الزيت والسيفون · فحص الإطارات · تنظيف فلتر الهواء · تنظيف الماكينة بالهواء','أجور اليد 20 ريال',0),
 seed('service','computer','فحص السيارة بالكمبيوتر','فحص الأعطال بالكمبيوتر وإرسال التقرير ومسح الأكواد','30 ريال',1),
 seed('service','radiator','خدمة الرديتر والتبريد','باقات تنظيف الليات الخارجية والداخلية وفحص دورة التبريد','تبدأ من 50 ريال',2),
 seed('service','steering','تغيير زيت الدركسون','خدمة تغيير زيت الدركسون؛ الخدمة لا تشمل الزيت ويتم توفيره من قبل العميل','50 ريال',3),
 {...seed('service','catalytic',catalyticOffer.service.title,catalyticOffer.service.body,catalyticOffer.service.price,4),image:catalyticOffer.service.image},
 seed('service','engine-tune','تصفية الماكينة','خدمة العناية بأداء الماكينة، تشمل باقات فحص وتنظيف متعددة وفق حالة السيارة','اطلب التفاصيل',5),
 seed('service','engine-head','فحص رأس الماكينة','فحص متخصص بأجهزة مخصصة لتقييم حالة رأس الماكينة','50 ريال',6),
 seed('service','smoke','كشف التهريب بالدخان','كشف مواقع التهريب باستخدام جهاز الدخان','30 ريال',7),
 seed('service','battery','فحص البطارية والدينمو والسلف','فحص كهرباء التشغيل بأجهزة متخصصة','30 ريال',8),
 seed('package','pkg-radiator-exterior-basic','الليات الخارجية · الأساسية','تنظيف الليات الخارجية وفحص دورة التبريد. جميع الباقات غير شاملة سائل التبريد.','50 ريال',0,'radiator'),
 seed('package','pkg-radiator-exterior-complete','الليات الخارجية · الشاملة','تنظيف شامل لليات التبريد الخارجية مع منظف رديتر stop أمريكي. لا تشمل سائل التبريد.','100 ريال',1,'radiator'),
 seed('package','pkg-radiator-interior-basic','الليات الداخلية والهايبرد والسيارات الكبيرة · الأساسية','خدمة دورة التبريد الداخلية. جميع الباقات غير شاملة سائل التبريد.','100 ريال',2,'radiator'),
 seed('package','pkg-radiator-interior-complete','الليات الداخلية والهايبرد والسيارات الكبيرة · الشاملة','تنظيف شامل مع منظف رديتر stop أمريكي. لا تشمل سائل التبريد.','150 ريال',3,'radiator'),
 ...catalyticOffer.packages.map((p,i)=>({...seed('package',p.id,p.title,p.body,p.price,i,'catalytic'),image:p.image})),
 seed('article','oil-guide','متى تحتاج سيارتك إلى فحص الزيت؟','فحص مستوى الزيت وحالته بانتظام يساعدك على ملاحظة أي تغير مبكر. اتبع توصية الشركة المصنعة لنوع الزيت وفترة التغيير.', '',0),
 seed('article','cooling-guide','إشارات تستدعي فحص نظام التبريد','ارتفاع مؤشر الحرارة أو نقص سائل التبريد المتكرر يستدعي فحص دورة التبريد. توقف في مكان آمن إذا ارتفعت الحرارة ولا تفتح غطاء الرديتر وهو ساخن.', '',1),
 ];
export const initialArticleSections:Item[] = [
 seed('article_section','oil-guide-check','ابدأ بمستوى الزيت','افحص المستوى والسيارة على سطح مستوٍ، واتبع طريقة القياس الموصى بها لسيارتك. إذا لاحظت انخفاضًا متكررًا، دوّن وقت الفحص ومقدار النقص لمساعدة الفني في التشخيص.','',0,'oil-guide'),
 seed('article_section','oil-guide-condition','لاحظ ما يتغير، لا اللون وحده','انتبه لأي تسرب ظاهر، أو رائحة غير معتادة، أو تحذير على لوحة العدادات. لون الزيت وحده لا يحدد دائمًا صلاحيته؛ المرجع الأفضل هو مواصفات الشركة وجدول الصيانة وحالة السيارة.','',1,'oil-guide'),
 seed('article_section','oil-guide-next','الخطوة التالية واضحة','راجع دليل السيارة لنوع الزيت وفترة تغييره. إذا ظهر تحذير ضغط الزيت أثناء القيادة، توقف في مكان آمن وأطفئ المحرك، ثم اطلب فحصًا قبل متابعة السير.','',2,'oil-guide'),
 seed('article_section','cooling-guide-signs','انتبه إلى أول إشارة','ارتفاع مؤشر الحرارة، أو تكرار نقص سائل التبريد، أو آثار تسرب أسفل السيارة إشارات تستحق فحص دورة التبريد. لاحظ متى تظهر المشكلة: عند الوقوف، أو أثناء السير، أو مع تشغيل المكيف.','',0,'cooling-guide'),
 seed('article_section','cooling-guide-safety','إذا ارتفعت الحرارة، تصرّف بهدوء','توقف في مكان آمن وأطفئ المحرك وفق إرشادات سيارتك. لا تفتح غطاء الرديتر أو خزان التمدد وهو ساخن؛ فقد يندفع سائل ساخن تحت الضغط.','',1,'cooling-guide'),
 seed('article_section','cooling-guide-inspect','افحص السبب قبل التعويض المتكرر','تعبئة السائل قد تساعد مؤقتًا، لكنها لا تعالج سبب النقص المتكرر. فحص الليات والوصلات والرديتر والغطاء بأجهزة مناسبة يساعد على تحديد موضع الخلل وخطوة الإصلاح.','',2,'cooling-guide'),
];
export const engineTuneItems:Item[]=[
 {...seed('article',engineTuneArticle.id,engineTuneArticle.title,engineTuneArticle.intro.map(([ar])=>ar).join('\n\n'),'',2,'cat-engine'),image:'/engine-tune-editorial.webp'},
 ...engineTuneArticle.sections.map((section,index)=>({...seed('article_section',section.id,section.title,section.paragraphs.map(([ar])=>ar).join('\n\n'),'',index,engineTuneArticle.id),image:section.id==='engine-tune-air'?'/engine-tune-air.webp':section.id==='engine-tune-ignition'?'/engine-tune-ignition.webp':''}))
];
export const catalystItems:Item[]=[
 {...seed('article',catalystArticle.id,catalystArticle.title,catalystArticle.intro.map(([ar])=>ar).join('\n\n'),'',3,'cat-exhaust'),image:'/catalyst-editorial.webp'},
 ...catalystArticle.sections.map((section,index)=>({...seed('article_section',section.id,section.title,section.paragraphs.map(([ar])=>ar).join('\n\n'),'',index,catalystArticle.id),image:section.id==='catalyst-sensors'?'/catalyst-sensors.webp':section.id==='catalyst-pressure'?'/catalyst-temperature.webp':''}))
];
export const transmissionItems:Item[]=[
 {...seed('article',transmissionArticle.id,transmissionArticle.title,transmissionArticle.intro.map(([ar])=>ar).join('\n\n'),'',4,'cat-oils'),image:'/transmission-editorial.webp'},
 ...transmissionArticle.sections.map((section,index)=>({...seed('article_section',section.id,section.title,section.paragraphs.map(([ar])=>ar).join('\n\n'),'',index,transmissionArticle.id),image:section.id==='atf-filter'?'/transmission-filter.webp':section.id==='atf-level'?'/transmission-level.webp':''}))
];
export const coolingItems:Item[]=[
 {...seed('article',coolingArticle.id,coolingArticle.title,coolingArticle.intro.map(([ar])=>ar).join('\n\n'),'',5,'cat-cooling'),image:'/cooling-editorial.webp'},
 ...coolingArticle.sections.map((section,index)=>({...seed('article_section',section.id,section.title,section.paragraphs.map(([ar])=>ar).join('\n\n'),'',index,coolingArticle.id),image:section.id==='cooling-flush'?'/cooling-flush.webp':section.id==='cooling-fill'?'/cooling-fill.webp':''}))
];
export const maintenanceItems:Item[]=maintenanceArticles.flatMap(article=>[
 {...seed('article',article.id,article.title,article.intro.map(([ar])=>ar).join('\n\n'),'',article.position,article.category),image:article.cover},
 ...article.sections.map((section,index)=>({...seed('article_section',section.id,section.title,section.paragraphs.map(([ar])=>ar).join('\n\n'),'',index,article.id),image:section.id===article.imageSection?article.chapterImage:''}))
]);
export const serviceDetailItems:Item[]=[
 {...seed('service',deepCleaningService.id,deepCleaningService.title,deepCleaningService.body,deepCleaningService.price,deepCleaningService.position,deepCleaningService.category),image:deepCleaningService.image},
 ...deepCleaningPackages.map((p,i)=>({...seed('package',p.id,p.title,p.body,p.price,i,deepCleaningService.id),image:p.image})),
 ...serviceFeatures.map((f,i)=>{const offer=catalyticOfferFeatures.find(x=>x.id===f.id);return {...seed('service_feature',f.id,offer?.title||f.title,offer?.body||f.body,'',i,f.service),image:offer?.image||f.image||''}}),
 ...catalyticOfferFeatures.filter(f=>!serviceFeatures.some(x=>x.id===f.id)).map((f,i)=>({...seed('service_feature',f.id,f.title,f.body,'',serviceFeatures.length+i,'catalytic'),image:f.image})),
];
export async function ensureCatalog(){
 const db=getDb();
 const seedKeys=new Set((await db.select({key:settings.key}).from(settings)).map(x=>x.key));
 const marker=(seedKeys.has('catalog_seed_v2')?[true]:[]);
 if(!marker.length){
  // Keep each insert below D1's bound-parameter limit (10 columns per record).
  for(let i=0;i<initialItems.length;i+=5){
   await db.insert(records).values(initialItems.slice(i,i+5)).onConflictDoNothing();
  }
  await db.insert(settings).values({key:'catalog_seed_v2',value:'1'}).onConflictDoNothing();
 }
 const chapters=(seedKeys.has('article_chapters_seed_v1')?[true]:[]);
 if(!chapters.length){
  for(let i=0;i<initialArticleSections.length;i+=5)await db.insert(records).values(initialArticleSections.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'article_chapters_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const engineArticle=(seedKeys.has('engine_tune_article_seed_v1')?[true]:[]);
 if(!engineArticle.length){
  for(let i=0;i<engineTuneItems.length;i+=5)await db.insert(records).values(engineTuneItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'engine_tune_article_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const catalystSeed=(seedKeys.has('catalyst_article_seed_v1')?[true]:[]);
 if(!catalystSeed.length){
  for(let i=0;i<catalystItems.length;i+=5)await db.insert(records).values(catalystItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'catalyst_article_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const transmissionSeed=(seedKeys.has('transmission_article_seed_v1')?[true]:[]);
 if(!transmissionSeed.length){
  for(let i=0;i<transmissionItems.length;i+=5)await db.insert(records).values(transmissionItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'transmission_article_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const coolingSeed=(seedKeys.has('cooling_article_seed_v1')?[true]:[]);
 if(!coolingSeed.length){
  for(let i=0;i<coolingItems.length;i+=5)await db.insert(records).values(coolingItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'cooling_article_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const maintenanceSeed=(seedKeys.has('maintenance_articles_seed_v1')?[true]:[]);
 if(!maintenanceSeed.length){
  for(let i=0;i<maintenanceItems.length;i+=5)await db.insert(records).values(maintenanceItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'maintenance_articles_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const serviceDetailSeed=(seedKeys.has('service_details_seed_v1')?[true]:[]);
 if(!serviceDetailSeed.length){
  for(let i=0;i<serviceDetailItems.length;i+=5)await db.insert(records).values(serviceDetailItems.slice(i,i+5)).onConflictDoNothing();
  await db.insert(settings).values({key:'service_details_seed_v1',value:'1'}).onConflictDoNothing();
 }
 const catalyticSeed=(seedKeys.has('catalytic_offer_seed_v1')?[true]:[]);
 if(!catalyticSeed.length){
  const all=await db.select().from(records);
  const updated=[catalyticOffer.service,...catalyticOffer.packages,...catalyticOfferFeatures];
  for(const offer of updated){
   const old=all.find(x=>x.id===offer.id),previous=previousCatalyticCopy[offer.id];
   if(!old||!previous)continue;
   const changes:Partial<Item>={};
   for(const key of ['title','body','price'] as const){
    if(key in offer&&key in previous&&old[key]===previous[key])changes[key]=offer[key as keyof typeof offer] as string;
   }
   if((!old.image||(offer.id==='catalytic-inspection'&&old.image==='/catalyst-sensors.webp')||(offer.id==='catalytic-cleaning'&&old.image==='/package-exhaust.webp'))&&'image' in offer)changes.image=offer.image;
   if(Object.keys(changes).length)await db.update(records).set(changes).where(eq(records.id,offer.id));
  }
  const freshFeatures=catalyticOfferFeatures.filter(f=>!all.some(x=>x.id===f.id)).map((f,i)=>({...seed('service_feature',f.id,f.title,f.body,'',20+i,'catalytic'),image:f.image}));
  if(freshFeatures.length)await db.insert(records).values(freshFeatures).onConflictDoNothing();
  await db.insert(settings).values({key:'catalytic_offer_seed_v1',value:'1'}).onConflictDoNothing();
 }

 const approvedSeed=(seedKeys.has('approved_service_posters_oct2026_v1')?[true]:[]);
 if(!approvedSeed.length){
  const current=await db.select().from(records);
  const writes=[];
  // Archive superseded defaults, keeping records available in the dashboard.
  for(const old of current){
   if(replacedServiceIds.includes(old.meta)&&['package','service_feature'].includes(old.kind)&&!approvedServiceItems.some(x=>x.id===old.id))writes.push(db.update(records).set({status:'draft'}).where(eq(records.id,old.id)));
  }
  for(const item of approvedServiceItems){
   const {id,createdAt,...content}=item;
   writes.push(db.insert(records).values(item).onConflictDoUpdate({target:records.id,set:content}));
   writes.push(db.insert(settings).values({key:'translation:'+id,value:JSON.stringify(approvedEnglish[id])}).onConflictDoUpdate({target:settings.key,set:{value:JSON.stringify(approvedEnglish[id])}}));
  }
  for(const id of ['engine-head','smoke','battery'])writes.push(db.update(records).set({status:'draft'}).where(eq(records.id,id)));
  await db.batch([db.insert(settings).values({key:'approved_service_posters_oct2026_v1',value:'1'}).onConflictDoNothing(),...writes]);
 }

 const transmissionServiceSeed=(seedKeys.has('transmission_service_seed_v1')?[true]:[]);
 if(!transmissionServiceSeed.length){
  const writes=transmissionServiceItems.flatMap(item=>[
   db.insert(records).values(item).onConflictDoNothing(),
   db.insert(settings).values({key:'translation:'+item.id,value:JSON.stringify(transmissionServiceEnglish[item.id])}).onConflictDoNothing()
  ]);
  await db.batch([db.insert(settings).values({key:'transmission_service_seed_v1',value:'1'}).onConflictDoNothing(),...writes]);
 }

 if(!seedKeys.has('services_catalog_pdf_v1')){
  const catalog=seed('catalog','fast-zone-services','كتالوج خدمات فاست زون','تصفح خدمات المركز وباقاته في كتالوج من 15 صفحة.','',0,'/catalogs/fast-zone-services.pdf');
  catalog.image='/catalogs/fast-zone-services-cover.webp';
  await db.batch([
   db.insert(records).values(catalog).onConflictDoNothing(),
   db.insert(settings).values({key:'translation:'+catalog.id,value:JSON.stringify({title:'Fast Zone service catalogue',body:'Browse the center’s services and packages in a 15-page catalogue.'})}).onConflictDoNothing(),
   db.insert(settings).values({key:'services_catalog_pdf_v1',value:'1'}).onConflictDoNothing()
  ]);
 }

}
export const loadSite=cache(async function loadSite(){
 try {
  const db=getDb(); await ensureCatalog(); const [rs,ss]=await Promise.all([db.select().from(records).orderBy(asc(records.position)),db.select().from(settings)]);
  return {items:rs,settings:{...defaults,...Object.fromEntries(ss.filter(x=>x.key!=='googlePlacesApiKey').map(x=>[x.key,x.value]))}};
 } catch(error) { console.error("Site data load failed",error); return {items:[...[...initialItems,...initialArticleSections,...engineTuneItems,...catalystItems,...transmissionItems,...coolingItems,...maintenanceItems,...serviceDetailItems].filter(x=>!approvedServiceItems.some(y=>y.id===x.id)&&!(['package','service_feature'].includes(x.kind)&&replacedServiceIds.includes(x.meta))&&!['engine-head','smoke','battery'].includes(x.id)),...approvedServiceItems],settings:defaults}; }
});

export async function loadBookings(){return getDb().select().from(bookings).orderBy(asc(bookings.createdAt));}
export function cleanText(v:unknown,max=2000){return typeof v==='string'?v.trim().slice(0,max):'';}
export function safeImage(s:string){return /^https:\/\//.test(s)||/^\/api\/media\/[a-f0-9-]+\.(?:webp|png|jpe?g)$/.test(s)||/^\/(?!\/)[a-zA-Z0-9/_-]+\.(?:webp|png|jpe?g|svg)$/.test(s)?s:'';}

export function safeCatalogPdf(value:string){return /^\/api\/media\/[a-f0-9-]+\.pdf$/.test(value)||/^\/catalogs\/[a-zA-Z0-9_-]+\.pdf$/.test(value)}
