"use client";

import { RevealWrapper } from "@/components/ui/RevealWrapper";

const items = [
  { label: "Masa Örtüsü" },
  { label: "Sandalye Giydirme" },
  { label: "Peçete" },
  { label: "Bistro Giydirme" },
  { label: "Runner" },
  { label: "Streç Masa Giydirme" },
  { label: "Amerikan Servis" },
  { label: "Skirt Açık Büfe Örtüsü" },
  { label: "Mutfak Bezi/Torşon" },
  { label: "Konferans Masa Örtüsü" },
];

function ProductTypeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="18" y="10" width="28" height="44" rx="3" fill="#1E3D35" />
      <path
        d="M24 20h16M24 26h16M24 32h16M24 38h16"
        stroke="#EAEAEA"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProductTypes() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 [@media(min-width:1024px)]:px-10 [@media(min-width:768px)]:py-16">
        <RevealWrapper>
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-light tracking-[0.01em] text-green">
            Ürün Tipleri
          </h2>
        </RevealWrapper>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-sm border border-divider/60 bg-surface">
          {items.map((it, idx) => (
            <RevealWrapper
              key={it.label}
              staggerDelay={0.06}
              staggerIndex={idx}
              className="border-b border-divider/60 bg-surface p-6 [@media(min-width:520px)]:p-7 [&:nth-child(odd)]:border-r [&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-divider/60 bg-white">
                  <ProductTypeIcon />
                </div>
                <div className="text-[0.82rem] font-medium tracking-[0.02em] text-text">
                  {it.label}
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-divider/50">
                <div className="h-px w-full bg-divider/25" />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
