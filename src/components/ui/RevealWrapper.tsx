"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

export function RevealWrapper(props: {
  children: React.ReactNode;
  className?: string;
  staggerIndex?: number;
  staggerDelay?: number;
  from?: "up" | "left" | "right";
}) {
  const {
    children,
    className,
    staggerDelay = 0,
    staggerIndex = 0,
    from = "up",
  } = props;
  const { ref, style } = useReveal({ staggerDelay, staggerIndex });

  return (
    <div
      ref={ref as never}
      data-revealed="true"
      className={cn("reveal", `reveal--${from}`, className)}
      style={style}
    >
      {children}
    </div>
  );
}
