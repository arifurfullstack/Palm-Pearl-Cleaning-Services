import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MessageCircle, 
  Sparkles, 
  Code2, 
  Check, 
  Copy, 
  Globe, 
  Smartphone, 
  Layers, 
  Send,
  UserCheck
} from 'lucide-react';

interface DeveloperCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TeamMember {
  role: string;
  name: string;
  whatsapp: string;
  whatsappRaw: string;
  titleBadge: string;
}

export const DeveloperCreditsModal: React.FC<DeveloperCreditsModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const team: TeamMember[] = [
    {
      role: 'Developer',
      name: 'Md Arifur Rahman',
      whatsapp: '+8801756601431',
      whatsappRaw: '8801756601431',
      titleBadge: 'Full-Stack & Frontend Lead'
    },
    {
      role: 'Developer',
      name: 'Sydul Islam',
      whatsapp: '+8801707991750',
      whatsappRaw: '8801707991750',
      titleBadge: 'Frontend & UI Specialist'
    },
    {
      role: 'Communication Manager',
      name: 'Asif Mahmud',
      whatsapp: '+8801605863987',
      whatsappRaw: '8801605863987',
      titleBadge: 'Client Relations & Inquiries'
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A140F]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#C89B53]/40 shadow-2xl overflow-hidden z-10 my-auto text-[#14281D] animate-in fade-in zoom-in-95 duration-200">
        {/* Header Accent Bar */}
        <div className="bg-[#14281D] text-[#FAF8F5] p-5 sm:p-7 relative border-b border-[#C89B53]/30">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B53]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFBA73]"
            aria-label="Close developer credits modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 pr-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C89B53]/20 border border-[#C89B53]/40 text-[#DFBA73] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Engineering &amp; Production Credits</span>
            </div>
            <h2 id="credits-modal-title" className="text-xl sm:text-2xl font-serif-luxury font-bold text-white pt-1">
              Developed by <span className="text-[#DFBA73]">Huipper</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Custom digital experience built with speed, responsive craft, and luxury aesthetics.
            </p>
          </div>

          {/* Huipper official site pill link */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href="https://huipper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C89B53] hover:bg-[#DFBA73] text-[#14281D] font-bold text-xs transition-colors shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span>Visit huipper.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => handleCopy('https://huipper.com', 'site')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
            >
              {copiedId === 'site' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 opacity-70" />
                  <span>Copy URL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Team Members List */}
          <div className="space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#63756C] flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#C89B53]" />
              <span>Project Team &amp; Direct Contacts</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#C89B53]/25 hover:border-[#C89B53]/50 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9D7433]">
                        {member.role}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-[#14281D]">
                      {member.name}
                    </div>
                    <div className="text-[10px] text-[#63756C] font-medium leading-tight">
                      {member.titleBadge}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#14281D]/5 space-y-2">
                    <div className="text-[11px] text-[#14281D]/80 font-mono flex items-center justify-between">
                      <span className="text-[10px] text-[#63756C]">WhatsApp:</span>
                      <span className="font-semibold">{member.whatsapp}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`https://wa.me/${member.whatsappRaw}?text=${encodeURIComponent(`Hi ${member.name}, I saw your work on the Palm & Pearl website through Huipper. I'd like to discuss a project.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(member.whatsapp, `wa-${index}`)}
                        className="p-1.5 rounded-lg border border-[#14281D]/15 hover:bg-white text-[#14281D] transition-colors"
                        title="Copy WhatsApp Number"
                        aria-label={`Copy WhatsApp number for ${member.name}`}
                      >
                        {copiedId === `wa-${index}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#63756C]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box (Exact user brief copy) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#14281D] to-[#1E3727] text-white border border-[#C89B53]/40 shadow-lg space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#DFBA73] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B53]" />
                  Hire The Creators
                </span>
                <h3 className="font-serif-luxury font-bold text-xl sm:text-2xl text-white">
                  Want a website like this?
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 p-2 rounded-xl bg-white/10 text-white/90">
                <Smartphone className="w-4 h-4 text-[#DFBA73]" />
                <Globe className="w-4 h-4 text-[#DFBA73]" />
                <Layers className="w-4 h-4 text-[#DFBA73]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
              Hire us for custom websites, iOS &amp; Android mobile apps, SaaS platforms, and other custom software solutions. DM us for details.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="https://wa.me/8801756601431?text=Hi%20Huipper%20Team%2C%20I%20love%20the%20Palm%20%26%20Pearl%20website%20and%20would%20like%20to%20hire%20you%20for%20a%20custom%20website%2Fsoftware%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>DM via WhatsApp Now</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://huipper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/10"
              >
                <Globe className="w-4 h-4 text-[#DFBA73]" />
                <span>Visit Agency Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(
                  `Huipper Agency\nWebsite: https://huipper.com\nDevelopers:\n• Md Arifur Rahman: WhatsApp +8801756601431\n• Sydul Islam: WhatsApp +8801707991750\n• Asif Mahmud (Communication Manager): WhatsApp +8801605863987\nServices: Custom Websites, iOS & Android Apps, SaaS Platforms.`,
                  'all-details'
                )}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs transition-colors"
                title="Copy all contacts to clipboard"
              >
                {copiedId === 'all-details' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied All Details!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy All Info</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="bg-[#FAF8F5] px-5 sm:px-7 py-3.5 border-t border-[#14281D]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#63756C]">
          <span>Available for global client engagements &amp; custom engineering.</span>
          <button
            onClick={onClose}
            className="text-[#14281D] hover:text-[#C89B53] font-bold underline"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
