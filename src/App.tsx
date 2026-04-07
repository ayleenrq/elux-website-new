import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WebflowHome from './components/WebflowHome';
import BottomCTA from './components/BottomCTA';
import AboutUs from './pages/AboutUs';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudiesArchive from './pages/CaseStudiesArchive';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Testimonials from './pages/Testimonials';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

import Footer from './components/Footer';



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
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [hash]);

  const renderPage = () => {
    if (hash === '#about') return <AboutUs />;
    if (hash.startsWith('#services')) return <ServiceDetail />;
    if (hash === '#case-studies') return <CaseStudiesArchive />;
    if (hash.startsWith('#case-study-detail')) return <CaseStudyDetail />;
    if (hash === '#testimonials') return <Testimonials />;
    if (hash.startsWith('#industries')) return <Industries />;
    if (hash === '#contact') return <Contact />;
    if (hash === '#blog') return <Blog />;
    if (hash.startsWith('#blog/')) return <BlogDetail />;
    return (
      <WebflowHome />
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        {renderPage()}
        {hash !== '#contact' && <BottomCTA />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
