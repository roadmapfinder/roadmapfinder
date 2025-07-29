(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Roadmaps/Sql/sql.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// SQL Roadmap Data Structure
const sqlRoadmap = [
    {
        id: 1,
        title: "Introduction to SQL (Beginner Level)",
        description: "Foundation of SQL and database concepts for beginners",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 31,
            columnNumber: 11
        }, this),
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
                "Creating and Managing Tables"
            ],
            toolsToUse: [
                "DB Browser for SQLite",
                "MySQL Workbench",
                "PgAdmin (PostgreSQL)",
                "phpMyAdmin",
                "SQL Server Management Studio",
                "Online SQL Editors (W3Schools, SQLiteStudio)",
                "DBeaver (Universal Database Tool)",
                "HeidiSQL"
            ],
            bestCourses: {
                english: [
                    "freeCodeCamp SQL Tutorial (YouTube)",
                    "Kudvenkat SQL Server Tutorial (YouTube)",
                    "SQL Tutorial - Full Database Course for Beginners",
                    "Khan Academy - Intro to SQL",
                    "Codecademy SQL Course"
                ],
                hindi: [
                    "CodeWithHarry SQL Full Course (YouTube)",
                    "WsCube Tech SQL Hindi (YouTube)",
                    "Apna College SQL Complete Course",
                    "TechGun SQL Tutorial Hindi",
                    "Geeky Shows SQL Course Hindi"
                ]
            },
            documentation: [
                "W3Schools SQL Tutorial",
                "SQLBolt Interactive Tutorial",
                "Mode Analytics SQL Tutorial",
                "MySQL Official Documentation",
                "PostgreSQL Tutorial"
            ],
            projectIdeas: [
                "Student Database System",
                "Simple Employee Management DB",
                "Library Management System",
                "Basic Inventory Tracker",
                "Personal Expense Tracker DB",
                "Contact Management System",
                "Simple Blog Database"
            ],
            practicePlatforms: [
                "LeetCode SQL (Easy Problems)",
                "HackerRank SQL Domain",
                "W3Schools SQL Exercises",
                "SQLBolt Practice",
                "SQL-Practice.com"
            ]
        }
    },
    {
        id: 2,
        title: "Intermediate SQL",
        description: "Advanced querying techniques and database operations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, this),
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
                "Data Filtering and Sorting Techniques"
            ],
            toolsToUse: [
                "PostgreSQL with PgAdmin",
                "MySQL Community Server",
                "SQL Server Management Studio",
                "Oracle SQL Developer",
                "DataGrip (JetBrains)",
                "Sequel Pro (Mac)",
                "TablePlus",
                "Azure Data Studio"
            ],
            bestCourses: {
                english: [
                    "The Complete SQL Bootcamp - Udemy",
                    "Khan Academy - Advanced SQL",
                    "Coursera SQL for Data Science",
                    "edX Introduction to Databases",
                    "Pluralsight SQL Server Fundamentals"
                ],
                hindi: [
                    "WsCube Tech Intermediate SQL",
                    "Apna College Advanced SQL",
                    "CodeWithHarry SQL Advanced Topics",
                    "Unacademy SQL Course",
                    "TechWorld with Nana SQL"
                ]
            },
            documentation: [
                "GeeksforGeeks SQL Tutorial",
                "TutorialsPoint SQL Guide",
                "PostgreSQL Documentation",
                "MySQL Reference Manual",
                "SQL Server Documentation"
            ],
            projectIdeas: [
                "Inventory Management System",
                "Movie Recommendation Database",
                "Mini e-Commerce Database",
                "Sales Analytics Dashboard DB",
                "University Course Management",
                "Restaurant Order Management",
                "Real Estate Property DB"
            ],
            practicePlatforms: [
                "LeetCode SQL (Medium Problems)",
                "HackerRank Intermediate SQL",
                "DataCamp SQL Practice",
                "Kaggle Learn SQL",
                "StrataScratch SQL Questions"
            ]
        }
    },
    {
        id: 3,
        title: "Advanced SQL (Expert Level)",
        description: "Master advanced SQL concepts and database optimization",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 170,
            columnNumber: 11
        }, this),
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
                "Database Security and Permissions"
            ],
            toolsToUse: [
                "Apache Superset",
                "DBeaver Professional",
                "Google BigQuery",
                "Snowflake",
                "Amazon Redshift",
                "Microsoft Azure SQL",
                "Query Performance Analyzers",
                "Database Monitoring Tools"
            ],
            bestCourses: {
                english: [
                    "Advanced SQL for Data Scientists - Udemy",
                    "SQL for Data Analysis - Udacity",
                    "The Complete SQL Bootcamp by Jose Portilla",
                    "Advanced Database Systems - Coursera",
                    "SQL Server Performance Tuning"
                ],
                hindi: [
                    "Unacademy SQL Advanced Course",
                    "Advanced SQL Hindi - WsCube Tech",
                    "Database Optimization Hindi - TechGun",
                    "SQL Performance Tuning Hindi",
                    "Advanced Database Concepts Hindi"
                ]
            },
            documentation: [
                "Mode Analytics Advanced SQL",
                "PostgreSQL Advanced Documentation",
                "SQL Server Query Optimization Guide",
                "BigQuery Documentation",
                "Snowflake SQL Reference"
            ],
            projectIdeas: [
                "Financial Dashboard Database",
                "Hospital Management System DB",
                "Custom CRM Database",
                "Data Warehouse Design",
                "Real-time Analytics Platform",
                "Multi-tenant SaaS Database",
                "Business Intelligence Dashboard"
            ],
            practicePlatforms: [
                "LeetCode SQL (Hard Problems)",
                "HackerRank Advanced SQL",
                "DataLemur SQL Questions",
                "InterviewQuery SQL Practice",
                "SQL Murder Mystery"
            ]
        }
    },
    {
        id: 4,
        title: "Database Design & Architecture",
        description: "Learn database design principles and system architecture",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 240,
            columnNumber: 11
        }, this),
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
                "Data Warehousing Concepts"
            ],
            toolsToUse: [
                "ER Diagram Tools (Lucidchart, Draw.io)",
                "MySQL Workbench (Design Mode)",
                "DbSchema",
                "Vertabelo",
                "SQL Power Architect",
                "Database Design Tools",
                "Backup and Recovery Tools",
                "Monitoring Solutions"
            ],
            bestCourses: {
                english: [
                    "Database Design Course - Coursera",
                    "Database Systems - Stanford Online",
                    "Data Modeling Fundamentals",
                    "Database Administration Course",
                    "System Design for Databases"
                ],
                hindi: [
                    "Database Design Hindi - CodeWithHarry",
                    "DBMS Complete Course Hindi",
                    "Database Architecture Hindi",
                    "System Design Hindi - Apna College",
                    "Database Management Hindi"
                ]
            },
            documentation: [
                "Database Design Guide",
                "Normalization Tutorial",
                "ER Modeling Best Practices",
                "Database Administration Guide",
                "High Availability Documentation"
            ],
            projectIdeas: [
                "E-commerce Platform Database",
                "Social Media Database Design",
                "Banking System Database",
                "Healthcare Records System",
                "Educational Management System",
                "Supply Chain Database",
                "Multi-tenant Application DB"
            ],
            practicePlatforms: [
                "Database Design Challenges",
                "System Design Interviews",
                "Real-world Case Studies",
                "Database Certification Prep",
                "Architecture Review Sessions"
            ]
        }
    },
    {
        id: 5,
        title: "SQL for Data Analysis & BI",
        description: "Master SQL for data analysis and business intelligence",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 310,
            columnNumber: 11
        }, this),
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
                "Integration with BI Tools"
            ],
            toolsToUse: [
                "Tableau (SQL Integration)",
                "Power BI",
                "Looker",
                "Google Data Studio",
                "Apache Airflow",
                "dbt (Data Build Tool)",
                "Jupyter Notebooks with SQL",
                "Google Colab"
            ],
            bestCourses: {
                english: [
                    "SQL for Data Analysis - Udacity",
                    "Data Analysis with SQL - Coursera",
                    "Business Intelligence with SQL",
                    "Advanced Analytics with SQL",
                    "SQL for Data Scientists"
                ],
                hindi: [
                    "Data Analysis SQL Hindi - WsCube Tech",
                    "Business Intelligence Hindi Course",
                    "SQL for Analytics Hindi - Unacademy",
                    "Data Science SQL Hindi",
                    "BI Tools with SQL Hindi"
                ]
            },
            documentation: [
                "SQL for Data Analysis Guide",
                "Business Intelligence Best Practices",
                "Statistical Functions Reference",
                "Time Series Analysis with SQL",
                "Data Warehouse SQL Patterns"
            ],
            projectIdeas: [
                "Sales Performance Dashboard",
                "Customer Analytics Platform",
                "Marketing Campaign Analysis",
                "Financial Reporting System",
                "Operational Analytics Dashboard",
                "Product Usage Analytics",
                "Supply Chain Analytics"
            ],
            practicePlatforms: [
                "Kaggle SQL Competitions",
                "DataCamp Projects",
                "Mode Analytics Public Datasets",
                "Google BigQuery Public Data",
                "Real Business Case Studies"
            ]
        }
    },
    {
        id: 6,
        title: "Modern SQL & Cloud Databases",
        description: "Explore modern SQL features and cloud database platforms",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 380,
            columnNumber: 11
        }, this),
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
                "Modern SQL Standards (SQL:2016, SQL:2023)"
            ],
            toolsToUse: [
                "Google BigQuery",
                "Amazon Redshift",
                "Snowflake",
                "Azure Synapse Analytics",
                "CockroachDB",
                "Apache Spark SQL",
                "Presto/Trino",
                "ClickHouse"
            ],
            bestCourses: {
                english: [
                    "Modern SQL on Cloud Platforms",
                    "Big Data SQL - Coursera",
                    "Cloud Database Architecture",
                    "Distributed Systems and SQL",
                    "Real-time Analytics with SQL"
                ],
                hindi: [
                    "Cloud Databases Hindi Course",
                    "Modern SQL Features Hindi",
                    "Big Data SQL Hindi Tutorial",
                    "Cloud Computing with SQL Hindi",
                    "Distributed Databases Hindi"
                ]
            },
            documentation: [
                "Cloud SQL Documentation",
                "Modern SQL Features Guide",
                "Distributed SQL Best Practices",
                "JSON in SQL Tutorial",
                "Real-time SQL Processing"
            ],
            projectIdeas: [
                "Real-time Analytics Dashboard",
                "Serverless Data Pipeline",
                "Multi-cloud Database Solution",
                "IoT Data Processing System",
                "Machine Learning Feature Store",
                "Event-driven Data Architecture",
                "Global Distributed Application"
            ],
            practicePlatforms: [
                "Cloud Platform Challenges",
                "BigQuery Public Datasets",
                "Snowflake Hands-on Labs",
                "AWS Data Analytics Challenges",
                "Modern SQL Competitions"
            ]
        }
    },
    {
        id: 7,
        title: "Career & Certification Path",
        description: "Build your SQL career with certifications and portfolio projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
            lineNumber: 451,
            columnNumber: 11
        }, this),
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
                "Continuous Learning Strategies"
            ],
            toolsToUse: [
                "Certification Platforms",
                "Portfolio Websites",
                "GitHub for SQL Projects",
                "LinkedIn Learning",
                "Professional Forums",
                "Meetup Groups",
                "Conference Platforms",
                "Mentoring Platforms"
            ],
            bestCourses: {
                english: [
                    "SQL Certification Bootcamp",
                    "Database Career Fundamentals",
                    "Data Professional Skills",
                    "SQL Interview Preparation",
                    "Portfolio Building for Data Roles"
                ],
                hindi: [
                    "SQL Career Guide Hindi",
                    "Database Jobs Preparation Hindi",
                    "Data Analyst Career Hindi",
                    "SQL Interview Hindi - Love Babbar",
                    "Tech Career Guidance Hindi"
                ]
            },
            documentation: [
                "SQL Certification Guide",
                "Database Career Roadmap",
                "Interview Question Banks",
                "Portfolio Project Templates",
                "Professional Development Resources"
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
                "Custom Reporting Framework"
            ],
            practicePlatforms: [
                "Certification Practice Tests",
                "Mock Interview Platforms",
                "GitHub Portfolio Reviews",
                "Professional Communities",
                "Industry Challenges",
                "Hackathons and Competitions"
            ]
        }
    }
];
const SqlRoadmapComponent = ()=>{
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
    };
    const toggleSection = (sectionId)=>{
        setOpenSection(openSection === sectionId ? null : sectionId);
    };
    const handleDownload = async ()=>{
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
            sqlRoadmap.forEach((section)=>{
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
                section.content.whatToLearn.forEach((item)=>{
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
                section.content.bestCourses.english.forEach((course)=>{
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
                section.content.bestCourses.hindi.forEach((course)=>{
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
                section.content.toolsToUse.forEach((tool)=>{
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
                section.content.documentation.forEach((doc)=>{
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
                section.content.projectIdeas.forEach((project)=>{
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
                section.content.practicePlatforms.forEach((platform)=>{
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
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(downloadDiv, {
                scale: 2,
                useCORS: true,
                logging: false,
                letterRendering: true,
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
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
                compress: true,
                precision: 2
            });
            // Calculate dimensions for better fitting
            const imgWidth = 210; // A4 width in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pageHeight = 297; // A4 height in mm
            let heightLeft = imgHeight;
            let position = 0;
            // Add first page
            pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            // Add additional pages if needed
            while(heightLeft > 0){
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, position, imgWidth, imgHeight);
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
        } finally{
            setDownloading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-8c22482bbe3d1e19" + " " + `min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-8c22482bbe3d1e19" + " " + `sticky top-0 z-10 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-8c22482bbe3d1e19" + " " + "text-xl md:text-2xl font-bold flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                children: "🦀"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 925,
                                columnNumber: 11
                            }, this),
                            "Sql Learning Roadmap"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 924,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                disabled: downloading,
                                className: "jsx-8c22482bbe3d1e19" + " " + `px-4 py-2 rounded-md text-white ${downloading ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"} transition-colors flex items-center`,
                                children: downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-8c22482bbe3d1e19" + " " + "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                    className: "jsx-8c22482bbe3d1e19" + " " + "opacity-25"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 947,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                    className: "jsx-8c22482bbe3d1e19" + " " + "opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 955,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 941,
                                            columnNumber: 17
                                        }, this),
                                        "Processing..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "currentColor",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            className: "jsx-8c22482bbe3d1e19" + " " + "w-4 h-4 mr-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z",
                                                className: "jsx-8c22482bbe3d1e19"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 971,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 965,
                                            columnNumber: 17
                                        }, this),
                                        "Download Roadmap"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 930,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                "aria-label": "Toggle Dark Mode",
                                className: "jsx-8c22482bbe3d1e19" + " " + `p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"}`,
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: "jsx-8c22482bbe3d1e19" + " " + "h-5 w-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                        clipRule: "evenodd",
                                        className: "jsx-8c22482bbe3d1e19"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 995,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 989,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: "jsx-8c22482bbe3d1e19" + " " + "h-5 w-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
                                        className: "jsx-8c22482bbe3d1e19"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 1008,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 1002,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 979,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 928,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                lineNumber: 919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-8c22482bbe3d1e19" + " " + "container mx-auto px-4 py-8 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8c22482bbe3d1e19" + " " + `mb-8 p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md transition-colors duration-300`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-8c22482bbe3d1e19" + " " + "text-xl md:text-2xl font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                        children: "🦀"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 1023,
                                        columnNumber: 13
                                    }, this),
                                    "Welcome to the Rust Learning Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-8c22482bbe3d1e19" + " " + "text-sm md:text-base leading-relaxed",
                                children: "This comprehensive roadmap will guide you through your Sql programming learning journey, from basic syntax to advanced concepts. Each section contains curated resources in both English and Hindi, along with practical projects and hands-on exercises. Click on any section to expand it and explore detailed learning materials, tools, and project ideas that will help you master Sql programming."
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 1026,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 1017,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8c22482bbe3d1e19" + " " + "space-y-4",
                        children: sqlRoadmap.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8c22482bbe3d1e19" + " " + `rounded-lg shadow-md overflow-hidden transition-all duration-300 ${darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSection(section.id),
                                        "aria-expanded": openSection === section.id,
                                        className: "jsx-8c22482bbe3d1e19" + " " + "w-full px-6 py-4 flex items-center justify-between focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + `flex items-center justify-center w-8 h-8 rounded-full mr-3 ${darkMode ? "bg-blue-600" : "bg-blue-500"} text-white font-medium`,
                                                        children: section.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "font-semibold text-lg",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`,
                                                                children: section.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1064,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1062,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1054,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: "jsx-8c22482bbe3d1e19" + " " + `w-5 h-5 transform transition-transform duration-300 ${openSection === section.id ? "rotate-180" : "rotate-0"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd",
                                                    className: "jsx-8c22482bbe3d1e19"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1073,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 1049,
                                        columnNumber: 15
                                    }, this),
                                    openSection === section.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8c22482bbe3d1e19" + " " + `px-6 pb-6 pt-2 border-t ${darkMode ? "border-gray-700" : "border-gray-200"} animate-fadeIn`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1099,
                                                                columnNumber: 23
                                                            }, this),
                                                            "What to Learn"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                        children: section.content.whatToLearn.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1109,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1097,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "📚"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1119,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Best Courses"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8c22482bbe3d1e19",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + `font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                                                        children: "In English:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "space-y-1",
                                                                        children: section.content.bestCourses.english.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "jsx-8c22482bbe3d1e19" + " " + `flex items-start ${darkMode ? "text-gray-300" : "text-gray-700"}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "min-w-4 text-blue-500 mr-2",
                                                                                        children: "•"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                        lineNumber: 1141,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    course
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 1135,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1132,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8c22482bbe3d1e19",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + `font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                                                        children: "In Hindi:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1153,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "space-y-1",
                                                                        children: section.content.bestCourses.hindi.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "jsx-8c22482bbe3d1e19" + " " + `flex items-start ${darkMode ? "text-gray-300" : "text-gray-700"}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "min-w-4 text-blue-500 mr-2",
                                                                                        children: "•"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                        lineNumber: 1169,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    course
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 1163,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1160,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1122,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "🧰"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Tools to Use"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex flex-wrap gap-2",
                                                        children: section.content.toolsToUse.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800"}`,
                                                                children: tool
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1188,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "📘"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Documentation & Resources"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                        children: section.content.documentation.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1215,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    resource
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19" + " " + "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "💡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1225,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Project Ideas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                        children: section.content.projectIdeas.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-8c22482bbe3d1e19" + " " + "w-1.5 h-1.5 rounded-full bg-green-500 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 1235,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    project
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8c22482bbe3d1e19",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex items-center text-lg font-medium mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + "mr-2",
                                                                children: "🏆"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1245,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Practice Platforms"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8c22482bbe3d1e19" + " " + "flex flex-wrap gap-2",
                                                        children: section.content.practicePlatforms.map((platform, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8c22482bbe3d1e19" + " " + `px-3 py-1 rounded-full text-sm ${darkMode ? "bg-green-700 text-green-200" : "bg-green-200 text-green-800"}`,
                                                                children: platform
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 1250,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 1243,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 1091,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 1040,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 1038,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8c22482bbe3d1e19" + " " + `mt-12 p-6 rounded-lg text-center ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-8c22482bbe3d1e19" + " " + `text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`,
                            children: "🚀 Start your Sql journey today! Remember, consistency is key to mastering programming."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                            lineNumber: 1276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 1271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                lineNumber: 1015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8c22482bbe3d1e19",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn.jsx-8c22482bbe3d1e19{animation:.3s ease-out fadeIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
        lineNumber: 913,
        columnNumber: 5
    }, this);
};
_s(SqlRoadmapComponent, "fsiImWlcuuf75SbLvFwaG5yXW0g=");
_c = SqlRoadmapComponent;
const __TURBOPACK__default__export__ = SqlRoadmapComponent;
var _c;
__turbopack_context__.k.register(_c, "SqlRoadmapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Roadmaps_Sql_sql_jsx_2b8e04f0._.js.map