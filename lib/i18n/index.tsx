"use client";

import * as React from "react";

import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";
import { ru } from "./dictionaries/ru";
import { zh } from "./dictionaries/zh";
import { locales, type Dict, type Locale } from "./types";

const dictionaries: Record<Locale, Dict> = { en, ja, zh, ko, de, fr, ru };

type I18n = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dict;
  /** Component description for a slug, falling back to English. */
  describe: (slug: string, fallback: string) => string;
};

const I18nContext = React.createContext<I18n>({
  locale: "en",
  setLocale: () => {},
  dict: en,
  describe: (_slug, fallback) => fallback,
});

function detectLocale(): Locale {
  const stored = localStorage.getItem("locale");
  if (stored && dictionaries[stored as Locale]) return stored as Locale;
  const nav = navigator.language.slice(0, 2);
  return dictionaries[nav as Locale] ? (nav as Locale) : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
    document.documentElement.lang = next;
  }, []);

  const dict = dictionaries[locale];

  const describe = React.useCallback(
    (slug: string, fallback: string) => dict.descriptions?.[slug] ?? fallback,
    [dict]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, dict, describe }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return React.useContext(I18nContext);
}

export { locales, type Dict, type Locale };
