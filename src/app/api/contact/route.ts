import { NextResponse } from "next/server";
import {
  CONTACT_RATE_LIMIT,
  createRateLimiter,
  isSubmissionTooFast,
} from "@/lib/contactSecurity";
import { company } from "@/lib/content";
import { normalizeVictorianSuburb } from "@/lib/victorianSuburbs";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 240;
const MAX_MESSAGE_LENGTH = 4000;
const contactRateLimiter = createRateLimiter(CONTACT_RATE_LIMIT);

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  startedAt?: unknown;
  suburb?: unknown;
  website?: unknown;
};

function readString(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatOptional(value: string) {
  return value || "Not provided";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedIp = forwardedFor?.split(",")[0]?.trim();

  return (
    forwardedIp ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid enquiry payload." },
      { status: 400 },
    );
  }

  const honeypot = readString(payload.website);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = readString(payload.startedAt);

  if (isSubmissionTooFast(startedAt)) {
    return NextResponse.json(
      { message: "Please wait a moment before submitting the form." },
      { status: 429 },
    );
  }

  const name = readString(payload.name);
  const email = readString(payload.email);
  const phone = readString(payload.phone);
  const suburb = normalizeVictorianSuburb(readString(payload.suburb));
  const message = readString(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please provide your name, email address, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const rateLimit = contactRateLimiter.check(getClientIp(request));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { message: "Too many enquiries sent. Please wait a few minutes." },
      {
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        status: 429,
      },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "KIT Care <onboarding@resend.dev>";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(formatOptional(phone));
  const safeSuburb = escapeHtml(formatOptional(suburb));
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #10243f; line-height: 1.6;">
      <h1 style="font-size: 22px; margin-bottom: 16px;">New KIT Care website enquiry</h1>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Suburb / service area:</strong> ${safeSuburb}</p>
      <div style="margin-top: 20px;">
        <strong>Message:</strong>
        <p style="padding: 14px; background: #eef8fb; border-radius: 8px;">${safeMessage}</p>
      </div>
    </div>
  `;

  const text = [
    "New KIT Care website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${formatOptional(phone)}`,
    `Suburb / service area: ${formatOptional(suburb)}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      html,
      reply_to: email,
      subject: `New KIT Care enquiry from ${name}`,
      text,
      to: [to],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Failed to send contact email", details);

    return NextResponse.json(
      { message: "We could not send your enquiry. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
