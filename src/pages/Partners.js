import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faGlobe, faIndustry, faUniversity, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Our Partners',
    pageSubtitle: 'Collaborating with industry leaders to drive innovation',
    searchPlaceholder: 'Search partners...',
    searchButton: 'Search',
    allCategories: 'All Categories',
    categories: {
      manufacturers: 'Manufacturers',
      distributors: 'Distributors',
      technology: 'Technology Partners',
      research: 'Research Institutions'
    },
    allRegions: 'All Regions',
    regions: {
      europe: 'Europe',
      northAmerica: 'North America',
      asia: 'Asia',
      southAmerica: 'South America',
      africa: 'Africa',
      oceania: 'Oceania'
    },
    noResults: 'No partners found matching your search criteria.',
    visitWebsite: 'Visit Website',
  },
  // Add more languages as needed
};

// Mock partner data
const partners = [
  {
    id: 1,
    name: 'TextileTech Inc.',
    description: 'Leading manufacturer of textile machinery components and systems.',
    category: 'manufacturers',
    region: 'northAmerica',
    logo: '/partner-logo-1.jpg',
    website: 'https://example.com/textiletech'
  },
  {
    id: 2,
    name: 'FabricSolutions GmbH',
    description: 'Innovative fabric handling solutions and automation systems.',
    category: 'manufacturers',
    region: 'europe',
    logo: '/partner-logo-2.jpg',
    website: 'https://example.com/fabricsolutions'
  },
  {
    id: 3,
    name: 'Global Textile Distributors',
    description: 'Worldwide distribution network for textile machinery and equipment.',
    category: 'distributors',
    region: 'asia',
    logo: '/partner-logo-3.jpg',
    website: 'https://example.com/gtd'
  },
  {
    id: 4,
    name: 'TechFabric Systems',
    description: 'Software and IoT solutions for textile manufacturing.',
    category: 'technology',
    region: 'europe',
    logo: '/partner-logo-4.jpg',
    website: 'https://example.com/techfabric'
  },
  {
    id: 5,
    name: 'Textile Research Institute',
    description: 'Leading research institution focused on textile innovation and sustainability.',
    category: 'research',
    region: 'europe',
    logo: '/partner-logo-5.jpg',
    website: 'https://example.com/tri'
  },
  {
    id: 6,
    name: 'American Fabric Association',
    description: 'Industry association promoting textile manufacturing excellence.',
    category: 'research',
    region: 'northAmerica',
    logo: '/partner-logo-6.jpg',
    website: 'https://example.com/afa'
  },
  {
    id: 7,
    name: 'Asian Textile Solutions',
    description: 'Comprehensive textile machinery and service provider across Asia.',
    category: 'distributors',
    region: 'asia',
    logo: '/partner-logo-7.jpg',
    website: 'https://example.com/ats'
  },
  {
    id: 8,
    name: 'DataFabric AI',
    description: 'Artificial intelligence and machine learning solutions for textile manufacturing.',
    category: 'technology',
    region: 'northAmerica',
    logo: '/partner-logo-8.jpg',
    website: 'https://example.com/datafabric'
  },
  {
    id: 9,
    name: 'South American Textile Network',
    description: 'Distribution and service network across South America.',
    category: 'distributors',
    region: 'southAmerica',
    logo: '/partner-logo-9.jpg',
    website: 'https://example.com/satn'
  },
  {
    id: 10,
    name: 'African Textile Initiative',
    description: 'Supporting textile manufacturing growth across African markets.',
    category: 'distributors',
    region: 'africa',
    logo: '/partner-logo-10.jpg',
    website: 'https://example.com/ati'
  },
  {
    id: 11,
    name: 'Oceania Fabric Technologies',
    description: 'Textile technology solutions for Australia and New Zealand.',
    category: 'technology',
    region: 'oceania',
    logo: '/partner-logo-11.jpg',
    website: 'https://example.com/oft'
  },
  {
    id: 12,
    name: 'European Textile University',
    description: 'Academic institution specializing in textile engineering and innovation.',
    category: 'research',
    region: 'europe',
    logo: '/partner-logo-12.jpg',
    website: 'https://example.com/etu'
  },
];

const Partners = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  // Handle region selection
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  
  // Filter partners based on search term, selected category, and selected region
  const filteredPartners = partners.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });
  
  // Get icon based on partner category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'manufacturers':
        return faIndustry;
      case 'distributors':
        return faGlobe;
      case 'technology':
        return faCogs;
      case 'research':
        return faUniversity;
      default:
        return faHandshake;
    }
  };
  
  return (
    <div className="partners-page">
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
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="input-group">
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
          <div className="col-lg-6">
            <div className="d-flex flex-wrap justify-content-lg-end">
              <div className="me-3 mb-2">
                <select 
                  className="form-select" 
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <option value="all">{t.allCategories}</option>
                  {Object.entries(t.categories).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <select 
                  className="form-select" 
                  value={selectedRegion}
                  onChange={(e) => handleRegionChange(e.target.value)}
                >
                  <option value="all">{t.allRegions}</option>
                  {Object.entries(t.regions).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredPartners.map(partner => (
              <div key={partner.id} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <div className="partner-logo-placeholder bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: '120px', height: '120px' }}>
                        <FontAwesomeIcon 
                          icon={getCategoryIcon(partner.category)} 
                          size="3x" 
                          className="text-primary" 
                        />
                      </div>
                    </div>
                    <h4 className="card-title">{partner.name}</h4>
                    <p className="card-text text-muted mb-4">{partner.description}</p>
                    <a 
                      href={partner.website} 
                      className="btn btn-outline-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t.visitWebsite}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="text-muted mb-3" />
            <p className="lead">{t.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;