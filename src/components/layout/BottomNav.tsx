"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

const items = [
  {
    href: "/",
    label: "Anasayfa",
    icon: (
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-10.5z" />
    ),
  },
  {
    href: "/hakkimizda",
    label: "Hakkımızda",
    icon: (
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" />
    ),
  },
  {
    href: "/urunler",
    label: "Ürünler",
    icon: (
      <path d="M6 6h15l-1.5 9h-13L6 6zM6 6l-2-3H1" />
    ),
  },
  {
    href: "/iletisim",
    label: "İletişim",
    icon: (
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const t = useT();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/15 bg-green-deep/95 backdrop-blur-lg [@media(min-width:900px)]:hidden">
      <div className="mx-auto grid max-w-[640px] grid-cols-4 px-3 pt-2 [padding-bottom:calc(env(safe-area-inset-bottom,0px)+10px)]">
        {items.map((it) => {
          const active = pathname === it.href;
          const label =
            it.href === "/"
              ? t.bottomNav.home
              : it.href === "/hakkimizda"
                ? t.bottomNav.about
                : it.href === "/urunler"
                  ? t.bottomNav.products
                  : t.bottomNav.contact;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-sm px-2 py-2 text-center transition-colors",
                active ? "text-gold-light" : "text-cream/55 hover:text-cream"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  active
                    ? "border-gold/40 bg-gold/10"
                    : "border-cream/10 bg-transparent"
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {it.icon}
                </svg>
              </div>
              <div className="text-[0.55rem] font-semibold uppercase tracking-[0.22em]">
                {label}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
