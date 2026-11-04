import { ArrowUpRight, MapPin } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { Pending, TBC } from '@/components/ui/Editorial';
import { Jali } from '@/components/art/Jali';
import { sectionByKey } from '@/content/sections';
import { addressLines, site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('contact');

export const metadata = pageMeta({
  title: 'Visit Our Campus',
  description: `Visit ${site.name} on Maulana Shaukat Ali Road, Lahore, adjacent to the Jinnah Institute of Cardiology: campus location, map and directions.`,
  path: '/contact/visit',
});

export default function VisitPage() {
  const c = site.contact;
  const address = addressLines();
  return (
    <SectionLayout section={section} current="/contact/visit" title="Visit Our Campus" lede="Plan a visit: where the campus is, how to get there and what to expect when you arrive.">
      <div className="space-y-12">
        <section aria-labelledby="location-title">
          <h2 id="location-title" className="heading-lg">
            Campus location
          </h2>
          {address ? (
            <address className="mt-4 not-italic text-stone-700">
              {address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          ) : (
            <p className="mt-4 text-stone-700">
              Lahore, Pakistan. <TBC label="Full address to be confirmed." />
            </p>
          )}
          {c.mapEmbedUrl ? (
            <iframe title={`Map showing the location of ${site.name}`} src={c.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-6 aspect-[16/9] w-full border border-stone-200" />
          ) : (
            <div className="relative isolate mt-6 grid aspect-[16/10] place-items-center overflow-hidden border border-stone-200 bg-stone-100">
              <div className="absolute inset-0 -z-10 text-forest-700 opacity-[0.08]">
                <Jali size={48} />
              </div>
              <div className="max-w-md px-6 text-center">
                <MapPin className="mx-auto size-8 text-sandstone-600" aria-hidden="true" />
                <p className="heading-md mt-4">Map coming soon</p>
                <p className="mt-2 text-stone-700">An interactive map will appear here once the campus address is confirmed.</p>
              </div>
            </div>
          )}
        </section>

        <section id="directions" aria-labelledby="directions-title" className="scroll-mt-28 border-t border-stone-200 pt-8">
          <h2 id="directions-title" className="heading-lg">
            Campus Location and Directions
          </h2>
          <p className="mt-4 text-stone-700">The campus is on Maulana Shaukat Ali Road in Lahore, adjacent to the Jinnah Institute of Cardiology. The main building, with the University’s name above the entrance, is visible from the road.</p>
          {c.mapLink ? (
            <a href={c.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-6">
              Get directions in Google Maps
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
          <Pending title="Transport and parking details will be published here" className="mt-6">
            Public transport routes, University transport and visitor parking arrangements will be added once confirmed.
          </Pending>
        </section>

        <section aria-labelledby="arrival-title" className="border-t border-stone-200 pt-8">
          <h2 id="arrival-title" className="heading-lg">
            When you arrive
          </h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>Report to the security post at the entrance, where visitors are signed in.</li>
            <li>Prospective students and families are welcome to ask for the Admissions Office.</li>
            <li>
              Office hours: {c.officeHours ?? <TBC label="to be published" />}. {c.phone ? `Telephone ${c.phone.display}.` : 'Telephone number to be published.'}
            </li>
          </ul>
        </section>
      </div>
    </SectionLayout>
  );
}
