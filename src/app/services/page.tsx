import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { gettingStartedSteps, serviceScenarios, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "NDIS Services",
  description:
    "Explore KIT Care NDIS services in Melbourne including Personal Care, Travel & Transport, Household Tasks, Community Participation, and other support groups.",
};

export default function ServicesPage() {
  const [featuredService, ...supportServices] = services;

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="NDIS support services designed around your goals"
          description="Explore flexible supports that help with daily routines, community connection, household tasks, transport, life skills, and group activities."
        />
        <section className="bg-sky-soft px-6 pb-20 pt-4">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Support that meets people in real life"
              description="Explore a richer view of the ways KIT Care can help with home routines, transport, community access, skill building, and shared activities."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <ServiceCard service={featuredService} variant="featured" />
              <div className="grid gap-6">
                {supportServices.slice(0, 2).map((service) => (
                  <ServiceCard
                    key={service.href}
                    service={service}
                    variant="compact"
                  />
                ))}
                <div className="rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
                  <Icon name="heart" className="size-11 text-teal" />
                  <h2 className="mt-5 text-2xl font-bold leading-tight text-navy">
                    Not sure which support fits?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Talk with us about your goals, routines, service area, and
                    the kind of help you are looking for. You do not need to
                    know the registration group before contacting us; we can
                    explain options in plain language.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/contact" variant="secondary">
                      Contact Us
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Find the right support"
              description="Many people start with a life situation rather than a service name. These cards show common ways support can fit into daily life."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceScenarios.map((scenario) => (
                <Link
                  href="/contact"
                  key={scenario.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-lg bg-navy text-white shadow-[0_18px_50px_rgba(8,47,99,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(8,47,99,0.13)]"
                >
                  <Image
                    src={scenario.image}
                    alt={`${scenario.title} support scenario`}
                    fill
                    quality={90}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/58 to-transparent" />
                  <div className="relative flex min-h-[340px] flex-col justify-end p-6">
                    <div className="flex size-11 items-center justify-center rounded-md bg-white/16 text-white ring-1 ring-white/20">
                      <Icon name={scenario.icon} className="size-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">
                      {scenario.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/84">
                      {scenario.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our registered support groups"
              description="Each service page explains what support may include, who it may help, and how KIT Care approaches the service."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <SectionHeader
                title="How support works"
                description="A simple, practical process helps us understand what matters and shape support around your goals."
                align="left"
              />
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg bg-sky-soft">
                <Image
                  src="/images/generated/support-planning-tabletop.png"
                  alt="Support planning documents, weekly planner, and notes on a table"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="grid gap-5">
              {gettingStartedSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-5 rounded-lg border border-border-soft bg-white p-6 shadow-[0_16px_46px_rgba(8,47,99,0.06)] sm:grid-cols-[72px_1fr]"
                >
                  <div className="flex size-16 items-center justify-center rounded-md bg-sky-soft text-teal">
                    <Icon name={step.icon} className="size-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg bg-navy text-white shadow-[0_24px_80px_rgba(8,47,99,0.18)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/generated/group-centre-art-table.png"
                alt="Inclusive group activity at a community centre art table"
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <Icon name="chat" className="size-12 text-white/80" />
              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                Not sure which support fits?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/84">
                You do not need to know the exact NDIS registration group before
                you contact us. Tell us what you want help with, and we will
                talk through the options clearly.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="light">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
