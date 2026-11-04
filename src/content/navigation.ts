import { sections, type SectionLink } from './sections';
import { menuLinks } from '@/lib/sections';
import { site } from './site';

/**
 * Main and footer navigation. The main menu is built from the sitemap in sections.ts
 * (Annex-A of the University's brief). Every href must point to an existing page;
 * `npm run check:links` reports any that do not.
 */

export type NavLink = SectionLink;
export type NavGroup = { label: string; href: string; links: NavLink[]; kind?: 'academics' | 'departments' };

export const mainNav: (NavLink | NavGroup)[] = sections
  .filter((s) => !s.hidden)
  .map((s) => {
    const links = menuLinks(s);
    if (links.length === 0) return { label: s.label, href: s.path };
    const kind = s.key === 'academics' ? 'academics' : s.key === 'teaching-faculty' ? 'departments' : undefined;
    return { label: s.label, href: s.path, links, kind };
  });

export const isGroup = (item: NavLink | NavGroup): item is NavGroup => 'links' in item;

/** "Navigate CueTech" quick links shown in the top bar. The rest are on the Navigate page and in the footer. */
export const topBarPortals = site.portals.filter((p) => p.id === 'student-portal' || p.id === 'lms' || p.id === 'faculty-portal');

export const footerNav: { heading: string; href?: string; links: NavLink[] }[] = [
  {
    heading: 'Study',
    links: [
      { label: 'Degree Programs', href: '/programs' },
      { label: 'Faculties and Departments', href: '/faculties' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'How to Apply', href: '/admissions/how-to-apply' },
      { label: 'Fees Structure', href: '/admissions/fees' },
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Apply Online', href: '/admissions/apply' },
    ],
  },
  {
    heading: 'Campus',
    links: [
      { label: 'Campus Life', href: '/campus-life' },
      { label: 'Campus and Facilities', href: '/campus' },
      { label: 'Central Library', href: '/campus-life/library' },
      { label: 'Student Services', href: '/campus-life/student-services' },
      { label: 'Alumni', href: '/campus-life/alumni' },
      { label: 'Visit Our Campus', href: '/contact/visit' },
    ],
  },
  {
    heading: 'University',
    links: [
      { label: 'About CueTech', href: '/about' },
      { label: 'University Leadership', href: '/about/leadership' },
      { label: 'Governance', href: '/about/governance' },
      { label: 'Teaching Faculty', href: '/teaching-faculty' },
      { label: 'Global Engagement', href: '/global-engagement' },
      { label: 'News & Events', href: '/news' },
      { label: 'Careers at CueTech', href: '/careers' },
      { label: 'Policies and Regulations', href: '/about/policies' },
    ],
  },
];
