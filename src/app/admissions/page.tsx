import Link from 'next/link';
import { ArrowRight, CalendarDays, ClipboardList, FileCheck2, Send } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { AdmissionsNav } from '@/components/admissions/AdmissionsNav';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqList } from '@/components/ui/Accordion';
import { Pending } from '@/components/ui/Editorial';
import { Media } from '@/components/media/Media';
import { CtaBand } from '@/components/ui/CtaBand';
import { faculties } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { admissionsFaqs } from '@/content/admissions';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { formatDate } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Admissions',
  description: `Admissions at Central University of Emerging Technologies: how to apply, admission requirements and the ${totals.programs} undergraduate programs offered across ${totals.faculties} faculties.`,
  path: '/admissions',
});

const journey = [
  { icon: ClipboardList, title: 'Choose', text: 'Find the program that matches your interests and goals.', href: '/programs' },
  { icon: FileCheck2, title: 'Prepare', text: 'Check eligibility and gather your documents.', href: '/admissions/requirements' },
  { icon: Send, title: 'Apply', text: 'Submit your application through the official route.', href: '/admissions/apply' },
  { icon: CalendarDays, title: 'Next steps', text: 'Hear from the Admissions Office about your application.', href: '/admissions/how-to-apply' },
];

export default function AdmissionsPage() {
  const dates = site.admissions.importantDates;
  const email = site.contact.admissionsEmail ?? site.contact.email;
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Admissions', href: '/admissions' }]}
        eyebrow="Admissions"
        title="Begin your journey at CueTech."
        lede="Everything you need to choose a program, check the requirements and submit your application."
        aside={<Media media={{ src: null, alt: 'Illustration representing admissions', plate: 'admissions' }} className="aspect-[4/3] w-full" priority />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/admissions/how-to-apply" className="btn btn-primary">
            How to apply
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/programs" className="btn btn-outline-light">
            Browse programs
          </Link>
        </div>
      </PageHero>
      <AdmissionsNav current="/admissions" />

      <Section labelledBy="journey-title">
        <div className="container-cul">
          <SectionHeading id="journey-title" eyebrow="The admissions journey" title="Four stages, from choosing to starting." />
          <ol className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <li key={j.title} className="group relative flex flex-col bg-paper p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <j.icon className="size-7 text-sandstone-600" strokeWidth={1.4} aria-hidden="true" />
                  <span className="numerals font-serif text-lg text-stone-500">0{i + 1}</span>
                </div>
                <h3 className="heading-md mt-8">
                  <Link href={j.href} className="after:absolute after:inset-0 after:content-['']">
                    {j.title}
                  </Link>
                </h3>
                <p className="mt-2 text-stone-700">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="dates-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="dates-title" eyebrow="Important dates" title="Key dates for the next intake." className="!mb-6" />
            <p className="text-stone-700">Application deadlines and other key dates are published here by the Admissions Office.</p>
          </div>
          <div className="lg:col-span-7">
            {dates.length ? (
              <dl className="divide-y divide-stone-200 border-y border-stone-200">
                {dates.map((d) => (
                  <div key={d.label} className="flex justify-between gap-6 py-4">
                    <dt>{d.label}</dt>
                    <dd className="numerals font-semibold">{formatDate(d.date)}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Pending title="Dates have not yet been announced">
                Application opening and closing dates, and any test or interview dates, will appear here once the University confirms them.
              </Pending>
            )}
          </div>
        </div>
      </Section>

      <Section labelledBy="offered-title">
        <div className="container-cul">
          <SectionHeading
            id="offered-title"
            eyebrow="Programs"
            title="Programs offered."
            align="split"
            intro={`The University offers ${totals.programs} undergraduate programs. Programs open for each intake will be confirmed in the admissions announcement.`}
          />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {faculties.map((f) => (
              <div key={f.slug} className="border-t border-stone-300 pt-4">
                <p className="eyebrow text-stone-600">{f.shortName}</p>
                <ul className="mt-2 space-y-1">
                  {programsForFaculty(f.slug).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/programs/${p.slug}`} className="font-serif text-lg text-forest-800 underline-offset-4 hover:underline">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="adm-faq-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="adm-faq-title" eyebrow="Questions" title="Frequently asked questions." className="!mb-6" />
            <Link href="/contact" className="link-arrow text-forest-700">
              Ask the Admissions Office
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {email ? (
              <p className="mt-3 text-stone-700">
                or email{' '}
                <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
                  {email}
                </a>
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-8">
            <FaqList items={admissionsFaqs} />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
