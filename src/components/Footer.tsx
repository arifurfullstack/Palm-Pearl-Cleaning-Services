import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14281D] text-[#FAF8F5] border-t border-[#C89B53]/30 pt-16 pb-24 md:pb-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C89B53]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm pt-2">
              Premier commercial, post-construction, and residential cleaning services dedicated to Southwest Florida's homes, estates, and businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#DFBA73] font-semibold pt-1">
              <Sparkles className="w-4 h-4 text-[#C89B53]" />
              <span>Pristine Spaces. Timeless Care.</span>
            </div>

            <div className="pt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DFBA73]" />
                Licensed &amp; Insured
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                <Heart className="w-3.5 h-3.5 text-[#DFBA73]" />
                Family Owned &amp; Operated
              </span>
            </div>
          </div>

          {/* Column 2: Cleaning Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#DFBA73]">
              Specialized Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/services#commercial" className="hover:text-[#DFBA73] transition-colors flex items-center justify-between group">
                  <span>Commercial &amp; Offices</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services#post-construction" className="hover:text-[#DFBA73] transition-colors flex items-center justify-between group">
                  <span>Post-Construction &amp; Builders</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services#residential" className="hover:text-[#DFBA73] transition-colors flex items-center justify-between group">
                  <span>Luxury Residential &amp; Estates</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services#final-detailing" className="hover:text-[#DFBA73] transition-colors flex items-center justify-between group">
                  <span>Final Clean Detailing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFBA73] transition-colors flex items-center justify-between group">
                  <span>Meet Kayla (Owner)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#DFBA73]">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-start gap-2.5 text-white/90 hover:text-[#DFBA73] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#C89B53] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base text-white group-hover:text-[#DFBA73]">
                    {BUSINESS_DATA.phone}
                  </div>
                  <div className="text-xs text-white/60">Call or Text for Inquiries</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_DATA.email}`}
                className="flex items-start gap-2.5 text-white/90 hover:text-[#DFBA73] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#C89B53] mt-0.5 flex-shrink-0" />
                <span className="text-xs break-all group-hover:underline">
                  {BUSINESS_DATA.email}
                </span>
              </a>

              <div className="flex items-start gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-[#C89B53] mt-0.5 flex-shrink-0" />
                <span className="text-xs">
                  Cape Coral, Fort Myers &amp; All Southwest Florida
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#C89B53] hover:text-[#14281D] text-xs font-semibold transition-all duration-200"
                >
                  <span>Connect on Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Schedule (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#DFBA73]">
              Hours
            </h3>
            <div className="text-xs text-white/70 space-y-1.5">
              <div className="font-medium text-white/90">Mon – Fri:</div>
              <div>7:30 AM – 6:30 PM</div>
              <div className="font-medium text-white/90 pt-1">Saturday:</div>
              <div>8:00 AM – 4:00 PM</div>
              <div className="text-[11px] text-[#DFBA73]/90 pt-2 leading-tight">
                * After-hours &amp; weekend commercial cleans available by appointment.
              </div>
            </div>
          </div>
        </div>

        {/* Southwest Florida Service Areas Grid */}
        <div className="py-8 border-b border-white/10">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#DFBA73] mb-3">
            Serving Southwest Florida Communities:
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-white/70">
            {BUSINESS_DATA.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-[#C89B53]/40 hover:text-white transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-script text-base text-[#DFBA73]">
            <span>Cleaning Done Right.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/contact" className="hover:text-white">Free Estimates</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white">Owner's Note</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
