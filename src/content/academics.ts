/**
 * Academic rules, regulations and the academic calendar.
 *
 * Initially the HEC policies apply. As the University's own rules are passed by its statutory
 * bodies, add each document's URL (a PDF under /public/documents/ or an external link) to `href`.
 */

export const regulations: { id: string; label: string; summary: string; href: string | null; external?: boolean }[] = [
  {
    id: 'hec-policy-guidelines',
    label: 'HEC Policy Guidelines',
    summary: 'Policy guidelines of the Higher Education Commission of Pakistan, which apply to the University’s programs.',
    href: 'https://www.hec.gov.pk/',
    external: true,
  },
  {
    id: 'hec-undergraduate-policy',
    label: 'HEC Undergraduate Policy',
    summary: 'The HEC’s undergraduate education policy, which sets the national framework for bachelor’s and associate degree programs.',
    href: 'https://www.hec.gov.pk/',
    external: true,
  },
  { id: 'semester-rules', label: 'CueTech Semester Rules', summary: 'The University’s semester system: registration, credit hours, attendance and course withdrawal.', href: null },
  { id: 'examination-rules', label: 'Examination Rules', summary: 'Conduct of examinations, grading, re-sits and unfair means.', href: null },
  { id: 'probation-rules', label: 'Probation Rules', summary: 'Academic standing, probation and the conditions for continuing in a program.', href: null },
  { id: 'degree-requirements', label: 'Degree Requirements', summary: 'Credit hours, minimum grade point average and other requirements for the award of each degree.', href: null },
  { id: 'industry-linkages', label: 'Industry and Corporate Linkages', summary: 'Policies for internships, industry projects and corporate partnerships.', href: null },
  { id: 'others', label: 'Others', summary: 'Other academic rules and regulations approved by the statutory bodies.', href: null },
];

/**
 * Academic calendar for the current academic year. Empty = "to be announced".
 * Example: { label: 'Fall semester begins', date: '2027-09-06' }
 */
export const academicCalendar: { label: string; date: string; note?: string }[] = [];
