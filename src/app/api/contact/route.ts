import { NextResponse } from 'next/server';
import { looksLikeSpam, validateContact, type ContactInput } from '@/lib/contact';

/**
 * Contact form endpoint.
 *
 * INTEGRATION POINT: set CONTACT_WEBHOOK_URL to a service that delivers the message
 * (for example an email API, a CRM or a ticketing system). Until then the endpoint
 * validates the message and answers 503 NOT_CONFIGURED, and the form tells the visitor
 * that online delivery is not yet connected. Nothing is stored.
 *
 * Spam protection: honeypot field, minimum fill time, a simple per-IP rate limit.
 * For production, add a CAPTCHA such as Cloudflare Turnstile and a shared rate-limit store.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: Partial<ContactInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'BAD_REQUEST' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, code: 'RATE_LIMITED' }, { status: 429 });
  }

  // Quietly accept likely bots without doing anything, so they learn nothing.
  if (looksLikeSpam(body)) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, code: 'INVALID', errors }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, code: 'NOT_CONFIGURED' }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: body.name?.trim(),
        email: body.email?.trim(),
        phone: body.phone?.trim() || null,
        enquiryType: body.enquiryType,
        program: body.program || null,
        message: body.message?.trim(),
        receivedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, code: 'DELIVERY_FAILED' }, { status: 502 });
  }
}
