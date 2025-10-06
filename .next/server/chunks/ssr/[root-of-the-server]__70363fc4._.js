module.exports = {

"[project]/app/Roadmaps/Java/roadmapData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "phases": (()=>phases)
});
const phases = [
    {
        id: 1,
        title: "Foundations — Beginner",
        subtitle: "0–2 months",
        description: "Learn core Java syntax, basic OOP thinking, and write small programs you understand end-to-end",
        color: "bg-green-500",
        sections: [
            {
                title: "Must-Know Topics",
                items: [
                    "Java basics: variables, primitives, operators, control flow (if/switch, loops)",
                    "Data types & String API",
                    "Methods, parameters, return values, varargs",
                    "Object-Oriented Programming: classes, objects, fields, methods, constructors, this",
                    "Encapsulation, access modifiers (public, private, protected, package)",
                    "Inheritance, super, method overriding",
                    "Polymorphism & dynamic dispatch, interfaces, default methods",
                    "Exception handling: try/catch/finally, checked vs unchecked exceptions, custom exceptions",
                    "Collections basics: List, Set, Map, Queue and when to use each",
                    "Generics fundamentals",
                    "Basic I/O (files, InputStream/OutputStream, Reader/Writer)",
                    "Simple debugging: using an IDE debugger, reading stack traces",
                    "Basic terminal/git skills: git init, git add/commit/push, GitHub repo"
                ]
            },
            {
                title: "Actionable Practice",
                items: [
                    "Solve tiny problems: implement factorial, Fibonacci, reverse string, file line counter",
                    "Build a CLI tool (e.g., a Todo list persisted to a JSON/text file)",
                    "Keep code on GitHub — learn branching and meaningful commit messages"
                ]
            },
            {
                title: "Mastery Checklist",
                items: [
                    "Can design small classes and use OOP well",
                    "Can use collections and generics comfortably",
                    "Can debug and read stack traces",
                    "Have 2–3 small projects on GitHub"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Core Java & Tooling — Solid Intermediate",
        subtitle: "2–4 months",
        description: "Master language features, deeper libraries, and the Java toolchain",
        color: "bg-yellow-500",
        sections: [
            {
                title: "Must-Know Topics",
                items: [
                    "Java versions & features (lambda expressions, streams, Optional, var, records, modules)",
                    "Streams API and functional-style programming patterns",
                    "Advanced Collections (concurrent collections, Collections utilities)",
                    "Concurrency basics: threads, Runnable/Callable, synchronized, volatile",
                    "Executors, thread pools, Future, CompletableFuture",
                    "Java Memory Model basics: heap vs stack, GC concept",
                    "I/O & NIO (non-blocking I/O basics, Path, Files)",
                    "Serialization (JSON libraries: Jackson/Gson)",
                    "Build tools: Maven or Gradle (dependency management, lifecycle, plugins)",
                    "Unit testing: JUnit 5, parameterized tests, test structure",
                    "Mocking: Mockito",
                    "Logging: SLF4J + Logback/Log4j2",
                    "Debugging & tooling: jstack, jmap, jstat (basics), IDE features (IntelliJ/Eclipse)",
                    "Basic profiling: VisualVM, Java Flight Recorder (concepts)"
                ]
            },
            {
                title: "Actionable Practice",
                items: [
                    "Re-implement a small project using Streams & lambdas",
                    "Write comprehensive unit tests; aim for logical coverage, not fake coverage",
                    "Configure Maven/Gradle builds, include test and shade plugins",
                    "Add logging at appropriate levels, and show log rotation"
                ]
            },
            {
                title: "Mastery Checklist",
                items: [
                    "Comfortable with lambdas/streams and when not to overuse them",
                    "Understand thread pools and can use CompletableFuture",
                    "Can create CI-friendly builds (Maven/Gradle) and run automated tests"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Backend Development & Frameworks — Advanced",
        subtitle: "4–8 months",
        description: "Build production-quality backend services using mainstream Java frameworks and persistence",
        color: "bg-orange-500",
        sections: [
            {
                title: "Must-Know Topics",
                items: [
                    "Spring ecosystem: Spring Boot, Spring MVC, Spring Data JPA, Spring Security basics",
                    "REST API design: resource modelling, HTTP verbs/status codes, content negotiation",
                    "Persistence: JDBC, JPA/Hibernate, entity mapping, relationships, transactions",
                    "Database fundamentals: SQL (joins, indexes), ACID, normalization, schema migration (Flyway/Liquibase)",
                    "DTOs, mapping (MapStruct or manual), validation (javax.validation / jakarta.validation)",
                    "API versioning, API documentation (OpenAPI / Swagger)",
                    "Integration testing: @SpringBootTest, Testcontainers (for DB integration)",
                    "Caching basics (Redis), connection pools (HikariCP)",
                    "Build & Packaging: fat jars, executable jars, native images (optional)",
                    "Basic HTTP client libraries: HttpClient, RestTemplate / WebClient (reactive)",
                    "Security: basic auth, OAuth2, JWT, protecting endpoints, common vulnerabilities (OWASP top 10)"
                ]
            },
            {
                title: "Actionable Practice",
                items: [
                    "Build a Spring Boot REST API with CRUD operations, JPA, and migrations",
                    "Add authentication (JWT or OAuth2 via OAuth provider)",
                    "Write integration tests using Testcontainers + JUnit",
                    "Add caching with Redis and profile endpoints"
                ]
            },
            {
                title: "Mastery Checklist",
                items: [
                    "You can design and implement a secure REST API with persistence, validation, and error handling",
                    "You know how to test the app fully (unit + integration)",
                    "App can be built and deployed as artifact (jar/docker)"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Distributed Systems & Production Readiness",
        subtitle: "8–12 months",
        description: "Build, deploy, operate and scale services; understand production concerns",
        color: "bg-blue-500",
        sections: [
            {
                title: "Must-Know Topics",
                items: [
                    "Microservices basics vs monoliths; when to choose which",
                    "Spring Cloud / alternatives: service discovery, config server, circuit breakers (concepts)",
                    "API gateways, load balancing, service-to-service communication patterns (HTTP, gRPC)",
                    "Messaging & event-driven systems: Kafka, RabbitMQ; topics vs queues, partitions, consumer groups",
                    "Observability: structured logging, correlation IDs, distributed tracing (OpenTelemetry / Zipkin / Jaeger)",
                    "Monitoring & metrics: Prometheus metrics, Grafana dashboards, alerts",
                    "Containerization: Dockerfile best practices, multi-stage builds",
                    "Orchestration: Kubernetes basics (pods, deployments, services, ingress, configmaps, secrets)",
                    "CI/CD pipelines: GitHub Actions/Jenkins/GitLab CI for build/test/deploy",
                    "Performance tuning: JVM options, GCs (G1, ZGC concepts), memory sizing, thread dumps analysis",
                    "Security in production: TLS/HTTPS, secrets management, role-based access control",
                    "Reliability patterns: retries, backoff, bulkhead, idempotency"
                ]
            },
            {
                title: "Actionable Practice",
                items: [
                    "Containerize your Spring Boot service and run in Docker Compose",
                    "Deploy a service on a Kubernetes cluster (minikube/k3s or a cloud provider)",
                    "Connect a simple microservice pair using Kafka to exchange events; instrument tracing",
                    "Add Prometheus instrumentation and a basic Grafana dashboard",
                    "Create a CI pipeline that runs tests and publishes Docker image to registry"
                ]
            },
            {
                title: "Mastery Checklist",
                items: [
                    "Can design a production deployment architecture (CI/CD, monitoring, scaling)",
                    "Can analyze performance issues using profiler/heap dumps and resolve common bottlenecks",
                    "Understands distributed system tradeoffs (consistency, partition tolerance, latency)"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Expert / Mastery — Architect & Lead Developer",
        subtitle: "12+ months",
        description: "Lead design of scalable systems, deep JVM mastery, advanced performance and architecture",
        color: "bg-purple-500",
        sections: [
            {
                title: "Must-Know Topics",
                items: [
                    "Deep JVM internals: classloading, bytecode, classfile structure, JIT compilation, hotspot internals",
                    "Advanced GC tuning and scenarios; native memory issues; memory leak hunting with MAT",
                    "Advanced concurrency: lock-free algorithms, java.util.concurrent internals, Unsafe (conceptual), VarHandle",
                    "Reactive programming: Project Reactor, reactive streams, backpressure patterns (where appropriate)",
                    "Distributed data stores & CAP tradeoffs; advanced Kafka design (exactly-once semantics, compacted topics)",
                    "Design for scale: partitioning, sharding, CQRS, event sourcing (use where appropriate), database scaling patterns",
                    "System design at scale: load patterns, caches, CDN, multi-region architecture, cost optimization",
                    "Performance engineering: benchmarking (JMH), load testing (Gatling/JMeter), profiling (async-profiler), tuning pipelines",
                    "Observability at scale: sampling, log retention, cost tradeoffs, SLOs and SLIs, error budgets",
                    "Leading teams: code reviews, design docs, mentoring, architecture decision records (ADR)"
                ]
            },
            {
                title: "Actionable Practice",
                items: [
                    "Implement a high-throughput service and benchmark with JMH",
                    "Prototype an event-sourced feature using Kafka + compacted topics or an event store",
                    "Do a system design write-up for a large-scale use case (e.g., real-time analytics pipeline)"
                ]
            },
            {
                title: "Mastery Checklist",
                items: [
                    "Able to write/design systems for high throughput / low latency",
                    "Can diagnose and fix production-level JVM and concurrency problems",
                    "Can drive architecture decisions and mentor other engineers"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Project Ideas — Mapped to Stages",
        subtitle: "Build These Projects",
        description: "Progressive complexity to solidify your skills",
        color: "bg-red-500",
        sections: [
            {
                title: "Beginner Projects",
                items: [
                    "CLI Todo app (file persistence)",
                    "Text analyzer (word frequency)",
                    "Simple banking console app"
                ]
            },
            {
                title: "Intermediate Projects",
                items: [
                    "RESTful Bookstore (Spring Boot + JPA + unit tests)",
                    "Chat CLI with sockets",
                    "CSV ETL tool"
                ]
            },
            {
                title: "Advanced Projects",
                items: [
                    "Full e-commerce microservice (orders, catalog, payments stub) with Spring Boot + Kafka + Postgres + Redis + Swagger + Auth; dockerized + k8s manifest"
                ]
            },
            {
                title: "Production/Expert Projects",
                items: [
                    "Real-time analytics pipeline: ingest events → Kafka → stream processing (Kafka Streams or Flink) → materialized view in Cassandra/ClickHouse → dashboard. Include tracing and autoscaling"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Practical Habit & Study Plan",
        subtitle: "How to Practice Well",
        description: "Build consistent learning habits",
        color: "bg-indigo-500",
        sections: [
            {
                title: "Study Routine",
                items: [
                    "Daily: 30–60 min coding or reading; alternate between DS/algorithms and systems topics",
                    "Weekly: Ship a small feature or PR; write tests and CI for it",
                    "Monthly: Build & deploy a small project end-to-end (from code → container → cluster)",
                    "Always write small, focused README and architecture notes for every project"
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Interview & Hiring Prep",
        subtitle: "What Employers Expect",
        description: "Prepare for Java backend interviews",
        color: "bg-pink-500",
        sections: [
            {
                title: "Coding Interview Topics",
                items: [
                    "Arrays, strings, two-pointers, sliding window, hashing",
                    "Trees (BFS/DFS), heaps, graphs (shortest path, BFS)",
                    "Dynamic programming basics",
                    "Practice problems end-to-end with clean code and tests"
                ]
            },
            {
                title: "System Design Topics",
                items: [
                    "Design APIs, think about scale, data model, caching, replication, partitioning",
                    "Practice 4–6 designs: URL shortener, chat system, ride-hailing core, e-commerce checkout"
                ]
            },
            {
                title: "Behavioral Questions",
                items: [
                    "Prepare STAR stories around projects, incidents, and learning"
                ]
            },
            {
                title: "Common Technical Questions",
                items: [
                    "Explain GC and different collectors",
                    "Difference between processes and threads",
                    "How to handle DB migrations",
                    "How you instrument apps",
                    "Tradeoffs in microservices vs monolith",
                    "Details about Spring Boot lifecycle"
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Tools, Libraries & Cheat-List",
        subtitle: "Essential Ecosystem",
        description: "Must-know tools and libraries",
        color: "bg-teal-500",
        sections: [
            {
                title: "Core Tools",
                items: [
                    "JDK (11+; pick LTS like 17 or later)",
                    "Maven or Gradle",
                    "IntelliJ IDEA (recommended)"
                ]
            },
            {
                title: "Frameworks & Libraries",
                items: [
                    "Spring Boot, Spring Data JPA, Spring Security",
                    "Jackson, MapStruct, Lombok (optional)",
                    "JUnit 5, Mockito, Testcontainers"
                ]
            },
            {
                title: "Infrastructure & DevOps",
                items: [
                    "Docker, kubectl, Helm (basics)",
                    "Kafka (or RabbitMQ), Redis, PostgreSQL, MongoDB (knowledge)",
                    "Prometheus, Grafana, ELK (or Loki)",
                    "GitHub Actions / Jenkins, SonarQube / SpotBugs / Checkstyle"
                ]
            },
            {
                title: "Profiling & Performance",
                items: [
                    "VisualVM, Java Flight Recorder",
                    "async-profiler",
                    "JMH for microbenchmarks"
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Learning Resources",
        subtitle: "High-Value Materials",
        description: "Curated books, docs, and practice sites",
        color: "bg-cyan-500",
        sections: [
            {
                title: "Essential Books",
                items: [
                    "Effective Java (Joshua Bloch) — essential",
                    "Java Concurrency in Practice (Brian Goetz) — concurrency fundamentals",
                    "Clean Code (Robert C. Martin) — coding discipline"
                ]
            },
            {
                title: "Online Resources",
                items: [
                    "Spring official docs + guides (get hands-on)",
                    "Baeldung (good concise articles)",
                    "Official Oracle/OpenJDK docs"
                ]
            },
            {
                title: "Practice Platforms",
                items: [
                    "LeetCode / HackerRank / Codeforces (for DS/algorithms)"
                ]
            },
            {
                title: "Open Source Learning",
                items: [
                    "GitHub: read production-grade open-source projects (Spring PetClinic, etc.)"
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Progress Milestones",
        subtitle: "How to Measure Progress",
        description: "Track your learning journey",
        color: "bg-lime-500",
        sections: [
            {
                title: "Key Milestones",
                items: [
                    "Foundations: Can implement OOP projects, tests, and GitHub repos",
                    "Core Java: Fluent with lambdas, streams, concurrency basics; testable code & CI",
                    "Backend: A deployed REST service with DB, tests, and auth",
                    "Production: Deployed on Docker/K8s, observability, messaging, and autoscaling demo",
                    "Mastery: Can design a large-scale system, tune JVM, and mentor others"
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Common Mistakes & How to Avoid Them",
        subtitle: "Learn from Others",
        description: "Anti-patterns and best practices",
        color: "bg-amber-500",
        sections: [
            {
                title: "Common Pitfalls",
                items: [
                    "Premature optimization — profile first",
                    "Overuse of frameworks without understanding Java core",
                    "Neglecting testing & CI — always write tests",
                    "Not using proper error handling or logging with correlation IDs",
                    "Designing microservices for everything — start with a modular monolith if small team"
                ]
            }
        ]
    }
];
}}),
"[project]/app/Roadmaps/Java/docs.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Docs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
;
;
;
const docsList = [
    // Core Java & JVM
    {
        title: "Java SE Documentation",
        description: "The official resource for Java Standard Edition, including tutorials, API documentation, and developer guides.",
        url: "https://docs.oracle.com/en/java/",
        citation: "Oracle"
    },
    {
        title: "Java Tutorials",
        description: "Beginner-friendly tutorials covering Java basics, object-oriented programming, and more.",
        url: "https://docs.oracle.com/javase/tutorial/",
        citation: "Oracle"
    },
    {
        title: "Java Platform, Standard Edition API Specification",
        description: "Detailed API documentation for Java SE classes and interfaces.",
        url: "https://docs.oracle.com/en/java/javase/",
        citation: "Oracle"
    },
    // Build Tools
    {
        title: "Apache Maven Documentation",
        description: "Comprehensive guide to using Maven for project management and build automation.",
        url: "https://maven.apache.org/guides/",
        citation: "Apache Maven"
    },
    {
        title: "Gradle Documentation",
        description: "Official documentation for Gradle, a modern build automation tool.",
        url: "https://docs.gradle.org/current/userguide/",
        citation: "Gradle"
    },
    // Testing Frameworks
    {
        title: "JUnit 5 User Guide",
        description: "Official guide for JUnit 5, the most widely used testing framework in Java.",
        url: "https://docs.junit.org/current/user-guide/",
        citation: "JUnit"
    },
    {
        title: "Mockito Documentation",
        description: "Comprehensive documentation for Mockito, a popular mocking framework for unit tests.",
        url: "https://site.mockito.org/",
        citation: "Mockito"
    },
    // Web Development Frameworks
    {
        title: "Spring Framework Documentation",
        description: "Official documentation for the Spring Framework, covering core concepts, data access, and more.",
        url: "https://docs.spring.io/spring-framework/reference/index.html",
        citation: "Spring"
    },
    {
        title: "Spring Boot Documentation",
        description: "Guides and reference material for building production-ready applications with Spring Boot.",
        url: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
        citation: "Spring Boot"
    },
    {
        title: "Hibernate ORM Documentation",
        description: "Official documentation for Hibernate ORM, a framework for object-relational mapping.",
        url: "https://hibernate.org/orm/documentation/",
        citation: "Hibernate"
    },
    // Cloud & Deployment
    {
        title: "Docker Documentation",
        description: "Official documentation for Docker, a platform for developing, shipping, and running applications.",
        url: "https://docs.docker.com",
        citation: "Docker"
    },
    {
        title: "Kubernetes Documentation",
        description: "Comprehensive guide to Kubernetes, an open-source system for automating deployment, scaling, and management of containerized applications.",
        url: "https://kubernetes.io/docs/",
        citation: "Kubernetes"
    },
    // Additional Learning Resources
    {
        title: "Dev.java Learn",
        description: "Interactive tutorials and resources for learning Java, including setting up the JDK and writing your first Java application.",
        url: "https://dev.java/learn/",
        citation: "Dev.java"
    },
    {
        title: "Spring Guides",
        description: "Hands-on guides to help you learn and use the Spring Framework.",
        url: "https://spring.io/guides",
        citation: "Spring"
    }
];
function Docs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 py-12 bg-gray-50 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-6",
                    children: "📘 Java Documentation Sites"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-10",
                    children: "Official and popular Java documentation links that every learner should know in 2025."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docsList.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doc.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600",
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 18,
                                            className: "text-gray-400 group-hover:text-blue-600",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-gray-600",
                                    children: doc.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-indigo-600 font-medium",
                                    children: doc.citation
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, doc.title, true, {
                            fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/docs.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Java/docs.jsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/docs.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Roadmaps/Java/projects.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Projects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const projects = [
    // ---------- BEGINNER PROJECTS ----------
    {
        id: "java-bank-management",
        level: "Java — Beginner",
        title: "Bank Management System",
        description: "A console-based application simulating basic banking operations like account creation, deposits, withdrawals, and balance inquiries.",
        url: "https://www.youtube.com/watch?v=wY0fUVH-8TE"
    },
    {
        id: "java-temp-converter",
        level: "Java — Beginner",
        title: "Temperature Converter",
        description: "A GUI application to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
        url: "https://www.youtube.com/watch?v=CEG5qkRPqCU"
    },
    {
        id: "java-student-management",
        level: "Java — Beginner",
        title: "Student Management System",
        description: "A system to manage student records, including adding, updating, and deleting information.",
        url: "https://www.youtube.com/watch?v=_8nW0YYSpIY"
    },
    {
        id: "java-library-management",
        level: "Java — Beginner",
        title: "Library Management System",
        description: "An application to manage book inventories, issue/return books, and track due dates.",
        url: "https://www.youtube.com/watch?v=KtDcPQkHU7o"
    },
    {
        id: "java-inventory-management",
        level: "Java — Beginner",
        title: "Inventory Management System",
        description: "A system to track product stock, manage orders, and generate reports.",
        url: "https://www.youtube.com/watch?v=QoBzRvut0HA"
    },
    {
        id: "java-online-quiz",
        level: "Java — Beginner",
        title: "Online Quiz Application",
        description: "A web-based quiz application with multiple-choice questions, timers, and score tracking.",
        url: "https://www.youtube.com/watch?v=5P8lCgteYKQ"
    },
    {
        id: "java-ecommerce-website",
        level: "Java — Intermediate",
        title: "E-commerce Website",
        description: "A platform for users to browse products, add to cart, and make purchases.",
        url: "https://www.youtube.com/watch?v=m559BxR30ls"
    },
    {
        id: "java-weather-app",
        level: "Java — Intermediate",
        title: "Weather Forecasting Application",
        description: "An application to fetch and display weather data using APIs.",
        url: "https://www.youtube.com/watch?v=8ZcEYv2ezWc"
    }
];
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "🧑‍💻 Java Project Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            children: "From beginner apps to intermediate projects — each project includes latest YouTube tutorials (Hindi & English, 2025)."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform",
                            "aria-labelledby": `${p.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full",
                                    children: p.level
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-600 text-sm",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-4 inline-block text-indigo-600 font-medium hover:underline",
                                    children: "Watch Tutorial ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-gray-500 text-center",
                    children: "Start small, master the foundations, and scale up to advanced Java projects 🚀"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/projects.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Java/projects.jsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/projects.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Roadmaps/Java/faq.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/Faq.jsx
__turbopack_context__.s({
    "default": (()=>Faq)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const faqs = [
    {
        question: "Do I need to learn Data Structures and Algorithms (DSA) for Java backend development?",
        answer: "Yes, but focus on understanding how DSA applies in real-world Java problems — collections, searching, sorting, and optimization. You don’t need to master competitive programming, but a strong grasp of logic and efficiency helps you write scalable backend code."
    },
    {
        question: "Which Java version should I learn in 2025?",
        answer: "Start with Java 17 (LTS) or later. Most companies are moving toward Java 17 or Java 21. The syntax and performance improvements are modern while keeping long-term stability and support."
    },
    {
        question: "How important is Spring Boot for getting a Java developer job?",
        answer: "Very important. Spring Boot is the industry standard for building backend APIs and microservices. Mastering it — along with Spring Data JPA, Security, and Testing — will open most Java backend roles for you."
    },
    {
        question: "Should I learn Hibernate before Spring Data JPA?",
        answer: "Not necessarily. Spring Data JPA abstracts most Hibernate complexities, but understanding Hibernate concepts like entity lifecycle, caching, and relationships will help you debug and optimize effectively."
    },
    {
        question: "What database should I use for my Java projects?",
        answer: "Start with PostgreSQL or MySQL for relational databases. Learn to integrate using JPA/Hibernate. Later, explore Redis for caching and MongoDB for NoSQL scenarios like analytics or document storage."
    },
    {
        question: "How do I test my Java applications properly?",
        answer: "Use JUnit 5 for unit testing and Mockito for mocking dependencies. For integration tests, use @SpringBootTest or Testcontainers to test against real databases or services."
    },
    {
        question: "When should I learn Docker and Kubernetes as a Java developer?",
        answer: "After you’re comfortable building Spring Boot APIs and using databases. Docker helps you package and deploy your apps consistently, and Kubernetes comes next for orchestrating microservices in production."
    },
    {
        question: "Is learning Microservices mandatory for Java developers?",
        answer: "No, but it’s highly valuable. Start with monolithic applications to learn core backend principles. Once confident, learn microservices, Kafka, and distributed communication to move into enterprise-level systems."
    },
    {
        question: "What’s the best way to practice Java backend skills?",
        answer: "Build projects end-to-end — from API design to database integration, security, testing, and deployment. Each project should solve a real problem and include documentation, CI/CD, and Docker setup. Avoid only tutorials — build, break, and fix your code."
    },
    {
        question: "Can I become a Java developer without knowing frontend technologies?",
        answer: "Yes. Many backend engineers specialize in APIs and system design. However, knowing basic HTML, CSS, and JavaScript helps you test your APIs and collaborate better with frontend teams."
    },
    {
        question: "How do I make my Java projects stand out to recruiters?",
        answer: "Host your projects on GitHub, write clear README files, and deploy at least one live demo using Render, Railway, or Docker Hub. Add tests, CI/CD pipelines, and proper API documentation (Swagger/OpenAPI)."
    }
];
function Faq() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-16 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "💡 Java Developer FAQ"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            children: "Common questions answered to guide you from beginner to industry-ready Java backend developer."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "group border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-gray-900 group-hover:text-yellow-700",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-600 font-bold group-open:rotate-180 transition-transform",
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-gray-600 text-sm leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 text-sm text-gray-500 text-center",
                    children: "Keep learning, building, and iterating — that’s how Java mastery happens ☕🚀"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/faq.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Java/faq.jsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/faq.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@react-pdf/renderer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/app/Roadmaps/Java/downloadPdf.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "PDFDownloadButton": (()=>PDFDownloadButton),
    "downloadAdvancedRoadmapPDF": (()=>downloadAdvancedRoadmapPDF),
    "downloadRoadmapPDF": (()=>downloadRoadmapPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
// Define styles for the PDF
const styles = __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["StyleSheet"].create({
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
const RoadmapPDFDocument = ({ phases })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.title,
                            children: "Java Developer Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                            lineNumber: 168,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.subtitle,
                            children: "Your Complete Journey from Beginner to Professional"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                    lineNumber: 167,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                    style: styles.watermark,
                    children: "Java-Roadmap.com"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                    lineNumber: 173,
                    columnNumber: 7
                }, this),
                phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                        wrap: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.phaseContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.phaseNumber,
                                                    {
                                                        backgroundColor: getPhaseColor(phase.color)
                                                    }
                                                ],
                                                children: phase.id
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.phaseTitleContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseTitle,
                                                        children: phase.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseSubtitle,
                                                        children: phase.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseDescription,
                                                        children: phase.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.sectionsContainer,
                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.section,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.sectionTitle,
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.itemsList,
                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.item,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.itemNumber,
                                                                        children: [
                                                                            itemIndex + 1,
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    item
                                                                ]
                                                            }, itemIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, sectionIndex, true, {
                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.phaseConnector,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.connectorText,
                                    children: [
                                        "↓ Next: Phase ",
                                        phase.id + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, phase.id, true, {
                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                    style: styles.pageNumber,
                    render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                    fixed: true
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                    lineNumber: 222,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
            lineNumber: 165,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
        lineNumber: 164,
        columnNumber: 3
    }, this);
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
        const blob = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
            lineNumber: 245,
            columnNumber: 28
        }, this)).toBlob();
        // Generate filename with current date
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `Java-Developer-roadmap-${currentDate}.pdf`;
        // Save the file
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
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
const PDFDownloadButton = ({ phases, className = "", children = "Download PDF" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["PDFDownloadLink"], {
        document: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
            lineNumber: 264,
            columnNumber: 15
        }, void 0),
        fileName: `Java-roadmap-${new Date().toISOString().split('T')[0]}.pdf`,
        className: className,
        children: ({ blob, url, loading, error })=>{
            if (loading) return 'Generating PDF...';
            if (error) return 'Error generating PDF';
            return children;
        }
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
        lineNumber: 263,
        columnNumber: 3
    }, this);
const downloadAdvancedRoadmapPDF = async (phases, options = {})=>{
    const { includeWatermark = true, customTitle = "Javascript Developer Roadmap", customSubtitle = "Your Complete Journey from Beginner to Professional", pageSize = "A4", orientation = "portrait" } = options;
    try {
        const AdvancedPDFDocument = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
                    size: pageSize,
                    orientation: orientation,
                    style: styles.page,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.title,
                                    children: customTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.subtitle,
                                    children: customSubtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                wrap: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.phaseHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: [
                                                            styles.phaseNumber,
                                                            {
                                                                backgroundColor: getPhaseColor(phase.color)
                                                            }
                                                        ],
                                                        children: phase.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.phaseTitleContainer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseTitle,
                                                                children: phase.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseSubtitle,
                                                                children: phase.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 308,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseDescription,
                                                                children: phase.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 309,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.sectionsContainer,
                                                children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.section,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.sectionTitle,
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                                style: styles.itemsList,
                                                                children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.item,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                                style: styles.itemNumber,
                                                                                children: [
                                                                                    itemIndex + 1,
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                                lineNumber: 320,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            item
                                                                        ]
                                                                    }, itemIndex, true, {
                                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, sectionIndex, true, {
                                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseConnector,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.connectorText,
                                            children: [
                                                "↓ Next: Phase ",
                                                phase.id + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.footer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.footerTitle,
                                    children: "🎉 Congratulations!"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.footerText,
                                    children: "You've completed the Java Developer Roadmap and are now ready to take on professional  challenges."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.pageNumber,
                            render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                            fixed: true
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
                lineNumber: 288,
                columnNumber: 7
            }, this);
        const blob = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvancedPDFDocument, {}, void 0, false, {
            fileName: "[project]/app/Roadmaps/Java/downloadPdf.jsx",
            lineNumber: 353,
            columnNumber: 28
        }, this)).toBlob();
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `${customTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/Roadmaps/Java/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Java/roadmapData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Java/docs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Java/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Java/faq.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Java/downloadPdf.jsx [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
"use client";
;
;
;
;
;
;
;
;
const JavaRoadmap = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"]);
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this),
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
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-5xl px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",
                                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                        children: section.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 29
                                                                    }, this),
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
                                                                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                                                        lineNumber: 77,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Java$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🎉 Congratulations! You're a java Developer"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg",
                                    children: "You've mastered the complet java Go Lang Roadmap and are now ready to build scalable, high-performance applications."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this);
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                children: [
                                    "Java ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "Mastery Roadmap 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                        lineNumber: 124,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors",
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 147,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 147,
                                columnNumber: 49
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Java/page.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
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
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
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
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
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
                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
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
                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
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
                                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Java/page.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Java/page.jsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Java/page.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Java/page.jsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Java/page.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = JavaRoadmap;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__70363fc4._.js.map