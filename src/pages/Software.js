import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faRobot, faCogs, faChartLine, faWifi, faCloud, faMobileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Software Solutions',
    pageSubtitle: 'Industry 4.0 technology for the modern manufacturing environment',
    introTitle: 'Transforming Textile Manufacturing',
    introText1: 'At Derown Technology, we are at the forefront of the Industry 4.0 revolution in textile manufacturing. Our software solutions integrate seamlessly with our machinery to create a connected, intelligent production environment.',
    introText2: 'From real-time monitoring and predictive maintenance to AI-powered quality control and remote diagnostics, our digital solutions help manufacturers optimize their operations, reduce downtime, and improve product quality.',
    etherCATTitle: 'EtherCAT Technology',
    etherCATText: 'Our machines utilize EtherCAT (Ethernet for Control Automation Technology) for real-time control and communication. This industrial protocol ensures high-speed, precise synchronization of all machine components, resulting in improved performance and reliability.',
    iotTitle: 'IoT Dashboards',
    iotText: 'Our IoT dashboards provide real-time visibility into your production metrics and machine performance. Monitor key parameters, track productivity, and identify bottlenecks from anywhere, on any device.',
    aiTitle: 'AI Vision Systems',
    aiText: 'Our advanced vision systems use artificial intelligence to detect defects, analyze patterns, and ensure consistent quality. These systems can identify issues that might be missed by the human eye, reducing waste and improving product quality.',
    remoteTitle: 'Remote Diagnostics',
    remoteText: 'Our remote diagnostic capabilities allow our technicians to troubleshoot and resolve issues without the need for on-site visits. This reduces downtime and ensures your machines are operating at peak efficiency.',
    featuresTitle: 'Key Features',
    feature1: 'Real-time monitoring and control',
    feature2: 'Predictive maintenance alerts',
    feature3: 'Production analytics and reporting',
    feature4: 'Energy consumption optimization',
    feature5: 'Quality control automation',
    feature6: 'Remote software updates',
    feature7: 'Multi-device accessibility',
    feature8: 'Secure data transmission and storage',
    benefitsTitle: 'Benefits',
    benefit1Title: 'Increased Efficiency',
    benefit1Text: 'Optimize production processes and reduce waste',
    benefit2Title: 'Improved Quality',
    benefit2Text: 'Ensure consistent product quality through automated monitoring',
    benefit3Title: 'Reduced Downtime',
    benefit3Text: 'Identify and resolve issues before they cause production delays',
    benefit4Title: 'Data-Driven Decisions',
    benefit4Text: 'Make informed decisions based on comprehensive production data',
    contactTitle: 'Ready to Transform Your Production?',
    contactText: 'Contact us today to learn how our software solutions can help you optimize your textile manufacturing operations.',
    contactButton: 'Get in Touch',
  },
  // Add more languages as needed
};

const Software = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="software-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="lead">{t.pageSubtitle}</p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">{t.introTitle}</h2>
              <p className="mb-4">{t.introText1}</p>
              <p>{t.introText2}</p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/software-dashboard.jpg" 
                alt="Industry 4.0 Dashboard" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Technologies */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">Core Technologies</h2>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faIndustry} size="2x" className="text-primary me-3" />
                    <h3 className="card-title mb-0">{t.etherCATTitle}</h3>
                  </div>
                  <p className="card-text">{t.etherCATText}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faChartLine} size="2x" className="text-primary me-3" />
                    <h3 className="card-title mb-0">{t.iotTitle}</h3>
                  </div>
                  <p className="card-text">{t.iotText}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faRobot} size="2x" className="text-primary me-3" />
                    <h3 className="card-title mb-0">{t.aiTitle}</h3>
                  </div>
                  <p className="card-text">{t.aiText}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faCogs} size="2x" className="text-primary me-3" />
                    <h3 className="card-title mb-0">{t.remoteTitle}</h3>
                  </div>
                  <p className="card-text">{t.remoteText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">{t.featuresTitle}</h2>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faWifi} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature1}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCogs} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature2}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faChartLine} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature3}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faIndustry} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature4}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faRobot} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature5}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCloud} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature6}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faMobileAlt} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature7}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary me-3 mt-1" />
                <div>
                  <h5>{t.feature8}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">{t.benefitsTitle}</h2>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.benefit1Title}</h4>
                  <p className="card-text">{t.benefit1Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faRobot} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.benefit2Title}</h4>
                  <p className="card-text">{t.benefit2Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faCogs} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.benefit3Title}</h4>
                  <p className="card-text">{t.benefit3Text}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faCloud} size="3x" className="text-primary mb-3" />
                  <h4 className="card-title">{t.benefit4Title}</h4>
                  <p className="card-text">{t.benefit4Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">{t.contactTitle}</h2>
          <p className="lead mb-4">{t.contactText}</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            {t.contactButton}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Software;