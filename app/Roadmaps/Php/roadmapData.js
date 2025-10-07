// PHP Mastery Roadmap data structured according to the roadmap content
export const phases = [
  {
    id: 1,
    title: "Beginner",
    subtitle: "Phase 1 (0-2 months)",
    description: "Understand PHP basics, syntax, and simple web development.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⚙️ Core Topics",
        items: [
          "PHP setup: XAMPP, MAMP, Laragon, Docker",
          "PHP syntax: variables, constants, data types",
          "Operators, expressions, conditionals (if, switch)",
          "Loops (for, foreach, while, do-while)",
          "Functions, parameters, return types",
          "Arrays: indexed, associative, multidimensional",
          "String manipulation",
          "Superglobals ($_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER)",
          "Basic error handling: try-catch, error_reporting",
          "Form handling and validation",
          "Introduction to HTML & CSS (PHP works with HTML)"
        ]
      },
      {
        title: "🎯 Suggested Projects",
        items: [
          "✅ Simple Contact Form — validate input, store in a file",
          "✅ Basic Calculator — using PHP forms and functions",
          "✅ User Greeting App — use $_GET and $_POST",
          "✅ Basic To-Do List — store tasks in session or file"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate",
    subtitle: "Phase 2 (2-4 months)",
    description: "Build dynamic web apps, understand OOP in PHP, work with databases.",
    color: "bg-green-500",
    sections: [
      {
        title: "🏗️ Object-Oriented Programming (OOP)",
        items: [
          "Classes, objects, constructors, destructors",
          "Properties, methods, visibility (public, private, protected)",
          "Inheritance, interfaces, abstract classes",
          "Traits",
          "Namespaces & Autoloading (PSR-4)",
          "Composer & dependency management"
        ]
      },
      {
        title: "⚡ Advanced PHP Concepts",
        items: [
          "Error & Exception handling (custom exceptions)",
          "File handling: read/write, CSV, JSON",
          "Sessions, cookies, and authentication basics"
        ]
      },
      {
        title: "🗄️ PHP & MySQL",
        items: [
          "PDO, MySQLi",
          "CRUD operations",
          "Prepared statements for security",
          "Basic MVC architecture",
          "Introduction to REST APIs"
        ]
      },
      {
        title: "🔐 Security Basics",
        items: [
          "SQL Injection prevention",
          "XSS, CSRF basics",
          "Password hashing (password_hash, password_verify)"
        ]
      },
      {
        title: "🚀 Suggested Projects",
        items: [
          "✅ Blog CMS — CRUD posts, categories, comments",
          "✅ User Registration/Login System — password hashing and sessions",
          "✅ Simple REST API — return JSON data, CRUD operations",
          "✅ Contact Book — store and manage contacts in MySQL"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced",
    subtitle: "Phase 3 (4-8 months)",
    description: "Learn modern PHP practices, frameworks, and advanced web development.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔥 PHP 8+ Features",
        items: [
          "Union types, attributes, match expression",
          "Constructor property promotion",
          "Named arguments",
          "JIT & performance improvements"
        ]
      },
      {
        title: "🏛️ Advanced OOP Concepts",
        items: [
          "Dependency Injection (DI)",
          "SOLID principles",
          "Design patterns: Singleton, Factory, Observer, Repository"
        ]
      },
      {
        title: "📊 Advanced Database Concepts",
        items: [
          "Transactions, indexing, joins",
          "ORM basics (Eloquent / Doctrine)"
        ]
      },
      {
        title: "🔌 Working with APIs",
        items: [
          "Consuming external APIs (REST & GraphQL)",
          "Building your own API with JSON responses",
          "JWT authentication"
        ]
      },
      {
        title: "🛠️ Development Tools",
        items: [
          "Composer packages & open-source libraries",
          "Error logging & debugging",
          "Unit testing with PHPUnit",
          "PHP caching & optimization (OPcache, Redis)",
          "Email sending via PHPMailer or Symfony Mailer"
        ]
      },
      {
        title: "🏗️ Suggested Projects",
        items: [
          "✅ E-commerce Backend — product catalog, cart, checkout, orders",
          "✅ API Service — build a REST API for mobile/web clients",
          "✅ Task Management System — OOP, database, user roles",
          "✅ Blog with Admin Panel — use MVC, authentication, CRUD"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Framework Mastery",
    subtitle: "Phase 4 (8-12 months)",
    description: "Master a PHP framework (Laravel is industry standard), integrate full-stack practices.",
    color: "bg-red-500",
    sections: [
      {
        title: "🎯 Laravel (Recommended)",
        items: [
          "Routing, controllers, views",
          "Blade templating engine",
          "Eloquent ORM & database migrations",
          "Authentication & authorization",
          "Middleware",
          "Requests, validation, sessions",
          "Jobs, queues, events, broadcasting",
          "RESTful API with Laravel",
          "Testing in Laravel (feature & unit)"
        ]
      },
      {
        title: "📦 Framework Ecosystem",
        items: [
          "Composer & package management in framework context",
          "Laravel Livewire / Inertia.js for reactive UI",
          "Security best practices in Laravel",
          "Task scheduling & queues",
          "Deployment on Linux servers, Forge, or Vapor"
        ]
      },
      {
        title: "🏆 Suggested Projects",
        items: [
          "✅ Multi-User Blog with Roles — Admin, Editor, Subscriber",
          "✅ E-commerce System — Laravel backend + Blade frontend",
          "✅ Booking System — appointments, calendar integration",
          "✅ Social Media API — API-only Laravel app with JWT"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry Ready / Expert",
    subtitle: "Phase 5 (12+ months)",
    description: "Be able to work as a professional PHP developer in teams.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🚀 Advanced Skills",
        items: [
          "Microservices with PHP (Lumen or Slim)",
          "GraphQL APIs",
          "Advanced caching & optimization",
          "Docker & containerized PHP applications",
          "CI/CD pipelines (GitHub Actions, GitLab CI)",
          "Unit & integration testing",
          "Monitoring & logging (NewRelic, Sentry)",
          "Advanced security audits",
          "Contributing to open-source PHP projects"
        ]
      },
      {
        title: "💼 Soft Skills",
        items: [
          "Code documentation (PHPDoc)",
          "Git collaboration workflows",
          "Agile methodologies",
          "Writing clean, maintainable code",
          "Reading and understanding documentation",
          "Following PSR standards (PSR-1, PSR-4, PSR-12)"
        ]
      },
      {
        title: "🏆 Industry-Level Projects",
        items: [
          "✅ Full E-commerce System — with payment gateway (Stripe/PayPal), multi-vendor support",
          "✅ SaaS Platform — subscription, roles, billing",
          "✅ Enterprise API Service — scalable API with caching, queues, and logging",
          "✅ Open Source Contribution — Laravel packages or PHP libraries"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Additional Recommendations",
    subtitle: "Resources & Tools",
    description: "Essential resources, tools, and best practices for PHP development.",
    color: "bg-gray-500",
    sections: [
      {
        title: "📚 PHP Resources",
        items: [
          "PHP Official Docs (php.net)",
          "Laracasts (Laravel tutorials)",
          "PHP: The Right Way (modern practices)"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "IDE: PhpStorm or VSCode",
          "Debugging: Xdebug",
          "Version control: Git & GitHub"
        ]
      },
      {
        title: "💡 Portfolio Tips",
        items: [
          "Include your projects with live demos",
          "Share GitHub repositories",
          "Showcase contributions to open-source projects"
        ]
      }
    ]
  }
];