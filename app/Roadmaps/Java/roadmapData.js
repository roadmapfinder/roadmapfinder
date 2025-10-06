export const phases = [
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