import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Briefcase, Check, FileText } from 'lucide-react';
import { programBySlug, programFaqs, programs, programsForFaculty } from '@/content/programs';
import { facultyBySlug } from '@/content/faculties';
import { site } from '@/content/site';
import type { SchemeBasis } from '@/content/types';
import { PageHero } from '@/components/ui/PageHero';
import { Media } from '@/components/media/Media';
import { FaqList } from '@/components/ui/Accordion';
import { DraftBadge, Pending, TBC } from '@/components/ui/Editorial';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { pageMeta, programJsonLd } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) return {};
  return {
    ...pageMeta({
      title: `${p.name}${p.shortName !== p.name ? ` (${p.shortName})` : ''}`,
      description: `${p.name} at ${site.name}. ${p.overview.value}`.slice(0, 300),
      path: `/programs/${p.slug}`,
    }),
    keywords: p.seoKeywords,
  };
}

/** The scheme-of-study sections every program page carries, in order. */
const sections = [
  { id: 'overview', label: 'Introduction' },
  { id: 'scope', label: 'Scope' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'outcomes', label: 'Learning outcomes' },
  { id: 'duration', label: 'Duration and credit hours' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'admission', label: 'Admission criteria' },
  { id: 'passing', label: 'Passing criteria' },
  { id: 'internship', label: 'Internship' },
  { id: 'projects', label: 'Projects' },
  { id: 'accreditation', label: 'Accreditation status' },
  { id: 'careers', label: 'Careers' },
  { id: 'faqs', label: 'FAQs' },
];

function SectionTitle({ id, children, draft }: { id: string; children: React.ReactNode; draft?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h2 id={id} className="heading-lg">
        {children}
      </h2>
      {draft ? <DraftBadge /> : null}
    </div>
  );
}

