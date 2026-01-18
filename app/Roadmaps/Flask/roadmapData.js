export const phases = [
  {
    id: 0,
    title: "Programming Foundations",
    subtitle: "Mandatory Prerequisites",
    description: "Master Python fundamentals before diving into Flask",
    color: "bg-gray-600",
    sections: [
      {
        title: "Python Core",
        items: [
          "Data basics → Variables, data types, operators",
          "Control flow → Loops, conditionals, logical operations",
          "Functions → Function definitions, lambda expressions",
          "Comprehensions → List, dict, set comprehensions",
          "Exception handling → try/except blocks, custom exceptions",
          "File handling → Reading and writing files",
          "Virtual environments → venv, virtualenv management",
          "Package managers → pip, poetry, uv for dependencies"
        ]
      },
      {
        title: "OOP in Python",
        items: [
          "Classes & objects → Class definition and instantiation",
          "Inheritance → Single and multiple inheritance patterns",
          "Polymorphism → Method overriding and duck typing",
          "Encapsulation → Private attributes and property decorators",
          "Dataclasses → Modern data containers with @dataclass",
          "Type hints → PEP 484 type annotations for better code"
        ]
      },
      {
        title: "Python Project Structure",
        items: [
          "__init__.py → Package initialization and namespace",
          "Modules vs packages → Code organization strategies",
          "Absolute vs relative imports → Import best practices",
          "Goal: Think like a Python engineer"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Web Fundamentals",
    subtitle: "Beginner Level (0-1 Month)",
    description: "Understand web architecture before Flask development",
    color: "bg-blue-600",
    sections: [
      {
        title: "HTTP & Web Basics",
        items: [
          "Client-Server model → Understanding request-response cycle",
          "HTTP methods → GET, POST, PUT, DELETE, PATCH",
          "Status codes → 2xx, 3xx, 4xx, 5xx response codes",
          "Headers → Content-Type, Authorization, custom headers",
          "Cookies vs Sessions → Client-side vs server-side storage",
          "REST principles → Resource-based API design patterns"
        ]
      },
      {
        title: "Frontend Awareness",
        items: [
          "HTML forms → Form submission and data handling",
          "JSON → JavaScript Object Notation for data exchange",
          "AJAX / Fetch API → Asynchronous HTTP requests",
          "CORS → Cross-origin resource sharing policies"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Flask Core",
    subtitle: "Beginner Level (1-2 Months)",
    description: "Build web applications with Flask framework",
    color: "bg-green-500",
    sections: [
      {
        title: "Flask Basics",
        items: [
          "Installing Flask → Virtual environment and pip setup",
          "Flask app lifecycle → Application initialization and context",
          "app = Flask(__name__) → Application instance creation",
          "Routing with decorators → @app.route() patterns",
          "URL variables → Dynamic route parameters",
          "HTTP methods → Handling different request methods",
          "Returning JSON → jsonify() and JSON responses"
        ]
      },
      {
        title: "Templates",
        items: [
          "Jinja2 syntax → Template variables and expressions",
          "Template inheritance → Base templates and blocks",
          "Macros → Reusable template components",
          "Filters → Data transformation in templates",
          "Static files → CSS, JavaScript, images serving"
        ]
      },
      {
        title: "Request / Response",
        items: [
          "request → Accessing form data, JSON, files",
          "response → Creating custom responses",
          "redirect → URL redirection patterns",
          "url_for → Dynamic URL generation",
          "abort → Error responses and HTTP exceptions"
        ]
      },
      {
        title: "Blueprints",
        items: [
          "Modular app structure → Organizing large applications",
          "Feature-based architecture → Separation of concerns"
        ]
      },
      {
        title: "Configuration",
        items: [
          "Config classes → Development, production, testing configs",
          "Environment variables → OS-level configuration",
          ".env usage → python-dotenv for environment management",
          "Project: Blog App with Flask + Templates"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Database & ORM",
    subtitle: "Intermediate Level (2-3 Months)",
    description: "Persist and query data with SQL and ORMs",
    color: "bg-purple-500",
    sections: [
      {
        title: "SQL Fundamentals",
        items: [
          "Tables, relations → Schema design and foreign keys",
          "Indexes → Query performance optimization",
          "Normalization → Database design best practices",
          "Transactions → ACID properties and consistency"
        ]
      },
      {
        title: "SQLAlchemy ORM",
        items: [
          "Models → Class-based table definitions",
          "Relationships → One-to-many, many-to-many associations",
          "Migrations → Alembic for schema version control",
          "CRUD operations → Create, Read, Update, Delete patterns",
          "Query optimization → Eager loading, query analysis"
        ]
      },
      {
        title: "Flask-SQLAlchemy",
        items: [
          "Integration → Flask extension for SQLAlchemy",
          "Pagination → Limiting query results efficiently",
          "Lazy loading → On-demand relationship loading",
          "Raw SQL when needed → Custom queries for complex operations",
          "Project: User Management System with PostgreSQL"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Authentication & Authorization",
    subtitle: "Intermediate Level (3-4 Months)",
    description: "Build secure authentication and authorization systems",
    color: "bg-red-500",
    sections: [
      {
        title: "Authentication",
        items: [
          "Password hashing → bcrypt, werkzeug.security",
          "Flask-Login → Session-based user authentication",
          "JWT authentication → Stateless token-based auth",
          "Refresh tokens → Long-lived token management"
        ]
      },
      {
        title: "Authorization",
        items: [
          "Role based access control → RBAC implementation",
          "Permission systems → Fine-grained access control"
        ]
      },
      {
        title: "OAuth",
        items: [
          "Google / GitHub login → Third-party authentication",
          "Project: Auth API with JWT + Refresh Token"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "REST API Development",
    subtitle: "Intermediate Level (4-5 Months)",
    description: "Design and build production-grade REST APIs",
    color: "bg-yellow-500",
    sections: [
      {
        title: "API Design",
        items: [
          "REST conventions → HTTP verbs and resource naming",
          "Resource naming → Consistent URL patterns",
          "Pagination → Offset and cursor-based pagination",
          "Filtering → Query parameter filtering strategies",
          "Sorting → Order by parameters in queries",
          "Versioning → API version management (v1, v2)"
        ]
      },
      {
        title: "Flask REST Tools",
        items: [
          "Flask-RESTful → Extension for building REST APIs",
          "Flask-RESTX → API documentation with Swagger",
          "Marshmallow / Pydantic → Data serialization libraries"
        ]
      },
      {
        title: "Serialization",
        items: [
          "DTO patterns → Data Transfer Objects design",
          "Schema validation → Input validation and sanitization"
        ]
      },
      {
        title: "Error Handling",
        items: [
          "Global error handlers → Centralized exception handling",
          "Custom exceptions → Application-specific errors",
          "Project: Production-grade REST API"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced Flask Architecture",
    subtitle: "Advanced Level (5-6 Months)",
    description: "Build enterprise-grade Flask applications",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Application Factory Pattern",
        items: [
          "Factory function → create_app() pattern for testing",
          "Application context → Request and app context management"
        ]
      },
      {
        title: "Layered Architecture",
        items: [
          "Controllers → Route handlers and request processing",
          "Services → Business logic layer separation",
          "Repositories → Data access layer abstraction",
          "DTOs → Data transfer between layers"
        ]
      },
      {
        title: "Dependency Injection",
        items: [
          "DI patterns → Loose coupling and testability"
        ]
      },
      {
        title: "Clean Architecture in Flask",
        items: [
          "Domain Driven Design basics → DDD principles for Flask",
          "Goal: Flask like enterprise backend"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Async, Background Jobs & Real-Time",
    subtitle: "Advanced Level (6-7 Months)",
    description: "Handle asynchronous tasks and real-time features",
    color: "bg-pink-500",
    sections: [
      {
        title: "Background Tasks",
        items: [
          "Celery → Distributed task queue system",
          "Redis / RabbitMQ → Message broker backends",
          "Task queues → Asynchronous job processing"
        ]
      },
      {
        title: "Async Flask",
        items: [
          "Async routes → async/await in Flask views",
          "Async DB calls → Asynchronous database operations"
        ]
      },
      {
        title: "WebSockets",
        items: [
          "Flask-SocketIO → Real-time bidirectional communication",
          "Project: Notification System"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Testing & Quality",
    subtitle: "Advanced Level (7-8 Months)",
    description: "Write reliable, maintainable Flask code",
    color: "bg-teal-500",
    sections: [
      {
        title: "Testing",
        items: [
          "PyTest → Python testing framework",
          "Unit tests → Testing individual components",
          "Integration tests → Testing component interactions",
          "API tests → End-to-end API endpoint testing",
          "Mocking → Isolating components for testing"
        ]
      },
      {
        title: "Mocking Tools",
        items: [
          "pytest-mock → pytest plugin for mocking",
          "unittest.mock → Standard library mocking"
        ]
      },
      {
        title: "Coverage",
        items: [
          "pytest-cov → Code coverage measurement"
        ]
      },
      {
        title: "Linting & Formatting",
        items: [
          "black → Code formatting tool",
          "flake8 → Linting and style checking",
          "isort → Import statement sorting",
          "mypy → Static type checking"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Security",
    subtitle: "Advanced Level (8-9 Months)",
    description: "Implement security best practices in Flask",
    color: "bg-orange-500",
    sections: [
      {
        title: "Security Fundamentals",
        items: [
          "SQL injection → Parameterized queries, ORM usage",
          "XSS → Cross-site scripting prevention",
          "CSRF → Cross-site request forgery protection",
          "CORS → Cross-origin resource sharing configuration",
          "Rate limiting → Request throttling and abuse prevention"
        ]
      },
      {
        title: "Flask Security",
        items: [
          "Flask-Limiter → Rate limiting extension",
          "Flask-Talisman → HTTPS and security headers",
          "Secure headers → Content-Security-Policy, X-Frame-Options",
          "Secrets management → Environment variables, vault integration"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Performance & Scaling",
    subtitle: "Advanced Level (9-10 Months)",
    description: "Optimize and scale Flask applications",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Caching",
        items: [
          "Redis caching → In-memory data caching",
          "HTTP caching → ETag, Last-Modified headers",
          "Load balancing concepts → Traffic distribution strategies"
        ]
      },
      {
        title: "Production Servers",
        items: [
          "Gunicorn / uWSGI → WSGI HTTP servers",
          "Nginx reverse proxy → Load balancing and SSL termination"
        ]
      },
      {
        title: "Profiling",
        items: [
          "Flask profiler → Application performance monitoring",
          "Query analysis → Database query optimization"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "DevOps & Deployment",
    subtitle: "Expert Level (10-11 Months)",
    description: "Deploy Flask applications to production",
    color: "bg-lime-500",
    sections: [
      {
        title: "Docker",
        items: [
          "Dockerfile → Container image creation",
          "Docker compose → Multi-container applications"
        ]
      },
      {
        title: "CI/CD",
        items: [
          "GitHub Actions → Automated workflows and deployment"
        ]
      },
      {
        title: "Cloud",
        items: [
          "AWS EC2 → Virtual server hosting",
          "AWS RDS → Managed database service",
          "AWS S3 → Object storage for files",
          "GCP / Azure basics → Alternative cloud platforms"
        ]
      },
      {
        title: "Production Deployment",
        items: [
          "HTTPS → SSL/TLS certificate configuration",
          "Domain → Domain name configuration and DNS",
          "Nginx → Reverse proxy setup",
          "SSL → Certificate management with Let's Encrypt",
          "Project: Production Flask API on Cloud"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Advanced Integrations",
    subtitle: "Expert Level (11-12 Months)",
    description: "Integrate third-party services and APIs",
    color: "bg-rose-500",
    sections: [
      {
        title: "Payment Gateways",
        items: [
          "Stripe → Payment processing integration",
          "Razorpay → Payment gateway for India"
        ]
      },
      {
        title: "Email",
        items: [
          "SMTP → Direct email sending",
          "SendGrid → Email delivery service"
        ]
      },
      {
        title: "File Storage",
        items: [
          "S3 → AWS object storage integration",
          "Cloudinary → Media management platform"
        ]
      },
      {
        title: "Webhooks",
        items: [
          "Webhook handling → Receiving and processing callbacks"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Microservices with Flask",
    subtitle: "Expert Level",
    description: "Build distributed microservice architectures",
    color: "bg-violet-500",
    sections: [
      {
        title: "Service Communication",
        items: [
          "API Gateway → Single entry point for microservices",
          "Authentication service → Centralized auth microservice",
          "User service → User management microservice",
          "Order service → Order processing microservice",
          "Message broker → Async communication between services"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Observability",
    subtitle: "Expert Level",
    description: "Monitor and debug production applications",
    color: "bg-amber-500",
    sections: [
      {
        title: "Monitoring & Debugging",
        items: [
          "Logging → Structured logging with Python logging",
          "Tracing → Request tracing across services",
          "Metrics → Application performance metrics",
          "Sentry → Error tracking and monitoring",
          "Prometheus basics → Metrics collection system"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Industry-Ready Projects",
    subtitle: "Expert Level",
    description: "Build comprehensive portfolio projects",
    color: "bg-emerald-500",
    sections: [
      {
        title: "Portfolio Projects",
        items: [
          "SaaS Backend API → Multi-tenant application backend",
          "Learning Management System Backend → Course and user management",
          "E-commerce Backend → Product catalog, cart, orders, payments",
          "Real-time Chat Backend → WebSocket-based messaging system",
          "Payment System Backend → Transaction processing platform",
          "Job Portal Backend → Job listings and applications system"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Career Readiness",
    subtitle: "Expert Level",
    description: "Prepare for professional Flask development roles",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "Technical Skills",
        items: [
          "System design basics → Scalability and architecture patterns",
          "Database design → Schema design and optimization",
          "API design interviews → RESTful API best practices"
        ]
      },
      {
        title: "Career Preparation",
        items: [
          "Flask vs FastAPI discussion → Framework comparison knowledge",
          "Resume projects → Portfolio of deployed projects",
          "GitHub portfolio → Clean, documented repositories",
          "Swagger docs → API documentation for projects"
        ]
      }
    ]
  }
];