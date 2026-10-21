'use client';

import {createContext, useContext, useEffect, useMemo, useState} from 'react';

export type Locale = 'fr' | 'en';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({children}: {children: React.ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    const saved = window.localStorage.getItem('linagraphy-locale');
    if (saved === 'en' || saved === 'fr') {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem('linagraphy-locale', next);
    document.cookie = `linagraphy-locale=${next};path=/;max-age=31536000;samesite=lax`;
  };

  const value = useMemo(() => ({locale, setLocale}), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export function Bilingual({fr, en}: {fr: React.ReactNode; en: React.ReactNode}) {
  const {locale} = useLanguage();
  return <>{locale === 'en' ? en : fr}</>;
}
