import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variants = {
  primary:
    "bg-teal text-white shadow-[0_10px_24px_rgba(0,150,136,0.2)] hover:bg-teal-dark",
  secondary:
    "border border-teal text-teal hover:bg-sky-soft hover:text-teal-dark",
  light: "bg-white text-teal-dark hover:bg-sky-soft",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

