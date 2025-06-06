import { useLanguage } from '../../hooks/useLanguage';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import styles from './ProjectDetail.module.css';
import { Link } from 'react-router-dom';

const AuctionPortal = () => {
  const { locale } = useLanguage();

  // Project data
  const project = {
    title: 'NanoBid - An Auction Platform',
    titlePl: 'NanoBid - Platforma Aukcyjna',
    client: 'Self-initiated Project',
    clientPl: 'Projekt Własny',
    year: '2025',
    duration: '4 months',
    durationPl: '4 miesiące',
    category: 'Full Stack Application',
    categoryPl: 'Aplikacja Full Stack',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'PHPMailer'],
    technologiesPl: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'PHPMailer'],
    mainImage: '/images/portfolio/nanobid/n1.png',
    description: [
      'NanoBid is a lightweight and user-friendly online auction platform built from the ground up with vanilla PHP. It is designed for auction houses that want to run their own timed online auctions without relying on expensive third-party services.',
      'The application is built using a custom Model-View-Controller (MVC) architecture. This separation of concerns makes the code more organized, maintainable, and scalable.'
    ],
    descriptionPl: [
      'NanoBid to lekka i przyjazna dla użytkownika platforma aukcyjna online, zbudowana od podstaw w czystym PHP. Jest przeznaczona dla domów aukcyjnych, które chcą prowadzić własne aukcje internetowe na czas, bez polegania na drogich usługach firm trzecich.',
      'Aplikacja jest zbudowana w oparciu o niestandardową architekturę Model-View-Controller (MVC). Ten podział odpowiedzialności sprawia, że kod jest bardziej zorganizowany, łatwiejszy w utrzymaniu i skalowalny.'
    ],
    features: [
      'Secure user registration with email confirmation, login, and password reset',
      'Role-based access control (administrators and users)',
      'Comprehensive admin dashboard for managing users, auctions, and lots',
      'Full CRUD functionality for auctions and lots with image uploads',
      'Proxy bidding system automatically bids on behalf of users',
      'User watchlist to track interesting items',
      'Clean and responsive UI built with Bootstrap 5'
    ],
    featuresPl: [
      'Bezpieczna rejestracja użytkownika z potwierdzeniem e-mail, logowaniem i resetowaniem hasła',
      'Kontrola dostępu oparta na rolach (administratorzy i użytkownicy)',
      'Kompleksowy panel administracyjny do zarządzania użytkownikami, aukcjami i przedmiotami',
      'Pełna funkcjonalność CRUD dla aukcji i przedmiotów z przesyłaniem zdjęć',
      'System licytacji z agentem (proxy bidding) automatycznie licytuje w imieniu użytkowników',
      'Lista obserwowanych przedmiotów do śledzenia interesujących pozycji',
      'Czysty i responsywny interfejs użytkownika zbudowany w oparciu o Bootstrap 5'
    ],
    challenge: 'The primary challenge was to design and build a complete, secure, and reliable auction system from scratch using pure PHP, including a custom MVC framework. The goal was to avoid over-engineering and create a clean, maintainable codebase focused on core auction functionalities.',
    challengePl: 'Głównym wyzwaniem było zaprojektowanie i zbudowanie od podstaw kompletnego, bezpiecznego i niezawodnego systemu aukcyjnego przy użyciu czystego PHP, włączając w to niestandardowy framework MVC. Celem było uniknięcie nadmiernej inżynierii i stworzenie czystej, łatwej w utrzymaniu bazy kodu skoncentrowanej na podstawowych funkcjonalnościach aukcyjnych.',
    solution: 'A custom MVC architecture was implemented to structure the application logically. PDO with prepared statements is used for all database interactions to prevent SQL injection. A custom router handles all requests, directing them to the appropriate controllers. The frontend was built with Bootstrap 5, ensuring a professional and responsive user experience.',
    solutionPl: 'Wdrożono niestandardową architekturę MVC w celu logicznego ustrukturyzowania aplikacji. Do wszystkich interakcji z bazą danych wykorzystano PDO z przygotowanymi instrukcjami w celu zapobiegania atakom SQL injection. Niestandardowy router obsługuje wszystkie żądania, kierując je do odpowiednich kontrolerów. Frontend został zbudowany przy użyciu Bootstrap 5, zapewniając profesjonalne i responsywne doświadczenie użytkownika.',
    results: 'The project is fully functional, with all core features implemented and tested. It provides a solid foundation for a real-world auction platform, including a complete user authentication system, admin/user dashboards, full auction and lot management, a proxy bidding system, and a user watchlist. The development process followed a clear roadmap, resulting in clean and well-documented code.',
    resultsPl: 'Projekt jest w pełni funkcjonalny, a wszystkie podstawowe funkcje zostały zaimplementowane i przetestowane. Stanowi solidną podstawę dla rzeczywistej platformy aukcyjnej, w tym kompletny system uwierzytelniania użytkowników, panele administracyjne i użytkownika, pełne zarządzanie aukcjami i przedmiotami, system licytacji z agentem oraz listę obserwowanych przez użytkownika. Proces tworzenia oprogramowania przebiegał zgodnie z przejrzystą mapą drogową, co zaowocowało czystym i dobrze udokumentowanym kodem.',
    images: [
      {
        url: '/images/portfolio/nanobid/n1.png',
        caption: 'The main page of the auction portal',
        captionPl: 'Główna strona portalu aukcyjnego'
      },
      {
        url: '/images/portfolio/nanobid/n2.png',
        caption: 'Public auction page',
        captionPl: 'Strona aukcji publicznej'
      },
      {
        url: '/images/portfolio/nanobid/n3.png',
        caption: 'Lot detail page with bidding form',
        captionPl: 'Strona szczegółów przedmiotu z formularzem licytacji'
      },
      {
        url: '/images/portfolio/nanobid/n4.png',
        caption: 'Admin dashboard',
        captionPl: 'Panel administratora'
      },
      {
        url: '/images/portfolio/nanobid/n5.png',
        caption: 'Admin lot management page',
        captionPl: 'Panel zarządzania przedmiotami'
      },
      {
        url: '/images/portfolio/nanobid/n6.png',
        caption: 'User dashboard',
        captionPl: 'Panel użytkownika'
      },
      {
        url: '/images/portfolio/nanobid/n7.png',
        caption: 'User bid history',
        captionPl: 'Historia licytacji użytkownika'
      }
    ]
  };

  const pageTitle = locale === 'pl' ? project.titlePl : project.title;
  const pageDescription = locale === 'pl'
    ? `Szczegóły projektu ${project.titlePl} - lekka platforma aukcyjna zbudowana w PHP.`
    : `Project details for ${project.title} - a lightweight auction platform built with PHP.`;

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        canonical="/portfolio/nanobid"
        ogType="article"
        ogImage={`https://titancode.dev${project.mainImage}`}
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

export default AuctionPortal; 