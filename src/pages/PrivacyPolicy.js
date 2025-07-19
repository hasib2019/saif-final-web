import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 1, 2023',
    introduction: 'Introduction',
    introText: 'At Derown Technology, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
    informationWeCollect: 'Information We Collect',
    informationText: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
    infoTypes: [
      'Identity Data includes first name, last name, username or similar identifier.',
      'Contact Data includes billing address, delivery address, email address and telephone numbers.',
      'Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.',
      'Usage Data includes information about how you use our website, products and services.',
      'Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.'
    ],
    howWeUseInfo: 'How We Use Your Information',
    howWeUseText: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
    useCases: [
      'Where we need to perform the contract we are about to enter into or have entered into with you.',
      'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
      'Where we need to comply with a legal obligation.'
    ],
    dataSecurity: 'Data Security',
    dataSecurityText: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.',
    yourRights: 'Your Rights',
    yourRightsText: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
    rightsList: [
      'Request access to your personal data.',
      'Request correction of your personal data.',
      'Request erasure of your personal data.',
      'Object to processing of your personal data.',
      'Request restriction of processing your personal data.',
      'Request transfer of your personal data.',
      'Right to withdraw consent.'
    ],
    contactUs: 'Contact Us',
    contactText: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:',
    companyName: 'Derown Technology',
    companyAddress: '123 Technology Park, Industrial Zone, 12345 City, Country',
    companyEmail: 'privacy@derowntech.com',
    companyPhone: '+1 (123) 456-7890'
  },
  // Add more languages as needed
};

const PrivacyPolicy = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="privacy-policy-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="text-muted">{t.lastUpdated}</p>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.introduction}</h2>
              <p>{t.introText}</p>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.informationWeCollect}</h2>
              <p>{t.informationText}</p>
              <ul className="list-group list-group-flush mt-3">
                {t.infoTypes.map((item, index) => (
                  <li key={index} className="list-group-item bg-transparent">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.howWeUseInfo}</h2>
              <p>{t.howWeUseText}</p>
              <ul className="list-group list-group-flush mt-3">
                {t.useCases.map((item, index) => (
                  <li key={index} className="list-group-item bg-transparent">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.dataSecurity}</h2>
              <p>{t.dataSecurityText}</p>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.yourRights}</h2>
              <p>{t.yourRightsText}</p>
              <ul className="list-group list-group-flush mt-3">
                {t.rightsList.map((item, index) => (
                  <li key={index} className="list-group-item bg-transparent">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.contactUs}</h2>
              <p>{t.contactText}</p>
              <address className="mt-3">
                <strong>{t.companyName}</strong><br />
                {t.companyAddress}<br />
                <abbr title="Email">E:</abbr> {t.companyEmail}<br />
                <abbr title="Phone">P:</abbr> {t.companyPhone}
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;