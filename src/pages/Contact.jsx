import { useLanguage } from '../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import styles from './Contact.module.css';
import { useState } from 'react';

const Contact = () => {
  const { locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // TODO: This will be connected to PHP backend in the future
    // For now, we simulate a successful submission
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form and show success state
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setError(locale === 'pl' 
        ? 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.'
        : 'An error occurred while submitting the form. Please try again later.'
      );
      setLoading(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: locale === 'pl' ? 'Email' : 'Email',
      value: 'contact@titancode.dev',
      link: 'mailto:contact@titancode.dev'
    },
    {
      icon: 'fas fa-phone',
      title: locale === 'pl' ? 'Telefon' : 'Phone',
      value: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: locale === 'pl' ? 'Lokalizacja' : 'Location',
      value: locale === 'pl' ? 'Warszawa, Polska' : 'Warsaw, Poland',
      link: 'https://goo.gl/maps/Poland'
    }
  ];

  // Social media links
  const socialLinks = [
    {
      icon: 'fab fa-facebook',
      name: 'Facebook',
      link: '#'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      link: '#'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      link: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{locale === 'pl' ? 'Kontakt - TitanCode' : 'Contact - TitanCode'}</title>
        <meta 
          name="description" 
          content={locale === 'pl'
            ? 'Skontaktuj się z nami, aby omówić Twój projekt lub zadać pytania. Jesteśmy tutaj, aby pomóc.'
            : 'Get in touch to discuss your project or ask questions. We\'re here to help.'
          }
        />
      </Helmet>
      
      <PageHeader
        title={locale === 'pl' ? 'Kontakt' : 'Contact'}
        description={locale === 'pl'
          ? 'Skontaktuj się z nami, aby rozpocząć współpracę'
          : 'Get in touch to start working together'
        }
      />

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>
                  {locale === 'pl'
                    ? 'Porozmawiajmy o Twoim projekcie'
                    : 'Let\'s talk about your project'
                  }
                </h3>
                <p>
                  {locale === 'pl'
                    ? 'Jesteśmy gotowi pomóc Ci zrealizować Twój projekt internetowy. Skontaktuj się z nami, aby omówić szczegóły i rozpocząć współpracę.'
                    : 'We\'re ready to help you bring your web project to life. Contact us to discuss details and start working together.'
                  }
                </p>
                
                <div className={styles.contactMethods}>
                  {contactInfo.map((item, index) => (
                    <div key={index} className={styles.contactMethod}>
                      <div className={styles.contactMethodIcon}>
                        <i className={item.icon}></i>
                      </div>
                      <div className={styles.contactMethodContent}>
                        <h4>{item.title}</h4>
                        <a href={item.link}>{item.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.socialLinks}>
                  <h4>
                    {locale === 'pl'
                      ? 'Obserwuj nas'
                      : 'Follow us'
                    }
                  </h4>
                  <div className={styles.socialIcons}>
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={styles.socialIcon}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <div className={styles.formCard}>
                <h3>
                  {locale === 'pl'
                    ? 'Wyślij wiadomość'
                    : 'Send a message'
                  }
                </h3>
                
                {submitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>
                      {locale === 'pl'
                        ? 'Wiadomość wysłana!'
                        : 'Message sent!'
                      }
                    </h4>
                    <p>
                      {locale === 'pl'
                        ? 'Dziękujemy za wiadomość. Odpowiemy tak szybko, jak to możliwe.'
                        : 'Thank you for your message. We\'ll respond as soon as possible.'
                      }
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className={styles.submitAgainButton}
                    >
                      {locale === 'pl' ? 'Wyślij kolejną wiadomość' : 'Send another message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">
                        {locale === 'pl' ? 'Imię i nazwisko' : 'Name'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={locale === 'pl' ? 'Twoje imię i nazwisko' : 'Your full name'}
                        className={styles.formInput}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={locale === 'pl' ? 'Twój adres email' : 'Your email address'}
                        className={styles.formInput}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">
                        {locale === 'pl' ? 'Temat' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={locale === 'pl' ? 'Temat Twojej wiadomości' : 'Subject of your message'}
                        className={styles.formInput}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message">
                        {locale === 'pl' ? 'Wiadomość' : 'Message'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder={locale === 'pl' ? 'Treść Twojej wiadomości' : 'Your message'}
                        className={styles.formTextarea}
                      ></textarea>
                    </div>
                    
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className={styles.loadingSpinner}>
                          <i className="fas fa-spinner fa-spin"></i>
                        </span>
                      ) : (
                        locale === 'pl' ? 'Wyślij wiadomość' : 'Send message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 