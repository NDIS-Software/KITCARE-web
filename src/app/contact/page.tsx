import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KITCARE to ask about NDIS support services and next steps.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Contact KITCARE"
          description="Talk with our team about your support needs, service options, and how we may be able to help."
        />
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-lg bg-sky-soft p-7">
              <h2 className="text-2xl font-bold text-navy">Get in touch</h2>
              <div className="mt-6 grid gap-5 text-muted">
                <p>
                  <strong className="text-navy">Phone:</strong>{" "}
                  <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
                    {company.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Email:</strong>{" "}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
                <p>
                  <strong className="text-navy">Service area:</strong>{" "}
                  {company.serviceArea}
                </p>
                <p className="text-sm leading-6">
                  If you need urgent medical help or are in immediate danger,
                  call emergency services. KITCARE contact channels are for
                  service enquiries and general support questions.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

