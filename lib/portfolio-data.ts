import { Education, Experience, Project, Skill, SocialLink } from "@/types";

export const profile = {
  name: "Ibrahim Shaikh",
  role: "Full Stack Developer",
  tagline:
    "I build fast, polished web apps with React, Next.js, Java, Spring Boot, Python, and AI-powered workflows.",
  email: "ibrahimshaikh.eng@gmail.com",
  phone: "+917020062288",
  location: "India",
  linkedin: "https://in.linkedin.com/in/ibrahim-shaikh-dev",
  github: "https://github.com/ibrahimshaikhdev",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    platform: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    platform: "location",
    label: "Location",
    value: profile.location,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: profile.linkedin,
  },
  {
    platform: "github",
    label: "GitHub",
    value: "GitHub Profile",
    href: profile.github,
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Python", "FastAPI", "REST API"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
  {
    category: "AI/ML",
    items: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
  },
];

export const experience: Experience[] = [
  {
    title: "Python Developer Intern",
    company: "Wexdi Software Services - Remote",
    duration: "Mar 2025 - May 2025",
    type: "internship",
    description: [
      "Worked on a law firm management platform focused on client, case, hearing, and document workflows.",
      "Built Python-backed modules for organizing client records, matter details, hearing schedules, and case status data.",
      "Collaborated remotely with the development team to translate legal-office requirements into structured features.",
      "Improved understanding of backend logic, data handling, validations, and real-world project communication.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Dreamcare Developers Pvt Ltd - Hinjewadi, Pune, MH",
    duration: "Dec 2025 - Feb 2026",
    type: "internship",
    description: [
      "Built frontend screens for a sneakers-focused e-commerce website using React.js and modern component patterns.",
      "Created product listing, product detail, cart-oriented, and promotional UI sections with responsive layouts.",
      "Worked with reusable React components, Tailwind-style utility classes, state-driven UI, and API-ready structures.",
      "Focused on polished shopping interactions, clean visual hierarchy, and mobile-friendly user experience.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "NMIET, Talegaon Dabhade, Pune",
    degree: "Computer Engineering - Currently Final Year",
    year: "2023 - 2027",
    details: [
      "Specializing in Full Stack Development and AI/ML.",
      "Relevant coursework includes Data Structures, Web Development, and Database Management.",
    ],
  },
  {
    institution: "Shivbhumi Jr. College, Yamunanagar, Pune",
    degree: "HSC - Science Stream",
    year: "2022 - 2023",
    details: [
      "Completed Higher Secondary Certificate coursework.",
      "Focused on Physics, Chemistry, and Mathematics.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "autonomous-ops",
    title: "Autonomous Operations AI",
    description:
      "My own AI-powered operations platform for scheduling, monitoring, workflow automation, and execution intelligence.",
    image: "/projects/autonomous-ops.jpg",
    technologies: ["React.js", "FastAPI", "NestJS", "MySQL"],
    link: "https://autonomous-4.vercel.app/",
    source: "personal",
  },
  {
    id: "ai-resume",
    title: "AI Resume Analyzer",
    description:
      "Resume analysis tool that reads candidate documents and suggests practical improvements using AI/NLP concepts.",
    image: "/projects/ai-resume.jpg",
    technologies: ["Python", "Machine Learning", "NLP", "React.js"],
    link: "https://resume-iq-itt9.onrender.com/",
    source: "personal",
  },
  {
    id: "skin-disease",
    title: "Skin Disease Detection System",
    description:
      "Deep learning system for skin disease classification, built as a medical AI experiment with CNN-based detection.",
    image: "/projects/skin-disease.jpg",
    technologies: ["Python", "TensorFlow", "CNN", "Medical AI"],
    link: "https://skin-disease-ist.vercel.app/",
    source: "personal",
  },
  {
    id: "sneakers-ecommerce",
    title: "Sneakers E-Commerce Frontend",
    description:
      "Internship project at Dreamcare Developers Pvt Ltd: React.js frontend for a sneakers store with product cards, category sections, responsive shopping pages, and API-ready UI structure.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    source: "internship",
    company: "Dreamcare Developers Pvt Ltd",
  },
  {
    id: "law-firm-management",
    title: "Law Firm Management Website",
    description:
      "Internship project at Wexdi Software Services: Python-focused law firm system with client management, case records, hearing schedules, matter tracking, and legal workflow organization.",
    image: "/projects/law-firm.jpg",
    technologies: ["Python", "REST API", "Data Analysis", "HTML/CSS"],
    source: "internship",
    company: "Wexdi Software Services",
  },
];

export const aboutText = `I'm a passionate Full Stack Developer and Computer Engineering student focused on building useful, reliable, and visually sharp web applications. My work combines modern frontend craft with backend engineering and AI/ML problem solving.

I enjoy turning ideas into complete products: clean interfaces, practical APIs, database-backed systems, and workflows that feel smooth to use. My projects range from e-commerce platforms and law firm websites to AI automation dashboards and medical AI experiments.`;
