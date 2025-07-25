import type { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import HomeClient from './home-client';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isPl = lang === 'pl';

  const title = isPl
    ? 'Tworzenie Stron Internetowych Warszawa | Profesjonalne Strony WWW'
    : 'Custom Web Development | Fast & SEO-Optimized Websites';
  
  const description = isPl
    ? 'Profesjonalne tworzenie stron internetowych w Warszawie. Projektujemy szybkie, nowoczesne i zoptymalizowane pod SEO strony WWW dla firm. Indywidualne projekty, gwarancja jakości.'
    : 'Professional custom web development in Warsaw. We design fast, modern, and SEO-optimized websites for businesses. Bespoke projects, quality guaranteed.';

  const keywords = isPl
    ? ['tworzenie stron internetowych warszawa', 'strony internetowe warszawa', 'projektowanie stron www warszawa', 'agencja interaktywna warszawa', 'profesjonalne strony internetowe', 'mobilne strony www', 'sklepy internetowe warszawa', 'pozycjonowanie stron warszawa', 'titancode']
    : ['custom web development', 'web development warsaw', 'next.js development', 'seo optimization', 'freelance web developer', 'ecommerce solutions', 'titancode'];


  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://titancode.pl/${lang}`,
      languages: {
        'en': 'https://titancode.pl/en',
        'pl': 'https://titancode.pl/pl',
        'x-default': 'https://titancode.pl/pl',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://titancode.pl/${lang}`,
      siteName: 'TITANCODE',
      images: [
        {
          url: 'https://titancode.pl/og-image.png',
          width: 1200,
          height: 630,
          alt: 'TITANCODE - Tworzenie Stron Internetowych',
        },
      ],
      locale: isPl ? 'pl_PL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://titancode.pl/twitter-image.png'],
    },
    icons: {
      icon: {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
      apple: {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    },
    // Adding JSON-LD structured data
    // The 'other' property is not the standard way, but Next.js doesn't have a dedicated property yet.
    // A script tag in the component is the most reliable method.
  };
}

export default function Home() {
  return (
    <>
      <HomeClient />
      {/* 
        Directly embedding JSON-LD script is the most reliable way to ensure it's included.
        Next.js metadata API for scripts is still evolving.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "name": "TITANCODE",
              "image": "https://titancode.pl/og-image.png",
              "@id": "https://titancode.pl/#service",
              "url": "https://titancode.pl",
              "telephone": "+48 511 118 916",
              "email": "info@titancode.pl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Warszawa",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.2297,
                "longitude": 21.0122
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/titancode-pl"
              ],
              "priceRange": "$$",
              "description": "Profesjonalne tworzenie stron internetowych w Warszawie. Projektujemy szybkie, nowoczesne i zoptymalizowane pod SEO strony WWW dla firm.",
              "areaServed": {
                "@type": "Country",
                "name": "Poland"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://titancode.pl/#website",
              "url": "https://titancode.pl",
              "name": "TITANCODE",
              "description": "Tworzymy strony i aplikacje internetowe, które rzeczywiście przynoszą rezultaty.",
              "publisher": {
                "@id": "https://titancode.pl/#service"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://titancode.pl/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "pl-PL"
            }
          ]
        }) }}
      />
    </>
  );
}