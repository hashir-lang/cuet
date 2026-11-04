import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/ui/CtaBand';
import { ProgramExplorer } from '@/components/programs/ProgramExplorer';
import { faculties, facultyBySlug } from '@/content/faculties';
import { programs, proposedPrograms } from '@/content/programs';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Degree Programs',
  description: `All ${totals.undergraduatePrograms} undergraduate and ${totals.associatePrograms} associate degree programs at ${site.name}, including BS Computer Science, BBA, Doctor of Pharmacy, BS Nursing, LLB, BS Aviation Management and the proposed graduate programs.`,
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Academics', href: '/academics' },
          { name: 'Degree Programs', href: '/programs' },
        ]}
        eyebrow="Academics"
        title="Degree Programs"
        lede={`${totals.undergraduatePrograms} undergraduate degree programs and ${totals.associatePrograms} associate degree programs across ${totals.faculties} faculties, with ${totals.proposedGraduatePrograms} graduate programs proposed. Search by name or career, or filter by level and faculty.`}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/programs/undergraduate" className="btn btn-outline-light btn-sm">
            Undergraduate Degree Programs
          </Link>
          <Link href="/programs/associate" className="btn btn-outline-light btn-sm">
            Associate Degree Programs
          </Link>
          <a href="#graduate" className="btn btn-outline-light btn-sm">
            Graduate Programs (Proposed)
          </a>
        </div>
      </PageHero>
      <section aria-label="Program directory" className="bg-paper py-12 sm:py-16">
        <div className="container-cul">
          <ProgramExplorer programs={programs} faculties={faculties} />
        </div>
      </section>
      <section id="graduate" aria-labelledby="graduate-title" className="scroll-mt-28 bg-ivory py-14 sm:py-20">
        <div className="container-cul grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="graduate-title" className="heading-xl">
              Graduate Programs (Proposed)
            </h2>
            <p className="mt-4 text-stone-700">The University has proposed the following graduate programs. They are subject to approval by the statutory bodies and the regulator, and their details will be published when they are launched.</p>
          </div>
          <ul className="divide-y divide-stone-300 border-y border-stone-300 lg:col-span-7">
            {proposedPrograms.map((p) => (
              <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <span className="font-serif text-[1.2rem]">{p.name}</span>
                <span className="text-sm text-stone-600">{facultyBySlug(p.facultySlug)?.shortName}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="schemes-title" className="bg-paper py-14 sm:py-20">
        <div className="container-cul grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="schemes-title" className="heading-xl">
              Schemes of study
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="lede text-stone-700">
              Each program page carries its scheme of study: the program introduction, scope, objectives, learning outcomes, duration, credit hours required, admission criteria, passing criteria, internship, projects and the status of accreditation.
            </p>
            <p className="mt-4 text-stone-700">Official details are published as they are approved by the Academic Council. Until then each item is marked “to be confirmed”.</p>
            <Link href="/academics/curriculum" className="link-arrow mt-6 text-forest-700">
              Curriculum and Schemes of Study
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
