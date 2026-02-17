"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { useLanguage, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const headerCls = useMemo(
    () =>
      cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-400",
        scrolled
          ? "bg-header/95 shadow-[0_4px_32px_rgba(0,0,0,0.12)] backdrop-blur-lg"
          : "bg-header"
      ),
    [scrolled]
  );

  return (
    <header className={headerCls}>
      <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#3A5F55,transparent)]" />

      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 [@media(min-width:1024px)]:px-10">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-[1.45rem] font-normal tracking-[0.1em] text-[#222222]">
              Tillem Tekstil
            </span>
            <span className="mt-[3px] text-[0.5rem] font-semibold uppercase tracking-[0.32em] text-text/70">
              Est. 1965 — Denizli
            </span>
          </Link>

          <div className="hidden h-[22px] w-px bg-[linear-gradient(to_bottom,transparent,rgba(58,95,85,0.35),transparent)] [@media(min-width:900px)]:block" />

          <nav className="hidden items-center gap-1 [@media(min-width:900px)]:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative overflow-hidden px-[15px] py-[6px] text-[0.67rem] font-medium uppercase tracking-[0.2em] text-text/80 transition-colors hover:text-text"
              >
                <span className="relative z-[1]">{l.label}</span>
                <span className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center text-[0.67rem] font-medium uppercase tracking-[0.2em] text-green [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-400 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:[clip-path:inset(0%_0_0_0)]">
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
              className="inline-flex items-center gap-1.5 rounded-sm border border-divider bg-transparent px-3 py-1.5 text-[0.64rem] font-medium uppercase tracking-[0.14em] text-text/80 transition-colors hover:border-text/40 hover:text-text"
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
              <div className="absolute right-0 top-[calc(100%+10px)] w-28 overflow-hidden rounded-sm border border-divider bg-header/95 backdrop-blur">
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.18em] text-text/80 hover:bg-black/5"
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
                  className="block w-full px-4 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.18em] text-text/80 hover:bg-black/5"
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

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-sm border border-divider bg-transparent px-3 py-2 text-[0.64rem] font-medium uppercase tracking-[0.14em] text-text/80 transition-colors hover:border-text/40 hover:text-text [@media(min-width:900px)]:hidden"
            aria-label="Menü"
            aria-expanded={mobileOpen}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
            <span>Menü</span>
          </button>

          <Link
            href="/iletisim"
            className="group relative hidden overflow-hidden rounded-sm bg-[#222222] px-5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-white transition-[filter,transform] duration-300 hover:brightness-110 hover:-translate-y-0.5 [@media(min-width:520px)]:inline-flex"
          >
            <span className="relative z-[1]">
              {t.nav.cta}
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden h-px bg-[linear-gradient(90deg,transparent,rgba(58,95,85,0.20),rgba(58,95,85,0.45),rgba(58,95,85,0.20),transparent)] [@media(min-width:900px)]:block" />

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] [@media(min-width:900px)]:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/25"
            onClick={() => setMobileOpen(false)}
            aria-label="Kapat"
          />

          <div className="absolute inset-x-0 top-[68px] origin-top animate-slide-down bg-header shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            <div className="mx-auto max-w-[1280px] px-6 py-5 [@media(min-width:1024px)]:px-10">
              <nav className="grid grid-cols-1 gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-sm border border-divider/60 bg-white/55 px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-text hover:bg-white/70"
                  >
                    <span>{l.label}</span>
                    <span className="text-green">→</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-4">
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-sm bg-[#222222] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
