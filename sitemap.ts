import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { getAllJobs } from "@/lib/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    {
      url: `${base}/jobs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const jobPages: MetadataRoute.Sitemap = getAllJobs().map((job) => ({
    url: `${base}/jobs/${job.slug}`,
    lastModified: new Date(job.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...jobPages];
}
