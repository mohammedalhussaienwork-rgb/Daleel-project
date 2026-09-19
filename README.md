# دليل الفرص (Daleel Al-Foras)

منصة عربية مستقلة لتجميع ملخصات فرص وظيفية من مصادر عامة ورسمية في السعودية.

> **تنويه:** لسنا جهة حكومية. الفرص الحالية في المستودع **أمثلة تجريبية** فقط وليست إعلانات حقيقية مفتوحة.

المستودع المقترح على GitHub: `mohammedalhussaienwork-rgb/Daleel-project`

## التشغيل محليًا

```bash
cd daleel-alforas
npm install
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

للبناء للإنتاج:

```bash
npm run build
npm start
```

## إضافة وظيفة جديدة

أنشئ ملف JSON جديد داخل `content/jobs/` بنفس الحقول (`slug`, `title`, `entity`, `city`, `type`, `deadline?`, `summary`, `sourceName`, `sourceUrl`, `publishedAt`, ويفضّل `isSample`) ثم أعد تشغيل أو ابنِ الموقع.

مثال اسم ملف: `content/jobs/my-new-job.json` مع `"slug": "my-new-job"`.

## إعادة تسمية العلامة

عدّل الملف `src/config/brand.ts` (الاسم العربي/الإنجليزي، الوصف، البريد، رابط الموقع، نص التنويه).

## الصفحات

| المسار | الوصف |
|--------|--------|
| `/` | الرئيسية |
| `/jobs` | قائمة مع فلترة (مدينة / نوع / كلمة) |
| `/jobs/[slug]` | تفاصيل فرصة |
| `/about` | عن المنصة |
| `/contact` | تواصل (mailto) |
| `/privacy` | خصوصية جاهزة لـ AdSense لاحقًا |

## ملاحظات تقنية

- Next.js App Router + TypeScript + Tailwind CSS
- واجهة RTL عربية بالكامل
- مساحات AdSense فارغة (placeholders) بدون معرف ناشر
- SEO: metadata، `sitemap.ts`، `robots.ts`، Open Graph أساسي

## خارج النطاق (MVP)

لا يوجد سحب تلقائي (scraping)، ولا مصادقة، ولا نشر تلقائي، ولا كود AdSense حقيقي.
