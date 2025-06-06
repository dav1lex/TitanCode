import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { Helmet } from 'react-helmet-async';
import styles from './Services.module.css';
import WebpageBuildAnimation from '../components/animations/WebpageBuildAnimation';

const Services = () => {
  const { t } = useLanguage();

  const packageExplanations = [
    {
      icon: 'fa-code',
      title: t.locale === 'pl' ? 'Podstawowy' : 'Basic',
      description: t.locale === 'pl'
        ? 'Idealne rozwiązanie dla osób potrzebujących prostej strony internetowej.'
        : 'Perfect solution for those who need a simple website.',
      idealFor: t.locale === 'pl'
        ? 'Idealne dla: Freelancerów i małych firm'
        : 'Ideal for: Freelancers and small businesses'
    },
    {
      icon: 'fa-laptop-code',
      title: t.locale === 'pl' ? 'Złożony' : 'Complex',
      description: t.locale === 'pl'
        ? 'Rozbudowane strony z wieloma podstronami i funkcjonalnością CMS.'
        : 'Advanced websites with multiple pages and CMS functionality.',
      idealFor: t.locale === 'pl'
        ? 'Idealne dla: Średnich firm i blogów'
        : 'Ideal for: Medium businesses and blogs'
    },
    {
      icon: 'fa-shopping-cart',
      title: t.locale === 'pl' ? 'E-commerce' : 'E-commerce',
      description: t.locale === 'pl'
        ? 'Pełne sklepy internetowe z bezpiecznymi płatnościami i zarządzaniem produktami.'
        : 'Full online shops with secure payments and product management.',
      idealFor: t.locale === 'pl'
        ? 'Idealne dla: Sklepów online'
        : 'Ideal for: Online retailers'
    },
    {
      icon: 'fa-building',
      title: t.locale === 'pl' ? 'Enterprise' : 'Enterprise',
      description: t.locale === 'pl'
        ? 'Niestandardowe aplikacje biznesowe z dedykowanymi funkcjami.'
        : 'Custom business applications with dedicated features.',
      idealFor: t.locale === 'pl'
        ? 'Idealne dla: Dużych firm i organizacji'
        : 'Ideal for: Large companies and organizations'
    },
    {
      icon: 'fa-robot',
      title: t.locale === 'pl' ? 'Automatyzacja i SEO' : 'Automation & SEO',
      description: t.locale === 'pl'
        ? 'Skrypty do automatyzacji powtarzalnych zadań i optymalizacja dla wyszukiwarek.'
        : 'Scripts for repetitive tasks and search engine optimization.',
      idealFor: t.locale === 'pl'
        ? 'Idealne dla: Firm z powtarzalnymi procesami'
        : 'Ideal for: Businesses with repetitive processes'
    }
  ];

  // Feature info icons with tooltips
  const featureInfo = {
    responsive: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Dostosowanie do urządzeń mobilnych, tabletów i komputerów'
        : 'Adapts to mobile devices, tablets, and desktop computers'
    },
    hosting: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Pierwszy rok hostingu w cenie usługi'
        : 'First year of hosting included in the service price'
    },
    ssl: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Certyfikat SSL zapewniający bezpieczne połączenie'
        : 'SSL certificate providing secure connection'
    },
    seo: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Optymalizacja pod kątem wyszukiwarek internetowych'
        : 'Optimization for search engines'
    },
    admin: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Panel administracyjny do zarządzania treścią'
        : 'Admin panel for content management'
    },
    blog: {
      icon: 'fa-info-circle',
      tooltip: t.locale === 'pl'
        ? 'Opcjonalnie +300zł'
        : 'Optional +300zł'
    }
  };

  // All-Inclusive features
  const inclusiveFeatures = [
    {
      icon: 'fa-paint-brush',
      title: t.locale === 'pl' ? 'Unikalny Design' : 'Unique Design',
      description: t.locale === 'pl'
        ? 'Każdy projekt jest tworzony od podstaw i dostosowany do Twoich potrzeb, bez gotowych szablonów.'
        : 'Each project is built from scratch and tailored to your needs, without pre-made templates.'
    },
    {
      icon: 'fa-mobile-alt',
      title: t.locale === 'pl' ? 'Responsywność' : 'Responsive Design',
      description: t.locale === 'pl'
        ? 'Wszystkie nasze strony działają perfekcyjnie na każdym urządzeniu, od smartfonów po duże monitory.'
        : 'All our websites work perfectly on every device, from smartphones to large monitors.'
    },
    {
      icon: 'fa-search',
      title: t.locale === 'pl' ? 'Optymalizacja SEO' : 'SEO Optimization',
      description: t.locale === 'pl'
        ? 'Zapewniamy, że Twoja strona będzie widoczna w wyszukiwarkach, aby przyciągnąć więcej klientów.'
        : 'We ensure your site will be visible in search engines to attract more customers.'
    },
    {
      icon: 'fa-tachometer-alt',
      title: t.locale === 'pl' ? 'Wydajność' : 'Performance',
      description: t.locale === 'pl'
        ? 'Dbamy o szybkość ładowania strony, co wpływa na zadowolenie użytkowników i pozycję w Google.'
        : 'We ensure fast loading times, which impacts user satisfaction and Google rankings.'
    },
    {
      icon: 'fa-server',
      title: t.locale === 'pl' ? 'Hosting i Domena' : 'Hosting & Domain',
      description: t.locale === 'pl'
        ? 'Pomagamy w wyborze i konfiguracji hostingu oraz domeny, zapewniając stabilne działanie strony.'
        : 'We help with hosting and domain selection and configuration, ensuring stable website operation.'
    },
    {
      icon: 'fa-lock',
      title: t.locale === 'pl' ? 'Bezpieczeństwo' : 'Security',
      description: t.locale === 'pl'
        ? 'Implementujemy certyfikaty SSL i dbamy o bezpieczeństwo danych Twoich i Twoich klientów.'
        : 'We implement SSL certificates and take care of your and your customers\' data security.'
    }
  ];

  // Automation & SEO features
  const automationFeatures = [
    {
      icon: 'fa-cogs',
      title: t.locale === 'pl' ? 'Niestandardowe skrypty' : 'Custom scripts',
      description: t.locale === 'pl'
        ? 'Automatyzacja powtarzalnych zadań biurowych i procesów biznesowych.'
        : 'Automation of repetitive office tasks and business processes.'
    },
    {
      // instead of excel, go for web scraping, data collecting.
      icon: 'fa-spider',
      title: t.locale === 'pl' ? 'Web Scraping' : 'Web Scraping',
      description: t.locale === 'pl'
        ? 'Zbieranie i analiza danych z różnych stron internetowych i serwisów zewnętrznych.'
        : 'Collection and analysis of data from various websites and external services.'
    },
    {
      icon: 'fa-database',
      title: t.locale === 'pl' ? 'Operacje na danych' : 'Data operations',
      description: t.locale === 'pl'
        ? 'Zbieranie, czyszczenie i transformacja danych z różnych źródeł.'
        : 'Collection, cleaning and transformation of data from various sources.'
    },
    {
      icon: 'fa-search',
      title: t.locale === 'pl' ? 'Analiza słów kluczowych' : 'Keyword analysis',
      description: t.locale === 'pl'
        ? 'Badanie rynku i konkurencji pod kątem najlepszych słów kluczowych dla Twojej branży.'
        : 'Market and competition research for the best keywords for your industry.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t.locale === 'pl' ? 'Usługi - TitanCode' : 'Services - TitanCode'}</title>
        <meta name="description" content={t.locale === 'pl'
          ? 'Profesjonalne usługi tworzenia stron i aplikacji internetowych'
          : 'Professional web development and application services'}
        />
      </Helmet>

      <PageHeader
        title={t.locale === 'pl' ? 'Nasze Usługi' : 'Our Services'}
        description={t.locale === 'pl'
          ? 'Proste i jasne pakiety dopasowane do Twoich potrzeb'
          : 'Simple and different packages for your needs'
        }
      />

      {/* Services Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <div className={styles.servicesHeroContent}>
            <div className={styles.servicesHeroText}>
              <h2>{t.locale === 'pl' ? 'Rozwiązania Webowe Szyte na Miarę' : 'Web Solutions'}</h2>
              <p>{t.locale === 'pl'
                ? 'W TitanCode oferujemy kompleksowe usługi tworzenia stron internetowych i aplikacji webowych dostosowanych do Twoich indywidualnych potrzeb. Niezależnie od wielkości projektu, zapewniamy profesjonalne podejście i najwyższą jakość wykonania.'
                : 'We offer complete website and application development to your individual needs. Regardless of project scope, we provide a professional approach and the highest quality.'
              }</p>
              <div className={styles.servicesHeroCards}>
                <div className={styles.servicesHeroCard}>
                  <div className={styles.heroCardIcon}><i className="fas fa-code"></i></div>
                  <h3>{t.locale === 'pl' ? 'Nowoczesny Kod' : 'Modern Code'}</h3>
                </div>
                <div className={styles.servicesHeroCard}>
                  <div className={styles.heroCardIcon}><i className="fas fa-rocket"></i></div>
                  <h3>{t.locale === 'pl' ? 'Wydajność' : 'Performance'}</h3>
                </div>
                <div className={styles.servicesHeroCard}>
                  <div className={styles.heroCardIcon}><i className="fas fa-pencil-ruler"></i></div>
                  <h3>{t.locale === 'pl' ? 'Unikalny Design' : 'Unique Design'}</h3>
                </div>
                <div className={styles.servicesHeroCard}>
                  <div className={styles.heroCardIcon}><i className="fas fa-mobile-alt"></i></div>
                  <h3>{t.locale === 'pl' ? 'Responsywność' : 'Responsive'}</h3>
                </div>
              </div>
            </div>
            <div className={styles.servicesHeroVisual}>
              <div className={styles.techAnimationWrapper}>
                <WebpageBuildAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t.locale === 'pl' ? 'Cennik' : 'Pricing'}
            </h2>
            <p className={styles.sectionDescription}>
              {t.locale === 'pl'
                ? 'Przejrzyste i konkurencyjne ceny dostosowane do różnych potrzeb'
                : 'Clear and competitive prices tailored to different needs'
              }
            </p>
          </div>

          <div className={styles.packagesExplanation}>
            <div className={styles.explanationRow}>
              {packageExplanations.slice(0, 3).map((pkg, index) => (
                <div key={index} className={styles.packageExplanation}>
                  <div className={styles.explanationHeader}>
                    <div className={styles.explanationIcon}>
                      <i className={`fas ${pkg.icon}`}></i>
                    </div>
                    <h3 className={styles.explanationTitle}>{pkg.title}</h3>
                  </div>
                  <p className={styles.explanationText}>{pkg.description}</p>
                  <p className={styles.explanationIdeal}>{pkg.idealFor}</p>
                </div>
              ))}
            </div>
            <div className={styles.explanationRowSecond}>
              {packageExplanations.slice(3).map((pkg, index) => (
                <div key={index} className={styles.packageExplanation}>
                  <div className={styles.explanationHeader}>
                    <div className={styles.explanationIcon}>
                      <i className={`fas ${pkg.icon}`}></i>
                    </div>
                    <h3 className={styles.explanationTitle}>{pkg.title}</h3>
                  </div>
                  <p className={styles.explanationText}>{pkg.description}</p>
                  <p className={styles.explanationIdeal}>{pkg.idealFor}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.servicesComparison}>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th className={styles.featureHeader}>
                      {t.locale === 'pl' ? 'Funkcje' : 'Features'}
                    </th>
                    <th>{t.locale === 'pl' ? 'Podstawowy' : 'Basic'}</th>
                    <th>{t.locale === 'pl' ? 'Złożony' : 'Complex'}</th>
                    <th>{t.locale === 'pl' ? 'E-commerce' : 'E-commerce'}</th>
                    <th className={styles.premiumColumn}>{t.locale === 'pl' ? 'Enterprise' : 'Enterprise'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Responsywny design' : 'Responsive design'}
                      <span className={styles.infoIcon} data-tooltip={featureInfo.responsive.tooltip}>
                        <i className={`fas ${featureInfo.responsive.icon}`}></i>
                      </span>
                    </td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Hosting (pierwszy rok)' : 'Hosting (first year)'}
                      <span className={styles.infoIcon} data-tooltip={featureInfo.hosting.tooltip}>
                        <i className={`fas ${featureInfo.hosting.icon}`}></i>
                      </span>
                    </td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Certyfikat SSL' : 'SSL Certificate'}
                      <span className={styles.infoIcon} data-tooltip={featureInfo.ssl.tooltip}>
                        <i className={`fas ${featureInfo.ssl.icon}`}></i>
                      </span>
                    </td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Optymalizacja SEO' : 'SEO Optimization'}
                      <span className={styles.infoIcon} data-tooltip={featureInfo.seo.tooltip}>
                        <i className={`fas ${featureInfo.seo.icon}`}></i>
                      </span>
                    </td>
                    <td>{t.locale === 'pl' ? 'Podstawowa' : 'Basic'}</td>
                    <td>{t.locale === 'pl' ? 'Zaawansowana' : 'Advanced'}</td>
                    <td>{t.locale === 'pl' ? 'Zaawansowana' : 'Advanced'}</td>
                    <td className={styles.premiumColumn}>{t.locale === 'pl' ? 'Zaawansowana' : 'Advanced'}</td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Formularz kontaktowy' : 'Contact form'}
                    </td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Panel administracyjny' : 'Admin panel'}
                      <span className={styles.infoIcon} data-tooltip={featureInfo.admin.tooltip}>
                        <i className={`fas ${featureInfo.admin.icon}`}></i>
                      </span>
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Liczba stron' : 'Number of pages'}
                    </td>
                    <td>1</td>
                    <td>{t.locale === 'pl' ? 'Do 10' : 'Up to 10'}</td>
                    <td>{t.locale === 'pl' ? 'Nielimitowane' : 'Unlimited'}</td>
                    <td className={styles.premiumColumn}>{t.locale === 'pl' ? 'Nielimitowane' : 'Unlimited'}</td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Funkcjonalność bloga' : 'Blog functionality'}
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td>{t.locale === 'pl' ? <span className={styles.infoIcon} data-tooltip={featureInfo.blog.tooltip}>
                      <i className={`fas ${featureInfo.blog.icon}`}></i>
                    </span> : <span className={styles.infoIcon} data-tooltip={featureInfo.blog.tooltip}>
                      <i className={`fas ${featureInfo.blog.icon}`}></i>
                    </span>}</td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'E-commerce' : 'E-commerce'}
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Integracja płatności' : 'Payment integration'}
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-check feature-check"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Aplikacja niestandardowa' : 'Custom application'}
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Integracja API' : 'API integration'}
                    </td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td><i className="fas fa-times feature-cross"></i></td>
                    <td className={styles.premiumColumn}><i className="fas fa-check feature-check"></i></td>
                  </tr>
                  <tr>
                    <td className={styles.featureName}>
                      {t.locale === 'pl' ? 'Czas realizacji' : 'Completion time'}
                    </td>
                    <td>1-2 {t.locale === 'pl' ? 'tygodnie' : 'weeks'}</td>
                    <td>2-4 {t.locale === 'pl' ? 'tygodnie' : 'weeks'}</td>
                    <td>4-6 {t.locale === 'pl' ? 'tygodni' : 'weeks'}</td>
                    <td className={styles.premiumColumn}>
                      {t.locale === 'pl' ? 'Zależy od projektu' : 'Project dependent'}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className={styles.priceRow}>
                    <td className={`${styles.featureName} ${styles.priceLabel}`}>
                      {t.locale === 'pl' ? 'Cena' : 'Price'}
                    </td>
                    <td><div className={styles.packagePrice}>1400 zł</div></td>
                    <td><div className={styles.packagePrice}>3000 zł</div></td>
                    <td><div className={styles.packagePrice}>6000 zł</div></td>
                    <td className={styles.premiumColumn}>
                      <div className={styles.packagePrice}>
                        {t.locale === 'pl' ? 'Zależy od projektu' : 'Custom'}
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.buttonRow}>
                    <td></td>
                    <td><a href="#contact" className={styles.btnPackage}>{t.locale === 'pl' ? 'Zamów' : 'Get Started'}</a></td>
                    <td><a href="#contact" className={styles.btnPackage}>{t.locale === 'pl' ? 'Zamów' : 'Get Started'}</a></td>
                    <td><a href="#contact" className={styles.btnPackage}>{t.locale === 'pl' ? 'Zamów' : 'Get Started'}</a></td>
                    <td className={styles.premiumColumn}>
                      <a href="#contact" className={styles.btnPackage}>{t.locale === 'pl' ? 'Zamów' : 'Get Started'}</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* All-Inclusive Section */}
      <section className={styles.allInclusiveSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t.locale === 'pl' ? 'Usługi All-Inclusive' : 'All-Inclusive Services'}
            </h2>
            <p className={styles.sectionDescription}>
              {t.locale === 'pl'
                ? 'Wszystkie nasze pakiety zawierają te kluczowe elementy, aby zapewnić Ci kompleksową obsługę'
                : 'All our packages include these key elements to ensure comprehensive service'
              }
            </p>
          </div>

          <div className={styles.inclusiveTableContainer}>
            <table className={styles.inclusiveTable}>
              <tbody>
                {inclusiveFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? styles.even : styles.odd}>
                    <td className={styles.featureIconCell}>
                      <div className={styles.tableFeatureIcon}>
                        <i className={`fas ${feature.icon}`}></i>
                      </div>
                    </td>
                    <td className={styles.featureContentCell}>
                      <h3 className={styles.tableFeatureTitle}>{feature.title}</h3>
                      <p className={styles.tableFeatureDescription}>{feature.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.inclusiveMessage}>
            <div className={styles.messageIcon}>
              <i className="fas fa-coffee"></i>
            </div>
            <h3 className={styles.messageTitle}>
              {t.locale === 'pl' ? 'Skup się na swoim biznesie' : 'Focus on your business'}
            </h3>
            <p className={styles.messageText}>
              {t.locale === 'pl'
                ? 'My zajmiemy się wszystkimi technicznymi aspektami Twojej obecności w internecie, abyś Ty mógł skupić się na tym, co robisz najlepiej - prowadzeniu swojego biznesu.'
                : 'We\'ll take care of all the technical aspects of your online presence so you can focus on what you do best - running your business.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Automation & SEO Section */}
      <section className={styles.automationSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t.locale === 'pl' ? 'Automatyzacja i SEO & Web Scraping' : 'Automation / SEO / Web Scraping'}
            </h2>
            <p className={styles.sectionDescription}>
              {t.locale === 'pl'
                ? 'Usprawniamy procesy biznesowe i zwiększamy widoczność Twojej strony w internecie'
                : 'We handle data processing and automation tasks, to improve your sales and business efficiency'
              }
            </p>
          </div>

          <div className={styles.automationContent}>
            <div className={styles.automationText}>
              <p className={styles.automationDescription}>
                {t.locale === 'pl'
                  ? 'Nasza usługa Automatyzacji i SEO tworzy niestandardowe skrypty do automatyzacji powtarzalnych zadań i operacji masowych. Automatyzujemy Twoje procesy i poprawiamy wydajność oraz widoczność online.'
                  : 'Our Automation & SEO service creates custom scripts for automating repetitive tasks, and bulk operations. We automate your workflows and improve efficiency and online visibility.'
                }
              </p>

              <div className={styles.automationTimeframe}>
                <div className={styles.timeframeIcon}>
                  <i className="fas fa-clock"></i>
                </div>
                <div className={styles.timeframeContent}>
                  <h4>{t.locale === 'pl' ? 'Typowy harmonogram' : 'Typical Timeline'}</h4>
                  <p>
                    {t.locale === 'pl'
                      ? 'Usługi automatyzacji i SEO zazwyczaj zajmują 1-3 tygodnie na początkową konfigurację, z trwającą optymalizacją.'
                      : 'Automation & SEO services typically take 1-3 weeks for initial setup, with ongoing optimization. Pricing depends on the complexity of the project.'
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.automationFeatures}>
              {automationFeatures.map((feature, index) => (
                <div key={index} className={styles.automationFeature}>
                  <div className={styles.automationFeatureIcon}>
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <div className={styles.automationFeatureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t.locale === 'pl' ? 'Technologie, z którymi pracujemy' : 'Technologies We Work With'}
            </h2>
            <p className={styles.sectionDescription}>
              {t.locale === 'pl'
                ? 'Wykorzystujemy najnowsze technologie webowe, aby dostarczyć Ci najlepsze możliwe rozwiązania'
                : 'We use the latest web technologies to deliver you the best possible solutions'
              }
            </p>
          </div>

          <div className={styles.technologiesGrid}>
            {/* react */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-react"></i>
              </div>
              <h3>React</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Nowoczesne interfejsy użytkownika z wykorzystaniem biblioteki React'
                  : 'Modern user interfaces using the React library'
                }
              </p>
            </div>
            {/* js */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-js"></i>
              </div>
              <h3>JavaScript</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Dynamiczne, interaktywne strony i aplikacje webowe'
                  : 'Dynamic, interactive websites and web applications'
                }
              </p>
            </div>
            {/* html */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-html5"></i>
              </div>
              <h3>HTML</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Semantyczna i dostępna struktura stron internetowych'
                  : 'Semantic and accessible website structure'
                }
              </p>
            </div>
            {/* css */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-css3-alt"></i>
              </div>
              <h3>CSS</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Piękne i responsywne style dla nowoczesnych stron'
                  : 'Beautiful and responsive styling for modern websites'
                }
              </p>
            </div>
            {/* php */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-php"></i>
              </div>
              <h3>PHP</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Niezawodne aplikacje backendowe i systemy CMS'
                  : 'Reliable backend applications and CMS systems'
                }
              </p>
            </div>
            {/* sql */}

            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fa fa-database"></i>
              </div>
              <h3>SQL</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Semantyczna i dostępna struktura stron internetowych'
                  : 'Semantic and accessible website structure'
                }
              </p>
            </div>


            {/* node.js */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-node-js"></i>
              </div>
              <h3>Node.js</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Wydajne aplikacje serwerowe i API RESTful'
                  : 'Efficient server applications and RESTful APIs'
                }
              </p>
            </div>

            {/* python */}
            <div className={styles.technologyCard}>
              <div className={styles.technologyIcon}>
                <i className="fab fa-python"></i>
              </div>
              <h3>Python</h3>
              <p>
                {t.locale === 'pl'
                  ? 'Automatyzacja i Web Scraping'
                  : 'Automation and Web Scraping'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              {t.locale === 'pl' ? 'Gotowy na współpracę?' : 'Ready to get started?'}
            </h2>
            <p className={styles.ctaText}>
              {t.locale === 'pl'
                ? 'Skontaktuj się, aby omówić swój projekt i otrzymać szczegółową ofertę.'
                : 'Get in touch to discuss your project and receive a detailed quote.'
              }
            </p>
            <a href="/contact" className={styles.ctaButton}>
              {t.locale === 'pl' ? 'Skontaktuj się' : 'Get in touch'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 