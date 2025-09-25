// roadmapData.js - Contains all roadmap phases and data

export const phases = [
  {
    id: 1,
    title: "Fundamentals",
    subtitle: "Beginner Level",
    description: "Build core understanding of web and server technologies",
    color: "bg-green-500",
    estimatedTime: "2-4 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "How the web works (client-server, request/response, DNS, hosting)",
          "HTTP/HTTPS, methods (GET, POST, PUT, DELETE, PATCH)",
          "Linux basics (file system, permissions, shell commands)",
          "Git & GitHub (init, clone, branch, merge, pull, rebase, PRs)"
        ]
      },
      {
        title: "Project",
        items: [
          "Host a simple static site on GitHub Pages",
          "Practice Linux commands in terminal/VM"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Programming & Core Backend Concepts",
    subtitle: "Beginner → Junior Level",
    description: "Master programming fundamentals and API development",
    color: "bg-orange-500",
    estimatedTime: "4-8 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Pick one backend language (JavaScript/TypeScript, Python, Java, Go)",
          "Language fundamentals: variables, functions, loops, OOP, async/await",
          "Build REST APIs: request handling, routing, controllers",
          "Error handling and logging"
        ]
      },
      {
        title: "Project",
        items: [
          "To-Do API → CRUD operations with in-memory storage"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Databases & Persistence",
    subtitle: "Junior Level",
    description: "Learn data storage and management fundamentals",
    color: "bg-blue-500",
    estimatedTime: "6-10 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Relational databases: PostgreSQL/MySQL",
          "NoSQL databases: MongoDB",
          "Schema design, ER diagrams",
          "Queries, joins, indexes, transactions",
          "ORMs (Prisma, Sequelize, Hibernate, SQLAlchemy)"
        ]
      },
      {
        title: "Project",
        items: [
          "Extend To-Do API with database integration",
          "Add pagination, filtering, and user-task relationships"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backend Frameworks & API Design",
    subtitle: "Mid-Level",
    description: "Build robust APIs with professional frameworks",
    color: "bg-purple-500",
    estimatedTime: "8-12 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Frameworks (Express.js, NestJS, Django, FastAPI, Spring Boot, Gin)",
          "REST API best practices (naming, versioning, status codes)",
          "Authentication & Authorization (JWT, OAuth2, sessions)",
          "Middleware, rate limiting, CORS"
        ]
      },
      {
        title: "Project",
        items: [
          "User Auth API → login/register with JWT",
          "Role-based access (admin vs user)"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Backend & Scalability",
    subtitle: "Mid-Level → Advanced",
    description: "Build scalable, high-performance backend systems",
    color: "bg-yellow-500",
    estimatedTime: "10-16 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Caching (Redis, CDN)",
          "Message brokers (RabbitMQ, Kafka)",
          "File storage (AWS S3, Cloudinary)",
          "Search engines (Elasticsearch)",
          "WebSockets for real-time apps",
          "GraphQL fundamentals"
        ]
      },
      {
        title: "System Design",
        items: [
          "Monoliths vs Microservices",
          "Load balancers, reverse proxies",
          "Horizontal vs vertical scaling",
          "CAP theorem, Event-driven architecture"
        ]
      },
      {
        title: "Project",
        items: [
          "E-Commerce API → Products, cart, orders, payments",
          "Add caching, file uploads, background jobs (email sending)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    subtitle: "Advanced Level",
    description: "Master deployment and infrastructure management",
    color: "bg-red-500",
    estimatedTime: "6-10 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Containerization (Docker, Docker Compose)",
          "CI/CD pipelines (GitHub Actions, Jenkins)",
          "Cloud hosting (AWS, GCP, Azure, Vercel, Railway)",
          "Monitoring & logging (Prometheus, Grafana, ELK)"
        ]
      },
      {
        title: "Project",
        items: [
          "Containerize E-Commerce API",
          "Deploy with CI/CD pipeline",
          "Add monitoring dashboard"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Industry-Ready Mastery",
    subtitle: "Senior-Level Prep",
    description: "Be industry-ready with enterprise-level practices",
    color: "bg-indigo-500",
    estimatedTime: "12-20 weeks",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Testing → unit, integration, E2E (Jest, Mocha, PyTest, JUnit)",
          "Security → OWASP Top 10, SQL injection prevention, XSS, CSRF",
          "Software architecture → Domain-Driven Design, Event-driven, Microservices",
          "Documentation & collaboration (API docs, Swagger/OpenAPI, teamwork)",
          "Performance optimization & scaling"
        ]
      },
      {
        title: "Portfolio Projects (Industry-Ready)",
        items: [
          "Full E-Commerce Platform (users, products, payments, admin panel)",
          "Social Media API (posts, likes, comments, notifications, WebSockets)",
          "SaaS App (multi-tenant, subscriptions, billing with Stripe)"
        ]
      }
    ]
  }
];

// Learning resources and recommendations
export const learningResources = {
  books: [
    "Clean Code by Robert C. Martin",
    "System Design Interview by Alex Xu",
    "Designing Data-Intensive Applications by Martin Kleppmann",
    "Building Microservices by Sam Newman"
  ],
  platforms: [
    "freeCodeCamp",
    "The Odin Project",
    "Coursera",
    "Udemy",
    "Pluralsight",
    "AWS Training"
  ],
  practiceProjects: [
    "Build a REST API for a library management system",
    "Create a real-time chat application",
    "Develop a URL shortener service",
    "Build a basic social media backend",
    "Create an e-commerce API with payment integration"
  ]
};

// Popular tech stacks by language
export const techStacks = {
  javascript: {
    name: "JavaScript/TypeScript",
    frameworks: ["Express.js", "NestJS", "Fastify"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    tools: ["Node.js", "npm/yarn", "Jest", "Docker"]
  },
  python: {
    name: "Python",
    frameworks: ["Django", "FastAPI", "Flask"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    tools: ["pip", "pytest", "Docker", "Celery"]
  },
  java: {
    name: "Java",
    frameworks: ["Spring Boot", "Spring Framework"],
    databases: ["PostgreSQL", "MySQL", "H2"],
    tools: ["Maven", "Gradle", "JUnit", "Docker"]
  },
  go: {
    name: "Go",
    frameworks: ["Gin", "Echo", "Fiber"],
    databases: ["PostgreSQL", "Redis", "MongoDB"],
    tools: ["go mod", "Docker", "testify"]
  }
};

export default {
  phases,
  learningResources,
  techStacks
};