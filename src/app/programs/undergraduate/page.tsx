import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { ProgramExplorer } from '@/components/programs/ProgramExplorer';
import { faculties } from '@/content/faculties';
import { programsAtLevel } from '@/content/programs';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Undergraduate Degree Programs',
  description: `The ${totals.undergraduatePrograms} undergraduate degree programs of ${site.name}: BS Computer Science, BBA, BS English, BS Education, LLB, BS Aviation Management, BS Statistics, BS Agribusiness Management, BS Public Health, B.E. Information Security Management Technology, BS Nursing, Doctor of Pharmacy and BS Poultry Science.`,
  path: '/programs/undergraduate',
});

export default function UndergraduatePage() {
  const list = programsAtLevel('Undergraduate');
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Academics', href: '/academics' },
          { name: 'Degree Programs', href: '/programs' },
          { name: 'Undergraduate Degree Programs', href: '/programs/undergraduate' },
        ]}
        eyebrow="Degree Programs"
        title="Undergraduate Degree Programs"
        lede={`${list.length} bachelor’s-level degree programs across the University’s faculties. Search by name or career, or filter by faculty.`}
      />
      <section aria-label="Undergraduate program directory" className="bg-paper py-12 sm:py-16">
        <div className="container-cul">
          <ProgramExplorer programs={list} faculties={faculties} fixedLevel="Undergraduate" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
