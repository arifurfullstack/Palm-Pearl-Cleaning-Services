import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ZoomIn, 
  Heart,
  Truck,
  Building
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface CoFoundersInteractiveCardProps {
  className?: string;
  showFullDetails?: boolean;
}

export const CoFoundersInteractiveCard: React.FC<CoFoundersInteractiveCardProps> = ({
  className = '',
  showFullDetails = true
}) => {
  const [viewMode, setViewMode] = useState<'faces' | 'full' | 'fleet'>('full');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(1);

  const hotspots = [
    {
      id: 1,
      title: 'Kayla — Owner & Co-Founder',
      tag: 'Executive Leadership',
      description: 'Passionate about pristine spaces and leading a company that treats every client property like it’s our own.',
      x: '68%',
      y: '36%',
      icon: Heart
    },
    {
      id: 2,
      title: 'Co-Founder & Field Operations',
      tag: 'Site Quality & Logistics',
      description: 'Oversees on-site builder turnovers, commercial cleaning protocols, crew training, and equipment readiness.',
      x: '46%',
      y: '34%',
      icon: Users
    },
    {
      id: 3,
      title: 'Branded Gold Uniform Standard',
      tag: 'Professional Credibility',
      description: 'Our team arrives in official Palm & Pearl embroidered attire, background-checked and fully licensed & insured.',
      x: '58%',
      y: '58%',
      icon: ShieldCheck
    },
    {
      id: 4,
      title: 'Company-Owned Black SUV Fleet',
      tag: 'Mobile Operations',
      description: 'Custom Palm & Pearl wrapped vehicles fully stocked with HEPA filtration units and specialized care products.',
      x: '20%',
      y: '48%',
      icon: Truck
    },
    {
      id: 5,
      title: 'Waterfront Estate Presentation',
      tag: 'Luxury Standards',
      description: 'Active in Cape Coral, Fort Myers, Bonita Springs, and Naples luxury communities.',
      x: '86%',
      y: '22%',
      icon: Building
    }
  ];

  return (
    <div className={`bg-[#FFFFFF] rounded-3xl border border-[#C89B53]/40 shadow-xl overflow-hidden ${className}`}>
      {/* Top Header Bar */}
      <div className="bg-[#14281D] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#C89B53]/30 gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar Face Snippet */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DFBA73] shadow-md flex-shrink-0 bg-white">
            <img
              src="/images/cofounders-faces-crop.svg"
              alt="Kayla and Co-Founder face snippet"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/825350966_2227129678225297_3306893046972007862_n.jpg';
              }}
              referrerPolicy="no-referrer"
            />
            {/* Active Green Dot */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#14281D]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif-luxury font-bold text-lg sm:text-xl text-white leading-tight">
                Meet the Owners &amp; Co-Founders
              </h3>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C89B53]/20 text-[#DFBA73] border border-[#C89B53]/40">
                Verified Team
              </span>
            </div>
            <p className="text-xs text-[#DFBA73] font-medium">
              Kayla &amp; Partner • Real Leadership On-Site in SW Florida
            </p>
          </div>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-xl text-xs font-bold">
          <button
            type="button"
            onClick={() => setViewMode('full')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'full'
                ? 'bg-[#C89B53] text-[#14281D] shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Full Fleet View
          </button>
          <button
            type="button"
            onClick={() => setViewMode('faces')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'faces'
                ? 'bg-[#C89B53] text-[#14281D] shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Faces Close-Up
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative overflow-hidden bg-[#0F1E16] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] flex items-center justify-center">
        {/* The Real Image Asset with Dynamic Scaling based on viewMode */}
        <div
          className={`w-full h-full relative transition-transform duration-700 ease-out origin-center ${
            viewMode === 'faces'
              ? 'scale-[1.65] translate-y-[8%] -translate-x-[2%]'
              : 'scale-100 translate-y-0 translate-x-0'
          }`}
        >
          <img
            src="/825350966_2227129678225297_3306893046972007862_n.jpg"
            alt="Kayla & Co-Founder with Palm & Pearl Branded SUV Fleet and Luxury Waterfront Home"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/kayla-team-fleet.svg';
            }}
            referrerPolicy="no-referrer"
          />

          {/* Interactive Hotspot Pins (only in full mode for precise positioning) */}
          {viewMode === 'full' && (
            <>
              {hotspots.map((spot) => {
                const isActive = activeHotspot === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    style={{ left: spot.x, top: spot.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={`Inspect ${spot.title}`}
                  >
                    {/* Pulsing ring */}
                    <span className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                      isActive ? 'bg-[#DFBA73]' : 'bg-white'
                    }`} />
                    {/* Pin button */}
                    <span className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform duration-200 group-hover:scale-125 ${
                      isActive
                        ? 'bg-[#DFBA73] text-[#14281D] ring-4 ring-[#14281D]'
                        : 'bg-[#14281D] text-[#DFBA73] ring-2 ring-[#DFBA73]'
                    }`}>
                      {spot.id}
                    </span>
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* View mode indicator overlay badge */}
        <div className="absolute top-3 left-3 z-30 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#14281D]/80 text-[#DFBA73] text-[11px] font-bold backdrop-blur-xs border border-[#C89B53]/40 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            {viewMode === 'faces' ? 'Co-Founders Face Focus' : 'Interactive Hotspot Mode — Click Any Number'}
          </span>
        </div>
      </div>

      {/* Interactive Details Accordion / Hotspot Panel */}
      {activeHotspot !== null && viewMode === 'full' && (
        <div className="bg-[#FAF8F5] p-5 sm:p-6 border-b border-[#14281D]/10 animate-fadeIn">
          {(() => {
            const spot = hotspots.find((h) => h.id === activeHotspot);
            if (!spot) return null;
            const Icon = spot.icon;
            return (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#14281D] text-[#DFBA73] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C89B53]">
                        {spot.tag}
                      </span>
                      <span className="text-xs text-[#5A6D61]">• Pin #{spot.id}</span>
                    </div>
                    <h4 className="font-serif-luxury font-bold text-lg sm:text-xl text-[#14281D]">
                      {spot.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4E6156] mt-0.5 leading-relaxed max-w-2xl">
                      {spot.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 bg-[#14281D] hover:bg-[#213D2D] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DFBA73]" />
                    <span>Talk to Owners</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Leadership Bio Grid */}
      {showFullDetails && (
        <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kayla's Card */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#C89B53]/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* Face Snippet Thumbnail */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C89B53] shadow-xs flex-shrink-0 bg-white">
                  <img
                    src="/images/cofounders-faces-crop.svg"
                    alt="Kayla face crop"
                    className="w-full h-full object-cover scale-[1.7] translate-x-[-15%] translate-y-[5%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif-luxury font-bold text-xl text-[#14281D]">
                    Kayla
                  </h4>
                  <p className="text-xs font-bold text-[#C89B53] uppercase tracking-wider">
                    Owner &amp; Co-Founder
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5D52] italic leading-relaxed pt-1">
                "I'm passionate about creating clean, healthy spaces for our clients — and I take pride in leading a company that treats every property like it's our own."
              </p>
            </div>

            <div className="text-xs text-[#203328] font-medium pt-2 border-t border-[#14281D]/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
              <span>Direct Client Care, Scheduling &amp; Quality Oversight</span>
            </div>
          </div>

          {/* Co-Founder's Card */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#C89B53]/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* Face Snippet Thumbnail */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C89B53] shadow-xs flex-shrink-0 bg-white">
                  <img
                    src="/images/cofounders-faces-crop.svg"
                    alt="Co-Founder face crop"
                    className="w-full h-full object-cover scale-[1.7] translate-x-[15%] translate-y-[5%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif-luxury font-bold text-xl text-[#14281D]">
                    Co-Founder &amp; Field Lead
                  </h4>
                  <p className="text-xs font-bold text-[#C89B53] uppercase tracking-wider">
                    Director of Operations &amp; Fleet
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5D52] italic leading-relaxed pt-1">
                "Our team takes the punch-list personally. We show up on time with company vehicles, commercial equipment, and leave zero dust behind for builders and owners."
              </p>
            </div>

            <div className="text-xs text-[#203328] font-medium pt-2 border-t border-[#14281D]/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
              <span>Jobsite Logistics, Builder Bids &amp; Commercial Equipment</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Conversion Row */}
      <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#14281D]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#52655A] gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C89B53]" />
          <span>Proudly serving Cape Coral, Fort Myers, Bonita Springs, and Naples.</span>
        </div>

        <div className="flex items-center gap-4 font-bold text-[#14281D]">
          <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="hover:text-[#C89B53] transition-colors">
            Call: {BUSINESS_DATA.phone}
          </a>
          <span>•</span>
          <a href={`mailto:${BUSINESS_DATA.email}`} className="hover:text-[#C89B53] transition-colors">
            {BUSINESS_DATA.email}
          </a>
        </div>
      </div>
    </div>
  );
};
