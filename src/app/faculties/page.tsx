import Link from 'next/link';
import { FacultyCard } from '@/components/cards/FacultyCard';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { faculties } from '@/content/faculties';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { pad2 } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Faculties and Departments',
  description: `The ${totals.faculties} faculties and departments of ${site.name}, from Computing and Emerging Technologies and Pharmacy and Pharmaceutical Sciences to Aviation and Aeronautics and Law and Shariah.`,
  path: '/faculties',
});

export default function FacultiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Academics', href: '/academics' },
          { name: 'Faculties and Departments', href: '/faculties' },
        ]}
        eyebrow="Academics"
        title="Faculties and Departments"
        lede={`${site.legalName} is organised into ${totals.faculties} faculties, each with a teaching department. Together they offer ${totals.undergraduatePrograms} undergraduate and ${totals.associatePrograms} associate degree programs.`}
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
      <section aria-labelledby="departments-title" className="bg-ivory py-14 sm:py-20">
        <div className="container-cul">
          <h2 id="departments-title" className="heading-xl">
            Departments
          </h2>
          <p className="mt-3 max-w-[60ch] text-stone-700">Each faculty currently has one teaching department. Profiles of the teaching faculty are published department by department.</p>
          <ol className="mt-8 grid gap-px border border-stone-200 bg-stone-200 md:grid-cols-2">
            {faculties.map((f) => (
              <li key={f.slug} className="flex items-baseline gap-4 bg-paper px-5 py-4">
                <span className="numerals text-sm text-stone-500">{pad2(f.order)}</span>
                <span className="min-w-0">
                  <Link href={`/teaching-faculty/${f.department.slug}`} className="font-serif text-[1.15rem] leading-snug text-forest-800 underline-offset-4 hover:underline">
                    {f.department.name}
                  </Link>
                  <span className="block text-sm text-stone-600">{f.name}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
