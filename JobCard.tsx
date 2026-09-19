import Link from "next/link";
import type { Job } from "@/types/job";
import { formatDateAr } from "@/lib/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Link
            href={`/jobs/${job.slug}`}
            className="text-base font-bold text-slate-900 hover:text-emerald-800"
          >
            {job.title}
          </Link>
          <p className="mt-1 text-sm text-slate-600">{job.entity}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {job.isSample && (
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800">
              أمثلة تجريبية
            </span>
          )}
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              job.type === "حكومي"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-sky-100 text-sky-800"
            }`}
          >
            {job.type}
          </span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
        <span>📍 {job.city}</span>
        <span>📅 نُشر: {formatDateAr(job.publishedAt)}</span>
        {job.deadline && <span>⏳ آخر موعد: {formatDateAr(job.deadline)}</span>}
        <span>🔗 {job.sourceName}</span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-slate-600">{job.summary}</p>
      <Link
        href={`/jobs/${job.slug}`}
        className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline"
      >
        عرض التفاصيل ←
      </Link>
    </article>
  );
}
