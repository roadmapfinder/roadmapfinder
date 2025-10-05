export const phases = [
  {
    id: 1,
    title: "Web & JavaScript Foundations",
    subtitle: "Beginner Level (0-1 Month)",
    description: "Master core web and JavaScript concepts before diving into Express",
    color: "bg-gray-600",
    sections: [
      {
        title: "Web Basics",
        items: [
          "Server & Client → Understanding the request-response cycle",
          "HTTP protocols → Methods (GET, POST, PUT, DELETE), headers, status codes",
          "Data formats → JSON vs XML comparison and usage",
          "API types → REST APIs vs GraphQL vs SOAP architectures"
        ]
      },
      {
        title: "JavaScript Core (ES6+)",
        items: [
          "Modern syntax → let/const, arrow functions, destructuring",
          "Async programming → Promises, async/await patterns",
          "Modules → import/export, CommonJS vs ES modules",
          "OOP concepts → Classes, prototypes, inheritance",
          "Error handling → try/catch blocks, error propagation",
          "Data manipulation → Array methods, Object operations"
        ]
      },
      {
        title: "Tools & Practice",
        items: [
          "Node.js (LTS) → Runtime environment setup",
          "Package managers → npm or yarn for dependency management",
          "VS Code → IDE setup and essential extensions",
          "API testing → Postman / Thunder Client",
          "Practice: File operations (fs), event emitters, timers",
          "Practice: HTTP requests with node-fetch and axios"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core Express.js Fundamentals",
    subtitle: "Beginner Level (1-2 Months)",
    description: "Build servers and routes with Express.js framework",
    color: "bg-green-500",
    sections: [
      {
        title: "Express Basics",
        items: [
          "Setup → Installing and configuring Express application",
          "Routing → GET, POST, PUT, DELETE method handlers",
          "Parameters → Route parameters and query params handling",
          "Static files → Serving static content with express.static()",
          "Body parsing → express.json(), express.urlencoded() middleware"
        ]
      },
      {
        title: "Middleware & Architecture",
        items: [
          "Middleware types → Built-in, custom, and third-party middleware",
          "Error handling → Error handling middleware patterns",
          "MVC structure → Model-View-Controller folder organization",
          "nodemon → Auto-restart during development",
          "dotenv → Environment variable management"
        ]
      },
      {
        title: "Essential Libraries",
        items: [
          "morgan → HTTP request logging",
          "cors → Cross-origin resource sharing configuration",
          "helmet → Security headers protection",
          "Projects: Basic CRUD API (Books, Users, Notes)",
          "Projects: Todo App Backend, File Upload API with Multer"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Databases & Models",
    subtitle: "Intermediate Level (2-3 Months)",
    description: "Persist and query data using modern ORMs and databases",
    color: "bg-blue-500",
    sections: [
      {
        title: "Database Concepts",
        items: [
          "Database types → Relational vs NoSQL comparison",
          "CRUD operations → Create, Read, Update, Delete in databases",
          "Schema design → Data modeling and relationships",
          "Connection pooling → Efficient database connections",
          "Query optimization → Performance tuning basics"
        ]
      },
      {
        title: "MongoDB Stack",
        items: [
          "MongoDB → Document-based NoSQL database",
          "Mongoose → ODM for MongoDB, schema definitions",
          "Schema management → Model creation, validation, hooks",
          "Migrations → Database version control and updates"
        ]
      },
      {
        title: "PostgreSQL Stack",
        items: [
          "PostgreSQL → Relational database management",
          "Prisma → Modern ORM with type safety",
          "Migrations → Schema migrations and seeding",
          "Projects: Blog API (Users, Posts, Comments)",
          "Projects: Pagination, sorting, filtering endpoints"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Authentication & Authorization",
    subtitle: "Intermediate Level (3-4 Months)",
    description: "Build secure, production-ready auth systems",
    color: "bg-purple-500",
    sections: [
      {
        title: "Auth Concepts",
        items: [
          "Authentication vs Authorization → Identity verification vs access control",
          "Session types → Cookies vs JWT vs OAuth comparison",
          "RBAC → Role-based access control implementation",
          "Token management → Refresh tokens & session handling",
          "Password security → Hashing with bcrypt"
        ]
      },
      {
        title: "Auth Implementation",
        items: [
          "jsonwebtoken → JWT generation and verification",
          "bcryptjs or argon2 → Password hashing algorithms",
          "passport.js → Authentication middleware for OAuth",
          "cookie-parser → Cookie handling and parsing",
          "Email workflows → Verification, password reset flows"
        ]
      },
      {
        title: "Projects",
        items: [
          "Auth API → Register, login, forgot password endpoints",
          "JWT implementation → Access and refresh token flow",
          "OAuth Login → Google, GitHub social authentication",
          "Protected routes → Middleware for route protection"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "API Design & Advanced Patterns",
    subtitle: "Advanced Level (4-6 Months)",
    description: "Scalable, well-structured application architecture",
    color: "bg-red-500",
    sections: [
      {
        title: "REST API Best Practices",
        items: [
          "Status codes → Proper HTTP status code usage",
          "API versioning → Version management strategies",
          "Service pattern → Business logic separation",
          "Repository pattern → Data access layer abstraction",
          "Centralized errors → Global error handling"
        ]
      },
      {
        title: "Error Handling & Validation",
        items: [
          "Async errors → express-async-errors handling",
          "Custom errors → Error class hierarchy",
          "express-async-handler → Async route wrapper",
          "joi / zod → Request validation and sanitization",
          "Input sanitization → XSS prevention, data cleaning"
        ]
      },
      {
        title: "Logging & Performance",
        items: [
          "winston or pino → Production logging libraries",
          "compression → Response compression middleware",
          "Performance optimization → Caching strategies, query optimization",
          "Projects: E-commerce backend API",
          "Projects: Modular controllers (User, Product, Order)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Testing & Debugging",
    subtitle: "Advanced Level (6-7 Months)",
    description: "Write reliable, testable Express code",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Testing Fundamentals",
        items: [
          "Test types → Unit vs Integration vs E2E testing",
          "TDD approach → Test-driven development workflow",
          "Mocking → Database and external service mocking",
          "Code coverage → Coverage reporting and thresholds"
        ]
      },
      {
        title: "Testing Tools",
        items: [
          "jest / mocha → Testing frameworks and runners",
          "supertest → HTTP assertion library for APIs",
          "sinon → Mocks, spies, and stubs",
          "Test organization → Setup, teardown, fixtures"
        ]
      },
      {
        title: "Projects",
        items: [
          "Unit tests → Controller and service layer testing",
          "Integration tests → Full API endpoint testing",
          "Mock databases → In-memory database for tests",
          "CI integration → Automated testing in pipelines"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Production & Deployment",
    subtitle: "Advanced Level (7-9 Months)",
    description: "Make your application production-grade and scalable",
    color: "bg-orange-500",
    sections: [
      {
        title: "Production Configuration",
        items: [
          "Environment config → Multi-environment variable management",
          "Load balancing → Distributing traffic across instances",
          "Clustering → Node.js cluster module for scaling",
          "Rate limiting → DDOS protection with express-rate-limit",
          "Error tracking → Sentry integration for monitoring"
        ]
      },
      {
        title: "Caching & Performance",
        items: [
          "Redis → In-memory caching and session storage",
          "Cache strategies → Cache invalidation, TTL policies",
          "Session store → Redis-backed session management",
          "Performance monitoring → APM tools integration"
        ]
      },
      {
        title: "Deployment & DevOps",
        items: [
          "Process managers → pm2 / forever for production",
          "Reverse proxy → nginx configuration and load balancing",
          "Containerization → Docker and Docker Compose",
          "Cloud platforms → AWS EC2, Render, Railway, Vercel",
          "CI/CD pipelines → Automated deployment workflows",
          "Projects: Deploy Express API to cloud with monitoring"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Real-World Industry Skills",
    subtitle: "Expert Level (9-12 Months)",
    description: "Master the ecosystem around Express.js",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Microservices Architecture",
        items: [
          "Service decomposition → Breaking monoliths into services",
          "API Gateway → Kong, NGINX gateway patterns",
          "Service discovery → Dynamic service registration",
          "Inter-service communication → REST, gRPC, message queues"
        ]
      },
      {
        title: "Message Queues & Events",
        items: [
          "RabbitMQ → Message broker, queue management",
          "Apache Kafka → Event streaming platform",
          "Event-driven architecture → Pub/sub patterns",
          "Async processing → Background jobs, workers"
        ]
      },
      {
        title: "Advanced Patterns & Observability",
        items: [
          "Domain-driven design → DDD principles and patterns",
          "CI/CD automation → GitHub Actions, Jenkins pipelines",
          "Testing in CI → Automated test execution",
          "Observability → Metrics, logging, tracing (OpenTelemetry)",
          "Performance monitoring → Prometheus, Grafana dashboards"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Bonus Learning Tracks",
    subtitle: "Expert Level",
    description: "Complementary skills for full-stack Express development",
    color: "bg-pink-500",
    sections: [
      {
        title: "DevOps & Infrastructure",
        items: [
          "Docker → Container creation, multi-stage builds",
          "CI/CD → GitHub Actions, GitLab CI, Jenkins",
          "AWS services → EC2, Lambda, ECS, RDS, S3",
          "Nginx → Reverse proxy, load balancing, SSL"
        ]
      },
      {
        title: "Real-time & WebSockets",
        items: [
          "WebSocket protocol → Bidirectional communication",
          "Socket.io → Real-time event-based communication",
          "Projects: Chat server, live notifications",
          "Scaling WebSockets → Redis adapter, sticky sessions"
        ]
      },
      {
        title: "Monitoring & Documentation",
        items: [
          "Prometheus → Metrics collection and alerting",
          "Grafana → Dashboard visualization",
          "Swagger / OpenAPI → API documentation generation",
          "Postman collections → API documentation and testing"
        ]
      },
      {
        title: "Security Best Practices",
        items: [
          "Helmet → Security headers middleware",
          "CORS → Cross-origin resource sharing policies",
          "XSS prevention → Input sanitization, CSP",
          "SQL injection → Parameterized queries, ORMs",
          "Rate limiting → Brute force attack prevention"
        ]
      }
    ]
  }
];