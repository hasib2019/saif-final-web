import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faLightbulb, faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Our Company',
    aboutTitle: 'About Derown Technology',
    aboutText1: 'Derown Technology is a leading provider of innovative textile machinery and Industry 4.0 solutions. With decades of experience in the textile industry, we have established ourselves as pioneers in developing cutting-edge technology that enhances productivity, quality, and sustainability.',
    aboutText2: 'Our commitment to excellence and continuous innovation has made us a trusted partner for textile manufacturers worldwide. We work closely with our clients to understand their unique challenges and provide tailored solutions that meet their specific needs.',
    historyTitle: 'Our History',
    historyText: 'Founded in 1985, Derown Technology began as a small engineering workshop specializing in textile machinery repairs. Over the years, we have grown into a global company with a comprehensive range of products and services. Our journey has been marked by significant technological breakthroughs and a steadfast commitment to quality and customer satisfaction.',
    valuesTitle: 'Our Values',
    value1Title: 'Sustainability',
    value1Text: 'We are committed to developing environmentally friendly solutions that reduce waste and energy consumption.',
    value2Title: 'Innovation',
    value2Text: 'We continuously invest in research and development to stay at the forefront of technological advancements.',
    value3Title: 'Partnership',
    value3Text: 'We build long-term relationships with our clients based on trust, transparency, and mutual success.',
    value4Title: 'People',
    value4Text: 'We value our team members and foster a culture of collaboration, diversity, and continuous learning.',
    socialTitle: 'Social Responsibility',
    socialText: 'At Derown Technology, we believe in giving back to the communities where we operate. We support various social initiatives focused on education, environmental conservation, and community development.',
    initiativesTitle: 'Our Initiatives',
    initiative1: 'Educational programs for underprivileged children',
    initiative2: 'Reforestation projects in areas affected by deforestation',
    initiative3: 'Clean water initiatives in developing countries',
    initiative4: 'Support for local artisans and traditional textile crafts',
  },
  // Add more languages as needed
};

const Company = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="company-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">{t.aboutTitle}</h2>
              <p className="mb-4">{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/company-image.jpg" 
                alt="Derown Technology Headquarters" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title d-inline-block">{t.historyTitle}</h2>
              <p>{t.historyText}</p>
              
              {/* Timeline */}
              <div className="timeline mt-5">
                <div className="timeline-item">
                  <div className="timeline-year">1985</div>
                  <div className="timeline-content">
                    <h4>Foundation</h4>
                    <p>Derown Technology was founded as a small engineering workshop.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1995</div>
                  <div className="timeline-content">
                    <h4>Expansion</h4>
                    <p>Expanded operations and launched our first line of fabric spreading machines.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2005</div>
                  <div className="timeline-content">
                    <h4>Innovation</h4>
                    <p>Introduced computerized control systems for textile machinery.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h4>Industry 4.0</h4>
                    <p>Launched our first Industry 4.0 solutions for textile manufacturing.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h4>Global Presence</h4>
                    <p>Expanded to over 50 countries with a comprehensive range of products and services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">{t.valuesTitle}</h2>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faLeaf} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.value1Title}</h4>
                  <p className="card-text">{t.value1Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.value2Title}</h4>
                  <p className="card-text">{t.value2Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faHandshake} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.value3Title}</h4>
                  <p className="card-text">{t.value3Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faUsers} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.value4Title}</h4>
                  <p className="card-text">{t.value4Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Responsibility Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <h2 className="section-title">{t.socialTitle}</h2>
              <p>{t.socialText}</p>
              
              <h5 className="mt-4">{t.initiativesTitle}</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  {t.initiative1}
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  {t.initiative2}
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  {t.initiative3}
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  {t.initiative4}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img 
                src="/social-responsibility.jpg" 
                alt="Social Responsibility Initiatives" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;