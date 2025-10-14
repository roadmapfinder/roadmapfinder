export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level",
    description: "Understand how the web works and become fluent in core front-end + basic backend concepts",
    color: "bg-blue-500",
    sections: [
      {
        title: "🌐 Internet & Web Fundamentals",
        items: [
          "How the web works (HTTP, DNS, hosting, IP, domain)",
          "Browser rendering process",
          "Client vs. server architecture",
          "REST & API basics",
          "JSON, XML data formats",
          "📘 HTTP methods (GET, POST, PUT, DELETE)",
          "📘 Status codes and CORS",
          "📘 Request/Response cycle"
        ]
      },
      {
        title: "🧩 HTML5",
        items: [
          "Semantic elements and accessibility",
          "SEO best practices",
          "Forms & validation",
          "Modern HTML5 features"
        ]
      },
      {
        title: "🎨 CSS3",
        items: [
          "Box model, flexbox, grid",
          "Responsive design (mobile-first)",
          "Animations & transitions",
          "SCSS/SASS basics"
        ]
      },
      {
        title: "⚡ JavaScript (ES6+)",
        items: [
          "Variables, loops, functions, arrays, objects",
          "DOM manipulation",
          "Fetch API / Async-Await",
          "Promises, closures, modules",
          "Event loop & callbacks",
          "🧠 Execution context & hoisting",
          "🧠 Prototype chain",
          "🧠 Async programming patterns"
        ]
      },
      {
        title: "Version Control",
        items: [
          "Git & GitHub fundamentals",
          "Branching, merging, pull requests",
          "Collaboration workflows"
        ]
      },
      {
        title: "🧩 Tools",
        items: [
          "Postman or Hoppscotch",
          "Chrome DevTools",
          "Browser network inspector"
        ]
      },
      {
        title: "🎯 Beginner Projects",
        items: [
          "Portfolio page with semantic HTML",
          "To-Do App with DOM manipulation",
          "Quiz App with JavaScript logic",
          "Weather Fetcher (API integration)",
          "Responsive Landing Page with forms",
          "HTTP request visualizer"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Modern Frontend Frameworks",
    subtitle: "Intermediate Level",
    description: "Master modern frontend development with React and the ecosystem",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced JavaScript & TypeScript",
        items: [
          "Closures, prototypes, this keyword",
          "Event loop deep dive",
          "ES modules and error handling",
          "TypeScript: types, interfaces, generics",
          "TypeScript utility types",
          "LocalStorage, SessionStorage, cookies"
        ]
      },
      {
        title: "⚛️ React.js Core",
        items: [
          "JSX & components",
          "Props & state management",
          "Lifecycle hooks (useEffect, useState)",
          "React Router for navigation",
          "Context API for global state",
          "Functional components best practices"
        ]
      },
      {
        title: "🧩 Advanced React",
        items: [
          "Custom hooks creation",
          "Memoization (useMemo, useCallback)",
          "Performance optimization techniques",
          "Error boundaries",
          "Server Components (Next.js)",
          "useContext for state sharing"
        ]
      },
      {
        title: "📘 React Ecosystem & Tools",
        items: [
          "Next.js (SSR, SSG, ISR)",
          "File-based routing in Next.js",
          "API routes and middleware",
          "Tailwind CSS (utility-first styling)",
          "Zustand / Redux Toolkit for state",
          "TanStack Query (React Query)",
          "Framer Motion for animations",
          "Shadcn UI and Material UI components"
        ]
      },
      {
        title: "Testing & Quality",
        items: [
          "Unit testing with Jest",
          "Component testing with React Testing Library",
          "E2E testing with Cypress/Playwright"
        ]
      },
      {
        title: "🎯 Intermediate Projects",
        items: [
          "Blog App with Next.js",
          "Dashboard with Charts (Recharts)",
          "E-commerce front-end with cart",
          "Weather App with API integration",
          "E-commerce product catalog",
          "Blog with Markdown support"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    subtitle: "Intermediate → Advanced",
    description: "Learn how to build secure, scalable APIs and work with databases",
    color: "bg-green-500",
    sections: [
      {
        title: "⚙️ Backend Core Concepts",
        items: [
          "Client-Server model",
          "RESTful APIs design",
          "Authentication & Authorization",
          "Middleware & routing",
          "Error handling strategies",
          "Logging and debugging"
        ]
      },
      {
        title: "⚡ Node.js + Express.js",
        items: [
          "Event loop and async programming",
          "File system and streams",
          "Express Router setup",
          "Environment variables management",
          "MVC pattern implementation",
          "JWT Authentication",
          "Multer (file uploads)",
          "Session management"
        ]
      },
      {
        title: "🧱 Database Fundamentals",
        items: [
          "SQL vs NoSQL comparison",
          "Relational design (PostgreSQL/MySQL)",
          "NoSQL design (MongoDB)",
          "CRUD operations mastery",
          "Indexes & Joins optimization",
          "Transactions and ACID properties",
          "Triggers and stored procedures",
          "Aggregation pipeline (MongoDB)"
        ]
      },
      {
        title: "🗄️ ORMs & Database Tools",
        items: [
          "ORM: Prisma (modern, TypeScript-friendly)",
          "Sequelize for SQL databases",
          "TypeORM for enterprise apps",
          "Query optimization techniques"
        ]
      },
      {
        title: "🔒 Authentication & Security",
        items: [
          "JWT / OAuth2 / Session Auth",
          "Password hashing (bcrypt)",
          "Rate limiting and Helmet",
          "CORS configuration",
          "HTTPS, CSRF, XSS prevention",
          "Security best practices",
          "Validation (Joi/Zod)"
        ]
      },
      {
        title: "🧠 Advanced APIs & Architecture",
        items: [
          "REST vs GraphQL comparison",
          "API versioning strategies",
          "Pagination and filtering",
          "File storage (Cloudinary / AWS S3)",
          "WebSockets for real-time data",
          "Background jobs (BullMQ / RabbitMQ)",
          "GraphQL (Apollo Server/Client, Nexus)",
          "gRPC for microservices"
        ]
      },
      {
        title: "Caching & Performance",
        items: [
          "Redis for caching",
          "Query optimization",
          "Database indexing strategies",
          "Connection pooling"
        ]
      },
      {
        title: "🧰 Development Tools",
        items: [
          "Nodemon for auto-restart",
          "PM2 process manager",
          "ESLint + Prettier",
          "Environment configs",
          "Debugging tools"
        ]
      },
      {
        title: "🎯 Backend Projects",
        items: [
          "REST API for Notes or Tasks",
          "Auth System with JWT",
          "Blog API with MongoDB + Express",
          "Chat API with Socket.io",
          "E-commerce Backend with payments",
          "Social Media API (CRUD, comments, likes)",
          "Chat app with real-time Socket.IO",
          "Social media clone (auth, posts, likes, comments)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Full Stack Integration",
    subtitle: "Intermediate → Advanced",
    description: "Combine frontend + backend into real-world production systems",
    color: "bg-yellow-500",
    sections: [
      {
        title: "⚙️ Connecting Frontend & Backend",
        items: [
          "Fetching data with Axios / Fetch API",
          "Handling authentication tokens",
          "Protected routes implementation",
          "Global state synchronization",
          "Error handling across stack"
        ]
      },
      {
        title: "🌐 Full-Stack Frameworks",
        items: [
          "Next.js (React Fullstack)",
          "Remix / Nuxt (optional alternatives)",
          "Integrate API routes",
          "Server Actions (Next.js 14+)",
          "File-based routing mastery",
          "SSR/SSG/ISR strategies"
        ]
      },
      {
        title: "🎯 Full-Stack Projects",
        items: [
          "Full-stack Blog App with comments",
          "Full-stack E-commerce with Cart, Auth, Checkout",
          "Dashboard with Admin CRUD operations",
          "Project management tool with real-time updates",
          "Multi-tenant application with role-based auth"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "DevOps & Deployment",
    subtitle: "Industry-Ready",
    description: "Learn to deploy, scale, and monitor production applications",
    color: "bg-orange-500",
    sections: [
      {
        title: "☁️ Cloud & Hosting",
        items: [
          "Vercel / Netlify (Frontend deployment)",
          "Render / Railway / Fly.io (Backend)",
          "AWS services (EC2, S3, RDS, Lambda)",
          "API Gateway and CloudFront CDN",
          "Environment variables management",
          "Domain setup and DNS configuration"
        ]
      },
      {
        title: "Containers & Docker",
        items: [
          "Docker basics (images, containers)",
          "Docker volumes and networks",
          "Docker Compose for multi-service apps",
          "Container best practices",
          "Production-ready Dockerfiles"
        ]
      },
      {
        title: "CI/CD Pipelines",
        items: [
          "GitHub Actions automation",
          "GitLab CI workflows",
          "Automated testing in pipelines",
          "Deployment automation",
          "Build optimization"
        ]
      },
      {
        title: "🧩 DevOps Essentials",
        items: [
          "Nginx reverse proxy",
          "PM2 process manager",
          "SSL/TLS certificates",
          "Load balancing strategies",
          "Blue-green deployments"
        ]
      },
      {
        title: "Monitoring & Logging",
        items: [
          "Monitoring: LogRocket for frontend",
          "Monitoring: Datadog for infrastructure",
          "Monitoring: Prometheus and Grafana",
          "Monitoring: Sentry for error tracking",
          "Logging: Winston and Morgan",
          "Performance monitoring"
        ]
      },
      {
        title: "🧠 Scaling & Performance",
        items: [
          "Load balancing strategies",
          "CDN caching implementation",
          "Lazy loading / Code splitting",
          "API caching with Redis",
          "Database optimization",
          "Horizontal vs Vertical scaling"
        ]
      },
      {
        title: "🎯 DevOps Projects",
        items: [
          "CI/CD pipeline for full-stack app",
          "Containerized deployment on Render/AWS",
          "Performance-optimized dashboard",
          "SaaS dashboard with subscriptions",
          "Automated deployment system"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "System Design & Architecture",
    subtitle: "Senior-Level Preparation",
    description: "Think like a senior engineer with architectural patterns",
    color: "bg-red-500",
    sections: [
      {
        title: "🧠 Architectural Patterns",
        items: [
          "Monolithic vs Microservices",
          "Event-Driven Systems",
          "Clean Architecture principles",
          "Domain-Driven Design (DDD)",
          "SOLID principles",
          "Layered architecture",
          "Monorepos with Nx, Turborepo"
        ]
      },
      {
        title: "Design Patterns",
        items: [
          "Design Patterns: Singleton pattern",
          "Design Patterns: Factory pattern",
          "Design Patterns: Observer pattern",
          "Design Patterns: Strategy pattern",
          "Repository pattern",
          "Dependency Injection"
        ]
      },
      {
        title: "⚡ Communication Between Services",
        items: [
          "REST API design",
          "gRPC for microservices",
          "WebSocket connections",
          "Message Queues (Kafka, RabbitMQ)",
          "API Gateway patterns",
          "Load Balancer configuration"
        ]
      },
      {
        title: "Scalability Concepts",
        items: [
          "Horizontal vs Vertical scaling",
          "Caching layers (Redis, CDN)",
          "Database sharding & replication",
          "Rate limiting & throttling",
          "Distributed systems basics",
          "CAP theorem understanding"
        ]
      },
      {
        title: "🧱 Advanced Architecture",
        items: [
          "Serverless computing (AWS Lambda, Cloudflare Workers)",
          "Edge computing concepts",
          "Distributed systems design",
          "Real-time applications architecture"
        ]
      },
      {
        title: "🎯 System Design Projects",
        items: [
          "Microservice-based E-commerce API",
          "Distributed logging system",
          "Scalable notification service",
          "Video streaming platform with transcoding",
          "Microservices-based e-commerce system",
          "Real-time collaborative platform",
          "Distributed chat system"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing & Quality Assurance",
    subtitle: "Production-Ready Code",
    description: "Write reliable, maintainable production code with comprehensive testing",
    color: "bg-pink-500",
    sections: [
      {
        title: "🧪 Testing Types & Strategy",
        items: [
          "Unit, Integration, E2E testing",
          "Mocking & Stubs",
          "Test-driven development (TDD)",
          "Test coverage analysis"
        ]
      },
      {
        title: "🧩 Testing Tools",
        items: [
          "Jest / Mocha / Chai",
          "Supertest for API testing",
          "Cypress for E2E testing",
          "Playwright for modern E2E",
          "React Testing Library",
          "Test containers for integration"
        ]
      },
      {
        title: "Quality Assurance",
        items: [
          "Code review practices",
          "Automated testing in CI/CD",
          "Performance testing",
          "Security testing",
          "Accessibility testing"
        ]
      },
      {
        title: "🎯 Testing Projects",
        items: [
          "Write tests for existing API",
          "E2E tests for full-stack app",
          "TDD implementation for new features",
          "Integration test suite setup"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Advanced Topics",
    subtitle: "Industry Excellence",
    description: "Polish your skills to stand out with cutting-edge technologies",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🧠 Advanced Frontend",
        items: [
          "SSR/ISR/SSG optimization (Next.js)",
          "SEO optimization techniques",
          "Accessibility (WCAG standards)",
          "Progressive Web Apps (PWA)",
          "Web performance optimization",
          "Core Web Vitals",
          "Advanced animations"
        ]
      },
      {
        title: "⚙️ Advanced Backend",
        items: [
          "GraphQL advanced patterns (Apollo)",
          "WebSockets / Real-time updates",
          "Queue systems (BullMQ)",
          "Cron jobs & schedulers",
          "Stream processing",
          "Background job processing"
        ]
      },
      {
        title: "🔒 Advanced Security",
        items: [
          "OWASP Top 10 vulnerabilities",
          "CSRF, XSS, SQL Injection prevention",
          "HTTPS, TLS, HSTS implementation",
          "OAuth2.0 and OpenID Connect",
          "Security headers and policies",
          "Penetration testing basics"
        ]
      },
      {
        title: "🔥 Additional Integrations",
        items: [
          "Payment integrations (Stripe, PayPal)",
          "File uploads (S3, Cloudinary)",
          "Analytics integration (Google Analytics)",
          "Email services (SendGrid, AWS SES)",
          "SMS services integration",
          "Third-party API integrations"
        ]
      },
      {
        title: "🎯 Capstone Projects",
        items: [
          "SaaS App with subscriptions, dashboard, API, and real-time updates",
          "Real-time collaborative editing platform",
          "E-commerce platform with microservices",
          "Real-time analytics dashboard",
          "Enterprise-level application"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Career Growth & Industry Skills",
    subtitle: "Job-Ready Professional",
    description: "Build portfolio + soft skills + get hired in the industry",
    color: "bg-teal-500",
    sections: [
      {
        title: "🧰 Portfolio Development",
        items: [
          "Build personal site (Next.js + Tailwind)",
          "Showcase 4–6 major projects",
          "Include resume + GitHub + LinkedIn",
          "Project documentation and READMEs",
          "5+ production-ready projects",
          "Case studies for each project"
        ]
      },
      {
        title: "Git & Collaboration",
        items: [
          "Branching workflow (Git Flow)",
          "Pull requests and code reviews",
          "GitHub Projects & Actions",
          "Collaborative development",
          "Open source contributions",
          "Team workflows"
        ]
      },
      {
        title: "🧠 Soft Skills",
        items: [
          "Communication & problem-solving",
          "Agile & Scrum methodologies",
          "Documentation writing (README, API Docs)",
          "Technical writing and blogging",
          "Presentation skills",
          "Leadership and mentoring skills"
        ]
      },
      {
        title: "💼 Interview Preparation",
        items: [
          "System design interview prep",
          "Data Structures & Algorithms (DSA)",
          "LeetCode practice (easy → medium)",
          "Behavioral interview preparation",
          "Technical interview practice",
          "Mock interviews"
        ]
      },
      {
        title: "Community & Growth",
        items: [
          "Open source contributions",
          "Technical writing and blogging",
          "Speaking at meetups/conferences",
          "Networking in tech communities",
          "Continuous learning mindset",
          "Mentoring junior developers"
        ]
      },
      {
        title: "🚀 Job Ready Checklist",
        items: [
          "Build 2–3 production-grade apps",
          "Complete portfolio website",
          "Active GitHub profile",
          "LinkedIn optimization",
          "Resume tailored for roles",
          "Interview preparation complete"
        ]
      }
    ]
  }
];