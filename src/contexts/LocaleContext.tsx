import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Locale } from '@/types';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children, initialLocale = 'en' }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translationData, setTranslationData] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const common = await import(`@/i18n/locales/${locale}/common.json`);
        setTranslationData(common.default || common);
      } catch (error) {
        console.warn(`Failed to load translations for ${locale}, falling back to English`);
        if (locale !== 'en') {
          const fallback = await import('@/i18n/locales/en/common.json');
          setTranslationData(fallback.default || fallback);
        }
      }
    };
    loadTranslations();
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('kfs-locale', newLocale);
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translationData;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [translationData]);

  useEffect(() => {
    const saved = localStorage.getItem('kfs-locale') as Locale;
    if (saved && (saved === 'en' || saved === 'rw')) {
      setLocaleState(saved);
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
