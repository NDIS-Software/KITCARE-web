"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type FounderProfile = {
  credentials: string[];
  highlights: string[];
  name: string;
  role: string;
  summary: string;
  verificationNote: string;
};

type FounderProfileFeatureProps = {
  profile: FounderProfile;
};

export function FounderProfileFeature({ profile }: FounderProfileFeatureProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const revealClass = isVisible ? "is-visible" : "";

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-navy px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className={`founder-reveal founder-reveal-left ${revealClass}`}>
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-lg border border-white/15 bg-[#dff2f4] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
            <div
              className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(0,150,136,0.12)_48%,rgba(8,47,99,0.22))]"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-0 h-full w-1/3 bg-white/35"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-end p-8">
              <div
                className="mb-8 flex size-28 items-center justify-center rounded-full border border-white/70 bg-white/70 text-4xl font-bold text-navy shadow-[0_18px_45px_rgba(8,47,99,0.18)]"
                aria-hidden="true"
              >
                CL
              </div>
              <div className="border-t border-navy/15 pt-6">
                <p className="text-sm font-bold uppercase text-teal">
                  {profile.name}
                </p>
                <p className="mt-1 text-lg font-bold text-navy">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`founder-reveal founder-reveal-right ${revealClass}`}>
          <p className="text-sm font-bold uppercase text-teal">
            Founder-led support
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Practical care experience, shaped into a calmer support service.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78">
            {profile.summary}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {profile.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className={`founder-reveal founder-reveal-up ${revealClass} rounded-lg border border-white/15 bg-white/8 p-5`}
                style={{ transitionDelay: `${180 + index * 90}ms` }}
              >
                <Icon name="hands" className="size-7 text-teal" />
                <p className="mt-4 text-sm font-semibold leading-6 text-white">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/15 pt-6">
            <div className="flex flex-wrap gap-3">
              {profile.credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy"
                >
                  {credential}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
              {profile.verificationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
