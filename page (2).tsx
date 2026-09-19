import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: "عن المنصة",
  description: `تعرف على ${brand.nameAr} — منصة مستقلة لتجميع الفرص الوظيفية.`,
};

export default function AboutPage() {
  return (
    <div className="prose-ar mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        عن {brand.nameAr}
      </h1>

      <DisclaimerBanner />

      <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 text-slate-700 leading-relaxed">
        <p>
          <strong>{brand.nameAr}</strong> ({brand.nameEn}) منصة مستقلة تهدف إلى
          تسهيل الاطلاع على إعلانات الوظائف المنشورة في مصادر عامة ورسمية داخل
          المملكة العربية السعودية.
        </p>
        <p>
          نجمع الروابط والملخصات يدويًا في ملفات محتوى، ونعرضها بواجهة عربية
          بسيطة. التقديم دائمًا عبر المصدر الرسمي — وليس عبر موقعنا.
        </p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">ما الذي لسنا عليه؟</h2>
        <ul className="list-disc space-y-1 pr-5">
          <li>لسنا موقعًا حكوميًا ولا نمثل أي وزارة أو هيئة.</li>
          <li>لا نستقبل طلبات توظيف ولا نوسط بين المتقدم والجهة.</li>
          <li>لا نضمن اكتمال أو استمرار أي إعلان.</li>
        </ul>
        <h2 className="pt-2 text-lg font-bold text-slate-900">المحتوى الحالي</h2>
        <p>
          الفرص المعروضة في النسخة التجريبية أمثلة وهمية للتوضيح فقط، وروابطها
          نمطيه (مثل jadarat.sa / spa.gov.sa) وليست فرصًا حقيقية مفتوحة.
        </p>
      </section>
    </div>
  );
}
