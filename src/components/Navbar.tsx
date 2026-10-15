import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../data/businessData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About & Owner', path: '/about' },
    { name: 'Contact & Estimate', path: '/contact' },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#14281D] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#C89B53]/20 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#DFBA73] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pristine Spaces. Timeless Care.</span>
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#C89B53]" />
              <span>Cape Coral • Fort Myers • SW Florida</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-[11px] sm:text-xs font-medium">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#DFBA73] transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3 h-3 text-[#C89B53]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href={`mailto:${BUSINESS_DATA.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-white/80 hover:text-[#DFBA73] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C89B53]" />
              <span>{BUSINESS_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#C89B53]/25 py-3'
            : 'bg-[#FAF8F5] border-b border-[#14281D]/10 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold tracking-wide transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#14281D] font-bold'
                      : 'text-[#4A5D52] hover:text-[#14281D] hover:bg-[#14281D]/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#C89B53] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-[#14281D] border border-[#14281D]/20 hover:border-[#14281D] rounded-full transition-all duration-200"
            >
              Call Us Direct
            </a>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#14281D] text-[#FAF8F5] hover:bg-[#213D2D] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:ring-1 hover:ring-[#C89B53]"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-[#14281D] hover:bg-[#14281D]/10 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#14281D]/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl flex flex-col justify-between p-6 z-50 overflow-y-auto">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#14281D]/10">
                <BrandLogo size="sm" showSubtitle={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#14281D] hover:bg-[#14281D]/10"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#14281D] text-[#FAF8F5]'
                          : 'text-[#14281D] hover:bg-[#14281D]/5'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </nav>

              {/* Co-Founders Face Snippet in Mobile Drawer */}
              <Link
                to="/about"
                className="mt-6 p-3 rounded-2xl bg-[#FFFFFF] border border-[#C89B53]/35 shadow-xs flex items-center gap-3 group hover:border-[#14281D] transition-colors"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#C89B53] flex-shrink-0 bg-[#FAF8F5]">
                  <img
                    src="/images/upload/cofounders-faces-crop.svg"
                    alt="Kayla & Co-Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border border-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C89B53]">
                    Owners &amp; Co-Founders
                  </div>
                  <div className="text-xs font-bold text-[#14281D] group-hover:text-[#213D2D]">
                    Kayla &amp; Leadership
                  </div>
                  <div className="text-[10px] text-[#5A6D62]">
                    Meet the team on site in SW Florida
                  </div>
                </div>
              </Link>

              {/* Trust Badge Reminder */}
              <div className="mt-4 p-4 rounded-xl bg-[#F3EFE6] border border-[#C89B53]/30 text-xs">
                <div className="flex items-center gap-2 text-[#14281D] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C89B53]" />
                  <span>Licensed &amp; Insured in Florida</span>
                </div>
                <p className="mt-1.5 text-[#5A6D62] text-[11px] leading-relaxed">
                  Family-owned and operated by Kayla. Commercial, post-construction, and residential cleaning.
                </p>
              </div>
            </div>

            {/* Bottom Contact Section */}
            <div className="pt-6 border-t border-[#14281D]/10 space-y-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[#14281D] text-[#FAF8F5] hover:bg-[#213D2D] py-3.5 px-4 rounded-xl text-sm font-bold tracking-wide shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#DFBA73]" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 border border-[#C89B53] text-[#14281D] hover:bg-[#C89B53]/10 py-3 px-4 rounded-xl text-sm font-bold tracking-wide"
              >
                <span>Request Free Estimate</span>
              </Link>

              <div className="text-center pt-2">
                <a
                  href={BUSINESS_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#5A6D62] hover:text-[#14281D] underline font-medium"
                >
                  Follow Palm &amp; Pearl on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
