
"use client";
import { useState } from "react";
import {
  Book,
  Wrench,
  Lightbulb,
  FileText,
  ExternalLink,
  Code,
  ChevronDown,
  ChevronUp,
  Target,
  Globe,
  Database,
  Bot,
  CircuitBoard,
  Coffee,
  Server,
  Shield,
  Layers,
  Zap,
  Rocket,
  Star,
} from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


// JavaScript Roadmap Data Structure
const jsRoadmap = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming language",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    content: {
      whatToLearn: [
        "Variables & Data Types (let, const, var)",
        "Functions & Arrow Functions",
        "Objects & Arrays",
        "Conditional Statements & Loops",
        "DOM Manipulation",
        "Event Handling",
        "Basic ES6+ Features",
        "Error Handling (try/catch)",
      ],
      toolsToUse: [
        "VS Code with JavaScript Extensions",
        "Chrome DevTools",
        "Node.js Runtime",
        "Live Server Extension",
        "ESLint for Code Quality",
        "Prettier for Code Formatting",
      ],
      bestCourses: {
        english: [
          "JavaScript - The Complete Guide (Maximilian Schwarzmüller) - Udemy",
          "JavaScript30 by Wes Bos - Free",
          "freeCodeCamp JavaScript Course - YouTube",
          "JavaScript.info - Interactive Tutorial",
        ],
        hindi: [
          "JavaScript Complete Course - CodeWithHarry",
          "JavaScript Tutorial Hindi - Thapa Technical",
          "JS Complete Series - Chai aur Code",
          "JavaScript Basics Hindi - Apna College",
        ],
      },
      documentation: [
        "MDN Web Docs - JavaScript",
        "JavaScript.info",
        "W3Schools JavaScript Tutorial",
        "Eloquent JavaScript (Free Book)",
      ],
      projectIdeas: [
        "Interactive Calculator",
        "To-Do List App",
        "Random Quote Generator",
        "Simple Digital Clock",
        "Color Palette Generator",
      ],
      practicePlatforms: [
        "Codewars - JavaScript Kata",
        "HackerRank JavaScript",
        "LeetCode (Easy Problems)",
        "JavaScript30.com",
      ],
    },
  },
  {
    id: 2,
    title: "Intermediate JavaScript",
    description: "Deep dive into advanced concepts and modern JavaScript",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-500 to-purple-500",
    content: {
      whatToLearn: [
        "Closures & Scope",
        "Promises & Async/Await",
        "Prototypes & Inheritance",
        "Higher-Order Functions",
        "Destructuring & Spread Operator",
        "Modules (Import/Export)",
        "Regular Expressions",
        "Local Storage & Session Storage",
      ],
      toolsToUse: [
        "Babel for Transpiling",
        "Webpack Module Bundler",
        "Jest for Testing",
        "Postman for API Testing",
        "JSON Server for Mock APIs",
        "Browser Developer Tools",
      ],
      bestCourses: {
        english: [
          "Advanced JavaScript Concepts - Andrei Neagoie (Udemy)",
          "JavaScript: Understanding the Weird Parts - Anthony Alicea",
          "Deep JavaScript Foundations - Kyle Simpson (Frontend Masters)",
          "Modern JavaScript From The Beginning - Brad Traversy",
        ],
        hindi: [
          "Advanced JavaScript Hindi - Hitesh Choudhary",
          "JavaScript Advanced Concepts - Thapa Technical",
          "Async JavaScript Hindi - CodeWithHarry",
          "ES6+ Features Hindi - Apna College",
        ],
      },
      documentation: [
        "You Don't Know JS (Book Series)",
        "JavaScript Promises - MDN",
        "ES6 Features Guide",
        "JavaScript Design Patterns",
      ],
      projectIdeas: [
        "Weather App with API",
        "Movie Search App",
        "Expense Tracker",
        "Quiz Application",
        "Recipe Finder App",
      ],
      practicePlatforms: [
        "JavaScript Algorithms - freeCodeCamp",
        "Codepen Challenges",
        "Frontend Mentor",
        "JavaScript Quiz - W3Schools",
      ],
    },
  },
  {
    id: 3,
    title: "Advanced JavaScript & Patterns",
    description: "Master complex concepts and design patterns",
    icon: <CircuitBoard className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "Design Patterns (Observer, Module, Singleton)",
        "Functional Programming Concepts",
        "Advanced Async Patterns",
        "Memory Management & Performance",
        "Web APIs (Fetch, Geolocation, etc.)",
        "WebSockets & Real-time Communication",
        "Service Workers & PWA Basics",
        "Advanced DOM Manipulation",
      ],
      toolsToUse: [
        "Chrome Performance Tab",
        "Lighthouse for Auditing",
        "TypeScript (Optional)",
        "Advanced Testing Tools",
        "Performance Monitoring Tools",
        "Code Splitting Tools",
      ],
      bestCourses: {
        english: [
          "JavaScript Design Patterns - Udemy",
          "Advanced JavaScript - Pluralsight",
          "Functional Programming in JavaScript - Frontend Masters",
          "Performance Optimization - Web.dev",
        ],
        hindi: [
          "JavaScript Design Patterns Hindi - Hitesh Choudhary",
          "Advanced JS Concepts Hindi - Thapa Technical",
          "Performance Optimization Hindi - CodeWithHarry",
          "Functional Programming Hindi - Chai aur Code",
        ],
      },
      documentation: [
        "JavaScript Design Patterns - Addy Osmani",
        "Web Performance Guidelines",
        "PWA Documentation - Google",
        "Advanced JavaScript Concepts - MDN",
      ],
      projectIdeas: [
        "Real-time Chat Application",
        "Progressive Web App (PWA)",
        "Advanced Calculator with History",
        "Image Gallery with Lazy Loading",
        "Music Player with Playlists",
      ],
      practicePlatforms: [
        "Advanced JavaScript Challenges",
        "Performance Optimization Tasks",
        "Real-world Project Challenges",
        "Code Review Platforms",
      ],
    },
  },
  {
    id: 4,
    title: "Frontend Frameworks & Libraries",
    description: "Master popular JavaScript frameworks and libraries",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    content: {
      whatToLearn: [
        "React.js Fundamentals",
        "Vue.js or Angular Basics",
        "State Management (Redux, Zustand)",
        "Component Lifecycle",
        "Routing (React Router, Vue Router)",
        "Forms & Validation",
        "CSS-in-JS Solutions",
        "Testing Components",
      ],
      toolsToUse: [
        "Create React App / Vite",
        "Vue CLI / Nuxt.js",
        "Redux DevTools",
        "React Testing Library",
        "Storybook for Components",
        "Styled Components / Emotion",
      ],
      bestCourses: {
        english: [
          "Complete React Developer Course - Andrew Mead",
          "Vue.js Complete Guide - Maximilian Schwarzmüller",
          "Modern React with Redux - Stephen Grider",
          "React & TypeScript - The Practical Guide",
        ],
        hindi: [
          "React.js Complete Course - CodeWithHarry",
          "React Tutorial Hindi - Thapa Technical",
          "Vue.js Hindi Tutorial - Hitesh Choudhary",
          "Redux Complete Guide Hindi - Chai aur Code",
        ],
      },
      documentation: [
        "React Official Documentation",
        "Vue.js Guide",
        "Redux Toolkit Documentation",
        "React Router Documentation",
      ],
      projectIdeas: [
        "E-commerce Shopping Cart",
        "Social Media Dashboard",
        "Task Management Board",
        "Blog Platform with CMS",
        "Real-time Collaboration Tool",
      ],
      practicePlatforms: [
        "React Challenges - Frontend Mentor",
        "Component Design Challenges",
        "React/Vue Project Ideas",
        "Open Source Contributions",
      ],
    },
  },
  {
    id: 5,
    title: "Backend & Full-Stack Development",
    description: "Learn server-side JavaScript and full-stack development",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600",
    content: {
      whatToLearn: [
        "Node.js Fundamentals",
        "Express.js Framework",
        "RESTful API Development",
        "Database Integration (MongoDB, PostgreSQL)",
        "Authentication & Authorization",
        "File Upload & Processing",
        "WebSockets for Real-time Apps",
        "Deployment & DevOps Basics",
      ],
      toolsToUse: [
        "Node.js Runtime",
        "Express.js Framework",
        "MongoDB / PostgreSQL",
        "Postman for API Testing",
        "JWT for Authentication",
        "Socket.io for WebSockets",
        "Docker for Containerization",
      ],
      bestCourses: {
        english: [
          "Complete Node.js Developer Course - Andrew Mead",
          "Node.js, Express, MongoDB - Jonas Schmedtmann",
          "MERN Stack Development - Brad Traversy",
          "API Design & Development - REST & GraphQL",
        ],
        hindi: [
          "Node.js Complete Course - CodeWithHarry",
          "MERN Stack Hindi - Thapa Technical",
          "Express.js Tutorial Hindi - Hitesh Choudhary",
          "MongoDB with Node.js Hindi - Chai aur Code",
        ],
      },
      documentation: [
        "Node.js Official Documentation",
        "Express.js Guide",
        "MongoDB Documentation",
        "JWT Authentication Guide",
      ],
      projectIdeas: [
        "Full-Stack Blog Platform",
        "E-commerce API with Payment",
        "Real-time Chat with Socket.io",
        "Job Board Application",
        "Social Media Clone",
      ],
      practicePlatforms: [
        "HackerRank Node.js",
        "Full-Stack Project Challenges",
        "API Development Challenges",
        "Backend Architecture Problems",
      ],
    },
  },
  {
    id: 6,
    title: "Testing & DevOps",
    description: "Master testing frameworks and deployment practices",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-rose-500 to-pink-600",
    content: {
      whatToLearn: [
        "Unit Testing with Jest",
        "Integration & E2E Testing",
        "Test-Driven Development (TDD)",
        "CI/CD Pipelines",
        "Docker & Containerization",
        "Cloud Deployment (AWS, Vercel, Netlify)",
        "Performance Monitoring",
        "Security Best Practices",
      ],
      toolsToUse: [
        "Jest Testing Framework",
        "Cypress for E2E Testing",
        "GitHub Actions / GitLab CI",
        "Docker & Docker Compose",
        "AWS / Vercel / Netlify",
        "ESLint & Prettier",
        "Husky for Git Hooks",
      ],
      bestCourses: {
        english: [
          "JavaScript Testing Introduction - Kent C. Dodds",
          "Docker & Kubernetes Course",
          "AWS for Developers",
          "Complete DevOps Course",
        ],
        hindi: [
          "Testing in JavaScript Hindi - Hitesh Choudhary",
          "Docker Tutorial Hindi - CodeWithHarry",
          "DevOps Complete Course Hindi - Thapa Technical",
          "AWS Hindi Tutorial - Chai aur Code",
        ],
      },
      documentation: [
        "Jest Documentation",
        "Cypress Testing Guide",
        "Docker Documentation",
        "AWS Developer Guide",
      ],
      projectIdeas: [
        "Automated Testing Suite",
        "CI/CD Pipeline Setup",
        "Dockerized Full-Stack App",
        "Performance Monitoring Dashboard",
        "Security Audit Tool",
      ],
      practicePlatforms: [
        "Testing JavaScript Challenges",
        "DevOps Practice Labs",
        "Cloud Platform Free Tiers",
        "Open Source Testing Projects",
      ],
    },
  },
  {
    id: 7,
    title: "Job Preparation & Interview",
    description: "Prepare for technical interviews and job opportunities",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    content: {
      whatToLearn: [
        "Data Structures & Algorithms in JS",
        "System Design Basics",
        "JavaScript Interview Questions",
        "Coding Challenge Patterns",
        "Portfolio Development",
        "Resume & LinkedIn Optimization",
        "Behavioral Interview Prep",
        "Salary Negotiation",
      ],
      toolsToUse: [
        "LeetCode for Algorithms",
        "GitHub for Portfolio",
        "LinkedIn Profile",
        "Interview Platforms (Pramp, InterviewBit)",
        "Portfolio Website Builders",
        "Mock Interview Tools",
      ],
      bestCourses: {
        english: [
          "JavaScript Interview Questions - Akshay Saini",
          "Cracking the Coding Interview",
          "System Design Interview Prep",
          "Portfolio Development Course",
        ],
        hindi: [
          "JavaScript Interview Questions Hindi - Akshay Saini",
          "DSA in JavaScript Hindi - Striver",
          "System Design Hindi - Gaurav Sen",
          "Job Interview Tips Hindi - CodeWithHarry",
        ],
      },
      documentation: [
        "JavaScript Interview Handbook",
        "Frontend Developer Roadmap",
        "System Design Primer",
        "Technical Resume Guide",
      ],
      projectIdeas: [
        "Portfolio Website",
        "Algorithm Visualization Tool",
        "Interview Practice Platform",
        "Resume Builder Application",
        "Job Tracker Dashboard",
      ],
      practicePlatforms: [
        "LeetCode JavaScript Problems",
        "HackerRank Interview Prep",
        "InterviewBit Practice",
        "Pramp Mock Interviews",
      ],
    },
  },
  {
    id: 8,
    title: "Advanced Topics & Specialization",
    description: "Explore advanced topics and choose your specialization",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-600",
    content: {
      whatToLearn: [
        "GraphQL & Apollo Client",
        "Micro-frontends Architecture",
        "WebAssembly with JavaScript",
        "Progressive Web Apps (PWA)",
        "Web3 & Blockchain Development",
        "Machine Learning with TensorFlow.js",
        "Mobile App Development (React Native)",
        "Desktop Apps (Electron)",
      ],
      toolsToUse: [
        "GraphQL Playground",
        "Apollo Client/Server",
        "Webpack Module Federation",
        "TensorFlow.js",
        "React Native CLI",
        "Electron Framework",
        "Web3.js Library",
      ],
      bestCourses: {
        english: [
          "GraphQL with React Course",
          "React Native Complete Guide",
          "TensorFlow.js Masterclass",
          "Web3 Development Course",
        ],
        hindi: [
          "GraphQL Complete Course Hindi - Hitesh Choudhary",
          "React Native Hindi Tutorial - CodeWithHarry",
          "Web3 Development Hindi - Chai aur Code",
          "Advanced JavaScript Topics Hindi - Thapa Technical",
        ],
      },
      documentation: [
        "GraphQL Documentation",
        "React Native Docs",
        "TensorFlow.js Guide",
        "Web3.js Documentation",
      ],
      projectIdeas: [
        "GraphQL API with React Frontend",
        "Cross-platform Mobile App",
        "ML-powered Web Application",
        "Blockchain DApp",
        "Desktop Application with Electron",
      ],
      practicePlatforms: [
        "GraphQL Challenges",
        "React Native Projects",
        "ML/AI JavaScript Projects",
        "Web3 Development Challenges",
      ],
    },
  },
];

const JavaScriptRoadmapComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState(null);
   const [downloading, setDownloading] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Create a temporary div to render the Java roadmap content for downloading
      const downloadDiv = document.createElement("div");
      downloadDiv.className = "roadmap-download-content";

      // IMPROVED STYLES for better PDF output and readability
      downloadDiv.style.padding = "40px";
      downloadDiv.style.color = "#2c3e50";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
      downloadDiv.style.fontSize = "14px";
      downloadDiv.style.lineHeight = "1.6";
      downloadDiv.style.maxWidth = "800px";
      downloadDiv.style.margin = "0 auto";

      // Add title with better styling
      const title = document.createElement("h1");
      title.style.textAlign = "center";
      title.style.marginBottom = "30px";
      title.style.fontSize = "32px";
      title.style.fontWeight = "700";
      title.style.color = "#2c3e50";
      title.style.borderBottom = "3px solid #f89820"; // Java orange color
      title.style.paddingBottom = "15px";
      title.textContent = "JavaScript Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add Java logo/icon (optional text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent = "☕ Complete Guide to Master JavaScript Programming";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      jsRoadmap.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections

        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #f89820"; // Java orange
        header.style.fontSize = "20px";
        header.style.fontWeight = "600";
        header.style.color = "#2c3e50";
        header.style.marginBottom = "20px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);

        // Section description with better typography
        const desc = document.createElement("p");
        desc.style.marginBottom = "25px";
        desc.style.fontStyle = "italic";
        desc.style.fontSize = "15px";
        desc.style.color = "#7f8c8d";
        desc.style.lineHeight = "1.7";
        desc.style.padding = "0 10px";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);

        // What to Learn with improved styling
        const whatToLearn = document.createElement("div");
        whatToLearn.style.marginBottom = "25px";

        const whatToLearnTitle = document.createElement("h3");
        whatToLearnTitle.style.fontSize = "18px";
        whatToLearnTitle.style.fontWeight = "600";
        whatToLearnTitle.style.color = "#27ae60";
        whatToLearnTitle.style.marginBottom = "12px";
        whatToLearnTitle.style.borderBottom = "2px solid #27ae60";
        whatToLearnTitle.style.paddingBottom = "5px";
        whatToLearnTitle.textContent = "✅ What to Learn";
        whatToLearn.appendChild(whatToLearnTitle);

        const whatToLearnList = document.createElement("ul");
        whatToLearnList.style.paddingLeft = "25px";
        whatToLearnList.style.margin = "15px 0";
        section.content.whatToLearn.forEach((item) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = item;
          whatToLearnList.appendChild(li);
        });
        whatToLearn.appendChild(whatToLearnList);
        sectionDiv.appendChild(whatToLearn);

        // Best Courses with better organization
        const bestCourses = document.createElement("div");
        bestCourses.style.marginBottom = "25px";

        const bestCoursesTitle = document.createElement("h3");
        bestCoursesTitle.style.fontSize = "18px";
        bestCoursesTitle.style.fontWeight = "600";
        bestCoursesTitle.style.color = "#3498db";
        bestCoursesTitle.style.marginBottom = "12px";
        bestCoursesTitle.style.borderBottom = "2px solid #3498db";
        bestCoursesTitle.style.paddingBottom = "5px";
        bestCoursesTitle.textContent = "📚 Best Courses";
        bestCourses.appendChild(bestCoursesTitle);

        // English courses
        const englishTitle = document.createElement("h4");
        englishTitle.style.fontSize = "16px";
        englishTitle.style.fontWeight = "500";
        englishTitle.style.color = "#2c3e50";
        englishTitle.style.marginTop = "15px";
        englishTitle.style.marginBottom = "10px";
        englishTitle.textContent = "In English:";
        bestCourses.appendChild(englishTitle);

        const englishList = document.createElement("ul");
        englishList.style.paddingLeft = "25px";
        englishList.style.margin = "10px 0";
        section.content.bestCourses.english.forEach((course) => {
          const li = document.createElement("li");
          li.style.marginBottom = "6px";
          li.style.fontSize = "13px";
          li.style.lineHeight = "1.5";
          li.style.color = "#34495e";
          li.textContent = course;
          englishList.appendChild(li);
        });
        bestCourses.appendChild(englishList);

        // Hindi courses
        const hindiTitle = document.createElement("h4");
        hindiTitle.style.fontSize = "16px";
        hindiTitle.style.fontWeight = "500";
        hindiTitle.style.color = "#2c3e50";
        hindiTitle.style.marginTop = "15px";
        hindiTitle.style.marginBottom = "10px";
        hindiTitle.textContent = "In Hindi:";
        bestCourses.appendChild(hindiTitle);

        const hindiList = document.createElement("ul");
        hindiList.style.paddingLeft = "25px";
        hindiList.style.margin = "10px 0";
        section.content.bestCourses.hindi.forEach((course) => {
          const li = document.createElement("li");
          li.style.marginBottom = "6px";
          li.style.fontSize = "13px";
          li.style.lineHeight = "1.5";
          li.style.color = "#34495e";
          li.textContent = course;
          hindiList.appendChild(li);
        });
        bestCourses.appendChild(hindiList);
        sectionDiv.appendChild(bestCourses);

        // Tools to Use with better styling
        const tools = document.createElement("div");
        tools.style.marginBottom = "25px";

        const toolsTitle = document.createElement("h3");
        toolsTitle.style.fontSize = "18px";
        toolsTitle.style.fontWeight = "600";
        toolsTitle.style.color = "#f39c12";
        toolsTitle.style.marginBottom = "12px";
        toolsTitle.style.borderBottom = "2px solid #f39c12";
        toolsTitle.style.paddingBottom = "5px";
        toolsTitle.textContent = "🧰 Tools to Use";
        tools.appendChild(toolsTitle);

        const toolsList = document.createElement("ul");
        toolsList.style.paddingLeft = "25px";
        toolsList.style.margin = "15px 0";
        section.content.toolsToUse.forEach((tool) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = tool;
          toolsList.appendChild(li);
        });
        tools.appendChild(toolsList);
        sectionDiv.appendChild(tools);

        // Documentation with better styling
        const docs = document.createElement("div");
        docs.style.marginBottom = "25px";

        const docsTitle = document.createElement("h3");
        docsTitle.style.fontSize = "18px";
        docsTitle.style.fontWeight = "600";
        docsTitle.style.color = "#e74c3c";
        docsTitle.style.marginBottom = "12px";
        docsTitle.style.borderBottom = "2px solid #e74c3c";
        docsTitle.style.paddingBottom = "5px";
        docsTitle.textContent = "📘 Documentation";
        docs.appendChild(docsTitle);

        const docsList = document.createElement("ul");
        docsList.style.paddingLeft = "25px";
        docsList.style.margin = "15px 0";
        section.content.documentation.forEach((doc) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = doc;
          docsList.appendChild(li);
        });
        docs.appendChild(docsList);
        sectionDiv.appendChild(docs);

        // Project Ideas with better styling
        const projects = document.createElement("div");
        projects.style.marginBottom = "25px";

        const projectsTitle = document.createElement("h3");
        projectsTitle.style.fontSize = "18px";
        projectsTitle.style.fontWeight = "600";
        projectsTitle.style.color = "#9b59b6";
        projectsTitle.style.marginBottom = "12px";
        projectsTitle.style.borderBottom = "2px solid #9b59b6";
        projectsTitle.style.paddingBottom = "5px";
        projectsTitle.textContent = "💡 Project Ideas";
        projects.appendChild(projectsTitle);

        const projectsList = document.createElement("ul");
        projectsList.style.paddingLeft = "25px";
        projectsList.style.margin = "15px 0";
        section.content.projectIdeas.forEach((project) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = project;
          projectsList.appendChild(li);
        });
        projects.appendChild(projectsList);
        sectionDiv.appendChild(projects);

        // Practice Platforms with better styling
        const practice = document.createElement("div");
        practice.style.marginBottom = "25px";

        const practiceTitle = document.createElement("h3");
        practiceTitle.style.fontSize = "18px";
        practiceTitle.style.fontWeight = "600";
        practiceTitle.style.color = "#16a085";
        practiceTitle.style.marginBottom = "12px";
        practiceTitle.style.borderBottom = "2px solid #16a085";
        practiceTitle.style.paddingBottom = "5px";
        practiceTitle.textContent = "🏆 Practice Platforms";
        practice.appendChild(practiceTitle);

        const practiceList = document.createElement("ul");
        practiceList.style.paddingLeft = "25px";
        practiceList.style.margin = "15px 0";
        section.content.practicePlatforms.forEach((platform) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = platform;
          practiceList.appendChild(li);
        });
        practice.appendChild(practiceList);
        sectionDiv.appendChild(practice);

        downloadDiv.appendChild(sectionDiv);
      });

      // Add footer with generation date
      const footer = document.createElement("div");
      footer.style.marginTop = "40px";
      footer.style.padding = "20px";
      footer.style.borderTop = "2px solid #ecf0f1";
      footer.style.textAlign = "center";
      footer.style.fontSize = "12px";
      footer.style.color = "#95a5a6";
      footer.textContent = `Generated on ${new Date().toLocaleDateString()} | JavaScript Learning Roadmap`;
      downloadDiv.appendChild(footer);

      // Temporarily add the div to the document to render it
      document.body.appendChild(downloadDiv);

      // IMPROVED html2canvas settings for better quality
      const canvas = await html2canvas(downloadDiv, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        letterRendering: true, // Better text rendering
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: downloadDiv.scrollWidth,
        height: downloadDiv.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      // Remove the temporary div
      document.body.removeChild(downloadDiv);

      // Create PDF with better settings
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true, // Compress for smaller file size
        precision: 2
      });

      // Calculate dimensions for better fitting
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 0.95), // Use JPEG with high quality
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
      );
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          0,
          position,
          imgWidth,
          imgHeight,
        );
        heightLeft -= pageHeight;
      }

      // Save the PDF with Java-specific filename
      pdf.save("JavaScript_Learning_Roadmap.pdf");

      // Show success message
      console.log("JavaScript roadmap PDF generated successfully!");
      alert("JavaScript Learning Roadmap PDF downloaded successfully!");

    } catch (error) {
      console.error("Error generating Java roadmap PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  }; 
  return (
      <div
        className={`min-h-screen ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Sticky Navigation Bar */}
        <nav
          className={`sticky top-0 z-10 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
        >
          <h1 className="text-xl md:text-2xl font-bold">
           JavaScript Learning Roadmap
          </h1>
          <div className="flex items-center space-x-3">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`px-4 py-2 rounded-md text-white ${
                downloading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } transition-colors flex items-center`}
            >
              {downloading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  Download Roadmap
                </>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Introduction */}
          <div
            className={`mb-8 p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md transition-colors duration-300`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Welcome to the JavaScript Learning Roadmap
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              This comprehensive roadmap will guide you through your JavaScript development journey, 
                from basic syntax to advanced full-stack applications. JavaScript is the language of the web, 
                powering everything from interactive websites to mobile apps and server-side applications. 
                Each section contains curated resources in both English and Hindi, along with practical 
                projects and hands-on exercises that will help you master JavaScript development and 
                land your dream job as a JavaScript developer.
            </p>
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-4">
            {jsRoadmap.map((section) => (
              <div
                key={section.id}
                className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                  aria-expanded={openSection === section.id}
                >
                  <div className="flex items-center">
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                        darkMode ? "bg-blue-600" : "bg-blue-500"
                      } text-white font-medium`}
                    >
                      {section.id}
                    </span>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Section Content */}
                {openSection === section.id && (
                  <div
                    className={`px-6 pb-6 pt-2 border-t ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } animate-fadeIn`}
                  >
                    {/* What to Learn */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">✅</span>What to Learn
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {section.content.whatToLearn.map((item, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Courses */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">📚</span>Best Courses
                      </h4>

                      <div className="space-y-4">
                        {/* English Courses */}
                        <div>
                          <h5
                            className={`font-medium mb-2 ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            In English:
                          </h5>
                          <ul className="space-y-1">
                            {section.content.bestCourses.english.map(
                              (course, index) => (
                                <li
                                  key={index}
                                  className={`flex items-start ${
                                    darkMode ? "text-gray-300" : "text-gray-700"
                                  }`}
                                >
                                  <span className="min-w-4 text-blue-500 mr-2">
                                    •
                                  </span>
                                  {course}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Hindi Courses */}
                        <div>
                          <h5
                            className={`font-medium mb-2 ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            In Hindi:
                          </h5>
                          <ul className="space-y-1">
                            {section.content.bestCourses.hindi.map(
                              (course, index) => (
                                <li
                                  key={index}
                                  className={`flex items-start ${
                                    darkMode ? "text-gray-300" : "text-gray-700"
                                  }`}
                                >
                                  <span className="min-w-4 text-blue-500 mr-2">
                                    •
                                  </span>
                                  {course}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Tools to Use */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">🧰</span>Tools to Use
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {section.content.toolsToUse.map((tool, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              darkMode
                                ? "bg-gray-700 text-gray-200"
                                : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Documentation */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">📘</span>Documentation & Resources
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {section.content.documentation.map((resource, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Ideas */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">💡</span>Project Ideas
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {section.content.projectIdeas.map((project, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practice Platforms */}
                    <div>
                      <h4 className="flex items-center text-lg font-medium mb-3">
                        <span className="mr-2">🏆</span>Practice Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {section.content.practicePlatforms.map(
                          (platform, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-sm ${
                                darkMode
                                  ? "bg-green-700 text-green-200"
                                  : "bg-green-200 text-green-800"
                              }`}
                            >
                              {platform}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`mt-12 p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <p
              className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              🚀 Start your JavaScript journey today! Remember, consistency is key to
              mastering programming.
            </p>
          </div>
        </main>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    );
    }

  export default JavaScriptRoadmapComponent;