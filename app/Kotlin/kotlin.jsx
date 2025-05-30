
"use client";
import { useState } from "react";
import {
  Book,
  Wrench,
  Lightbulb,
  FileText,
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
  Smartphone,
  Rocket,
  Settings,
  Play,
  Award,
  Users,
  Zap,
} from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Kotlin Roadmap Data Structure
const kotlinRoadmap = [
  {
    id: 1,
    title: "Kotlin Fundamentals & Basics",
    description: "Master the core concepts of Kotlin programming language",
    icon: <Coffee className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    level: "Beginner",
    content: {
      whatToLearn: [
        "Kotlin Syntax & Structure",
        "Variables & Data Types (val, var)",
        "Operators & Expressions",
        "Control Flow (if-else, when, loops)",
        "Functions & Parameters",
        "Nullable Types & Null Safety",
        "Basic Input/Output Operations",
        "String Templates & Manipulation",
      ],
      toolsToUse: [
        "IntelliJ IDEA Community Edition",
        "Kotlin Playground (play.kotlinlang.org)",
        "Android Studio",
        "VS Code with Kotlin Extension",
        "Command Line Tools (kotlinc)",
        "Gradle Build Tool",
      ],
      bestCourses: {
        english: [
          "Kotlin Bootcamp for Programmers - Udacity (Google)",
          "Kotlin Programming Fundamentals - JetBrains Academy",
          "Complete Kotlin Course - Udemy",
          "Kotlin for Beginners - freeCodeCamp",
        ],
        hindi: [
          "Kotlin Complete Course - CodeWithHarry",
          "Kotlin Programming Hindi - Apna College",
          "Kotlin Tutorial Hindi - WsCube Tech",
          "Android Development with Kotlin Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Official Kotlin Documentation (kotlinlang.org)",
        "Kotlin Reference Guide",
        "Android Kotlin Developer Guide",
        "JetBrains Kotlin Tutorial",
      ],
      projectIdeas: [
        "Simple Calculator",
        "Number Guessing Game",
        "Todo List CLI Application",
        "Basic Unit Converter",
        "Word Count Application",
      ],
      practicePlatforms: [
        "JetBrains Academy Kotlin Track",
        "HackerRank Kotlin",
        "Kotlin Koans",
        "Codewars Kotlin Kata",
        "Exercism Kotlin Track",
      ],
    },
  },
  {
    id: 2,
    title: "Object-Oriented Programming in Kotlin",
    description: "Deep dive into OOP concepts and advanced Kotlin features",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    level: "Intermediate",
    content: {
      whatToLearn: [
        "Classes & Objects",
        "Properties & Backing Fields",
        "Inheritance & Method Overriding",
        "Interfaces & Abstract Classes",
        "Data Classes & Sealed Classes",
        "Object Declarations & Companion Objects",
        "Enum Classes",
        "Nested & Inner Classes",
      ],
      toolsToUse: [
        "IntelliJ IDEA Ultimate",
        "Kotlin Compiler",
        "UML Design Tools",
        "Class Diagram Generators",
        "Code Analysis Tools",
        "Refactoring Tools",
      ],
      bestCourses: {
        english: [
          "Object-Oriented Programming in Kotlin - Coursera",
          "Kotlin OOP Masterclass - Udemy",
          "Advanced Kotlin Programming - Pluralsight",
          "Kotlin Design Patterns - LinkedIn Learning",
        ],
        hindi: [
          "Kotlin OOP Complete Hindi - CodeWithHarry",
          "Object Oriented Programming Kotlin Hindi - Apna College",
          "Kotlin Classes & Objects Hindi - WsCube Tech",
          "Advanced Kotlin Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Classes & Objects Documentation",
        "Object-Oriented Design Principles",
        "Kotlin Coding Conventions",
        "Effective Kotlin Best Practices",
      ],
      projectIdeas: [
        "Library Management System",
        "Employee Management Console App",
        "Banking System Simulator",
        "Online Shopping Cart Logic",
        "Student Grade Management System",
      ],
      practicePlatforms: [
        "Object-Oriented Design Problems",
        "Kotlin Coding Challenges",
        "Design Pattern Implementations",
        "Code Review Platforms",
        "GitHub Kotlin Projects",
      ],
    },
  },
  {
    id: 3,
    title: "Collections, Functions & Advanced Concepts",
    description: "Master Kotlin collections, functional programming, and advanced features",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    level: "Intermediate",
    content: {
      whatToLearn: [
        "Collections Framework (List, Set, Map)",
        "Higher-Order Functions & Lambdas",
        "Extension Functions",
        "Scope Functions (let, run, with, apply, also)",
        "Generics & Type Parameters",
        "Delegates & Delegation",
        "Inline Functions",
        "Destructuring Declarations",
      ],
      toolsToUse: [
        "Kotlin Standard Library",
        "Collection Processing Tools",
        "Functional Programming Libraries",
        "Performance Profiling Tools",
        "Memory Analysis Tools",
        "Testing Frameworks",
      ],
      bestCourses: {
        english: [
          "Kotlin Collections & Functional Programming - Udemy",
          "Advanced Kotlin Features - Coursera",
          "Functional Programming with Kotlin - Pluralsight",
          "Kotlin Best Practices - LinkedIn Learning",
        ],
        hindi: [
          "Kotlin Collections Hindi - CodeWithHarry",
          "Functional Programming Kotlin Hindi - Apna College",
          "Advanced Kotlin Features Hindi - WsCube Tech",
          "Kotlin Lambda Functions Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Collections Reference",
        "Higher-Order Functions Guide",
        "Scope Functions Documentation",
        "Kotlin Idioms & Best Practices",
      ],
      projectIdeas: [
        "Data Processing Pipeline",
        "File Analyzer with Collections",
        "Functional Calculator",
        "Text Processing Utility",
        "Custom DSL Implementation",
      ],
      practicePlatforms: [
        "Kotlin Collections Exercises",
        "Functional Programming Challenges",
        "Lambda Expression Problems",
        "Advanced Kotlin Coding Tests",
        "Open Source Contributions",
      ],
    },
  },
  {
    id: 4,
    title: "Coroutines & Concurrency",
    description: "Learn asynchronous programming and concurrency in Kotlin",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    level: "Advanced",
    content: {
      whatToLearn: [
        "Kotlin Coroutines Basics",
        "Suspend Functions",
        "Coroutine Builders (launch, async, runBlocking)",
        "Coroutine Context & Dispatchers",
        "Channels & Flow",
        "Exception Handling in Coroutines",
        "Structured Concurrency",
        "Testing Coroutines",
      ],
      toolsToUse: [
        "Kotlinx Coroutines Library",
        "Coroutine Debugger",
        "Flow Testing Tools",
        "Async Performance Monitors",
        "Threading Analysis Tools",
        "Coroutine Profilers",
      ],
      bestCourses: {
        english: [
          "Kotlin Coroutines by Roman Elizarov - Udemy",
          "Asynchronous Programming with Kotlin - Coursera",
          "Kotlin Coroutines Masterclass - Pluralsight",
          "Advanced Coroutines - JetBrains Academy",
        ],
        hindi: [
          "Kotlin Coroutines Complete Hindi - CodeWithHarry",
          "Async Programming Kotlin Hindi - Apna College",
          "Coroutines & Flow Hindi - WsCube Tech",
          "Multithreading Kotlin Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Coroutines Guide",
        "Flow Documentation",
        "Coroutines Best Practices",
        "Structured Concurrency Guide",
      ],
      projectIdeas: [
        "Async File Downloader",
        "Real-time Data Processing App",
        "Concurrent Web Scraper",
        "Chat Application Backend",
        "Reactive Data Pipeline",
      ],
      practicePlatforms: [
        "Coroutines Coding Challenges",
        "Async Programming Problems",
        "Flow Implementation Exercises",
        "Concurrency Testing Scenarios",
        "Performance Optimization Tasks",
      ],
    },
  },
  {
    id: 5,
    title: "Android Development with Kotlin",
    description: "Build Android applications using Kotlin and modern Android development",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
    level: "Specialized",
    content: {
      whatToLearn: [
        "Android Fundamentals with Kotlin",
        "Activities & Fragments",
        "Jetpack Compose UI",
        "Room Database",
        "ViewModel & LiveData",
        "Navigation Component",
        "Retrofit for API Calls",
        "Material Design Components",
      ],
      toolsToUse: [
        "Android Studio",
        "Android SDK",
        "Firebase",
        "Retrofit",
        "Room Database",
        "Jetpack Compose",
        "Material Design Components",
        "Android Emulator",
      ],
      bestCourses: {
        english: [
          "Android Kotlin Developer Nanodegree - Udacity",
          "Android App Development with Kotlin - Coursera (Google)",
          "Complete Android Development Course - Udemy",
          "Android Jetpack Compose Course - Pluralsight",
        ],
        hindi: [
          "Android Development Complete Course Hindi - Apna College",
          "Kotlin Android App Development Hindi - CodeWithHarry",
          "Android Development Hindi - WsCube Tech",
          "Complete Android Course Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Android Developer Documentation",
        "Jetpack Compose Documentation",
        "Android Architecture Guide",
        "Material Design Guidelines",
      ],
      projectIdeas: [
        "Task Manager App",
        "E-commerce Shopping App",
        "Weather Forecast App",
        "Social Media App",
        "Expense Tracker App",
      ],
      practicePlatforms: [
        "Android Developer Challenges",
        "Google Play Console",
        "GitHub Android Projects",
        "Android Open Source Projects",
        "Google Developer Student Clubs",
      ],
    },
  },
  {
    id: 6,
    title: "Kotlin Multiplatform & Backend Development",
    description: "Explore Kotlin Multiplatform Mobile and server-side development",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-red-500 to-pink-500",
    level: "Advanced",
    content: {
      whatToLearn: [
        "Kotlin Multiplatform Mobile (KMM)",
        "Ktor Framework for Backend",
        "Shared Business Logic",
        "Platform-Specific Implementations",
        "Serialization with kotlinx.serialization",
        "Database Integration",
        "RESTful API Development",
        "Microservices Architecture",
      ],
      toolsToUse: [
        "Kotlin Multiplatform Plugin",
        "Ktor Framework",
        "Exposed ORM",
        "kotlinx.serialization",
        "SQLDelight",
        "Docker",
        "Postman",
        "Gradle Multiplatform",
      ],
      bestCourses: {
        english: [
          "Kotlin Multiplatform Development - JetBrains",
          "Server-Side Development with Kotlin - Udemy",
          "Ktor Framework Complete Course - Pluralsight",
          "Kotlin Backend Development - Coursera",
        ],
        hindi: [
          "Kotlin Multiplatform Hindi - CodeWithHarry",
          "Backend Development Kotlin Hindi - Apna College",
          "Ktor Framework Hindi - WsCube Tech",
          "Server-Side Kotlin Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Multiplatform Documentation",
        "Ktor Framework Guide",
        "kotlinx.serialization Guide",
        "Kotlin Server-Side Development",
      ],
      projectIdeas: [
        "Cross-Platform Mobile App",
        "REST API with Ktor",
        "Microservices Backend",
        "Real-time Chat Server",
        "E-commerce Backend System",
      ],
      practicePlatforms: [
        "KMM Sample Projects",
        "Ktor Examples Repository",
        "Kotlin Backend Challenges",
        "Open Source KMP Projects",
        "Server Development Practice",
      ],
    },
  },
  {
    id: 7,
    title: "Testing, DevOps & Best Practices",
    description: "Master testing frameworks, deployment, and professional development practices",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-500",
    level: "Professional",
    content: {
      whatToLearn: [
        "Unit Testing with JUnit & Mockk",
        "Integration Testing",
        "Test-Driven Development (TDD)",
        "CI/CD with GitHub Actions",
        "Code Quality & Static Analysis",
        "Performance Testing",
        "Docker & Containerization",
        "Deployment Strategies",
      ],
      toolsToUse: [
        "JUnit 5",
        "Mockk",
        "Kotest",
        "GitHub Actions",
        "SonarQube",
        "Docker",
        "Kubernetes",
        "Gradle",
      ],
      bestCourses: {
        english: [
          "Kotlin Testing Best Practices - Udemy",
          "DevOps for Kotlin Developers - Pluralsight",
          "Test-Driven Development with Kotlin - Coursera",
          "Kotlin Code Quality & Performance - LinkedIn Learning",
        ],
        hindi: [
          "Testing in Kotlin Hindi - CodeWithHarry",
          "DevOps Kotlin Hindi - Apna College",
          "Unit Testing Hindi - WsCube Tech",
          "Code Quality Kotlin Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Testing Documentation",
        "Mockk Documentation",
        "GitHub Actions for Kotlin",
        "Docker Kotlin Guide",
      ],
      projectIdeas: [
        "Automated Testing Suite",
        "CI/CD Pipeline Setup",
        "Dockerized Kotlin Application",
        "Performance Monitoring Tool",
        "Code Quality Dashboard",
      ],
      practicePlatforms: [
        "Testing Challenges",
        "DevOps Practice Projects",
        "Open Source Testing",
        "Code Review Platforms",
        "Quality Assurance Tasks",
      ],
    },
  },
  {
    id: 8,
    title: "Career Development & Advanced Projects",
    description: "Build impressive projects and prepare for professional opportunities",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-500",
    level: "Expert",
    content: {
      whatToLearn: [
        "System Design with Kotlin",
        "Architecture Patterns (MVVM, Clean Architecture)",
        "Open Source Contributions",
        "Technical Leadership Skills",
        "Interview Preparation",
        "Portfolio Development",
        "Networking & Community Building",
        "Continuous Learning Strategies",
      ],
      toolsToUse: [
        "GitHub Portfolio",
        "LinkedIn Profile",
        "Technical Blog Platforms",
        "Interview Preparation Tools",
        "System Design Tools",
        "Portfolio Website Builders",
        "Professional Networks",
        "Conference Platforms",
      ],
      bestCourses: {
        english: [
          "System Design Interview Prep - Udemy",
          "Kotlin Developer Career Guide - Coursera",
          "Technical Leadership for Developers - Pluralsight",
          "Android Interview Preparation - LinkedIn Learning",
        ],
        hindi: [
          "Career Development Hindi - CodeWithHarry",
          "Interview Preparation Hindi - Apna College",
          "System Design Hindi - WsCube Tech",
          "Professional Skills Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Kotlin Career Resources",
        "System Design Primer",
        "Open Source Contribution Guide",
        "Technical Interview Handbook",
      ],
      projectIdeas: [
        "Full-Stack E-commerce Platform",
        "Social Media Platform with KMM",
        "Real-time Collaboration Tool",
        "AI-powered Mobile Application",
        "Enterprise-level Backend System",
      ],
      practicePlatforms: [
        "LeetCode for Interviews",
        "System Design Mock Interviews",
        "Open Source Contributions",
        "Professional Networking",
        "Technical Writing Platforms",
      ],
    },
  },
];

const KotlinRoadmapComponent = () => {
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
      title.textContent = "Kotlin Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add Java logo/icon (optional text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent = "☕ Complete Guide to Master Kotlin Programming";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      kotlinRoadmap.forEach((section) => {
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
      pdf.save("Kotlin_Learning_Roadmap.pdf");

      // Show success message
      console.log("Kotlin roadmap PDF generated successfully!");
      alert("kotlin Learning Roadmap PDF downloaded successfully!");

    } catch (error) {
      console.error("Error generating Kotlinroadmap PDF:", error);
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
          Kotlin Learning Roadmap
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
              Welcome to the Kotlin Learning Roadmap
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              This comprehensive roadmap will guide you through your JavaScript development journey, 
                from basic syntax to advanced full-stack applications. JavaScript is the language of the web, 
                powering everything from interactive websites to mobile apps and server-side applications. 
                Each section contains curated resources in both English and Hindi, along with practical 
                projects and hands-on exercises that will help you master Kotlin development and 
                land your dream job as a Kotlin developer.
            </p>
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-4">
            {kotlinRoadmap.map((section) => (
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
              🚀 Start your Kotlin journey today! Remember, consistency is key to
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

  export default KotlinRoadmapComponent;