import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faArrowRight, faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Press Releases',
    pageSubtitle: 'Latest news and announcements from Derown Technology',
    searchPlaceholder: 'Search press releases...',
    searchButton: 'Search',
    allCategories: 'All Categories',
    categories: {
      companyNews: 'Company News',
      productLaunches: 'Product Launches',
      events: 'Events & Exhibitions',
      awards: 'Awards & Recognition',
      partnerships: 'Partnerships'
    },
    readMore: 'Read More',
    noResults: 'No press releases found matching your search criteria.',
    loadMore: 'Load More',
  },
  // Add more languages as needed
};

// Mock press release data
const pressReleases = [
  {
    id: 1,
    title: 'Derown Technology Unveils New Fabric Spreader with AI-Powered Precision',
    excerpt: 'Our latest innovation combines cutting-edge artificial intelligence with precision engineering to revolutionize fabric spreading operations.',
    date: '2023-11-15',
    category: 'productLaunches',
    image: '/press-release-1.jpg',
    url: '/press/derown-unveils-new-fabric-spreader'
  },
  {
    id: 2,
    title: 'Derown Technology Expands Operations to South America',
    excerpt: 'We are excited to announce our expansion into the South American market with a new office in São Paulo, Brazil.',
    date: '2023-10-22',
    category: 'companyNews',
    image: '/press-release-2.jpg',
    url: '/press/derown-expands-to-south-america'
  },
  {
    id: 3,
    title: 'Derown Technology to Showcase Latest Innovations at ITMA 2023',
    excerpt: 'Visit our booth at ITMA 2023 to experience our latest textile machinery innovations and Industry 4.0 solutions.',
    date: '2023-09-05',
    category: 'events',
    image: '/press-release-3.jpg',
    url: '/press/derown-at-itma-2023'
  },
  {
    id: 4,
    title: 'Derown Technology Wins Innovation Award for Sustainable Manufacturing',
    excerpt: 'Our commitment to sustainable manufacturing practices has been recognized with the prestigious Industry Innovation Award.',
    date: '2023-08-17',
    category: 'awards',
    image: '/press-release-4.jpg',
    url: '/press/derown-wins-innovation-award'
  },
  {
    id: 5,
    title: 'Derown Technology Partners with Leading Textile Manufacturer',
    excerpt: 'We are proud to announce our strategic partnership with TextileTech Inc. to develop next-generation fabric handling solutions.',
    date: '2023-07-28',
    category: 'partnerships',
    image: '/press-release-5.jpg',
    url: '/press/derown-partners-with-textiletech'
  },
  {
    id: 6,
    title: 'Derown Technology Launches New IoT Dashboard for Remote Monitoring',
    excerpt: 'Our new IoT dashboard allows textile manufacturers to monitor their machinery performance and production metrics from anywhere in the world.',
    date: '2023-06-14',
    category: 'productLaunches',
    image: '/press-release-6.jpg',
    url: '/press/derown-launches-iot-dashboard'
  },
];

const Press = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(4);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleItems(4); // Reset visible items when changing category
  };
  
  // Filter press releases based on search term and selected category
  const filteredPressReleases = pressReleases.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Load more items
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 4);
  };
  
  // Format date based on language
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="press-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="lead">{t.pageSubtitle}</p>
        </div>
      </section>
      
      <div className="container mb-5">
        {/* Search and Filter */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="input-group mb-3 mb-lg-0">
              <input 
                type="text" 
                className="form-control" 
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                {t.searchButton}
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-wrap">
              <button 
                className={`btn btn-sm me-2 mb-2 ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleCategoryChange('all')}
              >
                {t.allCategories}
              </button>
              {Object.entries(t.categories).map(([key, value]) => (
                <button 
                  key={key}
                  className={`btn btn-sm me-2 mb-2 ${selectedCategory === key ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleCategoryChange(key)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Press Releases */}
        {filteredPressReleases.length > 0 ? (
          <div className="row">
            {filteredPressReleases.slice(0, visibleItems).map(item => (
              <div key={item.id} className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="h-100" style={{ background: '#f8f9fa', minHeight: '200px' }}>
                        <div className="d-flex align-items-center justify-content-center h-100">
                          <FontAwesomeIcon icon={faNewspaper} size="3x" className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                          <small className="text-muted">{formatDate(item.date)}</small>
                        </div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.excerpt}</p>
                        <Link to={item.url} className="btn btn-link text-primary p-0">
                          {t.readMore} <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Load More Button */}
            {filteredPressReleases.length > visibleItems && (
              <div className="col-12 text-center mt-4">
                <button 
                  className="btn btn-outline-primary" 
                  onClick={handleLoadMore}
                >
                  {t.loadMore}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-5">
            <FontAwesomeIcon icon={faNewspaper} size="3x" className="text-muted mb-3" />
            <p className="lead">{t.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Press;