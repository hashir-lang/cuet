import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { SectionNav } from '@/components/layout/SectionNav';
import type { Section } from '@/content/sections';
import { sectionCrumbs, sectionHub, sideNavLinks } from '@/lib/sections';

type CtaProps = React.ComponentProps<typeof CtaBand>;

/**
 * Layout shared by every page inside a section: the page header, the section's side
 * navigation beside the content, and the closing call to action. `current` is the page's
 * own path (used for breadcrumbs and to highlight the side navigation).
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
  children: React.ReactNode;
}) {
  const hub = sectionHub(section);
  const isHub = current === hub.href;
  return (
    <>
      <PageHero crumbs={sectionCrumbs(section, isHub ? undefined : { title, href: current })} eyebrow={eyebrow ?? hub.label} title={title} lede={lede} aside={aside}>
        {heroChildren}
      </PageHero>
      <div className="bg-paper py-10 sm:py-14 lg:py-20">
        <div className="container-cul grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-3">
            <SectionNav label={hub.label} hub={{ label: 'Overview', href: hub.href }} links={sideNavLinks(section)} current={current} />
          </div>
          <div className="min-w-0 lg:col-span-9 xl:col-span-8">{children}</div>
        </div>
      </div>
      {cta === false ? null : <CtaBand {...cta} />}
    </>
  );
}
