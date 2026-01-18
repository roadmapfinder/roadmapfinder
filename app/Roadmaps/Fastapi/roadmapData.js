export const phases = [
  {
    id: 0,
    title: "Python Backend Foundations",
    subtitle: "Beginner Level (0-1 Month)",
    description: "Become comfortable with Python for backend development",
    color: "bg-gray-600",
    sections: [
      {
        title: "Python Core",
        items: [
          "Data basics → Variables, data types, operators",
          "Control flow → Loops, conditionals, logical operations",
          "Functions → Arguments, return values, scope",
          "Data structures → List, tuple, dict, set operations",
          "List comprehensions → Efficient list creation patterns",
          "Lambda functions → Anonymous function expressions",
          "Exception handling → try/except/finally blocks",
          "File handling → Reading and writing files"
        ]
      },
      {
        title: "OOP in Python",
        items: [
          "Classes & objects → Class definition and instantiation",
          "Inheritance → Single and multiple inheritance",
          "Polymorphism → Method overriding and duck typing",
          "Encapsulation → Private attributes and methods",
          "Abstract base classes → ABCs for interface definition"
        ]
      },
      {
        title: "Python Advanced",
        items: [
          "Decorators → Function and class decorators",
          "Generators → Lazy iteration with yield",
          "Iterators → Custom iterable objects",
          "Context managers → with statement and __enter__/__exit__",
          "Type hints → Static typing with annotations",
          "Dataclasses → @dataclass for data containers"
        ]
      },
      {
        title: "Environment",
        items: [
          "venv / poetry → Virtual environment management",
          "pip / pipx → Package installation and management",
          "pyproject.toml → Modern Python project configuration",
          "VS Code debugging → Breakpoints and debug console"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Web & API Fundamentals",
    subtitle: "Beginner Level (1-2 Months)",
    description: "Understand how APIs work before FastAPI",
    color: "bg-blue-600",
    sections: [
      {
        title: "Internet Basics",
        items: [
          "HTTP vs HTTPS → Secure vs unsecure protocols",
          "DNS, IP, ports → Domain resolution and networking",
          "Request / Response lifecycle → Client-server communication"
        ]
      },
      {
        title: "HTTP Methods",
        items: [
          "GET, POST, PUT, PATCH, DELETE → HTTP verb semantics",
          "Status codes → 2xx, 3xx, 4xx, 5xx response codes",
          "Headers, cookies → Metadata and session management"
        ]
      },
      {
        title: "REST API Principles",
        items: [
          "Resource naming → URL structure and conventions",
          "Statelessness → No server-side session state",
          "Versioning → API version management strategies",
          "Pagination → Limiting large result sets",
          "Filtering → Query-based data filtering",
          "Sorting → Order by query parameters"
        ]
      },
      {
        title: "JSON",
        items: [
          "Serialization → Converting objects to JSON",
          "Validation → Schema validation patterns",
          "Nested schemas → Complex data structures"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "FastAPI Core",
    subtitle: "Beginner Level (2-3 Months)",
    description: "Build real APIs with FastAPI framework",
    color: "bg-green-500",
    sections: [
      {
        title: "Setup",
        items: [
          "FastAPI installation → pip install fastapi uvicorn",
          "Uvicorn → ASGI server for running FastAPI",
          "Project structure → Modular folder organization",
          ".env handling → Environment variable management"
        ]
      },
      {
        title: "Core Concepts",
        items: [
          "FastAPI app instance → Application initialization",
          "Path operations → @app.get, @app.post decorators",
          "Query params → URL query string parameters",
          "Path params → Dynamic URL path variables",
          "Request body → JSON payload handling",
          "Response model → Typed response schemas"
        ]
      },
      {
        title: "Pydantic",
        items: [
          "BaseModel → Data validation models",
          "Field validation → Field constraints and validators",
          "Custom validators → @validator decorators",
          "Nested models → Complex schema composition",
          "ORM mode → from_orm for database models"
        ]
      },
      {
        title: "Dependency Injection",
        items: [
          "Depends → Dependency injection system",
          "Shared dependencies → Reusable dependency functions",
          "Scoped dependencies → Request-scoped resources"
        ]
      },
      {
        title: "Routers",
        items: [
          "APIRouter → Modular route organization",
          "Modular architecture → Feature-based routing",
          "Versioned routers → API version separation"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Database Integration",
    subtitle: "Intermediate Level (3-4 Months)",
    description: "Connect FastAPI with production databases",
    color: "bg-purple-500",
    sections: [
      {
        title: "SQL",
        items: [
          "PostgreSQL / MySQL → Relational database systems",
          "Tables → Schema and table creation",
          "Joins → Inner, outer, cross joins",
          "Indexing → Query performance optimization",
          "Constraints → Primary keys, foreign keys, unique"
        ]
      },
      {
        title: "SQLAlchemy ORM",
        items: [
          "Models → Table class definitions",
          "Relationships → One-to-many, many-to-many",
          "Session management → Database session handling",
          "Migrations → Alembic for schema versioning"
        ]
      },
      {
        title: "Async ORM",
        items: [
          "SQLAlchemy async → Asynchronous database operations",
          "AsyncSession → Async session management"
        ]
      },
      {
        title: "NoSQL (Optional)",
        items: [
          "MongoDB with Motor → Async MongoDB driver",
          "Redis caching → In-memory data caching"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Authentication & Security",
    subtitle: "Intermediate Level (4-5 Months)",
    description: "Build secure production APIs",
    color: "bg-red-500",
    sections: [
      {
        title: "Auth Systems",
        items: [
          "JWT authentication → JSON Web Token implementation",
          "OAuth2 password flow → OAuth2 password grant type",
          "Refresh tokens → Long-lived token management",
          "API keys → Simple authentication mechanism"
        ]
      },
      {
        title: "Security",
        items: [
          "Password hashing → bcrypt for secure passwords",
          "Role-based access control → RBAC implementation",
          "Rate limiting → Request throttling and abuse prevention",
          "CORS → Cross-origin resource sharing configuration",
          "CSRF concepts → Cross-site request forgery protection"
        ]
      },
      {
        title: "FastAPI Security Utilities",
        items: [
          "OAuth2PasswordBearer → OAuth2 dependency",
          "Security scopes → Permission-based access control"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced FastAPI",
    subtitle: "Advanced Level (5-6 Months)",
    description: "Enterprise-level API engineering",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Background Tasks",
        items: [
          "BackgroundTasks → Simple async background jobs",
          "Celery + Redis → Distributed task queue",
          "Task queues → Async job processing"
        ]
      },
      {
        title: "Middleware",
        items: [
          "Custom middleware → Request/response interceptors",
          "Logging middleware → Request logging",
          "Auth middleware → Authentication layer"
        ]
      },
      {
        title: "WebSockets",
        items: [
          "Realtime APIs → Bidirectional communication",
          "Chat / notifications → Real-time messaging systems"
        ]
      },
      {
        title: "File Handling",
        items: [
          "Upload → File upload handling",
          "Streaming → Large file streaming",
          "Cloud storage integration → S3, Azure Blob storage"
        ]
      },
      {
        title: "Pagination & Filtering",
        items: [
          "Offset pagination → Skip and limit patterns",
          "Cursor pagination → Efficient large dataset pagination"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "API Quality & Documentation",
    subtitle: "Advanced Level (6-7 Months)",
    description: "Professional API standards and documentation",
    color: "bg-indigo-500",
    sections: [
      {
        title: "OpenAPI / Swagger",
        items: [
          "Custom docs → Customizing OpenAPI documentation",
          "Tags → Organizing endpoints with tags",
          "Examples → Request/response examples",
          "Descriptions → Endpoint descriptions and metadata"
        ]
      },
      {
        title: "Versioning",
        items: [
          "URL versioning → /v1/, /v2/ in URL path",
          "Header versioning → Version in request headers"
        ]
      },
      {
        title: "Error Handling",
        items: [
          "Global exception handlers → Centralized error handling",
          "Custom error formats → Consistent error responses"
        ]
      },
      {
        title: "Response Standardization",
        items: [
          "API response envelopes → Consistent response structure",
          "Metadata → Pagination and response metadata"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing",
    subtitle: "Advanced Level (7-8 Months)",
    description: "Build confidence and reliability with testing",
    color: "bg-pink-500",
    sections: [
      {
        title: "Unit Testing",
        items: [
          "Pytest → Python testing framework",
          "TestClient → FastAPI test client for HTTP testing"
        ]
      },
      {
        title: "Integration Testing",
        items: [
          "Database tests → Testing with real databases",
          "Auth flow tests → End-to-end authentication testing"
        ]
      },
      {
        title: "Mocking",
        items: [
          "Dependency override → Overriding dependencies for tests",
          "Fake services → Mock external services"
        ]
      },
      {
        title: "Coverage",
        items: [
          "Coverage reports → Code coverage measurement with pytest-cov"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Performance & Scalability",
    subtitle: "Advanced Level (8-9 Months)",
    description: "Production-scale API optimization",
    color: "bg-teal-500",
    sections: [
      {
        title: "Async Programming",
        items: [
          "Async / await → Asynchronous function patterns",
          "Event loop → Understanding asyncio event loop",
          "Concurrency → Concurrent request handling"
        ]
      },
      {
        title: "Caching",
        items: [
          "Redis → In-memory caching layer",
          "HTTP cache headers → ETag, Cache-Control headers"
        ]
      },
      {
        title: "Rate Limiting",
        items: [
          "SlowAPI → Rate limiting for FastAPI",
          "Redis-based limiter → Distributed rate limiting"
        ]
      },
      {
        title: "Load Testing",
        items: [
          "Locust → Python-based load testing tool",
          "k6 → Modern load testing framework"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Deployment & DevOps",
    subtitle: "Expert Level (9-10 Months)",
    description: "Industry-standard deployment practices",
    color: "bg-orange-500",
    sections: [
      {
        title: "Docker",
        items: [
          "Dockerfile → Container image creation",
          "Docker Compose → Multi-container orchestration"
        ]
      },
      {
        title: "CI/CD",
        items: [
          "GitHub Actions → Automated workflows",
          "Test pipelines → Automated testing in CI/CD"
        ]
      },
      {
        title: "Servers",
        items: [
          "Nginx reverse proxy → Load balancing and SSL",
          "Gunicorn + Uvicorn workers → Production ASGI server"
        ]
      },
      {
        title: "Cloud",
        items: [
          "AWS / GCP / Azure → Major cloud providers",
          "Railway / Render / Fly.io → Platform as a Service options"
        ]
      },
      {
        title: "Environment Management",
        items: [
          "Secrets → Secure secret management",
          "Config separation → Environment-based configuration"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Architecture Patterns",
    subtitle: "Expert Level (10-11 Months)",
    description: "Senior-level backend architecture thinking",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Clean Architecture",
        items: [
          "Repository pattern → Data access abstraction",
          "Service layer → Business logic separation",
          "DTOs → Data transfer objects"
        ]
      },
      {
        title: "Advanced Patterns",
        items: [
          "Domain Driven Design → DDD principles",
          "Microservices → Distributed service architecture",
          "Event Driven Architecture → Event-based communication",
          "API Gateway → Single entry point for microservices"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Observability & Monitoring",
    subtitle: "Expert Level (11-12 Months)",
    description: "Production reliability and monitoring",
    color: "bg-lime-500",
    sections: [
      {
        title: "Monitoring Tools",
        items: [
          "Logging → structlog for structured logging",
          "Metrics → Prometheus for metrics collection",
          "Tracing → OpenTelemetry for distributed tracing",
          "Error tracking → Sentry for error monitoring"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "AI & Modern Integrations",
    subtitle: "Expert Level",
    description: "2026 relevance with AI integrations",
    color: "bg-violet-500",
    sections: [
      {
        title: "AI Integrations",
        items: [
          "LLM API integration → OpenAI, Anthropic API usage",
          "RAG backend APIs → Retrieval Augmented Generation",
          "Streaming responses → Server-sent events for LLM streams",
          "Vector DB → Pinecone, FAISS for embeddings",
          "Async streaming endpoints → Real-time AI responses"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Industry Projects",
    subtitle: "Expert Level",
    description: "Build comprehensive portfolio projects",
    color: "bg-rose-500",
    sections: [
      {
        title: "Beginner Projects",
        items: [
          "Notes API → Simple CRUD application",
          "Auth system → JWT authentication implementation",
          "Blog API → Posts, comments, users system"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "E-commerce backend → Products, cart, orders, payments",
          "Chat backend → Real-time messaging with WebSockets",
          "Task management system → Kanban-style project management"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "SaaS backend → Multi-tenant application platform",
          "Microservices platform → Distributed service architecture",
          "AI API backend → LLM-powered API endpoints",
          "Payment gateway API → Payment processing system"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Career Readiness",
    subtitle: "Expert Level",
    description: "Prepare for professional FastAPI roles",
    color: "bg-amber-500",
    sections: [
      {
        title: "Interview Preparation",
        items: [
          "API design interviews → RESTful design principles",
          "System design → Scalability and architecture patterns",
          "DB schema design → Database modeling interviews",
          "Async questions → Understanding async/await",
          "JWT flows → Token-based authentication flows",
          "Docker questions → Containerization concepts",
          "FastAPI internals → Framework architecture understanding"
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
          "Create FastAPI boilerplate → Starter templates",
          "Write reusable packages → PyPI package publishing",
          "Publish templates → GitHub template repositories",
          "Blog about architecture → Technical writing and sharing"
        ]
      }
    ]
  }
];