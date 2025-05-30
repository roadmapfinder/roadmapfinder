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
  Cog
} from "lucide-react";


import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Rust Roadmap Data Structure
const rustRoadmap = [
  {
    id: 1,
    title: "Rust Fundamentals & Setup",
    description: "Get started with Rust programming language basics and environment setup",
    icon: <Settings className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      whatToLearn: [
        "Installing Rust & Cargo",
        "Variables & Mutability",
        "Data Types (Scalar & Compound)",
        "Functions & Control Flow",
        "Comments & Documentation",
        "Basic Input/Output",
        "Cargo Package Manager",
        "Hello World & Basic Programs",
      ],
      toolsToUse: [
        "Rust Compiler (rustc)",
        "Cargo Package Manager",
        "VS Code with rust-analyzer",
        "IntelliJ IDEA with Rust Plugin",
        "Rustup (Rust Toolchain Installer)",
        "Clippy (Rust Linter)",
      ],
      bestCourses: {
        english: [
          "The Rust Programming Language (Official Book) - Free",
          "Rust Programming Course - freeCodeCamp YouTube",
          "Rust Crash Course - Traversy Media",
          "Learn Rust - Codecademy",
        ],
        hindi: [
          "Rust Programming Hindi - CodeWithHarry",
          "Rust Tutorial Hindi - Thapa Technical",
          "Rust Complete Course Hindi - Apna College",
          "Rust Basics Hindi - Tech With Tim Hindi",
        ],
      },
      documentation: [
        "The Rust Programming Language Book",
        "Rust by Example",
        "Rust Reference",
        "Cargo Book",
      ],
      projectIdeas: [
        "Hello World Program",
        "Simple Calculator",
        "Temperature Converter",
        "Number Guessing Game",
        "Basic CLI Tool",
      ],
      practicePlatforms: [
        "Rustlings (Interactive Exercises)",
        "Exercism Rust Track",
        "Codewars Rust",
        "HackerRank Rust",
      ],
    },
  },
  {
    id: 2,
    title: "Ownership & Memory Management",
    description: "Master Rust's unique ownership system and memory safety",
    icon: <Lock className="w-6 h-6" />,
    gradient: "from-red-500 to-pink-500",
    content: {
      whatToLearn: [
        "Ownership Rules & Move Semantics",
        "Borrowing & References",
        "Mutable & Immutable References",
        "Lifetimes Basics",
        "Slice Type",
        "Memory Safety Without Garbage Collection",
        "Stack vs Heap",
        "Drop Trait & RAII",
      ],
      toolsToUse: [
        "Rust Analyzer (VS Code)",
        "Miri (Memory Safety Checker)",
        "Valgrind (Memory Debugging)",
        "AddressSanitizer",
        "Rust Playground",
        "cargo check & cargo clippy",
      ],
      bestCourses: {
        english: [
          "Rust Ownership Explained - Jon Gjengset YouTube",
          "Understanding Rust Ownership - Microsoft Learn",
          "Rust Memory Management - Udemy",
          "Zero To Production In Rust - LukeMathWalker",
        ],
        hindi: [
          "Rust Ownership Hindi - Hitesh Choudhary",
          "Memory Management Rust Hindi - CodeWithHarry",
          "Rust Borrowing Hindi - Indian Coders",
          "Rust Lifetimes Hindi - Tech Gun",
        ],
      },
      documentation: [
        "Understanding Ownership - Rust Book Ch4",
        "References and Borrowing - Rust Book",
        "The Slice Type - Rust Book",
        "Rust Ownership Visualizer",
      ],
      projectIdeas: [
        "String Manipulation Library",
        "Vector Operations Program",
        "Memory Usage Analyzer",
        "Reference Counter Implementation",
        "Simple Buffer Manager",
      ],
      practicePlatforms: [
        "Ownership Exercises - Rustlings",
        "Borrowing Challenges - Exercism",
        "Memory Safety Puzzles",
        "Rust Quiz - dtolnay",
      ],
    },
  },
  {
    id: 3,
    title: "Structs, Enums & Pattern Matching",
    description: "Learn Rust's powerful data structures and pattern matching",
    icon: <Package className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-500",
    content: {
      whatToLearn: [
        "Defining & Instantiating Structs",
        "Method Syntax & Associated Functions",
        "Enums & Variants",
        "Option & Result Enums",
        "Match Control Flow",
        "If Let & While Let",
        "Patterns & Destructuring",
        "Struct Update Syntax",
      ],
      toolsToUse: [
        "rust-analyzer IntelliSense",
        "Serde for Serialization",
        "Debug Derive Macro",
        "Pattern Matching Debugger",
        "Rust Playground",
        "cargo expand (Macro Expansion)",
      ],
      bestCourses: {
        english: [
          "Rust Structs & Enums - The Net Ninja",
          "Pattern Matching in Rust - Jon Gjengset",
          "Rust Data Structures - Udemy",
          "Advanced Rust Patterns - Pluralsight",
        ],
        hindi: [
          "Rust Structs Hindi - CodeWithHarry",
          "Enums & Pattern Matching Hindi - Thapa Technical",
          "Rust Data Types Hindi - Indian Programming",
          "Match Statement Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Structs - Rust Book Ch5",
        "Enums and Pattern Matching - Ch6",
        "Patterns and Matching - Ch18",
        "Option and Result Types Guide",
      ],
      projectIdeas: [
        "Employee Management System",
        "JSON Parser with Enums",
        "Command Line Parser",
        "State Machine Implementation",
        "Card Game with Enums",
      ],
      practicePlatforms: [
        "Struct Exercises - Rustlings",
        "Enum Challenges - Exercism",
        "Pattern Matching Katas",
        "Data Structure Implementations",
      ],
    },
  },
  {
    id: 4,
    title: "Error Handling & Advanced Features",
    description: "Master error handling and explore advanced Rust features",
    icon: <Bug className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-500",
    content: {
      whatToLearn: [
        "Result<T, E> Type & Error Propagation",
        "panic! Macro & Unrecoverable Errors",
        "Custom Error Types",
        "Error Handling Best Practices",
        "Generic Types & Traits",
        "Trait Bounds & Associated Types",
        "Lifetime Parameters",
        "Closures & Functional Programming",
      ],
      toolsToUse: [
        "anyhow (Error Handling)",
        "thiserror (Custom Errors)",
        "eyre (Error Reporting)",
        "color-eyre (Pretty Errors)",
        "tracing (Logging)",
        "log (Logging Facade)",
      ],
      bestCourses: {
        english: [
          "Error Handling in Rust - Jon Gjengset",
          "Rust Generics & Traits - The Net Ninja",
          "Advanced Rust Programming - Udemy",
          "Functional Programming in Rust",
        ],
        hindi: [
          "Error Handling Rust Hindi - Hitesh Choudhary",
          "Generics & Traits Hindi - CodeWithHarry",
          "Advanced Rust Hindi - Indian Coders",
          "Functional Programming Hindi - Tech With Tim",
        ],
      },
      documentation: [
        "Error Handling - Rust Book Ch9",
        "Generic Types & Traits - Ch10",
        "Lifetimes - Rust Book Ch10",
        "Closures - Rust Book Ch13",
      ],
      projectIdeas: [
        "Error Handling Library",
        "File Processing Tool with Error Recovery",
        "Network Client with Retry Logic",
        "Configuration Parser with Validation",
        "Generic Data Structure Library",
      ],
      practicePlatforms: [
        "Error Handling Exercises - Rustlings",
        "Generic Programming Challenges",
        "Trait Implementation Practice",
        "Functional Programming Katas",
      ],
    },
  },
  {
    id: 5,
    title: "Collections & Iterators",
    description: "Work with Rust's powerful collection types and iterator patterns",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    content: {
      whatToLearn: [
        "Vectors & Dynamic Arrays",
        "HashMaps & Key-Value Stores",
        "Strings & String Literals",
        "Iterator Pattern & Lazy Evaluation",
        "Iterator Adaptors & Consumers",
        "Collecting & Reducing",
        "Custom Iterators",
        "Performance Considerations",
      ],
      toolsToUse: [
        "std::collections Module",
        "itertools Crate",
        "rayon (Parallel Iterators)",
        "hashbrown (Faster HashMap)",
        "SmallVec (Stack-allocated Vectors)",
        "criterion (Benchmarking)",
      ],
      bestCourses: {
        english: [
          "Rust Collections & Iterators - Udemy",
          "Iterator Patterns in Rust - Jon Gjengset",
          "Data Structures in Rust - Pluralsight",
          "Performance Programming in Rust",
        ],
        hindi: [
          "Rust Collections Hindi - CodeWithHarry",
          "Iterators & Closures Hindi - Thapa Technical",
          "Data Structures Hindi - Indian Programming",
          "Performance Optimization Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Collections - Rust Book Ch8",
        "Iterators & Closures - Ch13",
        "std::collections Documentation",
        "Iterator Trait Documentation",
      ],
      projectIdeas: [
        "Word Frequency Counter",
        "Data Processing Pipeline",
        "Custom Collection Type",
        "Text Analysis Tool",
        "Performance Benchmark Suite",
      ],
      practicePlatforms: [
        "Iterator Exercises - Rustlings",
        "Collection Challenges - Exercism",
        "Algorithm Implementation Practice",
        "Performance Optimization Tasks",
      ],
    },
  },
  {
    id: 6,
    title: "Concurrency & Async Programming",
    description: "Master concurrent programming and asynchronous patterns in Rust",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    content: {
      whatToLearn: [
        "Threads & Thread Safety",
        "Message Passing with Channels",
        "Shared State Concurrency",
        "Mutex & Arc (Atomic Reference Counting)",
        "Async/Await Syntax",
        "Futures & Executors",
        "Tokio Runtime",
        "Async Traits & Error Handling",
      ],
      toolsToUse: [
        "Tokio (Async Runtime)",
        "async-std (Alternative Runtime)",
        "Rayon (Data Parallelism)",
        "Crossbeam (Lock-free Programming)",
        "Futures Crate",
        "Tower (Service Abstraction)",
      ],
      bestCourses: {
        english: [
          "Async Programming in Rust - Jon Gjengset",
          "Rust Concurrency - Zero To Production",
          "Tokio Tutorial - Official Docs",
          "Concurrent Programming in Rust Book",
        ],
        hindi: [
          "Async Rust Hindi - Hitesh Choudhary",
          "Concurrency Rust Hindi - CodeWithHarry",
          "Tokio Tutorial Hindi - Indian Coders",
          "Parallel Programming Hindi - Tech Gun",
        ],
      },
      documentation: [
        "Concurrency - Rust Book Ch16",
        "Async Programming in Rust Book",
        "Tokio Documentation",
        "Futures Documentation",
      ],
      projectIdeas: [
        "Concurrent Web Scraper",
        "Chat Server with Tokio",
        "Parallel Image Processing",
        "Async File Processor",
        "Multi-threaded Download Manager",
      ],
      practicePlatforms: [
        "Async Exercises - Tokio Tutorial",
        "Concurrency Challenges - Exercism",
        "Thread Safety Practice",
        "Performance Comparison Tasks",
      ],
    },
  },
  {
    id: 7,
    title: "Web Development & APIs",
    description: "Build web applications and APIs using Rust frameworks",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-teal-500 to-cyan-500",
    content: {
      whatToLearn: [
        "HTTP Basics & Web Fundamentals",
        "Actix-Web or Axum Framework",
        "Routing & Middleware",
        "JSON Serialization with Serde",
        "Database Integration (SQLx, Diesel)",
        "Authentication & Authorization",
        "Testing Web Applications",
        "Deployment & Production Setup",
      ],
      toolsToUse: [
        "Actix-Web or Axum",
        "Serde (Serialization)",
        "SQLx or Diesel (Database)",
        "Reqwest (HTTP Client)",
        "Tower (Middleware)",
        "Tracing (Logging)",
      ],
      bestCourses: {
        english: [
          "Zero To Production In Rust - Luca Palmieri",
          "Rust Web Development - Udemy",
          "Actix-Web Tutorial - Official Docs",
          "Building APIs with Rust - Pluralsight",
        ],
        hindi: [
          "Rust Web Development Hindi - Hitesh Choudhary",
          "API Development Rust Hindi - CodeWithHarry",
          "Web Server Rust Hindi - Indian Programming",
          "Database Integration Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Actix-Web Documentation",
        "Axum Documentation",
        "Serde Documentation",
        "SQLx Documentation",
      ],
      projectIdeas: [
        "REST API with Authentication",
        "Blog Platform Backend",
        "E-commerce API",
        "Real-time Chat API",
        "Microservices Architecture",
      ],
      practicePlatforms: [
        "Web Development Challenges",
        "API Design Practice",
        "Integration Testing Exercises",
        "Performance Benchmarking",
      ],
    },
  },
  {
    id: 8,
    title: "Systems Programming & Performance",
    description: "Dive into systems programming and performance optimization",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
    content: {
      whatToLearn: [
        "Unsafe Rust & Raw Pointers",
        "Foreign Function Interface (FFI)",
        "Memory Layout & Optimization",
        "SIMD & Vectorization",
        "Custom Allocators",
        "Embedded Rust Programming",
        "Operating System Interfaces",
        "Performance Profiling & Benchmarking",
      ],
      toolsToUse: [
        "Criterion (Benchmarking)",
        "Perf & Flamegraph",
        "Valgrind & Heaptrack",
        "cargo-asm (Assembly Output)",
        "bindgen (C Bindings)",
        "cc Crate (C/C++ Integration)",
      ],
      bestCourses: {
        english: [
          "Systems Programming in Rust - Jon Gjengset",
          "Unsafe Rust Programming - Udemy",
          "Embedded Rust - The Embedded Rust Book",
          "Performance Engineering with Rust",
        ],
        hindi: [
          "Systems Programming Hindi - Hitesh Choudhary",
          "Unsafe Rust Hindi - Indian Coders",
          "Performance Optimization Hindi - Tech Gun",
          "Embedded Programming Hindi - CodeWithHarry",
        ],
      },
      documentation: [
        "Unsafe Rust - Rust Book Ch19",
        "The Rustonomicon",
        "Embedded Rust Book",
        "Performance Optimization Guide",
      ],
      projectIdeas: [
        "Custom Memory Allocator",
        "Operating System Kernel Module",
        "High-Performance Parser",
        "Embedded IoT Application",
        "C Library Rust Bindings",
      ],
      practicePlatforms: [
        "Systems Programming Challenges",
        "Performance Optimization Tasks",
        "Unsafe Code Review Exercises",
        "Embedded Programming Projects",
      ],
    },
  },
  {
    id: 9,
    title: "Advanced Topics & Ecosystem",
    description: "Explore advanced Rust topics and the broader ecosystem",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    content: {
      whatToLearn: [
        "Procedural Macros & Code Generation",
        "Advanced Trait Usage",
        "Type-Level Programming",
        "WebAssembly with Rust",
        "Blockchain & Cryptography",
        "Game Development with Rust",
        "CLI Tools & System Utilities",
        "Contributing to Open Source",
      ],
      toolsToUse: [
        "wasm-pack (WebAssembly)",
        "Bevy (Game Engine)",
        "clap (CLI Framework)",
        "syn & quote (Macro Development)",
        "cargo-expand (Macro Debugging)",
        "wasm-bindgen (WASM Bindings)",
      ],
      bestCourses: {
        english: [
          "Advanced Rust Programming - Jon Gjengset",
          "WebAssembly with Rust - Mozilla",
          "Game Development in Rust - Bevy Tutorial",
          "Macro Development in Rust - Udemy",
        ],
        hindi: [
          "Advanced Rust Hindi - Hitesh Choudhary",
          "WebAssembly Rust Hindi - Indian Programming",
          "Game Development Hindi - CodeWithHarry",
          "Macro Programming Hindi - Tech With Tim",
        ],
      },
      documentation: [
        "Macros - Rust Book Ch19",
        "WebAssembly Book",
        "Bevy Game Engine Guide",
        "Advanced Traits Guide",
      ],
      projectIdeas: [
        "Procedural Macro Library",
        "WebAssembly Game",
        "Command Line Tool Suite",
        "Blockchain Implementation",
        "Custom Game Engine",
      ],
      practicePlatforms: [
        "Advanced Rust Challenges",
        "Open Source Contributions",
        "Macro Development Practice",
        "WebAssembly Projects",
      ],
    },
  },
  {
    id: 10,
    title: "Career & Professional Development",
    description: "Prepare for Rust developer roles and build your professional profile",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
    content: {
      whatToLearn: [
        "Rust Interview Preparation",
        "System Design with Rust",
        "Code Review Best Practices",
        "Documentation & Technical Writing",
        "Testing Strategies & TDD",
        "Deployment & DevOps for Rust",
        "Building Developer Tools",
        "Community Engagement & Networking",
      ],
      toolsToUse: [
        "GitHub Actions (CI/CD)",
        "Docker & Containerization",
        "cargo-audit (Security)",
        "cargo-tarpaulin (Coverage)",
        "mdBook (Documentation)",
        "Kubernetes for Deployment",
      ],
      bestCourses: {
        english: [
          "Rust Interview Preparation - LeetCode",
          "System Design for Rust Developers",
          "DevOps with Rust Applications",
          "Technical Writing for Developers",
        ],
        hindi: [
          "Rust Job Interview Hindi - CodeWithHarry",
          "System Design Hindi - Indian Programming",
          "DevOps Rust Hindi - Hitesh Choudhary",
          "Portfolio Building Hindi - Coding Blocks",
        ],
      },
      documentation: [
        "Rust Interview Handbook",
        "System Design Primer",
        "Rust Career Guide",
        "Open Source Contribution Guide",
      ],
      projectIdeas: [
        "Complete Full-Stack Application",
        "Open Source Rust Library",
        "Technical Blog Platform",
        "Developer Portfolio Website",
        "System Design Case Study",
      ],
      practicePlatforms: [
        "LeetCode Rust Problems",
        "System Design Interview Practice",
        "Open Source Project Contributions",
        "Technical Writing Platforms",
      ],
    },
  },
];

const RustRoadmapComponent = () => {
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
      // Create a temporary div to render the Python roadmap content for downloading
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
      title.style.borderBottom = "3px solid #3776ab"; // Python blue color
      title.style.paddingBottom = "15px";
      title.textContent = "Rust Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add Python logo/icon (optional text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent = "🐍 Complete Guide to Master Rust Programming";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      rustRoadmap.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections

        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #3776ab"; // Python blue
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
        practiceTitle.textContent = "⚡ Practice Platforms";
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
      footer.textContent = `Generated on ${new Date().toLocaleDateString()} | Rust Learning Roadmap`;
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

      // Save the PDF with Python-specific filename
      pdf.save("Rust_Learning_Roadmap.pdf");

      // Optional: Store the downloaded roadmap data (remove localStorage usage for Claude.ai artifacts)
      // Instead, you could show a success message or update UI state
      console.log("Rust roadmap PDF generated successfully!");

      // Show success message
      alert("Rust Learning Roadmap PDF downloaded successfully!");

      // Navigate to Downloads page if router is available
      // router.push('/Downloads'); // Uncomment if using Next.js router

    } catch (error) {
      console.error("Error generating Rust roadmap PDF:", error);
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
        <h1 className="text-xl md:text-2xl font-bold flex items-center">
          <span className="mr-2">🦀</span>
          Rust Learning Roadmap
        </h1>
        <div className="flex items-center space-x-3">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-4 py-2 rounded-md text-white ${
              downloading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700"
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
          <h2 className="text-xl md:text-2xl font-semibold mb-3 flex items-center">
            <span className="mr-2">🦀</span>
            Welcome to the Rust Learning Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through your Rust
            learning journey, from basic syntax to advanced concepts. Each
            section contains curated resources in both English and Hindi, along
            with practical projects and hands-on exercises. Click on any section
            to expand it and explore detailed learning materials, tools, and
            project ideas that will help you master Rust programming.
          </p>
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-4">
          {rustRoadmap.map((section) => (
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
            🚀 Start your Rust journey today! Remember, consistency is key to
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
          export default RustRoadmapComponent;