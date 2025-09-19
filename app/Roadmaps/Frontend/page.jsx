"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const FrontendEngineerRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Web Foundations",
      subtitle: "Beginner Level",
      description: "Build a strong base in core web technologies",
      color: "bg-blue-500",
      sections: [
        {
          title: "HTML & CSS",
          items: [
            "Semantic HTML5 (forms, tables, media, accessibility basics)",
            "CSS3 (selectors, box model, positioning, flexbox, grid, transitions)",
            "Responsive design & mobile-first approach",
            "CSS variables & BEM methodology"
          ]
        },
        {
          title: "JavaScript (Core)",
          items: [
            "Variables (let/const), Data types",
            "DOM manipulation",
            "Events & Event delegation",
            "Functions, Scope, Closures",
            "Arrays, Objects, Loops, ES6+ features (arrow functions, spread, destructuring)"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Personal Portfolio Website",
            "Responsive Landing Page",
            "Simple To-Do List (Vanilla JS)"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Advanced JavaScript & Web APIs",
      subtitle: "Junior Level",
      description: "Become confident with modern JS and browser APIs",
      color: "bg-purple-500",
      sections: [
        {
          title: "Advanced JavaScript",
          items: [
            "Asynchronous JS (Callbacks, Promises, async/await)",
            "Fetch API & REST API consumption",
            "Modules (ES6 import/export)",
            "Error handling & debugging",
            "Object-Oriented JS & Prototypes"
          ]
        },
        {
          title: "Web APIs & Browser Features",
          items: [
            "LocalStorage / SessionStorage",
            "Geolocation API",
            "File & Media APIs",
            "Web Workers basics"
          ]
        },
        {
          title: "Junior Projects",
          items: [
            "Weather App (API fetch + UI)",
            "Notes App with LocalStorage",
            "Movie Search App using OMDb API"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Frontend Framework (React + Ecosystem)",
      subtitle: "Mid-Level",
      description: "Master a modern frontend framework (React dominates 2025)",
      color: "bg-green-500",
      sections: [
        {
          title: "React Core",
          items: [
            "JSX, Components, Props, State",
            "Events & Forms",
            "Conditional rendering & lists",
            "Hooks (useState, useEffect, useRef, useContext)"
          ]
        },
        {
          title: "React Advanced",
          items: [
            "Custom hooks",
            "React Router (navigation)",
            "Context API & State Management basics",
            "Performance optimization (memo, lazy loading)"
          ]
        },
        {
          title: "Ecosystem & Styling",
          items: [
            "Tailwind CSS (modern styling)",
            "Styled-components / CSS Modules",
            "Component libraries (MUI, ShadCN, Radix UI)"
          ]
        },
        {
          title: "Mid-Level Projects",
          items: [
            "Blog App (React + API)",
            "E-commerce Product Page (React + Tailwind)",
            "Chat UI with Context API"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "State Management & Next.js",
      subtitle: "Mid-Level → Advanced",
      description: "Build scalable, production-ready apps",
      color: "bg-orange-500",
      sections: [
        {
          title: "State Management",
          items: [
            "Redux Toolkit (or Zustand / Jotai alternatives)",
            "Server state management (React Query / TanStack Query)"
          ]
        },
        {
          title: "Next.js (Full-Stack Frontend)",
          items: [
            "File-based routing (App Router)",
            "Server Components & Client Components",
            "API Routes (backend inside Next.js)",
            "Data fetching (SSR, SSG, ISR, CSR)",
            "Authentication (NextAuth.js, Clerk)",
            "Middleware & Edge Functions"
          ]
        },
        {
          title: "APIs & Integrations",
          items: [
            "REST APIs (best practices)",
            "GraphQL basics (Apollo / URQL)",
            "Using third-party APIs"
          ]
        },
        {
          title: "Projects",
          items: [
            "Full-stack Blog with Next.js (Auth + Database)",
            "E-commerce Store (Next.js + Stripe Payments)",
            "Dashboard (Next.js + Charts + Role-based Auth)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Advanced Frontend Engineering",
      subtitle: "Senior-Level Prep",
      description: "Be industry-ready with real-world practices",
      color: "bg-red-500",
      sections: [
        {
          title: "TypeScript",
          items: [
            "Static typing for React & Next.js",
            "Interfaces, Generics, Utility Types",
            "Type-safe API calls & components"
          ]
        },
        {
          title: "Testing",
          items: [
            "Unit testing (Jest, Vitest)",
            "Component testing (React Testing Library)",
            "E2E testing (Cypress, Playwright)"
          ]
        },
        {
          title: "Performance & Optimization",
          items: [
            "Code splitting, Lazy loading, Bundle analysis",
            "Caching strategies (Service Workers, SWR, TanStack Query)",
            "Web Vitals & Lighthouse audits"
          ]
        },
        {
          title: "CI/CD & DevOps Basics",
          items: [
            "Git & GitHub best practices (branches, PRs, Actions)",
            "Deployment (Vercel, Netlify)",
            "Docker basics (optional)"
          ]
        },
        {
          title: "Senior-Level Projects (Portfolio-Ready)",
          items: [
            "SaaS Dashboard (Next.js + Auth + Payments + Charts)",
            "Social Media App clone (Next.js + Realtime DB like Firebase/Supabase)",
            "Project Management Tool (Kanban board with drag & drop)"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Career & Growth",
      subtitle: "Professional Level",
      description: "Get hired as a frontend engineer",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Portfolio Building",
          items: [
            "3–5 polished projects (case study style, not just code dumps)",
            "Personal website with blog/portfolio"
          ]
        },
        {
          title: "Soft Skills & System Knowledge",
          items: [
            "Collaboration (GitHub, Jira, Notion, Agile workflows)",
            "Understanding UX & accessibility (WCAG 2.2)",
            "API contracts & working with backend teams"
          ]
        },
        {
          title: "Interview Prep",
          items: [
            "DSA basics (arrays, strings, recursion, common LeetCode easy/medium)",
            "System design basics for frontend (SPAs, caching, CDNs)",
            "Whiteboard problems (debouncing, throttling, event bubbling)"
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
        // Optional: Show success toast/notification
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
        // Optional: Show error toast/notification
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You're Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've completed the Frontend Engineer Roadmap and are now ready to take on professional development challenges.
              </p>
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
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Frontend Engineer <span className="text-blue-600">Roadmap</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
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
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
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
                  ? 'bg-blue-500 text-white'
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

export default FrontendEngineerRoadmap;