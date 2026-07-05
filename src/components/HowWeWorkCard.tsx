import { Icon } from "@/components/Icon";

type HowWeWorkCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function HowWeWorkCard({ title, description, icon }: HowWeWorkCardProps) {
  return (
    <article
      tabIndex={0}
      className="how-work-card relative overflow-hidden rounded-lg border border-border-soft bg-white p-7 shadow-[0_14px_40px_rgba(8,47,99,0.05)] outline-none"
    >
      <div
        className="how-work-card__overlay absolute inset-0 bg-[linear-gradient(135deg,#082f63_0%,#0e5f93_58%,#dff4f7_140%)] opacity-0"
        aria-hidden="true"
      />
      <div
        className="how-work-card__glow absolute -right-10 -top-12 size-32 rounded-full bg-white/18 opacity-0 blur-2xl"
        aria-hidden="true"
      />
      <Icon
        name={icon}
        className="how-work-card__icon relative z-10 size-10 text-teal"
      />
      <h3 className="how-work-card__title relative z-10 mt-5 text-xl font-bold text-navy">
        {title}
      </h3>
      <p className="how-work-card__body relative z-10 mt-3 text-sm leading-7 text-muted">
        {description}
      </p>
    </article>
  );
}
