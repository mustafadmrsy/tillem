"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/useT";

export function About() {
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-green-deep py-24 [@media(min-width:768px)]:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:gap-20 [@media(min-width:1024px)]:px-10">
        <RevealWrapper>
          <div className="relative max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=1400&q=80&auto=format&fit=crop"
                alt="Üretim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(35,74,65,0.3),rgba(27,53,47,0.5))]" />
            </div>

            <div className="absolute -bottom-6 -right-6 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-gold shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
              <div className="font-display text-[2.2rem] font-light leading-none text-green-deep">
                1965
              </div>
              <div className="mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-green-deep/80">
                Kuruluş
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper staggerDelay={0.1} staggerIndex={1}>
          <div>
            <SectionTitle
              eyebrow={t.about.eyebrow}
              title={
                <>
                  {t.about.titleLine1}
                  <br />
                  <em className="italic text-gold-light">{t.about.titleEm}</em>
                </>
              }
              description={undefined}
              className="[&_*]:text-left"
            />

            <div className="mt-6 space-y-4 text-[0.9rem] leading-[1.9] tracking-[0.02em] text-cream/60">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 [@media(min-width:520px)]:grid-cols-2">
              {[
                "ISO 9001:2015 Sertifikası",
                "Oeko-Tex Standart 100",
                "48 Ülkeye İhracat",
                "1200+ Aktif Müşteri",
                "Sürdürülebilir Üretim",
                "Özel Tasarım Hizmeti",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.06em] text-cream/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/hakkimizda" variant="outline-gold">
                {t.about.cta}
              </Button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
