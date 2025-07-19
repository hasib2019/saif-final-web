import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    quickLinks: 'Quick Links',
    home: 'Home',
    company: 'Company',
    products: 'Products',
    software: 'Software',
    press: 'Press Releases',
    partners: 'Partners',
    contact: 'Contact',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    copyright: '© 2023 Derown Technology. All rights reserved.',
  },
  // Add more languages as needed
};

const Footer = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-lg-4 mb-4">
            <Link to="/" className="d-inline-block mb-3">
              <img 
                src="/logo-white.png" 
                alt="Derown Technology Logo" 
                height="40" 
                className="d-inline-block align-top"
              />
            </Link>
            <p className="mb-3">
              Derown Technology provides innovative textile machinery and Industry 4.0 solutions for the modern manufacturing environment.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">{t.quickLinks}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  {t.home}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/company" className="text-white text-decoration-none">
                  {t.company}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-white text-decoration-none">
                  {t.products}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/software" className="text-white text-decoration-none">
                  {t.software}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/press-releases" className="text-white text-decoration-none">
                  {t.press}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/partners" className="text-white text-decoration-none">
                  {t.partners}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">{t.contactUs}</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                123 Industrial Avenue, Tech Park, 12345
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +1 (234) 567-8900
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@derowntech.com
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="mb-0">{t.copyright}</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/privacy-policy" className="text-white text-decoration-none me-3">
              {t.privacyPolicy}
            </Link>
            <Link to="/cookie-policy" className="text-white text-decoration-none">
              {t.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;