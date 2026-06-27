import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { gettingStartedSteps, services } from "@/lib/content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) =>
    service.relatedSlugs.includes(item.slug),
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero title={service.title} description={service.summary} />

        <section className="px-6 py-20">
          <div className="relative mx-auto min-h-[560px] max-w-[1440px] overflow-hidden rounded-lg bg-navy text-white shadow-[0_24px_80px_rgba(8,47,99,0.18)]">
            <Image
              src={service.image}
              alt={`${service.title} support`}
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="(min-width: 1024px) 1180px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/8" />
            <div className="relative flex min-h-[560px] max-w-xl flex-col justify-center p-8 md:p-10">
              <div className="flex size-16 items-center justify-center rounded-md bg-white/12 text-white ring-1 ring-white/20">
                <Icon name={service.icon} className="size-9" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                NDIS {service.code} / {service.group}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Support that fits your routines
              </h2>
              <p className="mt-5 text-base leading-8 text-white/84">
                {service.detail}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {service.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-semibold"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="light">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <SectionHeader
                title={`${service.title} in everyday life`}
                description="Support works best when it feels practical, respectful, and connected to the routines that matter to you."
                align="left"
              />
              <p className="mt-6 text-base leading-8 text-muted">
                We use your goals, preferences, and approved supports to shape a
                service rhythm that is clear, reliable, and easy to review.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="secondary">
                  Talk with KIT Care
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
              <Image
                src={service.scenarios[0]?.image ?? service.image}
                alt={`${service.title} everyday support`}
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 pb-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
                <div className="relative aspect-[16/7]">
                  <Image
                    src={service.scenarios[1]?.image ?? service.image}
                    alt={`${service.title} support can include`}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <SectionHeader
                    title="What support can include"
                    align="left"
                  />
                  <ul className="mt-7 grid gap-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-7 text-muted"
                      >
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-8">
                <SectionHeader title="Who this may help" align="left" />
                <ul className="mt-7 grid gap-5">
                  {service.helps.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sky-soft text-teal">
                        <Icon name="person" className="size-6" />
                      </span>
                      <span className="text-base leading-7 text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeader
              title="A day with this support"
              description="These examples show how support can appear in real routines without making every day feel the same."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {service.scenarios.map((scenario) => (
                <div
                  key={scenario.title}
                  className="relative min-h-[360px] overflow-hidden rounded-lg bg-navy text-white shadow-[0_18px_50px_rgba(8,47,99,0.07)]"
                >
                  <Image
                    src={scenario.image}
                    alt={`${scenario.title} for ${service.title}`}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/58 to-transparent" />
                  <div className="relative flex min-h-[360px] flex-col justify-end p-6">
                    <h3 className="text-xl font-bold">
                      {scenario.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/84">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-8">
              <SectionHeader
                title="How KIT Care approaches this"
                align="left"
              />
              <ul className="mt-7 grid gap-5">
                {service.approach.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sky-soft text-teal">
                      <Icon name="heart" className="size-6" />
                    </span>
                    <span className="text-base leading-7 text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)] md:p-8">
              <SectionHeader title="How to get started" align="left" />
              <div className="mt-7 grid gap-5">
                {gettingStartedSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 border-b border-border-soft pb-5 last:border-0 last:pb-0 sm:grid-cols-[64px_1fr]"
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
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedServices.length ? (
          <section className="px-6 py-20">
            <div className="mx-auto max-w-[1440px]">
              <SectionHeader
                title="Related services"
                description="Many participants use more than one support type. These services often connect with this page."
              />
              <div className="mt-12 grid gap-8 lg:grid-cols-3">
                {relatedServices.map((relatedService) => (
                  <ServiceCard
                    key={relatedService.href}
                    service={relatedService}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-lg bg-teal text-white shadow-[0_24px_70px_rgba(8,47,99,0.12)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[300px]">
              <Image
                src={service.ctaImage}
                alt="KIT Care support team helping participants in daily life"
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Talk with us about {service.title.toLowerCase()}
              </h2>
              <p className="mt-5 leading-7 text-white/88">
                We can talk through your goals, routines, and support needs so
                the next step feels clear.
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
