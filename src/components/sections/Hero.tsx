"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { useT } from "@/i18n/useT";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-green-deep">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=2200&q=80&auto=format&fit=crop"
          alt="Tillem Tekstil"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100 [transform:scale(1.04)] motion-safe:animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(27,53,47,0.92)_0%,rgba(35,74,65,0.75)_60%,rgba(58,107,94,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-screen w-full max-w-[1280px] items-start px-6 pt-20 pb-6 [@media(min-width:1024px)]:px-10 [@media(min-width:768px)]:pt-24 [@media(min-width:768px)]:pb-52">
        <div className="max-w-[600px]">
          <RevealWrapper>
            <div className="inline-flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-9 bg-gold" />
              <span>{t.hero.eyebrow}</span>
            </div>
          </RevealWrapper>

          <RevealWrapper className="mt-7" staggerDelay={0.1} staggerIndex={1}>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream">
              {t.hero.titleLine1}
              <br />
              <em className="italic text-gold-light">{t.hero.titleEm}</em>
              <br />
              {t.hero.titleLine3}
            </h1>
          </RevealWrapper>

          <RevealWrapper className="mt-7" staggerDelay={0.1} staggerIndex={2}>
            <p className="max-w-[480px] text-[0.95rem] font-light leading-[1.85] tracking-[0.02em] text-cream/70">
              {t.hero.desc}
            </p>
          </RevealWrapper>

          <RevealWrapper className="mt-11" staggerDelay={0.1} staggerIndex={3}>
            <div className="flex flex-col items-start gap-4 [@media(min-width:520px)]:flex-row">
              <Button href="/urunler" variant="primary">
                {t.hero.primaryCta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/hakkimizda" variant="ghost">
                {t.hero.secondaryCta}
              </Button>
            </div>
          </RevealWrapper>
        </div>
      </div>

      <div className="border-t border-gold/20 bg-green-deep/75 backdrop-blur-md [@media(min-width:768px)]:absolute [@media(min-width:768px)]:bottom-0 [@media(min-width:768px)]:left-0 [@media(min-width:768px)]:right-0 [@media(min-width:768px)]:z-[2]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-gold/15 px-6 [@media(min-width:768px)]:grid-cols-4 [@media(min-width:768px)]:divide-y-0 [@media(min-width:1024px)]:px-10">
          {[
            { num: "59+", label: t.stats.years },
            { num: "1200+", label: t.stats.customers },
            { num: "48", label: t.stats.export },
            { num: "6", label: t.stats.categories },
          ].map((s, idx) => (
            <div
              key={s.label}
              className="py-6 pl-6 pr-6 [@media(min-width:768px)]:py-7 [@media(min-width:768px)]:pl-8 [@media(min-width:768px)]:pr-8"
            >
              <div className="font-display text-[2rem] font-light leading-none text-gold-light [@media(min-width:768px)]:text-[2.2rem]">
                {s.num}
              </div>
              <div className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-cream/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
