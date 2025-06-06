import { useLanguage } from '../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const About = () => {
  const { locale } = useLanguage();
  const [activeFaqItems, setActiveFaqItems] = useState([]);

  const processSteps = [
    {
      number: '01',
      title: locale === 'pl' ? 'Konsultacja i planowanie' : 'Consultation and planning',
      description: locale === 'pl' 
        ? 'Rozpoczynamy od dokładnego zrozumienia Twoich potrzeb biznesowych, celów i wymagań dotyczących projektu.'
        : 'We start by thoroughly understanding your business needs, goals, and project requirements.'
    },
    {
      number: '02',
      title: locale === 'pl' ? 'Projektowanie UX/UI' : 'UX/UI Design',
      description: locale === 'pl'
        ? 'Tworzymy intuicyjne i atrakcyjne projekty interfejsu, które zapewniają doskonałe doświadczenia użytkownika.'
        : 'We create intuitive and attractive interface designs that provide excellent user experiences.'
    },
    {
      number: '03',
      title: locale === 'pl' ? 'Programowanie' : 'Development',
      description: locale === 'pl'
        ? 'Piszemy czysty, wydajny i skalowalny kod, który spełnia najwyższe standardy branżowe.'
        : 'We write clean, efficient, and scalable code that meets the highest industry standards.'
    },
    {
      number: '04',
      title: locale === 'pl' ? 'Testy i zapewnienie jakości' : 'Testing and QA',
      description: locale === 'pl'
        ? 'Przeprowadzamy rygorystyczne testy, aby zapewnić bezbłędne działanie, bezpieczeństwo i responsywność Twojej strony.'
        : 'We conduct rigorous testing to ensure flawless performance, security, and responsiveness of your website.'
    },
    {
      number: '05',
      title: locale === 'pl' ? 'Wdrożenie' : 'Deployment',
      description: locale === 'pl'
        ? 'Uruchamiamy Twoją stronę na niezawodnych serwerach i konfigurujemy wszystkie niezbędne elementy techniczne.'
        : 'We launch your site on reliable servers and configure all necessary technical elements.'
    },
    {
      number: '06',
      title: locale === 'pl' ? 'Wsparcie i konserwacja' : 'Support and maintenance',
      description: locale === 'pl'
        ? 'Oferujemy ciągłe wsparcie i regularne aktualizacje, aby Twoja strona była zawsze aktualna i bezpieczna.'
        : 'We offer ongoing support and regular updates to keep your site current and secure.'
    }
  ];

  const whyNotCmsReasons = [
    {
      icon: 'fas fa-tachometer-alt',
      title: locale === 'pl' ? 'Wydajność' : 'Performance',
      description: locale === 'pl'
        ? 'Niestandardowy kod jest bardziej wydajny i szybszy, ponieważ nie zawiera zbędnych elementów i funkcji, które spowalniają działanie strony.'
        : 'Custom code is more efficient and faster, as it doesn\'t contain unnecessary elements and features that slow down your website.'
    },
    {
      icon: 'fas fa-fingerprint',
      title: locale === 'pl' ? 'Unikalność' : 'Uniqueness',
      description: locale === 'pl'
        ? 'Niestandardowe rozwiązania pozwalają Twojej stronie wyróżnić się spośród 50% stron używających tych samych szablonów i motywów CMS.'
        : 'Custom solutions allow your website to stand out among the 50% of sites using the same CMS templates and themes.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: locale === 'pl' ? 'Bezpieczeństwo' : 'Security',
      description: locale === 'pl'
        ? 'Niestandardowy kod zapewnia lepsze bezpieczeństwo, ponieważ nie posiada typowych luk bezpieczeństwa znanych w popularnych systemach CMS.'
        : 'Custom code provides better security as it doesn\'t have the typical vulnerabilities known in popular CMS systems.'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: locale === 'pl' ? 'Elastyczność' : 'Flexibility',
      description: locale === 'pl'
        ? 'Niestandardowe podejście daje pełną swobodę projektowania i tworzenia unikalnych funkcji dostosowanych do Twoich potrzeb.'
        : 'A custom approach gives complete freedom of design and creating unique features tailored to your needs.'
    }
  ];

  const customCodeBenefits = [
    {
      icon: 'fas fa-code',
      title: locale === 'pl' ? 'Rozwiązania Szyte na Miarę' : 'Bespoke Solutions',
      description: locale === 'pl'
        ? 'Tworzymy rozwiązania precyzyjnie dopasowane do Twoich potrzeb. Zamiast dostosowywać gotowe narzędzia, budujemy od zera, wykorzystując nowoczesne technologie w sposób celowy i efektywny.'
        : 'We build solutions precisely tailored to your needs. Instead of adapting pre-built tools, we build from scratch, using modern technologies purposefully and efficiently.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: locale === 'pl' ? 'Unikalny i Angażujący Design' : 'Unique & Engaging Design',
      description: locale === 'pl'
        ? 'Każdy projekt to unikalna kreacja. Tworzymy wyróżniające się interfejsy, które odzwierciedlają Twoją markę i angażują użytkowników, zamiast opierać się na gotowych szablonach.'
        : 'Every project is a unique creation. We craft distinctive interfaces that reflect your brand and engage users, rather than relying on pre-made templates.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: locale === 'pl' ? 'Zoptymalizowana Wydajność' : 'Optimized Performance',
      description: locale === 'pl'
        ? 'Nasze strony są projektowane z myślą o szybkości. Optymalizujemy każdy element, od kodu po zasoby, aby zapewnić błyskawiczne ładowanie i płynne działanie.'
        : 'Our sites are designed for speed. We optimize every element, from code to assets, to ensure lightning-fast loading and smooth performance.'
    },
    {
      icon: 'fas fa-cogs',
      title: locale === 'pl' ? 'Ukierunkowana Skalowalność i Konserwacja' : 'Focused Scalability & Maintenance',
      description: locale === 'pl'
        ? 'Projektujemy z myślą o przyszłym rozwoju, zapewniając, że Twoja strona może rosnąć wraz z Twoim biznesem. Konserwacja jest ukierunkowana i efektywna, minimalizując ryzyko problemów z kompatybilnością.'
        : 'We design with future growth in mind, ensuring your site can scale with your business. Maintenance is focused and efficient, minimizing the risk of compatibility issues.'
    }
  ];

  const faqItems = [
    {
      question: locale === 'pl' ? 'Co zawiera cena?' : 'What does the price include?',
      answer: locale === 'pl'
        ? 'Cena obejmuje projekt, programowanie, testy, hosting, domenę i certyfikat SSL na pierwszy rok. Brak ukrytych kosztów czy dodatkowych opłat.'
        : 'The price includes design, development, testing, hosting, domain, and SSL certificate for the first year. No hidden costs or additional fees.'
    },
    {
      question: locale === 'pl' ? 'Jestem początkujący, jak zacząć?' : 'I\'m a beginner, how do I start?',
      answer: locale === 'pl'
        ? 'Skontaktuj się z nami przez formularz na stronie. Wyjaśnimy wszystko prosto i zrozumiale - domeny, hosting, koszty. Pomogliśmy już wielu początkującym przedsiębiorcom bez technicznego doświadczenia.'
        : 'Contact us through the form on this page. We\'ll explain everything clearly - domains, hosting, costs. We\'ve helped many beginners without technical experience get started online.'
    },
    {
      question: locale === 'pl' ? 'Czy w cenie jest hosting?' : 'Is hosting included in the price?',
      answer: locale === 'pl'
        ? 'Tak, hosting jest już wliczony w cenę. Nie musisz szukać ani kupować go osobno.'
        : 'Yes, hosting is included in the price. You don\'t need to find or purchase it separately.'
    },
    {
      question: locale === 'pl' ? 'Czy są opłaty odnowieniowe?' : 'Are there renewal fees?',
      answer: locale === 'pl'
        ? 'Tak, po pierwszym roku hostingu i domeny, koszt odnowienia to zazwyczaj 300-500 zł rocznie w zależności od wymagań projektu.'
        : 'Yes, after the first year of hosting and domain, the renewal cost is typically 300-500 PLN annually depending on the project requirements.'
    },
    {
      question: locale === 'pl' ? 'Czy strona jest dobrej jakości?' : 'Is the website good quality?',
      answer: locale === 'pl'
        ? 'Wszystkie nasze strony są zoptymalizowane pod kątem szybkości i SEO. Osiągają wysokie wyniki w testach Google Lighthouse, co poprawia ich pozycję w wyszukiwarce.'
        : 'All our websites are optimized for speed and SEO. They score high in Google Lighthouse tests, which improves their search engine ranking.'
    },
    {
      question: locale === 'pl' ? 'Czy strony mają certyfikat SSL?' : 'Do websites have SSL certificates?',
      answer: locale === 'pl'
        ? 'Tak, wszystkie nasze strony mają certyfikat SSL wliczony w cenę, co zapewnia bezpieczne połączenie.'
        : 'Yes, all our websites include an SSL certificate in the price, ensuring a secure connection.'
    },
    {
      question: locale === 'pl' ? 'Czy używacie WordPressa lub innych CMS?' : 'Do you use WordPress or other CMS?',
      answer: locale === 'pl'
        ? 'Nie, tworzymy własne, zoptymalizowane rozwiązania. Choć WordPress i inne systemy CMS (jak Joomla czy headless CMS) są popularne, preferujemy budowanie stron od podstaw. Dzięki temu nasze strony są szybsze, lżejsze i dostosowane dokładnie do potrzeb klienta.'
        : 'No, we create our own optimized solutions. While WordPress and other CMS systems (like Joomla or headless CMS) are popular, we prefer building sites from scratch. This makes our websites faster, lighter, and precisely tailored to client needs.'
    },
    {
      question: locale === 'pl' ? 'Czy możliwa jest modyfikacja pakietów?' : 'Can packages be customized?',
      answer: locale === 'pl'
        ? 'Tak, każdy pakiet może być dostosowany do Twoich unikalnych potrzeb. Skontaktuj się, aby omówić swoje wymagania i otrzymać indywidualną wycenę.'
        : 'Yes, each package can be customized to your unique needs. Contact me to discuss your requirements and get a personalized quote.'
    }
  ];

  // Handle FAQ item click
  const toggleFaq = (index) => {
    setActiveFaqItems(prevActive => {
      if (prevActive.includes(index)) {
        // If already active, remove it
        return prevActive.filter(item => item !== index);
      } else {
        // If not active, add it
        return [...prevActive, index];
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>{locale === 'pl' ? 'O Nas - TitanCode' : 'About Us - TitanCode'}</title>
        <meta 
          name="description" 
          content={locale === 'pl'
            ? 'Poznaj naszą filozofię i metodę pracy. Dowiedz się więcej o TitanCode i naszym podejściu do tworzenia stron internetowych.'
            : 'Learn about our philosophy and working method. Find out more about TitanCode and our approach to web development.'
          }
        />
      </Helmet>
      
      <PageHeader
        title={locale === 'pl' ? 'O Nas' : 'About Us'}
        description={locale === 'pl'
          ? 'Poznaj naszą filozofię i metodę pracy'
          : 'Learn about our philosophy and working method'
        }
      />

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {locale === 'pl' ? 'Nasz Proces' : 'Our Process'}
            </h2>
            <p className={styles.sectionDescription}>
              {locale === 'pl'
                ? 'Przejrzysta metodologia pomaga nam dostarczać projekty na czas i zgodnie z oczekiwaniami'
                : 'A clear methodology helps us deliver projects on time and as expected'
              }
            </p>
          </div>
          
          <div className={styles.processCards}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processCardTitle}>{step.title}</h3>
                  <p className={styles.processCardText}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined CMS Limitations and Custom Code Benefits Section */}
      <section className={styles.cmsVsCustomSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {locale === 'pl' ? 'Niestandardowy Kod vs. CMS: Perspektywa dla Optymalnych Rezultatów' : 'Custom Code vs. CMS: A Perspective for Optimal Results'}
            </h2>
            <p className={styles.sectionDescription}>
              {locale === 'pl'
                ? 'Wybór odpowiedniej technologii to klucz do sukcesu online. Oto proste porównanie, które pomoże Ci podjąć świadomą decyzję.'
                : 'Choosing the right technology is key to online success. Here\'s a simple comparison to help you make an informed decision.'
              }
            </p>
          </div>
          
          <div className={styles.simplifiedComparison}>
            <div className={styles.comparisonBox}>
              <h3>{locale === 'pl' ? 'Systemy CMS' : 'CMS Systems'}</h3>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Szybkie i łatwe wdrożenie bez specjalistycznej wiedzy technicznej' 
                  : 'Quick and easy implementation without specialized technical knowledge'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Przyjazne dla użytkownika panele administracyjne do zarządzania treścią' 
                  : 'User-friendly admin panels for content management'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Duża dostępność wtyczek i gotowych rozwiązań' 
                  : 'Wide availability of plugins and ready-made solutions'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-minus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Często wolniejsze ładowanie i mniej optymalna wydajność' 
                  : 'Often slower loading and less optimal performance'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-minus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Standardowy wygląd dzielony z wieloma innymi stronami' 
                  : 'Standard look shared with many other websites'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-minus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Częste problemy z bezpieczeństwem i potrzeba regularnych aktualizacji' 
                  : 'Frequent security issues and need for regular updates'}</p>
              </div>
            </div>
            
            <div className={styles.comparisonBox}>
              <h3>{locale === 'pl' ? 'Niestandardowy Kod' : 'Custom Code'}</h3>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Unikalny design i funkcjonalność dopasowane do konkretnych potrzeb' 
                  : 'Unique design and functionality tailored to specific needs'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Wyższa wydajność i szybsze ładowanie strony' 
                  : 'Higher performance and faster page loading'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Większe bezpieczeństwo dzięki niestandardowym rozwiązaniom' 
                  : 'Greater security through custom solutions'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-plus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Wyróżnienie się na tle konkurencji dzięki unikalnemu interfejsowi' 
                  : 'Standing out from competitors with a unique interface'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-minus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Potrzeba profesjonalnego wsparcia przy aktualizacjach' 
                  : 'Need for professional support with updates'}</p>
              </div>
              <div className={styles.comparisonPoint}>
                <i className="fas fa-minus-circle"></i>
                <p>{locale === 'pl' 
                  ? 'Zwykle wyższy początkowy koszt inwestycji' 
                  : 'Usually higher initial investment cost'}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.comparisonSummary}>
            <p>
              {locale === 'pl'
                ? 'Choć systemy CMS oferują szybkie wdrożenie i łatwość obsługi, niestandardowe rozwiązania zapewniają wyjątkowe doświadczenia użytkownika, lepszą wydajność i unikalne wrażenia wizualne. Twoja witryna będzie się wyróżniać spośród 50% stron internetowych używających tych samych szablonów, oferując odwiedzającym autentyczne i oryginalne doświadczenie.'
                : 'While CMS systems offer quick deployment and ease of use, custom solutions provide exceptional user experiences, better performance, and unique visual impressions. Your site will stand out from the 50% of websites using the same templates, offering visitors an authentic and original experience.'
              }
            </p>
            <Link to="/services" className={styles.comparisonCta}>
              {locale === 'pl' ? 'Zobacz nasze usługi' : 'View our services'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {locale === 'pl' ? 'Często Zadawane Pytania' : 'Frequently Asked Questions'}
            </h2>
            <p className={styles.sectionDescription}>
              {locale === 'pl'
                ? 'Odpowiedzi na najczęściej zadawane pytania o nasze usługi'
                : 'Answers to the most commonly asked questions about our services'
              }
            </p>
          </div>
          
          <div className={styles.faqContainer}>
            <div className={styles.faqColumn}>
              {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeFaqItems.includes(index) ? styles.active : ''}`}
                >
                  <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                    <h3>{item.question}</h3>
                    <span className={styles.faqIcon}>
                      <i className={`fas ${activeFaqItems.includes(index) ? 'fa-minus' : 'fa-plus'}`}></i>
                    </span>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.faqColumn}>
              {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => {
                const actualIndex = index + Math.ceil(faqItems.length / 2);
                return (
                  <div 
                    key={actualIndex} 
                    className={`${styles.faqItem} ${activeFaqItems.includes(actualIndex) ? styles.active : ''}`}
                  >
                    <div className={styles.faqQuestion} onClick={() => toggleFaq(actualIndex)}>
                      <h3>{item.question}</h3>
                      <span className={styles.faqIcon}>
                        <i className={`fas ${activeFaqItems.includes(actualIndex) ? 'fa-minus' : 'fa-plus'}`}></i>
                      </span>
                    </div>
                    <div className={styles.faqAnswer}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              {locale === 'pl' ? 'Gotowy na współpracę?' : 'Ready to work together?'}
            </h2>
            <p className={styles.ctaText}>
              {locale === 'pl'
                ? 'Skontaktuj się już teraz, aby omówić szczegóły Twojego projektu'
                : 'Get in touch now to discuss the details of your project'
              }
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              {locale === 'pl' ? 'Skontaktuj się' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 