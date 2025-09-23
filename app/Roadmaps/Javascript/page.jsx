"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Code } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const JavaScriptRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Beginner",
      subtitle: "JavaScript Fundamentals & Core Concepts (0-2 months)",
      description: "Understand JS fundamentals, syntax, and core programming concepts",
      color: "bg-yellow-600",
      sections: [
        {
          title: "JavaScript Basics",
          items: [
            "Variables → let, const, var declarations and scope differences",
            "Data Types → Number, String, Boolean, null, undefined, Symbol",
            "Operators → Arithmetic, Assignment, Comparison, Logical operations",
            "Type Conversion → Implicit/explicit coercion, template literals (ES6+)"
          ]
        },
        {
          title: "Control Flow & Functions",
          items: [
            "Conditionals → if, else if, else, switch statements",
            "Loops → for, while, do-while, for-of, for-in, break & continue",
            "Functions → Declarations, expressions, arrow functions, parameters",
            "Callbacks → Function as arguments, return values, default parameters"
          ]
        },
        {
          title: "Arrays & Objects",
          items: [
            "Arrays → Creation, access, methods (push, pop, map, filter, reduce)",
            "Objects → Key-value pairs, nested objects, property access",
            "Iteration → forEach, for-in, for-of loops over data structures",
            "Destructuring → Array/object destructuring, spread & rest operators"
          ]
        },
        {
          title: "DOM & Basic Projects",
          items: [
            "DOM Manipulation → getElementById, querySelector, event listeners",
            "Events → click, input, submit handling, dynamic element creation",
            "Basic Projects → Calculator, temperature converter, quiz game",
            "Interactive Projects → To-do list, image gallery with navigation"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate",
      subtitle: "Advanced JS Concepts & Async Programming (2-5 months)",
      description: "Learn advanced concepts, OOP, asynchronous programming, and browser APIs",
      color: "bg-blue-500",
      sections: [
        {
          title: "Advanced Functions & OOP",
          items: [
            "Closures → Function scope, lexical scoping, practical applications",
            "IIFE → Immediately Invoked Function Expressions, module patterns",
            "Higher-order Functions → Currying, function binding (call, apply, bind)",
            "OOP → Objects, classes, constructors, this keyword, prototypes"
          ]
        },
        {
          title: "Asynchronous JavaScript",
          items: [
            "Callbacks → Callback hell, error handling patterns",
            "Promises → .then, .catch, .finally, promise chaining",
            "Async/Await → Modern async syntax, error handling with try/catch",
            "Fetch API → HTTP requests, JSON handling, API consumption"
          ]
        },
        {
          title: "Browser APIs & Storage",
          items: [
            "Web Storage → LocalStorage, SessionStorage, data persistence",
            "Browser APIs → Geolocation, Cookies, event delegation",
            "ES6+ Features → Modules, optional chaining, nullish coalescing",
            "Advanced Concepts → Map, Set, WeakMap, Symbol, iterators"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Weather App → OpenWeather API integration, async data fetching",
            "GitHub Profile Fetcher → API consumption, error handling",
            "To-do with Storage → LocalStorage persistence, CRUD operations",
            "Geolocation Map → Google Maps API, browser location services"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced/Industry-Ready",
      subtitle: "Modern Frameworks & Production Skills (5-12 months)",
      description: "Master advanced JS, frameworks, tooling, and production-level development",
      color: "bg-green-500",
      sections: [
        {
          title: "JavaScript Mastery",
          items: [
            "Event Loop → Concurrency model, call stack, task queue",
            "Performance → Memory management, garbage collection, optimization",
            "Advanced Patterns → Debouncing, throttling, module bundlers",
            "ES6+ Advanced → Tagged templates, proxy, reflect, generators"
          ]
        },
        {
          title: "React.js Framework",
          items: [
            "React Fundamentals → JSX, Components, Props, State management",
            "React Hooks → useState, useEffect, useReducer, useContext",
            "Advanced React → Context API, React Router, forms & validation",
            "Next.js → Server-side rendering, routing, API routes, deployment"
          ]
        },
        {
          title: "State Management & Testing",
          items: [
            "State Solutions → Redux Toolkit, Zustand, React Query",
            "Testing → Jest unit testing, React Testing Library",
            "E2E Testing → Cypress, Playwright for integration testing",
            "Code Quality → ESLint, Prettier, TypeScript integration"
          ]
        },
        {
          title: "Production & Deployment",
          items: [
            "Build Tools → Webpack, Vite, module bundlers, package managers",
            "Deployment → Vercel, Netlify, AWS S3 + CloudFront",
            "CI/CD → GitHub Actions, automated testing, deployment pipelines",
            "Security → XSS prevention, CSRF protection, secure authentication"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Full-Stack JavaScript",
      subtitle: "Backend Development & API Integration (8-15 months)",
      description: "Complete full-stack JavaScript development with Node.js and modern APIs",
      color: "bg-purple-500",
      sections: [
        {
          title: "Node.js Backend",
          items: [
            "Node.js Fundamentals → Runtime environment, modules, npm ecosystem",
            "Express.js → Server setup, routing, middleware, error handling",
            "Database Integration → MongoDB, PostgreSQL, Mongoose ODM",
            "Authentication → JWT tokens, bcrypt, session management, OAuth"
          ]
        },
        {
          title: "API Development",
          items: [
            "REST APIs → CRUD operations, HTTP methods, status codes",
            "API Design → Endpoints, versioning, documentation with Swagger",
            "Real-time → WebSockets, Socket.io, real-time communication",
            "GraphQL → Query language, Apollo Server, schema design"
          ]
        },
        {
          title: "Advanced Backend",
          items: [
            "Microservices → Service architecture, inter-service communication",
            "Caching → Redis, memory caching, performance optimization",
            "File Upload → Multer, image processing, cloud storage",
            "Email/SMS → Nodemailer, Twilio, notification systems"
          ]
        },
        {
          title: "Full-Stack Projects",
          items: [
            "MERN Stack → MongoDB, Express, React, Node.js complete app",
            "E-commerce Platform → Payment integration, inventory management",
            "Real-time Chat → Socket.io, message history, user authentication",
            "Social Media App → Posts, comments, likes, user profiles"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Modern JavaScript",
      subtitle: "Advanced Patterns & Performance (12-18 months)",
      description: "Master modern JavaScript patterns, performance optimization, and enterprise development",
      color: "bg-red-500",
      sections: [
        {
          title: "Advanced JavaScript Patterns",
          items: [
            "Design Patterns → Module, Observer, Factory, Singleton patterns",
            "Functional Programming → Pure functions, immutability, composition",
            "Advanced Async → Promise.all, Promise.race, async generators",
            "Web Workers → Background processing, parallel execution"
          ]
        },
        {
          title: "Performance & Optimization",
          items: [
            "Code Splitting → Dynamic imports, lazy loading, bundle optimization",
            "Memory Management → Leak detection, garbage collection optimization",
            "Performance Monitoring → Web Vitals, Lighthouse, profiling",
            "PWA → Progressive Web Apps, service workers, offline functionality"
          ]
        },
        {
          title: "Enterprise Development",
          items: [
            "Monorepo → Lerna, Nx, workspace management",
            "Microfrontends → Module federation, independent deployments",
            "Serverless → AWS Lambda, Vercel Functions, edge computing",
            "DevOps → Docker, Kubernetes, cloud deployment strategies"
          ]
        },
        {
          title: "Industry Projects",
          items: [
            "Enterprise Dashboard → Complex state management, data visualization",
            "Microfrontend Architecture → Independent team development",
            "Serverless Application → Cloud functions, edge deployment",
            "Open Source Contribution → npm packages, community involvement"
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
                            className="bg-white rounded-lg border-2 border-yellow-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-yellow-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-yellow-50 to-yellow-50 rounded-lg border border-yellow-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're JavaScript Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered modern JavaScript development and are now ready to build scalable web applications, lead development teams, and contribute to cutting-edge projects.
              </p>
              <div className="bg-white p-4 rounded-lg border border-yellow-300 mt-4">
                <h3 className="font-semibold text-yellow-600 mb-2">🎯 Final Tips to Excel in JavaScript Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Practice coding daily - consistency builds muscle memory and confidence</li>
                  <li>• Build real projects - practical experience demonstrates your skills</li>
                  <li>• Stay updated with ES2025+ features and modern frameworks</li>
                  <li>• Contribute to open source projects for community recognition</li>
                  <li>• Join JavaScript communities (Discord servers, Dev.to, Stack Overflow)</li>
                </ul>
              </div>
            </div>

            {/* Key Technologies Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">🛠️ Essential JavaScript Ecosystem Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">⚛️ Frontend Frameworks</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React.js (Most popular)</li>
                    <li>• Next.js (Full-stack React)</li>
                    <li>• Vue.js / Svelte (Alternatives)</li>
                    <li>• TypeScript (Type safety)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🚀 Backend & APIs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Node.js + Express</li>
                    <li>• MongoDB / PostgreSQL</li>
                    <li>• GraphQL / REST APIs</li>
                    <li>• Socket.io (Real-time)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🔧 Development Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vite / Webpack (Bundlers)</li>
                    <li>• Jest / Cypress (Testing)</li>
                    <li>• ESLint / Prettier (Code quality)</li>
                    <li>• Git / GitHub (Version control)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Paths Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">💼 JavaScript Developer Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🎨 Frontend Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: UI/UX, responsive design</li>
                    <li>• Skills: React, CSS, performance</li>
                    <li>• Growth: Senior → Lead Frontend</li>
                    <li>• Salary: $70k - $150k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🔧 Full-Stack Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: End-to-end development</li>
                    <li>• Skills: MERN/MEAN stack, APIs</li>
                    <li>• Growth: Senior → Full-Stack Architect</li>
                    <li>• Salary: $80k - $170k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🏗️ JavaScript Architect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: System design, scalability</li>
                    <li>• Skills: Microservices, performance</li>
                    <li>• Growth: Principal → Tech Lead</li>
                    <li>• Salary: $120k - $250k+</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Resources Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">📚 Recommended Learning Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">📖 Documentation & References</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MDN Web Docs (JavaScript reference)</li>
                    <li>• React.dev (Official React docs)</li>
                    <li>• Node.js Documentation</li>
                    <li>• JavaScript.info (Comprehensive tutorial)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🎥 Video Learning Platforms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• freeCodeCamp (Free comprehensive courses)</li>
                    <li>• The Odin Project (Full curriculum)</li>
                    <li>• JavaScript30 (Wes Bos)</li>
                    <li>• Udemy / Coursera (Structured courses)</li>
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
            <Code className="text-yellow-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              JavaScript <span className="text-yellow-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
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
            className="md:hidden bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
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
                  ? 'bg-yellow-600 text-white'
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
                  ? 'bg-yellow-500 text-white'
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
                  ? 'bg-yellow-500 text-white'
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

export default JavaScriptRoadmap;