import clsx from 'clsx';
import { Jali } from '@/components/art/Jali';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

/**
 * Header band for interior pages: breadcrumbs, eyebrow, H1, lede, optional aside (artwork or key facts).
 * No entrance animation: interior pages are visited many times per session (remove-animations gate).
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  aside,
  children,
  tone = 'forest',
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'forest' | 'ivory';
}) {
  const dark = tone === 'forest';
  return (
    <div className={clsx('relative isolate overflow-hidden', dark ? 'bg-forest-900 text-ivory' : 'bg-ivory text-ink')}>
      <div className={clsx('absolute inset-0 -z-10', dark ? 'text-brass-300 opacity-[0.07]' : 'text-forest-700 opacity-[0.05]')}>
        <Jali size={52} />
      </div>
      <div className="container-cul pb-14 pt-8 sm:pb-20 sm:pt-10">
        <Breadcrumbs items={crumbs} tone={dark ? 'dark' : 'light'} />
        <div className={clsx('mt-10 grid gap-10 sm:mt-14', aside && 'lg:grid-cols-12 lg:items-end')}>
          <div className={clsx(aside && 'lg:col-span-7')}>
            {eyebrow ? (
              <p className={clsx('eyebrow mb-5 flex items-center gap-3', dark ? 'text-brass-300' : 'text-sandstone-600')}>
                <span className={clsx('h-px w-8', dark ? 'bg-brass-300' : 'bg-sandstone-500')} aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="display-lg max-w-[20ch]">
              {title}
            </h1>
            {lede ? (
              <div className={clsx('lede mt-6 max-w-[58ch]', dark ? 'text-forest-100' : 'text-stone-700')}>
                {lede}
              </div>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>
      </div>
    </div>
  );
}
