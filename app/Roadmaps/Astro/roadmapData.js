
export const phases = [
  {
    id: 0,
    title: "Web Foundations",
    subtitle: "Mandatory",
    description: "Don't skip this. Astro assumes web fundamentals.",
    color: "bg-gray-500",
    sections: [
      {
        title: "📚 Learn",
        items: [
          "HTML5 (semantic tags, accessibility basics)",
          "CSS3: Flexbox, Grid, Responsive design",
          "JavaScript (ES6+): let/const, arrow functions",
          "Arrays & objects manipulation",
          "async / await patterns",
          "ES6 modules"
        ]
      },
      {
        title: "🎯 Outcome",
        items: [
          "Understand how browsers render pages",
          "Comfortable with DOM & modern JS"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Static landing page",
          "✅ Blog layout (HTML + CSS only)"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Astro Fundamentals",
    subtitle: "Beginner",
    description: "This is where Astro thinking starts.",
    color: "bg-blue-500",
    sections: [
      {
        title: "💡 Core Concepts",
        items: [
          "What is Astro & why it exists",
          "Astro vs React / Next.js / SvelteKit",
          "Zero-JS by default philosophy",
          "File-based routing"
        ]
      },
      {
        title: "🛠️ Learn Astro Basics",
        items: [
          "npm create astro@latest",
          "Project structure understanding",
          ".astro components",
          "Frontmatter (---)",
          "JSX-like syntax (but not React!)",
          "Passing props",
          "Slots (<slot />)",
          "Layouts"
        ]
      },
      {
        title: "📊 Data Handling",
        items: [
          "Local data (JS objects)",
          "Markdown & MDX",
          "Astro.glob()"
        ]
      },
      {
        title: "🎨 Styling",
        items: [
          "Scoped styles in .astro",
          "Global styles",
          "CSS modules",
          "Tailwind with Astro"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Personal portfolio",
          "✅ Markdown blog",
          "✅ Docs-style site"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Content & Static Power",
    subtitle: "Intermediate",
    description: "Astro shines here.",
    color: "bg-green-500",
    sections: [
      {
        title: "📚 Content Collections (Very Important)",
        items: [
          "content/config.ts",
          "Zod schemas",
          "Type-safe frontmatter",
          "Markdown + MDX pipelines"
        ]
      },
      {
        title: "🔍 SEO & Performance",
        items: [
          "@astrojs/sitemap",
          "@astrojs/rss",
          "Meta tags",
          "Open Graph",
          "Image optimization (astro:assets)"
        ]
      },
      {
        title: "🛣️ Routing",
        items: [
          "Dynamic routes [slug].astro",
          "Pagination",
          "Nested routes"
        ]
      },
      {
        title: "🔌 Integrations",
        items: [
          "Tailwind",
          "MDX",
          "Sitemap",
          "Partytown (third-party scripts)"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ SEO-optimized blog",
          "✅ Documentation website",
          "✅ Static SaaS marketing site"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Islands Architecture",
    subtitle: "Advanced Core",
    description: "This is where Astro becomes powerful.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🏝️ Learn Islands Architecture Deeply",
        items: [
          "What an 'island' is",
          "Partial hydration",
          "Server-first rendering",
          "JS only where needed"
        ]
      },
      {
        title: "⚛️ UI Framework Integration",
        items: [
          "React in Astro",
          "Vue in Astro",
          "Svelte in Astro",
          "Solid.js (highly recommended)"
        ]
      },
      {
        title: "💧 Hydration Strategies",
        items: [
          "client:load",
          "client:idle",
          "client:visible",
          "client:media",
          "client:only"
        ]
      },
      {
        title: "🔄 State Management",
        items: [
          "Local component state",
          "Signals (Solid)",
          "Minimal global state patterns"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Blog with interactive comments",
          "✅ Marketing site with animated sections",
          "✅ Landing page with interactive pricing calculator"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backend & Server Features",
    subtitle: "Pro Level",
    description: "Astro is no longer 'just static'.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🖥️ Astro Server",
        items: [
          "SSR vs SSG vs Hybrid",
          "output: 'server' vs 'static'",
          "Adapters (Node, Vercel, Netlify)"
        ]
      },
      {
        title: "🔌 API Routes",
        items: [
          "src/pages/api/*.ts",
          "REST endpoints",
          "JSON responses",
          "Auth tokens"
        ]
      },
      {
        title: "📝 Forms & Actions",
        items: [
          "Astro Actions",
          "Server-side form handling",
          "Validation",
          "Secure submission"
        ]
      },
      {
        title: "🔐 Authentication",
        items: [
          "Auth.js with Astro",
          "Session handling",
          "Protected routes"
        ]
      },
      {
        title: "💾 Databases",
        items: [
          "Prisma + Astro",
          "Supabase",
          "PlanetScale",
          "SQLite (local)"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Authenticated dashboard",
          "✅ Contact form with DB storage",
          "✅ Blog CMS-lite"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Performance, DX & Architecture",
    subtitle: "Industry Level",
    description: "This separates hobby devs from professionals.",
    color: "bg-red-500",
    sections: [
      {
        title: "⚡ Performance",
        items: [
          "Bundle analysis",
          "Image loading strategies",
          "Critical CSS",
          "Font optimization",
          "Lighthouse 95+"
        ]
      },
      {
        title: "🏗️ Architecture",
        items: [
          "Monorepo with Astro",
          "Shared UI packages",
          "Design systems",
          "Component composition patterns"
        ]
      },
      {
        title: "📘 Type Safety",
        items: [
          "TypeScript everywhere",
          "Zod for runtime validation",
          "Typed content collections"
        ]
      },
      {
        title: "♿ Accessibility (A11y)",
        items: [
          "Semantic HTML",
          "Keyboard navigation",
          "ARIA (only when needed)",
          "Color contrast"
        ]
      },
      {
        title: "🧪 Testing",
        items: [
          "Playwright",
          "Vitest",
          "Snapshot testing"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Production & Deployment",
    subtitle: "Real-world Readiness",
    description: "Ship production-grade applications.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🔄 CI/CD",
        items: [
          "GitHub Actions",
          "Build pipelines",
          "Preview deployments"
        ]
      },
      {
        title: "🚀 Deployment Platforms",
        items: [
          "Vercel",
          "Netlify",
          "Cloudflare Pages",
          "Self-hosted Node"
        ]
      },
      {
        title: "📊 Monitoring",
        items: [
          "Error tracking",
          "Performance metrics",
          "Logging"
        ]
      },
      {
        title: "🔒 Security",
        items: [
          "CSP headers",
          "XSS protection",
          "Form abuse prevention"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Industry-Grade Projects",
    subtitle: "Must Build",
    description: "These define employability.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🎯 Required Projects",
        items: [
          "✅ Content-heavy blog platform (MDX + collections, SEO optimized)",
          "✅ SaaS marketing website (Performance focused, Analytics integrated)",
          "✅ Hybrid dashboard (SSR, Auth, DB integration)",
          "✅ Docs platform (Search, Versioning, Sidebar navigation)"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Ecosystem & Trends",
    subtitle: "2026 Ready",
    description: "Stay ahead of the curve.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🔮 Learn",
        items: [
          "Astro + Solid stack",
          "Edge rendering",
          "Server actions evolution",
          "Astro View Transitions",
          "Partial prerendering",
          "Astro + AI content pipelines"
        ]
      },
      {
        title: "✅ What Makes You 'Industry Ready' in Astro",
        items: [
          "Explain why Astro over Next.js",
          "Design island boundaries intentionally",
          "Ship Lighthouse 95+ sites",
          "Mix static + dynamic cleanly",
          "Deploy confidently to production",
          "Write maintainable, typed code"
        ]
      },
      {
        title: "📖 Recommended Learning Order (Quick)",
        items: [
          "1. Web basics",
          "2. Astro core",
          "3. Content collections",
          "4. Islands & hydration",
          "5. SSR + APIs",
          "6. Performance & production"
        ]
      }
    ]
  }
];