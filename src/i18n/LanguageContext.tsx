import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import { translations } from "./translations";
import type { Language } from "./translations";

type TranslationKeys = keyof typeof translations.en;

type LanguageContextType = {
  language: Language;
  direction: "ltr" | "rtl";
  t: (key: TranslationKeys) => string;
  toggleLanguage: () => void;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>("en");

  const direction: "ltr" | "rtl" =
    language === "ar" ? "rtl" : "ltr";

  const toggleLanguage = () => {
    setLanguage((current: Language) =>
      current === "en" ? "ar" : "en"
    );
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const t = (key: TranslationKeys): string => {
    return translations[language][key];
  };

  const value: LanguageContextType = useMemo(
    () => ({
      language,
      direction,
      t,
      toggleLanguage,
    }),
    [language, direction]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}