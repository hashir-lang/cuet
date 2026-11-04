#!/usr/bin/env node
/**
 * Site health check. Crawls every page reachable from the home page and the sitemap,
 * then reports broken links, broken in-page anchors, missing SEO metadata, heading
 * problems, images without alt text, and any internal financial wording.
 *
 * Usage: start the site (npm run build && npm start), then run
 *   BASE_URL=http://localhost:3000 npm run check:links
 */

const BASE = (process.env.BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

// Words and figures from the internal cost report that must never appear on the public site.
const FORBIDDEN = [/\bRs\.?\s?\d/i, /\bPKR\b/i, /\bcrore\b/i, /\blakh/i, /107,?100,?000/, /10\.71/, /estimated cost/i, /\bbudget\b/i, /5,?800,?000/, /30,?500,?000/];

const pages = new Map(); // path -> html
const problems = [];
const queue = ['/'];
const seen = new Set();

const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const text = (html) => strip(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

async function get(path) {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  return { status: res.status, body: res.headers.get('content-type')?.includes('text/html') ? await res.text() : '' };
}

// Seed with sitemap URLs too.
try {
  const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
  for (const m of sm.matchAll(/<loc>(.*?)<\/loc>/g)) queue.push(new URL(m[1]).pathname || '/');
} catch {
  problems.push('Could not read sitemap.xml');
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const { status, body } = await get(path);
  if (status !== 200) {
    problems.push(`${path} → HTTP ${status}`);
    continue;
  }
  pages.set(path, body);
  for (const m of strip(body).matchAll(/href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next')) continue;
    const clean = href.split('#')[0].split('?')[0] || path;
    if (/\.(svg|png|ico|xml|txt|jpg|webp|woff2?)$/.test(clean)) continue;
    if (!seen.has(clean)) queue.push(clean);
  }
}

const titles = new Map();
for (const [path, html] of pages) {
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const ogImage = /property="og:image"/.test(html);
  const h1 = (strip(html).match(/<h1[\s>]/g) ?? []).length;
  if (!title) problems.push(`${path}: missing <title>`);
  else titles.set(title, [...(titles.get(title) ?? []), path]);
  if (!desc || desc.length < 50) problems.push(`${path}: missing or short meta description`);
  if (!canonical) problems.push(`${path}: missing canonical URL`);
  if (!ogImage) problems.push(`${path}: missing og:image`);
  if (h1 !== 1) problems.push(`${path}: ${h1} <h1> elements (expected 1)`);
  for (const img of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(img[0])) problems.push(`${path}: <img> without alt`);
  for (const re of FORBIDDEN) if (re.test(text(html))) problems.push(`${path}: contains forbidden financial wording ${re}`);

  // In-page and cross-page anchors must resolve to an element id.
  for (const m of strip(html).matchAll(/href="([^"]*#[^"]+)"/g)) {
    const [p, hash] = m[1].split('#');
    const target = p ? pages.get(p.split('?')[0]) : html;
    if (target && !new RegExp(`id="${hash}"`).test(target)) problems.push(`${path}: anchor #${hash} not found${p ? ` on ${p}` : ''}`);
  }
}
for (const [t, paths] of titles) if (paths.length > 1) problems.push(`Duplicate title "${t}" on ${paths.join(', ')}`);

console.log(`Checked ${pages.size} pages at ${BASE}`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(` - ${p}`);
  process.exit(1);
}
console.log('No problems found.');
