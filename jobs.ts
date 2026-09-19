import fs from "fs";
import path from "path";
import type { Job, JobType } from "@/types/job";

const JOBS_DIR = path.join(process.cwd(), "content", "jobs");

export function getAllJobs(): Job[] {
  if (!fs.existsSync(JOBS_DIR)) return [];

  const files = fs
    .readdirSync(JOBS_DIR)
    .filter((f) => f.endsWith(".json"));

  const jobs: Job[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(JOBS_DIR, file), "utf-8");
    return JSON.parse(raw) as Job;
  });

  return jobs.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getJobBySlug(slug: string): Job | undefined {
  return getAllJobs().find((j) => j.slug === slug);
}

export function getJobSlugs(): string[] {
  return getAllJobs().map((j) => j.slug);
}

export interface JobFilters {
  city?: string;
  type?: JobType | "";
  q?: string;
}

export function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  return jobs.filter((job) => {
    if (filters.city && filters.city !== "الكل" && job.city !== filters.city) {
      return false;
    }
    if (filters.type && job.type !== filters.type) {
      return false;
    }
    if (filters.q) {
      const q = filters.q.trim().toLowerCase();
      const hay = `${job.title} ${job.entity} ${job.city} ${job.summary}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function getUniqueCities(jobs: Job[]): string[] {
  return Array.from(new Set(jobs.map((j) => j.city))).sort((a, b) =>
    a.localeCompare(b, "ar")
  );
}

export function formatDateAr(iso: string): string {
  try {
    return new Intl.DateTimeFormat("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
