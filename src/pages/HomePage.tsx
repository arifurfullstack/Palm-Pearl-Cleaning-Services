import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Hammer, 
  Home, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Leaf, 
  Star,
  Eye,
  MapPin,
  Clock
} from 'lucide-react';
import { BUSINESS_DATA, SERVICES_LIST, COMMERCIAL_SECTORS, TRUST_BADGES, TESTIMONIALS, CONTRACTOR_CHECKLIST } from '../data/businessData';
import { EstimateCalculator } from '../components/EstimateCalculator';
import { ImageModal } from '../components/ImageModal';

export const HomePage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    subtitle?: string;
    details?: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
  });

  const openImageModal = (src: string, title: string, subtitle?: string, details?: string) => {
    setActiveModal({
      isOpen: true,
      src,
      title,
      subtitle,
      details
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-[#C89B53]/20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6]/70 to-[#FAF8F5]">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C89B53]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#14281D]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14281D] text-[#DFBA73] text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial • Post Construction • Residential</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#14281D] leading-[1.08] tracking-tight">
                Pristine Spaces. <br />
                <span className="italic font-normal text-[#C89B53]">Timeless Care.</span>
              </h1>

              {/* Script Subhead */}
              <p className="font-script text-3xl sm:text-4xl text-[#14281D]/90">
                Cleaning Done Right.
              </p>

              {/* Body */}
              <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Boutique, family-owned cleaning services engineered for luxury coastal residences, active commercial properties, and post-construction builder completions across Cape Coral, Fort Myers, and Southwest Florida.
              </p>

              {/* Core Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-[#14281D] pt-2">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#C89B53]/30 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#C89B53]" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#C89B53]/30 shadow-xs">
                  <Users className="w-4 h-4 text-[#C89B53]" />
                  <span>Family Owned &amp; Operated</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#C89B53]/30 shadow-xs">
                  <Leaf className="w-4 h-4 text-[#C89B53]" />
                  <span>Eco-Friendly Options</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14281D] text-[#FAF8F5] hover:bg-[#213D2D] active:scale-[0.98] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:ring-2 hover:ring-[#C89B53]"
                >
                  <Phone className="w-4 h-4 text-[#DFBA73]" />
                  <span>Call 239-295-4317</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#C89B53] text-[#14281D] hover:bg-[#C89B53]/15 active:scale-[0.98] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C89B53]" />
                </Link>
              </div>

              {/* Location Tag */}
              <p className="text-xs text-[#63756C] flex items-center justify-center lg:justify-start gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C89B53]" />
                <span>Cape Coral • Fort Myers • Estero • Bonita Springs • Naples • Sanibel</span>
              </p>
            </div>

            {/* Right Hero Visual Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative group max-w-md mx-auto">
                {/* Gold Outer Frame Accent */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#DFBA73] via-[#C89B53] to-[#9E7634] rounded-2xl opacity-20 group-hover:opacity-35 transition-opacity blur-sm" />
                
                <div className="relative rounded-2xl overflow-hidden bg-white border border-[#C89B53]/40 shadow-2xl">
                  {/* Official Logo & Service Identity Image */}
                  <img
                    src="/825350970_2227129271558671_4729667765504210952_n.jpg"
                    alt="Palm & Pearl Cleaning Services - Official Identity and Services"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Action Banner */}
                  <div className="p-4 bg-[#14281D] text-[#FAF8F5] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#DFBA73] uppercase tracking-wider">
                        Official Brand Emblem
                      </div>
                      <div className="text-[11px] text-white/70">
                        Pristine Spaces • Timeless Care
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        openImageModal(
                          '/825350970_2227129271558671_4729667765504210952_n.jpg',
                          'Palm & Pearl Official Identity',
                          'Commercial • Post Construction • Residential',
                          'Official brand emblem featuring palm motif, oyster pearl, and high-rise architecture.'
                        )
                      }
                      className="inline-flex items-center gap-1.5 bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE ORIGINAL BRAND VISUALS SHOWCASE (PRD CORE REQUIREMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Authentic Business Assets
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
            The Original Palm &amp; Pearl Identity
          </h2>
          <p className="text-sm sm:text-base text-[#4C5E53] leading-relaxed">
            Directly from owner Kayla and our Southwest Florida operations. Click any image to view in high-resolution detail.
          </p>
        </div>

        {/* 3 Core Original Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Official Logo & Services Badge */}
          <div className="bg-white rounded-2xl border border-[#C89B53]/30 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative overflow-hidden bg-[#FAF8F5] aspect-square flex items-center justify-center p-3">
              <img
                src="/825350970_2227129271558671_4729667765504210952_n.jpg"
                alt="Palm & Pearl Official Service Identity Badge"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() =>
                  openImageModal(
                    '/825350970_2227129271558671_4729667765504210952_n.jpg',
                    'Official Brand Logo & Services',
                    'Commercial • Post Construction • Residential • Final Detailing',
                    'The official Palm & Pearl registered service mark and core service breakdown.'
                  )
                }
                className="absolute inset-0 bg-[#14281D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-xs"
              >
                <Eye className="w-4 h-4 text-[#DFBA73]" />
                <span>View Full Resolution</span>
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t border-[#14281D]/5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B53]">Asset 1 of 3</span>
                <h3 className="font-serif-luxury font-bold text-xl text-[#14281D] mt-1">
                  Official Logo &amp; Service Identity
                </h3>
                <p className="text-xs text-[#52655A] mt-2 leading-relaxed">
                  The cornerstone crest uniting tropical Florida palms, the natural oyster pearl, and modern high-rise architecture with our four core divisions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#14281D]/10 flex items-center justify-between text-xs text-[#14281D] font-bold">
                <span>Pristine Spaces. Timeless Care.</span>
                <Link to="/services" className="text-[#C89B53] hover:underline inline-flex items-center gap-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Commercial Cleaning Branding Flyer */}
          <div className="bg-white rounded-2xl border border-[#C89B53]/30 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative overflow-hidden bg-[#FAF8F5] aspect-square flex items-center justify-center p-3">
              <img
                src="/844278059_122110127211497741_6854398682803496698_n.jpg"
                alt="Palm & Pearl Commercial Cleaning Flyer"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() =>
                  openImageModal(
                    '/844278059_122110127211497741_6854398682803496698_n.jpg',
                    'Commercial Cleaning Services',
                    'Offices • Banks • Churches • Medical & Dental Offices',
                    'Trusted commercial cleaning ensuring sanitized, pristine facilities across Southwest Florida.'
                  )
                }
                className="absolute inset-0 bg-[#14281D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-xs"
              >
                <Eye className="w-4 h-4 text-[#DFBA73]" />
                <span>View Full Resolution</span>
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t border-[#14281D]/5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B53]">Asset 2 of 3</span>
                <h3 className="font-serif-luxury font-bold text-xl text-[#14281D] mt-1">
                  Commercial Cleaning Program
                </h3>
                <p className="text-xs text-[#52655A] mt-2 leading-relaxed">
                  Keeping your business clean so you can focus on what matters. Serving commercial offices, financial banks, churches, and sanitized medical/dental suites.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#14281D]/10 flex items-center justify-between text-xs text-[#14281D] font-bold">
                <span>Cleaning Done Right.</span>
                <Link to="/services#commercial" className="text-[#C89B53] hover:underline inline-flex items-center gap-1">
                  Commercial <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Real Owner Kayla & Branded Fleet */}
          <div className="bg-white rounded-2xl border border-[#C89B53]/30 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative overflow-hidden bg-[#FAF8F5] aspect-square flex items-center justify-center p-3">
              <img
                src="/842465995_122105284371497741_6757168991532059581_n.jpg"
                alt="Meet Owner Kayla - Palm & Pearl Cleaning Services"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() =>
                  openImageModal(
                    '/842465995_122105284371497741_6757168991532059581_n.jpg',
                    'Meet the Owner: Kayla',
                    'Family Owned & Operated • Reliable & Trustworthy',
                    'Personal letter from Kayla: "I take pride in leading a company that treats every property like it\'s our own."'
                  )
                }
                className="absolute inset-0 bg-[#14281D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-xs"
              >
                <Eye className="w-4 h-4 text-[#DFBA73]" />
                <span>View Full Resolution</span>
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t border-[#14281D]/5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B53]">Asset 3 of 3</span>
                <h3 className="font-serif-luxury font-bold text-xl text-[#14281D] mt-1">
                  Meet the Owner — Kayla
                </h3>
                <p className="text-xs text-[#52655A] mt-2 leading-relaxed">
                  Real leadership with a personal commitment. Proudly family-owned, community-focused, and licensed &amp; insured to deliver clean spaces and brighter days.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#14281D]/10 flex items-center justify-between text-xs text-[#14281D] font-bold">
                <span>Clean Spaces ✦ Brighter Days</span>
                <Link to="/about" className="text-[#C89B53] hover:underline inline-flex items-center gap-1">
                  Kayla's Story <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Fleet & Contractor Assets Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fleet Photo Card */}
          <div
            onClick={() =>
              openImageModal(
                '/825350966_2227129678225297_3306893046972007862_n.jpg',
                'Kayla & The Palm & Pearl Fleet',
                'Waterfront Luxury Estate Service in Southwest Florida',
                'The real Palm & Pearl team and branded company SUV fleet on site at a coastal Florida estate.'
              )
            }
            className="cursor-pointer bg-[#14281D] text-white rounded-2xl p-6 border border-[#C89B53]/40 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#DFBA73] transition-all"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 p-1 border border-[#C89B53]/40">
              <img
                src="/825350966_2227129678225297_3306893046972007862_n.jpg"
                alt="Palm & Pearl Branded Vehicle Fleet"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFBA73]">
                On-Site in Cape Coral &amp; Naples
              </span>
              <h3 className="font-serif-luxury font-bold text-xl text-white">
                Branded Company Fleet &amp; Team
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Our uniformed professionals arrive fully equipped in custom Palm &amp; Pearl vehicles, ready for white-glove service.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] font-bold pt-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to view fleet image</span>
              </div>
            </div>
          </div>

          {/* Builder & Post-Construction Flyer Card */}
          <div
            onClick={() =>
              openImageModal(
                '/825351791_122104740789497741_218258861610752807_n.jpg',
                'Post-Construction Builder & Contractor Services',
                'From Construction to Completion... We Make it Shine.',
                'Official builder partner flyer detailing 10-point turnover protocol for general contractors.'
              )
            }
            className="cursor-pointer bg-[#F4EFE6] text-[#14281D] rounded-2xl p-6 border border-[#C89B53]/40 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#C89B53] transition-all"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1 border border-[#C89B53]/40">
              <img
                src="/825351791_122104740789497741_218258861610752807_n.jpg"
                alt="Post-Construction Cleaning Flyer"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C89B53]">
                Builder &amp; Contractor Program
              </span>
              <h3 className="font-serif-luxury font-bold text-xl text-[#14281D]">
                Post-Construction Protocols
              </h3>
              <p className="text-xs text-[#52655A] leading-relaxed">
                From drywall dust extraction to window track detailing. Inspect our official contractor turnover flyer.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#14281D] font-bold pt-1">
                <Eye className="w-3.5 h-3.5 text-[#C89B53]" />
                <span>Click to inspect contractor flyer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR SERVICE PILLARS OVERVIEW */}
      <section className="bg-[#14281D] text-[#FAF8F5] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DFBA73]">
                Full Spectrum Cleaning
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
                Four Pillars of White-Glove Care
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DFBA73] hover:text-white transition-colors"
            >
              <span>View In-Depth Service Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#1E3628] rounded-2xl p-6 border border-[#C89B53]/25 flex flex-col justify-between hover:border-[#DFBA73] transition-all duration-300 group shadow-md"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C89B53]/20 text-[#DFBA73] border border-[#C89B53]/30">
                    {srv.badge}
                  </span>
                  <h3 className="font-serif-luxury font-bold text-2xl text-white group-hover:text-[#DFBA73] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {srv.description}
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-white/85">
                    {srv.highlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-script text-[#DFBA73] text-base">{srv.tagline}</span>
                  <Link
                    to={`/services#${srv.id}`}
                    className="p-2 rounded-full bg-white/5 hover:bg-[#C89B53] hover:text-[#14281D] transition-colors"
                    aria-label={`Learn more about ${srv.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET KAYLA (OWNER) SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#C89B53]/40 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Owner Image & Badges (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative max-w-sm w-full rounded-2xl overflow-hidden border-2 border-[#C89B53]/40 shadow-xl group bg-white">
                <img
                  src="/842465995_122105284371497741_6757168991532059581_n.jpg"
                  alt="Kayla, Owner of Palm & Pearl Cleaning Services"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() =>
                    openImageModal(
                      '/842465995_122105284371497741_6757168991532059581_n.jpg',
                      'Meet the Owner — Kayla',
                      'Palm & Pearl Cleaning Services',
                      'Family-owned and operated with pride in Southwest Florida.'
                    )
                  }
                  className="absolute bottom-3 right-3 bg-[#14281D]/90 text-white hover:bg-[#14281D] p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>Enlarge Flyer</span>
                </button>
              </div>
            </div>

            {/* Owner Text & Commitment (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                  Personal Leadership &amp; Accountability
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                  Meet the Owner — Kayla
                </h2>
                <p className="font-script text-2xl sm:text-3xl text-[#C89B53]">
                  Treating every property like it's our own.
                </p>
              </div>

              {/* Bio Quote */}
              <blockquote className="p-5 rounded-2xl bg-[#F4EFE6] border-l-4 border-[#C89B53] text-[#24352B] italic text-base sm:text-lg leading-relaxed">
                "{BUSINESS_DATA.owner.bio}"
              </blockquote>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-[#14281D]">
                {BUSINESS_DATA.owner.pillars.map((pillar, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#C89B53]/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              {/* Handwritten Note Callout */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                <div className="font-script text-2xl sm:text-3xl text-[#14281D]">
                  Thanks for supporting our small business! ♡
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#14281D] text-[#FAF8F5] hover:bg-[#213D2D] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POST-CONSTRUCTION CONTRACTOR CHECKLIST PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#C89B53]/30 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                Builder &amp; Contractor Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                From Construction to Completion... We Make it Shine.
              </h2>
              <p className="text-sm text-[#4E6055] leading-relaxed">
                Home builders, developers, and general contractors rely on Palm &amp; Pearl for flawless turnovers. We systematically eliminate drywall haze, construction debris, paint overspray, and millwork dust.
              </p>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C89B53]/25 space-y-2 text-xs">
                <div className="font-bold text-[#14281D] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C89B53]" />
                  <span>Flexible Project Scheduling</span>
                </div>
                <p className="text-[#596C61]">
                  Tight deadline? We coordinate around your subcontractors and inspectors to ensure your property is showroom ready for final client walkthroughs.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14281D] hover:text-[#C89B53] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C89B53]" />
                  <span>Call Kayla for Contractor Punch-List Bids</span>
                </a>
              </div>
            </div>

            {/* Checklist Grid (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#14281D]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14281D] mb-4 pb-2 border-b border-[#14281D]/10 flex items-center justify-between">
                  <span>10-Point Post-Construction Protocol</span>
                  <span className="text-[#C89B53]">Included on Every Job</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2A3C32]">
                  {CONTRACTOR_CHECKLIST.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE ESTIMATE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EstimateCalculator />
      </section>

      {/* 7. COMMERCIAL SECTORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
            Commercial Cleaning Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
            Keeping Southwest Florida Businesses Spotless
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMERCIAL_SECTORS.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#C89B53]/30 shadow-md hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#14281D] text-[#DFBA73] flex items-center justify-center font-bold text-xl">
                {idx === 0 && '🏢'}
                {idx === 1 && '🏛'}
                {idx === 2 && '⛪'}
                {idx === 3 && '🦷'}
              </div>
              <h3 className="font-serif-luxury font-bold text-xl text-[#14281D]">
                {sector.title}
              </h3>
              <p className="text-xs text-[#52655A] leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-[#FAF8F5] py-16 border-y border-[#C89B53]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
              Reputation in Southwest Florida
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
              Trusted by Builders &amp; Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#C89B53]/30 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#C89B53]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C89B53]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E5045] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#14281D]/10">
                  <div className="font-serif-luxury font-bold text-base text-[#14281D]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#63756C] font-medium">{t.role}</div>
                  <div className="text-[11px] text-[#C89B53] font-semibold">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#14281D] text-white rounded-3xl p-8 sm:p-14 border border-[#C89B53] shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="font-script text-3xl sm:text-4xl text-[#DFBA73]">
              Let's Keep Your Space Clean!
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold leading-tight">
              Ready for a Spotless Turnaround in Southwest Florida?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl">
              From recurring commercial janitorial to custom home move-in detailing and builder turnovers, we treat your property with absolute care.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request Free Written Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal({ ...activeModal, isOpen: false })}
        imageSrc={activeModal.src}
        title={activeModal.title}
        subtitle={activeModal.subtitle}
        details={activeModal.details}
      />
    </div>
  );
};
