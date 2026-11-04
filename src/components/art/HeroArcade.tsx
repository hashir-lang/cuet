import { useId } from 'react';

/** Pointed (four-centred) arch from x0 to x1, springing at ys with apex at ya, standing on yb. */
const arch = (x0: number, x1: number, ys: number, ya: number, yb: number) => {
  const xm = (x0 + x1) / 2;
  const w = x1 - x0;
  const k = (ys - ya) * 0.62;
  return `M${x0} ${yb} V${ys} C${x0} ${ys - k} ${xm - w * 0.22} ${ya + (ys - ya) * 0.18} ${xm} ${ya} C${xm + w * 0.22} ${ya + (ys - ya) * 0.18} ${x1} ${ys - k} ${x1} ${ys} V${yb}`;
};

/** Small domed pavilion (chhatri) centred on cx, standing on y. */
const chhatri = (cx: number, y: number, w: number) => {
  const h = w * 0.9;
  const top = y - h;
  return [
    `M${cx - w / 2} ${y} V${top + h * 0.45} H${cx + w / 2} V${y}`,
    `M${cx - w / 2 - 4} ${top + h * 0.45} H${cx + w / 2 + 4}`,
    `M${cx - w / 2} ${top + h * 0.45} C${cx - w / 2} ${top + h * 0.1} ${cx - w * 0.1} ${top} ${cx} ${top - h * 0.18} C${cx + w * 0.1} ${top} ${cx + w / 2} ${top + h * 0.1} ${cx + w / 2} ${top + h * 0.45}`,
    `M${cx} ${top - h * 0.18} V${top - h * 0.38}`,
  ].join(' ');
};

const cypress = (x: number, base: number, h: number) =>
  `M${x} ${base} C${x - h * 0.12} ${base - h * 0.45} ${x - h * 0.07} ${base - h * 0.8} ${x} ${base - h} C${x + h * 0.07} ${base - h * 0.8} ${x + h * 0.12} ${base - h * 0.45} ${x} ${base}`;

/**
 * Hero artwork: an original line drawing of a Mughal-inspired gateway and garden,
 * echoing Lahore's architectural heritage. Decorative; it does not depict the University's campus.
 */
export function HeroArcade({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '');
  const bays = [120, 260, 400];
  const rightBays = [900, 1040, 1180];

  return (
    <svg viewBox="0 0 1440 900" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" fill="none">
      <defs>
        <radialGradient id={`sun-${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ba9b64" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#ba9b64" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ba9b64" stopOpacity="0" />
        </radialGradient>
        <pattern id={`lattice-${id}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <g stroke="#ba9b64" strokeWidth="0.7" fill="none">
            <rect x="4.4" y="4.4" width="13.2" height="13.2" />
            <path d="M11 1.6 L20.4 11 L11 20.4 L1.6 11 Z" />
          </g>
        </pattern>
        <clipPath id={`iwan-${id}`}>
          <path d={`${arch(616, 824, 478, 348, 780)} Z`} />
        </clipPath>
        <linearGradient id={`fade-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.15" />
        </linearGradient>
        <mask id={`mask-${id}`}>
          <rect width="1440" height="900" fill={`url(#fade-${id})`} />
        </mask>
      </defs>

      <circle cx="720" cy="320" r="300" fill={`url(#sun-${id})`} />

      <g mask={`url(#mask-${id})`} stroke="#ba9b64" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
        {/* main dome and drum */}
        <g opacity="0.7">
          <path d="M600 252 C590 176 660 122 720 70 C780 122 850 176 840 252" />
          <path d="M588 252 H852 M600 252 V290 M840 252 V290" />
          <path d="M720 70 V34" />
          <circle cx="720" cy="44" r="5" />
          <path d="M650 252 C648 200 690 150 720 118 C750 150 792 200 790 252" opacity="0.45" />
        </g>

        {/* pishtaq: the great portal frame */}
        <g opacity="0.85">
          <rect x="540" y="290" width="360" height="490" />
          <rect x="554" y="304" width="332" height="476" opacity="0.6" />
          <path d={arch(600, 840, 478, 330, 780)} />
          <path d={arch(616, 824, 478, 348, 780)} opacity="0.6" />
          <path d={arch(672, 768, 655, 590, 780)} opacity="0.7" />
          <circle cx="582" cy="338" r="13" opacity="0.6" />
          <circle cx="858" cy="338" r="13" opacity="0.6" />
          {/* cresting along the parapet */}
          <path d={Array.from({ length: 18 }, (_, i) => `M${549 + i * 20} 290 v-10 a6 6 0 0 1 12 0 v10`).join(' ')} opacity="0.5" />
        </g>
        <rect x="600" y="330" width="240" height="450" fill={`url(#lattice-${id})`} clipPath={`url(#iwan-${id})`} opacity="0.3" stroke="none" />

        {/* flanking minarets */}
        <g opacity="0.7">
          <path d="M520 780 V250 M540 780 V250 M900 780 V250 M920 780 V250" />
          <path d={chhatri(530, 250, 30)} />
          <path d={chhatri(910, 250, 30)} />
          <path d="M516 420 H544 M516 600 H544 M896 420 H924 M896 600 H924" opacity="0.6" />
        </g>

        {/* wings: arcaded galleries */}
        <g opacity="0.6">
          <path d="M120 780 V500 H520 M920 500 H1320 V780" />
          <path d="M120 514 H520 M920 514 H1320" opacity="0.6" />
          {bays.map((x) => (
            <path key={`l${x}`} d={arch(x + 20, x + 120, 620, 556, 780)} />
          ))}
          {rightBays.map((x) => (
            <path key={`r${x}`} d={arch(x + 20, x + 120, 620, 556, 780)} />
          ))}
          {[...bays, ...rightBays].map((x) => (
            <path key={`s${x}`} d={arch(x + 34, x + 106, 626, 574, 780)} opacity="0.4" />
          ))}
          <path d={chhatri(150, 500, 44)} />
          <path d={chhatri(1290, 500, 44)} />
        </g>

        {/* plinth and steps */}
        <g opacity="0.7">
          <path d="M60 780 H1380" />
          <path d="M40 798 H1400" opacity="0.6" />
        </g>

        {/* charbagh water channel in perspective, with fountain jets */}
        <g opacity="0.55">
          <path d="M688 798 L560 900 M752 798 L880 900" />
          <path d="M704 798 L652 900 M736 798 L788 900" opacity="0.5" />
          <path d="M300 846 H1140" opacity="0.5" />
          {[812, 832, 858, 890].map((y, i) => (
            <circle key={y} cx="720" cy={y} r={1.6 + i * 0.9} />
          ))}
        </g>

        {/* cypresses of the garden */}
        <g opacity="0.55">
          <path d={cypress(260, 798, 150)} />
          <path d={cypress(330, 798, 110)} />
          <path d={cypress(1180, 798, 150)} />
          <path d={cypress(1110, 798, 110)} />
          <path d={cypress(80, 798, 90)} />
          <path d={cypress(1360, 798, 90)} />
        </g>
      </g>
    </svg>
  );
}
