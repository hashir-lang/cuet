import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { news, newsBySlug } from '@/content/news';
import { PageHero } from '@/components/ui/PageHero';
import { Media } from '@/components/media/Media';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Pending, TemplateBadge } from '@/components/ui/Editorial';
import { formatDate } from '@/lib/format';
import { pageMeta } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = newsBySlug(slug);
  if (!a) return {};
  return pageMeta({ title: a.title, description: a.excerpt, path: `/news/${a.slug}`, type: 'article', noIndex: a.isTemplate });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = newsBySlug(slug);
  if (!a) notFound();
  const more = news.filter((n) => n.slug !== a.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'News', href: '/news' },
          { name: a.title, href: `/news/${a.slug}` },
        ]}
        eyebrow={a.category}
        title={a.title}
        tone="ivory"
      >
        <div className="flex flex-wrap items-center gap-3 text-stone-700">
          {a.publishedAt ? <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time> : <span>Publication date to be confirmed</span>}
          {a.isTemplate ? <TemplateBadge /> : null}
        </div>
      </PageHero>
      <article className="bg-paper pb-16 sm:pb-20">
        <div className="container-cul">
          <Media media={a.media} className="-mt-2 aspect-[21/9] w-full" priority sizes="100vw" />
          <div className="mx-auto mt-12 max-w-[68ch]">
            {a.isTemplate ? (
              <Pending title="This is a template entry" className="mb-8">
                It shows the layout of a news article and will be replaced by an official announcement.
              </Pending>
            ) : null}
            <div className="prose-cul text-lg leading-relaxed">
              <p className="lede font-medium">{a.excerpt}</p>
              {a.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link href="/news" className="link-arrow mt-12 text-forest-700">
              <ArrowLeft className="size-4" aria-hidden="true" />
              All news
            </Link>
          </div>
        </div>
      </article>
      {more.length ? (
        <section aria-labelledby="more-news" className="border-t border-stone-200 bg-ivory py-16">
          <div className="container-cul">
            <h2 id="more-news" className="heading-xl mb-10">
              More news
            </h2>
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((m) => (
                <li key={m.slug}>
                  <ArticleCard article={m} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
