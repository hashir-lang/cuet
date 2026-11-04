import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Wordmark } from '@/components/brand/Wordmark';
import { site } from '@/content/site';
import { totals } from '@/content/infrastructure';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

function TopBar() {
  const a = site.admissions.announcement;
  return (
    <section aria-label="Site announcement" className="bg-forest-950 text-[0.82rem] text-forest-100">
      <div className="container-cul flex min-h-10 items-center justify-between gap-4 py-2">
        <p className="min-w-0">
          {a ? (
            <Link href={a.href} className="link-arrow text-ivory">
              {a.text}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          ) : (
            <>
              <span className="hidden sm:inline">
                {totals.faculties} faculties · {totals.programs} undergraduate programs ·{' '}
              </span>
              <Link href="/admissions" className="link-arrow text-ivory">
                Admissions guidance
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </>
          )}
        </p>
        <ul className="hidden shrink-0 items-center gap-5 md:flex">
          <li>
            <Link href="/news" className="transition-colors duration-150 hover:text-ivory">
              News
            </Link>
          </li>
          <li>
            <Link href="/events" className="transition-colors duration-150 hover:text-ivory">
              Events
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors duration-150 hover:text-ivory">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper pt-[env(safe-area-inset-top,0px)]">
        <div className="container-cul flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
            <Wordmark preload />
          </Link>
          <div className="flex items-center gap-2 xl:gap-5">
            <DesktopNav />
            <Link href="/admissions/apply" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Apply now
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
