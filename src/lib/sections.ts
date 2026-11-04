import type { Metadata } from 'next';
import { sectionByKey, sections, type Section, type SectionKey, type SectionLink, type SectionPage } from '@/content/sections';
import { site } from '@/content/site';
import { pageMeta } from './seo';
import type { Crumb } from '@/components/ui/Breadcrumbs';

/** URL of a sub-page: its bespoke route when it has one, otherwise the generic route under the section. */
export const pageHref = (section: Section, page: SectionPage) => page.href ?? `${section.path}/${page.slug}`;

/** Pages rendered by the generic template (those without a bespoke route). */
export const genericPages = (section: Section) => section.pages.filter((p) => !p.href);

export const genericPage = (key: SectionKey, slug: string) => {
  const section = sectionByKey(key);
  const page = genericPages(section).find((p) => p.slug === slug);
  return { section, page };
};

/** Links for the main menu: the section's own list when given, otherwise one link per page. */
export const menuLinks = (section: Section): SectionLink[] =>
  section.menuLinks ?? section.pages.map((p) => ({ label: p.navLabel ?? p.title, href: pageHref(section, p), description: p.summary }));

/** Links for the side navigation on the section's pages. */
export const sideNavLinks = (section: Section): SectionLink[] =>
  section.sideNav ?? section.pages.map((p) => ({ label: p.navLabel ?? p.title, href: pageHref(section, p) }));

/** The section's hub: its own page, or the parent it belongs to when it has none (e.g. media pages under News & Events). */
export const sectionHub = (section: Section) => section.hub ?? { label: section.label, href: section.path };

/** Breadcrumbs for a page inside a section. */
export const sectionCrumbs = (section: Section, page?: { title: string; href: string }): Crumb[] => {
  const hub = sectionHub(section);
  return [{ name: hub.label, href: hub.href }, ...(page ? [{ name: page.title, href: page.href }] : [])];
};

/** Page metadata for a generic sub-page: unique title, a description of useful length, canonical URL. */
export function sectionPageMeta(section: Section, page: SectionPage): Metadata {
  return pageMeta({
    title: page.title,
    description: `${page.summary} ${section.title} at ${site.name}, ${site.city}.`,
    path: pageHref(section, page),
  });
}

/** Every static path that the sections contribute to the XML sitemap. */
export const sectionPaths = (): string[] =>
  sections.flatMap((s) => [...(s.hidden ? [] : [s.path]), ...genericPages(s).map((p) => pageHref(s, p))]);
