import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    backToProducts: 'Back to Products',
    specifications: 'Specifications',
    features: 'Features',
    applications: 'Applications',
    downloadCatalog: 'Download Catalog',
    requestInfo: 'Request Information',
    relatedProducts: 'Related Products',
    notFound: 'Product not found',
    notFoundMessage: 'The product you are looking for does not exist or has been removed.',
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
    gallery: [
      '/product-spreader-1-detail-1.jpg',
      '/product-spreader-1-detail-2.jpg',
      '/product-spreader-1-detail-3.jpg',
    ],
    description: 'High-precision fabric spreading machine with advanced tension control for various fabric types.',
    longDescription: 'The Fabric Spreader XL-2000 is our flagship spreading machine designed for high-volume production environments. It combines precision engineering with advanced technology to deliver consistent, high-quality spreading results across a wide range of fabric types.',
    specifications: [
      { name: 'Maximum Spreading Width', value: '2000 mm' },
      { name: 'Maximum Roll Diameter', value: '600 mm' },
      { name: 'Maximum Roll Weight', value: '100 kg' },
      { name: 'Spreading Speed', value: 'Up to 100 m/min' },
      { name: 'Power Supply', value: '380V, 3-phase, 50/60 Hz' },
      { name: 'Dimensions (L×W×H)', value: '3200 × 2500 × 1200 mm' },
      { name: 'Weight', value: '850 kg' },
    ],
    features: [
      'Automatic tension control system',
      'Programmable spreading patterns',
      'Touch screen interface with intuitive controls',
      'EtherCAT communication for Industry 4.0 integration',
      'Remote diagnostics and maintenance',
      'Energy-efficient design',
      'Low noise operation',
    ],
    applications: [
      'Apparel manufacturing',
      'Upholstery production',
      'Automotive textiles',
      'Home textiles',
    ],
    relatedProducts: [2, 5, 7],
  },
  {
    id: 2,
    name: 'Cutting Table CT-5000',
    category: 'cuttingTables',
    sectors: ['apparel', 'technicalFabrics'],
    image: '/product-table-1.jpg',
    description: 'Robust cutting table with vacuum system for precise cutting operations.',
    relatedProducts: [1, 6, 8],
  },
  {
    id: 3,
    name: 'Automatic Loading System ALS-3000',
    category: 'loadingSystems',
    sectors: ['upholstery', 'technicalFabrics'],
    image: '/product-loading-1.jpg',
    description: 'Automated fabric roll loading system for increased efficiency and reduced manual handling.',
    relatedProducts: [4, 7, 8],
  },
  {
    id: 4,
    name: 'Fabric Cradle FC-1000',
    category: 'cradles',
    sectors: ['apparel', 'upholstery', 'technicalFabrics'],
    image: '/product-cradle-1.jpg',
    description: 'Sturdy fabric roll cradle system for safe and efficient fabric storage.',
    relatedProducts: [3, 7, 8],
  },
  {
    id: 5,
    name: 'Compact Spreader CS-1500',
    category: 'fabricSpreaders',
    sectors: ['apparel'],
    image: '/product-spreader-2.jpg',
    description: 'Compact fabric spreader designed for smaller production facilities with limited space.',
    relatedProducts: [1, 2, 6],
  },
  {
    id: 6,
    name: 'Heavy-Duty Cutting Table HDT-8000',
    category: 'cuttingTables',
    sectors: ['upholstery', 'technicalFabrics'],
    image: '/product-table-2.jpg',
    description: 'Heavy-duty cutting table designed for thick and technical fabrics.',
    relatedProducts: [2, 3, 5],
  },
  {
    id: 7,
    name: 'Multi-Roll Loading System MLS-5000',
    category: 'loadingSystems',
    sectors: ['apparel', 'upholstery'],
    image: '/product-loading-2.jpg',
    description: 'Advanced loading system capable of handling multiple fabric rolls simultaneously.',
    relatedProducts: [1, 3, 4],
  },
  {
    id: 8,
    name: 'Adjustable Cradle System ACS-2000',
    category: 'cradles',
    sectors: ['technicalFabrics'],
    image: '/product-cradle-2.jpg',
    description: 'Adjustable cradle system for various fabric roll sizes and weights.',
    relatedProducts: [3, 4, 6],
  },
];

const ProductDetail = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // Get product ID from URL params
  const { id } = useParams();
  const productId = parseInt(id, 10);
  
  // State for product and related products
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  
  // Fetch product data
  useEffect(() => {
    // Find the product by ID
    const foundProduct = mockProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
    
    // Set the main image
    if (foundProduct) {
      setSelectedImage(foundProduct.image);
    }
    
    // Find related products
    if (foundProduct && foundProduct.relatedProducts) {
      const related = mockProducts.filter(p => foundProduct.relatedProducts.includes(p.id));
      setRelatedProducts(related);
    } else {
      setRelatedProducts([]);
    }
  }, [productId]);
  
  // Handle image selection in gallery
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-primary mb-4">{t.notFound}</h2>
        <p className="mb-4">{t.notFoundMessage}</p>
        <Link to="/products" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          {t.backToProducts}
        </Link>
      </div>
    );
  }
  
  return (
    <div className="product-detail-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link to="/products" className="btn btn-outline-primary me-3">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              {t.backToProducts}
            </Link>
            <h1 className="text-primary mb-0">{product.name}</h1>
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="product-image-main mb-3">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="img-fluid rounded shadow"
                />
              </div>
              
              {/* Image Gallery */}
              {product.gallery && (
                <div className="product-image-gallery d-flex">
                  <div 
                    className={`gallery-item me-2 ${selectedImage === product.image ? 'active' : ''}`}
                    onClick={() => handleImageSelect(product.image)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="img-fluid rounded"
                    />
                  </div>
                  
                  {product.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className={`gallery-item me-2 ${selectedImage === image ? 'active' : ''}`}
                      onClick={() => handleImageSelect(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - View ${index + 1}`} 
                        className="img-fluid rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="col-lg-6">
              <h2 className="mb-3">{product.name}</h2>
              
              {/* Description */}
              <p className="lead mb-4">{product.description}</p>
              {product.longDescription && (
                <p className="mb-4">{product.longDescription}</p>
              )}
              
              {/* Actions */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <a href="#" className="btn btn-primary">
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  {t.downloadCatalog}
                </a>
                <Link to="/contact" className="btn btn-outline-primary">
                  {t.requestInfo}
                </Link>
              </div>
              
              {/* Specifications */}
              {product.specifications && (
                <div className="mb-4">
                  <h4 className="mb-3">{t.specifications}</h4>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        {product.specifications.map((spec, index) => (
                          <tr key={index}>
                            <th scope="row" style={{ width: '40%' }}>{spec.name}</th>
                            <td>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Features */}
              {product.features && (
                <div className="mb-4">
                  <h4 className="mb-3">{t.features}</h4>
                  <ul className="list-unstyled">
                    {product.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Applications */}
              {product.applications && (
                <div className="mb-4">
                  <h4 className="mb-3">{t.applications}</h4>
                  <ul className="list-unstyled">
                    {product.applications.map((application, index) => (
                      <li key={index} className="mb-2">
                        <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <h3 className="section-title mb-4">{t.relatedProducts}</h3>
            
            <div className="row">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="card-img-top"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{relatedProduct.name}</h5>
                      <p className="card-text flex-grow-1">{relatedProduct.description}</p>
                      <Link 
                        to={`/products/${relatedProduct.id}`} 
                        className="btn btn-outline-primary mt-auto"
                      >
                        {t.discoverProduct}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;