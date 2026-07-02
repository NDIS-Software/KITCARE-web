import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { NdisMarkPlaceholder } from "@/components/NdisMarkPlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  audienceSupport,
  company,
  faqs,
  feedbackCards,
  serviceScenarios,
  serviceAreaHighlights,
  services,
  trustPoints,
  whyChooseUs,
  gettingStartedSteps,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:min-h-[640px] lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
            <div className="max-w-xl">
              <p className="text-base font-semibold text-teal">
                {company.registrationLabel}
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-navy sm:text-5xl md:text-6xl">
                Quality support. Everyday confidence.
              </h1>
              <p className="mt-7 text-lg leading-8 text-muted">
                KIT Care provides personalised NDIS support across Melbourne
                that empowers you to live independently, connect with your
                community, and achieve your goals.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/services">Explore Services</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-sky-soft lg:min-h-[500px]">
              <Image
                src="/images/generated/kitcare-neighbourhood-support-hero.png"
                alt="Support worker walking with a participant through a Melbourne neighbourhood"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border-soft bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_260px] lg:items-center">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-center gap-4 text-navy lg:flex-col lg:text-center"
              >
                <Icon name={point.icon} className="size-10 text-teal" />
                <p className="text-sm font-semibold leading-6">{point.title}</p>
              </div>
            ))}
            <NdisMarkPlaceholder />
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Support that meets people in real life"
              description="Start with the routines, places, and goals that matter. From there, explore the service groups that may fit."
            />
            <ServiceCarousel services={services} />
            <div className="mt-6 text-center">
              <ButtonLink href="/services" variant="secondary">
                Explore All Services
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader title="About KIT Care" align="left" />
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                We are a registered NDIS provider in Melbourne focused on
                practical, person-centred support. Our team takes time to
                understand goals, routines, communication preferences, and the
                people each participant wants involved, so support feels clear,
                respectful, and connected to daily life.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex text-sm font-bold text-teal hover:text-teal-dark"
              >
                Learn more about us -&gt;
              </Link>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-sky-soft">
                <Image
                  src="/images/generated/kitcare-team-support-planning.png"
                  alt="KIT Care team reviewing a participant support plan"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:border-l lg:border-border-soft lg:pl-12">
              <SectionHeader title="Why choose KIT Care?" align="left" />
              <div className="mt-8 divide-y divide-border-soft">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-5 py-5 first:pt-0">
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
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="How support starts"
              description="Getting started should feel clear, not clinical. These steps explain how KIT Care turns an enquiry into practical support that reflects goals, routines, preferences, and the relevant NDIS service group."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
                <Image
                  src="/images/generated/support-planning-tabletop.png"
                  alt="Support planning documents, weekly planner, and notes on a table"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
              <div className="grid gap-5">
                {gettingStartedSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-5 rounded-lg bg-white p-6 shadow-[0_16px_46px_rgba(8,47,99,0.06)] sm:grid-cols-[64px_1fr]"
                  >
                    <div className="flex size-14 items-center justify-center rounded-md bg-sky-soft text-teal">
                      <Icon name={step.icon} className="size-7" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Support for participants, families, and coordinators"
              description="Different people visit a provider website with different questions. This section keeps the message clear for participants, families, advocates, and support coordinators without turning the site into a referral system."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {audienceSupport.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border-soft bg-white p-7"
                >
                  <Icon name={item.icon} className="size-11 text-teal" />
                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Support for real routines"
              description="A richer look at the situations where support can make daily life feel more manageable, connected, and confident."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceScenarios.map((item) => (
                <Link
                  href="/services"
                  key={item.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-lg bg-navy text-white shadow-[0_18px_50px_rgba(8,47,99,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(8,47,99,0.13)]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} support`}
                      fill
                      quality={90}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/58 to-transparent" />
                  <div className="relative flex min-h-[340px] flex-col justify-end p-6">
                    <div className="flex size-11 items-center justify-center rounded-md bg-white/16 text-white ring-1 ring-white/20">
                      <Icon name={item.icon} className="size-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/84">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                title="Local support across Melbourne"
                description="KIT Care supports participants in homes, appointments, errands, community activities, and familiar local places. Availability can vary by suburb, timing, and support type, so we keep service-area conversations practical and honest."
                align="left"
              />
              <div className="mt-7 flex flex-wrap gap-3">
                {serviceAreaHighlights.map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
                Tell us the suburb, preferred times, and the kind of support you
                are considering. We can then discuss whether KIT Care appears to
                be a suitable local fit before any service arrangement is made.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-soft bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
              <Image
                src="/images/generated/melbourne-service-area-map.png"
                alt="Illustrated Melbourne service area map with location pins"
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Customer Reviews"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {feedbackCards.map((item) => (
                <div
                  key={item.initials}
                  className="rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-sky-soft text-sm font-bold text-teal">
                        {item.initials}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy">{item.label}</h3>
                        <p className="text-sm text-teal" aria-label="Five star feedback">
                          ★★★★★
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {item.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-border-soft bg-white shadow-[0_24px_70px_rgba(8,47,99,0.08)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/generated/community-market-choice-support.png"
                alt="Participant choosing produce with support at a local community market"
                  fill
                  quality={90}
                  className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center bg-teal p-8 text-white md:p-10">
              <h2 className="text-3xl font-bold leading-tight">
                Proudly supporting Melbourne communities
              </h2>
              <p className="mt-5 leading-7 text-white/88">
                KIT Care supports participants, families, and support networks
                with services that feel personal, practical, and dependable.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="light">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-7xl rounded-lg bg-sky-soft p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-navy">
                Frequently asked questions
              </h2>
              <Link href="/contact" className="text-sm font-bold text-teal">
                Ask us a question -&gt;
              </Link>
            </div>
            <div className="mt-6 divide-y divide-border-soft rounded-md border border-border-soft bg-white">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy">
                    {faq.question}
                    <span className="text-2xl font-light text-teal group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-7 text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal px-6 py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Let&apos;s talk about how we can support you
              </h2>
              <p className="mt-2 text-white/85">
                We&apos;re here to answer your questions and help you take the
                next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${company.phone.replaceAll(" ", "")}`}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {company.phone}
              </a>
              <ButtonLink href="/contact" variant="light">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
