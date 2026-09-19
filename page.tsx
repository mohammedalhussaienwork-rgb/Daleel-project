import type { Metadata } from "next";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: `تواصل مع فريق ${brand.nameAr}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        تواصل معنا
      </h1>
      <p className="text-slate-600 leading-relaxed">
        للاستفسارات العامة أو الإبلاغ عن خطأ في المحتوى، راسلنا عبر البريد.
        لا نستقبل طلبات التوظيف هنا.
      </p>

      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
        <div>
          <p className="text-xs text-slate-500">البريد الإلكتروني</p>
          <a
            href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent(
              `استفسار — ${brand.nameAr}`
            )}`}
            className="text-lg font-medium text-emerald-700 hover:underline"
          >
            {brand.contactEmail}
          </a>
        </div>

        {/* نموذج ثابت بدون خلفية — للعرض فقط */}
        <form className="space-y-3 border-t border-slate-100 pt-4" action="#">
          <p className="text-sm font-medium text-slate-700">
            نموذج تواصل (واجهة فقط — استخدم البريد أعلاه)
          </p>
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            disabled
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400"
          />
          <input
            type="email"
            name="email"
            placeholder="بريدك"
            disabled
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="رسالتك"
            disabled
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400"
          />
          <button
            type="button"
            disabled
            className="rounded-lg bg-slate-300 px-4 py-2 text-sm text-slate-600"
          >
            غير مفعّل — استخدم mailto
          </button>
        </form>
      </div>
    </div>
  );
}
