export interface ContactDetails {
  phone: string;
  email: string | null;
  linkedIn: string | null;
  github: string | null;
  whatsapp: string | null;
}

export interface Profile {
  role: string;
  availability: string;
  summary: string;
  location: string;
  profileImage: string | null;
  primaryExperience: string[];
  functionalAreas: string[];
  contacts: ContactDetails;
}
export interface SkillGroup { title: string; skills: string[]; }
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}
export interface ProfessionalHighlight { title: string; description: string; }
export interface Education { institution: string; degree: string; period: string; }
export interface Service { slug: string; title: string; description: string; }
export interface Project {
  video?: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  businessProblem: string;
  requirements: string[];
  role: string[];
  solution: string[];
  technicalAreas: string[];
  challenges: string[];
  impact: string[];
  tags: string[];
  portfolioValue: string[];
  featured: boolean;
}
