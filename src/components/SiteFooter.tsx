import Image from "next/image";
import Link from "next/link";
import { company, navigation, services } from "@/lib/content";
import { NdisMarkPlaceholder } from "./NdisMarkPlaceholder";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.8fr_1.2fr_260px]">
        <div>
          <Link href="/" aria-label="KIT Care home">
            <Image
              src="/images/brand/kitcare-logo.png"
              alt="KIT Care Support Services logo"
              width={220}
              height={195}
              className="h-auto w-48 object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Personalised NDIS support that helps people live with confidence,
            independence, and connection across Melbourne.
          </p>
          <div className="mt-5 grid gap-2 text-sm leading-6 text-muted">
            <p>
              <strong className="text-navy">ABN:</strong> {company.abn}
            </p>
            <p>
              <strong className="text-navy">Head office:</strong>{" "}
              {company.headOffice}
            </p>
            <p>
              <strong className="text-navy">Phone:</strong>{" "}
              <a
                href={`tel:${company.phone.replaceAll(" ", "")}`}
                className="hover:text-teal"
              >
                {company.phone}
              </a>
            </p>
            <p>
              <strong className="text-navy">Email:</strong>{" "}
              <a href={`mailto:${company.email}`} className="hover:text-teal">
                {company.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            Pages
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            Services
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="hover:text-teal"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <NdisMarkPlaceholder />
      </div>
      <div className="border-t border-border-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 KIT Care. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-teal">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-teal">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
