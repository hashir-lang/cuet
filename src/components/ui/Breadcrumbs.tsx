import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from './JsonLd';

export type Crumb = { name: string; href: string };

/** Breadcrumb trail with matching BreadcrumbList structured data. The last item is the current page. */
export function Breadcrumbs({ items, tone = 'light', className }: { items: Crumb[]; tone?: 'light' | 'dark'; className?: string }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className={clsx('text-sm', className)}>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex min-w-0 items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={clsx('truncate', tone === 'light' ? 'text-stone-600' : 'text-forest-200')}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className={clsx(
                        'underline-offset-4 transition-colors duration-150 hover:underline',
                        tone === 'light' ? 'text-forest-700' : 'text-ivory',
                      )}
                    >
                      {c.name}
                    </Link>
                    <ChevronRight className={clsx('size-3.5 shrink-0', tone === 'light' ? 'text-stone-500' : 'text-forest-200')} aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
