import React from 'react';

export default function ReactRoadmap2025() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Web Fundamentals", 
          category: "Core Technologies",
          details: "HTML5 semantic tags, CSS3 (Flexbox, Grid, animations, media queries), responsive design, form handling"
        },
        { 
          step: "Step - 2", 
          topic: "JavaScript ES6+", 
          category: "Modern JavaScript",
          details: "let/const, arrow functions, destructuring, spread/rest, promises, async/await, classes, modules, DOM manipulation"
        },
        { 
          step: "Step - 3", 
          topic: "TypeScript Mastery", 
          category: "Type Safety",
          details: "Types, interfaces, generics, enums, utility types, type narrowing, type-safe props & state (essential in 2025)"
        },
        { 
          step: "Step - 4", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Build a responsive portfolio site with semantic HTML, CSS Grid/Flexbox, and interactive JavaScript features"
        },
      ],
    },
    {
      title: "React Core",
      subtitle: "Component Mastery",
      steps: [
        { 
          step: "Step - 5", 
          topic: "React Fundamentals", 
          category: "Component Basics",
          details: "JSX, functional & class components, props & state, conditional rendering, lists & keys, event handling"
        },
        { 
          step: "Step - 6", 
          topic: "Forms & Components", 
          category: "User Interaction",
          details: "Controlled & uncontrolled components, form handling, fragments, portals, error boundaries"
        },
        { 
          step: "Step - 7", 
          topic: "Modern Hooks", 
          category: "State Management",
          details: "useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer for complex state"
        },
        { 
          step: "Step - 8", 
          topic: "Custom Hooks", 
          category: "Reusable Logic",
          details: "Creating custom hooks for shared logic, hook composition patterns, testing custom hooks"
        },
        { 
          step: "Step - 9", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Todo List App with CRUD operations, local storage, custom hooks, and form validation"
        },
      ],
    },
    {
      title: "Routing & Navigation",
      subtitle: "SPA Architecture",
      steps: [
        { 
          step: "Step - 10", 
          topic: "React Router v6", 
          category: "Client-Side Routing",
          details: "BrowserRouter, nested routes, dynamic routes (/users/:id), protected routes, loader APIs"
        },
        { 
          step: "Step - 11", 
          topic: "Navigation Patterns", 
          category: "User Experience",
          details: "Programmatic navigation, route parameters, query strings, nested layouts, route guards"
        },
        { 
          step: "Step - 12", 
          topic: "Code Splitting", 
          category: "Performance",
          details: "React.lazy, Suspense, route-based code splitting, dynamic imports for better performance"
        },
        { 
          step: "Step - 13", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Multi-page blog app with dynamic routes, nested navigation, and lazy-loaded components"
        },
      ],
    },
    {
      title: "Styling & UI",
      subtitle: "Modern Design",
      steps: [
        { 
          step: "Step - 14", 
          topic: "Styling Solutions", 
          category: "CSS Approaches",
          details: "CSS Modules, styled-components, TailwindCSS (industry favorite 2025), emotion, CSS-in-JS"
        },
        { 
          step: "Step - 15", 
          topic: "Component Libraries", 
          category: "UI Frameworks",
          details: "shadcn/ui, Material UI, Radix UI, Chakra UI, Mantine - modern component ecosystems"
        },
        { 
          step: "Step - 16", 
          topic: "Animations & Interactions", 
          category: "User Experience",
          details: "Framer Motion, CSS animations, micro-interactions, scroll-based animations, gesture handling"
        },
        { 
          step: "Step - 17", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Modern responsive landing page with TailwindCSS + Framer Motion, dark/light mode, animations"
        },
      ],
    },
    {
      title: "State & Data",
      subtitle: "Advanced Patterns",
      steps: [
        { 
          step: "Step - 18", 
          topic: "Global State Management", 
          category: "State Solutions",
          details: "Context API patterns, Redux Toolkit (industry standard), Zustand (lightweight), Jotai/Recoil alternatives"
        },
        { 
          step: "Step - 19", 
          topic: "Data Fetching", 
          category: "Server Communication",
          details: "Fetch API & Axios, TanStack Query (React Query) for server state, GraphQL with Apollo/urql"
        },
        { 
          step: "Step - 20", 
          topic: "Forms & Validation", 
          category: "User Input",
          details: "React Hook Form, Formik, validation with Zod/Yup, multi-step forms, dynamic form fields"
        },
        { 
          step: "Step - 21", 
          topic: "Authentication Flow", 
          category: "Security",
          details: "JWT auth implementation, OAuth2 integration, route protection, refresh token handling, session management"
        },
        { 
          step: "Step - 22", 
          topic: "Mini Project", 
          category: "Practice",
          details: "E-commerce shopping cart with Redux Toolkit, React Query, authentication, and payment integration"
        },
      ],
    },
    {
      title: "Production",
      subtitle: "Enterprise Ready",
      steps: [
        { 
          step: "Step - 23", 
          topic: "Performance Optimization", 
          category: "Speed & Efficiency",
          details: "React.memo, useMemo, useCallback, virtualization (react-window), bundle optimization, profiling"
        },
        { 
          step: "Step - 24", 
          topic: "Testing & Quality", 
          category: "Code Quality",
          details: "Jest/Vitest, React Testing Library, E2E with Cypress/Playwright, ESLint, Prettier, Husky"
        },
        { 
          step: "Step - 25", 
          topic: "Build & Deployment", 
          category: "Production Systems",
          details: "Vite/Webpack optimization, CI/CD with GitHub Actions, hosting on Vercel/Netlify, Docker containerization"
        },
        { 
          step: "Step - 26", 
          topic: "Advanced Patterns", 
          category: "Architecture",
          details: "Compound components, render props, HOCs, provider patterns, micro-frontends, accessibility (a11y)"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Interactive Portfolio Website" },
    { level: "React Core", project: "Todo App with Custom Hooks" },
    { level: "Routing & Navigation", project: "Multi-page Blog Platform" },
    { level: "Styling & UI", project: "Animated Landing Page" },
    { level: "State & Data", project: "E-commerce Shopping Cart" },
    { level: "Production", project: "Full-Stack SaaS Dashboard" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600'
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
              <span className="text-sm font-medium text-gray-700">⚡ 26 Essential Steps • 🎯 6 Skill Levels • 🚀 Production Ready</span>
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
            🏗️ React Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
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
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential React Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Framework</div>
              <div className="text-blue-100">React 18+, TypeScript, Modern Hooks</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Styling</div>
              <div className="text-blue-100">TailwindCSS, styled-components, shadcn/ui</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">State Management</div>
              <div className="text-blue-100">Redux Toolkit, Zustand, TanStack Query</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Routing</div>
              <div className="text-blue-100">React Router v6, Protected Routes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Fetching</div>
              <div className="text-blue-100">TanStack Query, Axios, GraphQL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Forms</div>
              <div className="text-blue-100">React Hook Form, Zod, Validation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Jest, React Testing Library, Cypress</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-blue-100">Vite, Webpack, ESLint, Prettier</div>
            </div>
          </div>
        </section>

        {/* Final Portfolio Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Portfolio-Ready Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Application</h3>
              <p className="text-sm text-gray-600 mb-3">Full-featured shopping cart with product filtering, Redux state management, Stripe payments, and JWT authentication.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Redux • Stripe • JWT • REST API</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 SaaS Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Analytics dashboard with role-based access, interactive charts, real-time updates, and subscription management.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Charts • RBAC • WebSockets • Subscriptions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat App</h3>
              <p className="text-sm text-gray-600 mb-3">WebSocket-powered chat with typing indicators, file sharing, message history, and user presence.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">WebSockets • Real-time • File Upload • Auth</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📝 Blog CMS Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Content management system with rich text editor, GraphQL API, markdown support, and comment system.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">GraphQL • Markdown • CMS • Rich Editor</div>
            </div>
          </div>
        </section>

        {/* Learning Path Tips */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 React Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">⚡ Focus on Hooks</div>
              <div className="text-gray-700">Modern React is all about hooks. Master useState, useEffect, and custom hooks before diving into class components.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 TypeScript First</div>
              <div className="text-gray-700">Learn TypeScript alongside React. Type safety is crucial for modern React applications and career growth.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🚀 Build Real Projects</div>
              <div className="text-gray-700">Practice with realistic projects that solve real problems. Focus on user experience and production-ready code.</div>
            </div>
          </div>
        </section>

        {/* Learning Timeline */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📅 Suggested Learning Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Weeks 1-4: Foundation</div>
              <div className="text-gray-700">HTML, CSS, JavaScript ES6+, TypeScript basics. Build a responsive portfolio website.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Weeks 5-8: React Core</div>
              <div className="text-gray-700">React fundamentals, hooks, component patterns. Create interactive applications with state.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Weeks 9-12: Advanced</div>
              <div className="text-gray-700">State management, routing, styling libraries. Build complex applications with multiple features.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Weeks 13-16: Production</div>
              <div className="text-gray-700">Testing, optimization, deployment. Create portfolio-ready projects with best practices.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Weeks 17-20: Specialization</div>
              <div className="text-gray-700">Advanced patterns, performance optimization, real-time features. Build enterprise-level applications.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Week 21+: Job Ready</div>
              <div className="text-gray-700">Polish portfolio, contribute to open source, prepare for interviews, and apply for positions.</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Master React 18+, TypeScript, and modern development practices. Build applications that scale and impress!
          </p>
        </div>
      </div>
    </main>
  );
}