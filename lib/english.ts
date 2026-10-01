import {approvedServiceItems,approvedEnglish} from './approved-services';
// English copy for the public site. Content entered in the dashboard can override
// the defaults through the English fields on each record.
import {engineTuneArticle} from './engine-tune-article';
import {catalystArticle} from './catalyst-article';
import {transmissionArticle} from './transmission-article';
import {coolingArticle} from './cooling-article';
import {maintenanceArticles} from './maintenance-articles';
import {deepCleaningService,deepCleaningPackages,serviceFeatures} from './service-content';
import {catalyticOffer,catalyticOfferFeatures} from './catalytic-offer';
export const englishRecords:Record<string,{title?:string,body?:string,price?:string}>={
 'cat-engine':{title:'Engine',body:'Inspection and maintenance of engine components and performance'},
 'cat-oils':{title:'Oils and filters',body:'Oil changes and filter care'},
 'cat-cooling':{title:'Cooling system',body:'Radiator, hoses, and coolant'},
 'cat-exhaust':{title:'Exhaust and emissions',body:'Catalytic converter and exhaust sensors'},
 'cat-steering':{title:'Steering system',body:'Power steering fluid and steering components'},
 'cat-electrical':{title:'Electrical and diagnostics',body:'Battery and electronic diagnostics'},
 'engine-oil':{title:'Engine oil change',body:'Oil and filter change · Tire inspection · Air filter cleaning · Engine air cleaning',price:'Labor: SAR 20'},
 'computer':{title:'Computer diagnostics',body:'Computer fault scan, report delivery, and code clearing',price:'SAR 30'},
 'radiator':{title:'Radiator and cooling service',body:'External and internal hose cleaning packages and cooling system inspection',price:'From SAR 50'},
 'steering':{title:'Power steering fluid change',body:'Power steering fluid change; fluid is not included and is provided by the customer',price:'SAR 50'},
 'catalytic':{title:'Catalytic converter inspection and cleaning',body:'Inspection of one catalytic converter and oxygen sensor cleaning; vapor and foam packages available',price:'From SAR 30'},
 'engine-tune':{title:'Engine tune-up',body:'Engine performance care with inspection and cleaning packages based on your vehicle’s condition',price:'Ask for details'},
 'engine-head':{title:'Cylinder head inspection',body:'Specialist inspection using dedicated diagnostic equipment',price:'SAR 50'},
 'smoke':{title:'Smoke leak detection',body:'Detecting leaks with a smoke machine',price:'SAR 30'},
 'battery':{title:'Battery, alternator, and starter inspection',body:'Testing the starting electrical system with specialized equipment',price:'SAR 30'},
 'pkg-radiator-exterior-basic':{title:'External hoses · Basic',body:'External hose cleaning and cooling system check. Coolant is not included.',price:'SAR 50'},
 'pkg-radiator-exterior-complete':{title:'External hoses · Complete',body:'Full external hose cleaning with American STOP radiator cleaner. Coolant is not included.',price:'SAR 100'},
 'pkg-radiator-interior-basic':{title:'Internal hoses, hybrid and large vehicles · Basic',body:'Internal cooling circuit service. Coolant is not included.',price:'SAR 100'},
 'pkg-radiator-interior-complete':{title:'Internal hoses, hybrid and large vehicles · Complete',body:'Full cleaning with American STOP radiator cleaner. Coolant is not included.',price:'SAR 150'},
 'pkg-catalytic-check':{title:'Catalytic converter inspection',body:'Inspection of one catalytic converter and oxygen sensor cleaning.',price:'SAR 30'},
 'pkg-catalytic-vapor':{title:'Vapor cleaning',body:'Catalytic converter cleaning with a vapor machine.'},
 'pkg-catalytic-foam-cn':{title:'Foam cleaning · Chinese cleaner',body:'Catalytic converter cleaning with a Chinese-made cleaner.',price:'SAR 50'},
 'pkg-catalytic-foam-de':{title:'Foam cleaning · German cleaner',body:'Catalytic converter cleaning with a German-made cleaner.',price:'SAR 80'},
 'oil-guide':{title:'When should you check your engine oil?',body:'Checking your oil level and condition regularly helps you spot changes early. Follow your car manufacturer’s guidance on oil type and service intervals.'},
 'cooling-guide':{title:'Signs your cooling system needs attention',body:'A rising temperature gauge or repeated coolant loss calls for an inspection. Stop safely if the engine overheats, and never open a hot radiator cap.'},
 'oil-guide-check':{title:'Start with the oil level',body:'Check the level with the car on level ground and follow the method in your vehicle manual. If it repeatedly drops, note when you checked it and how much was missing to help the technician diagnose the cause.'},
 'oil-guide-condition':{title:'Notice changes, not just the color',body:'Look for visible leaks, unusual smells, or dashboard warnings. Oil color alone does not always determine its condition; your manufacturer’s specifications, service schedule, and vehicle condition are better guides.'},
 'oil-guide-next':{title:'Know what to do next',body:'Check your manual for the right oil type and change interval. If the oil pressure warning appears while driving, stop in a safe place, turn off the engine, and have the car inspected before continuing.'},
 'cooling-guide-signs':{title:'Watch for early signs',body:'A rising temperature gauge, recurring coolant loss, or a leak beneath the car deserves a cooling system check. Notice when it happens: while idling, on the road, or with the air conditioner running.'},
 'cooling-guide-safety':{title:'Stay safe if the engine overheats',body:'Stop somewhere safe and turn off the engine according to your vehicle’s guidance. Never open a hot radiator or expansion tank cap: pressurized hot coolant may escape.'},
 'cooling-guide-inspect':{title:'Find the cause of repeated coolant loss',body:'Topping up may help temporarily, but it will not fix the underlying cause. Inspecting hoses, connections, the radiator, and the cap with suitable tools helps identify the fault and the next repair step.'}
};

