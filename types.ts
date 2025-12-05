export interface Publication {
  id: string;
  type: 'Journal' | 'Conference' | 'Media' | 'Patent';
  year: number;
  venue: string;
  title: string;
  authors: string;
  doi?: string;
  html?: string;
  pdf?: string;
  video?: string;
  tags?: string[];
  abstract?: string;
  status?: string; // e.g., "Accepted", "In Review"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  year?: string | number;
  stars?: number;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  items?: string[];
  advisor?: string;
  icon: string;
  colorClass: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  thesis?: string;
  advisor?: string;
  gpa?: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  icon: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  description?: string;
  type: 'Chair' | 'Coordinator' | 'Reviewer' | 'Membership';
}

export interface Referee {
  id: string;
  name: string;
  title: string;
  institution: string;
  email: string;
  relationship?: string;
}

export type Palette = 'blue' | 'green' | 'purple';