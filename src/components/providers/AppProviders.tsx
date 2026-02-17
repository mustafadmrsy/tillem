"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";

export function AppProviders(props: { children: React.ReactNode }) {
  return <LanguageProvider defaultLang="tr">{props.children}</LanguageProvider>;
}
