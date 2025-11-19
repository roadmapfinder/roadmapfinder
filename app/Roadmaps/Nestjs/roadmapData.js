export const phases = [
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