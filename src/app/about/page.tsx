import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { SectionIndex } from '@/components/sections/SectionIndex';
import { DraftBadge } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { university } from '@/content/university';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { formatNumber } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('about');

export const metadata = pageMeta({
  title: 'About CueTech',
  description: `About ${site.name}: an introduction to the University, its ${totals.faculties} faculties, its programs, its governance and its leadership.`,
  path: '/about',
});

export default function AboutPage() {
  const institutional = [
    { label: 'Location', value: `${site.city}, ${site.region}, ${site.country}` },
    { label: 'Faculties', value: String(totals.faculties) },
    { label: 'Undergraduate degree programs', value: String(totals.undergraduatePrograms) },
    { label: 'Associate degree programs', value: String(totals.associatePrograms) },
    { label: 'Proposed graduate programs', value: String(totals.proposedGraduatePrograms) },
    { label: 'Laboratories planned', value: String(totals.laboratories) },
    { label: 'Library volumes planned', value: totals.libraryVolumesConfirmed ? formatNumber(totals.libraryVolumesConfirmed) : null },
    { label: 'Established', value: site.established ? String(site.established) : null },
  ];

  return (
    <SectionLayout
      section={section}
      current="/about"
      title="Introduction to CueTech"
      eyebrow="About CueTech"
      lede={section.summary}
      width="wide"
    >
      <div className="space-y-14">
        <section aria-labelledby="overview-title">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="overview-title" className="heading-lg">
              Overview
            </h2>
            <DraftBadge />
          </div>
          <div className="prose-cul mt-5 text-stone-700">
            {university.overview.value.map((p, i) => (
              <p key={i} className={i === 0 ? 'lede text-ink' : undefined}>
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 font-serif text-[1.35rem] italic leading-snug text-forest-800">{site.tagline}</p>
        </section>

        <section aria-labelledby="vm-title" className="relative isolate overflow-hidden bg-forest-900 p-7 text-ivory sm:p-9">
          <h2 id="vm-title" className="sr-only">
            Vision and mission
          </h2>
          <p className="eyebrow flex items-center gap-3 text-brass-300">
            Vision <DraftBadge tone="dark" />
          </p>
          <p className="mt-4 font-serif text-[clamp(1.4rem,1.1rem+1.2vw,2rem)] leading-[1.25] tracking-[-0.012em]">{university.vision.value}</p>
          <p className="eyebrow mt-8 flex items-center gap-3 text-brass-300">
            Mission <DraftBadge tone="dark" />
          </p>
          <p className="mt-3 text-forest-100">{university.mission.value}</p>
          <Link href="/about/vision-mission" className="link-arrow mt-6 text-ivory">
            Vision, Mission and Core Values
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>

        <section aria-labelledby="facts-title">
          <h2 id="facts-title" className="heading-lg">
            Institutional information
          </h2>
          <dl className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
            {institutional.map((r) => (
              <div key={r.label} className="flex justify-between gap-6 py-3">
                <dt className="text-stone-600">{r.label}</dt>
                <dd className="numerals text-right font-semibold">{r.value ?? <span className="font-normal italic text-stone-600">To be confirmed</span>}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-stone-600">Laboratory and library figures are planning allocations.</p>
        </section>

        <section aria-labelledby="index-title">
          <h2 id="index-title" className="heading-lg">
            About the University
          </h2>
          <SectionIndex section={section} className="mt-6" />
        </section>
      </div>
    </SectionLayout>
  );
}