export const englishText:Record<string,string>={
 'تقييمات الموقع':'Website reviews','آراء عملائنا في فاست زون':'What our customers say','تقييمات أرسلها العملاء عبر هذا الموقع، وليست من Google.':'Reviews submitted through this website, not Google.','لا توجد تقييمات منشورة بعد. شاركنا تجربتك وكن أول من يقيّم المركز.':'No published reviews yet. Share your experience and be the first to rate us.','تقييمات فاست زون':'Fast Zone reviews','كيف كانت تجربتك معنا؟':'How was your visit?','اسمك':'Your name','تعليقك':'Your review','تقييمك خاص بموقع فاست زون، ويظهر للزوار بعد مراجعته.':'Your review belongs to the Fast Zone website and appears after moderation.','إرسال التقييم':'Submit review','جارٍ الإرسال':'Submitting…','شكرًا لمشاركتك. سيظهر تقييمك بعد مراجعته.':'Thanks for sharing. Your review will appear after moderation.','اختر عدد النجوم أولًا.':'Choose a star rating first.','كل التقييمات · أضف تقييمك':'All reviews · Add yours','عند إرسال تقييم عبر الموقع، نحفظ الاسم الذي أدخلته وعدد النجوم وتعليقك وتاريخ الإرسال. نراجع التقييم قبل نشره في الموقع.':'When you submit a website review, we store your displayed name, star rating, comment, and submission date. We review it before publication.',

 'باقات':'Packages for','مسار الصفحة':'Breadcrumb','عربي':'Arabic','التبديل إلى العربية':'Switch to Arabic','تفعيل المظهر الفاتح':'Switch to light theme','فاست':'Fast','زون':'Zone','واتساب':'WhatsApp','FAST ZONE · مركز فاست زون لصيانة السيارات':'FAST ZONE · Auto Service Center','FAST ZONE / فاست زون':'FAST ZONE / Auto Service','فاست زون لصيانة السيارات، الرئيسية':'Fast Zone Auto Service, home','موقع المركز على الخريطة':'Center location map','فاست زون':'Fast Zone','لصيانة السيارات':'Auto Service','نعتني بتفاصيل سيارتك':'We care about every detail of your car',
 'الرئيسية':'Home','الخدمات':'Services','النصائح والمقالات':'Advice & articles','الكتالوج':'Catalog','آراء العملاء':'Customer reviews','احجز موعدك':'Book an appointment','القائمة':'Menu',
 'استكشف':'Explore','جميع الخدمات':'All services','كتالوج العروض':'Offers catalog','تواصل معنا':'Contact us','جاهز لخدمة سيارتك':'Ready to care for your car','احجز موعدك بسهولة وسنتواصل معك لتأكيد التفاصيل.':'Book a visit and we will get in touch to confirm the details.','اطلب موعدًا':'Request an appointment','تواصل عبر واتساب ↗':'Contact us on WhatsApp ↗',
 'موقع المركز':'Find us','ننتظرك في فاست زون.':'We look forward to seeing you at Fast Zone.','افتح في خرائط Google':'Open in Google Maps','الخصوصية':'Privacy','شروط الاستخدام':'Terms of use','جميع الحقوق محفوظة.':'All rights reserved.','فاست زون. جميع الحقوق محفوظة.':'Fast Zone. All rights reserved.',
 'عناية أدق. طريق أطول.':'Better care. More miles.','سيارتك في أيدٍ تعرف التفاصيل.':'Your car is in knowledgeable hands.','فحص دقيق، خدمة واضحة، وتجربة صيانة تستحق ثقتك في المدينة المنورة.':'Precise diagnostics, clear service, and car care you can trust in Madinah.','استكشف خدماتنا':'Explore our services','فحص بأجهزة متخصصة':'Specialist diagnostics','خدمة واضحة من البداية':'Clear service from the start','مواعيد تناسب يومك':'Appointments that fit your day','خدماتنا':'Our services','كل ما تحتاجه سيارتك، في مكان واحد.':'Everything your car needs, in one place.','خدمات فحص وصيانة بعناية تهتم بالتفاصيل.':'Thoughtful diagnostics and maintenance, down to the details.','عرض جميع الخدمات ←':'See all services ←','عرض جميع الخدمات':'See all services','وقت سيارتك عندنا محسوب.':'Your time matters to us.','حدد موعدك':'Choose a time','تجارب أُرسلت عبر الموقع.':'Experiences shared through our site.','تجارب أُرسلت عبر الموقع':'Experiences shared through our site','عروض فاست زون':'Fast Zone offers','عروضنا الحالية.':'Current offers.','معلومات تهمك':'Useful information','نصائح ومقالات فاست زون.':'Fast Zone advice and articles.','عرض النصائح والمقالات ←':'See advice and articles ←',
 'خدمات فاست زون':'Fast Zone services','خدمات سيارتك حسب أجزائها.':'Explore services by car system.','اختر جزء السيارة أو اعرض جميع الخدمات والأسعار المبدئية.':'Choose a car system or see all services and starting prices.','تصفح حسب الأقسام':'Browse by category','مشاهدة جميع الباقات والخدمات':'See all packages and services','عرض الخدمات والباقات':'View services and packages','خدمة متاحة':'service available','خدمات متاحة':'services available','جميع النصائح':'All advice','نصائح السيارات':'Car care advice','خدمات السيارات':'Car services','غير مصنف':'Uncategorized','اقرأ النصيحة':'Read article','اسأل عن السعر':'Ask for a price','اطلب التفاصيل':'Ask for details',
 'رجوع إلى الخدمات':'Back to services','إضافة مزيد من الخدمات':'Add more services','اختر ما يناسب سيارتك':'Choose what suits your car','احجز هذه الخدمة':'Book this service','إرسال استفسار عبر واتساب':'Ask on WhatsApp','أضف إلى خدماتي':'Add to my services','أُضيفت إلى خدماتي':'Added to my services','خدماتي':'My services','طلبك':'Your request','خدماتي المختارة':'My selected services','السعر عند الاستفسار':'Price on request','الاسم':'Name','رقم الجوال':'Mobile number','السيارة والموديل':'Car and model','ملاحظات (اختياري)':'Notes (optional)','إرسال خدماتي عبر واتساب':'Send my services on WhatsApp','إغلاق':'Close','لم تختر أي خدمة بعد.':'You have not selected any services yet.','تصفح الخدمات':'Browse services',
 'احجز زيارتك':'Book your visit','طلب حجز موعد صيانة':'Request a service appointment','اختر خدمتك ووقت الزيارة، ثم أرسل التفاصيل عبر واتساب. سيؤكد المركز الموعد معك.':'Choose your service and time, then send the details on WhatsApp. The team will confirm your appointment.','تنبيه وشروط الحجز المسبق':'Advance booking terms','الاسم الكامل':'Full name','نوع وموديل السيارة':'Car make and model','الخدمة المختارة':'Selected service','الباقة (اختياري)':'Package (optional)','تاريخ الحجز':'Appointment date','وقت الموعد':'Appointment time','متبقي':'Remaining','أماكن':'spots','مكان':'spot','مكتمل':'Full','جارٍ تحميل الأوقات...':'Loading available times…','لا توجد أوقات متاحة في هذا اليوم. جرّب تاريخًا آخر.':'No times are available on this date. Try another day.','حدد التاريخ لعرض الأوقات المتاحة.':'Select a date to see available times.','تأكيد وإرسال الحجز عبر واتساب':'Confirm and send via WhatsApp','جارٍ تسجيل الطلب...':'Saving your request…','بعد تسجيل الطلب ستفتح رسالة واتساب جاهزة. اضغط إرسال داخل واتساب لإيصالها إلى المركز.':'After saving your request, WhatsApp will open with a prepared message. Tap Send there to reach the center.','افتح رسالة واتساب مرة أخرى':'Open the WhatsApp message again',
 'أدخل اسمك الكريم':'Your full name','مثال: لكزس ES 2023':'E.g. Lexus ES 2023','اختر الخدمة':'Select a service','اختر الباقة':'Select a package','05xxxxxxxx':'05xxxxxxxx',
 'تعرّف على سيارتك جزءًا بجزء.':'Get to know your car, one system at a time.','نصائح عملية لفهم الصيانة والعناية اليومية بسيارتك.':'Practical advice on maintenance and everyday car care.','رجوع إلى النصائح والمقالات':'Back to advice and articles','تصفح بقية المقالات':'Browse more articles','الفكرة الأساسية':'The main idea','تابع القراءة':'Keep reading','فاست زون · نعتني بتفاصيل سيارتك':'Fast Zone · We care about every detail of your car',
 'فاست زون / العروض':'Fast Zone / offers','تصفّح عروض المركز صفحة بصفحة.':'Explore our offers, page by page.','كتالوج إلكتروني':'Digital catalog','افتح الكتالوج':'Open catalog','سيظهر كتالوج العروض هنا فور نشره من لوحة التحكم.':'Our offers catalog will appear here when published.','الكتالوجات':'Catalogs',
 'تجارب العملاء':'Customer experiences','آراؤكم تصنع الفرق.':'Your feedback matters.','آراء من Google Maps':'Reviews from Google Maps','تجارب منشورة على Google':'Reviews published on Google','اكتب تقييمًا على Google':'Write a review on Google','شاهد التقييم الأصلي على Google':'View the original review on Google','جميع التقييمات ↗':'All reviews ↗','التقييمات المنشورة تجدها مباشرة في صفحة المركز على Google Maps.':'Find published reviews directly on our Google Maps listing.','هذه الآراء مقدمة عبر موقع فاست زون، وليست تقييمات Google.':'These reviews were submitted through Fast Zone’s website, not Google.','لا توجد تقييمات مرتبطة بالمركز بعد.':'No reviews are linked to the center yet.',
 'أكمل بياناتك، ثم راجع الرسالة وأرسلها بنفسك عبر واتساب. الموعد يُؤكد بعد رد المركز.':'Complete your details, then review and send the WhatsApp message yourself. Your appointment is confirmed after our team responds.',
 'أرجو التواصل معي لتأكيد التفاصيل والموعد.':'Please contact me to confirm the details and appointment.',
 'اختر خدمة واحدة على الأقل.':'Select at least one service.','رقم واتساب المركز غير مهيأ بعد.':'Our WhatsApp number is not configured yet.','فُتحت رسالة واتساب. اضغط إرسال داخل واتساب لإتمام الطلب.':'WhatsApp opened with your message. Tap Send there to complete your request.',
 'اختر وقتًا متاحًا أولًا.':'Select an available time first.','سُجل الطلب بانتظار تأكيد المركز.':'Your request has been saved and awaits confirmation.','سُجل طلبك. افتح واتساب وأرسل الرسالة ليصل إلى المركز؛ تأكيد الموعد يتم بعد رد الفريق.':'Your request is saved. Send the WhatsApp message to reach the center. The team will confirm your appointment.',
 'تعذر تحميل المواعيد':'Unable to load available times','تعذر إرسال الطلب':'Unable to send your request','تعذر تسجيل الطلب':'Unable to save your request','تصفية الخدمات حسب جزء السيارة':'Filter services by car system','تصفية النصائح حسب جزء السيارة':'Filter articles by car system','طريقة تصفح الخدمات':'How to browse services','الوقت المفضل':'Preferred time',
 'تقييمات Google Maps، عند تفعيل الربط، محتوى منشور من أصحابها على Google وليس من تأليف المركز. يمكن الاطلاع على كل تقييم من رابطه الأصلي. يخضع استخدام خرائط Google وتقييماتها إلى':'Google Maps reviews, when enabled, are posted by their authors on Google and are not written by the center. Each review links to its original. Google Maps and reviews are governed by',
 'المعلومات والأسعار المعروضة تصف الخدمات مبدئيًا، وقد تتطلب حالة السيارة فحصًا وتأكيدًا من المركز. إرسال طلب موعد أو رسالة واتساب لا يعني تأكيد الحجز حتى يرد المركز.':'The services and prices shown are preliminary. Your vehicle may need an inspection and confirmation by the center. Sending an appointment request or WhatsApp message does not confirm the booking until we reply.',
 'شروط خدمة خرائط Google':'Google Maps Terms of Service','شروط Google':'Google Terms',
 'عند تقديم طلب موعد، نحفظ الاسم ورقم الجوال والسيارة والخدمة والوقت المختار للرد على الطلب. تحتفظ قائمة «خدماتي» باختياراتك في هذا المتصفح حتى تتمكن من إكمال طلبك.':'When you request an appointment, we save your name, mobile number, vehicle, service, and chosen time so we can respond. Your selections in “My services” are stored in this browser until you complete your request.',
 'عند فتح واتساب أو خرائط Google، تنتقل إلى خدمات مستقلة تخضع لسياساتها. إذا فُعّل عرض تقييمات Google، يعرض الموقع بيانات التقييم القادمة من Google Maps مع روابطها الأصلية ولا ينشئ نسخًا منها في قاعدة بياناته. راجع':'WhatsApp and Google Maps are separate services governed by their own policies. If Google reviews are enabled, this site displays review data from Google Maps with links to the originals and does not store copies in its database. See',
 'سياسة خصوصية Google':'Google Privacy Policy','لمعرفة طريقة تعامل Google مع البيانات.':'for how Google handles data.','للاستفسار عن بيانات طلبك أو طلب تصحيحها، تواصل مع المركز عبر رقم الاتصال المدرج في الموقع.':'To ask about your request data or correct it, contact the center using the phone number shown on this site.',
 'التقييمات المعروضة من Google، مرتّبة حسب الأكثر صلة. يعرض Google عددًا محدودًا من التقييمات هنا؛ اضغط لقراءة جميع التقييمات على خرائط Google.':'Reviews shown here come from Google and are sorted by relevance. Google provides a limited selection here; open Maps to read them all.',
 'اسحب للتقليب على الجوال أو استخدم الأسهم للتنقل بين الصفحات.':'Swipe on mobile or use the arrows to browse pages.','جارٍ تجهيز صفحات الكتالوج...':'Preparing catalog pages…','الصفحة التالية':'Next page','الصفحة السابقة':'Previous page','فتح الملف':'Open file','انتقل بين صفحات الكتالوج':'Browse catalog pages','جارٍ التحميل':'Loading…',
 'تخطي المقدمة':'Skip introduction','فحص دقيق':'Precise diagnostics','صيانة متقنة':'Expert maintenance','عناية بكل تفصيلة':'Attention to every detail',
 'إزالة':'Remove','إرسال':'Send','إضافة':'Add',
 'المدينة المنورة – العزيزية – طريق الملك خالد (الدائري الثالث) – محطة شموخ':'Madinah · Al Aziziyah · King Khalid Road (Third Ring Road) · Shumukh Station','يوميًا من 9:30 صباحًا حتى 9:30 مساءً':'Daily, 9:30 a.m. to 9:30 p.m.',
 'سنتواصل معك لتأكيد الموعد. إرسال الطلب لا يعني تأكيد الحجز.':'We will contact you to confirm the time. Submitting a request does not confirm the appointment.',
 'نعتني بكل تفصيلة قبل أن تعود إلى الطريق.':'We care for every detail before you get back on the road.',
 'بيانات التحويل البنكي (عربون / رسوم حجز)':'Bank transfer details (deposit / booking fee)',
 'نرجو التشرف للمركز مباشرة للخدمة بشكل أسرع، وتأكيد الموعد المحجوز يخضع لجدول التوفر وضغط العمل داخل الورشة.':'You are welcome to visit the center directly for faster service. Appointments depend on availability and workshop workload.',
 'الحضور قبل الموعد بـ 15 دقيقة على الأقل.':'Please arrive at least 15 minutes before your appointment.',
 'يتطلب الحجز المسبق مهلة 30 دقيقة على الأقل قبل الموعد.':'Advance bookings require at least 30 minutes’ notice.',
 'في حال التأخر أكثر من 20 دقيقة، يلغى الموعد تلقائيًا ويعاد جدولته حسب التوفر.':'If you are more than 20 minutes late, your appointment may be canceled and rescheduled subject to availability.',
 'يرجى إحضار استمارة السيارة عند الحضور.':'Please bring your vehicle registration.',
 'المستفيد':'Beneficiary','البنك':'Bank','رقم الحساب':'Account number','الآيبان (IBAN)':'IBAN',
};

