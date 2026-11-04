import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { ProgramExplorer } from '@/components/programs/ProgramExplorer';
import { faculties } from '@/content/faculties';
import { programs } from '@/content/programs';
import { totals } from '@/content/infrastructure';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Academic Programs',
  description: `Search all ${totals.programs} undergraduate programs at Central University of Emerging Technologies, including BS Computer Science, BS Software Engineering, Pharm D, BS Nursing, BS Education, LLB and BS Aviation Management.`,
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Academic Programs', href: '/programs' }]}
        eyebrow="Academics"
        title="Academic Programs"
        lede={`${totals.programs} undergraduate programs across ${totals.faculties} faculties. Search by name or career, or filter by faculty.`}
      />
      <section aria-label="Program directory" className="bg-paper py-12 sm:py-16">
        <div className="container-cul">
          <ProgramExplorer programs={programs} faculties={faculties} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
