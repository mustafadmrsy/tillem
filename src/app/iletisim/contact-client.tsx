"use client";

import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/useT";

export function ContactClient() {
  const t = useT();

  return (
    <section className="bg-bg py-24 [@media(min-width:768px)]:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:px-10">
        <div>
          <RevealWrapper>
            <SectionTitle
              eyebrow={t.contact.eyebrow}
              title={
                <>
                  {t.contact.titleLine1}
                  <br />
                  <em className="italic text-green">{t.contact.titleEm}</em>
                </>
              }
              description={t.contact.desc}
            />
          </RevealWrapper>

          <div className="mt-10 space-y-4 rounded-sm border border-green/10 bg-surface/50 p-8">
            {["Adres", "Telefon", "E-posta", "Çalışma Saatleri"].map((label, idx) => (
              <RevealWrapper key={label} staggerDelay={0.08} staggerIndex={idx}>
                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-green">
                    {label}
                  </div>
                  <div className="text-[0.88rem] leading-[1.8] tracking-[0.02em] text-text-muted">
                    {label === "Adres"
                      ? "Denizli OSB, Tekstilkent Cad. No:42, Denizli"
                      : label === "Telefon"
                        ? "+90 (258) 123 45 67"
                        : label === "E-posta"
                          ? "info@tillemtekstil.com"
                          : "Pzt-Cuma 09:00–18:00"}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        <RevealWrapper staggerDelay={0.1} staggerIndex={1}>
          <div className="rounded-sm border border-gold/25 bg-surface/40 p-8">
            <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {t.contact.formTitle}
            </div>
            <form className="mt-6 grid grid-cols-1 gap-3 [@media(min-width:520px)]:grid-cols-2">
              <Input label={t.contact.fields.name} name="name" />
              <Input label={t.contact.fields.phone} name="phone" />
              <Input label={t.contact.fields.email} name="email" type="email" />
              <Input label={t.contact.fields.subject} name="subject" />
              <div className="[grid-column:1/-1]">
                <label className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-green">
                  {t.contact.fields.message}
                </label>
                <textarea className="mt-2 h-32 w-full rounded-sm border border-gold/30 bg-transparent px-4 py-3 text-[0.85rem] leading-[1.7] outline-none transition-colors focus:border-gold" />
              </div>
              <div className="[grid-column:1/-1] pt-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-[#222222] px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  {t.contact.send}
                </button>
              </div>
            </form>

            <div className="mt-8 overflow-hidden rounded-sm border border-green/10">
              <iframe
                title="Tillem Tekstil Konum"
                loading="lazy"
                className="h-64 w-full"
                src="https://www.google.com/maps?q=Denizli%20OSB%20Tekstilkent%20Cad.%20No%3A42&output=embed"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function Input(props: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-green">
        {props.label}
      </label>
      <input
        name={props.name}
        type={props.type ?? "text"}
        className="mt-2 w-full rounded-sm border border-gold/30 bg-transparent px-4 py-3 text-[0.85rem] outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
