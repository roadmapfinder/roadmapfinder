// supabaseRoadmapData.js - Supabase Mastery Roadmap Data

export const phases = [
  {
    id: 0,
    title: "Prerequisites (Don't skip this)",
    subtitle: "Foundation Level",
    description: "Essential skills needed before starting Supabase",
    color: "bg-gray-600",
    sections: [
      {
        title: "Required Skills",
        items: [
          "JavaScript → async/await, fetch, promises",
          "Basic SQL → SELECT, INSERT, UPDATE, JOIN",
          "REST APIs → fundamentals",
          "Git & GitHub → version control basics"
        ]
      },
      {
        title: "Nice to Have",
        items: [
          "React / Next.js → frontend frameworks",
          "HTTP Auth → JWT, cookies concepts",
          "Basic Docker → containerization awareness"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Supabase Fundamentals (Beginner)",
    subtitle: "Beginner Level",
    description: "Hands-on first, concept-second. Build production instincts",
    color: "bg-green-500",
    sections: [
      {
        title: "What Supabase Actually Is",
        items: [
          "Architecture → PostgreSQL (core), PostgREST (auto REST API)",
          "Services → GoTrue (Auth), Realtime (WebSockets), Storage (S3-like)",
          "Edge Functions → Deno runtime",
          "Mindset → Supabase = Postgres with superpowers, not a magic backend"
        ]
      },
      {
        title: "Supabase Project Setup",
        items: [
          "Dashboard → Supabase Dashboard, Project creation",
          "API Keys → anon vs service role",
          "Environment → Local vs hosted Supabase",
          "Connection → Connect using @supabase/supabase-js, First query from frontend"
        ]
      },
      {
        title: "Database Basics (Postgres-First Thinking)",
        items: [
          "Schema → Tables & columns, Data types",
          "Keys → Primary keys (UUID vs serial), Foreign keys",
          "Indexing → Indexes (basic)",
          "Best Practice → Use SQL editor instead of UI (important!)",
          "Hands-on → Design users table, Add relations (profiles, posts)"
        ]
      },
      {
        title: "Auto-Generated APIs",
        items: [
          "REST Endpoints → Auto-generated from tables",
          "Operations → Filtering, pagination, Select vs insert vs update",
          "Row-level → Row-level operations",
          "Hands-on → CRUD from frontend, Pagination & filtering, Error handling"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Authentication & Security (Junior Level)",
    subtitle: "Junior Level",
    description: "Master auth and Row Level Security - critical for production",
    color: "bg-blue-500",
    sections: [
      {
        title: "Supabase Auth Deep Dive",
        items: [
          "Auth Methods → Email/password, Magic links",
          "OAuth → Google, GitHub integration",
          "Session → Session management, Refresh tokens",
          "Hands-on → Auth UI, Protect routes, Handle logged-in vs logged-out state"
        ]
      },
      {
        title: "Row Level Security (RLS) - CRITICAL",
        items: [
          "Policies → USING, WITH CHECK clauses",
          "User Context → auth.uid() for user-specific access",
          "Access Control → Role-based access, Public vs private tables",
          "Hands-on → User-specific data access, Multi-tenant tables, Admin vs user roles",
          "Industry Rule → If you can't explain RLS clearly, you're not production-ready"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Storage, Realtime & Files (Mid-Level)",
    subtitle: "Mid Level",
    description: "Handle files, real-time updates, and optimize performance",
    color: "bg-purple-500",
    sections: [
      {
        title: "Supabase Storage",
        items: [
          "Buckets → Public vs private buckets",
          "Permissions → File permissions, Signed URLs",
          "Limits → File size limits, CDN behavior",
          "Hands-on → Upload avatars, Secure private files, Delete & replace files"
        ]
      },
      {
        title: "Realtime & Subscriptions",
        items: [
          "Database Changes → Realtime database changes",
          "Features → Channels & events, Presence & broadcast",
          "Best Practices → When not to use realtime",
          "Hands-on → Live chat, Live notifications, Real-time dashboard updates"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "Indexing → Indexing strategies",
          "Query Efficiency → Avoid N+1 queries, Select only required fields",
          "Awareness → Query cost awareness",
          "Hands-on → Optimize slow queries, Compare indexed vs non-indexed queries"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Edge Functions & Backend Logic (Senior Level)",
    subtitle: "Senior Level",
    description: "Build custom APIs and integrate external services",
    color: "bg-red-500",
    sections: [
      {
        title: "Supabase Edge Functions",
        items: [
          "Runtime → Deno runtime",
          "Configuration → Environment variables",
          "Security → Auth inside edge functions",
          "Frontend → Calling functions from frontend",
          "Hands-on → Custom API endpoint, Server-side validation, Secure admin operations"
        ]
      },
      {
        title: "Webhooks & Integrations",
        items: [
          "Payment → Stripe webhooks",
          "Services → Email services, External APIs",
          "Async → Background jobs patterns",
          "Hands-on → Subscription billing logic, Payment verification, Email triggers"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Database Engineering (Senior+)",
    subtitle: "Senior+ Level",
    description: "Master Postgres features and database migrations",
    color: "bg-orange-500",
    sections: [
      {
        title: "Advanced Postgres Inside Supabase",
        items: [
          "Views → Views & materialized views",
          "Functions → Functions (PL/pgSQL), Triggers",
          "Data Types → JSONB usage",
          "Search → Full-text search",
          "Hands-on → Search system, Audit logs, Derived data tables"
        ]
      },
      {
        title: "Migrations & Environments",
        items: [
          "CLI → Supabase CLI",
          "Schema → Database migrations, Versioned schema changes",
          "Environments → Local dev vs staging vs prod",
          "Security → Secrets management",
          "Hands-on → Safe production migrations"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Architecture & Scaling (Industry Ready)",
    subtitle: "Industry Ready",
    description: "Production architecture, security, and reliability",
    color: "bg-indigo-600",
    sections: [
      {
        title: "Production Architecture",
        items: [
          "SaaS Design → Multi-tenant SaaS design",
          "Access Control → RBAC vs ABAC",
          "Data Management → Soft deletes, Data isolation strategies",
          "Hands-on → SaaS schema design, Organization-based access"
        ]
      },
      {
        title: "Security & Compliance",
        items: [
          "Prevention → SQL injection prevention",
          "Principles → Least privilege, Secure service role usage",
          "Regulations → GDPR basics",
          "Hands-on → Audit access logs, Secure admin APIs"
        ]
      },
      {
        title: "Monitoring & Reliability",
        items: [
          "Metrics → Query performance metrics",
          "Logging → Error logging",
          "Protection → Rate limiting strategies",
          "Recovery → Backup & restore",
          "Hands-on → Detect slow queries, Rollback strategies"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Testing & CI/CD (Elite Level)",
    subtitle: "Elite Level",
    description: "Automated testing and continuous integration",
    color: "bg-pink-600",
    sections: [
      {
        title: "Testing Strategies",
        items: [
          "Security → Testing RLS policies",
          "API Testing → API testing",
          "Auth Testing → E2E auth testing",
          "Automation → CI pipelines with Supabase",
          "Hands-on → Automated schema tests, Auth flow tests"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Capstone Projects (Must Build)",
    subtitle: "Mastery Level",
    description: "You're industry-ready only after building these projects",
    color: "bg-gray-800",
    sections: [
      {
        title: "Beginner Project",
        items: [
          "Auth-based CRUD app → User profiles",
          "Security → RLS enforced"
        ]
      },
      {
        title: "Intermediate Project",
        items: [
          "SaaS Dashboard → Multi-tenant access",
          "Features → File uploads + realtime updates"
        ]
      },
      {
        title: "Advanced Project",
        items: [
          "Subscription SaaS → Stripe + webhooks",
          "Backend → Edge functions, Admin panel",
          "Compliance → Audit logs"
        ]
      },
      {
        title: "Industry-Ready Supabase Dev Checklist",
        items: [
          "Design → Design secure schemas",
          "Security → Write RLS without breaking prod",
          "Performance → Optimize Postgres queries",
          "Architecture → Build SaaS-grade backends",
          "Debugging → Debug auth & permission issues",
          "Scale → Scale safely"
        ]
      }
    ]
  }
];