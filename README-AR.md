# فاست زون — حزمة الموقع لـ Vercel

هذه نسخة من الموقع بتاريخ 1 أكتوبر 2026، اعتمادًا على المصدر المنشور رقم 29، مع تحويل تشغيل الخادم إلى Next.js ودخول مستقل للوحة الإدارة. تشمل الخدمات والباقات والمقالات والصور واللغة العربية والإنجليزية والمظهرين والتقييمات والحجوزات والكتالوج وحركة التقليب الأخيرة.

**ابدأ بهذا الملف. هذه حزمة مشروع كامل، وليست ملفات HTML تُرفع إلى public_html.** تحتاج Vercel لتشغيل الواجهة والخادم، وقاعدة Cloudflare D1 لحفظ البيانات، وتخزين Cloudflare R2 للصور وملفات PDF التي سترفعها لاحقًا. الصور والكتالوج الحالي مضمّنة في `public/`. يجب إنشاء موارد التخزين وقاعدة البيانات في حسابك أنت؛ موارد النسخة المنشورة هنا لا تنتقل تلقائيًا. توجد حصص استخدام وتكاليف محتملة لدى مزودي الخدمة؛ راجع حساباتك وخططك قبل الاستخدام.

## 1. المتطلبات

- حساب GitHub وحساب Vercel وحساب Cloudflare.
- Node.js إصدار 22.13 أو أحدث على جهازك. اختر Node.js 22.x أو إصدارًا متوافقًا في إعدادات Vercel.
- مدير الحزم pnpm بالإصدار المحدد في `package.json`، باستخدام Corepack أو تثبيت pnpm المناسب.

افتح المجلد `fast-zone-vercel` في الطرفية. في Windows يمكن استخدام PowerShell أو طرفية VS Code:

```powershell
corepack enable
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
node scripts/generate-admin-secrets.mjs
```

الأمر الأخير يولد كلمة مرور ومفتاح جلسة جديدين. احتفظ بهما في مدير كلمات المرور، وأدخلهما في `.env.local` ومتغيرات Vercel. اختر اسم المستخدم بنفسك. لا يوجد اسم مستخدم أو كلمة مرور افتراضيان.

## 2. إنشاء قاعدة البيانات

1. من حساب Cloudflare افتح **Workers & Pages → D1** وأنشئ قاعدة جديدة فارغة، مثل `fast-zone`.
2. انسخ **Account ID** و**Database ID** إلى `.env.local`.
3. أنشئ API Token بصلاحية **Account → D1 → Edit** لحسابك، وضعه في `CLOUDFLARE_D1_API_TOKEN`. لا تستخدم Global API Key.
4. شغّل من جذر المشروع:

```powershell
pnpm db:import
```

هذا الأمر ينشئ الجداول ويستورد النسخة الحالية من المحتوى والإعدادات. يتوقف إذا كانت جداول الموقع موجودة بالفعل، حتى لا يستبدل بيانات موقع يعمل. عند فشل الاستيراد جزئيًا، أنشئ قاعدة جديدة فارغة وأعد المحاولة بعد تصحيح السبب.

ملف `backup/database.json` يتضمن 233 عنصر محتوى و141 إعدادًا، ولا يحتوي على مفاتيح الوصول إلى خدمات الاستضافة أو حساب مالك ChatGPT. لم تكن هناك طلبات حجز محفوظة وقت التصدير. ملف `backup/schema.sql` يحتوي على مخطط الجداول. لا تضع مجلد `backup` داخل `public` ولا تقدم محتواه كتنزيل عام.

## 3. تجهيز رفع الصور والكتالوجات المستقبلية

1. أنشئ R2 bucket في حساب Cloudflare، مثل `fast-zone-media`.
2. أنشئ مفاتيح **S3 / Object Read & Write** مقيّدة بهذا الـ bucket.
3. ضع الاسم والمفاتيح في `R2_BUCKET_NAME` و`R2_ACCESS_KEY_ID` و`R2_SECRET_ACCESS_KEY`.
4. من إعدادات الـ bucket أضف CORS. غيّر الرابطين في المثال إلى رابط مشروعك ورابط نطاقك. أضف `http://localhost:3000` فقط إذا أردت تجربة الرفع محليًا.

