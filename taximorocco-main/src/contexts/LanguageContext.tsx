import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.booking': 'Réservation',
    'nav.contact': 'Contact',
    'hero.title': 'Voyagez en toute sérénité au Maroc',
    'hero.subtitle': 'Service de taxi professionnel pour vos déplacements partout au Maroc. Réservez facilement et voyagez confortablement.',
    'hero.book': 'Réserver maintenant',
    'hero.call': 'Nous appeler',
    // Add more translations as needed
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.booking': 'Booking',
    'nav.contact': 'Contact',
    'hero.title': 'Travel with peace of mind in Morocco',
    'hero.subtitle': 'Professional taxi service for your travels throughout Morocco. Book easily and travel comfortably.',
    'hero.book': 'Book Now',
    'hero.call': 'Call Us',
    // Add more translations as needed
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات عنا',
    'nav.booking': 'الحجز',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'سافر براحة بال في المغرب',
    'hero.subtitle': 'خدمة تاكسي احترافية لتنقلاتك في جميع أنحاء المغرب. احجز بسهولة وسافر براحة.',
    'hero.book': 'احجز الآن',
    'hero.call': 'اتصل بنا',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};