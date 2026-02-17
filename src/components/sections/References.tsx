"use client";

import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/useT";

const brands = [
  "Hilton Hotels",
  "Marriott",
  "Rixos",
  "Sheraton",
  "Accor Group",
  "Wyndham",
  "Holiday Inn",
  "Radisson Blu",
  "Movenpick",
  "Swissôtel",
];

export function References() {
  const t = useT();
  const items = [...brands, ...brands];

  return (
    <section className="bg-bg py-24 [@media(min-width:768px)]:py-28">
      <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
        <RevealWrapper>
          <SectionTitle
            eyebrow={t.references.eyebrow}
            title={
              <>
                {t.references.title1}
                <em className="italic text-green">{t.references.titleEm}</em>
              </>
            }
            center
          />
        </RevealWrapper>
      </div>

      <div className="marquee relative mt-14 border-y border-green/10 bg-white/50">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-28 bg-[linear-gradient(to_right,#F6F8F4,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-28 bg-[linear-gradient(to_left,#F6F8F4,transparent)]" />

        <div className="marquee__track items-center">
          {items.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="flex h-20 w-[180px] flex-none items-center justify-center border-r border-green/10 px-6"
            >
              <span className="font-display text-[1rem] font-normal tracking-[0.12em] text-text/35 transition-colors hover:text-green">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
