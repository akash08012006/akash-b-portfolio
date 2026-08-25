import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Akash B",
  location: "Karur, Tamil Nadu",
  email: "akashvsb6@gmail.com",
  phone: "+91 9790301673",
  linkedin: "linkedin.com/in/akash-b-b2559635b",
  github: "github.com/akash08012006",
  leetcode: "leetcode.com/akash_08_01",
  summary: "Highly motivated Computer Science and Business Systems student with an 8.0 CGPA and strong foundations in Software Development, Machine Learning, and Full Stack Development. Proficient in Java, Python, SQL, HTML, and CSS with hands-on experience through academic projects and internships. Passionate about building scalable applications, solving real-world problems, and contributing to innovative software solutions in a collaborative environment.",
  education: [
    {
      degree: "B.Tech. Computer Science and Business Systems",
      institution: "VSB Engineering College, Karur",
      period: "2023 – 2027",
      grade: "CGPA: 8.0"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Vivekanandha Matric Higher Secondary School",
      period: "2022 – 2023",
      grade: "Score: 77.3%"
    }
  ],
  skills: {
    languages: ["Java", "Python", "SQL"],
    web: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    concepts: ["Data Structures and Algorithms", "DBMS", "OOPs (Object-Oriented Programming)", "Machine Learning Fundamentals"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  projects: [
    {
      id: "fixmycity",
      title: "FixMyCity",
      subtitle: "AI Complaint Management System",
      description: "An AI-powered complaint management platform to streamline civic issue reporting and resolution, with intelligent complaint categorization and efficient workflow management.",
      points: [
        "Developed an AI-powered complaint management platform to streamline civic issue reporting and resolution.",
        "Implemented intelligent complaint categorization and efficient workflow management to assign issues automatically to respective municipal departments."
      ],
      tags: ["React.js", "Tailwind CSS", "Express.js", "AI Categorization", "DBMS"],
      category: "Fullstack",
      mockup: "Dynamic issue board showing categories (Sanitation, Roadways, Electricity) getting auto-sorted using ML classifiers, with live resolution status updates and visual map coordinates."
    },
    {
      id: "railwaynav",
      title: "Railway Navigation Enhancement",
      subtitle: "Intelligent Passenger Route Planner",
      description: "A software solution to improve passenger navigation within busy railway stations, enhancing accessibility and information delivery through optimized logic.",
      points: [
        "Designed a software solution to improve passenger navigation within railway stations.",
        "Enhanced route accessibility and information delivery through optimized routing logic for platforms, facilities, and waiting halls."
      ],
      tags: ["Java", "Data Structures", "Pathfinding Algorithms", "UX Optimization"],
      category: "Core",
      mockup: "Station layout visualization showing Dijkstra's pathfinding algorithm finding the shortest, wheelchair-accessible route from entrance to Platform 4, including real-time distance and estimated walking time."
    },
    {
      id: "edusphere",
      title: "Edusphere",
      subtitle: "Smart Education Platform",
      description: "An education management platform focused on resource organization, user engagement, and seamless, accessible interaction for students and educators.",
      points: [
        "Built an education management platform focused on resource organization and user engagement.",
        "Improved accessibility and seamless interaction for students and educators with real-time feedback loops and neat course boards."
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "SQL Database", "Interactive UI"],
      category: "Fullstack",
      mockup: "Educator & Student dual-view dashboard demonstrating classroom stream, downloadable resources (PDF notes, slides), dynamic assignment submitters, and student performance metrics charts."
    }
  ],
  internships: [
    {
      role: "Machine Learning Intern",
      company: "Brainery Spot Technologies",
      period: "Internship Duration",
      points: [
        "Worked on machine learning concepts, data preprocessing, model building, and performance evaluation.",
        "Gained practical exposure to AI-driven problem-solving and predictive analytics to solve complex industry-inspired tasks."
      ],
      type: "ML"
    },
    {
      role: "Full Stack Development Intern",
      company: "Brainery Spot Technologies",
      period: "Internship Duration",
      points: [
        "Developed responsive web applications using modern front-end and back-end technologies.",
        "Collaborated on application development, debugging, and deployment workflows within a team environment."
      ],
      type: "Fullstack"
    }
  ],
  certifications: [
    {
      name: "Infosys Full Stack Developer",
      issuer: "Infosys",
      badgeColor: "emerald"
    },
    {
      name: "NPTEL Cloud Computing",
      issuer: "NPTEL (IIT)",
      badgeColor: "indigo"
    },
    {
      name: "NPTEL AI in HR Management",
      issuer: "NPTEL (IIT)",
      badgeColor: "amber"
    },
    {
      name: "DBMS Professional",
      issuer: "NPTEL / Professional Body",
      badgeColor: "cyan"
    }
  ]
};
