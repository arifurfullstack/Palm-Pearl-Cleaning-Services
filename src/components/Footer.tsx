import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  MessageCircle, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../data/businessData';
import { DeveloperCreditsModal } from './DeveloperCreditsModal';

export const Footer: React.FC = () => {
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);

  return (
    <>
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
                Direct Contacts
              </h3>
              <div className="space-y-2.5 text-sm">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/90 hover:text-[#DFBA73] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#C89B53] flex-shrink-0" />
                  <span className="font-semibold text-xs tracking-wider">
                    {BUSINESS_DATA.phone}
                  </span>
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

          {/* PROFESSIONAL DEVELOPER CREDIT & CTA SECTION */}
          <div className="py-8 border-b border-white/10">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-[#C89B53]/20 hover:border-[#C89B53]/40 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Agency & Lead Credit */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C89B53]/20 border border-[#C89B53]/30 text-[#DFBA73] text-[10px] font-bold uppercase tracking-wider">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Website Engineering</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-serif-luxury font-bold text-white flex items-center gap-2">
                      <span>Developed by</span>
                      <a
                        href="https://huipper.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DFBA73] hover:text-white underline underline-offset-4 decoration-[#C89B53] transition-colors"
                      >
                        Huipper
                      </a>
                      <span className="text-xs text-white/40 font-mono">— huipper.com</span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed">
                      Custom responsive digital engineering, mobile-first design, and high-performance frontend architecture.
                    </p>
                  </div>

                  {/* Team Members Chips */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="text-[11px] text-white/80 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span>
                        <strong className="text-white/60 font-medium">Developer:</strong>{' '}
                        <span className="text-[#DFBA73] font-semibold">Md Arifur Rahman</span>
                      </span>
                      <a
                        href="https://wa.me/8801756601431"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono"
                      >
                        <MessageCircle className="w-3 h-3" />
                        +8801756601431
                      </a>
                    </div>

                    <div className="text-[11px] text-white/80 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span>
                        <strong className="text-white/60 font-medium">Developer:</strong>{' '}
                        <span className="text-[#DFBA73] font-semibold">Sydul Islam</span>
                      </span>
                      <a
                        href="https://wa.me/8801707991750"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono"
                      >
                        <MessageCircle className="w-3 h-3" />
                        +8801707991750
                      </a>
                    </div>

                    <div className="text-[11px] text-white/80 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span>
                        <strong className="text-white/60 font-medium">Communication Manager:</strong>{' '}
                        <span className="text-[#DFBA73] font-semibold">Asif Mahmud</span>
                      </span>
                      <a
                        href="https://wa.me/8801605863987"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono"
                      >
                        <MessageCircle className="w-3 h-3" />
                        +8801605863987
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Callout */}
                <div className="lg:col-span-7 bg-white/[0.04] rounded-xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-md">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#DFBA73] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Want a website like this?</span>
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed">
                      Hire us for custom websites, iOS &amp; Android mobile apps, SaaS platforms, and other custom software solutions. DM us for details.
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsCreditsModalOpen(true)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] font-bold text-xs transition-colors shadow-sm"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Developer Credits &amp; Hire</span>
                    </button>

                    <a
                      href="https://wa.me/8801756601431?text=Hi%20Huipper%2C%20I%20saw%20the%20Palm%20%26%20Pearl%20website%20and%20want%20to%20hire%20your%20team%20for%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>DM on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Signoff */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
              <span>&copy; {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved.</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <button
                type="button"
                onClick={() => setIsCreditsModalOpen(true)}
                className="text-[#DFBA73] hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>Site Credits</span>
                <Sparkles className="w-3 h-3 text-[#C89B53]" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 font-script text-base text-[#DFBA73]">
              <span>Cleaning Done Right.</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <Link to="/contact" className="hover:text-white">Free Estimates</Link>
              <span>•</span>
              <Link to="/about" className="hover:text-white">Owner's Note</Link>
              <span>•</span>
              <a
                href="https://huipper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DFBA73] flex items-center gap-1 transition-colors"
              >
                <span>Huipper</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modern Developer Credits & Hiring Modal */}
      <DeveloperCreditsModal
        isOpen={isCreditsModalOpen}
        onClose={() => setIsCreditsModalOpen(false)}
      />
    </>
  );
};
