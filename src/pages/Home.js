import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faRobot, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    heroTitle: 'Innovative Textile Machinery & Industry 4.0 Solutions',
    heroSubtitle: 'Transforming the textile industry with cutting-edge technology and sustainable solutions',
    discoverProducts: 'Discover Our Products',
    contactUs: 'Contact Us',
    productsTitle: 'Our Products',
    productsSubtitle: 'Explore our range of high-quality textile machinery',
    softwareTitle: 'Software Solutions',
    softwareSubtitle: 'Industry 4.0 technology for the modern manufacturing environment',
    featuredProduct1: 'Fabric Spreaders',
    featuredProduct2: 'Cutting Tables',
    featuredProduct3: 'Loading Systems',
    featuredProduct4: 'Cradles',
    softwareFeature1: 'EtherCAT Technology',
    softwareFeature2: 'IoT Dashboards',
    softwareFeature3: 'AI Vision Systems',
    softwareFeature4: 'Remote Diagnostics',
    learnMore: 'Learn More',
  },
  // Add more languages as needed
};

const Home = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1>{t.heroTitle}</h1>
              <p className="lead">{t.heroSubtitle}</p>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/products" className="btn btn-primary btn-lg">
                  {t.discoverProducts}
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  {t.contactUs}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="/hero-image.jpg" 
                alt="Derown Technology Machinery" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">{t.productsTitle}</h2>
            <p className="lead">{t.productsSubtitle}</p>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100">
                <img 
                  src="/product1.jpg" 
                  alt="Fabric Spreaders" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{t.featuredProduct1}</h5>
                  <p className="card-text">High-precision fabric spreading machines for efficient material handling.</p>
                  <Link to="/products" className="btn btn-outline-primary mt-auto">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100">
                <img 
                  src="/product2.jpg" 
                  alt="Cutting Tables" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{t.featuredProduct2}</h5>
                  <p className="card-text">Advanced cutting tables designed for precision and durability.</p>
                  <Link to="/products" className="btn btn-outline-primary mt-auto">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100">
                <img 
                  src="/product3.jpg" 
                  alt="Loading Systems" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{t.featuredProduct3}</h5>
                  <p className="card-text">Automated loading systems for improved workflow efficiency.</p>
                  <Link to="/products" className="btn btn-outline-primary mt-auto">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100">
                <img 
                  src="/product4.jpg" 
                  alt="Cradles" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{t.featuredProduct4}</h5>
                  <p className="card-text">Robust cradle systems for fabric roll storage and handling.</p>
                  <Link to="/products" className="btn btn-outline-primary mt-auto">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Software Solutions Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">{t.softwareTitle}</h2>
            <p className="lead">{t.softwareSubtitle}</p>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="p-4">
                <FontAwesomeIcon icon={faIndustry} size="3x" className="text-primary mb-3" />
                <h4>{t.softwareFeature1}</h4>
                <p>Real-time control and communication for industrial automation.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="p-4">
                <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary mb-3" />
                <h4>{t.softwareFeature2}</h4>
                <p>Monitor production metrics and machine performance in real-time.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="p-4">
                <FontAwesomeIcon icon={faRobot} size="3x" className="text-primary mb-3" />
                <h4>{t.softwareFeature3}</h4>
                <p>Advanced vision systems for quality control and defect detection.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="p-4">
                <FontAwesomeIcon icon={faCogs} size="3x" className="text-primary mb-3" />
                <h4>{t.softwareFeature4}</h4>
                <p>Remote monitoring and maintenance for reduced downtime.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/software" className="btn btn-primary btn-lg">
              {t.learnMore}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block">Virtual Tour</h2>
            <p className="lead">Explore our facilities and see our machinery in action</p>
          </div>
          
          <div className="ratio ratio-16x9">
            <iframe 
              src="about:blank" 
              title="Derown Technology Virtual Tour" 
              allowFullScreen
              className="rounded shadow"
            ></iframe>
          </div>
          <p className="text-center text-muted mt-3">
            Note: Virtual tour will be embedded here. This is a placeholder.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;