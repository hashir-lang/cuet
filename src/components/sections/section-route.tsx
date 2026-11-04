import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionLayout } from './SectionLayout';
import { SectionPageBody } from './SectionPage';
import { sectionByKey, type SectionKey } from '@/content/sections';
import { genericPage, genericPages, pageHref, sectionPageMeta } from '@/lib/sections';

type Props = { params: Promise<{ slug: string }> };

/**
 * Builds the exports for a section's generic `[slug]` route from the sitemap in
 * src/content/sections.ts. Each route file is then four lines:
 *
 *   const route = createSectionRoute('about');
 *   export const dynamicParams = false;
 *   export const generateStaticParams = route.generateStaticParams;
 *   export const generateMetadata = route.generateMetadata;
 *   export default route.Page;
 */
export function createSectionRoute(key: SectionKey) {
  const section = sectionByKey(key);
  return {
    generateStaticParams: () => genericPages(section).map((p) => ({ slug: p.slug })),
    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const { slug } = await params;
      const { page } = genericPage(key, slug);
      return page ? sectionPageMeta(section, page) : {};
    },
    Page: async function SectionRoutePage({ params }: Props) {
      const { slug } = await params;
      const { page } = genericPage(key, slug);
      if (!page) notFound();
      return (
        <SectionLayout section={section} current={pageHref(section, page)} title={page.title} lede={page.summary}>
          <SectionPageBody section={section} page={page} />
        </SectionLayout>
      );
    },
  };
}
