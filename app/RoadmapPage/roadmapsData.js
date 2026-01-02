import Image from "next/image";

// Import all official roadmap icons
// Assuming your roadmap-icons folder structure is: roadmaps-icons/[icon-name].svg or .png
import aimlIcon from "./roadmaps-icons/ai.png";
import aiAgentIcon from "./roadmaps-icons/ai-agent.png";
import langchainIcon from "./roadmaps-icons/langchain.svg";
import apiIcon from "./roadmaps-icons/api.png";
import wordpressIcon from "./roadmaps-icons/wordpress.png";
import shopifyIcon from "./roadmaps-icons/shopify.png";
import djangoIcon from "./roadmaps-icons/Django.png";
import reactIcon from "./roadmaps-icons/React.png";
import nextjsIcon from "./roadmaps-icons/Next.png";
import nestjsIcon from "./roadmaps-icons/Nest.js.png";
import reactNativeIcon from "./roadmaps-icons/React.png";
import softwareArchitectIcon from "./roadmaps-icons/software.png";
import flutterIcon from "./roadmaps-icons/Flutter.png";
import fullstackIcon from "./roadmaps-icons/fullstack.png";
import frontendIcon from "./roadmaps-icons/frontend.png";
import mernIcon from "./roadmaps-icons/mern.png";
import backendIcon from "./roadmaps-icons/backend.png";
import nodejsIcon from "./roadmaps-icons/Node.png";
import expressjsIcon from "./roadmaps-icons/Express (1).png";
import mongodbIcon from "./roadmaps-icons/MongoDB.png";
import angularIcon from "./roadmaps-icons/Angular.png";
import javascriptIcon from "./roadmaps-icons/javascript.png";
import typescriptIcon from "./roadmaps-icons/TypeScript.png";
import pythonIcon from "./roadmaps-icons/Python (1).png";
import javaIcon from "./roadmaps-icons/java.png";
import javaFullStackIcon from "./roadmaps-icons/javaf.png";
import rustIcon from "./roadmaps-icons/Rust.png";
import iosIcon from "./roadmaps-icons/Apple.png";
import androidIcon from "./roadmaps-icons/Android.png";
import phpIcon from "./roadmaps-icons/PHP.png";
import sqlIcon from "./roadmaps-icons/sql.png";
import postgreSqlIcon from "./roadmaps-icons/postgre.png";
import golangIcon from "./roadmaps-icons/Go.png";
import swiftIcon from "./roadmaps-icons/Swift.png";
import cppIcon from "./roadmaps-icons/C++.png";
import cIcon from "./roadmaps-icons/C.png";
import kotlinIcon from "./roadmaps-icons/Kotlin.png";
import springIcon from "./roadmaps-icons/Spring.png";
import springbootIcon from "./roadmaps-icons/Spring.png";
import dataEngineeringIcon from "./roadmaps-icons/database.png";
import dataScienceIcon from "./roadmaps-icons/data-science.png";
import dataAnalysisIcon from "./roadmaps-icons/data-analysis.png";
import productDesignerIcon from "./roadmaps-icons/Figma.png";
import databaseIcon from "./roadmaps-icons/database.png";
import excelIcon from "./roadmaps-icons/excel.png";
import uiuxIcon from "./roadmaps-icons/Figma.png";
import cloudIcon from "./roadmaps-icons/azure.png";
import awsIcon from "./roadmaps-icons/aws.png";
import networkingIcon from "./roadmaps-icons/networking.png";
import videoIcon from "./roadmaps-icons/video.png";
import graphicIcon from "./roadmaps-icons/graphic.png";
import blockchainIcon from "./roadmaps-icons/blockchain.png";
import systemDesignIcon from "./roadmaps-icons/system.png";
import linuxIcon from "./roadmaps-icons/Linux.png";
import osIcon from "./roadmaps-icons/os.png";
import devopsIcon from "./roadmaps-icons/devops.png";
import dsaIcon from "./roadmaps-icons/dsa.png";
import cybersecurityIcon from "./roadmaps-icons/cybers.png";
import promptEngineeringIcon from "./roadmaps-icons/prompt.png";
import iotIcon from "./roadmaps-icons/iot.png";
import gameDevIcon from "./roadmaps-icons/gamer.png";

// Helper component to render icons consistently
const RoadmapIcon = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

// Popular search tags
export const popularTags = [
  "AI",
  "Web",
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Next.js",
  "Backend",
];

