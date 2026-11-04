import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, HeartHandshake, Landmark, LifeBuoy, Users } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Media } from '@/components/media/Media';
import { DraftBadge, Pending } from '@/components/ui/Editorial';
import { CtaBand } from '@/components/ui/CtaBand';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Student Life',
  description: 'Student life at Central University of Emerging Technologies: academic support, campus environment, student resources, activities and community.',
  path: '/student-life',
});

const pillars = [
  { icon: BookOpen, title: 'Academic support', text: 'Guidance from teachers and academic advisers helps students plan their studies and stay on track.' },
  { icon: Landmark, title: 'Campus environment', text: 'Classrooms, laboratories and library spaces are planned around how each discipline is taught.' },
  { icon: Compass, title: 'Student resources', text: 'Each faculty has a dedicated library collection to support coursework and independent study.' },
  { icon: Users, title: 'Student activities', text: 'Societies, events and competitions give students the chance to lead, organise and make friends.' },
  { icon: HeartHandshake, title: 'University community', text: 'Students from thirteen faculties study side by side, learning from each other’s disciplines.' },
  { icon: LifeBuoy, title: 'Student services', text: 'Support for wellbeing, careers and practical matters helps students make the most of university life.' },
];

const services = ['Student affairs office', 'Career guidance', 'Counselling and wellbeing', 'Societies and clubs', 'Sports facilities', 'Transport and hostel information'];

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Student Life', href: '/student-life' }]}
        eyebrow="Campus"
        title="Student life"
        lede="University is more than lectures. It is where curiosity grows, friendships form and confidence is built."
        aside={<Media media={{ src: null, alt: 'Illustration representing student life', plate: 'student-life' }} className="aspect-[4/3] w-full" priority />}
      />

      <Section labelledBy="experience-title">
        <div className="container-cul">
          <div className="mb-10 flex flex-wrap items-center gap-3 sm:mb-14">
            <SectionHeading id="experience-title" eyebrow="The student experience" title="Supported to succeed, free to explore." className="!mb-0" />
          </div>
          <div className="mb-8">
            <DraftBadge />
          </div>
          <ul className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="bg-paper p-6 sm:p-8">
                <p.icon className="size-7 text-sandstone-600" strokeWidth={1.4} aria-hidden="true" />
                <h2 className="heading-md mt-6">{p.title}</h2>
                <p className="mt-2 text-stone-700">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="services-title">
        <div className="container-cul grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="services-title" eyebrow="Student services" title="Services and activities." className="!mb-6" />
            <p className="text-stone-700">The University will publish details of each student service, including how to contact it and when it is available.</p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-stone-300 border-y border-stone-300">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between gap-4 py-4">
                  <span className="font-medium">{s}</span>
                  <span className="text-sm italic text-stone-600">Details to be published</span>
                </li>
              ))}
            </ul>
            <Pending title="Student services information is awaiting confirmation" className="mt-6">
              The services listed are those the University plans to describe here. Confirmed details, contacts and availability will be added by the Student Affairs office.
            </Pending>
          </div>
        </div>
      </Section>

      <Section labelledBy="events-link-title">
        <div className="container-cul grid items-center gap-10 lg:grid-cols-2">
          <Media media={{ src: null, alt: 'Illustration representing university events', plate: 'events' }} className="aspect-[16/10]" />
          <div>
            <h2 id="events-link-title" className="heading-xl">
              What’s on
            </h2>
            <p className="lede mt-4 text-stone-700">Orientation, lectures, competitions and celebrations: find out what is happening around the University.</p>
            <Link href="/events" className="btn btn-dark mt-7">
              University events
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
