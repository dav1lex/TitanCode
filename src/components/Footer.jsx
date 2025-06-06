import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <div className={styles.footerGrid}></div>
        <div className={styles.footerGlow}></div>
      </div>
      
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Link to="/">
                <span className={styles.footerBrandName}>Titan Code</span>
              </Link>
            </div>
            <p className={styles.footerTagline}>
              {t.locale === 'pl' 
                ? 'Profesjonalne usługi tworzenia stron internetowych i aplikacji' 
                : 'Professional web development and application services'}
            </p>
            <div className={styles.footerSocial}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinksWrapper}>
            <div className={styles.footerLinks}>
              <h3 className={styles.footerHeading}>
                {t.locale === 'pl' ? 'Nawigacja' : 'Navigation'}
              </h3>
              <ul className={styles.footerNav}>
                <li><Link to="/">{t('nav_home')}</Link></li>
                <li><Link to="/services">{t('nav_services')}</Link></li>
                <li><Link to="/portfolio">{t('nav_portfolio')}</Link></li>
                <li><Link to="/about">{t('nav_about')}</Link></li>
                <li><Link to="/pricing">{t('nav_pricing')}</Link></li>
                <li><Link to="/contact">{t('nav_contact')}</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinks}>
              <h3 className={styles.footerHeading}>
                {t.locale === 'pl' ? 'Usługi' : 'Services'}
              </h3>
              <ul className={styles.footerNav}>
                <li><Link to="/services#web-development">
                  {t.locale === 'pl' ? 'Tworzenie Stron' : 'Web Development'}
                </Link></li>
                <li><Link to="/services#ecommerce">
                  {t.locale === 'pl' ? 'Sklepy Internetowe' : 'E-commerce'}
                </Link></li>
                <li><Link to="/services#custom-apps">
                  {t.locale === 'pl' ? 'Aplikacje Webowe' : 'Web Applications'}
                </Link></li>
                <li><Link to="/services#automation">
                  {t.locale === 'pl' ? 'Automatyzacja' : 'Automation'}
                </Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinks}>
              <h3 className={styles.footerHeading}>
                {t('contact_title')}
              </h3>
              <ul className={styles.footerContact}>
                <li className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>{t('contact_address')}</span>
                </li>
                <li className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a href="mailto:contact@titancode.dev">contact@titancode.dev</a>
                </li>
                <li className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>
                    <i className="fas fa-phone"></i>
                  </span>
                  <a href="tel:+48123456789">{t('contact_phone')}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>&copy; {currentYear} Titan Code. {t('footer_rights')}</p>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/privacy-policy" className={styles.footerLegalLink}>
              {t.locale === 'pl' ? 'Polityka Prywatności' : 'Privacy Policy'}
            </Link>
            <span className={styles.legalSeparator}>|</span>
            <Link to="/terms" className={styles.footerLegalLink}>
              {t.locale === 'pl' ? 'Warunki Korzystania' : 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 