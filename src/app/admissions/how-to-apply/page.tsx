import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { sectionByKey } from '@/content/sections';
import { applySteps } from '@/content/admissions';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('admissions');

export const metadata = pageMeta({
  title: 'How to Apply',
  description: `A step-by-step guide to applying for an undergraduate or associate degree program at ${site.name}, from choosing a program to hearing about your application.`,
  path: '/admissions/how-to-apply',
});

export default function HowToApplyPage() {
  const email = site.contact.admissionsEmail ?? site.contact.email;
  return (
    <SectionLayout
      section={section}
      current="/admissions/how-to-apply"
      title="How to Apply"
      lede="Six clear steps take you from choosing a program to hearing about your application."
      cta={{ title: 'Choose your program to get started.', primary: { label: 'Degree Programs', href: '/programs' } }}
    >
      <ol className="relative">
        {applySteps.map((s, i) => (
          <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-12 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-8">
            {i < applySteps.length - 1 ? <span className="absolute bottom-0 left-6 top-14 w-px bg-stone-300 sm:left-8" aria-hidden="true" /> : null}
            <span className="numerals relative grid size-12 place-items-center border border-forest-800 bg-paper font-serif text-xl text-forest-800 sm:size-16 sm:text-2xl">{i + 1}</span>
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

      <div className="mt-14 border border-stone-200 bg-ivory p-6 sm:p-8">
        <h2 className="heading-md">Need help?</h2>
        <p className="mt-2 text-stone-700">The Admissions Office can answer questions about programs, eligibility and your application.</p>
        {email ? (
          <p className="mt-2 text-stone-700">
            Email{' '}
            <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
              {email}
            </a>
          </p>
        ) : null}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact/offices#admissions-office" className="btn btn-dark">
            Contact the Admissions Office
          </Link>
          <Link href="/admissions/apply" className="btn btn-primary">
            Apply Online
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}
