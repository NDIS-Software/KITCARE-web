"use client";

import { FormEvent, useMemo, useState } from "react";
import { findVictorianSuburbSuggestions } from "@/lib/victorianSuburbs";

type SubmitState = "error" | "idle" | "sending" | "sent";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => String(Date.now()));
  const [suburbValue, setSuburbValue] = useState("");
  const suburbSuggestions = useMemo(
    () => findVictorianSuburbSuggestions(suburbValue),
    [suburbValue],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          email: formData.get("email"),
          message: formData.get("message"),
          name: formData.get("name"),
          phone: formData.get("phone"),
          startedAt: formData.get("startedAt"),
          suburb: formData.get("suburb"),
          website: formData.get("website"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      setSubmitState("sent");
      setFeedback(
        "Thank you. Your enquiry has been sent to the KIT Care team.",
      );
      form.reset();
      setFormStartedAt(String(Date.now()));
      setSuburbValue("");
    } catch (error) {
      setSubmitState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send enquiry. Please email KIT Care directly.",
      );
    }
  }

  const isSending = submitState === "sending";

  return (
    <form
      className="grid gap-5 rounded-lg border border-border-soft bg-white p-6 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-7"
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="text-2xl font-bold text-navy">Send an enquiry</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Send your details securely through this form and KIT Care will receive
          your enquiry by email.
        </p>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" value={formStartedAt} readOnly />
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Full name
        </label>
        <input
          id="name"
          name="name"
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="name"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="email"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-navy">
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="tel"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="suburb" className="text-sm font-semibold text-navy">
          Suburb or service area
        </label>
        <input
          id="suburb"
          name="suburb"
          value={suburbValue}
          onChange={(event) => setSuburbValue(event.target.value)}
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="address-level2"
          list="suburb-suggestions"
        />
        <datalist id="suburb-suggestions">
          {suburbSuggestions.map((suggestion) => (
            <option key={suggestion.label} value={suggestion.label} />
          ))}
        </datalist>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="rounded-md border border-border-soft px-4 py-3 text-foreground outline-none transition focus:border-teal"
          required
        />
      </div>
      {feedback ? (
        <p
          className={`rounded-md px-4 py-3 text-sm leading-6 ${
            submitState === "sent"
              ? "bg-sky-soft text-navy"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSending}
        className="min-h-12 rounded-md bg-teal px-6 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-muted"
      >
        {isSending ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
