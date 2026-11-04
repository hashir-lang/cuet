import Link from 'next/link';
import { ArrowRight, UserRound } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { DraftBadge, Pending } from '@/components/ui/Editorial';
import { Media } from '@/components/media/Media';
import { CtaBand } from '@/components/ui/CtaBand';
import { Jali } from '@/components/art/Jali';
import { university } from '@/content/university';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { formatNumber } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About the University',
  description: `About Central University of Emerging Technologies: vision, mission, academic philosophy and leadership of a university with ${totals.faculties} faculties and ${totals.programs} undergraduate programs.`,
  path: '/about',
});

export default function AboutPage() {
  const institutional = [
    { label: 'Location', value: `${site.city}, ${site.country}` },
    { label: 'Faculties', value: String(totals.faculties) },
    { label: 'Undergraduate programs', value: String(totals.programs) },
    { label: 'Laboratories planned', value: String(totals.laboratories) },
    { label: 'Library volumes planned', value: totals.libraryVolumesConfirmed ? formatNumber(totals.libraryVolumesConfirmed) : null },
    { label: 'Established', value: site.established ? String(site.established) : null },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ name: 'About', href: '/about' }]}
        eyebrow="About the University"
        title="An institution built for consequence."
        lede={university.overview.value[0]}
        aside={<Media media={{ src: null, alt: 'Illustration of the University campus', plate: 'campus' }} className="aspect-[4/3] w-full" priority />}
      />

      <Section labelledBy="overview-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="overview-title" className="heading-xl">
                Overview
              </h2>
              <DraftBadge />
            </div>
          </div>
          <div className="prose-cul lg:col-span-7 lg:col-start-6">
            {university.overview.value.map((p, i) => (
              <p key={i} className={i === 0 ? 'lede' : 'text-stone-700'}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="forest" labelledBy="vision-title" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 text-brass-300 opacity-[0.06]">
          <Jali size={60} />
        </div>
        <div className="container-cul grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow flex items-center gap-3 text-brass-300">
              Vision <DraftBadge tone="dark" />
            </p>
            <h2 id="vision-title" className="sr-only">
              Vision and mission
            </h2>
            <p className="mt-6 font-serif text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)] leading-[1.2] tracking-[-0.015em]">{university.vision.value}</p>
          </div>
          <div className="lg:border-l lg:border-white/15 lg:pl-14">
            <p className="eyebrow flex items-center gap-3 text-brass-300">
              Mission <DraftBadge tone="dark" />
            </p>
            <p className="mt-6 text-lg leading-relaxed text-forest-100">{university.mission.value}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="objectives-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="objectives-title" eyebrow="Institutional objectives" title="What we set out to do." className="!mb-4" />
            <DraftBadge />
          </div>
          <ol className="lg:col-span-8">
            {university.objectives.value.map((o, i) => (
              <li key={o} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-stone-200 py-5 last:border-b">
                <span className="numerals font-serif text-2xl text-sandstone-500">{i + 1}</span>
                <p className="pt-1 text-lg">{o}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="philosophy-title">
        <div className="container-cul">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading id="philosophy-title" eyebrow="Academic philosophy" title="Understanding comes from engagement." className="!mb-4" />
              <DraftBadge />
            </div>
            <p className="lede text-stone-700 lg:col-span-6 lg:col-start-7">{university.philosophy.value}</p>
          </div>
          <h3 className="heading-lg mt-16">Educational approach</h3>
          <ul className="mt-8 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {university.approach.value.map((a) => (
              <li key={a.title} className="bg-paper p-6">
                <h4 className="heading-md">{a.title}</h4>
                <p className="mt-2 text-stone-700">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="leadership-title">
        <div className="container-cul">
          <SectionHeading
            id="leadership-title"
            eyebrow="Leadership"
            title="University leadership."
            align="split"
            intro="Profiles of the University’s leadership will be published once appointments are confirmed."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {university.leadership.map((l) => (
              <li key={l.role} className="border border-stone-200">
                <div className="grid aspect-[4/5] place-items-center bg-stone-100">
                  <UserRound className="size-16 text-stone-300" strokeWidth={1} aria-hidden="true" />
                </div>
                <div className="p-5">
                  <p className="eyebrow text-sandstone-600">{l.role}</p>
                  <p className="heading-md mt-2">{l.name ?? <span className="italic text-stone-600">Name to be announced</span>}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="stone" labelledBy="history-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="history-title" className="heading-xl">
              History
            </h2>
            {university.history ? (
              <div className="prose-cul mt-6 text-stone-700">
                {university.history.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              <Pending title="The University’s history will be published here" className="mt-6">
                A verified account of the University’s founding and development has not yet been supplied.
              </Pending>
            )}
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="heading-xl">Institutional information</h2>
            <dl className="mt-6 divide-y divide-stone-300 border-y border-stone-300">
              {institutional.map((r) => (
                <div key={r.label} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-stone-600">{r.label}</dt>
                  <dd className="numerals text-right font-semibold">{r.value ?? <span className="font-normal italic text-stone-600">To be confirmed</span>}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-stone-600">Laboratory and library figures are planning allocations.</p>
            <Link href="/faculties" className="link-arrow mt-6 text-forest-700">
              Explore the faculties
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
