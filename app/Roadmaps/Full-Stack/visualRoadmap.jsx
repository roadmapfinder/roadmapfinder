import React, { useState } from "react";
import { handleDownloadVisualPDF } from "./downloadVisualPdf";

export default function WebDevRoadmap() {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [downloading, setDownloading] = useState(false);

  const fullStackRoadmap = [
    {
      title: "Foundations",
      subtitle: "Core Computer Science & Web Basics",
      steps: [
        {
          step: "Step - 1",
          topic: "Computer Science Fundamentals",
          category: "CS Basics",
          details:
            "Operating Systems, Networking, DNS, HTTP/HTTPS, SSL, Cookies, Sessions, Client-Server architecture, Browser rendering process",
        },
        {
          step: "Step - 2",
          topic: "Version Control & Command Line",
          category: "Development Tools",
          details:
            "Git & GitHub (branching, pull requests, Actions), Linux/Unix commands, Shell navigation, Terminal proficiency",
        },
        {
          step: "Step - 3",
          topic: "Problem Solving & DSA",
          category: "Programming Logic",
          details:
            "Arrays, strings, linked lists, hashmaps, recursion, trees, graphs, sorting & searching algorithms, time/space complexity",
        },
        {
          step: "Step - 4",
          topic: "HTML5 & Semantic Web",
          category: "Markup Foundation",
          details:
            "Semantic tags (header, main, footer), forms & validations, accessibility (ARIA), media elements, SEO optimization",
        },
      ],
    },
    {
      title: "Frontend Development",
      subtitle: "Modern Client-Side Technologies",
      steps: [
        {
          step: "Step - 5",
          topic: "CSS3 Mastery",
          category: "Styling & Layout",
          details:
            "Flexbox, Grid, animations, responsive design (mobile-first), CSS variables, BEM methodology, Tailwind CSS/Bootstrap",
        },
        {
          step: "Step - 6",
          topic: "JavaScript ES6+ & DOM",
          category: "Core Programming",
          details:
            "Variables, functions, arrays, objects, DOM manipulation, event handling, promises, async/await, Fetch API, modules",
        },
        {
          step: "Step - 7",
          topic: "Modern JavaScript Advanced",
          category: "Advanced Concepts",
          details:
            "Closures, prototypes, event loop, callbacks, error handling, browser dev tools, debugging, performance optimization",
        },
        {
          step: "Step - 8",
          topic: "Build Tools & Package Managers",
          category: "Development Workflow",
          details:
            "npm, yarn, pnpm package managers, Vite, Webpack, Babel, ESBuild, environment configuration, bundling",
        },
      ],
    },
    {
      title: "Frontend Framework",
      subtitle: "React.js Ecosystem Mastery",
      steps: [
        {
          step: "Step - 9",
          topic: "React.js Fundamentals",
          category: "Component Framework",
          details:
            "JSX & components, props & state, Hooks (useState, useEffect, useContext), React Router, component lifecycle",
        },
        {
          step: "Step - 10",
          topic: "Advanced React & State",
          category: "State Management",
          details:
            "useReducer, useMemo, Redux Toolkit, Zustand, Recoil, Context API patterns, custom hooks, performance optimization",
        },
        {
          step: "Step - 11",
          topic: "React Ecosystem & Integration",
          category: "Full Integration",
          details:
            "React Hook Form, Formik validation, Axios/TanStack Query, Tailwind/Styled Components, code splitting, lazy loading",
        },
        {
          step: "Step - 12",
          topic: "Testing & Quality Assurance",
          category: "Testing Strategy",
          details:
            "Jest/Vitest unit testing, React Testing Library, Cypress/Playwright E2E testing, test coverage, debugging techniques",
        },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Server-Side with Node.js",
      steps: [
        {
          step: "Step - 13",
          topic: "Backend Fundamentals",
          category: "Server Concepts",
          details:
            "How servers work, REST APIs, JSON/XML, authentication (sessions, JWT, OAuth), security (CORS, HTTPS, rate limiting)",
        },
        {
          step: "Step - 14",
          topic: "Node.js & Express.js",
          category: "Backend Framework",
          details:
            "Core Node.js (event loop, streams), Express routes & middleware, error handling, file uploads, email/SMS integration",
        },
        {
          step: "Step - 15",
          topic: "Database Integration",
          category: "Data Persistence",
          details:
            "PostgreSQL/MySQL (schema design, joins, indexing), MongoDB (collections, aggregations), Redis caching, ORMs (Prisma, Sequelize)",
        },
        {
          step: "Step - 16",
          topic: "Advanced Backend Features",
          category: "Production Features",
          details:
            "GraphQL (Apollo), WebSockets/Socket.IO, microservices basics, background jobs (BullMQ), payments (Stripe, PayPal), API docs",
        },
      ],
    },
    {
      title: "DevOps & Deployment",
      subtitle: "Production-Ready Applications",
      steps: [
        {
          step: "Step - 17",
          topic: "Containerization & Linux",
          category: "Infrastructure",
          details:
            "Docker (containers, Dockerfiles, volumes), Linux basics (file system, permissions), PM2 process management",
        },
        {
          step: "Step - 18",
          topic: "Cloud Deployment",
          category: "Cloud Platforms",
          details:
            "AWS (EC2, S3, RDS, Lambda), Vercel/Netlify frontend, Railway/Render backend, Nginx configuration, SSL setup",
        },
        {
          step: "Step - 19",
          topic: "CI/CD & Monitoring",
          category: "Automation",
          details:
            "GitHub Actions/GitLab CI pipelines, automated testing, deployment automation, Prometheus, Grafana, Sentry monitoring",
        },
        {
          step: "Step - 20",
          topic: "System Design Fundamentals",
          category: "Architecture",
          details:
            "Scalability, load balancing, caching strategies, message queues, CAP theorem, database scaling, clean architecture",
        },
      ],
    },
  ];

  const frontendRoadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        {
          step: "Step - 1",
          topic: "Internet & Web Basics",
          category: "Web Fundamentals",
          details:
            "DNS, hosting, domain names, client vs server, HTTP/HTTPS, request-response cycle, browser rendering process, HTML/CSS/JS basics",
        },
        {
          step: "Step - 2",
          topic: "HTML Mastery",
          category: "Markup Language",
          details:
            "Semantic HTML (header, main, footer), forms & validations, accessibility tags (aria-label, roles), media elements (video, audio, picture)",
        },
        {
          step: "Step - 3",
          topic: "CSS Mastery",
          category: "Styling & Layout",
          details:
            "Box model, flexbox, grid, positioning, BEM, CSS variables, responsive design, media queries, animations, SASS, Tailwind CSS",
        },
        {
          step: "Step - 4",
          topic: "JavaScript Fundamentals",
          category: "Core Programming",
          details:
            "Variables, functions, DOM manipulation, ES6+ features, async/await, Fetch API, error handling, event loop understanding",
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
          details:
            "Prototypes, inheritance, 'this' keyword, modules (ESM, CommonJS), generators, debouncing/throttling, Web APIs, Service Workers",
        },
        {
          step: "Step - 6",
          topic: "Git & Version Control",
          category: "Development Workflow",
          details:
            "Git basics (init, add, commit, push, pull), branching & merging strategies, GitHub/GitLab workflows, collaboration practices",
        },
        {
          step: "Step - 7",
          topic: "Frontend Framework (React)",
          category: "Framework Mastery",
          details:
            "JSX, components, props, state, Hooks (useState, useEffect, useContext), Context API, React Router, custom hooks, component lifecycle",
        },
        {
          step: "Step - 8",
          topic: "TypeScript Integration",
          category: "Type Safety",
          details:
            "Static typing basics, interfaces & types, generics, type narrowing & unions, TypeScript with React/Vue, advanced type patterns",
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
          details:
            "REST API integration (Fetch, Axios), GraphQL (Apollo Client), error handling & retries, infinite scroll & pagination",
        },
        {
          step: "Step - 10",
          topic: "State Management & Performance",
          category: "Optimization",
          details:
            "Redux Toolkit, Zustand, memoization (React.memo, useMemo, useCallback), code splitting, lazy loading, virtualized lists",
        },
        {
          step: "Step - 11",
          topic: "Testing & Quality Assurance",
          category: "Testing Strategy",
          details:
            "Unit testing (Jest, Vitest), component testing (React Testing Library), E2E testing (Playwright, Cypress), test coverage",
        },
        {
          step: "Step - 12",
          topic: "Build Tools & Optimization",
          category: "Development Tools",
          details:
            "Vite (2025 standard), Webpack basics, Babel/SWC, environment variables, image optimization, tree shaking, bundle analysis",
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
          details:
            "Vercel, Netlify, Render deployment, CI/CD pipelines (GitHub Actions), environment configs, monitoring & analytics",
        },
        {
          step: "Step - 14",
          topic: "UI/UX for Engineers",
          category: "Design Integration",
          details:
            "Design systems (Material UI, Chakra UI, Radix UI), Figma for devs, accessibility testing (Lighthouse, axe-core), responsive design",
        },
        {
          step: "Step - 15",
          topic: "Advanced Topics 2025",
          category: "Cutting Edge",
          details:
            "Progressive Web Apps (PWA), WebAssembly (Wasm), Web Components (Lit, Stencil), micro-frontends, AI-assisted UI tools",
        },
        {
          step: "Step - 16",
          topic: "Real-World Projects",
          category: "Portfolio Building",
          details:
            "Portfolio with Next.js, e-commerce frontend, real-time chat app (WebSockets), dashboard with charts & auth, PWA weather app",
        },
      ],
    },
  ];

  const projectIdeas = [
    {
      category: "Beginner Projects",
      projects:
        "Personal Portfolio, Todo App, Calculator, Weather App, Landing Page",
    },
    {
      category: "Intermediate Projects",
      projects:
        "E-commerce Store, Social Media Dashboard, Task Management, Blog CMS, Chat Application",
    },
    {
      category: "Advanced Projects",
      projects:
        "SaaS Dashboard, Real-time Collaboration Tool, PWA, Microservices App, Data Visualization Platform",
    },
    {
      category: "Full-Stack Projects",
      projects:
        "Social Media Clone, E-commerce with Payments, Real-time Chat, Multi-tenant SaaS, DevOps Pipeline",
    },
  ];

  const certificationSuggestions = [
    {
      level: "Entry Level",
      certs:
        "FreeCodeCamp Responsive Web Design, Meta Frontend Developer, Google IT Support",
    },
    {
      level: "Intermediate",
      certs:
        "Google UX Design, AWS Cloud Practitioner, Microsoft Azure Fundamentals, Oracle MySQL",
    },
    {
      level: "Advanced",
      certs:
        "React Developer Certification, Google Mobile Web Specialist, AWS Solutions Architect",
    },
    {
      level: "Specialization",
      certs:
        "Kubernetes Application Developer, AWS DevOps Engineer, MongoDB Certified Developer",
    },
  ];

  const practiceResources = [
    {
      category: "Coding Challenges",
      resources: "Frontend Mentor, Codewars, LeetCode, HackerRank, CodeSignal",
    },
    {
      category: "Project Platforms",
      resources: "GitHub, CodeSandbox, StackBlitz, Repl.it, Glitch",
    },
    {
      category: "Learning Resources",
      resources:
        "MDN Web Docs, JavaScript.info, React Docs, Node.js Docs, Vue Mastery",
    },
    {
      category: "Communities",
      resources:
        "Dev.to, Stack Overflow, Reddit r/webdev, Discord Communities, Twitter #WebDev",
    },
  ];

  const currentRoadmap =
    activeTab === "fullstack" ? fullStackRoadmap : frontendRoadmap;

  const getSectionColor = (idx) => {
    const colors = [
      "bg-gradient-to-r from-blue-500 to-blue-600",
      "bg-gradient-to-r from-green-500 to-green-600",
      "bg-gradient-to-r from-orange-500 to-orange-600",
      "bg-gradient-to-r from-purple-500 to-purple-600",
      "bg-gradient-to-r from-pink-500 to-pink-600",
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-sans">
      {/* Download Visual PDF Button */}
      <div className="flex justify-end max-w-7xl mx-auto mb-4">
        <button
          onClick={() =>
            handleDownloadVisualPDF(
              activeTab === "frontend" ? frontendRoadmap : fullStackRoadmap,
              activeTab,
              (val) => setDownloading(val)
            )
          }
          disabled={downloading}
          className={`px-4 py-2 rounded-lg font-medium text-sm shadow-md transition-all duration-200 flex items-center gap-2
            ${
              downloading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105"
            }`}
        >
          {downloading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Visual PDF
            </>
          )}
        </button>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200 flex">
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "fullstack"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                🚀 Full-Stack Path
              </button>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "frontend"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                🎨 Frontend Focus
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">
                💻 {currentRoadmap.length * 4} Essential Steps • 🎯{" "}
                {currentRoadmap.length} Skill Areas • 🚀 Career Ready
              </span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {currentRoadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div
                      className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(
                        sectionIdx
                      )}`}
                    >
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">
                        {section.subtitle}
                      </div>
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
                              <linearGradient
                                id={`gradient-${sectionIdx}-${stepIdx}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line
                              x1="0"
                              y1="12"
                              x2="70"
                              y2="12"
                              stroke={`url(#gradient-${sectionIdx}-${stepIdx})`}
                            />
                            <polyline
                              points="60,6 70,12 60,18"
                              stroke={`url(#gradient-${sectionIdx}-${stepIdx})`}
                            />
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
                  <div
                    className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(
                      sectionIdx
                    )} flex-shrink-0`}
                  >
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">
                      {section.subtitle}
                    </div>
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

        {/* Project Ideas Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🚀 Project Ideas by Skill Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectIdeas.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  {item.category}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {item.projects}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Industry Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  {item.level}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {item.certs}
                </div>
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
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  {item.category}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {item.resources}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            🛠️ Essential Development Tools & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Frameworks</div>
              <div className="text-blue-100">
                React, Vue, Angular, Svelte, Next.js, Nuxt.js
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Technologies</div>
              <div className="text-blue-100">
                Node.js, Express, NestJS, GraphQL, REST APIs
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-blue-100">
                PostgreSQL, MySQL, MongoDB, Redis, Prisma
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps & Cloud</div>
              <div className="text-blue-100">
                Docker, AWS, Vercel, GitHub Actions, Nginx
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
