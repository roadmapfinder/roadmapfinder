// roadmapData.js - Python Web Developer Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Programming Foundations (Absolute Beginner)",
    subtitle: "Foundational Level",
    description: "Master Python basics and object-oriented programming",
    color: "bg-green-500",
    sections: [
      {
        title: "Python Core (Must-Know)",
        items: [
          "Variables, data types",
          "Lists, tuples, sets, dicts",
          "Conditions & loops",
          "Functions (args, kwargs)",
          "Exceptions (try/except)",
          "Modules & packages",
          "Virtual environments (venv, pip, pipx)",
          "📌 Pro tip: Write small scripts daily — calculators, CLI tools, data parsers"
        ]
      },
      {
        title: "Object-Oriented Python",
        items: [
          "Classes & objects",
          "__init__, __str__",
          "Inheritance & composition",
          "Abstract base classes",
          "Dataclasses",
          "SOLID basics",
          "🔧 Mini project: User & Role Management system (pure Python)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Web Fundamentals (Non-Negotiable)",
    subtitle: "Intermediate Level",
    description: "Understand how the web works and essential frontend basics",
    color: "bg-blue-500",
    sections: [
      {
        title: "How the Web Works",
        items: [
          "HTTP/HTTPS",
          "Request/Response lifecycle",
          "Status codes",
          "Headers, cookies, sessions",
          "REST vs GraphQL (conceptual)"
        ]
      },
      {
        title: "Frontend Basics (Enough to Survive)",
        items: [
          "HTML5 semantics",
          "CSS basics (Flexbox, Grid)",
          "Responsive design",
          "Basic JavaScript",
          "Fetch API / Axios",
          "JSON",
          "📌 You should be able to: Consume an API, Debug network requests, Build a simple UI"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Python Web Frameworks (Core Skill)",
    subtitle: "Advanced Level",
    description: "Master Flask, Django, and FastAPI for web development",
    color: "bg-purple-500",
    sections: [
      {
        title: "Flask (Micro-Framework)",
        items: [
          "Routing & views",
          "Jinja templates",
          "Blueprints",
          "Request/Response objects",
          "Forms & validation",
          "Sessions & cookies",
          "Error handling",
          "Flask extensions",
          "📦 Project: Blog / URL shortener / Notes app"
        ]
      },
      {
        title: "Django (Batteries Included)",
        items: [
          "Django project structure",
          "Models & ORM",
          "Migrations",
          "Admin panel",
          "Views (FBV & CBV)",
          "Templates",
          "Authentication & permissions",
          "Middleware",
          "Signals",
          "Static & media files",
          "📦 Project: Job Portal / LMS / E-commerce backend"
        ]
      },
      {
        title: "FastAPI (Modern, High-Performance)",
        items: [
          "Async vs sync",
          "Pydantic models",
          "Dependency Injection",
          "Request validation",
          "OAuth2 & JWT",
          "OpenAPI / Swagger",
          "Background tasks",
          "WebSockets",
          "📦 Project: SaaS backend API, Real-time chat API, AI-powered API"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Databases (Production Level)",
    subtitle: "Expert Level",
    description: "SQL, ORM mastery, and NoSQL fundamentals",
    color: "bg-red-500",
    sections: [
      {
        title: "SQL (Very Important)",
        items: [
          "PostgreSQL (preferred)",
          "Schema design",
          "Indexes",
          "Joins & subqueries",
          "Transactions",
          "ACID properties"
        ]
      },
      {
        title: "ORM Mastery",
        items: [
          "Django ORM",
          "SQLAlchemy",
          "Query optimization",
          "N+1 problem",
          "Migrations strategy"
        ]
      },
      {
        title: "NoSQL (When Needed)",
        items: [
          "Redis (cache, queues)",
          "MongoDB (documents)",
          "When NOT to use NoSQL"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Authentication, Security & APIs",
    subtitle: "Production Level",
    description: "Implement secure authentication and design robust APIs",
    color: "bg-orange-500",
    sections: [
      {
        title: "Auth Systems",
        items: [
          "Session-based auth",
          "JWT",
          "OAuth2",
          "Social login",
          "RBAC / ABAC"
        ]
      },
      {
        title: "Web Security (Critical)",
        items: [
          "SQL injection",
          "XSS / CSRF",
          "CORS",
          "Rate limiting",
          "Password hashing (bcrypt, argon2)",
          "Secrets management",
          "📌 If you skip this → you are not industry-ready"
        ]
      },
      {
        title: "API Design",
        items: [
          "REST best practices",
          "Pagination",
          "Filtering & sorting",
          "Versioning",
          "Error standards",
          "API documentation"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Async, Performance & Scaling",
    subtitle: "Advanced Level",
    description: "Optimize performance with async, caching, and scaling strategies",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Async Python",
        items: [
          "asyncio",
          "async/await",
          "Async DB drivers",
          "Background jobs"
        ]
      },
      {
        title: "Caching & Queues",
        items: [
          "Redis caching",
          "Celery + Redis/RabbitMQ",
          "Task retries",
          "Cron jobs"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "Profiling",
          "DB query optimization",
          "Caching strategies",
          "Load testing (Locust, k6)"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing (Professional Standard)",
    subtitle: "Production Level",
    description: "Write comprehensive tests for production-ready applications",
    color: "bg-pink-500",
    sections: [
      {
        title: "Testing Stack",
        items: [
          "pytest",
          "Unit tests",
          "Integration tests",
          "API tests",
          "Mocking",
          "Test coverage",
          "📌 Companies expect this"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "DevOps & Deployment (Industry Ready)",
    subtitle: "Mastery Level",
    description: "Deploy, containerize, and manage applications in production",
    color: "bg-teal-500",
    sections: [
      {
        title: "Linux & Servers",
        items: [
          "Linux basics",
          "File permissions",
          "Processes",
          "Environment variables"
        ]
      },
      {
        title: "Docker & Containers",
        items: [
          "Dockerfiles",
          "Docker Compose",
          "Multi-stage builds",
          "Environment separation"
        ]
      },
      {
        title: "Web Servers",
        items: [
          "Gunicorn",
          "Uvicorn",
          "Nginx (reverse proxy)"
        ]
      },
      {
        title: "Cloud & Deployment",
        items: [
          "AWS / GCP / Azure basics",
          "EC2 / VM deployment",
          "CI/CD pipelines",
          "GitHub Actions",
          "Environment configs",
          "📦 Deploy: Django app, FastAPI app, PostgreSQL + Redis"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Architecture & Advanced Topics",
    subtitle: "Expert Level",
    description: "System design, design patterns, and monitoring",
    color: "bg-yellow-500",
    sections: [
      {
        title: "System Design",
        items: [
          "Monolith vs Microservices",
          "API Gateway",
          "Message queues",
          "Event-driven systems",
          "Horizontal scaling"
        ]
      },
      {
        title: "Design Patterns",
        items: [
          "MVC / MVT",
          "Repository pattern",
          "Service layer",
          "Factory & Singleton"
        ]
      },
      {
        title: "Logging & Monitoring",
        items: [
          "Structured logging",
          "Sentry",
          "Prometheus basics",
          "Health checks"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Industry Projects & Career Prep",
    subtitle: "Mastery Level",
    description: "Build portfolio projects and prepare for industry roles",
    color: "bg-gray-800",
    sections: [
      {
        title: "Portfolio-Grade Projects (Most Important)",
        items: [
          "SaaS Application → Auth, Payments, Roles, REST API, Deployed",
          "High-Performance API → FastAPI, Async DB, Redis caching",
          "Real-World Clone → Twitter / Notion / Shopify backend",
          "📌 Code quality > quantity"
        ]
      },
      {
        title: "Git & Collaboration",
        items: [
          "Git workflows",
          "PR reviews",
          "Commit hygiene"
        ]
      },
      {
        title: "Interview Topics",
        items: [
          "Python internals",
          "Web security",
          "DB optimization",
          "System design",
          "Debugging production issues"
        ]
      },
      {
        title: "Resume & GitHub",
        items: [
          "Clean README",
          "Architecture diagrams",
          "Deployed links",
          "API docs"
        ]
      },
      {
        title: "Final Skillset Checklist (Industry Ready)",
        items: [
          "✅ Build secure APIs",
          "✅ Design databases",
          "✅ Write tests",
          "✅ Deploy to cloud",
          "✅ Scale apps",
          "✅ Debug production issues",
          "✅ Collaborate in teams",
          "👉 This is what companies pay for"
        ]
      }
    ]
  }
];