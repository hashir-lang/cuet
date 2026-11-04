import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Wordmark } from '@/components/brand/Wordmark';
import { portalHref, site } from '@/content/site';
import { topBarPortals } from '@/content/navigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

/** Dark utility bar: the motto (or the admissions announcement) and the "Navigate CueTech" quick links. */
function TopBar() {
  const a = site.admissions.announcement;
  return (
    <section aria-label="Site announcement and quick links" className="bg-forest-950 text-[0.82rem] text-forest-100">
      <div className="container-cul flex min-h-10 items-center justify-between gap-4 py-2">
        <p className="min-w-0 truncate">
          {a ? (
            <Link href={a.href} className="link-arrow text-ivory">
              {a.text}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          ) : (
            <span className="font-serif text-[0.95rem] italic tracking-[0.01em] text-forest-100">{site.tagline}</span>
          )}
        </p>
        <nav aria-label="Navigate CueTech" className="hidden shrink-0 md:block">
          <ul className="flex items-center gap-5">
            {topBarPortals.map((p) =>
              p.href ? (
                <li key={p.id}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="transition-colors duration-150 hover:text-ivory">
                    {p.label}
                  </a>
                </li>
              ) : (
                <li key={p.id}>
                  <Link href={portalHref(p)} className="transition-colors duration-150 hover:text-ivory">
                    {p.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link href="/navigate" className="link-arrow text-ivory">
                Navigate CueTech
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

/**
 * Site header. Below 1280 px: one sticky row with the wordmark, Apply Online and the menu
 * button (drawer). From 1280 px: the wordmark row scrolls away and a second, sticky row carries
 * the nine-section main menu. `--header-h` in globals.css is the height of whichever row sticks.
 */
export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper pt-[env(safe-area-inset-top,0px)] xl:static">
        <div className="container-cul flex h-[var(--brand-h)] items-center justify-between gap-4">
          <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
            <Wordmark preload />
          </Link>
          <div className="flex items-center gap-2 xl:gap-5">
            <Link href="/admissions/apply" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Apply Online
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
      <div className="sticky top-0 z-40 hidden border-b border-stone-200 bg-paper xl:block">
        <div className="container-cul flex h-[var(--nav-h)] items-center">
          <DesktopNav />
        </div>
      </div>
    </>
  );
}
