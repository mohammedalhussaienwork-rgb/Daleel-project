/**
 * مساحة إعلانية محجوزة لـ AdSense لاحقًا.
 * لا تضع هنا معرفات AdSense حقيقية في مرحلة الـ MVP.
 */
export function AdPlaceholder({
  label = "مساحة إعلانية",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 ${className}`}
      aria-hidden="true"
      data-ad-slot="placeholder"
    >
      {/* AdSense: استبدل هذا الـ div بكود الإعلانات لاحقًا */}
      {label}
    </div>
  );
}
