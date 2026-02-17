"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { useLanguage, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useT();

  const navLinks = useMemo(
    () => [
      { href: "/", label: t.nav.home },
      { href: "/hakkimizda", label: t.nav.about },
      { href: "/urunler", label: t.nav.products },
      { href: "/iletisim", label: t.nav.contact },
    ],
    [t]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onDoc = () => setLangOpen(false);
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [langOpen]);

  const headerCls = useMemo(
    () =>
      cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-400",
        scrolled
          ? "bg-green-deep/95 shadow-[0_4px_32px_rgba(0,0,0,0.22)] backdrop-blur-lg"
          : "bg-green"
      ),
    [scrolled]
  );

  return (
    <header className={headerCls}>
      <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#c9a84c,#e8d5a3,#c9a84c,transparent)]" />

      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 [@media(min-width:1024px)]:px-10">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-[1.45rem] font-normal tracking-[0.1em] text-cream">
              Tillem Tekstil
            </span>
            <span className="mt-[3px] text-[0.5rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Est. 1965 — Denizli
            </span>
          </Link>

          <div className="hidden h-[22px] w-px bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.3),transparent)] [@media(min-width:900px)]:block" />

          <nav className="hidden items-center gap-1 [@media(min-width:900px)]:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative overflow-hidden px-[15px] py-[6px] text-[0.67rem] font-medium uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-cream/60"
              >
                <span className="relative z-[1]">{l.label}</span>
                <span className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center text-[0.67rem] font-medium uppercase tracking-[0.2em] text-gold [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-400 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:[clip-path:inset(0%_0_0_0)]">
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              className="inline-flex items-center gap-1.5 rounded-sm border border-gold/30 bg-transparent px-3 py-1.5 text-[0.64rem] font-medium uppercase tracking-[0.14em] text-cream/60 transition-colors hover:border-gold hover:text-gold-light"
            >
              <span className="text-[0.85rem] leading-none">
                {lang === "tr" ? "🇹🇷" : "🇬🇧"}
              </span>
              <span>{lang.toUpperCase()}</span>
              <svg
                viewBox="0 0 24 24"
                className={cn(
                  "h-2.5 w-2.5 transition-transform",
                  langOpen && "rotate-180"
                )}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {langOpen ? (
              <div className="absolute right-0 top-[calc(100%+10px)] w-28 overflow-hidden rounded-sm border border-gold/30 bg-green-deep/95 backdrop-blur">
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/75 hover:bg-gold/10"
                  onClick={() => {
                    setLang("tr");
                    setLangOpen(false);
                  }}
                >
                  <span className="mr-2">🇹🇷</span>
                  TR
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/75 hover:bg-gold/10"
                  onClick={() => {
                    setLang("en");
                    setLangOpen(false);
                  }}
                >
                  <span className="mr-2">🇬🇧</span>
                  EN
                </button>
              </div>
            ) : null}
          </div>

          <Link
            href="/iletisim"
            className="group relative hidden overflow-hidden rounded-sm border border-gold/50 px-5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-gold-light transition-colors hover:border-gold [@media(min-width:520px)]:inline-flex"
          >
            <span className="absolute inset-0 translate-x-[-105%] bg-gold transition-transform duration-400 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            <span className="relative z-[1] transition-colors group-hover:text-green-deep">
              {t.nav.cta}
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.18),rgba(201,168,76,0.4),rgba(201,168,76,0.18),transparent)] [@media(min-width:900px)]:block" />
    </header>
  );
}
