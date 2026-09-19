import Link from "next/link";
import { brand } from "@/config/brand";
import { getAllJobs } from "@/lib/jobs";
import { JobCard } from "@/components/JobCard";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function HomePage() {
  const latest = getAllJobs().slice(0, 4);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-l from-emerald-800 to-emerald-600 px-6 py-10 text-white shadow-lg sm:px-10">
        <p className="text-sm font-medium text-emerald-100">{brand.nameEn}</p>
        <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{brand.nameAr}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-emerald-50 sm:text-lg">
          {brand.tagline}
        </p>
        <p className="mt-2 max-w-2xl text-sm text-emerald-100/90">
          {brand.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/jobs"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-emerald-800 shadow hover:bg-emerald-50"
          >
            تصفح الفرص
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            عن المنصة
          </Link>
        </div>
      </section>

      <DisclaimerBanner />

      {/* AdSense placeholder — أعلى الصفحة */}
      <AdPlaceholder label="مساحة إعلانية (أعلى)" />

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">أحدث الفرص</h2>
          <Link
            href="/jobs"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            عرض الكل
          </Link>
        </div>
        <p className="mb-4 text-xs text-violet-700">
          المحتوى الحالي أمثلة تجريبية للتوضيح — ليست فرصًا حقيقية مفتوحة.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {latest.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      <AdPlaceholder label="مساحة إعلانية (وسط)" />
    </div>
  );
}
