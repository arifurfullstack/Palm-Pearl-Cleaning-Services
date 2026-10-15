import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface OwnersFaceSnippetProps {
  className?: string;
  variant?: 'light' | 'dark' | 'card';
}

export const OwnersFaceSnippet: React.FC<OwnersFaceSnippetProps> = ({
  className = '',
  variant = 'card'
}) => {
  if (variant === 'light') {
    return (
      <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DFBA73]/40 text-white text-xs ${className}`}>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#DFBA73] shadow-xs flex-shrink-0 bg-white">
          <img
            src="/images/cofounders-faces-crop.svg"
            alt="Kayla & Co-Founder"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/825350966_2227129678225297_3306893046972007862_n.jpg';
            }}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-left">
          <div className="font-bold text-[11px] text-[#DFBA73] leading-none">
            Kayla &amp; Leadership Team
          </div>
          <div className="text-[10px] text-white/80 leading-tight">
            Family Owned &amp; Operated
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#FFFFFF] rounded-2xl border border-[#C89B53]/35 p-3 sm:p-4 shadow-md flex items-center justify-between gap-3 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Double Avatar / Face Snippet */}
        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C89B53] shadow-sm flex-shrink-0 bg-[#FAF8F5]">
            <img
              src="/images/cofounders-faces-crop.svg"
              alt="Kayla and Co-Founder face snippet"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/825350966_2227129678225297_3306893046972007862_n.jpg';
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Active Status Beacon */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Owners Active" />
        </div>

        {/* Text Details */}
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C89B53]">
              Owners &amp; Co-Founders
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#14281D]/30" />
            <span className="text-[10px] font-semibold text-emerald-700">Active On-Site</span>
          </div>
          <h4 className="font-serif-luxury font-bold text-base sm:text-lg text-[#14281D] leading-tight">
            Kayla &amp; Leadership
          </h4>
          <p className="text-[11px] text-[#55695E] line-clamp-1">
            Cape Coral • Fort Myers • Bonita Springs • Naples
          </p>
        </div>
      </div>

      {/* Direct Call / Contact button */}
      <a
        href={`tel:${BUSINESS_DATA.phoneRaw}`}
        className="hidden sm:inline-flex items-center gap-1.5 bg-[#14281D] hover:bg-[#213D2D] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        title="Call the owners directly"
      >
        <Phone className="w-3.5 h-3.5 text-[#DFBA73]" />
        <span>Direct Line</span>
      </a>
    </div>
  );
};
