// Next.js Mastery Roadmap data structured according to the Next.js roadmap content
export const phases = [
  {
    id: 1,
    title: "Beginner: Foundational Skills",
    subtitle: "Phase 1",
    description: "Understand Next.js basics, React fundamentals, and build simple applications.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⚛️ React Fundamentals",
        items: [
          "JSX syntax and component structure (Functional & Class)",
          "Props and State management basics",
          "Event handling and conditional rendering",
          "Lists & Keys, useState & useEffect hooks"
        ]
      },
      {
        title: "🔗 Next.js Basics",
        items: [
          "Pages & Routing with file-based routing system",
          "Link component & Navigation between pages",
          "Image component for optimized image loading",
          "CSS & Tailwind integration for styling"
        ]
      },
      {
        title: "📁 Project Structure",
        items: [
          "Static assets management (public folder)",
          "ES6+ features: destructuring, arrow functions, spread/rest",
          "Modules & Imports for code organization",
          "Async/Await & Fetch API for data handling"
        ]
      },
      {
        title: "🎯 Beginner Projects",
        items: [
          "✅ Personal Portfolio Website with responsive layout",
          "✅ Simple Blog displaying posts from JSON file",
          "✅ Contact form with Tailwind CSS styling",
          "Basic routing and navigation implementation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate: Dynamic & Data-driven Apps",
    subtitle: "Phase 2",
    description: "Learn dynamic routing, SSR, SSG, and API routes.",
    color: "bg-green-500",
    sections: [
      {
        title: "🛤️ Advanced Routing",
        items: [
          "Dynamic routes with [id].js file structure",
          "Catch-all routes with [...slug].js patterns",
          "Nested routing and route parameters",
          "Route guards and protected pages"
        ]
      },
      {
        title: "📊 Data Fetching Strategies",
        items: [
          "Static Site Generation (SSG) with getStaticProps",
          "getStaticPaths for dynamic static generation",
          "Server-Side Rendering (SSR) with getServerSideProps",
          "Client-side fetching with useEffect + fetch/axios"
        ]
      },
      {
        title: "🔌 API Routes & Backend",
        items: [
          "Creating backend endpoints in Next.js API routes",
          "CRUD operations and RESTful API design",
          "Handling POST requests and form submissions",
          "API middleware and request validation"
        ]
      },
      {
        title: "🎨 State Management & Styling",
        items: [
          "Context API for global state management",
          "Local state vs global state patterns",
          "Tailwind CSS advanced features and customization",
          "CSS Modules & Styled JSX implementation"
        ]
      },
      {
        title: "🚀 Intermediate Projects",
        items: [
          "✅ E-commerce Product Pages with dynamic routing",
          "✅ Blog with Markdown parsing using gray-matter",
          "✅ CRUD Notes/Tasks app with API routes",
          "Data fetching with SSG and SSR patterns"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced: Full-stack Next.js",
    subtitle: "Phase 3",
    description: "Build production-ready apps with authentication, database, and real-time features.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔐 Authentication & Authorization",
        items: [
          "NextAuth.js setup and configuration",
          "JWT & session handling for secure authentication",
          "Role-based access control implementation",
          "OAuth providers and social login integration"
        ]
      },
      {
        title: "🗄️ Database Integration",
        items: [
          "Prisma ORM for type-safe database operations",
          "Mongoose for MongoDB integration",
          "PostgreSQL, MongoDB, MySQL setup and queries",
          "Database schema design and relationships"
        ]
      },
      {
        title: "⚡ Performance & API Design",
        items: [
          "REST APIs in Next.js with proper error handling",
          "GraphQL implementation with Apollo/Urql",
          "Error handling & validation using Zod/Yup",
          "Image optimization with next/image component"
        ]
      },
      {
        title: "🔧 Advanced Features",
        items: [
          "Incremental Static Regeneration (ISR)",
          "SWR for client-side data fetching and caching",
          "Environment variables & configuration management",
          "TypeScript integration for type safety"
        ]
      },
      {
        title: "🏗️ Advanced Projects",
        items: [
          "✅ Full-stack E-commerce with cart and checkout",
          "✅ Social Media App with posts, likes, comments",
          "✅ Job Portal with admin & user roles",
          "Authentication, database, and real-time features"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Expert: Industry-ready Patterns",
    subtitle: "Phase 4",
    description: "Master scalability, performance, deployment, and best practices.",
    color: "bg-red-500",
    sections: [
      {
        title: "🚀 Performance & SEO Optimization",
        items: [
          "Lighthouse optimization and Core Web Vitals",
          "Meta tags & Open Graph for social sharing",
          "Image & font optimization techniques",
          "Lazy loading & code splitting strategies"
        ]
      },
      {
        title: "🔧 Advanced Next.js Features",
        items: [
          "Middleware implementation (middleware.ts)",
          "Edge functions & serverless functions",
          "Internationalization (i18n) setup",
          "API rate limiting & caching strategies"
        ]
      },
      {
        title: "📦 State Management & Architecture",
        items: [
          "Redux Toolkit for complex state management",
          "Zustand / Jotai for lightweight state solutions",
          "Monorepo setup with Turborepo / Nx",
          "Microservices integration patterns"
        ]
      },
      {
        title: "🌐 Deployment & Monitoring",
        items: [
          "Vercel deployment (preferred for Next.js)",
          "Netlify / AWS Amplify / Docker containerization",
          "CI/CD pipelines and automated testing",
          "Sentry error tracking and analytics integration"
        ]
      },
      {
        title: "🏆 Expert Projects",
        items: [
          "✅ SaaS Dashboard with subscription billing",
          "✅ Multi-language Blog with i18n and SEO",
          "✅ Streaming/Media App with optimized loading",
          "Production-ready applications with full DevOps"
        ]
      }
    ]
  }
];