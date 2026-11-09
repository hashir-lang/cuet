import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { newsCategories, newsCategoryBySlug, newsInCategory } from '@/content/news';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('news');
type Props = { params: Promise<{ category: string }> };

/** University News is the main listing at /news, so it has no category page of its own. */
const listed = newsCategories.filter((c) => c.slug !== 'university-news');

export function generateStaticParams() {
  return listed.map((c) => ({ category: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = newsCategoryBySlug(category);
  if (!c || c.slug === 'university-news') return {};
  return pageMeta({ title: c.label, description: `${c.label} from ${site.name}. ${c.description}`, path: `/news/category/${c.slug}` });
}

export default async function NewsCategoryPage({ params }: Props) {
  const { category } = await params;
  const c = newsCategoryBySlug(category);
  if (!c || c.slug === 'university-news') notFound();
  const items = newsInCategory(c.slug).sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
  const onlyTemplates = items.length > 0 && items.every((n) => n.isTemplate);

  return (
    <SectionLayout section={section} current={`/news/category/${c.slug}`} title={c.label} lede={c.description} width="wide">
      <div className="space-y-10">
        {items.length === 0 ? (
          <Pending title={`No ${c.label.toLowerCase()} have been published yet`}>Entries will appear here as the University publishes them.</Pending>
        ) : onlyTemplates ? (
          <Pending title="Nothing has been published in this category yet">The entry below is a template that shows how items will appear.</Pending>
        ) : null}
        {items.length ? (
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((a) => (
              <li key={a.slug}>
                <ArticleCard article={a} headingLevel="h2" />
              </li>
            ))}
          </ul>
        ) : null}
        <Link href="/news" className="link-arrow text-forest-700">
          All University news
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </SectionLayout>
  );
}
