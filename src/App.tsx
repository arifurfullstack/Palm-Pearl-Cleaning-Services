import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C2A22] selection:bg-[#C89B53]/25 selection:text-[#14281D]">
        {/* Main Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Quick Action Bar (Visible only on mobile screens) */}
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  );
}
