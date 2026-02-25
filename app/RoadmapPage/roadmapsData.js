import Image from "next/image";

// Import all official roadmap icons
// Assuming your roadmap-icons folder structure is: roadmaps-icons/[icon-name].svg or .png
import aimlIcon from "./roadmaps-icons/ai.png";
import aiAgentIcon from "./roadmaps-icons/ai-agent.png";
import langchainIcon from "./roadmaps-icons/langchain.svg";
import apiIcon from "./roadmaps-icons/api.png";
import wordpressIcon from "./roadmaps-icons/wordpres.png";
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
import genAiIcon from "./roadmaps-icons/ai.png";
import gitIcon from "./roadmaps-icons/GitHub.png";
import tailwindIcon from "./roadmaps-icons/Tailwind CSS.png";
import productManagerIcon from "./roadmaps-icons/app.png";
import contextIcon from "./roadmaps-icons/system.png";
import electron from "./roadmaps-icons/Electron.png";
import css from "./roadmaps-icons/Css.png";
import html from "./roadmaps-icons/html.png";
import numpy from "./roadmaps-icons/NumPy.png";
import docker from "./roadmaps-icons/Docker.png"
import kubernetes from "./roadmaps-icons/Kubernetes.png"
import pandas from "./roadmaps-icons/Pandas.png"
import solidity from "./roadmaps-icons/Solidity.png"
import flask from "./roadmaps-icons/flask.png"
import fastapi from "./roadmaps-icons/fastapi.png"
import vue from "./roadmaps-icons/Vue.png"
import powerbi from "./roadmaps-icons/powerbi.png"
import testing from "./roadmaps-icons/testing.png"
import matplotlib from "./roadmaps-icons/Matplotlib.png"
import tensorflow from "./roadmaps-icons/TensorFlow.png"
import pytorch from "./roadmaps-icons/PyTorch.png"
import spark from "./roadmaps-icons/spark.png"
import photoshop from "./roadmaps-icons/photoshop.png"
import illustrator from "./roadmaps-icons/illustrator.png"
import canva from "./roadmaps-icons/Canva.png"
import effects from "./roadmaps-icons/after-effects.png"
import capcut from "./roadmaps-icons/capcut-icon.png"
import davinci from "./roadmaps-icons/davinci.png"
import fastify from "./roadmaps-icons/Fastify.png"
import net from "./roadmaps-icons/NET.png"
import automation from "./roadmaps-icons/automation.png"
import tableau  from "./roadmaps-icons/tableau.svg" 
import nginx from "./roadmaps-icons/NGINX.png"
import d3 from "./roadmaps-icons/D3.js.png"
import kafka from "./roadmaps-icons/kafka.png"
import supabase from "./roadmaps-icons/supabase.svg"
import astro from "./roadmaps-icons/Astro.png"
import laravel from "./roadmaps-icons/Laravel.png"
import vector from "./roadmaps-icons/vector.png"
import csharp from "./roadmaps-icons/csharp.png"




