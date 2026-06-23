import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { NdisMarkPlaceholder } from "@/components/NdisMarkPlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, faqs, services, trustPoints, whyChooseUs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:min-h-[720px] lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
            <div className="max-w-xl">
              <p className="text-base font-semibold text-teal">
                {company.registrationLabel}
              </p>
              <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-navy md:text-6xl lg:text-7xl">
                Support that helps you live with confidence
              </h1>
              <p className="mt-7 text-lg leading-8 text-muted">
                KITCARE provides personalised support that empowers you to live
                independently, connect with your community, and achieve your
                goals.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/services">Explore Services</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-sky-soft lg:min-h-[560px]">
              <Image
                src="/images/hero-support.png"
                alt="Support worker assisting a participant in the community"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border-soft bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_220px] lg:items-center">
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
              title="Our Services"
              description="Flexible support designed around your goals and lifestyle."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.href} service={service} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <ButtonLink href="/services" variant="secondary">
                Explore All Services
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader title="About KITCARE" align="left" />
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                We are a registered NDIS provider committed to delivering
                high-quality, personalised support. Our team works with you and
                your family to understand your needs and create support that
                fits your life.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex text-sm font-bold text-teal hover:text-teal-dark"
              >
                Learn more about us →
              </Link>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-sky-soft">
                <Image
                  src="/images/personal-care.png"
                  alt="KITCARE support worker speaking with a participant"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:border-l lg:border-border-soft lg:pl-12">
              <SectionHeader title="Why choose KITCARE?" align="left" />
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

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-7xl rounded-lg bg-sky-soft p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-navy">
                Frequently asked questions
              </h2>
              <Link href="/contact" className="text-sm font-bold text-teal">
                Ask us a question →
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
