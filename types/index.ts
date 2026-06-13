// TypeScript Types for Portfolio Website

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'email' | 'phone' | 'location';
  label: string;
  value: string;
  href?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  type?: 'work' | 'internship';
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  source?: 'personal' | 'internship';
  company?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
