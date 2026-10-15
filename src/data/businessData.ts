import { BusinessInfo, ServiceItem } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: "Palm & Pearl Cleaning Services",
  tagline: "Pristine Spaces. Timeless Care.",
  motto: "Cleaning Done Right.",
  phone: "239-295-4317",
  phoneRaw: "+12392954317",
  email: "palmpearlcleaning@gmail.com",
  facebookUrl: "https://www.facebook.com/palmpearlcleaning",
  location: "Southwest Florida",
  serviceAreas: [
    "Cape Coral",
    "Fort Myers",
    "Fort Myers Beach",
    "Estero",
    "Bonita Springs",
    "Naples",
    "Sanibel Island",
    "Captiva Island",
    "Pine Island",
    "Punta Gorda",
    "Lehigh Acres",
    "North Fort Myers",
    "Marco Island"
  ],
  owner: {
    name: "Kayla",
    title: "Owner & Founder",
    bio: "Hi! I'm Kayla, the owner of Palm & Pearl Cleaning Services. I'm passionate about creating clean, healthy spaces for our clients — and I take pride in leading a company that treats every property like it's our own.",
    quote: "Clean Spaces ✦ Brighter Days",
    pillars: [
      "Family Owned & Operated",
      "Reliable & Trustworthy",
      "Community Focused",
      "Licensed & Insured"
    ],
    image: "/images/upload/842465995_122105284371497741_6757168991532059581_n.jpg",
    fleetImage: "/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg"
  },
  officialAssets: {
    logoBadge: "/images/upload/825350970_2227129271558671_4729667765504210952_n.jpg",
    teamFleet: "/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg",
    commercialFlyer: "/images/upload/844278059_122110127211497741_6854398682803496698_n.jpg",
    meetKayla: "/images/upload/842465995_122105284371497741_6757168991532059581_n.jpg",
    postConstructionFlyer: "/images/upload/825351791_122104740789497741_218258861610752807_n.jpg"
  },
  hours: {
    weekdays: "Monday – Friday: 7:30 AM – 6:30 PM",
    saturday: "Saturday: 8:00 AM – 4:00 PM",
    sunday: "Sunday: Closed / Emergency Commercial by Appointment",
    commercialNote: "Commercial janitorial & builder post-construction services can be scheduled after-hours, overnight, or weekends to prevent business disruptions."
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "commercial",
    title: "Commercial Cleaning",
    subtitle: "Offices • Retail • Facilities • Banks • Churches • Medical",
    badge: "Business & Janitorial",
    description: "Keeping your business clean so you can focus on what matters. We deliver tailored custodial maintenance for offices, financial institutions, religious spaces, and medical/dental practices across Southwest Florida.",
    tagline: "Trusted. Professional. Reliable.",
    highlights: [
      "Daily, weekly, or bi-weekly commercial maintenance",
      "Sanitizing high-touch surfaces, lobbies, and conference rooms",
      "Medical & dental exam room disinfection standards",
      "Restroom sanitation, restocking, and touchpoint sterilization",
      "Commercial floor care, vacuuming, and trash haul-away",
      "Flexible evening, weekend, and after-hours keyholder access"
    ],
    idealFor: [
      "Corporate Office Suites",
      "Commercial Banks & Credit Unions",
      "Houses of Worship & Community Centers",
      "Medical & Dental Practices",
      "Boutique Retail & Showrooms"
    ],
    image: "/images/upload/844278059_122110127211497741_6854398682803496698_n.jpg"
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    subtitle: "Builder & Contractor Services • Final Clean • New Builds",
    badge: "Builder Partner",
    description: "From construction to completion... we make it shine. Trusted partner for general contractors, custom home builders, remodelers, and developers needing turnkey presentation ready for homeowner walkthroughs.",
    tagline: "Your Project Deserves a Perfect Finish.",
    highlights: [
      "Removal of construction dust, drywall film, and fine residue",
      "Detailed cleaning of baseboards, window sills, doors, and millwork",
      "Interior window, glass, and slider track cleaning & label removal",
      "Inside/outside cabinetry, soft-close drawers, and closet shelving",
      "Grout haze removal and delicate tile/travertine floor cleaning",
      "Appliance exterior and interior detailing and protective wrap removal",
      "Punch-list and final presentation clean before owner handover"
    ],
    idealFor: [
      "Custom Waterfront Home Builds",
      "Commercial Build-Outs & Tenant Improvements",
      "Kitchen & Bathroom Renovations",
      "Real Estate Flip Completions",
      "Architectural Showrooms & Model Units"
    ],
    image: "/images/upload/825351791_122104740789497741_218258861610752807_n.jpg"
  },
  {
    id: "residential",
    title: "Residential Cleaning",
    subtitle: "Luxury Homes • Condominiums • Move-In / Move-Out",
    badge: "White-Glove Home Care",
    description: "Tailored residential cleaning designed for Southwest Florida living. From waterfront single-family homes to Gulf-front condominiums, we protect high-end finishes, stone surfaces, and delicate furnishings.",
    tagline: "Clean Spaces. Brighter Days.",
    highlights: [
      "Detailed dusting from crown molding to baseboards",
      "Kitchen deep cleaning: exterior appliances, stovetops, backsplashes",
      "Spa-grade bathroom sanitation with chrome and glass shine",
      "Vacuuming fine rugs, under furniture, and mop hardwood/tile",
      "Move-in / Move-out comprehensive turnaround cleaning",
      "Seasonal resident opening & closing services",
      "Eco-friendly, child & pet-safe products available upon request"
    ],
    idealFor: [
      "Coastal Single-Family Estates",
      "Waterfront High-Rise Condos",
      "Seasonal Winter Residents & Snowbirds",
      "Move-In / Move-Out Transitions",
      "Airbnb & Premium Vacation Rental Owners"
    ],
    image: "/images/upload/842465995_122105284371497741_6757168991532059581_n.jpg"
  },
  {
    id: "final-detailing",
    title: "Final Clean Detailing",
    subtitle: "Precision • Quality • Showroom Ready",
    badge: "Ultra-Detailing",
    description: "When ordinary cleaning falls short, our Final Clean Detailing provides microscopic precision. Perfect for high-stakes real estate photography, VIP walkthroughs, or post-renovation unveilings.",
    tagline: "Pristine Spaces. Timeless Care.",
    highlights: [
      "High-precision detailing of custom lighting, chandeliers & sconces",
      "Streak-free glass sliding door polishing inside & out",
      "Precision vacuuming inside cabinets, vents, and registers",
      "Mirror polishing and architectural hardware restoration",
      "Natural stone countertop sealing and delicate care",
      "Turnkey staging presentation ready for photo or video capture"
    ],
    idealFor: [
      "Luxury Real Estate Listings & Photography",
      "Architectural & Interior Design Unveilings",
      "Executive Relocations",
      "Special Events & Estate Staging"
    ],
    image: "/images/upload/825350970_2227129271558671_4729667765504210952_n.jpg"
  }
];

