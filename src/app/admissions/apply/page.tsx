import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { AdmissionsNav } from '@/components/admissions/AdmissionsNav';
import { Pending } from '@/components/ui/Editorial';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Online Application',
  description: 'Apply online to Central University of Emerging Technologies. Access the official application portal and prepare everything you need.',
  path: '/admissions/apply',
});

const checklist = [
  'You have chosen your program',
  'You meet the program’s eligibility criteria',
  'Your documents are scanned and ready to upload',
  'You have an email address and phone number you check regularly',
];

export default function ApplyPage() {
  const portal = site.admissions.portalUrl;
  const email = site.contact.admissionsEmail ?? site.contact.email;
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Admissions', href: '/admissions' },
          { name: 'Online Application', href: '/admissions/apply' },
        ]}
        eyebrow="Admissions"
        title="Online application"
        lede="Applications are made through the University’s official application portal."
      />
      <AdmissionsNav current="/admissions/apply" />

      <section aria-labelledby="portal-title" className="bg-paper py-16 sm:py-20">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="portal-title" className="heading-xl">
              Application portal
            </h2>
            {portal ? (
              <>
                <p className="lede mt-5 text-stone-700">The portal opens in a new tab. Keep your documents ready before you begin.</p>
                <a href={portal} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                  Open the application portal
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </>
            ) : (
              <>
                <Pending title="The online application portal is not yet available on this website" className="mt-6">
                  The University will link its official application portal here when admissions open. Until then, please contact the Admissions Office to ask about applying
                  {email ? (
                    <>
                      {' '}
                      or email{' '}
                      <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
                        {email}
                      </a>
                    </>
                  ) : null}
                  .
                </Pending>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn btn-primary">
                    Contact the Admissions Office
                  </Link>
                  <Link href="/admissions/how-to-apply" className="btn btn-outline">
                    Read how to apply
                  </Link>
                </div>
              </>
            )}
          </div>
          <aside aria-labelledby="ready-title" className="lg:col-span-5">
            <div className="border border-stone-200 bg-ivory p-6 sm:p-8">
              <h2 id="ready-title" className="heading-md">
                Before you apply
              </h2>
              <ul className="mt-5 space-y-3">
                {checklist.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Check className="mt-1 size-5 shrink-0 text-forest-600" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <Link href="/admissions/requirements#documents" className="link-arrow mt-6 text-forest-700">
                Document checklist
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
