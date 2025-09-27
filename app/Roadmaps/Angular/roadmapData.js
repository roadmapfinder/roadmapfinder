// Angular Mastery Roadmap data structured according to the Angular roadmap content
export const phases = [
  {
    id: 1,
    title: "Prerequisites",
    subtitle: "Before Angular",
    description: "Build strong web development fundamentals before diving into Angular.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📘 HTML5 & CSS3 Fundamentals",
        items: [
          "Semantic HTML tags, forms, and accessibility principles",
          "CSS3 Flexbox and Grid layouts for responsive design",
          "CSS animations and transitions",
          "Responsive web design patterns and media queries"
        ]
      },
      {
        title: "💻 JavaScript (ES6+) Essentials",
        items: [
          "Variables, scopes, functions, and arrow functions",
          "DOM manipulation and event handling",
          "Arrays, Objects, Spread operator, Destructuring",
          "Async JavaScript: Promises, async/await, fetch API"
        ]
      },
      {
        title: "🔧 TypeScript Core Concepts",
        items: [
          "Classes, Interfaces, and Generics",
          "Types vs Interfaces understanding",
          "Decorators (crucial for Angular development)",
          "Type annotations and type inference"
        ]
      },
      {
        title: "🎯 Foundation Projects",
        items: [
          "✅ Static Portfolio Website (HTML/CSS)",
          "✅ To-Do App with Vanilla JS + LocalStorage",
          "✅ Refactor To-Do App with TypeScript",
          "Practice projects with DOM manipulation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Angular Fundamentals",
    subtitle: "Beginner Level",
    description: "Learn Angular basics and core concepts.",
    color: "bg-green-500",
    sections: [
      {
        title: "⚙️ Environment Setup",
        items: [
          "Install Angular CLI (npm install -g @angular/cli)",
          "Angular workspace and project structure understanding",
          "CLI commands for scaffolding and development",
          "Development server setup and configuration"
        ]
      },
      {
        title: "🧩 Core Angular Concepts",
        items: [
          "Components (decorators, templates, styles)",
          "Data Binding (interpolation, property, event, two-way)",
          "Directives (*ngIf, *ngFor, [ngClass], [ngStyle])",
          "Pipes (built-in and custom pipe creation)"
        ]
      },
      {
        title: "🔄 Services & Dependency Injection",
        items: [
          "Creating and using Angular services",
          "Dependency Injection principles and implementation",
          "Singleton services and providedIn configuration",
          "Service communication patterns"
        ]
      },
      {
        title: "📦 Modules & Routing",
        items: [
          "AppModule, feature modules, shared modules",
          "Router basics and navigation",
          "Lazy loading implementation",
          "Child routes and Guards (CanActivate, CanDeactivate)"
        ]
      },
      {
        title: "🚀 Beginner Projects",
        items: [
          "✅ Personal Portfolio with Angular routing",
          "✅ Recipe Book App (components, services, routing)",
          "✅ Notes App with CRUD operations",
          "Component interaction and data flow practice"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Intermediate Angular",
    subtitle: "Intermediate Level",
    description: "Master forms, HTTP, and reactive programming with RxJS.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📝 Angular Forms Mastery",
        items: [
          "Template-driven vs Reactive Forms comparison",
          "Form validation (synchronous and asynchronous validators)",
          "Custom validators and cross-field validation",
          "Dynamic form generation and form arrays"
        ]
      },
      {
        title: "🌐 HTTP & API Integration",
        items: [
          "HttpClientModule for REST API calls",
          "HTTP Interceptors for auth tokens and error handling",
          "Error handling strategies and retry mechanisms",
          "Request/response transformation and caching"
        ]
      },
      {
        title: "🔄 State Management & RxJS",
        items: [
          "Component state vs Service state management",
          "RxJS fundamentals: Observables, Subjects, BehaviorSubjects",
          "Reactive programming patterns in Angular",
          "Memory leak prevention and subscription management"
        ]
      },
      {
        title: "🎨 Styling & UI Libraries",
        items: [
          "Angular Material integration and theming",
          "TailwindCSS setup and configuration with Angular",
          "Component styling strategies and ViewEncapsulation",
          "Responsive design implementation"
        ]
      },
      {
        title: "📈 Intermediate Projects",
        items: [
          "✅ Blog App with API integration",
          "✅ Weather Dashboard (API + Angular Material)",
          "✅ Authentication System (JWT + Interceptor)",
          "Real-world CRUD applications"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Angular",
    subtitle: "Advanced Level",
    description: "Master advanced RxJS, state management, and testing.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⚡ Advanced RxJS Operators",
        items: [
          "Complex operators: map, mergeMap, switchMap, concatMap",
          "Error handling with catchError and retry strategies",
          "Subjects, ReplaySubjects, and AsyncSubjects",
          "Custom operators and advanced stream composition"
        ]
      },
      {
        title: "🏪 NgRx & Modern State Management",
        items: [
          "NgRx Store, Actions, Reducers, and Effects",
          "State management best practices and patterns",
          "Angular Signals (Angular 17+) for reactivity",
          "Component Store and local state management"
        ]
      },
      {
        title: "🚀 Performance Optimization",
        items: [
          "OnPush Change Detection strategy implementation",
          "Lazy loading modules and components",
          "Preloading strategies and route optimization",
          "Bundle analysis and tree shaking"
        ]
      },
      {
        title: "🧪 Testing Strategies",
        items: [
          "Unit Testing with Jasmine, Karma, and Jest",
          "Component testing and service testing patterns",
          "Integration testing approaches",
          "E2E Testing (Cypress/Playwright migration from Protractor)"
        ]
      },
      {
        title: "📁 Monorepo & Architecture",
        items: [
          "Nx Workspace setup for large-scale Angular applications",
          "Micro-frontend architecture patterns",
          "Shared libraries and workspace organization",
          "Build optimization and CI/CD integration"
        ]
      },
      {
        title: "🎯 Advanced Projects",
        items: [
          "✅ E-Commerce App (cart, checkout, JWT auth)",
          "✅ Project Management Tool (Trello clone)",
          "✅ Chat App (WebSockets + RxJS)",
          "Complex enterprise-level applications"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Ready Angular Developer",
    subtitle: "Expert Level",
    description: "Master enterprise architecture, SSR, PWA, and deployment.",
    color: "bg-red-500",
    sections: [
      {
        title: "🏗️ Architecture & Best Practices",
        items: [
          "Scalable folder structure and code organization",
          "Shared modules and core modules architecture",
          "Smart vs Dumb components pattern",
          "Design patterns implementation in Angular"
        ]
      },
      {
        title: "🌐 Enterprise-Grade Features",
        items: [
          "Angular Universal (SSR) for SEO optimization",
          "Progressive Web Apps (PWA) with @angular/pwa",
          "Micro-frontends with Module Federation",
          "Service Workers and caching strategies"
        ]
      },
      {
        title: "🚀 DevOps & Deployment",
        items: [
          "CI/CD pipelines (GitHub Actions, GitLab CI)",
          "Docker containerization for Angular apps",
          "Deployment strategies (Vercel, Netlify, AWS Amplify)",
          "Environment configuration and build optimization"
        ]
      },
      {
        title: "🌍 Production Concerns",
        items: [
          "Internationalization (i18n) implementation",
          "Accessibility (ARIA roles and WCAG compliance)",
          "Security (XSS, CSRF prevention, Route Guards)",
          "Performance monitoring and error tracking"
        ]
      },
      {
        title: "📊 Industry Projects",
        items: [
          "✅ SaaS Dashboard (multi-tenant, role-based access)",
          "✅ Full-Stack Angular + NestJS App (LMS)",
          "✅ Enterprise-scale ERP System (modular, monorepo)",
          "Production-ready applications with full DevOps"
        ]
      }
    ]
  }
];


