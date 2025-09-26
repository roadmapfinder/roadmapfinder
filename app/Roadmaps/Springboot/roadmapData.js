// roadmapData.js - Spring Boot Development Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Beginner (Foundations)",
    subtitle: "Foundational Level",
    description: "Understand Java fundamentals and Spring ecosystem basics",
    color: "bg-green-500",
    sections: [
      {
        title: "Core Java Fundamentals",
        items: [
          "OOP Concepts → Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation",
          "Exception Handling → Try-catch blocks, custom exceptions, best practices",
          "Collections Framework → List, Set, Map, ArrayList, HashMap, LinkedList usage",
          "Java 8+ Features → Streams, Lambdas, Optional, Method References"
        ]
      },
      {
        title: "Modern Java Features",
        items: [
          "Java 17+ Features → Records, Sealed Classes, Pattern Matching, Switch Expressions",
          "Functional Programming → Stream API, Collectors, Functional Interfaces",
          "Concurrency Basics → Threads, ExecutorService, CompletableFuture",
          "Memory Management → Garbage Collection, JVM tuning basics"
        ]
      },
      {
        title: "Build Tools & Spring Basics",
        items: [
          "Maven → Project structure, dependencies, lifecycle, plugins",
          "Gradle → Build scripts, dependency management, multi-module projects",
          "Spring Core → IoC Container, Dependency Injection, Bean Lifecycle",
          "Annotations → @Component, @Service, @Repository, @Autowired, @Configuration"
        ]
      },
      {
        title: "First Projects",
        items: [
          "Simple REST API → Library/Books CRUD system with H2 database",
          "Spring Boot Basics → @RestController, @RequestMapping, @PathVariable, @RequestParam",
          "Todo List Application → Thymeleaf frontend + Spring Boot backend",
          "Configuration → application.properties, Spring Boot starter templates"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate (Backend Development)",
    subtitle: "Intermediate Level",
    description: "Build real-world REST APIs and understand data handling",
    color: "bg-blue-500",
    sections: [
      {
        title: "Advanced Spring Boot",
        items: [
          "Auto-configuration → How Spring Boot magic works, custom auto-config",
          "Configuration Management → application.yml, @ConfigurationProperties, profiles",
          "Environment Profiles → dev, test, prod configurations, conditional beans",
          "Actuator → Health checks, metrics, application monitoring endpoints"
        ]
      },
      {
        title: "Data Persistence & JPA",
        items: [
          "Spring Data JPA → @Entity, @Id, @GeneratedValue, repository patterns",
          "Database Relationships → @OneToOne, @OneToMany, @ManyToMany, fetch strategies",
          "Custom Queries → @Query, JPQL, native queries, pagination and sorting",
          "Repository Interfaces → CrudRepository, JpaRepository, custom implementations"
        ]
      },
      {
        title: "Validation & Error Handling",
        items: [
          "Bean Validation → @Valid, @NotNull, @NotBlank, @Size, custom validators",
          "Global Exception Handling → @ControllerAdvice, @ExceptionHandler patterns",
          "Response Entities → Proper HTTP status codes, error response structures",
          "API Documentation → Swagger/OpenAPI 3, request/response examples"
        ]
      },
      {
        title: "Security & Testing",
        items: [
          "Spring Security Basics → Authentication, authorization, password encoding",
          "Role-based Security → User roles, method-level security, security expressions",
          "Testing Framework → JUnit 5, Mockito, @SpringBootTest, @WebMvcTest",
          "Integration Testing → @TestPropertySource, embedded databases, test containers"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced (Production-Ready)",
    subtitle: "Advanced Level",
    description: "Handle real-world challenges like security, microservices, and cloud deployment",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced Configuration & Logging",
        items: [
          "Externalized Configuration → Environment variables, config servers, secrets management",
          "Logging Framework → SLF4J, Logback, structured logging, log aggregation",
          "Application Events → Custom events, @EventListener, async event processing",
          "Caching → @Cacheable, Redis integration, cache eviction strategies"
        ]
      },
      {
        title: "Advanced Security",
        items: [
          "JWT Authentication → Token generation, validation, refresh tokens",
          "OAuth2 Integration → Social login, resource servers, authorization servers",
          "Method Security → @PreAuthorize, @PostAuthorize, custom security expressions",
          "CSRF & CORS → Cross-site protection, CORS configuration, security headers"
        ]
      },
      {
        title: "Microservices Architecture",
        items: [
          "Service Discovery → Eureka, Consul, service registration and discovery",
          "API Gateway → Spring Cloud Gateway, routing, filters, rate limiting",
          "Circuit Breaker → Resilience4J, Hystrix, fault tolerance patterns",
          "Configuration Management → Spring Cloud Config, centralized configuration"
        ]
      },
      {
        title: "Messaging & Performance",
        items: [
          "Message Queues → RabbitMQ, Apache Kafka, message-driven architecture",
          "Async Processing → @Async, CompletableFuture, thread pool configuration",
          "Database Optimization → Connection pooling, query optimization, indexing strategies",
          "Scheduled Tasks → @Scheduled, Quartz integration, distributed scheduling"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Expert Level (Industry Ready)",
    subtitle: "Expert Level",
    description: "Build enterprise-grade applications with best practices and scalable systems",
    color: "bg-red-500",
    sections: [
      {
        title: "Production Readiness",
        items: [
          "Health Checks → Custom health indicators, readiness and liveness probes",
          "Monitoring → Prometheus metrics, Grafana dashboards, custom metrics",
          "Distributed Tracing → Spring Sleuth, Zipkin, request correlation",
          "Application Security → Security scanning, dependency checks, OWASP compliance"
        ]
      },
      {
        title: "Cloud & DevOps",
        items: [
          "Containerization → Docker best practices, multi-stage builds, image optimization",
          "Kubernetes → Deployments, services, config maps, secrets, ingress",
          "Cloud Platforms → AWS (RDS, ECS, Lambda), GCP, Azure deployment strategies",
          "Infrastructure as Code → Terraform, CloudFormation, Helm charts"
        ]
      },
      {
        title: "Performance & Scalability",
        items: [
          "JVM Tuning → Garbage collection, memory optimization, profiling tools",
          "Caching Strategies → Redis clustering, distributed caching, cache patterns",
          "Database Scaling → Read replicas, sharding, connection pooling optimization",
          "Load Testing → JMeter, Gatling, performance benchmarking"
        ]
      },
      {
        title: "Advanced Architecture Patterns",
        items: [
          "Event-Driven Architecture → Event sourcing, CQRS, saga patterns",
          "Clean Architecture → Hexagonal architecture, ports and adapters pattern",
          "Domain-Driven Design → Bounded contexts, aggregates, domain events",
          "API Versioning → Backward compatibility, deprecation strategies"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Continuous Learning & Mastery",
    subtitle: "Mastery Level",
    description: "Stay current with ecosystem and contribute to open source",
    color: "bg-gray-800",
    sections: [
      {
        title: "Advanced Spring Ecosystem",
        items: [
          "Spring Boot 3.x+ → Latest features, GraalVM native images, virtual threads",
          "Spring WebFlux → Reactive programming, non-blocking I/O, backpressure handling",
          "Spring Data → Advanced querying, custom repositories, reactive data access",
          "Spring Integration → Enterprise integration patterns, message routing"
        ]
      },
      {
        title: "Emerging Technologies",
        items: [
          "GraphQL Integration → Spring GraphQL, schema design, subscription handling",
          "GraalVM Native → Ahead-of-time compilation, startup optimization, memory usage",
          "Project Loom → Virtual threads, structured concurrency, scalability improvements",
          "Serverless → AWS Lambda with Spring Boot, cold start optimization"
        ]
      },
      {
        title: "Documentation & Standards",
        items: [
          "API Documentation → OpenAPI 3.0, automated documentation generation",
          "Code Quality → SonarQube, code coverage, static analysis tools",
          "Testing Strategies → Contract testing, mutation testing, property-based testing",
          "Dependency Management → Security scanning, version management, update strategies"
        ]
      },
      {
        title: "Community & Contribution",
        items: [
          "Open Source → Contributing to Spring projects, bug reports, feature requests",
          "Knowledge Sharing → Technical blogging, conference speaking, mentoring",
          "Best Practices → Code reviews, architecture decisions, team leadership",
          "Industry Trends → Following Spring roadmap, community discussions, new patterns"
        ]
      }
    ]
  }
];

