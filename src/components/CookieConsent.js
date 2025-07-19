import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCookieConsent } from '../context/CookieConsentContext';

// Language translations
const translations = {
  en: {
    title: 'Cookie Consent',
    message: 'We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.',
    accept: 'Accept',
    learnMore: 'Learn More',
  },
  // Add more languages as needed
};

const CookieConsent = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get cookie consent functions from context
  const { acceptCookies, declineCookies } = useCookieConsent();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="cookie-consent position-fixed bottom-0 start-0 end-0 bg-dark text-white p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h5>{t.title}</h5>
            <p className="mb-lg-0">{t.message}</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <Link to="/cookie-policy" className="btn btn-outline-light me-2">
              {t.learnMore}
            </Link>
            <button 
              className="btn btn-success" 
              onClick={acceptCookies}
              style={{ backgroundColor: '#3f7601', borderColor: '#3f7601' }}
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;