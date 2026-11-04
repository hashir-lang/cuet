import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BrandMark } from '@/components/brand/Wordmark';

export const metadata = { title: 'Page not found', robots: { index: false } };

const suggestions = [
  { label: 'Academic Programs', href: '/programs' },
  { label: 'Faculties & Departments', href: '/faculties' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-cul max-w-3xl text-center">
        <BrandMark className="mx-auto h-20 w-auto" />
        <p className="eyebrow mt-8 text-sandstone-600">Error 404</p>
        <h1 className="display-lg mt-4">This page could not be found.</h1>
        <p className="lede mx-auto mt-5 max-w-[48ch] text-stone-700">The link may be out of date, or the page may have moved. These pages might help:</p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="btn btn-outline btn-sm">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="link-arrow mt-10 text-forest-700">
          Back to the home page
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
