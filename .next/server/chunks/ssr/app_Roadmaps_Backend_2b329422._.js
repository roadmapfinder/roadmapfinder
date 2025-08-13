module.exports = {

"[project]/app/Roadmaps/Backend/downloadPdf.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// PDF download utility functions
__turbopack_context__.s({
    "handleDownloadPDF": (()=>handleDownloadPDF)
});
let html2canvas;
let jsPDF;
// Dynamically import libraries only on client side
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
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
    title.textContent = "Excel expert Roadmap";
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
        pdf.save("backend_Roadmap.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    } finally{
        setDownloading(false);
    }
};
}}),
"[project]/app/Roadmaps/Backend/visualRoadmap.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BackendRoadmap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function BackendRoadmap() {
    const roadmap = [
        {
            title: "Foundation",
            subtitle: "Programming & Web Basics",
            steps: [
                {
                    step: "Step - 1",
                    topic: "Programming Fundamentals",
                    category: "Core Programming",
                    details: "Master data structures (arrays, linked lists, trees), algorithms (sorting, searching), OOP principles, and functional programming basics. Choose your primary language: JavaScript/TypeScript, Python, Java, Go, or C#"
                },
                {
                    step: "Step - 2",
                    topic: "HTTP & Web Fundamentals",
                    category: "Web Protocols",
                    details: "HTTP methods (GET, POST, PUT, DELETE), status codes (200, 404, 500), REST API design principles, GraphQL & gRPC basics, WebSockets for real-time communication"
                },
                {
                    step: "Step - 3",
                    topic: "Backend Language Deep Dive",
                    category: "Language Mastery",
                    details: "JavaScript/Node.js → Express, NestJS; Python → Django, Flask, FastAPI; Java → Spring Boot; Go → Gin, Fiber; C# → .NET Core"
                }
            ]
        },
        {
            title: "Database",
            subtitle: "Data & Storage Systems",
            steps: [
                {
                    step: "Step - 4",
                    topic: "SQL Databases",
                    category: "Relational Databases",
                    details: "PostgreSQL, MySQL, MariaDB mastery. SQL joins, indexes, normalization, transactions, stored procedures & triggers. Database design principles"
                },
                {
                    step: "Step - 5",
                    topic: "NoSQL & Modern Storage",
                    category: "Non-Relational Databases",
                    details: "MongoDB, Cassandra, DynamoDB. Key-value stores (Redis). When to choose NoSQL over SQL, document vs graph databases"
                },
                {
                    step: "Step - 6",
                    topic: "ORM & Database Tools",
                    category: "Database Integration",
                    details: "Sequelize, Prisma, TypeORM (Node.js); Django ORM (Python); Hibernate (Java). Database migrations, connection pooling, query optimization"
                },
                {
                    step: "Step - 7",
                    topic: "Caching & Performance",
                    category: "Performance Optimization",
                    details: "Redis/Memcached implementation, query optimization strategies, database indexing, CDN usage for static files, horizontal vs vertical scaling"
                }
            ]
        },
        {
            title: "Security",
            subtitle: "Authentication & Protection",
            steps: [
                {
                    step: "Step - 8",
                    topic: "Authentication Systems",
                    category: "User Authentication",
                    details: "Sessions vs JWT tokens, OAuth 2.0, OpenID Connect, multi-factor authentication (MFA), password hashing (bcrypt, Argon2)"
                },
                {
                    step: "Step - 9",
                    topic: "Security Best Practices",
                    category: "Application Security",
                    details: "CSRF, XSS, SQL injection prevention, rate limiting & API throttling, HTTPS & SSL/TLS, input validation, secure headers"
                },
                {
                    step: "Step - 10",
                    topic: "API Security & Authorization",
                    category: "API Protection",
                    details: "Role-based access control (RBAC), API key management, request signing, CORS configuration, security middleware implementation"
                }
            ]
        },
        {
            title: "Advanced",
            subtitle: "Architecture & Deployment",
            steps: [
                {
                    step: "Step - 11",
                    topic: "System Architecture",
                    category: "Design Patterns",
                    details: "Monolith vs Microservices, MVC, Clean Architecture, Hexagonal Architecture, message queues (RabbitMQ, Kafka, SQS), event-driven architecture"
                },
                {
                    step: "Step - 12",
                    topic: "DevOps & Deployment",
                    category: "Production Systems",
                    details: "Docker & Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins), cloud platforms (AWS EC2, Lambda, RDS), Infrastructure as Code (Terraform)"
                },
                {
                    step: "Step - 13",
                    topic: "Testing & Quality",
                    category: "Code Quality",
                    details: "Unit testing (Jest, PyTest, JUnit), integration & end-to-end testing, test-driven development (TDD), code coverage, automated testing pipelines"
                },
                {
                    step: "Step - 14",
                    topic: "Monitoring & Observability",
                    category: "System Health",
                    details: "Logging (Winston, Log4j, Serilog), monitoring (Prometheus, Grafana), error tracking (Sentry), APM tools, distributed tracing"
                },
                {
                    step: "Step - 15",
                    topic: "Modern Backend Technologies",
                    category: "2025 Technologies",
                    details: "Serverless backends (AWS Lambda, Vercel Functions), GraphQL APIs (Apollo, Hasura), gRPC for microservices, WebAssembly, AI-assisted development"
                }
            ]
        }
    ];
    const certificationSuggestions = [
        {
            level: "Entry Level",
            certs: "AWS Cloud Practitioner, Google Cloud Associate"
        },
        {
            level: "Intermediate",
            certs: "AWS Solutions Architect Associate, Azure Developer Associate"
        },
        {
            level: "Advanced",
            certs: "AWS Solutions Architect Professional, Kubernetes Administrator (CKA)"
        },
        {
            level: "Specialty",
            certs: "AWS DevOps Engineer Professional, Google Cloud Professional Developer"
        }
    ];
    const practiceResources = [
        {
            category: "Coding Practice",
            resources: "LeetCode, HackerRank, Codewars, GeeksforGeeks"
        },
        {
            category: "Project Ideas",
            resources: "GitHub, GitLab, Bitbucket, Personal Portfolio"
        },
        {
            category: "Learning Platforms",
            resources: "Coursera, Udemy, Pluralsight, FreeCodeCamp"
        },
        {
            category: "Communities",
            resources: "Stack Overflow, Reddit r/webdev, Dev.to, Backend Developers Discord"
        }
    ];
    const getSectionColor = (idx)=>{
        const colors = [
            'bg-gradient-to-r from-blue-500 to-blue-600',
            'bg-gradient-to-r from-green-500 to-green-600',
            'bg-gradient-to-r from-orange-500 to-orange-600',
            'bg-gradient-to-r from-purple-500 to-purple-600'
        ];
        return colors[idx] || colors[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4",
                                    children: "🚀 Backend Development Roadmap 2025"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                                    children: "Master backend development with this comprehensive 15-step roadmap covering everything from programming fundamentals to modern cloud architectures"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "⚡ 15 Essential Steps • 🎯 4 Core Areas • 💼 Industry Ready"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12 sm:space-y-16",
                    children: roadmap.map((section, sectionIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-8 max-w-6xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-normal opacity-90 mt-1",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col space-y-6 flex-grow",
                                                children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 text-right text-sm font-medium text-gray-500",
                                                                    children: item.step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    viewBox: "0 0 100 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                id: `gradient-${sectionIdx}-${stepIdx}`,
                                                                                x1: "0%",
                                                                                y1: "0%",
                                                                                x2: "100%",
                                                                                y2: "0%",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "0%",
                                                                                        stopColor: "#3B82F6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                                        lineNumber: 201,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "100%",
                                                                                        stopColor: "#8B5CF6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                                        lineNumber: 202,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "0",
                                                                            y1: "12",
                                                                            x2: "70",
                                                                            y2: "12",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "60,6 70,12 60,18",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-base font-semibold text-gray-800 mb-1",
                                                                            children: item.topic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 mb-2",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-600 leading-relaxed",
                                                                            children: item.details
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, stepIdx, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-normal opacity-90",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8",
                                            children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                lineNumber: 253,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",
                                                                            children: item.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                            lineNumber: 262,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-semibold text-gray-800 mb-2",
                                                                    children: item.topic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                                    children: item.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stepIdx, true, {
                                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sectionIdx, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                            children: "🏆 Backend Certifications by Level"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: certificationSuggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-gray-800 mb-2 text-sm sm:text-base",
                                            children: item.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: item.certs
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                            children: "💻 Backend Practice Resources"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: practiceResources.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-gray-800 mb-2 text-sm sm:text-base",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: item.resources
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "🛠️ Backend Technology Stack"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Languages"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "JavaScript, TypeScript, Python, Java, Go, C#"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Frameworks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "Express, NestJS, Django, FastAPI, Spring Boot"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Databases"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "PostgreSQL, MongoDB, Redis, MySQL, DynamoDB"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "DevOps"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "Docker, Kubernetes, AWS, Jenkins, Terraform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Backend Career Paths"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-blue-600 mb-2",
                                            children: "🔧 Backend Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Junior/Senior Backend Developer, API Developer, Server-side Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-green-600 mb-2",
                                            children: "🏗️ DevOps Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "DevOps Engineer, Platform Engineer, Site Reliability Engineer (SRE)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-purple-600 mb-2",
                                            children: "🎨 Full-Stack Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Full-Stack Engineer, Technical Lead, Solution Architect"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🚀 Backend Portfolio Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-orange-600 mb-2",
                                            children: "📱 API & Services"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "REST API with authentication, Real-time chat backend with WebSockets, E-commerce backend with payments, Social media API"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-pink-600 mb-2",
                                            children: "🏗️ System Architecture"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Microservices system with Docker, Event-driven architecture, Serverless backend functions, Distributed system with message queues"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Popular Backend Frameworks 2025"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-green-600 mb-2",
                                            children: "🟢 Node.js Ecosystem"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Express.js, NestJS, Fastify, Koa.js, Hapi.js"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-blue-600 mb-2",
                                            children: "🐍 Python Frameworks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Django, FastAPI, Flask, Tornado, Pyramid"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-orange-600 mb-2",
                                            children: "☕ Java & Others"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Spring Boot, Micronaut, Quarkus, Helidon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 sm:mt-16 text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base px-4",
                        children: "⚡ Remember: Backend development is about building robust, scalable, and secure server-side applications. Focus on fundamentals, practice consistently, and always think about performance and security!"
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Backend/visualRoadmap.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Roadmaps/Backend/backend.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './blockchainRoadmap.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Backend$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Backend/downloadPdf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Backend$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Backend/visualRoadmap.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisualMode, setIsVisualMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // New state for roadmap view mode
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Backend$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(blockchainRoadmap, setDownloading);
    };
    // Handle YouTube redirect
    const handleYouTubeRedirect = ()=>{
        window.open("https://youtu.be/EH3vGeqeIAo?si=3H1-0mhBuQwKhP5k", "_blank");
    };
    // Handle AI Guide redirect
    const handleAIGuideRedirect = ()=>{
        window.location.href = "/CareerGuidance";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen font-sans ${darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleYouTubeRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"} text-white`,
                        title: "YouTube AI/ML Courses",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "YouTube Courses",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAIGuideRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600" : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"} text-white`,
                        title: "AI Career Guidance",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "AI Career Guide",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-10 backdrop-blur-lg ${darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"} border-b shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 transition-all duration-300`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                children: "Backend Engineer"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(false),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${!isVisualMode ? "bg-white dark:bg-gray-900 shadow text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"}`,
                                        title: "Switch to Textual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Textual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(true),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${isVisualMode ? "bg-white dark:bg-gray-900 shadow text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-purple-500"}`,
                                        title: "Switch to Visual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M2.458 12C3.732 7.94 7.523 5 12 5s8.268 2.94 9.542 7c-1.274 4.06-5.064 7-9.542 7s-8.268-2.94-9.542-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Visual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                disabled: downloading,
                                className: `px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide text-white shadow-lg transform transition-all duration-200 ${downloading ? "bg-gray-500 cursor-not-allowed scale-95" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 active:scale-95"} flex items-center`,
                                children: downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin -ml-1 mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Generating PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                className: `p-2 sm:p-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 ${darkMode ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400" : "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700"}`,
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 sm:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                        children: "Backend Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${darkMode ? "text-gray-100" : "text-gray-800"}`,
                                        children: "Roadmap"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto px-4`,
                                children: "A comprehensive guide to becoming a Backend Engineer, step-by-step learning path, courses, tools, and project ideas."
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    isVisualMode ? /* Visual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-500 ease-in-out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Backend$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            roadmapData: blockchainRoadmap,
                            darkMode: darkMode
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this) : /* Textual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8 transition-all duration-500 ease-in-out",
                        children: blockchainRoadmap.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `section-${section.id}`,
                                className: `${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${openSections.has(section.id) ? "ring-2 ring-blue-500/20" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSection(section.id),
                                        className: `w-full p-4 sm:p-6 lg:p-8 text-left flex justify-between items-center ${darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"} transition-all duration-200 group`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-2 sm:mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0",
                                                                children: section.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors truncate",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm sm:text-base lg:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} ml-9 sm:ml-12 pr-4`,
                                                        children: section.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 sm:ml-6 transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0",
                                                children: openSections.has(section.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M5 15l7-7 7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 394,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this),
                                    openSections.has(section.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} border-t animate-in slide-in-from-top-2 duration-300`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-green-900/20 border-green-500/20" : "bg-green-50/80 border-green-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "✅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "What to Learn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 415,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.whatToLearn?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-green-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 427,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 421,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 412,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-orange-900/20 border-orange-500/20" : "bg-orange-50/80 border-orange-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "🧰"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Tools to Use"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 440,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.toolsToUse?.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-orange-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: tool
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 455,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 446,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 437,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-blue-900/20 border-blue-500/20" : "bg-blue-50/80 border-blue-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📚"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Best Courses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 465,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4 sm:space-y-5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "font-bold mb-2 sm:mb-3 text-base sm:text-lg",
                                                                            children: "In English:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-1 sm:space-y-2",
                                                                            children: section.content?.bestCourses?.english?.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: `text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0",
                                                                                            children: "•"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                            lineNumber: 483,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium",
                                                                                            children: course
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                            lineNumber: 486,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, index, true, {
                                                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                    lineNumber: 479,
                                                                                    columnNumber: 35
                                                                                }, this)) || []
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 462,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-red-900/20 border-red-500/20" : "bg-red-50/80 border-red-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📘"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Docs & Websites"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 499,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.docsAndWebsites?.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-red-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 511,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: doc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                                lineNumber: 514,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 505,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 496,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 410,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 sm:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-600 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl mr-3 sm:mr-4",
                                                                children: "💡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 524,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Project Ideas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 523,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                                                        children: section.content?.projectIdeas?.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-purple-900/20 border-purple-500/20" : "bg-purple-50/80 border-purple-200/50"} border transition-all duration-200 hover:shadow-lg hover:scale-105`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-purple-500 mr-3 sm:mr-4 mt-1 text-lg sm:text-xl flex-shrink-0",
                                                                            children: "💡"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                            lineNumber: 536,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${darkMode ? "text-gray-200" : "text-gray-700"} font-medium text-sm sm:text-base leading-relaxed`,
                                                                            children: project
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this)) || []
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                        lineNumber: 529,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                                lineNumber: 522,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                        lineNumber: 407,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Roadmaps/Backend/backend.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_Roadmaps_Backend_2b329422._.js.map