"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage, useT } from "@/i18n/useT";
import type { Product } from "@/types";

function formatCategory(cat: string) {
  return cat
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const t = useT();
  const { lang } = useLanguage();
  const title = lang === "en" ? product.titleEn ?? product.title : product.title;
  const shortDesc =
    lang === "en" ? product.shortDescEn ?? product.shortDesc : product.shortDesc;
  const badge =
    lang === "en" ? product.badgeEn ?? product.badge : product.badge;
  const tag =
    (lang === "en" ? product.tagsEn?.[0] : product.tags?.[0]) ??
    product.specs[1]?.value ??
    product.specs[0]?.value ??
    t.nav.products;
  const idx = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border-r border-b border-divider/40 bg-surface transition-colors hover:bg-surface-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-light">
        <Image
          src={product.images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1000ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] [transform:scale(1.05)] group-hover:scale-[1.12]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,63,55,0)_40%,rgba(31,63,55,0.22)_100%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        {badge ? (
          <div className="absolute left-[14px] top-[14px] z-[3] translate-y-[-5px] rounded-[1px] border border-divider bg-[#1F3F37]/85 px-2.5 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {badge}
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 z-[4] h-0.5">
          <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#1F3F37,#3A5F55)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[0.53rem] font-semibold uppercase tracking-[0.26em] text-text/60">
            {formatCategory(product.category)}
          </div>
          <div className="font-display text-[0.8rem] font-light tracking-[0.06em] text-text/15 transition-colors group-hover:text-text/25">
            {idx}
          </div>
        </div>

        <h3 className="font-display text-[1.1rem] font-normal leading-[1.25] tracking-[0.01em] text-text transition-colors group-hover:text-[#222222]">
          {title}
        </h3>

        <div className="relative my-3 h-px overflow-hidden bg-divider/25">
          <div className="absolute inset-0 origin-left scale-x-0 bg-divider/60 transition-transform duration-400 [transition-delay:50ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </div>

        <p className="t-lineclamp-2 flex-1 text-[0.73rem] font-light leading-[1.68] tracking-[0.02em] text-text-muted">
          {shortDesc}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-divider/40 pt-3">
          <div className="inline-flex items-center gap-2 text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[#222222]">
            {t.common.view}
            <span className="relative h-px w-[22px] bg-[#222222] transition-[width] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:w-[34px]">
              <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-[#222222]" />
            </span>
          </div>

          <div className="whitespace-nowrap rounded-full border border-divider/50 px-2.5 py-1 text-[0.49rem] font-medium uppercase tracking-[0.12em] text-text-muted transition-colors group-hover:border-divider/70 group-hover:text-text">
            {tag}
          </div>
        </div>
      </div>
    </Link>
  );
}
