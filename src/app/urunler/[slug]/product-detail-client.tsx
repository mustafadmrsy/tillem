"use client";

import Link from "next/link";
import { useMemo } from "react";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { useLanguage, useT } from "@/i18n/useT";
import type { Product } from "@/types";

import { ProductGallery } from "./product-gallery";

export function ProductDetailClient({ product }: { product: Product }) {
  const t = useT();

  const { lang } = useLanguage();
  const cat = categories.find((c) => c.id === product.category);

  const title = lang === "en" ? product.titleEn ?? product.title : product.title;
  const desc =
    lang === "en" ? product.descriptionEn ?? product.description : product.description;
  const categoryTitle =
    lang === "en"
      ? cat?.titleEn ?? cat?.title ?? product.category.replaceAll("-", " ")
      : cat?.title ?? product.category.replaceAll("-", " ");

  const tags =
    (lang === "en" ? product.tagsEn : product.tags) ??
    (product.tags ?? product.tagsEn) ??
    [];

  const heroImage = product.images[0];

  const [titleFirst, ...titleRest] = title.split(" ");
  const titleEm = titleRest.join(" ");

  return (
    <div className="bg-bg">
      <div className="relative bg-green-deep">
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#c9a84c_30%,#e8d5a3_50%,#c9a84c_70%,transparent)]" />
        <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-between px-6 [@media(min-width:1024px)]:px-10">
          <nav className="flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.14em]">
            <Link className="text-cream/40 transition-colors hover:text-gold" href="/">
              {t.productDetail.topbarHome}
            </Link>
            <span className="text-cream/20">/</span>
            <Link className="text-cream/40 transition-colors hover:text-gold" href="/urunler">
              {t.productDetail.topbarProducts}
            </Link>
            <span className="text-cream/20">/</span>
            <span className="text-cream/60">{categoryTitle}</span>
            <span className="text-cream/20">/</span>
            <span className="text-cream/65">{title}</span>
          </nav>

          <span className="rounded-[1px] border border-gold/30 px-3 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-gold">
            {categoryTitle}
          </span>
        </div>
      </div>

      <div className="relative h-[340px] overflow-hidden bg-green-deep [@media(max-width:600px)]:h-[260px]">
        <div
          className="absolute inset-0 [transform:scale(1.04)]"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(.38) saturate(.8)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute inset-0 mx-auto flex max-w-[1280px] flex-col items-start justify-end px-6 pb-10 [@media(min-width:1024px)]:px-10 [@media(max-width:1023px)]:pb-9">
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-6 bg-gold" />
            <span>{t.productDetail.heroEyebrow}</span>
          </div>

          <h1 className="mt-3 font-display text-[clamp(2.8rem,5.5vw,4.4rem)] font-light leading-[1.05] tracking-[0.01em] text-cream">
            {titleFirst}
            {titleEm ? (
              <>
                {" "}
                <em className="italic text-gold-light">{titleEm}</em>
              </>
            ) : null}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-6 pb-24 [@media(min-width:1024px)]:grid-cols-[1.1fr_1fr] [@media(min-width:1024px)]:gap-14 [@media(min-width:1024px)]:px-10">
        <div className="sticky top-7 self-start pt-10 [@media(max-width:1023px)]:static">
          <ProductGallery images={product.images} title={title} />
        </div>

        <div className="pt-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-6 bg-green/20" />
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.26em] text-green-pale">
              {t.productDetail.infoLabel}
            </span>
            <span className="h-px flex-1 bg-green/10" />
          </div>

          <p className="text-[0.88rem] leading-[1.92] tracking-[0.02em] text-text-mid">
            {desc}
          </p>

          {tags.length ? (
            <div className="mt-7 flex flex-wrap gap-1.5">
              {tags.slice(0, 8).map((tg) => (
                <span
                  key={tg}
                  className="rounded-full border border-green/15 px-3 py-1 text-[0.51rem] font-medium uppercase tracking-[0.16em] text-text-muted"
                >
                  {tg}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8 overflow-hidden rounded-[2px] border border-green/10 bg-white">
            <div className="flex items-center gap-2 bg-green-deep px-5 py-4">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <span className="text-[0.57rem] font-semibold uppercase tracking-[0.26em] text-gold-light">
                {t.productDetail.specs}
              </span>
            </div>

            <div className="divide-y divide-green/10">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[160px_1fr] border-b border-green/10 last:border-b-0 hover:bg-green-mist/60"
                >
                  <div className="border-r border-green/10 px-5 py-3 text-[0.72rem] font-medium tracking-[0.02em] text-text">
                    {s.label}
                  </div>
                  <div className="px-5 py-3 text-[0.72rem] font-light tracking-[0.02em] text-text-mid">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2 [@media(min-width:640px)]:grid-cols-2">
            {[
              {
                title: lang === "en" ? "Certified" : "Sertifikalı",
                sub: "Oeko-Tex Standard 100",
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: lang === "en" ? "Custom Production" : "Özel Üretim",
                sub: lang === "en" ? "Pattern development included" : "Desen geliştirme dahil",
                icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
              },
              {
                title: lang === "en" ? "Fast Delivery" : "Hızlı Teslimat",
                sub: lang === "en" ? "Stock: 3–5 business days" : "Stok: 3–5 iş günü",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </>
                ),
              },
              {
                title: lang === "en" ? "48 Countries" : "48 Ülke",
                sub: lang === "en" ? "Global export experience" : "Global ihracat deneyimi",
                icon: (
                  <>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                ),
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 rounded-[2px] border border-green/10 bg-white px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="rgb(232 213 163)" strokeWidth="1.8" strokeLinecap="round">
                    {f.icon}
                  </svg>
                </span>
                <div>
                  <div className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-text">
                    {f.title}
                  </div>
                  <div className="text-[0.67rem] font-light text-text-muted">
                    {f.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[2px] border border-gold/20 bg-green-deep">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-[1] flex items-center justify-between border-b border-gold/15 px-7 py-5">
              <div>
                <div className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  {t.productDetail.quoteEyebrow}
                </div>
                <div className="mt-1 font-display text-[1.25rem] font-light text-cream">
                  {t.productDetail.quoteTitle}
                </div>
              </div>
              <div className="rounded-[1px] bg-gold px-3 py-1 text-[0.48rem] font-bold uppercase tracking-[0.14em] text-green-deep">
                {t.productDetail.quotePill}
              </div>
            </div>

            <form className="relative z-[1] grid grid-cols-1 gap-3 px-7 py-6 [@media(min-width:640px)]:grid-cols-2">
              <QInput label={t.productDetail.fields.name} placeholder={t.productDetail.fields.name} />
              <QInput label={t.productDetail.fields.company} placeholder={t.productDetail.fields.company} />
              <QInput label={t.productDetail.fields.phone} placeholder={t.productDetail.fields.phone} />
              <QInput label={t.productDetail.fields.email} placeholder={t.productDetail.fields.email} type="email" />
              <QInput label={t.productDetail.fields.qty} placeholder={t.productDetail.fields.qty} />
              <QInput label={t.productDetail.fields.product} value={title} readOnly />
              <QTextarea label={t.productDetail.fields.note} placeholder={t.productDetail.fields.note} />

              <button
                type="button"
                className="[grid-column:1/-1] mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-gold px-4 py-3 text-[0.67rem] font-bold uppercase tracking-[0.22em] text-green-deep transition-[background,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
                {t.productDetail.quoteSubmit}
              </button>

              <p className="[grid-column:1/-1] text-center text-[0.65rem] font-light tracking-[0.04em] text-cream/40">
                {t.productDetail.quoteNote}
              </p>
            </form>
          </div>
        </div>
      </div>

      <RelatedProducts current={product} />
    </div>
  );
}

function QInput(props: {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-gold/80">
        {props.label}
      </label>
      <input
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        defaultValue={props.value}
        readOnly={props.readOnly}
        className="w-full rounded-[2px] border border-gold/20 bg-cream/5 px-3.5 py-3 text-[0.82rem] font-light text-cream outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}

function QTextarea(props: { label: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5 [grid-column:1/-1]">
      <label className="text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-gold/80">
        {props.label}
      </label>
      <textarea
        placeholder={props.placeholder}
        className="h-24 w-full resize-none rounded-[2px] border border-gold/20 bg-cream/5 px-3.5 py-3 text-[0.82rem] font-light leading-[1.65] text-cream outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}

function RelatedProducts({ current }: { current: Product }) {
  const t = useT();
  const { lang } = useLanguage();

  const related = useMemo(() => {
    const sameCategory = products.filter(
      (p) => p.slug !== current.slug && p.category === current.category
    );
    const others = products.filter(
      (p) => p.slug !== current.slug && p.category !== current.category
    );

    return [...sameCategory, ...others].slice(0, 4);
  }, [current.category, current.slug]);

  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-20 [@media(min-width:1024px)]:px-10">
      <div className="flex items-end justify-between gap-6 border-t border-green/10 pt-14">
        <div>
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-green-pale">
            <span className="h-px w-5 bg-green-pale" />
            <span>{t.productDetail.relatedEyebrow}</span>
          </div>
          <h2 className="mt-2 font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-light text-text">
            {t.productDetail.relatedTitle1}
            <em className="italic text-green">{t.productDetail.relatedTitleEm}</em>
          </h2>
        </div>

        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-[0.59rem] font-medium uppercase tracking-[0.18em] text-green transition-[gap] hover:gap-3"
        >
          {t.productDetail.relatedAll}
          <span className="relative h-px w-[18px] bg-green">
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-green" />
          </span>
        </Link>
      </div>

      <div className="mt-7 grid border-l border-t border-green/10 [grid-template-columns:repeat(1,1fr)] [@media(min-width:640px)]:[grid-template-columns:repeat(2,1fr)] [@media(min-width:1024px)]:[grid-template-columns:repeat(4,1fr)]">
        {related.map((p) => {
          const cat = categories.find((c) => c.id === p.category);
          const pTitle = lang === "en" ? p.titleEn ?? p.title : p.title;
          const pCat =
            lang === "en" ? cat?.titleEn ?? cat?.title ?? "" : cat?.title ?? "";

          return (
            <Link
              key={p.slug}
              href={`/urunler/${p.slug}`}
              className="group block bg-white transition-colors hover:bg-[#fafaf8]"
              style={{
                borderRight: "1px solid rgba(35,74,65,0.10)",
                borderBottom: "1px solid rgba(35,74,65,0.10)",
              }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-cream-light">
                <div
                  className="absolute inset-0 transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] [transform:scale(1.05)] group-hover:scale-[1.11]"
                  style={{
                    backgroundImage: `url('${p.images[0]}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5">
                  <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#2d5f53,#5F7D6E)] transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </div>
              <div className="p-4">
                <div className="text-[0.49rem] font-semibold uppercase tracking-[0.26em] text-green-pale">
                  {pCat}
                </div>
                <div className="mt-2 font-display text-[0.98rem] font-normal leading-[1.25] text-text transition-colors group-hover:text-green">
                  {pTitle}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
