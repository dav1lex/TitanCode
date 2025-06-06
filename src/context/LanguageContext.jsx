import { createContext, useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import plTranslations from '../locales/pl.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('pl') ? 'pl' : 'en';
    return savedLang || browserLang;
  });

  const [translations, setTranslations] = useState(locale === 'pl' ? plTranslations : enTranslations);

  useEffect(() => {
    setTranslations(locale === 'pl' ? plTranslations : enTranslations);
    localStorage.setItem('language', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLanguage = () => {
    setLocale(prevLang => prevLang === 'en' ? 'pl' : 'en');
  };

  const t = (key) => {
    return translations[key] || key;
  };

  // Add locale to t function for easy access
  t.locale = locale;

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 