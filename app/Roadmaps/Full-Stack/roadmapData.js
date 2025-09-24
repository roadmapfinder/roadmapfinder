export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level",
    description: "Build a strong foundation in core web technologies and computer science",
    color: "bg-blue-500",
    sections: [
      {
        title: "Computer Science Fundamentals",
        items: [
          "How the internet works (DNS, HTTP/HTTPS, browsers)",
          "Client-server architecture",
          "Basic OS concepts (processes, threads, I/O)",
          "Version control with Git & GitHub (branching, merging, pull requests)"
        ]
      },
      {
        title: "Web Basics",
        items: [
          "HTML5 → semantic tags, forms, accessibility",
          "CSS3 → flexbox, grid, animations, responsive design",
          "JavaScript ES6+ (variables, functions, arrays, objects, DOM manipulation)",
          "Fetch API, promises, async/await"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "Personal Portfolio Website",
          "Responsive Landing Page with forms",
          "Interactive To-Do List with LocalStorage"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Frontend Development",
    subtitle: "Intermediate Level",
    description: "Master modern frontend development with React and TypeScript",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced JavaScript & TypeScript",
        items: [
          "Closures, prototypes, this, event loop",
          "ES modules, error handling",
          "TypeScript: types, interfaces, generics, utility types",
          "LocalStorage, SessionStorage, cookies"
        ]
      },
      {
        title: "React Ecosystem",
        items: [
          "React Core: functional components, JSX, hooks (useState, useEffect, useContext)",
          "Next.js: file-based routing, SSR/SSG, API routes, middleware",
          "State Management: Redux Toolkit, TanStack Query",
          "Styling: Tailwind CSS, Shadcn UI, Material UI"
        ]
      },
      {
        title: "Testing & Tools",
        items: [
          "Unit testing with Jest",
          "Component testing with React Testing Library",
          "E2E testing with Cypress/Playwright"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
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
    description: "Build robust server-side applications and APIs",
    color: "bg-green-500",
    sections: [
      {
        title: "Node.js & Express.js",
        items: [
          "Event loop, async programming, file system, streams",
          "REST APIs (CRUD, routing, middleware)",
          "Authentication & authorization (JWT, OAuth2, sessions)",
          "Security (CORS, Helmet, rate limiting), validation (Joi/Zod)"
        ]
      },
      {
        title: "Databases & ORMs",
        items: [
          "SQL: PostgreSQL/MySQL (joins, indexes, transactions, triggers)",
          "NoSQL: MongoDB (documents, collections, aggregation pipeline)",
          "ORMs: Prisma (modern, TS-friendly), Sequelize, TypeORM"
        ]
      },
      {
        title: "APIs & Architecture",
        items: [
          "RESTful APIs (versioning, pagination, filtering)",
          "GraphQL (Apollo Server/Client, Nexus)",
          "gRPC for microservices"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Chat app with real-time Socket.IO",
          "Social media clone (auth, posts, likes, comments)",
          "E-commerce store with cart and checkout"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "DevOps & Deployment",
    subtitle: "Advanced Level",
    description: "Deploy and scale applications in production environments",
    color: "bg-orange-500",
    sections: [
      {
        title: "Containers & Cloud",
        items: [
          "Docker (images, containers, volumes, networks)",
          "Docker Compose for multi-service apps",
          "CI/CD with GitHub Actions, GitLab CI",
          "Environment management with Dotenv"
        ]
      },
      {
        title: "Cloud Providers",
        items: [
          "AWS: EC2, S3, RDS, Lambda, API Gateway, CloudFront",
          "Vercel/Netlify for frontend deployment",
          "Render/Railway/Fly.io for fullstack apps"
        ]
      },
      {
        title: "Monitoring & Performance",
        items: [
          "Reverse proxies: Nginx, PM2",
          "Logging: Winston, Morgan",
          "Monitoring: Prometheus, Grafana, Sentry error tracking"
        ]
      },
      {
        title: "Production Projects",
        items: [
          "SaaS dashboard with subscriptions",
          "Project management tool with real-time updates",
          "Multi-tenant application with role-based auth"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Software Engineering Best Practices",
    subtitle: "Senior-Level Prep",
    description: "Apply industry-standard practices and architectural patterns",
    color: "bg-red-500",
    sections: [
      {
        title: "Design Patterns & Architecture",
        items: [
          "Design Patterns: Singleton, Factory, Observer, Strategy",
          "SOLID principles and clean code practices",
          "Layered architecture and Domain-driven design (DDD)",
          "Monorepos with Nx, Turborepo"
        ]
      },
      {
        title: "System Design Basics",
        items: [
          "Scalability (horizontal vs vertical scaling)",
          "Load balancing and caching strategies (Redis, CDN)",
          "Message queues (RabbitMQ, Kafka)",
          "API Documentation with OpenAPI/Swagger"
        ]
      },
      {
        title: "Testing Strategy",
        items: [
          "Unit testing with Jest/Supertest",
          "Integration testing with test containers",
          "Test-driven development (TDD) practices"
        ]
      },
      {
        title: "Senior-Level Projects",
        items: [
          "Video streaming platform with uploads and transcoding",
          "Microservices-based e-commerce system",
          "Real-time collaborative platform"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced Topics & Specialization",
    subtitle: "Industry Ready",
    description: "Master cutting-edge technologies and architectural patterns",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Architecture",
        items: [
          "Microservices architecture and event-driven systems",
          "Serverless computing (AWS Lambda, Cloudflare Workers)",
          "Edge computing and distributed systems",
          "Real-time applications with WebSockets"
        ]
      },
      {
        title: "Advanced Security",
        items: [
          "OWASP Top 10 vulnerabilities",
          "CSRF, XSS, SQL Injection prevention",
          "HTTPS, TLS, HSTS implementation",
          "Authentication strategies and OAuth2.0"
        ]
      },
      {
        title: "Career Preparation",
        items: [
          "Portfolio with 5+ production-ready projects",
          "System design interview preparation",
          "Open source contributions and technical writing",
          "Leadership and mentoring skills"
        ]
      },
      {
        title: "Industry-Grade Projects",
        items: [
          "Distributed chat system with microservices",
          "E-commerce platform with separate services",
          "Real-time analytics dashboard with data processing"
        ]
      }
    ]
  }
];