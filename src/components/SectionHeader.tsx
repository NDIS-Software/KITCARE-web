type SectionHeaderProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

