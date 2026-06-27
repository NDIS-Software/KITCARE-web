import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

type ServiceCardProps = {
  service: {
    title: string;
    code: string;
    group: string;
    href: string;
    summary: string;
    image: string;
    icon: string;
    benefits?: string[];
  };
  variant?: "standard" | "featured" | "compact";
};

export function ServiceCard({
  service,
  variant = "standard",
}: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={service.href}
        className="group relative min-h-[520px] overflow-hidden rounded-lg bg-navy text-white shadow-[0_24px_80px_rgba(8,47,99,0.18)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(8,47,99,0.24)]"
      >
        <Image
          src={service.image}
          alt={`${service.title} support`}
          fill
          priority
          quality={90}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/86 to-navy/10" />
        <div className="relative flex min-h-[520px] max-w-xl flex-col justify-center px-7 py-9 md:px-10">
          <div className="flex size-14 items-center justify-center rounded-md bg-white/14 text-white ring-1 ring-white/20">
            <Icon name={service.icon} className="size-8" />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
            NDIS {service.code} / {service.group}
          </p>
          <h3 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            {service.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-white/84">
            {service.summary}
          </p>
          {service.benefits?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {service.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-semibold text-white"
                >
                  {benefit}
                </span>
              ))}
            </div>
          ) : null}
          <span className="mt-8 text-sm font-bold text-white">
            Learn more -&gt;
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={service.href}
        className="group grid overflow-hidden rounded-lg border border-border-soft bg-white shadow-[0_16px_48px_rgba(8,47,99,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_64px_rgba(8,47,99,0.12)] sm:grid-cols-[150px_1fr]"
      >
        <div className="relative min-h-[160px] sm:min-h-full">
          <Image
            src={service.image}
            alt={`${service.title} support`}
            fill
            quality={90}
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 180px, 100vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sky-soft text-teal">
              <Icon name={service.icon} className="size-6" />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">
              {service.code}
            </p>
          </div>
          <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {service.summary}
          </p>
          <span className="mt-4 inline-flex text-sm font-bold text-teal group-hover:text-teal-dark">
            Learn more -&gt;
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={service.href}
      className="group overflow-hidden rounded-lg border border-border-soft/70 bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(8,47,99,0.13)]"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={service.image}
          alt={`${service.title} support`}
          fill
          quality={90}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="relative px-6 pb-7 pt-9">
        <div className="absolute left-6 top-0 flex size-14 -translate-y-1/2 items-center justify-center rounded-md border border-border-soft bg-white text-teal shadow-[0_12px_32px_rgba(8,47,99,0.1)]">
          <Icon name={service.icon} className="size-7" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
          {service.code} / {service.group}
        </p>
        <h3 className="mt-3 text-xl font-bold leading-tight text-navy">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
        {service.benefits?.length ? (
          <ul className="mt-5 grid gap-2">
            {service.benefits.slice(0, 3).map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-sm font-semibold text-navy"
              >
                <span className="size-1.5 rounded-full bg-teal" />
                {benefit}
              </li>
            ))}
          </ul>
        ) : null}
        <span className="mt-5 inline-flex text-sm font-bold text-teal group-hover:text-teal-dark">
          Learn more -&gt;
        </span>
      </div>
    </Link>
  );
}