// Register every paragraph separately because the editorial renderer creates one text node per paragraph.
englishRecords[engineTuneArticle.id]={title:engineTuneArticle.englishTitle,body:engineTuneArticle.intro.map(([,en])=>en).join('\n\n')};
englishText[engineTuneArticle.title]=engineTuneArticle.englishTitle;
for(const [ar,en] of engineTuneArticle.intro)englishText[ar]=en;
for(const section of engineTuneArticle.sections){
 englishRecords[section.id]={title:section.englishTitle,body:section.paragraphs.map(([,en])=>en).join('\n\n')};
 englishText[section.title]=section.englishTitle;
 for(const [ar,en] of section.paragraphs)englishText[ar]=en;
}
englishRecords[catalystArticle.id]={title:catalystArticle.englishTitle,body:catalystArticle.intro.map(([,en])=>en).join('\n\n')};
englishText[catalystArticle.title]=catalystArticle.englishTitle;
for(const [ar,en] of catalystArticle.intro)englishText[ar]=en;
for(const section of catalystArticle.sections){
 englishRecords[section.id]={title:section.englishTitle,body:section.paragraphs.map(([,en])=>en).join('\n\n')};
 englishText[section.title]=section.englishTitle;
 for(const [ar,en] of section.paragraphs)englishText[ar]=en;
}
englishRecords[transmissionArticle.id]={title:transmissionArticle.englishTitle,body:transmissionArticle.intro.map(([,en])=>en).join('\n\n')};
englishText[transmissionArticle.title]=transmissionArticle.englishTitle;
for(const [ar,en] of transmissionArticle.intro)englishText[ar]=en;
for(const section of transmissionArticle.sections){
 englishRecords[section.id]={title:section.englishTitle,body:section.paragraphs.map(([,en])=>en).join('\n\n')};
 englishText[section.title]=section.englishTitle;
 for(const [ar,en] of section.paragraphs)englishText[ar]=en;
}
englishRecords[coolingArticle.id]={title:coolingArticle.englishTitle,body:coolingArticle.intro.map(([,en])=>en).join('\n\n')};
englishText[coolingArticle.title]=coolingArticle.englishTitle;
for(const [ar,en] of coolingArticle.intro)englishText[ar]=en;
for(const section of coolingArticle.sections){
 englishRecords[section.id]={title:section.englishTitle,body:section.paragraphs.map(([,en])=>en).join('\n\n')};
 englishText[section.title]=section.englishTitle;
 for(const [ar,en] of section.paragraphs)englishText[ar]=en;
}

