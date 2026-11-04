'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { ArrowRight, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { isGroup, mainNav, type NavGroup } from '@/content/navigation';
import { faculties } from '@/content/faculties';
import { pad2 } from '@/lib/format';

const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

/** Which top-level item should be marked active for the current path. */
const groupActive = (pathname: string, group: NavGroup) =>
  group.kind === 'academics'
    ? isActive(pathname, '/faculties') || isActive(pathname, '/programs')
    : group.links.some((l) => isActive(pathname, l.href)) || isActive(pathname, group.href);

const topItem =
  'relative flex h-[var(--header-h)] items-center gap-1 whitespace-nowrap px-3 text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:text-sandstone-600 data-[popup-open]:text-sandstone-600 focus-visible:outline-offset-[-6px] xl:px-4 ' +
  "after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:bg-transparent after:content-[''] xl:after:inset-x-4";
const activeItem = 'after:bg-sandstone-600';

function MenuLink({ href, active, className, children }: { href: string; active?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <NavigationMenu.Link
      closeOnClick
      active={active}
      aria-current={active ? 'page' : undefined}
      render={<NextLink href={href} />}
      className={className}
    >
      {children}
    </NavigationMenu.Link>
  );
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="hidden lg:block" aria-label="Main">
      <NavigationMenu.List className="flex items-center">
        {mainNav.map((item) =>
          isGroup(item) ? (
            <NavigationMenu.Item key={item.label} value={item.label}>
              <NavigationMenu.Trigger className={clsx(topItem, groupActive(pathname, item) && activeItem)}>
                {item.label}
                <NavigationMenu.Icon className="transition-transform duration-200 ease-[var(--ease-out)] data-[popup-open]:rotate-180">
                  <ChevronDown className="size-4" aria-hidden="true" />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="nav-content">
                {item.kind === 'academics' ? <AcademicsPanel group={item} pathname={pathname} /> : <ListPanel group={item} pathname={pathname} />}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={item.label}>
              <MenuLink href={item.href} active={isActive(pathname, item.href) || (item.href === '/news' && isActive(pathname, '/events'))} className={clsx(topItem, (isActive(pathname, item.href) || (item.href === '/news' && isActive(pathname, '/events'))) && activeItem)}>
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

function ListPanel({ group, pathname }: { group: NavGroup; pathname: string }) {
  return (
    <ul className="w-[24rem] p-2">
      {group.links.map((l) => (
        <li key={l.href}>
          <MenuLink
            href={l.href}
            active={pathname === l.href}
            className="group block px-4 py-3 transition-colors duration-150 hover:bg-stone-100 data-[active]:bg-stone-100"
          >
            <span className="flex items-center justify-between gap-3 font-semibold text-ink">
              {l.label}
              <ArrowRight className="size-4 text-sandstone-600 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
            </span>
            {l.description ? <span className="mt-0.5 block text-sm leading-snug text-stone-600">{l.description}</span> : null}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
}

function AcademicsPanel({ group, pathname }: { group: NavGroup; pathname: string }) {
  return (
    <div className="grid w-[min(62rem,calc(100vw-2rem))] grid-cols-[17rem_1fr]">
      <div className="flex flex-col justify-between bg-forest-900 p-7 text-ivory">
        <div>
          <p className="eyebrow text-brass-300">Academics</p>
          <ul className="mt-5 space-y-4">
            {group.links.map((l) => (
              <li key={l.href}>
                <MenuLink href={l.href} active={pathname === l.href} className="group block">
                  <span className="flex items-center gap-2 font-serif text-xl text-ivory transition-colors duration-150 group-hover:text-brass-300">
                    {l.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-forest-200">{l.description}</span>
                </MenuLink>
              </li>
            ))}
          </ul>
        </div>
        <MenuLink href="/admissions" className="btn btn-primary btn-sm mt-8 self-start">
          Admissions
        </MenuLink>
      </div>
      <div className="p-6">
        <p className="eyebrow px-3 text-stone-600">Faculties</p>
        <ul className="mt-3 grid grid-cols-2 gap-x-2">
          {faculties.map((f) => (
            <li key={f.slug}>
              <MenuLink
                href={`/faculties/${f.slug}`}
                active={pathname === `/faculties/${f.slug}`}
                className="flex items-baseline gap-3 px-3 py-2 text-[0.95rem] text-ink transition-colors duration-150 hover:bg-stone-100 data-[active]:bg-stone-100"
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
