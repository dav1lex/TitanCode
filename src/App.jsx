import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTheme } from './hooks/useTheme';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';
import EnglishTutor from './pages/portfolio/EnglishTutor';
import AuctionPortal from './pages/portfolio/AuctionPortal';
import CommercialProject from './pages/portfolio/CommercialProject';
import ProgressBar from './components/ProgressBar';

function App() {
  const { theme } = useTheme();
  
  // Apply theme to the document element
  document.documentElement.setAttribute('data-theme', theme);
  
  return (
    <HelmetProvider>
      <div className="app">
        <ProgressBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/english-tutor" element={<EnglishTutor />} />
            <Route path="/portfolio/auction-portal" element={<AuctionPortal />} />
            <Route path="/portfolio/commercial-project" element={<CommercialProject />} />
            {/* Other routes would be added here */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Layout>
      </div>
    </HelmetProvider>
  );
}

export default App;
