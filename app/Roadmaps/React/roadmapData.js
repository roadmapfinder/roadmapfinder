export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Web Dev Core (Before React)",
    description: "Solid foundation in web development essentials before diving into React",
    color: "bg-gray-600",
    sections: [
      {
        title: "HTML5 & CSS3 Fundamentals",
        items: [
          "HTML5 → Semantic tags, forms, accessibility basics for modern web",
          "CSS3 → Flexbox, Grid, responsive design, animations and transitions",
          "CSS Preprocessors → Sass/SCSS for efficient styling workflows",
          "Web Standards → W3C compliance, semantic markup, accessibility guidelines"
        ]
      },
      {
        title: "JavaScript ES6+ Mastery",
        items: [
          "Variables & Functions → let/const, arrow functions, template literals",
          "Advanced Features → Destructuring, spread/rest operators, modules",
          "Async JavaScript → Promises, async/await, fetch API for data handling",
          "OOP Concepts → Classes, prototypes, inheritance, encapsulation basics"
        ]
      },
      {
        title: "TypeScript Foundation",
        items: [
          "Type System → Interfaces, types vs interfaces, union/intersection types",
          "Advanced Types → Generics, utility types, conditional types",
          "React Integration → FC, PropsWithChildren, component typing patterns",
          "Configuration → tsconfig.json, strict mode, module resolution"
        ]
      },
      {
        title: "Development Environment",
        items: [
          "Code Editor → VS Code with extensions, debugging setup",
          "Version Control → Git fundamentals, branching, collaboration workflows",
          "Package Managers → npm/yarn, dependency management, scripts",
          "Browser DevTools → Debugging, network analysis, performance profiling"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "React Foundations",
    subtitle: "Core React Concepts (1-2 months)",
    description: "Master the fundamental concepts that power modern React applications",
    color: "bg-blue-500",
    sections: [
      {
        title: "React Basics & JSX",
        items: [
          "React Philosophy → UI library concept, component-based architecture",
          "JSX Syntax → JavaScript XML, Babel transpilation, JSX expressions",
          "Components → Functional vs Class components (focus on Functional)",
          "Props & State → Data flow, immutability, component communication"
        ]
      },
      {
        title: "Event Handling & Lists",
        items: [
          "Event System → SyntheticEvents, event delegation, handlers",
          "Forms → Controlled vs uncontrolled components, form validation",
          "Lists & Keys → Dynamic rendering, reconciliation, performance optimization",
          "Conditional Rendering → Ternary operators, logical AND, early returns"
        ]
      },
      {
        title: "React Hooks Fundamentals",
        items: [
          "useState → State management in functional components, updates",
          "useEffect → Side effects, lifecycle methods, cleanup functions",
          "useRef → DOM manipulation, mutable values, imperative patterns",
          "useContext → Global state, prop drilling solutions, provider pattern"
        ]
      },
      {
        title: "React 18/19 Modern Features",
        items: [
          "Concurrent Rendering → Automatic batching, concurrent features basics",
          "React 19 Transitions → Async transitions, pending states, error handling",
          "Suspense → Data fetching patterns, loading states, error boundaries",
          "Server Components → RSC introduction, client vs server rendering"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate React",
    subtitle: "App Development Skills (2-4 months)",
    description: "Building complete applications with routing, forms, and state management",
    color: "bg-green-500",
    sections: [
      {
        title: "Routing & Navigation",
        items: [
          "React Router v7 → BrowserRouter, routes, navigation patterns",
          "Next.js App Router → File-based routing, layouts, nested routing",
          "Route Protection → Authentication guards, private routes, redirects",
          "Dynamic Routing → URL parameters, query strings, programmatic navigation"
        ]
      },
      {
        title: "Forms & Validation",
        items: [
          "React Hook Form → Performance-optimized forms, minimal re-renders",
          "Validation Libraries → Zod/Yup schema validation, error handling",
          "Form Patterns → Field arrays, nested objects, conditional fields",
          "File Uploads → Handling files, progress indicators, validation"
        ]
      },
      {
        title: "State Management Evolution",
        items: [
          "Local State → useState patterns, state lifting, composition",
          "Context API → Global state, multiple contexts, optimization",
          "Redux Toolkit → Modern Redux, RTK Query, async actions",
          "Alternative Solutions → Zustand, Jotai, Recoil for lighter apps"
        ]
      },
      {
        title: "Data Fetching & Styling",
        items: [
          "Fetch Patterns → fetch API, error handling, loading states",
          "TanStack Query → Caching, pagination, mutations, background updates",
          "Styling Solutions → CSS Modules, TailwindCSS, CSS-in-JS approaches",
          "Component Libraries → Radix UI, shadcn/ui, Material UI integration"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced React",
    subtitle: "Production-Level Skills (4-6 months)",
    description: "Production-ready applications with Next.js, performance optimization, and testing",
    color: "bg-purple-500",
    sections: [
      {
        title: "Next.js 15 Mastery",
        items: [
          "App Router → Server Components, streaming, Turbopack builds",
          "Rendering Strategies → Static vs SSR vs ISR, performance implications",
          "Edge Functions → Serverless functions, API routes, middleware",
          "SEO Optimization → Metadata API, structured data, sitemap generation"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "React Optimization → React.memo, useMemo, useCallback patterns",
          "Code Splitting → React.lazy, Suspense, dynamic imports, bundle analysis",
          "Rendering Performance → Avoiding re-renders, profiler usage, optimization",
          "Asset Optimization → Image optimization, font loading, resource hints"
        ]
      },
      {
        title: "Testing Ecosystem",
        items: [
          "Unit Testing → Vitest (Vite-native), Jest-compatible testing patterns",
          "Component Testing → React Testing Library, user-centric testing",
          "E2E Testing → Playwright/Cypress, integration testing strategies",
          "Test Strategy → Test pyramid, coverage, CI/CD integration"
        ]
      },
      {
        title: "Modern Tooling",
        items: [
          "Vite 7 → Fast builds, native ES modules, plugin ecosystem",
          "Code Quality → ESLint, Prettier, pre-commit hooks, code standards",
          "Development → Husky, lint-staged, Git hooks, workflow automation",
          "Component Development → Storybook, component documentation, design systems"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Industry-Ready Mastery",
    subtitle: "Professional Development (6-8+ months)",
    description: "Enterprise-level skills with architecture patterns, security, and deployment",
    color: "bg-red-500",
    sections: [
      {
        title: "Architecture & Patterns",
        items: [
          "Project Structure → Feature-based folders, scalable organization",
          "Design Systems → Atomic Design, component libraries, design tokens",
          "Monorepos → Turborepo/Nx, workspace management, shared packages",
          "Clean Architecture → SOLID principles, separation of concerns, maintainability"
        ]
      },
      {
        title: "Security & Authentication",
        items: [
          "Authentication → JWT tokens, NextAuth, OAuth providers integration",
          "Security Practices → Environment variables, API protection, HTTPS",
          "Rate Limiting → API throttling, DDoS protection, abuse prevention",
          "Data Security → Input validation, XSS prevention, secure coding"
        ]
      },
      {
        title: "Accessibility & SEO",
        items: [
          "A11y Standards → ARIA roles, keyboard navigation, screen readers",
          "Performance Audits → Lighthouse optimization, Core Web Vitals",
          "SEO Excellence → Meta tags, OpenGraph, structured data, analytics",
          "Internationalization → i18n, localization, multi-language support"
        ]
      },
      {
        title: "DevOps & Deployment",
        items: [
          "CI/CD Pipelines → GitHub Actions, automated testing, deployment",
          "Cloud Deployment → Vercel, Netlify, AWS, containerization strategies",
          "Monitoring → Error tracking, performance monitoring, analytics",
          "Containerization → Docker, Kubernetes basics, production deployment"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Career Preparation",
    subtitle: "Industry Professional (Ongoing)",
    description: "Portfolio building, open source contribution, and career advancement",
    color: "bg-indigo-600",
    sections: [
      {
        title: "Portfolio Development",
        items: [
          "Project Showcase → 3-4 production-grade applications with case studies",
          "Technical Writing → Documentation, blog posts, knowledge sharing",
          "Code Quality → Clean code examples, best practices demonstration",
          "Performance Metrics → Load times, SEO scores, accessibility ratings"
        ]
      },
      {
        title: "Open Source & Community",
        items: [
          "Contributions → React libraries, documentation improvements, bug fixes",
          "Community Engagement → Stack Overflow, Discord, technical discussions",
          "Knowledge Sharing → Conference talks, workshops, mentoring others",
          "Networking → Developer meetups, online communities, professional connections"
        ]
      },
      {
        title: "Advanced Specialization",
        items: [
          "System Design → Frontend architecture, scaling considerations",
          "Performance Engineering → Advanced optimization, micro-frontends",
          "Team Leadership → Code reviews, architectural decisions, mentoring",
          "Technology Evaluation → Framework comparison, technology adoption"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "Technical Skills → Coding challenges, system design, React concepts",
          "Portfolio Presentation → Project walkthroughs, technical decisions",
          "Soft Skills → Communication, problem-solving, team collaboration",
          "Market Research → Salary negotiation, company culture, career growth"
        ]
      }
    ]
  }
];

export const essentialTools = [
  {
    category: "⚡ Development Tools",
    tools: [
      "Vite 7 (Fast builds)",
      "TypeScript (Type safety)",
      "ESLint + Prettier",
      "React DevTools"
    ]
  },
  {
    category: "🎨 UI & Styling",
    tools: [
      "TailwindCSS (Utility-first)",
      "shadcn/ui (Components)",
      "Framer Motion (Animations)",
      "Storybook (Documentation)"
    ]
  },
  {
    category: "🗄️ State & Data",
    tools: [
      "Redux Toolkit (Complex state)",
      "TanStack Query (Server state)",
      "Zustand (Simple state)",
      "React Hook Form"
    ]
  }
];

export const careerPaths = [
  {
    title: "🌐 Frontend Developer",
    focus: "UI/UX implementation",
    skills: "React, CSS, responsive design",
    growth: "Senior → Lead Frontend",
    salary: "$70k - $150k+"
  },
  {
    title: "⚡ Full Stack Developer",
    focus: "End-to-end development",
    skills: "React + Node.js/Python",
    growth: "Senior → Tech Lead",
    salary: "$80k - $180k+"
  },
  {
    title: "🏗️ Solution Architect",
    focus: "System design, architecture",
    skills: "React + cloud + leadership",
    growth: "Principal → VP Engineering",
    salary: "$120k - $250k+"
  }
];

export const finalTips = [
  "Build real, deployable projects - quality over quantity matters",
  "Contribute to React ecosystem - libraries, documentation, community",
  "Stay updated with React RFC, Next.js releases, and ecosystem changes",
  "Practice system design for frontend - scaling, performance, architecture",
  "Join React communities (Discord, Reddit, conferences) for networking"
];