import { BookOpen, Compass, HeartHandshake, Landmark, LifeBuoy, Users } from 'lucide-react';
import { SectionLayout } from '@/components/sections/SectionLayout';
import { SectionIndex } from '@/components/sections/SectionIndex';
import { DraftBadge } from '@/components/ui/Editorial';
import { sectionByKey } from '@/content/sections';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

const section = sectionByKey('campus-life');

export const metadata = pageMeta({
  title: 'Campus Life',
  description: `Student facilitation and campus life at ${site.name}: orientation, learning spaces, library, student services, societies, sports, wellbeing, transport and alumni.`,
  path: '/campus-life',
});

const pillars = [
  { icon: BookOpen, title: 'Academic support', text: 'Guidance from teachers and academic advisers helps students plan their studies and stay on track.' },
  { icon: Landmark, title: 'Campus environment', text: 'Classrooms, laboratories and library spaces are planned around how each discipline is taught.' },
  { icon: Compass, title: 'Student resources', text: 'Each faculty has a dedicated library collection to support coursework and independent study.' },
  { icon: Users, title: 'Student activities', text: 'Societies, events and competitions give students the chance to lead, organise and make friends.' },
  { icon: HeartHandshake, title: 'University community', text: 'Students from thirteen faculties study side by side, learning from each other’s disciplines.' },
  { icon: LifeBuoy, title: 'Student services', text: 'Support for wellbeing, careers and practical matters helps students make the most of university life.' },
];

export default function CampusLifePage() {
  return (
    <SectionLayout
      section={section}
      current="/campus-life"
      title={section.title}
      lede="University is more than lectures. It is where curiosity grows, friendships form and confidence is built."
      width="wide"
      cta={{ title: 'See where you will study.', primary: { label: 'Campus and Facilities', href: '/campus' }, secondary: { label: 'Visit Our Campus', href: '/contact/visit' } }}
    >
      <div className="space-y-14">
        <section aria-labelledby="experience-title">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="experience-title" className="heading-lg">
              Supported to succeed, free to explore.
            </h2>
            <DraftBadge />
          </div>
          <ul className="mt-6 grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 xl:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="bg-paper p-5 sm:p-6">
                <p.icon className="size-6 text-sandstone-600" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="heading-md mt-5">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-stone-700">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="index-title">
          <h2 id="index-title" className="heading-lg">
            Students facilitation and campus life
          </h2>
          <p className="mt-3 text-stone-700">Details of each service are published as it opens. Pages marked as being prepared will be completed by the Directorate of Student Affairs.</p>
          <SectionIndex section={section} className="mt-6" />
        </section>
      </div>
    </SectionLayout>
  );
}
