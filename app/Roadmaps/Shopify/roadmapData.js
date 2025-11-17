export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Before Starting Shopify",
    description: "Web fundamentals you must master before diving into Shopify development.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🌐 Core Web Technologies",
        items: [
          "HTML5, semantic HTML",
          "CSS3 (Flexbox, Grid), responsive design",
          "Accessibility basics (ARIA, semantic markup)",
          "Modern CSS techniques and frameworks"
        ]
      },
      {
        title: "💻 JavaScript Essentials",
        items: [
          "JavaScript (ES6+): modules, async/await, fetch",
          "DOM manipulation basics",
          "Event handling and browser APIs",
          "Modern JavaScript patterns"
        ]
      },
      {
        title: "🔧 Developer Tools",
        items: [
          "Git, GitHub, pull requests workflow",
          "Terminal/command line basics",
          "npm / pnpm / yarn package managers",
          "Node.js fundamentals"
        ]
      },
      {
        title: "🎯 Hands-on Tasks",
        items: [
          "Make 3 responsive static pages (portfolio, product card, checkout mock)",
          "Publish code on GitHub",
          "Practice pull requests and code reviews",
          "Build responsive layouts without frameworks"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Shopify Fundamentals",
    subtitle: "Stage 1",
    description: "Platform literacy and core Shopify concepts for theme development.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🏪 Platform Basics",
        items: [
          "Shopify platform: stores, products, collections, metafields",
          "Themes, apps, admin vs storefront architecture",
          "Understanding merchant workflows",
          "Shopify ecosystem overview"
        ]
      },
      {
        title: "💧 Liquid Templating",
        items: [
          "Liquid syntax fundamentals",
          "Objects, filters, and control flow",
          "Template structure and organization",
          "Essential for all theme work"
        ]
      },
      {
        title: "🎨 Online Store 2.0",
        items: [
          "Sections everywhere concept",
          "JSON templates structure",
          "App blocks integration",
          "Theme app extensions architecture"
        ]
      },
      {
        title: "🛠️ Development Tools",
        items: [
          "Shopify CLI & Theme Check",
          "Local theme dev and linting",
          "Theme previewing and testing",
          "VS Code + Liquid extension"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "Clone Dawn (Shopify reference theme) and customize it",
          "Modify colors, typography, product template",
          "Build simple theme from scratch: home, collection, product, cart, contact",
          "Use sections and JSON templates"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate: Theme Mastery",
    subtitle: "Stage 2",
    description: "Advanced theming, performance optimization, and merchant workflows.",
    color: "bg-green-500",
    sections: [
      {
        title: "⚡ Advanced Liquid Patterns",
        items: [
          "Performance optimization: limiting loops",
          "Using metafields for custom data",
          "Complex conditional logic",
          "Advanced filtering and data manipulation"
        ]
      },
      {
        title: "🧩 App Integration",
        items: [
          "App blocks architecture",
          "Theme app extension patterns",
          "How apps insert UI into themes",
          "Extension point implementation"
        ]
      },
      {
        title: "♿ Performance & Accessibility",
        items: [
          "Core Web Vitals optimization for Shopify themes",
          "Image optimization and lazy loading",
          "Preconnect and resource hints",
          "WCAG compliance and testing"
        ]
      },
      {
        title: "🔧 Store Admin",
        items: [
          "Bulk edits and automation",
          "GraphQL Admin API basics",
          "Workflow optimization",
          "Custom admin tools"
        ]
      },
      {
        title: "🎯 Projects",
        items: [
          "Create marketplace-quality section (mega-menu, product comparer)",
          "Publish to dev store for testing",
          "Implement theme localization (multi-language)",
          "Add metafield-driven banners"
        ]
      },
      {
        title: "✅ Checklist",
        items: [
          "Theme passes Theme Check with no critical issues",
          "Can set up dev store and push/preview via Shopify CLI",
          "Understand section and block architecture",
          "Ready for production deployment"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "App Development",
    subtitle: "Stage 3",
    description: "Build full-featured Shopify apps with backend and frontend integration.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📱 App Architecture",
        items: [
          "App types: public, custom, private, extension-only",
          "App registration in Partner Dashboard",
          "App lifecycle and deployment",
          "Version management"
        ]
      },
      {
        title: "🔐 Authentication & Integration",
        items: [
          "OAuth flow implementation",
          "App proxy configuration",
          "Webhooks setup and handling",
          "App billing integration"
        ]
      },
      {
        title: "🔌 APIs Mastery",
        items: [
          "Shopify Admin API (GraphQL recommended)",
          "Storefront API (GraphQL)",
          "Mutations and queries patterns",
          "Rate limits and optimization"
        ]
      },
      {
        title: "🎨 UI Development",
        items: [
          "Polaris design system (unified web components)",
          "App Bridge for Admin UIs",
          "Consistent user experience",
          "Responsive admin interfaces"
        ]
      },
      {
        title: "💻 Tech Stack",
        items: [
          "Node.js + Express / Koa (or Ruby on Rails)",
          "Next.js / Remix / Hydrogen for app UIs",
          "Database: PostgreSQL / MongoDB / Firebase",
          "Modern deployment practices"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "Starter app: OAuth + dashboard reading products via GraphQL",
          "Show analytics and deploy on Render/Heroku/Vercel",
          "Full app with Polaris + App Bridge embedded in admin",
          "Add billing flow (recurring charge) and webhook handlers"
        ]
      },
      {
        title: "📚 Important Docs",
        items: [
          "App extensions list and patterns",
          "Extension-only apps architecture",
          "App Bridge & Polaris documentation",
          "Best practices guides"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Functions & Checkout Logic",
    subtitle: "Stage 4",
    description: "Master Shopify Functions for advanced commerce logic and checkout customization.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⚙️ Functions Architecture",
        items: [
          "Shopify Functions replaced Scripts",
          "Extension targets and invocation model",
          "Input queries (GraphQL)",
          "Output structure and validation"
        ]
      },
      {
        title: "🦀 Language & Performance",
        items: [
          "Compile to WebAssembly for speed",
          "Rust recommended (best performance, lowest instruction counts)",
          "JavaScript/AssemblyScript for prototyping",
          "Performance benchmarking"
        ]
      },
      {
        title: "🔧 Development & Testing",
        items: [
          "Local dev with function-runner",
          "shopify app function build/deploy flows",
          "Testing edge cases",
          "Debugging function execution"
        ]
      },
      {
        title: "🎯 Projects",
        items: [
          "Build discount function with complex logic",
          "Test locally with function-runner",
          "Migrate a Shopify Script to Function",
          "Compare behavior and performance"
        ]
      },
      {
        title: "📊 Testing & Constraints",
        items: [
          "Benchmark instruction counts",
          "Stay within size/latency constraints",
          "Edge-critical flow optimization",
          "Production readiness validation"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Headless Storefronts",
    subtitle: "Stage 5: Hydrogen & Oxygen",
    description: "Build custom storefronts with modern frameworks and hosting.",
    color: "bg-red-500",
    sections: [
      {
        title: "⚛️ Hydrogen Framework",
        items: [
          "Hydrogen fundamentals (Remix-based React)",
          "Data fetching patterns with Storefront API",
          "Server components for performance",
          "Modern React patterns"
        ]
      },
      {
        title: "🚀 Deployment & Performance",
        items: [
          "Deploy to Oxygen (Shopify's edge platform)",
          "Alternative hosts: Vercel, Netlify",
          "Caching strategies and optimization",
          "SSR and streaming implementation"
        ]
      },
      {
        title: "🎯 Projects",
        items: [
          "Build headless storefront with Hydrogen",
          "Display products with cart + checkout integration",
          "Deploy to Oxygen or Vercel",
          "Implement server-side rendering patterns",
          "Add image optimization and fast cache invalidation"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Testing, CI/CD & Security",
    subtitle: "Stage 6",
    description: "Production-grade practices for professional Shopify development.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🔄 Continuous Integration",
        items: [
          "GitHub Actions for automation",
          "Run Theme Check and linting",
          "Unit tests in pipeline",
          "shopify theme push in preview environments"
        ]
      },
      {
        title: "🔒 Security Best Practices",
        items: [
          "Validate webhooks signatures",
          "Verify OAuth scopes",
          "Secure storage for secrets",
          "Token rotation and management"
        ]
      },
      {
        title: "📊 Monitoring & Observability",
        items: [
          "Logs with Sentry / Logflare",
          "Function execution logs",
          "Webhook retry monitoring",
          "Error tracking and alerting"
        ]
      },
      {
        title: "⚡ Performance Optimization",
        items: [
          "Lighthouse and Core Web Vitals",
          "Remove render-blocking assets",
          "Optimize Liquid loops and queries",
          "Asset optimization strategies"
        ]
      },
      {
        title: "🎯 Projects",
        items: [
          "Set up CI workflow with Theme Check and linters",
          "Deploy on merge to staging store",
          "Add telemetry to app (errors + metrics)",
          "Implement comprehensive monitoring"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Real World & Business Skills",
    subtitle: "Stage 7",
    description: "Ship production apps and work professionally with merchants.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🏪 App Store Publishing",
        items: [
          "Publish apps to Shopify App Store",
          "App listing and descriptions",
          "App review requirements",
          "Merchant support setup",
          "Note: Shopify changed revenue rules recently"
        ]
      },
      {
        title: "💼 Professional Services",
        items: [
          "Freelance / agency skills",
          "Onboarding merchants effectively",
          "Project scoping and estimation",
          "SLAs and uptime commitments"
        ]
      },
      {
        title: "🔄 Version Management",
        items: [
          "Versioning for themes and extensions",
          "Update strategies and migrations",
          "Backward compatibility",
          "Change management"
        ]
      },
      {
        title: "🌟 Community Contribution",
        items: [
          "Contribute to Dawn or plugins",
          "Open source contributions",
          "Build credibility and reputation",
          "Help other developers"
        ]
      },
      {
        title: "🎯 Milestone Projects",
        items: [
          "Launch production app in App Store (public)",
          "Build private app for merchant (custom)",
          "Deliver complete theme + app integration",
          "Include billing, analytics, and support docs"
        ]
      }
    ]
  }
];