```json
[
  {
    "AllowedOrigins": ["https://YOUR-PROJECT.vercel.app", "https://YOUR-DOMAIN.sa", "http://localhost:3000"],
    "AllowedMethods": ["GET", "HEAD", "PUT"],
    "AllowedHeaders": ["Content-Type", "Range"],
    "ExposeHeaders": ["Content-Length", "Content-Range", "Accept-Ranges", "ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

يُرسل المتصفح الملف مباشرة إلى R2 برابط مؤقت صادر بعد التحقق من صلاحية المدير. بذلك لا يمر ملف PDF الكبير داخل دالة Vercel. يدعم اختيار الصور حتى 5 ميغابايت وPDF حتى 25 ميغابايت. لا تجعل الـ bucket عامًا؛ قارئ الموقع يحصل على روابط تنزيل مؤقتة.

## 4. إعداد دخول الإدارة

املأ كل المفاتيح الموجودة في `.env.example`:

| المتغير | ما يوضع فيه |
|---|---|
| `SITE_URL` | أصل رابط الموقع النهائي، مثل `https://fastzone.example`، بلا مسار |
| `ADMIN_USERNAME` | اسم مستخدم تختاره |
| `ADMIN_PASSWORD` | كلمة مرور عشوائية لا تقل عن 16 حرفًا |
| `ADMIN_SESSION_SECRET` | مفتاح عشوائي لا يقل عن 32 حرفًا |
| `CLOUDFLARE_ACCOUNT_ID` | رقم حسابك في Cloudflare |
| `CLOUDFLARE_D1_DATABASE_ID` | رقم قاعدة D1 الجديدة |
| `CLOUDFLARE_D1_API_TOKEN` | رمز D1 الخاص بحسابك |
| `R2_BUCKET_NAME` | اسم bucket |
| `R2_ACCESS_KEY_ID` | مفتاح الوصول S3 |
| `R2_SECRET_ACCESS_KEY` | مفتاح S3 السري |

للتجربة المحلية اجعل `SITE_URL=http://localhost:3000`. للإنتاج اجعله أصل الرابط الذي ستدخل منه لوحة الإدارة. إذا أضفت نطاقًا مخصصًا، حدّث `SITE_URL` وCORS ثم أعد النشر. لا تستخدم روابط Preview متغيرة للدخول إلا بعد تعديل الإعدادات لذلك الرابط.

## 5. الرفع إلى GitHub ثم Vercel

1. أنشئ مستودعًا خاصًا في GitHub وارفع **محتويات** مجلد `fast-zone-vercel` كاملة، بما فيها `public/` و`app/` و`components/` و`lib/` و`db/` و`scripts/` و`backup/` وملفات الإعداد والقفل. إذا رفعت المجلد نفسه، اختره كـ Root Directory في Vercel.
2. لا ترفع `node_modules` أو `.next` أو `.env.local`. ملف `.env.example` فقط هو نموذج بلا أسرار.
3. في Vercel اختر **Add New → Project** ثم استورد المستودع.
4. Framework: **Next.js**. Build: `pnpm build`. Install: `pnpm install --frozen-lockfile`. اترك Output Directory بالإعداد الافتراضي؛ لا تختَر `public`.
5. أدخل جميع المتغيرات السابقة في **Settings → Environment Variables**. فعّلها لبيئة Production.
6. اضبط `SITE_URL` على رابط المشروع النهائي، ثم Deploy. إذا لم تعرف الرابط قبل أول نشر، عدّله بعد معرفة الرابط ثم Redeploy قبل اختبار تسجيل الدخول.
7. افتح `/admin/login`، وادخل ببياناتك الجديدة.

