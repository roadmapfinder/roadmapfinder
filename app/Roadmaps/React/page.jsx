"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Code } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const ReactRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Prerequisites",
      subtitle: "Web Dev Core (Before React)",
      description: "Solid foundation in web development essentials before diving into React",
      color: "bg-gray-600",
      sections: [
        {
          title: "HTML5 & CSS3 Fundamentals",
          items: [
            "HTML5 → Semantic tags, forms, accessibility basics for modern web",
            "CSS3 → Flexbox, Grid, responsive design, animations and transitions",
            "CSS Preprocessors → Sass/SCSS for efficient styling workflows",
            "Web Standards → W3C compliance, semantic markup, accessibility guidelines"
          ]
        },
        {
          title: "JavaScript ES6+ Mastery",
          items: [
            "Variables & Functions → let/const, arrow functions, template literals",
            "Advanced Features → Destructuring, spread/rest operators, modules",
            "Async JavaScript → Promises, async/await, fetch API for data handling",
            "OOP Concepts → Classes, prototypes, inheritance, encapsulation basics"
          ]
        },
        {
          title: "TypeScript Foundation",
          items: [
            "Type System → Interfaces, types vs interfaces, union/intersection types",
            "Advanced Types → Generics, utility types, conditional types",
            "React Integration → FC, PropsWithChildren, component typing patterns",
            "Configuration → tsconfig.json, strict mode, module resolution"
          ]
        },
        {
          title: "Development Environment",
          items: [
            "Code Editor → VS Code with extensions, debugging setup",
            "Version Control → Git fundamentals, branching, collaboration workflows",
            "Package Managers → npm/yarn, dependency management, scripts",
            "Browser DevTools → Debugging, network analysis, performance profiling"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "React Foundations",
      subtitle: "Core React Concepts (1-2 months)",
      description: "Master the fundamental concepts that power modern React applications",
      color: "bg-blue-500",
      sections: [
        {
          title: "React Basics & JSX",
          items: [
            "React Philosophy → UI library concept, component-based architecture",
            "JSX Syntax → JavaScript XML, Babel transpilation, JSX expressions",
            "Components → Functional vs Class components (focus on Functional)",
            "Props & State → Data flow, immutability, component communication"
          ]
        },
        {
          title: "Event Handling & Lists",
          items: [
            "Event System → SyntheticEvents, event delegation, handlers",
            "Forms → Controlled vs uncontrolled components, form validation",
            "Lists & Keys → Dynamic rendering, reconciliation, performance optimization",
            "Conditional Rendering → Ternary operators, logical AND, early returns"
          ]
        },
        {
          title: "React Hooks Fundamentals",
          items: [
            "useState → State management in functional components, updates",
            "useEffect → Side effects, lifecycle methods, cleanup functions",
            "useRef → DOM manipulation, mutable values, imperative patterns",
            "useContext → Global state, prop drilling solutions, provider pattern"
          ]
        },
        {
          title: "React 18/19 Modern Features",
          items: [
            "Concurrent Rendering → Automatic batching, concurrent features basics",
            "React 19 Transitions → Async transitions, pending states, error handling",
            "Suspense → Data fetching patterns, loading states, error boundaries",
            "Server Components → RSC introduction, client vs server rendering"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate React",
      subtitle: "App Development Skills (2-4 months)",
      description: "Building complete applications with routing, forms, and state management",
      color: "bg-green-500",
      sections: [
        {
          title: "Routing & Navigation",
          items: [
            "React Router v7 → BrowserRouter, routes, navigation patterns",
            "Next.js App Router → File-based routing, layouts, nested routing",
            "Route Protection → Authentication guards, private routes, redirects",
            "Dynamic Routing → URL parameters, query strings, programmatic navigation"
          ]
        },
        {
          title: "Forms & Validation",
          items: [
            "React Hook Form → Performance-optimized forms, minimal re-renders",
            "Validation Libraries → Zod/Yup schema validation, error handling",
            "Form Patterns → Field arrays, nested objects, conditional fields",
            "File Uploads → Handling files, progress indicators, validation"
          ]
        },
        {
          title: "State Management Evolution",
          items: [
            "Local State → useState patterns, state lifting, composition",
            "Context API → Global state, multiple contexts, optimization",
            "Redux Toolkit → Modern Redux, RTK Query, async actions",
            "Alternative Solutions → Zustand, Jotai, Recoil for lighter apps"
          ]
        },
        {
          title: "Data Fetching & Styling",
          items: [
            "Fetch Patterns → fetch API, error handling, loading states",
            "TanStack Query → Caching, pagination, mutations, background updates",
            "Styling Solutions → CSS Modules, TailwindCSS, CSS-in-JS approaches",
            "Component Libraries → Radix UI, shadcn/ui, Material UI integration"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced React",
      subtitle: "Production-Level Skills (4-6 months)",
      description: "Production-ready applications with Next.js, performance optimization, and testing",
      color: "bg-purple-500",
      sections: [
        {
          title: "Next.js 15 Mastery",
          items: [
            "App Router → Server Components, streaming, Turbopack builds",
            "Rendering Strategies → Static vs SSR vs ISR, performance implications",
            "Edge Functions → Serverless functions, API routes, middleware",
            "SEO Optimization → Metadata API, structured data, sitemap generation"
          ]
        },
        {
          title: "Performance Optimization",
          items: [
            "React Optimization → React.memo, useMemo, useCallback patterns",
            "Code Splitting → React.lazy, Suspense, dynamic imports, bundle analysis",
            "Rendering Performance → Avoiding re-renders, profiler usage, optimization",
            "Asset Optimization → Image optimization, font loading, resource hints"
          ]
        },
        {
          title: "Testing Ecosystem",
          items: [
            "Unit Testing → Vitest (Vite-native), Jest-compatible testing patterns",
            "Component Testing → React Testing Library, user-centric testing",
            "E2E Testing → Playwright/Cypress, integration testing strategies",
            "Test Strategy → Test pyramid, coverage, CI/CD integration"
          ]
        },
        {
          title: "Modern Tooling",
          items: [
            "Vite 7 → Fast builds, native ES modules, plugin ecosystem",
            "Code Quality → ESLint, Prettier, pre-commit hooks, code standards",
            "Development → Husky, lint-staged, Git hooks, workflow automation",
            "Component Development → Storybook, component documentation, design systems"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry-Ready Mastery",
      subtitle: "Professional Development (6-8+ months)",
      description: "Enterprise-level skills with architecture patterns, security, and deployment",
      color: "bg-red-500",
      sections: [
        {
          title: "Architecture & Patterns",
          items: [
            "Project Structure → Feature-based folders, scalable organization",
            "Design Systems → Atomic Design, component libraries, design tokens",
            "Monorepos → Turborepo/Nx, workspace management, shared packages",
            "Clean Architecture → SOLID principles, separation of concerns, maintainability"
          ]
        },
        {
          title: "Security & Authentication",
          items: [
            "Authentication → JWT tokens, NextAuth, OAuth providers integration",
            "Security Practices → Environment variables, API protection, HTTPS",
            "Rate Limiting → API throttling, DDoS protection, abuse prevention",
            "Data Security → Input validation, XSS prevention, secure coding"
          ]
        },
        {
          title: "Accessibility & SEO",
          items: [
            "A11y Standards → ARIA roles, keyboard navigation, screen readers",
            "Performance Audits → Lighthouse optimization, Core Web Vitals",
            "SEO Excellence → Meta tags, OpenGraph, structured data, analytics",
            "Internationalization → i18n, localization, multi-language support"
          ]
        },
        {
          title: "DevOps & Deployment",
          items: [
            "CI/CD Pipelines → GitHub Actions, automated testing, deployment",
            "Cloud Deployment → Vercel, Netlify, AWS, containerization strategies",
            "Monitoring → Error tracking, performance monitoring, analytics",
            "Containerization → Docker, Kubernetes basics, production deployment"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Career Preparation",
      subtitle: "Industry Professional (Ongoing)",
      description: "Portfolio building, open source contribution, and career advancement",
      color: "bg-indigo-600",
      sections: [
        {
          title: "Portfolio Development",
          items: [
            "Project Showcase → 3-4 production-grade applications with case studies",
            "Technical Writing → Documentation, blog posts, knowledge sharing",
            "Code Quality → Clean code examples, best practices demonstration",
            "Performance Metrics → Load times, SEO scores, accessibility ratings"
          ]
        },
        {
          title: "Open Source & Community",
          items: [
            "Contributions → React libraries, documentation improvements, bug fixes",
            "Community Engagement → Stack Overflow, Discord, technical discussions",
            "Knowledge Sharing → Conference talks, workshops, mentoring others",
            "Networking → Developer meetups, online communities, professional connections"
          ]
        },
        {
          title: "Advanced Specialization",
          items: [
            "System Design → Frontend architecture, scaling considerations",
            "Performance Engineering → Advanced optimization, micro-frontends",
            "Team Leadership → Code reviews, architectural decisions, mentoring",
            "Technology Evaluation → Framework comparison, technology adoption"
          ]
        },
        {
          title: "Interview Preparation",
          items: [
            "Technical Skills → Coding challenges, system design, React concepts",
            "Portfolio Presentation → Project walkthroughs, technical decisions",
            "Soft Skills → Communication, problem-solving, team collaboration",
            "Market Research → Salary negotiation, company culture, career growth"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ⚛️ Congratulations! You're React Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered the React ecosystem and are now ready to build scalable, performant applications and lead development teams.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🎯 Final Tips to Excel in React Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Build real, deployable projects - quality over quantity matters</li>
                  <li>• Contribute to React ecosystem - libraries, documentation, community</li>
                  <li>• Stay updated with React RFC, Next.js releases, and ecosystem changes</li>
                  <li>• Practice system design for frontend - scaling, performance, architecture</li>
                  <li>• Join React communities (Discord, Reddit, conferences) for networking</li>
                </ul>
              </div>
            </div>

            {/* Key Technologies Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">🚀 Essential React Ecosystem Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">⚡ Development Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vite 7 (Fast builds)</li>
                    <li>• TypeScript (Type safety)</li>
                    <li>• ESLint + Prettier</li>
                    <li>• React DevTools</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🎨 UI & Styling</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TailwindCSS (Utility-first)</li>
                    <li>• shadcn/ui (Components)</li>
                    <li>• Framer Motion (Animations)</li>
                    <li>• Storybook (Documentation)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🗄️ State & Data</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Redux Toolkit (Complex state)</li>
                    <li>• TanStack Query (Server state)</li>
                    <li>• Zustand (Simple state)</li>
                    <li>• React Hook Form</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Paths Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">💼 React Developer Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🌐 Frontend Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: UI/UX implementation</li>
                    <li>• Skills: React, CSS, responsive design</li>
                    <li>• Growth: Senior → Lead Frontend</li>
                    <li>• Salary: $70k - $150k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">⚡ Full Stack Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: End-to-end development</li>
                    <li>• Skills: React + Node.js/Python</li>
                    <li>• Growth: Senior → Tech Lead</li>
                    <li>• Salary: $80k - $180k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🏗️ Solution Architect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: System design, architecture</li>
                    <li>• Skills: React + cloud + leadership</li>
                    <li>• Growth: Principal → VP Engineering</li>
                    <li>• Salary: $120k - $250k+</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Code className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              React <span className="text-blue-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ReactRoadmap;