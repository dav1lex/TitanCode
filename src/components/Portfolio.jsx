import { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t, locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      image: '/images/portfolio/english-tutor/main.png',
      title: 'English Tutor Website',
      titlePl: 'Strona dla Nauczyciela Angielskiego',
      category: 'Web Development',
      categoryPl: 'Rozwój Web',
      description: 'A modern website for an English tutor featuring course information, blog functionality and admin panel.',
      descriptionPl: 'Nowoczesna strona dla nauczyciela angielskiego zawierająca informacje o kursie, funkcjonalność bloga i panel administracyjny.',
      link: '/portfolio/english-tutor'
    },
    {
      id: 2,
      image: '/images/portfolio/nanobid/n1.png',
      title: 'NanoBid - Auction Portal',
      titlePl: 'NanoBid - Portal Aukcyjny',
      category: 'Full Stack Application',
      categoryPl: 'Aplikacja Full Stack',
      description: 'A comprehensive auction platform for online auctions, integrated with admin/user panels, proxy bidding or pre bidding functionality, lot management, user watchlist, bid history and more.',
      descriptionPl: 'Kompleksowa platforma aukcyjna dla aukcji online, zintegrowana z panelami administracyjnymi/użytkowników, funkcjonalnością licytacji proxy lub przedlicytacji, zarządzaniem przedmiotami, listą obserwowanych przez użytkownika, historią licytacji i więcej.',
      link: '/portfolio/auction-portal'
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        handleNextClick();
      } else {
        // Swipe right
        handlePrevClick();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        handleNextClick();
      } else {
        // Swipe right
        handlePrevClick();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('portfolio_title')}</h2>
          <p className={styles.sectionDescription}>{t('portfolio_description')}</p>
        </div>

        <div className={styles.portfolioCarouselContainer}>
          <button
            className={`${styles.carouselControl} ${styles.prevControl}`}
            onClick={handlePrevClick}
            aria-label="Previous project"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className={styles.portfolioCarousel}
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${index === activeIndex ? styles.active : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <div className={styles.projectImage}>
                  <img src={project.image} alt={locale === 'pl' ? project.titlePl : project.title} />
                </div>
                <div className={styles.projectContent}>
                  <span className={styles.projectCategory}>
                    {locale === 'pl' ? project.categoryPl : project.category}
                  </span>
                  <h3 className={styles.projectTitle}>
                    {locale === 'pl' ? project.titlePl : project.title}
                  </h3>
                  <p className={styles.projectDescription}>
                    {locale === 'pl' ? project.descriptionPl : project.description}
                  </p>
                  <a href={project.link} className={styles.projectLink}>
                    {t('view_project')} <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselControl} ${styles.nextControl}`}
            onClick={handleNextClick}
            aria-label="Next project"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className={styles.carouselDots}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.portfolioFooter}>
          <Link to="/portfolio" className={styles.viewAllLink}>
            {t('view_all_projects')} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 