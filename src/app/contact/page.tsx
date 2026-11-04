import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { Pending, TBC } from '@/components/ui/Editorial';
import { Jali } from '@/components/art/Jali';
import { programs } from '@/content/programs';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Contact Us',
  description: 'Contact Central University of Emerging Technologies about admissions, programs or general enquiries.',
  path: '/contact',
});

export default function ContactPage() {
  const c = site.contact;
  const missing = [!c.address && 'address', !c.phone && 'telephone', !c.email && 'email'].filter(Boolean) as string[];

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Contact', href: '/contact' }]}
        eyebrow="Contact"
        title="Get in touch."
        lede="Questions about admissions, programs or the University? Send a message and the right office will reply."
      />

      <section aria-label="Contact" className="bg-paper py-14 sm:py-20">
        <div className="container-cul grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="heading-lg">Send a message</h2>
            <p className="mt-2 text-stone-700">We aim to reply to every enquiry.</p>
            <div className="mt-8">
              <ContactForm programs={programs.map((p) => ({ slug: p.slug, name: p.name }))} />
            </div>
          </div>

          <aside className="space-y-8 lg:col-span-4 lg:col-start-9" aria-labelledby="details-title">
            <div className="border border-stone-200">
              <h2 id="details-title" className="eyebrow border-b border-stone-200 px-6 py-4 text-sandstone-600">
                Contact details
              </h2>
              <ul className="space-y-5 p-6">
                <li className="flex gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Address</p>
                    {c.address ? <address className="not-italic text-stone-700">{c.address.map((l) => <span key={l} className="block">{l}</span>)}</address> : <p className="text-stone-700">Lahore, Pakistan. <TBC label="Full address to be confirmed." /></p>}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Telephone</p>
                    {c.phone ? <a href={c.phone.href} className="text-forest-700 underline underline-offset-4">{c.phone.display}</a> : <TBC />}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-semibold">Email</p>
                    {c.email ? <a href={`mailto:${c.email}`} className="break-all text-forest-700 underline underline-offset-4">{c.email}</a> : <TBC />}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Office hours</p>
                    {c.officeHours ? <p className="text-stone-700">{c.officeHours}</p> : <TBC />}
                  </div>
                </li>
              </ul>
            </div>
            {missing.length ? (
              <Pending title="Official contact details are awaiting confirmation" compact>
                The University’s {new Intl.ListFormat('en', { type: 'conjunction' }).format(missing)} will be published here once verified.
              </Pending>
            ) : null}
          </aside>
        </div>
      </section>

      <section aria-labelledby="map-title" className="bg-ivory pb-16 sm:pb-20">
        <div className="container-cul">
          <h2 id="map-title" className="heading-lg pt-14 sm:pt-16">
            Location
          </h2>
          {c.mapEmbedUrl ? (
            <iframe title={`Map showing the location of ${site.name}`} src={c.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-8 aspect-[16/9] w-full border-0 md:aspect-[21/9]" />
          ) : (
            <div className="relative isolate mt-8 grid aspect-[16/10] place-items-center overflow-hidden border border-stone-200 bg-stone-100 md:aspect-[21/9]">
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
        </div>
      </section>
    </>
  );
}
