"use client";

import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/useT";

export function Process() {
  const t = useT();

  const steps = [
    {
      num: "01",
      title: t.process.steps.s1Title,
      desc: t.process.steps.s1Desc,
      icon: (
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      ),
    },
    {
      num: "02",
      title: t.process.steps.s2Title,
      desc: t.process.steps.s2Desc,
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      ),
    },
    {
      num: "03",
      title: t.process.steps.s3Title,
      desc: t.process.steps.s3Desc,
      icon: (
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      ),
    },
    {
      num: "04",
      title: t.process.steps.s4Title,
      desc: t.process.steps.s4Desc,
      icon: <path d="M5 12h14M12 5l7 7-7 7" />,
    },
  ];

  return (
    <section className="bg-cream-light py-24 [@media(min-width:768px)]:py-28">
      <div className="mx-auto max-w-[1280px] px-6 [@media(min-width:1024px)]:px-10">
        <RevealWrapper>
          <SectionTitle
            eyebrow={t.process.eyebrow}
            title={
              <>
                {t.process.title1}
                <em className="italic text-green">{t.process.titleEm}</em>
                <br />
                {t.process.title3}
              </>
            }
          />
        </RevealWrapper>

        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-sm border border-green/10 bg-white/40 shadow-[0_18px_60px_rgba(0,0,0,0.06)] [@media(min-width:768px)]:grid-cols-2 [@media(min-width:1024px)]:grid-cols-4">
          {steps.map((s, idx) => (
            <RevealWrapper
              key={s.num}
              from={idx % 2 === 0 ? "left" : "right"}
              className="border-b border-green/10 bg-white/55 p-10 transition-colors hover:bg-white/80 [@media(min-width:1024px)]:border-b-0 [@media(min-width:1024px)]:border-r"
              staggerDelay={0.1}
              staggerIndex={idx}
            >
              <div className="font-display text-[3.5rem] font-light leading-none text-green/10">
                {s.num}
              </div>
              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-green transition-transform duration-300 hover:scale-[1.08]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="rgb(232 213 163)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  {s.icon}
                </svg>
              </div>
              <div className="mt-5 font-display text-[1.3rem] font-normal text-text">
                {s.title}
              </div>
              <p className="mt-2 text-[0.78rem] leading-[1.8] tracking-[0.02em] text-text-muted">
                {s.desc}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
