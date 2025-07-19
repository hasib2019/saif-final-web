import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Software from './pages/Software';
import Press from './pages/Press';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

// Context Providers
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CookieConsentProvider, useCookieConsent } from './context/CookieConsentContext';

// Main App component wrapped with context providers
function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <AppContent />
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

// App content component that uses the context values
function AppContent() {
  // Get language and cookie consent from context
  const { language } = useLanguage();
  const { cookieConsent, acceptCookies } = useCookieConsent();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/software" element={<Software />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      {cookieConsent === null && (
        <CookieConsent />
      )}
    </div>
  );
}

export default App;