# TitanCode Website

This is the repository for the TitanCode website - a professional web development services company.

## Image Generation

Several SVG files have been created for favicons and social media images. To create the proper PNG/JPG versions from these SVG files, follow these steps:

### Favicon Generation

1. Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload the `public/favicon.svg` file
3. Generate the following files and place them in the `public` directory:
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - favicon.ico

### Social Media Images

1. Open the SVG files in an image editor (Inkscape, Illustrator, Figma, etc.) or use an online converter
2. Export the following:
   - `public/og-image.svg` → `public/og-image.jpg` (1200x630 pixels)
   - `public/twitter-card.svg` → `public/twitter-card.jpg` (1200x600 pixels)

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Generate sitemap
npm run generate-sitemap
```

## SEO Features

This website includes several SEO enhancements:

- OpenGraph and Twitter Card metadata for social sharing
- Sitemap generation
- robots.txt configuration
- Structured data (JSON-LD) for better search results
- Helmet-based meta tag management
- Web manifest for PWA support

## Technologies

- React
- Vite
- React Router
- React Helmet Async
