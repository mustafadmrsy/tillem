"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";

import { dictionaries, type Dictionary, type Language } from "@/i18n/dictionaries";

type LanguageContextValue = {
  lang: Language;
  dict: Dictionary;
  setLang: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tillem.lang";

export function LanguageProvider(props: {
  children: React.ReactNode;
  defaultLang?: Language;
}) {
  const { children, defaultLang = "tr" } = props;

  const [lang, setLangState] = useState<Language>(defaultLang);

  useEffect(() => {
    try {
      const urlLang = new URLSearchParams(window.location.search).get(
        "lang"
      ) as Language | null;
      if (urlLang && urlLang in dictionaries) {
        setLangState(urlLang);
        window.localStorage.setItem(STORAGE_KEY, urlLang);
        return;
      }

      const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored && stored in dictionaries) setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);

      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url.toString());
    } catch {
      // ignore
    }
  }, []);

  const dict = useMemo(() => dictionaries[lang], [lang]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({ lang, dict, setLang }), [
    lang,
    dict,
    setLang,
  ]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
