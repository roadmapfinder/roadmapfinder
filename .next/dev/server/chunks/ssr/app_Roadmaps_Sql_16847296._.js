module.exports = [
"[project]/app/Roadmaps/Sql/docs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const docs = [
    {
        id: "sql-standard",
        level: "Official",
        title: "SQL Standard / General SQL",
        description: "While the ANSI/ISO SQL standard is not freely available in full, many database vendors follow it. Wikipedia provides a good overview.",
        cta: "Open Docs",
        url: "https://en.wikipedia.org/wiki/ISO/IEC_9075"
    },
    {
        id: "postgresql",
        level: "Official",
        title: "PostgreSQL Documentation",
        description: "Comprehensive PostgreSQL docs covering SQL syntax, functions, administration, and advanced database features.",
        cta: "Open Docs",
        url: "https://www.postgresql.org/docs/"
    },
    {
        id: "mysql",
        level: "Official",
        title: "MySQL Reference Manual",
        description: "Detailed MySQL documentation covering SQL syntax, functions, server configuration, and optimization.",
        cta: "Open Docs",
        url: "https://dev.mysql.com/doc/"
    },
    {
        id: "sql-server",
        level: "Official",
        title: "Microsoft SQL Server Documentation",
        description: "Microsoft Learn official documentation for SQL Server, including T-SQL reference and administration guides.",
        cta: "Open Docs",
        url: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17"
    },
    {
        id: "oracle-sql",
        level: "Official",
        title: "Oracle Database SQL Language Reference",
        description: "Oracle’s official SQL and PL/SQL documentation with extensive details on features, syntax, and administration.",
        cta: "Open Docs",
        url: "https://docs.oracle.com/en/database/oracle/oracle-database/23/cncpt/sql.html"
    },
    {
        id: "sqlite",
        level: "Official",
        title: "SQLite Documentation",
        description: "Authoritative documentation for SQLite including SQL syntax, pragmas, and detailed implementation notes.",
        cta: "Open Docs",
        url: "https://www.sqlite.org/docs.html"
    },
    {
        id: "spark-sql",
        level: "Official",
        title: "Apache Spark SQL Guide",
        description: "Spark SQL programming guide and reference covering DataFrames, SQL syntax, and optimization techniques.",
        cta: "Open Docs",
        url: "https://spark.apache.org/docs/latest/sql-ref.html"
    },
    {
        id: "mongodb",
        level: "Official",
        title: "MongoDB Documentation",
        description: "MongoDB official documentation covering CRUD, aggregation, schema design, indexing, and distributed systems.",
        cta: "Open Docs",
        url: "https://www.mongodb.com/docs/"
    },
    // --- BI / ETL / Data Engineering Extensions ---
    {
        id: "power-bi",
        level: "Official",
        title: "Microsoft Power BI Documentation",
        description: "Official Power BI documentation covering dashboards, DAX, Power Query, and enterprise BI solutions.",
        cta: "Open Docs",
        url: "https://learn.microsoft.com/en-us/power-bi/"
    },
    {
        id: "tableau",
        level: "Official",
        title: "Tableau Documentation",
        description: "Official Tableau documentation for building dashboards, visualizations, and connecting to multiple data sources.",
        cta: "Open Docs",
        url: "https://help.tableau.com/"
    },
    {
        id: "airflow",
        level: "Official",
        title: "Apache Airflow Documentation",
        description: "Apache Airflow docs for workflow orchestration, DAGs, scheduling, and running ETL pipelines at scale.",
        cta: "Open Docs",
        url: "https://airflow.apache.org/docs/"
    },
    {
        id: "dbt",
        level: "Official",
        title: "dbt Documentation",
        description: "dbt (Data Build Tool) official documentation covering data transformations, models, testing, and deployment.",
        cta: "Open Docs",
        url: "https://docs.getdbt.com/"
    },
    {
        id: "snowflake",
        level: "Official",
        title: "Snowflake Documentation",
        description: "Snowflake cloud data platform documentation covering SQL, performance tuning, data sharing, and pipelines.",
        cta: "Open Docs",
        url: "https://docs.snowflake.com/"
    }
];
function DocsCards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-slate-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-extrabold text-slate-900",
                            children: "📘 SQL, Databases & BI/ETL — Official Documentation"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-600 max-w-2xl",
                            children: "Explore official documentation resources every SQL developer, data engineer, and BI analyst must know. These cover SQL standards, databases, NoSQL, big data engines, and modern BI/ETL tools."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1",
                            "aria-labelledby": `${d.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full",
                                            children: d.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-slate-400 hover:text-blue-600 transition",
                                            "aria-label": `Open documentation for ${d.title}`,
                                            children: "🔗 Docs"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${d.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600",
                                    children: d.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: d.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                            children: [
                                                d.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "Reference"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, d.id, true, {
                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-slate-500",
                    children: "Tip: Bookmark these resources and revisit often. Mastery in SQL + Databases + BI/ETL tools is the real path to becoming an industry-ready data professional."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Sql/projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const projects = [
    // 🌱 Beginner
    {
        id: "sql-beginner-1",
        level: "Phase 1 — Beginner (Foundations)",
        title: "Library Management System",
        description: "CRUD operations, relational schema, joins. Tables: Books, Members, BorrowedBooks, Authors. Queries: borrowed/returned books, most borrowed author, overdue fines. Builds confidence in joins + relational schema design.",
        cta: "Explore project",
        url: "https://youtu.be/6X2-P9fNVvw?si=heGXspZbgfAmapBb" // sample DB ref
    },
    {
        id: "sql-beginner-2",
        level: "Phase 1 — Beginner (Foundations)",
        title: "E-Commerce Orders Database",
        description: "Tables: Customers, Orders, Products, OrderDetails, Payments. Queries: Total revenue, top customers, best-selling products. Teaches analytics with foreign keys + aggregations.",
        cta: "Explore project",
        url: "https://youtu.be/oZRAaWAI4r0?si=ipUSAn7Ot75pWbUv" // MySQL docs
    },
    {
        id: "sql-beginner-3",
        level: "Phase 1 — Beginner (Foundations)",
        title: "Student Result Management",
        description: "Tables: Students, Courses, Grades, Instructors. Queries: GPA calculation, top student per subject, pass/fail analysis. Builds GROUP BY + aggregations practice.",
        cta: "Explore project",
        url: "https://youtu.be/Zrx6hS1adQk?si=1We9v0a1n4jwItOC" // Postgres docs
    },
    // 🌿 Intermediate
    {
        id: "sql-intermediate-1",
        level: "Phase 2 — Intermediate (Practical Scenarios)",
        title: "Sales & Inventory Dashboard Database",
        description: "Tables: Products, Sales, Suppliers, Inventory. Queries: Monthly sales trends, running totals, stock alerts. Focus on CTEs, window functions, optimization. Mimics BI dashboards.",
        cta: "Explore project",
        url: "https://youtu.be/Qr1Go2gP8fo?si=4RuMTqQ_qpxFAlLk" // MS SQL Server docs
    },
    {
        id: "sql-intermediate-2",
        level: "Phase 2 — Intermediate (Practical Scenarios)",
        title: "Hospital / Patient Management System",
        description: "Tables: Patients, Doctors, Appointments, Prescriptions, Billing. Queries: Doctor schedule conflicts, revenue per department, diagnosis analytics. Teaches normalization, constraints, and transactions.",
        cta: "Explore project",
        url: "https://youtu.be/lQ5sjfoTE-4?si=IkOyWF-SBzTZxxMH/" // MySQL docs
    },
    {
        id: "sql-intermediate-3",
        level: "Phase 2 — Intermediate (Practical Scenarios)",
        title: "Banking / Finance Transaction Database",
        description: "Tables: Accounts, Customers, Transactions, Loans. Queries: Monthly statements, suspicious transactions, interest calculation. Focus on ACID, stored procedures, isolation levels.",
        cta: "Explore project",
        url: "https://youtu.be/zROvasdXSqM?si=r5FdLeiCQmaoJeeJ"
    },
    // 🌲 Advanced
    {
        id: "sql-advanced-1",
        level: "Phase 3 — Advanced (Analytics & Big Data)",
        title: "Movie Streaming Analytics (Netflix-like)",
        description: "Tables: Users, Movies, Subscriptions, WatchHistory, Ratings. Queries: Most watched genre per country, churn prediction signals, avg watch time per user. Teaches partitioning + window functions.",
        cta: "Explore project",
        url: "https://youtu.be/-7cT0651_lw?si=guiQquwlaTWW8pMT" // BigQuery SQL
    },
    {
        id: "sql-advanced-2",
        level: "Phase 3 — Advanced (Analytics & Big Data)",
        title: "Data Warehouse (Retail Star Schema)",
        description: "Fact: Sales. Dimensions: Products, Customers, Time, Stores. Queries: Year-over-year growth, customer segmentation, profit by region. Learn ETL + dimensional modeling.",
        cta: "Explore project",
        url: "https://youtu.be/K7C1sWKQU-o?si=MSERqNgaF-cs-Ych" // Snowflake docs
    },
    {
        id: "sql-advanced-3",
        level: "Phase 3 — Advanced (Analytics & Big Data)",
        title: "Log Analysis System (Big Data Style)",
        description: "Table: ServerLogs(user_id, action, timestamp, device, location). Queries: Peak traffic, error rates, retention cohorts. Focus: partitioning, indexing, optimization for millions of rows.",
        cta: "Explore project",
        url: "https://www.youtube.com/live/8YvZZPWmhzQ?si=JHkcFpvmZ2NP1WxG"
    }
];
function ProjectCards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-slate-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-4xl font-extrabold text-slate-900",
                            children: "🏗 SQL Developer Projects Path — Beginner → Industry-Ready"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-600 max-w-2xl",
                            children: "Build these SQL projects step by step to progress from CRUD basics to advanced data analytics & warehouse design."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1",
                            "aria-labelledby": `${p.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full",
                                            children: p.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-slate-400 hover:text-green-600 transition",
                                            "aria-label": `Open docs for ${p.title}`,
                                            children: "Docs ▶"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-green-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300",
                                            children: [
                                                p.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "~1–4 weeks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-slate-500",
                    children: "Tip: Don’t just write queries — focus on indexing, optimization, and scalability. These make you truly industry-ready."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Sql/faq.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
"use client";
;
;
;
const faqs = [
    {
        question: "What is SQL and why should I learn it?",
        answer: "SQL (Structured Query Language) is the standard language for managing relational databases. It’s essential for developers, analysts, and data engineers to query, analyze, and manipulate data. Almost every industry uses SQL."
    },
    {
        question: "Which SQL database should I start with?",
        answer: "Start with MySQL or PostgreSQL since they’re open-source and widely used. Once comfortable, you can explore MS SQL Server, Oracle, or cloud databases like Snowflake and BigQuery depending on your career path."
    },
    {
        question: "What’s the difference between SQL and NoSQL?",
        answer: "SQL databases are relational, use structured schema, and support complex joins. NoSQL databases (like MongoDB) are schema-less, good for unstructured data, and scale horizontally. SQL is still the backbone for transactional and analytical systems."
    },
    {
        question: "How do I design a good database schema?",
        answer: "Follow normalization rules (1NF, 2NF, 3NF) to avoid redundancy, define primary/foreign keys, use proper data types, and ensure indexes on frequently queried columns. Start normalized, then denormalize for performance if needed."
    },
    {
        question: "What are indexes and why are they important?",
        answer: "Indexes speed up read queries by creating quick lookup structures. However, they slow down writes (INSERT/UPDATE/DELETE). The key is to balance indexing: only index columns used in filtering, joins, or ordering."
    },
    {
        question: "What’s the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?",
        answer: "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table and matches from the right. RIGHT JOIN does the opposite. Understanding joins is crucial for combining data across tables."
    },
    {
        question: "What are ACID properties in databases?",
        answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliability of transactions (like banking). SQL developers must design queries and transactions that respect ACID guarantees."
    },
    {
        question: "How do I optimize slow SQL queries?",
        answer: "Common techniques include: using indexes, avoiding SELECT *, analyzing execution plans, rewriting subqueries with JOIN/CTEs, partitioning large tables, and caching results when possible."
    },
    {
        question: "What’s the role of stored procedures, functions, and triggers?",
        answer: "Stored procedures encapsulate business logic in the database, functions return computed results, and triggers automatically execute logic on data changes. They help centralize logic but should be used carefully to avoid performance issues."
    },
    {
        question: "How can I become industry-ready as an SQL Developer?",
        answer: "1) Master CRUD, joins, and aggregations. 2) Learn indexing and query optimization. 3) Work on real projects (e-commerce, banking, analytics). 4) Understand data warehousing & ETL. 5) Practice with large datasets for performance tuning."
    }
];
function FAQ() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl sm:text-4xl font-extrabold text-slate-900 mb-8",
                    children: "❓ SQL Developer Roadmap — Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-xl shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center justify-between p-4 text-left",
                                    onClick: ()=>toggleFAQ(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-800",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-5 w-5 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-5 w-5 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-4 text-slate-600 text-sm",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Sql/downloadPdf.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// downloadPdf.jsx - Professional PDF Generator for SQL Mastery Roadmap
__turbopack_context__.s([
    "downloadRoadmapPDF",
    ()=>downloadRoadmapPDF
]);
const downloadRoadmapPDF = async (phases)=>{
    try {
        // Dynamic import to avoid SSR issues
        const { jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript, async loader)");
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        // Page dimensions
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pageWidth - margin * 2;
        // Color palette
        const colors = {
            primary: '#2563eb',
            secondary: '#64748b',
            accent: '#f59e0b',
            success: '#10b981',
            dark: '#1e293b',
            light: '#f1f5f9',
            white: '#ffffff',
            phaseColors: {
                1: [
                    34,
                    197,
                    94
                ],
                2: [
                    59,
                    130,
                    246
                ],
                3: [
                    168,
                    85,
                    247
                ],
                4: [
                    239,
                    68,
                    68
                ],
                5: [
                    249,
                    115,
                    22
                ],
                6: [
                    71,
                    85,
                    105
                ] // Gray
            }
        };
        let currentY = margin;
        let pageNumber = 1;
        // Helper function to add a new page
        const addNewPage = ()=>{
            doc.addPage();
            currentY = margin;
            pageNumber++;
            addFooter();
        };
        // Helper function to check if we need a new page
        const checkPageBreak = (requiredSpace)=>{
            if (currentY + requiredSpace > pageHeight - margin - 15) {
                addNewPage();
                return true;
            }
            return false;
        };
        // Helper function to add footer
        const addFooter = ()=>{
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(`SQL Mastery Roadmap 2025 | Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, {
                align: 'center'
            });
        };
        // Helper function to wrap text
        const wrapText = (text, maxWidth)=>{
            return doc.splitTextToSize(text, maxWidth);
        };
        // ========================================
        // COVER PAGE
        // ========================================
        // Background gradient effect (simulated with rectangles)
        for(let i = 0; i < 50; i++){
            const opacity = 0.02 + i * 0.005;
            doc.setFillColor(37, 99, 235);
            doc.setGState(new doc.GState({
                opacity: opacity
            }));
            doc.rect(0, i * 4, pageWidth, 4, 'F');
        }
        doc.setGState(new doc.GState({
            opacity: 1
        }));
        // Main title
        doc.setFontSize(36);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        const titleLines = wrapText('SQL MASTERY ROADMAP', contentWidth);
        doc.text(titleLines, pageWidth / 2, 60, {
            align: 'center'
        });
        // Subtitle
        doc.setFontSize(18);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 116, 139);
        doc.text('Your Complete Learning Path', pageWidth / 2, 75, {
            align: 'center'
        });
        // Edition badge
        doc.setFillColor(249, 115, 22);
        doc.roundedRect(pageWidth / 2 - 25, 85, 50, 12, 3, 3, 'F');
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('2025 Edition', pageWidth / 2, 92, {
            align: 'center'
        });
        // Icon/Visual element (Database symbol using shapes)
        doc.setDrawColor(37, 99, 235);
        doc.setFillColor(37, 99, 235);
        doc.setLineWidth(0.5);
        const centerX = pageWidth / 2;
        const iconY = 115;
        // Database cylinder top
        doc.ellipse(centerX, iconY, 20, 6, 'F');
        // Database cylinder body
        doc.rect(centerX - 20, iconY, 40, 25, 'F');
        // Database cylinder bottom
        doc.ellipse(centerX, iconY + 25, 20, 6, 'F');
        // Divider line
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.5);
        doc.line(margin, iconY + 45, pageWidth - margin, iconY + 45);
        // Key features boxes
        currentY = iconY + 60;
        const features = [
            {
                icon: '📚',
                title: '6 Comprehensive Phases',
                desc: 'From Beginner to Expert'
            },
            {
                icon: '🎯',
                title: 'Structured Learning',
                desc: 'Step-by-step progression'
            },
            {
                icon: '🚀',
                title: 'Industry Ready',
                desc: 'Real-world applications'
            }
        ];
        const boxWidth = (contentWidth - 20) / 3;
        let startX = margin;
        features.forEach((feature, index)=>{
            // Feature box background
            doc.setFillColor(241, 245, 249);
            doc.roundedRect(startX, currentY, boxWidth, 30, 2, 2, 'F');
            // Icon
            doc.setFontSize(20);
            doc.text(feature.icon, startX + boxWidth / 2, currentY + 10, {
                align: 'center'
            });
            // Title
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(30, 41, 59);
            doc.text(feature.title, startX + boxWidth / 2, currentY + 18, {
                align: 'center'
            });
            // Description
            doc.setFontSize(7);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 116, 139);
            doc.text(feature.desc, startX + boxWidth / 2, currentY + 24, {
                align: 'center'
            });
            startX += boxWidth + 10;
        });
        // Learning path overview
        currentY += 45;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Your Learning Journey:', margin, currentY);
        currentY += 8;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        const journeyText = [
            '• Master SQL fundamentals and advanced concepts',
            '• Learn database design and optimization techniques',
            '• Build production-ready skills for industry',
            '• Work on real-world projects and case studies'
        ];
        journeyText.forEach((text)=>{
            doc.text(text, margin + 5, currentY);
            currentY += 6;
        });
        // Bottom decoration
        doc.setFillColor(37, 99, 235);
        doc.setGState(new doc.GState({
            opacity: 0.1
        }));
        doc.circle(margin - 10, pageHeight - 30, 40, 'F');
        doc.circle(pageWidth - margin + 10, pageHeight - 50, 35, 'F');
        doc.setGState(new doc.GState({
            opacity: 1
        }));
        // Copyright and credits
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('© 2025 SQL Mastery Roadmap | All Rights Reserved', pageWidth / 2, pageHeight - 15, {
            align: 'center'
        });
        addFooter();
        // ========================================
        // TABLE OF CONTENTS
        // ========================================
        addNewPage();
        currentY = margin + 5;
        // TOC Title
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Table of Contents', margin, currentY);
        currentY += 10;
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(1);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 10;
        // TOC entries
        phases.forEach((phase, index)=>{
            checkPageBreak(15);
            // Phase number and title
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            const phaseColor = colors.phaseColors[phase.id];
            doc.setTextColor(...phaseColor);
            doc.text(`Phase ${phase.id}`, margin + 5, currentY);
            doc.setTextColor(30, 41, 59);
            doc.text(phase.title, margin + 25, currentY);
            // Subtitle
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 116, 139);
            doc.text(phase.subtitle, margin + 25, currentY + 4);
            // Dotted line to page number (visual only)
            doc.setDrawColor(203, 213, 225);
            doc.setLineDash([
                0.5,
                1
            ], 0);
            doc.line(margin + 100, currentY, pageWidth - margin - 15, currentY);
            doc.setLineDash([]);
            // Page indicator
            doc.setFontSize(9);
            doc.setTextColor(100, 116, 139);
            doc.text(`${index + 3}`, pageWidth - margin - 10, currentY);
            currentY += 12;
        });
        currentY += 5;
        checkPageBreak(20);
        // How to use this roadmap
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('How to Use This Roadmap', margin, currentY);
        currentY += 8;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        const instructions = [
            {
                title: '1. Start from Your Level',
                text: 'Begin with the phase that matches your current skill level. Don\'t skip fundamentals!'
            },
            {
                title: '2. Follow Sequential Order',
                text: 'Each phase builds upon previous knowledge. Complete phases in order for best results.'
            },
            {
                title: '3. Practice Regularly',
                text: 'Apply concepts through exercises and projects. Hands-on practice is essential.'
            },
            {
                title: '4. Track Your Progress',
                text: 'Check off completed topics and revisit challenging concepts as needed.'
            }
        ];
        instructions.forEach((item)=>{
            checkPageBreak(15);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(37, 99, 235);
            doc.text(item.title, margin + 5, currentY);
            currentY += 5;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            const wrappedText = wrapText(item.text, contentWidth - 10);
            wrappedText.forEach((line)=>{
                doc.text(line, margin + 5, currentY);
                currentY += 4;
            });
            currentY += 3;
        });
        // ========================================
        // PHASE DETAILS
        // ========================================
        phases.forEach((phase, phaseIndex)=>{
            addNewPage();
            currentY = margin;
            // Phase header background
            const phaseColor = colors.phaseColors[phase.id];
            doc.setFillColor(...phaseColor);
            doc.roundedRect(margin, currentY, contentWidth, 25, 3, 3, 'F');
            // Phase number badge
            doc.setFillColor(255, 255, 255);
            doc.circle(margin + 12, currentY + 12.5, 8, 'F');
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...phaseColor);
            doc.text(`${phase.id}`, margin + 12, currentY + 15, {
                align: 'center'
            });
            // Phase title
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(255, 255, 255);
            doc.text(phase.title, margin + 25, currentY + 10);
            // Phase subtitle
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(phase.subtitle, margin + 25, currentY + 17);
            currentY += 30;
            // Phase description box
            doc.setFillColor(241, 245, 249);
            doc.roundedRect(margin, currentY, contentWidth, 12, 2, 2, 'F');
            doc.setFontSize(9);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(71, 85, 105);
            doc.text(`📋 ${phase.description}`, margin + 5, currentY + 7);
            currentY += 17;
            // Progress tracker
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 116, 139);
            doc.text('☐ Track your progress by checking off completed sections', margin, currentY);
            currentY += 8;
            // Sections
            phase.sections.forEach((section, sectionIndex)=>{
                checkPageBreak(25 + section.items.length * 5);
                // Section header
                doc.setFillColor(...phaseColor);
                doc.setGState(new doc.GState({
                    opacity: 0.1
                }));
                doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'F');
                doc.setGState(new doc.GState({
                    opacity: 1
                }));
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...phaseColor);
                doc.text(`${sectionIndex + 1}. ${section.title}`, margin + 3, currentY + 5.5);
                currentY += 11;
                // Section items
                section.items.forEach((item, itemIndex)=>{
                    checkPageBreak(7);
                    // Checkbox
                    doc.setDrawColor(203, 213, 225);
                    doc.setLineWidth(0.3);
                    doc.rect(margin + 5, currentY - 2.5, 3, 3);
                    // Parse item (title → description)
                    const parts = item.split('→');
                    const itemTitle = parts[0].trim();
                    const itemDesc = parts.length > 1 ? parts[1].trim() : '';
                    // Item number and title
                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(30, 41, 59);
                    doc.text(`${itemIndex + 1}.`, margin + 10, currentY);
                    doc.setFont('helvetica', 'normal');
                    doc.text(itemTitle, margin + 15, currentY);
                    currentY += 4;
                    // Item description (if exists)
                    if (itemDesc) {
                        doc.setFontSize(8);
                        doc.setTextColor(100, 116, 139);
                        const wrappedDesc = wrapText(itemDesc, contentWidth - 20);
                        wrappedDesc.forEach((line)=>{
                            checkPageBreak(5);
                            doc.text(line, margin + 15, currentY);
                            currentY += 3.5;
                        });
                        currentY += 1;
                    } else {
                        currentY += 2;
                    }
                });
                currentY += 3;
            });
            // Phase completion tip
            checkPageBreak(20);
            currentY += 5;
            doc.setFillColor(16, 185, 129);
            doc.setGState(new doc.GState({
                opacity: 0.1
            }));
            doc.roundedRect(margin, currentY, contentWidth, 15, 2, 2, 'F');
            doc.setGState(new doc.GState({
                opacity: 1
            }));
            doc.setFontSize(8);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(5, 150, 105);
            doc.text('💡 Completion Tip:', margin + 5, currentY + 5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            const tips = {
                1: 'Practice basic queries on sample databases. Write at least 50 queries.',
                2: 'Build a small project using CRUD operations and window functions.',
                3: 'Design a normalized database schema for a real-world scenario.',
                4: 'Optimize slow queries and understand execution plans thoroughly.',
                5: 'Integrate SQL with your preferred programming language.',
                6: 'Complete a capstone project involving all learned concepts.'
            };
            doc.text(tips[phase.id], margin + 5, currentY + 10);
        });
        // ========================================
        // LEARNING RESOURCES PAGE
        // ========================================
        addNewPage();
        currentY = margin + 5;
        // Resources title
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Recommended Learning Resources', margin, currentY);
        currentY += 10;
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(1);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 12;
        const resources = [
            {
                category: '📚 Online Platforms',
                items: [
                    'SQLZoo - Interactive SQL tutorials',
                    'LeetCode SQL - Practice SQL problems',
                    'Mode Analytics SQL Tutorial - Real datasets',
                    'HackerRank SQL - Structured challenges'
                ]
            },
            {
                category: '📖 Books',
                items: [
                    'SQL Queries for Mere Mortals - Allen Beaulieu',
                    'SQL Performance Explained - Markus Winand',
                    'Learning SQL - Alan Beaulieu',
                    'Database Design for Mere Mortals - Michael Hernandez'
                ]
            },
            {
                category: '🎥 Video Courses',
                items: [
                    'FreeCodeCamp - SQL Full Course',
                    'Udemy - Complete SQL Bootcamp',
                    'Coursera - Databases and SQL for Data Science',
                    'YouTube - SQL Tutorial channels'
                ]
            },
            {
                category: '🛠️ Practice Databases',
                items: [
                    'PostgreSQL Sample Databases (Pagila, DVD Rental)',
                    'MySQL Sakila Database',
                    'Microsoft AdventureWorks',
                    'SQLite Chinook Database'
                ]
            }
        ];
        resources.forEach((resource)=>{
            checkPageBreak(30);
            // Category header
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(37, 99, 235);
            doc.text(resource.category, margin, currentY);
            currentY += 7;
            // Items
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            resource.items.forEach((item)=>{
                doc.text(`• ${item}`, margin + 5, currentY);
                currentY += 5;
            });
            currentY += 5;
        });
        // ========================================
        // STUDY SCHEDULE PAGE
        // ========================================
        addNewPage();
        currentY = margin + 5;
        // Schedule title
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Suggested Study Schedule', margin, currentY);
        currentY += 10;
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(1);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 12;
        const schedules = [
            {
                pace: 'Fast Track',
                duration: '3-4 Months',
                time: '15-20 hours/week',
                phases: {
                    1: '2-3 weeks',
                    2: '3-4 weeks',
                    3: '2-3 weeks',
                    4: '3-4 weeks',
                    5: '2-3 weeks',
                    6: '2-3 weeks'
                },
                color: [
                    239,
                    68,
                    68
                ]
            },
            {
                pace: 'Standard Track',
                duration: '6-8 Months',
                time: '8-12 hours/week',
                phases: {
                    1: '3-4 weeks',
                    2: '5-6 weeks',
                    3: '4-5 weeks',
                    4: '6-7 weeks',
                    5: '4-5 weeks',
                    6: '4-5 weeks'
                },
                color: [
                    59,
                    130,
                    246
                ]
            },
            {
                pace: 'Relaxed Track',
                duration: '10-12 Months',
                time: '4-6 hours/week',
                phases: {
                    1: '6-8 weeks',
                    2: '8-10 weeks',
                    3: '6-8 weeks',
                    4: '10-12 weeks',
                    5: '6-8 weeks',
                    6: '6-8 weeks'
                },
                color: [
                    16,
                    185,
                    129
                ]
            }
        ];
        schedules.forEach((schedule, idx)=>{
            checkPageBreak(45);
            // Schedule card
            doc.setDrawColor(...schedule.color);
            doc.setLineWidth(0.5);
            doc.roundedRect(margin, currentY, contentWidth, 35, 2, 2);
            // Header
            doc.setFillColor(...schedule.color);
            doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'F');
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(255, 255, 255);
            doc.text(schedule.pace, margin + 3, currentY + 5.5);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            doc.text(`${schedule.duration} | ${schedule.time}`, pageWidth - margin - 3, currentY + 5.5, {
                align: 'right'
            });
            // Phase breakdown
            let phaseY = currentY + 12;
            doc.setFontSize(8);
            doc.setTextColor(71, 85, 105);
            Object.entries(schedule.phases).forEach(([phase, time])=>{
                doc.setFont('helvetica', 'bold');
                doc.text(`Phase ${phase}:`, margin + 5, phaseY);
                doc.setFont('helvetica', 'normal');
                doc.text(time, margin + 25, phaseY);
                phaseY += 4;
            });
            currentY += 40;
        });
        // Study tips
        currentY += 5;
        checkPageBreak(40);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Study Tips for Success', margin, currentY);
        currentY += 8;
        const tips = [
            {
                icon: '⏰',
                text: 'Set consistent study times and stick to your schedule'
            },
            {
                icon: '✍️',
                text: 'Practice writing queries daily - consistency beats intensity'
            },
            {
                icon: '🤝',
                text: 'Join SQL communities and participate in discussions'
            },
            {
                icon: '🎯',
                text: 'Focus on understanding concepts, not memorizing syntax'
            },
            {
                icon: '📊',
                text: 'Work on real datasets to build practical experience'
            },
            {
                icon: '🔄',
                text: 'Review and refactor your old queries regularly'
            }
        ];
        tips.forEach((tip)=>{
            checkPageBreak(8);
            doc.setFontSize(9);
            doc.text(`${tip.icon}  ${tip.text}`, margin + 5, currentY);
            currentY += 6;
        });
        // ========================================
        // FINAL PAGE - MOTIVATIONAL
        // ========================================
        addNewPage();
        currentY = pageHeight / 2 - 40;
        // Center content
        doc.setFontSize(26);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235);
        doc.text('Your SQL Journey Starts Now!', pageWidth / 2, currentY, {
            align: 'center'
        });
        currentY += 15;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        const motivationalText = [
            'Remember: Every expert was once a beginner.',
            'Take it one phase at a time, practice consistently,',
            'and you\'ll master SQL before you know it.',
            '',
            'Good luck on your learning journey! 🚀'
        ];
        motivationalText.forEach((line)=>{
            doc.text(line, pageWidth / 2, currentY, {
                align: 'center'
            });
            currentY += 6;
        });
        // Contact/feedback section
        currentY += 15;
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(margin + 20, currentY, contentWidth - 40, 25, 3, 3, 'F');
        currentY += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        doc.text('Need Help or Have Feedback?', pageWidth / 2, currentY, {
            align: 'center'
        });
        currentY += 6;
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 116, 139);
        doc.text('This roadmap is constantly evolving.', pageWidth / 2, currentY, {
            align: 'center'
        });
        currentY += 4;
        doc.text('Share your suggestions to help us improve!', pageWidth / 2, currentY, {
            align: 'center'
        });
        // Save the PDF
        const filename = 'SQL_Mastery_Roadmap_2025.pdf';
        doc.save(filename);
        return {
            success: true,
            filename: filename,
            message: 'PDF generated successfully!'
        };
    } catch (error) {
        console.error('Error generating PDF:', error);
        return {
            success: false,
            error: error.message,
            message: 'Failed to generate PDF. Please try again.'
        };
    }
};
}),
"[project]/app/Roadmaps/Sql/roadmapData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// roadmapData.js - SQL Mastery Roadmap Data
__turbopack_context__.s([
    "phases",
    ()=>phases
]);
const phases = [
    {
        id: 1,
        title: "Beginner Foundations (Core SQL)",
        subtitle: "Foundational Level",
        description: "Learn syntax, querying basics, and understanding relational databases",
        color: "bg-green-500",
        sections: [
            {
                title: "Introduction to Databases",
                items: [
                    "Database Fundamentals → What is a Database, DBMS vs RDBMS",
                    "Database Structure → Tables, rows, columns, schema",
                    "Key Concepts → Primary Key, Foreign Key, Constraints"
                ]
            },
            {
                title: "Basic SQL Queries",
                items: [
                    "Core Syntax → SELECT, FROM, WHERE clauses",
                    "Filtering Data → AND, OR, BETWEEN, IN, LIKE, IS NULL operators",
                    "Sorting Results → ORDER BY for ascending/descending sort",
                    "Limiting Results → LIMIT, TOP for result pagination"
                ]
            },
            {
                title: "Aggregations & Grouping",
                items: [
                    "Aggregate Functions → COUNT, SUM, AVG, MIN, MAX",
                    "Grouping Data → GROUP BY for categorical aggregation",
                    "Filter Groups → HAVING clause for filtered aggregations"
                ]
            },
            {
                title: "Joins (Very Important)",
                items: [
                    "INNER JOIN → Matching records from both tables",
                    "Outer Joins → LEFT JOIN, RIGHT JOIN for inclusive results",
                    "FULL OUTER JOIN → All records from both tables",
                    "CROSS JOIN → Cartesian product of tables",
                    "Self Joins → Joining a table to itself"
                ]
            },
            {
                title: "Set Operations",
                items: [
                    "UNION → Combine results removing duplicates",
                    "UNION ALL → Combine results keeping duplicates",
                    "INTERSECT → Common records between queries",
                    "EXCEPT → Records in first query but not second"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Intermediate SQL (Data Handling)",
        subtitle: "Intermediate Level",
        description: "Advanced querying, data manipulation, schema management",
        color: "bg-blue-500",
        sections: [
            {
                title: "Data Manipulation",
                items: [
                    "Insert Operations → INSERT for adding new records",
                    "Update Operations → UPDATE for modifying existing data",
                    "Delete Operations → DELETE for removing records",
                    "Transactions → BEGIN, COMMIT, ROLLBACK for data consistency",
                    "Bulk Operations → Bulk Insert for multiple records"
                ]
            },
            {
                title: "Constraints & Data Integrity",
                items: [
                    "Column Constraints → NOT NULL, DEFAULT, UNIQUE",
                    "Referential Integrity → Primary & Foreign Keys",
                    "CHECK Constraints → Custom validation rules"
                ]
            },
            {
                title: "Views",
                items: [
                    "Simple Views → Virtual tables from queries",
                    "Indexed Views → Views with physical storage",
                    "Materialized Views → Pre-computed results for performance"
                ]
            },
            {
                title: "Subqueries & CTEs",
                items: [
                    "Scalar Subqueries → Single value subqueries",
                    "Correlated Subqueries → Row-by-row dependent queries",
                    "Common Table Expressions → WITH clause for readable queries",
                    "Recursive CTEs → Self-referencing hierarchical queries"
                ]
            },
            {
                title: "Window Functions (Must Learn)",
                items: [
                    "Ranking Functions → ROW_NUMBER(), RANK(), DENSE_RANK()",
                    "Running Calculations → SUM() OVER for cumulative totals",
                    "Lead & Lag → LAG(), LEAD() for time-based comparisons",
                    "Partitioning → OVER (PARTITION BY ...) for grouped calculations"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Database Design & Schema Mastery",
        subtitle: "Advanced Level",
        description: "Industry-ready schema design and normalization",
        color: "bg-purple-500",
        sections: [
            {
                title: "Normalization",
                items: [
                    "Normal Forms → 1NF, 2NF, 3NF, BCNF, 4NF, 5NF progression",
                    "Design Goals → Why normalization matters, avoiding redundancy",
                    "Data Integrity → Ensuring consistency across tables"
                ]
            },
            {
                title: "Denormalization",
                items: [
                    "Performance Trade-offs → When to use denormalization",
                    "Design Decisions → Balancing normalization vs performance",
                    "Use Cases → Read-heavy systems, reporting databases"
                ]
            },
            {
                title: "ER Diagrams",
                items: [
                    "Entity Modeling → Entities, Attributes, Relationships",
                    "Cardinality → One-to-One, One-to-Many relationships",
                    "Complex Relations → Many-to-Many with junction tables"
                ]
            },
            {
                title: "Indexes",
                items: [
                    "Index Types → Clustered vs Non-Clustered indexes",
                    "Composite Indexes → Multi-column index strategies",
                    "Covering Indexes → Indexes that contain all query columns",
                    "Best Practices → When and how to index effectively"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Advanced SQL & Optimization",
        subtitle: "Expert Level",
        description: "Production-level query tuning and database performance",
        color: "bg-red-500",
        sections: [
            {
                title: "Query Optimization",
                items: [
                    "Execution Plans → Understanding query execution paths",
                    "Cost Analysis → Cost-based optimization strategies",
                    "Query Refactoring → Reducing nested subqueries",
                    "Index Usage → Using indexes properly for performance"
                ]
            },
            {
                title: "Transactions & Concurrency",
                items: [
                    "ACID Properties → Atomicity, Consistency, Isolation, Durability",
                    "Isolation Levels → READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE",
                    "Deadlock Management → Deadlocks and how to avoid them",
                    "Lock Types → Shared locks, exclusive locks, row-level locking"
                ]
            },
            {
                title: "Stored Procedures & Functions",
                items: [
                    "User-defined Functions → Creating custom UDFs",
                    "Stored Procedures → Parameterized stored procedures",
                    "Error Handling → Exception handling in stored procedures",
                    "Performance → When to use procedures vs inline queries"
                ]
            },
            {
                title: "Triggers",
                items: [
                    "Trigger Types → AFTER INSERT, AFTER UPDATE, AFTER DELETE",
                    "Use Cases → Audit trails, data validation, cascading updates",
                    "Risks → Performance impact, debugging challenges"
                ]
            },
            {
                title: "Partitioning & Sharding",
                items: [
                    "Partitioning Types → Horizontal vs Vertical partitioning",
                    "Table Partitioning → Range, list, hash partitioning strategies",
                    "Sharding Concepts → Database scaling across servers",
                    "Big Data → Handling large-scale datasets"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Industry Ready Skills",
        subtitle: "Production Level",
        description: "Work in production systems, integrate with applications",
        color: "bg-orange-500",
        sections: [
            {
                title: "SQL in Different Databases",
                items: [
                    "Database Variants → MySQL, PostgreSQL, SQL Server, Oracle differences",
                    "PostgreSQL Advanced → JSONB, CTE recursion, full-text search",
                    "Database Selection → Choosing the right database for use case"
                ]
            },
            {
                title: "NoSQL & SQL Hybrid Knowledge",
                items: [
                    "NoSQL Comparison → MongoDB vs SQL databases",
                    "JSON Support → PostgreSQL JSON queries and operations",
                    "Hybrid Approach → When to use SQL vs NoSQL",
                    "Polyglot Persistence → Using multiple database types"
                ]
            },
            {
                title: "ETL & Data Engineering",
                items: [
                    "ETL Concepts → Extract, Transform, Load with SQL",
                    "Data Pipelines → Using SQL in data pipelines",
                    "Python Integration → Pandas + SQLAlchemy for data workflows",
                    "Data Quality → Validation and cleansing in SQL"
                ]
            },
            {
                title: "Analytics & BI Tools",
                items: [
                    "BI Integration → SQL in Power BI, Tableau dashboards",
                    "Dashboard Optimization → Writing optimized queries for reporting",
                    "Time-series Analytics → Temporal queries and trends",
                    "KPI Calculations → Business metrics and aggregations"
                ]
            },
            {
                title: "Big Data SQL",
                items: [
                    "Distributed SQL → Spark SQL, HiveQL basics",
                    "Data Lakes → Working with partitioned tables",
                    "Columnar Formats → Parquet, ORC file formats",
                    "Query Federation → Querying across multiple sources"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Expert / Industry Mastery",
        subtitle: "Mastery Level",
        description: "Master complex real-world use cases",
        color: "bg-gray-800",
        sections: [
            {
                title: "Advanced Performance Engineering",
                items: [
                    "Index Tuning → Index tuning advisor, optimization tools",
                    "Caching Strategies → Database caching, query result caching",
                    "Query Optimization → Optimizing high-traffic queries",
                    "Monitoring → Performance monitoring and alerting"
                ]
            },
            {
                title: "Security & Compliance",
                items: [
                    "Access Control → Role-based access control (RBAC)",
                    "Row-level Security → Fine-grained data access (RLS)",
                    "Data Encryption → Encryption at rest and in transit",
                    "Compliance → GDPR, HIPAA, data privacy regulations"
                ]
            },
            {
                title: "DevOps for SQL",
                items: [
                    "Schema Migration → Database migrations with Liquibase, Flyway",
                    "CI/CD Pipelines → Automated SQL schema updates",
                    "Version Control → Git strategies for database changes",
                    "Backup & Recovery → Backup strategies, disaster recovery"
                ]
            },
            {
                title: "Case Studies (Real World)",
                items: [
                    "E-commerce Scale → Handling millions of records in transactions",
                    "Financial Systems → Optimizing financial transaction queries",
                    "Analytics Architecture → Scalable architecture for analytics",
                    "High Availability → Replication, failover strategies"
                ]
            },
            {
                title: "Capstone Projects",
                items: [
                    "Data Warehouse → Design & optimize Star Schema, Snowflake Schema",
                    "Reporting Dashboard → Build dashboard using SQL + BI tool",
                    "Large Dataset → Optimize queries for 10M+ row dataset",
                    "Production System → End-to-end database system design"
                ]
            }
        ]
    }
];
}),
"[project]/app/Roadmaps/Sql/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/docs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/faq.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/downloadPdf.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/roadmapData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SQL = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"]);
            if (result.success) {
                console.log(`PDF downloaded successfully: ${result.filename}`);
            } else {
                console.error('PDF download failed:', result.error);
            }
        } catch (error) {
            console.error('PDF download error:', error);
        } finally{
            setIsDownloading(false);
        }
    };
    const renderContent = ()=>{
        switch(activeTab){
            case 'documentation':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-4 md:mb-6 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`,
                                                            children: [
                                                                "Phase ",
                                                                phase.id,
                                                                ": ",
                                                                phase.title
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-6xl px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",
                                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                        children: section.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                        className: "space-y-2",
                                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-gray-700 text-xs md:text-sm leading-relaxed",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-gray-900",
                                                                                        children: [
                                                                                            itemIndex + 1,
                                                                                            "."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                                        lineNumber: 77,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🏆 Final Tips to Become Industry-Ready SQL Engineer"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg mb-4",
                                    children: "Congratulations! You've completed the SQL Engineer Mastery Roadmap and are ready to design scalable, robust systems."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6 md:mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 md:space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "text-blue-600",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl md:text-3xl font-bold text-gray-900",
                                    children: [
                                        "SQL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: "Mastery Roadmap"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 132,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm md:text-base font-normal text-gray-600 ml-2",
                                            children: "(2025 Edition)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors",
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 156,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 156,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePDFDownload,
                        disabled: isDownloading,
                        className: "w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors",
                        children: [
                            isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 18,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('roadmap');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('documentation');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'documentation' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('projects');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('faq');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
            lineNumber: 126,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SQL;
}),
];

//# sourceMappingURL=app_Roadmaps_Sql_16847296._.js.map