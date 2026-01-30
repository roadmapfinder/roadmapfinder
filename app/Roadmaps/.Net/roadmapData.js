export const phases = [
  {
    id: 0,
    title: "Programming Foundations",
    subtitle: "Absolute Beginner",
    description: "Think like a programmer.",
    color: "bg-gray-500",
    sections: [
      {
        title: "⏱️ Duration: 2–3 weeks",
        items: []
      },
      {
        title: "🎯 What You Must Learn",
        items: [
          "What is software, backend, API, server",
          "How code executes",
          "Variables, data types",
          "Conditions (if, switch)",
          "Loops (for, while)",
          "Functions / methods",
          "Debugging mindset"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "Visual Studio 2022",
          ".NET SDK (latest LTS)",
          "Git basics"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Console Calculator",
          "✅ Number Guessing Game",
          "✅ Student Marks Analyzer"
        ]
      },
      {
        title: "⚠️ Critical Note",
        items: [
          "If you skip fundamentals, everything later will feel painful"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "C# Mastery",
    subtitle: "Core Language",
    description: "Write clean, confident C#.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⏱️ Duration: 1–1.5 months",
        items: []
      },
      {
        title: "💻 Core C# Concepts (VERY IMPORTANT)",
        items: [
          "Value vs Reference types",
          "class, struct, record",
          "OOP: Encapsulation, Inheritance, Polymorphism, Abstraction",
          "Interfaces vs abstract classes",
          "Collections: List, Dictionary, HashSet",
          "LINQ (🔥 must-know)",
          "Exception handling",
          "Async / Await",
          "Delegates, Events",
          "Nullable Reference Types"
        ]
      },
      {
        title: "🎯 Advanced (Industry-level)",
        items: [
          "SOLID principles",
          "Immutability",
          "Dependency Injection",
          "Memory management basics",
          "Span, ReadOnlySpan (optional but powerful)"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Banking System (Console)",
          "✅ Inventory Management System",
          "✅ File-based Logger System"
        ]
      }
    ]
  },
  {
    id: 2,
    title: ".NET Runtime & Ecosystem",
    subtitle: "2 Weeks",
    description: "Understand what .NET actually is.",
    color: "bg-green-500",
    sections: [
      {
        title: "⏱️ Duration: 2 weeks",
        items: []
      },
      {
        title: "📚 Must Know",
        items: [
          ".NET SDK vs Runtime",
          "CLR & JIT (high-level understanding)",
          "NuGet packages",
          "Project types: Console, Class Library, Web API",
          "Configuration (appsettings.json)",
          "Logging (Serilog)"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "ASP.NET Core Fundamentals",
    subtitle: "1–1.5 Months",
    description: "Build backend APIs like a professional.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⏱️ Duration: 1–1.5 months",
        items: []
      },
      {
        title: "🌐 Core Topics",
        items: [
          "HTTP fundamentals",
          "REST APIs",
          "Controllers",
          "Routing",
          "Model Binding",
          "Filters",
          "Middleware pipeline",
          "Dependency Injection (deep dive)",
          "Validation (FluentValidation)"
        ]
      },
      {
        title: "🔒 Security Basics",
        items: [
          "HTTPS",
          "CORS",
          "Authentication vs Authorization"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Todo API",
          "✅ User Management API",
          "✅ Notes App Backend"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Databases & Data Access",
    subtitle: "1 Month",
    description: "Data persistence like industry apps.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⏱️ Duration: 1 month",
        items: []
      },
      {
        title: "🗄️ SQL (Mandatory)",
        items: [
          "SQL Server / PostgreSQL",
          "Tables, indexes",
          "Joins",
          "Transactions",
          "Stored procedures (basic)"
        ]
      },
      {
        title: "💾 ORM",
        items: [
          "Entity Framework Core",
          "Migrations",
          "Relationships",
          "Tracking vs NoTracking",
          "Performance tuning"
        ]
      },
      {
        title: "⚡ Advanced",
        items: [
          "Dapper",
          "CQRS basics"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Blog Platform (API + DB)",
          "✅ E-Commerce Backend (Products, Orders, Users)"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Authentication & Authorization",
    subtitle: "2–3 Weeks",
    description: "Secure real-world apps.",
    color: "bg-red-500",
    sections: [
      {
        title: "⏱️ Duration: 2–3 weeks",
        items: []
      },
      {
        title: "🔐 Must Learn",
        items: [
          "JWT authentication",
          "Refresh tokens",
          "Role-based access",
          "Policy-based authorization",
          "ASP.NET Identity"
        ]
      },
      {
        title: "🌍 OAuth (Important)",
        items: [
          "Google / GitHub login",
          "OpenID Connect"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "✅ Auth Service with JWT + Refresh Tokens"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Clean Architecture & Design Patterns",
    subtitle: "1 Month",
    description: "Write maintainable, scalable code.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "⏱️ Duration: 1 month",
        items: []
      },
      {
        title: "🏗️ Architecture",
        items: [
          "Clean Architecture",
          "Layered Architecture",
          "Onion Architecture"
        ]
      },
      {
        title: "🎨 Design Patterns (Practical)",
        items: [
          "Repository",
          "Unit of Work",
          "Factory",
          "Strategy",
          "Mediator (MediatR)"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "✅ Production-grade REST API using Clean Architecture"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing & Quality",
    subtitle: "2–3 Weeks",
    description: "Ship reliable code.",
    color: "bg-pink-500",
    sections: [
      {
        title: "⏱️ Duration: 2–3 weeks",
        items: []
      },
      {
        title: "🧪 Testing",
        items: [
          "Unit testing (xUnit)",
          "Integration tests",
          "Moq / NSubstitute",
          "FluentAssertions"
        ]
      },
      {
        title: "✨ Quality",
        items: [
          "Logging best practices",
          "Exception handling middleware",
          "API versioning",
          "Swagger/OpenAPI"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Performance, Caching & Messaging",
    subtitle: "2–3 Weeks",
    description: "Handle scale.",
    color: "bg-teal-500",
    sections: [
      {
        title: "⏱️ Duration: 2–3 weeks",
        items: []
      },
      {
        title: "⚡ Topics",
        items: [
          "In-memory caching",
          "Redis",
          "Background jobs (Hangfire)",
          "Message queues: RabbitMQ / Azure Service Bus",
          "Rate limiting"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "✅ Notification System",
          "✅ Background Email Processor"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Cloud & DevOps",
    subtitle: "Industry Mandatory",
    description: "Be employable.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "⏱️ Duration: 1 month",
        items: []
      },
      {
        title: "☁️ Cloud (Choose One First)",
        items: [
          "Azure (recommended for .NET)",
          "AWS basics"
        ]
      },
      {
        title: "🚀 Must Learn",
        items: [
          "Docker",
          "CI/CD pipelines",
          "Environment configs",
          "App monitoring (App Insights)"
        ]
      },
      {
        title: "🚀 Project",
        items: [
          "✅ Deploy API to Azure with Docker + CI/CD"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Advanced Topics",
    subtitle: "Senior Edge",
    description: "Learn over time - ongoing.",
    color: "bg-amber-500",
    sections: [
      {
        title: "⏱️ Ongoing",
        items: []
      },
      {
        title: "🎯 Learn Over Time",
        items: [
          "Microservices architecture",
          "Event-driven systems",
          "gRPC",
          "GraphQL",
          "Distributed tracing",
          "API Gateway",
          "IdentityServer / Keycloak"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Final Capstone Projects",
    subtitle: "VERY IMPORTANT",
    description: "Build at least 2 of these.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🏆 E-Commerce Platform",
        items: [
          "Auth",
          "Payments",
          "Admin panel",
          "Microservices"
        ]
      },
      {
        title: "🏆 Learning Management System",
        items: [
          "Role-based access",
          "Progress tracking",
          "Notifications"
        ]
      },
      {
        title: "🏆 SaaS Task Manager",
        items: [
          "Subscription logic",
          "Billing",
          "Multi-tenant architecture"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Industry Expectations",
    subtitle: "Reality Check",
    description: "What you must know to be job-ready.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🧑‍💼 To Be Job-Ready, You Must:",
        items: [
          "Write clean C#",
          "Understand async & performance",
          "Build secure APIs",
          "Know SQL deeply",
          "Deploy to cloud",
          "Debug production issues"
        ]
      }
    ]
  }
];