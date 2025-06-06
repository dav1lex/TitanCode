import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Services.module.css';

const Services = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);
  
  const services = [
    {
      id: 'basic',
      icon: 'code',
      iconColor: '#6C9AFF',
      title: 'Basic Web Development',
      titlePl: 'Podstawowy Rozwój Stron WWW',
      description: 'Basic description',
      descriptionPl: 'Idealne rozwiązanie dla trenerów, nauczycieli, jednostronicowe witryny z unikalnym designem.',
    },
    {
      id: 'complex',
      icon: 'laptop-code',
      iconColor: '#4361EE',
      title: 'Complex Web Development',
      titlePl: 'Złożony Rozwój Stron WWW',
      description: 'Multi-page websites with blog functionality and content management capabilities.',
      descriptionPl: 'Rozbudowane witryny z wieloma podstronami, funkcjonalnością bloga i systemem zarządzania treścią.',
    },
    {
      id: 'ecommerce',
      icon: 'shopping-cart',
      iconColor: '#38B000',
      title: 'E-commerce Websites',
      titlePl: 'Sklepy Internetowe',
      description: 'Complete online stores with secure payments, product management, order tracking, and HTTPS security.',
      descriptionPl: 'Kompletne sklepy online z bezpieczną płatnością, zarządzaniem produktami, śledzeniem zamówień i zabezpieczeniami HTTPS.',
    },
    {
      id: 'enterprise',
      icon: 'building',
      iconColor: '#FF9E00',
      title: 'Custom Applications',
      titlePl: 'Aplikacje Dla Przedsiębiorstw',
      description: 'Live auction portals, university/school student portals, and large-scale business applications.',
      descriptionPl: 'Niestandardowe portale aukcyjne, platformy edukacyjne dla uczelni i szkół.',
    },
    {
      id: 'automation',
      icon: 'robot',
      iconColor: '#E5383B',
      title: 'Automation & SEO & Web Scraping',
      titlePl: 'Automatyzacja i SEO & Web Scraping',
      description: 'Scripts for repetitive tasks, web scraping, data collection, and custom solutions for specific business problems.',
      descriptionPl: 'Skrypty do automatyzacji powtarzalnych zadań, web scrapingu, zbierania danych i niestandardowe rozwiązania dla biznesu.',
    }
  ];

  const openModal = (id) => {
    setActiveModal(id);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.classList.remove('modal-open');
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };
  
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('services_title')}</h2>
          <p className={styles.sectionDescription}>{t('services_description')}</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div className={styles.serviceCard} key={service.id}>
              <div className={styles.serviceIcon} style={{ color: service.iconColor }}>
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3 className={styles.serviceTitle}>
                {t.locale === 'pl' ? service.titlePl : service.title}
              </h3>
              <p className={styles.serviceDescription}>
                {t.locale === 'pl' ? service.descriptionPl : service.description}
              </p>
              <button 
                className={styles.serviceLink} 
                onClick={() => openModal(service.id)}
              >
                {t('learn_more')} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modals */}
      <div className={`${styles.modalOverlay} ${activeModal ? styles.active : ''}`} onClick={handleOverlayClick}>
        {/* Basic Web Development Modal */}
        <div id="basic-modal" className={`${styles.serviceModal} ${activeModal === 'basic' ? styles.active : ''}`}>
          <div className={styles.modalHeader}>
            <h3>{t.locale === 'pl' ? 'Podstawowy Rozwój Stron WWW' : 'Basic Web Development'}</h3>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalIcon} style={{ color: services.find(s => s.id === 'basic').iconColor }}>
              <i className="fas fa-code"></i>
            </div>
            <h4>{t.locale === 'pl' ? 'Idealne dla indywidualnych profesjonalistów' : 'Perfect for Individual Professionals'}</h4>
            <p>
              {t.locale === 'pl' 
                ? 'Nasza usługa Basic Web Development dostarcza pięknie wykonane, responsywne strony internetowe, zoptymalizowane pod kątem wydajności i doświadczenia użytkownika. Każda witryna jest kodowana niestandardowo dla szybkości i bezpieczeństwa, bez polegania na ciężkich platformach CMS.'
                : 'Our Basic Web Development service delivers beautifully crafted, responsive websites optimized for performance and user experience. Each site is custom-coded for speed and security, without relying on heavyweight CMS platforms.'
              }
            </p>
            
            <h4>{t.locale === 'pl' ? 'Co zawiera' : 'What\'s Included'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Responsywny design (przyjazny dla urządzeń mobilnych)' : 'Responsive design (mobile-friendly)'}</li>
              <li>{t.locale === 'pl' ? 'Szybkie czasy ładowania (wynik PageSpeed 90+)' : 'Fast loading times (90+ PageSpeed score)'}</li>
              <li>{t.locale === 'pl' ? 'Podstawowa optymalizacja SEO' : 'Basic SEO optimization'}</li>
              <li>{t.locale === 'pl' ? 'Formularz kontaktowy' : 'Contact form'}</li>
              <li>{t.locale === 'pl' ? 'Certyfikat SSL' : 'SSL certificate'}</li>
              <li>{t.locale === 'pl' ? 'Konfiguracja domeny i hostingu' : 'Domain and hosting setup'}</li>
              <li>{t.locale === 'pl' ? 'Testowanie kompatybilności przeglądarek' : 'Browser compatibility testing'}</li>
            </ul>
            
            <h4>{t.locale === 'pl' ? 'Dla kogo' : 'Ideal For'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Nauczyciele i trenerzy' : 'Teachers and trainers'}</li>
              <li>{t.locale === 'pl' ? 'Niezależni konsultanci' : 'Independent consultants'}</li>
              <li>{t.locale === 'pl' ? 'Małe firmy jednoosobowe' : 'Small one-person businesses'}</li>
              <li>{t.locale === 'pl' ? 'Profesjonaliści potrzebujący wizytówki online' : 'Professionals needing an online business card'}</li>
            </ul>
            
            <div className={styles.modalCta}>
              <button className={styles.btnPrimary}>{t.locale === 'pl' ? 'Zobacz cennik' : 'View Pricing'}</button>
              <button className={styles.btnSecondary} onClick={closeModal}>{t.locale === 'pl' ? 'Zamknij' : 'Close'}</button>
            </div>
          </div>
        </div>

        {/* Complex Web Development Modal */}
        <div id="complex-modal" className={`${styles.serviceModal} ${activeModal === 'complex' ? styles.active : ''}`}>
          <div className={styles.modalHeader}>
            <h3>{t.locale === 'pl' ? 'Złożony Rozwój Stron WWW' : 'Complex Web Development'}</h3>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalIcon} style={{ color: services.find(s => s.id === 'complex').iconColor }}>
              <i className="fas fa-laptop-code"></i>
            </div>
            <h4>{t.locale === 'pl' ? 'Rozbudowane witryny wielostronicowe' : 'Multi-page Interactive Websites'}</h4>
            <p>
              {t.locale === 'pl' 
                ? 'Nasza usługa Complex Web Development tworzy dynamiczne, interaktywne strony internetowe z wieloma podstronami i funkcjonalnością bloga. Każde rozwiązanie jest zbudowane z czystego, wydajnego kodu dla optymalnej wydajności i łatwej konserwacji.'
                : 'Our Complex Web Development service creates dynamic, interactive websites with multiple pages and blog functionality. Each solution is built with clean, efficient code for optimal performance and maintainability.'
              }
            </p>
            
            <h4>{t.locale === 'pl' ? 'Co zawiera' : 'What\'s Included'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Wszystko w Podstawowym Rozwoju Stron WWW' : 'Everything in Basic Web Development'}</li>
              <li>{t.locale === 'pl' ? 'Wiele podstron' : 'Multiple pages'}</li>
              <li>{t.locale === 'pl' ? 'Funkcjonalność bloga' : 'Blog functionality (optional)'}</li>
              <li>{t.locale === 'pl' ? 'System zarządzania treścią' : 'Content management system'}</li>
              <li>{t.locale === 'pl' ? 'Zaawansowane formularze z walidacją' : 'Advanced forms with validation'}</li>
              <li>{t.locale === 'pl' ? 'Niestandardowe panele administracyjne' : 'Custom admin dashboards'}</li>
              <li>{t.locale === 'pl' ? 'Interaktywne elementy UI' : 'Interactive UI elements'}</li>
              <li>{t.locale === 'pl' ? 'Rozszerzona optymalizacja SEO' : 'Extended SEO optimization'}</li>
            </ul>
            
            <div className={styles.modalCta}>
              <button className={styles.btnPrimary}>{t.locale === 'pl' ? 'Zobacz cennik' : 'View Pricing'}</button>
              <button className={styles.btnSecondary} onClick={closeModal}>{t.locale === 'pl' ? 'Zamknij' : 'Close'}</button>
            </div>
          </div>
        </div>

        {/* E-commerce Modal */}
        <div id="ecommerce-modal" className={`${styles.serviceModal} ${activeModal === 'ecommerce' ? styles.active : ''}`}>
          <div className={styles.modalHeader}>
            <h3>{t.locale === 'pl' ? 'Sklepy Internetowe' : 'E-commerce Websites'}</h3>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalIcon} style={{ color: services.find(s => s.id === 'ecommerce').iconColor }}>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h4>{t.locale === 'pl' ? 'Kompletne rozwiązania sprzedażowe' : 'Complete Online Shopping Solutions'}</h4>
            <p>
              {t.locale === 'pl' 
                ? 'Nasze sklepy internetowe to kompletne platformy e-commerce z bezpiecznymi płatnościami, zarządzaniem produktami i zamówieniami. Każdy sklep jest zaprojektowany z myślą o bezpieczeństwie, wydajności i łatwości obsługi, aby zwiększyć konwersję i sprzedaż.'
                : 'Our e-commerce websites are complete online shopping platforms with secure payments, product and order management. Each store is designed with security, performance, and ease of use in mind to increase conversion and sales.'
              }
            </p>
            
            <h4>{t.locale === 'pl' ? 'Co zawiera' : 'What\'s Included'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Bezpieczne przetwarzanie płatności' : 'Secure payment processing'}</li>
              <li>{t.locale === 'pl' ? 'Zarządzanie katalogiem produktów' : 'Catalog management'}</li>
              <li>{t.locale === 'pl' ? 'Śledzenie zamówień i historia' : 'Order tracking and history'}</li>
              <li>{t.locale === 'pl' ? 'Bezpieczne certyfikaty HTTPS' : 'Secure HTTPS certificates'}</li>
              <li>{t.locale === 'pl' ? 'Zarządzanie zapasami' : 'Inventory management'}</li>
              <li>{t.locale === 'pl' ? 'Koszyk i proces zakupowy' : 'Shopping cart and checkout'}</li>
              <li>{t.locale === 'pl' ? 'Konta klientów' : 'Customer accounts'}</li>
              <li>{t.locale === 'pl' ? 'Integracja z systemami dostawy' : 'Payment integration (Przelewy24, PayU etc.)'}</li>
            </ul>
            
            <div className={styles.modalCta}>
              <button className={styles.btnPrimary}>{t.locale === 'pl' ? 'Zobacz cennik' : 'View Pricing'}</button>
              <button className={styles.btnSecondary} onClick={closeModal}>{t.locale === 'pl' ? 'Zamknij' : 'Close'}</button>
            </div>
          </div>
        </div>

        {/* Custom Applications Modal */}
        <div id="enterprise-modal" className={`${styles.serviceModal} ${activeModal === 'enterprise' ? styles.active : ''}`}>
          <div className={styles.modalHeader}>
            <h3>{t.locale === 'pl' ? 'Aplikacje Dla Przedsiębiorstw' : 'Enterprise Applications'}</h3>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalIcon} style={{ color: services.find(s => s.id === 'enterprise').iconColor }}>
              <i className="fas fa-building"></i>
            </div>
            <h4>{t.locale === 'pl' ? 'Rozwiązania dla złożonych potrzeb biznesowych' : 'Custom business solution'}</h4>
            <p>
              {t.locale === 'pl' 
                ? 'Nasze usługi tworzenia aplikacji dla przedsiębiorstw dostarczają solidne, wydajne rozwiązania dla złożonych procesów biznesowych, takie jak portale aukcyjne i platformy edukacyjne. Aplikacje te są budowane z myślą o skalowalności, bezpieczeństwie i wydajności.'
                : 'Our custom applications service delivers high-performance, complex and scalable solutions for processes that need to be controlled and managed.'
              }
            </p>
            
            <h4>{t.locale === 'pl' ? 'Co zawiera' : 'What\'s Included'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Skalowalna architektura' : 'Scalable architecture'}</li>
              <li>{t.locale === 'pl' ? 'Zaawansowane środki bezpieczeństwa' : 'Advanced security'}</li>
              <li>{t.locale === 'pl' ? 'Kontrola dostępu oparta na rolach' : 'Role-based access control'}</li>
              <li>{t.locale === 'pl' ? 'Automatyzacja procesów' : 'Process automation'}</li>
              <li>{t.locale === 'pl' ? 'Integracja z systemami firm trzecich' : 'Third-party system integration'}</li>
              <li>{t.locale === 'pl' ? 'Analiza danych i raportowanie' : 'Data analysis and reporting'}</li>
              <li>{t.locale === 'pl' ? 'Custom functionalities' : 'Custom functionalities'}</li>
            </ul>
            
            <div className={styles.modalCta}>
              <button className={styles.btnPrimary}>{t.locale === 'pl' ? 'Zobacz cennik' : 'View Pricing'}</button>
              <button className={styles.btnSecondary} onClick={closeModal}>{t.locale === 'pl' ? 'Zamknij' : 'Close'}</button>
            </div>
          </div>
        </div>

        {/* Automation & SEO Modal */}
        <div id="automation-modal" className={`${styles.serviceModal} ${activeModal === 'automation' ? styles.active : ''}`}>
          <div className={styles.modalHeader}>
            <h3>{t.locale === 'pl' ? 'Automatyzacja i SEO' : 'Automation & SEO'}</h3>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalIcon} style={{ color: services.find(s => s.id === 'automation').iconColor }}>
              <i className="fas fa-robot"></i>
            </div>
            <h4>{t.locale === 'pl' ? 'Usprawnianie procesów i zwiększanie widoczności' : 'Streamline Processes & Improve Visibility'}</h4>
            <p>
              {t.locale === 'pl' 
                ? 'Nasza usługa Automatyzacji i SEO tworzy niestandardowe skrypty do automatyzacji powtarzalnych zadań, przetwarzania danych Excel i operacji masowych. Automatyzujemy Twoje procesy i poprawiamy wydajność oraz widoczność online.'
                : 'Our Automation & SEO service creates custom scripts for automating repetitive tasks, Excel data processing, and bulk operations. We automate your workflows and improve efficiency and online visibility.'
              }
            </p>
            
            <h4>{t.locale === 'pl' ? 'Co zawiera' : 'What\'s Included'}</h4>
            <ul className={styles.modalFeatures}>
              <li>{t.locale === 'pl' ? 'Niestandardowe skrypty automatyzacji' : 'Custom automation scripts'}</li>
              <li>{t.locale === 'pl' ? 'Przetwarzanie danych z Excela' : 'Excel data processing'}</li>
              <li>{t.locale === 'pl' ? 'Operacje masowe' : 'Bulk operations'}</li>
              <li>{t.locale === 'pl' ? 'Badanie i analiza słów kluczowych' : 'Keyword research and analysis'}</li>
              <li>{t.locale === 'pl' ? 'Techniczna optymalizacja SEO' : 'Technical SEO optimization'}</li>
              <li>{t.locale === 'pl' ? 'Wskazówki dotyczące optymalizacji treści' : 'Content optimization guidance'}</li>
              <li>{t.locale === 'pl' ? 'Monitorowanie wydajności' : 'Performance monitoring'}</li>
              <li>{t.locale === 'pl' ? 'Raportowanie i analityka' : 'Reporting and analytics'}</li>
            </ul>
            
            <div className={styles.modalCta}>
              <button className={styles.btnPrimary}>{t.locale === 'pl' ? 'Zobacz cennik' : 'View Pricing'}</button>
              <button className={styles.btnSecondary} onClick={closeModal}>{t.locale === 'pl' ? 'Zamknij' : 'Close'}</button>
            </div>
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

export default Services; 