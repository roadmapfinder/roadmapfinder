"use client";
import { useState } from "react";
import {
  Database,
  Search,
  BarChart3,
  Zap,
  Trophy,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Moon,
  Sun,
  Table,
  Filter,
  TrendingUp,
  Brain,
  Award,
  Briefcase,
} from "lucide-react";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// SQL Roadmap Data Structure
const sqlRoadmap = [
  {
    id: 1,
    title: "Introduction to SQL (Beginner Level)",
    description: "Foundation of SQL and database concepts for beginners",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      whatToLearn: [
        "What is a Database?",
        "What is SQL? History and Importance",
        "Types of Databases: Relational (MySQL, PostgreSQL), NoSQL",
        "Basic SQL Commands: SELECT, INSERT, UPDATE, DELETE",
        "SQL Data Types (VARCHAR, INT, DATE, etc.)",
        "Primary Keys and Foreign Keys",
        "Basic Database Design Principles",
        "SQL Syntax and Structure",
        "Creating and Managing Tables",
      ],
      toolsToUse: [
        "DB Browser for SQLite",
        "MySQL Workbench",
        "PgAdmin (PostgreSQL)",
        "phpMyAdmin",
        "SQL Server Management Studio",
        "Online SQL Editors (W3Schools, SQLiteStudio)",
        "DBeaver (Universal Database Tool)",
        "HeidiSQL",
      ],
      bestCourses: {
        english: [
          "freeCodeCamp SQL Tutorial (YouTube)",
          "Kudvenkat SQL Server Tutorial (YouTube)",
          "SQL Tutorial - Full Database Course for Beginners",
          "Khan Academy - Intro to SQL",
          "Codecademy SQL Course",
        ],
        hindi: [
          "CodeWithHarry SQL Full Course (YouTube)",
          "WsCube Tech SQL Hindi (YouTube)",
          "Apna College SQL Complete Course",
          "TechGun SQL Tutorial Hindi",
          "Geeky Shows SQL Course Hindi",
        ],
      },
      documentation: [
        "W3Schools SQL Tutorial",
        "SQLBolt Interactive Tutorial",
        "Mode Analytics SQL Tutorial",
        "MySQL Official Documentation",
        "PostgreSQL Tutorial",
      ],
      projectIdeas: [
        "Student Database System",
        "Simple Employee Management DB",
        "Library Management System",
        "Basic Inventory Tracker",
        "Personal Expense Tracker DB",
        "Contact Management System",
        "Simple Blog Database",
      ],
      practicePlatforms: [
        "LeetCode SQL (Easy Problems)",
        "HackerRank SQL Domain",
        "W3Schools SQL Exercises",
        "SQLBolt Practice",
        "SQL-Practice.com",
      ],
    },
  },
  {
    id: 2,
    title: "Intermediate SQL",
    description: "Advanced querying techniques and database operations",
    icon: <Filter className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    content: {
      whatToLearn: [
        "WHERE, ORDER BY, GROUP BY, HAVING Clauses",
        "Aggregate Functions: COUNT, AVG, SUM, MIN, MAX",
        "Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
        "Subqueries and Nested Queries",
        "SQL Views and Aliases",
        "UNION, INTERSECT, EXCEPT Operations",
        "String Functions and Date Functions",
        "Conditional Logic (CASE WHEN)",
        "NULL Handling and COALESCE",
        "Data Filtering and Sorting Techniques",
      ],
      toolsToUse: [
        "PostgreSQL with PgAdmin",
        "MySQL Community Server",
        "SQL Server Management Studio",
        "Oracle SQL Developer",
        "DataGrip (JetBrains)",
        "Sequel Pro (Mac)",
        "TablePlus",
        "Azure Data Studio",
      ],
      bestCourses: {
        english: [
          "The Complete SQL Bootcamp - Udemy",
          "Khan Academy - Advanced SQL",
          "Coursera SQL for Data Science",
          "edX Introduction to Databases",
          "Pluralsight SQL Server Fundamentals",
        ],
        hindi: [
          "WsCube Tech Intermediate SQL",
          "Apna College Advanced SQL",
          "CodeWithHarry SQL Advanced Topics",
          "Unacademy SQL Course",
          "TechWorld with Nana SQL",
        ],
      },
      documentation: [
        "GeeksforGeeks SQL Tutorial",
        "TutorialsPoint SQL Guide",
        "PostgreSQL Documentation",
        "MySQL Reference Manual",
        "SQL Server Documentation",
      ],
      projectIdeas: [
        "Inventory Management System",
        "Movie Recommendation Database",
        "Mini e-Commerce Database",
        "Sales Analytics Dashboard DB",
        "University Course Management",
        "Restaurant Order Management",
        "Real Estate Property DB",
      ],
      practicePlatforms: [
        "LeetCode SQL (Medium Problems)",
        "HackerRank Intermediate SQL",
        "DataCamp SQL Practice",
        "Kaggle Learn SQL",
        "StrataScratch SQL Questions",
      ],
    },
  },
  {
    id: 3,
    title: "Advanced SQL (Expert Level)",
    description: "Master advanced SQL concepts and database optimization",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    content: {
      whatToLearn: [
        "Window Functions (RANK(), ROW_NUMBER(), LEAD(), LAG())",
        "Common Table Expressions (CTEs)",
        "Recursive Queries",
        "Database Indexing and Optimization",
        "Query Performance Tuning",
        "Transactions (ACID Properties, COMMIT, ROLLBACK)",
        "Triggers and Stored Procedures",
        "User-Defined Functions",
        "Partitioning and Sharding",
        "Database Security and Permissions",
      ],
      toolsToUse: [
        "Apache Superset",
        "DBeaver Professional",
        "Google BigQuery",
        "Snowflake",
        "Amazon Redshift",
        "Microsoft Azure SQL",
        "Query Performance Analyzers",
        "Database Monitoring Tools",
      ],
      bestCourses: {
        english: [
          "Advanced SQL for Data Scientists - Udemy",
          "SQL for Data Analysis - Udacity",
          "The Complete SQL Bootcamp by Jose Portilla",
          "Advanced Database Systems - Coursera",
          "SQL Server Performance Tuning",
        ],
        hindi: [
          "Unacademy SQL Advanced Course",
          "Advanced SQL Hindi - WsCube Tech",
          "Database Optimization Hindi - TechGun",
          "SQL Performance Tuning Hindi",
          "Advanced Database Concepts Hindi",
        ],
      },
      documentation: [
        "Mode Analytics Advanced SQL",
        "PostgreSQL Advanced Documentation",
        "SQL Server Query Optimization Guide",
        "BigQuery Documentation",
        "Snowflake SQL Reference",
      ],
      projectIdeas: [
        "Financial Dashboard Database",
        "Hospital Management System DB",
        "Custom CRM Database",
        "Data Warehouse Design",
        "Real-time Analytics Platform",
        "Multi-tenant SaaS Database",
        "Business Intelligence Dashboard",
      ],
      practicePlatforms: [
        "LeetCode SQL (Hard Problems)",
        "HackerRank Advanced SQL",
        "DataLemur SQL Questions",
        "InterviewQuery SQL Practice",
        "SQL Murder Mystery",
      ],
    },
  },
  {
    id: 4,
    title: "Database Design & Architecture",
    description: "Learn database design principles and system architecture",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      whatToLearn: [
        "Database Normalization (1NF, 2NF, 3NF, BCNF)",
        "Entity-Relationship (ER) Modeling",
        "Database Schema Design",
        "Data Modeling Best Practices",
        "ACID Properties and Transaction Management",
        "Concurrency Control",
        "Database Backup and Recovery",
        "Replication and High Availability",
        "Scalability Patterns",
        "Data Warehousing Concepts",
      ],
      toolsToUse: [
        "ER Diagram Tools (Lucidchart, Draw.io)",
        "MySQL Workbench (Design Mode)",
        "DbSchema",
        "Vertabelo",
        "SQL Power Architect",
        "Database Design Tools",
        "Backup and Recovery Tools",
        "Monitoring Solutions",
      ],
      bestCourses: {
        english: [
          "Database Design Course - Coursera",
          "Database Systems - Stanford Online",
          "Data Modeling Fundamentals",
          "Database Administration Course",
          "System Design for Databases",
        ],
        hindi: [
          "Database Design Hindi - CodeWithHarry",
          "DBMS Complete Course Hindi",
          "Database Architecture Hindi",
          "System Design Hindi - Apna College",
          "Database Management Hindi",
        ],
      },
      documentation: [
        "Database Design Guide",
        "Normalization Tutorial",
        "ER Modeling Best Practices",
        "Database Administration Guide",
        "High Availability Documentation",
      ],
      projectIdeas: [
        "E-commerce Platform Database",
        "Social Media Database Design",
        "Banking System Database",
        "Healthcare Records System",
        "Educational Management System",
        "Supply Chain Database",
        "Multi-tenant Application DB",
      ],
      practicePlatforms: [
        "Database Design Challenges",
        "System Design Interviews",
        "Real-world Case Studies",
        "Database Certification Prep",
        "Architecture Review Sessions",
      ],
    },
  },
  {
    id: 5,
    title: "SQL for Data Analysis & BI",
    description: "Master SQL for data analysis and business intelligence",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600",
    content: {
      whatToLearn: [
        "Analytical Functions and Window Functions",
        "Statistical Functions in SQL",
        "Data Aggregation and Summarization",
        "Time Series Analysis with SQL",
        "Cohort Analysis and Retention Metrics",
        "A/B Testing with SQL",
        "Data Cleaning and Transformation",
        "Report Generation with SQL",
        "SQL for ETL Processes",
        "Integration with BI Tools",
      ],
      toolsToUse: [
        "Tableau (SQL Integration)",
        "Power BI",
        "Looker",
        "Google Data Studio",
        "Apache Airflow",
        "dbt (Data Build Tool)",
        "Jupyter Notebooks with SQL",
        "Google Colab",
      ],
      bestCourses: {
        english: [
          "SQL for Data Analysis - Udacity",
          "Data Analysis with SQL - Coursera",
          "Business Intelligence with SQL",
          "Advanced Analytics with SQL",
          "SQL for Data Scientists",
        ],
        hindi: [
          "Data Analysis SQL Hindi - WsCube Tech",
          "Business Intelligence Hindi Course",
          "SQL for Analytics Hindi - Unacademy",
          "Data Science SQL Hindi",
          "BI Tools with SQL Hindi",
        ],
      },
      documentation: [
        "SQL for Data Analysis Guide",
        "Business Intelligence Best Practices",
        "Statistical Functions Reference",
        "Time Series Analysis with SQL",
        "Data Warehouse SQL Patterns",
      ],
      projectIdeas: [
        "Sales Performance Dashboard",
        "Customer Analytics Platform",
        "Marketing Campaign Analysis",
        "Financial Reporting System",
        "Operational Analytics Dashboard",
        "Product Usage Analytics",
        "Supply Chain Analytics",
      ],
      practicePlatforms: [
        "Kaggle SQL Competitions",
        "DataCamp Projects",
        "Mode Analytics Public Datasets",
        "Google BigQuery Public Data",
        "Real Business Case Studies",
      ],
    },
  },
  {
    id: 6,
    title: "Modern SQL & Cloud Databases",
    description: "Explore modern SQL features and cloud database platforms",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    content: {
      whatToLearn: [
        "JSON Support in SQL (PostgreSQL, MySQL)",
        "NoSQL Integration with SQL",
        "Graph Database Queries",
        "Cloud Database Platforms",
        "Serverless SQL Solutions",
        "Real-time Data Processing",
        "Distributed SQL Systems",
        "SQL on Big Data (Spark SQL, Presto)",
        "API Integration with Databases",
        "Modern SQL Standards (SQL:2016, SQL:2023)",
      ],
      toolsToUse: [
        "Google BigQuery",
        "Amazon Redshift",
        "Snowflake",
        "Azure Synapse Analytics",
        "CockroachDB",
        "Apache Spark SQL",
        "Presto/Trino",
        "ClickHouse",
      ],
      bestCourses: {
        english: [
          "Modern SQL on Cloud Platforms",
          "Big Data SQL - Coursera",
          "Cloud Database Architecture",
          "Distributed Systems and SQL",
          "Real-time Analytics with SQL",
        ],
        hindi: [
          "Cloud Databases Hindi Course",
          "Modern SQL Features Hindi",
          "Big Data SQL Hindi Tutorial",
          "Cloud Computing with SQL Hindi",
          "Distributed Databases Hindi",
        ],
      },
      documentation: [
        "Cloud SQL Documentation",
        "Modern SQL Features Guide",
        "Distributed SQL Best Practices",
        "JSON in SQL Tutorial",
        "Real-time SQL Processing",
      ],
      projectIdeas: [
        "Real-time Analytics Dashboard",
        "Serverless Data Pipeline",
        "Multi-cloud Database Solution",
        "IoT Data Processing System",
        "Machine Learning Feature Store",
        "Event-driven Data Architecture",
        "Global Distributed Application",
      ],
      practicePlatforms: [
        "Cloud Platform Challenges",
        "BigQuery Public Datasets",
        "Snowflake Hands-on Labs",
        "AWS Data Analytics Challenges",
        "Modern SQL Competitions",
      ],
    },
  },
  {
    id: 7,
    title: "Career & Certification Path",
    description:
      "Build your SQL career with certifications and portfolio projects",
    icon: <Award className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-600",
    content: {
      whatToLearn: [
        "SQL Certification Preparation",
        "Database Administrator Skills",
        "Data Analyst Career Path",
        "Data Engineer SQL Skills",
        "Business Intelligence Developer",
        "Interview Preparation",
        "Portfolio Development",
        "Open Source Contributions",
        "Professional Networking",
        "Continuous Learning Strategies",
      ],
      toolsToUse: [
        "Certification Platforms",
        "Portfolio Websites",
        "GitHub for SQL Projects",
        "LinkedIn Learning",
        "Professional Forums",
        "Meetup Groups",
        "Conference Platforms",
        "Mentoring Platforms",
      ],
      bestCourses: {
        english: [
          "SQL Certification Bootcamp",
          "Database Career Fundamentals",
          "Data Professional Skills",
          "SQL Interview Preparation",
          "Portfolio Building for Data Roles",
        ],
        hindi: [
          "SQL Career Guide Hindi",
          "Database Jobs Preparation Hindi",
          "Data Analyst Career Hindi",
          "SQL Interview Hindi - Love Babbar",
          "Tech Career Guidance Hindi",
        ],
      },
      documentation: [
        "SQL Certification Guide",
        "Database Career Roadmap",
        "Interview Question Banks",
        "Portfolio Project Templates",
        "Professional Development Resources",
      ],
      projectIdeas: [
        "Complete E-commerce Database",
        "Data Analytics Portfolio",
        "Open Source Database Tool",
        "SQL Tutorial Blog/Website",
        "Database Performance Optimizer",
        "Real-time Dashboard Application",
        "Industry-specific Database Solutions",
        "SQL Code Review Platform",
        "Database Migration Tool",
        "Custom Reporting Framework",
      ],
      practicePlatforms: [
        "Certification Practice Tests",
        "Mock Interview Platforms",
        "GitHub Portfolio Reviews",
        "Professional Communities",
        "Industry Challenges",
        "Hackathons and Competitions",
      ],
    },
  },
];

