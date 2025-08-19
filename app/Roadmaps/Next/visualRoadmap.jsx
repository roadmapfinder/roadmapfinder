import React from 'react';

export default function NextJSRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Web Fundamentals", 
          category: "Core Technologies",
          details: "HTML5 semantic tags, CSS3 (Flexbox, Grid, animations, media queries), modern ES6+ JavaScript"
        },
        { 
          step: "Step - 2", 
          topic: "TypeScript Mastery", 
          category: "Type Safety",
          details: "Types, interfaces, generics, utility types, strict typing for props & API responses (essential in 2025)"
        },
        { 
          step: "Step - 3", 
          topic: "React.js Fundamentals", 
          category: "Component Library",
          details: "Components, props, state, lifecycle & hooks (useState, useEffect, useRef), Context API, React Router basics"
        },
        { 
          step: "Step - 4", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Build a small React portfolio app with components, state management, and basic routing"
        },
      ],
    },
    {
      title: "Core Next.js",
      subtitle: "Framework Mastery",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Next.js 14+ App Router", 
          category: "Modern Routing",
          details: "File-based routing (app/ directory), server vs client components, layouts & nested routing"
        },
        { 
          step: "Step - 6", 
          topic: "Data Fetching", 
          category: "Server Integration",
          details: "fetch with caching/revalidation, getServerSideProps, getStaticProps, modern data patterns"
        },
        { 
          step: "Step - 7", 
          topic: "SEO & Performance", 
          category: "Optimization",
          details: "Metadata handling, optimized fonts & images (next/font, next/image), Core Web Vitals"
        },
        { 
          step: "Step - 8", 
          topic: "API Routes", 
          category: "Backend Integration",
          details: "app/api/ routes, environment variables (.env.local), RESTful API development"
        },
        { 
          step: "Step - 9", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Blog with static + dynamic routes, SEO-friendly pages, optimized images and performance"
        },
      ],
    },
    {
      title: "Styling & UI",
      subtitle: "Modern Design",
      steps: [
        { 
          step: "Step - 10", 
          topic: "CSS Solutions", 
          category: "Styling Approaches",
          details: "CSS Modules (built-in), TailwindCSS (most popular 2025), styled-components alternatives"
        },
        { 
          step: "Step - 11", 
          topic: "Component Libraries", 
          category: "UI Frameworks",
          details: "shadcn/ui, Radix UI, Material UI, Chakra UI, Mantine - modern component ecosystems"
        },
        { 
          step: "Step - 12", 
          topic: "Animations", 
          category: "User Experience",
          details: "Framer Motion, CSS animations, micro-interactions, scroll-based animations"
        },
        { 
          step: "Step - 13", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Modern landing page with Tailwind + shadcn/ui, animations, responsive design"
        },
      ],
    },
    {
      title: "Advanced Features",
      subtitle: "Production Ready",
      steps: [
        { 
          step: "Step - 14", 
          topic: "State Management", 
          category: "Data Flow",
          details: "React Context, Zustand, Jotai, TanStack Query (React Query), Redux Toolkit for complex apps"
        },
        { 
          step: "Step - 15", 
          topic: "Authentication", 
          category: "Security",
          details: "NextAuth.js (Auth.js), JWT, OAuth providers (Google, GitHub), session management, RBAC"
        },
        { 
          step: "Step - 16", 
          topic: "Database Integration", 
          category: "Full-Stack Development",
          details: "PostgreSQL/MySQL with Prisma ORM, MongoDB, Drizzle ORM, connection pooling strategies"
        },
        { 
          step: "Step - 17", 
          topic: "Advanced APIs", 
          category: "Backend Systems",
          details: "GraphQL (Apollo, Yoga), tRPC (type-safe APIs), WebSockets, streaming APIs, Edge functions"
        },
        { 
          step: "Step - 18", 
          topic: "Performance & Caching", 
          category: "Optimization",
          details: "ISR, SSR vs SSG strategies, Redis caching, CDN integration, image optimization"
        },
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Production Systems",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Testing & Quality", 
          category: "Code Quality",
          details: "Jest/Vitest, React Testing Library, Cypress/Playwright E2E, ESLint, Prettier, Husky hooks"
        },
        { 
          step: "Step - 20", 
          topic: "DevOps & Deployment", 
          category: "Production Deployment",
          details: "Vercel (default), Docker + AWS/GCP, CI/CD pipelines, GitHub Actions, monitoring & logging"
        },
        { 
          step: "Step - 21", 
          topic: "Advanced Architecture", 
          category: "Scalability",
          details: "Monorepos (Nx, Turborepo), middleware, i18n, feature flags, clean architecture patterns"
        },
        { 
          step: "Step - 22", 
          topic: "Enterprise Patterns", 
          category: "Industry Standards",
          details: "Multi-tenant SaaS, analytics integration, accessibility (a11y), performance budgets"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Personal Portfolio with React" },
    { level: "Core Next.js", project: "SEO-Optimized Blog Platform" },
    { level: "Styling & UI", project: "Modern Landing Page" },
    { level: "Advanced Features", project: "Full-Stack Notes App" },
    { level: "Enterprise", project: "Multi-Tenant SaaS Platform" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 22 Essential Steps • 🎯 5 Skill Levels • 🚀 Production Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏗️ Next.js Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Next.js Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Framework</div>
              <div className="text-blue-100">Next.js 14+, App Router, TypeScript</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Styling</div>
              <div className="text-blue-100">TailwindCSS, CSS Modules, shadcn/ui</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">State Management</div>
              <div className="text-blue-100">Zustand, TanStack Query, Context API</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database & ORM</div>
              <div className="text-blue-100">Prisma, Drizzle, PostgreSQL, MongoDB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Authentication</div>
              <div className="text-blue-100">NextAuth.js, JWT, OAuth, Clerk</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Jest, Vitest, Cypress, Playwright</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Deployment</div>
              <div className="text-blue-100">Vercel, Docker, AWS, Netlify</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">APIs</div>
              <div className="text-blue-100">tRPC, GraphQL, REST, WebSockets</div>
            </div>
          </div>
        </section>

        {/* Final Portfolio Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Portfolio-Ready Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Store</h3>
              <p className="text-sm text-gray-600 mb-3">Full-stack e-commerce with Stripe payments, ISR for products, NextAuth authentication, and Prisma database.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Next.js • Stripe • Prisma • NextAuth</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 SaaS Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Multi-tenant dashboard with RBAC, subscription billing, charts, and real-time updates.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Multi-tenant • Stripe • Charts • Real-time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Realtime Chat App</h3>
              <p className="text-sm text-gray-600 mb-3">Chat application with WebSockets, Redis presence, JWT auth, and message history.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">WebSockets • Redis • JWT • Real-time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📝 Blog/CMS Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Headless CMS with MDX support, GraphQL API, ISR for posts, and rich text editor.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">MDX • GraphQL • ISR • CMS</div>
            </div>
          </div>
        </section>

        {/* Learning Path Tips */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Next.js Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">⚡ Start with App Router</div>
              <div className="text-gray-700">Next.js 13+ App Router is the future. Skip pages/ directory and focus on modern patterns.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master Server Components</div>
              <div className="text-gray-700">Understand when to use Server vs Client components. This is crucial for performance.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🚀 Deploy Early & Often</div>
              <div className="text-gray-700">Use Vercel for easy deployment. Deploy every project to understand production environments.</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Master Next.js 14+ App Router, TypeScript, and modern deployment. Build full-stack applications that scale!
          </p>
        </div>
      </div>
    </main>
  );
}