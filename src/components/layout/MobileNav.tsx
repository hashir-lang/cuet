'use client';

import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@base-ui/react/dialog';
import { Accordion } from '@base-ui/react/accordion';
import { ChevronDown, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { isGroup, mainNav } from '@/content/navigation';
import { faculties } from '@/content/faculties';
import { portalHref, site } from '@/content/site';
import { Wordmark } from '@/components/brand/Wordmark';

const path = (href: string) => href.split('#')[0];

/** Navigation below 1280 px: a drawer from the right edge (Base UI Dialog) with one accordion per section. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    clsx('block py-3 text-[1.05rem] transition-colors duration-150', pathname === path(href) ? 'font-semibold text-sandstone-600' : 'text-ink hover:text-sandstone-600');
  const current = (href: string) => (pathname === path(href) ? 'page' : undefined);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="btn btn-sm -mr-2 gap-2 px-3 text-forest-900 xl:hidden" aria-label="Open menu">
        <Menu className="size-5" aria-hidden="true" />
        <span className="text-sm font-semibold">Menu</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="drawer-backdrop fixed inset-0 z-50 bg-forest-950/50" />
        <Dialog.Popup className="drawer-popup fixed inset-y-0 right-0 z-50 flex w-full max-w-[26rem] flex-col bg-paper shadow-[var(--shadow-menu)] outline-none">
          <div className="flex h-[var(--brand-h)] items-center justify-between border-b border-stone-200 px-5 pt-[env(safe-area-inset-top,0px)]">
            <Dialog.Title className="sr-only">Site menu</Dialog.Title>
            <Wordmark />
            <Dialog.Close className="btn btn-sm -mr-2 px-3 text-forest-900" aria-label="Close menu">
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
            <ul className="divide-y divide-stone-200">
              <li>
                <NextLink href="/" className={linkClass('/')} aria-current={pathname === '/' ? 'page' : undefined}>
                  Home
                </NextLink>
              </li>
              {mainNav.map((item) =>
                isGroup(item) ? (
                  <li key={item.label}>
                    <Accordion.Root>
                      <Accordion.Item>
                        <Accordion.Header>
                          <Accordion.Trigger className="group flex w-full items-center justify-between py-3 text-left font-sans text-[1.05rem] text-ink">
                            {item.label}
                            <ChevronDown className="size-5 text-stone-500 transition-transform duration-200 ease-[var(--ease-out)] group-data-[panel-open]:rotate-180" aria-hidden="true" />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Panel className="accordion-panel">
                          <ul className="mb-3 border-l border-stone-200 pl-4">
                            <li>
                              <NextLink href={item.href} className={clsx(linkClass(item.href), 'py-2.5 text-base')} aria-current={current(item.href)}>
                                Overview
                              </NextLink>
                            </li>
                            {item.links.map((l) => (
                              <li key={l.href}>
                                <NextLink href={l.href} className={clsx(linkClass(l.href), 'py-2.5 text-base')} aria-current={current(l.href)}>
                                  {l.label}
                                </NextLink>
                              </li>
                            ))}
                            {item.kind === 'academics' ? (
                              <li className="mt-2 border-t border-stone-200 pt-2">
                                <p className="eyebrow py-2 text-stone-600">Faculties</p>
                                <ul>
                                  {faculties.map((f) => (
                                    <li key={f.slug}>
                                      <NextLink
                                        href={`/faculties/${f.slug}`}
                                        className={clsx(linkClass(`/faculties/${f.slug}`), 'py-2 text-[0.95rem] text-stone-700')}
                                        aria-current={current(`/faculties/${f.slug}`)}
                                      >
                                        {f.shortName}
                                      </NextLink>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ) : null}
                          </ul>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion.Root>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NextLink href={item.href} className={linkClass(item.href)} aria-current={current(item.href)}>
                      {item.label}
                    </NextLink>
                  </li>
                ),
              )}
              <li>
                <Accordion.Root>
                  <Accordion.Item>
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between py-3 text-left font-sans text-[1.05rem] text-ink">
                        Navigate CueTech
                        <ChevronDown className="size-5 text-stone-500 transition-transform duration-200 ease-[var(--ease-out)] group-data-[panel-open]:rotate-180" aria-hidden="true" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="accordion-panel">
                      <ul className="mb-3 border-l border-stone-200 pl-4">
                        {site.portals.map((p) => (
                          <li key={p.id}>
                            {p.href ? (
                              <a href={p.href} target="_blank" rel="noopener noreferrer" className={clsx(linkClass(p.href), 'py-2.5 text-base')}>
                                {p.label}
                              </a>
                            ) : (
                              <NextLink href={portalHref(p)} className={clsx(linkClass('/navigate'), 'py-2.5 text-base font-normal text-ink')}>
                                {p.label}
                              </NextLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion.Root>
              </li>
            </ul>
          </nav>

          <div className="border-t border-stone-200 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
            <NextLink href="/admissions/apply" className="btn btn-primary w-full">
              Apply Online
            </NextLink>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
