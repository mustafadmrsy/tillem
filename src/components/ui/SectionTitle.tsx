import { cn } from "@/lib/utils";

export function SectionTitle(props: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  const { eyebrow, title, description, center, className } = props;

  return (
    <div className={cn("space-y-4", center && "text-center", className)}>
      <div
        className={cn(
          "inline-flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#222222]/70",
          center && "justify-center"
        )}
      >
        <span className="h-px w-7 bg-[#222222]/35" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] tracking-[0.01em] text-text">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-[540px] text-[0.85rem] leading-[1.85] tracking-[0.02em] text-text-muted",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