for(const article of maintenanceArticles){
 englishRecords[article.id]={title:article.englishTitle,body:article.intro.map(([,en])=>en).join('\n\n')};
 englishText[article.title]=article.englishTitle;
 for(const [ar,en] of article.intro)englishText[ar]=en;
 for(const section of article.sections){
  englishRecords[section.id]={title:section.englishTitle,body:section.paragraphs.map(([,en])=>en).join('\n\n')};
  englishText[section.title]=section.englishTitle;
  for(const [ar,en] of section.paragraphs)englishText[ar]=en;
 }
}
englishRecords[deepCleaningService.id]={title:deepCleaningService.englishTitle,body:deepCleaningService.englishBody,price:deepCleaningService.englishPrice};
for(const p of deepCleaningPackages)englishRecords[p.id]={title:p.englishTitle,body:p.englishBody,price:p.englishPrice};
for(const feature of serviceFeatures)englishRecords[feature.id]={title:feature.englishTitle,body:feature.englishBody};
englishRecords[catalyticOffer.service.id]={title:catalyticOffer.service.englishTitle,body:catalyticOffer.service.englishBody,price:catalyticOffer.service.englishPrice};
for(const p of catalyticOffer.packages){
 englishRecords[p.id]={title:p.englishTitle,body:p.englishBody,price:p.englishPrice};
 for(const [i,line] of p.body.split('\n').entries())englishText[line]=p.englishBody.split('\n')[i];
}
for(const feature of catalyticOfferFeatures){
 englishRecords[feature.id]={title:feature.englishTitle,body:feature.englishBody};
 englishText[feature.title]=feature.englishTitle;
 englishText[feature.body]=feature.englishBody;
}
Object.assign(englishText,{
 'ماذا تشمل هذه الخدمة؟':'What does this service include?',
 'أعمال الخدمة':'Service features',
 'خدمة إضافية برسوم':'Additional service, extra charge',
 'نطاق العمل يحدد حسب فحص السيارة ومواصفات أجزائها.':'The scope is determined by inspecting the vehicle and its components.',
 'إضافة مميزات هذه الخدمة من لوحة التحكم.':'Add this service’s features in the dashboard.',
 'خدمات التنظيف الشامل':'Comprehensive cleaning services'
 ,'باقات عرض خدمات التنظيف الشامل':'Comprehensive cleaning packages',
 'الأسعار للدبة الواحدة. يحدد الفحص مدى ملاءمة التنظيف لحالة الدبة.':'Prices are for one catalytic converter. Inspection determines whether cleaning is suitable.'
});
for(const item of approvedServiceItems){
 const en=approvedEnglish[item.id];englishRecords[item.id]=en;
 for(const key of ['title','body','price'] as const){if(item[key]&&en[key]){englishText[item[key]]=en[key];const arLines=item[key].split('\n'),enLines=en[key].split('\n');if(arLines.length===enLines.length)arLines.forEach((line,i)=>englishText[line]=enLines[i]);}}
}
Object.assign(englishText,{'ملاحظات الخدمة':'Service notes','خدمات إضافية برسوم':'Additional services','عرض الخدمة المعتمد':'Approved service offer','عرض الإعلان كاملًا':'View full service poster','اسأل عن السعر قبل التنفيذ':'Ask for the price before work','السعر لا يشمل الخدمات الإضافية':'Additional services are excluded'});
Object.assign(englishText,{'كتالوجات فاست زون':'Fast Zone catalogues','فاست زون / الكتالوجات':'Fast Zone / Catalogues','تصفّح الخدمات والعروض صفحة بصفحة.':'Browse services and offers, page by page.','انتقل إلى الصفحة':'Go to page','انتقال':'Go','كتالوج خدمات فاست زون':'Fast Zone service catalogue','تصفح خدمات المركز وباقاته في كتالوج من 15 صفحة.':'Browse the center’s services and packages in a 15-page catalogue.'});
Object.assign(englishText,{'تقليب إلى الصفحة السابقة':'Turn to the previous page','تقليب إلى الصفحة التالية':'Turn to the next page','السابق':'Previous','التالي':'Next','اضغط على طرف الصفحة للتقليب، أو اسحب على الجوال.':'Click a page edge to turn, or swipe on mobile.'});
const replacements:[RegExp,string][]=[
 [/^باقات (.+)$/,'Packages for $1'],[/^من (\d+) تقييمًا على Google$/,'From $1 Google reviews'],[/^(\d+) (خدمات|نصائح)$/,'$1 results'],[/^(\d+) خدمة متاحة$/,'$1 service available'],[/^(\d+) خدمات متاحة$/,'$1 services available'],[/^متبقي (\d+) (مكان|أماكن)$/,'$1 spots remaining'],[/^© (\d+) فاست زون\. جميع الحقوق محفوظة\.$/,'© $1 Fast Zone. All rights reserved.'],[/^قائمة الخدمات المختارة: (\d+)$/,'Selected services: $1'],[/^تواصل مع فاست زون عبر واتساب$/,'Contact Fast Zone on WhatsApp'],[/^خدماتي (\d+)$/,'My services $1'],[/^(.+) ريال$/,'SAR $1'],[/^تبدأ من (\d+) ريال$/,'From SAR $1']
];
export function englishFor(text:string,custom:Record<string,string>):string{if(custom[text])return custom[text];if(englishText[text])return englishText[text];if(text.includes('\n')){const result=text.split('\n').map(line=>englishFor(line.trim(),custom)).join('\n');if(result!==text)return result;}for(const [re,out] of replacements)if(re.test(text))return text.replace(re,out);return text}
