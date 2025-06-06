import { useLanguage } from '../../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import styles from './ProjectDetail.module.css';
import { Link } from 'react-router-dom';

const CommercialProject = () => {
  const { locale } = useLanguage();

  // Project data
  const project = {
    title: 'Commercial Project',
    titlePl: 'Projekt Komercyjny',
    client: 'Enterprise Client',
    clientPl: 'Klient Korporacyjny',
    year: '2024',
    status: 'In Progress',
    statusPl: 'W Trakcie Realizacji',
    category: 'Enterprise Solution',
    categoryPl: 'Rozwiązanie Korporacyjne',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sanity.io', 'Vercel'],
    technologiesPl: ['React', 'Next.js', 'Tailwind CSS', 'Sanity.io', 'Vercel'],
    mainImage: '/images/portfolio/commercial-project/main.jpg',
    description: [
      'This exciting commercial project is currently in active development and will be unveiled soon. We\'re building a cutting-edge digital solution using the latest technologies and best practices.',
      'Due to confidentiality agreements, we can only share limited information about this project at this time. Stay tuned for the full reveal upon completion.'
    ],
    descriptionPl: [
      'Ten ekscytujący projekt komercyjny jest obecnie w aktywnej fazie rozwoju i zostanie wkrótce zaprezentowany. Tworzymy najnowocześniejsze rozwiązanie cyfrowe, wykorzystując najnowsze technologie i najlepsze praktyki.',
      'Ze względu na umowy o poufności, możemy obecnie udostępnić jedynie ograniczone informacje o tym projekcie. Śledź nas, aby dowiedzieć się więcej po ukończeniu projektu.'
    ],
    plannedFeatures: [
      'Innovative user interface with micro-interactions',
      'Advanced data visualization components',
      'Multi-language support for global audience',
      'Real-time collaboration features',
      'Comprehensive analytics dashboard',
      'Integration with third-party services and APIs'
    ],
    plannedFeaturesPl: [
      'Innowacyjny interfejs użytkownika z mikrointerakcjami',
      'Zaawansowane komponenty wizualizacji danych',
      'Obsługa wielu języków dla globalnych odbiorców',
      'Funkcje współpracy w czasie rzeczywistym',
      'Kompleksowy panel analityczny',
      'Integracja z usługami i API stron trzecich'
    ],
    approach: 'We\'re using an Agile development methodology with two-week sprints, regular client feedback sessions, and continuous integration to ensure the project meets all requirements and deadlines.',
    approachPl: 'Stosujemy metodologię zwinnego rozwoju z dwutygodniowymi sprintami, regularnymi sesjami informacji zwrotnych od klientów i ciągłą integracją, aby zapewnić, że projekt spełni wszystkie wymagania i terminy.',
    timeline: 'The project is scheduled for completion in Q3 2024, with a beta release planned for early summer 2024.',
    timelinePl: 'Planowane ukończenie projektu to III kwartał 2024, z wydaniem wersji beta zaplanowanym na wczesne lato 2024.',
    images: [
      {
        url: '/images/portfolio/commercial-project/preview1.jpg',
        caption: 'Early UI design concepts (anonymized)',
        captionPl: 'Wczesne koncepcje projektu UI (zanonimizowane)'
      },
      {
        url: '/images/portfolio/commercial-project/preview2.jpg',
        caption: 'Architecture diagram preview',
        captionPl: 'Podgląd diagramu architektury'
      },
      {
        url: '/images/portfolio/commercial-project/preview3.jpg',
        caption: 'Development environment setup',
        captionPl: 'Konfiguracja środowiska programistycznego'
      },
      {
        url: '/images/portfolio/commercial-project/preview4.jpg',
        caption: 'Project roadmap (redacted)',
        captionPl: 'Plan projektu (zredagowany)'
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
            ? `Szczegóły projektu ${project.titlePl} - innowacyjny projekt w trakcie realizacji.`
            : `Project details for ${project.title} - innovative project currently in development.`
          }
        />
      </Helmet>

      <PageHeader
        title={locale === 'pl' ? project.titlePl : project.title}
        description={locale === 'pl'
          ? 'Projekt w trakcie realizacji'
          : 'Project in progress'
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
            <div className={styles.inProgressBanner}>
              {locale === 'pl' ? 'W TRAKCIE REALIZACJI' : 'IN PROGRESS'}
            </div>
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
                  <span className={styles.quickInfoLabel}>{locale === 'pl' ? 'Status' : 'Status'}</span>
                  <span className={`${styles.quickInfoValue} ${styles.statusInProgress}`}>
                    {locale === 'pl' ? project.statusPl : project.status}
                  </span>
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
              <h2>{locale === 'pl' ? 'Planowane funkcje' : 'Planned Features'}</h2>
              <ul className={styles.featuresList}>
                {(locale === 'pl' ? project.plannedFeaturesPl : project.plannedFeatures).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.projectSection}>
              <div className={styles.solutionSection}>
                <div className={styles.sectionIcon}>
                  <i className="fas fa-tasks"></i>
                </div>
                <div className={styles.sectionContent}>
                  <h3>{locale === 'pl' ? 'Podejście' : 'Approach'}</h3>
                  <p>{locale === 'pl' ? project.approachPl : project.approach}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectSection}>
              <div className={styles.resultsSection}>
                <div className={styles.sectionIcon}>
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className={styles.sectionContent}>
                  <h3>{locale === 'pl' ? 'Harmonogram' : 'Timeline'}</h3>
                  <p>{locale === 'pl' ? project.timelinePl : project.timeline}</p>
                </div>
              </div>
            </div>

            <div className={styles.projectGallery}>
              <div className={styles.galleryHeader}>
                <h2>{locale === 'pl' ? 'Podgląd prac' : 'Work Preview'}</h2>
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
            
            <div className={styles.contactForUpdates}>
              <h3>{locale === 'pl' ? 'Zainteresowany tym projektem?' : 'Interested in this project?'}</h3>
              <p>
                {locale === 'pl' 
                  ? 'Skontaktuj się z nami, aby otrzymywać informacje o postępach i premierze.' 
                  : 'Contact us to receive updates on progress and launch.'
                }
              </p>
              <Link to="/contact" className={styles.contactButton}>
                {locale === 'pl' ? 'Skontaktuj się' : 'Get in touch'}
              </Link>
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

export default CommercialProject; 