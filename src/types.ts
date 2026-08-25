export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tags: string[];
  category: 'ML' | 'Fullstack' | 'Core';
  mockup: string; // Brief visual mockup layout or summary for interactive view
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  points: string[];
  type: 'ML' | 'Fullstack';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  badgeColor: string;
}

export interface ResumeData {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  summary: string;
  education: EducationItem[];
  skills: {
    languages: string[];
    web: string[];
    concepts: string[];
    tools: string[];
  };
  projects: Project[];
  internships: Internship[];
  certifications: Certification[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
