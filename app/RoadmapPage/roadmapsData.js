import { 
  Brain, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  Cloud, 
  Video, 
  Paintbrush, 
  Blocks, 
  Settings, 
  LayoutGrid, 
  Server, 
  Shield, 
  Code,
  FileCode,
  Terminal,
  Code2,
  Zap,
  GitBranch,
  Cpu,
  Triangle,
  Binary,
  Leaf,
  Layers,
  Box,
  Square,
  PenBox,
  BarChart3,
  TrendingUp,
   Palette,
  Tool
  
  
} from "lucide-react";
import { Prompt } from "next/font/google";

// Roadmaps data configuration
export const roadmapsData = [
  {
    id: "ai",
    title: "AI & ML",
    icon: <Brain className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Aiml",
    bgColor: "from-blue-500 to-indigo-600",
    category: "featured",
    description: "Machine Learning, Deep Learning, Neural Networks"
  },
  {
    id: "ai agents",
    title: "AI Agents (No code)",
    icon: <Brain className="w-5 h-5 text-white" />,
    link: "/Roadmaps/AI-Agent",
    bgColor: "from-blue-700 to-blue-900",
    category: "featured",
    description: "No code AI agents and applications"
  },
  {
    id: "api development",
    title: "Api Developer",
    icon: <Tool className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Api",
    bgColor: "from-red-500 to-red-700",
    category: "featured",
    description: "api development and applications"
  },

  {
    id: "django",
    title: "Django",
    icon: <Code2 className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Django",
    bgColor: "from-green-800 to-green-900",
    category: "featured",
    description: "Backend development with python"
  },
  {
    id: "react",
    title: "React",
    icon: <Globe className="w-5 h-5 text-white" />,
    link: "/Roadmaps/React",
    bgColor: "from-blue-600 to-blue-400",
    category: "featured",
    description: "React.js library for building user interfaces"
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <Triangle className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Next",
    bgColor: "from-gray-800 to-black",
    category: "featured",
    description: "Full-stack React framework"
  },
  {
    id: "nestjs",
    title: "Nest.js",
    icon: <Triangle className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Nestjs",
    bgColor: "from-pink-600 to-pink-700",
    category: "featured",
    description: "Enterprise standard for node.js backend"
  },
  {
    id: "reactnative",
    title: "React Native",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Reactnative",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Cross-platform mobile app development"
  },
  {
    id: "software architect",
    title: "Software Architect",
    icon: <Square className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Software",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Software architecture fundamentals"
  },
  {
    id: "flutter",
    title: "Flutter",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Flutter",
    bgColor: "from-blue-500 to-blue-700",
    category: "featured",
    description: "Cross-platform mobile app development"
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Developer",
    icon: <Globe className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Full-Stack",
    bgColor: "from-blue-500 to-blue-700",
    category: "featured",
    description: "Full-Stack Web development"
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layers className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Frontend",
    bgColor: "from-blue-500 to-cyan-400",
    category: "featured",
    description: "Frontend development specialization"
  },
  {
    id: "mern",
    title: "Mern Stack",
    icon: <Layers className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Mern",
    bgColor: "from-blue-600 to-cyan-500",
    category: "featured",
    description: "Mern stack development specialization"
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Backend",
    bgColor: "from-green-600 to-emerald-700",
    category: "featured",
    description: "Server-side development and APIs"
  },
  {
    id: "nodejs",
    title: "Node js",
    icon: <Server className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Nodejs",
    bgColor: "from-green-400 to-emerald-500",
    category: "featured",
    description: "Server-side development and APIs"
  },
  {
    id: "express js",
    title: "Express js",
    icon: <Box className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Expressjs",
    bgColor: "from-green-400 to-emerald-500",
    category: "featured",
    description: "Server-side development and APIs"
  },
  {
    id: "angular",
    title: "Angular js",
    icon: <Triangle className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Angular",
    bgColor: "from-red-600 to-red-700",
    category: "featured",
    description: "Single page application development"
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: <Code className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Javascript",
    bgColor: "from-yellow-400 to-yellow-600",
    category: "featured",
    description: "Modern JavaScript programming"
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: <Box className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Typescript",
    bgColor: "from-blue-400 to-blue-600",
    category: "featured",
    description: "Modern Typescript programming"
  },
  {
    id: "python",
    title: "Python",
    icon: <Terminal className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Python",
    bgColor: "from-blue-500 to-green-500",
    category: "trending",
    description: "Python programming language"
  },
  {
    id: "java",
    title: "Java",
    icon: <FileCode className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Java",
    bgColor: "from-orange-500 to-red-600",
    category: "trending",
    description: "Java programming language"
  },
  {
    id: "java full-stack",
    title: "Java Full-Stack Developer",
    icon: <FileCode className="w-5 h-5 text-white" />,
    link: "/Roadmaps/JavaFullStack",
    bgColor: "from-orange-400 to-red-300",
    category: "trending",
    description: "Java Full-Stack Development"
  },
  {
    id: "rust",
    title: "Rust",
    icon: <Zap className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Rust",
    bgColor: "from-orange-600 to-red-700",
    category: "trending",
    description: "Systems programming with Rust"
  },
  {
    id: "ios",
    title: "iOS Development",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Ios",
    bgColor: "from-gray-700 to-gray-900",
    category: "featured",
    description: "Native iOS app development with Swift and UIKit"
  },
  {
    id: "android",
    title: "Android Development",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Android",
    bgColor: "from-green-500 to-green-700",
    category: "featured",
    description: "Native Android app development with Kotlin and Java"
  },
  {
    id: "php",
    title: "PHP",
    icon: <Code className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Php",
    bgColor: "from-purple-600 to-blue-600",
    category: "trending",
    description: "PHP web development"
  },
  {
    id: "sql",
    title: "SQL",
    icon: <Database className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Sql",
    bgColor: "from-blue-700 to-indigo-800",
    category: "trending",
    description: "Database management and queries"
  },
  {
    id: "golang",
    title: "Go (Golang)",
    icon: <GitBranch className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Go",
    bgColor: "from-cyan-500 to-blue-500",
    category: "trending",
    description: "Go programming language"
  },
  {
    id: "swift",
    title: "Swift",
    icon: <Triangle className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Swift",
    bgColor: "from-orange-400 to-red-500",
    category: "trending",
    description: "iOS and macOS development"
  },
  {
    id: "cpp",
    title: "C++",
    icon: <Cpu className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Cpp",
    bgColor: "from-blue-800 to-indigo-900",
    category: "trending",
    description: "C++ programming language"
  },
  {
    id: "C",
    title: "C language",
    icon: <Cpu className="w-5 h-5 text-white" />,
    link: "/Roadmaps/C",
    bgColor: "from-blue-800 to-indigo-900",
    category: "trending",
    description: "C programming fundamentals"
  },
  {
    id: "kotlin",
    title: "Kotlin",
    icon: <Binary className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Kotlin",
    bgColor: "from-purple-500 to-pink-600",
    category: "trending",
    description: "Kotlin for Android development"
  },
  {
    id: "spring",
    title: "Spring",
    icon: <Leaf className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Spring",
    bgColor: "from-green-600 to-green-800",
    category: "trending",
    description: "Spring framework"
  },
  {
    id: "springboot",
    title: "Springboot",
    icon: <Leaf className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Springboot",
    bgColor: "from-green-500 to-green-600",
    category: "trending",
    description: "Spring Boot framework"
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: <Database className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Data",
    bgColor: "from-green-500 to-green-400",
    category: "trending",
    description: "Data architecture and engineering"
  },
  // NEW ROADMAPS ADDED HERE
  {
    id: "data-science",
    title: "Data Science",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Data-Science",
    bgColor: "from-violet-600 to-purple-700",
    category: "trending",
    description: "Statistical analysis, machine learning, and data insights"
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Data-Analysis",
    bgColor: "from-emerald-500 to-teal-600",
    category: "trending",
    description: "Data visualization, statistical analysis, and business intelligence"
  },
  {
    id: "product-designer",
    title: "Product Designer",
    icon: <Palette className="w-5 h-5 text-white" />,
    link: "/Roadmaps/ProductDesigner",
    bgColor: "from-rose-500 to-pink-600",
    category: "trending",
    description: "User research, design thinking, and product strategy"
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: <Database className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Database",
    bgColor: "from-green-600 to-green-700",
    category: "trending",
    description: "Database in depth "
  },
  {
    id: "excel",
    title: "Excel",
    icon: <Database className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Excel",
    bgColor: "from-green-500 to-green-400",
    category: "trending",
    description: "Excel expert course"
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: <Layout className="w-5 h-5 text-white" />,
    link: "/Roadmaps/UIUX",
    bgColor: "from-purple-500 to-pink-500",
    category: "trending",
    description: "User interface and experience design"
  },

  {
    id: "cloud",
    title: "Cloud Computing",
    icon: <Cloud className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Cloud",
    bgColor: "from-blue-400 to-cyan-300",
    category: "trending",
    description: "Cloud platforms and services"
  },
  {
    id: "aws",
    title: "AWS",
    icon: <Cloud className="w-5 h-5 text-white" />,
    link: "/Roadmaps/AWS",
    bgColor: "from-yellow-400 to-yellow-300",
    category: "trending",
    description: "Amazon Web and services"
  },
  {
    id: "networking",
    title: "Networking",
    icon: <Globe className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Networking",
    bgColor: "from-blue-500 to-cyan-600",
    category: "trending",
    description: "Network engineering fundamentals"
  },
  {
    id: "video",
    title: "Video Editing",
    icon: <Video className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Video",
    bgColor: "from-red-500 to-pink-500",
    category: "trending",
    description: "Video editing and production"
  },
  {
    id: "graphic",
    title: "Graphic Design",
    icon: <Paintbrush className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Graphic",
    bgColor: "from-yellow-400 to-amber-500",
    category: "trending",
    description: "Visual design and graphics"
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: <Blocks className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Blockchain",
    bgColor: "from-blue-700 to-indigo-800",
    category: "trending",
    description: "Blockchain and cryptocurrency development"
  },
  {
    id: "system",
    title: "System Design",
    icon: <Settings className="w-5 h-5 text-white" />,
    link: "/Roadmaps/System",
    bgColor: "from-emerald-500 to-teal-600",
    category: "trending",
    description: "Large-scale system architecture"
  },
  {
    id: "Linux",
    title: "linux",
    icon: <GitBranch className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Linux",
    bgColor: "from-black to-gray-900",
    category: "trending",
    description: "Linux command line OS"
  },
  {
    id: "OS",
    title: "Operating System",
    icon: <Terminal className="w-5 h-5 text-white" />,
    link: "/Roadmaps/OS",
    bgColor: "from-gray-800 to-gray-900",
    category: "trending",
    description: "Operating system fundamentals"
  },
  {
    id: "devops",
    title: "DevOps",
    icon: <Server className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Devops",
    bgColor: "from-gray-700 to-gray-900",
    category: "trending",
    description: "DevOps practices and tools"
  },
  {
    id: "dsa",
    title: "DSA",
    icon: <LayoutGrid className="w-5 h-5 text-white" />,
    link: "/Roadmaps/DSA",
    bgColor: "from-gray-700 to-gray-900",
    category: "trending",
    description: "Data Structures and Algorithms"
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    icon: <Shield className="w-5 h-5 text-white" />,
    link: "/Roadmaps/CyberSecurity",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "Cybersecurity and information security"
  },
  {
    id: "prompt engineering",
    title: "Prompt Engineering",
    icon: <PenBox className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Prompt",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "Prompt Engineering and applications"
  },
  {
    id: "Internet of Things",
    title: "IOT",
    icon: <Cpu className="w-5 h-5 text-white" />,
    link: "/Roadmaps/IOT",
    bgColor: "from-red-600 to-red-800",
    category: "trending",
    description: "IOT development and applications"
  },
  {
    id: "game development",
    title: "Game Development",
    icon: <Box className="w-5 h-5 text-white" />,
    link: "/Roadmaps/Game",
    bgColor: "from-blue-600 to-blue-900",
    category: "trending",
    description: "Game Development and applications"
  },
];

// Popular search tags
export const popularTags = [
  "AI", 
  "Web", 
  "JavaScript", 
  "Python", 
  "Java", 
  "React", 
  "Next.js", 
  "Backend"
];

// Utility functions for roadmaps
export const getRoadmapsByCategory = (category) => {
  return roadmapsData.filter(roadmap => roadmap.category === category);
};

export const getFeaturedRoadmaps = () => {
  return roadmapsData.filter(roadmap => roadmap.category === "featured");
};

export const getTrendingRoadmaps = () => {
  return roadmapsData.filter(roadmap => roadmap.category === "trending");
};

export const searchRoadmaps = (query) => {
  if (!query.trim()) return roadmapsData;

  return roadmapsData.filter(roadmap =>
    roadmap.title.toLowerCase().includes(query.toLowerCase()) ||
    roadmap.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const getRoadmapById = (id) => {
  return roadmapsData.find(roadmap => roadmap.id === id);
};