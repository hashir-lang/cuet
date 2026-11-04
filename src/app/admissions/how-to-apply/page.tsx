import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { AdmissionsNav } from '@/components/admissions/AdmissionsNav';
import { CtaBand } from '@/components/ui/CtaBand';
import { applySteps } from '@/content/admissions';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'How to Apply',
  description: 'A step-by-step guide to applying for an undergraduate program at Central University of Emerging Technologies, from choosing a program to submitting your application.',
  path: '/admissions/how-to-apply',
});

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Admissions', href: '/admissions' },
          { name: 'How to Apply', href: '/admissions/how-to-apply' },
        ]}
        eyebrow="Admissions"
        title="How to apply"
        lede="Six clear steps take you from choosing a program to hearing about your application."
      />
      <AdmissionsNav current="/admissions/how-to-apply" />

      <section aria-label="Application steps" className="bg-paper py-16 sm:py-20">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <ol className="relative lg:col-span-8">
            {applySteps.map((s, i) => (
              <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-12 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-8">
                {i < applySteps.length - 1 ? <span className="absolute bottom-0 left-6 top-14 w-px bg-stone-300 sm:left-8" aria-hidden="true" /> : null}
                <span className="numerals relative grid size-12 place-items-center border border-forest-800 bg-paper font-serif text-xl text-forest-800 sm:size-16 sm:text-2xl">
                  {i + 1}
                </span>
                <div className="pt-1 sm:pt-3">
                  <h2 className="heading-lg">{s.title}</h2>
                  <p className="mt-3 max-w-[60ch] text-stone-700">{s.text}</p>
                  {s.link ? (
                    <Link href={s.link.href} className="link-arrow mt-4 text-forest-700">
                      {s.link.label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <aside className="lg:col-span-4">
            <div className="border border-stone-200 bg-ivory p-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <h2 className="heading-md">Need help?</h2>
              <p className="mt-2 text-stone-700">The Admissions Office can answer questions about programs, eligibility and your application.</p>
              <Link href="/contact" className="btn btn-dark mt-5 w-full">
                Contact the University
              </Link>
              <Link href="/admissions/apply" className="btn btn-primary mt-3 w-full">
                Go to the application
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand title="Choose your program to get started." primary={{ label: 'Browse programs', href: '/programs' }} />
    </>
  );
}
