"use client";
import { useState } from "react";
import {
  Book,
  Code,
  Database,
  Target,
  Trophy,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Moon,
  Sun,
  Cpu,
  Layers,
  Zap,
  Brain,
  Award,
  Briefcase,
} from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// C++ Roadmap Data Structure
const cppRoadmap = [
  {
    id: 1,
    title: "Introduction to C++ Programming",
    description: "Foundation of C++ programming language and basic concepts",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      whatToLearn: [
        "C++ Syntax & Basic Structure",
        "Variables & Data Types",
        "Input/Output Operations (cin, cout)",
        "Operators (Arithmetic, Logical, Bitwise)",
        "Control Flow (if/else, switch, loops)",
        "Functions & Function Overloading",
        "Arrays & Strings",
        "Pointers & References",
        "Dynamic Memory Allocation",
      ],
      toolsToUse: [
        "Visual Studio Code",
        "Code::Blocks",
        "Dev-C++",
        "CLion (JetBrains)",
        "GCC Compiler",
        "MinGW (Windows)",
        "Online IDEs (Replit, OnlineGDB)",
        "Visual Studio Community",
      ],
      bestCourses: {
        english: [
          "C++ Programming Course - freeCodeCamp",
          "C++ Tutorial for Complete Beginners - Udemy",
          "Learn C++ Programming - Codecademy",
          "C++ Fundamentals - Pluralsight",
          "Beginning C++ Programming - Coursera",
        ],
        hindi: [
          "C++ Complete Course - CodeWithHarry",
          "C++ Programming in Hindi - Apna College",
          "C++ Tutorial Hindi - Jenny's Lectures",
          "Complete C++ Course Hindi - Geeky Shows",
          "C++ Programming Hindi - Tech Gun",
        ],
      },
      documentation: [
        "cppreference.com",
        "C++ Reference - cplusplus.com",
        "Microsoft C++ Documentation",
        "GNU GCC Documentation",
        "ISO C++ Standard Documentation",
      ],
      projectIdeas: [
        "Simple Calculator",
        "Number Guessing Game",
        "Temperature Converter",
        "Basic Banking System",
        "Student Grade Calculator",
        "Simple Text Editor",
        "Tic-Tac-Toe Game",
      ],
      practicePlatforms: [
        "HackerRank C++",
        "Codewars",
        "LeetCode (Easy Problems)",
        "GeeksforGeeks Practice",
        "HackerEarth",
      ],
    },
  },
  {
    id: 2,
    title: "Object-Oriented Programming in C++",
    description: "Master OOP concepts and advanced C++ programming paradigms",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "Classes & Objects",
        "Constructors & Destructors",
        "Encapsulation & Data Hiding",
        "Inheritance (Single, Multiple, Multilevel)",
        "Polymorphism (Runtime & Compile-time)",
        "Function Overloading & Overriding",
        "Virtual Functions & Abstract Classes",
        "Friend Functions & Classes",
        "Operator Overloading",
        "Static Members & Functions",
      ],
      toolsToUse: [
        "UML Diagram Tools",
        "Class Diagram Generators",
        "Visual Studio",
        "Qt Creator",
        "Eclipse CDT",
        "Debuggers (GDB, Visual Studio Debugger)",
      ],
      bestCourses: {
        english: [
          "Object Oriented Programming in C++",
          "Advanced C++ Programming - Udemy",
          "C++ OOP Concepts - edX",
          "Intermediate C++ - Coursera",
          "C++ Classes and Objects - Pluralsight",
        ],
        hindi: [
          "C++ OOP Complete Course - CodeWithHarry",
          "Object Oriented Programming Hindi - Apna College",
          "C++ Classes Hindi - Jenny's Lectures",
          "OOP Concepts Hindi - Geeky Shows",
          "Advanced C++ Hindi - Tech With Tim",
        ],
      },
      documentation: [
        "C++ Classes - cppreference",
        "OOP in C++ - GeeksforGeeks",
        "C++ Inheritance Guide",
        "Polymorphism in C++ - Tutorial",
        "Virtual Functions Documentation",
      ],
      projectIdeas: [
        "Library Management System",
        "Employee Management System",
        "Bank Account Management",
        "Vehicle Rental System",
        "Hospital Management System",
        "Inventory Management",
        "Simple Game Engine",
      ],
      practicePlatforms: [
        "LeetCode OOP Problems",
        "HackerRank Object Oriented Programming",
        "CodeChef C++ Practice",
        "InterviewBit C++",
        "GeeksforGeeks OOP Problems",
      ],
    },
  },
  {
    id: 3,
    title: "STL - Standard Template Library",
    description: "Master C++ STL containers, iterators, and algorithms",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    content: {
      whatToLearn: [
        "STL Containers (vector, list, deque, set, map)",
        "Iterators (forward, backward, random access)",
        "STL Algorithms (sort, search, find, transform)",
        "Function Objects & Functors",
        "STL Utility Classes (pair, tuple)",
        "Associative Containers (set, multiset, map, multimap)",
        "Unordered Containers (unordered_set, unordered_map)",
        "STL Strings & String Operations",
        "STL Numeric Algorithms",
      ],
      toolsToUse: [
        "STL Reference Documentation",
        "STL Visualizers",
        "Performance Profilers",
        "Memory Analyzers",
        "Benchmark Tools",
        "STL Debug Mode",
      ],
      bestCourses: {
        english: [
          "C++ STL Complete Guide",
          "Mastering C++ Standard Library",
          "STL Algorithms and Data Structures",
          "Advanced STL Programming",
          "C++ STL Tutorial - GeeksforGeeks",
        ],
        hindi: [
          "C++ STL Complete Course Hindi - CodeWithHarry",
          "STL in C++ Hindi - Apna College",
          "C++ Standard Library Hindi - Luv",
          "STL Tutorial Hindi - Aditya Verma",
          "C++ STL Hindi - TakeUforward",
        ],
      },
      documentation: [
        "STL Reference - cppreference.com",
        "C++ STL - cplusplus.com",
        "STL Containers Guide",
        "STL Algorithms Reference",
        "Iterator Documentation",
      ],
      projectIdeas: [
        "Custom STL Container Implementation",
        "Data Structure Visualizer",
        "Algorithm Performance Analyzer",
        "Text Processing Tool using STL",
        "Graph Algorithms using STL",
        "Database Query Engine",
        "File Processing System",
      ],
      practicePlatforms: [
        "Codeforces STL Problems",
        "AtCoder Beginner Contest",
        "LeetCode Medium Problems",
        "SPOJ Classical Problems",
        "CodeChef STL Practice",
      ],
    },
  },
  {
    id: 4,
    title: "Data Structures & Algorithms using C++",
    description: "Comprehensive DSA concepts with C++ implementation",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      whatToLearn: [
        "Time & Space Complexity (Big O Notation)",
        "Arrays & Dynamic Arrays",
        "Linked Lists (Singly, Doubly, Circular)",
        "Stacks & Queues",
        "Trees (Binary, BST, AVL, Heap)",
        "Graphs (BFS, DFS, Shortest Path)",
        "Sorting Algorithms (Quick, Merge, Heap Sort)",
        "Searching Algorithms (Binary Search, Pattern Matching)",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Backtracking",
        "Divide & Conquer",
      ],
      toolsToUse: [
        "Visualization Tools (VisuAlgo)",
        "Complexity Analyzers",
        "Profiling Tools",
        "Algorithm Visualizers",
        "Performance Benchmarks",
        "Memory Profilers",
      ],
      bestCourses: {
        english: [
          "Data Structures and Algorithms - Coursera",
          "Algorithms Specialization - Stanford",
          "Data Structures & Algorithms in C++",
          "Master the Coding Interview - Udemy",
          "Introduction to Algorithms - MIT",
        ],
        hindi: [
          "DSA Complete Course - CodeWithHarry",
          "Data Structures Hindi - Apna College",
          "Algorithms Hindi - Aditya Verma",
          "DSA in C++ Hindi - Love Babbar",
          "Complete DSA Hindi - TakeUforward (Striver)",
        ],
      },
      documentation: [
        "Algorithm Design Manual",
        "Introduction to Algorithms (CLRS)",
        "Data Structures - GeeksforGeeks",
        "Algorithm Visualization",
        "Competitive Programming Handbook",
      ],
      projectIdeas: [
        "Data Structure Visualization Tool",
        "Algorithm Performance Comparator",
        "Graph Algorithm Simulator",
        "Sorting Algorithm Visualizer",
        "Path Finding Visualizer",
        "Expression Evaluator",
        "Memory Management Simulator",
      ],
      practicePlatforms: [
        "LeetCode",
        "Codeforces",
        "CodeChef",
        "AtCoder",
        "SPOJ",
        "HackerRank",
        "InterviewBit",
        "GeeksforGeeks Practice",
      ],
    },
  },
  {
    id: 5,
    title: "Advanced C++ Concepts",
    description: "Modern C++ features and advanced programming techniques",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600",
    content: {
      whatToLearn: [
        "Templates & Generic Programming",
        "Lambda Expressions & Closures",
        "Smart Pointers (unique_ptr, shared_ptr, weak_ptr)",
        "Move Semantics & Perfect Forwarding",
        "RAII (Resource Acquisition Is Initialization)",
        "Exception Handling & RAII",
        "File I/O & Stream Operations",
        "Multithreading & Concurrency",
        "Regular Expressions",
        "C++11/14/17/20 Features",
        "Memory Management",
        "Design Patterns in C++",
      ],
      toolsToUse: [
        "Modern C++ Compilers (GCC 9+, Clang)",
        "Static Analysis Tools (Clang-Tidy)",
        "Memory Sanitizers (AddressSanitizer)",
        "Thread Sanitizer",
        "Valgrind",
        "Google Test Framework",
        "Boost Libraries",
        "CMake Build System",
      ],
      bestCourses: {
        english: [
          "Modern C++ Programming - Udemy",
          "Advanced C++ Programming Techniques",
          "C++ Concurrency in Action",
          "Effective Modern C++ - Scott Meyers",
          "C++ Templates Complete Guide",
        ],
        hindi: [
          "Advanced C++ Hindi - CodeWithHarry",
          "Modern C++ Features Hindi - Apna College",
          "C++ Templates Hindi - Jenny's Lectures",
          "Multithreading C++ Hindi - Tech With Tim",
          "Advanced Concepts Hindi - Geeky Shows",
        ],
      },
      documentation: [
        "Modern C++ Guidelines",
        "C++ Core Guidelines",
        "Boost Documentation",
        "C++20 Features Guide",
        "Concurrency Documentation",
      ],
      projectIdeas: [
        "Multi-threaded Web Server",
        "Custom Memory Allocator",
        "Template-based Math Library",
        "Concurrent Data Structures",
        "File Compression Tool",
        "Network Programming Library",
        "Game Engine Components",
      ],
      practicePlatforms: [
        "Codeforces (Div 1/2)",
        "TopCoder",
        "AtCoder Regular Contest",
        "Google Code Jam",
        "Meta Hacker Cup",
      ],
    },
  },
  {
    id: 6,
    title: "Competitive Programming",
    description: "Master algorithmic problem solving and competitive coding",
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    content: {
      whatToLearn: [
        "Problem Solving Strategies",
        "Advanced Data Structures (Segment Trees, Fenwick Trees)",
        "Graph Algorithms (Dijkstra, Floyd-Warshall, MST)",
        "String Algorithms (KMP, Z-Algorithm, Suffix Arrays)",
        "Number Theory & Modular Arithmetic",
        "Combinatorics & Probability",
        "Game Theory",
        "Computational Geometry",
        "Network Flow Algorithms",
        "Advanced Dynamic Programming",
      ],
      toolsToUse: [
        "Competitive Programming IDEs",
        "Code Templates",
        "Fast I/O Libraries",
        "Stress Testing Tools",
        "Time Complexity Analyzers",
        "Contest Environment Setup",
      ],
      bestCourses: {
        english: [
          "Competitive Programming Essentials",
          "Algorithms for Competitive Programming",
          "Advanced Data Structures for CP",
          "Mathematical Algorithms",
          "Graph Theory for Competitive Programming",
        ],
        hindi: [
          "Competitive Programming Hindi - Luv",
          "CP Course Hindi - Priyansh Agarwal",
          "Advanced Algorithms Hindi - Kartik Arora",
          "CP Tutorial Hindi - Codechef",
          "Contest Math Hindi - Unacademy",
        ],
      },
      documentation: [
        "Competitive Programming Handbook",
        "USACO Guide",
        "CP-Algorithms",
        "Codeforces Edu Section",
        "AtCoder Library Documentation",
      ],
      projectIdeas: [
        "Contest Problem Setter Tool",
        "Algorithm Visualizer for CP",
        "Competitive Programming Judge",
        "Problem Difficulty Predictor",
        "Contest Performance Analyzer",
        "Code Template Generator",
        "Problem Recommender System",
      ],
      practicePlatforms: [
        "Codeforces",
        "AtCoder",
        "CodeChef",
        "TopCoder",
        "SPOJ",
        "USACO",
        "Google Code Jam",
        "Meta Hacker Cup",
        "IOI Problems",
      ],
    },
  },
  {
    id: 7,
    title: "Final Projects & Portfolio",
    description:
      "Build real-world projects and create a professional portfolio",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-600",
    content: {
      whatToLearn: [
        "Project Planning & Architecture",
        "Version Control with Git",
        "Code Documentation & Comments",
        "Testing & Test-Driven Development",
        "Build Systems (CMake, Make)",
        "Continuous Integration/Deployment",
        "Open Source Contributions",
        "Technical Writing",
        "Code Review Practices",
        "Software Engineering Principles",
      ],
      toolsToUse: [
        "Git & GitHub",
        "CMake",
        "Google Test/Catch2",
        "Doxygen (Documentation)",
        "Valgrind (Memory Debugging)",
        "GDB (GNU Debugger)",
        "Docker",
        "Jenkins/GitHub Actions",
        "Code Coverage Tools",
      ],
      bestCourses: {
        english: [
          "Software Engineering Fundamentals",
          "Git & GitHub Masterclass",
          "C++ Project Development",
          "Open Source Development",
          "Technical Interview Preparation",
        ],
        hindi: [
          "Git GitHub Tutorial Hindi - CodeWithHarry",
          "Software Development Hindi - Apna College",
          "Project Building Hindi - TechWorld with Nana",
          "Open Source Hindi - Kunal Kushwaha",
          "Interview Prep Hindi - Love Babbar",
        ],
      },
      documentation: [
        "Git Documentation",
        "CMake Tutorial",
        "Google Test Guide",
        "GitHub Actions Documentation",
        "C++ Project Structure Guide",
      ],
      projectIdeas: [
        "Custom Database Engine",
        "2D/3D Game Engine",
        "HTTP Web Server",
        "Cryptocurrency Implementation",
        "Operating System Kernel",
        "Compiler/Interpreter",
        "Distributed System Simulator",
        "Machine Learning Library",
        "Network Protocol Implementation",
        "Real-time Chat Application",
      ],
      practicePlatforms: [
        "GitHub",
        "GitLab",
        "Open Source Projects",
        "Hacktoberfest",
        "Google Summer of Code",
        "Microsoft Student Partner",
      ],
    },
  },
];

