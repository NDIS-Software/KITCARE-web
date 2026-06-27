import Link from "next/link";
import { company, navigation, services } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5">
        <Link href="/" className="shrink-0" aria-label="KIT Care home">
          <span className="block text-3xl font-bold leading-none text-navy">
            KIT<span className="text-teal">CARE</span>
          </span>
          <span className="text-sm font-medium text-muted">
            {company.registrationLabel}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-navy lg:flex">
          {navigation.map((item) =>
            item.label === "Services" ? (
              <div className="group relative" key={item.href}>
                <Link href={item.href} className="py-3 hover:text-teal">
                  Services
                </Link>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-md border border-border-soft bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(8,47,99,0.14)] transition group-hover:visible group-hover:opacity-100">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded px-3 py-2 text-sm text-foreground hover:bg-sky-soft hover:text-teal-dark"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-teal">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-md border border-border-soft px-4 py-2 text-sm font-semibold text-navy">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-72 rounded-md border border-border-soft bg-white p-4 shadow-[0_24px_70px_rgba(8,47,99,0.14)]">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 font-semibold text-navy hover:bg-sky-soft"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border-soft pt-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded px-3 py-2 text-sm text-muted hover:bg-sky-soft hover:text-navy"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
