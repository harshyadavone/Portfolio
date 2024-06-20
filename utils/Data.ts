import { TechItem } from "@/components/SkillSection";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaDocker, FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export interface Technology {
  name: string;
  color: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string[];
  technologies: Technology[];
  githubLink: string;
  liveLink: string;
}

// Skill section data
export const mainStack: TechItem[] = [
  {
    name: "JavaScript",
    color: "#F7DF1E",
    description: "Web development language.",
    icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    color: "#007ACC",
    description: "JavaScript with static types.",
    icon: SiTypescript,
  },
  {
    name: "React",
    color: "#61DAFB",
    description: "UI library for building web apps.",
    icon: FaReact,
  },
  {
    name: "Next.js",
    color: "#ECEFF4",
    description: "React framework for server-side rendering.",
    icon: TbBrandNextjs,
  },
  {
    name: "Node.js",
    color: "#68A063",
    description: "JavaScript runtime environment.",
    icon: SiNodedotjs,
  },
];


export const librariesAndFrameworks: TechItem[] = [
  {
    name: "Redux",
    color: "#DC3545",
    description: "State management for JavaScript apps.",
    icon: SiRedux,
  },
  {
    name: "React Query",
    color: "#4CAF50",
    description: "Data fetching and caching for React.",
    icon: SiReactquery,
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    description: "Utility-first CSS framework.",
    icon: BiLogoTailwindCss,
  },
];

export const databasesAndOrm: TechItem[] = [
  {
    name: "PostgreSQL",
    color: "#336791",
    description: "Open-source relational database.",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    description: "NoSQL database for document storage.",
    icon: SiMongodb,
  },
  {
    name: "Prisma",
    color: "#7B16FF",
    description: "ORM for Node.js and TypeScript.",
    icon: SiPrisma,
  },
];

export const otherTools: TechItem[] = [
  {
    name: "Git",
    color: "#F05032",
    description: "Version control system.",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    color: "#24292F",
    description: "Code hosting platform.",
    icon: FaGithub,
  },
  {
    name: "Docker",
    color: "#2496ED",
    description: "Containerization platform.",
    icon: FaDocker,
  },
];

// Project data
export const projects: Project[] = [
  {
    title: "Food Ordering App",
    description: [
      "An application to order food from various restaurants, built with React and Node.js.",
      "The app supports user authentication, order tracking, and secure payment processing using Stripe.",
    ],
    technologies: [
      { name: "TypeScript", color: "#007ACC" },
      { name: "Node.js", color: "#68A063" },
      { name: "React", color: "#61DAFB" },
      { name: "MongoDB", color: "#47A248" },
    ],
    githubLink: "https://github.com/harshyadavone/food-ordering-app-frontend",
    liveLink: "https://food-ordering-app-frontend-so2p.onrender.com/",
  },
  {
    title: "Vibe (Social Media App)",
    description: [
      "A social media platform to connect with friends and share updates, built with React, Node.js, MongoDB, and Firebase.",
      "Features include user profiles, followers & following system, and a home feed.",
    ],
    technologies: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Node.js", color: "#68A063" },
      { name: "React", color: "#61DAFB" },
      { name: "MongoDB", color: "#47A248" },
    ],
    githubLink: "https://github.com/harshyadavone/vibe",
    liveLink: "https://vibe-lklt.onrender.com/",
  },
];
