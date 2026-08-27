export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  path: string;
  startingPrice: string;
  duration: string;
  highlights: string[];
  ctaText: string;
  ctaTrackingId: string;
}

export interface HeadSpaTreatment {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  isPopular?: boolean;
  badge?: string;
  description: string;
  includes: string[];
  sensoryFeatures: string[];
  ctaTrackingId: string;
}

export interface HydrafacialTier {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  price: string;
  isPopular?: boolean;
  description: string;
  targetConcerns: string[];
  includes: string[];
  keyDifference: string;
  ctaTrackingId: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  category: 'facial' | 'body' | 'combination';
  isFlagship?: boolean;
  badge?: string;
  duration: string;
  price: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  idealFor: string;
  ctaTrackingId: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  verified: boolean;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'headspa' | 'hydrafacial' | 'booking';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  concern: string;
  treatmentUsed: string;
  sessions: string;
  results: string;
  beforeImage: string;
  afterImage: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  concernsOrNotes: string;
}
