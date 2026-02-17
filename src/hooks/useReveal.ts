"use client";

import { useEffect, useMemo, useRef } from "react";

export function useReveal(opts?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  staggerIndex?: number;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const options = useMemo(
    () => ({
      threshold: opts?.threshold ?? 0,
      rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
      once: opts?.once ?? false,
      staggerIndex: opts?.staggerIndex ?? 0,
      staggerDelay: opts?.staggerDelay ?? 0,
    }),
    [
      opts?.threshold,
      opts?.rootMargin,
      opts?.once,
      opts?.staggerIndex,
      opts?.staggerDelay,
    ]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.dataset.revealed = "true";
            if (options.once) observer.unobserve(target);
          } else if (!options.once) {
            target.dataset.revealed = "false";
          }
        }
      },
      { threshold: options.threshold, rootMargin: options.rootMargin }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) el.dataset.revealed = "true";

    return () => observer.disconnect();
  }, [options.once, options.rootMargin, options.threshold]);

  const style: React.CSSProperties | undefined =
    options.staggerDelay > 0
      ? { transitionDelay: `${options.staggerIndex * options.staggerDelay}s` }
      : undefined;

  return { ref, style };
}
