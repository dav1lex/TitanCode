import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Header.module.css';

// Import SVG directly as a component
const SaturnLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
    <circle cx="24" cy="24" r="22" fill="url(#glow_gradient)" opacity="0.3"/>
    <circle cx="24" cy="24" r="12" fill="url(#planet_gradient)"/>
    <ellipse cx="24" cy="24" rx="20" ry="6" transform="rotate(-20 24 24)" fill="url(#ring_gradient)" fillOpacity="0.9"/>
    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="url(#planet_gradient)"/>
    <circle cx="12" cy="18" r="1" fill="white"/>
    <circle cx="38" cy="14" r="0.8" fill="white"/>
    <circle cx="35" cy="32" r="1.2" fill="white"/>
    <circle cx="16" cy="38" r="0.7" fill="white"/>
    <circle cx="28" cy="8" r="0.9" fill="white"/>
    <path d="M14 11L16 13M14 13L16 11" stroke="white" strokeWidth="0.6"/>
    <path d="M37 25L39 27M37 27L39 25" stroke="white" strokeWidth="0.6"/>
    <path d="M10 30L12 32M10 32L12 30" stroke="white" strokeWidth="0.6"/>
    <defs>
      <linearGradient id="planet_gradient" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C9AFF"/>
        <stop offset="1" stopColor="#4361EE"/>
      </linearGradient>
      <linearGradient id="ring_gradient" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0.1" stopColor="#6C9AFF" stopOpacity="0.2"/>
        <stop offset="0.4" stopColor="#FFFFFF" stopOpacity="0.6"/>
        <stop offset="0.6" stopColor="#FFFFFF" stopOpacity="0.6"/>
        <stop offset="0.9" stopColor="#6C9AFF" stopOpacity="0.2"/>
      </linearGradient>
      <radialGradient id="glow_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" 
                      gradientTransform="translate(24 24) rotate(90) scale(24)">
        <stop offset="0.4" stopColor="#6C9AFF" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#6C9AFF" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  
  // Check scroll position to apply sticky header styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };
  
  const handleLanguageToggle = (e) => {
    e.stopPropagation();
    toggleLanguage();
    // Don't close the menu on language toggle
  };
  
  const handleThemeToggle = (e) => {
    e.stopPropagation();
    toggleTheme();
    // Don't close the menu on theme toggle
  };
  
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link to="/">
            <SaturnLogo />
            <span className={styles.brandName}>TITANCODE</span>
          </Link>
        </div>
        
        <nav className={`${styles.mainNav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>{t('home')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLink}>{t('services')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/portfolio" className={styles.navLink}>{t('portfolio')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>{t('about')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>{t('contact')}</Link>
            </li>
          </ul>
          
          {/* Mobile menu controls */}
          <div className={styles.mobileControls}>
            <hr className={styles.menuDivider} />
            
            <div className={styles.mobileControlsRow}>
              <button
                className={styles.langToggle}
                onClick={handleLanguageToggle}
                aria-label="Toggle Language"
              >
                {locale === 'en' ? (
                  <>
                    <span className={styles.currentLang}>EN</span>
                    <span className={styles.otherLang}>PL</span>
                  </>
                ) : (
                  <>
                    <span className={styles.currentLang}>PL</span>
                    <span className={styles.otherLang}>EN</span>
                  </>
                )}
              </button>
              
              <button 
                className={styles.themeToggle} 
                onClick={handleThemeToggle}
                aria-label="Toggle Theme"
              >
                <span className={`${styles.themeIcon} ${styles.themeIconLight}`}>
                  <i className="fas fa-sun"></i>
                </span>
                <span className={`${styles.themeIcon} ${styles.themeIconDark}`}>
                  <i className="fas fa-moon"></i>
                </span>
              </button>
            </div>
          </div>
        </nav>
        
        {/* Desktop header controls */}
        <div className={styles.headerControls}>
          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label="Toggle Language"
          >
            {locale === 'en' ? (
              <>
                <span className={styles.currentLang}>EN</span>
                <span className={styles.otherLang}>PL</span>
              </>
            ) : (
              <>
                <span className={styles.currentLang}>PL</span>
                <span className={styles.otherLang}>EN</span>
              </>
            )}
          </button>
          
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className={`${styles.themeIcon} ${styles.themeIconLight}`}>
              <i className="fas fa-sun"></i>
            </span>
            <span className={`${styles.themeIcon} ${styles.themeIconDark}`}>
              <i className="fas fa-moon"></i>
            </span>
          </button>
          
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 