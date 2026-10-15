import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Sparkles, Building2, Home, Hammer, Shield } from 'lucide-react';

export const EstimateCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [service, setService] = useState('residential');
  const [propertyType, setPropertyType] = useState('single-family');
  const [sqFt, setSqFt] = useState('2500');
  const [frequency, setFrequency] = useState('bi-weekly');
  const [ecoFriendly, setEcoFriendly] = useState(false);

  const services = [
    { id: 'residential', label: 'Residential', icon: Home, desc: 'Luxury homes, estates & condos' },
    { id: 'commercial', label: 'Commercial', icon: Building2, desc: 'Offices, retail, banks, clinics' },
    { id: 'post-construction', label: 'Post-Construction', icon: Hammer, desc: 'Builders & remodel completions' },
    { id: 'final-detailing', label: 'Final Detailing', icon: Sparkles, desc: 'Showroom ready & listings' },
  ];

  const handleProceedToEstimate = () => {
    const params = new URLSearchParams({
      service,
      property: propertyType,
      sqft: sqFt,
      freq: frequency,
      eco: ecoFriendly ? 'yes' : 'no'
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#C89B53]/30 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#14281D]/10 gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89B53] flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope Planner
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#14281D] mt-1">
            Personalized Cleaning Scope
          </h3>
        </div>
        <div className="text-xs text-[#52655A] bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-[#C89B53]/20 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C89B53]" />
          <span>Tailored specifically for Southwest Florida</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* Step 1: Service Type */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#14281D]">
            1. Select Service Category
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {services.map((item) => {
              const Icon = item.icon;
              const isSelected = service === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setService(item.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#14281D] text-white border-[#14281D] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#14281D] border-[#14281D]/15 hover:border-[#C89B53]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#DFBA73]' : 'text-[#C89B53]'}`} />
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#DFBA73]" />}
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-tight">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-white/70' : 'text-[#62756A]'}`}>
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Property Type & Frequency */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#14281D] block mb-2">
              2. Property Profile
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-4 py-2.5 text-sm text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
            >
              <option value="single-family">Coastal Single-Family Home</option>
              <option value="waterfront-estate">Luxury Waterfront Estate</option>
              <option value="condominium">Condominium / Apartment</option>
              <option value="commercial-office">Commercial Office Building</option>
              <option value="medical-dental">Medical or Dental Practice</option>
              <option value="bank-facility">Bank or Institutional Facility</option>
              <option value="new-construction">Active Construction / New Build</option>
              <option value="renovation">Remodel / Kitchen &amp; Bath Reno</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#14281D] block mb-1.5">
                Approx. Size
              </label>
              <select
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-3 py-2 text-xs text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
              >
                <option value="1200">Under 1,500 sq ft</option>
                <option value="2500">1,500 – 3,000 sq ft</option>
                <option value="4200">3,000 – 5,000 sq ft</option>
                <option value="7500">5,000+ sq ft (Estate)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#14281D] block mb-1.5">
                Desired Frequency
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#14281D]/20 rounded-xl px-3 py-2 text-xs text-[#14281D] font-medium focus:ring-2 focus:ring-[#C89B53] focus:outline-none"
              >
                <option value="one-time">One-Time Deep Clean</option>
                <option value="weekly">Weekly Maintenance</option>
                <option value="bi-weekly">Bi-Weekly (Most Popular)</option>
                <option value="monthly">Monthly Refresh</option>
                <option value="contractor-turnover">Builder Handover (Prompt)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Eco-Friendly Add-on checkbox */}
      <div className="mt-5 p-3.5 bg-[#F4EFE6]/60 rounded-xl border border-[#C89B53]/25 flex items-center justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={ecoFriendly}
            onChange={(e) => setEcoFriendly(e.target.checked)}
            className="w-4 h-4 text-[#14281D] border-[#C89B53] rounded focus:ring-[#C89B53]"
          />
          <div>
            <span className="text-xs font-bold text-[#14281D]">
              Request Eco-Friendly Products (Available Upon Request)
            </span>
            <p className="text-[11px] text-[#63756C]">
              Non-toxic, green certified formulations safe for pets, children, and Florida coastal waterways.
            </p>
          </div>
        </label>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-[#14281D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#52655A] text-center sm:text-left">
          <span className="font-bold text-[#14281D]">Prompt Personal Quote:</span> Kayla personally reviews each request and provides transparent, itemized estimates.
        </div>

        <button
          type="button"
          onClick={handleProceedToEstimate}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#14281D] text-[#FAF8F5] hover:bg-[#213D2D] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:ring-2 hover:ring-[#C89B53]"
        >
          <span>Lock In This Scope &amp; Get Estimate</span>
          <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
        </button>
      </div>
    </div>
  );
};
