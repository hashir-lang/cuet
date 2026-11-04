import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroArcade } from '@/components/art/HeroArcade';

/** Closing call to action used at the end of most pages. */
export function CtaBand({
  title = 'Begin your application to CUETECH.',
  text = 'Choose from seventeen undergraduate programs across thirteen faculties. Our admissions guide explains each step.',
  primary = { label: 'How to apply', href: '/admissions/how-to-apply' },
  secondary = { label: 'Contact the University', href: '/contact' },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-forest-900 text-ivory">
      <HeroArcade className="absolute inset-x-0 bottom-0 -z-10 h-full w-full opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/85 to-forest-900/30" aria-hidden="true" />
      <div className="container-cul py-20 sm:py-24 lg:py-28">
        <h2 id="cta-title" className="display-lg max-w-[18ch]">
          {title}
        </h2>
        <p className="lede mt-6 max-w-[52ch] text-forest-100">{text}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href={primary.href} className="btn btn-primary">
            {primary.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href={secondary.href} className="btn btn-outline-light">
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
