export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-lg border border-border-soft bg-white p-6 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-7">
      <div>
        <h2 className="text-2xl font-bold text-navy">Send an enquiry</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This form is ready for a future Vercel email integration. For now,
          please use the phone or email details on this page if you need to
          contact KIT Care.
        </p>
      </div>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Full name
        </label>
        <input
          id="name"
          name="name"
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="name"
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
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-navy">
          Phone
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
          className="min-h-12 rounded-md border border-border-soft px-4 text-foreground outline-none transition focus:border-teal"
          autoComplete="address-level2"
        />
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
        />
      </div>
      <button
        type="button"
        className="min-h-12 rounded-md bg-teal px-6 text-sm font-semibold text-white transition hover:bg-teal-dark"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
