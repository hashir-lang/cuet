import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, FlaskConical, UserRound } from 'lucide-react';
import { faculties, facultyBySlug } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { infrastructureSource, planningNote } from '@/content/infrastructure';
import { PageHero } from '@/components/ui/PageHero';
import { Media } from '@/components/media/Media';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { CtaBand } from '@/components/ui/CtaBand';
import { DraftBadge, Pending, TBC } from '@/components/ui/Editorial';
import { countLabel, formatNumber, pad2 } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return faculties.map((f) => ({ slug: f.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = facultyBySlug(slug);
  if (!f) return {};
  const progs = programsForFaculty(f.slug).map((p) => p.name).join(' and ');
  return pageMeta({
    title: f.name,
    description: `${f.name} at Central University of Emerging Technologies: ${f.tagline} Offering ${progs}.`,
    path: `/faculties/${f.slug}`,
  });
}

export default async function FacultyPage({ params }: Props) {
  const { slug } = await params;
  const f = facultyBySlug(slug);
  if (!f) notFound();

  const progs = programsForFaculty(f.slug);
  const idx = faculties.findIndex((x) => x.slug === f.slug);
  const prev = faculties[(idx - 1 + faculties.length) % faculties.length];
  const next = faculties[(idx + 1) % faculties.length];

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Faculties & Departments', href: '/faculties' },
          { name: f.shortName, href: `/faculties/${f.slug}` },
        ]}
        eyebrow={`Faculty ${pad2(f.order)} of ${faculties.length}`}
        title={f.name}
        lede={f.tagline}
        aside={<Media media={f.media} className="aspect-[4/3] w-full" priority sizes="(min-width: 1024px) 40vw, 100vw" />}
      >
        <div className="flex flex-wrap gap-3">
          {progs.map((p) => (
            <Link key={p.slug} href={`/programs/${p.slug}`} className="btn btn-outline-light btn-sm">
              {p.shortName}
            </Link>
          ))}
        </div>
      </PageHero>

      <section aria-labelledby="about-faculty" className="bg-paper py-16 sm:py-20">
        <div className="container-cul grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="about-faculty" className="heading-lg">
                About the faculty
              </h2>
              <DraftBadge />
            </div>
            <div className="prose-cul mt-6 text-stone-700">
              {f.introduction.value.map((para, i) => (
                <p key={i} className={i === 0 ? 'lede text-ink' : undefined}>
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="heading-md">Areas of study</h3>
                <DraftBadge />
              </div>
              <ul className="mt-5 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2">
                {f.focusAreas.value.map((a) => (
                  <li key={a} className="flex items-center gap-3 bg-paper px-5 py-4 font-medium">
                    <span className="size-1.5 shrink-0 rotate-45 bg-sandstone-500" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="heading-md">Laboratories</h3>
              {f.labs.count > 0 ? (
                <div className="mt-5 border border-stone-200 bg-ivory p-6">
                  <div className="flex items-start gap-4">
                    <FlaskConical className="mt-1 size-6 shrink-0 text-sandstone-600" strokeWidth={1.5} aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-semibold">
                        {countLabel(f.labs.count, 'laboratory', 'laboratories')} planned
                        {f.labs.sizeAsDocumented ? <span className="font-normal text-stone-600"> · {f.labs.sizeAsDocumented} (as documented)</span> : null}
                      </p>
                      {f.labs.intendedUse ? (
                        <p className="mt-2 text-stone-700">
                          {f.labs.intendedUse.value} <DraftBadge className="ml-1" />
                        </p>
                      ) : null}
                      <p className="mt-3 text-sm text-stone-600">{planningNote}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-stone-700">
                  The infrastructure plan does not allocate a dedicated laboratory to this faculty. Teaching is supported by classrooms and the faculty’s library collection.
                </p>
              )}
            </div>
          </div>

          <aside aria-labelledby="glance-title" className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-[calc(var(--header-h)+1.5rem)] border border-stone-200 bg-paper">
              <h2 id="glance-title" className="eyebrow border-b border-stone-200 px-6 py-4 text-sandstone-600">
                Faculty at a glance
              </h2>
              <dl className="divide-y divide-stone-200">
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="text-stone-600">Programs</dt>
                  <dd className="numerals text-right font-semibold">{progs.length}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="flex items-center gap-2 text-stone-600">
                    <FlaskConical className="size-4" aria-hidden="true" /> Laboratories planned
                  </dt>
                  <dd className="numerals text-right font-semibold">{f.labs.count}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="flex items-center gap-2 text-stone-600">
                    <BookOpen className="size-4" aria-hidden="true" /> Library volumes planned
                  </dt>
                  <dd className="numerals text-right font-semibold">{formatNumber(f.libraryVolumes)}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="text-stone-600">Academic positions planned</dt>
                  <dd className="numerals text-right font-semibold">{f.plannedFacultyPositions}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="text-stone-600">Support staff positions planned</dt>
                  <dd className="numerals text-right font-semibold">{f.plannedStaffPositions}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-4">
                  <dt className="flex items-center gap-2 text-stone-600">
                    <UserRound className="size-4" aria-hidden="true" /> Dean
                  </dt>
                  <dd className="text-right">{f.head ? f.head.name : <TBC label="To be announced" />}</dd>
                </div>
              </dl>
              <p className="border-t border-stone-200 px-6 py-4 text-xs leading-relaxed text-stone-600">
                Source: {infrastructureSource}. Planning allocations, not a description of operational facilities.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="faculty-programs" className="bg-ivory py-16 sm:py-20">
        <div className="container-cul">
          <h2 id="faculty-programs" className="heading-xl">
            {progs.length === 1 ? 'Program' : 'Programs'} in this faculty
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {progs.map((p) => (
              <li key={p.slug}>
                <ProgramCard program={p} />
              </li>
            ))}
          </ul>
          {f.head === null ? (
            <Pending title="Faculty leadership and academic staff" className="mt-10 max-w-2xl">
              Profiles of the Dean and academic staff will be added once appointments are announced.
            </Pending>
          ) : null}
        </div>
      </section>

      <nav aria-label="Other faculties" className="border-t border-stone-200 bg-paper">
        <div className="container-cul grid grid-cols-2 divide-x divide-stone-200">
          <Link href={`/faculties/${prev.slug}`} className="group flex flex-col gap-1 py-8 pr-4 transition-colors duration-150 hover:text-sandstone-600">
            <span className="flex items-center gap-2 text-sm text-stone-600">
              <ArrowLeft className="size-4" aria-hidden="true" /> Previous faculty
            </span>
            <span className="font-serif text-lg sm:text-xl">{prev.shortName}</span>
          </Link>
          <Link href={`/faculties/${next.slug}`} className="group flex flex-col items-end gap-1 py-8 pl-4 text-right transition-colors duration-150 hover:text-sandstone-600">
            <span className="flex items-center gap-2 text-sm text-stone-600">
              Next faculty <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            <span className="font-serif text-lg sm:text-xl">{next.shortName}</span>
          </Link>
        </div>
      </nav>

      <CtaBand />
    </>
  );
}
