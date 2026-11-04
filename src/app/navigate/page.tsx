import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Pending, TBC } from '@/components/ui/Editorial';
import { CtaBand } from '@/components/ui/CtaBand';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Navigate CueTech',
  description: `Online services of ${site.name}: Student Portal, LMS, Faculty Portal, Digital Resource Center, Incubation Center, Anti-Harassment Regulations and Grievance Redressal.`,
  path: '/navigate',
});

export default function NavigatePage() {
  const live = site.portals.filter((p) => p.href).length;
  return (
    <>
      <PageHero crumbs={[{ name: 'Navigate CueTech', href: '/navigate' }]} eyebrow="Quick links" title="Navigate CueTech" lede="The University’s online services for students, faculty and the public, in one place." />
      <Section labelledBy="portals-title">
        <div className="container-cul max-w-4xl">
          <h2 id="portals-title" className="sr-only">
            Online services
          </h2>
          {live === 0 ? (
            <Pending title="The University’s online services are being set up" className="mb-10">
              Each service below will link directly to its website or portal as it goes live.
            </Pending>
          ) : null}
          <ul className="divide-y divide-stone-200 border-y border-stone-200">
            {site.portals.map((p) => (
              <li key={p.id} id={p.id} className="scroll-mt-28 grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="heading-md">{p.label}</h3>
                  <p className="mt-1 text-stone-700">{p.description}</p>
                </div>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                    Open {p.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <TBC label="Not yet online" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand title="Need help with a service?" text="The University’s offices can help with the student portal, the LMS and other online services." primary={{ label: 'Contact Us', href: '/contact' }} secondary={{ label: 'Grievance Redressal', href: '/navigate#grievance-redressal' }} />
    </>
  );
}
