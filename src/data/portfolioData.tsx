import React from "react";
// Certification Imports
import hackathonImg from "../assets/certs/hackathon.jpg";
import aiXperienceImg from "../assets/certs/aixperience.jpg";
import hciSeminarImg from "../assets/certs/hci-seminar.jpg";
import campbookImg from "../assets/projects/campbook.jpg"; 

import { 
  SiHtml5, SiJavascript, SiTypescript, SiReact, 
  SiNodedotjs, SiExpress, SiGoogleappsscript, SiMongodb, 
  SiGooglesheets, SiGit, SiGithub, SiPostman, SiVercel, SiDotnet 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { VscVscode, VscTerminalBash } from "react-icons/vsc";
import { HiOutlineChip } from "react-icons/hi";

export interface PortfolioItem {
  title: string;
  desc: string;
  tag: string;
  image?: string;         
  link?: string;          // Added link property
  icons?: React.ReactNode[];
  date?: string;          
}

export const portfolioData: Record<string, PortfolioItem[]> = {
  PROJECTS: [
  { 
      title: "CAMPBOOK", 
      desc: "A comprehensive Library Management System designed to streamline book tracking, member records, and borrowing workflows.", 
      tag: "Node.js + Render + JS",
      image: campbookImg, 
      link: "https://nathanielsalsao.github.io/CampBook/"
    },
  ],
  "TECH STACK": [
    { 
      title: "FRONTEND", 
      desc: "UI development and interactive interfaces.", 
      tag: "Client Side", 
      icons: [
        <SiHtml5 key="HTML" className="text-[#E34F26]" />, 
        <SiJavascript key="javascript" className="text-[#F7DF1E]" />, 
        <SiTypescript key="typescript" className="text-[#3178C6]" />, 
        <SiReact key="react" className="text-[#61DAFB]" />
      ] 
    },
    { 
      title: "BACKEND", 
      desc: "Server logic and API development.", 
      tag: "Server Side", 
      icons: [
        <SiNodedotjs key="node.js" className="text-[#339933]" />, 
        <SiExpress key="express" className="text-white/70" />, 
        <SiGoogleappsscript key="google-apps-script" className="text-[#4285F4]" />, 
        <SiDotnet key="dotnet" className="text-[#512BD4]" />
      ] 
    },
    { 
      title: "DATABASE", 
      desc: "Data storage and management systems.", 
      tag: "Data Layer", 
      icons: [
        <FaDatabase key="db" className="text-[#CC2927]" />, 
        <SiMongodb key="mongodb" className="text-[#47A248]" />, 
        <SiGooglesheets key="google-sheets" className="text-[#34A853]" />
      ] 
    },
    { 
      title: "TOOLS", 
      desc: "Development workflow and deployment tools.", 
      tag: "DevOps / Tools", 
      icons: [
        <VscVscode key="vscode" className="text-[#007ACC]" />, 
        <SiGit key="git" className="text-[#F05032]" />, 
        <SiGithub key="github" className="text-white" />, 
        <SiPostman key="postman" className="text-[#FF6C37]" />, 
        <SiVercel key="vercel" className="text-white" />, 
        <VscTerminalBash key="terminal" className="text-white/80" />, 
        <HiOutlineChip key="Arduino" className="text-emerald-400" />
      ] 
    },
  ],
  CERTIFICATIONS: [
    { 
      title: "AI XPERIENCE", 
      desc: "Recognized for outstanding dedication and contributions to 'AI XPERIENCE: Transforming Skills to Smart Solutions'.", 
      tag: "Participant",
      date: "JAN 2026",
      image: aiXperienceImg 
    },
    { 
      title: "HACKATHON", 
      desc: "1st Place Champion: AI Monitoring and RFID Attendance System.", 
      tag: "Champion",
      date: "JAN 2026",
      image: hackathonImg 
    },
    { 
      title: "HCI SEMINAR", 
      desc: "Participated in the College of Computer Studies Seminar Series: Human Computer Interaction at ICCT Colleges.", 
      tag: "Seminar",
      date: "JAN 2026",
      image: hciSeminarImg 
    },
  ],
};