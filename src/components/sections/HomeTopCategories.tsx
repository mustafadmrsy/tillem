"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const items = [
  {
    title: "Otel ve Restoran Ürünleri",
    href: "/urunler?cat=restoran",
    image:
      "https://static.wixstatic.com/media/ba9cbf_e8b544882c6e49c4b41548282a29d6ff~mv2.jpg/v1/fill/w_1868,h_1778,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nak%C4%B1%C5%9Fl%C4%B1Pe%C3%A7ete02.jpg",
  },
  {
    title: "Banket ve Catering Tekstili",
    href: "/urunler?cat=banket-catering",
    image:
      "https://static.wixstatic.com/media/nsplsh_cfe956fcd9a347e186ba55635ec6252c~mv2.jpg/v1/fill/w_1868,h_1778,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Junior%20REIS.jpg",
  },
  {
    title: "Havayolu Servis Tekstili",
    href: "/urunler",
    image:
      "https://static.wixstatic.com/media/nsplsh_cb29d1d016bf4b6895e0b45ebfa73a40~mv2.jpg/v1/fill/w_1868,h_1778,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Oskar%20Kadaksoo.jpg",
  },
];

export function HomeTopCategories() {
  return (
    <section className="bg-bg">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10 [@media(min-width:1024px)]:px-10 [@media(min-width:768px)]:py-14">
        <div className="mb-6 text-center font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-light tracking-[0.01em] text-green">
          Otel ve Restoran Tekstili
        </div>

        <div className="grid grid-cols-1 gap-4 [@media(min-width:768px)]:grid-cols-3 [@media(min-width:768px)]:gap-6">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className={cn(
                "group block overflow-hidden rounded-2xl",
                "border border-divider/40 bg-surface shadow-card"
              )}
            >
              <div className="relative aspect-[3/5] overflow-hidden">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-divider/40 bg-surface px-6 py-6 [@media(min-width:768px)]:px-7">
                <div className="font-display text-[1.2rem] font-normal leading-[1.25] tracking-[0.01em] text-text">
                  {it.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
