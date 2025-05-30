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
  Settings,
  Terminal,
  Package,
  Cpu,
  Lock,
  Network,
  Bug,
  Cog,
  Cloud,
  GitBranch,
  Monitor,
  Smartphone
} from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Go Roadmap Data Structure
const goRoadmap = [
  {
    id: 1,
    title: "Go Fundamentals & Setup",
    description: "Get started with Go programming language basics and development environment",
    icon: <Settings className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      whatToLearn: [
        "Installing Go & Setting up GOPATH/GOROOT",
        "Go Workspace & Modules (go.mod)",
        "Variables, Constants & Data Types",
        "Functions & Multiple Return Values",
        "Control Structures (if, for, switch)",
        "Arrays, Slices & Maps",
        "Pointers & Memory Management",
        "Packages & Imports",
      ],
      toolsToUse: [
        "Go Compiler & Runtime",
        "VS Code with Go Extension",
        "GoLand IDE by JetBrains",
        "Go Modules (go mod)",
        "gofmt (Code Formatting)",
        "go vet (Code Analysis)",
      ],
      bestCourses: {
        english: [
          "Learn Go Programming - FreeCodeCamp",
          "Go: The Complete Developer's Guide - Udemy",
          "Go Programming Language - Coursera",
          "Go Crash Course - Traversy Media",
        ],
        hindi: [
          "Go Programming Hindi - CodeWithHarry",
          "Golang Tutorial Hindi - Thapa Technical",
          "Go Complete Course Hindi - Apna College",
          "Go Basics Hindi - Tech With Tim Hindi",
        ],
      },
      documentation: [
        "Official Go Documentation",
        "A Tour of Go (Interactive Tutorial)",
        "Go by Example",
        "Effective Go (Best Practices)",
      ],
      projectIdeas: [
        "Hello World & Basic CLI",
        "Simple Calculator",
        "Temperature Converter",
        "File Reading/Writing Tool",
        "Basic HTTP Client",
      ],
      practicePlatforms: [
        "Go by Example",
        "Exercism Go Track",
        "Codewars Go",
        "HackerRank Go",
      ],
    },
  },
  {
    id: 2,
    title: "Intermediate Go Concepts",
    description: "Master advanced Go features and object-oriented programming concepts",
    icon: <Package className="w-6 h-6" />,
    gradient: "from-cyan-500 to-teal-500",
    content: {
      whatToLearn: [
        "Structs & Methods",
        "Interfaces & Polymorphism",
        "Embedding & Composition",
        "Error Handling Patterns",
        "Goroutines & Concurrency",
        "Channels & Communication",
        "Select Statement",
        "Mutex & Sync Package",
      ],
      toolsToUse: [
        "go test (Testing Framework)",
        "go benchmark (Performance Testing)",
        "Delve (Go Debugger)",
        "pprof (Profiling Tool)",
        "go race (Race Condition Detector)",
        "golint (Linting Tool)",
      ],
      bestCourses: {
        english: [
          "Mastering Go Programming - Udemy",
          "Go Concurrency Patterns - YouTube",
          "Advanced Go Programming - Pluralsight",
          "Go Interface Design - Jon Calhoun",
        ],
        hindi: [
          "Advanced Go Hindi - Hitesh Choudhary",
          "Go Concurrency Hindi - CodeWithHarry",
          "Interface & Struct Hindi - Indian Programming",
          "Go OOP Concepts Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Go Memory Model",
        "Concurrency Patterns in Go",
        "Interface Documentation",
        "Testing Package Guide",
      ],
      projectIdeas: [
        "Concurrent File Processor",
        "Worker Pool Implementation",
        "Chat System with Goroutines",
        "Data Pipeline with Channels",
        "REST API Client Library",
      ],
      practicePlatforms: [
        "Go Concurrency Exercises",
        "Interface Implementation Practice",
        "Goroutines Challenges - Exercism",
        "Concurrent Programming Katas",
      ],
    },
  },
  {
    id: 3,
    title: "Advanced Go Features",
    description: "Explore advanced Go concepts including reflection, generics, and performance optimization",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-teal-500 to-green-500",
    content: {
      whatToLearn: [
        "Generics (Go 1.18+)",
        "Reflection & Runtime Type Info",
        "Context Package & Cancellation",
        "Custom Error Types",
        "Memory Management & GC",
        "Unsafe Package (Advanced)",
        "Build Tags & Conditional Compilation",
        "CGO & C Integration",
      ],
      toolsToUse: [
        "go mod tidy (Dependency Management)",
        "go work (Workspace Mode)",
        "staticcheck (Advanced Linting)",
        "golangci-lint (Meta Linter)",
        "go tool trace (Execution Tracer)",
        "benchstat (Benchmark Analysis)",
      ],
      bestCourses: {
        english: [
          "Go Generics Deep Dive - YouTube",
          "Advanced Go Techniques - Udemy",
          "Go Performance Optimization - Pluralsight",
          "Reflection in Go - Jon Gjengset Style",
        ],
        hindi: [
          "Go Generics Hindi - Hitesh Choudhary",
          "Advanced Go Features Hindi - CodeWithHarry",
          "Performance Tuning Hindi - Indian Coders",
          "Go Reflection Hindi - Tech Gun",
        ],
      },
      documentation: [
        "Go Generics Documentation",
        "Reflect Package Guide",
        "Context Package Documentation",
        "Memory Management Guide",
      ],
      projectIdeas: [
        "Generic Data Structures Library",
        "Custom ORM with Reflection",
        "Performance Monitoring Tool",
        "Plugin System with CGO",
        "Advanced CLI Framework",
      ],
      practicePlatforms: [
        "Advanced Go Challenges",
        "Generic Programming Practice",
        "Performance Optimization Tasks",
        "Reflection Programming Exercises",
      ],
    },
  },
  {
    id: 4,
    title: "Backend Development with Go",
    description: "Build robust backend applications, APIs, and web services using Go",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    content: {
      whatToLearn: [
        "HTTP Server & Routing",
        "Gin or Echo Web Framework",
        "RESTful API Design",
        "JSON Handling & Validation",
        "Middleware & Authentication",
        "Database Integration (SQL/NoSQL)",
        "GORM or SQLx for ORM",
        "WebSocket Implementation",
      ],
      toolsToUse: [
        "Gin Web Framework",
        "Echo Framework",
        "Gorilla Mux (Router)",
        "GORM (ORM)",
        "SQLx (SQL Extension)",
        "JWT-Go (Authentication)",
      ],
      bestCourses: {
        english: [
          "Go Web Development - Jon Calhoun",
          "Building APIs with Go - Udemy",
          "Gin Framework Complete Guide",
          "Go Backend Masterclass - YouTube",
        ],
        hindi: [
          "Go Web Development Hindi - Hitesh Choudhary",
          "API Development Go Hindi - CodeWithHarry",
          "Gin Framework Hindi - Thapa Technical",
          "Backend Go Hindi - Indian Programming",
        ],
      },
      documentation: [
        "Net/HTTP Package Documentation",
        "Gin Framework Documentation",
        "GORM Documentation",
        "Database/SQL Package Guide",
      ],
      projectIdeas: [
        "RESTful Blog API",
        "E-commerce Backend",
        "User Authentication System",
        "Real-time Chat Backend",
        "File Upload Service",
      ],
      practicePlatforms: [
        "API Development Challenges",
        "Backend Architecture Practice",
        "Database Integration Exercises",
        "Web Service Building Tasks",
      ],
    },
  },
  {
    id: 5,
    title: "Database & Data Management",
    description: "Master database operations, ORMs, and data persistence in Go applications",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-emerald-500 to-indigo-500",
    content: {
      whatToLearn: [
        "SQL Database Connections",
        "PostgreSQL, MySQL Integration",
        "GORM Advanced Features",
        "Database Migrations",
        "MongoDB with Go",
        "Redis Caching",
        "Connection Pooling",
        "Database Testing Strategies",
      ],
      toolsToUse: [
        "GORM (Go ORM)",
        "SQLx (SQL Extensions)",
        "migrate (Database Migrations)",
        "go-redis (Redis Client)",
        "mongo-go-driver (MongoDB)",
        "pgx (PostgreSQL Driver)",
      ],
      bestCourses: {
        english: [
          "Go Database Programming - Udemy",
          "GORM Complete Tutorial",
          "Database Design with Go - Pluralsight",
          "Go + PostgreSQL Masterclass",
        ],
        hindi: [
          "Database Go Programming Hindi - Hitesh Choudhary",
          "GORM Tutorial Hindi - CodeWithHarry",
          "MongoDB Go Hindi - Indian Programming",
          "SQL Integration Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "GORM Official Documentation",
        "Database/SQL Package",
        "PostgreSQL Go Driver Docs",
        "MongoDB Go Driver Guide",
      ],
      projectIdeas: [
        "User Management System",
        "Inventory Management API",
        "Social Media Backend",
        "E-learning Platform Backend",
        "Analytics Dashboard API",
      ],
      practicePlatforms: [
        "Database Design Challenges",
        "ORM Implementation Practice",
        "SQL Query Optimization",
        "Data Modeling Exercises",
      ],
    },
  },
  {
    id: 6,
    title: "Microservices & Architecture",
    description: "Design and implement microservices architecture using Go",
    icon: <Network className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
    content: {
      whatToLearn: [
        "Microservices Design Patterns",
        "gRPC & Protocol Buffers",
        "Service Discovery",
        "API Gateway Implementation",
        "Circuit Breaker Pattern",
        "Event-Driven Architecture",
        "Message Queues (RabbitMQ, Kafka)",
        "Distributed Tracing",
      ],
      toolsToUse: [
        "gRPC-Go",
        "Protocol Buffers (protobuf)",
        "Consul (Service Discovery)",
        "NATS (Message Streaming)",
        "Jaeger (Distributed Tracing)",
        "Prometheus (Monitoring)",
      ],
      bestCourses: {
        english: [
          "Microservices with Go - Udemy",
          "gRPC Complete Guide - YouTube",
          "Go Microservices - Pluralsight",
          "Distributed Systems in Go",
        ],
        hindi: [
          "Microservices Go Hindi - Hitesh Choudhary",
          "gRPC Tutorial Hindi - CodeWithHarry",
          "Distributed Systems Hindi - Indian Programming",
          "Architecture Design Hindi - Tech Gun",
        ],
      },
      documentation: [
        "gRPC Go Documentation",
        "Protocol Buffers Guide",
        "Microservices Patterns",
        "Distributed Systems Documentation",
      ],
      projectIdeas: [
        "E-commerce Microservices",
        "Payment Processing System",
        "Order Management Service",
        "Notification Service",
        "API Gateway Implementation",
      ],
      practicePlatforms: [
        "Microservices Design Challenges",
        "gRPC Implementation Practice",
        "Distributed System Exercises",
        "Architecture Design Tasks",
      ],
    },
  },
  {
    id: 7,
    title: "DevOps & Cloud Integration",
    description: "Deploy and manage Go applications in cloud environments with modern DevOps practices",
    icon: <Cloud className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "Docker Containerization",
        "Kubernetes Deployment",
        "CI/CD Pipelines",
        "AWS/GCP/Azure Integration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Load Balancing & Scaling",
        "Security Best Practices",
      ],
      toolsToUse: [
        "Docker & Docker Compose",
        "Kubernetes & Helm",
        "GitHub Actions / GitLab CI",
        "Terraform (IaC)",
        "Prometheus & Grafana",
        "ELK Stack (Logging)",
      ],
      bestCourses: {
        english: [
          "Go + Docker + Kubernetes - Udemy",
          "Cloud Native Go Applications",
          "DevOps with Go - Pluralsight",
          "Go Deployment Strategies",
        ],
        hindi: [
          "DevOps Go Hindi - Hitesh Choudhary",
          "Docker Kubernetes Hindi - CodeWithHarry",
          "Cloud Deployment Hindi - Indian Programming",
          "CI/CD Go Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Docker Go Best Practices",
        "Kubernetes Go Applications",
        "Cloud Provider Go SDKs",
        "Monitoring Go Applications",
      ],
      projectIdeas: [
        "Containerized Web Application",
        "Kubernetes Native App",
        "CI/CD Pipeline Setup",
        "Monitoring Dashboard",
        "Auto-scaling Service",
      ],
      practicePlatforms: [
        "Docker Implementation Challenges",
        "Kubernetes Deployment Practice",
        "CI/CD Pipeline Exercises",
        "Cloud Architecture Tasks",
      ],
    },
  },
  {
    id: 8,
    title: "Testing & Quality Assurance",
    description: "Implement comprehensive testing strategies and maintain code quality in Go",
    icon: <Bug className="w-6 h-6" />,
    gradient: "from-pink-500 to-red-500",
    content: {
      whatToLearn: [
        "Unit Testing with testing package",
        "Table-Driven Tests",
        "Mocking & Test Doubles",
        "Integration Testing",
        "Benchmark Testing",
        "Test Coverage Analysis",
        "End-to-End Testing",
        "Performance Testing",
      ],
      toolsToUse: [
        "Go testing package",
        "Testify (Testing Toolkit)",
        "GoMock (Mocking Framework)",
        "Go Convey (BDD Testing)",
        "Ginkgo & Gomega (BDD)",
        "httptest (HTTP Testing)",
      ],
      bestCourses: {
        english: [
          "Go Testing Complete Guide - Udemy",
          "Test-Driven Development in Go",
          "Go Testing Best Practices - YouTube",
          "Advanced Go Testing Techniques",
        ],
        hindi: [
          "Go Testing Hindi - Hitesh Choudhary",
          "Unit Testing Go Hindi - CodeWithHarry",
          "TDD Go Hindi - Indian Programming",
          "Quality Assurance Hindi - Tech Gun",
        ],
      },
      documentation: [
        "Testing Package Documentation",
        "Go Testing Best Practices",
        "Benchmark Testing Guide",
        "Test Coverage Documentation",
      ],
      projectIdeas: [
        "Comprehensive Test Suite",
        "Mock Service Implementation",
        "Performance Benchmark Suite",
        "API Testing Framework",
        "Test Automation Pipeline",
      ],
      practicePlatforms: [
        "Testing Implementation Challenges",
        "TDD Practice Exercises",
        "Mock Framework Usage",
        "Test Coverage Optimization",
      ],
    },
  },
  {
    id: 9,
    title: "Performance & Optimization",
    description: "Master Go performance optimization, profiling, and memory management",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-red-500 to-orange-500",
    content: {
      whatToLearn: [
        "CPU & Memory Profiling",
        "Goroutine Leak Detection",
        "Memory Allocation Optimization",
        "Garbage Collection Tuning",
        "Benchmark-Driven Development",
        "Caching Strategies",
        "Database Query Optimization",
        "Network Performance Tuning",
      ],
      toolsToUse: [
        "pprof (Profiling Tool)",
        "go tool trace",
        "benchstat (Benchmark Analysis)",
        "go-torch (Flame Graphs)",
        "vegeta (Load Testing)",
        "Apache Bench (Performance Testing)",
      ],
      bestCourses: {
        english: [
          "Go Performance Optimization - Udemy",
          "Profiling Go Applications",
          "High-Performance Go - Pluralsight",
          "Go Memory Management Deep Dive",
        ],
        hindi: [
          "Go Performance Hindi - Hitesh Choudhary",
          "Optimization Techniques Hindi - CodeWithHarry",
          "Memory Management Hindi - Indian Programming",
          "Profiling Go Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Go Performance Tuning Guide",
        "pprof Documentation",
        "Memory Management Guide",
        "Benchmark Testing Documentation",
      ],
      projectIdeas: [
        "High-Performance API",
        "Memory-Efficient Data Processor",
        "Optimized Web Server",
        "Performance Monitoring Tool",
        "Load Testing Framework",
      ],
      practicePlatforms: [
        "Performance Optimization Challenges",
        "Profiling Practice Exercises",
        "Memory Leak Detection Tasks",
        "Benchmark Writing Practice",
      ],
    },
  },
  {
    id: 10,
    title: "Career & Advanced Projects",
    description: "Build production-ready projects and prepare for Go developer career opportunities",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-orange-500 to-yellow-500",
    content: {
      whatToLearn: [
        "System Design with Go",
        "Open Source Contributions",
        "Code Review Best Practices",
        "Technical Leadership",
        "Go Community Engagement",
        "Interview Preparation",
        "Portfolio Development",
        "Continuous Learning Strategies",
      ],
      toolsToUse: [
        "GitHub (Version Control)",
        "Go Modules Publishing",
        "Documentation Tools",
        "Code Quality Tools",
        "Project Management Tools",
        "Community Platforms",
      ],
      bestCourses: {
        english: [
          "Go Interview Preparation - LeetCode",
          "System Design for Go Developers",
          "Go Career Bootcamp",
          "Advanced Go Projects Course",
        ],
        hindi: [
          "Go Job Interview Hindi - CodeWithHarry",
          "System Design Hindi - Indian Programming",
          "Career Guide Hindi - Hitesh Choudhary",
          "Portfolio Building Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Go Career Guide",
        "System Design Resources",
        "Open Source Contribution Guide",
        "Go Community Guidelines",
      ],
      projectIdeas: [
        "Complete Social Media Platform",
        "E-commerce Marketplace",
        "Real-time Collaboration Tool",
        "Distributed File Storage System",
        "Container Orchestration Tool",
      ],
      practicePlatforms: [
        "LeetCode Go Problems",
        "System Design Interview Practice",
        "Open Source Project Contributions",
        "Technical Blog Writing",
      ],
    },
  },
];

const GoRoadmapComponent = () => {
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
        title.textContent = "Golang Learning Roadmap";
        downloadDiv.appendChild(title);

        // Add Java logo/icon (optional text representation)
        const subtitle = document.createElement("p");
        subtitle.style.textAlign = "center";
        subtitle.style.fontSize = "16px";
        subtitle.style.color = "#7f8c8d";
        subtitle.style.marginBottom = "40px";
        subtitle.style.fontStyle = "italic";
        subtitle.textContent = "☕ Complete Guide to Master Golang Programming";
        downloadDiv.appendChild(subtitle);

        // Add roadmap content with improved styling
        goRoadmap.forEach((section) => {
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
        footer.textContent = `Generated on ${new Date().toLocaleDateString()} | Java Learning Roadmap`;
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
        pdf.save("Golang_Learning_Roadmap.pdf");

        // Show success message
        console.log("Golang roadmap PDF generated successfully!");
        alert("Golang Learning Roadmap PDF downloaded successfully!");

      } catch (error) {
        console.error("Error generating Golang roadmap PDF:", error);
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
          Golang Learning Roadmap
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
              Welcome to the Golang Learning Roadmap
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              This comprehensive roadmap will guide you through your Golang development journey, 
                from basic syntax to enterprise-level applications. Java is one of the most popular 
                programming languages, powering everything from mobile apps to large-scale enterprise 
                systems. Each section contains curated resources in both English and Hindi, along with 
                practical projects and hands-on exercises that will help you master Golang development 
                and land your dream job as a Java developer.
            </p>
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-4">
            {goRoadmap.map((section) => (
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
              🚀 Start your JGolang journey today! Remember, consistency is key to
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

  export default GoRoadmapComponent;