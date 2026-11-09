import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { Media } from '@/components/media/Media';
import type { Section } from '@/content/sections';
import { menuLinks, sectionCrumbs, sectionHub } from '@/lib/sections';

type CtaProps = React.ComponentProps<typeof CtaBand>;

/**
 * Layout shared by every page inside a section: the page header with the section's photograph,
 * the content on its own full-width page, a "More in this section" band on sub-pages, and the
 * closing call to action. `current` is the page's own path (used for breadcrumbs and to leave
 * the page itself out of the "More in" links).
 *
 * `width` is 'prose' for reading pages (a comfortable measure) and 'wide' for hubs, tables and
 * card grids that need the whole container.
 */
export function SectionLayout({
  section,
  current,
  title,
  lede,
  eyebrow,
  aside,
  heroChildren,
  cta,
  width = 'prose',
  children,
}: {
  section: Section;
  current: string;
  title: string;
  lede?: React.ReactNode;
  eyebrow?: string;
  aside?: React.ReactNode;
  heroChildren?: React.ReactNode;
  /** Props for the closing band, or `false` to leave it out. */
  cta?: CtaProps | false;
  width?: 'prose' | 'wide';
  children: React.ReactNode;
}) {
  const hub = sectionHub(section);
  const isHub = current === hub.href;
  const image = aside ?? (section.image ? <Media media={section.image} className="aspect-[4/3] w-full" priority sizes="(min-width: 1024px) 40vw, 100vw" /> : undefined);
  return (
    <>
      <PageHero crumbs={sectionCrumbs(section, isHub ? undefined : { title, href: current })} eyebrow={eyebrow ?? hub.label} title={title} lede={lede} aside={image}>
        {heroChildren}
      </PageHero>
      <div className="bg-paper py-12 sm:py-16 lg:py-20">
        <div className="container-cul">
          <div className={clsx('min-w-0', width === 'prose' && 'max-w-[56rem]')}>{children}</div>
        </div>
      </div>
      {isHub ? null : <SectionMore section={section} current={current} />}
      {cta === false ? null : <CtaBand {...cta} />}
    </>
  );
}

/** Links to the other pages of the section, shown under a sub-page's content. */
function SectionMore({ section, current }: { section: Section; current: string }) {
  const hub = sectionHub(section);
  const path = (href: string) => href.split('#')[0];
  const links = menuLinks(section).filter((l) => path(l.href) !== current);
  const withHub = links.some((l) => path(l.href) === hub.href) ? links : [{ label: `${hub.label}: Overview`, href: hub.href }, ...links];
  if (!withHub.length) return null;
  return (
    <section aria-labelledby="more-title" className="border-t border-stone-200 bg-ivory py-12 sm:py-14">
      <div className="container-cul">
        <h2 id="more-title" className="eyebrow text-stone-600">
          More in {hub.label}
        </h2>
        <ul className="mt-6 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {withHub.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group flex h-full items-center justify-between gap-3 bg-paper px-5 py-4 text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:bg-stone-100 hover:text-sandstone-700">
                <span>{l.label}</span>
                <ArrowRight className="size-4 shrink-0 text-sandstone-600 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
