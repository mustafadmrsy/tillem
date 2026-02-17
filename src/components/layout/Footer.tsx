"use client";

import Link from "next/link";

import { useT } from "@/i18n/useT";

export function Footer() {
  const t = useT();

  return (
    <footer className="bg-green-deep pt-20">
      <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.18),rgba(201,168,76,0.4),rgba(201,168,76,0.18),transparent)]" />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 [@media(min-width:520px)]:grid-cols-1 [@media(min-width:1024px)]:grid-cols-[1.8fr_1fr_1fr_1fr] [@media(min-width:1024px)]:gap-12 [@media(min-width:1024px)]:px-10 [@media(min-width:640px)]:grid-cols-2">
        <div>
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-normal tracking-[0.1em] text-cream">
              Tillem Tekstil
            </span>
            <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Est. 1965 — Denizli, Türkiye
            </span>
          </Link>

          <p className="mt-5 text-[0.8rem] leading-[1.8] tracking-[0.03em] text-cream/45">
            1965'ten bu yana tekstil sektörünün güvenilir çözüm ortağı.
            <br />
            Kalite, güven ve yenilikçi yaklaşımla hizmet veriyoruz.
          </p>

          <div className="mt-6 flex gap-2">
            {[
              { label: "in", href: "#" },
              { label: "ig", href: "#" },
              { label: "fb", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-sm border border-gold/20 text-[0.7rem] text-cream/45 transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {t.nav.products}
          </div>
          <ul className="mt-5 space-y-2.5">
            {[
              { label: "Otel Tekstili", href: "/urunler" },
              { label: "Banket & Catering", href: "/urunler" },
              { label: "Perde & Stor", href: "/urunler" },
              { label: "Ev Tekstili", href: "/urunler" },
              { label: "Kumaşlar", href: "/urunler" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[0.78rem] tracking-[0.04em] text-cream/45 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {t.nav.about}
          </div>
          <ul className="mt-5 space-y-2.5">
            {[
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Tarihçe", href: "/hakkimizda" },
              { label: "Sertifikalar", href: "/hakkimizda" },
              { label: "Kariyer", href: "/hakkimizda" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[0.78rem] tracking-[0.04em] text-cream/45 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {t.nav.contact}
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex gap-2 text-[0.76rem] leading-[1.6] tracking-[0.02em] text-cream/45">
              <span className="mt-1 inline-flex h-3.5 w-3.5 items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              Denizli OSB, Tekstilkent Cad. No:42 Denizli
            </div>

            <div className="flex gap-2 text-[0.76rem] leading-[1.6] tracking-[0.02em] text-cream/45">
              <span className="mt-1 inline-flex h-3.5 w-3.5 items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              +90 (258) 123 45 67
            </div>

            <div className="flex gap-2 text-[0.76rem] leading-[1.6] tracking-[0.02em] text-cream/45">
              <span className="mt-1 inline-flex h-3.5 w-3.5 items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              info@tillemtekstil.com
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 border-t border-gold/10 px-6 py-8 [@media(min-width:1024px)]:px-10 [@media(min-width:640px)]:flex-row [@media(min-width:640px)]:items-center [@media(min-width:640px)]:justify-between">
        <div className="text-[0.68rem] tracking-[0.06em] text-cream/30">
          {(t.nav.home as string) === "Home" ? "2024 Tillem Tekstil A.Ş. All rights reserved." : "2024 Tillem Tekstil A.Ş. Tüm hakları saklıdır."}
        </div>
        <div className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "#", enOnly: true },
            { label: "KVKK", href: "#" },
            { label: "Cookie Policy", href: "#", enOnly: true },
          ].filter((l) => {
            if (!l.enOnly) return true;
            return (t.nav.home as string) === "Home";
          }).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.65rem] tracking-[0.08em] text-cream/30 transition-colors hover:text-gold"
            >
              {l.label === "Privacy Policy" && (t.nav.home as string) !== "Home"
                ? "Gizlilik Politikası"
                : l.label === "Cookie Policy" && (t.nav.home as string) !== "Home"
                  ? "Çerez Politikası"
                  : l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
