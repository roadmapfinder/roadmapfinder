export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Programming Foundations (Mandatory)",
    description: "Think like a programmer before thinking like a C# developer",
    color: "bg-gray-500",
    sections: [
      {
        title: "Core Concepts",
        items: [
          "What is programming? Understanding the basics of software development",
          "Compilation vs interpretation: how code becomes executable programs",
          "Variables, data types, and memory basics for new programmers",
          "Control flow: if statements, switch, and loops for logic building"
        ]
      },
      {
        title: "Programming Mindset",
        items: [
          "Functions & parameters: structuring reusable blocks of logic",
          "Debugging mindset: how to think about and isolate problems",
          "Understanding errors and reading compiler/runtime messages",
          "Breaking problems into smaller, solvable steps"
        ]
      },
      {
        title: "Environment Setup",
        items: [
          "Install .NET SDK and verify installation with dotnet --version",
          "IDE: Visual Studio 2022 (Community) or VS Code with C# Dev Kit",
          "Version control: Git setup and basic commands for source management",
          "Basic command line navigation and terminal usage"
        ]
      },
      {
        title: "Outcome Verification",
        items: [
          "You can read, understand, and write simple logic programs",
          "Write a basic program that takes user input and produces output",
          "Trace through code manually and predict what it will do",
          "Debug a simple program using breakpoints and step-through execution"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "C# Fundamentals",
    subtitle: "Language Fundamentals (Beginner)",
    description: "Become fluent in modern C# syntax and object-oriented programming",
    color: "bg-green-500",
    sections: [
      {
        title: "Language Basics",
        items: [
          ".NET ecosystem overview: CLR, BCL, runtime, and how they work together",
          "C# syntax & structure: namespaces, classes, methods, and entry points",
          "Value vs reference types and how each is stored in memory",
          "var, const, readonly: when and why to use each keyword"
        ]
      },
      {
        title: "OOP in C#",
        items: [
          "Classes & objects: defining blueprints and creating instances",
          "Encapsulation: access modifiers (public, private, protected, internal)",
          "Inheritance: base classes, derived classes, and the : syntax",
          "Polymorphism: virtual/override and runtime method dispatch",
          "Interfaces vs abstract classes: when to use each and why"
        ]
      },
      {
        title: "Exception Handling & Enums",
        items: [
          "try / catch / finally blocks for safe error handling",
          "Custom exceptions: creating meaningful exception types",
          "Exception best practices: what to catch, when to rethrow",
          "Enums & structs: lightweight value types for fixed sets and small data"
        ]
      },
      {
        title: "Collections & LINQ Basics",
        items: [
          "List<T>: dynamic arrays for storing and manipulating sequences",
          "Dictionary<TKey, TValue>: key-value storage for fast lookups",
          "Span<T> & ReadOnlySpan<T>: intro to high-performance memory access",
          "LINQ basics: querying collections with readable, expressive syntax"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "Console Calculator: arithmetic operations with user input and error handling",
          "Student Grade Tracker: OOP with classes, collections, and console output",
          "Simple To-Do List: List<T> with CRUD operations in a console app",
          "Bank Account Simulator: encapsulation, methods, and basic exception handling"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate C#",
    subtitle: "Professional Coding Skills",
    description: "Write clean, maintainable, and performant professional-grade code",
    color: "bg-orange-500",
    sections: [
      {
        title: "Advanced Language Features",
        items: [
          "Delegates & events: the foundation of callbacks and event-driven programming",
          "Func, Action, Predicate: built-in delegate types for concise code",
          "Records: immutable data types with value-based equality",
          "Pattern matching: switch expressions, is patterns, and property patterns",
          "Nullable reference types: eliminate null reference exceptions at compile time"
        ]
      },
      {
        title: "LINQ (Deep Dive)",
        items: [
          "Deferred execution: understanding when LINQ queries actually run",
          "Select, Where, GroupBy: the core operators for data transformation",
          "Projections: shaping output with anonymous types and records",
          "Performance pitfalls: avoiding multiple enumeration and N+1 problems"
        ]
      },
      {
        title: "Asynchronous Programming",
        items: [
          "async / await: writing non-blocking code that reads synchronously",
          "Task vs ValueTask: when each return type is appropriate",
          "Parallel programming basics: Parallel.For, Parallel.ForEach",
          "Threading fundamentals: Thread, ThreadPool, and synchronization primitives"
        ]
      },
      {
        title: "Memory & Performance",
        items: [
          "Stack vs heap: what lives where and why it matters for performance",
          "Garbage Collector (GC): generations, triggers, and tuning strategies",
          "Boxing / unboxing: the hidden cost of mixing value and reference types",
          "Allocation optimization: object pooling, ArrayPool<T>, and struct usage"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Async File Processor: read/write files asynchronously with cancellation tokens",
          "LINQ Data Pipeline: transform and aggregate large datasets efficiently",
          "Event-Driven Notification System: delegates, events, and loose coupling",
          "Memory-Efficient CSV Parser: Span<T> and avoiding excessive allocations"
        ]
      }
    ]
  },
  {
    id: 3,
    title: ".NET Platform",
    subtitle: ".NET Platform Mastery",
    description: "Understand what actually runs your code and build production-ready apps",
    color: "bg-blue-500",
    sections: [
      {
        title: ".NET Core / Modern .NET",
        items: [
          "SDK vs runtime: understanding the difference and when each is needed",
          "Project structure: .csproj, solution files, and multi-project setups",
          "Dependency Injection (DI): IServiceCollection, lifetimes, and best practices",
          "Configuration & environments: appsettings.json, environment variables, secrets"
        ]
      },
      {
        title: "Logging & CLI Tooling",
        items: [
          "Logging with ILogger<T>: structured logging and log level strategies",
          "dotnet CLI: new, build, run, test, publish, and add commands",
          "Build, run, publish: understanding debug vs release and deployment artifacts",
          "Debugging tools: breakpoints, watch windows, and hot reload in Visual Studio"
        ]
      },
      {
        title: "Testing",
        items: [
          "Unit testing fundamentals: xUnit or NUnit test structure and assertions",
          "Mocking with Moq or NSubstitute: isolating dependencies in tests",
          "Integration testing: testing components together with TestServer",
          "Test-driven mindset: red-green-refactor and writing testable code"
        ]
      },
      {
        title: "Platform Projects",
        items: [
          "Multi-Project Solution: class library + console app + unit test project",
          "DI Container Demo: register services, use lifetimes, inject into classes",
          "Logging & Config App: structured logging with Serilog and config binding",
          "Fully Tested Library: 90%+ coverage with unit and integration tests"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "ASP.NET Core",
    subtitle: "Backend Development with ASP.NET Core",
    description: "Become a real backend engineer building secure, scalable APIs",
    color: "bg-purple-500",
    sections: [
      {
        title: "Web Fundamentals",
        items: [
          "HTTP, REST, and status codes: the contract between client and server",
          "Headers, cookies, and CORS: understanding cross-origin and auth flows",
          "API versioning strategies: URL path, query string, and header-based versioning",
          "Request/response lifecycle in ASP.NET Core"
        ]
      },
      {
        title: "ASP.NET Core Internals",
        items: [
          "Controllers & Minimal APIs: two approaches to defining HTTP endpoints",
          "Middleware pipeline: request processing, short-circuiting, and ordering",
          "Model binding & validation: DataAnnotations, FluentValidation, and ModelState",
          "Filters: action, exception, result, and authorization filters"
        ]
      },
      {
        title: "API Design & Security",
        items: [
          "REST best practices: resource naming, HTTP verbs, and idempotency",
          "Pagination, filtering, and sorting: scalable query parameter patterns",
          "Error handling & response standards: ProblemDetails and consistent envelopes",
          "JWT authentication: issuing, validating, and refreshing tokens"
        ]
      },
      {
        title: "Security Hardening",
        items: [
          "OAuth basics: authorization code flow and third-party identity providers",
          "HTTPS and HSTS: enforcing secure transport in production",
          "Input validation and anti-forgery: defending against common web attacks",
          "Rate limiting: protecting APIs from abuse with built-in .NET middleware"
        ]
      },
      {
        title: "Backend Projects",
        items: [
          "RESTful Task API: full CRUD with validation, error handling, and versioning",
          "JWT Auth Service: register, login, refresh token, and protected endpoints",
          "Rate-Limited Public API: middleware pipeline with logging and throttling",
          "Paginated Product Catalog API: filtering, sorting, and consistent responses"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Databases",
    subtitle: "Databases & Data Access",
    description: "Handle data like an industry backend engineer with fast, safe, scalable patterns",
    color: "bg-yellow-500",
    sections: [
      {
        title: "SQL Fundamentals",
        items: [
          "Relational modeling: tables, foreign keys, and normalization principles",
          "Indexes: clustered, non-clustered, and when to use composite indexes",
          "Transactions: ACID properties, isolation levels, and deadlock prevention",
          "Normalization: 1NF, 2NF, 3NF and knowing when to denormalize"
        ]
      },
      {
        title: "Entity Framework Core",
        items: [
          "DbContext & DbSet: configuring your data model and context lifecycle",
          "Migrations: code-first schema management and production deployment",
          "LINQ to SQL: writing queries that generate efficient SQL statements",
          "No-tracking queries: AsNoTracking() for read-heavy performance gains"
        ]
      },
      {
        title: "Advanced Data Access",
        items: [
          "Dapper (micro-ORM): raw SQL with mapping when EF Core is too heavy",
          "Stored procedures: calling and mapping results via EF Core and Dapper",
          "Caching with Redis: cache-aside pattern, TTL, and cache invalidation",
          "Optimistic concurrency: rowversion tokens and handling update conflicts"
        ]
      },
      {
        title: "Data Projects",
        items: [
          "EF Core Blog API: code-first schema, migrations, and related data queries",
          "Dapper Reporting Service: complex queries mapped to DTOs efficiently",
          "Redis-Cached Product API: cache-aside with automatic invalidation on writes",
          "Concurrent Booking System: optimistic concurrency with conflict resolution"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Architecture",
    subtitle: "Architecture & Design Patterns",
    description: "Think like a senior engineer designing systems that scale and survive long-term",
    color: "bg-red-500",
    sections: [
      {
        title: "Software Architecture",
        items: [
          "Clean Architecture: separating domain, application, infrastructure, and presentation",
          "Layered architecture: understanding the traditional N-tier separation of concerns",
          "Hexagonal architecture: ports and adapters for maximum testability and flexibility",
          "When to apply each architecture style based on project size and complexity"
        ]
      },
      {
        title: "Design Patterns (Must Know)",
        items: [
          "Repository pattern: abstracting data access behind interfaces",
          "Unit of Work: coordinating multiple repository operations in one transaction",
          "Factory pattern: centralizing object creation and hiding construction logic",
          "Strategy pattern: swappable algorithms and behavior at runtime",
          "Mediator pattern: decoupling request senders from handlers (MediatR library)",
          "CQRS intro: separating read and write models for scalability and clarity"
        ]
      },
      {
        title: "SOLID Principles",
        items: [
          "Single Responsibility: one reason to change per class",
          "Open/Closed: open for extension, closed for modification",
          "Liskov Substitution: derived types must be usable as their base types",
          "Interface Segregation: many specific interfaces over one general-purpose interface",
          "Dependency Inversion: depend on abstractions, not concrete implementations"
        ]
      },
      {
        title: "Architecture Projects",
        items: [
          "Clean Architecture API: full solution with Domain, Application, Infrastructure layers",
          "CQRS + MediatR App: separate commands and queries with pipeline behaviors",
          "Repository Pattern Library: generic and specific repositories with Unit of Work",
          "Refactored Legacy Code: apply SOLID and patterns to improve existing codebase"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Cloud & DevOps",
    subtitle: "Cloud, DevOps & Production",
    description: "Be industry-deployable: ship, monitor, and maintain real production systems",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Cloud Concepts & Containers",
        items: [
          "Containers with Docker: Dockerfile authoring, images, and multi-stage builds",
          "Environment configs: managing dev, staging, and production configuration safely",
          "Secrets management: Azure Key Vault, AWS Secrets Manager, environment injection",
          "Container orchestration basics: Docker Compose for local multi-service setups"
        ]
      },
      {
        title: "CI/CD Pipelines",
        items: [
          "Build pipelines: GitHub Actions or Azure DevOps YAML pipeline authoring",
          "Automated testing in CI: running unit and integration tests on every push",
          "Deployment strategies: blue-green, rolling, and canary deployment patterns",
          "Infrastructure as Code intro: Bicep, Terraform, or ARM template basics"
        ]
      },
      {
        title: "Cloud Platforms",
        items: [
          "Hosting APIs: Azure App Service, AWS Elastic Beanstalk, or container-based hosting",
          "Cloud databases: Azure SQL, CosmosDB, or AWS RDS managed database services",
          "Managed services: queues (Service Bus / SQS), storage, and identity services",
          "Cost awareness: understanding compute, storage, and egress pricing models"
        ]
      },
      {
        title: "Observability & Health",
        items: [
          "Health checks: IHealthCheck implementations and readiness/liveness endpoints",
          "Structured logging: Serilog with sinks to Application Insights or Seq",
          "Metrics & tracing: OpenTelemetry instrumentation for distributed tracing",
          "Alerting: setting up monitors and on-call notifications for production incidents"
        ]
      },
      {
        title: "DevOps Projects",
        items: [
          "Dockerized .NET API: Dockerfile, docker-compose, and environment-based config",
          "GitHub Actions CI/CD Pipeline: build, test, and deploy to cloud on merge",
          "Observable API: health checks, structured logs, and OpenTelemetry traces",
          "Secrets-Safe Deployment: Key Vault integration with zero secrets in source code"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Advanced Topics",
    subtitle: "Advanced Industry Topics (Optional but Powerful)",
    description: "Stand out from 90% of developers with advanced distributed systems skills",
    color: "bg-pink-500",
    sections: [
      {
        title: "Microservices",
        items: [
          "Microservices architecture: decomposing monoliths into independently deployable services",
          "Service-to-service communication: REST, gRPC, and async messaging patterns",
          "Service discovery, API gateways, and distributed configuration management",
          "Saga pattern and distributed transactions across service boundaries"
        ]
      },
      {
        title: "Event-Driven Architecture",
        items: [
          "Message queues: RabbitMQ and Azure Service Bus for reliable async communication",
          "Event sourcing: storing state as a sequence of events for full audit history",
          "Outbox pattern: ensuring consistency between database writes and event publishing",
          "Consumer groups, competing consumers, and at-least-once delivery guarantees"
        ]
      },
      {
        title: "Background Workers & gRPC",
        items: [
          "IHostedService and BackgroundService: long-running tasks in .NET worker services",
          "Hangfire and Quartz.NET: scheduling and retrying background jobs reliably",
          "gRPC: high-performance binary RPC with Protobuf contracts and streaming",
          "SignalR: real-time bidirectional communication with WebSockets fallback"
        ]
      },
      {
        title: "Distributed Systems Fundamentals",
        items: [
          "CAP theorem: consistency, availability, and partition tolerance trade-offs",
          "Idempotency: designing operations safe to retry without unintended side effects",
          "Circuit breaker pattern with Polly: resilience and fault tolerance in service calls",
          "Distributed caching and eventual consistency in multi-region deployments"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Event-Driven Order System: microservices communicating via Service Bus events",
          "gRPC Internal API: high-throughput inter-service calls with Protobuf contracts",
          "Background Job Processor: Hangfire with retries, priorities, and monitoring UI",
          "Resilient HTTP Client: Polly-powered retry, circuit breaker, and timeout policies"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Professional Skills",
    subtitle: "Professional Developer Skills",
    description: "What companies actually care about beyond technical knowledge",
    color: "bg-teal-500",
    sections: [
      {
        title: "Code Quality & Craft",
        items: [
          "Clean code & naming: self-documenting code that communicates intent clearly",
          "Code reviews: giving and receiving feedback constructively and professionally",
          "Refactoring safely: improving internal structure without changing external behavior",
          "Technical debt: identifying, communicating, and strategically paying it down"
        ]
      },
      {
        title: "Production Engineering",
        items: [
          "Debugging production issues: log analysis, distributed traces, and reproduction",
          "Reading legacy code: building a mental model of unknown codebases quickly",
          "Incident response: staying calm, communicating clearly, and resolving outages",
          "Postmortems: blameless retrospectives and building systemic improvements"
        ]
      },
      {
        title: "Collaboration & Communication",
        items: [
          "Estimation & tradeoffs: communicating uncertainty and technical risk to stakeholders",
          "Communication with product teams: translating technical constraints into user impact",
          "Communication with frontend teams: API design collaboration and contract-first thinking",
          "Documentation: architecture decision records (ADRs) and keeping docs alive"
        ]
      },
      {
        title: "Career & Growth",
        items: [
          "Building a portfolio: open-source contributions and public project visibility",
          "Continuous learning: following .NET releases, blogs, and community engagement",
          "Mentoring junior developers: knowledge sharing and growing your team's capability",
          "Interview preparation: system design, algorithms, and behavioral storytelling"
        ]
      }
    ]
  }
];