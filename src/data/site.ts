export const siteConfig = {
  name: "Jubna Beegum OS",
  role: "Full Stack Developer",
  experienceYears: "2+",
  location: "Kerala, India",
  email: "jubnanikhil143@gmail.com",
  phone: "+91 81291 00807",
  availability: "Available for international & remote roles",
  summary:
    "Full Stack Developer with 2+ years of experience building modern web applications using React, TypeScript, Node.js, Express.js and MySQL.",
  aboutHeadline: "Full-stack foundation, production mindset",
  about: [
    "I'm a Full Stack Developer based in Kerala, India with 2+ years of professional experience building and shipping modern web applications end to end — from React and Next.js frontends to Node.js and Express.js REST APIs backed by MySQL.",
    "My work spans the whole stack: responsive, type-safe interfaces with TypeScript, REST APIs consumed with Axios, structured MySQL data, and day-to-day tools including Git, Bitbucket, Postman and Cursor AI.",
    "I'm looking for Full Stack Developer opportunities with international teams where I can contribute to modern web products and keep growing as an engineer.",
  ],
  aboutHighlights: [
    "End-to-end development — UI, API and database",
    "Modern React & Next.js frontends with TypeScript",
    "REST API design with Node.js & Express.js",
    "MySQL data modelling & querying",
    "AI-assisted development with Cursor AI",
    "Git collaboration & API testing with Postman",
  ],
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
    resume: "/resume.pdf",
    externshipGithub:
      "https://github.com/smartinternz02/SI-GuidedProject-8620-1645179153",
  },
  ticker: [
    "Kerala, India",
    "React & Next.js",
    "TypeScript",
    "Node.js & Express",
    "MySQL",
    "REST APIs",
    "Git & Bitbucket",
    "Postman",
    "Cursor AI",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    accent: "cyan" as const,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    accent: "green" as const,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    accent: "amber" as const,
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    accent: "violet" as const,
    skills: ["Git", "Bitbucket", "Postman", "Axios", "Cursor AI"],
  },
] as const;

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Microobjects",
    period: "2+ YEARS",
    location: "Kerala, India",
    summary:
      "Building and maintaining modern web applications across the full stack — React and Next.js on the frontend, Node.js and Express.js REST APIs on the backend, with MySQL as the data layer.",
    bullets: [
      "Developed responsive, component-driven web interfaces with React.js, Next.js, JavaScript and TypeScript.",
      "Designed, built and consumed REST APIs using Node.js, Express.js and Axios.",
      "Modelled and queried MySQL databases powering application features.",
      "Collaborated through Git and Bitbucket, tested APIs with Postman, and used Cursor AI in daily development.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Git",
      "Bitbucket",
      "Postman",
    ],
  },
];

export type ProjectItem = {
  title: string;
  tagline: string;
  description: string;
  features: { title: string; detail: string }[];
  plannedFeatures?: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  placeholder?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: "Book Marketplace",
    tagline: "A modern full-stack book marketplace application",
    description:
      "A book marketplace web application where users can discover, list, purchase and exchange books — supported by a complete admin dashboard for managing the platform.",
    features: [
      {
        title: "User Functionality",
        detail: "User accounts with login, profiles and a personal library.",
      },
      {
        title: "Admin Dashboard",
        detail: "Central dashboard to manage users, listings and platform activity.",
      },
      {
        title: "Book Listing Management",
        detail: "Create, edit and organise book listings with details and pricing.",
      },
      {
        title: "Purchasing & Exchange",
        detail: "Buy books or exchange them with other users through the platform.",
      },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Axios",
    ],
    liveUrl: "https://example.com/book-marketplace",
    githubUrl: "https://github.com/your-username/book-marketplace",
    featured: true,
  },
  {
    title: "ReqFlow",
    tagline: "Requirement-management for clearer delivery",
    description:
      "A requirement-management platform designed to improve communication between customers and development teams throughout the software delivery lifecycle.",
    features: [
      {
        title: "Requirement Management",
        detail: "Capture and organise customer requirements in one place.",
      },
      {
        title: "Review Workflow",
        detail: "Developer / TL / PL review and approval flows.",
      },
      {
        title: "Sprint Support",
        detail: "Project and sprint management for delivery teams.",
      },
      {
        title: "Conflict Detection",
        detail: "Support for spotting conflicting requirements early.",
      },
    ],
    plannedFeatures: ["AI-assisted requirement analysis (planned)"],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "AI",
    ],
    liveUrl: "https://example.com/reqflow",
    githubUrl: "https://github.com/your-username/reqflow",
  },
  {
    title: "Project Title",
    tagline: "Add your next project here",
    description:
      "Add a short project summary here. Describe the problem, your role, and the outcome in 2–3 sentences.",
    features: [
      { title: "Key feature one", detail: "Describe what you built." },
      { title: "Key feature two", detail: "Describe the impact." },
      { title: "Key feature three", detail: "Describe the tech challenge." },
    ],
    technologies: ["React", "Node.js", "MySQL"],
    liveUrl: "https://example.com/your-project",
    githubUrl:
      "https://github.com/smartinternz02/SI-GuidedProject-8620-1645179153",
    placeholder: true,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    detail: "73%",
    institution: "Update institution name",
    period: "Update year",
  },
] as const;

export const resumeHighlights = [
  "2+ years of professional full-stack experience",
  "React, Next.js & TypeScript on the frontend",
  "Node.js, Express.js & MySQL on the backend",
  "Open to international & remote roles",
] as const;
