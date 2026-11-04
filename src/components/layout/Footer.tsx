import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Wordmark } from '@/components/brand/Wordmark';
import { Jali } from '@/components/art/Jali';
import { footerNav } from '@/content/navigation';
import { addressLines, portalHref, site } from '@/content/site';

export function Footer() {
  const c = site.contact;
  const address = addressLines();
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-forest-950 text-forest-100">
      <div className="absolute inset-0 -z-10 text-brass-300 opacity-[0.05]">
        <Jali size={56} />
      </div>

      <div className="container-cul pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" aria-label={`${site.name}, home`} className="inline-block">
              <Wordmark tone="light" />
            </Link>
            <p className="mt-6 max-w-sm font-serif text-[1.05rem] italic leading-relaxed text-forest-100">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-forest-200">Thirteen faculties, thirteen undergraduate and nine associate degree programs in Lahore, Pakistan.</p>
            <Link href="/admissions/apply" className="btn btn-primary btn-sm mt-7">
              Apply Online
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-6">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2 className="eyebrow text-brass-300">{col.heading}</h2>
                <ul className="mt-5 space-y-3 text-[0.95rem]">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-forest-100 transition-colors duration-150 hover:text-ivory hover:underline hover:underline-offset-4">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="eyebrow text-brass-300">
                <Link href="/navigate" className="hover:text-ivory">
                  Navigate CueTech
                </Link>
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                {site.portals.map((p) => (
                  <li key={p.id}>
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-forest-100 transition-colors duration-150 hover:text-ivory hover:underline hover:underline-offset-4">
                        {p.label}
                      </a>
                    ) : (
                      <Link href={portalHref(p)} className="text-forest-100 transition-colors duration-150 hover:text-ivory hover:underline hover:underline-offset-4">
                        {p.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-brass-300">Contact</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-brass-300" aria-hidden="true" />
                {address ? (
                  <address className="not-italic">
                    {c.mapLink ? (
                      <a href={c.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                        {address.join(', ')}
                        <span className="sr-only"> (opens Google Maps in a new tab)</span>
                      </a>
                    ) : (
                      address.join(', ')
                    )}
                  </address>
                ) : (
                  <span>Lahore, Pakistan. Full address to be published.</span>
                )}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-brass-300" aria-hidden="true" />
                {c.phone ? (
                  <a href={c.phone.href} className="hover:text-ivory">
                    {c.phone.display}
                  </a>
                ) : (
                  <span>Telephone to be published</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-4 shrink-0 text-brass-300" aria-hidden="true" />
                {c.email ? (
                  <a href={`mailto:${c.email}`} className="break-all hover:text-ivory">
                    {c.email}
                  </a>
                ) : (
                  <span>Email to be published</span>
                )}
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/contact" className="link-arrow text-ivory">
                  Contact Us
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/contact/feedback" className="link-arrow text-ivory">
                  Feedback and Complaints
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
            {site.social.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-4 text-sm">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener noreferrer" target="_blank" className="hover:text-ivory">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[0.8rem] text-forest-200 md:flex-row md:items-start md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Apart from the photograph of the University’s main building, images on this website are illustrations or stock photographs. Facility figures are planning allocations.
          </p>
        </div>
      </div>
    </footer>
  );
}
