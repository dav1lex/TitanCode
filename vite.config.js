import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { exec } from 'child_process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      closeBundle: async () => {
        console.log('Generating sitemap...');
        try {
          // Make sure the script exists
          if (fs.existsSync('./src/sitemap-generator.js')) {
            // Execute the sitemap generator
            exec('node ./src/sitemap-generator.js', (error, stdout, stderr) => {
              if (error) {
                console.error(`Error generating sitemap: ${error}`);
                return;
              }
              if (stdout) console.log(stdout);
              if (stderr) console.error(stderr);
              console.log('Sitemap generated successfully!');
            });
          } else {
            console.error('Sitemap generator script not found at ./src/sitemap-generator.js');
          }
        } catch (error) {
          console.error('Failed to generate sitemap:', error);
        }
      }
    }
  ],
  base: './', // Makes assets use relative paths
  build: {
    outDir: 'dist',
    // Ensure robots.txt and other SEO files are copied to dist
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
