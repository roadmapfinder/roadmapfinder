export const phases = [
  {
    id: 0,
    title: "Programming & Web Fundamentals",
    subtitle: "Non-Negotiable Foundation",
    description: "Master programming basics and understand how the web works",
    color: "bg-red-600",
    sections: [
      {
        title: "Programming Basics (JavaScript First)",
        items: [
          "Variables & Data Types → let, const, var, primitives, reference types",
          "Operators & Conditionals → Arithmetic, logical, comparison, if-else, switch",
          "Loops & Functions → for, while, forEach, function declarations, arrow functions",
          "Arrays & Objects → Methods, iteration, destructuring, spread operator"
        ]
      },
      {
        title: "Advanced JavaScript Concepts",
        items: [
          "Scope & Hoisting → Block scope, function scope, temporal dead zone",
          "Closures → Lexical scoping, data privacy, function factories",
          "this Keyword → Binding rules, call, apply, bind methods",
          "Practice: Write logic without copying code, understand execution context"
        ]
      },
      {
        title: "Web Fundamentals",
        items: [
          "How Internet Works → DNS, TCP/IP, client-server model, packets",
          "HTTP/HTTPS → Methods, status codes, headers, request/response cycle",
          "REST APIs Basics → Resources, endpoints, CRUD operations concept",
          "Practice: Understand how frontend talks to backend, network debugging"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Frontend Foundations",
    subtitle: "Beginner Level",
    description: "Build semantic, responsive, and accessible user interfaces",
    color: "bg-yellow-500",
    sections: [
      {
        title: "HTML (Semantic & SEO-Friendly)",
        items: [
          "Semantic Tags → header, nav, main, section, article, footer, aside",
          "Forms → Input types, validation attributes, labels, fieldsets",
          "Accessibility → ARIA roles, alt text, semantic structure, keyboard navigation",
          "Practice: Build accessible forms with proper validation and structure"
        ]
      },
      {
        title: "CSS (Modern, Not Old School)",
        items: [
          "Flexbox → Flex containers, alignment, justify-content, align-items, flex-grow",
          "Grid → Grid template, areas, auto-placement, responsive grids",
          "Responsive Design → Media queries, mobile-first approach, breakpoints",
          "CSS Variables → Custom properties, theming, dynamic styling"
        ]
      },
      {
        title: "Advanced CSS & Styling",
        items: [
          "Animations → Transitions, keyframes, transform, performance optimization",
          "Tailwind CSS → Utility-first CSS, responsive variants, component patterns",
          "CSS Architecture → BEM methodology, component-based styling, organization",
          "Practice: Convert Figma designs into pixel-perfect responsive UI"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    subtitle: "Intermediate Level",
    description: "Master advanced JavaScript for professional development",
    color: "bg-orange-500",
    sections: [
      {
        title: "Advanced JavaScript",
        items: [
          "Asynchronous JavaScript → Callbacks, Promises, async/await, Promise.all",
          "Event Loop → Call stack, task queue, microtasks, execution order",
          "Error Handling → try-catch, custom errors, error propagation, debugging",
          "ES6+ Features → Destructuring, spread/rest, template literals, optional chaining"
        ]
      },
      {
        title: "Modules & Build Tools",
        items: [
          "ES Modules → import/export, default exports, named exports, dynamic imports",
          "NPM Ecosystem → Package management, scripts, versioning, dependencies",
          "Module Bundlers → Webpack basics, Vite, code splitting, tree shaking",
          "Practice: Organize code into maintainable, reusable modules"
        ]
      },
      {
        title: "Browser APIs",
        items: [
          "DOM Manipulation → Query selectors, element creation, event delegation",
          "Events → Event listeners, bubbling, capturing, preventDefault",
          "Fetch API → Making requests, handling responses, error handling",
          "Storage APIs → LocalStorage, SessionStorage, IndexedDB basics"
        ]
      },
      {
        title: "JavaScript Performance",
        items: [
          "Memory Management → Garbage collection, memory leaks, optimization",
          "Performance → Debouncing, throttling, lazy loading, code optimization",
          "Best Practices → Clean code, naming conventions, code organization",
          "Practice: Build dynamic frontend apps without frameworks"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "React (Frontend Powerhouse)",
    subtitle: "Intermediate Level",
    description: "Build modern, scalable React applications with industry standards",
    color: "bg-blue-500",
    sections: [
      {
        title: "React Fundamentals",
        items: [
          "JSX & Components → JSX syntax, functional components, component composition",
          "Props & State → Props passing, prop types, useState hook, state management",
          "Conditional Rendering → Ternary operators, logical AND, early returns",
          "Lists & Keys → map method, unique keys, list optimization, fragments"
        ]
      },
      {
        title: "Modern React (2026 Standard)",
        items: [
          "React Hooks → useState, useEffect, useContext, useReducer, useRef",
          "Controlled Forms → Form handling, validation, input management, error states",
          "Lifting State Up → State management patterns, component communication",
          "Component Architecture → Composition, containers vs presentational, reusability"
        ]
      },
      {
        title: "Advanced React",
        items: [
          "Custom Hooks → Hook creation, logic extraction, reusable hooks library",
          "Performance Optimization → React.memo, useMemo, useCallback, lazy loading",
          "Error Boundaries → Error handling, fallback UI, error recovery",
          "Code Splitting → Dynamic imports, React.lazy, Suspense, route-based splitting"
        ]
      },
      {
        title: "State Management",
        items: [
          "Context API → Context creation, providers, consumers, global state",
          "Redux Toolkit → Store setup, slices, reducers, actions, thunks",
          "Zustand → Lightweight state management, store creation, selectors",
          "Server State → React Query, TanStack Query, data fetching, caching, mutations"
        ]
      },
      {
        title: "Routing & UI Libraries",
        items: [
          "React Router → BrowserRouter, routes, navigation, nested routes, params",
          "Protected Routes → Authentication guards, route protection, redirects",
          "Component Libraries → Shadcn/ui, Material-UI, Ant Design, Headless UI",
          "Practice: Build large-scale frontend apps with clean architecture"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backend with Node.js & Express",
    subtitle: "Intermediate Level",
    description: "Build robust, scalable REST APIs with Node.js and Express",
    color: "bg-green-500",
    sections: [
      {
        title: "Node.js Fundamentals",
        items: [
          "Event-driven Architecture → Event emitters, event loop, non-blocking I/O",
          "File System → Reading files, writing files, streams, buffers",
          "Path & OS Modules → Path manipulation, directory operations, system info",
          "Environment Variables → dotenv, configuration management, secrets handling"
        ]
      },
      {
        title: "Express.js (API Development)",
        items: [
          "Express Setup → Server creation, app configuration, port binding",
          "Middleware → Built-in middleware, custom middleware, third-party middleware",
          "Routing → Route parameters, query strings, route handlers, route organization",
          "Controllers → MVC pattern, controller functions, business logic separation"
        ]
      },
      {
        title: "API Best Practices",
        items: [
          "Error Handling → Error middleware, custom errors, async error handling",
          "Request Validation → Input validation, sanitization, validation libraries (Joi, Zod)",
          "Response Formatting → Consistent response structure, status codes, pagination",
          "API Documentation → Swagger, OpenAPI, endpoint documentation, examples"
        ]
      },
      {
        title: "REST API Design",
        items: [
          "CRUD APIs → Create, Read, Update, Delete operations, resource modeling",
          "REST Principles → Statelessness, resource naming, HTTP methods, idempotency",
          "Status Codes → 2xx, 3xx, 4xx, 5xx codes, proper usage, error responses",
          "Pagination & Filtering → Offset/cursor pagination, query filtering, sorting, search"
        ]
      },
      {
        title: "Advanced Backend Concepts",
        items: [
          "Request Logging → Morgan, Winston, structured logging, log levels",
          "CORS → Cross-origin requests, preflight, CORS configuration",
          "Compression → Gzip compression, response optimization, performance",
          "Practice: Build clean, scalable, production-ready APIs"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "PostgreSQL (Core of PERN)",
    subtitle: "Intermediate Level",
    description: "Master relational database design and SQL for production systems",
    color: "bg-purple-500",
    sections: [
      {
        title: "PostgreSQL Fundamentals",
        items: [
          "Tables & Data Types → CREATE TABLE, VARCHAR, INTEGER, BOOLEAN, DATE, JSON",
          "Primary & Foreign Keys → Unique constraints, relationships, referential integrity",
          "Constraints → NOT NULL, UNIQUE, CHECK, DEFAULT, cascading operations",
          "Indexes → B-tree indexes, unique indexes, composite indexes, query optimization"
        ]
      },
      {
        title: "SQL Mastery",
        items: [
          "Basic Operations → SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, LIMIT",
          "JOINS → INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, self joins",
          "Aggregation → GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX",
          "Subqueries → Nested queries, correlated subqueries, EXISTS, IN operators"
        ]
      },
      {
        title: "Advanced SQL",
        items: [
          "Transactions → BEGIN, COMMIT, ROLLBACK, ACID properties, isolation levels",
          "Views → CREATE VIEW, materialized views, updatable views",
          "Functions → Stored procedures, user-defined functions, triggers",
          "Window Functions → ROW_NUMBER, RANK, PARTITION BY, analytics queries"
        ]
      },
      {
        title: "PostgreSQL with Node.js",
        items: [
          "pg Library → Connection, parameterized queries, connection pooling",
          "Prisma ORM → Schema definition, migrations, Prisma Client, relations",
          "Sequelize → Model definition, associations, migrations, validations",
          "Connection Pooling → Pool configuration, connection management, performance"
        ]
      },
      {
        title: "Database Design",
        items: [
          "Schema Design → Normalization, denormalization, entity relationships",
          "Migrations → Version control, schema changes, rollbacks, best practices",
          "Data Modeling → ER diagrams, database planning, scalability considerations",
          "Practice: Design real production databases with proper relationships"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Authentication & Authorization",
    subtitle: "Advanced Level",
    description: "Build secure authentication systems with industry standards",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Auth Systems (Critical)",
        items: [
          "JWT Authentication → Token generation, verification, payload structure",
          "Access vs Refresh Tokens → Token rotation, refresh strategy, security",
          "Password Hashing → bcrypt, salt rounds, password strength, secure storage",
          "Session Management → Session creation, expiration, invalidation"
        ]
      },
      {
        title: "Authorization & Access Control",
        items: [
          "Role-Based Access Control → Roles, permissions, middleware, authorization logic",
          "OAuth 2.0 → Google OAuth, GitHub OAuth, third-party authentication",
          "Social Login → OAuth providers, callback handling, account linking",
          "Practice: Implement complete auth flows with protected routes"
        ]
      },
      {
        title: "Security Best Practices",
        items: [
          "SQL Injection Prevention → Parameterized queries, ORM usage, input sanitization",
          "XSS & CSRF → Cross-site scripting, CSRF tokens, content security policy",
          "Rate Limiting → Express-rate-limit, DDoS protection, abuse prevention",
          "Security Headers → Helmet.js, HSTS, X-Frame-Options, CSP"
        ]
      },
      {
        title: "Advanced Security",
        items: [
          "Secure Cookies → HttpOnly, Secure, SameSite attributes, cookie management",
          "API Security → API keys, API rate limiting, request signing",
          "Data Encryption → Encryption at rest, encryption in transit, key management",
          "Practice: Build secure systems that protect user data and privacy"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Full-Stack Integration",
    subtitle: "Advanced Level",
    description: "Connect frontend and backend with real-time features",
    color: "bg-pink-500",
    sections: [
      {
        title: "Frontend ↔ Backend Integration",
        items: [
          "API Consumption → Axios, Fetch API, request configuration, interceptors",
          "Error Handling → Network errors, API errors, error boundaries, user feedback",
          "Loading States → Loading indicators, skeleton screens, optimistic updates",
          "Data Synchronization → Cache invalidation, refetching, real-time updates"
        ]
      },
      {
        title: "File Uploads",
        items: [
          "Multer → File upload middleware, file size limits, file type validation",
          "Cloud Storage → AWS S3, Cloudinary, file CDN, image optimization",
          "File Processing → Image resizing, video transcoding, file compression",
          "Practice: Build complete file upload systems with cloud storage"
        ]
      },
      {
        title: "Real-Time Features",
        items: [
          "WebSockets → WebSocket protocol, bidirectional communication, events",
          "Socket.io → Server setup, client setup, rooms, namespaces, broadcasting",
          "Notifications → Real-time notifications, push notifications, event streams",
          "Chat Systems → Message delivery, typing indicators, read receipts, presence"
        ]
      },
      {
        title: "Advanced Integration",
        items: [
          "API Versioning → URL versioning, header versioning, deprecation strategy",
          "Webhooks → Webhook creation, event delivery, retry logic, security",
          "Background Jobs → Job queues, Bull, scheduled tasks, async processing",
          "Practice: Build full-stack features end-to-end with real-time capabilities"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Testing & Quality",
    subtitle: "Advanced Level",
    description: "Write testable code with comprehensive test coverage",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Testing (Often Ignored, Highly Valued)",
        items: [
          "Unit Testing → Jest basics, test structure, assertions, mocking",
          "Integration Testing → Supertest, API testing, database testing, test isolation",
          "React Testing → React Testing Library, component testing, user interactions",
          "Test Coverage → Coverage reports, meaningful tests, edge cases"
        ]
      },
      {
        title: "Testing Best Practices",
        items: [
          "Test-Driven Development → TDD workflow, red-green-refactor, test-first approach",
          "Mocking → Mock functions, mock modules, mock API responses, test doubles",
          "Test Organization → Test structure, describe blocks, beforeEach/afterEach",
          "Practice: Write tests that catch bugs and improve code quality"
        ]
      },
      {
        title: "Code Quality",
        items: [
          "ESLint → Linting rules, error prevention, code standards, configurations",
          "Prettier → Code formatting, consistent style, auto-formatting",
          "Clean Architecture → Separation of concerns, dependency injection, SOLID principles",
          "Folder Structure → Feature-based structure, module organization, scalability"
        ]
      },
      {
        title: "Code Review & Collaboration",
        items: [
          "Code Review Process → PR reviews, constructive feedback, best practices",
          "Documentation → README, API docs, inline comments, architecture docs",
          "Refactoring → Code smell detection, refactoring patterns, continuous improvement",
          "Practice: Your code looks professional and maintainable"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "DevOps & Deployment",
    subtitle: "Advanced Level",
    description: "Deploy production applications with CI/CD pipelines",
    color: "bg-teal-500",
    sections: [
      {
        title: "Environment & Configuration",
        items: [
          ".env Management → Environment variables, secrets management, .gitignore",
          "Environment Separation → Development, staging, production environments",
          "Config Management → Config files, feature flags, environment-specific configs",
          "Practice: Properly manage secrets and configuration across environments"
        ]
      },
      {
        title: "Deployment (2026 Stack)",
        items: [
          "Backend Hosting → Railway, Render, Fly.io, AWS EC2, container deployment",
          "Frontend Hosting → Vercel, Netlify, Cloudflare Pages, static site hosting",
          "Database Hosting → Supabase, Neon, AWS RDS, managed PostgreSQL",
          "Domain & SSL → Custom domains, SSL certificates, DNS configuration"
        ]
      },
      {
        title: "CI/CD Basics",
        items: [
          "GitHub Actions → Workflow files, triggers, jobs, actions marketplace",
          "Automated Builds → Build pipelines, build optimization, caching",
          "Automated Tests → Test automation, pre-deployment testing, quality gates",
          "Deployment Automation → Automatic deployments, rollback strategies, blue-green"
        ]
      },
      {
        title: "Production Monitoring",
        items: [
          "Logging → Application logs, error tracking, log aggregation, Sentry",
          "Monitoring → Uptime monitoring, performance metrics, health checks",
          "Analytics → User analytics, API analytics, performance tracking",
          "Practice: Ship production apps with proper monitoring and observability"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "System Design & Architecture",
    subtitle: "Advanced to Expert Level",
    description: "Think like a senior engineer with scalable architectures",
    color: "bg-lime-500",
    sections: [
      {
        title: "Backend Architecture",
        items: [
          "MVC Pattern → Model-View-Controller separation, layered architecture",
          "Service Layer → Business logic separation, service classes, reusability",
          "Repository Pattern → Data access layer, abstraction, testability",
          "Dependency Injection → Loose coupling, testability, maintainability"
        ]
      },
      {
        title: "Scalability Concepts",
        items: [
          "Caching → Redis, in-memory caching, cache strategies, invalidation",
          "Load Balancing → Nginx, reverse proxy, traffic distribution, health checks",
          "Rate Limiting → API throttling, user limits, abuse prevention",
          "Horizontal Scaling → Multiple instances, stateless design, session management"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "Database Optimization → Query optimization, indexing strategies, N+1 problem",
          "API Performance → Response time, pagination, lazy loading, data prefetching",
          "Frontend Performance → Code splitting, lazy loading, bundle optimization",
          "Practice: Build systems that can handle high traffic and scale"
        ]
      },
      {
        title: "Advanced Patterns",
        items: [
          "Microservices Basics → Service decomposition, inter-service communication",
          "Message Queues → RabbitMQ, async processing, event-driven architecture",
          "API Gateway → Centralized routing, authentication, rate limiting",
          "Practice: Start thinking like a senior engineer about architecture"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Real-World Projects",
    subtitle: "Expert Level",
    description: "Build portfolio projects that demonstrate mastery",
    color: "bg-rose-500",
    sections: [
      {
        title: "Beginner Projects",
        items: [
          "CRUD App → Task manager, note-taking app with full CRUD operations",
          "Auth System → Complete authentication with JWT, login, signup, password reset",
          "Dashboard → Admin dashboard with charts, tables, data visualization",
          "Requirements: PostgreSQL, REST API, deployed with documentation"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Blog Platform → Multi-user blog, posts, comments, categories, search",
          "Job Portal → Job listings, applications, employer dashboard, candidate profiles",
          "E-commerce Backend → Products, cart, checkout, orders, payment integration",
          "Requirements: Auth, complex relationships, file uploads, API documentation"
        ]
      },
      {
        title: "Advanced Projects (Resume Killers)",
        items: [
          "SaaS Platform → Multi-tenant SaaS, subscription plans, billing, admin panel",
          "Real-time Chat App → WebSocket chat, rooms, typing indicators, file sharing",
          "Role-based Admin Panel → Granular permissions, user management, audit logs",
          "Subscription Billing → Stripe integration, recurring payments, invoices, webhooks"
        ]
      },
      {
        title: "Project Requirements (Every Project Must Have)",
        items: [
          "Authentication → JWT auth, protected routes, role-based access control",
          "PostgreSQL → Proper schema design, relationships, migrations, indexes",
          "API Documentation → Swagger/OpenAPI docs, endpoint descriptions, examples",
          "Deployed Link → Live production deployment with custom domain and SSL"
        ]
      },
      {
        title: "Additional Features to Include",
        items: [
          "Testing → Unit tests, integration tests, test coverage reports",
          "Error Handling → Proper error responses, logging, user-friendly messages",
          "Performance → Caching, pagination, optimized queries, fast response times",
          "Practice: Build projects that showcase your full-stack expertise"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Career & Industry Readiness",
    subtitle: "Expert Level",
    description: "Prepare for jobs, interviews, and professional growth",
    color: "bg-amber-500",
    sections: [
      {
        title: "Git & Collaboration",
        items: [
          "Git Workflows → Branching strategies, Git Flow, feature branches, hotfixes",
          "Pull Requests → PR creation, descriptions, code review process, merging",
          "Code Reviews → Giving feedback, receiving feedback, best practices",
          "Team Collaboration → Agile, Scrum, sprints, stand-ups, documentation"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "JavaScript Deep Dive → Closures, prototypes, event loop, async patterns",
          "React Internals → Virtual DOM, reconciliation, fiber architecture, hooks",
          "SQL Queries → Complex joins, optimization, explain plans, indexing strategies",
          "API Design → REST principles, versioning, documentation, best practices"
        ]
      },
      {
        title: "System Design for Interviews",
        items: [
          "System Design Basics → Scalability, reliability, performance trade-offs",
          "Database Design → Schema design, normalization, sharding, replication",
          "Architecture Patterns → Microservices, monoliths, event-driven, CQRS",
          "Practice: Whiteboard system design, explain architectural decisions"
        ]
      },
      {
        title: "Portfolio & Branding",
        items: [
          "GitHub Profile → Clean README, pinned repos, contribution graph, activity",
          "Live Projects → Deployed projects, custom domains, professional presentation",
          "Case Studies → Project documentation, problem-solving approach, results",
          "Technical Blog → Write about learnings, tutorials, share knowledge"
        ]
      },
      {
        title: "Continuous Learning",
        items: [
          "Stay Updated → Follow tech blogs, newsletters, React/Node releases",
          "Open Source → Contribute to projects, build libraries, community involvement",
          "Networking → LinkedIn, Twitter, conferences, meetups, tech communities",
          "Practice: Build a strong professional presence and keep learning"
        ]
      }
    ]
  }
];