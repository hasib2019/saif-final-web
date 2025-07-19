import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the language context
const LanguageContext = createContext();

// Available languages
const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italiano' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' }
];

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Initialize language state from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    // You could also update the HTML lang attribute here
    document.documentElement.lang = language;
  }, [language]);

  // Function to change the language
  const changeLanguage = (langCode) => {
    if (availableLanguages.some(lang => lang.code === langCode)) {
      setLanguage(langCode);
    }
  };

  // Context value
  const contextValue = {
    language,
    changeLanguage,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;