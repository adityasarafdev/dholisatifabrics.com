import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { products } from "@/data/products";
import {
  OTHER_PRODUCT_SLUG,
  fieldLimits,
  isValidEmail,
  normalizeIndianPhone,
  type QuoteRequest,
} from "@/lib/quote";
import { whatsappLink } from "@/lib/contact";

const siteUrl = "https://www.dholisatifabrics.com";
const siteName = "Shree Dholi Sati Fabrics";

// The website sends from GMAIL_USER (can be a separate Gmail made just for the site)
// to QUOTE_TO_EMAIL (the inbox where enquiries are read).
const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
const toEmail = process.env.QUOTE_TO_EMAIL ?? "dholisatifabrics89@gmail.com";

const mailer =
  gmailUser && gmailAppPassword
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailAppPassword },
      })
    : null;

// In-memory limits. They reset when the server restarts, which is fine for a small
// enquiry form. The daily caps stop the form from being used to send bulk email
// through the Gmail account, since every enquiry CCs the address it was given.
const IP_LIMIT = 5;
const IP_WINDOW_MS = 10 * 60 * 1000;
const PER_EMAIL_DAILY_LIMIT = 3;
const GLOBAL_DAILY_LIMIT = 100;
const DAY_MS = 24 * 60 * 60 * 1000;

const ipHits = new Map<string, number[]>();
const emailHits = new Map<string, number[]>();
let sentToday: number[] = [];

function recordHit(store: Map<string, number[]>, key: string, windowMs: number): number {
  const now = Date.now();
  const hits = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  store.set(key, hits);
  // Drop stale keys so the map can't grow without bound.
  if (store.size > 5000) {
    for (const [k, v] of store) {
      if (v.every((t) => now - t >= windowMs)) store.delete(k);
    }
  }
  return hits.length;
}

