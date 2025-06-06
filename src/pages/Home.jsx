import { useLanguage } from '../hooks/useLanguage';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Approach from '../components/Approach';
import Contact from '../components/Contact';

const Home = () => {
  const { t } = useLanguage();
  
  // Structured data for organization/website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TitanCode",
    "url": "https://titancode.dev",
    "logo": "https://titancode.dev/images/logo.png",
    "sameAs": [
      "https://facebook.com/titancode",
      "https://twitter.com/titancode",
      "https://linkedin.com/company/titancode",
      "https://github.com/titancode"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-511-118-916",
      "contactType": "customer service",
      "email": "info@titancode.pl",
      "areaServed": "PL",
      "availableLanguage": ["English", "Polish"]
    },
    "description": t('site_description')
  };
  
  return (
    <>
      <SEO 
        title={t('site_title')}
        description={t('site_description')}
        canonical="/"
        structuredData={structuredData}
      />
      
      <Hero />
      <Services />
      <Portfolio />
      <Approach />
      <Contact />
    </>
  );
};

export default Home; 