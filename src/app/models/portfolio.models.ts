export interface ProjectDetailSection {
  number: number;
  title: string;
  content: string;       // HTML-safe text description
  highlights?: string[]; // Key points or bullet items
  codeExample?: {
    language: string;
    label: string;
    code: string;
  };
}

export interface ProjectDetail {
  subtitle: string;
  sections: ProjectDetailSection[];
  architecture?: {
    flow: string[];       // Steps in the architecture flow
    benefits: string[];   // Key benefits
  };
}

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
  detail?: ProjectDetail;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'genai' |'other';
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
