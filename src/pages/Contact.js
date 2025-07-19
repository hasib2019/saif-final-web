import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';

// Language translations
const translations = {
  en: {
    pageTitle: 'Contact Us',
    pageSubtitle: 'We would love to hear from you',
    formTitle: 'Send us a message',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    companyLabel: 'Company',
    companyPlaceholder: 'Enter your company name',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'What is this regarding?',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help you?',
    submitButton: 'Send Message',
    contactInfoTitle: 'Contact Information',
    address: '123 Technology Park, Industrial Zone, 12345 City, Country',
    phone: '+1 (123) 456-7890',
    email: 'info@derowntech.com',
    hoursTitle: 'Business Hours',
    hoursWeekday: 'Monday - Friday: 9:00 AM - 6:00 PM',
    hoursWeekend: 'Saturday: 10:00 AM - 2:00 PM',
    hoursClosed: 'Sunday: Closed',
    followUs: 'Follow Us',
    formSuccess: 'Your message has been sent successfully. We will get back to you soon!',
    formError: 'There was an error sending your message. Please try again later.',
    requiredField: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
  },
  // Add more languages as needed
};

const Contact = () => {
  // Get language from context
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    honeypot: '' // spam trap field
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = t.requiredField;
    if (!formData.email.trim()) newErrors.email = t.requiredField;
    if (!formData.message.trim()) newErrors.message = t.requiredField;
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }
    
    // Phone validation (if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = t.invalidPhone;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if honeypot field is filled (spam bot)
    if (formData.honeypot) {
      // Silently reject spam without notifying the bot
      setSubmitStatus('success');
      return;
    }
    
    // Validate form
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to your backend API
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        honeypot: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h1 className="text-primary">{t.pageTitle}</h1>
          <p className="lead">{t.pageSubtitle}</p>
        </div>
      </section>
      
      <div className="container mb-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="card-title mb-4">{t.formTitle}</h2>
                
                {/* Success message */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    <div>{t.formSuccess}</div>
                  </div>
                )}
                
                {/* Error message */}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    {t.formError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {/* Honeypot field for spam protection - hidden from users */}
                  <input 
                    type="text" 
                    name="honeypot" 
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  
                  <div className="row">
                    {/* Name */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">{t.nameLabel} *</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.namePlaceholder}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    
                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">{t.emailLabel} *</label>
                      <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.emailPlaceholder}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    
                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">{t.phoneLabel}</label>
                      <input 
                        type="tel" 
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.phonePlaceholder}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    
                    {/* Company */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="company" className="form-label">{t.companyLabel}</label>
                      <input 
                        type="text" 
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.companyPlaceholder}
                      />
                    </div>
                    
                    {/* Subject */}
                    <div className="col-12 mb-3">
                      <label htmlFor="subject" className="form-label">{t.subjectLabel}</label>
                      <input 
                        type="text" 
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.subjectPlaceholder}
                      />
                    </div>
                    
                    {/* Message */}
                    <div className="col-12 mb-3">
                      <label htmlFor="message" className="form-label">{t.messageLabel} *</label>
                      <textarea 
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.messagePlaceholder}
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                    
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            {t.submitButton}
                          </>
                        ) : t.submitButton}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">{t.contactInfoTitle}</h3>
                
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-primary" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0">{t.address}</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} size="lg" className="text-primary" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0">{t.phone}</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-primary" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0">{t.email}</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} size="lg" className="text-primary" />
                  </div>
                  <div className="ms-3">
                    <h5 className="fs-6">{t.hoursTitle}</h5>
                    <p className="mb-1">{t.hoursWeekday}</p>
                    <p className="mb-1">{t.hoursWeekend}</p>
                    <p className="mb-0">{t.hoursClosed}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">{t.followUs}</h3>
                <div className="d-flex">
                  <a href="https://facebook.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://twitter.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://linkedin.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="https://instagram.com" className="text-primary" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="container-fluid px-0 mb-5">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025254456!2d-0.12858492351805927!3d51.50732061882481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5m2!1s!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Derown Technology Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;