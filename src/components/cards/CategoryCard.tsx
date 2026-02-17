"use client";

import Image from "next/image";
import Link from "next/link";

import { useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export function CategoryCard(props: {
  image: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  featured?: boolean;
  className?: string;
}) {
  const { image, title, description, badge, href, featured, className } = props;
  const t = useT();

  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-full overflow-hidden rounded-sm",
        "cursor-pointer",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 33vw"}
          className="object-cover transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] [transform:scale(1.06)] group-hover:scale-[1.12]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,53,47,0)_0%,rgba(27,53,47,0.28)_55%,rgba(27,53,47,0.92)_100%)] transition-[background] duration-300 group-hover:bg-[linear-gradient(to_bottom,rgba(27,53,47,0)_0%,rgba(27,53,47,0.18)_45%,rgba(27,53,47,0.96)_100%)]" />

      <div className="absolute left-0 right-0 top-0 z-[2] h-0.5 origin-left scale-x-0 bg-[linear-gradient(90deg,#c9a84c,#e8d5a3,#c9a84c)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      <div className="absolute bottom-0 left-0 right-0 z-[2] p-7">
        <div className="inline-flex translate-y-[-6px] items-center gap-2 rounded-[1px] border border-gold/35 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {badge}
        </div>

        <div className="mt-3 h-px w-8 origin-left scale-x-0 bg-gold transition-transform duration-400 [transition-delay:50ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

        <h3
          className={cn(
            "mt-3 font-display font-normal leading-[1.2] text-cream",
            featured ? "text-[1.75rem]" : "text-[1.35rem]"
          )}
        >
          {title}
        </h3>

        <p className="mt-2 max-h-0 overflow-hidden text-[0.68rem] leading-[1.7] tracking-[0.02em] text-cream/55 opacity-0 transition-all duration-400 group-hover:max-h-[48px] group-hover:opacity-100">
          {description}
        </p>

        <div className="mt-4 flex translate-x-[-8px] items-center gap-2 opacity-0 transition-all duration-300 [transition-delay:80ms] group-hover:translate-x-0 group-hover:opacity-100">
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-gold">
            {t.common.view}
          </span>
          <span className="relative h-px w-6 bg-gold transition-[width] duration-300 group-hover:w-9">
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-gold" />
          </span>
        </div>
      </div>
    </Link>
  );
}
