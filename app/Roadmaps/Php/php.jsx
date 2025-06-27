"use client";
import { useState } from "react";
import {
  Code,
  Database,
  Globe,
  Shield,
  Wrench,
  FileText,
  Target,
  Lightbulb,
  Server,
  BookOpen,
  Layers,
  Zap,
} from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// PHP Roadmap Data Structure
const phpRoadmap = [
  {
    id: 1,
    title: "PHP Basics",
    description: "Foundation of PHP programming language",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      whatToLearn: [
        "PHP Syntax & Tags (<?php ?>)",
        "Variables & Data Types",
        "Echo & Print Statements",
        "Operators (Arithmetic, Logical, Comparison)",
        "Control Structures (if/else, switch, loops)",
        "Functions & Parameters",
        "Arrays (Indexed & Associative)",
        "Superglobals ($_GET, $_POST, $_SESSION)",
      ],
      toolsToUse: [
        "XAMPP / WAMP / MAMP",
        "VS Code with PHP Extensions",
        "PHPStorm",
        "PHP 8.x",
        "Apache/Nginx Web Server",
        "Browser Developer Tools",
      ],
      bestCourses: {
        english: [
          "PHP for Beginners - Codecourse",
          "Complete PHP Course - Udemy",
          "PHP Tutorial - W3Schools",
          "Learn PHP - freeCodeCamp",
        ],
        hindi: [
          "PHP Tutorial in Hindi - CodeWithHarry",
          "Complete PHP Course Hindi - Yahoo Baba",
          "PHP Basics Hindi - Geeky Shows",
          "PHP Programming Hindi - WsCube Tech",
        ],
      },
      documentation: [
        "Official PHP Documentation",
        "PHP.net Manual",
        "PHP The Right Way",
        "GeeksforGeeks PHP",
      ],
      projectIdeas: [
        "Simple Calculator",
        "Contact Form with Validation",
        "Basic Login System",
        "Todo List Application",
        "Simple Blog with File Storage",
      ],
      practicePlatforms: [
        "HackerRank PHP",
        "Codewars PHP",
        "PHP Exercises - W3Resource",
        "LeetCode (Easy Problems)",
      ],
    },
  },
  {
    id: 2,
    title: "Intermediate PHP",
    description: "Advanced PHP concepts and form handling",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "Form Handling & Validation",
        "File Upload & Management",
        "Sessions & Cookies",
        "Include & Require",
        "Regular Expressions (preg_match)",
        "Date & Time Functions",
        "String Functions & Manipulation",
        "Error Handling & Debugging",
      ],
      toolsToUse: [
        "PHP Built-in Functions",
        "Postman for Testing",
        "Browser Network Tab",
        "PHP Error Logs",
        "Xdebug",
        "File System Functions",
      ],
      bestCourses: {
        english: [
          "PHP Intermediate Course - Laracasts",
          "Advanced PHP - Udemy",
          "PHP Forms and Validation",
          "PHP File Handling Tutorial",
        ],
        hindi: [
          "PHP Advanced Concepts Hindi - CodeWithHarry",
          "PHP Form Handling Hindi - Yahoo Baba",
          "PHP Sessions & Cookies Hindi - Geeky Shows",
          "PHP File Upload Hindi - WsCube Tech",
        ],
      },
      documentation: [
        "PHP Form Handling - Official Docs",
        "PHP File Functions",
        "PHP Session Management",
        "PHP Error Handling Guide",
      ],
      projectIdeas: [
        "User Registration System",
        "File Upload Gallery",
        "Shopping Cart with Sessions",
        "Contact Management System",
        "Simple CMS with File Storage",
      ],
      practicePlatforms: [
        "PHP Practice Problems",
        "Codingbat PHP Exercises",
        "HackerEarth PHP",
        "Sphere Online Judge",
      ],
    },
  },
  {
    id: 3,
    title: "Database Integration",
    description: "Connect PHP with MySQL and perform CRUD operations",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    content: {
      whatToLearn: [
        "MySQL Database Basics",
        "SQL Queries (SELECT, INSERT, UPDATE, DELETE)",
        "PHP MySQL Connection (MySQLi & PDO)",
        "Prepared Statements",
        "CRUD Operations",
        "Database Security (SQL Injection Prevention)",
        "Database Normalization",
        "Joins & Relationships",
      ],
      toolsToUse: [
        "MySQL/MariaDB",
        "phpMyAdmin",
        "MySQL Workbench",
        "HeidiSQL",
        "PDO (PHP Data Objects)",
        "MySQLi Extension",
        "XAMPP MySQL",
      ],
      bestCourses: {
        english: [
          "PHP MySQL Tutorial - W3Schools",
          "Database Design Course",
          "PHP PDO Tutorial",
          "MySQL for Developers",
        ],
        hindi: [
          "PHP MySQL Tutorial Hindi - CodeWithHarry",
          "Database Connection PHP Hindi - Yahoo Baba",
          "PHP PDO Hindi - Geeky Shows",
          "MySQL PHP Integration Hindi - WsCube Tech",
        ],
      },
      documentation: [
        "PHP MySQL Documentation",
        "PDO Documentation",
        "MySQL Reference Manual",
        "SQL Tutorial - W3Schools",
      ],
      projectIdeas: [
        "Student Management System",
        "Inventory Management",
        "Blog with Database",
        "E-commerce Product Catalog",
        "User Authentication System",
      ],
      practicePlatforms: [
        "SQLBolt",
        "W3Schools SQL Tryit",
        "MySQL Tutorial",
        "Database Design Challenges",
      ],
    },
  },
  {
    id: 4,
    title: "Object-Oriented PHP",
    description: "Master OOP concepts in PHP for better code organization",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      whatToLearn: [
        "Classes & Objects",
        "Properties & Methods",
        "Constructor & Destructor",
        "Inheritance & Polymorphism",
        "Encapsulation & Abstraction",
        "Static Methods & Properties",
        "Interfaces & Traits",
        "Namespaces & Autoloading",
      ],
      toolsToUse: [
        "PHP 8.x OOP Features",
        "Composer (Autoloading)",
        "UML Diagram Tools",
        "PHPUnit (Testing)",
        "PSR Standards",
        "IDE with OOP Support",
      ],
      bestCourses: {
        english: [
          "PHP OOP Tutorial - Laracasts",
          "Object Oriented PHP Course",
          "PHP Design Patterns",
          "Advanced PHP OOP Concepts",
        ],
        hindi: [
          "PHP OOP Complete Course Hindi - CodeWithHarry",
          "PHP Classes Objects Hindi - Yahoo Baba",
          "PHP OOP Concepts Hindi - Geeky Shows",
          "Advanced PHP OOP Hindi - WsCube Tech",
        ],
      },
      documentation: [
        "PHP OOP - Official Documentation",
        "PHP Classes and Objects",
        "PHP Namespaces Guide",
        "PSR Standards Documentation",
      ],  
      projectIdeas: [
        "Library Management System (OOP)",
        "Banking System Simulation",
        "E-commerce Cart (OOP Design)",
        "User Management with Roles",
        "MVC Framework Implementation",
      ],
      practicePlatforms: [
        "PHP OOP Exercises",
        "Design Pattern Practice",
        "Code Review Platforms",
        "OOP Challenge Problems",
      ],
    },
  },
  {
    id: 5,
    title: "REST APIs & Security",
    description: "Build secure APIs and implement security best practices",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600",
    content: {
      whatToLearn: [
        "REST API Principles",
        "JSON Data Handling",
        "HTTP Methods (GET, POST, PUT, DELETE)",
        "API Authentication (JWT, OAuth)",
        "Input Validation & Sanitization",
        "Password Hashing (bcrypt)",
        "CORS & CSRF Protection",
        "Rate Limiting & Throttling",
      ],
      toolsToUse: [
        "Postman/Insomnia",
        "JWT Libraries",
        "PHP Filter Functions",
        "OpenSSL",
        "Apache/Nginx Security",
        "SSL/TLS Certificates",
        "API Documentation Tools",
      ],
      bestCourses: {
        english: [
          "RESTful API with PHP",
          "PHP Security Best Practices",
          "JWT Authentication PHP",
          "API Development Course",
        ],
        hindi: [
          "REST API PHP Hindi - CodeWithHarry",
          "PHP Security Hindi - Technical Suneja",
          "API Development Hindi - WsCube Tech",
          "PHP Authentication Hindi - Yahoo Baba",
        ],
      },
      documentation: [
        "PHP Security Guide",
        "REST API Best Practices",
        "JWT Documentation",
        "OWASP PHP Security",
      ],
      projectIdeas: [
        "Task Management API",
        "User Authentication API",
        "E-commerce API Backend",
        "Social Media API",
        "File Upload API with Security",
      ],
      practicePlatforms: [
        "API Testing Challenges",
        "Security CTF Challenges",
        "OWASP WebGoat",
        "HackerOne (Learning)",
      ],
    },
  },
  {
    id: 6,
    title: "PHP Frameworks",
    description: "Master Laravel and other popular PHP frameworks",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    content: {
      whatToLearn: [
        "Laravel Framework Basics",
        "MVC Architecture",
        "Routing & Controllers",
        "Blade Templating Engine",
        "Eloquent ORM",
        "Middleware & Authentication",
        "Artisan Commands",
        "CodeIgniter Basics (Alternative)",
      ],
      toolsToUse: [
        "Laravel Framework",
        "Composer",
        "Artisan CLI",
        "Laravel Mix/Vite",
        "Eloquent ORM",
        "Laravel Tinker",
        "Homestead/Valet",
      ],
      bestCourses: {
        english: [
          "Laravel from Scratch - Laracasts",
          "Complete Laravel Course",
          "Laravel API Development",
          "Laravel E-commerce Course",
        ],
        hindi: [
          "Laravel Tutorial Hindi - CodeWithHarry",
          "Laravel Complete Course Hindi - Yahoo Baba",
          "Laravel Framework Hindi - Geeky Shows",
          "Laravel Project Hindi - WsCube Tech",
        ],
      },
      documentation: [
        "Laravel Official Documentation",
        "Laravel Best Practices",
        "Eloquent ORM Guide",
        "Laravel API Resources",
      ],
      projectIdeas: [
        "Blog Application (Laravel)",
        "E-commerce Platform",
        "Task Management System",
        "Social Media Platform",
        "Real-time Chat Application",
      ],
      practicePlatforms: [
        "Laravel Daily Challenges",
        "Laracasts Exercises",
        "Laravel News",
        "Framework Comparison Projects",
      ],
    },
  },
  {
    id: 7,
    title: "Testing & Deployment",
    description: "Test your code and deploy applications to production",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-rose-500 to-pink-600",
    content: {
      whatToLearn: [
        "Unit Testing with PHPUnit",
        "Integration Testing",
        "Test-Driven Development (TDD)",
        "Code Coverage Analysis",
        "Deployment Strategies",
        "Server Configuration",
        "Version Control with Git",
        "CI/CD Pipelines",
      ],
      toolsToUse: [
        "PHPUnit",
        "Git & GitHub",
        "Docker",
        "Apache/Nginx",
        "Linux Server Management",
        "GitHub Actions/Jenkins",
        "Composer Scripts",
        "Deployment Tools",
      ],
      bestCourses: {
        english: [
          "PHP Testing with PHPUnit",
          "Laravel Testing Course",
          "PHP Deployment Guide",
          "DevOps for PHP Developers",
        ],
        hindi: [
          "PHP Testing Hindi - Technical Suneja",
          "Git GitHub Hindi - CodeWithHarry",
          "Server Deployment Hindi - WsCube Tech",
          "PHP DevOps Hindi - Geeky Shows",
        ],
      },
      documentation: [
        "PHPUnit Documentation",
        "Git Documentation",
        "Docker PHP Guide",
        "Server Deployment Best Practices",
      ],
      projectIdeas: [
        "Automated Testing Suite",
        "CI/CD Pipeline Setup",
        "Docker PHP Application",
        "Multi-environment Deployment",
        "Performance Testing Framework",
      ],
      practicePlatforms: [
        "GitHub (Open Source)",
        "Docker Hub",
        "Testing Challenges",
        "DevOps Practice Labs",
      ],
    },
  },
  {
    id: 8,
    title: "Portfolio & Career",
    description: "Build your professional profile and prepare for opportunities",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-600",
    content: {
      whatToLearn: [
        "GitHub Portfolio Optimization",
        "Technical Resume Writing",
        "PHP Developer Portfolio Website",
        "Open Source Contributions",
        "Technical Interview Preparation",
        "System Design for PHP",
        "Freelancing & Client Work",
        "Continuous Learning Path",
      ],
      toolsToUse: [
        "GitHub",
        "LinkedIn",
        "Portfolio Frameworks",
        "Interview Platforms",
        "Freelance Platforms",
        "Technical Blogs",
        "Community Forums",
      ],
      bestCourses: {
        english: [
          "PHP Developer Career Guide",
          "Technical Interview Prep",
          "Freelancing for Developers",
          "Open Source Contribution Guide",
        ],
        hindi: [
          "PHP Developer Career Hindi - CodeWithHarry",
          "Freelancing Guide Hindi - WsCube Tech",
          "Interview Preparation Hindi - Technical Suneja",
          "Portfolio Building Hindi - Yahoo Baba",
        ],
      },
      documentation: [
        "GitHub Profile Guide",
        "PHP Career Roadmap",
        "Developer Community Guidelines",
        "Freelance Developer Guide",
      ],
      projectIdeas: [
        "Personal Portfolio Website",
        "Open Source PHP Package",
        "Technical Blog with Tutorials",
        "Full-stack Web Application",
        "PHP Framework Contribution",
      ],
      practicePlatforms: [
        "GitHub (Contributions)",
        "Stack Overflow",
        "Dev.to Community",
        "PHP Community Forums",
      ],
    },
  },
];

