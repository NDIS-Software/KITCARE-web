import Link from "next/link";
import { company, navigation, services } from "@/lib/content";
import { NdisMarkPlaceholder } from "./NdisMarkPlaceholder";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_1fr_1fr_220px]">
        <div>
          <Link href="/" aria-label="KITCARE home">
            <span className="block text-4xl font-bold leading-none text-navy">
              KIT<span className="text-teal">CARE</span>
            </span>
            <span className="text-sm font-medium text-muted">
              {company.registrationLabel}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Personalised NDIS support that helps people live with confidence,
            independence, and connection.
          </p>
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
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
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
          <p>© 2026 KITCARE. All rights reserved.</p>
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

