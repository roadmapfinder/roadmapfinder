export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Pre-requirements",
    description: "Essential prerequisites before diving into API development.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🔧 Core Prerequisites",
        items: [
          "One server-side language (Node.js/TypeScript, Python, Go, Java, or C#)",
          "HTTP basics: requests, responses, status codes, headers, cookies",
          "Basic data formats: JSON, YAML",
          "Basic tooling: git, terminal, package manager (npm, pip, go mod, maven)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Beginner — Core API Concepts",
    subtitle: "2-4 Weeks",
    description: "HTTP fundamentals and quick wins with basic REST APIs.",
    color: "bg-green-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "HTTP verbs & status codes, headers, idempotency",
          "REST fundamentals: resources, URIs, statelessness",
          "Designing simple endpoints (CRUD)",
          "Simple server frameworks: Express (Node), Flask/FastAPI (Python), Gin (Go), Spring Boot (Java)",
          "Local testing with Postman / curl"
        ]
      },
      {
        title: "🛠️ Tools & Mini-Projects",
        items: [
          "Build a simple CRUD REST API (e.g., todo list) with persistent storage (SQLite/Postgres)",
          "Add pagination, filtering, sorting to list endpoints",
          "Write basic automated tests (unit + simple integration tests)"
        ]
      },
      {
        title: "💡 Why This Matters",
        items: [
          "HTTP + REST are the baseline for nearly all web APIs — get them solid"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Intermediate — Robust Design & Tooling",
    subtitle: "1-3 Months",
    description: "Master API contracts, versioning, and professional tooling.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "OpenAPI / Swagger: design-first APIs, auto-generate docs & client SDKs (Learn OAS 3.x)",
          "API versioning strategies, meaningful error formats (RFC7807/problem+json), idempotency keys",
          "Authentication basics: API keys, cookies, JWT fundamentals",
          "Request validation, schema-driven design, input sanitization",
          "Testing: unit, integration, end-to-end; contract testing basics (PACT)",
          "Mocking/stubbing: WireMock, Postman mock servers",
          "CI for APIs: linting OpenAPI, running tests, publishing docs"
        ]
      },
      {
        title: "🛠️ Tools & Projects",
        items: [
          "Redesign your CRUD project using OpenAPI (spec → codegen)",
          "Implement contract tests between a client and server (PACT)",
          "Add automated CI pipeline: run tests + lint OpenAPI + publish Swagger UI"
        ]
      },
      {
        title: "💡 Why OpenAPI / Contract Testing",
        items: [
          "OpenAPI makes APIs discoverable and automates client generation & testing",
          "Contract tests reduce integration regressions"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Security, Identity & Production",
    subtitle: "1-2 Months",
    description: "Implement OAuth2, security best practices, and production readiness.",
    color: "bg-orange-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "OAuth 2.0 / Authorization flows (Authorization Code, PKCE, Client Credentials) and OpenID Connect basics",
          "API security best practices (rate limiting, input validation, CORS, TLS everywhere)",
          "OWASP API Security Top 10 and mitigation strategies",
          "Secrets management, secure storage, rotating keys",
          "Threat modelling for APIs and secure design patterns"
        ]
      },
      {
        title: "🛠️ Tools & Projects",
        items: [
          "Add OAuth2 (or a real IAM like Auth0/Keycloak) to your API",
          "Add rate limiting, IP blacklisting, and logging of auth failures",
          "Run static security scans and dependency checks (Snyk, Dependabot)"
        ]
      },
      {
        title: "💡 Why This Matters",
        items: [
          "Most production incidents stem from security misconfigurations",
          "Learn the standards and automate checks"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Performance, Reliability & Scale",
    subtitle: "2-3 Months",
    description: "Optimize performance with caching, gRPC, and load testing.",
    color: "bg-red-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "Caching strategies (HTTP caching headers, CDN, Redis), pagination patterns, lazy-loading",
          "Connection & protocol upgrades: HTTP/2, HTTP/3 basics when relevant",
          "Async & streaming: WebSockets, Server-Sent Events, long polling",
          "High-performance RPC alternatives: gRPC + Protocol Buffers for low-latency, schema-driven binary RPCs",
          "Rate limiting, circuit breakers (Hystrix pattern), retries with backoff",
          "Load testing: k6, JMeter, Vegeta"
        ]
      },
      {
        title: "🛠️ Tools & Projects",
        items: [
          "Implement a microservice that uses gRPC for internal comms and REST for public API",
          "Add Redis caching and use a CDN for static responses",
          "Run load tests and diagnose bottlenecks"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Observability, Monitoring & SRE",
    subtitle: "Ongoing",
    description: "Master distributed tracing, metrics, and operational excellence.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "Distributed tracing, metrics, structured logging — link traces to logs and metrics",
          "OpenTelemetry for instrumentation (traces/metrics/logs) and exporters (Jaeger/Prometheus/Grafana)",
          "Alerting, SLOs/SLIs, incident runbooks",
          "API analytics: client usage, top endpoints, error budget"
        ]
      },
      {
        title: "🛠️ Tools & Projects",
        items: [
          "Instrument your API with OpenTelemetry; send traces to Jaeger and metrics to Prometheus + Grafana",
          "Create dashboards: latency percentiles, error rate, request volume, SLO dashboard",
          "Create an on-call alert for increased 95th percentile latency"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "API Platform & Management",
    subtitle: "Enterprise Level",
    description: "Build API platforms with gateways, developer portals, and governance.",
    color: "bg-pink-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "API gateway functions: routing, auth, throttling, request transformation, analytics",
          "API management: developer portal, monetization, policies, lifecycle (design → publish → retire)",
          "Compare API gateway solutions (Kong, Apigee, AWS API Gateway, Tyk, API7)",
          "Multi-region deployments, blue/green or canary releases of API changes",
          "Governance: change review processes, version deprecation policies, SLA contracts"
        ]
      },
      {
        title: "🛠️ Projects & Practices",
        items: [
          "Put your services behind an API Gateway, implement global rate limiting and API keys",
          "Publish a developer portal (docs, interactive console, SDKs)",
          "Practice rolling upgrades and traffic shaping via gateway"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Event-Driven & Async Architectures",
    subtitle: "Advanced",
    description: "Master webhooks, event streaming, and asynchronous API patterns.",
    color: "bg-teal-500",
    sections: [
      {
        title: "📚 Skills to Learn",
        items: [
          "Webhooks design (retries, signing, idempotency)",
          "Event streaming patterns: Kafka, NATS, Pulsar. Event sourcing basics",
          "Designing async APIs (message contracts, schema registry, versioning)",
          "Observability for async workflows (correlating events across traces)"
        ]
      },
      {
        title: "🛠️ Project",
        items: [
          "Add an event-driven flow (e.g., when user created → publish to Kafka → consumer updates analytics service)",
          "Implement webhook receiver with signature validation and retry/backoff"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "API Product & Architecture",
    subtitle: "Architect Level",
    description: "Senior skills for API strategy, governance, and system design.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "📚 Skills to Master",
        items: [
          "API program strategies: API productization, developer experience (DX) design, SLAs, pricing models",
          "Cross-team governance and platform thinking: platform APIs vs product APIs",
          "System design for APIs: microservices tradeoffs, data ownership, consistency models",
          "Cost optimization (data transfer, gateway costs), compliance (GDPR, PCI where relevant)"
        ]
      },
      {
        title: "🎯 What Companies Expect",
        items: [
          "Design secure, scalable API platforms",
          "Run API programs and measure adoption",
          "Integrate observability with SRE and product metrics"
        ]
      }
    ]
  }
];