export const CONTRACTOR_CHECKLIST = [
  "Removal of construction dust and debris",
  "Detailed cleaning of floors, baseboards, doors and trim",
  "Interior window and glass cleaning",
  "Cleaning of cabinets, countertops and fixtures",
  "Removal of dust from walls, ceilings, vents and surfaces",
  "Bathroom and kitchen deep cleaning",
  "Cleaning around appliances and built-ins",
  "Final detail cleaning before client walkthroughs",
  "Move-in / final presentation cleaning",
  "Recurring cleaning services after project completion"
];

export const COMMERCIAL_SECTORS = [
  {
    title: "Commercial Offices",
    description: "Desks, conference rooms, break areas, and executive suites kept spotless and organized.",
    icon: "Building2"
  },
  {
    title: "Banks & Financial Institutions",
    description: "Professional cleaning for a healthier, safer environment reflecting absolute institutional trust.",
    icon: "Landmark"
  },
  {
    title: "Churches & Places of Worship",
    description: "Sanctuary care, fellowship halls, and nurseries maintained with dignity and community pride.",
    icon: "Church"
  },
  {
    title: "Medical & Dental Practices",
    description: "Clean, sanitized, and safe environments for your patients, doctors, and clinical staff.",
    icon: "Stethoscope"
  }
];

