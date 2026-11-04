'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import clsx from 'clsx';
import type { HeroSlide } from '@/content/hero';

/** How long each photograph stays before the next one dissolves in. */
const INTERVAL_MS = 6000;
/** Dissolve length when the slideshow advances by itself (ease-in-out: a film dissolve). */
const AUTO_FADE_MS = 1000;
/** Dissolve length when the visitor picks a photograph (ease-out: the system responding). */
const MANUAL_FADE_MS = 500;

const two = (n: number) => String(n).padStart(2, '0');

/**
 * Full-bleed hero slideshow for the home page. Each slide is a photograph with its own
 * category line, headline, sentence and call to action. Layout: text centred, counter
 * and progress line bottom-left, call to action bottom-centre, arrows at the right.
 *
 * Motion: an opacity dissolve between photographs (a transition, so quick clicks retarget
 * instead of restarting), a slow 8 s zoom and the progress line as CSS animations (off the
 * main thread), and a staggered rise for the incoming text while the outgoing text fades.
 * The progress line's `animationend` is what advances the slide, so pausing the animation
 * pauses the slideshow exactly. Durations reach the CSS through `--hero-fade` and
 * `data-manual` on the section (globals.css, `.hero-slide` and `.hero-text-*`).
 *
 * It pauses while the arrows or pause button are hovered, while any control has keyboard
 * focus, while the hero is off screen or the tab is hidden, and when the visitor presses
 * pause. With `prefers-reduced-motion` it never auto-plays: the visitor steps with the arrows.
 */
