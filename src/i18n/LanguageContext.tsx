import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import { translations } from "./translations";
import type { Language } from "./translations";

type LanguageContextType = {
  language: Language;
  direction: "rtl" | "ltr";
  t: (key: keyof typeof translations.en) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((current: Language) =>
      current === "en" ? "ar" : "en"
    );
  };

  const direction: "rtl" | "ltr" =
    language === "ar" ? "rtl" : "ltr";

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      direction,

      t: (key) => {
        return translations[language][key] ?? key;
      },

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