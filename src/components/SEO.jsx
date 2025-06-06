import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO component for consistent metadata and search engine optimization
 */
const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage,
  structuredData,
  children 
}) => {
  // Base URL for the site
  const siteUrl = 'https://titancode.dev';
  
  // Default image if none provided
  const defaultImage = `${siteUrl}/images/titan-code-og-image.jpg`;
  
  // Format the title with site name
  const formattedTitle = title ? `${title} | TitanCode` : 'TitanCode - Professional Web Development Services';
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{formattedTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage || defaultImage} />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}
      <meta property="og:site_name" content="TitanCode" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Structured data for better rich snippets */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional meta tags */}
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  structuredData: PropTypes.object,
  children: PropTypes.node
};

export default SEO; 