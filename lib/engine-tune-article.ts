// New editorial content is seeded once and remains fully editable in the dashboard.
export const engineTuneArticle={
 id:'engine-tune-guide',
 title:'متى يحتاج محرك سيارتك إلى التصفية الشاملة؟',
 englishTitle:'When does your engine need a complete tune-up?',
 intro:[
  ['قبل أن تظهر لمبة فحص المحرك، قد تلاحظ أن السيارة لم تعد تستجيب كما اعتدت. أحيانًا تبدأ القصة بتردد بسيط عند التسارع، أو اهتزاز خفيف عند التوقف.','Before the check engine light comes on, you may notice that the car no longer responds as it used to. Sometimes it begins with slight hesitation during acceleration or a mild vibration at a stop.'],
  ['هذه الإشارات تستحق فحصًا منظمًا، لكنها لا تثبت وحدها أن المحرك يحتاج إلى كل خطوات التصفية. التشخيص هو ما يحدد الجزء الذي يحتاج إلى تدخل.','These signs deserve a systematic inspection, but they do not by themselves prove that every tune-up step is needed. Diagnosis identifies which part needs attention.'],
 ],
 sections:[
  {id:'engine-tune-signs',title:'الإشارات: ماذا تلاحظ أثناء القيادة؟',englishTitle:'The signs: what do you notice while driving?',paragraphs:[
   ['ثقل أو تردد في استجابة دواسة الوقود، خصوصًا عند التسارع أو صعود المرتفعات.','A heavy or hesitant throttle response, especially while accelerating or climbing hills.'],
   ['تذبذب دورات المحرك (RPM) أو اهتزاز محسوس في المقود ومقصورة القيادة أثناء الوقوف في وضع الخمول.','Fluctuating engine speed (RPM) or vibration felt through the steering wheel and cabin while idling.'],
   ['زيادة تدريجية في استهلاك الوقود رغم ثبات مسارات القيادة، أو تأخر التشغيل صباحًا وبعد التوقف القصير.','Fuel use gradually rising despite similar trips, or slower starting in the morning or after a short stop.'],
   ['قد تنتج هذه الأعراض أيضًا عن أعطال أخرى؛ لذلك نبدأ بقراءة بيانات السيارة وفحصها قبل اتخاذ قرار التنظيف أو استبدال أي قطعة.','Other faults can cause the same symptoms. We start by checking the vehicle and its diagnostic data before deciding to clean or replace anything.'],
  ]},
  {id:'engine-tune-air',title:'01 — مسار الهواء: قياس دقيق قبل أي تنظيف',englishTitle:'01 — Airflow: measure before cleaning',paragraphs:[
   ['تُفحص بوابة الهواء (الثروتل) ومجرى السحب بحثًا عن الرواسب والتسربات، وتُنظف البوابة بالطريقة والمواد المناسبة لتصميمها، مع الحرص على عدم إتلاف سطحها أو أجزائها الحساسة.','The throttle body and intake path are checked for deposits and leaks. The throttle body is cleaned with a method and product suitable for its design, taking care not to damage sensitive surfaces or parts.'],
   ['إذا أظهرت القراءة حاجة حساس تدفق الهواء (MAF) إلى التنظيف، يُستخدم منظف مخصص سريع التبخر دون لمس عنصر القياس. الهدف استعادة قراءة هواء دقيقة والمساعدة على ثبات دوران المحرك.','If diagnostics show that the mass airflow sensor (MAF) needs cleaning, a dedicated fast-evaporating cleaner is used without touching its sensing element. The aim is an accurate airflow reading and steadier idle.'],
  ]},
  {id:'engine-tune-fuel',title:'02 — حواقن الوقود: هل الرش متوازن؟',englishTitle:'02 — Fuel injectors: is the spray balanced?',paragraphs:[
   ['عندما يشير الفحص إلى مشكلة في البخاخات، يمكن اختبار نمط الرش وتوازن التدفق والتسرب وفق نوع نظام الحقن. وبعد ذلك يُختار التنظيف المناسب، بما فيه الموجات فوق الصوتية للبخاخات التي تلائمها هذه الطريقة.','When diagnostics point to the injectors, spray pattern, flow balance, and leakage can be tested according to the injection system. The appropriate cleaning method can then be selected, including ultrasonic cleaning for compatible injectors.'],
   ['انتظام الرش يساعد على مزج الوقود بالهواء كما ينبغي. أما ضعف الرش أو تقطيره فقد يرتبط بتقطيع الأداء واستهلاك وقود أعلى؛ وتؤكد المقارنة قبل الخدمة وبعدها نتيجة التدخل.','A consistent spray helps fuel mix with air as intended. Poor atomization or dripping may be associated with rough performance and increased fuel use; comparing the results before and after service helps verify the outcome.'],
  ]},
  {id:'engine-tune-ignition',title:'03 — الإشعال: شرارة مناسبة تحت الحمل',englishTitle:'03 — Ignition: the right spark under load',paragraphs:[
   ['تُفحص شمعات الإشعال ونوعها وحالتها وخلوصها حسب مواصفات السيارة. إذا استدعى النوع ضبط الخلوص، يُستخدم أسلوب لا يضر القطب الدقيق؛ وعند التركيب يُراعى عزم الشد الموصى به.','Spark plugs are checked for the correct type, condition, and gap specified for the vehicle. If the plug type requires adjustment, a method that protects the fine electrode is used; installation follows the recommended torque.'],
   ['تُفحص الكويلات وعوازلها بحثًا عن آثار تهريب الجهد أو التلف. ويُستخدم شحم عازل مناسب فقط في المواضع التي توصي بها تعليمات الصيانة، بعد معالجة سبب الخلل.','Coils and their insulating boots are inspected for signs of voltage leakage or damage. Suitable dielectric grease is used only where service instructions recommend it, after the underlying fault is addressed.'],
  ]},
  {id:'engine-tune-carbon',title:'04 — الكربون والتعلّم الإلكتروني: الخطوة الأخيرة',englishTitle:'04 — Carbon and electronic relearning: the final step',paragraphs:[
   ['إذا كشف الفحص عن ترسبات مؤثرة، تُختار طريقة تنظيف صمامات السحب أو أجزاء مجرى الاحتراق بحسب تصميم المحرك وموضع الرواسب. لا تتطلب كل سيارة إزالة التكلسات أو تفكيك المكونات.','If inspection finds deposits that affect operation, a cleaning method for the intake valves or relevant combustion-path components is chosen according to engine design and deposit location. Not every car needs carbon removal or component disassembly.'],
   ['بعد إصلاح السبب، قد تحتاج بعض السيارات إلى إعادة تعلّم وضع الخمول أو قيم الوقود وفق إجراء الشركة المصنعة. تصفير القيم ليس خطوة تلقائية لكل سيارة، ولا يغني عن التأكد من زوال العطل.','After the cause is repaired, some vehicles may need an idle or fuel-trim relearn according to the manufacturer’s procedure. Resetting learned values is not an automatic step for every car and cannot replace confirming that the fault is resolved.'],
  ]},
  {id:'engine-tune-outcome',title:'التصفية الصحيحة تبدأ بالفحص وتنتهي بالتحقق',englishTitle:'A proper tune-up starts with diagnosis and ends with verification',paragraphs:[
   ['التصفية الشاملة ليست قائمة أعمال ثابتة تُنفذ على كل محرك. نحدد ما تحتاجه السيارة من نتائج الفحص، ثم نتحقق من سلاسة الأداء واستقرار الخمول بعد الخدمة.','A complete tune-up is not a fixed checklist for every engine. Inspection determines what the car needs, and performance and idle stability are checked after the work.'],
   ['الاهتمام المبكر بالأعراض قد يحد من تفاقم المشكلة، لكن استعادة العزم أو خفض استهلاك الوقود تتوقف على السبب الفعلي وحالة السيارة. اطلب تشخيصًا واضحًا قبل الموافقة على أي إجراء.','Early attention to symptoms may help prevent a problem from worsening, but restored power or lower fuel use depends on the actual cause and the vehicle’s condition. Ask for a clear diagnosis before approving work.'],
  ]},
 ]
} as const;
