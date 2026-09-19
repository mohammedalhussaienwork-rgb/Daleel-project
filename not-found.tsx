import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-bold text-slate-900">الصفحة غير موجودة</h1>
      <p className="mt-2 text-slate-600">تعذّر العثور على الصفحة المطلوبة.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
