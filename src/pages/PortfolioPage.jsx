import { useLanguage } from '../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import styles from './PortfolioPage.module.css';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { t, locale } = useLanguage();

  const projects = [
    {
      id: 1,
      image: '/images/portfolio/english-tutor/main.png',
      title: 'Kurs8Klasisty - Website for English Tutor',
      titlePl: 'Kurs8Klasisty - Strona dla Nauczyciela Angielskiego',
      category: 'Web Development',
      categoryPl: 'Rozwój Web',
      description: 'A modern website for an English tutor featuring course information, blog functionality and admin panel.',
      descriptionPl: 'Nowoczesna strona dla nauczyciela angielskiego zawierająca informacje o kursie, funkcjonalność bloga i panel administracyjny.',
      technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
      technologiesPl: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
      link: '/portfolio/english-tutor'
    },
    {
      id: 2,
      image: '/images/portfolio/nanobid/n1.png',
      title: 'NanoBid - Auction Portal',
      titlePl: 'NanoBid - Portal Aukcyjny',
      category: 'Full Stack Application',
      categoryPl: 'Aplikacja Full Stack',
      description: 'A comprehensive auction platform with user accounts, real-time bidding, secure payment processing, and seller dashboards.',
      descriptionPl: 'Kompleksowa platforma aukcyjna z kontami użytkowników, licytacjami w czasie rzeczywistym, bezpiecznym przetwarzaniem płatności i panelami dla sprzedających.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'PHPMailer'],
      technologiesPl: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'PHPMailer'],
      link: '/portfolio/auction-portal'
    },
  ];

  return (
    <>
      <Helmet>
        <title>{locale === 'pl' ? 'Portfolio - TitanCode' : 'Portfolio - TitanCode'}</title>
        <meta 
          name="description" 
          content={locale === 'pl' 
            ? 'Sprawdź nasze najlepsze projekty i realizacje' 
            : 'Check out our best projects and implementations'
          } 
        />
      </Helmet>
      
      <PageHeader 
        title={locale === 'pl' ? 'Portfolio' : 'Portfolio'}   
        description={locale === 'pl' 
          ? 'Sprawdź wybrane projekty z naszego portfolio' 
          : 'Check out selected projects from our portfolio'
        }
      />
      
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioGrid}>
            {projects.map((project) => (
              <div key={project.id} className={`${styles.portfolioCard} ${project.inProgress ? styles.inProgress : ''}`}>
                <div className={styles.portfolioCardImage}>
                  <img src={project.image} alt={locale === 'pl' ? project.titlePl : project.title} />
                  {project.inProgress && (
                    <div className={styles.inProgressBadge}>
                      {locale === 'pl' ? 'W trakcie' : 'In progress'}
                    </div>
                  )}
                </div>
                <div className={styles.portfolioCardContent}>
                  <span className={styles.portfolioCardCategory}>
                    {locale === 'pl' ? project.categoryPl : project.category}
                  </span>
                  <h3 className={styles.portfolioCardTitle}>
                    {locale === 'pl' ? project.titlePl : project.title}
                  </h3>
                  <p className={styles.portfolioCardDescription}>
                    {locale === 'pl' ? project.descriptionPl : project.description}
                  </p>
                  <div className={styles.technologiesList}>
                    {(locale === 'pl' ? project.technologiesPl : project.technologies).map((tech, index) => (
                      <span key={index} className={styles.technologyTag}>{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className={styles.portfolioCardLink}>
                    {locale === 'pl' ? 'Zobacz szczegóły' : 'View details'} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage; 