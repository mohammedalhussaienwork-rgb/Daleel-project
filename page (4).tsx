import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getJobBySlug, formatDateAr } from "@/lib/jobs";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { brand } from "@/config/brand";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "فرصة غير موجودة" };
  return {
    title: job.title,
    description: job.summary,
    openGraph: {
      title: job.title,
      description: job.summary,
      locale: brand.locale,
      type: "article",
    },
  };
}

export default async function JobDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <article className="space-y-6">
      <nav className="text-sm text-slate-500">
        <Link href="/jobs" className="hover:text-emerald-700">
          الفرص
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{job.title}</span>
      </nav>

      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {job.isSample && (
            <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800">
              أمثلة تجريبية
            </span>
          )}
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              job.type === "حكومي"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-sky-100 text-sky-800"
            }`}
          >
            {job.type}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {job.title}
        </h1>
        <p className="text-lg text-slate-700">{job.entity}</p>
      </header>

      <DisclaimerBanner compact />

      <dl className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-slate-500">المدينة</dt>
          <dd className="font-medium text-slate-900">{job.city}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">تاريخ النشر</dt>
          <dd className="font-medium text-slate-900">
            {formatDateAr(job.publishedAt)}
          </dd>
        </div>
        {job.deadline && (
          <div>
            <dt className="text-xs text-slate-500">آخر موعد للتقديم</dt>
            <dd className="font-medium text-slate-900">
              {formatDateAr(job.deadline)}
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs text-slate-500">المصدر</dt>
          <dd className="font-medium text-slate-900">{job.sourceName}</dd>
        </div>
      </dl>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">ملخص الفرصة</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{job.summary}</p>
      </section>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href={job.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3.5 text-center text-base font-bold text-white shadow-md hover:bg-emerald-800"
        >
          التقديم من المصدر الرسمي
        </a>
        <p className="text-xs text-slate-500 sm:max-w-xs">
          سيتم فتح رابط المصدر الخارجي. نحن لا نستقبل طلبات التقديم على هذا
          الموقع.
        </p>
      </div>

      <AdPlaceholder label="مساحة إعلانية" />

      <Link
        href="/jobs"
        className="inline-block text-sm font-medium text-emerald-700 hover:underline"
      >
        ← العودة لقائمة الفرص
      </Link>
    </article>
  );
}
