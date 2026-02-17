import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline-gold";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

function isLinkProps(
  props: ButtonAsButtonProps | ButtonAsLinkProps
): props is ButtonAsLinkProps {
  return typeof (props as ButtonAsLinkProps).href === "string";
}

export function Button(props: ButtonAsButtonProps | ButtonAsLinkProps) {
  const variant = props.variant ?? "primary";

  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gold text-green-deep hover:bg-gold-light shadow-[0_14px_50px_rgba(0,0,0,0.12)]",
    ghost:
      "border border-cream/30 text-cream/85 hover:border-cream/70 hover:text-cream bg-transparent",
    "outline-gold":
      "relative overflow-hidden border border-gold/60 text-gold-light bg-transparent before:absolute before:inset-0 before:bg-gold before:translate-x-[-105%] before:transition-transform before:duration-[400ms] before:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:before:translate-x-0 hover:border-gold",
  };

  const cls = cn(base, variants[variant], props.className);

  if (isLinkProps(props)) {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        <span
          className={cn(
            variant === "outline-gold" && "relative z-[1] transition-colors"
          )}
        >
          {children}
        </span>
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      <span
        className={cn(
          variant === "outline-gold" && "relative z-[1] transition-colors"
        )}
      >
        {children}
      </span>
    </button>
  );
}