export const TRUST_BADGES = [
  {
    title: "Licensed & Insured",
    description: "Complete general liability and commercial bonding for total client protection and peace of mind.",
    icon: "ShieldCheck"
  },
  {
    title: "Eco-Friendly Products",
    description: "Non-toxic, green certified formulas available upon request to protect families, pets, and our Florida coastal ecosystem.",
    icon: "Leaf"
  },
  {
    title: "Trained & Professional Staff",
    description: "Background-checked, uniform-attired, thoroughly trained specialists holding the highest white-glove standards.",
    icon: "Users"
  },
  {
    title: "Flexible Scheduling",
    description: "Customizable daily, weekly, bi-weekly, or on-demand schedules tailored to your lifestyle or jobsite deadlines.",
    icon: "Calendar"
  },
  {
    title: "Meticulous Attention to Detail",
    description: "We don't cut corners — we clean them. Every corner, baseboard, and fixture receives personal inspection.",
    icon: "Sparkles"
  },
  {
    title: "Family Owned & Operated",
    description: "Founded and led by Kayla, with direct owner accountability and passionate local Southwest Florida roots.",
    icon: "Heart"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Kayla and Palm & Pearl handled our post-construction cleaning for three luxury custom homes in Cape Coral. Their team is punctual, reliable, and leaves the homes ready for high-end walkthroughs without us having to call back for touch-ups. They are our go-to partner.",
    author: "Marcus D.",
    role: "General Contractor & Custom Builder",
    location: "Cape Coral, FL"
  },
  {
    quote: "We switched our commercial medical office in Fort Myers to Palm & Pearl six months ago. The difference in hygiene, attention to detail, and overall cleanliness was night and day. Patients notice, and our doctors couldn't be happier.",
    author: "Dr. Elena S.",
    role: "Practice Administrator",
    location: "Fort Myers, FL"
  },
  {
    quote: "Living on the water in Bonita Springs means dealing with salt air, fine sand, and moisture. Palm & Pearl treats our home with exceptional care. They are respectful, trustworthy, and Kayla's personal oversight gives us total peace of mind.",
    author: "Robert & Cynthia P.",
    role: "Estate Homeowners",
    location: "Bonita Springs, FL"
  }
];

export const FAQS = [
  {
    q: "Are you licensed and insured in Florida?",
    a: "Yes, absolutely. Palm & Pearl Cleaning Services is fully registered, licensed, and carries comprehensive commercial liability insurance. Certificates of insurance are readily provided to general contractors and property managers upon request."
  },
  {
    q: "Do you supply your own cleaning supplies and equipment?",
    a: "Yes. Our branded company vehicles arrive fully stocked with professional-grade supplies, HEPA filtration vacuums, microfiber systems, and specialized equipment. If you prefer our eco-friendly non-toxic line or have custom stone cleaning solutions, simply let us know."
  },
  {
    q: "How do you calculate estimates for commercial and construction jobs?",
    a: "For post-construction and commercial projects, we assess square footage, current stage (rough clean vs. final clean), scope of glass/sliders, and timeline requirements. We provide transparent, itemized written proposals with zero hidden fees."
  },
  {
    q: "What areas of Southwest Florida do you service?",
    a: "We proudly serve Cape Coral, Fort Myers, Fort Myers Beach, Estero, Bonita Springs, Naples, Sanibel Island, Captiva Island, Pine Island, Punta Gorda, and surrounding Lee and Collier County communities."
  },
  {
    q: "Can commercial janitorial or construction cleanings be scheduled after hours?",
    a: "Yes. We recognize that commercial offices and active jobsites cannot be disrupted during prime operating hours. We offer flexible evening, night, and weekend cleanings with secure lockbox or keyholder protocol."
  }
];
