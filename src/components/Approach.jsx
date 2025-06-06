import { useLanguage } from '../hooks/useLanguage';
import styles from './Approach.module.css';

const Approach = () => {
  const { t, locale } = useLanguage();
  
  const approaches = [
    {
      icon: '💡',
      title: 'Understanding Needs',
      titlePl: 'Zrozumienie Potrzeb',
      description: 'We start each project by thoroughly understanding your needs and business goals.',
      descriptionPl: 'Każdy projekt zaczynamy od dokładnego zrozumienia Twoich potrzeb i celów biznesowych.'
    },
    {
      icon: '🧹',
      title: 'Clean Code',
      titlePl: 'Czysty Kod',
      description: 'We write clean, efficient code that is easy to maintain and expand in the future.',
      descriptionPl: 'Piszemy czysty, wydajny kod, który jest łatwy w utrzymaniu i rozbudowie w przyszłości.'
    },
    {
      icon: '🚀',
      title: 'Fast Results',
      titlePl: 'Szybkie Wyniki',
      description: 'We deliver projects on time, with emphasis on performance and optimization.',
      descriptionPl: 'Dostarczamy projekty na czas, kładąc nacisk na wydajność i optymalizację.'
    }
  ];
  
  const developmentSteps = [
    {
      icon: '📊',
      title: 'Research & Analysis',
      titlePl: 'Badania i Analiza',
      description: 'We begin with thorough market research and competitive analysis to identify opportunities for your business to stand out.',
      descriptionPl: 'Zaczynamy od dokładnych badań rynku i analizy konkurencji, aby zidentyfikować możliwości wyróżnienia Twojej firmy.'
    },
    {
      icon: '🎨',
      title: 'Design & Prototyping',
      titlePl: 'Projektowanie i Prototypowanie',
      description: 'Creating intuitive, user-friendly interfaces that engage visitors and guide them toward conversion.',
      descriptionPl: 'Tworzenie intuicyjnych, przyjaznych dla użytkownika interfejsów, które angażują odwiedzających i prowadzą do konwersji.'
    },
    {
      icon: '⚙️',
      title: 'Development & Testing',
      titlePl: 'Rozwój i Testowanie',
      description: 'Building robust, scalable solutions using modern technologies and thorough testing across all devices and browsers.',
      descriptionPl: 'Budowanie solidnych, skalowalnych rozwiązań przy użyciu nowoczesnych technologii i dokładne testowanie na wszystkich urządzeniach i przeglądarkach.'
    },
    {
      icon: '🚀',
      title: 'Launch & Support',
      titlePl: 'Wdrożenie i Wsparcie',
      description: 'Seamless deployment and ongoing support to ensure your website continues to perform optimally and evolve with your business.',
      descriptionPl: 'Bezproblemowe wdrażanie i ciągłe wsparcie, aby zapewnić, że Twoja witryna nadal działa optymalnie i rozwija się wraz z Twoim biznesem.'
    }
  ];
  
  return (
    <section className={styles.approach} id="about-approach">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('about_title')}</h2>
          <p className={styles.sectionDescription}>{t('about_description')}</p>
        </div>
        
        <div className={styles.approachCards}>
          {approaches.map((approach, index) => (
            <div 
              className={styles.approachCard} 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.approachIcon}>{approach.icon}</div>
              <h3 className={styles.approachTitle}>
                {locale === 'pl' ? approach.titlePl : approach.title}
              </h3>
              <p className={styles.approachDescription}>
                {locale === 'pl' ? approach.descriptionPl : approach.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className={styles.approachSummary}>
          <h3 className={styles.summaryTitle}>
            {locale === 'pl' ? 'Nasze Podejście do Rozwoju' : 'Our Development Approach'}
          </h3>
          <div className={styles.summaryContent}>
            {developmentSteps.map((step, index) => (
              <div className={styles.summaryPoint} key={index}>
                <div className={styles.pointIcon}>{step.icon}</div>
                <div className={styles.pointContent}>
                  <h4>{locale === 'pl' ? step.titlePl : step.title}</h4>
                  <p>{locale === 'pl' ? step.descriptionPl : step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.shapeDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
};

export default Approach; 