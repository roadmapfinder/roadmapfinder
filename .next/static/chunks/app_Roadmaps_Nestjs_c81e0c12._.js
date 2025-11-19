(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Roadmaps/Nestjs/roadmapData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "phases": (()=>phases)
});
const phases = [
    {
        id: 1,
        title: "Foundation",
        subtitle: "1–3 weeks",
        description: "Be fluent in TypeScript, Node fundamentals, and HTTP basics so NestJS concepts make sense",
        color: "bg-green-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "TypeScript: types, generics, interfaces, unknown/any, declaration merging, tsconfig basics",
                    "Node.js: modules, event loop, async/await, streams, package.json, npm/yarn/pnpm",
                    "HTTP basics: methods, status codes, headers, REST constraints",
                    "Basic CLI tooling: Git, VS Code, debugging, ESLint, Prettier"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Build a small Node script CLI in TypeScript (read file → process → write)",
                    "Learn TypeScript by converting a small JS project",
                    "Read NestJS 'First steps' to orient to patterns"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "NestJS Fundamentals",
        subtitle: "2–4 weeks",
        description: "Understand Nest's architecture — modules, controllers, providers, dependency injection (DI), lifecycle, and the CLI",
        color: "bg-yellow-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "App structure: Modules, Controllers, Providers (Services), DTOs",
                    "Dependency Injection and scopes (singleton vs transient)",
                    "Nest CLI: nest new, generators for modules/controllers/services",
                    "Request lifecycle and wiring",
                    "Validation with class-validator + class-transformer",
                    "Exception filters, pipes, interceptors, guards, and middleware (when to use each)"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Follow the official NestJS docs 'First steps' and core concepts",
                    "Build: Todo REST API with modules, DTOs, validation, custom exception filter, and at least one interceptor (logging)",
                    "Add unit tests (Jest) for services and controllers"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Databases & Persistence",
        subtitle: "2–4 weeks",
        description: "Connect Nest to a production-ready database; understand migration, transactions, repository vs query builders",
        color: "bg-orange-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "ORMs & query builders: Prisma, TypeORM, Drizzle, Kysely — pros/cons (2024–25 trend: Prisma and Drizzle are increasingly recommended for new projects)",
                    "Database design, relationships, indexes, transactions, migrations",
                    "Using repositories/services patterns and injecting DB clients in Nest providers"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Build: Task Manager with PostgreSQL and Prisma (schema, migrations, seeds). Use Nest module to provide PrismaService. Add paginated endpoints and filtering",
                    "Migrate one entity: practice transactions and error handling",
                    "Compare implementation of a couple queries in Prisma vs TypeORM (optional exercise)"
                ]
            },
            {
                title: "Resources",
                items: [
                    "NestJS Prisma recipe (official)"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Authentication, Authorization & Security",
        subtitle: "2–3 weeks",
        description: "Implement secure auth flows and access control for real-world apps",
        color: "bg-blue-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "Auth patterns: JWT, sessions, OAuth2, OpenID Connect",
                    "Passport.js strategies in Nest (JWT, OAuth)",
                    "Role-based access control (RBAC) and attribute-based access control (ABAC)",
                    "Protecting routes with Guards, using signed cookies vs Authorization headers",
                    "OWASP basics: injection, XSS, CSRF, rate limiting, helmet, CORS, input validation, secrets management"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Implement login/register with hashed passwords (bcrypt), JWT refresh tokens, token rotation",
                    "Add role-based guards and route-level permissions",
                    "Add security middleware: helmet, rate limiting, CORS policy, secure headers"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Advanced API Patterns",
        subtitle: "2–4 weeks",
        description: "Master GraphQL, WebSockets, file uploads, streaming, and advanced request handling",
        color: "bg-purple-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "GraphQL with Nest: code-first vs schema-first, Apollo Federation, performance tuning (Nest supports GraphQL modules and federation)",
                    "WebSockets: adapters and gateways",
                    "File upload best practices (multipart streaming, direct-to-cloud uploads)",
                    "Server-Sent Events (SSE) and streaming responses"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Build: Realtime Chat with WebSocket gateway + Auth",
                    "Add a GraphQL endpoint (code-first) for a subset of app data; integrate with Prisma",
                    "Implement large-file upload streaming to S3-compatible storage"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Microservices & Distributed Systems",
        subtitle: "3–6 weeks",
        description: "Design, implement and reason about microservices with Nest, message brokers, and event-driven patterns",
        color: "bg-red-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "NestJS Microservices module: transport layers (Redis, NATS, Kafka, RabbitMQ)",
                    "Message patterns: request/reply vs event emit; idempotency, retries",
                    "Design patterns: API Gateway, Saga, CQRS, Event Sourcing",
                    "Observability: distributed tracing, logging correlation (trace IDs), metrics"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Split a monolith into two services (e.g., users and orders) using Redis or NATS message transport",
                    "Implement a Saga for a multi-step transaction (book-then-pay flow) using events",
                    "Add centralized logging (e.g., ELK or Grafana Loki) and tracing (OpenTelemetry)"
                ]
            },
            {
                title: "Reading",
                items: [
                    "Microservices docs in NestJS and microservices patterns (saga/CQRS)"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Architecture, Patterns & Scalability",
        subtitle: "Ongoing",
        description: "Build systems designed for scale, maintainability, and team collaboration",
        color: "bg-indigo-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "Hexagonal architecture, DDD basics, bounded contexts",
                    "Module boundaries, shared libraries, API contracts, versioning",
                    "Performance tuning: clustering, worker queues, caching strategies (Redis), horizontal scaling",
                    "Database patterns: CQRS, read replicas, sharding basics"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Re-architect one project into domain modules, apply dependency inversion",
                    "Add Redis caching and invalidate strategies; measure latency improvements",
                    "Load-test endpoints (k6 or Artillery) and iterate"
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Testing, CI/CD & Quality",
        subtitle: "Ongoing",
        description: "Ensure production readiness with testing at all levels and automated pipelines",
        color: "bg-pink-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "Unit tests (Jest), integration tests, e2e tests (Supertest)",
                    "Test doubles, mocking Prisma/DB, test containers for DB in CI",
                    "Linting, formatting, commit hooks (husky), semantic commits, changelogs",
                    "CI/CD pipelines (GitHub Actions, GitLab CI), build caches, canary/blue-green deployment"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Create GitHub Actions pipeline: build, lint, test, and deploy to staging",
                    "Add e2e suite that runs against a ephemeral Postgres (Testcontainers)",
                    "Add code coverage and merge gate rules"
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Observability, Reliability & Ops",
        subtitle: "Ongoing",
        description: "Run Nest apps in production reliably and safely",
        color: "bg-teal-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "Structured logging, log levels, correlation IDs",
                    "Metrics (Prometheus), dashboards (Grafana)",
                    "Tracing (OpenTelemetry) and error reporting (Sentry)",
                    "Disaster recovery: backups, health checks, graceful shutdowns"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Add health check endpoints and readiness probes; integrate with Kubernetes probes",
                    "Expose Prometheus metrics and create Grafana dashboards",
                    "Integrate Sentry and ensure errors have context"
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Deployment & Cloud",
        subtitle: "1–2 weeks per infra",
        description: "Ship to cloud with proper infra choices",
        color: "bg-cyan-500",
        sections: [
            {
                title: "What to Learn / Options",
                items: [
                    "Docker images and multi-stage builds; smaller base images (distroless)",
                    "Orchestration: Kubernetes (Helm charts), deployment patterns",
                    "Serverless: AWS Lambda (via Serverless framework or AWS Lambda adapter), Vercel/Cloud Run",
                    "Managed DBs, secrets managers (AWS Secrets Manager / HashiCorp Vault), CD"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Containerize app, push to registry, run locally with Docker Compose",
                    "Create Kubernetes manifests/Helm chart; deploy to a cluster",
                    "Implement CI pipeline that builds image, runs tests, and deploys"
                ]
            }
        ]
    },
    {
        id: 11,
        title: "System Design, Leadership & Interview Prep",
        subtitle: "Ongoing / months",
        description: "Move from senior engineer to system-level thinking and technical leadership",
        color: "bg-lime-500",
        sections: [
            {
                title: "What to Learn",
                items: [
                    "System design for backend services: latency, throughput, CAP trade-offs",
                    "Cost estimation and capacity planning",
                    "Mentoring, code reviews, design docs, on-call best practices"
                ]
            },
            {
                title: "Concrete Tasks",
                items: [
                    "Lead a mini-architecture review for a project: propose migration to microservices, include cost/perf trade-offs",
                    "Prepare system-design answers focusing on real-world NestJS examples (scaling REST/GraphQL, event-driven workflows)"
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Nestjs/docs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Docs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
;
;
const docsList = [
    {
        title: "NestJS — Official Documentation",
        description: "The complete official NestJS documentation covering fundamentals, modules, providers, controllers, middleware, and all core concepts.",
        url: "https://docs.nestjs.com/",
        citation: "NestJS Docs"
    },
    {
        title: "NestJS Modules — Official Guide",
        description: "Understanding NestJS modules: feature modules, shared modules, global modules, dependency injection structure, and architecture best practices.",
        url: "https://docs.nestjs.com/modules",
        citation: "NestJS Modules"
    },
    {
        title: "NestJS Guards — Official Guide",
        description: "Documentation on guards: handling authorization, route protection, role-based access control (RBAC), and custom guard creation.",
        url: "https://docs.nestjs.com/guards",
        citation: "NestJS Guards"
    },
    {
        title: "NestJS Pipes — Official Guide",
        description: "Official guide to pipes for data transformation & validation. Includes built-in pipes, class-validator integration, and custom pipe creation.",
        url: "https://docs.nestjs.com/pipes",
        citation: "NestJS Pipes"
    },
    {
        title: "NestJS Request Lifecycle — FAQ",
        description: "Detailed explanation of how NestJS processes each request: middleware → guards → interceptors → pipes → controller → service → response.",
        url: "https://docs.nestjs.com/faq/request-lifecycle",
        citation: "Request Lifecycle"
    }
];
function Docs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 py-12 bg-gray-50 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-6",
                    children: "📚 NestJS Official Documentation"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-10",
                    children: "Essential official NestJS documentation every backend developer must know — covering core concepts, architecture, modules, lifecycle, and advanced patterns."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docsList.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doc.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600",
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 18,
                                            className: "text-gray-400 group-hover:text-blue-600",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-gray-600",
                                    children: doc.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-indigo-600 font-medium",
                                    children: doc.citation
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, doc.title, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/docs.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Docs;
var _c;
__turbopack_context__.k.register(_c, "Docs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Nestjs/projects.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Projects.jsx
__turbopack_context__.s({
    "default": (()=>Projects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const projects = [
    {
        id: "nest-auth-api",
        level: "Phase 1 — Beginner",
        title: "NestJS Authentication & Users API",
        description: "Beginner-friendly project to learn JWT authentication, role-based access, DTO validation, password hashing, and basic API architecture.",
        url: "https://youtu.be/8jQZdDaBL3I?si=wc7-b5G_UdXOHPda" // placeholder
    },
    {
        id: "nest-task-manager",
        level: "Phase 2 — Intermediate",
        title: "NestJS Task Manager / Project Manager API",
        description: "Intermediate project covering database schema design, CRUD operations, pagination, filters, error handling, and Prisma/TypeORM usage.",
        url: "https://youtu.be/aq5Gzj2Rc8Y?si=oysT4KercuQbkem3" // placeholder
    },
    {
        id: "nest-realtime-chat",
        level: "Phase 2 — Intermediate",
        title: "NestJS Real-Time Chat App with WebSockets",
        description: "Build a real-time messaging backend with NestJS WebSockets, JWT-based socket auth, event gateways, presence tracking, and message persistence.",
        url: "https://youtu.be/eEa3u3wyYu4?si=bCdKJKQee9fZHLl8" // placeholder
    },
    {
        id: "nest-ecommerce-backend",
        level: "Phase 3 — Advanced",
        title: "NestJS E-Commerce Backend",
        description: "Advanced e-commerce backend with products, cart, orders, Stripe/Razorpay integration, webhooks, transactions, and admin role management.",
        url: "https://youtu.be/E1wtzB0ZSgQ?si=4um1KLPk6h0JfURu" // placeholder
    },
    {
        id: "nest-microservices",
        level: "Phase 4 — Advanced",
        title: "NestJS Microservices Order System",
        description: "Event-driven microservices using Kafka/NATS/Redis MQ. Includes API gateway, auth service, order service, payments service, and notification service.",
        url: "https://youtu.be/t76UMpwFNs0?si=1SD6n5bvp7FBjGAM" // placeholder
    },
    {
        id: "nest-saas-multitenant",
        level: "Phase 5 — Pro Level",
        title: "NestJS Multi-Tenant SaaS Backend",
        description: "Pro-level project implementing multi-tenant architecture, dynamic DB connections, billing, roles, permissions, and clean architecture patterns.",
        url: "https://youtu.be/l-xMjWR978c?si=Pz2Q1bJ_hf6-gUsv" // placeholder
    }
];
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "🚀 Verified NestJS Backend Project Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            children: "Carefully selected backend projects from beginner to industry-level, designed to make you job-ready in real-world NestJS development."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full",
                                    children: p.level
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-600 text-sm",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-4 inline-block text-indigo-600 font-medium hover:underline",
                                    children: "Open Guide ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-gray-500 text-center",
                    children: "These projects represent real-world NestJS systems used in modern companies — mastering them makes you truly industry-ready."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/projects.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Roadmaps/Nestjs/faq.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/FAQ.jsx
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
        question: "What is the MERN stack and why should I learn it?",
        answer: "MERN stands for MongoDB, Express, React, and Node.js. It is one of the most popular full-stack development stacks used to build modern, scalable web applications."
    },
    {
        question: "How long does it take to become job-ready in MERN?",
        answer: "On average, it takes 3–6 months of consistent learning and building projects to become industry-ready. It depends on your consistency and hands-on practice."
    },
    {
        question: "Do I need DSA (Data Structures & Algorithms) to get a MERN developer job?",
        answer: "Basic understanding of arrays, objects, loops, and problem-solving is enough for most MERN developer roles. Advanced DSA is optional for MERN roles unless applying to big tech companies."
    },
    {
        question: "How many projects should I build before applying for jobs?",
        answer: "At least 5–7 solid real-world projects including authentication, CRUD operations, real-time features, and an e-commerce system."
    },
    {
        question: "Is TypeScript required for MERN development?",
        answer: "TypeScript is not mandatory but highly recommended. It improves reliability, scalability, and code quality in large applications."
    },
    {
        question: "How do I deploy MERN projects?",
        answer: "You can deploy MERN apps using platforms like Vercel, Netlify, Render, Railway, and AWS. Databases can be hosted using MongoDB Atlas."
    }
];
function FAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-16 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-extrabold text-gray-900",
                            children: "❓ Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-gray-600 text-lg",
                            children: "Real and practical questions learners ask while becoming a MERN developer."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>{
                        const isOpen = openIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-sm border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all",
                            onClick: ()=>setOpenIndex(isOpen ? null : index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "w-6 h-6 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-6 h-6 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                                            lineNumber: 66,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-gray-600 leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 text-center text-gray-500 text-sm",
                    children: "These FAQs are curated based on real developer queries and industry expectations."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/faq.jsx",
        lineNumber: 43,
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
"[project]/app/Roadmaps/Nestjs/downloadPdf.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                            children: "Nest js Developer Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                            lineNumber: 168,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.subtitle,
                            children: "Your Complete Journey from Beginner to Professional"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.phaseSubtitle,
                                                        children: phase.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        style: styles.phaseDescription,
                                                        children: phase.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    item
                                                                ]
                                                            }, itemIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, sectionIndex, true, {
                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, phase.id, true, {
                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    style: styles.pageNumber,
                    render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                    fixed: true
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                    lineNumber: 221,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
            lineNumber: 165,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
            lineNumber: 244,
            columnNumber: 28
        }, this)).toBlob();
        // Generate filename with current date
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `Nestjs-Developer-roadmap-${currentDate}.pdf`;
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
            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
            lineNumber: 263,
            columnNumber: 15
        }, void 0),
        fileName: `Nestjs-roadmap-${new Date().toISOString().split('T')[0]}.pdf`,
        className: className,
        children: ({ blob, url, loading, error })=>{
            if (loading) return 'Generating PDF...';
            if (error) return 'Error generating PDF';
            return children;
        }
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
        lineNumber: 262,
        columnNumber: 3
    }, this);
_c1 = PDFDownloadButton;
const downloadAdvancedRoadmapPDF = async (phases, options = {})=>{
    const { includeWatermark = true, customTitle = "Nest js Developer Roadmap", customSubtitle = "Your Complete Journey from Beginner to Professional", pageSize = "A4", orientation = "portrait" } = options;
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
                                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.subtitle,
                                    children: customSubtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
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
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                                                        style: styles.phaseTitleContainer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseTitle,
                                                                children: phase.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseSubtitle,
                                                                children: phase.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                style: styles.phaseDescription,
                                                                children: phase.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 308,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                lineNumber: 301,
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
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 315,
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
                                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            item
                                                                        ]
                                                                    }, itemIndex, true, {
                                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, sectionIndex, true, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                        lineNumber: 300,
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
                                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                            style: styles.footer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.footerTitle,
                                    children: "🎉 Congratulations!"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.footerText,
                                    children: "You've completed the Nest js Developer Roadmap and are now ready to take on professional  challenges."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$primitives$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.pageNumber,
                            render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                            fixed: true
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this);
        const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvancedPDFDocument, {}, void 0, false, {
            fileName: "[project]/app/Roadmaps/Nestjs/downloadPdf.jsx",
            lineNumber: 352,
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
"[project]/app/Roadmaps/Nestjs/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Nestjs/roadmapData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$docs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Nestjs/docs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Nestjs/projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$faq$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Nestjs/faq.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$downloadPdf$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Nestjs/downloadPdf.jsx [app-client] (ecmascript)");
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
const NestjsRoadmap = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$downloadPdf$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"]);
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$docs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$faq$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
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
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-5xl px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",
                                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                        children: section.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
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
                                                                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                                                        lineNumber: 77,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Nestjs$2f$roadmapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
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
                                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🎉 Congratulations! You're a Nest js Developer"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg",
                                    children: "You've mastered the complet Nest js Roadmap and are now ready to build scalable, high-performance applications."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                children: [
                                    "Nest js ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "Mastery Roadmap 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                        lineNumber: 124,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                            lineNumber: 122,
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
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 147,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 147,
                                columnNumber: 49
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 121,
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
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 152,
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
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 170,
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
                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 184,
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
                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 198,
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
                                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Nestjs/page.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
_s(NestjsRoadmap, "0HA4EeIJlOOJC7wNk0pgM7ZTfQQ=");
_c = NestjsRoadmap;
const __TURBOPACK__default__export__ = NestjsRoadmap;
var _c;
__turbopack_context__.k.register(_c, "NestjsRoadmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Roadmaps_Nestjs_c81e0c12._.js.map