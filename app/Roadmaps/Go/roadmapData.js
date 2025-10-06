export const phases = [
  {
    id: 1,
    title: "Foundations — Beginner",
    subtitle: "0–1 month",
    description: "Understand syntax, compile/run code, basic data structures and control flow",
    color: "bg-green-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Install Go, use go command, workspace basics (GOPATH history vs modules)",
          "package main, func main(), building and running (go run, go build)",
          "Basic types: int, float, string, bool",
          "Composite types: arrays, slices, maps, structs",
          "Flow control: if, switch, for (Go's only loop)",
          "Functions, multiple return values, named returns",
          "Error handling idiom (error type, returning errors)",
          "Basic I/O and formatting (fmt, bufio)"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build CLI 'todo' app using file storage",
          "Reverse slice exercise",
          "Implement map[string]int frequency counter",
          "Write small unit tests with testing package"
        ]
      },
      {
        title: "Resources",
        items: [
          "Go 'Getting Started' tutorial and official docs",
          "Current stable: Go 1.25 (released August 2025)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Language Deep Dive — Early Intermediate",
    subtitle: "1–3 months",
    description: "Write idiomatic Go, memory model basics, testing",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Slices internals (len, cap, backing array)",
          "Pointers and when you need them in Go",
          "Interfaces (implicit implementation), empty interface interface{}",
          "Methods vs functions, value vs pointer receivers",
          "Concurrency primitives: goroutines, channels, select (Start here; master later)",
          "Packages and modules: go mod init, go get, semantic import versioning",
          "Testing: testing package, table tests, subtests, benchmarks (testing.B), test coverage",
          "Formatting & style: gofmt, go vet, golint (style linters)"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Write a small HTTP server serving JSON (use net/http)",
          "Add unit tests + table tests + benchmarks",
          "Use go mod in the project"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Tooling, Dev Workflow & Code Quality",
    subtitle: "3–6 months",
    description: "Professional dev environment and CI hygiene",
    color: "bg-orange-500",
    sections: [
      {
        title: "Core Tooling",
        items: [
          "gofmt / goimports — automated formatting",
          "golangci-lint — multi-linter runner (lint rules, static analysis)",
          "delve — debugger for Go",
          "Dependency management: understand go.sum and module versioning",
          "Profiling and tracing tools: pprof, net/trace, runtime/pprof",
          "Code generation tools: go generate, stringer, mockgen (for interfaces)",
          "Build tags and cross-compilation basics"
        ]
      },
      {
        title: "CI / CD",
        items: [
          "Run go test ./... + linting + go vet in CI (GitHub Actions, GitLab CI, CircleCI)",
          "Build reproducible artifacts (static builds, container images)"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Create GitHub Actions that run tests, lint, and build multi-arch Docker images"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Web & Services — Intermediate to Advanced",
    subtitle: "4–9 months",
    description: "Build robust backend services with common patterns",
    color: "bg-blue-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "HTTP server internals: net/http, middleware patterns, context (context.Context) propagation",
          "Routing & frameworks: Gin, Fiber, Echo, Chi — pick one to learn deeply",
          "JSON & serialization (encoding/json), streaming large payloads",
          "Request validation and graceful shutdown",
          "Authentication & Authorization: JWT, OAuth flows, session handling",
          "gRPC & protobuf: define proto files, use protoc + Go plugins",
          "REST vs gRPC decision factors"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build a REST API (CRUD) with one chosen framework + an admin UI",
          "Implement gRPC service that communicates with REST service (interop example)"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Databases & Persistence",
    subtitle: "4–9 months",
    description: "Best practices for relational and NoSQL DB access",
    color: "bg-purple-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "database/sql basics (connections, prepared statements, transactions)",
          "Choice: raw SQL (database/sql + sqlx), codegen SQL (sqlc), ORM (GORM, Ent, Bun)",
          "Learn tradeoffs: control vs convenience (many teams prefer sqlc or lightweight libs)",
          "Migrations (e.g., golang-migrate)",
          "Connection pooling, retries, transaction strategies",
          "Caching strategies (Redis), CQRS basics when needed"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build service using PostgreSQL",
          "Implement schema migrations and sqlc-generated queries",
          "Add Redis caching layer"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Concurrency & Performance — Advanced",
    subtitle: "6–9 months",
    description: "Build safe, performant concurrent systems",
    color: "bg-red-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Deep mastery of goroutines, channels, select, worker pools, fan-in/fan-out patterns",
          "Concurrency patterns (pipeline, worker pool, rate limiting, context cancellation)",
          "Avoid common pitfalls: goroutine leaks, data races (use -race flag)",
          "Synchronization primitives (sync.Mutex, sync.WaitGroup, atomic)",
          "Profiling and performance optimization (pprof, CPU/mem profiles)",
          "Memory management, escape analysis, GC tuning (where relevant)",
          "Benchmarking correctly, identifying hotspots"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build a concurrent web crawler or ETL pipeline with graceful shutdown and profiling",
          "Use go test -bench and pprof to optimize"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Architecture, Microservices & Distributed Systems",
    subtitle: "9–12 months",
    description: "Design systems for reliability, observability and scale",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Microservices patterns: API gateway, service discovery, retries/backoff, circuit breaker",
          "Synchronous vs asynchronous communication (gRPC, HTTP vs NATS, Kafka)",
          "Distributed tracing (OpenTelemetry), structured logging (zap, zerolog)",
          "Metrics (Prometheus client)",
          "Observability: traces, metrics, logs, and alerting",
          "Scalability: stateless services, horizontal scaling, database sharding strategies",
          "Security practices: input validation, secrets management (Vault), TLS, dependency scanning",
          "Service testing: contract testing, integration tests with testcontainers, chaos experiments"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build a microservice system: API gateway, auth service, data service, message producer/consumer",
          "Add tracing (OpenTelemetry), metrics (Prometheus), and logging"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Cloud, Deployment & Infrastructure",
    subtitle: "9–12 months",
    description: "Ship and operate Go services",
    color: "bg-pink-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Containerization: Docker, multi-stage builds for small binaries (scratch or distroless)",
          "Kubernetes basics: Deployments, Services, ConfigMaps, Secrets, probes (liveness/readiness)",
          "CI/CD pipelines (GitHub Actions, GitLab CI); automated image builds and deployments",
          "Serverless options: Cloud Run, AWS Lambda (Go support)",
          "Observability stacks: Prometheus + Grafana, ELK/EFK stacks, managed tracing",
          "Cost, autoscaling, multi-region concerns"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Dockerize service, deploy to Kubernetes (minikube/k3s)",
          "Deploy to cloud provider (GKE/EKS/AKS or Cloud Run)",
          "Add CI that deploys to staging"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Testing, Reliability & Maintenance",
    subtitle: "12+ months",
    description: "Production comfort: tests, code health, reliability",
    color: "bg-teal-500",
    sections: [
      {
        title: "Core Topics",
        items: [
          "Unit tests, integration tests, end-to-end tests; use Docker for integration dependencies",
          "Mocks and test doubles (mockgen, testify)",
          "Fuzz testing (go test -fuzz)",
          "Chaos testing, canary releases, blue/green deploys",
          "SLOs and SLIs, incident post-mortems"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Add fuzz tests",
          "Integration tests that run in CI against ephemeral DB",
          "Create runbook for incident response"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Soft/Team Skills & Career Growth",
    subtitle: "Industry Ready",
    description: "Move from solo contributor to team-level impact",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Skills",
        items: [
          "Code reviews and mentorship",
          "API design and backwards compatibility",
          "Writing clear docs, README, and design RFCs",
          "Open-source contributions to Go ecosystem",
          "Interview prep: system design, concurrency questions, advanced Go problems"
        ]
      },
      {
        title: "Interview Prep",
        items: [
          "Design a URL shortener (scale discussion)",
          "Implement concurrent cache",
          "Debug a race using -race flag",
          "Explain escape analysis",
          "Explain how go scheduler and runtime interact at a high level"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Recommended Hands-On Projects",
    subtitle: "Progressive Complexity",
    description: "Build these projects to solidify your skills",
    color: "bg-lime-500",
    sections: [
      {
        title: "Beginner to Advanced Projects",
        items: [
          "CLI todo app with local file storage + tests",
          "REST CRUD API (Postgres) with sqlc + migrations + unit tests",
          "Concurrent web crawler with worker pool + pprof optimization",
          "gRPC microservice with protobuf and client library",
          "Full microservice system: API gateway, auth service, data service, event-driven pipeline (Kafka/NATS), deployed on k8s with monitoring and tracing"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Libraries, Frameworks & Ecosystem",
    subtitle: "Essential Tools",
    description: "What to learn and why",
    color: "bg-amber-500",
    sections: [
      {
        title: "Web Frameworks / Routers",
        items: [
          "Gin, Echo, Chi, Fiber — learn one (Chi/Gin are common choices)"
        ]
      },
      {
        title: "DB/ORM",
        items: [
          "database/sql + sqlc (codegen) for strong SQL control",
          "GORM for quick development",
          "Ent for typed schema+code generation",
          "Evaluate tradeoffs for your team"
        ]
      },
      {
        title: "Logging & Metrics",
        items: [
          "zap (structured logging)",
          "Prometheus client",
          "OpenTelemetry for tracing"
        ]
      },
      {
        title: "Testing",
        items: [
          "testify",
          "mockgen"
        ]
      },
      {
        title: "Linting & Vet",
        items: [
          "golangci-lint",
          "go vet",
          "staticcheck"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Learning Plan Checklist",
    subtitle: "Track Your Progress",
    description: "Compact checklist of key milestones",
    color: "bg-emerald-500",
    sections: [
      {
        title: "Essential Milestones",
        items: [
          "✓ Learn language basics + go run/go build",
          "✓ Master slices, maps, structs, pointers",
          "✓ Understand interfaces and idiomatic error handling",
          "✓ Learn go mod, dependency management",
          "✓ Concurrency patterns — goroutines & channels",
          "✓ Build and test web APIs (net/http, Gin/Chi)",
          "✓ Database access (sqlc/GORM/Ent) + migrations",
          "✓ Observability, profiling, and production deployment (Docker + k8s)",
          "✓ Join community (r/golang, Go forums, OSS)"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Best Resources",
    subtitle: "Official & Practical",
    description: "Curated learning materials",
    color: "bg-violet-500",
    sections: [
      {
        title: "Resources",
        items: [
          "Official Go site & tutorials (go.dev)",
          "Roadmap / career guide: Roadmap.sh Golang page",
          "Articles comparing ORMs and frameworks",
          "Advanced concurrency pattern writeups and guides"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Typical Interview Topics",
    subtitle: "What Employers Expect",
    description: "Prepare for Go interviews",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "Interview Topics",
        items: [
          "Concurrency & synchronization (goroutines, channels, data races)",
          "Designing scalable systems (APIs, DB design, caching)",
          "Performance profiling + diagnosing memory/CPU issues",
          "Go internals (escape analysis, scheduler basics) — helpful for senior roles",
          "Practical code exercise: implement a worker-pool, rate limiter, or small REST API"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Final Tips",
    subtitle: "Practical & Opinionated",
    description: "Wisdom from experienced Go developers",
    color: "bg-rose-500",
    sections: [
      {
        title: "Best Practices",
        items: [
          "Prefer small binaries and clarity over clever one-liners. Go is about readability and predictable performance",
          "Learn plain database/sql (or sqlc) before relying fully on an ORM — it pays back when debugging complex queries",
          "Invest time in testing and observability early — production debugging is where most time is spent",
          "Keep up with official release notes and project layout guidance from the Go team"
        ]
      }
    ]
  }
];