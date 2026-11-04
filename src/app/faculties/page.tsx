import { FacultyCard } from '@/components/cards/FacultyCard';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { faculties } from '@/content/faculties';
import { totals } from '@/content/infrastructure';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Faculties & Departments',
  description: `Explore the ${totals.faculties} faculties of Central University of Emerging Technologies, from Computer Science and Pharmaceutical Sciences to Aviation Management and Law & Sharia.`,
  path: '/faculties',
});

export default function FacultiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Faculties & Departments', href: '/faculties' }]}
        eyebrow="Academics"
        title="Faculties & Departments"
        lede={`Central University of Emerging Technologies is organised into ${totals.faculties} faculties. Each brings together the teaching, laboratories and library resources for its discipline, and offers one or two undergraduate programs.`}
      />
      <section aria-label="All faculties" className="bg-paper py-14 sm:py-20">
        <div className="container-cul">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculties.map((f) => (
              <li key={f.slug}>
                <FacultyCard faculty={f} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
