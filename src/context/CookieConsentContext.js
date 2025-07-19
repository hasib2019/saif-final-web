import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the cookie consent context
const CookieConsentContext = createContext();

// Cookie consent provider component
export const CookieConsentProvider = ({ children }) => {
  // Initialize consent state from localStorage or default to null (not decided yet)
  const [cookieConsent, setCookieConsent] = useState(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    return savedConsent ? JSON.parse(savedConsent) : null;
  });

  // Update localStorage when consent changes
  useEffect(() => {
    if (cookieConsent !== null) {
      localStorage.setItem('cookieConsent', JSON.stringify(cookieConsent));
      
      // If consent is given, you could initialize analytics here
      if (cookieConsent === true) {
        initializeAnalytics();
      }
    }
  }, [cookieConsent]);

  // Function to accept cookies
  const acceptCookies = () => {
    setCookieConsent(true);
  };

  // Function to decline cookies
  const declineCookies = () => {
    setCookieConsent(false);
  };

  // Function to reset cookie consent (for testing or when policies change)
  const resetCookieConsent = () => {
    localStorage.removeItem('cookieConsent');
    setCookieConsent(null);
  };

  // Placeholder function for initializing analytics
  const initializeAnalytics = () => {
    // In a real implementation, you would initialize your analytics service here
    // For example:
    // if (window.gtag) {
    //   window.gtag('consent', 'update', {
    //     'analytics_storage': 'granted'
    //   });
    // }
    console.log('Analytics initialized after consent');
  };

  // Context value
  const contextValue = {
    cookieConsent,
    acceptCookies,
    declineCookies,
    resetCookieConsent
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
};

// Custom hook to use the cookie consent context
export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export default CookieConsentContext;