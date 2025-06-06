import { useLanguage } from '../../hooks/useLanguage';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import styles from './ProjectDetail.module.css';
import { Link } from 'react-router-dom';

const EnglishTutor = () => {
  const { locale } = useLanguage();

  // Project data
  const project = {
    title: 'English Tutor Website',
    titlePl: 'Strona Nauczyciela Angielskiego',
    client: 'Sarah Johnson',
    clientPl: 'Sarah Johnson',
    year: '2023',
    duration: '4 weeks',
    durationPl: '4 tygodnie',
    category: 'Web Development',
    categoryPl: 'Rozwój Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'CSS Modules'],
    technologiesPl: ['React', 'Node.js', 'MongoDB', 'Moduły CSS'],
    mainImage: '/images/portfolio/english-tutor/main.jpg',
    description: [
      'This website was developed for an English tutor to showcase her teaching services, course offerings, and to provide an easy way for students to book lessons.',
      'The project included a modern, responsive design with an emphasis on usability and clear information architecture. A custom booking system was integrated to allow students to see availability and schedule lessons.'
    ],
    descriptionPl: [
      'Ta strona została stworzona dla nauczycielki języka angielskiego, aby zaprezentować jej usługi nauczania, ofertę kursów oraz umożliwić uczniom łatwe rezerwowanie lekcji.',
      'Projekt obejmował nowoczesny, responsywny design z naciskiem na użyteczność i klarowną architekturę informacji. Zintegrowany został niestandardowy system rezerwacji, pozwalający uczniom na sprawdzenie dostępności i zaplanowanie lekcji.'
    ],
    features: [
      'Responsive design for all devices',
      'Course catalog with detailed information',
      'Student testimonials section',
      'Integrated booking system',
      'Contact form with validation',
      'Blog section for sharing learning resources',
      'Multi-language support (English and Polish)',
      'SEO optimization'
    ],
    featuresPl: [
      'Responsywny design dla wszystkich urządzeń',
      'Katalog kursów ze szczegółowymi informacjami',
      'Sekcja z opiniami uczniów',
      'Zintegrowany system rezerwacji',
      'Formularz kontaktowy z walidacją',
      'Sekcja bloga do udostępniania materiałów edukacyjnych',
      'Obsługa wielu języków (angielski i polski)',
      'Optymalizacja SEO'
    ],
    challenge: 'The main challenge was creating an intuitive booking system that would sync with the tutor\'s calendar and prevent double bookings while being easy for students to use.',
    challengePl: 'Głównym wyzwaniem było stworzenie intuicyjnego systemu rezerwacji, który synchronizowałby się z kalendarzem nauczyciela i zapobiegał podwójnym rezerwacjom, będąc jednocześnie łatwym w użyciu dla uczniów.',
    solution: 'We implemented a custom calendar solution integrated with Google Calendar API that automatically updates availability and sends confirmation emails to both the tutor and students.',
    solutionPl: 'Zaimplementowaliśmy niestandardowe rozwiązanie kalendarza zintegrowane z API Google Calendar, które automatycznie aktualizuje dostępność i wysyła e-maile z potwierdzeniem zarówno do nauczyciela, jak i uczniów.',
    results: 'The website resulted in a 40% increase in booking requests within the first month after launch, and significantly reduced the administrative time spent on scheduling.',
    resultsPl: 'Strona zaowocowała 40% wzrostem liczby zapytań o rezerwację w ciągu pierwszego miesiąca po uruchomieniu i znacznie skróciła czas administracyjny poświęcany na planowanie.',
    images: [
      {
        url: '/images/portfolio/english-tutor/screenshot1.jpg',
        caption: 'Homepage with hero section and course offerings',
        captionPl: 'Strona główna z sekcją hero i ofertą kursów'
      },
      {
        url: '/images/portfolio/english-tutor/screenshot2.jpg',
        caption: 'Booking system interface with calendar',
        captionPl: 'Interfejs systemu rezerwacji z kalendarzem'
      },
      {
        url: '/images/portfolio/english-tutor/screenshot3.jpg',
        caption: 'Testimonials section with student feedback',
        captionPl: 'Sekcja z opiniami i informacjami zwrotnymi od uczniów'
      }
    ]
  };

  // Prepare the page title and description
  const pageTitle = locale === 'pl' ? project.titlePl : project.title;
  const pageDescription = locale === 'pl'
    ? `Szczegóły projektu ${project.titlePl} - nowoczesna strona internetowa dla nauczyciela języka angielskiego.`
    : `Project details for ${project.title} - a modern website for an English tutor.`;
  
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
      "English tutor website",
      "educational website",
      "booking system",
      "React",
      "Node.js",
      "MongoDB",
      "web development"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnglishTutor; 