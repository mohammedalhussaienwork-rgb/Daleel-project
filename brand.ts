/**
 * إعدادات العلامة التجارية — عدّل هنا لإعادة تسمية الموقع بسهولة
 */
export const brand = {
  nameAr: "دليل الفرص",
  nameEn: "Daleel Al-Foras",
  tagline: "تجميع فرص وظيفية من مصادر رسمية عامة في المملكة",
  description:
    "منصة مستقلة تجمع إعلانات الوظائف من مصادر عامة ورسمية في السعودية لتسهيل الاطلاع عليها. لسنا جهة حكومية ولا نمثل أي وزارة أو هيئة.",
  siteUrl: "https://daleel-alforas.example",
  contactEmail: "contact@daleel-alforas.example",
  locale: "ar-SA",
  independenceDisclaimer:
    "تنويه مهم: دليل الفرص منصة مستقلة وغير رسمية. لا نتبع أي جهة حكومية، ولا نضمن دقة أو استمرار الفرص المنشورة. التقديم يتم فقط عبر الرابط الرسمي للمصدر.",
} as const;

export type BrandConfig = typeof brand;
