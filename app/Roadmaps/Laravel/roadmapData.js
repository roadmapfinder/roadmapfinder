export const phases = [
  {
    id: 0,
    title: "Programming Foundations",
    subtitle: "Phase 0 (Mandatory)",
    description: "Think like a backend engineer, not just a framework user.",
    color: "bg-gray-500",
    sections: [
      {
        title: "💻 Core Skills",
        items: [
          "PHP fundamentals (syntax, types, arrays, loops)",
          "OOP in PHP",
          "Classes, Objects, Interfaces",
          "Inheritance, Traits",
          "SOLID principles",
          "PHP memory lifecycle & request handling",
          "Error handling & exceptions"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "PHP 8.2+",
          "Composer",
          "VS Code / PHPStorm",
          "CLI basics (Linux)"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can read and write clean PHP code confidently."
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Web & Laravel Basics",
    subtitle: "Phase 1",
    description: "Understand how Laravel fits into the web ecosystem.",
    color: "bg-green-500",
    sections: [
      {
        title: "🌐 Web Fundamentals",
        items: [
          "HTTP / HTTPS",
          "REST APIs",
          "Cookies vs Sessions",
          "MVC architecture",
          "CSRF, XSS, SQL Injection"
        ]
      },
      {
        title: "🚀 Laravel Fundamentals",
        items: [
          "Installing Laravel",
          "Folder structure",
          "Routes (web & api)",
          "Controllers",
          "Blade templating",
          "Environment configs (.env)",
          "Laravel Artisan CLI"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can build a basic Laravel web app."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Database & Eloquent Mastery",
    subtitle: "Phase 2",
    description: "Handle real production data safely and efficiently.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🗄️ Database",
        items: [
          "MySQL / PostgreSQL",
          "Normalization",
          "Indexing basics",
          "Transactions"
        ]
      },
      {
        title: "🔧 Laravel ORM (Eloquent)",
        items: [
          "Models",
          "Migrations",
          "Seeders & Factories",
          "Relationships",
          "One-to-One",
          "One-to-Many",
          "Many-to-Many",
          "Query Builder vs Eloquent",
          "Soft Deletes"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can design and manage scalable databases."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Authentication & Authorization",
    subtitle: "Phase 3",
    description: "Build secure real-world systems.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔐 Authentication",
        items: [
          "Laravel Breeze / Jetstream",
          "Login / Register / Password Reset",
          "Email verification",
          "Remember me sessions"
        ]
      },
      {
        title: "🛡️ Authorization",
        items: [
          "Gates & Policies",
          "Role-based access control",
          "Middleware",
          "API Authentication (Sanctum / Passport)"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can secure applications like real SaaS products."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Frontend Integration",
    subtitle: "Phase 4",
    description: "Work smoothly with modern frontend stacks.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🎨 Blade UI",
        items: [
          "Layouts & Components",
          "Slots & View Composers",
          "Pagination & forms"
        ]
      },
      {
        title: "⚡ Modern Frontend",
        items: [
          "Tailwind CSS",
          "Alpine.js",
          "Livewire",
          "Inertia.js (Laravel + React/Vue)"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can build interactive dashboards without heavy JS."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Laravel Concepts",
    subtitle: "Phase 5",
    description: "Think like a senior Laravel engineer.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⚙️ Core Internals",
        items: [
          "Service Container",
          "Service Providers",
          "Facades",
          "Dependency Injection"
        ]
      },
      {
        title: "🚀 Performance & Logic",
        items: [
          "Caching (Redis, Memcached)",
          "Queues & Jobs",
          "Events & Listeners",
          "Task Scheduling",
          "File Storage (S3, local)"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can handle high-traffic systems."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "API Development",
    subtitle: "Phase 6 (Industry Standard)",
    description: "Build backend services for mobile & web apps.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🌐 API Essentials",
        items: [
          "RESTful API design",
          "API versioning",
          "Resource classes",
          "API rate limiting",
          "CORS"
        ]
      },
      {
        title: "🔒 Advanced APIs",
        items: [
          "OAuth2",
          "JWT",
          "Webhooks",
          "Pagination & filtering",
          "API documentation (OpenAPI/Swagger)"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can power real production apps."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing & Code Quality",
    subtitle: "Phase 7",
    description: "Write production-safe code.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🧪 Testing",
        items: [
          "PHPUnit",
          "Feature tests",
          "Unit tests",
          "Mocking & Fakes"
        ]
      },
      {
        title: "✨ Code Quality",
        items: [
          "Laravel Pint",
          "Static analysis",
          "Refactoring patterns",
          "Clean architecture",
          "Repository pattern"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You ship stable, maintainable software."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "DevOps & Deployment",
    subtitle: "Phase 8",
    description: "Deploy & maintain Laravel apps in production.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🚀 Deployment",
        items: [
          "Linux servers",
          "Nginx + PHP-FPM",
          "Environment configs",
          "Supervisor",
          "CI/CD pipelines"
        ]
      },
      {
        title: "📈 Scaling",
        items: [
          "Load balancing",
          "Redis queues",
          "Horizon",
          "Caching strategies",
          "Zero-downtime deployments"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You can deploy enterprise-grade systems."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "System Design & Architecture",
    subtitle: "Phase 9",
    description: "Pass senior interviews & build scalable systems.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "🏗️ Architecture",
        items: [
          "Monolith vs Microservices",
          "Event-driven systems",
          "Domain-Driven Design",
          "CQRS basics"
        ]
      },
      {
        title: "🧠 System Design",
        items: [
          "SaaS architecture",
          "Multi-tenant systems",
          "High availability",
          "Horizontal scaling"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You think like a backend architect."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Industry Readiness",
    subtitle: "Phase 10",
    description: "Become employable & future-proof.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "💼 Must-Know",
        items: [
          "Git (advanced workflows)",
          "Design patterns",
          "Security best practices",
          "Logging & monitoring",
          "Payment gateways",
          "Email systems",
          "Background workers"
        ]
      },
      {
        title: "🎯 Portfolio Projects",
        items: [
          "✅ SaaS Application",
          "✅ REST API backend",
          "✅ Admin dashboard",
          "✅ Subscription billing system",
          "✅ Multi-role authentication app"
        ]
      },
      {
        title: "📌 Outcome",
        items: [
          "✅ You are job-ready."
        ]
      }
    ]
  }
];