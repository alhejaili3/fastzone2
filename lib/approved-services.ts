import {transmissionServiceItems,transmissionServiceEnglish} from "./transmission-service";
import type {Item} from "./site";
export const approvedServiceItems:Item[]=[
 ...transmissionServiceItems,
 {
  "kind": "category",
  "id": "cat-brakes",
  "title": "الفرامل والإطارات",
  "body": "العناية بالفرامل وحساسات الإطارات",
  "price": "",
  "meta": "general",
  "image": "",
  "position": 6,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "engine-flush",
  "title": "غسيل الماكينة بالأجهزة",
  "body": "تنظيف ممرات زيت المحرك من الرواسب باستخدام أجهزة مخصصة، ثم استبدال الزيت والفلتر وفق حالة المحرك ومواصفات السيارة.",
  "price": "تبدأ من 50 ريال",
  "meta": "cat-oils",
  "image": "/oil-care-editorial.webp",
  "position": 10,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "engine-flush-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "engine-flush",
  "image": "/approved-engine-flush.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-flush-approved-feature-0",
  "title": "تنظيف ممرات الزيت",
  "body": "إزالة الرواسب والملوثات القابلة للتنظيف من ممرات الزيت بعد تقييم حالة المحرك.",
  "price": "",
  "meta": "engine-flush",
  "image": "/oil-care-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-flush-approved-feature-1",
  "title": "تغيير الزيت والفلتر",
  "body": "استبدال زيت المحرك والفلتر بالكامل بعد التنظيف. يوفرهما العميل، ويمكن الاستفسار عن المنتجات المتاحة لدى المركز.",
  "price": "",
  "meta": "engine-flush",
  "image": "/oil-care-filter.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-flush-approved-feature-2",
  "title": "عناية بالأجزاء الداخلية",
  "body": "يساعد الزيت النظيف والمطابق للمواصفات على تقليل الاحتكاك ودعم كفاءة تشغيل المحرك.",
  "price": "",
  "meta": "engine-flush",
  "image": "/engine-tune-editorial.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-flush-approved-package-0",
  "title": "الباقة الأساسية",
  "body": "غسيل الماكينة\nغير شاملة مادة التنظيف\nالزيت والفلتر يوفرهما العميل",
  "price": "50 ريال",
  "meta": "engine-flush",
  "image": "/oil-care-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-flush-approved-package-1",
  "title": "الباقة الشاملة",
  "body": "غسيل الماكينة\nشاملة مادة التنظيف\nالزيت والفلتر يوفرهما العميل",
  "price": "100 ريال",
  "meta": "engine-flush",
  "image": "/oil-care-filter.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_extra",
  "id": "engine-flush-extra-8",
  "title": "تنظيف الشخال وفك الكرتير",
  "body": "خدمات إضافية برسوم تُحدد قبل التنفيذ.",
  "price": "",
  "meta": "engine-flush",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "engine-flush-note-9",
  "title": "الزيوت والمواد المتاحة",
  "body": "تتوفر زيوت ومواد تنظيف وفلاتر من عدة شركات عالمية بأسعار مختلفة.",
  "price": "",
  "meta": "engine-flush",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "brake-fluid",
  "title": "تغيير زيت الفرامل بالأجهزة",
  "body": "تجديد سائل الفرامل وتفريغ الهواء من الخطوط باستخدام أجهزة مخصصة، مع مراعاة مواصفات سائل الفرامل وإجراءات الصانع.",
  "price": "تبدأ من 50 ريال",
  "meta": "cat-brakes",
  "image": "/brake-care-editorial.webp",
  "position": 11,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "brake-fluid-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "brake-fluid",
  "image": "/approved-brake-fluid.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "brake-fluid-approved-feature-0",
  "title": "استبدال السائل القديم",
  "body": "استبدال زيت الفرامل القديم وتجديد السائل في مسارات المنظومة.",
  "price": "",
  "meta": "brake-fluid",
  "image": "/brake-care-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "brake-fluid-approved-feature-1",
  "title": "تفريغ الهواء",
  "body": "تفريغ الهواء من خطوط الفرامل لدعم استجابة الدواسة وفق إجراءات السيارة.",
  "price": "",
  "meta": "brake-fluid",
  "image": "/brake-care-disc.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "brake-fluid-approved-feature-2",
  "title": "حماية المنظومة",
  "body": "يساعد السائل المطابق للمواصفات على الحد من التآكل والصدأ؛ تُقيّم كفاءة الفرامل بالفحص.",
  "price": "",
  "meta": "brake-fluid",
  "image": "/brake-care-editorial.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "brake-fluid-approved-package-0",
  "title": "الباقة الأساسية",
  "body": "تغيير زيت الفرامل\nالسعر غير شامل الزيت",
  "price": "50 ريال",
  "meta": "brake-fluid",
  "image": "/brake-care-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "brake-fluid-approved-package-1",
  "title": "الباقة الشاملة",
  "body": "تغيير زيت الفرامل\nتشمل 4 علب زيت فرامل",
  "price": "تبدأ من 100 ريال",
  "meta": "brake-fluid",
  "image": "/brake-care-disc.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_extra",
  "id": "brake-fluid-extra-17",
  "title": "باقة فحوصات إضافية",
  "body": "برمجة زيت الفرامل بالكمبيوتر\nفحص الهوبات بالجهاز\nفحص الإطارات بالجهاز\nفحص الأقمشة بالجهاز",
  "price": "70 ريال",
  "meta": "brake-fluid",
  "image": "/brake-care-disc.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "brake-fluid-note-18",
  "title": "اختيار سائل الفرامل",
  "body": "تتوفر زيوت فرامل من عدة شركات عالمية؛ يختار النوع المطابق لمواصفات السيارة.",
  "price": "",
  "meta": "brake-fluid",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "radiator",
  "title": "تنظيف الرديتر بالأجهزة",
  "body": "تنظيف الرديتر وإزالة الرواسب والشوائب وتجديد سائل التبريد، ضمن باقات تختلف بحسب مسارات الدورة ونوع السيارة.",
  "price": "تبدأ من 50 ريال",
  "meta": "cat-cooling",
  "image": "/cooling-editorial.webp",
  "position": 12,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "radiator-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "radiator",
  "image": "/approved-radiator.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "radiator-approved-feature-0",
  "title": "إزالة الرواسب والشوائب",
  "body": "تنظيف الرواسب القابلة للإزالة بالطريقة المناسبة للرديتر ودورة التبريد.",
  "price": "",
  "meta": "radiator",
  "image": "/cooling-flush.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "radiator-approved-feature-1",
  "title": "تجديد سائل التبريد",
  "body": "استبدال السائل واختيار النوع والتركيز المطابقين لمواصفات السيارة.",
  "price": "",
  "meta": "radiator",
  "image": "/cooling-fill.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "radiator-approved-feature-2",
  "title": "دعم كفاءة التبريد",
  "body": "يساعد تنظيف المسارات وتجديد السائل المناسب على حماية المنظومة من التآكل ودعم انتقال الحرارة.",
  "price": "",
  "meta": "radiator",
  "image": "/cooling-editorial.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "radiator-approved-package-0",
  "title": "الليات الخارجية · الأساسية",
  "body": "استبدال سائل التبريد\nغير شاملة سائل التبريد",
  "price": "50 ريال",
  "meta": "radiator",
  "image": "/cooling-fill.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "radiator-approved-package-1",
  "title": "الليات الخارجية · الشاملة",
  "body": "تنظيف الرديتر وتبديل السائل\nمنظف رديتر STOP أمريكي\nغير شاملة سائل التبريد",
  "price": "100 ريال",
  "meta": "radiator",
  "image": "/cooling-flush.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "radiator-approved-package-2",
  "title": "الليات الداخلية والهايبرد والسيارات الكبيرة · الأساسية",
  "body": "استبدال سائل التبريد\nغير شاملة سائل التبريد",
  "price": "100 ريال",
  "meta": "radiator",
  "image": "/cooling-fill.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "radiator-approved-package-3",
  "title": "الليات الداخلية والهايبرد والسيارات الكبيرة · الشاملة",
  "body": "تنظيف الرديتر وتبديل السائل\nمنظف رديتر STOP أمريكي\nغير شاملة سائل التبريد",
  "price": "150 ريال",
  "meta": "radiator",
  "image": "/cooling-flush.webp",
  "position": 3,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "radiator-note-28",
  "title": "سائل التبريد غير مشمول",
  "body": "جميع الباقات غير شاملة سائل التبريد. تتوفر سوائل تبريد ومواد تنظيف من عدة شركات عالمية بأسعار مختلفة.",
  "price": "",
  "meta": "radiator",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "tpms",
  "title": "فحص وبرمجة حساسات ضغط الإطارات",
  "body": "فحص حساسات ضغط الإطارات وقراءة حالتها، مع خيارات لتوفير حساسات LAUNCH وبرمجتها بحسب توافق السيارة.",
  "price": "تبدأ من 50 ريال",
  "meta": "cat-brakes",
  "image": "/approved-tpms.webp",
  "position": 13,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "tpms-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "tpms",
  "image": "/approved-tpms.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "tpms-approved-feature-0",
  "title": "فحص حساسات الإطارات",
  "body": "فحص حساسات ضغط الإطارات كاملة والتأكد من استجابة الحساسات.",
  "price": "",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "tpms-approved-feature-1",
  "title": "قراءة حالة الحساسات",
  "body": "قراءة حالة الحساسات لتحديد الحاجة إلى البرمجة أو الاستبدال.",
  "price": "",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "tpms-approved-feature-2",
  "title": "برمجة الحساسات الجديدة",
  "body": "برمجة الحساسات الجديدة وربطها بالسيارة وفق النظام المتوافق.",
  "price": "",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "tpms-approved-package-0",
  "title": "فحص الإطارات كاملة",
  "body": "الأسعار لا تشمل التركيب",
  "price": "50 ريال",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "tpms-approved-package-1",
  "title": "حساس + برمجة",
  "body": "الأسعار لا تشمل التركيب",
  "price": "70 ريال",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "tpms-approved-package-2",
  "title": "أربع حساسات + برمجة",
  "body": "الأسعار لا تشمل التركيب",
  "price": "240 ريال",
  "meta": "tpms",
  "image": "/preventive-care-suspension.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "tpms-note-37",
  "title": "التركيب والضمان",
  "body": "الأسعار لا تشمل التركيب. الحساسات أصلية من شركة LAUNCH، مع ضمان لمدة سنة.",
  "price": "",
  "meta": "tpms",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "petrol-cleaning",
  "title": "خدمات تنظيف سيارات البنزين",
  "body": "باقة متكاملة للعناية بمسارات الهواء والوقود والعادم، مع الفحص والتهيئة المناسبة بحسب حالة السيارة ونوع محركها.",
  "price": "تبدأ من 200 ريال",
  "meta": "cat-engine",
  "image": "/deep-cleaning-machine.webp",
  "position": 14,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "petrol-cleaning-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/approved-petrol-cleaning.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-0",
  "title": "تنظيف الثروتل (بوابة الهواء)",
  "body": "تنظيف الرواسب حول بوابة الهواء بالطريقة المناسبة لتصميمها، مع حماية الأجزاء الإلكترونية الحساسة.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/engine-tune-air.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-1",
  "title": "تنظيف حساس MAF",
  "body": "العناية بحساس قياس تدفق الهواء بوسيلة تنظيف ملائمة له، مع تجنب لمس عنصر القياس الحساس.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/engine-tune-air.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-2",
  "title": "تنظيف حساس MAP",
  "body": "تنظيف حساس ضغط مجرى السحب عندما تسمح حالته، ومراجعة استجابته ضمن تقييم منظومة الهواء.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/engine-tune-air.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-3",
  "title": "تنظيف ثلاجة الماكينة",
  "body": "تنظيف رواسب مجرى السحب بالطريقة التي يتيحها تصميم السيارة؛ يحدد الفحص الأجزاء التي يمكن الوصول إليها.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/engine-tune-editorial.webp",
  "position": 3,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-4",
  "title": "تنظيف البخاخات",
  "body": "تنظيف البخاخات بحسب نوع نظام الحقن وتجهيزات السيارة، للعناية بنمط رش الوقود.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/deep-cleaning-injectors.webp",
  "position": 4,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-5",
  "title": "تنظيف دبة البيئة",
  "body": "اختيار وسيلة تنظيف ملائمة بعد تقييم حالة الدبة. التلف الداخلي أو الانصهار يحتاج معالجة تختلف عن التنظيف.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/catalyst-editorial.webp",
  "position": 5,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-6",
  "title": "تنظيف حساس الأكسجين",
  "body": "فحص الحساس وتنظيفه عندما تسمح حالته، ثم مراجعة عمله ضمن منظومة العادم.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/catalyst-sensors.webp",
  "position": 6,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-7",
  "title": "تنظيف البواجي وأسلاكها",
  "body": "العناية بالبواجي وأسلاك الإشعال الموجودة في السيارات المناسبة لهذه الخدمة؛ لا تنطبق على كل السيارات.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/engine-tune-ignition.webp",
  "position": 7,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-8",
  "title": "فحص دبة البيئة بالكاميرا",
  "body": "معاينة الدبة داخليًا بالكاميرا للمساعدة في تحديد حالة البطانة ومدى ملاءمة التنظيف.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/catalytic-camera-offer.webp",
  "position": 8,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "petrol-cleaning-approved-feature-9",
  "title": "برمجة السيارة",
  "body": "إجراء التهيئة أو البرمجة المناسبة بعد الخدمة عند الحاجة وبحسب الأنظمة المتوافقة مع السيارة.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 9,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "petrol-cleaning-approved-package-0",
  "title": "سيارات 4 سلندر بنزين",
  "body": "تشمل الأعمال الموضحة أعلاه وفق ملاءمة السيارة",
  "price": "200 ريال",
  "meta": "petrol-cleaning",
  "image": "/deep-cleaning-machine.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "petrol-cleaning-approved-package-1",
  "title": "سيارات 6 سلندر بنزين",
  "body": "تشمل الأعمال الموضحة أعلاه وفق ملاءمة السيارة",
  "price": "250 ريال",
  "meta": "petrol-cleaning",
  "image": "/deep-cleaning-machine.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "petrol-cleaning-approved-package-2",
  "title": "سيارات 8 سلندر بنزين",
  "body": "تشمل الأعمال الموضحة أعلاه وفق ملاءمة السيارة",
  "price": "300 ريال",
  "meta": "petrol-cleaning",
  "image": "/deep-cleaning-machine.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "petrol-cleaning-note-53",
  "title": "ملاحظة مهمة",
  "body": "الخدمات لا تشمل الفك. تنظيف البواجي وأسلاكها لا ينطبق على كل السيارات.",
  "price": "",
  "meta": "petrol-cleaning",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "deep-cleaning",
  "title": "خدمات تنظيف سيارات الديزل",
  "body": "باقة متكاملة للعناية بمسارات الهواء والوقود والعادم، مع الفحص والتهيئة المناسبة بحسب حالة السيارة ونوع محركها.",
  "price": "تبدأ من 250 ريال",
  "meta": "cat-engine",
  "image": "/deep-cleaning-machine.webp",
  "position": 15,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "deep-cleaning-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/approved-deep-cleaning.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-0",
  "title": "تنظيف التيربو وإزالة الترسبات الصعبة",
  "body": "تنظيف الترسبات القابلة للإزالة في الأجزاء المناسبة من منظومة التيربو بعد تقييم حالتها وإمكانية الوصول إليها.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-turbo.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-1",
  "title": "تنظيف دبة البيئة",
  "body": "اختيار وسيلة تنظيف ملائمة بعد تقييم حالة الدبة. التلف الداخلي أو الانصهار يحتاج معالجة تختلف عن التنظيف.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/catalyst-editorial.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-2",
  "title": "تنظيف حساس الأكسجين",
  "body": "فحص الحساس وتنظيفه عندما تسمح حالته، ثم مراجعة عمله ضمن منظومة العادم.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/catalyst-sensors.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-3",
  "title": "تنظيف البخاخات وتنظيم الرش",
  "body": "تنظيف بخاخات الديزل ومراجعة نمط الرش بحسب تصميم نظام الحقن وحالة البخاخات.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-injectors.webp",
  "position": 3,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-4",
  "title": "تنظيف ثلاجة الماكينة",
  "body": "تنظيف رواسب مجرى السحب بالطريقة التي يتيحها تصميم السيارة؛ يحدد الفحص الأجزاء التي يمكن الوصول إليها.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/engine-tune-editorial.webp",
  "position": 4,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-5",
  "title": "تنظيف صمامات وبوابة الهواء",
  "body": "تنظيف بوابة الهواء والأجزاء المناسبة من مسار السحب مع مراعاة حساسية المكونات الإلكترونية.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/engine-tune-air.webp",
  "position": 5,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-6",
  "title": "فحص دبة البيئة بالكاميرا",
  "body": "معاينة الدبة داخليًا بالكاميرا للمساعدة في تحديد حالة البطانة ومدى ملاءمة التنظيف.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/catalytic-camera-offer.webp",
  "position": 6,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "deep-cleaning-approved-feature-7",
  "title": "برمجة السيارة",
  "body": "إجراء التهيئة أو البرمجة المناسبة بعد الخدمة عند الحاجة وبحسب الأنظمة المتوافقة مع السيارة.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 7,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "deep-cleaning-approved-package-0",
  "title": "سيارات 4 سلندر ديزل",
  "body": "تشمل الأعمال الموضحة أعلاه وفق ملاءمة السيارة",
  "price": "250 ريال",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-machine.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "deep-cleaning-approved-package-1",
  "title": "سيارات 6 سلندر ديزل",
  "body": "تشمل الأعمال الموضحة أعلاه وفق ملاءمة السيارة",
  "price": "300 ريال",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-machine.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_extra",
  "id": "deep-cleaning-extra-66",
  "title": "تنظيف EGR",
  "body": "خدمة إضافية برسوم يحدد سعرها قبل التنفيذ.",
  "price": "",
  "meta": "deep-cleaning",
  "image": "/deep-cleaning-egr.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "specialized-inspection",
  "title": "خدمات الفحص المتخصصة",
  "body": "ثلاثة مسارات فحص لتقييم حالة رأس المحرك، كشف التهريب بالدخان، وفحص منظومة كهرباء التشغيل. اختر الفحص الملائم للملاحظة التي تظهر في سيارتك.",
  "price": "تبدأ من 30 ريال",
  "meta": "cat-electrical",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 16,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "specialized-inspection-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "specialized-inspection",
  "image": "/approved-specialized-inspection.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "specialized-inspection-approved-feature-0",
  "title": "فحص رأس الماكينة",
  "body": "تقييم حالة رأس المحرك بأجهزة مخصصة لتوجيه خطوات التشخيص.",
  "price": "",
  "meta": "specialized-inspection",
  "image": "/engine-tune-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "specialized-inspection-approved-package-0",
  "title": "فحص رأس الماكينة",
  "body": "تقييم حالة رأس المحرك بأجهزة مخصصة لتوجيه خطوات التشخيص.",
  "price": "50 ريال",
  "meta": "specialized-inspection",
  "image": "/engine-tune-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "specialized-inspection-approved-feature-1",
  "title": "كشف التهريب بالدخان",
  "body": "استخدام جهاز الدخان للمساعدة في تحديد مواقع التهريب في المسارات المناسبة للفحص.",
  "price": "",
  "meta": "specialized-inspection",
  "image": "/deep-cleaning-machine.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "specialized-inspection-approved-package-1",
  "title": "كشف التهريب بالدخان",
  "body": "استخدام جهاز الدخان للمساعدة في تحديد مواقع التهريب في المسارات المناسبة للفحص.",
  "price": "30 ريال",
  "meta": "specialized-inspection",
  "image": "/deep-cleaning-machine.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "specialized-inspection-approved-feature-2",
  "title": "فحص البطارية والدينمو والسلف",
  "body": "فحص منظومة كهرباء التشغيل لتقييم البطارية والشحن والسلف.",
  "price": "",
  "meta": "specialized-inspection",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "specialized-inspection-approved-package-2",
  "title": "فحص البطارية والدينمو والسلف",
  "body": "فحص منظومة كهرباء التشغيل لتقييم البطارية والشحن والسلف.",
  "price": "30 ريال",
  "meta": "specialized-inspection",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "catalytic",
  "title": "فحص وتنظيف دبة البيئة",
  "body": "خيارات متدرجة تبدأ بالمعاينة بالكاميرا وقياس الضغط، ثم اختيار وسيلة التنظيف المناسبة لحالة الدبة. التنظيف لا يعالج التلف الداخلي ويحدد الفحص مدى ملاءمته.",
  "price": "تبدأ من 30 ريال",
  "meta": "cat-exhaust",
  "image": "/catalyst-editorial.webp",
  "position": 17,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "catalytic-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "catalytic",
  "image": "/approved-catalytic.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "catalytic-approved-feature-0",
  "title": "الفحص التشخيصي",
  "body": "معاينة الدبة بالكاميرا، مع خيار إضافة قياس الضغط لتقييم مسار العادم.",
  "price": "",
  "meta": "catalytic",
  "image": "/catalytic-camera-offer.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "catalytic-approved-feature-1",
  "title": "التنظيف بالتبخير",
  "body": "تنظيف بالجهاز عن طريق التبخير عندما يسمح الفحص بذلك.",
  "price": "",
  "meta": "catalytic",
  "image": "/catalytic-vapor-offer.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "catalytic-approved-feature-2",
  "title": "التنظيف بالبخاخ المخصص",
  "body": "خيارات مواد تنظيف صينية وألمانية وأمريكية أو بلجيكية وفق الباقة المختارة.",
  "price": "",
  "meta": "catalytic",
  "image": "/catalytic-foam-offer.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-0",
  "title": "فحص بالكاميرا",
  "body": "السعر للدبة الواحدة",
  "price": "30 ريال",
  "meta": "catalytic",
  "image": "/catalytic-camera-offer.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-1",
  "title": "فحص ساعة الضغط والكاميرا",
  "body": "السعر للدبة الواحدة",
  "price": "80 ريال",
  "meta": "catalytic",
  "image": "/catalytic-camera-offer.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-2",
  "title": "تنظيف بالجهاز عن طريق التبخير",
  "body": "السعر للدبة الواحدة",
  "price": "80 ريال",
  "meta": "catalytic",
  "image": "/catalytic-vapor-offer.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-3",
  "title": "تنظيف ببخاخ صيني",
  "body": "السعر للدبة الواحدة",
  "price": "50 ريال",
  "meta": "catalytic",
  "image": "/catalytic-foam-offer.webp",
  "position": 3,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-4",
  "title": "تنظيف ببخاخ ألماني",
  "body": "السعر للدبة الواحدة",
  "price": "80 ريال",
  "meta": "catalytic",
  "image": "/catalytic-foam-offer.webp",
  "position": 4,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "catalytic-approved-package-5",
  "title": "تنظيف ببخاخ أمريكي / بلجيكي",
  "body": "السعر للدبة الواحدة",
  "price": "120 ريال",
  "meta": "catalytic",
  "image": "/catalytic-foam-offer.webp",
  "position": 5,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "catalytic-note-86",
  "title": "السعر للدبة الواحدة",
  "body": "جميع الأسعار الموضحة للدبة الواحدة، ويحدد الفحص ملاءمة التنظيف.",
  "price": "",
  "meta": "catalytic",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "steering",
  "title": "تغيير زيت الدركسون",
  "body": "إزالة الزيت القديم والرواسب وتجديد سائل نظام التوجيه الهيدروليكي بالمواصفة المناسبة للسيارة، لدعم سلاسة التوجيه والعناية بالمضخة.",
  "price": "50 ريال",
  "meta": "cat-steering",
  "image": "/approved-steering.webp",
  "position": 18,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "steering-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "steering",
  "image": "/approved-steering.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "steering-approved-feature-0",
  "title": "إزالة الزيت القديم والرواسب",
  "body": "تجديد الزيت بالطريقة المناسبة لنظام التوجيه الهيدروليكي.",
  "price": "",
  "meta": "steering",
  "image": "/oil-care-editorial.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "steering-approved-feature-1",
  "title": "نعومة واستجابة التوجيه",
  "body": "العناية بالسائل للمساعدة في تحسين نعومة التوجيه وتقليل الأصوات والقلق المرتبطين بحالة السائل.",
  "price": "",
  "meta": "steering",
  "image": "/oil-care-editorial.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "steering-approved-feature-2",
  "title": "حماية مضخة التوجيه",
  "body": "استخدام السائل المطابق للمواصفات يساعد في حماية المضخة وأجزاء النظام ودعم عمرها التشغيلي.",
  "price": "",
  "meta": "steering",
  "image": "/oil-care-editorial.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "steering-note-92",
  "title": "السعر لا يشمل الزيت",
  "body": "الخدمة 50 ريال ولا تشمل الزيت. تتوفر زيوت ومنظفات من عدة شركات عالمية بأسعار مختلفة.",
  "price": "",
  "meta": "steering",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "computer",
  "title": "فحص السيارة بالكمبيوتر",
  "body": "فحص إلكتروني باستخدام جهاز LAUNCH X-431 PAD 9 لقراءة الأعطال، وإرسال التقرير للعميل عبر واتساب، ومسح الأكواد حسب إجراءات التشخيص.",
  "price": "30 ريال",
  "meta": "cat-electrical",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 19,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "computer-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "computer",
  "image": "/approved-computer.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "computer-approved-feature-0",
  "title": "فحص الأعطال",
  "body": "قراءة أكواد الأعطال من أنظمة السيارة المتوافقة باستخدام جهاز LAUNCH X-431 PAD 9.",
  "price": "",
  "meta": "computer",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "computer-approved-feature-1",
  "title": "التقرير عبر واتساب",
  "body": "إرسال تقرير الفحص للعميل عبر واتساب ليحتفظ بنتائج القراءة.",
  "price": "",
  "meta": "computer",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "computer-approved-feature-2",
  "title": "مسح الأكواد",
  "body": "مسح الأكواد وفق إجراءات التشخيص؛ مسح الكود وحده لا يصلح سبب العطل.",
  "price": "",
  "meta": "computer",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "engine-tune",
  "title": "تصفية الماكينة · 4 سلندر ببخاخات خارجية",
  "body": "باقتان لتنظيف مكونات الحقن والإشعال والهواء، مع الفحوصات والتهيئة الموضحة لكل باقة. نطاق العمل يحدد بحسب نوع البخاخات وتوافق السيارة.",
  "price": "تبدأ من 50 ريال",
  "meta": "cat-engine",
  "image": "/deep-cleaning-injectors.webp",
  "position": 20,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "engine-tune-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "engine-tune",
  "image": "/approved-engine-tune.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-tune-approved-package-0",
  "title": "الباقة الأساسية",
  "body": "تنظيف البخاخات بالجهاز\nتنظيف البخاخات بتقنية الألترا سونيك\nبرمجة السيارة",
  "price": "50 ريال",
  "meta": "engine-tune",
  "image": "/deep-cleaning-injectors.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-tune-approved-package-1",
  "title": "الباقة الفضية",
  "body": "تنظيف البخاخات بالجهاز\nتنظيف البخاخات بتقنية الألترا سونيك\nتنظيف البوابة\nتنظيف الكويلات\nتنظيف حساس VVT\nتنظيف حساس العامود\nتنظيف حساس الهواء MAF\nتنظيف حساس الهواء MAP\nتنظيف ربلات البخاخات\nتنظيف جلد الكويلات\nتنظيف البواجي\nتنظيف حساس الأكسجين\nتنظيف فلتر الهواء\nفحص زيت الماكينة بالجهاز\nفحص زيت الفرامل بالجهاز\nفحص ماء الرديتر بالجهاز\nفحص زيت الدركسون بالجهاز\nبرمجة البوابة (الثروتل)\nفحص الأكواد ومسحها بالكمبيوتر\nفحص دبة البيئة بالكاميرا",
  "price": "120 ريال",
  "meta": "engine-tune",
  "image": "/engine-tune-editorial.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-approved-feature-0",
  "title": "العناية بالبخاخات",
  "body": "تنظيف البخاخات بالجهاز وبتقنية الألترا سونيك ضمن الباقتين.",
  "price": "",
  "meta": "engine-tune",
  "image": "/deep-cleaning-injectors.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-approved-feature-1",
  "title": "مسارات الهواء والإشعال",
  "body": "الباقة الفضية تشمل أعمال تنظيف البوابة والحساسات والكويلات والبواجي الموضحة في قائمتها.",
  "price": "",
  "meta": "engine-tune",
  "image": "/engine-tune-ignition.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-approved-feature-2",
  "title": "الفحص والتهيئة",
  "body": "الباقة الفضية تشمل فحص السوائل المذكورة، وفحص الأكواد ومسحها، وفحص دبة البيئة بالكاميرا، وبرمجة الثروتل.",
  "price": "",
  "meta": "engine-tune",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_extra",
  "id": "engine-tune-extra-105",
  "title": "أعمال إضافية حسب حالة السيارة",
  "body": "تنظيف غرفة الاحتراق · تنظيف EGR · تنظيف التيربو · تنظيف بلف تبخير البنزين · تغيير صفاية البنزين · تغيير وجه غطاء البلوف · تنظيف الثلاجة بالجهاز أو بالفك حسب السيارة",
  "price": "",
  "meta": "engine-tune",
  "image": "/deep-cleaning-egr.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "engine-tune-note-106",
  "title": "قطع الغيار غير مشمولة",
  "body": "العرض يشمل التنظيف فقط ولا يشمل قطع الغيار. يوفر العميل البواجي وجلد البخاخات وجلد الكويلات وفلتر الهواء وفلتر المكيف، وتُغيّر بناءً على طلبه.",
  "price": "",
  "meta": "engine-tune",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service",
  "id": "engine-tune-internal",
  "title": "تصفية الماكينة · بخاخات داخلية و6 سلندر",
  "body": "باقتان لتنظيف مكونات الحقن والإشعال والهواء، مع الفحوصات والتهيئة الموضحة لكل باقة. نطاق العمل يحدد بحسب نوع البخاخات وتوافق السيارة.",
  "price": "تبدأ من 100 ريال",
  "meta": "cat-engine",
  "image": "/deep-cleaning-injectors.webp",
  "position": 21,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_poster",
  "id": "engine-tune-internal-poster",
  "title": "عرض الخدمة المعتمد",
  "body": "",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "/approved-engine-tune-internal.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-tune-internal-approved-package-0",
  "title": "الباقة الأساسية",
  "body": "تنظيف البخاخات بالجهاز\nتنظيف البخاخات بتقنية الألترا سونيك\nبرمجة السيارة",
  "price": "100 ريال",
  "meta": "engine-tune-internal",
  "image": "/deep-cleaning-injectors.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "package",
  "id": "engine-tune-internal-approved-package-1",
  "title": "الباقة الفضية",
  "body": "تنظيف البخاخات بالجهاز\nتنظيف البخاخات بتقنية الألترا سونيك\nتنظيف البوابة\nتنظيف الكويلات\nتنظيف حساس VVT\nتنظيف حساس العامود\nتنظيف حساس الهواء MAF\nتنظيف حساس الهواء MAP\nتنظيف ربلات البخاخات\nتنظيف جلد الكويلات\nتنظيف البواجي\nتنظيف ثلاجة الماكينة\nتنظيف حساس الأكسجين\nتنظيف فلتر الهواء\nفحص زيت الماكينة بالجهاز\nفحص زيت الفرامل بالجهاز\nفحص ماء الرديتر بالجهاز\nفحص زيت الدركسون بالجهاز\nبرمجة البوابة (الثروتل)\nفحص الأكواد ومسحها بالكمبيوتر\nفحص دبة البيئة بالكاميرا",
  "price": "240 ريال",
  "meta": "engine-tune-internal",
  "image": "/engine-tune-editorial.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-internal-approved-feature-0",
  "title": "العناية بالبخاخات",
  "body": "تنظيف البخاخات بالجهاز وبتقنية الألترا سونيك ضمن الباقتين.",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "/deep-cleaning-injectors.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-internal-approved-feature-1",
  "title": "مسارات الهواء والإشعال",
  "body": "الباقة الفضية تشمل أعمال تنظيف البوابة والحساسات والكويلات والبواجي الموضحة في قائمتها.",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "/engine-tune-ignition.webp",
  "position": 1,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_feature",
  "id": "engine-tune-internal-approved-feature-2",
  "title": "الفحص والتهيئة",
  "body": "الباقة الفضية تشمل فحص السوائل المذكورة، وفحص الأكواد ومسحها، وفحص دبة البيئة بالكاميرا، وبرمجة الثروتل.",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "/deep-cleaning-diagnostics.webp",
  "position": 2,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_extra",
  "id": "engine-tune-internal-extra-114",
  "title": "أعمال إضافية حسب حالة السيارة",
  "body": "تنظيف غرفة الاحتراق · تنظيف EGR · تنظيف التيربو · تنظيف بلف تبخير البنزين · تغيير صفاية البنزين · تغيير وجه غطاء البلوف",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "/deep-cleaning-egr.webp",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 },
 {
  "kind": "service_note",
  "id": "engine-tune-internal-note-115",
  "title": "قطع الغيار غير مشمولة",
  "body": "العرض يشمل التنظيف فقط ولا يشمل قطع الغيار. يوفر العميل البواجي وجلد البخاخات وجلد الكويلات وفلتر الهواء وفلتر المكيف، وتُغيّر بناءً على طلبه. بعض السيارات لا ينطبق عليها فك الثلاجة وتُنظف بالجهاز.",
  "price": "",
  "meta": "engine-tune-internal",
  "image": "",
  "position": 0,
  "rating": 0,
  "status": "published",
  "createdAt": "2026-10-01T00:00:00.000Z"
 }
];
export const approvedEnglish:Record<string,{title:string,body:string,price:string}>={
 "cat-brakes": {
  "title": "Brakes and tires",
  "body": "Brake care and tire-pressure sensors",
  "price": ""
 },
 "engine-flush": {
  "title": "Engine flush",
  "body": "Clean deposits from engine oil passages with dedicated equipment, followed by an oil and filter change suited to the engine and vehicle specification.",
  "price": "From SAR 50"
 },
 "engine-flush-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "engine-flush-approved-feature-0": {
  "title": "Oil passage cleaning",
  "body": "Remove cleanable deposits and contaminants from oil passages after assessing the engine.",
  "price": ""
 },
 "engine-flush-approved-feature-1": {
  "title": "Oil and filter replacement",
  "body": "Replace the engine oil and filter after cleaning. The customer supplies both; products available at the center can be discussed.",
  "price": ""
 },
 "engine-flush-approved-feature-2": {
  "title": "Internal engine care",
  "body": "Clean, correctly specified oil helps reduce friction and support engine operation.",
  "price": ""
 },
 "engine-flush-approved-package-0": {
  "title": "Basic package",
  "body": "Engine flush\nCleaning additive excluded\nCustomer supplies oil and filter",
  "price": "SAR 50"
 },
 "engine-flush-approved-package-1": {
  "title": "Complete package",
  "body": "Engine flush\nCleaning additive included\nCustomer supplies oil and filter",
  "price": "SAR 100"
 },
 "engine-flush-extra-8": {
  "title": "Oil strainer cleaning and sump removal",
  "body": "Additional services; charges are confirmed before work.",
  "price": "Price confirmed before service"
 },
 "engine-flush-note-9": {
  "title": "Available oils and products",
  "body": "Oils, cleaning products, and filters from various international brands are available at different prices.",
  "price": ""
 },
 "brake-fluid": {
  "title": "Brake fluid replacement",
  "body": "Replace brake fluid and bleed air using dedicated equipment, following the manufacturer’s fluid specifications and procedures.",
  "price": "From SAR 50"
 },
 "brake-fluid-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "brake-fluid-approved-feature-0": {
  "title": "Replace old fluid",
  "body": "Replace old brake fluid throughout the system.",
  "price": ""
 },
 "brake-fluid-approved-feature-1": {
  "title": "Bleed air",
  "body": "Bleed air from brake lines to support pedal response, following vehicle procedures.",
  "price": ""
 },
 "brake-fluid-approved-feature-2": {
  "title": "System care",
  "body": "Correctly specified fluid helps limit corrosion; braking performance is assessed through inspection.",
  "price": ""
 },
 "brake-fluid-approved-package-0": {
  "title": "Basic package",
  "body": "Brake fluid replacement\nFluid excluded",
  "price": "SAR 50"
 },
 "brake-fluid-approved-package-1": {
  "title": "Complete package",
  "body": "Brake fluid replacement\nIncludes four containers of brake fluid",
  "price": "From SAR 100"
 },
 "brake-fluid-extra-17": {
  "title": "Additional inspection package",
  "body": "Computer brake-fluid programming\nInstrument inspection of rotors\nInstrument tire inspection\nInstrument brake-pad inspection",
  "price": "SAR 70"
 },
 "brake-fluid-note-18": {
  "title": "Brake fluid selection",
  "body": "Brake fluids from various brands are available; the type must match the vehicle specification.",
  "price": ""
 },
 "radiator": {
  "title": "Radiator cleaning",
  "body": "Clean radiator deposits and replace coolant, with packages based on cooling-system layout and vehicle type.",
  "price": "From SAR 50"
 },
 "radiator-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "radiator-approved-feature-0": {
  "title": "Remove deposits",
  "body": "Remove cleanable deposits using a method suited to the radiator and cooling circuit.",
  "price": ""
 },
 "radiator-approved-feature-1": {
  "title": "Replace coolant",
  "body": "Replace coolant with the correct type and concentration for the vehicle.",
  "price": ""
 },
 "radiator-approved-feature-2": {
  "title": "Support cooling efficiency",
  "body": "Clean passages and suitable fresh coolant help protect against corrosion and support heat transfer.",
  "price": ""
 },
 "radiator-approved-package-0": {
  "title": "External hoses · Basic",
  "body": "Coolant replacement\nCoolant excluded",
  "price": "SAR 50"
 },
 "radiator-approved-package-1": {
  "title": "External hoses · Complete",
  "body": "Radiator cleaning and coolant replacement\nAmerican STOP radiator cleaner\nCoolant excluded",
  "price": "SAR 100"
 },
 "radiator-approved-package-2": {
  "title": "Internal hoses, hybrids and large vehicles · Basic",
  "body": "Coolant replacement\nCoolant excluded",
  "price": "SAR 100"
 },
 "radiator-approved-package-3": {
  "title": "Internal hoses, hybrids and large vehicles · Complete",
  "body": "Radiator cleaning and coolant replacement\nAmerican STOP radiator cleaner\nCoolant excluded",
  "price": "SAR 150"
 },
 "radiator-note-28": {
  "title": "Coolant excluded",
  "body": "All packages exclude coolant. Coolants and cleaning products from various brands are available at different prices.",
  "price": ""
 },
 "tpms": {
  "title": "TPMS inspection and programming",
  "body": "Inspect tire-pressure sensors and read their status, with options for LAUNCH sensors and programming subject to vehicle compatibility.",
  "price": "From SAR 50"
 },
 "tpms-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "tpms-approved-feature-0": {
  "title": "Sensor inspection",
  "body": "Inspect all tire-pressure sensors and their response.",
  "price": ""
 },
 "tpms-approved-feature-1": {
  "title": "Read sensor status",
  "body": "Read sensor status to determine programming or replacement needs.",
  "price": ""
 },
 "tpms-approved-feature-2": {
  "title": "Program new sensors",
  "body": "Program compatible new sensors and pair them with the vehicle.",
  "price": ""
 },
 "tpms-approved-package-0": {
  "title": "All-wheel inspection",
  "body": "Installation excluded",
  "price": "SAR 50"
 },
 "tpms-approved-package-1": {
  "title": "One sensor + programming",
  "body": "Installation excluded",
  "price": "SAR 70"
 },
 "tpms-approved-package-2": {
  "title": "Four sensors + programming",
  "body": "Installation excluded",
  "price": "SAR 240"
 },
 "tpms-note-37": {
  "title": "Installation and warranty",
  "body": "Installation is excluded. Genuine LAUNCH sensors with a one-year warranty.",
  "price": ""
 },
 "petrol-cleaning": {
  "title": "Petrol vehicle cleaning",
  "body": "A package for air, fuel, and exhaust components, with inspection and suitable relearn procedures according to the vehicle and engine.",
  "price": "From SAR 200"
 },
 "petrol-cleaning-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "petrol-cleaning-approved-feature-0": {
  "title": "Throttle body cleaning",
  "body": "Clean deposits around the throttle body using a method suited to its design while protecting sensitive electronics.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-1": {
  "title": "MAF sensor cleaning",
  "body": "Care for the mass airflow sensor using a suitable cleaning method without touching the sensitive measuring element.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-2": {
  "title": "MAP sensor cleaning",
  "body": "Clean the intake pressure sensor where its condition permits and review its response as part of air-system assessment.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-3": {
  "title": "Intake manifold cleaning",
  "body": "Clean intake deposits using a method permitted by the vehicle design; inspection determines accessible areas.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-4": {
  "title": "Injector cleaning",
  "body": "Clean injectors according to the injection system and vehicle equipment to care for the fuel spray pattern.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-5": {
  "title": "Catalytic converter cleaning",
  "body": "Select a cleaning method after assessing the converter. Internal damage or melting requires a different repair.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-6": {
  "title": "Oxygen sensor cleaning",
  "body": "Inspect and clean the sensor where its condition permits, then review its operation in the exhaust system.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-7": {
  "title": "Spark plug and wire cleaning",
  "body": "Care for spark plugs and ignition wires on suitable vehicles; this work is not applicable to all cars.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-8": {
  "title": "Converter camera inspection",
  "body": "Use an inspection camera to help assess the internal substrate and cleaning suitability.",
  "price": ""
 },
 "petrol-cleaning-approved-feature-9": {
  "title": "Vehicle programming",
  "body": "Perform suitable relearn or programming procedures after service when required and supported by the vehicle.",
  "price": ""
 },
 "petrol-cleaning-approved-package-0": {
  "title": "4-cylinder petrol vehicles",
  "body": "Includes the work described above, where suitable for the vehicle",
  "price": "SAR 200"
 },
 "petrol-cleaning-approved-package-1": {
  "title": "6-cylinder petrol vehicles",
  "body": "Includes the work described above, where suitable for the vehicle",
  "price": "SAR 250"
 },
 "petrol-cleaning-approved-package-2": {
  "title": "8-cylinder petrol vehicles",
  "body": "Includes the work described above, where suitable for the vehicle",
  "price": "SAR 300"
 },
 "petrol-cleaning-note-53": {
  "title": "Important note",
  "body": "Services exclude dismantling. Spark plug and wire cleaning is not applicable to all vehicles.",
  "price": ""
 },
 "deep-cleaning": {
  "title": "Diesel vehicle cleaning",
  "body": "A package for air, fuel, and exhaust components, with inspection and suitable relearn procedures according to the vehicle and engine.",
  "price": "From SAR 250"
 },
 "deep-cleaning-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "deep-cleaning-approved-feature-0": {
  "title": "Turbocharger deposit cleaning",
  "body": "Clean removable deposits in suitable turbocharger components after assessing condition and accessibility.",
  "price": ""
 },
 "deep-cleaning-approved-feature-1": {
  "title": "Catalytic converter cleaning",
  "body": "Select a cleaning method after assessing the converter. Internal damage or melting requires a different repair.",
  "price": ""
 },
 "deep-cleaning-approved-feature-2": {
  "title": "Oxygen sensor cleaning",
  "body": "Inspect and clean the sensor where its condition permits, then review its operation in the exhaust system.",
  "price": ""
 },
 "deep-cleaning-approved-feature-3": {
  "title": "Injector cleaning and spray check",
  "body": "Clean diesel injectors and review the spray pattern according to injection-system design and injector condition.",
  "price": ""
 },
 "deep-cleaning-approved-feature-4": {
  "title": "Intake manifold cleaning",
  "body": "Clean intake deposits using a method permitted by the vehicle design; inspection determines accessible areas.",
  "price": ""
 },
 "deep-cleaning-approved-feature-5": {
  "title": "Air valve and throttle cleaning",
  "body": "Clean the throttle body and suitable intake parts while protecting sensitive electronics.",
  "price": ""
 },
 "deep-cleaning-approved-feature-6": {
  "title": "Converter camera inspection",
  "body": "Use an inspection camera to help assess the internal substrate and cleaning suitability.",
  "price": ""
 },
 "deep-cleaning-approved-feature-7": {
  "title": "Vehicle programming",
  "body": "Perform suitable relearn or programming procedures after service when required and supported by the vehicle.",
  "price": ""
 },
 "deep-cleaning-approved-package-0": {
  "title": "4-cylinder diesel vehicles",
  "body": "Includes the work described above, where suitable for the vehicle",
  "price": "SAR 250"
 },
 "deep-cleaning-approved-package-1": {
  "title": "6-cylinder diesel vehicles",
  "body": "Includes the work described above, where suitable for the vehicle",
  "price": "SAR 300"
 },
 "deep-cleaning-extra-66": {
  "title": "EGR cleaning",
  "body": "Additional service; price confirmed before work.",
  "price": "Price confirmed before service"
 },
 "specialized-inspection": {
  "title": "Specialized inspections",
  "body": "Three diagnostic options for cylinder-head condition, smoke leak detection, and starting-system electrical checks. Choose the inspection suited to your vehicle’s symptoms.",
  "price": "From SAR 30"
 },
 "specialized-inspection-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "specialized-inspection-approved-feature-0": {
  "title": "Cylinder-head inspection",
  "body": "Use dedicated equipment to assess cylinder-head condition and guide diagnosis.",
  "price": ""
 },
 "specialized-inspection-approved-package-0": {
  "title": "Cylinder-head inspection",
  "body": "Use dedicated equipment to assess cylinder-head condition and guide diagnosis.",
  "price": "SAR 50"
 },
 "specialized-inspection-approved-feature-1": {
  "title": "Smoke leak detection",
  "body": "Use a smoke tester to help locate leaks in suitable circuits.",
  "price": ""
 },
 "specialized-inspection-approved-package-1": {
  "title": "Smoke leak detection",
  "body": "Use a smoke tester to help locate leaks in suitable circuits.",
  "price": "SAR 30"
 },
 "specialized-inspection-approved-feature-2": {
  "title": "Battery, alternator and starter inspection",
  "body": "Check the battery, charging system, and starter.",
  "price": ""
 },
 "specialized-inspection-approved-package-2": {
  "title": "Battery, alternator and starter inspection",
  "body": "Check the battery, charging system, and starter.",
  "price": "SAR 30"
 },
 "catalytic": {
  "title": "Catalytic converter inspection and cleaning",
  "body": "Options begin with camera inspection and pressure measurement, followed by a cleaning method suited to the converter. Cleaning cannot repair internal damage; suitability is determined by inspection.",
  "price": "From SAR 30"
 },
 "catalytic-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "catalytic-approved-feature-0": {
  "title": "Diagnostic inspection",
  "body": "Inspect with a camera, with an option for pressure measurement to assess exhaust flow.",
  "price": ""
 },
 "catalytic-approved-feature-1": {
  "title": "Vapor cleaning",
  "body": "Machine vapor cleaning where inspection confirms suitability.",
  "price": ""
 },
 "catalytic-approved-feature-2": {
  "title": "Specialist cleaning spray",
  "body": "Chinese, German, and American or Belgian specialist cleaning products according to the chosen option.",
  "price": ""
 },
 "catalytic-approved-package-0": {
  "title": "Camera inspection",
  "body": "Price per converter",
  "price": "SAR 30"
 },
 "catalytic-approved-package-1": {
  "title": "Pressure gauge and camera inspection",
  "body": "Price per converter",
  "price": "SAR 80"
 },
 "catalytic-approved-package-2": {
  "title": "Machine vapor cleaning",
  "body": "Price per converter",
  "price": "SAR 80"
 },
 "catalytic-approved-package-3": {
  "title": "Chinese cleaning spray",
  "body": "Price per converter",
  "price": "SAR 50"
 },
 "catalytic-approved-package-4": {
  "title": "German cleaning spray",
  "body": "Price per converter",
  "price": "SAR 80"
 },
 "catalytic-approved-package-5": {
  "title": "American / Belgian cleaning spray",
  "body": "Price per converter",
  "price": "SAR 120"
 },
 "catalytic-note-86": {
  "title": "Price per converter",
  "body": "All listed prices are per converter; inspection determines cleaning suitability.",
  "price": ""
 },
 "steering": {
  "title": "Power steering fluid replacement",
  "body": "Remove old fluid and deposits and renew hydraulic power steering fluid with the correct specification to support smooth steering and pump care.",
  "price": "SAR 50"
 },
 "steering-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "steering-approved-feature-0": {
  "title": "Remove old fluid and deposits",
  "body": "Renew fluid using a method suited to the hydraulic steering system.",
  "price": ""
 },
 "steering-approved-feature-1": {
  "title": "Smooth steering response",
  "body": "Fluid care to help support smooth steering and reduce fluid-related noise and concerns.",
  "price": ""
 },
 "steering-approved-feature-2": {
  "title": "Steering pump care",
  "body": "Correctly specified fluid helps protect the pump and system components.",
  "price": ""
 },
 "steering-note-92": {
  "title": "Fluid excluded",
  "body": "Service costs SAR 50 and excludes fluid. Oils and cleaners from various brands are available at different prices.",
  "price": ""
 },
 "computer": {
  "title": "Computer diagnostics",
  "body": "Electronic diagnostics using a LAUNCH X-431 PAD 9 to read faults, send a report by WhatsApp, and clear codes according to diagnostic procedures.",
  "price": "SAR 30"
 },
 "computer-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "computer-approved-feature-0": {
  "title": "Read faults",
  "body": "Read fault codes from compatible vehicle systems using a LAUNCH X-431 PAD 9.",
  "price": ""
 },
 "computer-approved-feature-1": {
  "title": "Report by WhatsApp",
  "body": "Send the diagnostic report to the customer by WhatsApp.",
  "price": ""
 },
 "computer-approved-feature-2": {
  "title": "Clear codes",
  "body": "Clear codes according to diagnostic procedures; clearing a code does not repair its cause.",
  "price": ""
 },
 "engine-tune": {
  "title": "Engine tune-up · 4-cylinder external injectors",
  "body": "Two packages for injection, ignition, and air-system cleaning, with checks and relearn procedures listed for each option. Scope depends on injector type and vehicle compatibility.",
  "price": "From SAR 50"
 },
 "engine-tune-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "engine-tune-approved-package-0": {
  "title": "Basic package",
  "body": "Machine injector cleaning\nUltrasonic injector cleaning\nVehicle programming",
  "price": "SAR 50"
 },
 "engine-tune-approved-package-1": {
  "title": "Silver package",
  "body": "Machine injector cleaning\nUltrasonic injector cleaning\nThrottle cleaning\nIgnition coil cleaning\nVVT sensor cleaning\nShaft sensor cleaning\nMAF sensor cleaning\nMAP sensor cleaning\nInjector seal cleaning\nCoil boot cleaning\nSpark plug cleaning\nOxygen sensor cleaning\nAir filter cleaning\nEngine oil instrument check\nBrake fluid instrument check\nCoolant instrument check\nPower steering fluid instrument check\nThrottle relearn\nRead and clear fault codes\nConverter camera inspection",
  "price": "SAR 120"
 },
 "engine-tune-approved-feature-0": {
  "title": "Injector care",
  "body": "Machine and ultrasonic injector cleaning in both packages.",
  "price": ""
 },
 "engine-tune-approved-feature-1": {
  "title": "Air and ignition systems",
  "body": "The Silver package includes the throttle, sensor, coil, and spark plug cleaning listed in its checklist.",
  "price": ""
 },
 "engine-tune-approved-feature-2": {
  "title": "Inspection and relearn",
  "body": "The Silver package includes listed fluid checks, fault-code reading and clearing, converter camera inspection, and throttle relearn.",
  "price": ""
 },
 "engine-tune-extra-105": {
  "title": "Additional work according to vehicle condition",
  "body": "Combustion chamber cleaning · EGR cleaning · Turbo cleaning · Fuel vapor valve cleaning · Fuel filter replacement · Valve cover gasket replacement · Intake manifold cleaning with equipment or removal, depending on vehicle",
  "price": "Price confirmed before service"
 },
 "engine-tune-note-106": {
  "title": "Replacement parts excluded",
  "body": "Offer covers cleaning only, excluding parts. The customer supplies spark plugs, injector seals, coil boots, air filter, and cabin filter; replacement is on request.",
  "price": ""
 },
 "engine-tune-internal": {
  "title": "Engine tune-up · Internal injectors and 6-cylinder vehicles",
  "body": "Two packages for injection, ignition, and air-system cleaning, with checks and relearn procedures listed for each option. Scope depends on injector type and vehicle compatibility.",
  "price": "From SAR 100"
 },
 "engine-tune-internal-poster": {
  "title": "Approved service offer",
  "body": "",
  "price": ""
 },
 "engine-tune-internal-approved-package-0": {
  "title": "Basic package",
  "body": "Machine injector cleaning\nUltrasonic injector cleaning\nVehicle programming",
  "price": "SAR 100"
 },
 "engine-tune-internal-approved-package-1": {
  "title": "Silver package",
  "body": "Machine injector cleaning\nUltrasonic injector cleaning\nThrottle cleaning\nIgnition coil cleaning\nVVT sensor cleaning\nShaft sensor cleaning\nMAF sensor cleaning\nMAP sensor cleaning\nInjector seal cleaning\nCoil boot cleaning\nSpark plug cleaning\nIntake manifold cleaning\nOxygen sensor cleaning\nAir filter cleaning\nEngine oil instrument check\nBrake fluid instrument check\nCoolant instrument check\nPower steering fluid instrument check\nThrottle relearn\nRead and clear fault codes\nConverter camera inspection",
  "price": "SAR 240"
 },
 "engine-tune-internal-approved-feature-0": {
  "title": "Injector care",
  "body": "Machine and ultrasonic injector cleaning in both packages.",
  "price": ""
 },
 "engine-tune-internal-approved-feature-1": {
  "title": "Air and ignition systems",
  "body": "The Silver package includes the throttle, sensor, coil, and spark plug cleaning listed in its checklist.",
  "price": ""
 },
 "engine-tune-internal-approved-feature-2": {
  "title": "Inspection and relearn",
  "body": "The Silver package includes listed fluid checks, fault-code reading and clearing, converter camera inspection, and throttle relearn.",
  "price": ""
 },
 "engine-tune-internal-extra-114": {
  "title": "Additional work according to vehicle condition",
  "body": "Combustion chamber cleaning · EGR cleaning · Turbo cleaning · Fuel vapor valve cleaning · Fuel filter replacement · Valve cover gasket replacement",
  "price": "Price confirmed before service"
 },
 "engine-tune-internal-note-115": {
  "title": "Replacement parts excluded",
  "body": "Offer covers cleaning only, excluding parts. The customer supplies spark plugs, injector seals, coil boots, air filter, and cabin filter; replacement is on request. Some vehicles do not permit manifold removal; cleaning is performed with equipment.",
  "price": ""
 }
};
export const replacedServiceIds=["engine-flush", "brake-fluid", "radiator", "tpms", "petrol-cleaning", "deep-cleaning", "specialized-inspection", "catalytic", "steering", "computer", "engine-tune", "engine-tune-internal"];

Object.assign(approvedEnglish,transmissionServiceEnglish);
