import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  className = '',
  size = 'md'
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13',
    lg: 'w-18 h-18'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] sm:text-xs tracking-[0.3em]',
    lg: 'text-xs sm:text-sm tracking-[0.35em]'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official Emblem Avatar */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 rounded-full overflow-hidden border border-[#C89B53]/40 bg-[#FAF8F5] p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="/825350970_2227129271558671_4729667765504210952_n.jpg"
          alt="Palm & Pearl Official Monogram Emblem"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to internal SVG if file path is altered
            (e.target as HTMLImageElement).src = '/images/palm-pearl-official-logo.svg';
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif-luxury font-bold tracking-wider leading-none transition-colors duration-200 ${titleSizes[size]} ${
            isLight ? 'text-white group-hover:text-[#DFBA73]' : 'text-[#14281D] group-hover:text-[#213D2D]'
          }`}
        >
          PALM <span className="text-[#C89B53] font-script font-normal text-[1.15em] mx-0.5">&amp;</span> PEARL
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase transition-colors duration-200 mt-1 ${subSizes[size]} ${
              isLight ? 'text-[#DFBA73]' : 'text-[#5E7166]'
            }`}
          >
            CLEANING SERVICES
          </span>
        )}
      </div>
    </Link>
  );
};
