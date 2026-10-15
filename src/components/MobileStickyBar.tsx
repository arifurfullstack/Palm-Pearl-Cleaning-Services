import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14281D]/95 backdrop-blur-md border-t border-[#C89B53]/30 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#FAF8F5] text-[#14281D] hover:bg-white active:scale-[0.98] py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-transform"
          aria-label={`Call ${BUSINESS_DATA.phone}`}
        >
          <Phone className="w-4 h-4 text-[#C89B53] fill-[#C89B53]" />
          <span>Call 239-295-4317</span>
        </a>

        {/* Free Estimate Button */}
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C89B53] text-[#14281D] hover:bg-[#DFBA73] active:scale-[0.98] py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Get Free Estimate</span>
        </Link>
      </div>
    </div>
  );
};
