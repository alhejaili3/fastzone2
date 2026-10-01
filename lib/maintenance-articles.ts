// These records are inserted only once; editors can change their text and images in the dashboard.
export const maintenanceArticles=[
 {
  id:'brake-system-care-guide',title:'المسار الفني لصيانة الفرامل وسائلها الهيدروليكي',englishTitle:'A practical guide to brake system and fluid care',category:'cat-electrical',position:6,cover:'/brake-care-editorial.webp',chapterImage:'/brake-care-disc.webp',imageSection:'brake-discs',
  intro:[
   ['عندما تضغط دواسة الفرامل، ينقل السائل الهيدروليكي الضغط إلى المكابح. وفي معظم السيارات يمتص سائل الفرامل المعتمد على الجليكول الرطوبة مع الزمن؛ وقد ينخفض بذلك هامش أمانه الحراري عند الكبح المتكرر.','When you press the brake pedal, hydraulic fluid transfers pressure to the brakes. In most vehicles, glycol-based brake fluid absorbs moisture over time, which can reduce its thermal safety margin during repeated braking.'],
   ['سلامة التوقف لا تتعلق بالسائل وحده. حالة الأقراص والفحمات والكليبر والليات ووحدة مانع الانغلاق تحدد الخطوة الصحيحة بعد الفحص.','Safe stopping depends on more than fluid. The condition of discs, pads, calipers, hoses, and the anti-lock system determines the right service after inspection.'],
  ],
  sections:[
   {id:'brake-signs',title:'إشارات لا ينبغي تأجيل فحصها',englishTitle:'Signs you should not ignore',paragraphs:[
    ['دواسة منخفضة أو إسفنجية، أو انحراف السيارة عند الفرملة، تستدعي فحصًا عاجلًا للتسرب والهواء والاحتكاك غير المتساوي. إذا ضعفت استجابة الفرامل فلا تواصل القيادة.','A low or spongy pedal, or pulling to one side under braking, calls for prompt checks for leaks, trapped air, and uneven friction. If braking response is weak, do not continue driving.'],
    ['ارتجاج المقود أو نبض الدواسة أثناء الفرملة قد يرتبط باختلاف سماكة القرص أو بسطحه، كما قد تؤثر حالة العجلات والتعليق؛ التشخيص يحدد السبب.','Steering-wheel shake or pedal pulsation during braking may relate to disc thickness variation or surface condition; wheels and suspension can also contribute. Testing identifies the cause.'],
    ['لون السائل الداكن يدعو للفحص، لكنه وحده لا يحدد نسبة الماء ولا موعد الاستبدال؛ يُراجع كذلك جدول الشركة ونوع السائل.','Dark fluid warrants inspection, but color alone does not measure water content or set the replacement date. Check the maker’s schedule and fluid specification as well.'],
   ]},
   {id:'brake-fluid-test',title:'01 — افحص السائل قبل أن تتراجع مقاومته للحرارة',englishTitle:'01 — Check fluid before its heat resistance declines',paragraphs:[
    ['يُختبر السائل بأداة مناسبة أو بقياس درجة غليانه، مع مراجعة فترة تغييره المحددة للسيارة. الرطوبة يمكن أن تخفض درجة الغليان وتزيد احتمال تكون بخار قابل للانضغاط عند الفرملة الشديدة.','Use a suitable fluid tester or boiling-point measurement and review the vehicle’s replacement interval. Moisture can lower the boiling point and increase the chance of compressible vapor forming under hard braking.'],
    ['لا توجد قاعدة دقيقة تقول إن كل سائل عند نسبة ماء 3% يفقد 100 درجة مئوية؛ تختلف القيم باختلاف نوع السائل وحالته. وإذا كانت الدواسة إسفنجية فابحث أيضًا عن هواء أو تسرب أو خلل هيدروليكي.','There is no universal rule that 3% water always lowers boiling point by 100°C; the figures depend on the fluid and its condition. A spongy pedal also calls for checks for air, leaks, or hydraulic faults.'],
   ]},
   {id:'brake-bleed',title:'02 — استبدل السائل ونفّس الدائرة بالطريقة المناسبة',englishTitle:'02 — Replace fluid and bleed the system correctly',paragraphs:[
    ['يُستخدم سائل الفرامل بالمواصفة التي تحددها الشركة، ويُستبدل دون السماح بانخفاض مستوى الخزان ودخول الهواء. قد يكون جهاز التنفيس بالضغط مناسبًا، كما تسمح بعض السيارات بالتنفيس اليدوي وفق إجراء الصيانة.','Use the manufacturer-specified brake fluid and replace it without letting the reservoir run low enough to draw in air. Pressure bleeding may be appropriate, and some vehicles also permit manual bleeding under the service procedure.'],
    ['تنفيس وحدة ABS بأوامر جهاز الفحص مطلوب في حالات محددة، مثل دخول الهواء إلى الوحدة أو استبدال بعض مكوناتها، حسب الطراز. تشغيل صماماتها إلكترونيًا ليس خطوة إلزامية لكل تغيير دوري للسائل.','Scan-tool ABS bleeding is needed in specific cases, such as air entering the hydraulic unit or replacement of certain components, depending on the vehicle. Electronically cycling its valves is not mandatory for every routine fluid change.'],
   ]},
   {id:'brake-discs',title:'03 — افحص القرص والفحمات بقياسات واضحة',englishTitle:'03 — Measure discs and pads, do not guess',paragraphs:[
    ['تُقاس سماكة الفحمات والأقراص وتُقارن بالحد الأدنى الخاص بالسيارة. وعند وجود رجفة تُراجع سماكة القرص في عدة مواضع ومقدار انحرافه الجانبي بساعة القياس، مع فحص السطح والمحور.','Pad and rotor thickness are measured against the limits for the vehicle. If there is judder, check disc thickness in several places and lateral runout with a dial indicator, along with the rotor surface and hub.'],
    ['تحدد مواصفات الصانع ما إذا كان القرص يصلح للخراطة أو يجب تغييره. ليست كل رجفة ناتجة عن اعوجاج القرص، لذلك تُفحص العجلات والتعليق عند الحاجة.','Manufacturer specifications determine whether a rotor can be machined or must be replaced. Not every vibration comes from a warped rotor, so wheels and suspension may also need inspection.'],
   ]},
   {id:'brake-caliper',title:'04 — كليبر يتحرك بحرية وفرامل لا تحتك باستمرار',englishTitle:'04 — A free-moving caliper prevents dragging',paragraphs:[
    ['تُراجع مسامير انزلاق الكليبر والجلود الواقية ومكبس الفرامل بحثًا عن الصدأ أو التعليق أو التسرب. الأجزاء التالفة تُستبدل وفق الحالة، مع تنظيف نقاط التلامس المناسبة.','Caliper slide pins, protective boots, and the piston are checked for corrosion, sticking, or leaks. Damaged parts are replaced as needed and suitable contact points cleaned.'],
    ['يُستخدم شحم فرامل متوافق مع الجلود وفي المواضع التي تسمح بها تعليمات القطعة، بعيدًا عن سطح القرص والفحمة. لا يُفترض أن شحم السيراميك والسيليكون مادة واحدة أو يصلح كل منهما لكل موضع.','Use grease compatible with the rubber components only at specified points, away from pad and disc friction surfaces. Ceramic and silicone greases are not identical or interchangeable everywhere.'],
   ]},
   {id:'brake-finish',title:'النتيجة تُثبت بالفحص، لا باسم الإجراء',englishTitle:'Verification matters more than the procedure name',paragraphs:[
    ['بعد الخدمة تُفحص التسربات ومستوى السائل وثبات الدواسة، وتُختبر الفرامل بطريقة آمنة. الهدف معالجة السبب الفعلي والحفاظ على استجابة توقف متوقعة حسب حالة السيارة.','After service, check for leaks, correct fluid level, and a firm pedal, then test the brakes safely. The aim is to fix the actual cause and maintain predictable stopping for that vehicle.'],
   ]},
  ]
 },
 {
  id:'engine-oil-service-guide',title:'المنهج الصحيح لتغيير زيت المحرك ومنظومة التزييت',englishTitle:'A proper approach to engine oil and lubrication service',category:'cat-oils',position:7,cover:'/oil-care-editorial.webp',chapterImage:'/oil-care-filter.webp',imageSection:'oil-filter',
  intro:[
   ['زيت المحرك يقلل الاحتكاك ويحمل الشوائب إلى الفلتر، ويساعد على تبديد الحرارة وحماية الأجزاء المتحركة. وفي بعض المحركات يشارك ضغط الزيت في تشغيل أنظمة توقيت الصمامات المتغيرة.','Engine oil reduces friction, carries contaminants to the filter, and helps move heat away from moving parts. In some engines, oil pressure also operates variable valve timing systems.'],
   ['صيانة الزيت تبدأ بالمواصفة المناسبة وموعد التغيير، ثم تثبت صحتها بالمستوى الصحيح وعدم التسرب. لا يمكن الحكم على حالته من اللون وحده.','Oil service begins with the right specification and interval, then ends with the correct fill level and no leaks. Color alone cannot establish the oil’s condition.'],
  ],
  sections:[
   {id:'oil-signs',title:'متى يحتاج المحرك إلى فحص فوري؟',englishTitle:'When does the engine need immediate attention?',paragraphs:[
    ['صوت غير معتاد عند التشغيل، أو نقص متكرر في المستوى، أو تكتل واضح في الزيت يستدعي فحص السبب. قد يظهر بعض تغير اللون طبيعيًا، لذلك تُراجع توصية المصنع والتاريخ والاستخدام.','An unusual startup noise, recurring oil loss, or obvious sludge calls for investigation. Some color change is normal, so compare the maker’s guidance, service history, and driving conditions.'],
    ['إذا أضاء تحذير ضغط الزيت أثناء تشغيل المحرك، توقف في مكان آمن وأطفئه واتبع دليل السيارة؛ لا تواصل القيادة اعتمادًا على تغيير الزيت فقط.','If the oil-pressure warning appears while the engine is running, stop safely, shut it off, and follow the owner’s manual. Do not keep driving on the assumption that an oil change alone will fix it.'],
   ]},
   {id:'oil-spec',title:'01 — المواصفة أولًا، ثم درجة اللزوجة',englishTitle:'01 — Specification first, then viscosity grade',paragraphs:[
    ['تحقق من درجة اللزوجة والاعتماد المطلوبين في دليل السيارة؛ فكتابة 0W-20 أو 5W-30 وحدها لا تكفي. بعض المحركات الحديثة، ومنها فئات الحقن المباشر والتوربو، تحتاج مواصفات تراعي ظواهر مثل الاشتعال المبكر عند السرعات المنخفضة (LSPI).','Check both the viscosity grade and approval required by the owner’s manual: 0W-20 or 5W-30 alone is not enough. Some modern engines, including certain turbocharged direct-injection designs, need specifications addressing low-speed pre-ignition (LSPI).'],
    ['من التصنيفات المتاحة API SP وILSAC GF-6، كما طُرح API SQ وILSAC GF-7 في 2025. يُختار التصنيف الذي يلبي متطلبات المحرك الفعلية واعتمادات الشركة، لا الأحدث لمجرد أنه أحدث.','Available classifications include API SP and ILSAC GF-6, while API SQ and ILSAC GF-7 were introduced in 2025. Choose an oil that meets the engine’s actual requirements and approvals, not simply the newest label.'],
   ]},
   {id:'oil-drain',title:'02 — تفريغ آمن وفحص ما يظهر أثناء الخدمة',englishTitle:'02 — Safe draining and checking what the service reveals',paragraphs:[
    ['يُفرغ الزيت وفق إجراء الصيانة والمحرك دافئ بدرجة تسمح بالعمل الآمن، مع تجميع السائل المستعمل. تُفحص صرة التصريف وقلاوظها ووردة الإحكام، وتُستبدل الوردة إن نصت تعليمات القطعة على ذلك.','Drain oil according to the service procedure with the engine warm enough for proper flow but safe to work on, collecting the used fluid. Check the drain plug, threads, and sealing washer, replacing the washer where specified.'],
    ['وجود برادة معدنية واضحة أو شذوذ ملحوظ في الزيت يستدعي تشخيصًا؛ لا تحتوي كل سيارة على مغناطيس في الصرة، ولا تكشف معاينة الزيت وحدها عن حالة السبايك والكامات بدقة.','Visible metal debris or abnormal fluid warrants diagnosis. Not every vehicle has a magnetic drain plug, and a visual oil inspection alone cannot precisely assess bearings or camshafts.'],
   ]},
   {id:'oil-filter',title:'03 — فلتر مناسب وإحكام بلا تسرب',englishTitle:'03 — The right filter and a leak-free seal',paragraphs:[
    ['يُختار فلتر مطابق لمواصفات المحرك، مع تركيب جلدة الإحكام وشد الفلتر حسب التعليمات. يختلف تصميم الصمامات الداخلية بين الفلاتر؛ لا يحتوي كل فلتر على صمام منع رجوع، ولا ينبغي افتراض أن وجوده يلغي كل صوت تشغيل بارد.','Choose a filter that meets the engine specification, seat the seal correctly, and tighten it according to instructions. Internal valve designs vary: not every filter has an anti-drainback valve, and its presence does not rule out every cold-start noise.'],
    ['بعد التشغيل يُراجع موضع الفلتر والصرة للتأكد من عدم وجود تسرب، ثم يُفحص المستوى بالطريقة المحددة للسيارة.','After starting the engine, inspect the filter and drain plug for leaks and check the level using the vehicle’s specified method.'],
   ]},
   {id:'oil-level',title:'04 — اضبط المستوى وسجل موعد الخدمة',englishTitle:'04 — Set the level and record the service',paragraphs:[
    ['تُضاف الكمية الموصى بها مع مراعاة سعة الفلتر وتُضبط بين علامتي القياس أو وفق القراءة الإلكترونية المعتمدة؛ الزيادة أو النقصان قد يضران بالتزييت.','Add the recommended amount, accounting for filter capacity, and set the level between the marked limits or using the approved electronic reading. Both overfilling and underfilling can harm lubrication.'],
    ['يُصفَّر مؤشر عمر الزيت إن كانت السيارة مزودة به، ويُسجل نوع الزيت وتاريخ التغيير والمسافة. إعادة ضبط المؤشر لا تغني عن التأكد من المستوى وعدم وجود تسرب.','Reset the oil-life indicator if the vehicle has one, and record the oil type, date, and mileage. Resetting the indicator does not replace a level and leak check.'],
   ]},
   {id:'oil-finish',title:'تغيير الزيت الصحيح خدمة للمحرك كله',englishTitle:'A careful oil change serves the whole engine',paragraphs:[
    ['الالتزام بمواصفة الزيت وموعد التغيير ومراجعة المستوى يساعد على حماية المحرك، بينما تستدعي أصوات التشغيل وتحذيرات الضغط تشخيصًا مستقلًا بدل اعتبار تغيير الزيت علاجًا مضمونًا لها.','Using the correct oil, keeping to the service interval, and checking the level help protect the engine. Startup noise and oil-pressure warnings need their own diagnosis rather than treating an oil change as a guaranteed repair.'],
   ]},
  ]
 },
 {
  id:'preventive-car-care-guide',title:'دليلك للعناية الوقائية بالسيارة',englishTitle:'Your guide to preventive car care',category:'cat-engine',position:8,cover:'/preventive-care-editorial.webp',chapterImage:'/preventive-care-suspension.webp',imageSection:'care-tires',
  intro:[
   ['العناية بالسيارة ليست انتظار العطل ثم إصلاحه. فحص بسيط في موعده قد يكشف تسربًا أو تآكلًا قبل أن يؤثر في يومك وسلامة قيادتك.','Car care is more than waiting for a failure and then fixing it. A timely check can catch a leak or wear before it affects your day and your driving safety.'],
   ['الجدول الأفضل لا ينسخ رقمًا واحدًا لكل السيارات؛ بل يجمع توصيات الصانع مع عمر المركبة وطريقة قيادتها وظروف المناخ.','The best schedule does not copy one mileage number for every car. It combines the manufacturer’s guidance with vehicle age, use, and climate.'],
  ],
  sections:[
   {id:'care-signs',title:'تغيّرات صغيرة تستحق ملاحظة مبكرة',englishTitle:'Small changes worth noticing early',paragraphs:[
    ['صوت جديد عند المطبات، وضعف تدفق هواء المكيف، وتآكل غير متساوٍ للإطارات، أو استهلاك وقود يتغير دون سبب واضح: كلها مؤشرات للفحص، وليست تشخيصًا نهائيًا.','A new noise over bumps, weaker cabin airflow, uneven tire wear, or changing fuel use without an obvious reason are all reasons to inspect, not final diagnoses.'],
    ['سجل الملاحظة ووقت ظهورها بدل تأجيلها؛ تفاصيل بسيطة مثل السرعة أو تشغيل المكيف تساعد الفني على تضييق أسباب المشكلة.','Record what happened and when instead of postponing it. Details such as vehicle speed or air-conditioning use help narrow the possible cause.'],
   ]},
   {id:'care-hoses',title:'01 — حرارة المحرك والكهرباء تبدأ من تفاصيل صغيرة',englishTitle:'01 — Cooling and electrical reliability start with details',paragraphs:[
    ['تُراجع الليات والوصلات والسيور حيث توجد بحثًا عن تشقق أو تسرب أو تآكل، وتُفحص حالة البطارية وأقطابها وثبات التوصيل. بعض السيارات لا تستخدم سيرًا ملحقًا لبعض المكونات، فتتبع قائمة الفحص تصميمها الفعلي.','Inspect hoses, connections, and belts where fitted for cracks, leaks, or wear. Check battery condition, terminals, and connections. Some vehicles use different drive arrangements, so the checklist must match the design.'],
    ['أي ترسب على أقطاب البطارية يُعالج بأمان بعد تحديد سببه. وفقد سائل التبريد المتكرر يحتاج تشخيص مصدره قبل مجرد تعويض النقص.','Corrosion on battery terminals should be addressed safely after finding its cause. Repeated coolant loss calls for finding the leak, not merely topping up.'],
   ]},
   {id:'care-tires',title:'02 — الإطارات والتعليق: ثبات يبدأ من نقاط التلامس',englishTitle:'02 — Tires and suspension: stability starts at the contact points',paragraphs:[
    ['يُفحص ضغط الإطارات وهي باردة وفق ملصق السيارة، وعمق النقشة ونمط التآكل. تدوير الإطارات يساعد على توزيع التآكل إذا سمح مقاسها واتجاهها بذلك؛ يحدد دليل السيارة توقيته، وقد يكون نحو 8,000–10,000 كم عند غياب توجيه خاص.','Check cold tire pressure against the vehicle placard, tread depth, and wear pattern. Rotation can even out wear when tire size and direction allow it. Follow the owner’s schedule; around 8,000–10,000 km may be suitable if no specific interval is given.'],
    ['تُراجع المساعدات والأذرعة والجلود بحثًا عن تسرب أو خلوص أو تلف. ضبط زوايا العجلات يأتي بعد معالجة القطع التالفة، وليس علاجًا لكل تآكل غير منتظم.','Check shocks, control arms, and bushings for leaks, play, or damage. Wheel alignment follows repair of worn parts; it is not a cure for every uneven-wear pattern.'],
   ]},
   {id:'care-air',title:'03 — تنفس أفضل للمحرك والمقصورة',englishTitle:'03 — Cleaner airflow for engine and cabin',paragraphs:[
    ['يُراجع فلتر هواء المحرك وفلتر المقصورة وفق جدول السيارة وحالة الاستخدام. انسداد فلتر المقصورة قد يقلل تدفق الهواء، لكن ضعف التبريد قد ينتج أيضًا عن أسباب أخرى في منظومة التكييف.','Inspect the engine-air and cabin filters according to the vehicle schedule and operating conditions. A clogged cabin filter can reduce airflow, but weak cooling may also have other air-conditioning causes.'],
    ['اختيار فلتر بالمقاس والمواصفة الصحيحين وتركيبه بإحكام يمنع دخول الأتربة من حوله؛ التغيير يكون عند الحاجة أو الموعد، لا وفق لون الفلتر وحده.','Use filters with the correct dimensions and specifications and install them securely to avoid bypass dust. Replace them when needed or scheduled, not simply because of color.'],
   ]},
   {id:'care-schedule',title:'04 — جدول يجمع المسافة والزمن وحالة السوائل',englishTitle:'04 — A schedule that considers distance, time, and fluid condition',paragraphs:[
    ['بعض أعمال الصيانة تُحدد بالمسافة أو الزمن، أيهما يأتي أولًا. راجع الزيت وسائل التبريد والفرامل وسائل التوجيه إن وجد، وتأكد من مواصفات كل منتج قبل الإضافة أو التبديل.','Some services are due by distance or time, whichever comes first. Review engine oil, coolant, brake fluid, and steering fluid where fitted, and check each product specification before topping up or replacing it.'],
    ['احتفظ بسجل للتواريخ والعداد والأعمال المنفذة، ولا تؤجل عيبًا يمس الفرامل أو الإطارات أو ارتفاع حرارة المحرك إلى الموعد الدوري التالي.','Keep a record of dates, odometer readings, and work performed. Do not postpone faults involving brakes, tires, or overheating until the next routine service.'],
   ]},
   {id:'care-finish',title:'خطة تناسب سيارتك تمنحك قرارات أوضح',englishTitle:'A vehicle-specific plan makes decisions clearer',paragraphs:[
    ['الصيانة الوقائية قد تقلل الأعطال المفاجئة وتساعد في الحفاظ على حالة السيارة، لكن نتيجتها وتكلفتها تختلف بحسب الطراز والاستخدام. ابدأ بدليل السيارة ثم استخدم الفحص لتحديد الأولويات.','Preventive maintenance may reduce unexpected faults and help preserve the vehicle’s condition, but outcomes and costs vary by model and use. Start with the owner’s manual, then use inspection to set priorities.'],
   ]},
  ]
 }
] as const;
