import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { FacultyCard } from '@/components/cards/FacultyCard';
import { ArticleCard, EventRow } from '@/components/cards/ArticleCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Pending } from '@/components/ui/Editorial';
import { programs } from '@/content/programs';
import { faculties } from '@/content/faculties';
import { news } from '@/content/news';
import { events } from '@/content/events';
import type { Article, EventItem, Faculty, Program } from '@/content/types';

/**
 * DEV ONLY (break-ui skill): renders shared components with demo data or worst-case data.
 * Visit /dev/stress?data=worst while running `npm run dev`. Returns 404 in production builds.
 */
export const metadata = { title: 'Stress test', robots: { index: false, follow: false } };

const worstProgram: Program = {
  ...programs[0],
  slug: 'bs-medical-laboratory-technology',
  name: 'Bachelor of Science in Medical Laboratory Technology and Transfusion Sciences',
  shortName: 'BS MLT & Transfusion Sciences',
  facultySlug: 'pharmacy-and-pharmaceutical-sciences',
  tagline:
    'A long tagline that an editor might paste from a brochure, describing laboratory diagnostics, haematology, clinical chemistry, microbiology and blood banking practice in hospital settings.',
};

const worstFaculty: Faculty = {
  ...faculties[5],
  name: 'Faculty of Pharmaceutical Sciences, Pharmacy Practice and Allied Health Professions',
  shortName: 'Pharmaceutical Sciences & Allied Health Professions',
  tagline: 'Medicines, patients and everything in between, including an unusually long description.',
};

const worstArticle: Article = {
  ...news[0],
  title: 'Benachrichtigungseinstellungen: Vice-Chancellor announces partnership with Aleksandra Wiśniewska-Kowalczyk Foundation',
  category: 'announcements',
  excerpt: 'bartholomew.fitzgerald@northwind-industries-holdings.example.com will coordinate applications.',
  isTemplate: false,
  publishedAt: '2026-12-31T23:30:00+05:00',
};

const worstEvent: EventItem = {
  ...events[0],
  title: 'International Conference on Pharmaceutical Sciences, Public Health and Sustainable Agriculture in South Asia',
  venue: 'Main Auditorium, Block C, Faculty of Pharmaceutical Sciences, Central University of Emerging Technologies',
  startsAt: '2026-12-31T23:30:00+05:00',
  endsAt: '2027-01-01T01:00:00+05:00',
  isTemplate: false,
};

type Props = { searchParams: Promise<{ data?: string }> };

export default async function StressPage({ searchParams }: Props) {
  if (process.env.NODE_ENV === 'production') notFound();
  const worst = (await searchParams).data === 'worst';

  const p = worst ? worstProgram : programs[1];
  const f = worst ? worstFaculty : faculties[1];
  const a = worst ? worstArticle : news[0];
  const e = worst ? worstEvent : events[0];

  return (
    <div className="container-cul space-y-12 py-12">
      <h1 className="heading-xl">Component stress test ({worst ? 'worst case' : 'demo data'})</h1>
      <Breadcrumbs items={[{ name: 'Degree Programs', href: '/programs' }, { name: p.name, href: '#' }]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProgramCard program={p} />
        <FacultyCard faculty={f} />
        <ArticleCard article={a} />
      </div>
      <div className="max-w-3xl border-b border-stone-200">
        <EventRow event={e} />
      </div>
      <Pending title={worst ? 'An unusually long placeholder title that wraps across several lines on a narrow phone screen' : 'Short title'}>
        {worst ? 'bartholomew.fitzgerald@northwind-industries-holdings.example.com' : 'Short body.'}
      </Pending>

      {/* Dev-only toggle, fixed bottom centre, deliberately plain (break-ui spec) */}
      <nav aria-label="Data set" className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-neutral-200 p-1 font-sans text-sm">
        <Link href="/dev/stress" className={`rounded-full px-4 py-1.5 ${!worst ? 'bg-white shadow' : ''}`}>
          Demo data
        </Link>
        <Link href="/dev/stress?data=worst" className={`rounded-full px-4 py-1.5 ${worst ? 'bg-white shadow' : ''}`}>
          Worst case
        </Link>
      </nav>
    </div>
  );
}
