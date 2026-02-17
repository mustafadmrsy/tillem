"use client";

import { useContext } from "react";

import { LanguageContext } from "@/i18n/LanguageProvider";

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { dict } = useLanguage();
  return dict;
}
