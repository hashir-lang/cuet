import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { faculties } from '@/content/faculties';
import { programs } from '@/content/programs';
import { news } from '@/content/news';
import { events } from '@/content/events';

/** XML sitemap. Template news/events entries are excluded until real content replaces them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: [string, number][] = [
    ['/', 1],
    ['/about', 0.7],
    ['/faculties', 0.9],
    ['/programs', 0.9],
    ['/admissions', 0.9],
    ['/admissions/how-to-apply', 0.8],
    ['/admissions/requirements', 0.8],
    ['/admissions/apply', 0.8],
    ['/campus', 0.6],
    ['/campus/facilities', 0.6],
    ['/student-life', 0.6],
    ['/news', 0.5],
    ['/events', 0.5],
    ['/contact', 0.6],
  ];
  const url = (p: string) => `${site.url}${p === '/' ? '' : p}`;

  return [
    ...staticPaths.map(([p, priority]) => ({ url: url(p), changeFrequency: 'monthly' as const, priority })),
    ...faculties.map((f) => ({ url: url(`/faculties/${f.slug}`), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...programs.map((p) => ({ url: url(`/programs/${p.slug}`), changeFrequency: 'monthly' as const, priority: 0.9 })),
    ...news.filter((n) => !n.isTemplate).map((n) => ({ url: url(`/news/${n.slug}`), lastModified: n.publishedAt ?? undefined, priority: 0.5 })),
    ...events.filter((e) => !e.isTemplate).map((e) => ({ url: url(`/events/${e.slug}`), priority: 0.5 })),
  ];
}
