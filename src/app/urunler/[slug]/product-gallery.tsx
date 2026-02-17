"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function ProductGallery(props: { images: string[]; title: string }) {
  const images = useMemo(() => props.images.filter(Boolean), [props.images]);
  const [active, setActive] = useState(0);

  const total = images.length;
  const counterLabel = `${active + 1} / ${total}`;

  return (
    <div className="grid gap-2 [grid-template-columns:72px_1fr] [@media(max-width:600px)]:[grid-template-columns:1fr]">
      <div className="flex flex-col gap-2 [@media(max-width:600px)]:flex-row [@media(max-width:600px)]:overflow-x-auto [@media(max-width:600px)]:pb-2">
        {images.slice(0, 8).map((img, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setActive(idx)}
              className={
                isActive
                  ? "relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[2px] border border-gold opacity-100"
                  : "relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[2px] border border-divider/40 opacity-60 transition-[opacity,border-color] hover:border-divider/70 hover:opacity-80"
              }
              aria-label={`${props.title} ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${props.title} ${idx + 1}`}
                fill
                sizes="72px"
                className="object-cover"
              />
              {isActive ? (
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-gold" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="relative aspect-[5/4] overflow-hidden rounded-[2px] bg-cream-light">
        <Image
          src={images[active]}
          alt={props.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] [transform:scale(1.03)] hover:scale-[1.07]"
        />

        <div className="absolute right-3 top-3 z-[3] flex h-[34px] w-[34px] items-center justify-center rounded-full border border-gold/20 bg-[#222222]/70 opacity-0 transition-[opacity,transform] duration-300 [transform:scale(0.85)] backdrop-blur hover:opacity-100 hover:[transform:scale(1)]">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="rgb(232 213 163)" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        </div>

        <div className="absolute bottom-3 right-3 z-[3] rounded-[1px] bg-[#222222]/55 px-2.5 py-1 text-[0.5rem] font-semibold tracking-[0.14em] text-cream/70 backdrop-blur">
          <span className="text-gold-light">{active + 1}</span> / {total}
        </div>
      </div>
    </div>
  );
}
