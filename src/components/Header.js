import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    home: 'Home',
    company: 'Company',
    products: 'Products',
    software: 'Software',
    press: 'Press Releases',
    partners: 'Partners',
    contact: 'Contact',
  },
  // Add more languages as needed
};

const Header = () => {
  const { language, changeLanguage, availableLanguages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Toggle language dropdown
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  
  // Handle language selection
  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };
  
  return (
    <header className={`fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <Link to="/" className="navbar-brand">
            <img 
              src="/logo.png" 
              alt="Derown Technology Logo" 
              height="40" 
              className="d-inline-block align-top"
            />
          </Link>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
          
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/company" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.company}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.products}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/software" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.software}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/press-releases" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.press}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/partners" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.partners}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.contact}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button 
                  className="nav-link dropdown-toggle border-0 bg-transparent" 
                  onClick={toggleLanguageDropdown}
                >
                  <FontAwesomeIcon icon={faGlobe} className="me-1" />
                  {language.toUpperCase()}
                </button>
                <ul className={`dropdown-menu dropdown-menu-end ${isLanguageDropdownOpen ? 'show' : ''}`}>
                  {availableLanguages.map((lang) => (
                    <li key={lang.code}>
                      <button 
                        className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                        onClick={() => handleLanguageSelect(lang.code)}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;