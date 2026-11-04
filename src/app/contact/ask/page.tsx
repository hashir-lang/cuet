import { SectionLayout } from '@/components/sections/SectionLayout';
import { ContactForm } from '@/components/contact/ContactForm';
import { FaqList } from '@/components/ui/Accordion';
import { sectionByKey } from '@/content/sections';
import { admissionsFaqs } from '@/content/admissions';
import { programs } from '@/content/programs';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('contact');

export const metadata = pageMeta({
  title: 'Ask Us',
  description: `Ask ${site.name} a question. Check the answers applicants ask most often, or send your question and the right office will reply.`,
  path: '/contact/ask',
});

export default function AskPage() {
  return (
    <SectionLayout section={section} current="/contact/ask" title="Ask Us" lede="Check the questions we are asked most often, or send yours and the right office will reply." cta={false}>
      <div className="space-y-14">
        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="heading-lg">
            Frequently asked questions
          </h2>
          <FaqList items={admissionsFaqs} className="mt-5" />
        </section>
        <section aria-labelledby="ask-title" className="border-t border-stone-200 pt-8">
          <h2 id="ask-title" className="heading-lg">
            Send your question
          </h2>
          <div className="mt-6">
            <ContactForm programs={programs.map((p) => ({ slug: p.slug, name: p.name }))} defaultEnquiryType="General enquiry" />
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
