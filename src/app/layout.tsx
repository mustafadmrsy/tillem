import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: "Tillem Tekstil", template: "%s | Tillem Tekstil" },
  description:
    "1965’ten beri Denizli’de kumaş, perde ve tekstil ürünleri. Online mağazamızdan kolayca sipariş verin.",
  keywords: ["tekstil", "otel tekstili", "denizli", "kumaş", "perde"],
  metadataBase: new URL("https://tillemtekstil.com"),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/?lang=tr",
      "en-US": "/?lang=en",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Tillem Tekstil",
    url: "https://tillemtekstil.com",
    title: "Tillem Tekstil",
    description:
      "1965’ten beri Denizli’de kumaş, perde ve tekstil ürünleri. Online mağazamızdan kolayca sipariş verin.",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "Tillem Tekstil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tillem Tekstil",
    description:
      "1965’ten beri Denizli’de kumaş, perde ve tekstil ürünleri. Online mağazamızdan kolayca sipariş verin.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased font-body bg-bg text-text`}
      >
        <AppProviders>
          <Header />
          <main className="pt-[68px] pb-28 [@media(min-width:900px)]:pb-0 [padding-bottom:calc(env(safe-area-inset-bottom,0px)+112px)]">
            {children}
          </main>
          <BottomNav />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
