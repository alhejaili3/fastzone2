// Details transcribed from the approved catalytic-converter offer.
export const catalyticOffer={
 service:{
  id:'catalytic',title:'فحص وتنظيف دبة البيئة',englishTitle:'Catalytic converter inspection and cleaning',
  body:'خيارات لفحص دبة البيئة وتنظيفها بحسب حالتها ونوع السيارة: فحص بالكاميرا، وتنظيف بالتبخير لسيارات البنزين، أو تنظيف بالرغوة. تتضمن الباقات العناية بحساس الأكسجين أو حساس الشكمان كما هو موضح في تفاصيل كل باقة. يُحدد مدى ملاءمة التنظيف بعد الفحص.',
  englishBody:'Options to inspect and clean the catalytic converter according to its condition and the vehicle: camera inspection, vapor cleaning for petrol vehicles, or foam cleaning. Oxygen/exhaust sensor cleaning is included where stated for each package. Suitability for cleaning is confirmed after inspection.',
  price:'تبدأ من 30 ريال',englishPrice:'From SAR 30',image:'/catalytic-camera-offer.webp'
 },
 packages:[
  {id:'pkg-catalytic-check',title:'باقة الفحص بالكاميرا',englishTitle:'Camera inspection package',body:'فحص دبة البيئة الواحدة بكاميرا خاصة.\nتنظيف حساس الأكسجين.',englishBody:'Inspect one catalytic converter with a specialist camera.\nClean the oxygen sensor.',price:'30 ريال',englishPrice:'SAR 30',image:'/catalytic-camera-offer.webp'},
  {id:'pkg-catalytic-vapor',title:'باقة التنظيف بالتبخير · سيارات البنزين',englishTitle:'Vapor cleaning · petrol vehicles',body:'تنظيف دبة البيئة بالجهاز والمواد المخصصة.\nالحقن بمادة ألمانية فاخرة بالتبخير عبر الجهاز.\nتنظيف حساس الشكمان.',englishBody:'Clean the catalytic converter with the dedicated machine and materials.\nApply a premium German-made product through the machine by vapor.\nClean the exhaust oxygen sensor.',price:'80 ريال',englishPrice:'SAR 80',image:'/catalytic-vapor-offer.webp'},
  {id:'pkg-catalytic-foam-cn',title:'باقة الرغوة · منظف صناعة صينية',englishTitle:'Foam cleaning · Chinese-made cleaner',body:'تنظيف دبة البيئة بالرغوة المخصصة.\nحقن الرغوة بدقة داخل دبة البيئة.\nتنظيف حساس الشكمان.',englishBody:'Clean the catalytic converter with dedicated foam.\nApply the foam inside the converter.\nClean the exhaust oxygen sensor.',price:'50 ريال',englishPrice:'SAR 50',image:'/catalytic-foam-offer.webp'},
  {id:'pkg-catalytic-foam-de',title:'باقة الرغوة · منظف صناعة ألمانية',englishTitle:'Foam cleaning · German-made cleaner',body:'تنظيف دبة البيئة بالرغوة المخصصة.\nحقن الرغوة بدقة داخل دبة البيئة.\nتنظيف حساس الشكمان.',englishBody:'Clean the catalytic converter with dedicated foam.\nApply the foam inside the converter.\nClean the exhaust oxygen sensor.',price:'80 ريال',englishPrice:'SAR 80',image:'/catalytic-foam-offer.webp'},
 ]
} as const;

export const catalyticOfferFeatures=[
 {id:'catalytic-inspection',title:'فحص دبة البيئة بكاميرا خاصة',englishTitle:'Inspect with a specialist camera',body:'فحص دبة البيئة الواحدة بالكاميرا لمعاينة حالتها الداخلية قبل اختيار الخدمة المناسبة.',englishBody:'Inspect one converter internally with a specialist camera before choosing the right service.',image:'/catalytic-camera-offer.webp'},
 {id:'catalytic-cleaning',title:'التنظيف بالتبخير لسيارات البنزين',englishTitle:'Vapor cleaning for petrol vehicles',body:'تنظيف دبة البيئة بالجهاز والمواد المخصصة مع حقن مادة ألمانية فاخرة بالتبخير عبر الجهاز.',englishBody:'Clean the converter with dedicated equipment and materials, including a premium German-made product applied as vapor.',image:'/catalytic-vapor-offer.webp'},
 {id:'catalytic-foam',title:'التنظيف بالرغوة',englishTitle:'Dedicated foam cleaning',body:'باقة رغوة بمنظف صناعة صينية أو صناعة ألمانية، بحسب اختيارك؛ السعر للدبة الواحدة.',englishBody:'Choose foam cleaning with a Chinese-made or German-made cleaner; the listed price is per catalytic converter.',image:'/catalytic-foam-offer.webp'},
 {id:'catalytic-oxygen',title:'تنظيف حساس الأكسجين / الشكمان',englishTitle:'Oxygen sensor cleaning',body:'تنظيف حساس الأكسجين أو حساس الشكمان وفق الأعمال المذكورة ضمن الباقة المختارة.',englishBody:'Clean the oxygen or exhaust sensor as listed under the selected package.',image:'/catalyst-sensors.webp'},
] as const;

// Previous default copy. Only fields still matching these values are replaced on existing sites.
export const previousCatalyticCopy:Record<string,{title?:string;body?:string;price?:string}>={
 catalytic:{body:'فحص دبة البيئة الواحدة وتنظيف حساس الأكسجين؛ تتوفر باقات التبخير والرغوة'},
 'pkg-catalytic-check':{title:'باقة فحص دبة البيئة',body:'فحص دبة البيئة الواحدة وتنظيف حساس الأكسجين.'},
 'pkg-catalytic-vapor':{title:'باقة التبخير',body:'تنظيف دبة البيئة باستخدام جهاز التبخير.',price:''},
 'pkg-catalytic-foam-cn':{title:'باقة الرغوة · منظف صيني',body:'تنظيف دبة البيئة بمنظف صناعة صينية.'},
 'pkg-catalytic-foam-de':{title:'باقة الرغوة · منظف ألماني',body:'تنظيف دبة البيئة بمنظف صناعة ألمانية.'},
 'catalytic-inspection':{title:'فحص دبة البيئة وتنظيف الحساس',body:'فحص دبة البيئة الواحدة وتنظيف حساس الأكسجين بحسب باقة الفحص.'},
 'catalytic-cleaning':{title:'التبخير أو الرغوة',body:'تتوفر باقات منفصلة للتبخير والرغوة؛ راجع تفاصيل كل باقة وسعرها أدناه.'},
};
