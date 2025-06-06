import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Contact.module.css';

const Contact = () => {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };
  
  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactParticles}></div>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('contact_title')}</h2>
          <p className={styles.sectionDescription}>{t('contact_description')}</p>
        </div>
        
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.contactText}>
                <h3>{t('contact_address_title')}</h3>
                <p>Warsaw, Poland</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.contactText}>
                <h3>{t('contact_email_title')}</h3>
                <p>contact@titancode.dev</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className={styles.contactText}>
                <h3>{t('contact_phone_title')}</h3>
                <p>+48 123 456 789</p>
              </div>
            </div>
            
            <div className={styles.contactSocial}>
              <h3>{t('contact_social_title')}</h3>
              <div className={styles.socialLinks}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t('contact_name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">{t('contact_email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">
                  {locale === 'pl' ? 'Temat' : 'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">{t('contact_message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <span className={styles.spinner}></span>
                ) : (
                  t('contact_send')
                )}
              </button>
              
              {formStatus.submitted && (
                <div className={styles.formSuccess}>
                  <i className="fas fa-check-circle"></i>
                  <p>{t('contact_success')}</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className={styles.formError}>
                  <i className="fas fa-exclamation-circle"></i>
                  <p>{t('contact_error')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 