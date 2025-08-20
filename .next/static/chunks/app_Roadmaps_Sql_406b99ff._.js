(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Roadmaps/Sql/roadmapData.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"Introduction to SQL (Beginner Level)\",\"description\":\"Foundation of SQL and database concepts for beginners\",\"icon\":\"Database\",\"level\":\"Beginner\",\"content\":{\"whatToLearn\":[\"What is a Database?\",\"What is SQL? History and Importance\",\"Types of Databases: Relational (MySQL, PostgreSQL), NoSQL\",\"Basic SQL Commands: SELECT, INSERT, UPDATE, DELETE\",\"SQL Data Types (VARCHAR, INT, DATE, etc.)\",\"Primary Keys and Foreign Keys\",\"Basic Database Design Principles\",\"SQL Syntax and Structure\",\"Creating and Managing Tables\"],\"bestCourses\":{\"english\":[\"freeCodeCamp SQL Tutorial (YouTube)\",\"Kudvenkat SQL Server Tutorial (YouTube)\",\"SQL Tutorial - Full Database Course for Beginners\",\"Khan Academy - Intro to SQL\",\"Codecademy SQL Course\"],\"hindi\":[\"CodeWithHarry SQL Full Course (YouTube)\",\"WsCube Tech SQL Hindi (YouTube)\",\"Apna College SQL Complete Course\",\"TechGun SQL Tutorial Hindi\",\"Geeky Shows SQL Course Hindi\"]},\"toolsToUse\":[\"DB Browser for SQLite\",\"MySQL Workbench\",\"PgAdmin (PostgreSQL)\",\"phpMyAdmin\",\"SQL Server Management Studio\",\"Online SQL Editors (W3Schools, SQLiteStudio)\",\"DBeaver (Universal Database Tool)\",\"HeidiSQL\"],\"docsAndWebsites\":[\"W3Schools SQL Tutorial\",\"SQLBolt Interactive Tutorial\",\"Mode Analytics SQL Tutorial\",\"MySQL Official Documentation\",\"PostgreSQL Tutorial\"],\"projectIdeas\":[\"Student Database System\",\"Simple Employee Management DB\",\"Library Management System\",\"Basic Inventory Tracker\",\"Personal Expense Tracker DB\",\"Contact Management System\",\"Simple Blog Database\"],\"practicePlatforms\":[\"LeetCode SQL (Easy Problems)\",\"HackerRank SQL Domain\",\"W3Schools SQL Exercises\",\"SQLBolt Practice\",\"SQL-Practice.com\"]}},{\"id\":2,\"title\":\"Intermediate SQL\",\"description\":\"Advanced querying techniques and database operations\",\"icon\":\"Filter\",\"level\":\"Intermediate\",\"content\":{\"whatToLearn\":[\"WHERE, ORDER BY, GROUP BY, HAVING Clauses\",\"Aggregate Functions: COUNT, AVG, SUM, MIN, MAX\",\"Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN\",\"Subqueries and Nested Queries\",\"SQL Views and Aliases\",\"UNION, INTERSECT, EXCEPT Operations\",\"String Functions and Date Functions\",\"Conditional Logic (CASE WHEN)\",\"NULL Handling and COALESCE\",\"Data Filtering and Sorting Techniques\"],\"bestCourses\":{\"english\":[\"The Complete SQL Bootcamp - Udemy\",\"Khan Academy - Advanced SQL\",\"Coursera SQL for Data Science\",\"edX Introduction to Databases\",\"Pluralsight SQL Server Fundamentals\"],\"hindi\":[\"WsCube Tech Intermediate SQL\",\"Apna College Advanced SQL\",\"CodeWithHarry SQL Advanced Topics\",\"Unacademy SQL Course\",\"TechWorld with Nana SQL\"]},\"toolsToUse\":[\"PostgreSQL with PgAdmin\",\"MySQL Community Server\",\"SQL Server Management Studio\",\"Oracle SQL Developer\",\"DataGrip (JetBrains)\",\"Sequel Pro (Mac)\",\"TablePlus\",\"Azure Data Studio\"],\"docsAndWebsites\":[\"GeeksforGeeks SQL Tutorial\",\"TutorialsPoint SQL Guide\",\"PostgreSQL Documentation\",\"MySQL Reference Manual\",\"SQL Server Documentation\"],\"projectIdeas\":[\"Inventory Management System\",\"Movie Recommendation Database\",\"Mini e-Commerce Database\",\"Sales Analytics Dashboard DB\",\"University Course Management\",\"Restaurant Order Management\",\"Real Estate Property DB\"],\"practicePlatforms\":[\"LeetCode SQL (Medium Problems)\",\"HackerRank Intermediate SQL\",\"DataCamp SQL Practice\",\"Kaggle Learn SQL\",\"StrataScratch SQL Questions\"]}},{\"id\":3,\"title\":\"Advanced SQL (Expert Level)\",\"description\":\"Master advanced SQL concepts and database optimization\",\"icon\":\"TrendingUp\",\"level\":\"Advanced\",\"content\":{\"whatToLearn\":[\"Window Functions (RANK(), ROW_NUMBER(), LEAD(), LAG())\",\"Common Table Expressions (CTEs)\",\"Recursive Queries\",\"Database Indexing and Optimization\",\"Query Performance Tuning\",\"Transactions (ACID Properties, COMMIT, ROLLBACK)\",\"Triggers and Stored Procedures\",\"User-Defined Functions\",\"Partitioning and Sharding\",\"Database Security and Permissions\"],\"bestCourses\":{\"english\":[\"Advanced SQL for Data Scientists - Udemy\",\"SQL for Data Analysis - Udacity\",\"The Complete SQL Bootcamp by Jose Portilla\",\"Advanced Database Systems - Coursera\",\"SQL Server Performance Tuning\"],\"hindi\":[\"Unacademy SQL Advanced Course\",\"Advanced SQL Hindi - WsCube Tech\",\"Database Optimization Hindi - TechGun\",\"SQL Performance Tuning Hindi\",\"Advanced Database Concepts Hindi\"]},\"toolsToUse\":[\"Apache Superset\",\"DBeaver Professional\",\"Google BigQuery\",\"Snowflake\",\"Amazon Redshift\",\"Microsoft Azure SQL\",\"Query Performance Analyzers\",\"Database Monitoring Tools\"],\"docsAndWebsites\":[\"Mode Analytics Advanced SQL\",\"PostgreSQL Advanced Documentation\",\"SQL Server Query Optimization Guide\",\"BigQuery Documentation\",\"Snowflake SQL Reference\"],\"projectIdeas\":[\"Financial Dashboard Database\",\"Hospital Management System DB\",\"Custom CRM Database\",\"Data Warehouse Design\",\"Real-time Analytics Platform\",\"Multi-tenant SaaS Database\",\"Business Intelligence Dashboard\"],\"practicePlatforms\":[\"LeetCode SQL (Hard Problems)\",\"HackerRank Advanced SQL\",\"DataLemur SQL Questions\",\"InterviewQuery SQL Practice\",\"SQL Murder Mystery\"]}},{\"id\":4,\"title\":\"Database Design & Architecture\",\"description\":\"Learn database design principles and system architecture\",\"icon\":\"BarChart3\",\"level\":\"Advanced\",\"content\":{\"whatToLearn\":[\"Database Normalization (1NF, 2NF, 3NF, BCNF)\",\"Entity-Relationship (ER) Modeling\",\"Database Schema Design\",\"Data Modeling Best Practices\",\"ACID Properties and Transaction Management\",\"Concurrency Control\",\"Database Backup and Recovery\",\"Replication and High Availability\",\"Scalability Patterns\",\"Data Warehousing Concepts\"],\"bestCourses\":{\"english\":[\"Database Design Course - Coursera\",\"Database Systems - Stanford Online\",\"Data Modeling Fundamentals\",\"Database Administration Course\",\"System Design for Databases\"],\"hindi\":[\"Database Design Hindi - CodeWithHarry\",\"DBMS Complete Course Hindi\",\"Database Architecture Hindi\",\"System Design Hindi - Apna College\",\"Database Management Hindi\"]},\"toolsToUse\":[\"ER Diagram Tools (Lucidchart, Draw.io)\",\"MySQL Workbench (Design Mode)\",\"DbSchema\",\"Vertabelo\",\"SQL Power Architect\",\"Database Design Tools\",\"Backup and Recovery Tools\",\"Monitoring Solutions\"],\"docsAndWebsites\":[\"Database Design Guide\",\"Normalization Tutorial\",\"ER Modeling Best Practices\",\"Database Administration Guide\",\"High Availability Documentation\"],\"projectIdeas\":[\"E-commerce Platform Database\",\"Social Media Database Design\",\"Banking System Database\",\"Healthcare Records System\",\"Educational Management System\",\"Supply Chain Database\",\"Multi-tenant Application DB\"],\"practicePlatforms\":[\"Database Design Challenges\",\"System Design Interviews\",\"Real-world Case Studies\",\"Database Certification Prep\",\"Architecture Review Sessions\"]}},{\"id\":5,\"title\":\"SQL for Data Analysis & BI\",\"description\":\"Master SQL for data analysis and business intelligence\",\"icon\":\"Brain\",\"level\":\"Advanced\",\"content\":{\"whatToLearn\":[\"Analytical Functions and Window Functions\",\"Statistical Functions in SQL\",\"Data Aggregation and Summarization\",\"Time Series Analysis with SQL\",\"Cohort Analysis and Retention Metrics\",\"A/B Testing with SQL\",\"Data Cleaning and Transformation\",\"Report Generation with SQL\",\"SQL for ETL Processes\",\"Integration with BI Tools\"],\"bestCourses\":{\"english\":[\"SQL for Data Analysis - Udacity\",\"Data Analysis with SQL - Coursera\",\"Business Intelligence with SQL\",\"Advanced Analytics with SQL\",\"SQL for Data Scientists\"],\"hindi\":[\"Data Analysis SQL Hindi - WsCube Tech\",\"Business Intelligence Hindi Course\",\"SQL for Analytics Hindi - Unacademy\",\"Data Science SQL Hindi\",\"BI Tools with SQL Hindi\"]},\"toolsToUse\":[\"Tableau (SQL Integration)\",\"Power BI\",\"Looker\",\"Google Data Studio\",\"Apache Airflow\",\"dbt (Data Build Tool)\",\"Jupyter Notebooks with SQL\",\"Google Colab\"],\"docsAndWebsites\":[\"SQL for Data Analysis Guide\",\"Business Intelligence Best Practices\",\"Statistical Functions Reference\",\"Time Series Analysis with SQL\",\"Data Warehouse SQL Patterns\"],\"projectIdeas\":[\"Sales Performance Dashboard\",\"Customer Analytics Platform\",\"Marketing Campaign Analysis\",\"Financial Reporting System\",\"Operational Analytics Dashboard\",\"Product Usage Analytics\",\"Supply Chain Analytics\"],\"practicePlatforms\":[\"Kaggle SQL Competitions\",\"DataCamp Projects\",\"Mode Analytics Public Datasets\",\"Google BigQuery Public Data\",\"Real Business Case Studies\"]}},{\"id\":6,\"title\":\"Modern SQL & Cloud Databases\",\"description\":\"Explore modern SQL features and cloud database platforms\",\"icon\":\"Zap\",\"level\":\"Expert\",\"content\":{\"whatToLearn\":[\"JSON Support in SQL (PostgreSQL, MySQL)\",\"NoSQL Integration with SQL\",\"Graph Database Queries\",\"Cloud Database Platforms\",\"Serverless SQL Solutions\",\"Real-time Data Processing\",\"Distributed SQL Systems\",\"SQL on Big Data (Spark SQL, Presto)\",\"API Integration with Databases\",\"Modern SQL Standards (SQL:2016, SQL:2023)\"],\"bestCourses\":{\"english\":[\"Modern SQL on Cloud Platforms\",\"Big Data SQL - Coursera\",\"Cloud Database Architecture\",\"Distributed Systems and SQL\",\"Real-time Analytics with SQL\"],\"hindi\":[\"Cloud Databases Hindi Course\",\"Modern SQL Features Hindi\",\"Big Data SQL Hindi Tutorial\",\"Cloud Computing with SQL Hindi\",\"Distributed Databases Hindi\"]},\"toolsToUse\":[\"Google BigQuery\",\"Amazon Redshift\",\"Snowflake\",\"Azure Synapse Analytics\",\"CockroachDB\",\"Apache Spark SQL\",\"Presto/Trino\",\"ClickHouse\"],\"docsAndWebsites\":[\"Cloud SQL Documentation\",\"Modern SQL Features Guide\",\"Distributed SQL Best Practices\",\"JSON in SQL Tutorial\",\"Real-time SQL Processing\"],\"projectIdeas\":[\"Real-time Analytics Dashboard\",\"Serverless Data Pipeline\",\"Multi-cloud Database Solution\",\"IoT Data Processing System\",\"Machine Learning Feature Store\",\"Event-driven Data Architecture\",\"Global Distributed Application\"],\"practicePlatforms\":[\"Cloud Platform Challenges\",\"BigQuery Public Datasets\",\"Snowflake Hands-on Labs\",\"AWS Data Analytics Challenges\",\"Modern SQL Competitions\"]}},{\"id\":7,\"title\":\"Career & Certification Path\",\"description\":\"Build your SQL career with certifications and portfolio projects\",\"icon\":\"Award\",\"level\":\"All Levels\",\"content\":{\"whatToLearn\":[\"SQL Certification Preparation\",\"Database Administrator Skills\",\"Data Analyst Career Path\",\"Data Engineer SQL Skills\",\"Business Intelligence Developer\",\"Interview Preparation\",\"Portfolio Development\",\"Open Source Contributions\",\"Professional Networking\",\"Continuous Learning Strategies\"],\"bestCourses\":{\"english\":[\"SQL Certification Bootcamp\",\"Database Career Fundamentals\",\"Data Professional Skills\",\"SQL Interview Preparation\",\"Portfolio Building for Data Roles\"],\"hindi\":[\"SQL Career Guide Hindi\",\"Database Jobs Preparation Hindi\",\"Data Analyst Career Hindi\",\"SQL Interview Hindi - Love Babbar\",\"Tech Career Guidance Hindi\"]},\"toolsToUse\":[\"Certification Platforms\",\"Portfolio Websites\",\"GitHub for SQL Projects\",\"LinkedIn Learning\",\"Professional Forums\",\"Meetup Groups\",\"Conference Platforms\",\"Mentoring Platforms\"],\"docsAndWebsites\":[\"SQL Certification Guide\",\"Database Career Roadmap\",\"Interview Question Banks\",\"Portfolio Project Templates\",\"Professional Development Resources\"],\"projectIdeas\":[\"Complete E-commerce Database\",\"Data Analytics Portfolio\",\"Open Source Database Tool\",\"SQL Tutorial Blog/Website\",\"Database Performance Optimizer\",\"Real-time Dashboard Application\",\"Industry-specific Database Solutions\",\"SQL Code Review Platform\",\"Database Migration Tool\",\"Custom Reporting Framework\"],\"practicePlatforms\":[\"Certification Practice Tests\",\"Mock Interview Platforms\",\"GitHub Portfolio Reviews\",\"Professional Communities\",\"Industry Challenges\",\"Hackathons and Competitions\"]}}]"));}}),
"[project]/app/Roadmaps/Sql/downloadPdf.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// PDF download utility functions
__turbopack_context__.s({
    "handleDownloadPDF": (()=>handleDownloadPDF)
});
let html2canvas;
let jsPDF;
// Dynamically import libraries only on client side
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>{
        html2canvas = module.default;
    });
    __turbopack_context__.r("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>{
        jsPDF = module.default;
    });
}
// Create styled content for PDF generation
const createDownloadContent = (roadmapData, darkMode)=>{
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
    title.style.borderBottom = "3px solid #3498db";
    title.style.paddingBottom = "15px";
    title.textContent = "SQL Complete Roadmap";
    downloadDiv.appendChild(title);
    // Add roadmap content with improved styling
    roadmapData.forEach((section)=>{
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections
        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #3498db";
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
        // Docs & Websites with better styling
        const docs = document.createElement("div");
        docs.style.marginBottom = "25px";
        const docsTitle = document.createElement("h3");
        docsTitle.style.fontSize = "18px";
        docsTitle.style.fontWeight = "600";
        docsTitle.style.color = "#e74c3c";
        docsTitle.style.marginBottom = "12px";
        docsTitle.style.borderBottom = "2px solid #e74c3c";
        docsTitle.style.paddingBottom = "5px";
        docsTitle.textContent = "📘 Docs & Websites";
        docs.appendChild(docsTitle);
        const docsList = document.createElement("ul");
        docsList.style.paddingLeft = "25px";
        docsList.style.margin = "15px 0";
        section.content.docsAndWebsites.forEach((doc)=>{
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
        downloadDiv.appendChild(sectionDiv);
    });
    return downloadDiv;
};
const handleDownloadPDF = async (roadmapData, setDownloading)=>{
    if (!html2canvas || !jsPDF) {
        alert("PDF generation libraries are still loading. Please try again in a moment.");
        return;
    }
    setDownloading(true);
    try {
        // Create temporary div with roadmap content
        const downloadDiv = createDownloadContent(roadmapData);
        // Temporarily add the div to the document to render it
        document.body.appendChild(downloadDiv);
        // IMPROVED html2canvas settings for better quality
        const canvas = await html2canvas(downloadDiv, {
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
        const pdf = new jsPDF({
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
        // Save the PDF
        pdf.save("Sql_Roadmap.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    } finally{
        setDownloading(false);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/visualRoadmap.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SQLRoadmap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function SQLRoadmap() {
    const roadmap = [
        {
            title: "Foundation",
            subtitle: "SQL Fundamentals",
            steps: [
                {
                    step: "Step - 1",
                    topic: "SQL Basics & Database Concepts",
                    category: "Core Concepts",
                    details: "What SQL is, Database vs DBMS vs RDBMS, SQL vs NoSQL overview, ACID properties understanding"
                },
                {
                    step: "Step - 2",
                    topic: "Database Structure",
                    category: "Schema Design",
                    details: "Creating & Dropping Databases/Tables, Data Types (INT, VARCHAR, DATE, BOOLEAN, JSON), Constraints"
                },
                {
                    step: "Step - 3",
                    topic: "CRUD Operations",
                    category: "Basic Operations",
                    details: "SELECT, INSERT, UPDATE, DELETE statements, Primary Key, Foreign Key, Unique constraints"
                },
                {
                    step: "Step - 4",
                    topic: "Data Filtering & Selection",
                    category: "Query Fundamentals",
                    details: "WHERE clause, BETWEEN, IN, LIKE, IS NULL, DISTINCT for precise data retrieval"
                }
            ]
        },
        {
            title: "Intermediate",
            subtitle: "Query Mastery",
            steps: [
                {
                    step: "Step - 5",
                    topic: "Aggregate Functions",
                    category: "Data Analysis",
                    details: "COUNT, SUM, AVG, MIN, MAX functions for statistical analysis and reporting"
                },
                {
                    step: "Step - 6",
                    topic: "Grouping & Sorting",
                    category: "Data Organization",
                    details: "GROUP BY for categorization, HAVING for group filtering, ORDER BY for result ordering"
                },
                {
                    step: "Step - 7",
                    topic: "Table Relationships",
                    category: "Join Operations",
                    details: "INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN, SELF JOIN for multi-table queries"
                },
                {
                    step: "Step - 8",
                    topic: "Advanced Querying",
                    category: "Complex Operations",
                    details: "Subqueries (Nested, Correlated), Set Operators (UNION, INTERSECT, EXCEPT)"
                }
            ]
        },
        {
            title: "Advanced",
            subtitle: "Professional SQL",
            steps: [
                {
                    step: "Step - 9",
                    topic: "Database Objects",
                    category: "Advanced Structures",
                    details: "Views & Materialized Views, Stored Procedures & Functions, Triggers for automation"
                },
                {
                    step: "Step - 10",
                    topic: "Transaction Management",
                    category: "Data Integrity",
                    details: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT for maintaining data consistency"
                },
                {
                    step: "Step - 11",
                    topic: "Window Functions",
                    category: "Analytical SQL",
                    details: "ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE()"
                },
                {
                    step: "Step - 12",
                    topic: "Performance Features",
                    category: "Optimization",
                    details: "Indexes (Clustered, Non-Clustered, Composite), CTEs, Pivot & Unpivot operations"
                }
            ]
        },
        {
            title: "Mastery",
            subtitle: "Expert Level",
            steps: [
                {
                    step: "Step - 13",
                    topic: "Performance Optimization",
                    category: "Query Tuning",
                    details: "Execution Plans, Indexing Strategies, N+1 query prevention, Normalization strategies"
                },
                {
                    step: "Step - 14",
                    topic: "Database Design",
                    category: "Architecture",
                    details: "ER Diagrams, Normal Forms (1NF-BCNF), Schema Design Best Practices, Relationships"
                },
                {
                    step: "Step - 15",
                    topic: "Security & Best Practices",
                    category: "Production Ready",
                    details: "SQL Injection prevention, User Roles & Permissions, Encryption, Backup & Recovery"
                },
                {
                    step: "Step - 16",
                    topic: "Enterprise Integration",
                    category: "Real-World Applications",
                    details: "ETL processes, Big Data SQL (Presto, Hive, BigQuery), API integration, Data Pipelines"
                }
            ]
        }
    ];
    const projectSuggestions = [
        {
            level: "Foundation",
            project: "Personal Library System"
        },
        {
            level: "Intermediate",
            project: "E-commerce Database"
        },
        {
            level: "Advanced",
            project: "Banking System Database"
        },
        {
            level: "Mastery",
            project: "Data Warehouse & Analytics"
        }
    ];
    const getSectionColor = (idx)=>{
        const colors = [
            'bg-gradient-to-r from-blue-500 to-blue-600',
            'bg-gradient-to-r from-purple-500 to-purple-600',
            'bg-gradient-to-r from-orange-500 to-orange-600',
            'bg-gradient-to-r from-green-500 to-green-600'
        ];
        return colors[idx] || colors[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: "🗃️ 16 Essential Steps • 🚀 4 Skill Levels • 💼 Career Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12 sm:space-y-16",
                    children: roadmap.map((section, sectionIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-8 max-w-6xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-normal opacity-90 mt-1",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col space-y-6 flex-grow",
                                                children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 text-right text-sm font-medium text-gray-500",
                                                                    children: item.step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    viewBox: "0 0 100 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                id: `gradient-${sectionIdx}-${stepIdx}`,
                                                                                x1: "0%",
                                                                                y1: "0%",
                                                                                x2: "100%",
                                                                                y2: "0%",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "0%",
                                                                                        stopColor: "#8B5CF6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                                        lineNumber: 194,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "100%",
                                                                                        stopColor: "#06B6D4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                                        lineNumber: 195,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "0",
                                                                            y1: "12",
                                                                            x2: "70",
                                                                            y2: "12",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 198,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "60,6 70,12 60,18",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-base font-semibold text-gray-800 mb-1",
                                                                            children: item.topic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 204,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 mb-2",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-600 leading-relaxed",
                                                                            children: item.details
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, stepIdx, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-normal opacity-90",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8",
                                            children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",
                                                                            children: item.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-semibold text-gray-800 mb-2",
                                                                    children: item.topic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                                    children: item.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stepIdx, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sectionIdx, true, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                            children: "🗃️ SQL Practice Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: projectSuggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-gray-800 mb-2 text-sm sm:text-base",
                                            children: item.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: item.project
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "🗃️ Popular SQL Databases & Tools"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "SQL Databases"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "PostgreSQL, MySQL, SQL Server, Oracle DB"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "SQL Clients"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "DBeaver, DataGrip, pgAdmin, MySQL Workbench"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "ORMs"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "SQLAlchemy, Sequelize, Hibernate, Django ORM"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Data Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Airflow, dbt, Kafka, ETL Pipelines"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Big Data SQL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Presto, Hive, BigQuery, Snowflake"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "BI Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Tableau, Power BI, Looker, Grafana"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Version Control"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Flyway, Liquibase, Git, Schema Migration"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Cloud Databases"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "AWS RDS, Azure SQL, GCP Cloud SQL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Industry-Level SQL Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "📚 Library Management System"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Design complete library database with books, members, transactions, and fine management."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block",
                                            children: "MySQL/PostgreSQL • CRUD • Relationships"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🏦 Banking System Database"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build banking database with accounts, transactions, loans, and security features."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block",
                                            children: "Transactions • Security • ACID Properties"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🛒 E-commerce Database"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Create online store database with products, orders, payments, and user management."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block",
                                            children: "Complex Joins • Performance • Indexing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "📊 Analytics Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build data warehouse with ETL processes and reporting queries for business intelligence."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block",
                                            children: "Data Warehouse • ETL • Reporting"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "💼 Career Roles with SQL"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "SQL Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Database Administrator"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Data Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "BI Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Backend Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Data Analyst"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 sm:mt-16 text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base px-4",
                        children: "⚡ Remember: SQL is the foundation of data work. Master the fundamentals, practice with real projects, and focus on performance!"
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/visualRoadmap.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c = SQLRoadmap;
var _c;
__turbopack_context__.k.register(_c, "SQLRoadmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/sql.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/roadmapData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/downloadPdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$visualRoadmap$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/visualRoadmap.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisualMode, setIsVisualMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for roadmap view mode
    // Toggle section open/close - now allows multiple sections to be open
    const toggleSection = (id)=>{
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(id)) {
            newOpenSections.delete(id);
        } else {
            newOpenSections.add(id);
        }
        setOpenSections(newOpenSections);
    };
    // Toggle dark mode
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
    };
    // Toggle between visual and textual roadmap
    const toggleRoadmapView = ()=>{
        setIsVisualMode(!isVisualMode);
    };
    // Handle PDF download
    const handleDownload = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$json__$28$json$29$__["default"], setDownloading);
    };
    // Handle YouTube redirect
    const handleYouTubeRedirect = ()=>{
        window.open("https://youtu.be/yE6tIle64tU?si=kLstcRRBpNC1J3N1", "_blank");
    };
    // Handle AI Guide redirect
    const handleAIGuideRedirect = ()=>{
        window.location.href = "/CareerGuidance";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen font-sans ${darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleYouTubeRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"} text-white`,
                        title: "YouTube AI/ML Courses",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "YouTube Courses",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAIGuideRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600" : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"} text-white`,
                        title: "AI Career Guidance",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "AI Career Guide",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-10 backdrop-blur-lg ${darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"} border-b shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 transition-all duration-300`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                children: "SQL programming"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(false),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${!isVisualMode ? "bg-white dark:bg-gray-900 shadow text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"}`,
                                        title: "Switch to Textual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Textual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(true),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${isVisualMode ? "bg-white dark:bg-gray-900 shadow text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-purple-500"}`,
                                        title: "Switch to Visual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M2.458 12C3.732 7.94 7.523 5 12 5s8.268 2.94 9.542 7c-1.274 4.06-5.064 7-9.542 7s-8.268-2.94-9.542-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Visual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                disabled: downloading,
                                className: `px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide text-white shadow-lg transform transition-all duration-200 ${downloading ? "bg-gray-500 cursor-not-allowed scale-95" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 active:scale-95"} flex items-center`,
                                children: downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin -ml-1 mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Generating PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                className: `p-2 sm:p-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 ${darkMode ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400" : "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700"}`,
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 sm:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto px-4`,
                                children: "A comprehensive guide to becoming a SQL databaser developer, step-by-step learning path, courses, tools, and project ideas."
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    isVisualMode ? /* Visual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-500 ease-in-out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$visualRoadmap$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            roadmapData: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$json__$28$json$29$__["default"],
                            darkMode: darkMode
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this) : /* Textual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8 transition-all duration-500 ease-in-out",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$json__$28$json$29$__["default"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `section-${section.id}`,
                                className: `${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${openSections.has(section.id) ? "ring-2 ring-blue-500/20" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSection(section.id),
                                        className: `w-full p-4 sm:p-6 lg:p-8 text-left flex justify-between items-center ${darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"} transition-all duration-200 group`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-2 sm:mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0",
                                                                children: section.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 351,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors truncate",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm sm:text-base lg:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} ml-9 sm:ml-12 pr-4`,
                                                        children: section.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 sm:ml-6 transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0",
                                                children: openSections.has(section.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M5 15l7-7 7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 372,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                    lineNumber: 380,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this),
                                    openSections.has(section.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} border-t animate-in slide-in-from-top-2 duration-300`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-green-900/20 border-green-500/20" : "bg-green-50/80 border-green-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "✅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "What to Learn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.whatToLearn?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-green-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 413,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-orange-900/20 border-orange-500/20" : "bg-orange-50/80 border-orange-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "🧰"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Tools to Use"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 432,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.toolsToUse?.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-orange-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 444,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: tool
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 447,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 429,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-blue-900/20 border-blue-500/20" : "bg-blue-50/80 border-blue-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📚"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Best Courses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 457,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4 sm:space-y-5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "font-bold mb-2 sm:mb-3 text-base sm:text-lg",
                                                                            children: "In English:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-1 sm:space-y-2",
                                                                            children: section.content?.bestCourses?.english?.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: `text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0",
                                                                                            children: "•"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                            lineNumber: 475,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium",
                                                                                            children: course
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                            lineNumber: 478,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, index, true, {
                                                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                    lineNumber: 471,
                                                                                    columnNumber: 35
                                                                                }, this)) || []
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 463,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 454,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-red-900/20 border-red-500/20" : "bg-red-50/80 border-red-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📘"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Docs & Websites"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 491,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.docsAndWebsites?.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-red-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: doc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                                lineNumber: 506,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 497,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 402,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 sm:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-600 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl mr-3 sm:mr-4",
                                                                children: "💡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 516,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Project Ideas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                                                        children: section.content?.projectIdeas?.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-purple-900/20 border-purple-500/20" : "bg-purple-50/80 border-purple-200/50"} border transition-all duration-200 hover:shadow-lg hover:scale-105`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-purple-500 mr-3 sm:mr-4 mt-1 text-lg sm:text-xl flex-shrink-0",
                                                                            children: "💡"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${darkMode ? "text-gray-200" : "text-gray-700"} font-medium text-sm sm:text-base leading-relaxed`,
                                                                            children: project
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                                lineNumber: 523,
                                                                columnNumber: 27
                                                            }, this)) || []
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                                lineNumber: 514,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                        lineNumber: 399,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Roadmaps/Sql/sql.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Home, "wXxFNg94s+JcTgZrDnZB0wcL8Ho=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Roadmaps_Sql_406b99ff._.js.map