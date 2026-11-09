import Link from 'next/link';
import { ArrowRight, CalendarDays, ClipboardList, FileCheck2, Send } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { FaqList } from '@/components/ui/Accordion';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { faculties } from '@/content/faculties';
import { programLevels, programsForFaculty } from '@/content/programs';
import { admissionsFaqs } from '@/content/admissions';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { formatDate } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('admissions');

export const metadata = pageMeta({
  title: 'Admissions',
  description: `Admissions at ${site.name}: how to apply, programs and eligibility, the admission schedule, fees, scholarships and the online application for ${totals.undergraduatePrograms} undergraduate and ${totals.associatePrograms} associate degree programs.`,
  path: '/admissions',
});

const journey = [
  { icon: ClipboardList, title: 'Choose', text: 'Find the program that matches your interests and goals.', href: '/programs' },
  { icon: FileCheck2, title: 'Prepare', text: 'Check eligibility and gather your documents.', href: '/admissions/programs-eligibility' },
  { icon: Send, title: 'Apply', text: 'Submit your application online through the official route.', href: '/admissions/apply' },
  { icon: CalendarDays, title: 'Next steps', text: 'Hear from the Admissions Office about tests, interviews and your offer.', href: '/admissions/how-to-apply' },
];

export default function AdmissionsPage() {
  const dates = site.admissions.importantDates;
  const email = site.contact.admissionsEmail ?? site.contact.email;
  const levels = programLevels.filter((l) => l.level !== 'Graduate');

  return (
    <SectionLayout
      section={section}
      current="/admissions"
      title="Admissions Overview"
      lede="Everything you need to choose a program, check the requirements and submit your application."
      width="wide"
      heroChildren={
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/admissions/how-to-apply" className="btn btn-primary">
            How to Apply
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/admissions/apply" className="btn btn-outline-light">
            Apply Online
          </Link>
        </div>
      }
    >
      <div className="space-y-14">
        <section aria-labelledby="journey-title">
          <h2 id="journey-title" className="heading-lg">
            Four stages, from choosing to starting.
          </h2>
          <ol className="mt-6 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {journey.map((j, i) => (
              <li key={j.title} className="group relative flex flex-col bg-paper p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <j.icon className="size-6 text-sandstone-600" strokeWidth={1.4} aria-hidden="true" />
                  <span className="numerals font-serif text-lg text-stone-500">0{i + 1}</span>
                </div>
                <h3 className="heading-md mt-6">
                  <Link href={j.href} className="after:absolute after:inset-0 after:content-['']">
                    {j.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.95rem] text-stone-700">{j.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="dates-title">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="dates-title" className="heading-lg">
              Admission schedule
            </h2>
            <Link href="/admissions/schedule" className="link-arrow text-sm text-forest-700">
              Full schedule
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {dates.length ? (
            <dl className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
              {dates.map((d) => (
                <div key={d.label} className="flex justify-between gap-6 py-4">
                  <dt>{d.label}</dt>
                  <dd className="numerals font-semibold">{formatDate(d.date)}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <Pending title="Dates have not yet been announced" className="mt-5">
              Application opening and closing dates, and any test or interview dates, will appear here once the University confirms them.
            </Pending>
          )}
        </section>

        <section aria-labelledby="offered-title">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="offered-title" className="heading-lg">
              Programs offered
            </h2>
            <Link href="/admissions/programs-eligibility" className="link-arrow text-sm text-forest-700">
              Eligibility criteria
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-3 text-stone-700">
            {totals.undergraduatePrograms} undergraduate degree programs and {totals.associatePrograms} associate degree programs. Programs open for each intake are confirmed in the admissions announcement.
          </p>
          {levels.map((l) => (
            <div key={l.level} className="mt-8">
              <h3 className="eyebrow border-b border-stone-300 pb-2 text-sandstone-700">{l.plural}</h3>
              <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {faculties
                  .map((f) => ({ f, list: programsForFaculty(f.slug).filter((p) => p.level === l.level) }))
                  .filter(({ list }) => list.length)
                  .map(({ f, list }) => (
                    <div key={f.slug}>
                      <p className="text-sm text-stone-600">{f.shortName}</p>
                      <ul className="mt-1 space-y-1">
                        {list.map((p) => (
                          <li key={p.slug}>
                            <Link href={`/programs/${p.slug}`} className="font-serif text-[1.1rem] text-forest-800 underline-offset-4 hover:underline">
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>

        <section aria-labelledby="adm-faq-title">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="adm-faq-title" className="heading-lg">
              Frequently asked questions
            </h2>
            <Link href="/admissions/faqs" className="link-arrow text-sm text-forest-700">
              All questions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <FaqList items={admissionsFaqs.slice(0, 4)} className="mt-5" />
          <p className="mt-5 text-stone-700">
            <Link href="/contact/offices#admissions-office" className="font-semibold text-forest-700 underline underline-offset-4">
              Ask the Admissions Office
            </Link>
            {email ? (
              <>
                {' '}
                or email{' '}
                <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
                  {email}
                </a>
              </>
            ) : null}
            .
          </p>
        </section>
      </div>
    </SectionLayout>
  );
}