export function HeroCarousel({ slides, label }: { slides: HeroSlide[]; label: string }) {
  const n = slides.length;
  const [index, setIndex] = useState(0);
  /** The slide that was showing before `index`. Its photo stays opaque underneath, its text fades out. */
  const [leaving, setLeaving] = useState<number | null>(null);
  /** Whether the current change was chosen by the visitor (quicker dissolve) or automatic. */
  const [manual, setManual] = useState(false);
  const [paused, setPaused] = useState(false); // the visitor pressed pause
  const [hovering, setHovering] = useState(false); // mouse over the arrows or pause button
  const [focused, setFocused] = useState(false); // keyboard focus on any control
  const [onScreen, setOnScreen] = useState(true); // hero in view and tab visible
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const playing = n > 1 && !paused && !hovering && !focused && onScreen && !reduceMotion;
  const fadeMs = manual ? MANUAL_FADE_MS : AUTO_FADE_MS;
  const slide = slides[index];

  const goTo = useCallback(
    (next: number, byVisitor: boolean) => {
      const target = ((next % n) + n) % n;
      if (target === index) return;
      setManual(byVisitor);
      setLeaving(index);
      setIndex(target);
    },
    [index, n],
  );

  // Drop the outgoing slide once the incoming photograph has fully faded in over it.
  useEffect(() => {
    if (leaving === null) return;
    const t = window.setTimeout(() => setLeaving(null), fadeMs + 100);
    return () => window.clearTimeout(t);
  }, [leaving, index, fadeMs]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let intersecting = true;
    const update = () => setOnScreen(intersecting && document.visibilityState === 'visible');
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        update();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    document.addEventListener('visibilitychange', update);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  const hoverProps = {
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === 'mouse') setHovering(true);
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === 'mouse') setHovering(false);
    },
  };
  const arrowClass = 'btn size-11 min-h-0 rounded-full p-0 text-ivory';

  return (
    <section
      ref={rootRef}
      aria-labelledby="hero-title"
      data-playing={playing}
      data-manual={manual}
      className="relative isolate overflow-hidden bg-forest-950 text-ivory"
      style={{ '--hero-interval': `${INTERVAL_MS}ms`, '--hero-fade': `${fadeMs}ms` } as React.CSSProperties}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      {/* Photographs */}
      <div role="region" aria-roledescription="carousel" aria-label={label} aria-live={playing ? 'off' : 'polite'} className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className="hero-slide"
            data-state={i === index ? 'active' : i === leaving ? 'leaving' : undefined}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}`}
            aria-hidden={i !== index}
          >
            <div className="hero-slide-media">
              <Image src={s.src} alt={s.alt} fill sizes="100vw" quality={60} preload={i === 0} className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Scrims: an even darkening, a soft pool behind the centred text, and darker top and bottom edges. */}
      <div aria-hidden="true" className="absolute inset-0 z-3 bg-forest-950/35" />
      <div aria-hidden="true" className="absolute inset-0 z-3 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(10,18,38,0.6),transparent_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-3 h-40 bg-gradient-to-b from-forest-950/70 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-3 h-1/2 bg-gradient-to-t from-forest-950/85 to-transparent" />

      {/* Text, centred. The outgoing slide's text fades while the incoming one rises in. */}
      <div className="container-cul relative z-10 flex h-[calc(100svh-7rem)] max-h-[56rem] min-h-[36rem] flex-col">
        <div className="grid flex-1 place-items-center px-2 pb-40 pt-12 text-center lg:pb-28">
          {leaving !== null ? <SlideText key={`out-${leaving}`} slide={slides[leaving]} out /> : null}
          <SlideText key={index} slide={slide} />
        </div>

        {/* Bottom-centre call to action */}
        <div className="absolute inset-x-0 bottom-[5.5rem] flex justify-center lg:bottom-8">
          <Link
            key={index}
            href={slide.cta.href}
            className="hero-text-in btn min-h-0 rounded-full border border-ivory/40 px-6 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ivory hover:border-ivory hover:bg-ivory hover:text-forest-950"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            {slide.cta.label}
          </Link>
        </div>

        {/* Bottom-left: counter, progress line, pause */}
        <div className="absolute bottom-6 left-4 flex items-center gap-4 sm:left-6 lg:bottom-8 lg:left-10">
          <p className="numerals flex items-center gap-2 text-[0.8rem] tracking-[0.1em]" aria-hidden="true">
            <span>{two(index + 1)}</span>
            <span className="text-ivory/50">/ {two(n)}</span>
          </p>
          {/* Always rendered: its animationend drives the auto-advance, so it must never be display:none. */}
          <span className="relative block h-px w-16 overflow-hidden bg-ivory/25 sm:w-24" aria-hidden="true">
            <span key={index} className="hero-progress absolute inset-0 origin-left bg-ivory" onAnimationEnd={() => goTo(index + 1, false)} />
          </span>
          {!reduceMotion ? (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              className="btn min-h-0 gap-2 rounded-full p-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ivory/80 hover:text-ivory"
              {...hoverProps}
            >
              {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
              <span className="hidden sm:inline">{paused ? 'Play' : 'Pause'}</span>
            </button>
          ) : null}
        </div>

        {/* Bottom-right note. Keeps the site honest about the photographs without a label on every slide. */}
        <p className="absolute bottom-8 right-10 hidden text-[0.68rem] uppercase tracking-[0.14em] text-ivory/45 lg:block">Stock photography</p>
      </div>

      {/* Arrows: bottom-right on phones, right-middle on wide screens */}
      {n > 1 ? (
        <div className="absolute bottom-6 right-4 z-10 flex items-center gap-2 sm:right-6 lg:bottom-auto lg:right-10 lg:top-1/2 lg:-translate-y-1/2" {...hoverProps}>
          <button type="button" onClick={() => goTo(index - 1, true)} aria-label="Previous slide" className={clsx(arrowClass, 'text-ivory/70 hover:text-ivory')}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => goTo(index + 1, true)} aria-label="Next slide" className={clsx(arrowClass, 'border border-ivory/40 hover:border-ivory')}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

/**
 * One slide's words. The incoming block rises in with a 60 ms stagger; the outgoing block
 * (`out`) fades and is hidden from assistive technology. Only the incoming block carries
 * the page's h1, so there is exactly one heading at any moment.
 */
function SlideText({ slide, out = false }: { slide: HeroSlide; out?: boolean }) {
  const motion = out ? 'hero-text-out' : 'hero-text-in';
  const Title = out ? 'p' : 'h1';
  return (
    <div className="col-start-1 row-start-1 flex max-w-4xl flex-col items-center [text-shadow:0_2px_18px_rgba(10,18,38,0.55)]" aria-hidden={out || undefined}>
      <p className={clsx('eyebrow text-brass-300', motion)} style={{ '--i': 0 } as React.CSSProperties}>
        {slide.caption}
      </p>
      <Title id={out ? undefined : 'hero-title'} className={clsx('display-xl mt-5 max-w-[16ch] text-ivory', motion)} style={{ '--i': 1 } as React.CSSProperties}>
        {slide.title}
      </Title>
      <p className={clsx('lede mt-6 max-w-[46ch] text-forest-100/90', motion)} style={{ '--i': 2 } as React.CSSProperties}>
        {slide.text}
      </p>
    </div>
  );
}
