import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Hammer, 
  Home, 
  Leaf, 
  Clock, 
  Eye, 
  Award,
  Calendar
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_DATA, CONTRACTOR_CHECKLIST, COMMERCIAL_SECTORS } from '../data/businessData';
import { ImageModal } from '../components/ImageModal';
import { OwnersFaceSnippet } from '../components/OwnersFaceSnippet';

export const ServicesPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    subtitle?: string;
    details?: string;
  }>({
    isOpen: false,
    src: '',
    title: ''
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
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-[#14281D] text-white py-16 sm:py-24 border-b border-[#C89B53]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#DFBA73] text-xs font-bold uppercase tracking-widest border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Southwest Florida Cleaning Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold leading-tight">
            Comprehensive Cleaning Services
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-[#DFBA73]">
            Cleaning Done Right.
          </p>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto pt-2">
            Engineered specifically for custom home builders, facility managers, medical practitioners, and luxury coastal homeowners throughout Cape Coral and Fort Myers.
          </p>
        </div>
      </section>

      {/* 1. COMMERCIAL CLEANING IN-DEPTH */}
      <section id="commercial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-3xl border border-[#C89B53]/30 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual flyer card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#C89B53]/40 shadow-xl group bg-[#FAF8F5] max-w-sm">
                <img
                  src="/images/upload/844278059_122110127211497741_6854398682803496698_n.jpg"
                  alt="Official Palm & Pearl Commercial Cleaning Flyer"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() =>
                    openImageModal(
                      '/images/upload/844278059_122110127211497741_6854398682803496698_n.jpg',
                      'Commercial Cleaning Flyer',
                      'Offices • Banks • Churches • Medical & Dental Offices',
                      'Keeping your business clean so you can focus on what matters.'
                    )
                  }
                  className="absolute bottom-3 right-3 bg-[#14281D] hover:bg-[#213D2D] text-[#DFBA73] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Flyer</span>
                </button>
              </div>
              <span className="text-[11px] text-[#607268] mt-2 font-medium">
                Official Palm &amp; Pearl Commercial flyer
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                  Division I: Business &amp; Janitorial
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                  Commercial Cleaning Programs
                </h2>
                <p className="font-script text-2xl text-[#C89B53]">
                  Keeping your business clean so you can focus on what matters.
                </p>
              </div>

              <p className="text-sm text-[#4E6156] leading-relaxed">
                Whether managing a busy corporate headquarters, a financial institution, a church community center, or an active medical clinic, Palm &amp; Pearl delivers meticulous janitorial upkeep tailored to your operating hours.
              </p>

              {/* 4 Commercial Sectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {COMMERCIAL_SECTORS.map((sector, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/20">
                    <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                      <span className="text-[#C89B53]">✦</span>
                      <span>{sector.title}</span>
                    </div>
                    <p className="text-[11px] text-[#607369] mt-1 leading-snug">
                      {sector.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Protocol Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14281D]">
                  Standard Commercial Inclusions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#304237]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                    <span>Lobby, reception &amp; conference rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                    <span>Restroom sanitizing &amp; restocking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                    <span>High-touch surface sterilization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                    <span>Discreet night or weekend key access</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact?service=commercial"
                  className="inline-flex items-center gap-2 bg-[#14281D] hover:bg-[#213D2D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                >
                  <span>Request Commercial Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73]" />
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#14281D] hover:text-[#C89B53]"
                >
                  <Phone className="w-4 h-4 text-[#C89B53]" />
                  <span>Call 239-295-4317</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POST-CONSTRUCTION CLEANING IN-DEPTH */}
      <section id="post-construction" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#C89B53]/30 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                  Division II: Builder &amp; Contractor Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                  Post-Construction Detailing
                </h2>
                <p className="font-script text-2xl text-[#C89B53]">
                  From Construction to Completion... We Make it Shine.
                </p>
              </div>

              <p className="text-sm text-[#4E6156] leading-relaxed">
                The construction is complete — now it's time to make it shine. Palm &amp; Pearl provides dependable post-construction turnaround for custom home builders, commercial contractors, and remodeling firms across Southwest Florida.
              </p>

              {/* 10-Point Checklist Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#C89B53]/30 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14281D] pb-2 border-b border-[#14281D]/10">
                  Our Full 10-Point Contractor Scope:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2B3E33]">
                  {CONTRACTOR_CHECKLIST.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B53] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contractor Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-bold text-[#14281D]">
                <div className="p-2.5 rounded-lg bg-white border border-[#C89B53]/20">
                  <div>Trusted Partner</div>
                  <div className="text-[9px] text-[#607369] font-normal">Builders &amp; GCs</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#C89B53]/20">
                  <div>Licensed &amp; Insured</div>
                  <div className="text-[9px] text-[#607369] font-normal">Total Peace of Mind</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#C89B53]/20">
                  <div>Flexible Timelines</div>
                  <div className="text-[9px] text-[#607369] font-normal">Tight Deadlines</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#C89B53]/20">
                  <div>Competitive Pricing</div>
                  <div className="text-[9px] text-[#607369] font-normal">Uncompromising Quality</div>
                </div>
              </div>

              {/* Owners Personal Accountability Snippet */}
              <div className="pt-2">
                <OwnersFaceSnippet />
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact?service=post-construction"
                  className="inline-flex items-center gap-2 bg-[#14281D] hover:bg-[#213D2D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                >
                  <span>Book Jobsite Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73]" />
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#14281D] hover:text-[#C89B53]"
                >
                  <Phone className="w-4 h-4 text-[#C89B53]" />
                  <span>Call 239-295-4317</span>
                </a>
              </div>
            </div>

            {/* Visual flyer card */}
            <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#C89B53]/40 shadow-xl group bg-white max-w-sm">
                <img
                  src="/images/upload/825351791_122104740789497741_218258861610752807_n.jpg"
                  alt="Post-Construction Contractor Services Flyer"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() =>
                    openImageModal(
                      '/images/upload/825351791_122104740789497741_218258861610752807_n.jpg',
                      'Post-Construction Services Flyer',
                      'From Construction to Completion... We Make it Shine.',
                      'Full 10-point contractor turnover protocols for home builders & developers.'
                    )
                  }
                  className="absolute bottom-3 right-3 bg-[#14281D] hover:bg-[#213D2D] text-[#DFBA73] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Flyer</span>
                </button>
              </div>
              <span className="text-[11px] text-[#607268] mt-2 font-medium">
                Official Post-Construction builder flyer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESIDENTIAL CLEANING & ESTATES */}
      <section id="residential" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-3xl border border-[#C89B53]/30 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#C89B53]/40 shadow-xl group bg-[#FAF8F5] max-w-sm">
                <img
                  src="/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg"
                  alt="Palm & Pearl Fleet at Waterfront Estate"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() =>
                    openImageModal(
                      '/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg',
                      'Kayla & The Palm & Pearl Fleet',
                      'Waterfront Estate Service in Southwest Florida',
                      'Branded company vehicles on site at a coastal luxury home in Southwest Florida.'
                    )
                  }
                  className="absolute bottom-3 right-3 bg-[#14281D] hover:bg-[#213D2D] text-[#DFBA73] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Fleet Image</span>
                </button>
              </div>
              <span className="text-[11px] text-[#607268] mt-2 font-medium">
                On site at a luxury Florida coastal residence
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                  Division III: White-Glove Residential
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                  Residential Cleaning &amp; Estates
                </h2>
                <p className="font-script text-2xl text-[#C89B53]">
                  Clean Spaces. Brighter Days.
                </p>
              </div>

              <p className="text-sm text-[#4E6156] leading-relaxed">
                Enjoy coming home to a fresh, pristine sanctuary. We clean luxury single-family homes, Gulf-front condos, and waterfront estates with deep respect for your privacy, furnishings, and delicate materials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/25 space-y-1">
                  <div className="font-bold text-xs text-[#14281D]">Routine Maintenance</div>
                  <p className="text-[11px] text-[#55695E]">
                    Weekly, bi-weekly, or monthly visits keeping your home consistently impeccable.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/25 space-y-1">
                  <div className="font-bold text-xs text-[#14281D]">Move-In / Move-Out</div>
                  <p className="text-[11px] text-[#55695E]">
                    Comprehensive real estate turnovers ensuring spotless handover for buyers or tenants.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/25 space-y-1">
                  <div className="font-bold text-xs text-[#14281D]">Seasonal Openings</div>
                  <p className="text-[11px] text-[#55695E]">
                    Snowbird prep: air circulation, dusting, deep kitchen &amp; bath sanitation before arrival.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/25 space-y-1">
                  <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#C89B53]" />
                    <span>Eco-Friendly (On Request)</span>
                  </div>
                  <p className="text-[11px] text-[#55695E]">
                    Safe non-toxic solutions to safeguard children, pets, and the Florida shoreline.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact?service=residential"
                  className="inline-flex items-center gap-2 bg-[#14281D] hover:bg-[#213D2D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                >
                  <span>Get Residential Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73]" />
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#14281D] hover:text-[#C89B53]"
                >
                  <Phone className="w-4 h-4 text-[#C89B53]" />
                  <span>Call 239-295-4317</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CLEAN DETAILING */}
      <section id="final-detailing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#14281D] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B53]/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DFBA73]">
                Division IV: Ultra-Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                Final Clean Detailing
              </h2>
              <p className="font-script text-2xl text-[#DFBA73]">
                Precision. Quality. Showroom Ready.
              </p>
              <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                Designed for high-stakes presentations: luxury real estate architectural photography, developer grand openings, executive staging, and yacht/estate turnovers where every millimeter of glass, stone, and brass must be flawless.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-xs text-[#DFBA73]">Glass &amp; Sliders</div>
                  <p className="text-[11px] text-white/70">
                    Streak-free interior and exterior glazing with track and screen vacuuming.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-xs text-[#DFBA73]">Stone &amp; Millwork</div>
                  <p className="text-[11px] text-white/70">
                    Microfiber buffing of marble, quartz, crown molding, and custom cabinetry.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-xs text-[#DFBA73]">Showroom Finish</div>
                  <p className="text-[11px] text-white/70">
                    Ready for magazine-grade photography, video capture, and VIP walkthroughs.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact?service=final-detailing"
                  className="inline-flex items-center gap-2 bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                >
                  <span>Request VIP Detailing Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#DFBA73]"
                >
                  <Phone className="w-4 h-4 text-[#DFBA73]" />
                  <span>Call 239-295-4317</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-[#FAF8F5] p-2 border-2 border-[#DFBA73] shadow-2xl flex items-center justify-center">
                <img
                  src="/images/upload/825350970_2227129271558671_4729667765504210952_n.jpg"
                  alt="Palm & Pearl Emblem"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
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
