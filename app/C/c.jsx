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
  Terminal,
  Settings,
  Globe,
  Users,
} from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// C Programming Roadmap Data Structure
const cRoadmap = [
  {
    id: 1,
    title: "Beginner Stage - C Basics",
    description:
      "Foundation of C programming language and fundamental concepts",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      whatToLearn: [
        "C Programming Introduction & History",
        "Setting up Development Environment",
        "C Syntax & Basic Structure",
        "Variables & Data Types (int, float, char, double)",
        "Constants & Literals",
        "Input/Output Operations (printf, scanf)",
        "Operators (Arithmetic, Relational, Logical, Bitwise)",
        "Control Flow Statements (if/else, switch-case)",
        "Loops (for, while, do-while)",
        "Functions & Function Parameters",
        "Local vs Global Variables",
        "Storage Classes (auto, static, extern, register)",
      ],
      toolsToUse: [
        "Code::Blocks IDE",
        "Visual Studio Code with C/C++ Extension",
        "Dev-C++",
        "GCC Compiler (MinGW for Windows)",
        "Turbo C++ (Legacy)",
        "CLion (JetBrains)",
        "Sublime Text with C Build System",
        "Online Compilers (OnlineGDB, Programiz)",
      ],
      bestCourses: {
        english: [
          "C Programming Tutorial - freeCodeCamp",
          "C Programming Course - Codecademy",
          "Learn C Programming - edX MIT",
          "C Programming Fundamentals - Coursera",
          "Programming in C - Udemy",
          "C Programming Bootcamp - The Odin Project",
        ],
        hindi: [
          "C Programming Complete Course - CodeWithHarry",
          "C Language Tutorial Hindi - Apna College",
          "C Programming Hindi - Jenny's Lectures",
          "Complete C Course Hindi - Geeky Shows",
          "C Tutorial Hindi - MySirG.com",
          "C Programming Hindi - Tech Gun",
        ],
      },
      documentation: [
        "C Reference - cppreference.com",
        "C Programming - GeeksforGeeks",
        "GNU C Library Documentation",
        "C Programming - Tutorialspoint",
        "C Language Reference - Microsoft Docs",
        "The C Programming Language Book (K&R)",
      ],
      projectIdeas: [
        "Simple Calculator (Basic Operations)",
        "Temperature Converter (Celsius/Fahrenheit)",
        "Number Guessing Game",
        "Simple Interest Calculator",
        "Grade Calculator for Students",
        "Basic Menu-Driven Program",
        "Prime Number Checker",
        "Factorial Calculator",
        "Fibonacci Series Generator",
        "Simple ATM Simulator",
      ],
      practicePlatforms: [
        "HackerRank C Domain",
        "GeeksforGeeks Practice",
        "Programiz C Examples",
        "W3Schools C Exercises",
        "Coding Bat (C Problems)",
        "Practice.GeeksforGeeks.org",
      ],
    },
  },
  {
    id: 2,
    title: "Intermediate Stage - Pointers, Arrays, Strings & Memory",
    description:
      "Advanced C concepts focusing on memory management and data structures",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "Arrays (1D and 2D Arrays)",
        "Pointers & Pointer Arithmetic",
        "Relationship between Arrays and Pointers",
        "Dynamic Memory Allocation (malloc, calloc, realloc, free)",
        "Strings and String Functions (strcpy, strlen, strcat, strcmp)",
        "Pointer to Pointer (Double Pointers)",
        "Function Pointers",
        "Structures and Unions",
        "Nested Structures & Array of Structures",
        "Typedef and Enum",
        "Bitwise Operations & Bit Manipulation",
        "Preprocessor Directives (#define, #include, #ifdef)",
        "Header Files Creation",
        "Command Line Arguments",
      ],
      toolsToUse: [
        "Valgrind (Memory Leak Detection)",
        "GDB Debugger",
        "AddressSanitizer (Memory Error Detection)",
        "Static Analysis Tools (Cppcheck)",
        "Memory Profilers",
        "Hex Editors for Memory Analysis",
        "Visual Studio Debugger",
        "DDD (Data Display Debugger)",
      ],
      bestCourses: {
        english: [
          "Pointers in C Programming - Udemy",
          "Advanced C Programming - Coursera",
          "C Programming: Pointers and Memory Management",
          "Data Structures in C - edX",
          "C Programming: Advanced Topics",
          "Memory Management in C - Pluralsight",
        ],
        hindi: [
          "C Pointers Complete Tutorial - CodeWithHarry",
          "Arrays and Pointers Hindi - Apna College",
          "C Memory Management Hindi - Jenny's Lectures",
          "Advanced C Programming Hindi - Geeky Shows",
          "C Structures Hindi - MySirG.com",
          "Dynamic Memory Allocation Hindi - Tech With Tim",
        ],
      },
      documentation: [
        "C Pointers Guide - GeeksforGeeks",
        "Dynamic Memory Allocation in C",
        "C Structures and Unions Reference",
        "String Handling in C - cppreference",
        "C Preprocessor Documentation",
        "Memory Management Best Practices",
      ],
      projectIdeas: [
        "Student Record Management System",
        "Library Management System",
        "Dynamic Array Implementation",
        "String Manipulation Toolkit",
        "Memory Pool Allocator",
        "Simple Database Engine",
        "Text File Parser",
        "Contact Management System",
        "Matrix Operations Calculator",
        "Custom String Library",
        "Linked List Implementation",
        "Stack and Queue using Arrays",
      ],
      practicePlatforms: [
        "LeetCode Easy-Medium Problems",
        "HackerRank Data Structures",
        "CodeChef Beginner Problems",
        "GeeksforGeeks Practice Problems",
        "InterviewBit Programming",
        "Sphere Online Judge (SPOJ)",
      ],
    },
  },
  {
    id: 3,
    title:
      "Advanced Stage - File Handling, Data Structures & System Programming",
    description:
      "Professional C programming with system-level programming concepts",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    content: {
      whatToLearn: [
        "File Handling (fopen, fclose, fread, fwrite, fseek)",
        "Binary vs Text File Operations",
        "Error Handling and errno",
        "Advanced Data Structures (Linked Lists, Stacks, Queues)",
        "Trees (Binary Trees, BST) Implementation",
        "Graph Representation and Basic Algorithms",
        "Hashing and Hash Tables",
        "Sorting Algorithms (Bubble, Selection, Insertion, Quick, Merge)",
        "Searching Algorithms (Linear, Binary)",
        "Recursion and Recursive Algorithms",
        "System Calls and OS Interface",
        "Process Management (fork, exec, wait)",
        "Inter-Process Communication (IPC)",
        "Signal Handling",
        "Network Programming Basics (Sockets)",
        "Multi-threading with pthreads",
        "Shared Memory and Semaphores",
      ],
      toolsToUse: [
        "Make and Makefiles",
        "CMake Build System",
        "Git Version Control",
        "Profiling Tools (gprof, perf)",
        "Static Code Analyzers",
        "Unit Testing Frameworks (CUnit, Check)",
        "Docker for Development Environment",
        "Linux System Tools (strace, ltrace)",
        "Debugging Tools (GDB, Valgrind)",
      ],
      bestCourses: {
        english: [
          "Advanced C Programming Techniques",
          "System Programming in C - Linux",
          "Data Structures and Algorithms in C",
          "C Programming: Advanced Concepts",
          "Unix System Programming",
          "Network Programming with C",
        ],
        hindi: [
          "Advanced C Programming Hindi - CodeWithHarry",
          "File Handling in C Hindi - Apna College",
          "Data Structures Implementation Hindi - Jenny's Lectures",
          "System Programming Hindi - Geeky Shows",
          "C Advanced Topics Hindi - MySirG.com",
          "Operating System Concepts Hindi - Gate Smashers",
        ],
      },
      documentation: [
        "Advanced C Programming - GNU Documentation",
        "Linux System Programming Guide",
        "File I/O in C - cppreference",
        "POSIX Programming Manual",
        "Data Structures Documentation",
        "Network Programming Guide",
      ],
      projectIdeas: [
        "Custom Operating System Kernel (Basic)",
        "File Compression Utility",
        "Database Management System",
        "Web Server Implementation",
        "Memory Allocator (malloc implementation)",
        "Shell Implementation (Command Line Interface)",
        "Network Chat Application",
        "File System Implementation",
        "Process Monitor Tool",
        "Custom Compiler (Simple Language)",
        "Encryption/Decryption Tool",
        "Multi-threaded Server",
        "System Resource Monitor",
        "Version Control System (Git Clone)",
        "Text Editor with Advanced Features",
      ],
      practicePlatforms: [
        "Codeforces (C Language)",
        "TopCoder Algorithm Competitions",
        "AtCoder Programming Contest",
        "Google Code Jam",
        "ACM ICPC Problems",
        "Project Euler (Mathematical Problems)",
        "LeetCode Hard Problems",
        "HackerEarth Challenges",
      ],
      interviewQuestions: [
        "Explain pointer arithmetic and memory layout",
        "Difference between malloc() and calloc()",
        "How does function pointer work?",
        "Stack vs Heap memory management",
        "Explain volatile keyword",
        "Memory leaks and how to prevent them",
        "Process vs Thread differences",
        "Explain deadlock and how to avoid it",
        "Big O notation and algorithm complexity",
        "Implement various sorting algorithms",
      ],
      githubProjects: [
        "redis/redis - In-memory data structure store",
        "git/git - Distributed version control system",
        "curl/curl - Command line tool for transferring data",
        "nginx/nginx - HTTP and reverse proxy server",
        "sqlite/sqlite - Self-contained SQL database engine",
        "vim/vim - Text editor",
        "linux/linux - Linux kernel source code",
        "qemu/qemu - Machine emulator and virtualizer",
      ],
    },
  },
  {
    id: 4,
    title: "Competitive Programming with C (Optional)",
    description:
      "Master algorithmic problem solving and competitive coding using C",
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      whatToLearn: [
        "Time and Space Complexity Analysis",
        "Advanced Data Structures for CP",
        "Segment Trees and Fenwick Trees",
        "Graph Algorithms (DFS, BFS, Dijkstra, Floyd-Warshall)",
        "Dynamic Programming Patterns",
        "Greedy Algorithm Techniques",
        "String Algorithms (KMP, Z-Algorithm, Manacher's)",
        "Number Theory and Modular Arithmetic",
        "Combinatorics and Probability",
        "Binary Search and Ternary Search",
        "Backtracking Algorithms",
        "Divide and Conquer Strategies",
        "Game Theory Basics",
        "Fast I/O Techniques in C",
        "Bit Manipulation Advanced Techniques",
      ],
      toolsToUse: [
        "Fast C Templates for CP",
        "Custom Input/Output Libraries",
        "Stress Testing Scripts",
        "Time Complexity Analyzers",
        "Competitive Programming IDEs",
        "Local Judge Systems",
        "Performance Profilers",
        "Algorithm Visualizers",
      ],
      bestCourses: {
        english: [
          "Competitive Programming Essentials",
          "Algorithms for Competitive Programming",
          "Data Structures for Competitive Coding",
          "Advanced Graph Algorithms",
          "Dynamic Programming Mastery",
          "Mathematical Algorithms for CP",
        ],
        hindi: [
          "Competitive Programming Hindi - Luv (YouTube)",
          "CP Course Hindi - Priyansh Agarwal",
          "Algorithms Hindi - Aditya Verma",
          "CP Tutorial Hindi - CodeChef",
          "Advanced DSA Hindi - Striver",
          "Contest Math Hindi - Unacademy",
        ],
      },
      documentation: [
        "Competitive Programming Handbook",
        "CP-Algorithms Documentation",
        "Codeforces Educational Materials",
        "USACO Training Guide",
        "TopCoder Algorithm Tutorials",
        "AtCoder Library Documentation",
      ],
      platforms: [
        "Codeforces",
        "AtCoder",
        "CodeChef",
        "TopCoder",
        "SPOJ (Sphere Online Judge)",
        "UVa Online Judge",
        "HackerRank",
        "HackerEarth",
        "Google Code Jam",
        "Meta Hacker Cup",
        "USACO",
        "IOI (International Olympiad in Informatics)",
      ],
      practiceTips: [
        "Start with easy problems and gradually increase difficulty",
        "Focus on implementation speed and accuracy",
        "Learn common algorithmic patterns and templates",
        "Practice time management during contests",
        "Analyze and learn from editorial solutions",
        "Participate in regular contests to build stamina",
        "Maintain a problem-solving journal",
        "Study solutions of top competitive programmers",
        "Focus on weak areas through targeted practice",
        "Join competitive programming communities",
      ],
      challenges: [
        "Solve 100+ problems on each major platform",
        "Achieve Expert level on Codeforces",
        "Participate in weekly contests consistently",
        "Solve problems from past ACM ICPC regionals",
        "Complete USACO training program",
        "Solve advanced graph and DP problems",
        "Master string algorithms and number theory",
        "Participate in Google Code Jam rounds",
        "Contribute to competitive programming community",
        "Mentor junior competitive programmers",
      ],
    },
  },
];

const CRoadmapComponent = () => {
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
      title.textContent = "C Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add C++ logo/icon (text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent =
        "⚡ Complete Guide to Master C Programming - From Beginner to Expert";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      cRoadmap.forEach((section) => {
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
      pdf.save("C_Learning_Roadmap.pdf");

      // Optional: Store the downloaded roadmap data (remove localStorage usage for Claude.ai artifacts)
      // Instead, you could show a success message or update UI state
      console.log("C roadmap PDF generated successfully!");

      // Show success message
      alert("C Learning Roadmap PDF downloaded successfully!");

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
        <h1 className="text-xl md:text-2xl font-bold">C Learning Roadmap</h1>
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
            Welcome to the C Learning Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through your C language
            learning journey, from basic syntax to advanced concepts. Each
            section contains curated resources in both English and Hindi, along
            with practical projects and hands-on exercises. Click on any section
            to expand it and explore detailed learning materials, tools, and
            project ideas that will help you master C programming.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {cRoadmap.map((section) => (
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
            🚀 Start your C journey today! Remember, consistency is key to
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
export default CRoadmapComponent;
