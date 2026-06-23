import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "NDIS Services",
  description:
    "Explore KITCARE NDIS services including Personal Care, Community Participation, Household Tasks, and Travel & Transport.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="NDIS support services designed around your goals"
          description="Explore flexible supports that help with daily routines, community connection, household tasks, and transport."
        />
        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our core services"
              description="Each service page explains what support may include, who it may help, and how KITCARE approaches the service."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="How support works" align="left" />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Talk with us", "We learn about your goals, routines, and support needs."],
                ["Plan support", "We match services to your preferences and NDIS plan."],
                ["Review together", "Support can adapt as your needs and goals change."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-lg border border-border-soft p-6">
                  <h2 className="font-bold text-navy">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

