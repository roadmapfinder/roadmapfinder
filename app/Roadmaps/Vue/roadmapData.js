export const phases = [
  {
    id: 0,
    title: "Web Fundamentals",
    subtitle: "Prerequisites - Must Before Vue",
    description: "Master HTML, CSS, and JavaScript before starting Vue.js",
    color: "bg-red-600",
    sections: [
      {
        title: "HTML5 & CSS3",
        items: [
          "HTML5 → Semantic tags, forms, accessibility basics",
          "CSS3 Flexbox → Container, alignment, direction, wrapping",
          "CSS3 Grid → Template areas, auto-placement, responsive layouts",
          "Responsive Design → Media queries, mobile-first approach"
        ]
      },
      {
        title: "JavaScript ES6+ Essentials",
        items: [
          "Variables → let, const, block scoping",
          "Functions → Arrow functions, default parameters, rest/spread",
          "Destructuring → Arrays, objects, nested destructuring",
          "Promises & Async → async/await, promise chaining, error handling"
        ]
      },
      {
        title: "JavaScript Advanced Concepts",
        items: [
          "Modules → import/export, named exports, default exports",
          "Array Methods → map, filter, reduce, find, forEach, some, every",
          "Browser APIs → DOM manipulation, Events, Fetch API, LocalStorage",
          "Practice: Build static landing page and JS TODO app without frameworks"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Vue Core Foundations",
    subtitle: "Beginner Level",
    description: "Learn Vue 3 fundamentals and component-based architecture",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Setup & Installation",
        items: [
          "Node.js → npm, package management, version control",
          "Vite + Vue 3 → npm create vue@latest, project structure",
          "Vue Instance → Creating apps, mounting, configuration",
          "Dev Tools → Vue DevTools, browser extensions, debugging"
        ]
      },
      {
        title: "Template Syntax & Directives",
        items: [
          "Data Binding → Interpolation, text binding, attribute binding",
          "Directives → v-bind, v-if/v-show, v-for, v-on, v-model",
          "Event Handling → Click events, form events, event modifiers",
          "Conditional Rendering → v-if vs v-show, v-else, v-else-if"
        ]
      },
      {
        title: "Component System",
        items: [
          "Single File Components → Template, script, style structure",
          "Props → Passing data, prop validation, prop types",
          "Emits → Custom events, event payload, parent-child communication",
          "Slots → Default slots, named slots, scoped slots, slot props"
        ]
      },
      {
        title: "Reactivity & Composition API",
        items: [
          "Reactive State → ref(), reactive(), toRefs(), shallowRef()",
          "Computed Properties → Caching, dependencies, getters/setters",
          "Methods → Functions in components, this context",
          "Watchers → watch(), watchEffect(), deep watching",
          "Lifecycle Hooks → setup(), onMounted, onUpdated, onUnmounted",
          "Practice: Counter app, Todo list, Calculator, Weather app"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Routing & State Management",
    subtitle: "Intermediate Level",
    description: "Build multi-page apps with routing and centralized state",
    color: "bg-orange-500",
    sections: [
      {
        title: "Vue Router",
        items: [
          "Basic Routing → Routes configuration, router-link, router-view",
          "Dynamic Routes → Route params, dynamic segments, 404 pages",
          "Nested Routes → Child routes, nested router-view, breadcrumbs",
          "Navigation Guards → beforeEach, beforeEnter, route-level guards"
        ]
      },
      {
        title: "Advanced Routing",
        items: [
          "Lazy Loading → Code splitting, dynamic imports, performance",
          "Layout System → Multiple layouts, nested layouts, transitions",
          "Route Meta → Authentication, titles, breadcrumbs, permissions",
          "Practice: Blog app with auth routing, Dashboard layout"
        ]
      },
      {
        title: "Pinia State Management",
        items: [
          "Store Setup → defineStore, state, getters, actions",
          "State → Reactive state, accessing state, modifying state",
          "Getters → Computed values, passing arguments, accessing other stores",
          "Actions → Async actions, error handling, accessing state/getters"
        ]
      },
      {
        title: "State Persistence & Patterns",
        items: [
          "Persisted State → LocalStorage integration, serialization",
          "Store Composition → Multiple stores, store dependencies",
          "Devtools Integration → State inspection, time-travel debugging",
          "Practice: Build blog app with centralized auth and data management"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Forms, Validation & UX",
    subtitle: "Intermediate Level",
    description: "Create robust forms with validation and great user experience",
    color: "bg-blue-500",
    sections: [
      {
        title: "Form Handling",
        items: [
          "Controlled Forms → v-model, two-way binding, form state",
          "Custom Input Components → Reusable inputs, v-model on components",
          "Form Submission → Preventing defaults, handling submit, async forms",
          "Input Types → Text, checkbox, radio, select, textarea, file uploads"
        ]
      },
      {
        title: "Validation & Error Handling",
        items: [
          "VeeValidate → Schema validation, field-level validation, error messages",
          "Zod Integration → Type-safe schemas, validation rules, error handling",
          "Custom Validators → Business logic validation, async validation",
          "Error Display → Field errors, form errors, toast notifications"
        ]
      },
      {
        title: "UX Patterns",
        items: [
          "Loading States → Spinners, skeleton screens, progressive loading",
          "Empty States → No data displays, onboarding, placeholders",
          "Success Feedback → Confirmations, notifications, visual feedback",
          "Practice: Build complex multi-step forms with complete validation"
        ]
      },
      {
        title: "Accessibility",
        items: [
          "ARIA Attributes → aria-label, aria-describedby, roles",
          "Keyboard Navigation → Tab order, focus management, shortcuts",
          "Semantic Structure → Proper HTML, heading hierarchy, landmarks",
          "Screen Reader Support → Announcements, live regions, descriptions"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "API Integration",
    subtitle: "Intermediate Level",
    description: "Connect to REST APIs and handle authentication",
    color: "bg-purple-500",
    sections: [
      {
        title: "HTTP Clients & Patterns",
        items: [
          "Axios Setup → Instance creation, base URL, default headers",
          "Fetch API → Modern fetch, request/response handling",
          "REST Patterns → GET, POST, PUT, PATCH, DELETE operations",
          "Error Handling → Try/catch, error interceptors, user feedback"
        ]
      },
      {
        title: "Data Fetching Patterns",
        items: [
          "Pagination → Offset pagination, cursor pagination, infinite scroll",
          "Filtering → Query params, filter UI, multi-select filters",
          "Search → Debounce, throttle, search as you type",
          "Sorting → Column sorting, multi-column sort, sort state"
        ]
      },
      {
        title: "Authentication & Authorization",
        items: [
          "JWT Flow → Login, token storage, token refresh, logout",
          "Refresh Tokens → Automatic refresh, token expiry handling",
          "Protected Routes → Route guards, redirect to login, permissions",
          "Role-based UI → Conditional rendering, feature flags, permissions"
        ]
      },
      {
        title: "API Service Layer",
        items: [
          "Service Modules → Organizing API calls, separation of concerns",
          "Interceptors → Request/response interceptors, auth headers",
          "Error Boundaries → Global error handling, retry logic",
          "Practice: E-commerce frontend with cart, products, checkout"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "UI & Styling",
    subtitle: "Intermediate Level",
    description: "Master styling approaches and UI component libraries",
    color: "bg-green-500",
    sections: [
      {
        title: "CSS in Vue",
        items: [
          "Scoped Styles → Component-level styles, style isolation",
          "CSS Modules → Local class names, composition, theming",
          "Global Styles → App-wide styles, CSS variables, themes",
          "Dynamic Styles → :class binding, :style binding, computed classes"
        ]
      },
      {
        title: "UI Component Libraries",
        items: [
          "Tailwind CSS → Utility-first CSS, rapid development, customization",
          "Vuetify → Material Design, pre-built components, theming",
          "Element Plus → Enterprise UI, rich components, customization",
          "PrimeVue → Comprehensive suite, templates, accessibility"
        ]
      },
      {
        title: "Animations & Transitions",
        items: [
          "Vue Transitions → <Transition>, enter/leave classes, CSS animations",
          "Transition Groups → List animations, move transitions, stagger",
          "Auto Animate → Automatic animations library integration",
          "GSAP → Advanced animations, timelines, scroll triggers"
        ]
      },
      {
        title: "Responsive Design",
        items: [
          "Mobile-first → Breakpoints, responsive utilities, adaptive layouts",
          "Container Queries → Component-based responsive design",
          "Touch Interactions → Mobile gestures, swipe, pinch-to-zoom",
          "Practice: Build pixel-perfect responsive dashboard with dark mode"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced Vue Concepts",
    subtitle: "Advanced Level",
    description: "Deep dive into Vue's advanced features and optimization",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Composition Patterns",
        items: [
          "Custom Composables → Reusable logic, useXyz patterns, composition",
          "Provide/Inject → Dependency injection, prop drilling solutions",
          "Render Functions → h() function, JSX, dynamic rendering",
          "Teleport → Modal portals, toast notifications, overlay management"
        ]
      },
      {
        title: "Async & Code Organization",
        items: [
          "Suspense → Async component loading, fallback UI, error handling",
          "Async Components → defineAsyncComponent, lazy loading, prefetching",
          "Dynamic Components → <component :is>, tab systems, conditional rendering",
          "Keep-alive → Component caching, lifecycle preservation, performance"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "Code Splitting → Route-based splitting, component splitting",
          "Lazy Loading → Images, components, routes, on-demand loading",
          "Virtual Scrolling → Large lists, performance, viewport rendering",
          "Memoization → Computed caching, expensive operations, optimization"
        ]
      },
      {
        title: "SEO Fundamentals",
        items: [
          "Meta Tag Management → vue-meta, head management, dynamic titles",
          "Structured Data → JSON-LD, schema.org, rich snippets",
          "SSR Introduction → Server-side rendering concepts, Nuxt preview",
          "Practice: Build performance-optimized SPA with SEO basics"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing",
    subtitle: "Advanced Level",
    description: "Write comprehensive tests for Vue applications",
    color: "bg-pink-500",
    sections: [
      {
        title: "Unit Testing with Vitest",
        items: [
          "Vitest Setup → Configuration, test files, watch mode",
          "Testing Composables → Pure logic tests, mocking, assertions",
          "Testing Utilities → Helper functions, mock factories, test data",
          "Code Coverage → Coverage reports, threshold configuration"
        ]
      },
      {
        title: "Component Testing",
        items: [
          "Vue Test Utils → mount, shallowMount, component wrappers",
          "User Interactions → Simulating clicks, input, form submission",
          "Props & Emits → Testing component API, event assertions",
          "Slots Testing → Named slots, scoped slots, slot content"
        ]
      },
      {
        title: "Advanced Testing",
        items: [
          "Mock APIs → MSW, axios mocking, fetch mocking",
          "Async Testing → waitFor, async updates, promise resolution",
          "Snapshot Testing → Component snapshots, regression detection",
          "Practice: Achieve 80%+ test coverage on critical features"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "TypeScript Integration",
    subtitle: "Advanced Level",
    description: "Add type safety to Vue applications with TypeScript",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Vue + TypeScript Basics",
        items: [
          "Setup → tsconfig.json, Vite configuration, type declarations",
          "Component Typing → defineComponent, PropType, setup return types",
          "Props Typing → PropType, interface props, required/optional",
          "Emits Typing → Typed event payloads, emit function signatures"
        ]
      },
      {
        title: "Advanced TypeScript",
        items: [
          "Store Typing → Pinia with TypeScript, typed actions, typed getters",
          "Generic Composables → Type parameters, constraints, inference",
          "Utility Types → Readonly, Partial, Pick, Record for Vue",
          "API Types → Response typing, request typing, DTO interfaces"
        ]
      },
      {
        title: "Type Safety Patterns",
        items: [
          "Type Guards → Runtime type checking, validation, narrowing",
          "Discriminated Unions → State modeling, exhaustive checking",
          "Strict Mode → Strict null checks, no implicit any, strict typing",
          "Practice: Convert existing JavaScript Vue app to TypeScript"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Nuxt.js (SSR Framework)",
    subtitle: "Advanced Level",
    description: "Build server-rendered Vue apps with Nuxt.js",
    color: "bg-teal-500",
    sections: [
      {
        title: "Nuxt Fundamentals",
        items: [
          "File-based Routing → pages/ directory, dynamic routes, nested routes",
          "Server Routes → server/ directory, API endpoints, middleware",
          "Auto Imports → Components, composables, utils auto-importing",
          "Layouts → app.vue, default layout, custom layouts, error pages"
        ]
      },
      {
        title: "Data Fetching & SEO",
        items: [
          "useFetch → Server-side data fetching, caching, reactivity",
          "useAsyncData → Custom fetching, transformations, error handling",
          "SEO Meta → useHead, useSeoMeta, dynamic meta tags",
          "Structured Data → JSON-LD, Open Graph, Twitter Cards"
        ]
      },
      {
        title: "Rendering Modes",
        items: [
          "SSR → Server-side rendering, universal apps, hydration",
          "CSR → Client-side rendering, SPA mode, when to use",
          "Static Generation → Pre-rendering, SSG, build-time generation",
          "Hybrid Rendering → Route rules, per-page rendering strategies"
        ]
      },
      {
        title: "Nuxt Ecosystem",
        items: [
          "Middleware → Route middleware, server middleware, global middleware",
          "Modules → Nuxt modules, community modules, custom modules",
          "Plugins → Client plugins, server plugins, auto-registration",
          "Practice: SEO blog platform, SaaS marketing site with SSR"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Enterprise Practices",
    subtitle: "Advanced Level",
    description: "Learn production-ready patterns and architecture",
    color: "bg-rose-500",
    sections: [
      {
        title: "Project Architecture",
        items: [
          "Monorepo Structure → Nx, Turborepo, shared packages, workspace",
          "Feature-based Architecture → Domain-driven design, module boundaries",
          "Clean Architecture → Layers separation, dependency injection",
          "Folder Structure → Scalable organization, naming conventions"
        ]
      },
      {
        title: "API Service Patterns",
        items: [
          "Service Layer → API abstraction, service classes, repositories",
          "DTO Models → Data transfer objects, type safety, validation",
          "Error Handling → Centralized errors, error types, user messages",
          "Logging → Error tracking, analytics, debugging tools"
        ]
      },
      {
        title: "Code Quality",
        items: [
          "Error Boundaries → Global error handling, fallback UI, recovery",
          "Type Safety → Full TypeScript coverage, strict mode, no any",
          "Code Review → PR templates, review guidelines, best practices",
          "Documentation → JSDoc, component docs, architecture diagrams"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Deployment & DevOps",
    subtitle: "Advanced Level",
    description: "Deploy and optimize Vue applications for production",
    color: "bg-amber-500",
    sections: [
      {
        title: "Build Optimization",
        items: [
          "Vite Build → Production build, tree-shaking, minification",
          "Bundle Analysis → Rollup visualizer, bundle size optimization",
          "Asset Optimization → Image compression, font optimization, CDN",
          "Environment Variables → .env files, runtime config, secrets management"
        ]
      },
      {
        title: "Deployment Platforms",
        items: [
          "Vercel → Zero-config deployment, preview deployments, edge functions",
          "Netlify → Continuous deployment, serverless functions, forms",
          "Docker → Containerization, multi-stage builds, production images",
          "CI/CD → GitHub Actions, automated testing, deployment pipelines"
        ]
      },
      {
        title: "Monitoring & Performance",
        items: [
          "Error Tracking → Sentry integration, error reporting, alerts",
          "Analytics → Google Analytics, custom events, user tracking",
          "Performance Monitoring → Lighthouse scores, Core Web Vitals, RUM",
          "Practice: Deploy production app with monitoring and CI/CD"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Career Skills",
    subtitle: "Expert Level",
    description: "Professional development and team collaboration skills",
    color: "bg-lime-500",
    sections: [
      {
        title: "Version Control & Collaboration",
        items: [
          "Git Workflows → Feature branches, gitflow, trunk-based development",
          "Pull Requests → PR descriptions, review process, conflict resolution",
          "Code Review → Giving feedback, receiving feedback, best practices",
          "Documentation → README, CONTRIBUTING, code comments, wikis"
        ]
      },
      {
        title: "Agile Development",
        items: [
          "Agile Methodologies → Scrum, Kanban, sprint planning, retrospectives",
          "Jira/Project Management → Ticket management, estimation, tracking",
          "Team Communication → Stand-ups, technical discussions, async updates",
          "Code Readability → Clean code, naming conventions, refactoring"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "Technical Interviews → Live coding, algorithm questions, system design",
          "Vue-specific Questions → Reactivity, lifecycle, composition API, Vuex vs Pinia",
          "Portfolio Projects → GitHub profile, live demos, case studies",
          "Behavioral Questions → STAR method, teamwork, problem-solving"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Industry Projects",
    subtitle: "Expert Level",
    description: "Build production-quality projects for your portfolio",
    color: "bg-violet-500",
    sections: [
      {
        title: "Beginner Projects",
        items: [
          "Todo Application → CRUD operations, filters, local storage",
          "Notes App → Rich text editor, categories, search functionality",
          "Weather App → API integration, geolocation, 5-day forecast",
          "Requirements: Clean code, responsive design, error handling"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Blog Platform → Posts, comments, user authentication, markdown editor",
          "Dashboard UI → Charts, data tables, filters, real-time updates",
          "E-commerce Store → Products, cart, checkout, order management",
          "Requirements: Routing, state management, API integration, testing"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "SaaS Admin Panel → Multi-tenant, role-based access, analytics",
          "Social Media Clone → Posts, likes, comments, real-time notifications",
          "Project Management Tool → Kanban boards, tasks, team collaboration",
          "Requirements: Complex state, real-time features, performance optimization"
        ]
      },
      {
        title: "Full-Stack Projects",
        items: [
          "Complete Web Application → Frontend + Backend, database, authentication",
          "Real-time Chat → WebSockets, typing indicators, file sharing",
          "Booking System → Calendar, availability, payments, notifications",
          "Requirements: Production deployment, monitoring, documentation, tests"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Vue Ecosystem & Tools",
    subtitle: "Expert Level",
    description: "Master the broader Vue ecosystem and specialized tools",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "Data Fetching & State",
        items: [
          "Vue Query → Server state management, caching, automatic refetching",
          "VueUse → Composition utilities, useXyz patterns, 200+ composables",
          "Pinia Plugins → Persistence, undo/redo, subscriptions, debugging",
          "Apollo Client → GraphQL integration, cache management, queries/mutations"
        ]
      },
      {
        title: "Internationalization & Charts",
        items: [
          "Vue i18n → Multi-language support, translations, pluralization",
          "Chart.js/Vue → Data visualization, interactive charts, dashboards",
          "ECharts → Advanced visualizations, maps, 3D charts, themes",
          "D3.js Integration → Custom visualizations, animations, interactivity"
        ]
      },
      {
        title: "Progressive Web Apps",
        items: [
          "PWA Setup → Service workers, manifest, offline support",
          "Vite PWA Plugin → Auto-generate SW, precaching, update prompts",
          "Push Notifications → Web push, notification API, subscriptions",
          "Install Prompts → Add to home screen, app-like experience"
        ]
      },
      {
        title: "Cross-Platform Development",
        items: [
          "Electron + Vue → Desktop applications, native APIs, packaging",
          "Capacitor + Vue → iOS/Android apps, native plugins, deployment",
          "Tauri + Vue → Lightweight desktop apps, Rust backend, security",
          "Practice: Build cross-platform app from single Vue codebase"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Senior Developer Path",
    subtitle: "Expert Level",
    description: "Advance to senior-level skills and thought leadership",
    color: "bg-emerald-500",
    sections: [
      {
        title: "Framework Design & Architecture",
        items: [
          "Plugin Development → Vue plugins, install() function, global properties",
          "Component Libraries → Design systems, distribution, documentation",
          "CLI Tools → Node.js CLIs, scaffolding, code generation",
          "Framework Internals → Understanding Vue's source code, reactivity system"
        ]
      },
      {
        title: "Technical Leadership",
        items: [
          "Architecture Decisions → Choosing patterns, trade-offs, tech stack",
          "Code Reviews → Mentoring, teaching, elevating team quality",
          "Mentoring Developers → Pair programming, career guidance, knowledge sharing",
          "Technical Writing → Blog posts, tutorials, documentation, talks"
        ]
      },
      {
        title: "Open Source Contributions",
        items: [
          "Vue.js Core → Contributing to Vue, RFCs, discussions, PRs",
          "Ecosystem Projects → Pinia, VueUse, Nuxt, community libraries",
          "Creating Libraries → NPM packages, semantic versioning, maintenance",
          "Community Building → Conferences, meetups, Discord/forum support"
        ]
      },
      {
        title: "Continuous Learning",
        items: [
          "Vue RFC Process → Following proposals, new features, roadmap",
          "Web Standards → TC39, WHATWG, upcoming browser features",
          "Performance Research → Benchmarking, profiling, optimization patterns",
          "Industry Trends → Meta-frameworks, edge computing, serverless, AI integration"
        ]
      }
    ]
  }
];