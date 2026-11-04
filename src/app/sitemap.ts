import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { departments, faculties } from '@/content/faculties';
import { programs } from '@/content/programs';
import { news, newsCategories } from '@/content/news';
import { events } from '@/content/events';
import { sectionPaths } from '@/lib/sections';

/** XML sitemap. Template news/events entries are excluded until real content replaces them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const priorities: Record<string, number> = {
    '/': 1,
    '/admissions': 0.9,
    '/programs': 0.9,
    '/faculties': 0.9,
    '/academics': 0.8,
    '/about': 0.7,
    '/campus-life': 0.7,
    '/contact': 0.6,
  };
  const bespoke = [
    '/navigate',
    '/faculties',
    '/programs',
    '/programs/undergraduate',
    '/programs/associate',
    '/campus',
    '/campus/facilities',
    '/events',
    '/admissions/how-to-apply',
    '/admissions/programs-eligibility',
    '/admissions/apply',
    '/contact/visit',
    '/contact/ask',
    '/contact/feedback',
    '/events/category/seminars-conferences',
    '/events/category/workshops-training',
    ...newsCategories.filter((c) => c.slug !== 'university-news').map((c) => `/news/category/${c.slug}`),
    ...departments.map((d) => `/teaching-faculty/${d.slug}`),
  ];
  const staticPaths = Array.from(new Set(['/', ...sectionPaths(), ...bespoke]));
  const url = (p: string) => `${site.url}${p === '/' ? '' : p}`;

  return [
    ...staticPaths.map((p) => ({ url: url(p), changeFrequency: 'monthly' as const, priority: priorities[p] ?? 0.5 })),
    ...faculties.map((f) => ({ url: url(`/faculties/${f.slug}`), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...programs.map((p) => ({ url: url(`/programs/${p.slug}`), changeFrequency: 'monthly' as const, priority: 0.9 })),
    ...news.filter((n) => !n.isTemplate).map((n) => ({ url: url(`/news/${n.slug}`), lastModified: n.publishedAt ?? undefined, priority: 0.5 })),
    ...events.filter((e) => !e.isTemplate).map((e) => ({ url: url(`/events/${e.slug}`), priority: 0.5 })),
  ];
}
