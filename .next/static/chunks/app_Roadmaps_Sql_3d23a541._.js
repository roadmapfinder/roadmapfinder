(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Roadmaps/Sql/docs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DocsCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-slate-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-extrabold text-slate-900",
                            children: "📘 SQL, Databases & BI/ETL — Official Documentation"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1",
                            "aria-labelledby": `${d.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full",
                                            children: d.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${d.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600",
                                    children: d.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: d.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/docs.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                            children: [
                                                d.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
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
_c = DocsCards;
var _c;
__turbopack_context__.k.register(_c, "DocsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/projects.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-slate-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-4xl font-extrabold text-slate-900",
                            children: "🏗 SQL Developer Projects Path — Beginner → Industry-Ready"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1",
                            "aria-labelledby": `${p.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full",
                                            children: p.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-green-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/projects.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300",
                                            children: [
                                                p.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
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
_c = ProjectCards;
var _c;
__turbopack_context__.k.register(_c, "ProjectCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/faq.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FAQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl sm:text-4xl font-extrabold text-slate-900 mb-8",
                    children: "❓ SQL Developer Roadmap — Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-xl shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center justify-between p-4 text-left",
                                    onClick: ()=>toggleFAQ(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-800",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-5 w-5 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/faq.jsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(FAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/downloadPdf.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PDFDownloadButton": (()=>PDFDownloadButton),
    "downloadAdvancedRoadmapPDF": (()=>downloadAdvancedRoadmapPDF),
    "downloadRoadmapPDF": (()=>downloadRoadmapPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-pdf/renderer/lib/react-pdf.browser.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-pdf/primitives/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-pdf/renderer/lib/react-pdf.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
;
;
;
;
// Define styles for the PDF
const styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyleSheet"].create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#f8fafc',
        padding: 30,
        fontFamily: 'Helvetica'
    },
    header: {
        marginBottom: 30,
        textAlign: 'center',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#3b82f6'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        fontWeight: 'normal'
    },
    phaseContainer: {
        marginBottom: 25,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    phaseHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    phaseNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 15
    },
    phaseTitleContainer: {
        flex: 1
    },
    phaseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 2
    },
    phaseSubtitle: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 2
    },
    phaseDescription: {
        fontSize: 14,
        color: '#374151',
        fontWeight: 'normal'
    },
    sectionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15
    },
    section: {
        flex: '1 1 45%',
        backgroundColor: '#f8fafc',
        borderRadius: 6,
        padding: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#3b82f6',
        marginBottom: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b82f6',
        marginBottom: 10
    },
    itemsList: {
        gap: 6
    },
    item: {
        fontSize: 11,
        color: '#374151',
        lineHeight: 1.4,
        paddingLeft: 12,
        marginBottom: 4
    },
    itemNumber: {
        fontWeight: 'bold',
        color: '#1f2937'
    },
    phaseConnector: {
        alignSelf: 'center',
        marginVertical: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#f3f4f6',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d1d5db'
    },
    connectorText: {
        fontSize: 12,
        color: '#6b7280',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    footer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ecfdf5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#10b981',
        textAlign: 'center'
    },
    footerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#065f46',
        marginBottom: 8
    },
    footerText: {
        fontSize: 14,
        color: '#047857',
        lineHeight: 1.5
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 10,
        bottom: 20,
        right: 30,
        color: '#6b7280'
    },
    watermark: {
        position: 'absolute',
        top: 50,
        right: 30,
        fontSize: 8,
        color: '#d1d5db',
        opacity: 0.5
    }
});
// PDF Document Component
const RoadmapPDFDocument = ({ phases })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page"], {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.title,
                            children: "SQL Engineer Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                            lineNumber: 168,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.subtitle,
                            children: "Your Complete Journey from Beginner to Professional"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                    lineNumber: 167,
                    columnNumber: 7
                }, this),
                phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                        wrap: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                style: styles.phaseContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                        style: styles.phaseHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                style: [
                                                    styles.phaseNumber,
                                                    {
                                                        backgroundColor: getPhaseColor(phase.color)
                                                    }
                                                ],
                                                children: phase.id
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                style: styles.phaseTitleContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.phaseTitle,
                                                        children: phase.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.phaseSubtitle,
                                                        children: phase.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.phaseDescription,
                                                        children: phase.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                        style: styles.sectionsContainer,
                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                style: styles.section,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.sectionTitle,
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                        style: styles.itemsList,
                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.item,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        style: styles.itemNumber,
                                                                        children: [
                                                                            itemIndex + 1,
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    item
                                                                ]
                                                            }, itemIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, sectionIndex, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                style: styles.phaseConnector,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.connectorText,
                                    children: [
                                        "↓ Next: Phase ",
                                        phase.id + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, phase.id, true, {
                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    style: styles.pageNumber,
                    render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                    fixed: true
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                    lineNumber: 221,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
            lineNumber: 165,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
        lineNumber: 164,
        columnNumber: 3
    }, this);
