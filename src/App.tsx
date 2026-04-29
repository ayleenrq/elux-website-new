import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WebflowHome from './components/WebflowHome';
import BottomCTA from './components/BottomCTA';
import AboutUs from './pages/AboutUs';
import ServiceDetail, { serviceDataMap } from './pages/ServiceDetail';
import CaseStudiesArchive from './pages/CaseStudiesArchive';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Testimonials from './pages/Testimonials';
import Industries, { industryHighlights } from './pages/Industries';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

import Footer from './components/Footer';

const PAGE_TITLES: Record<string, string> = {
  '#home': 'eluxspace | Premium Product Design Agency',
  '#about': 'About Us | Elux Space – Global Product Design Studio',
  '#services': 'Services | Elux Space – UI/UX & Product Design',
  '#services-seed': 'Seed Stage Services | Elux Space',
  '#services-growth': 'Growth Stage Services | Elux Space',
  '#services-scale': 'Scale Stage Services | Elux Space',
  '#industries': 'Industries | Elux Space – Product Design Studio',
  '#case-studies': 'Case Studies | Elux Space – Work That Ships',
  '#testimonials': 'Testimonials | Elux Space – Client Stories',
  '#contact': 'Contact Us | Elux Space – Start Your Project',
  '#blog': 'Blog | Elux Space – Design & Product Insights',
};

function getPageTitle(hash: string): string {
  const normalizedHash = hash.split('?')[0];
  if (PAGE_TITLES[normalizedHash]) return PAGE_TITLES[normalizedHash];
  if (normalizedHash.startsWith('#services')) {
      const svc = serviceDataMap[normalizedHash];
      if (svc && svc.serviceTitle) {
          return `${svc.serviceTitle} | Elux Space`;
      }
      return 'Services | Elux Space – UI/UX & Product Design';
  }
  if (normalizedHash.startsWith('#industries')) {
      const ind = industryHighlights[normalizedHash];
      if (ind && ind.title) {
          return `${ind.label} | Elux Space`;
      }
      return 'Industries | Elux Space – Product Design Studio';
  }
  if (normalizedHash.startsWith('#blog/')) return 'Blog | Elux Space – Design & Product Insights';
  if (normalizedHash.startsWith('#case-study-detail')) return 'Case Study | Elux Space';
  return 'eluxspace | Premium Product Design Agency';
}

function App() {
  const [hash, setHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    
    // Toggle Webflow styles based on current page
    const isHome = (window.location.hash || '#home') === '#home';
    const wfLinks = ['wf-normalize', 'wf-main', 'wf-site'];
    wfLinks.forEach(id => {
      const el = document.getElementById(id) as HTMLLinkElement | null;
      if (el) el.disabled = !isHome;
    });

    // Add/remove class to body for scoped overrides
    if (isHome) {
      document.body.classList.add('is-webflow');
    } else {
      document.body.classList.remove('is-webflow');
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
      document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
      document.documentElement.style.removeProperty('scroll-behavior');
      document.body.style.removeProperty('scroll-behavior');
      document.body.style.removeProperty('overflow');
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    // Update document title
    document.title = getPageTitle(window.location.hash || '#home');

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [hash]);

  const renderPage = () => {
    if (hash === '#about') return <AboutUs key={hash} />;
    if (hash.startsWith('#services')) return <ServiceDetail key={hash} serviceHash={hash} />;
    if (hash === '#case-studies') return <CaseStudiesArchive key={hash} />;
    if (hash.startsWith('#case-study-detail')) return <CaseStudyDetail key={hash} />;
    if (hash === '#testimonials') return <Testimonials key={hash} />;
    if (hash.startsWith('#industries')) return <Industries key={hash} industryHash={hash} />;
    if (hash === '#contact') return <Contact key={hash} />;
    if (hash === '#blog') return <Blog key={hash} />;
    if (hash.startsWith('#blog/')) return <BlogDetail key={hash} />;
    return (
      <WebflowHome key={hash} />
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        {renderPage()}
        {hash !== '#home' && hash !== '#contact' && <BottomCTA />}
      </main>
      {hash !== '#home' && <Footer />}
    </div>
  );
}

export default App;
