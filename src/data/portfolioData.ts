export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Academic' | 'Professional' | 'Others';
  description: string;
  highlights: string[];
  technologies: string[];
  buttonText: string;
  buttonLink: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  iconName: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string;
}

export const personalInfo = {
  name: "AKASH B",
  tagline: "Building Digital Solutions with Logic and Passion",
  description: "I am a Computer Science and Business Systems student and aspiring software developer passionate about building practical software solutions, intelligent applications, and user-focused digital experiences.",
  avatarEmoji: "👨‍💻",
  status: "🟢 Available for new opportunities",
  location: "Karur, Tamil Nadu, India",
  degree: "B.Tech Computer Science and Business Systems",
  college: "VSB Engineering College",
  cgpa: "8.0",
  academicYears: "2023 – 2027",
  email: "akashvsb6@gmail.com",
  github: "https://github.com/akash08012006",
  linkedin: "https://linkedin.com/in/akash-b-b2559635b",
  leetcode: "https://leetcode.com/u/akash_08__01/"
};

export const navigationItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

export const projects: Project[] = [
  {
    id: "fixmycity",
    title: "FixMyCity",
    subtitle: "AI Complaint Management System",
    category: "Academic",
    description: "An AI-powered complaint management platform designed to streamline civic issue reporting and resolution. The system focuses on intelligent complaint categorization and efficient workflow management.",
    highlights: [
      "AI-powered complaint categorization",
      "Structured civic issue reporting",
      "Efficient complaint workflow management",
      "Smart city problem-solving approach"
    ],
    technologies: ["Python", "Machine Learning", "AI", "Web Development"],
    buttonText: "View Project ↗",
    buttonLink: "https://github.com/akash08012006"
  },
  {
    id: "railwaynav",
    title: "Railway Navigation Enhancement",
    category: "Academic",
    description: "A software solution designed to improve passenger navigation within railway stations by enhancing route accessibility and information delivery through optimized logic.",
    highlights: [
      "Improved passenger navigation",
      "Route accessibility enhancement",
      "Optimized information delivery",
      "Practical transportation technology solution"
    ],
    technologies: ["Java", "Data Structures", "Algorithms"],
    buttonText: "View Project ↗",
    buttonLink: "https://github.com/akash08012006"
  },
  {
    id: "mediremind",
    title: "MediRemind AI",
    subtitle: "AI-Based Medical Prescription Reminder System",
    category: "Academic",
    description: "An intelligent healthcare platform that helps users manage prescriptions, extract medicine details, schedule reminders, track medication status, and receive AI-assisted prescription information.",
    highlights: [
      "OCR-based prescription processing",
      "Automated medicine reminders & scheduling",
      "Medication tracking with taken/missed status",
      "Caretaker alerts & AI assistant for prescription queries"
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "LocalStorage", "Vercel"],
    buttonText: "View Project ↗",
    buttonLink: "https://github.com/akash08012006"
  }
];

export const toolbox = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Database" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" }
];

export const experiences: Experience[] = [
  {
    id: "exp-ml",
    role: "Machine Learning Intern",
    company: "Brainery Spot Technologies",
    duration: "Internship Session",
    description: "Worked on machine learning concepts, data preprocessing, model building, and performance evaluation. Gained practical exposure to AI-driven problem-solving and predictive analytics."
  },
  {
    id: "exp-fs",
    role: "Full Stack Development Intern",
    company: "Brainery Spot Technologies",
    duration: "Internship Session",
    description: "Developed responsive web applications using modern frontend and backend technologies. Collaborated on application development, debugging, and deployment workflows."
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-fs",
    name: "Infosys Full Stack Developer",
    issuer: "Infosys",
    iconName: "Cpu"
  },
  {
    id: "cert-cc",
    name: "NPTEL Cloud Computing",
    issuer: "NPTEL / IIT",
    iconName: "Cloud"
  },
  {
    id: "cert-aihr",
    name: "NPTEL AI in HR Management",
    issuer: "NPTEL / IIT",
    iconName: "BrainCircuit"
  },
  {
    id: "cert-dbms",
    name: "DBMS Professional",
    issuer: "Professional Certification",
    iconName: "Database"
  }
];

export const educationList: Education[] = [
  {
    id: "edu-college",
    degree: "B.Tech. Computer Science and Business Systems",
    institution: "VSB Engineering College, Karur",
    duration: "2023 – 2027",
    score: "CGPA: 8.0"
  },
  {
    id: "edu-school",
    degree: "Higher Secondary Education",
    institution: "Vivekanandha Matric Higher Secondary School",
    duration: "2022 – 2023",
    score: "Score: 77.3%"
  }
];
