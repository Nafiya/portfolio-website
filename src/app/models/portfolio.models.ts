export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  current: boolean;
  location?: string;
  achievements?: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
