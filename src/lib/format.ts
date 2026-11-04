const numberFmt = new Intl.NumberFormat('en-PK');
const pluralRules = new Intl.PluralRules('en');

export const formatNumber = (n: number) => numberFmt.format(n);

/** "1 program", "17 programs", "0 programs" — never "1 programs". */
export function countLabel(n: number, singular: string, plural = `${singular}s`) {
  return `${formatNumber(n)} ${pluralRules.select(n) === 'one' ? singular : plural}`;
}

const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Karachi' });
const timeFmt = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Karachi' });

export function formatDate(iso: string | null, fallback = 'Date to be confirmed') {
  if (!iso) return fallback;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? fallback : dateFmt.format(d);
}

export function formatTime(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : timeFmt.format(d);
}

/** Day number and short month in Lahore time, for date blocks. */
export function dayAndMonth(iso: string) {
  const parts = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'Asia/Karachi' }).formatToParts(new Date(iso));
  return { day: parts.find((p) => p.type === 'day')?.value ?? '', month: parts.find((p) => p.type === 'month')?.value ?? '' };
}

/** Two-digit index used in editorial lists: 1 → "01". */
export const pad2 = (n: number) => String(n).padStart(2, '0');