function dailySendCapReached(): boolean {
  const now = Date.now();
  sentToday = sentToday.filter((t) => now - t < DAY_MS);
  return sentToday.length >= GLOBAL_DAILY_LIMIT;
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Enquiry = {
  name: string;
  phone: string;
  productTitle: string;
  productUrl?: string;
  email: string;
  message: string;
  sourceUrl: string;
};

const businessPhone = "9661870000";
const fontStack = "-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif";

type DetailRow = { label: string; value: string; html?: string };

function detailRows(rows: DetailRow[]) {
  const filled = rows.filter((r) => r.value);
  const text = filled.map((r) => `${r.label}: ${r.value}`).join("\n");
  const html = `<table style="width:100%;border-collapse:collapse;">${filled
    .map(
      (r) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #efeeec;color:#737373;font-size:13px;width:110px;vertical-align:top;">${r.label}</td>
          <td style="padding:10px 0;border-bottom:1px solid #efeeec;color:#0a0a0a;font-size:14px;white-space:pre-wrap;">${r.html ?? escapeHtml(r.value)}</td>
        </tr>`,
    )
    .join("")}</table>`;
  return { text, html };
}

// Buttons are full width and stacked because most email apps ignore responsive CSS.
const primaryButton = "display:block;box-sizing:border-box;width:100%;background:#1e293b;color:#ffffff;text-decoration:none;padding:13px 18px;border-radius:8px;font-size:15px;font-weight:500;text-align:center;margin:0 0 10px;";
const secondaryButton = "display:block;box-sizing:border-box;width:100%;background:#ffffff;color:#0a0a0a;text-decoration:none;padding:12px 18px;border-radius:8px;font-size:15px;font-weight:500;text-align:center;border:1px solid #d4d4d1;margin:0 0 10px;";

// One email for both sides: sent to the business inbox with the customer in CC,
// so the business can reply to the customer straight from its primary inbox.
function buildEmail(e: Enquiry) {
  const firstName = e.name.split(" ")[0];
  const details = detailRows([
    { label: "Product", value: e.productTitle },
    { label: "Name", value: e.name },
    {
      label: "Phone",
      value: `+91 ${e.phone}`,
      html: `<a href="tel:+91${e.phone}" style="color:#0a0a0a;">+91 ${e.phone}</a> &nbsp;&middot;&nbsp; <a href="https://wa.me/91${e.phone}" style="color:#1e293b;">WhatsApp</a>`,
    },
    { label: "Email", value: e.email },
    { label: "Comments", value: e.message },
    { label: "Enquiry page", value: e.sourceUrl },
  ]);

  const text = [
    `Hi ${firstName},`,
    "",
    `Thank you for your enquiry. We have received your request and will call you on +91 ${e.phone} soon, usually the same working day. You can also reply to this email.`,
    "",
    "Enquiry details:",
    details.text,
    "",
    `Need it faster? Call or WhatsApp us on +91 ${businessPhone}.`,
    "",
    siteName,
    "Patna, Bihar",
    siteUrl,
  ].join("\n");

  const html = `
  <div style="background:#f7f7f5;padding:24px 12px;font-family:${fontStack};">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7e7e4;border-radius:12px;overflow:hidden;">
      <div style="background:#1e293b;padding:18px 24px;color:#ffffff;">
        <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.7;">Quote request</div>
        <div style="font-size:18px;font-weight:600;margin-top:4px;">${escapeHtml(e.productTitle)}</div>
      </div>
      <div style="padding:22px 24px 6px;color:#404040;font-size:14.5px;line-height:1.6;">
        <p style="margin:0 0 12px;">Hi ${escapeHtml(firstName)},</p>
        <p style="margin:0 0 12px;">Thank you for reaching out to ${siteName}. We&rsquo;ve received your enquiry and will call you on <strong style="color:#0a0a0a;">+91 ${e.phone}</strong> soon, usually the same working day. You can also reply to this email.</p>
        <p style="margin:18px 0 4px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#737373;font-weight:600;">Enquiry details</p>
        ${details.html}
      </div>
      <div style="padding:18px 24px 16px;">
        <a href="${whatsappLink(`Hi, I sent a quote request for ${e.productTitle} on your website.`)}" style="${primaryButton}">WhatsApp us</a>
        <a href="tel:+91${businessPhone}" style="${secondaryButton}">Call +91 ${businessPhone}</a>
        ${e.productUrl ? `<a href="${e.productUrl}" style="${secondaryButton}">View product</a>` : ""}
      </div>
    </div>
    <div style="max-width:560px;margin:12px auto 0;color:#737373;font-size:12px;text-align:center;line-height:1.5;">
      ${siteName} &middot; Patna, Bihar<br />
      <a href="${siteUrl}" style="color:#737373;">${siteUrl.replace("https://", "")}</a>
    </div>
  </div>`;

  return { text, html };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (recordHit(ipHits, ip, IP_WINDOW_MS) > IP_LIMIT) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes or message us on WhatsApp." },
      { status: 429 },
    );
  }

  let body: QuoteRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill hidden fields and submit instantly. Pretend it worked so they don't retry.
  if (body.website || (typeof body.elapsedMs === "number" && body.elapsedMs < 2500)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, fieldLimits.name);
  const phone = normalizeIndianPhone(clean(body.phone, fieldLimits.phone));
  const email = clean(body.email, fieldLimits.email);
  const productSlug = clean(body.productSlug, 100);
  const otherProduct = clean(body.otherProduct, fieldLimits.otherProduct);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!phone) errors.phone = "Please enter a valid 10 digit mobile number.";
  if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  const message = clean(body.message, fieldLimits.message);
  if (message.length < 3) errors.message = "Please tell us a little about what you need.";

  const product = Object.hasOwn(products, productSlug) ? products[productSlug] : undefined;
  if (!product && productSlug !== OTHER_PRODUCT_SLUG) errors.product = "Please choose a product.";
  if (productSlug === OTHER_PRODUCT_SLUG && otherProduct.length < 2) {
    errors.otherProduct = "Please tell us which product you need.";
  }

  if (Object.keys(errors).length > 0 || !phone) {
    return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const sourcePath = clean(body.sourcePath, fieldLimits.sourcePath);
  const enquiry: Enquiry = {
    name,
    phone,
    productTitle: product ? product.title : `Other: ${otherProduct}`,
    productUrl: product ? `${siteUrl}/products/${product.slug}` : undefined,
    email,
    message,
    sourceUrl: sourcePath.startsWith("/") ? `${siteUrl}${sourcePath}` : siteUrl,
  };

  const tooManyForEmail = recordHit(emailHits, email.toLowerCase(), DAY_MS) > PER_EMAIL_DAILY_LIMIT;
  if (tooManyForEmail || dailySendCapReached()) {
    return NextResponse.json(
      { error: "We've received several requests already. Please message us on WhatsApp and we'll help you right away." },
      { status: 429 },
    );
  }

  const { text, html } = buildEmail(enquiry);
  const subject = `Quote request: ${enquiry.productTitle} from ${enquiry.name}`;

  if (!mailer || !gmailUser) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`\n[quote] GMAIL_USER / GMAIL_APP_PASSWORD not set, email not sent.\nSubject: ${subject}\nCC: ${email}\n${text}\n`);
      return NextResponse.json({ ok: true });
    }
    console.error("[quote] GMAIL_USER or GMAIL_APP_PASSWORD is not set");
    return NextResponse.json(
      { error: "Sorry, we couldn't send your request. Please message us on WhatsApp." },
      { status: 500 },
    );
  }

  // The website Gmail is only the sender. Replies from either side go to the
  // business inbox and the customer, never back to the website account.
  const customer = { name, address: email };
  try {
    await mailer.sendMail({
      from: { name: siteName, address: gmailUser },
      to: toEmail,
      cc: customer,
      replyTo: [toEmail, customer],
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[quote] Gmail send failed", err);
    return NextResponse.json(
      { error: "Sorry, we couldn't send your request. Please message us on WhatsApp." },
      { status: 502 },
    );
  }

  sentToday.push(Date.now());
  return NextResponse.json({ ok: true });
}