// Roadmaps data configuration
export const roadmapsData = [
  {
    id: "ai",
    title: "AI & ML",
    icon: <RoadmapIcon src={aimlIcon} alt="AI & ML" />,
    link: "/Roadmaps/Aiml",
    bgColor: "from-blue-500 to-indigo-600",
    category: "featured",
    description: "Machine Learning, Deep Learning, Neural Networks",
  },
  {
    id: "ai agents",
    title: "AI Agents (No code)",
    icon: <RoadmapIcon src={aiAgentIcon} alt="AI Agents" />,
    link: "/Roadmaps/AI-Agent",
    bgColor: "from-blue-700 to-blue-900",
    category: "featured",
    description: "No code AI agents and applications",
  },
  {
    id: "langchain",
    title: "Langchain",
    icon: <RoadmapIcon src={langchainIcon} alt="Langchain" />,
    link: "/Roadmaps/Langchain",
    bgColor: "from-red-500 to-red-600",
    category: "featured",
    description: "Langchain Framework and applications",
  },
  {
    id: "api development",
    title: "Api Developer",
    icon: <RoadmapIcon src={apiIcon} alt="API Development" />,
    link: "/Roadmaps/Api",
    bgColor: "from-red-500 to-red-700",
    category: "featured",
    description: "api development and applications",
  },
  {
    id: "wordpress",
    title: "Wordpress Developer",
    icon: <RoadmapIcon src={wordpressIcon} alt="WordPress" />,
    link: "/Roadmaps/Wordpress",
    bgColor: "from-blue-500 to-blue-700",
    category: "featured",
    description: "Wordpress development and applications",
  },
  {
    id: "shopify",
    title: "Shopify Developer",
    icon: <RoadmapIcon src={shopifyIcon} alt="Shopify" />,
    link: "/Roadmaps/Shopify",
    bgColor: "from-green-600 to-green-800",
    category: "featured",
    description: "Shopify development and applications",
  },
  {
    id: "django",
    title: "Django",
    icon: <RoadmapIcon src={djangoIcon} alt="Django" />,
    link: "/Roadmaps/Django",
    bgColor: "from-green-800 to-green-900",
    category: "featured",
    description: "Backend development with python",
  },
  {
    id: "react",
    title: "React",
    icon: <RoadmapIcon src={reactIcon} alt="React" />,
    link: "/Roadmaps/React",
    bgColor: "from-blue-600 to-blue-400",
    category: "featured",
    description: "React.js library for building user interfaces",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <RoadmapIcon src={nextjsIcon} alt="Next.js" />,
    link: "/Roadmaps/Next",
    bgColor: "from-gray-800 to-black",
    category: "featured",
    description: "Full-stack React framework",
  },
  {
    id: "nestjs",
    title: "Nest.js",
    icon: <RoadmapIcon src={nestjsIcon} alt="Nest.js" />,
    link: "/Roadmaps/Nestjs",
    bgColor: "from-pink-600 to-pink-700",
    category: "featured",
    description: "Enterprise standard for node.js backend",
  },
  {
    id: "reactnative",
    title: "React Native",
    icon: <RoadmapIcon src={reactNativeIcon} alt="React Native" />,
    link: "/Roadmaps/Reactnative",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Cross-platform mobile app development",
  },
  {
    id: "software architect",
    title: "Software Architect",
    icon: <RoadmapIcon src={softwareArchitectIcon} alt="Software Architect" />,
    link: "/Roadmaps/Software",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Software architecture fundamentals",
  },
  {
    id: "flutter",
    title: "Flutter",
    icon: <RoadmapIcon src={flutterIcon} alt="Flutter" />,
    link: "/Roadmaps/Flutter",
    bgColor: "from-blue-500 to-blue-700",
    category: "featured",
    description: "Cross-platform mobile app development",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Developer",
    icon: <RoadmapIcon src={fullstackIcon} alt="Full-Stack" />,
    link: "/Roadmaps/Full-Stack",
    bgColor: "from-blue-500 to-blue-700",
    category: "featured",
    description: "Full-Stack Web development",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <RoadmapIcon src={frontendIcon} alt="Frontend" />,
    link: "/Roadmaps/Frontend",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Frontend development specialization",
  },
  {
    id: "mern",
    title: "Mern Stack",
    icon: <RoadmapIcon src={mernIcon} alt="MERN Stack" />,
    link: "/Roadmaps/Mern",
    bgColor: "from-blue-600 to-cyan-500",
    category: "featured",
    description: "Mern stack development specialization",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <RoadmapIcon src={backendIcon} alt="Backend" />,
    link: "/Roadmaps/Backend",
    bgColor: "from-green-600 to-emerald-700",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "nodejs",
    title: "Node js",
    icon: <RoadmapIcon src={nodejsIcon} alt="Node.js" />,
    link: "/Roadmaps/Nodejs",
    bgColor: "from-green-400 to-emerald-500",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "express js",
    title: "Express js",
    icon: <RoadmapIcon src={expressjsIcon} alt="Express.js" />,
    link: "/Roadmaps/Expressjs",
    bgColor: "from-green-400 to-emerald-500",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "mongodb",
    title: "Mongo DB",
    icon: <RoadmapIcon src={mongodbIcon} alt="MongoDB" />,
    link: "/Roadmaps/MongoDB",
    bgColor: "from-green-600 to-green-500",
    category: "featured",
    description: "Cloud Database",
  },
  {
    id: "angular",
    title: "Angular js",
    icon: <RoadmapIcon src={angularIcon} alt="Angular" />,
    link: "/Roadmaps/Angular",
    bgColor: "from-red-600 to-red-700",
    category: "featured",
    description: "Single page application development",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: <RoadmapIcon src={javascriptIcon} alt="JavaScript" />,
    link: "/Roadmaps/Javascript",
    bgColor: "from-yellow-400 to-yellow-600",
    category: "featured",
    description: "Modern JavaScript programming",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: <RoadmapIcon src={typescriptIcon} alt="TypeScript" />,
    link: "/Roadmaps/Typescript",
    bgColor: "from-blue-400 to-blue-600",
    category: "featured",
    description: "Modern Typescript programming",
  },
  {
    id: "python",
    title: "Python",
    icon: <RoadmapIcon src={pythonIcon} alt="Python" />,
    link: "/Roadmaps/Python",
    bgColor: "from-blue-500 to-green-500",
    category: "trending",
    description: "Python programming language",
  },
  {
    id: "java",
    title: "Java",
    icon: <RoadmapIcon src={javaIcon} alt="Java" />,
    link: "/Roadmaps/Java",
    bgColor: "from-orange-500 to-red-600",
    category: "trending",
    description: "Java programming language",
  },
  {
    id: "java full-stack",
    title: "Java Full-Stack Developer",
    icon: <RoadmapIcon src={javaFullStackIcon} alt="Java Full-Stack" />,
    link: "/Roadmaps/JavaFullStack",
    bgColor: "from-orange-400 to-red-300",
    category: "trending",
    description: "Java Full-Stack Development",
  },
  {
    id: "rust",
    title: "Rust",
    icon: <RoadmapIcon src={rustIcon} alt="Rust" />,
    link: "/Roadmaps/Rust",
    bgColor: "from-orange-600 to-red-700",
    category: "trending",
    description: "Systems programming with Rust",
  },
  {
    id: "ios",
    title: "iOS Development",
    icon: <RoadmapIcon src={iosIcon} alt="iOS" />,
    link: "/Roadmaps/Ios",
    bgColor: "from-gray-700 to-gray-900",
    category: "featured",
    description: "Native iOS app development with Swift and UIKit",
  },
  {
    id: "android",
    title: "Android Development",
    icon: <RoadmapIcon src={androidIcon} alt="Android" />,
    link: "/Roadmaps/Android",
    bgColor: "from-green-500 to-green-700",
    category: "featured",
    description: "Native Android app development with Kotlin and Java",
  },
  {
    id: "php",
    title: "PHP",
    icon: <RoadmapIcon src={phpIcon} alt="PHP" />,
    link: "/Roadmaps/Php",
    bgColor: "from-purple-600 to-blue-600",
    category: "trending",
    description: "PHP web development",
  },
  {
    id: "sql",
    title: "SQL",
    icon: <RoadmapIcon src={sqlIcon} alt="SQL" />,
    link: "/Roadmaps/Sql",
    bgColor: "from-blue-700 to-indigo-800",
    category: "trending",
    description: "Database management and queries",
  },
  {
    id: "postgre-sql",
    title: "Postgre Sql",
    icon: <RoadmapIcon src={postgreSqlIcon} alt="PostgreSQL" />,
    link: "/Roadmaps/Postgre-Sql",
    bgColor: "from-blue-800 to-blue-900",
    category: "trending",
    description: "Database management and queries",
  },
  {
    id: "golang",
    title: "Go (Golang)",
    icon: <RoadmapIcon src={golangIcon} alt="Go" />,
    link: "/Roadmaps/Go",
    bgColor: "from-cyan-500 to-blue-500",
    category: "trending",
    description: "Go programming language",
  },
  {
    id: "swift",
    title: "Swift",
    icon: <RoadmapIcon src={swiftIcon} alt="Swift" />,
    link: "/Roadmaps/Swift",
    bgColor: "from-orange-400 to-red-500",
    category: "trending",
    description: "iOS and macOS development",
  },
  {
    id: "cpp",
    title: "C++",
    icon: <RoadmapIcon src={cppIcon} alt="C++" />,
    link: "/Roadmaps/Cpp",
    bgColor: "from-blue-800 to-indigo-900",
    category: "trending",
    description: "C++ programming language",
  },
  {
    id: "C",
    title: "C language",
    icon: <RoadmapIcon src={cIcon} alt="C" />,
    link: "/Roadmaps/C",
    bgColor: "from-blue-800 to-indigo-900",
    category: "trending",
    description: "C programming fundamentals",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    icon: <RoadmapIcon src={kotlinIcon} alt="Kotlin" />,
    link: "/Roadmaps/Kotlin",
    bgColor: "from-purple-500 to-pink-600",
    category: "trending",
    description: "Kotlin for Android development",
  },
  {
    id: "spring",
    title: "Spring",
    icon: <RoadmapIcon src={springIcon} alt="Spring" />,
    link: "/Roadmaps/Spring",
    bgColor: "from-green-600 to-green-800",
    category: "trending",
    description: "Spring framework",
  },
  {
    id: "springboot",
    title: "Springboot",
    icon: <RoadmapIcon src={springbootIcon} alt="Spring Boot" />,
    link: "/Roadmaps/Springboot",
    bgColor: "from-green-500 to-green-600",
    category: "trending",
    description: "Spring Boot framework",
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: <RoadmapIcon src={dataEngineeringIcon} alt="Data Engineering" />,
    link: "/Roadmaps/Data",
    bgColor: "from-green-500 to-green-400",
    category: "trending",
    description: "Data architecture and engineering",
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: <RoadmapIcon src={dataScienceIcon} alt="Data Science" />,
    link: "/Roadmaps/Data-Science",
    bgColor: "from-violet-600 to-purple-700",
    category: "trending",
    description: "Statistical analysis, machine learning, and data insights",
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: <RoadmapIcon src={dataAnalysisIcon} alt="Data Analysis" />,
    link: "/Roadmaps/Data-Analysis",
    bgColor: "from-emerald-500 to-teal-600",
    category: "trending",
    description: "Data visualization, statistical analysis, and business intelligence",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    icon: <RoadmapIcon src={productDesignerIcon} alt="Product Designer" />,
    link: "/Roadmaps/ProductDesigner",
    bgColor: "from-rose-500 to-pink-600",
    category: "trending",
    description: "User research, design thinking, and product strategy",
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: <RoadmapIcon src={databaseIcon} alt="Database" />,
    link: "/Roadmaps/Database",
    bgColor: "from-green-600 to-green-700",
    category: "trending",
    description: "Database in depth",
  },
  {
    id: "excel",
    title: "Excel",
    icon: <RoadmapIcon src={excelIcon} alt="Excel" />,
    link: "/Roadmaps/Excel",
    bgColor: "from-green-500 to-green-400",
    category: "trending",
    description: "Excel expert course",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: <RoadmapIcon src={uiuxIcon} alt="UI/UX" />,
    link: "/Roadmaps/UIUX",
    bgColor: "from-purple-500 to-pink-500",
    category: "trending",
    description: "User interface and experience design",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: <RoadmapIcon src={cloudIcon} alt="Cloud" />,
    link: "/Roadmaps/Cloud",
    bgColor: "from-blue-400 to-cyan-300",
    category: "trending",
    description: "Cloud platforms and services",
  },
  {
    id: "aws",
    title: "AWS",
    icon: <RoadmapIcon src={awsIcon} alt="AWS" />,
    link: "/Roadmaps/AWS",
    bgColor: "from-yellow-400 to-yellow-300",
    category: "trending",
    description: "Amazon Web and services",
  },
  {
    id: "networking",
    title: "Networking",
    icon: <RoadmapIcon src={networkingIcon} alt="Networking" />,
    link: "/Roadmaps/Networking",
    bgColor: "from-blue-500 to-cyan-600",
    category: "trending",
    description: "Network engineering fundamentals",
  },
  {
    id: "video",
    title: "Video Editing",
    icon: <RoadmapIcon src={videoIcon} alt="Video Editing" />,
    link: "/Roadmaps/Video",
    bgColor: "from-red-500 to-pink-500",
    category: "trending",
    description: "Video editing and production",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    icon: <RoadmapIcon src={graphicIcon} alt="Graphic Design" />,
    link: "/Roadmaps/Graphic",
    bgColor: "from-yellow-400 to-amber-500",
    category: "trending",
    description: "Visual design and graphics",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: <RoadmapIcon src={blockchainIcon} alt="Blockchain" />,
    link: "/Roadmaps/Blockchain",
    bgColor: "from-blue-700 to-indigo-800",
    category: "trending",
    description: "Blockchain and cryptocurrency development",
  },
  {
    id: "system",
    title: "System Design",
    icon: <RoadmapIcon src={systemDesignIcon} alt="System Design" />,
    link: "/Roadmaps/System",
    bgColor: "from-emerald-500 to-teal-600",
    category: "trending",
    description: "Large-scale system architecture",
  },
  {
    id: "Linux",
    title: "linux",
    icon: <RoadmapIcon src={linuxIcon} alt="Linux" />,
    link: "/Roadmaps/Linux",
    bgColor: "from-black to-gray-900",
    category: "trending",
    description: "Linux command line OS",
  },
  {
    id: "OS",
    title: "Operating System",
    icon: <RoadmapIcon src={osIcon} alt="Operating System" />,
    link: "/Roadmaps/OS",
    bgColor: "from-gray-800 to-gray-900",
    category: "trending",
    description: "Operating system fundamentals",
  },
  {
    id: "devops",
    title: "DevOps",
    icon: <RoadmapIcon src={devopsIcon} alt="DevOps" />,
    link: "/Roadmaps/Devops",
    bgColor: "from-gray-700 to-gray-900",
    category: "trending",
    description: "DevOps practices and tools",
  },
  {
    id: "dsa",
    title: "DSA",
    icon: <RoadmapIcon src={dsaIcon} alt="DSA" />,
    link: "/Roadmaps/DSA",
    bgColor: "from-gray-700 to-gray-900",
    category: "trending",
    description: "Data Structures and Algorithms",
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    icon: <RoadmapIcon src={cybersecurityIcon} alt="Cybersecurity" />,
    link: "/Roadmaps/CyberSecurity",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "Cybersecurity and information security",
  },
  {
    id: "prompt engineering",
    title: "Prompt Engineering",
    icon: <RoadmapIcon src={promptEngineeringIcon} alt="Prompt Engineering" />,
    link: "/Roadmaps/Prompt",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "Prompt Engineering and applications",
  },
  {
    id: "Internet of Things",
    title: "IOT",
    icon: <RoadmapIcon src={iotIcon} alt="IoT" />,
    link: "/Roadmaps/IOT",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "IOT development and applications",
  },
  {
    id: "game development",
    title: "Game Development",
    icon: <RoadmapIcon src={gameDevIcon} alt="Game Development" />,
    link: "/Roadmaps/Game",
    bgColor: "from-blue-600 to-blue-900",
    category: "trending",
    description: "Game Development and applications",
  },
];

// Utility functions for roadmaps
export const getRoadmapsByCategory = (category) => {
  return roadmapsData.filter((roadmap) => roadmap.category === category);
};

export const getFeaturedRoadmaps = () => {
  return roadmapsData.filter((roadmap) => roadmap.category === "featured");
};

export const getTrendingRoadmaps = () => {
  return roadmapsData.filter((roadmap) => roadmap.category === "trending");
};

export const searchRoadmaps = (query) => {
  if (!query.trim()) return roadmapsData;

  return roadmapsData.filter(
    (roadmap) =>
      roadmap.title.toLowerCase().includes(query.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(query.toLowerCase()),
  );
};

export const getRoadmapById = (id) => {
  return roadmapsData.find((roadmap) => roadmap.id === id);
};