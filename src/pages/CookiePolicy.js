import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Cookie Policy',
    lastUpdated: 'Last Updated: January 1, 2023',
    introduction: 'Introduction',
    introText: 'This Cookie Policy explains how Derown Technology uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.',
    whatAreCookies: 'What Are Cookies',
    whatAreCookiesText: 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.',
    whyWeUse: 'Why We Use Cookies',
    whyWeUseText: 'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.',
    typesOfCookies: 'Types of Cookies We Use',
    cookieTypes: [
      'Essential Cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.',
      'Performance Cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.',
      'Analytics Cookies: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.',
      'Marketing Cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.'
    ],
    howToManage: 'How to Manage Cookies',
    howToManageText: 'You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.',
    browserSettings: 'Browser Cookie Settings',
    browserSettingsText: 'Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.',
    browserInstructions: 'Find out how to manage cookies on popular browsers:',
    browsers: [
      'Google Chrome',
      'Microsoft Edge',
      'Mozilla Firefox',
      'Microsoft Internet Explorer',
      'Opera',
      'Apple Safari'
    ],
    updates: 'Updates to This Cookie Policy',
    updatesText: 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.',
    questions: 'Questions and Contact Information',
    questionsText: 'If you have any questions about our use of cookies or other technologies, please email us at:',
    contactEmail: 'cookies@derowntech.com'
  },
  // Add more languages as needed
};

const CookiePolicy = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="cookie-policy-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="text-muted">{t.lastUpdated}</p>
        </div>
      </section>
      
      {/* Cookie Policy Content */}
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
              <h2 className="h4 mb-3">{t.whatAreCookies}</h2>
              <p>{t.whatAreCookiesText}</p>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.whyWeUse}</h2>
              <p>{t.whyWeUseText}</p>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.typesOfCookies}</h2>
              <ul className="list-group list-group-flush mt-3">
                {t.cookieTypes.map((item, index) => (
                  <li key={index} className="list-group-item bg-transparent">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.howToManage}</h2>
              <p>{t.howToManageText}</p>
              <h3 className="h5 mt-4">{t.browserSettings}</h3>
              <p>{t.browserSettingsText}</p>
              <p>{t.browserInstructions}</p>
              <ul className="list-group list-group-flush mt-3">
                {t.browsers.map((browser, index) => (
                  <li key={index} className="list-group-item bg-transparent">{browser}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.updates}</h2>
              <p>{t.updatesText}</p>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.questions}</h2>
              <p>{t.questionsText}</p>
              <p><strong>{t.contactEmail}</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;