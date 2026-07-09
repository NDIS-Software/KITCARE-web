import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, serviceAreaHighlights } from "@/lib/content";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact KIT Care to ask about NDIS support services and next steps.",
  path: "/contact",
  image: "/images/generated/getting-started-support-conversation.png",
  keywords: [
    "contact KIT Care",
    "NDIS provider contact Melbourne",
    "NDIS support enquiry Melbourne",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <SiteHeader />
      <main>
        <PageHero
          title="Contact KIT Care"
          description="Talk with our team about your support needs, service options, and how we may be able to help."
        />
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg bg-sky-soft p-7 md:p-8">
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
                <p>
                  <strong className="text-navy">Response:</strong>{" "}
                  {company.responseNote}
                </p>
                <p className="text-sm leading-6">
                  If you need urgent medical help or are in immediate danger,
                  call emergency services. KIT Care contact channels are for
                  service enquiries and general support questions.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${company.phone.replaceAll(" ", "")}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal px-6 text-sm font-semibold text-white transition hover:bg-teal-dark"
                >
                  Call KIT Care
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="min-w-0 rounded-lg border border-border-soft bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-8">
              <h2 className="text-2xl font-bold text-navy">
                What to include when contacting us
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Helpful details include the participant&apos;s suburb, the type
                of support being considered, preferred times, communication
                needs, whether family or a coordinator should be included, and
                any practical routines that matter before support starts.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceAreaHighlights.map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-border-soft bg-sky-soft px-4 py-2 text-sm font-semibold text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
              <div className="relative aspect-[16/9] w-full min-w-0 self-start overflow-hidden rounded-lg border border-border-soft bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
                <Image
                  src="/images/generated/melbourne-service-area-map.png"
                  alt="Illustrated Melbourne service area map with location pins"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
