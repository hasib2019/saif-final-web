import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Our Products',
    pageSubtitle: 'Explore our range of high-quality textile machinery',
    allCategories: 'All Categories',
    fabricSpreaders: 'Fabric Spreaders',
    cuttingTables: 'Cutting Tables',
    loadingSystems: 'Loading Systems',
    cradles: 'Cradles',
    allSectors: 'All Sectors',
    apparel: 'Apparel',
    upholstery: 'Upholstery',
    technicalFabrics: 'Technical Fabrics',
    filterBy: 'Filter By',
    category: 'Category',
    sector: 'Sector',
    discoverProduct: 'Discover the Product',
  },
  // Add more languages as needed
};

// Mock product data (in a real app, this would come from an API)
const mockProducts = [
  {
    id: 1,
    name: 'Fabric Spreader XL-2000',
    category: 'fabricSpreaders',
    sectors: ['apparel', 'upholstery'],
    image: '/product-spreader-1.jpg',
    description: 'High-precision fabric spreading machine with advanced tension control for various fabric types.',
  },
  {
    id: 2,
    name: 'Cutting Table CT-5000',
    category: 'cuttingTables',
    sectors: ['apparel', 'technicalFabrics'],
    image: '/product-table-1.jpg',
    description: 'Robust cutting table with vacuum system for precise cutting operations.',
  },
  {
    id: 3,
    name: 'Automatic Loading System ALS-3000',
    category: 'loadingSystems',
    sectors: ['upholstery', 'technicalFabrics'],
    image: '/product-loading-1.jpg',
    description: 'Automated fabric roll loading system for increased efficiency and reduced manual handling.',
  },
  {
    id: 4,
    name: 'Fabric Cradle FC-1000',
    category: 'cradles',
    sectors: ['apparel', 'upholstery', 'technicalFabrics'],
    image: '/product-cradle-1.jpg',
    description: 'Sturdy fabric roll cradle system for safe and efficient fabric storage.',
  },
  {
    id: 5,
    name: 'Compact Spreader CS-1500',
    category: 'fabricSpreaders',
    sectors: ['apparel'],
    image: '/product-spreader-2.jpg',
    description: 'Compact fabric spreader designed for smaller production facilities with limited space.',
  },
  {
    id: 6,
    name: 'Heavy-Duty Cutting Table HDT-8000',
    category: 'cuttingTables',
    sectors: ['upholstery', 'technicalFabrics'],
    image: '/product-table-2.jpg',
    description: 'Heavy-duty cutting table designed for thick and technical fabrics.',
  },
  {
    id: 7,
    name: 'Multi-Roll Loading System MLS-5000',
    category: 'loadingSystems',
    sectors: ['apparel', 'upholstery'],
    image: '/product-loading-2.jpg',
    description: 'Advanced loading system capable of handling multiple fabric rolls simultaneously.',
  },
  {
    id: 8,
    name: 'Adjustable Cradle System ACS-2000',
    category: 'cradles',
    sectors: ['technicalFabrics'],
    image: '/product-cradle-2.jpg',
    description: 'Adjustable cradle system for various fabric roll sizes and weights.',
  },
];

const Products = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // State for filters
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Apply filters when they change
  useEffect(() => {
    let filtered = [...mockProducts];
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    if (sectorFilter !== 'all') {
      filtered = filtered.filter(product => product.sectors.includes(sectorFilter));
    }
    
    setFilteredProducts(filtered);
  }, [categoryFilter, sectorFilter]);
  
  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="lead">{t.pageSubtitle}</p>
        </div>
      </section>
      
      {/* Filters and Products */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Filters Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="mb-3">{t.filterBy}</h5>
                  
                  {/* Category Filter */}
                  <div className="mb-4">
                    <h6 className="mb-2">{t.category}</h6>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category" 
                        id="category-all" 
                        checked={categoryFilter === 'all'}
                        onChange={() => setCategoryFilter('all')}
                      />
                      <label className="form-check-label" htmlFor="category-all">
                        {t.allCategories}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category" 
                        id="category-spreaders" 
                        checked={categoryFilter === 'fabricSpreaders'}
                        onChange={() => setCategoryFilter('fabricSpreaders')}
                      />
                      <label className="form-check-label" htmlFor="category-spreaders">
                        {t.fabricSpreaders}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category" 
                        id="category-tables" 
                        checked={categoryFilter === 'cuttingTables'}
                        onChange={() => setCategoryFilter('cuttingTables')}
                      />
                      <label className="form-check-label" htmlFor="category-tables">
                        {t.cuttingTables}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category" 
                        id="category-loading" 
                        checked={categoryFilter === 'loadingSystems'}
                        onChange={() => setCategoryFilter('loadingSystems')}
                      />
                      <label className="form-check-label" htmlFor="category-loading">
                        {t.loadingSystems}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category" 
                        id="category-cradles" 
                        checked={categoryFilter === 'cradles'}
                        onChange={() => setCategoryFilter('cradles')}
                      />
                      <label className="form-check-label" htmlFor="category-cradles">
                        {t.cradles}
                      </label>
                    </div>
                  </div>
                  
                  {/* Sector Filter */}
                  <div>
                    <h6 className="mb-2">{t.sector}</h6>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sector" 
                        id="sector-all" 
                        checked={sectorFilter === 'all'}
                        onChange={() => setSectorFilter('all')}
                      />
                      <label className="form-check-label" htmlFor="sector-all">
                        {t.allSectors}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sector" 
                        id="sector-apparel" 
                        checked={sectorFilter === 'apparel'}
                        onChange={() => setSectorFilter('apparel')}
                      />
                      <label className="form-check-label" htmlFor="sector-apparel">
                        {t.apparel}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sector" 
                        id="sector-upholstery" 
                        checked={sectorFilter === 'upholstery'}
                        onChange={() => setSectorFilter('upholstery')}
                      />
                      <label className="form-check-label" htmlFor="sector-upholstery">
                        {t.upholstery}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sector" 
                        id="sector-technical" 
                        checked={sectorFilter === 'technicalFabrics'}
                        onChange={() => setSectorFilter('technicalFabrics')}
                      />
                      <label className="form-check-label" htmlFor="sector-technical">
                        {t.technicalFabrics}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="col-lg-9">
              <div className="row">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <div key={product.id} className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text flex-grow-1">{product.description}</p>
                          <Link 
                            to={`/products/${product.id}`} 
                            className="btn btn-outline-primary mt-auto"
                          >
                            {t.discoverProduct}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <p>No products match your selected filters. Please try different criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;