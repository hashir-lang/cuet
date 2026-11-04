import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { ContactForm } from '@/components/contact/ContactForm';
import { Pending } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { programs } from '@/content/programs';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('contact');

export const metadata = pageMeta({
  title: 'Feedback and Complaints',
  description: `Give feedback or make a complaint to ${site.name}. How feedback is handled, and the grievance redressal and anti-harassment routes.`,
  path: '/contact/feedback',
});

export default function FeedbackPage() {
  return (
    <SectionLayout section={section} current="/contact/feedback" title="Feedback and Complaints" lede="Tell us what went well, or what did not. Feedback helps the University improve; complaints are taken seriously and handled in confidence." cta={false}>
      <div className="space-y-12">
        <section aria-labelledby="how-title">
          <h2 id="how-title" className="heading-lg">
            How feedback and complaints are handled
          </h2>
          <p className="mt-4 text-stone-700">Use the form below for feedback or a complaint about any aspect of the University. Your message is passed to the responsible office, which will reply to the email address you give.</p>
          <Pending title="The formal complaints procedure will be published here" className="mt-5">
            The Grievance Redressal procedure and the Anti-Harassment Regulations, including the committees that hear complaints and the timelines, will be published once approved by the statutory bodies.
          </Pending>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link href="/navigate#grievance-redressal" className="link-arrow text-forest-700">
                Grievance Redressal
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="/navigate#anti-harassment-regulations" className="link-arrow text-forest-700">
                Anti-Harassment Regulations
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </section>
        <section aria-labelledby="form-title" className="border-t border-stone-200 pt-8">
          <h2 id="form-title" className="heading-lg">
            Send feedback or a complaint
          </h2>
          <div className="mt-6">
            <ContactForm programs={programs.map((p) => ({ slug: p.slug, name: p.name }))} defaultEnquiryType="Feedback or complaint" />
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
