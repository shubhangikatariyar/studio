import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; 
  demoUrl?: string;
  codeUrl?: string;
}

export interface EducationEntry {
  id: string;
  university: string;
  degree: string;
  specialization?: string;
  dates: string;
  logoUrl?: string; 
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  description?: string[]; // Array of responsibilities/achievements
  logoUrl?: string; 
}
