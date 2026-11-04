import Link from 'next/link';
import { ArrowRight, BookOpen, FlaskConical, Ruler } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Media } from '@/components/media/Media';
import { CtaBand } from '@/components/ui/CtaBand';
import { DraftBadge } from '@/components/ui/Editorial';
import { faculties } from '@/content/faculties';
import { programsForFaculty } from '@/content/programs';
import { planningNote, totals } from '@/content/infrastructure';
import { countLabel, formatNumber } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Facilities by Faculty',
  description: 'Planned laboratories and library resources for each faculty at Central University of Emerging Technologies-CueTech, including pharmacy, nursing, health sciences, engineering and technology, aviation, computing and law facilities.',
  path: '/campus/facilities',
});

export default function FacilitiesPage() {
  const withLabs = faculties.filter((f) => f.labs.count > 0);
  const withoutLabs = faculties.filter((f) => f.labs.count === 0);

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'About CueTech', href: '/about' },
          { name: 'Campus and Facilities', href: '/campus' },
          { name: 'Facilities by Faculty', href: '/campus/facilities' },
        ]}
        eyebrow="Campus and Facilities"
        title="Facilities by faculty"
        lede={`${totals.laboratories} laboratories are planned across ${withLabs.length} faculties. ${planningNote}`}
      />

      <section aria-label="Faculty laboratories" className="bg-paper py-14 sm:py-20">
        <div className="container-cul space-y-6">
          {withLabs.map((f, i) => {
            const progs = programsForFaculty(f.slug);
            return (
              <article key={f.slug} aria-labelledby={`fac-${f.slug}`} className="grid overflow-hidden border border-stone-200 md:grid-cols-12">
                <Media media={f.media} className={`aspect-[16/9] md:col-span-5 md:aspect-auto md:min-h-72 ${i % 2 ? 'md:order-2' : ''}`} showLabel={false} sizes="(min-width: 768px) 40vw, 100vw" />
                <div className="p-6 sm:p-8 md:col-span-7">
                  <p className="eyebrow text-sandstone-600">{progs.map((p) => p.shortName).join(' · ')}</p>
                  <h2 id={`fac-${f.slug}`} className="heading-lg mt-3">
                    {f.shortName}
                  </h2>
                  <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="flex flex-col border-t border-stone-200 pt-3">
                      <dt className="flex items-center gap-1.5 text-sm text-stone-600">
                        <FlaskConical className="size-4" aria-hidden="true" /> Laboratories
                      </dt>
                      <dd className="numerals order-first font-serif text-3xl">{f.labs.count}</dd>
                    </div>
                    <div className="flex flex-col border-t border-stone-200 pt-3">
                      <dt className="flex items-center gap-1.5 text-sm text-stone-600">
                        <Ruler className="size-4" aria-hidden="true" /> Size (as documented)
                      </dt>
                      <dd className="order-first font-serif text-xl leading-9">{f.labs.sizeAsDocumented ?? 'Not specified'}</dd>
                    </div>
                    <div className="flex flex-col border-t border-stone-200 pt-3">
                      <dt className="flex items-center gap-1.5 text-sm text-stone-600">
                        <BookOpen className="size-4" aria-hidden="true" /> Library volumes
                      </dt>
                      <dd className="numerals order-first font-serif text-3xl">{formatNumber(f.libraryVolumes)}</dd>
                    </div>
                  </dl>
                  {f.labs.intendedUse ? (
                    <p className="mt-6 text-stone-700">
                      {f.labs.intendedUse.value} <DraftBadge className="ml-1" />
                    </p>
                  ) : null}
                  <Link href={`/faculties/${f.slug}`} className="link-arrow mt-6 text-forest-700">
                    {f.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="classroom-title" className="bg-ivory py-14 sm:py-20">
        <div className="container-cul grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="classroom-title" className="heading-xl">
              Classroom and library-based faculties
            </h2>
            <p className="mt-4 text-stone-700">These faculties have no laboratory allocation in the plan. Their teaching is supported by classrooms and a dedicated library collection.</p>
          </div>
          <ul className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-3 lg:col-span-7">
            {withoutLabs.map((f) => (
              <li key={f.slug} className="bg-paper p-6">
                <h3 className="heading-md">
                  <Link href={`/faculties/${f.slug}`} className="underline-offset-4 hover:underline">
                    {f.shortName}
                  </Link>
                </h3>
                <p className="mt-2 text-stone-700">{countLabel(f.libraryVolumes, 'library volume')} planned</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
