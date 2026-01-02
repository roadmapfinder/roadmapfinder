export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level (0-2 Months)",
    description: "Master the fundamentals that Electron builds on",
    color: "bg-gray-600",
    sections: [
      {
        title: "Basic Web Technologies",
        items: [
          "HTML & CSS → Semantic HTML, Flexbox & Grid layouts",
          "Responsive design → Creating adaptive user interfaces",
          "JavaScript (ES6+) → Variables, Scope, Hoisting fundamentals",
          "Functions → Arrow functions and modern syntax",
          "Async patterns → Promises, Async/Await handling",
          "Classes & Modules → Object-oriented programming in JS",
          "Why: Electron apps are essentially browser UIs; strong front-end basics are required"
        ]
      },
      {
        title: "Node.js Fundamentals",
        items: [
          "Event Loop & Async Model → Understanding Node.js architecture",
          "Core Modules → fs, path, os, child_process usage",
          "NPM / Yarn → Package management and dependency handling",
          "Debugging → Node inspector and debugging tools",
          "Why: Electron embeds Node, so strong Node.js knowledge is essential"
        ]
      },
      {
        title: "Git & Version Control",
        items: [
          "Branching & Merging → Git workflow strategies",
          "Pull Requests → Code review and collaboration",
          "GitHub / GitLab workflows → Repository management",
          "Semantic commit messages → Clear version history",
          "Why: Collaboration and code quality in professional teams"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Electron Core",
    subtitle: "Beginner Level (2-3 Months)",
    description: "Learn the core architecture and APIs of Electron",
    color: "bg-green-500",
    sections: [
      {
        title: "What is Electron Internally?",
        items: [
          "Chromium + Node.js integration → Understanding the architecture",
          "Main Process → Application lifecycle and system access",
          "Renderer Processes → UI rendering and user interaction",
          "IPC → Inter-Process Communication between main and renderer"
        ]
      },
      {
        title: "Electron Project Essentials",
        items: [
          "BrowserWindow → Creating and managing application windows",
          "app → Application lifecycle events and control",
          "ipcMain / ipcRenderer → Process communication APIs",
          "Menu, Tray → Native menus and system tray integration",
          "Dialogs & Notifications → Native OS dialogs and notifications",
          "nativeImage → Working with images across platforms"
        ]
      },
      {
        title: "Build Scripts & Tooling",
        items: [
          "Project scaffolding → Electron Forge, Vite, Webpack setup",
          "Dev vs Prod configurations → Environment-specific settings",
          "Auto-reload → Hot reload during development",
          "Build optimization → Performance and bundle size"
        ]
      },
      {
        title: "Sandboxing & Security",
        items: [
          "Disable nodeIntegration → Security best practice in renderer",
          "Use contextIsolation → Isolating renderer context",
          "Proper IPC patterns → Secure communication protocols",
          "Avoid loading remote content → Security risk mitigation"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "UI Frameworks & App Structure",
    subtitle: "Intermediate Level (3-5 Months)",
    description: "Build modern UIs with frameworks and proper architecture",
    color: "bg-blue-500",
    sections: [
      {
        title: "Framework Integration",
        items: [
          "React → Most popular combination with Electron",
          "Vue 3 → Progressive framework integration",
          "Svelte → Lightweight reactive framework",
          "Angular → Enterprise framework option",
          "State management → Redux, Zustand, Pinia, Svelte stores",
          "Routing → React Router, Vue Router for navigation",
          "Component design → Reusable component architecture"
        ]
      },
      {
        title: "App Architecture",
        items: [
          "Separation of concerns → UI vs backend logic separation",
          "Feature modules → Organizing code by features",
          "Reusable components → Component library creation",
          "Smart vs Dumb components → Container and presentational patterns"
        ]
      },
      {
        title: "UI/UX Basics",
        items: [
          "Accessibility → ARIA labels, keyboard navigation",
          "Theming & dark mode → Dynamic theme switching",
          "Native UI feel → Platform-specific design patterns",
          "Responsive design → Adapting to different screen sizes"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Real-World Features",
    subtitle: "Intermediate Level (5-8 Months)",
    description: "Implement production-ready features and optimizations",
    color: "bg-purple-500",
    sections: [
      {
        title: "Persistent Storage",
        items: [
          "Local storage / IndexedDB → Browser-based storage",
          "SQLite → Lightweight embedded database",
          "LowDB / JSON databases → File-based data storage",
          "Encrypted storage → Secure credential management"
        ]
      },
      {
        title: "Networking",
        items: [
          "Fetching APIs securely → HTTP client configuration",
          "Long polling / WebSockets → Real-time communication",
          "Offline strategies → Offline-first architecture",
          "Request handling → Error handling and retries"
        ]
      },
      {
        title: "Files & System Access",
        items: [
          "Open/Save dialogs → Native file system dialogs",
          "File system access → Reading and writing files",
          "Drag & Drop → File drag and drop functionality",
          "File watchers → Monitoring file system changes"
        ]
      },
      {
        title: "Auto-Update Support",
        items: [
          "Electron autoUpdater → Built-in update mechanism",
          "Custom update servers → Self-hosted update infrastructure",
          "GitHub releases → Automatic updates from releases",
          "Update notifications → User notification system"
        ]
      },
      {
        title: "Performance & Memory",
        items: [
          "Profiling windows → Performance monitoring tools",
          "Memory leaks detection → Finding and fixing leaks",
          "Lazy loading → Loading heavy modules on demand",
          "Resource optimization → CPU and memory efficiency"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Build & Distribution",
    subtitle: "Advanced Level (8-10 Months)",
    description: "Package and distribute applications across platforms",
    color: "bg-red-500",
    sections: [
      {
        title: "Packaging Tools",
        items: [
          "Electron Forge → Modern packaging and distribution",
          "Electron Builder → Comprehensive build tool",
          "Electron Packager → Simple packaging solution",
          "Windows installers → .exe, .msi creation",
          "macOS packages → .dmg, .pkg creation",
          "Linux packages → .AppImage, .deb, .rpm creation"
        ]
      },
      {
        title: "Signing & Notarization",
        items: [
          "Code signing certificates → Windows and macOS signing",
          "Notarization on macOS → Apple notarization requirements",
          "Store deployment → Microsoft Store, Snapcraft publishing",
          "Update signing → Secure update distribution"
        ]
      },
      {
        title: "Multi-Platform Testing",
        items: [
          "Cross-OS UI/UX issues → Platform-specific testing",
          "Keyboard interaction patterns → Platform keyboard shortcuts",
          "DPI / scaling support → High DPI display handling",
          "Platform integration → Native feature testing"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Testing & Quality",
    subtitle: "Advanced Level (10-12 Months)",
    description: "Ensure reliability through comprehensive testing",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Unit & Integration Testing",
        items: [
          "Jest → JavaScript testing framework",
          "Testing Library → Component testing utilities",
          "Mocking → IPC and system API mocking",
          "Test coverage → Code coverage reporting"
        ]
      },
      {
        title: "End-to-End Testing",
        items: [
          "Playwright → Modern E2E testing framework",
          "Cypress → Component and E2E testing",
          "Spectron → Legacy Electron testing (moving to alternatives)",
          "Automated workflows → Full application testing"
        ]
      },
      {
        title: "Linting & Formatting",
        items: [
          "ESLint → JavaScript linting and code quality",
          "Prettier → Code formatting and style consistency",
          "TypeScript linting → Type checking and validation",
          "Pre-commit hooks → Automated quality checks"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Security & Best Practices",
    subtitle: "Advanced Level",
    description: "Implement security measures and industry standards",
    color: "bg-orange-500",
    sections: [
      {
        title: "Electron Security Checklist",
        items: [
          "Disable unsafe APIs → Remove security risks",
          "CSP → Content Security Policy implementation",
          "No remote code execution → Preventing code injection",
          "Sandboxing → Isolating renderer processes"
        ]
      },
      {
        title: "Stable IPC Patterns",
        items: [
          "Use validated messages → Input validation on IPC",
          "Avoid exec-based remote calls → Preventing command injection",
          "Whitelist channels → Controlled IPC communication",
          "Secure context bridges → Safe preload scripts"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Advanced + Industry Skills",
    subtitle: "Expert Level",
    description: "Master advanced patterns and enterprise features",
    color: "bg-indigo-500",
    sections: [
      {
        title: "TypeScript",
        items: [
          "Must-have → Industry standard for Electron apps",
          "Strict typing → Type safety across main and renderer",
          "Interfaces for IPC channels → Type-safe communication",
          "Advanced generics → Complex type definitions"
        ]
      },
      {
        title: "Native Addons",
        items: [
          "node-ffi / N-API → Native module integration",
          "Use native modules safely → ABI compatibility",
          "Understand node ABI versions → Version management",
          "Platform-specific builds → Native code compilation"
        ]
      },
      {
        title: "Real-Time & Offline",
        items: [
          "Sync engines → Data synchronization patterns",
          "Cache reconciliation → Conflict resolution strategies",
          "Offline-first → Working without internet connection",
          "Data consistency → Maintaining data integrity"
        ]
      },
      {
        title: "Cloud & Auth",
        items: [
          "OAuth / SSO → Single sign-on integration",
          "Token storage → Secure credential management",
          "Secure refresh → Token refresh mechanisms",
          "API integration → Backend service communication"
        ]
      },
      {
        title: "Analytics & Monitoring",
        items: [
          "Sentry → Error tracking and monitoring",
          "Log aggregation → Centralized logging systems",
          "Telemetry → Usage analytics and metrics",
          "Performance monitoring → Application performance tracking"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Soft Skills for Industry",
    subtitle: "Expert Level (Ongoing)",
    description: "Professional skills for team-based development",
    color: "bg-pink-500",
    sections: [
      {
        title: "Architecture Decisions",
        items: [
          "Modular design → Scalable application architecture",
          "Scalability → Planning for growth",
          "Maintenance planning → Long-term code maintainability",
          "Technical documentation → Architecture decision records"
        ]
      },
      {
        title: "Code Reviews",
        items: [
          "Clear comments → Code documentation standards",
          "Constructive feedback → Effective code review practices",
          "Design discussions → Collaborative problem solving",
          "Best practices → Sharing knowledge with team"
        ]
      },
      {
        title: "DevOps Basics",
        items: [
          "CI/CD → Continuous integration and deployment",
          "Automated tests → Test automation in pipelines",
          "Deployment pipelines → Streamlined release process",
          "Version management → Release and versioning strategies"
        ]
      }
    ]
  }
];