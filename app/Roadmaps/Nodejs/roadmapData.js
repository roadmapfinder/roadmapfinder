// Node.js Mastery Roadmap data structured according to the roadmap content
export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Phase 0",
    description: "Build a solid foundation in JavaScript, web development, and version control.",
    color: "bg-gray-500",
    sections: [
      {
        title: "💻 JavaScript Fundamentals",
        items: [
          "Variables, Data Types, Operators",
          "Functions, Scope, Closures",
          "Arrays & Objects manipulation",
          "ES6+ Features: let, const, arrow functions, destructuring, template literals",
          "Async JavaScript: callbacks, Promises, async/await",
          "Modules: import/export, CommonJS"
        ]
      },
      {
        title: "🌐 Basic Web Development",
        items: [
          "HTML & CSS fundamentals",
          "Browser DOM manipulation",
          "HTTP basics: GET, POST, PUT, DELETE",
          "JSON parsing & API concepts"
        ]
      },
      {
        title: "🔀 Version Control",
        items: [
          "Git basics: commit, branch, merge",
          "GitHub/GitLab setup and collaboration",
          ".gitignore, pull requests, code reviews"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner Node.js",
    subtitle: "Phase 1 (0-2 months)",
    description: "Get comfortable building basic backend applications with Node.js.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⚙️ Core Concepts",
        items: [
          "Node.js runtime & architecture",
          "V8 engine, Event Loop, Single-threaded nature",
          "Node.js modules system",
          "Built-in modules: fs, http, path, os, events",
          "NPM & Yarn package managers",
          "Installing packages, package.json, semantic versioning",
          "Creating basic CLI apps"
        ]
      },
      {
        title: "📚 Key Learning",
        items: [
          "Asynchronous programming (callbacks, Promises, async/await)",
          "Error handling in Node.js",
          "Environment variables: dotenv",
          "Simple HTTP server using http module",
          "Introduction to Node REPL and debugging"
        ]
      },
      {
        title: "🎯 Beginner Projects",
        items: [
          "✅ CLI Todo App (file-based)",
          "✅ Basic JSON-based API (CRUD)",
          "✅ Simple HTTP server responding with static HTML"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Node.js",
    subtitle: "Phase 2 (2-5 months)",
    description: "Build real-world REST APIs and understand Node.js ecosystem tools.",
    color: "bg-green-500",
    sections: [
      {
        title: "🚀 Frameworks",
        items: [
          "Express.js (most popular backend framework)",
          "Routing, Middleware, Request & Response handling",
          "Error handling patterns",
          "Static file serving",
          "Query params & URL params",
          "Other Frameworks: Fastify, NestJS (TypeScript & enterprise)"
        ]
      },
      {
        title: "🗄️ Databases",
        items: [
          "Relational: PostgreSQL or MySQL (via knex.js or sequelize)",
          "NoSQL: MongoDB (via mongoose)",
          "CRUD operations & schema design",
          "Data validation: joi or yup"
        ]
      },
      {
        title: "🔐 Authentication & Security",
        items: [
          "JWT authentication implementation",
          "Session-based authentication",
          "Password hashing: bcrypt",
          "Environment config best practices",
          "Input validation & sanitization",
          "CORS, Helmet, Rate limiting"
        ]
      },
      {
        title: "📡 API Design",
        items: [
          "RESTful API principles",
          "HTTP status codes",
          "Request/response structure",
          "Error handling patterns"
        ]
      },
      {
        title: "🧪 Testing",
        items: [
          "Unit tests with Jest",
          "Integration tests with Supertest"
        ]
      },
      {
        title: "🚀 Intermediate Projects",
        items: [
          "✅ REST API for Todo/Blog App with MongoDB/PostgreSQL",
          "✅ Authentication system with JWT & password reset",
          "✅ File upload/download server",
          "✅ URL Shortener API"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Node.js",
    subtitle: "Phase 3 (5-8 months)",
    description: "Build scalable, production-ready backend systems.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⚡ Advanced Node.js",
        items: [
          "Event-driven architecture & EventEmitter",
          "Streams (Readable, Writable, Transform)",
          "Buffers & binary data",
          "Child processes",
          "Cluster module & multi-threading basics",
          "Performance optimization & memory profiling",
          "Error handling & logging: winston / pino",
          "Graceful shutdown of Node.js servers"
        ]
      },
      {
        title: "🗃️ Databases & ORMs",
        items: [
          "Advanced querying techniques",
          "Database transactions",
          "Indexing & query optimization",
          "Caching with Redis"
        ]
      },
      {
        title: "🔌 WebSockets & Real-Time",
        items: [
          "Socket.io for real-time apps",
          "Pub/Sub architecture",
          "Notifications, chat apps, live updates"
        ]
      },
      {
        title: "⏰ Task Scheduling",
        items: [
          "Cron jobs (node-cron)",
          "Background workers (bull with Redis)"
        ]
      },
      {
        title: "✅ Testing & Quality",
        items: [
          "Unit, integration, e2e testing",
          "Test coverage, mocks, stubs",
          "Linting & formatting: ESLint, Prettier"
        ]
      },
      {
        title: "🐳 DevOps Basics",
        items: [
          "Dockerizing Node.js apps",
          "CI/CD pipelines (GitHub Actions / GitLab CI)",
          "Environment-based configurations",
          "Logging & monitoring (PM2, LogRocket, Sentry)"
        ]
      },
      {
        title: "🏗️ Advanced Projects",
        items: [
          "✅ Real-time Chat App",
          "✅ E-commerce backend with payment integration (Stripe/PayPal)",
          "✅ Multi-user blog platform with admin panel",
          "✅ Background job processing system (email notifications, reports)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Expert / Industry-Ready Node.js",
    subtitle: "Phase 4 (8-12 months)",
    description: "Be capable of building enterprise-grade Node.js applications.",
    color: "bg-red-500",
    sections: [
      {
        title: "🏛️ Architectural Patterns",
        items: [
          "MVC / Layered architecture",
          "Microservices vs Monolith",
          "Domain-driven design (DDD)",
          "Clean code & SOLID principles"
        ]
      },
      {
        title: "🔗 Advanced APIs",
        items: [
          "GraphQL with Apollo Server",
          "API versioning & documentation (Swagger / OpenAPI)",
          "Rate limiting, throttling, and API security best practices"
        ]
      },
      {
        title: "📈 Scalability & Performance",
        items: [
          "Load balancing strategies",
          "Horizontal & vertical scaling",
          "Caching strategies (Redis, in-memory cache)",
          "Asynchronous job queues & workers",
          "Event-driven microservices (Kafka, RabbitMQ, NATS)"
        ]
      },
      {
        title: "📊 Observability & Monitoring",
        items: [
          "Logging & tracing",
          "Metrics & dashboards (Prometheus + Grafana)",
          "Error monitoring (Sentry, LogRocket)",
          "Profiling & debugging memory leaks"
        ]
      },
      {
        title: "☁️ Cloud & Deployment",
        items: [
          "AWS / GCP / Azure basics for Node.js apps",
          "Serverless deployment (AWS Lambda, Vercel)",
          "Docker & Kubernetes for container orchestration",
          "CI/CD pipelines for production"
        ]
      },
      {
        title: "🔒 Testing & Security",
        items: [
          "Security audits & pen-testing basics",
          "Unit, integration, e2e testing",
          "Load testing (Artillery / k6)"
        ]
      },
      {
        title: "🏆 Expert Projects",
        items: [
          "✅ SaaS application backend (multi-tenant)",
          "✅ Real-time collaborative app (Google Docs clone)",
          "✅ Microservices architecture with event-driven communication",
          "✅ Payment gateway integration with multi-currency support",
          "✅ Cloud-deployed, production-ready backend with CI/CD"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Modern Trends & Ecosystem",
    subtitle: "Phase 5",
    description: "Stay current with modern Node.js trends and technologies.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔥 Modern Trends",
        items: [
          "TypeScript with Node.js (industry standard)",
          "Edge computing & serverless Node.js",
          "API-first development & headless CMS",
          "GraphQL adoption for flexible APIs",
          "Fullstack frameworks integrating Node.js: Next.js, Remix"
        ]
      },
      {
        title: "📚 Additional Resources",
        items: [
          "Official Docs: Node.js (nodejs.org), Express (expressjs.com)",
          "Books: Node.js Design Patterns, Pro Node.js for Developers",
          "Courses: Udemy, Egghead, FrontendMasters (2025 updated)",
          "Practice: LeetCode (JS + Backend), HackerRank (Node.js challenges)",
          "Build real-world projects on GitHub"
        ]
      }
    ]
  }
];