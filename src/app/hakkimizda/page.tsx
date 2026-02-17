import type { Metadata } from "next";
import Image from "next/image";

import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1965 yılından beri Denizli’de faaliyet gösteren Tillem Tekstil; kumaş, perde ve ev tekstili alanında kaliteli ürünler sunar. Online satış imkanıyla hizmetinizdeyiz.",
};

const timeline = [
  {
    year: "1965",
    title: "Denizli'de Kuruluş",
    desc: "Tillem Tekstil, Denizli'de tekstil geleneğinin kalbinde üretime başladı.",
    image:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1400&q=80&auto=format&fit=crop",
  },
  {
    year: "1978",
    title: "Kurumsal Üretime Geçiş",
    desc: "Otel ve kurumsal projeler için ölçeklenebilir üretim altyapısı güçlendirildi.",
    image:
      "https://images.unsplash.com/photo-1582582429416-3d7d7cb6805a?w=1400&q=80&auto=format&fit=crop",
  },
  {
    year: "1995",
    title: "Yeni Koleksiyonlar",
    desc: "Ev tekstili ve kumaş koleksiyonlarıyla ürün gamı genişletildi.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop",
  },
  {
    year: "2005",
    title: "İhracat Hamlesi",
    desc: "Kalite standardizasyonu ile ihracat ağı büyütüldü, yeni pazarlara açılım başladı.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop",
  },
  {
    year: "2015",
    title: "Sertifikasyon & Sürdürülebilirlik",
    desc: "ISO 9001:2015 süreçleri ve sürdürülebilir üretim yaklaşımı güçlendirildi.",
    image:
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=1400&q=80&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "48+ Ülkeye İhracat",
    desc: "Global müşteri ağı 48+ ülkeye ulaştı, ürün kategorileri çeşitlendi.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-green-deep py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="relative z-[1] mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
          <RevealWrapper>
            <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Kurumsal
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,5vw,4.2rem)] font-light leading-[1.1] text-cream">
              Hakkımızda
            </h1>
            <div className="mt-4 text-[0.85rem] tracking-[0.06em] text-cream/55">
              Anasayfa / Hakkımızda
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="bg-bg py-24 [@media(min-width:768px)]:py-28">
        <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
          <RevealWrapper>
            <SectionTitle
              eyebrow="Tarihçe"
              title={
                <>
                  Denizli'den Dünyaya
                  <br />
                  <em className="italic text-green">Yolculuğumuz</em>
                </>
              }
              description="1965'ten bu yana kaliteyi, güveni ve sürdürülebilir yaklaşımı merkezimize alarak üretim yapıyoruz."
            />
          </RevealWrapper>

          <div className="mt-16 space-y-10">
            {timeline.map((t, idx) => (
              <RevealWrapper key={t.year} staggerDelay={0.08} staggerIndex={idx}>
                <div className="grid grid-cols-1 items-center gap-8 rounded-sm border border-green/10 bg-white/50 p-8 [@media(min-width:1024px)]:grid-cols-2">
                  <div className={idx % 2 === 0 ? "order-1" : "order-1 [@media(min-width:1024px)]:order-2"}>
                    <div className="inline-flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-green-pale">
                      <span className="h-px w-7 bg-green-pale" />
                      <span>{t.year}</span>
                    </div>
                    <div className="mt-4 font-display text-[1.9rem] font-normal text-text">
                      {t.title}
                    </div>
                    <p className="mt-3 text-[0.88rem] leading-[1.9] tracking-[0.02em] text-text-muted">
                      {t.desc}
                    </p>
                  </div>

                  <div className={idx % 2 === 0 ? "order-2" : "order-2 [@media(min-width:1024px)]:order-1"}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-24 [@media(min-width:768px)]:py-28">
        <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
          <div className="grid grid-cols-1 gap-6 [@media(min-width:1024px)]:grid-cols-2">
            {["Misyon", "Vizyon"].map((k, idx) => (
              <RevealWrapper key={k} staggerDelay={0.12} staggerIndex={idx}>
                <div className="rounded-sm border border-green/10 bg-white/50 p-10">
                  <div className="border-l-2 border-green pl-5">
                    <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-green">
                      {k}
                    </div>
                    <div className="mt-3 font-display text-[1.6rem] font-normal text-text">
                      {k === "Misyon"
                        ? "Kaliteyi standarda dönüştürmek"
                        : "Premium tekstilin global referansı olmak"}
                    </div>
                  </div>
                  <p className="mt-5 text-[0.88rem] leading-[1.9] tracking-[0.02em] text-text-muted">
                    {k === "Misyon"
                      ? "Her projede tutarlı kalite, doğru hammadde ve özenli işçilikle uzun ömürlü tekstil çözümleri üretmek."
                      : "Sürdürülebilir üretim ve tasarım odaklı yaklaşımımızla dünyada güvenilen bir premium tekstil markası olmak."}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 [@media(min-width:768px)]:py-28">
        <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
          <RevealWrapper>
            <SectionTitle
              eyebrow="Sertifikalar"
              title={
                <>
                  Standartlarımız
                  <br />
                  <em className="italic text-green">Kalite Belgeleri</em>
                </>
              }
              description="Üretim süreçlerimizi uluslararası standartlara göre yönetiyor, güvenilirliği belgelerle destekliyoruz."
            />
          </RevealWrapper>

          <div className="mt-16 grid grid-cols-2 gap-4 [@media(min-width:768px)]:grid-cols-4">
            {["ISO 9001:2015", "Oeko-Tex 100", "Quality", "Sustainability"].map(
              (c, idx) => (
                <RevealWrapper key={c} staggerDelay={0.08} staggerIndex={idx}>
                  <div className="flex aspect-square items-center justify-center rounded-sm border border-green/10 bg-white/50">
                    <span className="font-display text-[1rem] tracking-[0.12em] text-text/55">
                      {c}
                    </span>
                  </div>
                </RevealWrapper>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
