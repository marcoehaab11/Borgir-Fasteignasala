import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'is' | 'en';

interface Translations {
  [key: string]: {
    is: string;
    en: string;
  };
}

// Basic translations dictionary
export const translations: Translations = {
  'nav.home': { is: 'Heim', en: 'Home' },
  'nav.listings': { is: 'Eignir', en: 'Listings' },
  'nav.sell': { is: 'Selja Eign', en: 'Sell' },
  'nav.about': { is: 'Um Okkur', en: 'About Us' },
  'nav.contact': { is: 'Hafa Samband', en: 'Contact' },
  'nav.admin': { is: 'Stjórnborð', en: 'Admin' },
  'hero.title': { is: 'Finndu Þitt Draumaheimili Á Íslandi', en: 'Find Your Dream Home in Iceland' },
  'hero.subtitle': { is: 'Sérfræðingar í fasteignaviðskiptum með áherslu á persónulega þjónustu.', en: 'Real estate experts focusing on personalized service.' },
  'btn.valuation': { is: 'Fáðu frítt söluverðmat', en: 'Get a free valuation' },
  'btn.viewAll': { is: 'Skoða allar eignir', en: 'View all properties' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('is');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'is' ? 'en' : 'is'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