// Helper component to render icons consistently
const RoadmapIcon = ({ src, alt }) => (
  <div className="w-full h-full flex items-center justify-center">
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="w-full h-full object-contain"
    />
  </div>
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
    category: "featured",
    description: "Machine Learning, Deep Learning, Neural Networks",
  },
  {
    id: "html",
    title: "Html5",
    icon: <RoadmapIcon src={html} alt="AI & ML" />,
    link: "/Roadmaps/Html",
    category: "featured",
    description: "Building Web Structure",
  },  {
    id: "css",
    title: "Css",
    icon: <RoadmapIcon src={css} alt="AI & ML" />,
    link: "/Roadmaps/Css",
    category: "featured",
    description: "Building modern web interfaces and UI",
  },
  {
    id: "ai agents",
    title: "AI Agents (No code)",
    icon: <RoadmapIcon src={aiAgentIcon} alt="AI Agents" />,
    link: "/Roadmaps/AI-Agent",
    category: "featured",
    description: "No code AI agents and applications",
  },
  {
    id: "ai automation",
    title: "AI Automation",
    icon: <RoadmapIcon src={automation} alt="AI automation" />,
    link: "/Roadmaps/AI-Automation",
    category: "featured",
    description: "AI automation uses machine learning, natural language processing (NLP), and cognitive technologies to handle complex, repetitive tasks—such",
  },
  {
    id: "langchain",
    title: "Langchain",
    icon: <RoadmapIcon src={langchainIcon} alt="Langchain" />,
    link: "/Roadmaps/Langchain",
    category: "featured",
    description: "Langchain Framework and applications",
  },
  {
    id: "api development",
    title: "Api Developer",
    icon: <RoadmapIcon src={apiIcon} alt="API Development" />,
    link: "/Roadmaps/Api",
    category: "featured",
    description: "api development and applications",
  },
  {
    id: "wordpress",
    title: "Wordpress Developer",
    icon: <RoadmapIcon src={wordpressIcon} alt="WordPress" />,
    link: "/Roadmaps/Wordpress",
    category: "featured",
    description: "Wordpress development and applications",
  },
  {
    id: "shopify",
    title: "Shopify Developer",
    icon: <RoadmapIcon src={shopifyIcon} alt="Shopify" />,
    link: "/Roadmaps/Shopify",
    category: "featured",
    description: "Shopify development and applications",
  },
  {
    id: "django",
    title: "Django",
    icon: <RoadmapIcon src={djangoIcon} alt="Django" />,
    link: "/Roadmaps/Django",
    category: "featured",
    description: "Backend development with python",
  },
  {
    id: "flask",
    title: "Flask",
    icon: <RoadmapIcon src={flask} alt="flask" />,
    link: "/Roadmaps/Flask",
    category: "featured",
    description: "ligtweight web application using python",
  },
  {
    id: "fastapi",
    title: "Fast Api",
    icon: <RoadmapIcon src={fastapi} alt="fastapi" />,
    link: "/Roadmaps/Fastapi",
    category: "featured",
    description: "Scalable web application using python",
  },
  {
    id: ".net",
    title: ".Net",
    icon: <RoadmapIcon src={net} alt=".net" />,
    link: "/Roadmaps/.Net",
    category: "featured",
    description: "Build, run, and deploy various applications across Windows, Linux, macOS, iOS, and Android",
  },
  {
    id: "react",
    title: "React",
    icon: <RoadmapIcon src={reactIcon} alt="React" />,
    link: "/Roadmaps/React",
    category: "featured",
    description: "React.js library for building user interfaces",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <RoadmapIcon src={nextjsIcon} alt="Next.js" />,
    link: "/Roadmaps/Next",
    category: "featured",
    description: "Full-stack React framework",
  },
  {
    id: "nestjs",
    title: "Nest.js",
    icon: <RoadmapIcon src={nestjsIcon} alt="Nest.js" />,
    link: "/Roadmaps/Nestjs",
    category: "featured",
    description: "Enterprise standard for node.js backend",
  },
  {
    id: "reactnative",
    title: "React Native",
    icon: <RoadmapIcon src={reactNativeIcon} alt="React Native" />,
    link: "/Roadmaps/Reactnative",
    category: "featured",
    description: "Cross-platform mobile app development",
  },
  {
    id: "software engineer",
    title: "Software Engineer",
    icon: <RoadmapIcon src={softwareArchitectIcon} alt="Software Architect" />,
    link: "/Roadmaps/Software",
    category: "featured",
    description: "Software architect and building applications",
  },
  {
    id: "flutter",
    title: "Flutter",
    icon: <RoadmapIcon src={flutterIcon} alt="Flutter" />,
    link: "/Roadmaps/Flutter",
    category: "featured",
    description: "Cross-platform mobile app development",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Developer",
    icon: <RoadmapIcon src={fullstackIcon} alt="Full-Stack" />,
    link: "/Roadmaps/Full-Stack",
    category: "featured",
    description: "Full-Stack Web development",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <RoadmapIcon src={frontendIcon} alt="Frontend" />,
    link: "/Roadmaps/Frontend",
    category: "featured",
    description: "Frontend development specialization",
  },
  {
    id: "mern",
    title: "Mern Stack",
    icon: <RoadmapIcon src={mernIcon} alt="MERN Stack" />,
    link: "/Roadmaps/Mern",
    category: "featured",
    description: "Mern stack development specialization",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <RoadmapIcon src={backendIcon} alt="Backend" />,
    link: "/Roadmaps/Backend",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "nginx",
    title: "Nginx",
    icon: <RoadmapIcon src={nginx} alt="Nginx" />,
    link: "/Roadmaps/Nginx",
    category: "featured",
    description: "Web server, reverse proxy, load balancer, and HTTP cache",
  },
  
  {
    id: "nodejs",
    title: "Node js",
    icon: <RoadmapIcon src={nodejsIcon} alt="Node.js" />,
    link: "/Roadmaps/Nodejs",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "express js",
    title: "Express js",
    icon: <RoadmapIcon src={expressjsIcon} alt="Express.js" />,
    link: "/Roadmaps/Expressjs",
    category: "featured",
    description: "Server-side development and APIs",
  },
  {
    id: "fastify",
    title: "Fastify",
    icon: <RoadmapIcon src={fastify} alt="fastify" />,
    link: "/Roadmaps/Fastify",
    category: "featured",
    description: "Scalable and efficient backend applications, particularly REST APIs and microservices",
  },
  {
    id: "Electron js",
    title: "Electron js",
    icon: <RoadmapIcon src={electron} alt="Electron.js" />,
    link: "/Roadmaps/Electron",
    category: "featured",
    description: "Desktop app development",
  },
  {
    id: "mongodb",
    title: "Mongo DB",
    icon: <RoadmapIcon src={mongodbIcon} alt="MongoDB" />,
    link: "/Roadmaps/MongoDB",
    category: "featured",
    description: "Cloud Database",
  },
  {
    id: "supabase",
    title: "Supabase",
    icon: <RoadmapIcon src={supabase} alt="supabase" />,
    link: "/Roadmaps/Supabase",
    category: "featured",
    description: "Cloud database, authentication, real-time subscriptions, and storage to build secure, scalable, and full-stack applications without managing backend infrastructure ",
  },
  {
    id: "angular",
    title: "Angular js",
    icon: <RoadmapIcon src={angularIcon} alt="Angular" />,
    link: "/Roadmaps/Angular",
    category: "featured",
    description: "Single page application development",
  },
  {
    id: "astro",
    title: "Astro.js",
    icon: <RoadmapIcon src={astro} alt="Astro" />,
    link: "/Roadmaps/Astro",
    category: "featured",
    description: "Building fast, content-driven websites such as blogs, marketing sites, documentation, and e-commerce platforms",
  },
  {
    id: "vue",
    title: "Vue js",
    icon: <RoadmapIcon src={vue} alt="Vue" />,
    link: "/Roadmaps/Vue",
    category: "featured",
    description: "Single page application development",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: <RoadmapIcon src={javascriptIcon} alt="JavaScript" />,
    link: "/Roadmaps/Javascript",
    category: "featured",
    description: "Modern JavaScript programming",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: <RoadmapIcon src={typescriptIcon} alt="TypeScript" />,
    link: "/Roadmaps/Typescript",
    category: "featured",
    description: "Modern Typescript programming",
  },
  {
    id: "python",
    title: "Python",
    icon: <RoadmapIcon src={pythonIcon} alt="Python" />,
    link: "/Roadmaps/Python",
    category: "trending",
    description: "Python programming language",
  },
  {
    id: "pythonwebdev",
    title: "Python WebDevelopment",
    icon: <RoadmapIcon src={pythonIcon} alt="Python" />,
    link: "/Roadmaps/PythonWebDev",
    category: "trending",
    description: "Web application using python",
  },
  {
    id: "java",
    title: "Java",
    icon: <RoadmapIcon src={javaIcon} alt="Java" />,
    link: "/Roadmaps/Java",
    category: "trending",
    description: "Java programming language",
  },
  {
    id: "java full-stack",
    title: "Java Full-Stack Developer",
    icon: <RoadmapIcon src={javaFullStackIcon} alt="Java Full-Stack" />,
    link: "/Roadmaps/JavaFullStack",
    category: "trending",
    description: "Java Full-Stack Development",
  },
  {
    id: "rust",
    title: "Rust",
    icon: <RoadmapIcon src={rustIcon} alt="Rust" />,
    link: "/Roadmaps/Rust",
    category: "trending",
    description: "Systems programming with Rust",
  },
  {
    id: "ios",
    title: "iOS Development",
    icon: <RoadmapIcon src={iosIcon} alt="iOS" />,
    link: "/Roadmaps/Ios",
    category: "featured",
    description: "Native iOS app development with Swift and UIKit",
  },
  {
    id: "android",
    title: "Android Development",
    icon: <RoadmapIcon src={androidIcon} alt="Android" />,
    link: "/Roadmaps/Android",
    category: "featured",
    description: "Native Android app development with Kotlin and Java",
  },
  {
    id: "php",
    title: "PHP",
    icon: <RoadmapIcon src={phpIcon} alt="PHP" />,
    link: "/Roadmaps/Php",
    category: "trending",
    description: "PHP web development",
  },
  {
    id: "laravel",
    title: "laravel",
    icon: <RoadmapIcon src={laravel} alt="laravel" />,
    link: "/Roadmaps/Laravel",
    category: "trending",
    description: "Web Applications and rest api using php",
  },
  {
    id: "sql",
    title: "SQL",
    icon: <RoadmapIcon src={sqlIcon} alt="SQL" />,
    link: "/Roadmaps/Sql",
    category: "trending",
    description: "Database management and queries",
  },
  
  {
    id: "postgre-sql",
    title: "Postgre Sql",
    icon: <RoadmapIcon src={postgreSqlIcon} alt="PostgreSQL" />,
    link: "/Roadmaps/Postgre-Sql",
    category: "trending",
    description: "Database management and queries",
  },
  {
    id: "golang",
    title: "Go (Golang)",
    icon: <RoadmapIcon src={golangIcon} alt="Go" />,
    link: "/Roadmaps/Go",
    category: "trending",
    description: "Go programming language",
  },
  {
    id: "swift",
    title: "Swift",
    icon: <RoadmapIcon src={swiftIcon} alt="Swift" />,
    link: "/Roadmaps/Swift",
    category: "trending",
    description: "iOS and macOS development",
  },
  {
    id: "cpp",
    title: "C++",
    icon: <RoadmapIcon src={cppIcon} alt="C++" />,
    link: "/Roadmaps/Cpp",
    category: "trending",
    description: "C++ programming language",
  },
  {
    id: "C",
    title: "C language",
    icon: <RoadmapIcon src={cIcon} alt="C" />,
    link: "/Roadmaps/C",
    category: "trending",
    description: "C programming fundamentals",
  },
  {
    id: "C#",
    title: "C# language",
    icon: <RoadmapIcon src={csharp} alt="C" />,
    link: "/Roadmaps/Csharp",
    category: "trending",
    description: "C# programming fundamentals",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    icon: <RoadmapIcon src={kotlinIcon} alt="Kotlin" />,
    link: "/Roadmaps/Kotlin",
    category: "trending",
    description: "Kotlin for Android development",
  },
  {
    id: "spring",
    title: "Spring",
    icon: <RoadmapIcon src={springIcon} alt="Spring" />,
    link: "/Roadmaps/Spring",
    category: "trending",
    description: "Spring framework",
  },
  {
    id: "springboot",
    title: "Springboot",
    icon: <RoadmapIcon src={springbootIcon} alt="Spring Boot" />,
    link: "/Roadmaps/Springboot",
    category: "trending",
    description: "Spring Boot framework",
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: <RoadmapIcon src={dataEngineeringIcon} alt="Data Engineering" />,
    link: "/Roadmaps/Data",
    category: "trending",
    description: "Data architecture and engineering",
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: <RoadmapIcon src={dataScienceIcon} alt="Data Science" />,
    link: "/Roadmaps/Data-Science",
    category: "trending",
    description: "Statistical analysis, machine learning, and data insights",
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: <RoadmapIcon src={dataAnalysisIcon} alt="Data Analysis" />,
    link: "/Roadmaps/Data-Analysis",
    category: "trending",
    description: "Data visualization, statistical analysis, and business intelligence",
  },
  {
    id: "powerbi",
    title: "Power BI",
    icon: <RoadmapIcon src={powerbi} alt="NumPy" />,
    link: "/Roadmaps/Powerbi",
    category: "trending",
    description: "Complex number handling , Data handling",
  },
  
  {
    id: "numpy",
    title: "Numpy",
    icon: <RoadmapIcon src={numpy} alt="NumPy" />,
    link: "/Roadmaps/Numpy",
    category: "trending",
    description: "Business Analytics and data visualization",
  },
  {
    id: "pandas",
    title: "Pandas",
    icon: <RoadmapIcon src={pandas} alt="Pandas" />,
    link: "/Roadmaps/Pandaas",
    category: "trending",
    description: "Flexible data manipulation and analysis",
  },
  {
    id: "matplotlib",
    title: "Matplotlib",
    icon: <RoadmapIcon src={matplotlib} alt="matplotlib" />,
    link: "/Roadmaps/Matplotlib",
    category: "trending",
    description: "Creating high-quality, static, animated, and interactive data visualizations",
  },
  {
    id: "tableau",
    title: "Tableau",
    icon: <RoadmapIcon src={tableau} alt="tableau" />,
    link: "/Roadmaps/Tableau",
    category: "trending",
    description: "Connect, analyze, and visualize data from multiple sources in real-time",
  },
  {
    id: "d3",
    title: "D3.js",
    icon: <RoadmapIcon src={d3} alt="d3" />,
    link: "/Roadmaps/D3",
    category: "trending",
    description: "Producing dynamic, interactive data visualizations in web browsers",
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    icon: <RoadmapIcon src={tensorflow} alt="Tensorflow" />,
    link: "/Roadmaps/Tensorflow",
    category: "trending",
    description: "Build, train, and deploy a wide range of artificial intelligence models",
  },
  {
    id: "pyspark",
    title: "PySpark",
    icon: <RoadmapIcon src={spark} alt="pyspark" />,
    link: "/Roadmaps/Pyspark",
    category: "trending",
    description: "Processng and analyze massive datasets",
  },
  {
    id: "pytorch",
    title: "PyTorch",
    icon: <RoadmapIcon src={pytorch} alt="pytorch" />,
    link: "/Roadmaps/Pytorch",
    category: "trending",
    description: "Deep learning research and production-grade AI systems",
  },

  
  {
    id: "product-designer",
    title: "Product Designer",
    icon: <RoadmapIcon src={productDesignerIcon} alt="Product Designer" />,
    link: "/Roadmaps/ProductDesigner",
    category: "trending",
    description: "User research, design thinking, and product strategy",
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: <RoadmapIcon src={databaseIcon} alt="Database" />,
    link: "/Roadmaps/Database",
    category: "trending",
    description: "Database in depth",
  },
  {
    id: "excel",
    title: "Excel",
    icon: <RoadmapIcon src={excelIcon} alt="Excel" />,
    link: "/Roadmaps/Excel",
    category: "trending",
    description: "Excel expert course",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: <RoadmapIcon src={uiuxIcon} alt="UI/UX" />,
    link: "/Roadmaps/UIUX",
    category: "trending",
    description: "User interface and experience design",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: <RoadmapIcon src={cloudIcon} alt="Cloud" />,
    link: "/Roadmaps/Cloud",
    category: "trending",
    description: "Cloud platforms and services",
  },
  {
    id: "aws",
    title: "AWS",
    icon: <RoadmapIcon src={awsIcon} alt="AWS" />,
    link: "/Roadmaps/AWS",
    category: "trending",
    description: "Amazon Web and services",
  },
  {
    id: "docker",
    title: "Docker",
    icon: <RoadmapIcon src={docker} alt="docker" />,
    link: "/Roadmaps/Docker",
    category: "trending",
    description: "Docker image and Containerization",
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    icon: <RoadmapIcon src={kubernetes} alt="kubernetes" />,
    link: "/Roadmaps/Kubernetes",
    category: "trending",
    description: "Container Orchestration",
  },
  {
    id: "networking",
    title: "Networking",
    icon: <RoadmapIcon src={networkingIcon} alt="Networking" />,
    link: "/Roadmaps/Networking",
    category: "trending",
    description: "Network engineering fundamentals",
  },
  {
    id: "after-effects",
    title: "After Effects",
    icon: <RoadmapIcon src={effects} alt="after-effects" />,
    link: "/Roadmaps/After-Effects",
    category: "trending",
    description: "creating motion graphics, visual effects (VFX), and cinematic titles",
  },
  {
    id: "capcut",
    title: "Capcut",
    icon: <RoadmapIcon src={capcut} alt="capcut" />,
    link: "/Roadmaps/Capcut",
    category: "trending",
    description: "Creating, editing, and enhancing short-form content with features like AI-powered effects",
  },
  {
    id: "davinci",
    title: "DaVinci Resolve",
    icon: <RoadmapIcon src={davinci} alt="davinci" />,
    link: "/Roadmaps/Davinci",
    category: "trending",
    description: "professional video editing, advanced color correction/grading, visual effects (VFX), motion graphics, and audio post-production (Fairlight)",
  },
  {
    id: "video",
    title: "Video Editing",
    icon: <RoadmapIcon src={videoIcon} alt="Video Editing" />,
    link: "/Roadmaps/Video",
    category: "trending",
    description: "Video editing and production",
  },
  {
    id: "canva",
    title: "Canva",
    icon: <RoadmapIcon src={canva} alt="canva" />,
    link: "/Roadmaps/Canva",
    category: "trending",
    description: "create a wide range of visual content, such as social media graphics, presentations and posters without needing advanced design knowledge.",
  },
  {
    id: "photoshop",
    title: "Photoshop",
    icon: <RoadmapIcon src={photoshop} alt="photoshop" />,
    link: "/Roadmaps/Photoshop",
    category: "trending",
    description: "For photo editing and manipulation",
  },
  {
    id: "illustrator",
    title: "Illustrator",
    icon: <RoadmapIcon src={illustrator} alt="illustrator" />,
    link: "/Roadmaps/Illustrator",
    category: "trending",
    description: "Creating scalable vector graphics like logos, icons, illustrations, and typography",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    icon: <RoadmapIcon src={graphicIcon} alt="Graphic Design" />,
    link: "/Roadmaps/Graphic",
    category: "trending",
    description: "Visual design and graphics",
  },
  
  {
    id: "solidity",
    title: "Solidity",
    icon: <RoadmapIcon src={solidity} alt="Blockchain" />,
    link: "/Roadmaps/Solidity",
    category: "trending",
    description: "Smart Contractors & Development",
  },
  
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: <RoadmapIcon src={blockchainIcon} alt="Blockchain" />,
    link: "/Roadmaps/Blockchain",
    category: "trending",
    description: "Blockchain and cryptocurrency development",
  },
  {
    id: "kafka",
    title: "kafka",
    icon: <RoadmapIcon src={kafka} alt="kafka" />,
    link: "/Roadmaps/kafka",
    category: "trending",
    description: "Ingest, process, store, and publish high-volume data streams in real-time",
  },
  {
    id: "system",
    title: "System Design",
    icon: <RoadmapIcon src={systemDesignIcon} alt="System Design" />,
    link: "/Roadmaps/System",
    category: "trending",
    description: "Large-scale system architecture",
  },
  {
    id: "Linux",
    title: "linux",
    icon: <RoadmapIcon src={linuxIcon} alt="Linux" />,
    link: "/Roadmaps/Linux",
    category: "trending",
    description: "Linux command line OS",
  },
  {
    id: "OS",
    title: "Operating System",
    icon: <RoadmapIcon src={osIcon} alt="Operating System" />,
    link: "/Roadmaps/OS",
    category: "trending",
    description: "Operating system fundamentals",
  },
  {
    id: "devops",
    title: "DevOps",
    icon: <RoadmapIcon src={devopsIcon} alt="DevOps" />,
    link: "/Roadmaps/Devops",
    category: "trending",
    description: "DevOps practices and tools",
  },
  {
    id: "dsa",
    title: "DSA",
    icon: <RoadmapIcon src={dsaIcon} alt="DSA" />,
    link: "/Roadmaps/DSA",
    category: "trending",
    description: "Data Structures and Algorithms",
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    icon: <RoadmapIcon src={cybersecurityIcon} alt="Cybersecurity" />,
    link: "/Roadmaps/CyberSecurity",
    category: "trending",
    description: "Cybersecurity and information security",
  },
  {
    id: "prompt engineering",
    title: "Prompt Engineering",
    icon: <RoadmapIcon src={promptEngineeringIcon} alt="Prompt Engineering" />,
    link: "/Roadmaps/Prompt",
    category: "trending",
    description: "Prompt Engineering and applications",
  },
  {
    id: "Internet of Things",
    title: "IOT",
    icon: <RoadmapIcon src={iotIcon} alt="IoT" />,
    link: "/Roadmaps/IOT",
    category: "trending",
    description: "IOT development and applications",
  },
  {
    id: "Software Testing",
    title: "Software Testing",
    icon: <RoadmapIcon src={testing} alt="testing" />,
    link: "/Roadmaps/Software-Tester",
    category: "trending",
    description: "Testing of API & Software",
  },
  {
    id: "game development",
    title: "Game Development",
    icon: <RoadmapIcon src={gameDevIcon} alt="Game Development" />,
    link: "/Roadmaps/Game",
    category: "trending",
    description: "Game Development and applications",
  },
  {
    id: "vector db",
    title: "Vector DB",
    icon: <RoadmapIcon src={vector} alt="Vector DB" />,
    link: "/Roadmaps/Vectordb",
    category: "trending",
    description: "Vector databases are specialized systems designed to store, index, and query high-dimensional vector embeddings, enabling fast semantic similarity search for unstructured data like text, images, and audio",
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: <RoadmapIcon src={genAiIcon} alt="Generative AI" />,
    link: "/Roadmaps/GenAi",
    category: "trending",
    description: "Generative AI models and applications",
  },
  {
    id: "git",
    title: "Git & GitHub",
    icon: <RoadmapIcon src={gitIcon} alt="Git" />,
    link: "/Roadmaps/Git_Github",
    category: "trending",
    description: "Version control and collaboration",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: <RoadmapIcon src={tailwindIcon} alt="Tailwind CSS" />,
    link: "/Roadmaps/Tailwind",
    category: "trending",
    description: "Utility-first CSS framework",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    icon: <RoadmapIcon src={productManagerIcon} alt="Product Manager" />,
    link: "/Roadmaps/Product-Manager",
    category: "trending",
    description: "Product management fundamentals",
  },

  {
    id: "context",
    title: "Context API",
    icon: <RoadmapIcon src={contextIcon} alt="Context API" />,
    link: "/Roadmaps/Context",
    category: "trending",
    description: "React Context API for state management",
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