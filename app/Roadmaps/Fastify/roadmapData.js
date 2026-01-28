export const phases = [
  {
    id: 0,
    title: "Hard Prerequisites",
    subtitle: "Foundation Level (Non-Negotiable)",
    description: "Master JavaScript and Node.js fundamentals before touching Fastify",
    color: "bg-gray-600",
    sections: [
      {
        title: "JavaScript (Backend-Level)",
        items: [
          "Closures, scope, hoisting → Deep understanding of execution context",
          "Async/await → Asynchronous programming patterns",
          "Event loop → Understanding microtasks and macrotasks",
          "Promises vs callbacks → Why Fastify avoids callbacks",
          "Error handling patterns → Try/catch and error propagation",
          "ES Modules vs CommonJS → Module systems in Node.js",
          "Deep object mutation → Understanding mutability and immutability"
        ]
      },
      {
        title: "Node.js Core",
        items: [
          "http module → Raw HTTP server creation",
          "fs module → File system operations",
          "path module → Path manipulation utilities",
          "stream → Critical for Fastify performance",
          "events → Event emitter patterns",
          "process → Process management and signals",
          "cluster → Multi-process architecture",
          "worker_threads → Thread-based parallelism"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Raw Node HTTP server → Build without frameworks",
          "Manual routing → Handle routes and JSON parsing manually",
          "File upload via streams → Stream-based file handling",
          "Large file download → No buffering, pure streams",
          "Graceful shutdown → Handle SIGTERM and SIGINT signals"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Fastify Core",
    subtitle: "Foundation Level (1-2 Months)",
    description: "Learn Fastify's unique architecture and plugin system",
    color: "bg-blue-600",
    sections: [
      {
        title: "Fastify Basics",
        items: [
          "Fastify instance lifecycle → Understanding initialization flow",
          "fastify.register() → Plugin registration system",
          "Plugins vs routes → Architectural distinction",
          "Encapsulation → Fastify's superpower for modularity",
          "Hooks order → Request lifecycle hooks sequence"
        ]
      },
      {
        title: "Key Hooks",
        items: [
          "onRequest → First hook in the request lifecycle",
          "preValidation → Before schema validation",
          "preHandler → Before route handler execution",
          "onSend → Before sending the response",
          "onResponse → After response is sent",
          "onError → Error handling hook"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Minimal REST API → Basic CRUD operations",
          "Global error handler → Centralized error handling",
          "Logging integration → Request/response logging",
          "Request lifecycle timing → Measure performance at each hook"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Schema-First Development",
    subtitle: "Foundation Level (2-3 Months)",
    description: "Master JSON Schema for validation and performance",
    color: "bg-green-500",
    sections: [
      {
        title: "JSON Schema",
        items: [
          "Request validation → Validate incoming requests",
          "Response validation → Ensure response integrity",
          "Serialization performance → Fast JSON serialization",
          "OpenAPI generation → Auto-generate API docs",
          "Schema composition → Reusable schema patterns"
        ]
      },
      {
        title: "Schema Definition",
        items: [
          "Params schemas → Path parameter validation",
          "Query schemas → Query string validation",
          "Body schemas → Request body validation",
          "Headers schemas → Header validation",
          "Response schemas → Response structure validation"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Full schema coverage → Define schemas for all endpoints",
          "Response validation → Validate all API responses",
          "Schema reusability → Create shared schema library",
          "OpenAPI documentation → Generate complete API docs"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Project Architecture",
    subtitle: "Intermediate Level (3-4 Months)",
    description: "Build scalable and maintainable Fastify applications",
    color: "bg-purple-500",
    sections: [
      {
        title: "Recommended Structure",
        items: [
          "src/plugins/ → Reusable plugin modules",
          "src/routes/v1/ → Version 1 API routes",
          "src/routes/v2/ → Version 2 API routes",
          "src/services/ → Business logic layer",
          "src/repositories/ → Data access layer",
          "src/schemas/ → JSON schema definitions",
          "src/utils/ → Utility functions",
          "src/app.js → Application entry point"
        ]
      },
      {
        title: "Key Concepts",
        items: [
          "One concern per plugin → Single responsibility principle",
          "No shared global state → Encapsulation and isolation",
          "Dependency injection → Via Fastify decorators",
          "fastify.decorate() → Extend Fastify instance",
          "Plugin encapsulation → Scope and context management"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Refactor into plugins → Modular plugin architecture",
          "Proper decoration → Use decorate() for dependencies",
          "Break and fix → Test encapsulation boundaries",
          "Multi-version API → Support v1 and v2 simultaneously"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Configuration & Environment",
    subtitle: "Intermediate Level (4-5 Months)",
    description: "Production-ready configuration management",
    color: "bg-red-500",
    sections: [
      {
        title: "Configuration Management",
        items: [
          "@fastify/env → Environment variable plugin",
          "Config validation → Validate on startup",
          "Secrets handling → Secure credential management",
          "Runtime vs build-time config → Configuration strategies"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Fail on invalid env → Startup validation",
          "Separate dev/prod config → Environment-specific settings",
          "Secrets rotation → Handle credential updates",
          "Config schema → JSON schema for environment variables"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Database & Data Layer",
    subtitle: "Intermediate Level (5-6 Months)",
    description: "Integrate databases with proper abstraction patterns",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Database Integration",
        items: [
          "PostgreSQL → Relational database integration",
          "MySQL → Alternative relational database",
          "Raw SQL first → Learn queries before ORMs",
          "@fastify/postgres → PostgreSQL plugin",
          "@fastify/mysql → MySQL plugin",
          "@fastify/redis → Redis integration"
        ]
      },
      {
        title: "Database Patterns",
        items: [
          "Manual queries → Write SQL by hand",
          "Transactions → Handle database transactions",
          "Connection pooling → Manage database connections",
          "Retry logic → Handle transient failures",
          "Prisma / Drizzle → Optional ORM layer"
        ]
      },
      {
        title: "Repository Pattern",
        items: [
          "Testable data access → Mockable repositories",
          "Replaceable implementations → Swap data sources",
          "Clean separation → Routes stay thin",
          "Services call repositories → Layered architecture"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Authentication & Security",
    subtitle: "Advanced Level (6-7 Months)",
    description: "Implement production-grade auth and security",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Authentication",
        items: [
          "JWT → Access and refresh tokens",
          "Cookie-based auth → Session management",
          "OAuth flow → Third-party authentication",
          "@fastify/jwt → JWT plugin for Fastify",
          "@fastify/cookie → Cookie handling plugin"
        ]
      },
      {
        title: "Authorization",
        items: [
          "Protect routes via hooks → Hook-based protection",
          "Role-based access → RBAC implementation",
          "Token rotation → Refresh token handling",
          "Logout invalidation → Token blacklisting"
        ]
      },
      {
        title: "Security (Mandatory)",
        items: [
          "@fastify/helmet → Security headers",
          "Rate limiting → Prevent abuse and DoS",
          "Input sanitization → Prevent injection attacks",
          "CORS properly → Cross-origin configuration",
          "HTTP headers → Security header understanding"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Simulate attacks → Test your own API",
          "Break your API → Find vulnerabilities",
          "Fix vulnerabilities → Patch security issues",
          "Security audit → Complete security review"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Performance & Scale",
    subtitle: "Advanced Level (7-8 Months)",
    description: "Optimize and scale Fastify applications",
    color: "bg-pink-500",
    sections: [
      {
        title: "Performance Tuning",
        items: [
          "JSON serialization cost → Understanding overhead",
          "Schema compiler → Optimize validation",
          "Async bottlenecks → Identify blocking code",
          "Event loop blocking → Prevent CPU-intensive tasks",
          "clinic.js → Performance profiling tool",
          "autocannon → HTTP benchmarking tool"
        ]
      },
      {
        title: "Scaling Strategies",
        items: [
          "Clustering → Multi-process deployment",
          "Graceful shutdown → Handle SIGTERM properly",
          "Zero-downtime deploy → Rolling deployments",
          "Horizontal scaling → Scale across machines"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Benchmark endpoints → Measure performance",
          "Optimize slow routes → Improve bottlenecks",
          "Express vs Fastify comparison → Performance testing",
          "Load testing → Simulate production traffic",
          "Shutdown testing → Test during shutdown"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Testing & Reliability",
    subtitle: "Advanced Level (8-9 Months)",
    description: "Build confidence with comprehensive testing",
    color: "bg-teal-500",
    sections: [
      {
        title: "Testing Fastify Apps",
        items: [
          "tap → Testing framework for Node.js",
          "vitest → Modern testing alternative",
          "Fastify inject → Test without HTTP server",
          "Route testing → Test all endpoints",
          "Plugin testing → Test plugin functionality",
          "Service testing → Test business logic",
          "Failure case testing → Test error scenarios"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Test auth failures → Invalid credentials handling",
          "Test invalid schemas → Schema validation errors",
          "Test race conditions → Concurrent request handling",
          "Coverage reports → Measure test coverage"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Logging & Observability",
    subtitle: "Advanced Level (9-10 Months)",
    description: "Production debugging and monitoring",
    color: "bg-orange-500",
    sections: [
      {
        title: "Logging",
        items: [
          "Pino logging → High-performance logging",
          "Request IDs → Trace requests across services",
          "Structured logs → JSON-formatted logs",
          "Log levels → Debug, info, warn, error",
          "Log correlation → Connect related log entries"
        ]
      },
      {
        title: "Observability",
        items: [
          "Metrics → Prometheus integration",
          "Tracing → Distributed tracing",
          "Health checks → Readiness and liveness probes",
          "Performance monitoring → Application performance metrics"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Trace request end-to-end → Follow complete lifecycle",
          "Find slow logs → Identify performance issues",
          "Fix bottlenecks → Optimize slow operations",
          "Set up dashboards → Visualize metrics"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Deployment & DevOps",
    subtitle: "Expert Level (10-11 Months)",
    description: "Industry-standard deployment practices",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Docker",
        items: [
          "Multi-stage Dockerfile → Optimized images",
          "Health checks → Container health monitoring",
          "Env-based config → Environment variables in Docker",
          "Docker Compose → Multi-container orchestration"
        ]
      },
      {
        title: "CI/CD",
        items: [
          "CI test pipeline → Automated testing",
          "Fail build on test failure → Quality gates",
          "Auto deploy on main → Continuous deployment",
          "GitHub Actions → Workflow automation",
          "GitLab CI → Alternative CI/CD platform"
        ]
      },
      {
        title: "Production Servers",
        items: [
          "Process managers → PM2, systemd",
          "Reverse proxy → Nginx, Traefik",
          "Load balancing → Distribute traffic",
          "SSL/TLS → HTTPS configuration"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "API Versioning & Contracts",
    subtitle: "Expert Level (11-12 Months)",
    description: "Maintain API compatibility and evolution",
    color: "bg-lime-500",
    sections: [
      {
        title: "Versioning Strategies",
        items: [
          "Breaking vs non-breaking changes → Change management",
          "Backward compatibility → Support old clients",
          "Deprecation strategy → Phase out old versions",
          "URL versioning → /v1, /v2 in path",
          "Header versioning → Version in headers"
        ]
      },
      {
        title: "Action Projects",
        items: [
          "Maintain v1 and v2 → Run multiple versions",
          "Do not break clients → Ensure compatibility",
          "Migration guides → Help clients upgrade",
          "Deprecation warnings → Notify about changes"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Advanced Patterns",
    subtitle: "Expert Level",
    description: "Enterprise-level architecture patterns",
    color: "bg-violet-500",
    sections: [
      {
        title: "Architecture Patterns",
        items: [
          "Clean Architecture → Layered design",
          "Domain Driven Design → DDD principles",
          "CQRS → Command Query Responsibility Segregation",
          "Event Sourcing → Event-based state management",
          "Microservices → Distributed architecture"
        ]
      },
      {
        title: "Advanced Fastify",
        items: [
          "Plugin ecosystem → Leverage community plugins",
          "Custom plugins → Build reusable plugins",
          "Plugin publishing → Share with community",
          "Advanced hooks → Complex lifecycle management"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Real Projects (Non-Optional)",
    subtitle: "Expert Level",
    description: "Build production-ready applications",
    color: "bg-rose-500",
    sections: [
      {
        title: "Required Projects",
        items: [
          "Auth-based SaaS API → Multi-tenant application",
          "High-traffic read-heavy API → Optimized for reads",
          "File upload + streaming service → Handle large files",
          "Role-based admin panel backend → RBAC implementation",
          "Production-deployed Fastify app → Live deployment"
        ]
      },
      {
        title: "Project Requirements",
        items: [
          "Schema-first → Complete schema coverage",
          "Proper encapsulation → Plugin-based architecture",
          "Performance optimized → Benchmarked and tuned",
          "Fully tested → Comprehensive test suite",
          "Production deployed → Live on real infrastructure"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Interview Preparation",
    subtitle: "Expert Level",
    description: "Prepare for professional Fastify roles",
    color: "bg-amber-500",
    sections: [
      {
        title: "Technical Topics",
        items: [
          "Fastify vs Express → Architecture differences",
          "Plugin system → Encapsulation and lifecycle",
          "Schema compilation → Performance benefits",
          "Hook lifecycle → Request flow understanding",
          "Async patterns → Event loop and promises",
          "Clustering → Multi-process architecture",
          "Graceful shutdown → Signal handling"
        ]
      },
      {
        title: "System Design",
        items: [
          "API design → RESTful principles",
          "Scalability → Horizontal and vertical scaling",
          "Caching strategies → Redis, CDN",
          "Rate limiting → Distributed rate limiting",
          "Microservices → Service decomposition"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Open Source & Portfolio",
    subtitle: "Expert Level",
    description: "Build your developer brand and contributions",
    color: "bg-emerald-500",
    sections: [
      {
        title: "Open Source Contributions",
        items: [
          "Fastify boilerplate → Starter templates",
          "Reusable plugins → NPM package publishing",
          "Template repositories → GitHub templates",
          "Blog about architecture → Technical writing",
          "Contribute to Fastify → Core contributions"
        ]
      },
      {
        title: "Portfolio Projects",
        items: [
          "Showcase production apps → Real-world examples",
          "Open source projects → Public repositories",
          "Technical articles → Share knowledge",
          "Performance benchmarks → Demonstrate expertise"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Truth Check",
    subtitle: "Reality Check",
    description: "Essential mindset for Fastify success",
    color: "bg-slate-600",
    sections: [
      {
        title: "Core Principles",
        items: [
          "Fastify rewards discipline, not shortcuts → No quick wins",
          "Not Express → Different architecture and patterns",
          "Schema-first + plugins = real power → Core advantages",
          "Performance is a side-effect of good design → Not the goal",
          "Deploy at least one production app → Mandatory experience",
          "If you treat it like Express → You will fail",
          "Encapsulation is the superpower → Master it completely"
        ]
      }
    ]
  }
];