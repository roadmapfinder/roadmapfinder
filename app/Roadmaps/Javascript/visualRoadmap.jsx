import React from 'react';

export default function JavaScriptRoadmap() {
  const roadmap = [
    {
      title: "Core Foundations",
      subtitle: "Absolute Must-Have Skills",
      steps: [
        { 
          step: "Step - 1", 
          topic: "HTML5 & CSS3 Mastery", 
          category: "Foundation (Mandatory)",
          details: "Semantic HTML tags, forms, accessibility, SEO basics, CSS Grid, Flexbox, animations, responsive design"
        },
        { 
          step: "Step - 2", 
          topic: "Git & Version Control", 
          category: "Development Workflow",
          details: "Basic Git commands, GitHub workflows, branching strategies, pull requests, merge conflicts resolution"
        },
        { 
          step: "Step - 3", 
          topic: "Package Managers", 
          category: "Dependency Management",
          details: "npm, yarn, pnpm - package installation, scripts, semantic versioning, lockfiles, workspaces"
        },
      ],
    },
    {
      title: "JavaScript Fundamentals",
      subtitle: "Language Core Concepts",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Syntax & Basic Concepts", 
          category: "Language Basics",
          details: "Variables (let/const), data types, operators, scope, hoisting, control flow, loops, conditionals"
        },
        { 
          step: "Step - 5", 
          topic: "Functions & Objects", 
          category: "Core Programming",
          details: "Function declarations/expressions, arrow functions, callbacks, objects, arrays, destructuring, spread/rest"
        },
        { 
          step: "Step - 6", 
          topic: "DOM Manipulation & Events", 
          category: "Browser Interaction",
          details: "Query selectors, event listeners, event delegation, DOM traversal, element creation/modification"
        },
        { 
          step: "Step - 7", 
          topic: "ES6+ Modern Features", 
          category: "Modern JavaScript",
          details: "Template literals, modules (import/export), optional chaining, nullish coalescing, object shorthand"
        },
      ],
    },
    {
      title: "Deep JavaScript",
      subtitle: "Industry-Level Concepts",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Advanced Language Features", 
          category: "Core Mastery",
          details: "Closures, lexical scope, prototypes, inheritance, 'this' binding, call/apply/bind methods"
        },
        { 
          step: "Step - 9", 
          topic: "Asynchronous JavaScript", 
          category: "Async Programming",
          details: "Event loop, microtasks/macrotasks, Promises, async/await, error handling, Fetch API, AbortController"
        },
        { 
          step: "Step - 10", 
          topic: "Functional Programming", 
          category: "Programming Paradigms",
          details: "Pure functions, immutability, higher-order functions, map/filter/reduce, composition, currying"
        },
        { 
          step: "Step - 11", 
          topic: "OOP & Error Handling", 
          category: "Code Quality",
          details: "Classes, encapsulation, polymorphism, try/catch blocks, custom errors, debugging techniques"
        },
      ],
    },
    {
      title: "Advanced JavaScript",
      subtitle: "Professional Development",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Performance & Memory", 
          category: "Optimization",
          details: "Memory management, garbage collection, performance profiling, Web APIs, Web Workers, Service Workers"
        },
        { 
          step: "Step - 13", 
          topic: "Design Patterns & Architecture", 
          category: "Software Design",
          details: "Factory, Singleton, Observer, Strategy patterns, Event-driven architecture, Pub-Sub, MVC/MVP"
        },
        { 
          step: "Step - 14", 
          topic: "Modern Tooling", 
          category: "Development Environment",
          details: "Webpack, Vite, esbuild, Babel, SWC, ESLint, Prettier, DevTools mastery, bundling strategies"
        },
        { 
          step: "Step - 15", 
          topic: "Testing & Quality Assurance", 
          category: "Code Reliability",
          details: "Unit testing with Jest/Vitest, E2E testing with Playwright/Cypress, TDD, code coverage, mocking"
        },
      ],
    },
    {
      title: "Frameworks & Backend",
      subtitle: "Full-Stack Development",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Frontend Frameworks", 
          category: "UI Development",
          details: "React.js (Hooks, Context, Suspense), Next.js/Remix SSR, Vue.js/Nuxt, Svelte/SvelteKit"
        },
        { 
          step: "Step - 17", 
          topic: "Backend Development", 
          category: "Server-Side JavaScript",
          details: "Node.js runtime, Express.js/Fastify APIs, Nest.js enterprise patterns, middleware, authentication"
        },
        { 
          step: "Step - 18", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "SQL (PostgreSQL/MySQL), NoSQL (MongoDB), ORMs (Prisma/TypeORM), query optimization, migrations"
        },
        { 
          step: "Step - 19", 
          topic: "TypeScript & Production", 
          category: "Enterprise Ready",
          details: "TypeScript mastery, Clean Architecture, SOLID principles, CI/CD, Docker, cloud deployment (AWS/Vercel)"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Fundamentals", project: "Interactive Portfolio Website (Vanilla JS + CSS)" },
    { level: "Deep JavaScript", project: "Task Manager SPA with Local Storage" },
    { level: "Advanced JavaScript", project: "Real-time Weather PWA with Service Workers" },
    { level: "Frameworks & Backend", project: "Full-Stack E-commerce Platform" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready</span>
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
            🏗️ JavaScript Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential JavaScript Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Frameworks</div>
              <div className="text-blue-100">React, Vue, Svelte, Angular, Next.js</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Runtime</div>
              <div className="text-blue-100">Node.js, Deno, Bun, Express, Fastify</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-blue-100">Vite, Webpack, esbuild, Parcel, Rollup</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Jest, Vitest, Cypress, Playwright, RTL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database</div>
              <div className="text-blue-100">PostgreSQL, MongoDB, Prisma, TypeORM</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Type Safety</div>
              <div className="text-blue-100">TypeScript, JSDoc, Flow, Zod, Yup</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-blue-100">Docker, CI/CD, Vercel, AWS, Railway</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Code Quality</div>
              <div className="text-blue-100">ESLint, Prettier, Husky, SonarQube</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Project Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Full-Stack Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable e-commerce with React, Node.js, PostgreSQL, Stripe integration, and real-time inventory.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">React • Node.js • TypeScript • Stripe</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Collaboration Tool</h3>
              <p className="text-sm text-gray-600 mb-3">Create collaborative workspace with WebSockets, document editing, video calls, and team management.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">WebSockets • WebRTC • Redis • React</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Build performance-optimized dashboard with data visualization, real-time updates, and custom reporting.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Next.js • D3.js • PostgreSQL • SSR</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎮 Multiplayer Game Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Develop real-time multiplayer games with leaderboards, matchmaking, and social features using WebGL.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">WebGL • Socket.IO • MongoDB • Canvas</div>
            </div>
          </div>
        </section>

        {/* Modern JavaScript Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern JavaScript Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance First</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Core Web Vitals optimization</li>
                <li>• Tree shaking & code splitting</li>
                <li>• Lazy loading & prefetching</li>
                <li>• Service Worker caching</li>
                <li>• Bundle size monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Type Safety & Quality</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• TypeScript everywhere</li>
                <li>• Runtime validation (Zod)</li>
                <li>• End-to-end type safety</li>
                <li>• Automated testing (95%+ coverage)</li>
                <li>• Code review automation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Development</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Server Components (React 18+)</li>
                <li>• Edge functions deployment</li>
                <li>• Monorepo with Turborepo/Nx</li>
                <li>• Docker containerization</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 JavaScript Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master the Fundamentals</div>
              <div className="text-gray-700">Focus on core JavaScript concepts first. Don't jump to frameworks without solid vanilla JS foundation.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔨 Build Real Projects</div>
              <div className="text-gray-700">Create portfolio projects that solve real problems. Deploy them and get user feedback for continuous improvement.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Stay Current</div>
              <div className="text-gray-700">Follow TC39 proposals, read MDN docs regularly, and keep up with framework updates and industry trends.</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 JavaScript Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🎨 Frontend Developer</div>
              <div className="text-gray-700">React/Vue/Svelte, UI/UX, responsive design, performance optimization</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Backend Developer</div>
              <div className="text-gray-700">Node.js, APIs, databases, microservices, cloud deployment</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 Full-Stack Developer</div>
              <div className="text-gray-700">End-to-end development, system design, DevOps, team leadership</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">📱 Mobile Developer</div>
              <div className="text-gray-700">React Native, Ionic, Progressive Web Apps, cross-platform</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Remember: JavaScript is everywhere! Master the fundamentals, build amazing projects, and stay curious about new technologies.
          </p>
        </div>
      </div>
    </main>
  );
}