const SqlRoadmapComponent = () => {
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
      title.style.borderBottom = "3px solid #3776ab"; // Python blue color
      title.style.paddingBottom = "15px";
      title.textContent = "Sql Learning Roadmap";
      downloadDiv.appendChild(title);

      // Add Python logo/icon (optional text representation)
      const subtitle = document.createElement("p");
      subtitle.style.textAlign = "center";
      subtitle.style.fontSize = "16px";
      subtitle.style.color = "#7f8c8d";
      subtitle.style.marginBottom = "40px";
      subtitle.style.fontStyle = "italic";
      subtitle.textContent = "🐍 Complete Guide to Master Sql Programming";
      downloadDiv.appendChild(subtitle);

      // Add roadmap content with improved styling
      sqlRoadmap.forEach((section) => {
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
      pdf.save("Sql_Learning_Roadmap.pdf");

      // Optional: Store the downloaded roadmap data (remove localStorage usage for Claude.ai artifacts)
      // Instead, you could show a success message or update UI state
      console.log("Sql roadmap PDF generated successfully!");

      // Show success message
      alert("Sql Learning Roadmap PDF downloaded successfully!");

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
          Sql Learning Roadmap
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
            This comprehensive roadmap will guide you through your Sql
            programming learning journey, from basic syntax to advanced
            concepts. Each section contains curated resources in both English
            and Hindi, along with practical projects and hands-on exercises.
            Click on any section to expand it and explore detailed learning
            materials, tools, and project ideas that will help you master Sql
            programming.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {sqlRoadmap.map((section) => (
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
            🚀 Start your Sql journey today! Remember, consistency is key to
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
export default SqlRoadmapComponent;
