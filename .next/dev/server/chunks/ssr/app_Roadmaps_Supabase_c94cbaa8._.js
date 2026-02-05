module.exports = [
"[project]/app/Roadmaps/Supabase/docs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupabaseDocsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const docs = [
    {
        id: "supabase-main",
        level: "Official",
        title: "Supabase Documentation (Main)",
        description: "The central hub for all Supabase features including database, auth, storage, realtime, edge functions, CLI, and architecture concepts.",
        cta: "Open Docs",
        url: "https://supabase.com/docs"
    },
    {
        id: "supabase-quickstart",
        level: "Official",
        title: "Supabase Quickstarts",
        description: "Step-by-step guides to get started with Supabase using popular frameworks like Next.js, React, Svelte, Flutter, and more.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/getting-started"
    },
    {
        id: "supabase-database",
        level: "Official",
        title: "Supabase Database (PostgreSQL)",
        description: "Official docs for using PostgreSQL in Supabase including tables, SQL editor, functions, triggers, views, and performance tuning.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/database"
    },
    {
        id: "supabase-sql",
        level: "Official",
        title: "SQL & Postgres Extensions",
        description: "Deep dive into SQL usage, Postgres extensions, JSONB, full-text search, indexes, constraints, and advanced querying patterns.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/database/overview"
    },
    {
        id: "supabase-auth",
        level: "Official",
        title: "Supabase Authentication",
        description: "Authentication system documentation covering email/password, magic links, OAuth providers, sessions, JWTs, and security best practices.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/auth"
    },
    {
        id: "supabase-rls",
        level: "Official",
        title: "Row Level Security (RLS)",
        description: "Critical documentation for securing data using Postgres Row Level Security policies with auth.uid(), roles, and access control patterns.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/auth/row-level-security"
    },
    {
        id: "supabase-storage",
        level: "Official",
        title: "Supabase Storage",
        description: "Official guide for managing file uploads, buckets, access policies, signed URLs, CDN usage, and secure file handling.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/storage"
    },
    {
        id: "supabase-realtime",
        level: "Official",
        title: "Supabase Realtime",
        description: "Documentation for real-time database changes, subscriptions, broadcast channels, and presence using WebSockets.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/realtime"
    },
    {
        id: "supabase-edge-functions",
        level: "Official",
        title: "Supabase Edge Functions",
        description: "Serverless Edge Functions using Deno for secure backend logic, API endpoints, webhooks, and integrations.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/functions"
    },
    {
        id: "supabase-cli",
        level: "Official",
        title: "Supabase CLI",
        description: "Command-line tooling for local development, database migrations, schema management, environment sync, and deployments.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/cli"
    },
    {
        id: "supabase-client-js",
        level: "Official",
        title: "Supabase JavaScript Client",
        description: "Complete API reference for the supabase-js client including auth, database queries, storage, realtime, and edge function calls.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/reference/javascript"
    },
    {
        id: "supabase-management-api",
        level: "Official",
        title: "Supabase Management API",
        description: "Official REST API for programmatically managing Supabase projects, organizations, settings, and infrastructure.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/reference/rest/management"
    },
    {
        id: "supabase-local-dev",
        level: "Official",
        title: "Local Development & Migrations",
        description: "Guides for running Supabase locally, managing migrations safely, environment separation, and production deployment workflows.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/local-development"
    },
    {
        id: "supabase-security",
        level: "Official",
        title: "Security & Best Practices",
        description: "Security-focused documentation covering API keys, service roles, least privilege, SQL injection protection, and data privacy.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/guides/platform/security"
    },
    {
        id: "supabase-architecture",
        level: "Official",
        title: "Supabase Architecture",
        description: "High-level system design and architecture explanation to understand how Supabase components work together at scale.",
        cta: "Open Docs",
        url: "https://supabase.com/docs/architecture"
    }
];
function SupabaseDocsCards() {
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
                            children: "🚀 Supabase — Official Documentation"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-600 max-w-2xl",
                            children: "These are the must-know official Supabase documentation resources for building secure, scalable, production-ready applications using PostgreSQL-first architecture."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                    lineNumber: 146,
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
                                            className: "inline-block text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full",
                                            children: d.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-slate-400 hover:text-emerald-600 transition",
                                            "aria-label": `Open documentation for ${d.title}`,
                                            children: "🔗 Docs"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${d.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-600",
                                    children: d.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: d.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300",
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
                                                        fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "Official"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, d.id, true, {
                            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-slate-500",
                    children: "Tip: Mastering these docs — especially Database, Auth, RLS, and Edge Functions — is what separates hobby Supabase users from industry-ready backend engineers."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Supabase/docs.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Supabase/projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const projects = [
    // 🌱 Beginner
    {
        id: "supabase-beginner-1",
        level: "Phase 1 — Beginner (Core Foundations)",
        title: "Auth-First Personal Dashboard",
        description: "Build a secure user dashboard with Supabase Auth. Features include signup/login, protected routes, user-specific CRUD operations, and strict Row Level Security using auth.uid(). This project builds strong foundations in auth + database security.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/auth"
    },
    {
        id: "supabase-beginner-2",
        level: "Phase 1 — Beginner (Core Foundations)",
        title: "File-Driven Profile System",
        description: "Create user profiles with avatar uploads using Supabase Storage. Implement public and private buckets, signed URLs, metadata tables, and RLS rules for secure file access and ownership validation.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/storage"
    },
    // 🌿 Intermediate
    {
        id: "supabase-intermediate-1",
        level: "Phase 2 — Intermediate (Realtime & Collaboration)",
        title: "Real-Time Collaboration App",
        description: "Build a live collaboration feature such as chat or shared notes using Supabase Realtime. Implement Postgres change feeds, presence tracking, and optimized subscriptions for scalable real-time updates.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/realtime"
    },
    {
        id: "supabase-intermediate-2",
        level: "Phase 2 — Intermediate (SaaS Architecture)",
        title: "Multi-Tenant SaaS Dashboard",
        description: "Design a SaaS-style app with organizations, team members, and role-based access. Focus on advanced RLS policies, secure joins, and multi-tenant schema design using PostgreSQL best practices.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/auth/row-level-security"
    },
    // 🌲 Advanced
    {
        id: "supabase-advanced-1",
        level: "Phase 3 — Advanced (Payments & Backend Logic)",
        title: "Subscription-Based SaaS (Stripe + Supabase)",
        description: "Build a paid SaaS product with free and premium plans. Use Supabase Edge Functions for Stripe webhooks, secure server-side logic, subscription state syncing, and feature gating at the database level.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/functions"
    },
    {
        id: "supabase-advanced-2",
        level: "Phase 3 — Advanced (Production & Compliance)",
        title: "Audit-Ready Admin Platform",
        description: "Create an internal admin panel with audit logs, activity tracking, soft deletes, Postgres triggers, materialized views, and admin-only RLS. This project mirrors real enterprise-grade Supabase systems.",
        cta: "Explore project",
        url: "https://supabase.com/docs/guides/database"
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
                            children: "🚀 Supabase Project Path — Beginner → Industry-Ready"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-600 max-w-2xl",
                            children: "These Supabase projects are designed to move learners from basic CRUD usage to real-world SaaS, security, and backend engineering skills used in production systems."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                    lineNumber: 70,
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
                                            className: "inline-block text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full",
                                            children: p.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs text-slate-400 hover:text-emerald-600 transition",
                                            "aria-label": `Open docs for ${p.title}`,
                                            children: "Docs ▶"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-600",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300",
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
                                                        fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "~2–6 weeks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-slate-500",
                    children: "Tip: Supabase mastery is not about CRUD — it’s about RLS, Postgres design, Edge Functions, and production security. These projects force you to learn all of them."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Supabase/projects.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Supabase/faq.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
const faqs = [
    {
        question: "What is Supabase and why should I learn it?",
        answer: "Supabase is an open-source backend platform built on PostgreSQL. It provides authentication, database, storage, realtime, and edge functions out of the box. Learning Supabase teaches you real backend engineering skills instead of hiding complexity like many BaaS tools."
    },
    {
        question: "Do I need to know PostgreSQL before learning Supabase?",
        answer: "Basic SQL knowledge is enough to start. However, to become industry-ready, you must understand PostgreSQL concepts like joins, indexes, constraints, and Row Level Security (RLS). Supabase is Postgres-first, not a black box."
    },
    {
        question: "What makes Supabase different from Firebase?",
        answer: "Supabase uses PostgreSQL with SQL and strong relational modeling, while Firebase uses NoSQL. Supabase enforces security at the database level with RLS, making it more suitable for scalable, enterprise-grade, and SaaS applications."
    },
    {
        question: "Is Row Level Security (RLS) really that important?",
        answer: "Yes. RLS is one of the most critical Supabase skills. It ensures users can only access the data they are authorized to see. Companies expect Supabase developers to write correct RLS policies — this is a key industry requirement."
    },
    {
        question: "Can I build production SaaS apps using Supabase?",
        answer: "Absolutely. Supabase is used in real production systems for SaaS products, internal tools, dashboards, and mobile apps. When combined with Edge Functions, Stripe, and proper RLS, it supports enterprise-grade architectures."
    },
    {
        question: "Is Supabase backend-only or full stack?",
        answer: "Supabase focuses on the backend, but it integrates seamlessly with frontend frameworks like React, Next.js, Svelte, Flutter, and mobile apps. You still control your frontend architecture."
    },
    {
        question: "How long does it take to become industry-ready with Supabase?",
        answer: "With consistent practice, most learners become job-ready in 2–3 months. The key is building real projects that use authentication, RLS, multi-tenancy, storage, and edge functions — not just CRUD apps."
    },
    {
        question: "Is Supabase suitable for large-scale applications?",
        answer: "Yes, when used correctly. Proper indexing, optimized queries, controlled realtime usage, and solid database design are essential. Supabase scales well because it is built on proven PostgreSQL infrastructure."
    }
];
function FAQ() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-slate-50 py-14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-extrabold text-slate-900",
                            children: "❓ Supabase — Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-slate-600 max-w-2xl mx-auto",
                            children: "Clear answers to the most common questions learners have when moving from beginner to industry-ready Supabase developer."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>{
                        const isOpen = openIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleFAQ(index),
                                    className: "w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-300",
                                    "aria-expanded": isOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base sm:text-lg font-semibold text-slate-900",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: `h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                                    lineNumber: 94,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-center text-sm text-slate-500",
                    children: "Tip: If you can confidently explain authentication, RLS, multi-tenancy, and Edge Functions — you are already ahead of most Supabase learners."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Supabase/faq.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/Supabase/downloadPdf.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
            doc.text(`Supabase Mastery Roadmap 2026 | Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, {
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
            '• Master Supabase fundamentals and advanced concepts',
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
        doc.text('© 2025 Supabase mastery Roadmap | All Rights Reserved', pageWidth / 2, pageHeight - 15, {
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
        const filename = 'Supabase_Mastery_Roadmap_2025.pdf';
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
"[project]/app/Roadmaps/Supabase/roadmapData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// supabaseRoadmapData.js - Supabase Mastery Roadmap Data
__turbopack_context__.s([
    "phases",
    ()=>phases
]);
const phases = [
    {
        id: 0,
        title: "Prerequisites (Don't skip this)",
        subtitle: "Foundation Level",
        description: "Essential skills needed before starting Supabase",
        color: "bg-gray-600",
        sections: [
            {
                title: "Required Skills",
                items: [
                    "JavaScript → async/await, fetch, promises",
                    "Basic SQL → SELECT, INSERT, UPDATE, JOIN",
                    "REST APIs → fundamentals",
                    "Git & GitHub → version control basics"
                ]
            },
            {
                title: "Nice to Have",
                items: [
                    "React / Next.js → frontend frameworks",
                    "HTTP Auth → JWT, cookies concepts",
                    "Basic Docker → containerization awareness"
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Supabase Fundamentals (Beginner)",
        subtitle: "Beginner Level",
        description: "Hands-on first, concept-second. Build production instincts",
        color: "bg-green-500",
        sections: [
            {
                title: "What Supabase Actually Is",
                items: [
                    "Architecture → PostgreSQL (core), PostgREST (auto REST API)",
                    "Services → GoTrue (Auth), Realtime (WebSockets), Storage (S3-like)",
                    "Edge Functions → Deno runtime",
                    "Mindset → Supabase = Postgres with superpowers, not a magic backend"
                ]
            },
            {
                title: "Supabase Project Setup",
                items: [
                    "Dashboard → Supabase Dashboard, Project creation",
                    "API Keys → anon vs service role",
                    "Environment → Local vs hosted Supabase",
                    "Connection → Connect using @supabase/supabase-js, First query from frontend"
                ]
            },
            {
                title: "Database Basics (Postgres-First Thinking)",
                items: [
                    "Schema → Tables & columns, Data types",
                    "Keys → Primary keys (UUID vs serial), Foreign keys",
                    "Indexing → Indexes (basic)",
                    "Best Practice → Use SQL editor instead of UI (important!)",
                    "Hands-on → Design users table, Add relations (profiles, posts)"
                ]
            },
            {
                title: "Auto-Generated APIs",
                items: [
                    "REST Endpoints → Auto-generated from tables",
                    "Operations → Filtering, pagination, Select vs insert vs update",
                    "Row-level → Row-level operations",
                    "Hands-on → CRUD from frontend, Pagination & filtering, Error handling"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Authentication & Security (Junior Level)",
        subtitle: "Junior Level",
        description: "Master auth and Row Level Security - critical for production",
        color: "bg-blue-500",
        sections: [
            {
                title: "Supabase Auth Deep Dive",
                items: [
                    "Auth Methods → Email/password, Magic links",
                    "OAuth → Google, GitHub integration",
                    "Session → Session management, Refresh tokens",
                    "Hands-on → Auth UI, Protect routes, Handle logged-in vs logged-out state"
                ]
            },
            {
                title: "Row Level Security (RLS) - CRITICAL",
                items: [
                    "Policies → USING, WITH CHECK clauses",
                    "User Context → auth.uid() for user-specific access",
                    "Access Control → Role-based access, Public vs private tables",
                    "Hands-on → User-specific data access, Multi-tenant tables, Admin vs user roles",
                    "Industry Rule → If you can't explain RLS clearly, you're not production-ready"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Storage, Realtime & Files (Mid-Level)",
        subtitle: "Mid Level",
        description: "Handle files, real-time updates, and optimize performance",
        color: "bg-purple-500",
        sections: [
            {
                title: "Supabase Storage",
                items: [
                    "Buckets → Public vs private buckets",
                    "Permissions → File permissions, Signed URLs",
                    "Limits → File size limits, CDN behavior",
                    "Hands-on → Upload avatars, Secure private files, Delete & replace files"
                ]
            },
            {
                title: "Realtime & Subscriptions",
                items: [
                    "Database Changes → Realtime database changes",
                    "Features → Channels & events, Presence & broadcast",
                    "Best Practices → When not to use realtime",
                    "Hands-on → Live chat, Live notifications, Real-time dashboard updates"
                ]
            },
            {
                title: "Performance Optimization",
                items: [
                    "Indexing → Indexing strategies",
                    "Query Efficiency → Avoid N+1 queries, Select only required fields",
                    "Awareness → Query cost awareness",
                    "Hands-on → Optimize slow queries, Compare indexed vs non-indexed queries"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Edge Functions & Backend Logic (Senior Level)",
        subtitle: "Senior Level",
        description: "Build custom APIs and integrate external services",
        color: "bg-red-500",
        sections: [
            {
                title: "Supabase Edge Functions",
                items: [
                    "Runtime → Deno runtime",
                    "Configuration → Environment variables",
                    "Security → Auth inside edge functions",
                    "Frontend → Calling functions from frontend",
                    "Hands-on → Custom API endpoint, Server-side validation, Secure admin operations"
                ]
            },
            {
                title: "Webhooks & Integrations",
                items: [
                    "Payment → Stripe webhooks",
                    "Services → Email services, External APIs",
                    "Async → Background jobs patterns",
                    "Hands-on → Subscription billing logic, Payment verification, Email triggers"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Advanced Database Engineering (Senior+)",
        subtitle: "Senior+ Level",
        description: "Master Postgres features and database migrations",
        color: "bg-orange-500",
        sections: [
            {
                title: "Advanced Postgres Inside Supabase",
                items: [
                    "Views → Views & materialized views",
                    "Functions → Functions (PL/pgSQL), Triggers",
                    "Data Types → JSONB usage",
                    "Search → Full-text search",
                    "Hands-on → Search system, Audit logs, Derived data tables"
                ]
            },
            {
                title: "Migrations & Environments",
                items: [
                    "CLI → Supabase CLI",
                    "Schema → Database migrations, Versioned schema changes",
                    "Environments → Local dev vs staging vs prod",
                    "Security → Secrets management",
                    "Hands-on → Safe production migrations"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Architecture & Scaling (Industry Ready)",
        subtitle: "Industry Ready",
        description: "Production architecture, security, and reliability",
        color: "bg-indigo-600",
        sections: [
            {
                title: "Production Architecture",
                items: [
                    "SaaS Design → Multi-tenant SaaS design",
                    "Access Control → RBAC vs ABAC",
                    "Data Management → Soft deletes, Data isolation strategies",
                    "Hands-on → SaaS schema design, Organization-based access"
                ]
            },
            {
                title: "Security & Compliance",
                items: [
                    "Prevention → SQL injection prevention",
                    "Principles → Least privilege, Secure service role usage",
                    "Regulations → GDPR basics",
                    "Hands-on → Audit access logs, Secure admin APIs"
                ]
            },
            {
                title: "Monitoring & Reliability",
                items: [
                    "Metrics → Query performance metrics",
                    "Logging → Error logging",
                    "Protection → Rate limiting strategies",
                    "Recovery → Backup & restore",
                    "Hands-on → Detect slow queries, Rollback strategies"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Testing & CI/CD (Elite Level)",
        subtitle: "Elite Level",
        description: "Automated testing and continuous integration",
        color: "bg-pink-600",
        sections: [
            {
                title: "Testing Strategies",
                items: [
                    "Security → Testing RLS policies",
                    "API Testing → API testing",
                    "Auth Testing → E2E auth testing",
                    "Automation → CI pipelines with Supabase",
                    "Hands-on → Automated schema tests, Auth flow tests"
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Capstone Projects (Must Build)",
        subtitle: "Mastery Level",
        description: "You're industry-ready only after building these projects",
        color: "bg-gray-800",
        sections: [
            {
                title: "Beginner Project",
                items: [
                    "Auth-based CRUD app → User profiles",
                    "Security → RLS enforced"
                ]
            },
            {
                title: "Intermediate Project",
                items: [
                    "SaaS Dashboard → Multi-tenant access",
                    "Features → File uploads + realtime updates"
                ]
            },
            {
                title: "Advanced Project",
                items: [
                    "Subscription SaaS → Stripe + webhooks",
                    "Backend → Edge functions, Admin panel",
                    "Compliance → Audit logs"
                ]
            },
            {
                title: "Industry-Ready Supabase Dev Checklist",
                items: [
                    "Design → Design secure schemas",
                    "Security → Write RLS without breaking prod",
                    "Performance → Optimize Postgres queries",
                    "Architecture → Build SaaS-grade backends",
                    "Debugging → Debug auth & permission issues",
                    "Scale → Scale safely"
                ]
            }
        ]
    }
];
}),
"[project]/app/Roadmaps/Supabase/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Supabase/docs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Supabase/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Supabase/faq.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Supabase/downloadPdf.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Supabase/roadmapData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Supabase = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"]);
            if (result.success) {
                console.log(`PDF downloaded successfully: ${result.filename}`);
            // Optional: Show success message to user
            } else {
                console.error('PDF download failed:', result.error);
            // Optional: Show error message to user
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 41,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 51,
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
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 58,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 61,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 62,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                    lineNumber: 57,
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
                                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                                        lineNumber: 73,
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
                                                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                                                        lineNumber: 79,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                                                lineNumber: 78,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                                lineNumber: 69,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Supabase$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 91,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 94,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                            lineNumber: 95,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🏆 Final Tips to Become Industry-Ready SQL Engineer"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg mb-4",
                                    children: "Congratulations! You've completed the Supabase Mastery Roadmap and are ready to design scalable, robust systems."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-white rounded-lg shadow-sm border border-blue-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm mb-3",
                                            children: "📥 Want a detailed execution plan to guide your learning journey?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePDFDownload,
                                            disabled: isDownloading,
                                            className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200",
                                            children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 20,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Creating Your Plan..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Create My Execution Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 44,
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
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl md:text-3xl font-bold text-gray-900",
                                    children: [
                                        "Supabase ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: " Mastery Roadmap"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 151,
                                            columnNumber: 24
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm md:text-base font-normal text-gray-600 ml-2",
                                            children: "(2026 Edition)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg items-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg",
                            children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 18,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Creating Plan..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Create Execution Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 180,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 180,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePDFDownload,
                        disabled: isDownloading,
                        className: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-md",
                        children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Creating Your Plan..."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Create Execution Plan"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 185,
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
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 208,
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
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 222,
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
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 236,
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
                                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
            lineNumber: 145,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Supabase/page.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Supabase;
}),
];

//# sourceMappingURL=app_Roadmaps_Supabase_c94cbaa8._.js.map