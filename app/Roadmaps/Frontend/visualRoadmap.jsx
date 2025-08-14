import React from 'react';

export default function FrontendRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Internet & Web Basics", 
          category: "Web Fundamentals",
          details: "DNS, hosting, domain names, client vs server, HTTP/HTTPS, request-response cycle, browser rendering process, HTML/CSS/JS basics"
        },
        { 
          step: "Step - 2", 
          topic: "HTML Mastery", 
          category: "Markup Language",
          details: "Semantic HTML (header, main, footer), forms & validations, accessibility tags (aria-label, roles), media elements (video, audio, picture)"
        },
        { 
          step: "Step - 3", 
          topic: "CSS Mastery", 
          category: "Styling & Layout",
          details: "Box model, flexbox, grid, positioning, BEM, CSS variables, responsive design, media queries, animations, SASS, Tailwind CSS"
        },
        { 
          step: "Step - 4", 
          topic: "JavaScript Fundamentals", 
          category: "Core Programming",
          details: "Variables, functions, DOM manipulation, ES6+ features, async/await, Fetch API, error handling, event loop understanding"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Level Up Your Skills",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Advanced JavaScript", 
          category: "Advanced Concepts",
          details: "Prototypes, inheritance, 'this' keyword, modules (ESM, CommonJS), generators, debouncing/throttling, Web APIs, Service Workers"
        },
        { 
          step: "Step - 6", 
          topic: "Git & Version Control", 
          category: "Development Workflow",
          details: "Git basics (init, add, commit, push, pull), branching & merging strategies, GitHub/GitLab workflows, collaboration practices"
        },
        { 
          step: "Step - 7", 
          topic: "Frontend Framework (React)", 
          category: "Framework Mastery",
          details: "JSX, components, props, state, Hooks (useState, useEffect, useContext), Context API, React Router, custom hooks, component lifecycle"
        },
        { 
          step: "Step - 8", 
          topic: "TypeScript Integration", 
          category: "Type Safety",
          details: "Static typing basics, interfaces & types, generics, type narrowing & unions, TypeScript with React/Vue, advanced type patterns"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Production Ready",
      steps: [
        { 
          step: "Step - 9", 
          topic: "API Integration & Data", 
          category: "Data Management",
          details: "REST API integration (Fetch, Axios), GraphQL (Apollo Client), error handling & retries, infinite scroll & pagination"
        },
        { 
          step: "Step - 10", 
          topic: "State Management & Performance", 
          category: "Optimization",
          details: "Redux Toolkit, Zustand, memoization (React.memo, useMemo, useCallback), code splitting, lazy loading, virtualized lists"
        },
        { 
          step: "Step - 11", 
          topic: "Testing & Quality Assurance", 
          category: "Testing Strategy",
          details: "Unit testing (Jest, Vitest), component testing (React Testing Library), E2E testing (Playwright, Cypress), test coverage"
        },
        { 
          step: "Step - 12", 
          topic: "Build Tools & Optimization", 
          category: "Development Tools",
          details: "Vite (2025 standard), Webpack basics, Babel/SWC, environment variables, image optimization, tree shaking, bundle analysis"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Industry Standard",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Deployment & DevOps", 
          category: "Production Deployment",
          details: "Vercel, Netlify, Render deployment, CI/CD pipelines (GitHub Actions), environment configs, monitoring & analytics"
        },
        { 
          step: "Step - 14", 
          topic: "UI/UX for Engineers", 
          category: "Design Integration",
          details: "Design systems (Material UI, Chakra UI, Radix UI), Figma for devs, accessibility testing (Lighthouse, axe-core), responsive design"
        },
        { 
          step: "Step - 15", 
          topic: "Advanced Topics 2025", 
          category: "Cutting Edge",
          details: "Progressive Web Apps (PWA), WebAssembly (Wasm), Web Components (Lit, Stencil), micro-frontends, AI-assisted UI tools"
        },
        { 
          step: "Step - 16", 
          topic: "Real-World Projects", 
          category: "Portfolio Building",
          details: "Portfolio with Next.js, e-commerce frontend, real-time chat app (WebSockets), dashboard with charts & auth, PWA weather app"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "FreeCodeCamp Responsive Web Design, Meta Frontend Developer" },
    { level: "Intermediate", certs: "Google UX Design, AWS Cloud Practitioner, Microsoft Azure Fundamentals" },
    { level: "Advanced", certs: "React Developer Certification, Google Mobile Web Specialist" },
    { level: "Specialization", certs: "Kubernetes Application Developer, AWS Solutions Architect" },
  ];

  const practiceResources = [
    { category: "Coding Challenges", resources: "Frontend Mentor, Codewars, LeetCode Frontend, HackerRank" },
    { category: "Project Ideas", resources: "App Ideas Collection, 100 Days CSS, JavaScript30, Build 15 Vanilla JS Projects" },
    { category: "Learning Platforms", resources: "MDN Web Docs, JavaScript.info, React Official Docs, Vue Mastery" },
    { category: "Communities", resources: "Dev.to, Frontend Focus, CSS-Tricks, React Newsletter, Vue.js Feed" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
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
              <span className="text-sm font-medium text-gray-700">💻 16 Essential Steps • 🎯 4 Skill Areas • 🚀 Career Ready</span>
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

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Industry Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Hands-On Practice Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Frontend Development Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Code Editors</div>
              <div className="text-blue-100">VS Code, WebStorm, Sublime Text, Atom</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frameworks</div>
              <div className="text-blue-100">React, Vue, Svelte, Angular, Next.js</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-blue-100">Vite, Webpack, Parcel, Rollup, Turbopack</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Design Tools</div>
              <div className="text-blue-100">Figma, Adobe XD, Sketch, Tailwind CSS</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Career Path Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🎨 Frontend Developer</div>
              <div className="text-sm text-gray-600">UI Developer, React Developer, Vue Developer, Frontend Engineer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🚀 Full-Stack Developer</div>
              <div className="text-sm text-gray-600">MERN Stack Developer, JAMstack Developer, JavaScript Engineer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">💼 Specialized Roles</div>
              <div className="text-sm text-gray-600">UX Engineer, DevOps Engineer, Technical Lead, Solutions Architect</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Portfolio Project Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🌐 Web Applications</div>
              <div className="text-sm text-gray-600">Personal portfolio, E-commerce store, Social media dashboard, Task management app, Weather forecast app</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-pink-600 mb-2">🎯 Interactive Projects</div>
              <div className="text-sm text-gray-600">Real-time chat application, Data visualization dashboard, Progressive Web App, Game with JavaScript, API-integrated blog</div>
            </div>
          </div>
        </section>

        {/* Learning Timeline Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">⏱️ Estimated Learning Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="font-semibold text-indigo-600 mb-2">Foundation</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">2-3 Months</div>
              <div className="text-xs text-gray-600">HTML, CSS, JavaScript basics</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="font-semibold text-green-600 mb-2">Intermediate</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">3-4 Months</div>
              <div className="text-xs text-gray-600">Frameworks, Git, TypeScript</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="font-semibold text-orange-600 mb-2">Advanced</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">4-5 Months</div>
              <div className="text-xs text-gray-600">State management, testing, optimization</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="font-semibold text-purple-600 mb-2">Professional</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">2-3 Months</div>
              <div className="text-xs text-gray-600">Deployment, advanced topics, projects</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            💻 Remember: Frontend development is constantly evolving. Stay curious, build projects, and keep up with the latest trends and best practices!
          </p>
        </div>
      </div>
    </main>
  );
}