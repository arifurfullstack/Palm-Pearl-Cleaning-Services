import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Eye, 
  Award,
  Truck,
  Leaf,
  Clock
} from 'lucide-react';
import { BUSINESS_DATA, TRUST_BADGES } from '../data/businessData';
import { ImageModal } from '../components/ImageModal';
import { CoFoundersInteractiveCard } from '../components/CoFoundersInteractiveCard';
import { OwnersFaceSnippet } from '../components/OwnersFaceSnippet';

export const AboutPage: React.FC = () => {
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
            <Heart className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span>Family Owned &amp; Operated</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold leading-tight">
            About Palm &amp; Pearl
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-[#DFBA73]">
            Clean Spaces ✦ Brighter Days
          </p>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto pt-2">
            Built on genuine Florida relationships, meticulous craftsmanship, and direct owner accountability for every home and business we touch.
          </p>
        </div>
      </section>

      {/* 1. MEET THE OWNER: KAYLA (PRD CORE REQUIREMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#C89B53]/30 p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Owner Kayla Visual Asset */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C89B53]/40 shadow-2xl group bg-[#FAF8F5] max-w-sm w-full">
                <img
                  src="/842465995_122105284371497741_6757168991532059581_n.jpg"
                  alt="Kayla - Owner of Palm & Pearl Cleaning Services"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() =>
                    openImageModal(
                      '/842465995_122105284371497741_6757168991532059581_n.jpg',
                      'Meet the Owner — Kayla',
                      'Family Owned & Operated • Reliable & Trustworthy',
                      'Personal letter from Kayla: "I take pride in leading a company that treats every property like it\'s our own."'
                    )
                  }
                  className="absolute bottom-3 right-3 bg-[#14281D] hover:bg-[#213D2D] text-[#DFBA73] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Flyer</span>
                </button>
              </div>
              <span className="text-xs text-[#63756C] mt-2 font-medium">
                Kayla — Owner, Palm &amp; Pearl Cleaning Services
              </span>
            </div>

            {/* Kayla's Story & Personal Letter */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                  Leadership Spotlight
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
                  A Letter from Kayla
                </h2>
                <div className="font-script text-2xl sm:text-3xl text-[#C89B53]">
                  Meet the Owner ♡
                </div>
              </div>

              {/* Exact Quote from PRD image */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#C89B53] text-[#14281D] text-base sm:text-lg leading-relaxed font-medium space-y-3">
                <p>
                  "Hi! I'm Kayla, the owner of Palm &amp; Pearl Cleaning Services. I'm passionate about creating clean, healthy spaces for our clients — and I take pride in leading a company that treats every property like it's our own."
                </p>
                <p className="text-sm text-[#4E6156] font-normal">
                  "When we clean your home, office, or new build, you aren't just getting another cleaning crew — you're getting a dedicated team that cares about the outcome as much as you do. We show up on time, we respect your property, and we won't leave until it meets our gold standard."
                </p>
              </div>

              {/* 4 Pillars from flyer */}
              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-[#14281D]">
                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#C89B53]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                  <span>Family Owned &amp; Operated</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#C89B53]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                  <span>Reliable &amp; Trustworthy</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#C89B53]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                  <span>Community Focused</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#C89B53]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                  <span>Licensed &amp; Insured</span>
                </div>
              </div>

              {/* Signoff */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-script text-2xl sm:text-3xl text-[#14281D]">
                  Thanks for supporting our small business! ♡
                </div>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#14281D] hover:bg-[#213D2D] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>Call Kayla Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CO-FOUNDERS & BRANDED FLEET (INTERACTIVE REAL PHOTO & HOTSPOTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              On-Site Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
              Co-Founders &amp; The Branded Fleet
            </h2>
            <p className="text-sm text-[#4E6156] leading-relaxed">
              Explore the real faces behind Palm &amp; Pearl. Click hotspot pins to discover our vehicle standards, crew training, and estate protocols.
            </p>
          </div>

          {/* Interactive Card */}
          <CoFoundersInteractiveCard showFullDetails={true} />

          {/* Standards & Operations Details */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#C89B53]/30 p-8 sm:p-12 shadow-md">
            <div className="max-w-3xl mx-auto space-y-4 text-center sm:text-left">
              <h3 className="font-serif-luxury font-bold text-2xl text-[#14281D]">
                Our Fleet, Equipment &amp; Operational Standards
              </h3>
              <p className="text-sm text-[#4E6156] leading-relaxed">
                When Palm &amp; Pearl arrives at your jobsite or estate, you'll see our branded company SUVs equipped with commercial-grade HEPA extraction systems, color-coded microfiber sanitization protocols, and non-toxic formulas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
                <div className="p-4 bg-white rounded-xl border border-[#C89B53]/20 space-y-1">
                  <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#C89B53]" />
                    <span>Company Fleet</span>
                  </div>
                  <p className="text-[11px] text-[#607369]">
                    Fully identified Palm &amp; Pearl black SUVs with licensed staff.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#C89B53]/20 space-y-1">
                  <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                    <Leaf className="w-4 h-4 text-[#C89B53]" />
                    <span>Eco-Friendly</span>
                  </div>
                  <p className="text-[11px] text-[#607369]">
                    Green certified cleaning safe for families &amp; Florida waters.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#C89B53]/20 space-y-1">
                  <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C89B53]" />
                    <span>$1M+ Liability</span>
                  </div>
                  <p className="text-[11px] text-[#607369]">
                    Full certificates of insurance for builders &amp; commercial clients.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#C89B53]/20 space-y-1">
                  <div className="font-bold text-xs text-[#14281D] flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C89B53]" />
                    <span>Gold Standard</span>
                  </div>
                  <p className="text-[11px] text-[#607369]">
                    Prompt resolution guarantee if any detail falls short.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIX CORE TRUST PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#14281D]">
            Why Southwest Florida Chooses Palm &amp; Pearl
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#C89B53]/25 shadow-sm hover:shadow-md transition-shadow space-y-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/30 flex items-center justify-center text-[#14281D] font-bold">
                {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#C89B53]" />}
                {idx === 1 && <Leaf className="w-5 h-5 text-[#C89B53]" />}
                {idx === 2 && <Users className="w-5 h-5 text-[#C89B53]" />}
                {idx === 3 && <Clock className="w-5 h-5 text-[#C89B53]" />}
                {idx === 4 && <Sparkles className="w-5 h-5 text-[#C89B53]" />}
                {idx === 5 && <Heart className="w-5 h-5 text-[#C89B53]" />}
              </div>
              <h3 className="font-serif-luxury font-bold text-xl text-[#14281D]">
                {badge.title}
              </h3>
              <p className="text-xs text-[#52655A] leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. READY TO CONNECT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14281D] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B53]/40 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold">
            Experience the Palm &amp; Pearl Difference
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Get in touch with Kayla directly for a free, transparent estimate on your commercial facility, jobsite, or home.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow transition-colors"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-[#DFBA73]" />
              <span>Call 239-295-4317</span>
            </a>
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
