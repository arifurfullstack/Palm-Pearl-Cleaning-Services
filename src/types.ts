export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  idealFor: string[];
  image: string;
  tagline: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  motto: string;
  phone: string;
  phoneRaw: string;
  email: string;
  facebookUrl: string;
  location: string;
  serviceAreas: string[];
  owner: {
    name: string;
    title: string;
    bio: string;
    quote: string;
    pillars: string[];
    image: string;
    fleetImage: string;
  };
  officialAssets: {
    logoBadge: string;
    teamFleet: string;
    commercialFlyer: string;
    meetKayla: string;
    postConstructionFlyer: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    commercialNote: string;
  };
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  propertyType: string;
  approxSqFt: string;
  serviceCity: string;
  preferredDate: string;
  notes: string;
  ecoFriendlyRequested: boolean;
}
