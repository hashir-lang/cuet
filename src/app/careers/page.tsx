import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Pending } from '@/components/ui/Editorial';
import { CtaBand } from '@/components/ui/CtaBand';
import { Media } from '@/components/media/Media';
import { closedJobs, openJobs } from '@/content/careers';
import { site } from '@/content/site';
import { formatDate } from '@/lib/format';
import { pageMeta } from '@/lib/seo';
import type { JobOpening } from '@/content/types';

export const metadata = pageMeta({
  title: 'Careers at CueTech',
  description: `Job announcements at ${site.name}: current and previous academic and administrative vacancies, and how to apply.`,
  path: '/careers',
});

function JobRow({ job }: { job: JobOpening }) {
  return (
    <li className="py-5">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h3 className="heading-md">{job.title}</h3>
          <p className="mt-1 text-sm text-stone-600">
            {[job.department, job.type].filter(Boolean).join(' · ')}
          </p>
        </div>
        <p className="numerals text-sm text-stone-600">
          Posted {formatDate(job.postedAt)}
          {job.closesAt ? ` · Closes ${formatDate(job.closesAt)}` : ''}
        </p>
      </div>
      <p className="mt-3 max-w-[65ch] text-stone-700">{job.summary}</p>
      {job.href ? (
        <a href={job.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 text-forest-700">
          View announcement
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </li>
  );
}

export default function CareersPage() {
  const open = openJobs();
  const closed = closedJobs();
  const email = site.contact.careersEmail ?? site.contact.email;

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Careers at CueTech', href: '/careers' }]}
        eyebrow="Careers at CueTech"
        title="Careers at CueTech"
        lede="Academic and administrative vacancies are announced here. Previous announcements remain listed for reference."
        aside={<Media media={{ src: null, alt: 'Illustration representing careers at the University', plate: 'management' }} className="aspect-[4/3] w-full" priority />}
      />

      <Section labelledBy="open-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 id="open-title" className="heading-xl">
              Current announcements
            </h2>
            {open.length ? (
              <ul className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
                {open.map((j) => (
                  <JobRow key={j.slug} job={j} />
                ))}
              </ul>
            ) : (
              <Pending title="There are no open positions at the moment" className="mt-6">
                Job announcements will appear here when the University advertises positions. Announcements are also published in the News section.
              </Pending>
            )}

            <h2 className="heading-xl mt-16">Previous announcements</h2>
            {closed.length ? (
              <ul className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
                {closed.map((j) => (
                  <JobRow key={j.slug} job={j} />
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-stone-700">No previous announcements yet.</p>
            )}
          </div>
          <aside className="lg:col-span-4" aria-labelledby="apply-title">
            <div className="border border-stone-200 bg-ivory p-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <Briefcase className="size-6 text-sandstone-600" strokeWidth={1.5} aria-hidden="true" />
              <h2 id="apply-title" className="heading-md mt-4">
                Applying
              </h2>
              <p className="mt-2 text-stone-700">Each announcement states the qualifications required, the documents to submit and the closing date. Apply only as the announcement directs.</p>
              {email ? (
                <p className="mt-3 text-stone-700">
                  Recruitment enquiries:{' '}
                  <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
                    {email}
                  </a>
                </p>
              ) : null}
              <Link href="/contact/offices#careers-and-recruitment" className="link-arrow mt-5 text-forest-700">
                Careers and Recruitment Enquiries
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand title="Teach at CueTech." text="Thirteen faculties and thirteen departments are building their teaching teams. Learn about each faculty and the programs it offers." primary={{ label: 'Faculties and Departments', href: '/faculties' }} secondary={{ label: 'Teaching Faculty', href: '/teaching-faculty' }} />
    </>
  );
}