أي تعديل محتوى من لوحة التحكم يُحفظ في D1. الملفات الجديدة تُحفظ في R2. أي تعديل كود على GitHub يُبنى ويُنشر بواسطة Vercel.

## 6. فحص الموقع بعد النشر

- افتح الصفحة الرئيسية والخدمات والمقالات والتقييمات والكتالوج.
- جرّب العربية والإنجليزية والمظهر الفاتح والغامق.
- افتح خدمة، أضفها إلى «خدماتي»، ثم أضف خدمة ثانية وراجع رسالة واتساب قبل إرسالها.
- افتح الكتالوج وجرّب التالي والسابق من الأطراف، وعلى الجوال جرّب السحب.
- أرسل تقييمًا تجريبيًا؛ ينبغي ظهوره في قائمة المراجعة بلوحة التحكم قبل نشره.
- جرّب حفظ تعديل في لوحة التحكم ورفع صورة وPDF، ثم افتحهما من الموقع.
- جرّب حجز موعد وتحقق من ظهور الطلب في لوحة الإدارة.

فحص الحزمة هنا شمل TypeScript، بناء Next.js، استعادة SQL في قاعدة اختبار، وتحقق وجود الصور والكتالوج المشار إليها. كذلك نجحت اختبارات تشغيل الصفحات، حماية دخول الإدارة وتسجيل الخروج، حفظ الإعدادات، رفض الطلبات من أصل غير معتمد، تسجيل تقييم قيد المراجعة، وتطبيق سعة الحجز تحت طلبات متزامنة، باستخدام خادم اختبار محلي يحاكي واجهة D1. تم التحقق من توليد روابط رفع الملفات الكبيرة؛ لم يتم رفع ملفات إلى R2 حقيقي بدون مفاتيح حسابك. تشغيل D1/R2 في حسابك ونشر Vercel يحتاج متغيراتك؛ لذلك يجب تنفيذ الفحص السابق بعد الربط. لا تحتوي الحزمة على ربط Google Reviews مفعل أو سكربت سحب Google Maps؛ نظام التقييم الحالي خاص بالموقع.

## 7. استضافة أخرى

يمكن تشغيل المشروع على خادم يدعم Node.js: `pnpm build` ثم `pnpm start`، مع نفس متغيرات D1/R2 وHTTPS وعكس الطلبات إلى المنفذ 3000. لا يصلح رفع الحزمة كما هي إلى استضافة PHP فقط أو `public_html`. نسخة المصدر الأصلية المرفقة تعمل على بيئة Cloudflare/Sites وتختلف في التشغيل ودخول الإدارة عن هذه الحزمة.

## الملفات المهمة

- `app/`: الصفحات ومسارات الخادم.
- `components/`: واجهات الخدمات والمقالات والإدارة وقارئ المجلة.
- `lib/`: بيانات الخدمات والترجمة والإعدادات وربط التخزين والجلسات.
- `public/`: الصور والشعار وPDF وصفحات WebP السريعة وعامل PDF.
- `backup/`: بيانات الموقع الحالية ومخطط القاعدة.
- `scripts/import-database.mjs`: استيراد النسخة الحالية إلى قاعدة جديدة.
- `.env.example`: نموذج الإعدادات بلا أسرار.
- `package.json` و`pnpm-lock.yaml`: الحزم وأوامر التشغيل.

## مراجع الإعداد الرسمية

- Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- حد ملفات دوال Vercel: https://vercel.com/docs/functions/limitations
- Cloudflare D1 API: https://developers.cloudflare.com/d1/best-practices/query-d1/
- R2 والروابط المؤقتة: https://developers.cloudflare.com/r2/api/s3/presigned-urls/
- R2 CORS: https://developers.cloudflare.com/r2/buckets/cors/
- استضافة Next.js: https://nextjs.org/docs/app/getting-started/deploying


Browser setup: see SETUP-GITHUB-AR.md. You can import the database from GitHub Actions using the included manual Initialize Fast Zone Database workflow; no local Node.js installation is required for this path.
