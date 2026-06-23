type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-sky-soft px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}

