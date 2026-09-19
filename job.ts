export type JobType = "حكومي" | "خاص";

export interface Job {
  slug: string;
  title: string;
  entity: string;
  city: string;
  type: JobType;
  deadline?: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  /** أمثلة تجريبية فقط — ليست فرصًا حقيقية */
  isSample?: boolean;
}
