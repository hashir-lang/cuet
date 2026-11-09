import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { EventRow } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { eventCategoryBySlug, eventsInCategory } from '@/content/events';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('news');
type Props = { params: Promise<{ category: string }> };

/** Only the two categories named in the sitemap have their own listing pages. */
const listed = ['seminars-conferences', 'workshops-training'] as const;

export function generateStaticParams() {
  return listed.map((category) => ({ category }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = eventCategoryBySlug(category);
  if (!c) return {};
  return pageMeta({ title: c.label, description: `${c.label} at ${site.name}. ${c.description}`, path: `/events/category/${c.slug}` });
}

export default async function EventCategoryPage({ params }: Props) {
  const { category } = await params;
  const c = eventCategoryBySlug(category);
  if (!c || !(listed as readonly string[]).includes(c.slug)) notFound();
  const items = eventsInCategory(c.slug).sort((a, b) => {
    if (a.startsAt && b.startsAt) return a.startsAt.localeCompare(b.startsAt);
    return a.startsAt ? -1 : b.startsAt ? 1 : 0;
  });
  const onlyTemplates = items.length > 0 && items.every((e) => e.isTemplate);

  return (
    <SectionLayout section={section} current={`/events/category/${c.slug}`} title={c.label} lede={c.description} width="wide">
      <div className="space-y-10">
        {items.length === 0 ? (
          <Pending title={`No ${c.label.toLowerCase()} have been announced yet`}>Events will appear here as they are confirmed.</Pending>
        ) : onlyTemplates ? (
          <Pending title="Nothing has been announced in this category yet">The entry below is a template that shows how events will appear.</Pending>
        ) : null}
        {items.length ? (
          <div className="border-b border-stone-200">
            {items.map((e) => (
              <EventRow key={e.slug} event={e} headingLevel="h2" />
            ))}
          </div>
        ) : null}
        <Link href="/events" className="link-arrow text-forest-700">
          Full events calendar
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </SectionLayout>
  );
}
