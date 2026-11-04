'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { ArrowRight, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { isGroup, mainNav, type NavGroup } from '@/content/navigation';
import { faculties } from '@/content/faculties';
import { pad2 } from '@/lib/format';

const path = (href: string) => href.split('#')[0];
const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

/** Which top-level item should be marked active for the current path. */
const groupActive = (pathname: string, group: NavGroup) =>
  isActive(pathname, group.href) ||
  group.links.some((l) => isActive(pathname, path(l.href))) ||
  (group.kind === 'academics' && (isActive(pathname, '/faculties') || isActive(pathname, '/programs'))) ||
  (group.href === '/news' && (isActive(pathname, '/events') || isActive(pathname, '/media')));

const topItem =
  'relative flex h-[var(--nav-h)] items-center gap-1 whitespace-nowrap px-2 text-[0.85rem] font-medium text-ink transition-colors duration-150 hover:text-sandstone-600 data-[popup-open]:text-sandstone-600 focus-visible:outline-offset-[-6px] 2xl:px-3.5 2xl:text-[0.9rem] ' +
  "after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:bg-transparent after:content-[''] 2xl:after:inset-x-3.5";
const activeItem = 'after:bg-sandstone-600';

function MenuLink({ href, active, className, children }: { href: string; active?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <NavigationMenu.Link closeOnClick active={active} aria-current={active ? 'page' : undefined} render={<NextLink href={href} />} className={className}>
      {children}
    </NavigationMenu.Link>
  );
}

/**
 * Desktop main menu (from 1280 px): the nine sections of the sitemap in one row. Each section
 * opens a panel listing its pages; Academics also lists the thirteen faculties. The panel
 * opens from its trigger (origin-aware), 200 ms ease-out; see globals.css `.nav-*`.
 */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="min-w-0" aria-label="Main">
      <NavigationMenu.List className="-mx-2 flex items-center overflow-x-auto [scrollbar-width:none] 2xl:-mx-3.5">
        {mainNav.map((item) =>
          isGroup(item) ? (
            <NavigationMenu.Item key={item.label} value={item.label}>
              <NavigationMenu.Trigger className={clsx(topItem, groupActive(pathname, item) && activeItem)}>
                {item.label}
                <NavigationMenu.Icon className="transition-transform duration-200 ease-[var(--ease-out)] data-[popup-open]:rotate-180">
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="nav-content">
                {item.kind === 'academics' ? <AcademicsPanel group={item} pathname={pathname} /> : <ListPanel group={item} pathname={pathname} />}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={item.label}>
              <MenuLink href={item.href} active={isActive(pathname, item.href)} className={clsx(topItem, isActive(pathname, item.href) && activeItem)}>
                {item.label}
              </MenuLink>
            </NavigationMenu.Item>
          ),
        )}
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner className="nav-positioner z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)]" sideOffset={0} collisionPadding={16} align="start">
          <NavigationMenu.Popup className="nav-popup relative h-[var(--popup-height)] w-[var(--popup-width)] overflow-hidden border border-stone-200 bg-paper shadow-[var(--shadow-menu)]">
            <NavigationMenu.Viewport className="relative h-full w-full" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

function PanelHeader({ group }: { group: NavGroup }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-stone-200 px-4 py-3">
      <span className="eyebrow text-stone-600">{group.label}</span>
      <MenuLink href={group.href} className="link-arrow text-sm text-forest-700">
        Overview
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </MenuLink>
    </div>
  );
}

/**
 * Pages of one section. Up to six links are shown with their descriptions in one column;
 * longer lists are compact and flow top-to-bottom through two or three columns.
 */
function ListPanel({ group, pathname }: { group: NavGroup; pathname: string }) {
  const n = group.links.length;
  const cols = group.kind === 'departments' ? 2 : n <= 6 ? 1 : n <= 12 ? 2 : 3;
  return (
    <div className={clsx(cols === 1 && 'w-[24rem]', cols === 2 && 'w-[min(42rem,calc(100vw-2rem))]', cols === 3 && 'w-[min(58rem,calc(100vw-2rem))]')}>
      <PanelHeader group={group} />
      {cols === 1 ? (
        <ul className="p-2">
          {group.links.map((l) => (
            <li key={l.href}>
              <MenuLink href={l.href} active={pathname === path(l.href)} className="group block px-4 py-3 transition-colors duration-150 hover:bg-stone-100 data-[active]:bg-stone-100">
                <span className="flex items-center justify-between gap-3 font-semibold text-ink">
                  {l.label}
                  <ArrowRight className="size-4 text-sandstone-600 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
                </span>
                {l.description ? <span className="mt-0.5 block text-sm leading-snug text-stone-600">{l.description}</span> : null}
              </MenuLink>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={clsx('gap-x-2 p-3', cols === 2 ? 'columns-2' : 'columns-3')}>
          {group.links.map((l) => (
            <li key={l.href} className="break-inside-avoid">
              <MenuLink href={l.href} active={pathname === path(l.href)} className="block px-3 py-2 text-[0.92rem] leading-snug text-ink transition-colors duration-150 hover:bg-stone-100 data-[active]:bg-stone-100 data-[active]:font-semibold">
                {l.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Academics: the academic pages in a dark column, the thirteen faculties beside them. */
function AcademicsPanel({ group, pathname }: { group: NavGroup; pathname: string }) {
  return (
    <div className="grid w-[min(64rem,calc(100vw-2rem))] grid-cols-[19rem_1fr]">
      <div className="flex flex-col bg-forest-900 p-6 text-ivory">
        <p className="eyebrow text-brass-300">Academics</p>
        <ul className="mt-4 space-y-0.5">
          {group.links.map((l) => (
            <li key={l.href}>
              <MenuLink href={l.href} active={pathname === path(l.href)} className="group flex items-center justify-between gap-2 py-1.5 text-[0.92rem] text-forest-100 transition-colors duration-150 hover:text-brass-300 data-[active]:text-brass-300">
                {l.label}
                <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
              </MenuLink>
            </li>
          ))}
        </ul>
        <MenuLink href="/admissions/apply" className="btn btn-primary btn-sm mt-6 self-start">
          Apply Online
        </MenuLink>
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4 px-3">
          <p className="eyebrow text-stone-600">Faculties and Departments</p>
          <MenuLink href="/faculties" className="link-arrow text-sm text-forest-700">
            All faculties
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </MenuLink>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-x-2">
          {faculties.map((f) => (
            <li key={f.slug}>
              <MenuLink
                href={`/faculties/${f.slug}`}
                active={pathname === `/faculties/${f.slug}`}
                className="flex items-baseline gap-3 px-3 py-2 text-[0.92rem] leading-snug text-ink transition-colors duration-150 hover:bg-stone-100 data-[active]:bg-stone-100"
              >
                <span className="numerals w-5 shrink-0 text-xs text-stone-500">{pad2(f.order)}</span>
                <span className="min-w-0">{f.shortName}</span>
              </MenuLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
