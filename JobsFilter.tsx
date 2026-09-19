"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

export function JobsFilter({
  cities,
  initialCity = "",
  initialType = "",
  initialQ = "",
}: {
  cities: string[];
  initialCity?: string;
  initialType?: string;
  initialQ?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [q, setQ] = useState(initialQ);

  const update = useCallback(
    (patch: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(patch).forEach(([key, value]) => {
        if (!value || value === "الكل") params.delete(key);
        else params.set(key, value);
      });
      startTransition(() => {
        router.push(`/jobs?${params.toString()}`);
      });
    },
    [router, searchParams]
  );

  return (
    <form
      className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:flex-wrap sm:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        update({ q });
      }}
    >
      <label className="flex min-w-[140px] flex-1 flex-col gap-1 text-sm">
        <span className="font-medium text-slate-700">كلمة مفتاحية</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="عنوان، جهة، مدينة…"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />
      </label>
      <label className="flex min-w-[120px] flex-col gap-1 text-sm">
        <span className="font-medium text-slate-700">المدينة</span>
        <select
          defaultValue={initialCity || "الكل"}
          onChange={(e) => update({ city: e.target.value })}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
        >
          <option value="الكل">الكل</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className="flex min-w-[120px] flex-col gap-1 text-sm">
        <span className="font-medium text-slate-700">النوع</span>
        <select
          defaultValue={initialType || ""}
          onChange={(e) => update({ type: e.target.value })}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
        >
          <option value="">الكل</option>
          <option value="حكومي">حكومي</option>
          <option value="خاص">خاص</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60"
      >
        بحث
      </button>
    </form>
  );
}
