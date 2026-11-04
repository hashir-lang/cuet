import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, FileText, MessageCircle, UserRound } from 'lucide-react';
import { FaqList } from '@/components/ui/Accordion';
import { DraftBadge, Pending, TBC } from '@/components/ui/Editorial';
import type { Section, SectionLink, SectionPage as SectionPageData, SectionPart } from '@/content/sections';
import { university } from '@/content/university';
import { admissionsFaqs } from '@/content/admissions';
import { academicCalendar } from '@/content/academics';
import { partners } from '@/content/global';
import { site } from '@/content/site';
import { formatDate } from '@/lib/format';

const defaultPending = 'The University is preparing the content for this page. It will be published here once approved.';

const messageRoles = { chancellor: 'Chancellor', chairman: 'Chairman, Board of Governors', viceChancellor: 'Vice Chancellor' } as const;

/**
 * Generic body for a sub-page defined in src/content/sections.ts: draft paragraphs, anchored
 * parts, item lists, role cards, a leader's message, a data-driven component and the
 * "awaiting content" panel, in that order, followed by related links.
 */
export function SectionPageBody({ section, page }: { section: Section; page: SectionPageData }) {
  const hasContent = Boolean(page.body?.length || page.parts?.length || page.items?.length || page.roles || page.message || page.component);
  return (
    <div className="space-y-12">
      {page.body?.length ? (
        <div>
          <DraftBadge className="mb-4" />
          <div className="prose-cul text-stone-700">
            {page.body.map((p, i) => (
              <p key={i} className={i === 0 ? 'lede text-ink' : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {page.parts?.map((part) => (
        <Part key={part.id} part={part} />
      ))}

      {page.items?.length ? <Items title={page.itemsTitle} items={page.items} /> : null}

      {page.roles ? <Roles roles={page.roles} /> : null}

      {page.message ? <Message role={page.message} /> : null}

      {page.component === 'gallery' ? <Gallery /> : null}
      {page.component === 'schedule' ? <Schedule /> : null}
      {page.component === 'faqs' ? <Faqs /> : null}
      {page.component === 'calendar' ? <Calendar /> : null}
      {page.component === 'partners' ? <Partners /> : null}
      {page.component === 'chat' ? <Chat /> : null}

      {page.pending || !hasContent ? <Pending title="Content for this page is being prepared">{page.pending ?? defaultPending}</Pending> : null}

      {page.related?.length ? <Related links={page.related} /> : null}

      <p className="text-sm text-stone-600">
        Part of{' '}
        <Link href={section.hub?.href ?? section.path} className="text-forest-700 underline underline-offset-4">
          {section.hub?.label ?? section.title}
        </Link>
        .
      </p>
    </div>
  );
}

function Part({ part }: { part: SectionPart }) {
  const paragraphs = typeof part.text === 'string' ? [part.text] : (part.text ?? []);
  return (
    <section id={part.id} aria-labelledby={`${part.id}-title`} className="scroll-mt-28 border-t border-stone-200 pt-8">
      <div className="flex flex-wrap items-center gap-3">
        <h2 id={`${part.id}-title`} className="heading-lg">
          {part.title}
        </h2>
        {paragraphs.length || part.list ? <DraftBadge /> : null}
      </div>
      {paragraphs.length ? (
        <div className="prose-cul mt-4 text-stone-700">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}
      {part.list?.length ? (
        <ul className="mt-5 space-y-3">
          {part.list.map((item) => {
            const [head, ...rest] = item.split(': ');
            const detail = rest.join(': ');
            return (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-5 shrink-0 text-forest-600" aria-hidden="true" />
                <span>
                  {detail ? <strong className="font-semibold">{head}: </strong> : null}
                  {detail || head}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
      {part.pending ? (
        <Pending title={paragraphs.length || part.list ? 'Awaiting confirmation' : 'To be published'} className="mt-5" compact>
          {part.pending}
        </Pending>
      ) : null}
      {part.links?.length ? (
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {part.links.map((l) => (
            <li key={l.href}>
              <RelatedLink link={l} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function Items({ title, items }: { title?: string; items: NonNullable<SectionPageData['items']> }) {
  return (
    <section aria-label={title ?? 'List'}>
      {title ? <h2 className="heading-lg">{title}</h2> : null}
      <ul className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
        {items.map((item) => (
          <li key={item.label} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3.5">
            <span className="flex items-center gap-3 font-medium">
              <FileText className="size-4 shrink-0 text-sandstone-600" aria-hidden="true" />
              {item.href ? (
                item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-forest-700 underline underline-offset-4">
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link href={item.href} className="text-forest-700 underline underline-offset-4">
                    {item.label}
                  </Link>
                )
              ) : (
                item.label
              )}
            </span>
            {item.note ? <span className="text-sm italic text-stone-600">{item.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Roles({ roles }: { roles: readonly { role: string; name: string | null }[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {roles.map((l) => (
        <li key={l.role} className="border border-stone-200">
          <div className="grid aspect-[4/3] place-items-center bg-stone-100">
            <UserRound className="size-14 text-stone-300" strokeWidth={1} aria-hidden="true" />
          </div>
          <div className="p-5">
            <p className="eyebrow text-sandstone-600">{l.role}</p>
            <p className="heading-md mt-2">{l.name ?? <TBC label="Name to be announced" />}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Message({ role }: { role: keyof typeof university.messages }) {
  const m = university.messages[role];
  const title = messageRoles[role];
  if (!m) {
    return (
      <div className="grid gap-8 sm:grid-cols-[12rem_1fr]">
        <div className="grid aspect-[4/5] place-items-center border border-stone-200 bg-stone-100">
          <UserRound className="size-16 text-stone-300" strokeWidth={1} aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow text-sandstone-600">{title}</p>
          <p className="heading-md mt-2">
            <TBC label="Name to be announced" />
          </p>
          <Pending title={`The ${title}’s message will be published here`} className="mt-6">
            The message and photograph will be added once received from the office of the {title}.
          </Pending>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-8 sm:grid-cols-[12rem_1fr]">
      {m.photo ? (
        <div className="relative aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
          <Image src={m.photo} alt={`${m.name}, ${m.title}`} fill sizes="12rem" className="object-cover" />
        </div>
      ) : (
        <div className="grid aspect-[4/5] place-items-center border border-stone-200 bg-stone-100">
          <UserRound className="size-16 text-stone-300" strokeWidth={1} aria-hidden="true" />
        </div>
      )}
      <div>
        <p className="eyebrow text-sandstone-600">{m.title}</p>
        <p className="heading-md mt-2">{m.name}</p>
        <div className="prose-cul mt-6 text-stone-700">
          {m.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section aria-label="Photographs">
      <figure>
        <div className="relative aspect-[16/9] overflow-hidden border border-stone-200 bg-stone-200">
          <Image src="/images/hero/main-building.jpg" alt="The main building of the University, with its name and emblem above the entrance." fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" style={{ objectPosition: '58% 45%' }} />
        </div>
        <figcaption className="mt-3 text-sm text-stone-600">The main building of {site.legalName}, Maulana Shaukat Ali Road, {site.city}. Photograph supplied by the University.</figcaption>
      </figure>
      <Pending title="More photographs will be added as the campus is completed" className="mt-8">
        Until then, the other images on this website are illustrations or stock photographs and do not show the University.
      </Pending>
    </section>
  );
}

function Schedule() {
  const dates = site.admissions.importantDates;
  return (
    <section aria-labelledby="schedule-title">
      <h2 id="schedule-title" className="heading-lg">
        Key dates
      </h2>
      {dates.length ? (
        <dl className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
          {dates.map((d) => (
            <div key={d.label} className="flex justify-between gap-6 py-4">
              <dt>{d.label}</dt>
              <dd className="numerals font-semibold">{formatDate(d.date)}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <Pending title="Dates have not yet been announced" className="mt-5">
          Application opening and closing dates, test and interview dates and the start of classes will appear here once the University confirms them. They are also announced in the News section.
        </Pending>
      )}
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <RelatedLink link={{ label: 'Official Announcements', href: '/news/category/announcements' }} />
        </li>
        <li>
          <RelatedLink link={{ label: 'How to Apply', href: '/admissions/how-to-apply' }} />
        </li>
      </ul>
    </section>
  );
}

function Faqs() {
  const email = site.contact.admissionsEmail ?? site.contact.email;
  return (
    <section aria-label="Questions and answers">
      <FaqList items={admissionsFaqs} />
      <p className="mt-6 text-stone-700">
        Not answered here?{' '}
        <Link href="/contact/ask" className="font-semibold text-forest-700 underline underline-offset-4">
          Ask us
        </Link>
        {email ? (
          <>
            {' '}
            or email{' '}
            <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
              {email}
            </a>
          </>
        ) : null}
        .
      </p>
    </section>
  );
}

function Calendar() {
  return (
    <section aria-labelledby="calendar-title">
      <h2 id="calendar-title" className="heading-lg">
        Academic year
      </h2>
      {academicCalendar.length ? (
        <dl className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
          {academicCalendar.map((d) => (
            <div key={d.label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
              <dt>
                {d.label}
                {d.note ? <span className="block text-sm text-stone-600">{d.note}</span> : null}
              </dt>
              <dd className="numerals font-semibold">{formatDate(d.date)}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <Pending title="The academic calendar will be published here" className="mt-5">
          Semester start and end dates, examination periods and holidays will be listed once the University approves the calendar for the academic year.
        </Pending>
      )}
    </section>
  );
}

function Partners() {
  return (
    <section aria-labelledby="partners-title">
      <h2 id="partners-title" className="heading-lg">
        Partner institutions
      </h2>
      {partners.length ? (
        <ul className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
          {partners.map((p) => (
            <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              <span className="font-medium">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-forest-700 underline underline-offset-4">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </span>
              <span className="text-sm text-stone-600">
                {p.type} · {p.country}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <Pending title="The list of international partners will be published here" className="mt-5">
          Partner universities, institutions and organisations will be listed as agreements are confirmed.
        </Pending>
      )}
    </section>
  );
}

function Chat() {
  const w = site.contact.whatsapp;
  const email = site.contact.email;
  return (
    <section aria-labelledby="chat-title">
      <h2 id="chat-title" className="heading-lg">
        Message us
      </h2>
      {w ? (
        <div className="mt-5 border border-stone-200 bg-ivory p-6">
          <p className="text-stone-700">Send a message on WhatsApp and the University will reply during office hours.</p>
          <a href={w.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp ({w.display})
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      ) : (
        <Pending title="Live chat is not yet available" className="mt-5">
          A chat channel will be added here. Until then, send a message through the contact form
          {email ? (
            <>
              {' '}
              or email{' '}
              <a href={`mailto:${email}`} className="break-all font-semibold text-forest-700 underline underline-offset-4">
                {email}
              </a>
            </>
          ) : null}
          .
        </Pending>
      )}
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <RelatedLink link={{ label: 'Contact form', href: '/contact' }} />
        </li>
        <li>
          <RelatedLink link={{ label: 'Ask Us', href: '/contact/ask' }} />
        </li>
      </ul>
    </section>
  );
}

function Related({ links }: { links: SectionLink[] }) {
  return (
    <section aria-labelledby="related-title" className="border-t border-stone-200 pt-8">
      <h2 id="related-title" className="eyebrow text-stone-600">
        See also
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <RelatedLink link={l} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function RelatedLink({ link }: { link: SectionLink }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-arrow text-forest-700">
        {link.label}
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={link.href} className="link-arrow text-forest-700">
      {link.label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
