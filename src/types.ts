export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
  honors?: string;
  score?: string;
  location: string;
  highlights: string[];
}

export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'medical' | 'media' | 'management';
  description: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  recognition?: string;
  responsibilities: string[];
}

export interface VolunteerInitiative {
  id: string;
  role: string;
  organization: string;
  period: string;
  impactMetrics?: string;
  description: string[];
  category: 'hospital' | 'community' | 'mental-health' | 'global';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuerLogoCode?: string;
  date: string;
  category: 'clinical' | 'public-health' | 'tech-data' | 'coding';
  credits?: string;
  credentialSummary: string;
  skillsAcquired: string[];
  verificationType: 'Verified Continuing Medical Education' | 'NIH Outreach' | 'WHO Official' | 'Professional Specialization';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'campus-life' | 'clinical-outreach' | 'portraiture' | 'events';
  description: string;
  location: string;
  year: string;
  imageUrl: string;
  aspectRatio: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  significance: string;
}
