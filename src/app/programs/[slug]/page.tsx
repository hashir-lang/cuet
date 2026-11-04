import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Briefcase, Check } from 'lucide-react';
import { programBySlug, programFaqs, programs, programsForFaculty } from '@/content/programs';
import { facultyBySlug } from '@/content/faculties';
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
      description: `${p.name} at Central University of Emerging Technologies. ${p.overview.value}`.slice(0, 300),
      path: `/programs/${p.slug}`,
    }),
    keywords: p.seoKeywords,
  };
}

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'outcomes', label: 'Learning outcomes' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'admission', label: 'Admission requirements' },
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

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const p = programBySlug(slug);
  if (!p) notFound();
  const faculty = facultyBySlug(p.facultySlug)!;
  const siblings = programsForFaculty(faculty.slug).filter((x) => x.slug !== p.slug);
  const o = p.official;

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: 'Faculty', value: <Link href={`/faculties/${faculty.slug}`} className="text-forest-700 underline underline-offset-4">{faculty.shortName}</Link> },
    { label: 'Level', value: p.level },
    { label: 'Duration', value: o.duration ?? <TBC /> },
    { label: 'Credit hours', value: o.totalCreditHours ?? <TBC /> },
    { label: 'Accreditation', value: o.accreditation ?? <TBC /> },
    { label: 'Fees', value: o.fees ?? <TBC /> },
  ];

  return (
    <>
      <JsonLd data={programJsonLd({ name: p.name, description: p.overview.value, path: `/programs/${p.slug}` })} />
      <PageHero
        crumbs={[
          { name: 'Academic Programs', href: '/programs' },
          { name: p.shortName, href: `/programs/${p.slug}` },
        ]}
        eyebrow={faculty.name}
        title={p.name}
        lede={p.tagline}
        aside={<Media media={p.media} className="aspect-[4/3] w-full" priority sizes="(min-width: 1024px) 40vw, 100vw" />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/admissions/apply" className="btn btn-primary">
            Apply now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/admissions/requirements" className="btn btn-outline-light">
            Admission requirements
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
                    Apply now
                  </Link>
                  <Link href="/contact" className="btn btn-outline mt-3 w-full">
                    Ask a question
                  </Link>
                </div>
              </section>
              <nav aria-label="On this page" className="hidden lg:block">
                <p className="eyebrow text-stone-600">On this page</p>
                <ul className="mt-3 space-y-2 border-l border-stone-200">
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
            <section aria-labelledby="overview">
              <SectionTitle id="overview" draft>
                Overview
              </SectionTitle>
              <p className="lede mt-5 text-ink">{p.overview.value}</p>
              <div className="prose-cul mt-6 text-stone-700">
                <h3 className="heading-md text-ink">Introduction</h3>
                {p.introduction.value.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="objectives">
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

            <section aria-labelledby="outcomes">
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

            <section aria-labelledby="curriculum">
              <SectionTitle id="curriculum">Curriculum</SectionTitle>
              {o.curriculum ? (
                <div className="mt-6 space-y-6">
                  {o.curriculum.map((sem) => (
                    <div key={sem.semester}>
                      <h3 className="heading-md">{sem.semester}</h3>
                      <ul className="mt-2 list-disc pl-5">
                        {sem.courses.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <Pending title="The official curriculum will be published here" className="mt-6">
                  The semester-by-semester scheme of studies for {p.shortName} has not yet been supplied. It will list courses and credit hours once approved by the University.
                </Pending>
              )}
            </section>

            <section aria-labelledby="admission">
              <SectionTitle id="admission">Admission requirements</SectionTitle>
              {o.eligibility ? (
                <ul className="mt-6 list-disc space-y-2 pl-5">
                  {o.eligibility.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              ) : (
                <Pending title="Eligibility criteria to be confirmed" className="mt-6">
                  Entry requirements for {p.shortName} will be published by the University. See the general{' '}
                  <Link href="/admissions/requirements" className="text-forest-700 underline underline-offset-4">
                    admission requirements
                  </Link>{' '}
                  for the documents you will need.
                </Pending>
              )}
            </section>

            <section aria-labelledby="careers">
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

            <section aria-labelledby="faqs">
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
                  Apply now
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/admissions/how-to-apply" className="btn btn-outline-light">
                  How to apply
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
