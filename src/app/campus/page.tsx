import Link from 'next/link';
import { ArrowRight, BookOpen, FlaskConical, Users } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Media } from '@/components/media/Media';
import { LabChart } from '@/components/ui/LabChart';
import { CtaBand } from '@/components/ui/CtaBand';
import { faculties } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { infrastructureSource, planningNote, totals } from '@/content/infrastructure';
import { formatNumber } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Campus and Facilities',
  description: `The campus and planned academic facilities of Central University of Emerging Technologies-CueTech, Lahore: ${totals.laboratories} laboratories across practice-led faculties and a library allocation for every faculty.`,
  path: '/campus',
});

const environments = [
  { plate: 'library' as const, title: 'Academic library', text: 'Every faculty has a dedicated allocation of books to support coursework and independent study.' },
  { plate: 'pharmacy' as const, title: 'Science laboratories', text: 'Laboratory space for pharmaceutical, health and natural sciences, where students learn by practice.' },
  { plate: 'computing' as const, title: 'Computing laboratory', text: 'A dedicated laboratory for programming, software development, data science and statistical computing.' },
  { plate: 'law' as const, title: 'Legal skills facility', text: 'A space for advocacy and moot court exercises in the Faculty of Law and Shariah.' },
];

export default function CampusPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'About CueTech', href: '/about' },
          { name: 'Campus and Facilities', href: '/campus' },
        ]}
        eyebrow="About CueTech"
        title="Campus and Facilities"
        lede="The campus on Maulana Shaukat Ali Road, Lahore. The University’s infrastructure plan gives every faculty a library collection and every practice-led discipline dedicated laboratory space."
        aside={<Media media={{ src: null, alt: 'Illustration of the University campus', plate: 'campus' }} className="aspect-[4/3] w-full" priority />}
      />

      <Section labelledBy="numbers-title">
        <div className="container-cul">
          <SectionHeading id="numbers-title" eyebrow="The plan in numbers" title="Academic infrastructure, faculty by faculty." intro={planningNote} align="split" />
          <dl className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FlaskConical, value: totals.laboratories, label: 'Laboratories planned' },
              { icon: BookOpen, value: totals.faculties, label: 'Faculties with a library allocation' },
              { icon: Users, value: totals.plannedFacultyPositions, label: 'Academic positions planned' },
              { icon: Users, value: totals.plannedStaffPositions, label: 'Support staff positions planned' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col bg-paper p-6 sm:p-8">
                <dt className="flex items-center gap-2 text-stone-600">
                  <s.icon className="size-4 shrink-0 text-sandstone-600" aria-hidden="true" />
                  {s.label}
                </dt>
                <dd className="numerals order-first mb-3 font-serif text-5xl tracking-[-0.02em]">{formatNumber(s.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="forest" labelledBy="labs-title">
        <div className="container-cul grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="labs-title"
              eyebrow="Departmental laboratories"
              title="Where practice meets theory."
              tone="dark"
              intro="Pharmacy and Pharmaceutical Sciences carries the largest allocation, with six laboratories, followed by Nursing and Midwifery and Medicine and Allied Health Sciences with three each."
              className="!mb-8"
            />
            <Link href="/campus/facilities" className="btn btn-outline-light">
              Facilities by faculty
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <LabChart />
          </div>
        </div>
      </Section>

      <Section labelledBy="allocation-title">
        <div className="container-cul">
          <SectionHeading id="allocation-title" eyebrow="Faculty infrastructure" title="Allocation by faculty." />
          <div className="overflow-x-auto border border-stone-200">
            <table className="numerals w-full min-w-[46rem] text-left text-[0.95rem]">
              <caption className="border-b border-stone-200 bg-ivory px-5 py-3 text-left text-sm text-stone-600">
                Source: {infrastructureSource}. Planning allocations, not a description of operational facilities.
              </caption>
              <thead className="text-sm">
                <tr className="border-b border-stone-200">
                  <th scope="col" className="px-5 py-3 font-semibold">Faculty</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Programs</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Labs</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Lab size (as documented)</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Library volumes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {faculties.map((f) => (
                  <tr key={f.slug}>
                    <th scope="row" className="px-5 py-3 font-medium">
                      <Link href={`/faculties/${f.slug}`} className="text-forest-700 underline-offset-4 hover:underline">
                        {f.shortName}
                      </Link>
                    </th>
                    <td className="px-5 py-3 text-stone-700">{programsForFaculty(f.slug).map((p) => p.shortName).join(', ')}</td>
                    <td className="px-5 py-3 text-right">{f.labs.count}</td>
                    <td className="px-5 py-3 text-stone-700">{f.labs.count === 0 ? '—' : (f.labs.sizeAsDocumented ?? 'Not specified')}</td>
                    <td className="px-5 py-3 text-right">{formatNumber(f.libraryVolumes)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-forest-800 font-semibold">
                <tr>
                  <th scope="row" className="px-5 py-3">Total</th>
                  <td className="px-5 py-3">{totals.programs} programs</td>
                  <td className="px-5 py-3 text-right">{totals.laboratories}</td>
                  <td className="px-5 py-3" />
                  <td className="px-5 py-3 text-right">{totals.libraryVolumesConfirmed ? formatNumber(totals.libraryVolumesConfirmed) : <span className="font-normal italic text-stone-600">To be confirmed</span>}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="library-title">
        <div className="container-cul grid items-center gap-12 lg:grid-cols-12">
          <Media media={{ src: null, alt: 'Illustration of the academic library', plate: 'library' }} className="aspect-[4/3] lg:col-span-6" />
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading id="library-title" eyebrow="Library resources" title="A collection for every discipline." className="!mb-6" />
            <p className="lede text-stone-700">
              Every faculty has its own library allocation in the plan: 800 volumes each for Computing and Emerging Technologies and Veterinary Sciences, and 500 for each of the other eleven faculties.
            </p>
            <p className="mt-4 text-stone-700">Details of library opening hours, digital resources and borrowing will be published when the library opens.</p>
            <Link href="/campus-life/library" className="link-arrow mt-6 text-forest-700">
              Central Library and Digital Resources
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      <Section labelledBy="environments-title">
        <div className="container-cul">
          <SectionHeading id="environments-title" eyebrow="Learning environments" title="Spaces designed for how each subject is learned." />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {environments.map((e) => (
              <li key={e.title}>
                <Media media={{ src: null, alt: `Illustration: ${e.title.toLowerCase()}`, plate: e.plate }} className="aspect-[4/5]" showLabel={false} sizes="(min-width: 1024px) 25vw, 50vw" />
                <h3 className="heading-md mt-5">{e.title}</h3>
                <p className="mt-2 text-stone-700">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="stone" labelledBy="gallery-title">
        <div className="container-cul">
          <SectionHeading id="gallery-title" eyebrow="Campus gallery" title="Gallery." intro="Illustrations shown here will be replaced by photographs of the campus as facilities are completed." align="split" />
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {faculties.slice(0, 9).map((f) => (
              <li key={f.slug}>
                <Media media={f.media} className="aspect-[4/3]" showLabel={false} sizes="(min-width: 1024px) 33vw, 50vw" />
                <p className="mt-2 text-sm text-stone-600">{f.shortName} (illustration)</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand title="See where you will study." primary={{ label: 'Facilities by faculty', href: '/campus/facilities' }} secondary={{ label: 'Campus Life', href: '/campus-life' }} />
    </>
  );
}
