import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { SectionIndex } from '@/components/sections/SectionIndex';
import { sectionByKey } from '@/content/sections';
import { faculties } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { pad2 } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('academics');

export const metadata = pageMeta({
  title: 'Academics',
  description: `Academics at ${site.name}: ${totals.faculties} faculties and departments, ${totals.undergraduatePrograms} undergraduate and ${totals.associatePrograms} associate degree programs, academic rules, the academic calendar and examinations.`,
  path: '/academics',
});

export default function AcademicsPage() {
  return (
    <SectionLayout
      section={section}
      current="/academics"
      title="Academics"
      lede={section.summary}
      width="wide"
      cta={{ title: 'Find the program that fits your ambition.', primary: { label: 'Degree Programs', href: '/programs' }, secondary: { label: 'How to Apply', href: '/admissions/how-to-apply' } }}
    >
      <div className="space-y-14">
        <section aria-labelledby="glance-title">
          <h2 id="glance-title" className="heading-lg">
            At a glance
          </h2>
          <dl className="mt-5 grid grid-cols-2 gap-px border border-stone-200 bg-stone-200 sm:grid-cols-4">
            {[
              { value: totals.faculties, label: 'Faculties' },
              { value: totals.undergraduatePrograms, label: 'Undergraduate programs' },
              { value: totals.associatePrograms, label: 'Associate degree programs' },
              { value: totals.proposedGraduatePrograms, label: 'Proposed graduate programs' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col bg-paper p-5">
                <dt className="text-sm text-stone-600">{s.label}</dt>
                <dd className="numerals order-first font-serif text-4xl text-forest-800">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="faculties-title">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="faculties-title" className="heading-lg">
              Faculties and Departments
            </h2>
            <Link href="/faculties" className="link-arrow text-sm text-forest-700">
              Faculty directory
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
            {faculties.map((f) => (
              <li key={f.slug}>
                <Link href={`/faculties/${f.slug}`} className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 py-3.5 transition-colors duration-150 hover:text-sandstone-700 sm:grid-cols-[2.5rem_1fr_auto]">
                  <span className="numerals text-sm text-stone-500">{pad2(f.order)}</span>
                  <span className="min-w-0">
                    <span className="block font-serif text-[1.15rem] leading-snug">{f.name}</span>
                    <span className="block text-sm text-stone-600">{f.department.name}</span>
                  </span>
                  <span className="col-start-2 text-sm text-stone-600 sm:col-start-3 sm:text-right">{programsForFaculty(f.slug).map((p) => p.shortName).join(' · ')}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="info-title">
          <h2 id="info-title" className="heading-lg">
            Academic information
          </h2>
          <SectionIndex section={section} className="mt-6" />
        </section>
      </div>
    </SectionLayout>
  );
}
