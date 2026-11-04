/** Main and footer navigation. Every href here must point to an existing page. */

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; links: NavLink[]; kind?: 'academics' };

export const mainNav: (NavLink | NavGroup)[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Academics',
    href: '/faculties',
    kind: 'academics',
    links: [
      { label: 'Faculties & Departments', href: '/faculties', description: 'Thirteen faculties and what each one teaches.' },
      { label: 'Academic Programs', href: '/programs', description: 'Search and filter all seventeen undergraduate programs.' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    links: [
      { label: 'Admissions Overview', href: '/admissions', description: 'Start here: the admissions journey at a glance.' },
      { label: 'How to Apply', href: '/admissions/how-to-apply', description: 'Step-by-step guide to submitting an application.' },
      { label: 'Admission Requirements', href: '/admissions/requirements', description: 'Eligibility and the documents you will need.' },
      { label: 'Online Application', href: '/admissions/apply', description: 'Access the application portal.' },
    ],
  },
  {
    label: 'Campus',
    href: '/campus',
    links: [
      { label: 'Campus & Infrastructure', href: '/campus', description: 'Planned laboratories, library and learning spaces.' },
      { label: 'Facilities by Faculty', href: '/campus/facilities', description: 'Laboratory allocations for each faculty.' },
      { label: 'Student Life', href: '/student-life', description: 'Support, community and life beyond the classroom.' },
    ],
  },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const isGroup = (item: NavLink | NavGroup): item is NavGroup => 'links' in item;

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Study',
    links: [
      { label: 'Faculties & Departments', href: '/faculties' },
      { label: 'Academic Programs', href: '/programs' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'How to Apply', href: '/admissions/how-to-apply' },
      { label: 'Online Application', href: '/admissions/apply' },
    ],
  },
  {
    heading: 'Campus',
    links: [
      { label: 'Campus & Infrastructure', href: '/campus' },
      { label: 'Facilities by Faculty', href: '/campus/facilities' },
      { label: 'Student Life', href: '/student-life' },
    ],
  },
  {
    heading: 'University',
    links: [
      { label: 'About the University', href: '/about' },
      { label: 'News', href: '/news' },
      { label: 'Events', href: '/events' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
