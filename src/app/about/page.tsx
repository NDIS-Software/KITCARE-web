import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FounderProfileFeature } from "@/components/FounderProfileFeature";
import { HowWeWorkCard } from "@/components/HowWeWorkCard";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  aboutTrustAreas,
  carePrinciples,
  company,
  founderProfile,
  whyChooseUs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KIT Care, a registered NDIS provider in Melbourne focused on respectful, person-centred support.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7fbfb]">
        <PageHero
          title="Support built around people, choices, and community"
          description="KIT Care provides respectful NDIS support in Melbourne that helps participants feel heard, safe, and confident in everyday life."
        />
        <section className="bg-[#f7fbfb] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sky-soft shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
              <Image
                src="/images/generated/family-coordinator-support-meeting.png"
                alt="Participant, family member, and support worker discussing support preferences"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <SectionHeader title="About KIT Care" align="left" />
              <p className="mt-6 text-base leading-8 text-muted">
                We work with participants, families, and support networks to
                create practical supports that fit real life. Our approach
                starts with the participant&apos;s goals, preferred routines,
                communication needs, and choices, then turns those details into
                support that feels clear and respectful.
              </p>
              <p className="mt-5 text-base leading-8 text-muted">
                As a registered NDIS provider, KIT Care is committed to
                respectful communication, safe support practices, and services
                that place participant choice at the centre. We understand that
                support can happen in personal spaces, so privacy and dignity
                must be part of everyday practice.
              </p>
              <p className="mt-5 text-base leading-8 text-muted">
                Our local focus is {company.serviceArea}. We support people in
                everyday settings: home, community, appointments, transport,
                centre activities, and routines that build independence. Where
                participants choose, families, advocates, and coordinators can
                be included in conversations.
              </p>
            </div>
          </div>
        </section>
        <FounderProfileFeature profile={founderProfile} />
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
        <section className="bg-[#f7fbfb] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="How we work"
              description="KIT Care uses clear service principles behind the scenes, but the website keeps them practical: respectful support, informed choice, privacy, feedback, and reliable communication."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aboutTrustAreas.map((item) => (
                <HowWeWorkCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#eef8fb] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our care approach"
              description="The best support is practical, respectful, and easy to understand. These principles guide how KIT Care works with participants and families."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {carePrinciples.map((item) => (
                <div key={item.title} className="rounded-lg border border-border-soft bg-white p-7">
                  <Icon name={item.icon} className="size-10 text-teal" />
                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f7fbfb] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              title="Why people choose KIT Care"
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
