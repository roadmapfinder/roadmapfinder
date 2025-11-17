export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "0 → 1 month",
    description: "Essential prerequisites for modern WordPress development.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🌐 Web Fundamentals",
        items: [
          "HTML5 & semantic markup — forms, accessibility basics (ARIA)",
          "CSS — layout (Flexbox, Grid), responsive design, accessibility contrasts",
          "JavaScript (ES6+) — DOM basics, fetch/async, modules",
          "HTTP, REST basics, JSON"
        ]
      },
      {
        title: "🔧 Developer Tools",
        items: [
          "Git — branches, PRs, rebases, GitHub workflow",
          "Basic Linux + SSH — connect to servers, basic shell",
          "Command line fundamentals",
          "Code editor setup and best practices"
        ]
      },
      {
        title: "📚 Quick Resources",
        items: [
          "MDN Web Docs (HTML/CSS/JS)",
          "freeCodeCamp tutorials",
          "Git documentation and guides",
          "Basic web development principles"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core WordPress Fundamentals",
    subtitle: "1 → 2 months",
    description: "Master WordPress basics and architecture to prevent common mistakes.",
    color: "bg-green-500",
    sections: [
      {
        title: "🚀 Getting Started",
        items: [
          "Install WordPress locally (LocalWP / Docker / XAMPP)",
          "Learn admin UI: posts/pages, menus, widgets, users, settings",
          "Understand themes vs plugins and WP file structure",
          "Read the Template Hierarchy and basic PHP usage in templates"
        ]
      },
      {
        title: "🎯 First Project",
        items: [
          "Build a small blog with custom menu",
          "Add widgets to sidebar areas",
          "Create static home page",
          "Understand content organization"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "PHP, MySQL & WordPress Internals",
    subtitle: "2 → 4 months",
    description: "Deep dive into WordPress core concepts and database structure.",
    color: "bg-purple-500",
    sections: [
      {
        title: "💻 PHP Mastery",
        items: [
          "PHP 8.x features and best practices (typed properties, readonly, nullsafe)",
          "PHP 8.3 additions for performance/typing",
          "Object-oriented programming in PHP",
          "Modern PHP development patterns"
        ]
      },
      {
        title: "🗄️ Database & Core Concepts",
        items: [
          "Basic SQL & WP database schema (posts, postmeta, options, users, term relationships)",
          "WordPress core concepts: hooks (actions & filters), the Loop",
          "WP_Query for custom queries",
          "WP_Rewrite for URL management"
        ]
      },
      {
        title: "🛠️ Project",
        items: [
          "Create theme from scratch (no starter theme)",
          "List posts using custom WP_Query",
          "Use multiple template parts",
          "Implement custom functionality with hooks"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Theming — Beginner to Pro",
    subtitle: "4 → 8 months",
    description: "Master both classic and modern block-based theme development.",
    color: "bg-orange-500",
    sections: [
      {
        title: "📐 Classic Theme Development",
        items: [
          "Child themes vs parent themes",
          "Template tags, functions.php",
          "Enqueueing scripts/styles with wp_enqueue_*",
          "Theme Customizer and theme options APIs"
        ]
      },
      {
        title: "♿ Professional Standards",
        items: [
          "Accessibility (a11y) implementation",
          "Internationalization (i18n) — __(), _e(), load_theme_textdomain()",
          "Responsive design best practices",
          "Performance optimization techniques"
        ]
      },
      {
        title: "🎨 Modern Block Themes / FSE",
        items: [
          "Learn block templates and template parts",
          "Master theme.json configuration",
          "Understand block-based approach",
          "Keep up with Gutenberg/FSE changes"
        ]
      },
      {
        title: "🚀 Project Ladder",
        items: [
          "Simple child theme customizing existing theme",
          "Build classic PHP theme from scratch",
          "Build block theme with site editor support",
          "Create production-ready theme with all features"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Plugin Development",
    subtitle: "5 → 10 months",
    description: "Build secure, efficient plugins with modern best practices.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔌 Plugin Fundamentals",
        items: [
          "Plugin file structure and headers",
          "Activation/deactivation hooks",
          "Options API and Settings API",
          "Shortcodes and widgets (including block widgets)"
        ]
      },
      {
        title: "🔒 Security Best Practices",
        items: [
          "Sanitize inputs and escape outputs",
          "Capability checks with current_user_can()",
          "Nonces for form validation",
          "Secure data handling"
        ]
      },
      {
        title: "⚡ Advanced Tools",
        items: [
          "Use WP-CLI to speed workflows",
          "Debugging and error handling",
          "Performance optimization",
          "Version control for plugins"
        ]
      },
      {
        title: "🎯 Project Ladder",
        items: [
          "Small plugin: custom shortcode + admin settings",
          "Medium plugin: custom post type + meta boxes + REST endpoint",
          "Publish plugin to private repo",
          "Prepare plugin for public submission"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Custom Content Modeling",
    subtitle: "Parallel with Phase 5",
    description: "Master custom post types, taxonomies, and metadata.",
    color: "bg-teal-500",
    sections: [
      {
        title: "📦 Content Types & Taxonomies",
        items: [
          "Custom Post Types (CPTs) registration",
          "Custom taxonomies for organization",
          "Post meta and meta boxes",
          "register_post_meta for REST visibility"
        ]
      },
      {
        title: "🎛️ Advanced Fields",
        items: [
          "Use Advanced Custom Fields (ACF)",
          "Register fields manually for control",
          "Watch ACF ecosystem changes",
          "Handle complex data structures"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "Build portfolio site with CPTs (Projects)",
          "Add custom taxonomies (Technologies)",
          "Implement custom meta (project URL, gallery)",
          "Create complete content management system"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "REST API & Headless WordPress",
    subtitle: "8 → 14 months",
    description: "Build decoupled applications using WordPress as a CMS.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🌐 REST API Mastery",
        items: [
          "WordPress REST API endpoints and usage",
          "Authentication (JWT/OAuth)",
          "Custom endpoints creation",
          "API security and rate limiting"
        ]
      },
      {
        title: "⚛️ Modern Frameworks",
        items: [
          "Build with Next.js, Nuxt, or Gatsby",
          "Server-side rendering vs static export tradeoffs",
          "GraphQL alternatives (WPGraphQL)",
          "Richer queries with GraphQL"
        ]
      },
      {
        title: "🎯 Project Ladder",
        items: [
          "Fetch posts client-side from WP REST API with React",
          "Build Next.js frontend using WP as headless CMS (SSG/ISR)",
          "Add incremental builds and webhook triggers",
          "Create full production-ready decoupled app"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Gutenberg & Block Development",
    subtitle: "9 → 16 months",
    description: "Create custom blocks and leverage the modern WordPress editor.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🧱 Block Development Skills",
        items: [
          "Learn @wordpress/scripts and @wordpress/block-library",
          "Master block JSON and block registration",
          "Build dynamic and static blocks using React",
          "Understand block.json + PHP render callbacks"
        ]
      },
      {
        title: "🎨 Advanced Block Features",
        items: [
          "Block attributes and editor controls",
          "Server-side rendering for SEO",
          "Block patterns and variations",
          "Keep up with Gutenberg roadmap and APIs"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "Build library of custom Gutenberg blocks",
          "Create CTA block with advanced options",
          "Build testimonial slider block",
          "Develop dynamic listing block with filters"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Performance, Caching & Scaling",
    subtitle: "10 → 18 months",
    description: "Optimize WordPress for speed, security, and scale.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "⚡ Caching Strategies",
        items: [
          "Object cache (Redis / Memcached)",
          "Page cache and browser cache headers",
          "CDNs, Varnish, and edge caching",
          "Cache invalidation strategies"
        ]
      },
      {
        title: "🚀 Asset Optimization",
        items: [
          "Critical CSS and deferred JS",
          "Code splitting techniques",
          "Image optimization and lazy loading",
          "Database optimization and query profiling (Query Monitor)"
        ]
      },
      {
        title: "🔒 Security & Maintenance",
        items: [
          "Keep plugins/themes updated",
          "Monitor and fix slow hooks and heavy queries",
          "Follow security advisories",
          "Rapid response to vulnerabilities"
        ]
      },
      {
        title: "🎯 Project",
        items: [
          "Migrate site to performant setup",
          "Enable Redis and CDN",
          "Optimize images and assets",
          "Measure and document before/after improvements"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "DevOps & Production Skills",
    subtitle: "Advanced Level",
    description: "Master deployment, automation, and professional workflows.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🐳 Containerization & Automation",
        items: [
          "Docker for reproducible local dev (PHP-FPM, Nginx, MySQL)",
          "CI/CD: GitHub Actions / GitLab CI",
          "Run tests, build blocks, and deploy automatically",
          "Composer for dependency management"
        ]
      },
      {
        title: "🛠️ Advanced Workflows",
        items: [
          "WP-CLI scripting for migrations and maintenance",
          "Manage PHP versions (PHP 8.3+ compatibility)",
          "Environment management (dev, staging, production)",
          "Automated testing pipelines"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "Create CI pipeline with PHPStan and unit tests",
          "Lint JS and build blocks automatically",
          "Deploy to staging server on merge",
          "Set up complete DevOps workflow"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Testing, Quality & Architecture",
    subtitle: "Advanced Level",
    description: "Implement professional testing and architectural patterns.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🧪 Testing Strategies",
        items: [
          "Unit testing with PHPUnit",
          "Integration tests for WordPress",
          "E2E tests with Playwright / Cypress",
          "Test-driven development practices"
        ]
      },
      {
        title: "📊 Code Quality",
        items: [
          "Static analysis: PHPStan, Psalm",
          "ESLint for JavaScript",
          "Code coverage monitoring",
          "Automated quality gates"
        ]
      },
      {
        title: "🏗️ Architecture",
        items: [
          "Plugin design patterns",
          "SOLID principles in WordPress",
          "Dependency injection patterns",
          "Scalable code architecture"
        ]
      },
      {
        title: "🎯 Project",
        items: [
          "Add test coverage to existing plugin",
          "Gate PR merges on test pass",
          "Implement continuous testing",
          "Refactor codebase with SOLID principles"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Professional Skills & Career Growth",
    subtitle: "Ongoing Development",
    description: "Build professional reputation and business skills.",
    color: "bg-violet-500",
    sections: [
      {
        title: "👥 Professional Development",
        items: [
          "Code reviews and peer feedback",
          "Documentation best practices",
          "Semantic versioning and changelogs",
          "Open source contribution"
        ]
      },
      {
        title: "🌟 Community Contribution",
        items: [
          "Contribute to WordPress core",
          "Contribute to Gutenberg project",
          "Help with plugin/theme development",
          "Follow make.wordpress.org and core tickets"
        ]
      },
      {
        title: "💼 Business Skills",
        items: [
          "Freelance/business: client onboarding",
          "Project scoping and contracts",
          "Maintenance retainers",
          "Client communication"
        ]
      },
      {
        title: "🎯 Interview Preparation",
        items: [
          "Algorithms (basic level)",
          "Systems design for web apps",
          "PHP/WordPress specific questions",
          "Portfolio presentation"
        ]
      }
    ]
  }
];