/** Says where the scheme of study comes from when it is an HEC model curriculum rather than the University's own. */
function BasisNote({ basis, compact = false }: { basis: SchemeBasis; compact?: boolean }) {
  if (compact) {
    return (
      <p className="mt-3 text-sm text-stone-600">
        Source: {basis.title}
        {basis.document ? (
          <>
            {' '}
            (
            <a href={basis.document} className="text-forest-700 underline underline-offset-4" target="_blank" rel="noopener">
              PDF
            </a>
            )
          </>
        ) : null}
        .
      </p>
    );
  }
  return (
    <aside aria-label="Basis of this scheme of study" className="flex gap-3 border border-forest-200 bg-forest-50 p-4 sm:p-5">
      <FileText className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
      <div className="min-w-0 text-[0.95rem] leading-relaxed text-stone-700">
        <p className="font-semibold text-ink">Scheme of study based on the {basis.title}</p>
        <p className="mt-1">
          The curriculum below follows the national minimum standard {basis.issued}. {basis.note ? `${basis.note} ` : ''}
          The University’s own scheme of study, approved by its Academic Council, will replace it when published.
        </p>
        {basis.document ? (
          <a href={basis.document} className="link-arrow mt-2 inline-flex text-forest-700" target="_blank" rel="noopener">
            Download the HEC curriculum (PDF)
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </aside>
  );
}

function Official({ value, title, children }: { value: string | string[] | null; title: string; children: React.ReactNode }) {
  if (value === null) {
    return (
      <Pending title={title} className="mt-6">
        {children}
      </Pending>
    );
  }
  const list = Array.isArray(value) ? value : null;
  return list ? (
    <ul className="mt-6 list-disc space-y-2 pl-5">
      {list.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  ) : (
    <p className="mt-5 text-stone-700">{value}</p>
  );
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) notFound();
  const faculty = facultyBySlug(p.facultySlug)!;
  const siblings = programsForFaculty(faculty.slug).filter((x) => x.slug !== p.slug);
  const o = p.official;

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: 'Level', value: p.level },
    {
      label: 'Faculty',
      value: (
        <Link href={`/faculties/${faculty.slug}`} className="text-forest-700 underline underline-offset-4">
          {faculty.shortName}
        </Link>
      ),
    },
    { label: 'Department', value: faculty.department.shortName },
    { label: 'Duration', value: o.duration ?? <TBC /> },
    { label: 'Credit hours', value: o.totalCreditHours ?? <TBC /> },
    { label: 'Scheme of study', value: o.curriculum ? (o.basis ? 'HEC curriculum' : 'University approved') : <TBC /> },
    { label: 'Fees', value: o.fees ?? <TBC /> },
  ];

  return (
    <>
      <JsonLd data={programJsonLd({ name: p.name, description: p.overview.value, path: `/programs/${p.slug}` })} />
      <PageHero
        crumbs={[
          { name: 'Degree Programs', href: '/programs' },
          { name: p.shortName, href: `/programs/${p.slug}` },
        ]}
        eyebrow={`${p.level} · ${faculty.name}`}
        title={p.name}
        lede={p.tagline}
        aside={<Media media={p.media} className="aspect-[4/3] w-full" priority sizes="(min-width: 1024px) 40vw, 100vw" />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/admissions/apply" className="btn btn-primary">
            Apply Online
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/admissions/programs-eligibility" className="btn btn-outline-light">
            Eligibility criteria
          </Link>
        </div>
      </PageHero>

      {/* In-page navigation: horizontal scroller on small screens */}
      <nav aria-label="On this page" className="sticky top-[var(--header-h)] z-20 border-b border-stone-200 bg-paper lg:hidden">
        <ul className="container-cul flex snap-x gap-6 overflow-x-auto py-3 text-sm font-medium [scrollbar-width:none]">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0 snap-start">
              <a href={`#${s.id}`} className="text-stone-700 hover:text-sandstone-600">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-paper py-14 sm:py-20">
        <div className="container-cul grid grid-cols-1 gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4 lg:order-2 lg:col-start-9">
            <div className="space-y-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <section aria-labelledby="facts-title" className="border border-stone-200">
                <h2 id="facts-title" className="eyebrow border-b border-stone-200 px-6 py-4 text-sandstone-600">
                  Key facts
                </h2>
                <dl className="divide-y divide-stone-200">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-start justify-between gap-4 px-6 py-3.5">
                      <dt className="text-stone-600">{f.label}</dt>
                      <dd className="text-right font-medium">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-stone-200 p-6">
                  <Link href="/admissions/apply" className="btn btn-primary w-full">
                    Apply Online
                  </Link>
                  <Link href="/contact/ask" className="btn btn-outline mt-3 w-full">
                    Ask a question
                  </Link>
                </div>
              </section>
              <nav aria-label="On this page" className="hidden lg:block">
                <p className="eyebrow text-stone-600">Scheme of study</p>
                <ul className="mt-3 space-y-1.5 border-l border-stone-200">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="-ml-px block border-l border-transparent pl-4 text-[0.95rem] text-stone-700 transition-colors duration-150 hover:border-sandstone-500 hover:text-ink">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-16 lg:col-span-7 lg:order-1">
            <section aria-labelledby="overview" className="scroll-mt-28">
              <SectionTitle id="overview" draft>
                Program introduction
              </SectionTitle>
              <p className="lede mt-5 text-ink">{p.overview.value}</p>
              <div className="prose-cul mt-6 text-stone-700">
                {p.introduction.value.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {o.basis ? <BasisNote basis={o.basis} /> : null}

            <section aria-labelledby="scope" className="scroll-mt-28">
              <SectionTitle id="scope">Scope</SectionTitle>
              <Official value={o.scope} title="The scope of the program will be published here">
                The official statement of scope for {p.shortName} will be added from the approved scheme of study.
              </Official>
            </section>

            <section aria-labelledby="objectives" className="scroll-mt-28">
              <SectionTitle id="objectives" draft>
                Program objectives
              </SectionTitle>
              <ul className="mt-6 space-y-3">
                {p.objectives.value.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-1 size-5 shrink-0 text-forest-600" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="outcomes" className="scroll-mt-28">
              <SectionTitle id="outcomes" draft>
                Learning outcomes
              </SectionTitle>
              <p className="mt-4 text-stone-700">On completing the program, graduates should be able to:</p>
              <ol className="mt-6 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
                {p.learningOutcomes.value.map((t, i) => (
                  <li key={t} className="bg-paper p-5">
                    <span className="numerals font-serif text-2xl text-sandstone-500">{i + 1}</span>
                    <p className="mt-2">{t}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="duration" className="scroll-mt-28">
              <SectionTitle id="duration">Duration and credit hours</SectionTitle>
              {o.duration || o.totalCreditHours ? (
                <>
                  <dl className="mt-6 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
                    <div className="bg-paper p-5">
                      <dt className="text-sm text-stone-600">Duration</dt>
                      <dd className="mt-1 font-serif text-xl leading-snug sm:text-2xl">{o.duration ?? <TBC />}</dd>
                    </div>
                    <div className="bg-paper p-5">
                      <dt className="text-sm text-stone-600">Credit hours required</dt>
                      <dd className="mt-1 font-serif text-xl leading-snug sm:text-2xl">{o.totalCreditHours ?? <TBC />}</dd>
                    </div>
                  </dl>
                  {o.structure ? (
                    <div className="mt-4 overflow-x-auto border border-stone-200">
                      <table className="w-full min-w-[22rem] text-left text-[0.95rem]">
                        <caption className="border-b border-stone-200 bg-ivory px-5 py-3 text-left font-semibold">Program structure</caption>
                        <tbody className="divide-y divide-stone-200">
                          {o.structure.map((row) => (
                            <tr key={row.component}>
                              <th scope="row" className="px-5 py-2.5 font-medium">
                                {row.component}
                              </th>
                              <td className="px-5 py-2.5 text-stone-700">{row.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </>
              ) : (
                <Pending title="Duration and credit hours to be confirmed" className="mt-6">
                  The official duration and the credit hours required for {p.shortName} will be published from the approved scheme of study.
                </Pending>
              )}
            </section>

            <section aria-labelledby="curriculum" className="scroll-mt-28">
              <SectionTitle id="curriculum">Curriculum</SectionTitle>
              {o.curriculum ? (
                <>
                  {o.basis ? <BasisNote basis={o.basis} compact /> : null}
                  <div className="mt-6 space-y-8">
                    {o.curriculum.map((sem) => {
                      const hasCategory = sem.courses.some((c) => c.category);
                      return (
                        <div key={sem.semester} className="overflow-x-auto border border-stone-200">
                          <table className="w-full min-w-[30rem] text-left text-[0.95rem]">
                            <caption className="flex items-baseline justify-between gap-4 border-b border-stone-200 bg-ivory px-5 py-3 text-left">
                              <span className="heading-md">{sem.semester}</span>
                              {sem.total ? <span className="text-sm text-stone-600">Total credit hours: {sem.total}</span> : null}
                            </caption>
                            <thead className="text-sm text-stone-600">
                              <tr>
                                <th scope="col" className="px-5 py-2 font-semibold">
                                  Course
                                </th>
                                <th scope="col" className="whitespace-nowrap px-5 py-2 font-semibold">
                                  Credit hours
                                </th>
                                {hasCategory ? (
                                  <th scope="col" className="px-5 py-2 font-semibold">
                                    Category
                                  </th>
                                ) : null}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                              {sem.courses.map((c, i) => (
                                <tr key={`${c.title}-${i}`}>
                                  <th scope="row" className="px-5 py-2.5 font-medium">
                                    {c.title}
                                  </th>
                                  <td className="numerals px-5 py-2.5 text-stone-700">{c.credits}</td>
                                  {hasCategory ? <td className="px-5 py-2.5 text-stone-600">{c.category ?? ''}</td> : null}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })}
                  </div>
                  {o.specializations?.length ? (
                    <div className="mt-8">
                      <h3 className="heading-md">Specialization streams</h3>
                      <p className="mt-2 text-stone-700">Electives may be grouped into one of the following streams, subject to the University’s academic resources and approval.</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {o.specializations.map((s) => (
                          <li key={s} className="border border-stone-200 bg-ivory px-3.5 py-2 text-[0.95rem]">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : (
                <Pending title="The official curriculum will be published here" className="mt-6">
                  The semester-by-semester scheme of studies for {p.shortName} has not yet been supplied. It will list courses and credit hours once approved by the University.
                </Pending>
              )}
            </section>

            <section aria-labelledby="admission" className="scroll-mt-28">
              <SectionTitle id="admission">Admission criteria</SectionTitle>
              {o.eligibility ? (
                <ul className="mt-6 list-disc space-y-2 pl-5">
                  {o.eligibility.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              ) : (
                <Pending title="Admission criteria to be confirmed" className="mt-6">
                  Entry requirements for {p.shortName} will be published by the University. See{' '}
                  <Link href="/admissions/programs-eligibility" className="text-forest-700 underline underline-offset-4">
                    Programs and Eligibility Criteria
                  </Link>{' '}
                  for the documents you will need.
                </Pending>
              )}
            </section>

            <section aria-labelledby="passing" className="scroll-mt-28">
              <SectionTitle id="passing">Passing criteria</SectionTitle>
              <Official value={o.passingCriteria} title="Passing criteria to be confirmed">
                The minimum grades, grade point average and other requirements for passing {p.shortName} will be published from the approved scheme of study and the examination rules.
              </Official>
            </section>

            <section aria-labelledby="internship" className="scroll-mt-28">
              <SectionTitle id="internship">Internship</SectionTitle>
              <Official value={o.internship} title="Internship requirements to be confirmed">
                Whether {p.shortName} includes an internship, its length and how it is assessed will be published here.
              </Official>
            </section>

            <section aria-labelledby="projects" className="scroll-mt-28">
              <SectionTitle id="projects">Projects</SectionTitle>
              <Official value={o.projects} title="Project requirements to be confirmed">
                The final-year project or thesis requirements for {p.shortName} will be published here.
              </Official>
            </section>

            <section aria-labelledby="accreditation" className="scroll-mt-28">
              <SectionTitle id="accreditation">Accreditation status</SectionTitle>
              <Official value={o.accreditation} title="Accreditation status to be confirmed">
                The status of recognition and accreditation of {p.shortName} by the Higher Education Commission and the relevant professional council will be published here.
              </Official>
            </section>

            <section aria-labelledby="careers" className="scroll-mt-28">
              <SectionTitle id="careers" draft>
                Career opportunities
              </SectionTitle>
              <p className="mt-4 text-stone-700">Graduates of programs in this field commonly build careers in areas such as:</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.careerAreas.value.map((c) => (
                  <li key={c} className="flex items-center gap-2 border border-stone-200 bg-ivory px-3.5 py-2 text-[0.95rem]">
                    <Briefcase className="size-4 shrink-0 text-sandstone-600" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone-600">Career areas are indicative and do not represent a guarantee of employment.</p>
            </section>

            <section aria-labelledby="faqs" className="scroll-mt-28">
              <SectionTitle id="faqs">Frequently asked questions</SectionTitle>
              <FaqList items={programFaqs(p)} className="mt-6" />
            </section>

            <section aria-labelledby="apply-cta" className="relative overflow-hidden bg-forest-900 p-8 text-ivory sm:p-10">
              <h2 id="apply-cta" className="heading-lg max-w-[22ch]">
                Ready to apply for {p.shortName}?
              </h2>
              <p className="mt-3 max-w-[52ch] text-forest-100">Read the step-by-step guide, prepare your documents and submit your application.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/admissions/apply" className="btn btn-primary">
                  Apply Online
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/admissions/how-to-apply" className="btn btn-outline-light">
                  How to Apply
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>

      <section aria-labelledby="related-title" className="bg-ivory py-16 sm:py-20">
        <div className="container-cul">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 id="related-title" className="heading-xl">
              {siblings.length ? `More from ${faculty.shortName}` : `Explore ${faculty.shortName}`}
            </h2>
            <Link href="/programs" className="link-arrow text-forest-700">
              All programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.slug}>
                <ProgramCard program={s} />
              </li>
            ))}
            <li>
              <Link href={`/faculties/${faculty.slug}`} className="card-link group flex h-full min-h-56 flex-col justify-between border border-stone-200 bg-paper p-6">
                <span className="eyebrow text-sandstone-600">Faculty</span>
                <span>
                  <span className="heading-md block">{faculty.name}</span>
                  <span className="mt-1 block text-sm text-stone-600">{faculty.department.name}</span>
                  <span className="mt-2 block text-stone-700">{faculty.tagline}</span>
                  <span className="link-arrow mt-5 text-sm text-forest-700">
                    Explore faculty
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