const PHPRoadmapComponent = () => {
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
      title.textContent = "Php Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add Python logo/icon (optional text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent = "🐍 Complete Guide to Master Php Programming";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      phpRoadmap.forEach((section) => {
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
      footer.textContent = `Generated on ${new Date().toLocaleDateString()} | Php Learning Roadmap`;
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
      pdf.save("Php_Learning_Roadmap.pdf");

      // Optional: Store the downloaded roadmap data (remove localStorage usage for Claude.ai artifacts)
      // Instead, you could show a success message or update UI state
      console.log("Php roadmap PDF generated successfully!");

      // Show success message
      alert("Php Learning Roadmap PDF downloaded successfully!");

      // Navigate to Downloads page if router is available
      // router.push('/Downloads'); // Uncomment if using Next.js router

    } catch (error) {
      console.error("Error generating Php roadmap PDF:", error);
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
         Php Learning Roadmap
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
            Welcome to the Php Learning Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through your Php
            learning journey, from basic syntax to advanced concepts. Each
            section contains curated resources in both English and Hindi, along
            with practical projects and hands-on exercises. Click on any section
            to expand it and explore detailed learning materials, tools, and
            project ideas that will help you master Php programming.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {phpRoadmap.map((section) => (
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
            🚀 Start your Python journey today! Remember, consistency is key to
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
  export default PHPRoadmapComponent