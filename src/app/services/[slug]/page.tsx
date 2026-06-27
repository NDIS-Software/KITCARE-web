import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/lib/content";

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

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero title={service.title} description={service.summary} />
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sky-soft">
              <Image
                src={service.image}
                alt={`${service.title} support`}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
            <div>
              <Icon name={service.icon} className="size-12 text-teal" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-teal">
                NDIS {service.code} / {service.group}
              </p>
              <h2 className="mt-5 text-3xl font-bold text-navy">
                Support that fits your routines
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                {service.detail}
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">Contact Us</ButtonLink>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-sky-soft px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader title="What support may include" align="left" />
              <ul className="mt-7 grid gap-4">
                {service.includes.map((item) => (
                  <li key={item} className="rounded-lg bg-white p-5 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title="Who this may help" align="left" />
              <ul className="mt-7 grid gap-4">
                {service.helps.map((item) => (
                  <li key={item} className="rounded-lg bg-white p-5 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
