"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import fr from "../lang/fr.json";
import en from "../lang/en.json";

type Lang = "fr" | "en";
type Translations = typeof fr;

type TranslationContextType = {
  lang: Lang;
  t: Translations;
  switchLang: (lang: Lang) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const translations = lang === "fr" ? fr : en;

  const value = useMemo(
    () => ({
        lang,
        t: translations,
        switchLang,
    }),
    [lang, translations]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
