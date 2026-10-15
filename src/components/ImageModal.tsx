import React from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  details?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  details
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#C89B53]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14281D] text-[#FAF8F5] border-b border-[#C89B53]/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DFBA73]" />
            <div>
              <h3 className="font-serif-luxury font-bold text-lg text-white leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-[#DFBA73] font-medium tracking-wide">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content Container */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#0D1B13]/5">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-md border border-[#C89B53]/20"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer info */}
        {details && (
          <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#14281D]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A5D52] gap-2">
            <span>{details}</span>
            <span className="text-[#14281D] font-bold">Palm &amp; Pearl Cleaning Services • 239-295-4317</span>
          </div>
        )}
      </div>
    </div>
  );
};
