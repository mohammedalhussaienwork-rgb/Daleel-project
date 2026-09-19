import { brand } from "@/config/brand";

export function DisclaimerBanner({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className={`rounded-xl border border-amber-200 bg-amber-50 text-amber-950 ${
        compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
      }`}
      role="note"
    >
      <p className="font-semibold">منصة مستقلة — لسنا جهة حكومية</p>
      {!compact && (
        <p className="mt-1 leading-relaxed opacity-90">
          {brand.independenceDisclaimer}
        </p>
      )}
    </aside>
  );
}
