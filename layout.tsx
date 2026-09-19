import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { brand } from "@/config/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: `${brand.nameAr} | ${brand.nameEn}`,
    template: `%s | ${brand.nameAr}`,
  },
  description: brand.description,
  openGraph: {
    type: "website",
    locale: brand.locale,
    siteName: brand.nameAr,
    title: brand.nameAr,
    description: brand.description,
    url: brand.siteUrl,
  },
  twitter: {
    card: "summary",
    title: brand.nameAr,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
