'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/** Appears after the reader has scrolled well down a long page. Fades in (200ms ease-out). */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel');
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { rootMargin: '1200px 0px 0px 0px' });
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <button
      type="button"
      data-hidden={!visible}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        document.getElementById('main')?.focus({ preventScroll: true });
      }}
      className="back-to-top btn fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-30 size-12 min-h-0 rounded-full border border-stone-200 bg-paper p-0 text-forest-800 shadow-[var(--shadow-lift)]"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
