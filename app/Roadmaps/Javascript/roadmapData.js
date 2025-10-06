
export const phases = [
  {
    id: 1,
    title: "Beginner",
    subtitle: "JavaScript Fundamentals & Core Concepts (0-2 months)",
    description: "Understand JS fundamentals, syntax, and core programming concepts",
    color: "bg-yellow-600",
    sections: [
      {
        title: "JavaScript Basics",
        items: [
          "Variables → let, const, var declarations and scope differences",
          "Data Types → Number, String, Boolean, null, undefined, Symbol",
          "Operators → Arithmetic, Assignment, Comparison, Logical operations",
          "Type Conversion → Implicit/explicit coercion, template literals (ES6+)"
        ]
      },
      {
        title: "Control Flow & Functions",
        items: [
          "Conditionals → if, else if, else, switch statements",
          "Loops → for, while, do-while, for-of, for-in, break & continue",
          "Functions → Declarations, expressions, arrow functions, parameters",
          "Callbacks → Function as arguments, return values, default parameters"
        ]
      },
      {
        title: "Arrays & Objects",
        items: [
          "Arrays → Creation, access, methods (push, pop, map, filter, reduce)",
          "Objects → Key-value pairs, nested objects, property access",
          "Iteration → forEach, for-in, for-of loops over data structures",
          "Destructuring → Array/object destructuring, spread & rest operators"
        ]
      },
      {
        title: "DOM & Basic Projects",
        items: [
          "DOM Manipulation → getElementById, querySelector, event listeners",
          "Events → click, input, submit handling, dynamic element creation",
          "Basic Projects → Calculator, temperature converter, quiz game",
          "Interactive Projects → To-do list, image gallery with navigation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate",
    subtitle: "Advanced JS Concepts & Async Programming (2-5 months)",
    description: "Learn advanced concepts, OOP, asynchronous programming, and browser APIs",
    color: "bg-blue-500",
    sections: [
      {
        title: "Advanced Functions & OOP",
        items: [
          "Closures → Function scope, lexical scoping, practical applications",
          "IIFE → Immediately Invoked Function Expressions, module patterns",
          "Higher-order Functions → Currying, function binding (call, apply, bind)",
          "OOP → Objects, classes, constructors, this keyword, prototypes"
        ]
      },
      {
        title: "Asynchronous JavaScript",
        items: [
          "Callbacks → Callback hell, error handling patterns",
          "Promises → .then, .catch, .finally, promise chaining",
          "Async/Await → Modern async syntax, error handling with try/catch",
          "Fetch API → HTTP requests, JSON handling, API consumption"
        ]
      },
      {
        title: "Browser APIs & Storage",
        items: [
          "Web Storage → LocalStorage, SessionStorage, data persistence",
          "Browser APIs → Geolocation, Cookies, event delegation",
          "ES6+ Features → Modules, optional chaining, nullish coalescing",
          "Advanced Concepts → Map, Set, WeakMap, Symbol, iterators"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Weather App → OpenWeather API integration, async data fetching",
          "GitHub Profile Fetcher → API consumption, error handling",
          "To-do with Storage → LocalStorage persistence, CRUD operations",
          "Geolocation Map → Google Maps API, browser location services"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced/Industry-Ready",
    subtitle: "Modern Frameworks & Production Skills (5-12 months)",
    description: "Master advanced JS, frameworks, tooling, and production-level development",
    color: "bg-green-500",
    sections: [
      {
        title: "JavaScript Mastery",
        items: [
          "Event Loop → Concurrency model, call stack, task queue",
          "Performance → Memory management, garbage collection, optimization",
          "Advanced Patterns → Debouncing, throttling, module bundlers",
          "ES6+ Advanced → Tagged templates, proxy, reflect, generators"
        ]
      },
      {
        title: "React.js Framework",
        items: [
          "React Fundamentals → JSX, Components, Props, State management",
          "React Hooks → useState, useEffect, useReducer, useContext",
          "Advanced React → Context API, React Router, forms & validation",
          "Next.js → Server-side rendering, routing, API routes, deployment"
        ]
      },
      {
        title: "State Management & Testing",
        items: [
          "State Solutions → Redux Toolkit, Zustand, React Query",
          "Testing → Jest unit testing, React Testing Library",
          "E2E Testing → Cypress, Playwright for integration testing",
          "Code Quality → ESLint, Prettier, TypeScript integration"
        ]
      },
      {
        title: "Production & Deployment",
        items: [
          "Build Tools → Webpack, Vite, module bundlers, package managers",
          "Deployment → Vercel, Netlify, AWS S3 + CloudFront",
          "CI/CD → GitHub Actions, automated testing, deployment pipelines",
          "Security → XSS prevention, CSRF protection, secure authentication"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Full-Stack JavaScript",
    subtitle: "Backend Development & API Integration (8-15 months)",
    description: "Complete full-stack JavaScript development with Node.js and modern APIs",
    color: "bg-purple-500",
    sections: [
      {
        title: "Node.js Backend",
        items: [
          "Node.js Fundamentals → Runtime environment, modules, npm ecosystem",
          "Express.js → Server setup, routing, middleware, error handling",
          "Database Integration → MongoDB, PostgreSQL, Mongoose ODM",
          "Authentication → JWT tokens, bcrypt, session management, OAuth"
        ]
      },
      {
        title: "API Development",
        items: [
          "REST APIs → CRUD operations, HTTP methods, status codes",
          "API Design → Endpoints, versioning, documentation with Swagger",
          "Real-time → WebSockets, Socket.io, real-time communication",
          "GraphQL → Query language, Apollo Server, schema design"
        ]
      },
      {
        title: "Advanced Backend",
        items: [
          "Microservices → Service architecture, inter-service communication",
          "Caching → Redis, memory caching, performance optimization",
          "File Upload → Multer, image processing, cloud storage",
          "Email/SMS → Nodemailer, Twilio, notification systems"
        ]
      },
      {
        title: "Full-Stack Projects",
        items: [
          "MERN Stack → MongoDB, Express, React, Node.js complete app",
          "E-commerce Platform → Payment integration, inventory management",
          "Real-time Chat → Socket.io, message history, user authentication",
          "Social Media App → Posts, comments, likes, user profiles"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Modern JavaScript",
    subtitle: "Advanced Patterns & Performance (12-18 months)",
    description: "Master modern JavaScript patterns, performance optimization, and enterprise development",
    color: "bg-red-500",
    sections: [
      {
        title: "Advanced JavaScript Patterns",
        items: [
          "Design Patterns → Module, Observer, Factory, Singleton patterns",
          "Functional Programming → Pure functions, immutability, composition",
          "Advanced Async → Promise.all, Promise.race, async generators",
          "Web Workers → Background processing, parallel execution"
        ]
      },
      {
        title: "Performance & Optimization",
        items: [
          "Code Splitting → Dynamic imports, lazy loading, bundle optimization",
          "Memory Management → Leak detection, garbage collection optimization",
          "Performance Monitoring → Web Vitals, Lighthouse, profiling",
          "PWA → Progressive Web Apps, service workers, offline functionality"
        ]
      },
      {
        title: "Enterprise Development",
        items: [
          "Monorepo → Lerna, Nx, workspace management",
          "Microfrontends → Module federation, independent deployments",
          "Serverless → AWS Lambda, Vercel Functions, edge computing",
          "DevOps → Docker, Kubernetes, cloud deployment strategies"
        ]
      },
      {
        title: "Industry Projects",
        items: [
          "Enterprise Dashboard → Complex state management, data visualization",
          "Microfrontend Architecture → Independent team development",
          "Serverless Application → Cloud functions, edge deployment",
          "Open Source Contribution → npm packages, community involvement"
        ]
      }
    ]
  }
];