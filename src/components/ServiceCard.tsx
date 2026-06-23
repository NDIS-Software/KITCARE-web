import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

type ServiceCardProps = {
  service: {
    title: string;
    href: string;
    summary: string;
    image: string;
    icon: string;
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(8,47,99,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(8,47,99,0.13)]"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image}
          alt={`${service.title} support`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="relative px-6 pb-7 pt-11 text-center">
        <div className="absolute left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-soft bg-white text-teal shadow-[0_12px_32px_rgba(8,47,99,0.1)]">
          <Icon name={service.icon} className="size-8" />
        </div>
        <h3 className="text-xl font-bold text-navy">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
      </div>
    </Link>
  );
}

