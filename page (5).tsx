import { Suspense } from "react";
import type { Metadata } from "next";
import {
  filterJobs,
  getAllJobs,
  getUniqueCities,
} from "@/lib/jobs";
import type { JobType } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { JobsFilter } from "@/components/JobsFilter";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: "الفرص الوظيفية",
  description: "تصفح الفرص المجمّعة من مصادر عامة ورسمية — أمثلة تجريبية حاليًا.",
};

type SearchParams = Promise<{
  city?: string;
  type?: string;
  q?: string;
}>;

export default async function JobsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const all = getAllJobs();
  const cities = getUniqueCities(all);
  const type =
    params.type === "حكومي" || params.type === "خاص"
      ? (params.type as JobType)
      : "";
  const filtered = filterJobs(all, {
    city: params.city,
    type,
    q: params.q,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          الفرص الوظيفية
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          فلترة بسيطة حسب المدينة والنوع والكلمة المفتاحية. التقديم عبر المصدر
          الرسمي فقط.
        </p>
      </div>

      <DisclaimerBanner compact />

      <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-slate-100" />}>
        <JobsFilter
          cities={cities}
          initialCity={params.city || ""}
          initialType={type}
          initialQ={params.q || ""}
        />
      </Suspense>

      <AdPlaceholder label="مساحة إعلانية" />

      <p className="text-sm text-slate-500">
        النتائج: <strong>{filtered.length}</strong> فرصة
        <span className="mr-2 text-violet-700"> (أمثلة تجريبية)</span>
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          لا توجد نتائج مطابقة. جرّب تغيير عوامل التصفية.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
