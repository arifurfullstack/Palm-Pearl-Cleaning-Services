import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  ArrowRight,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_DATA, FAQS } from '../data/businessData';
import { InquiryFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: searchParams.get('service') || 'residential',
    propertyType: searchParams.get('property') || 'single-family',
    approxSqFt: searchParams.get('sqft') || '2500',
    serviceCity: 'Cape Coral',
    preferredDate: '',
    notes: '',
    ecoFriendlyRequested: searchParams.get('eco') === 'yes'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedLinkGenerated, setSubmittedLinkGenerated] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // If incoming query params change
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        serviceType: serviceParam,
        propertyType: searchParams.get('property') || prev.propertyType,
        approxSqFt: searchParams.get('sqft') || prev.approxSqFt,
        ecoFriendlyRequested: searchParams.get('eco') === 'yes'
      }));
    }
  }, [searchParams]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim() && !formData.email.trim()) {
      errs.contact = 'Please enter either a phone number or email address.';
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const generateMailtoBody = () => {
    const lines = [
      `Hi Kayla and Palm & Pearl Cleaning Services,`,
      ``,
      `I would like to request a free cleaning estimate for my property in Southwest Florida:`,
      ``,
      `• Name: ${formData.name}`,
      `• Phone: ${formData.phone || 'Not provided'}`,
      `• Email: ${formData.email || 'Not provided'}`,
      `• Service Requested: ${formData.serviceType.toUpperCase()}`,
      `• Property Type: ${formData.propertyType}`,
      `• Approx Square Footage: ${formData.approxSqFt} sq ft`,
      `• City / Location: ${formData.serviceCity}`,
      `• Desired Date / Timeline: ${formData.preferredDate || 'Flexible / Next Available'}`,
      `• Eco-Friendly Products: ${formData.ecoFriendlyRequested ? 'Yes (Requested)' : 'Standard Premium Products'}`,
      ``,
      `Additional Project Notes:`,
      formData.notes || 'None specified.',
      ``,
      `Sent via Palm & Pearl Cleaning Website`
    ];
    return lines.join('\n');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmittedLinkGenerated(true);

    const subject = encodeURIComponent(`Estimate Request: ${formData.serviceType.toUpperCase()} - ${formData.name}`);
    const body = encodeURIComponent(generateMailtoBody());
    const mailtoUrl = `mailto:${BUSINESS_DATA.email}?subject=${subject}&body=${body}`;

    // Direct browser trigger
    window.location.href = mailtoUrl;
  };

  const handleCopyInquiry = () => {
    const text = generateMailtoBody();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-[#14281D] text-white py-16 sm:py-24 border-b border-[#C89B53]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#DFBA73] text-xs font-bold uppercase tracking-widest border border-white/10">
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast Turnaround Proposals</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold leading-tight">
            Contact &amp; Free Estimate
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-[#DFBA73]">
            Let's Keep Your Space Clean!
          </p>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto pt-2">
            Call or text Kayla directly, or submit your property details below for an itemized estimate on commercial, post-construction, or residential cleaning.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section: Form + Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contacts & Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
                Direct Communication
              </span>
              <h2 className="text-3xl font-serif-luxury font-bold text-[#14281D]">
                Get in Touch With Kayla
              </h2>
              <p className="text-xs sm:text-sm text-[#52655A] leading-relaxed">
                We believe in genuine personal accountability. You'll speak directly with our team — not a call center or automated chatbot.
              </p>
            </div>

            {/* Direct Action Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="p-5 rounded-2xl bg-white border border-[#C89B53]/30 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#14281D] text-[#DFBA73] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C89B53]">Direct Phone / Text</div>
                  <div className="text-xl font-bold text-[#14281D] group-hover:text-[#213D2D]">
                    {BUSINESS_DATA.phone}
                  </div>
                  <div className="text-xs text-[#52655A] mt-0.5">
                    Fastest response for urgent turnarounds &amp; builder punch-lists.
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_DATA.email}`}
                className="p-5 rounded-2xl bg-white border border-[#C89B53]/30 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#14281D] text-[#DFBA73] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C89B53]">Email Inquiries</div>
                  <div className="text-base font-bold text-[#14281D] group-hover:text-[#213D2D] break-all">
                    {BUSINESS_DATA.email}
                  </div>
                  <div className="text-xs text-[#52655A] mt-0.5">
                    Send floor plans, specifications, or request insurance certificates.
                  </div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={BUSINESS_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#C89B53]/30 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1877F2]">Facebook Page</div>
                  <div className="text-base font-bold text-[#14281D] group-hover:text-[#1877F2]">
                    facebook.com/palmpearlcleaning
                  </div>
                  <div className="text-xs text-[#52655A] mt-0.5">
                    View recent jobsite photos and connect with us on social.
                  </div>
                </div>
              </a>
            </div>

            {/* Operating Hours Box */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#C89B53]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14281D]">
                <Clock className="w-4 h-4 text-[#C89B53]" />
                <span>Operating Schedule</span>
              </div>
              <div className="text-xs text-[#304237] space-y-1.5 leading-relaxed">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday – Friday:</span>
                  <span>7:30 AM – 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between text-[#8A7550]">
                  <span className="font-semibold">Sunday:</span>
                  <span>Commercial &amp; Emergency by Appt.</span>
                </div>
              </div>
              <p className="text-[11px] text-[#607369] pt-2 border-t border-[#14281D]/10">
                {BUSINESS_DATA.hours.commercialNote}
              </p>
            </div>

            {/* Service Areas Pill Cloud */}
            <div className="p-6 rounded-2xl bg-white border border-[#14281D]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14281D]">
                <MapPin className="w-4 h-4 text-[#C89B53]" />
                <span>Primary Coverage Communities</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-[#304237]">
                {BUSINESS_DATA.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#C89B53]/25 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Frontend-Only Estimate Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#C89B53]/40 p-8 sm:p-10 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C89B53] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Written Proposal
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#14281D]">
                  Request Your Custom Estimate
                </h2>
                <p className="text-xs text-[#52655A]">
                  Fill out your property details below. Clicking "Open Email &amp; Submit" prepares a pre-filled email to <strong className="text-[#14281D]">{BUSINESS_DATA.email}</strong>, or you can copy the inquiry with one click to text us directly!
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSendEmail} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins or ABC General Contracting"
                    className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    required
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="239-555-0199"
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
                {errors.contact && <p className="text-xs text-red-600">{errors.contact}</p>}

                {/* Service Type & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    >
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="post-construction">Post-Construction Cleaning</option>
                      <option value="final-detailing">Final Clean Detailing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    >
                      <option value="Single-Family Home">Single-Family Home</option>
                      <option value="Waterfront Estate">Luxury Waterfront Estate</option>
                      <option value="Condo / Apartment">Condominium / Apartment</option>
                      <option value="Commercial Office">Commercial Office Suite</option>
                      <option value="Medical / Dental Clinic">Medical or Dental Clinic</option>
                      <option value="Bank / Institutional">Bank or Institutional</option>
                      <option value="Church / Community Center">Church or Community Facility</option>
                      <option value="New Construction Build">New Construction (Jobsite)</option>
                      <option value="Remodel / Renovation">Remodel / Renovation Finish</option>
                    </select>
                  </div>
                </div>

                {/* Square Footage & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      Approx. Square Footage
                    </label>
                    <select
                      value={formData.approxSqFt}
                      onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    >
                      <option value="1200">Under 1,500 sq ft</option>
                      <option value="2500">1,500 – 3,000 sq ft</option>
                      <option value="4200">3,000 – 5,000 sq ft</option>
                      <option value="7500">5,000 – 10,000+ sq ft</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                      City in SW Florida
                    </label>
                    <select
                      value={formData.serviceCity}
                      onChange={(e) => setFormData({ ...formData, serviceCity: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                    >
                      {BUSINESS_DATA.serviceAreas.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                    Target Start Date or Completion Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    placeholder="e.g. Next Tuesday morning, or before final inspection on the 24th"
                    className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
                  />
                </div>

                {/* Notes / Special Requests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14281D] mb-1.5">
                    Additional Notes, Access Details or Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about special flooring (marble, travertine), glass slider tracks, lockbox codes, pet considerations, or contractor timelines..."
                    className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-3 text-sm text-[#14281D] focus:ring-2 focus:ring-[#C89B53] focus:outline-none resize-none"
                  />
                </div>

                {/* Eco-Friendly Checkbox */}
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#C89B53]/25 flex items-center justify-between">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.ecoFriendlyRequested}
                      onChange={(e) => setFormData({ ...formData, ecoFriendlyRequested: e.target.checked })}
                      className="w-4 h-4 text-[#14281D] border-[#C89B53] rounded focus:ring-[#C89B53]"
                    />
                    <span className="text-xs font-bold text-[#14281D]">
                      Use Eco-Friendly &amp; Non-Toxic Products (Upon Request)
                    </span>
                  </label>
                </div>

                {/* Action Buttons: Mailto + Copy to Clipboard */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#14281D] hover:bg-[#213D2D] active:scale-[0.99] text-[#FAF8F5] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:ring-2 hover:ring-[#C89B53] transition-all"
                  >
                    <Send className="w-4 h-4 text-[#DFBA73]" />
                    <span>Open Email &amp; Submit to Kayla</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#C89B53]/50 text-[#14281D] py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard! (Ready to Paste in Text/Email)</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#C89B53]" />
                        <span>Copy Inquiry Text (To Paste into SMS or Messenger)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Transparent Notice */}
                <div className="text-[11px] text-[#607268] bg-[#FAF8F5] p-3 rounded-lg border border-[#14281D]/10 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#C89B53] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Direct Contact Guarantee:</strong> We do not store private credentials on unverified third-party servers. Your request connects you directly with Kayla at <strong>palmpearlcleaning@gmail.com</strong> or <strong>239-295-4317</strong>.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B53]">
            Common Questions
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-[#14281D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#C89B53]/30 overflow-hidden shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-serif-luxury font-bold text-lg text-[#14281D] flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-[#C89B53]">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#4E6055] leading-relaxed border-t border-[#14281D]/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
