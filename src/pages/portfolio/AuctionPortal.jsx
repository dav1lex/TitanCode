import { useLanguage } from '../../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import styles from './ProjectDetail.module.css';
import { Link } from 'react-router-dom';

const AuctionPortal = () => {
  const { locale } = useLanguage();

  // Project data
  const project = {
    title: 'Auction Portal',
    titlePl: 'Portal Aukcyjny',
    client: 'AuctionHub Inc.',
    clientPl: 'AuctionHub Inc.',
    year: '2023',
    duration: '3 months',
    durationPl: '3 miesiące',
    category: 'Full Stack Application',
    categoryPl: 'Aplikacja Full Stack',
    technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS'],
    technologiesPl: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS'],
    mainImage: '/images/portfolio/auction-portal/main.jpg',
    description: [
      'The Auction Portal is a comprehensive platform that enables users to create accounts, list items for auction, bid on items in real-time, and complete secure transactions.',
      'This full-stack application was built with scalability in mind, incorporating real-time bidding functionality, secure payment processing, and a robust notification system to keep users informed about auction activities.'
    ],
    descriptionPl: [
      'Portal Aukcyjny to kompleksowa platforma umożliwiająca użytkownikom tworzenie kont, wystawianie przedmiotów na aukcję, licytowanie w czasie rzeczywistym oraz bezpieczne przeprowadzanie transakcji.',
      'Ta aplikacja full-stack została zbudowana z myślą o skalowalności, zawiera funkcję licytacji w czasie rzeczywistym, bezpieczne przetwarzanie płatności oraz solidny system powiadomień informujący użytkowników o aktywnościach aukcyjnych.'
    ],
    features: [
      'User registration and authentication system',
      'Real-time bidding with WebSockets',
      'Detailed item listings with multiple photo uploads',
      'Advanced search and filtering options',
      'Secure payment processing',
      'Seller and buyer dashboards',
      'Automated email notifications',
      'Admin panel for content moderation',
      'Mobile responsive interface'
    ],
    featuresPl: [
      'System rejestracji i uwierzytelniania użytkowników',
      'Licytacja w czasie rzeczywistym z wykorzystaniem WebSockets',
      'Szczegółowe oferty przedmiotów z możliwością przesyłania wielu zdjęć',
      'Zaawansowane opcje wyszukiwania i filtrowania',
      'Bezpieczne przetwarzanie płatności',
      'Panele dla sprzedających i kupujących',
      'Zautomatyzowane powiadomienia e-mail',
      'Panel administracyjny do moderacji treści',
      'Interfejs dostosowany do urządzeń mobilnych'
    ],
    challenge: 'The main challenge was building a real-time bidding system that could handle thousands of concurrent users without latency issues, while ensuring data consistency across the system.',
    challengePl: 'Głównym wyzwaniem było zbudowanie systemu licytacji w czasie rzeczywistym, który mógłby obsłużyć tysiące jednoczesnych użytkowników bez problemów z opóźnieniami, zapewniając jednocześnie spójność danych w całym systemie.',
    solution: 'We implemented a combination of WebSockets for real-time communication and Redis for caching and pub/sub messaging, with a microservice architecture that allowed for horizontal scaling during peak auction times.',
    solutionPl: 'Zaimplementowaliśmy kombinację WebSockets do komunikacji w czasie rzeczywistym i Redis do buforowania i komunikacji pub/sub, z architekturą mikroserwisową, która umożliwiła skalowanie horyzontalne w okresach szczytowych aukcji.',
    results: 'The platform successfully launched with over 5,000 registered users in the first month and has processed more than 10,000 auctions with 99.9% uptime, even during peak bidding periods.',
    resultsPl: 'Platforma została pomyślnie uruchomiona z ponad 5000 zarejestrowanych użytkowników w pierwszym miesiącu i przetworzyła ponad 10 000 aukcji z dostępnością 99,9%, nawet w okresach szczytowych licytacji.',
    images: [
      {
        url: '/images/portfolio/auction-portal/screenshot1.jpg',
        caption: 'Homepage with featured auctions',
        captionPl: 'Strona główna z wyróżnionymi aukcjami'
      },
      {
        url: '/images/portfolio/auction-portal/screenshot2.jpg',
        caption: 'Real-time bidding interface',
        captionPl: 'Interfejs licytacji w czasie rzeczywistym'
      },
      {
        url: '/images/portfolio/auction-portal/screenshot3.jpg',
        caption: 'Seller dashboard with analytics',
        captionPl: 'Panel sprzedawcy z analityką'
      },
      {
        url: '/images/portfolio/auction-portal/screenshot4.jpg',
        caption: 'Mobile responsive design',
        captionPl: 'Responsywny design mobilny'
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>
          {locale === 'pl' 
            ? `${project.titlePl} - Portfolio | TitanCode` 
            : `${project.title} - Portfolio | TitanCode`
          }
        </title>
        <meta
          name="description"
          content={locale === 'pl'
            ? `Szczegóły projektu ${project.titlePl} - zaawansowany portal aukcyjny z funkcjonalnością licytacji w czasie rzeczywistym.`
            : `Project details for ${project.title} - advanced auction platform with real-time bidding functionality.`
          }
        />
      </Helmet>

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

export default AuctionPortal; 