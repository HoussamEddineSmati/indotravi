'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { ar } from '../translations/ar';

type Locale = 'en' | 'ar';
type Translations = typeof en;

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locale>('en');

    const t = locale === 'en' ? en : ar;
    const isRTL = locale === 'ar';

    useEffect(() => {
        document.documentElement.setAttribute('lang', locale);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }, [locale, isRTL]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>
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
