import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { ProgramExplorer } from '@/components/programs/ProgramExplorer';
import { faculties } from '@/content/faculties';
import { programsAtLevel } from '@/content/programs';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Associate Degree Programs',
  description: `The ${totals.associatePrograms} associate degree programs of ${site.name}: computer science, data science, business administration, accounting and finance, business analytics, English, education, aviation management and statistics.`,
  path: '/programs/associate',
});

export default function AssociatePage() {
  const list = programsAtLevel('Associate Degree');
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Academics', href: '/academics' },
          { name: 'Degree Programs', href: '/programs' },
          { name: 'Associate Degree Programs', href: '/programs/associate' },
        ]}
        eyebrow="Degree Programs"
        title="Associate Degree Programs"
        lede={`${list.length} associate degree programs: a shorter route into work or further study. The official duration and credit hours of each program are published by the University.`}
      />
      <section aria-label="Associate degree program directory" className="bg-paper py-12 sm:py-16">
        <div className="container-cul">
          <ProgramExplorer programs={list} faculties={faculties} fixedLevel="Associate Degree" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
