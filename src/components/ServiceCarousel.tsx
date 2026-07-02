"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";
import { ServiceCard } from "./ServiceCard";

type ServiceCarouselProps = {
  services: {
    title: string;
    code: string;
    group: string;
    href: string;
    summary: string;
    image: string;
    icon: string;
    benefits?: string[];
  }[];
};

const AUTO_SPEED = 48;
const DRAG_CLICK_THRESHOLD = 7;
const MOMENTUM_CUTOFF = 0.018;

type ManualAnimation = {
  duration: number;
  from: number;
  start: number;
  to: number;
};

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const loopWidthRef = useRef(0);
  const cardSpanRef = useRef(384);
  const positionRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const manualAnimationRef = useRef<ManualAnimation | null>(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const didDragRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const normalizePosition = useCallback((position: number) => {
    const loopWidth = loopWidthRef.current;

    if (!loopWidth) {
      return position;
    }

    return ((position % loopWidth) + loopWidth) % loopWidth;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const position = normalizePosition(positionRef.current);
    track.style.transform = `translate3d(${-position}px, 0, 0)`;
    track.dataset.carouselPosition = String(Math.round(position));
  }, [normalizePosition]);

  const measureCarousel = useCallback(() => {
    const firstSet = firstSetRef.current;

    if (!firstSet) {
      return;
    }

    const card = firstSet.querySelector<HTMLElement>("[data-carousel-card]");
    const styles = window.getComputedStyle(firstSet);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 24;

    loopWidthRef.current = firstSet.offsetWidth;
    cardSpanRef.current = (card?.offsetWidth ?? 360) + gap;
    applyTransform();
  }, [applyTransform]);

  const pauseFor = (delay = 900) => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    isPausedRef.current = true;
    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, delay);
  };

  const pauseIndefinitely = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    isPausedRef.current = true;
  };

  const animateByCard = (direction: 1 | -1) => {
    const distance = cardSpanRef.current * direction;
    const now = window.performance.now();

    pauseFor(900);
    velocityRef.current = 0;
    manualAnimationRef.current = {
      duration: reduceMotionRef.current ? 1 : 420,
      from: positionRef.current,
      start: now,
      to: positionRef.current + distance,
    };
  };

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    reduceMotionRef.current = motionQuery.matches;
    measureCarousel();

    const resizeObserver = new ResizeObserver(measureCarousel);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotionRef.current = event.matches;
    };

    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [measureCarousel, services.length]);

  useEffect(() => {
    const tick = (timestamp: number) => {
      const lastFrame = lastFrameRef.current ?? timestamp;
      const deltaMs = Math.min(timestamp - lastFrame, 40);
      const manualAnimation = manualAnimationRef.current;

      lastFrameRef.current = timestamp;

      if (manualAnimation) {
        const progress = Math.min(
          (timestamp - manualAnimation.start) / manualAnimation.duration,
          1,
        );
        const easedProgress = 1 - (1 - progress) ** 3;

        positionRef.current =
          manualAnimation.from +
          (manualAnimation.to - manualAnimation.from) * easedProgress;

        if (progress >= 1) {
          manualAnimationRef.current = null;
        }
      } else if (!isDraggingRef.current) {
        const absVelocity = Math.abs(velocityRef.current);

        if (absVelocity > MOMENTUM_CUTOFF) {
          positionRef.current += velocityRef.current * deltaMs;
          velocityRef.current *= Math.exp(-deltaMs / 260);
        } else if (!isPausedRef.current && !reduceMotionRef.current) {
          positionRef.current += (AUTO_SPEED * deltaMs) / 1000;
        } else {
          velocityRef.current = 0;
        }
      }

      applyTransform();
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, [applyTransform]);

  const renderSlides = (copyIndex: number) => (
    <>
      {services.map((service) => (
        <div
          key={`${copyIndex}-${service.href}`}
          data-carousel-card
          className="w-[min(82vw,360px)] flex-none"
        >
          <ServiceCard service={service} />
        </div>
      ))}
      <div className="flex w-[min(82vw,360px)] flex-none flex-col justify-between rounded-lg bg-white p-7 shadow-[0_18px_60px_rgba(8,47,99,0.08)]">
        <div>
          <Icon name="chat" className="size-11 text-teal" />
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy">
            Not sure which support fits?
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Tell us what you want help with. We can talk through daily routines,
            transport, home support, and community access.
          </p>
        </div>
        <div className="mt-6">
          <ButtonLink href="/contact" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </>
  );

  const renderControls = (className: string) => (
    <div className={className}>
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-md border border-border-soft bg-white text-teal shadow-[0_12px_34px_rgba(8,47,99,0.08)] transition hover:border-teal hover:text-teal-dark"
        aria-label="Previous service group"
        onClick={() => animateByCard(-1)}
      >
        <Icon name="chevron-left" className="size-5" />
      </button>
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-md border border-border-soft bg-white text-teal shadow-[0_12px_34px_rgba(8,47,99,0.08)] transition hover:border-teal hover:text-teal-dark"
        aria-label="Next service group"
        onClick={() => animateByCard(1)}
      >
        <Icon name="chevron-right" className="size-5" />
      </button>
    </div>
  );

  return (
    <div
      className="relative mt-12"
      onFocus={pauseIndefinitely}
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        pauseFor(600);
      }}
    >
      {renderControls("mb-4 hidden items-center justify-end gap-3 md:flex")}

      <div
        ref={viewportRef}
        aria-label="Service groups carousel"
        className={`-mx-6 overflow-hidden px-6 pb-6 [touch-action:pan-y] ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        role="region"
        onClickCapture={(event) => {
          if (didDragRef.current) {
            event.preventDefault();
            event.stopPropagation();
            didDragRef.current = false;
          }
        }}
        onDragStart={(event) => {
          event.preventDefault();
        }}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) {
            return;
          }

          const viewport = viewportRef.current;

          if (!viewport) {
            return;
          }

          isDraggingRef.current = true;
          isPausedRef.current = true;
          manualAnimationRef.current = null;
          velocityRef.current = 0;
          startXRef.current = event.clientX;
          startPositionRef.current = positionRef.current;
          lastMoveXRef.current = event.clientX;
          lastMoveTimeRef.current = window.performance.now();
          didDragRef.current = false;
          setIsDragging(true);
          viewport.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!isDraggingRef.current) {
            return;
          }

          const now = window.performance.now();
          const deltaX = event.clientX - startXRef.current;
          const nextPosition = startPositionRef.current - deltaX;
          const elapsed = Math.max(now - lastMoveTimeRef.current, 16);

          if (Math.abs(deltaX) > DRAG_CLICK_THRESHOLD) {
            didDragRef.current = true;
          }

          velocityRef.current =
            ((lastMoveXRef.current - event.clientX) / elapsed) * 0.96;
          lastMoveXRef.current = event.clientX;
          lastMoveTimeRef.current = now;
          positionRef.current = nextPosition;
          applyTransform();
        }}
        onPointerUp={(event) => {
          const viewport = viewportRef.current;

          isDraggingRef.current = false;
          isPausedRef.current = false;
          setIsDragging(false);

          if (viewport?.hasPointerCapture(event.pointerId)) {
            viewport.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={(event) => {
          const viewport = viewportRef.current;

          isDraggingRef.current = false;
          isPausedRef.current = false;
          velocityRef.current = 0;
          setIsDragging(false);

          if (viewport?.hasPointerCapture(event.pointerId)) {
            viewport.releasePointerCapture(event.pointerId);
          }
        }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          data-carousel-track
        >
          {[0, 1, 2].map((copyIndex) => (
            <div
              key={copyIndex}
              ref={copyIndex === 0 ? firstSetRef : undefined}
              className="flex shrink-0 gap-6 pr-6"
            >
              {renderSlides(copyIndex)}
            </div>
          ))}
        </div>
      </div>

      {renderControls("mt-2 flex items-center justify-center gap-3 md:hidden")}
    </div>
  );
}