const CppRoadmapComponent = () => {
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
      // Create a temporary div to render the C++ roadmap content for downloading
      const downloadDiv = document.createElement("div");
      downloadDiv.className = "roadmap-download-content";

      // Improved styles for better PDF output and readability
      downloadDiv.style.padding = "40px";
      downloadDiv.style.color = "#2c3e50";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily =
        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
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
      title.style.borderBottom = "3px solid #00599C"; // C++ blue color
      title.style.paddingBottom = "15px";
      title.textContent = "C++ Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add C++ logo/icon (text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent =
        "⚡ Complete Guide to Master C++ Programming - From Beginner to Expert";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      cppRoadmap.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid";

        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #00599C"; // C++ blue
        header.style.fontSize = "20px";
        header.style.fontWeight = "600";
        header.style.color = "#2c3e50";
        header.style.marginBottom = "20px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);

        // Section description
        const desc = document.createElement("p");
        desc.style.marginBottom = "25px";
        desc.style.fontStyle = "italic";
        desc.style.fontSize = "15px";
        desc.style.color = "#7f8c8d";
        desc.style.lineHeight = "1.7";
        desc.style.padding = "0 10px";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);

        // What to Learn
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

        // Best Courses
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

        // Tools to Use
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

        // Documentation
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

        // Project Ideas
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

        // Practice Platforms
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
      footer.textContent = `Generated on ${new Date().toLocaleDateString()} | Python Learning Roadmap`;
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
        scrollY: 0,
      });

      // Remove the temporary div
      document.body.removeChild(downloadDiv);

      // Create PDF with better settings
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true, // Compress for smaller file size
        precision: 2,
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
      pdf.save("Cpp_Learning_Roadmap.pdf");

      // Optional: Store the downloaded roadmap data (remove localStorage usage for Claude.ai artifacts)
      // Instead, you could show a success message or update UI state
      console.log("C++ roadmap PDF generated successfully!");

      // Show success message
      alert("C++ Learning Roadmap PDF downloaded successfully!");

      // Navigate to Downloads page if router is available
      // router.push('/Downloads'); // Uncomment if using Next.js router
    } catch (error) {
      console.error("Error generating Python roadmap PDF:", error);
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
        <h1 className="text-xl md:text-2xl font-bold">C++ Learning Roadmap</h1>
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
            Welcome to the C++ Learning Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through your C++
            learning journey, from basic syntax to advanced concepts. Each
            section contains curated resources in both English and Hindi, along
            with practical projects and hands-on exercises. Click on any section
            to expand it and explore detailed learning materials, tools, and
            project ideas that will help you master C++ programming.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {cppRoadmap.map((section) => (
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
            🚀 Start your C++ journey today! Remember, consistency is key to
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
};
export default CppRoadmapComponent;