_c = RoadmapPDFDocument;
// Helper function to convert Tailwind colors to hex
const getPhaseColor = (tailwindColor)=>{
    const colorMap = {
        'bg-blue-500': '#3b82f6',
        'bg-purple-500': '#8b5cf6',
        'bg-green-500': '#10b981',
        'bg-orange-500': '#f59e0b',
        'bg-red-500': '#ef4444'
    };
    return colorMap[tailwindColor] || '#3b82f6';
};
const downloadRoadmapPDF = async (phases)=>{
    try {
        // Create the PDF blob
        const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
            lineNumber: 244,
            columnNumber: 28
        }, this)).toBlob();
        // Generate filename with current date
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `SQL-Engineer-roadmap-${currentDate}.pdf`;
        // Save the file
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Error generating PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
const PDFDownloadButton = ({ phases, className = "", children = "Download PDF" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PDFDownloadLink"], {
        document: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
            lineNumber: 263,
            columnNumber: 15
        }, void 0),
        fileName: `SQL-Engineer-roadmap-${new Date().toISOString().split('T')[0]}.pdf`,
        className: className,
        children: ({ blob, url, loading, error })=>{
            if (loading) return 'Generating PDF...';
            if (error) return 'Error generating PDF';
            return children;
        }
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
        lineNumber: 262,
        columnNumber: 3
    }, this);
_c1 = PDFDownloadButton;
const downloadAdvancedRoadmapPDF = async (phases, options = {})=>{
    const { includeWatermark = true, customTitle = "SQL Developer Roadmap", customSubtitle = "Your Complete Journey from Beginner to Professional", pageSize = "A4", orientation = "portrait" } = options;
    try {
        const AdvancedPDFDocument = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page"], {
                    size: pageSize,
                    orientation: orientation,
                    style: styles.page,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                            style: styles.header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.title,
                                    children: customTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.subtitle,
                                    children: customSubtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                wrap: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                        style: styles.phaseContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                style: styles.phaseHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: [
                                                            styles.phaseNumber,
                                                            {
                                                                backgroundColor: getPhaseColor(phase.color)
                                                            }
                                                        ],
                                                        children: phase.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                        style: styles.phaseTitleContainer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseTitle,
                                                                children: phase.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 305,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseSubtitle,
                                                                children: phase.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseDescription,
                                                                children: phase.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                style: styles.sectionsContainer,
                                                children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                        style: styles.section,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.sectionTitle,
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                                style: styles.itemsList,
                                                                children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        style: styles.item,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                                style: styles.itemNumber,
                                                                                children: [
                                                                                    itemIndex + 1,
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                                lineNumber: 318,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            item
                                                                        ]
                                                                    }, itemIndex, true, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, sectionIndex, true, {
                                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                        style: styles.phaseConnector,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            style: styles.connectorText,
                                            children: [
                                                "↓ Next: Phase ",
                                                phase.id + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                            style: styles.footer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.footerTitle,
                                    children: "🎉 Congratulations!"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.footerText,
                                    children: "You've completed the SQL Developer Roadmap and are now ready to take on professional  challenges."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.pageNumber,
                            render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                            fixed: true
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this);
        const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvancedPDFDocument, {}, void 0, false, {
            fileName: "[project]/app/Roadmaps/Sql/downloadPdf.jsx",
            lineNumber: 351,
            columnNumber: 28
        }, this)).toBlob();
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `${customTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Error generating advanced PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
var _c, _c1;
__turbopack_context__.k.register(_c, "RoadmapPDFDocument");
__turbopack_context__.k.register(_c1, "PDFDownloadButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/roadmapData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// roadmapData.js - SQL Mastery Roadmap Data
__turbopack_context__.s({
    "phases": (()=>phases)
});
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Sql/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$docs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/docs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$faq$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/faq.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/downloadPdf.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Sql/roadmapData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const SQL = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$downloadPdf$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"]);
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$docs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$faq$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-4 md:mb-6 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-6xl px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",
                                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                        children: section.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                        className: "space-y-2",
                                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-gray-700 text-xs md:text-sm leading-relaxed",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-gray-900",
                                                                                        children: [
                                                                                            itemIndex + 1,
                                                                                            "."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                                        lineNumber: 77,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Sql$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🏆 Final Tips to Become Industry-Ready SQL Engineer"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg mb-4",
                                    children: "Congratulations! You've completed the SQL Engineer Mastery Roadmap and are ready to design scalable, robust systems."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6 md:mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 md:space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "text-blue-600",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl md:text-3xl font-bold text-gray-900",
                                    children: [
                                        "SQL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: "Mastery Roadmap"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 132,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm md:text-base font-normal text-gray-600 ml-2",
                                            children: "(2025 Edition)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors",
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 156,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 156,
                                columnNumber: 49
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePDFDownload,
                        disabled: isDownloading,
                        className: "w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors",
                        children: [
                            isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 18,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('roadmap');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('documentation');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'documentation' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('projects');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('faq');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Sql/page.jsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Sql/page.jsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Sql/page.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
};
_s(SQL, "0HA4EeIJlOOJC7wNk0pgM7ZTfQQ=");
_c = SQL;
const __TURBOPACK__default__export__ = SQL;
var _c;
__turbopack_context__.k.register(_c, "SQL");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Roadmaps_Sql_3d23a541._.js.map