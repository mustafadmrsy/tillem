"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/cards/ProductCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { useLanguage, useT } from "@/i18n/useT";
import type { Product, ProductCategory } from "@/types";

const filters: Array<{ id: "all" | ProductCategory; label: string }> = [
  { id: "all", label: "Tümü" },
  { id: "otel-tekstili", label: "Otel" },
  { id: "banket-catering", label: "Banket" },
  { id: "perde", label: "Perde" },
  { id: "ev-tekstili", label: "Ev" },
  { id: "kumaslar", label: "Kumaş" },
  { id: "restoran", label: "Restoran" },
];

export function ProductsClient({
  products,
  initialCat,
}: {
  products: Product[];
  initialCat: "all" | ProductCategory;
}) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>(initialCat);
  const t = useT();
  const { lang } = useLanguage();

  const filterLabel = (id: (typeof filters)[number]["id"], trLabel: string) => {
    if (lang === "tr") return trLabel;
    if (id === "all") return "All";
    if (id === "otel-tekstili") return "Hotel";
    if (id === "banket-catering") return "Banquet";
    if (id === "perde") return "Curtains";
    if (id === "ev-tekstili") return "Home";
    if (id === "kumaslar") return "Fabrics";
    if (id === "restoran") return "Restaurant";
    return trLabel;
  };

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  const setActiveAndUrl = (next: (typeof filters)[number]["id"]) => {
    setActive(next);
    try {
      if (typeof window === "undefined") return;
      const url = new URL(window.location.href);
      if (next === "all") url.searchParams.delete("cat");
      else url.searchParams.set("cat", next);
      window.history.replaceState(null, "", url.toString());
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-bg">
      <section className="relative overflow-hidden bg-[#222222] pt-20 pb-16 [@media(min-width:768px)]:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#c9a84c_30%,#e8d5a3_50%,#c9a84c_70%,transparent)]" />

        <div className="relative z-[1] mx-auto flex max-w-[1200px] flex-col gap-8 px-5 [@media(min-width:768px)]:flex-row [@media(min-width:768px)]:items-end [@media(min-width:768px)]:justify-between [@media(min-width:768px)]:px-10">
          <div>
            <div className="flex items-center gap-3 text-[0.57rem] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-7 bg-gold" />
              <span>{t.products.eyebrow}</span>
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1] tracking-[0.01em] text-cream">
              {t.products.title1}
              <em className="italic text-gold-light">{t.products.titleEm}</em>
            </h1>

            <p className="mt-5 max-w-[560px] text-[0.9rem] font-light leading-[1.85] tracking-[0.02em] text-cream/60">
              {t.products.desc}
            </p>
          </div>

          <div className="flex items-center gap-5 pb-1">
            <nav className="flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.14em]">
              <a className="text-cream/40 transition-colors hover:text-gold" href="/">
                {t.products.breadcrumbHome}
              </a>
              <span className="text-cream/20">/</span>
              <span className="text-cream/60">{t.products.breadcrumbProducts}</span>
            </nav>
            <span className="text-[0.7rem] tracking-[0.1em] text-cream/35">
              {filtered.length} {t.products.countSuffix}
            </span>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-divider/40 bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-5 [@media(min-width:768px)]:px-10">
          <div className="t-scrollbar-none flex flex-1 items-center gap-1 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveAndUrl(f.id)}
                className={
                  active === f.id
                    ? "shrink-0 rounded-[2px] border border-[#222222] bg-[#222222] px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white"
                    : "shrink-0 rounded-[2px] border border-transparent px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-text-muted transition-colors hover:border-[#222222]/15 hover:text-text"
                }
              >
                {filterLabel(f.id, f.label)}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 [@media(min-width:520px)]:flex">
            <select
              className="cursor-pointer appearance-none rounded-[2px] border border-divider/50 bg-transparent px-3 py-1.5 pr-8 text-[0.6rem] font-medium tracking-[0.1em] text-text-muted outline-none"
              defaultValue="default"
            >
              <option value="default">{t.products.sortDefault}</option>
              <option value="az">{t.products.sortAZ}</option>
              <option value="new">{t.products.sortNew}</option>
            </select>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 pt-12 pb-24 [@media(min-width:768px)]:px-10">
        <div className="grid border-l border-t border-divider/40 [grid-template-columns:repeat(1,1fr)] [@media(min-width:480px)]:[grid-template-columns:repeat(2,1fr)] [@media(min-width:780px)]:[grid-template-columns:repeat(3,1fr)] [@media(min-width:1100px)]:[grid-template-columns:repeat(4,1fr)]">
          {filtered.map((p, idx) => (
            <RevealWrapper
              key={p.id}
              from={idx % 2 === 0 ? "left" : "right"}
              staggerDelay={0.06}
              staggerIndex={idx}
              className="h-full"
            >
              <ProductCard product={p} index={idx} />
            </RevealWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
