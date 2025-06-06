import { useLanguage } from '../../hooks/useLanguage';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import styles from './ProjectDetail.module.css';
import { Link } from 'react-router-dom';

const EnglishTutor = () => {
  const { locale } = useLanguage();

  // Project data
  const project = {
    title: 'Kurs8Klasisty - Webpage for English Tutor',
    titlePl: 'Kurs8Klasisty - Strona dla Nauczyciela Angielskiego',
    client: 'Kurs8Klasisty',
    clientPl: 'Kurs8Klasisty',
    year: '2025',
    duration: '4 weeks',
    durationPl: '4 tygodni',
    category: 'Web Development',
    categoryPl: 'Rozwój Web',
    technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    technologiesPl: ['HTML', 'CSS', 'PHP','JavaScript', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    mainImage: '/images/portfolio/english-tutor/main.png',
    description: [
      'This project is a complete web solution for "Solidny Od Podszewki," an online course preparing Polish 8th-grade students for their English language exam. The platform consists of a public-facing promotional website and an integrated, full-featured blog, all managed through a secure and intuitive administrative back-end.',
      'The project masterfully combines a dynamic PHP backend with a static site generation capability. This allows for easy, real-time content management via the admin panel while offering the option to deploy a highly performant and secure static version of the site.'
    ],
    descriptionPl: [
      'Ten projekt to kompletne rozwiązanie internetowe dla "Solidny Od Podszewki", kursu online przygotowującego polskich uczniów 8 klas do egzaminu z języka angielskiego. Platforma składa się z publicznej strony promocyjnej oraz zintegrowanego, w pełni funkcjonalnego bloga, zarządzanych przez bezpieczny i intuicyjny panel administracyjny.',
      'Projekt umiejętnie łączy dynamiczny backend PHP z możliwością generowania statycznej strony. Umożliwia to łatwe zarządzanie treścią w czasie rzeczywistym przez panel administracyjny, oferując jednocześnie opcję wdrożenia wysoce wydajnej i bezpiecznej statycznej wersji strony.'
    ],
    features: [
      'Hybrid Content Strategy (dynamic PHP backend with static site generation)',
      'Modern & Responsive Frontend using Tailwind CSS and Alpine.js',
      'Comprehensive SEO Optimization',
      'Asynchronous Content Loading with AJAX',
      'Secure Admin Panel',
      'Complete blog post management system',
      'Contact form with server-side validation',
      'One-click static site generation'
    ],
    featuresPl: [
      'Hybrydowa strategia treści (dynamiczny backend PHP z generowaniem statycznych stron)',
      'Nowoczesny i responsywny frontend z użyciem Tailwind CSS i Alpine.js',
      'Kompleksowa optymalizacja SEO',
      'Asynchroniczne ładowanie treści za pomocą AJAX',
      'Bezpieczny panel administracyjny',
      'Kompletny system zarządzania wpisami na blogu',
      'Formularz kontaktowy z walidacją po stronie serwera',
      'Generowanie statycznej strony jednym kliknięciem'
    ],
    challenge: 'The main challenge was creating a system that could function both as a dynamic CMS with real-time updates and as a high-performance static site, while ensuring a seamless user experience and maintaining robust security.',
    challengePl: 'Głównym wyzwaniem było stworzenie systemu, który mógłby funkcjonować zarówno jako dynamiczny CMS z aktualizacjami w czasie rzeczywistym, jak i jako wysokowydajna strona statyczna, zapewniając jednocześnie płynne doświadczenie użytkownika i zachowując solidne bezpieczeństwo.',
    solution: 'We implemented a hybrid architecture that leverages PHP for the backend with MySQL database, combined with modern frontend technologies like Tailwind CSS and Alpine.js. The admin panel includes comprehensive CRUD functionality and a WYSIWYG editor, while the static site generation capability improves performance and security.',
    solutionPl: 'Zaimplementowaliśmy hybrydową architekturę wykorzystującą PHP dla backendu z bazą danych MySQL, w połączeniu z nowoczesnymi technologiami frontendu, takimi jak Tailwind CSS i Alpine.js. Panel administracyjny zawiera kompleksową funkcjonalność CRUD i edytor WYSIWYG, podczas gdy możliwość generowania statycznych stron poprawia wydajność i bezpieczeństwo.',
    results: 'The platform successfully provides a comprehensive learning resource for 8th-grade students, combining promotional content with educational blog posts. The admin panel allows for easy content management, while the SEO optimization ensures high visibility in search results.',
    resultsPl: 'Platforma z powodzeniem zapewnia kompleksowe zasoby edukacyjne dla uczniów 8 klas, łącząc treści promocyjne z edukacyjnymi wpisami na blogu. Panel administracyjny umożliwia łatwe zarządzanie treścią, podczas gdy optymalizacja SEO zapewnia wysoką widoczność w wynikach wyszukiwania.',
    images: [
      {
        url: '/images/portfolio/english-tutor/k2.png',
        caption: 'Homepage with course information and blog section',
        captionPl: 'Strona główna z informacjami o kursie i sekcją bloga'
      },
      {
        url: '/images/portfolio/english-tutor/k3.png',
        caption: 'Admin panel with blog post management',
        captionPl: 'Panel administracyjny z zarządzaniem wpisami na blogu'
      },
      {
        url: '/images/portfolio/english-tutor/k4.png',
        caption: 'Blog page with category filtering',
        captionPl: 'Strona bloga z filtrowaniem kategorii'
      }
    ]
  };

  // Prepare the page title and description
  const pageTitle = locale === 'pl' ? project.titlePl : project.title;
  const pageDescription = locale === 'pl'
    ? `Szczegóły projektu ${project.titlePl} - platforma kursów online i blog dla uczniów 8 klas.`
    : `Project details for ${project.title} - an online course and blog platform for 8th-grade students.`;
  
  // Structured data for project case study
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": `https://titancode.dev${project.mainImage}`,
    "datePublished": "2023-04-15T08:00:00+01:00",
    "dateModified": "2023-05-10T10:30:00+01:00",
    "author": {
      "@type": "Organization",
      "name": "TitanCode",
      "url": "https://titancode.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TitanCode",
      "logo": {
        "@type": "ImageObject",
        "url": "https://titancode.dev/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://titancode.dev/portfolio/english-tutor"
    },
    "keywords": [
      "Online course platform",
      "Educational website",
      "Blog platform",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "Web development"
    ]
  };

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        canonical="/portfolio/english-tutor"
        ogType="article"
        ogImage={`https://titancode.dev${project.mainImage}`}
        structuredData={structuredData}
      />

      <PageHeader
        title={locale === 'pl' ? project.titlePl : project.title}
        description={locale === 'pl'
          ? 'Szczegóły projektu i proces tworzenia'
          : 'Project details and creation process'
        }
      />

      <div className={styles.projectDetail}>
        <div className="container">
          <div className={styles.projectHero}>
            <img 
              src={project.mainImage} 
              alt={locale === 'pl' ? project.titlePl : project.title} 
              className={styles.projectMainImage}
            />
            <div className={styles.projectQuickInfo}>
              <div className={styles.projectQuickInfoLeft}>
                <h1>{locale === 'pl' ? project.titlePl : project.title}</h1>
                <div className={styles.projectCategory}>
                  {locale === 'pl' ? project.categoryPl : project.category}
                </div>
              </div>
              <div className={styles.projectQuickInfoRight}>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>{locale === 'pl' ? 'Klient' : 'Client'}</span>
                  <span className={styles.quickInfoValue}>{locale === 'pl' ? project.clientPl : project.client}</span>
                </div>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>{locale === 'pl' ? 'Rok' : 'Year'}</span>
                  <span className={styles.quickInfoValue}>{project.year}</span>
                </div>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>{locale === 'pl' ? 'Czas' : 'Duration'}</span>
                  <span className={styles.quickInfoValue}>{locale === 'pl' ? project.durationPl : project.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.technologiesSection}>
              <h3 className={styles.technologiesTitle}>{locale === 'pl' ? 'Wykorzystane technologie' : 'Technologies Used'}</h3>
              <div className={styles.techList}>
                {(locale === 'pl' ? project.technologiesPl : project.technologies).map((tech, index) => (
                  <span key={index} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.projectDescription}>
              {(locale === 'pl' ? project.descriptionPl : project.description).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.projectSection}>
              <h2>{locale === 'pl' ? 'Funkcje' : 'Features'}</h2>
              <ul className={styles.featuresList}>
                {(locale === 'pl' ? project.featuresPl : project.features).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.projectSection}>
              <div className={styles.challengeSection}>
                <div className={styles.sectionIcon}>
                  <i className="fas fa-mountain"></i>
                </div>
                <div className={styles.sectionContent}>
                  <h3>{locale === 'pl' ? 'Wyzwanie' : 'Challenge'}</h3>
                  <p>{locale === 'pl' ? project.challengePl : project.challenge}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectSection}>
              <div className={styles.solutionSection}>
                <div className={styles.sectionIcon}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className={styles.sectionContent}>
                  <h3>{locale === 'pl' ? 'Rozwiązanie' : 'Solution'}</h3>
                  <p>{locale === 'pl' ? project.solutionPl : project.solution}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectSection}>
              <div className={styles.resultsSection}>
                <div className={styles.sectionIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className={styles.sectionContent}>
                  <h3>{locale === 'pl' ? 'Rezultaty' : 'Results'}</h3>
                  <p>{locale === 'pl' ? project.resultsPl : project.results}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectGallery}>
              <div className={styles.galleryHeader}>
                <h2>{locale === 'pl' ? 'Zrzuty ekranu' : 'Screenshots'}</h2>
              </div>
              <div className={styles.galleryGrid}>
                {project.images.map((image, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <img src={image.url} alt={locale === 'pl' ? image.captionPl : image.caption} />
                    <p className={styles.imageCaption}>
                      {locale === 'pl' ? image.captionPl : image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.projectFooter}>
              <div className={styles.projectNavigation}>
                <Link to="/portfolio" className={styles.backButton}>
                  <i className="fas fa-arrow-left"></i>
                  {locale === 'pl' ? 'Powrót do portfolio' : 'Back to Portfolio'}
                </Link>
                <a href="https://kurs8klasisty.pl" target="_blank" rel="noopener noreferrer" className={styles.viewLiveButton}>
                  <i className="fas fa-external-link-alt"></i>
                  {locale === 'pl' ? 'Zobacz stronę' : 'Visit Website'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnglishTutor; 