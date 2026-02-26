export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Must Know First (Non-Negotiable)",
    description: "Master the prerequisites before touching Firebase",
    color: "bg-gray-600",
    sections: [
      {
        title: "What is Firebase?",
        items: [
          "Authentication → Identity management for users",
          "Databases → Firestore and Realtime Database",
          "File storage → Cloud Storage for user files and media",
          "Serverless backend → Cloud Functions for backend logic",
          "Hosting → Static and dynamic web hosting",
          "Analytics & monitoring → Usage and crash reporting"
        ]
      },
      {
        title: "Prerequisites (Mandatory)",
        items: [
          "JavaScript / TypeScript → Core language proficiency",
          "Async/await → Asynchronous programming patterns",
          "Promises → Understand promise chaining and resolution",
          "REST & HTTP basics → Understanding request/response cycle",
          "JSON → Data serialization and parsing",
          "Frontend framework basics → React / Next.js / Flutter"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Firebase Project & Setup",
    subtitle: "Core Entry Level",
    description: "Create and configure your Firebase project environment",
    color: "bg-blue-600",
    sections: [
      {
        title: "Create Firebase Project",
        items: [
          "Firebase Console → Web-based project management interface",
          "Project environments → Separate dev / staging / prod projects",
          "Firebase CLI → Command-line tooling for Firebase",
          "firebase init → Initialize Firebase in your project",
          "firebase deploy → Deploy to Firebase services",
          "Environment separation → Manage multiple environments safely"
        ]
      },
      {
        title: "Firebase SDKs",
        items: [
          "Web SDK (v9+ modular) → Tree-shakable client-side SDK",
          "Admin SDK → Trusted server-side SDK with elevated access",
          "Client vs Server responsibilities → Know what runs where",
          "Client SDK = user actions → Only for authenticated user operations",
          "Admin SDK = trusted backend logic only → Never expose to clients"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Authentication",
    subtitle: "Foundation Level (Auth Is Critical)",
    description: "Implement and architect Firebase Authentication correctly",
    color: "bg-green-500",
    sections: [
      {
        title: "Firebase Authentication",
        items: [
          "Email / Password → Standard credential-based auth",
          "Google / GitHub OAuth → Third-party provider login",
          "Phone Auth (OTP) → SMS-based one-time password auth",
          "Anonymous auth → Temporary users without credentials",
          "onAuthStateChanged → Listen to authentication state changes",
          "ID Tokens & refresh tokens → Token lifecycle management",
          "Custom claims (roles) → Attach role data to user tokens"
        ]
      },
      {
        title: "Auth Architecture (Senior-Level)",
        items: [
          "Auth ≠ User profile → Authentication is not your user database",
          "Auth only stores identity → Email, UID, provider info only",
          "User data lives in database → Store profiles in Firestore",
          "Auth UID → Firestore user document → Link identity to profile"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Firestore Database",
    subtitle: "Intermediate Level (Most Important)",
    description: "Master Firestore data modeling, queries, and optimization",
    color: "bg-purple-500",
    sections: [
      {
        title: "Firestore Fundamentals",
        items: [
          "Collections & documents → Core data structure units",
          "Subcollections → Nest collections inside documents",
          "Queries & indexes → Filter and sort data efficiently",
          "Pagination → Cursor-based data pagination",
          "Offline persistence → Client-side caching for offline use",
          "Firestore is NOT SQL → Document model, not relational"
        ]
      },
      {
        title: "Data Modeling (Critical Skill)",
        items: [
          "Flat vs nested structures → Choose the right hierarchy",
          "Fan-out writes → Duplicate data across multiple documents",
          "Read-optimized schema → Design for how data is read",
          "Denormalization → Store redundant data to reduce reads",
          "Design for READS, not WRITES → Senior mindset for Firestore"
        ]
      },
      {
        title: "Indexing & Query Optimization",
        items: [
          "Composite indexes → Index multiple fields together",
          "Query limitations → Understand what Firestore cannot do",
          "where + orderBy → Combine filters and sorting correctly",
          "Cost per query → Every read costs money at scale"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Firebase Security Rules",
    subtitle: "Intermediate Level (Non-Negotiable)",
    description: "Write airtight security rules for Firestore and Storage",
    color: "bg-red-500",
    sections: [
      {
        title: "Firestore Security Rules",
        items: [
          "request.auth → Access authenticated user context in rules",
          "Role-based access → Control access by user roles",
          "Field-level protection → Restrict individual field access",
          "Rule testing with Emulator → Test rules locally before deploying",
          "Only owner can read/write → Enforce document ownership",
          "Admin can manage all → Elevated access via custom claims",
          "Public read, private write → Common access pattern",
          "Rules are NOT filters → They only allow or deny, never filter results"
        ]
      },
      {
        title: "Storage Security Rules",
        items: [
          "File ownership rules → Enforce who can access each file",
          "MIME type validation → Restrict allowed file types",
          "Size limits → Prevent oversized file uploads",
          "Path-based permissions → Control access by file path structure"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Cloud Functions",
    subtitle: "Advanced Level (Serverless Backend)",
    description: "Build production serverless backend logic with Cloud Functions",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Firebase Cloud Functions",
        items: [
          "HTTPS functions → Triggered via HTTP requests",
          "Callable functions → Invoke directly from client SDK",
          "Background triggers → React to Firebase service events",
          "Firestore triggers → Run code on document changes",
          "Auth triggers → React to user creation and deletion",
          "Payments → Handle Stripe and payment processing server-side",
          "Notifications → Send push and email notifications",
          "Data validation → Validate data that bypasses client rules",
          "Scheduled jobs (cron) → Run code on a time schedule"
        ]
      },
      {
        title: "Backend Architecture",
        items: [
          "Client → Callable Function → Firestore → Correct data flow",
          "Preventing client-side trust → Never trust client input directly",
          "Idempotency → Functions should be safe to run multiple times",
          "Error handling → Propagate errors correctly to clients",
          "All sensitive logic lives in Cloud Functions → Senior rule"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Firebase Storage",
    subtitle: "Advanced Level (Files & Media)",
    description: "Handle file uploads, media storage, and CDN delivery",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Storage Core",
        items: [
          "Image uploads → Handle client-side file upload flows",
          "Video storage → Store and serve large media files",
          "Secure access → Control file access via security rules",
          "CDN behavior → Understand global content delivery"
        ]
      },
      {
        title: "Advanced Storage",
        items: [
          "Image resizing via Functions → Trigger resizing on upload",
          "Metadata handling → Store custom file metadata",
          "Signed URLs → Generate temporary access URLs for private files"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Hosting & Deployment",
    subtitle: "Advanced Level",
    description: "Deploy and serve Firebase applications to production",
    color: "bg-pink-500",
    sections: [
      {
        title: "Firebase Hosting",
        items: [
          "Static hosting → Deploy HTML, CSS, JS assets",
          "SPA routing → Configure rewrites for single-page apps",
          "Custom domains → Connect your own domain to Firebase",
          "HTTPS auto-cert → Automatic SSL certificate provisioning"
        ]
      },
      {
        title: "Framework Integration",
        items: [
          "Next.js (SSR + Firebase) → Server-side rendering with Firebase",
          "React + Firebase → Client-side React application deployment",
          "Flutter Web → Deploy Flutter web apps via Firebase Hosting"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Performance, Cost & Scaling",
    subtitle: "Senior Level",
    description: "Optimize Firebase apps for cost and performance at scale",
    color: "bg-teal-500",
    sections: [
      {
        title: "Cost Optimization",
        items: [
          "Firestore pricing model → Understand per-read/write/delete costs",
          "Read/write explosion issues → Avoid fan-out gone wrong",
          "Avoiding N+1 queries → Batch reads instead of looping",
          "Aggregation patterns → Pre-compute counts and sums"
        ]
      },
      {
        title: "Performance Tools",
        items: [
          "Firebase Performance Monitoring → Measure real-user performance",
          "Caching strategies → Reduce redundant Firestore reads",
          "CDN usage → Serve static assets from edge locations",
          "Client-side throttling → Prevent excessive SDK calls"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Advanced Firebase Ecosystem",
    subtitle: "Expert Level",
    description: "Leverage extensions, analytics, and monitoring tools",
    color: "bg-orange-500",
    sections: [
      {
        title: "Firebase Extensions",
        items: [
          "Stripe payments → Drop-in payment processing extension",
          "Email triggers → Send emails on Firestore document events",
          "Image processing → Resize and optimize uploaded images",
          "Search indexing → Sync Firestore to Algolia or Typesense"
        ]
      },
      {
        title: "Analytics & Monitoring",
        items: [
          "Firebase Analytics → Track user behavior and events",
          "Crashlytics → Real-time crash reporting and diagnostics",
          "Logging with Functions → Structured logs from Cloud Functions",
          "Alerts & quotas → Set billing alerts and quota limits"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Production Architecture",
    subtitle: "Expert Level (Real World)",
    description: "Architect real-world SaaS and enterprise Firebase applications",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Multi-Tenant Apps",
        items: [
          "Role-based access → Enforce roles across the entire app",
          "Organization-level data → Scope data per tenant or org",
          "Admin dashboards → Build secure internal tooling"
        ]
      },
      {
        title: "Hybrid Architecture",
        items: [
          "Firebase + REST API → Combine Firebase with external APIs",
          "Firebase + GraphQL → Use Firebase as a GraphQL data source",
          "Firebase + external DB → Integrate Postgres or MySQL alongside Firebase"
        ]
      },
      {
        title: "Firebase + Google Cloud",
        items: [
          "BigQuery exports → Export Firestore data for analytics",
          "Pub/Sub → Event-driven messaging between services",
          "Cloud Run → Deploy containerized backends alongside Firebase",
          "CI/CD pipelines → Automate testing and deployment workflows"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Senior Firebase Developer",
    subtitle: "Expert Level (Final Checklist)",
    description: "The capabilities that define a production-ready Firebase architect",
    color: "bg-slate-600",
    sections: [
      {
        title: "Core Competencies",
        items: [
          "Design scalable Firestore schemas → Read-optimized data models",
          "Write secure rules without leaks → Bulletproof access control",
          "Control costs at scale → Architect for efficient reads and writes",
          "Build production serverless backends → Cloud Functions at scale",
          "Debug performance & auth issues → Diagnose real production problems",
          "Architect real SaaS & mobile apps → End-to-end application ownership"
        ]
      }
    ]
  }
];