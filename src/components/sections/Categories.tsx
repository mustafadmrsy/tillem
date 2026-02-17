"use client";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { useLanguage, useT } from "@/i18n/useT";

export function Categories() {
  const t = useT();
  const { lang } = useLanguage();
  const items = categories.filter((c) => c.id !== "restoran").slice(0, 5);

  return (
    <section className="bg-bg py-24 [@media(min-width:768px)]:py-28">
      <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
        <RevealWrapper>
          <SectionTitle
            eyebrow={t.categories.eyebrow}
            title={
              <>
                {t.categories.title.split("Tekstil")[0]}
                <em className="italic text-[#222222]">Tekstil</em>
                {t.categories.title.split("Tekstil")[1]}
              </>
            }
            description={t.categories.desc}
          />
        </RevealWrapper>

        <div className="mt-16 grid gap-[12px] [grid-template-columns:1fr] [@media(min-width:640px)]:[grid-template-columns:1fr_1fr] [@media(min-width:640px)]:[grid-template-rows:360px_260px_260px] [@media(min-width:1024px)]:[grid-template-columns:repeat(3,1fr)] [@media(min-width:1024px)]:[grid-template-rows:300px_300px]">
          {items.map((c, idx) => (
            <RevealWrapper
              key={c.id}
              from={idx % 2 === 0 ? "left" : "right"}
              staggerDelay={0.1}
              staggerIndex={idx}
              className="h-full"
            >
              <CategoryCard
                image={c.image}
                title={lang === "en" ? c.titleEn ?? c.title : c.title}
                description={
                  lang === "en" ? c.descriptionEn ?? c.description : c.description
                }
                badge={lang === "en" ? c.badgeEn ?? c.badge : c.badge}
                href={c.href}
                featured={idx === 0}
                className={
                  idx === 0
                    ? "h-[300px] [@media(min-width:640px)]:h-full [@media(min-width:640px)]:[grid-column:1/3] [@media(min-width:1024px)]:[grid-column:1] [@media(min-width:1024px)]:[grid-row:1/3]"
                    : "h-[220px] [@media(min-width:640px)]:h-full"
                }
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
