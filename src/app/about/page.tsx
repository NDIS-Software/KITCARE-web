import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { whyChooseUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KITCARE, a registered NDIS provider focused on respectful, person-centred support.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Support built around people, choices, and community"
          description="KITCARE provides respectful NDIS support that helps participants feel heard, safe, and confident in everyday life."
        />
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sky-soft">
              <Image
                src="/images/personal-care.png"
                alt="Support worker speaking with a participant"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <SectionHeader title="About KITCARE" align="left" />
              <p className="mt-6 text-base leading-8 text-muted">
                We work with participants, families, and support networks to
                create practical supports that fit real life. Our approach is
                calm, reliable, and focused on helping people build confidence
                at home and in the community.
              </p>
              <p className="mt-5 text-base leading-8 text-muted">
                As a registered NDIS provider, KITCARE is committed to
                respectful communication, safe support practices, and services
                that place participant choice at the centre.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              ["Mission", "To provide reliable support that helps people live with confidence and connection."],
              ["Vision", "A community where people with disability are supported to make choices and participate fully."],
              ["Values", "Respect, consistency, inclusion, dignity, and practical care."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg bg-white p-7">
                <h2 className="text-2xl font-bold text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              title="Why people choose KITCARE"
              description="Our team focuses on practical support, clear communication, and care that respects each participant's goals."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex gap-5 rounded-lg border border-border-soft p-6">
                  <Icon name={item.icon} className="size-10 shrink-0 text-teal" />
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

