import type { Metadata } from "next";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: `سياسة الخصوصية لموقع ${brand.nameAr} — جاهزة لإعلانات Google لاحقًا.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-slate-700 leading-relaxed">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        سياسة الخصوصية
      </h1>
      <p className="text-sm text-slate-500">
        آخر تحديث: سبتمبر 2026 — نسخة تمهيدية لموقع مستقل.
      </p>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">من نحن</h2>
        <p>
          يشغّل موقع {brand.nameAr} ({brand.nameEn}) كمنصة مستقلة لعرض ملخصات
          فرص وظيفية من مصادر عامة. لسنا جهة حكومية.
        </p>

        <h2 className="pt-2 text-lg font-bold text-slate-900">
          البيانات التي نجمعها
        </h2>
        <p>
          في مرحلة الـ MVP لا نطلب تسجيل دخول ولا نجمع بيانات شخصية عبر نماذج
          خلفية. إن راسلتنا عبر البريد، تُستخدم رسالتك للرد فقط.
        </p>

        <h2 className="pt-2 text-lg font-bold text-slate-900">
          ملفات تعريف الارتباط (Cookies)
        </h2>
        <p>
          قد يستخدم الموقع لاحقًا ملفات تعريف ارتباط ضرورية للتشغيل أو لتحسين
          التجربة. عند تفعيل الإعلانات، قد تضع جهات خارجية (مثل Google)
          ملفات تعريف ارتباط لأغراض الإعلان والقياس.
        </p>
        {/* Placeholder: تفاصيل ملفات الارتباط للإعلانات */}

        <h2 className="pt-2 text-lg font-bold text-slate-900">
          الإعلانات (Google AdSense — لاحقًا)
        </h2>
        <p>
          نخطط لعرض إعلانات عبر Google AdSense. عند التفعيل، قد تستخدم Google
          تقنيات مثل ملفات الارتباط لعرض إعلانات بناءً على زياراتك السابقة لهذا
          الموقع أو لمواقع أخرى. يمكنك إدارة تفضيلات الإعلانات عبر إعدادات Google
          للإعلانات و/أو أدوات إلغاء الاشتراك المتاحة من Network Advertising
          Initiative.
        </p>
        {/* لا يوجد كود AdSense حقيقي في هذه النسخة */}
        <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
          ملاحظة للمطوّر: مساحات الإعلان في الواجهة فارغة حاليًا (placeholders)
          ولا تتضمن معرّف ناشر AdSense.
        </p>

        <h2 className="pt-2 text-lg font-bold text-slate-900">الروابط الخارجية</h2>
        <p>
          عند النقر على «التقديم من المصدر الرسمي» تنتقل إلى موقع جهة أخرى. لا
          نتحكم في سياسات خصوصية تلك المواقع.
        </p>

        <h2 className="pt-2 text-lg font-bold text-slate-900">التواصل</h2>
        <p>
          للاستفسارات المتعلقة بالخصوصية:{" "}
          <a
            href={`mailto:${brand.contactEmail}`}
            className="text-emerald-700 hover:underline"
          >
            {brand.contactEmail}
          </a>
        </p>
      </section>
    </div>
  );
}
