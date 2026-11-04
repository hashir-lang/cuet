import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { ContactForm } from '@/components/contact/ContactForm';
import { Pending, TBC } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { programs } from '@/content/programs';
import { addressLines, site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('contact');

export const metadata = pageMeta({
  title: 'Contact Us',
  description: `Contact ${site.name} about admissions, programs, fees, careers or general enquiries. Address, email and a contact form.`,
  path: '/contact',
});

export default function ContactPage() {
  const c = site.contact;
  const address = addressLines();
  const missing = [!c.address && 'address', !c.phone && 'telephone', !c.email && 'email'].filter(Boolean) as string[];

  return (
    <SectionLayout section={section} current="/contact" title="Contact Us" lede="Questions about admissions, programs or the University? Send a message and the right office will reply." cta={false}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="heading-lg">Send a message</h2>
          <p className="mt-2 text-stone-700">We aim to reply to every enquiry.</p>
          <div className="mt-8">
            <ContactForm programs={programs.map((p) => ({ slug: p.slug, name: p.name }))} />
          </div>
        </div>

        <aside className="space-y-8 lg:col-span-5" aria-labelledby="details-title">
          <div className="border border-stone-200">
            <h2 id="details-title" className="eyebrow border-b border-stone-200 px-6 py-4 text-sandstone-600">
              Contact details
            </h2>
            <ul className="space-y-5 p-6">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  {address ? (
                    <>
                      <address className="not-italic text-stone-700">
                        {address.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                      {c.mapLink ? (
                        <a href={c.mapLink} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 text-forest-700">
                          Open in Google Maps
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      ) : null}
                    </>
                  ) : (
                    <p className="text-stone-700">
                      Lahore, Pakistan. <TBC label="Full address to be confirmed." />
                    </p>
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Telephone</p>
                  {c.phone ? (
                    <a href={c.phone.href} className="text-forest-700 underline underline-offset-4">
                      {c.phone.display}
                    </a>
                  ) : (
                    <TBC />
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-semibold">Email</p>
                  {c.email ? (
                    <a href={`mailto:${c.email}`} className="break-all text-forest-700 underline underline-offset-4">
                      {c.email}
                    </a>
                  ) : (
                    <TBC />
                  )}
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
          <ul className="space-y-3">
            <li>
              <Link href="/contact/visit" className="link-arrow text-forest-700">
                Visit Our Campus: location and directions
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="/contact/offices" className="link-arrow text-forest-700">
                University offices
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="/contact/feedback" className="link-arrow text-forest-700">
                Feedback and Complaints
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </SectionLayout>
  );
}
