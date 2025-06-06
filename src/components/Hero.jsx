import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* Dynamic grid pattern */}
        <div className={styles.bgGrid}></div>
        
        {/* Theme-based landscape elements */}
        {theme === 'dark' ? (
          <>
            <div className={styles.darkSun}></div>
            <div className={styles.darkMountains}></div>
            <div className={styles.darkMountainsFront}></div>
            <div className={styles.stars}></div>
          </>
        ) : (
          <>
            <div className={styles.lightSun}></div>
            <div className={styles.lightMountains}></div>
            <div className={styles.lightMountainsFront}></div>
            <div className={styles.clouds}></div>
          </>
        )}
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-desktop"></i>
                </div>
                <span>{t.locale === 'pl' ? 'Nowoczesny Design' : 'Modern Design'}</span>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <span>{t.locale === 'pl' ? 'Responsywne Strony' : 'Responsive Websites'}</span>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-rocket"></i>
                </div>
                <span>{t.locale === 'pl' ? 'Szybkie Ładowanie' : 'Fast Loading'}</span>
              </div>
            </div>
            
            <div className={styles.heroCta}>
              <Link to="/services" className={styles.primaryBtn}>
                {t('view_services')}
              </Link>
              <Link to="/contact" className={styles.secondaryBtn}>
                {t('contact_me')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 