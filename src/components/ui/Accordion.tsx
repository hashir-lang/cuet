'use client';

import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { Plus } from 'lucide-react';
import clsx from 'clsx';

/** Accessible FAQ list (Base UI Accordion). Height animates 200ms ease-out; icon rotates as state indication. */
export function FaqList({ items, className }: { items: { question: string; answer: string }[]; className?: string }) {
  return (
    <BaseAccordion.Root className={clsx('border-t border-stone-200', className)} multiple>
      {items.map((item) => (
        <BaseAccordion.Item key={item.question} className="border-b border-stone-200">
          <BaseAccordion.Header>
            <BaseAccordion.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left font-serif text-[1.2rem] leading-snug text-ink transition-colors duration-150 hover:text-forest-700 sm:text-[1.3rem]">
              <span className="min-w-0">{item.question}</span>
              <span className="accordion-icon mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-stone-300 text-forest-700">
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>
          <BaseAccordion.Panel className="accordion-panel" hiddenUntilFound>
            <p className="max-w-[65ch] pb-6 pr-12 text-stone-700">{item.answer}</p>
          </BaseAccordion.Panel>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  );
}
