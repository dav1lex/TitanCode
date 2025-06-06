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
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = locale === 'pl' ? 'Imię i nazwisko jest wymagane' : 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = locale === 'pl' ? 'Email jest wymagany' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = locale === 'pl' ? 'Adres email jest nieprawidłowy' : 'Email address is invalid';
    }
    if (!formData.subject.trim()) {
      errors.subject = locale === 'pl' ? 'Temat jest wymagany' : 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = locale === 'pl' ? 'Wiadomość jest wymagana' : 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || (locale === 'pl' ? 'Wystąpił nieznany błąd.' : 'An unknown error occurred.'));
      }
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: locale === 'pl' ? 'Email' : 'Email',
      value: 'info@titancode.pl',
      link: 'mailto:info@titancode.pl'
    },
    {
      icon: 'fas fa-phone',
      title: locale === 'pl' ? 'Telefon' : 'Phone',
      value: '+48 511 118 916',
      link: 'tel:+48511118916'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: locale === 'pl' ? 'Lokalizacja' : 'Location',
      value: locale === 'pl' ? 'Warszawa, Polska' : 'Warsaw, Poland',
      link: 'https://goo.gl/maps/Poland'
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
                        className={`${styles.formInput} ${formErrors.name ? styles.inputError : ''}`}
                      />
                      {formErrors.name && <span className={styles.inlineError}>{formErrors.name}</span>}
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
                        className={`${styles.formInput} ${formErrors.email ? styles.inputError : ''}`}
                      />
                      {formErrors.email && <span className={styles.inlineError}>{formErrors.email}</span>}
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
                        className={`${styles.formInput} ${formErrors.subject ? styles.inputError : ''}`}
                      />
                      {formErrors.subject && <span className={styles.inlineError}>{formErrors.subject}</span>}
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
                        className={`${styles.formTextarea} ${formErrors.message ? styles.inputError : ''}`}
                      ></textarea>
                      {formErrors.message && <span className={styles.inlineError}>{formErrors.message}</span>}
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