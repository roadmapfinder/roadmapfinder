export const phases = [
  {
    id: 0,
    title: "Prerequisites & Foundations",
    subtitle: "Beginner Level",
    description: "Build strong Python and software engineering fundamentals",
    color: "bg-gray-600",
    sections: [
      {
        title: "Python Fundamentals",
        items: [
          "Core syntax → Data structures, OOP, modules, error handling",
          "Python idioms → List comprehensions, generators, decorators, context managers",
          "Performance basics → Understanding time complexity, profiling code",
          "Practice: Build small CLI utilities and CRUD scripts"
        ]
      },
      {
        title: "Software Engineering Tools",
        items: [
          "Version control → Git workflows, branching, merging, GitHub",
          "Virtual environments → venv, pip, poetry for dependency management",
          "Command line → Basic shell commands, file navigation, scripting",
          "Code quality → PEP8, black, isort, meaningful commits"
        ]
      },
      {
        title: "Web & Database Basics",
        items: [
          "HTTP fundamentals → Request/response cycle, methods, status codes",
          "REST principles → Resources, endpoints, RESTful design patterns",
          "SQL basics → CRUD operations, joins, transactions, indexes",
          "Practice: Simple database-backed Python apps using SQLite/PostgreSQL"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Django Basics",
    subtitle: "Junior Level",
    description: "Learn core Django concepts and build simple web applications",
    color: "bg-green-500",
    sections: [
      {
        title: "Django Fundamentals",
        items: [
          "Project structure → Apps, settings, URLs, dev vs production setup",
          "Models & migrations → ORM, database schema, migration workflow",
          "Views & templates → Function-based views, Django templating, static files",
          "Forms → Form handling, validation, CSRF protection"
        ]
      },
      {
        title: "Authentication & Admin",
        items: [
          "User authentication → Login/logout, user management, permissions",
          "Django admin → Customizing admin interface, model admin classes",
          "Authorization → Permission system, groups, decorators",
          "Session management → Session handling, cookies, security"
        ]
      },
      {
        title: "Testing & Deployment",
        items: [
          "Unit testing → Test cases, fixtures, test database",
          "Test coverage → pytest-django, coverage analysis",
          "Basic deployment → Deploying to VPS or free hosting platforms",
          "Practice: Build blog/portfolio with authentication and admin"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Django",
    subtitle: "Intermediate Level",
    description: "Master Django REST Framework and advanced Django patterns",
    color: "bg-blue-500",
    sections: [
      {
        title: "Class-Based Views & DRF",
        items: [
          "Class-based views → Generic views, mixins, view inheritance",
          "DRF serializers → Model serializers, nested serializers, validation",
          "ViewSets & routers → Automatic URL routing, CRUD operations",
          "API authentication → Token auth, JWT, session authentication"
        ]
      },
      {
        title: "Advanced API Features",
        items: [
          "API design → Versioning, pagination, filtering, ordering",
          "Permissions → Custom permissions, object-level permissions",
          "File handling → File uploads, media serving, image processing",
          "Third-party integration → Payment gateways, email services, storage"
        ]
      },
      {
        title: "Async & Performance",
        items: [
          "Async support → Async views, ASGI, middleware, sync vs async",
          "Caching strategies → View caching, template fragment, low-level cache",
          "Query optimization → select_related, prefetch_related, database indexes",
          "Background tasks → Celery basics, task queues, scheduled jobs"
        ]
      },
      {
        title: "Testing & Debugging",
        items: [
          "Integration tests → API testing, test clients, mock services",
          "Test coverage → Coverage reports, continuous testing in CI",
          "Debugging → Django Debug Toolbar, logging, error tracking",
          "Practice: Build REST API backend with authentication and optimization"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Django & Production",
    subtitle: "Advanced Level",
    description: "Build scalable, secure production-ready applications",
    color: "bg-purple-500",
    sections: [
      {
        title: "Database Mastery",
        items: [
          "Advanced queries → Transactions, isolation levels, raw SQL, subqueries",
          "Database tuning → Query profiling, explain plans, connection pooling",
          "Database scaling → Read replicas, partitioning, sharding strategies",
          "NoSQL integration → MongoDB, Redis as database, polyglot persistence"
        ]
      },
      {
        title: "Search & Real-Time",
        items: [
          "Full-text search → PostgreSQL full-text, Elasticsearch, OpenSearch",
          "Django Channels → WebSockets, async consumers, channel layers",
          "Real-time features → Chat, notifications, live updates",
          "Search optimization → Indexing strategies, relevance tuning"
        ]
      },
      {
        title: "Task Queues & Jobs",
        items: [
          "Celery advanced → Task routing, priorities, error handling, monitoring",
          "Alternative queues → Dramatiq, RQ, task queue comparison",
          "Scheduled tasks → Celery beat, cron jobs, periodic tasks",
          "Job monitoring → Flower, task result backends, failure recovery"
        ]
      },
      {
        title: "Security Hardening",
        items: [
          "OWASP Top 10 → SQL injection, XSS, CSRF protection, security headers",
          "API security → Rate limiting, throttling, API key management",
          "Authentication → OAuth2, OpenID Connect, SSO integration",
          "Security auditing → Penetration testing, security logging, compliance"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Scalability & Infrastructure",
    subtitle: "Advanced Level",
    description: "Scale applications and master deployment infrastructure",
    color: "bg-red-500",
    sections: [
      {
        title: "Caching & Performance",
        items: [
          "Caching layers → Redis, Memcached, cache invalidation strategies",
          "CDN integration → Static/media serving, CloudFront, CloudFlare",
          "Load balancing → Nginx, HAProxy, session affinity",
          "Performance monitoring → New Relic, DataDog, APM tools"
        ]
      },
      {
        title: "Containerization",
        items: [
          "Docker basics → Dockerfile, multi-stage builds, image optimization",
          "Docker Compose → Multi-container apps, service orchestration",
          "Container security → Image scanning, non-root users, secrets",
          "Production containers → Health checks, logging, resource limits"
        ]
      },
      {
        title: "Orchestration & Cloud",
        items: [
          "Kubernetes → Deployments, services, ingress, ConfigMaps, secrets",
          "Cloud platforms → AWS ECS/EKS, Azure AKS, GCP GKE",
          "Infrastructure as Code → Terraform, CloudFormation, Ansible",
          "Cloud services → RDS, S3, Lambda, managed databases"
        ]
      },
      {
        title: "CI/CD & DevOps",
        items: [
          "CI/CD pipelines → GitHub Actions, GitLab CI, Jenkins automation",
          "Deployment strategies → Blue-green, canary, rolling deployments",
          "Zero-downtime → Database migrations, backward compatibility",
          "Practice: Deploy scalable app with monitoring and auto-scaling"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Observability & Monitoring",
    subtitle: "Advanced Level",
    description: "Ensure reliability, visibility and operational excellence",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Logging & Error Tracking",
        items: [
          "Structured logging → JSON logs, correlation IDs, log levels",
          "Log aggregation → ELK stack, CloudWatch, Splunk",
          "Error reporting → Sentry, Rollbar, exception tracking",
          "Log analysis → Query logs, anomaly detection, alerting"
        ]
      },
      {
        title: "Metrics & Monitoring",
        items: [
          "Application metrics → Prometheus, StatsD, custom metrics",
          "Dashboards → Grafana, CloudWatch dashboards, DataDog",
          "Performance monitoring → Response times, throughput, error rates",
          "Database monitoring → Query performance, connection pools, slow queries"
        ]
      },
      {
        title: "Distributed Tracing",
        items: [
          "APM tools → New Relic, DataDog APM, Dynatrace",
          "OpenTelemetry → Instrumentation, traces, spans, context propagation",
          "Service dependencies → Service maps, latency analysis",
          "SLIs & SLOs → Service level indicators, objectives, error budgets"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Software Architecture",
    subtitle: "Expert Level",
    description: "Design robust, maintainable large-scale systems",
    color: "bg-orange-500",
    sections: [
      {
        title: "Design Patterns & Principles",
        items: [
          "SOLID principles → Single responsibility, open-closed, dependency inversion",
          "Design patterns → Factory, strategy, observer, repository patterns",
          "Clean code → Code readability, naming, refactoring, technical debt",
          "Domain-driven design → Bounded contexts, entities, aggregates, services"
        ]
      },
      {
        title: "API Architecture",
        items: [
          "API design → RESTful best practices, resource modeling, HATEOAS",
          "GraphQL → Schema design, resolvers, N+1 problem, DataLoader",
          "API versioning → URL versioning, header versioning, deprecation",
          "API documentation → OpenAPI/Swagger, auto-documentation, examples"
        ]
      },
      {
        title: "System Architecture",
        items: [
          "Monolith vs microservices → Trade-offs, modular monolith approach",
          "Microservices → Service boundaries, communication, data ownership",
          "Event-driven → Event sourcing, CQRS, message queues, pub/sub",
          "Service integration → API gateways, service mesh, circuit breakers"
        ]
      },
      {
        title: "Code Quality & Review",
        items: [
          "Code reviews → Review process, feedback, standards, best practices",
          "Testing strategy → Unit, integration, E2E, test pyramid",
          "Refactoring → Legacy code, incremental improvements, strangler pattern",
          "Documentation → Architecture decisions, API docs, runbooks, RFCs"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Distributed Systems",
    subtitle: "Expert Level",
    description: "Master distributed architectures and data management at scale",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Message Queues & Brokers",
        items: [
          "RabbitMQ → Exchanges, queues, routing, message durability",
          "Apache Kafka → Topics, partitions, consumer groups, stream processing",
          "Event-driven architecture → Event sourcing, saga patterns, choreography",
          "Message patterns → Pub/sub, request-reply, competing consumers"
        ]
      },
      {
        title: "Data Consistency",
        items: [
          "Distributed transactions → Two-phase commit, saga pattern",
          "CAP theorem → Consistency, availability, partition tolerance trade-offs",
          "Eventual consistency → Conflict resolution, vector clocks, CRDTs",
          "Data replication → Master-slave, multi-master, conflict handling"
        ]
      },
      {
        title: "High Availability & DR",
        items: [
          "High availability → Redundancy, failover, health checks, circuit breakers",
          "Disaster recovery → Backup strategies, RTO/RPO, recovery procedures",
          "Database replication → Synchronous, asynchronous, read replicas",
          "Multi-region → Geographic distribution, latency optimization, data locality"
        ]
      },
      {
        title: "Advanced Scaling",
        items: [
          "Horizontal scaling → Load distribution, stateless design, session management",
          "Database sharding → Partition strategies, shard keys, rebalancing",
          "Caching at scale → Cache hierarchies, invalidation, cache warming",
          "Performance optimization → Profiling, bottleneck identification, optimization"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Security & Compliance",
    subtitle: "Expert Level",
    description: "Implement enterprise-grade security and compliance",
    color: "bg-pink-500",
    sections: [
      {
        title: "Advanced Authentication",
        items: [
          "OAuth2 & OpenID → Authorization flows, token management, SSO",
          "Multi-factor auth → TOTP, SMS, biometric, WebAuthn",
          "JWT security → Token validation, refresh tokens, revocation",
          "Identity providers → Auth0, Okta, Keycloak integration"
        ]
      },
      {
        title: "Data Security",
        items: [
          "Encryption → At-rest, in-transit, key management, HSM",
          "Secrets management → Vault, AWS Secrets Manager, credential rotation",
          "Data privacy → GDPR, CCPA, data anonymization, right to erasure",
          "Audit logging → Security events, access logs, compliance reporting"
        ]
      },
      {
        title: "Application Security",
        items: [
          "Security testing → SAST, DAST, penetration testing, vulnerability scanning",
          "Dependency scanning → CVE monitoring, automated updates, security patches",
          "API security → Rate limiting, API keys, IP whitelisting, WAF",
          "Secure coding → Input validation, output encoding, parameterized queries"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Leadership & Emerging Trends",
    subtitle: "Architect Level",
    description: "Lead teams and stay current with cutting-edge technologies",
    color: "bg-teal-500",
    sections: [
      {
        title: "Technical Leadership",
        items: [
          "Architecture decisions → RFCs, design docs, technical reviews",
          "Mentoring → Code reviews, pair programming, knowledge sharing",
          "Team collaboration → Cross-functional work, stakeholder communication",
          "Standards & best practices → Coding standards, CI/CD, security policies"
        ]
      },
      {
        title: "Django Async Evolution",
        items: [
          "Async ORM → Async database queries, connection pooling",
          "ASGI advances → Async middleware, channels improvements",
          "WebSockets → Real-time bidirectional communication at scale",
          "Streaming responses → Server-sent events, chunked responses"
        ]
      },
      {
        title: "Modern API Patterns",
        items: [
          "GraphQL adoption → Apollo, Graphene, schema federation",
          "API-first design → Headless CMS, BFF pattern, API contracts",
          "gRPC → Protocol Buffers, streaming, service mesh integration",
          "Serverless APIs → Lambda, API Gateway, cold start optimization"
        ]
      },
      {
        title: "AI/ML Integration",
        items: [
          "ML model serving → TensorFlow Serving, TorchServe, model APIs",
          "AI/ML pipelines → Training, inference, model versioning, MLOps",
          "AI services → OpenAI API, AWS Rekognition, GCP AI Platform",
          "Responsible AI → Bias detection, explainability, ethical considerations"
        ]
      },
      {
        title: "Cloud Native & Edge",
        items: [
          "Serverless → Lambda, Cloud Functions, cold start mitigation",
          "Edge computing → CloudFlare Workers, Lambda@Edge, edge caching",
          "Multi-cloud → Cloud abstraction, vendor lock-in avoidance",
          "Cost optimization → Resource sizing, spot instances, reserved capacity"
        ]
      }
    ]
  }
];