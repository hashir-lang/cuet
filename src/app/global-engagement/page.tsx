import { SectionLayout } from '@/components/sections/SectionLayout';
import { SectionIndex } from '@/components/sections/SectionIndex';
import { DraftBadge, Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { partners } from '@/content/global';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('global-engagement');

export const metadata = pageMeta({
  title: 'Global Engagement and Partnerships',
  description: `Global engagement at ${site.name}: internationalization strategy, academic partnerships, exchange, visiting scholars, joint programs, research collaboration and international admissions.`,
  path: '/global-engagement',
});

export default function GlobalEngagementPage() {
  return (
    <SectionLayout
      section={section}
      current="/global-engagement"
      title={section.title}
      lede={section.summary}
      width="wide"
      cta={{ title: 'Studying at CueTech from abroad?', primary: { label: 'International Student Admissions', href: '/global-engagement/international-admissions' }, secondary: { label: 'Contact Us', href: '/contact' } }}
    >
      <div className="space-y-14">
        <section aria-labelledby="intro-title">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="intro-title" className="heading-lg">
              A university connected to the world
            </h2>
            <DraftBadge />
          </div>
          <div className="prose-cul mt-5 text-stone-700">
            <p className="lede text-ink">
              CueTech is building partnerships with universities, institutions and employers abroad so that its students and faculty can learn, teach and research across borders.
            </p>
            <p>This section describes the University’s international strategy, its partners and the opportunities open to students and staff. It grows as agreements are signed.</p>
          </div>
          {partners.length === 0 ? (
            <Pending title="Partner institutions will be listed here" className="mt-6">
              The University’s international partners are being confirmed and will be published on the Global Academic Partnerships page.
            </Pending>
          ) : null}
        </section>

        <section aria-labelledby="index-title">
          <h2 id="index-title" className="heading-lg">
            Global engagement and partnerships
          </h2>
          <SectionIndex section={section} className="mt-6" />
        </section>
      </div>
    </SectionLayout>
  );
}
