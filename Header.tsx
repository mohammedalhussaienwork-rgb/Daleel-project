import Link from "next/link";
import { brand } from "@/config/brand";

const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/jobs", label: "الفرص" },
  { href: "/about", label: "عن المنصة" },
  { href: "/contact", label: "تواصل" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-bold text-emerald-800 group-hover:text-emerald-700">
            {brand.nameAr}
          </span>
          <span className="text-xs text-slate-500">{brand.nameEn}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
