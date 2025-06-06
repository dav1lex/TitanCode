import fs from 'fs';
import { SitemapStream } from 'sitemap';
import { streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const baseUrl = 'https://titancode.pl';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.6 },
  
  // Portfolio pages
  { url: '/portfolio/english-tutor', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio/auction-portal', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio/commercial-project', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: baseUrl });

const generateSitemap = async () => {
  try {
    const links = routes.map(route => ({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority
    }));
    
    const data = await streamToPromise(
      Readable.from(links).pipe(stream)
    );
    
    // Ensure the public directory exists
    if (!fs.existsSync('./public')) {
      fs.mkdirSync('./public', { recursive: true });
    }
    
    // Write the sitemap to public directory
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap(); 