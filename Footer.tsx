import Link from "next/link";
import { brand } from "@/config/brand";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-bold text-emerald-800">{brand.nameAr}</p>
            <p className="mt-1 max-w-md text-sm text-slate-600">{brand.tagline}</p>
            <p className="mt-3 text-xs leading-relaxed text-amber-800/90">
              {brand.independenceDisclaimer}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/about" className="hover:text-emerald-700">
              عن المنصة
            </Link>
            <Link href="/privacy" className="hover:text-emerald-700">
              الخصوصية
            </Link>
            <Link href="/contact" className="hover:text-emerald-700">
              تواصل معنا
            </Link>
            <Link href="/jobs" className="hover:text-emerald-700">
              جميع الفرص
            </Link>
          </div>
        </div>
        <p className="mt-6 border-t border-slate-200 pt-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {brand.nameAr} — منصة مستقلة
        </p>
      </div>
    </footer>
  );
}
