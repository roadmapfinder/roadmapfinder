"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const FullstackDeveloperRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level",
      description: "Build a strong foundation in core web technologies and computer science",
      color: "bg-blue-500",
      sections: [
        {
          title: "Computer Science Fundamentals",
          items: [
            "How the internet works (DNS, HTTP/HTTPS, browsers)",
            "Client-server architecture",
            "Basic OS concepts (processes, threads, I/O)",
            "Version control with Git & GitHub (branching, merging, pull requests)"
          ]
        },
        {
          title: "Web Basics",
          items: [
            "HTML5 → semantic tags, forms, accessibility",
            "CSS3 → flexbox, grid, animations, responsive design",
            "JavaScript ES6+ (variables, functions, arrays, objects, DOM manipulation)",
            "Fetch API, promises, async/await"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Personal Portfolio Website",
            "Responsive Landing Page with forms",
            "Interactive To-Do List with LocalStorage"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Frontend Development",
      subtitle: "Intermediate Level",
      description: "Master modern frontend development with React and TypeScript",
      color: "bg-purple-500",
      sections: [
        {
          title: "Advanced JavaScript & TypeScript",
          items: [
            "Closures, prototypes, this, event loop",
            "ES modules, error handling",
            "TypeScript: types, interfaces, generics, utility types",
            "LocalStorage, SessionStorage, cookies"
          ]
        },
        {
          title: "React Ecosystem",
          items: [
            "React Core: functional components, JSX, hooks (useState, useEffect, useContext)",
            "Next.js: file-based routing, SSR/SSG, API routes, middleware",
            "State Management: Redux Toolkit, TanStack Query",
            "Styling: Tailwind CSS, Shadcn UI, Material UI"
          ]
        },
        {
          title: "Testing & Tools",
          items: [
            "Unit testing with Jest",
            "Component testing with React Testing Library",
            "E2E testing with Cypress/Playwright"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Weather App with API integration",
            "E-commerce product catalog",
            "Blog with Markdown support"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Backend Development",
      subtitle: "Intermediate → Advanced",
      description: "Build robust server-side applications and APIs",
      color: "bg-green-500",
      sections: [
        {
          title: "Node.js & Express.js",
          items: [
            "Event loop, async programming, file system, streams",
            "REST APIs (CRUD, routing, middleware)",
            "Authentication & authorization (JWT, OAuth2, sessions)",
            "Security (CORS, Helmet, rate limiting), validation (Joi/Zod)"
          ]
        },
        {
          title: "Databases & ORMs",
          items: [
            "SQL: PostgreSQL/MySQL (joins, indexes, transactions, triggers)",
            "NoSQL: MongoDB (documents, collections, aggregation pipeline)",
            "ORMs: Prisma (modern, TS-friendly), Sequelize, TypeORM"
          ]
        },
        {
          title: "APIs & Architecture",
          items: [
            "RESTful APIs (versioning, pagination, filtering)",
            "GraphQL (Apollo Server/Client, Nexus)",
            "gRPC for microservices"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Chat app with real-time Socket.IO",
            "Social media clone (auth, posts, likes, comments)",
            "E-commerce store with cart and checkout"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      subtitle: "Advanced Level",
      description: "Deploy and scale applications in production environments",
      color: "bg-orange-500",
      sections: [
        {
          title: "Containers & Cloud",
          items: [
            "Docker (images, containers, volumes, networks)",
            "Docker Compose for multi-service apps",
            "CI/CD with GitHub Actions, GitLab CI",
            "Environment management with Dotenv"
          ]
        },
        {
          title: "Cloud Providers",
          items: [
            "AWS: EC2, S3, RDS, Lambda, API Gateway, CloudFront",
            "Vercel/Netlify for frontend deployment",
            "Render/Railway/Fly.io for fullstack apps"
          ]
        },
        {
          title: "Monitoring & Performance",
          items: [
            "Reverse proxies: Nginx, PM2",
            "Logging: Winston, Morgan",
            "Monitoring: Prometheus, Grafana, Sentry error tracking"
          ]
        },
        {
          title: "Production Projects",
          items: [
            "SaaS dashboard with subscriptions",
            "Project management tool with real-time updates",
            "Multi-tenant application with role-based auth"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Software Engineering Best Practices",
      subtitle: "Senior-Level Prep",
      description: "Apply industry-standard practices and architectural patterns",
      color: "bg-red-500",
      sections: [
        {
          title: "Design Patterns & Architecture",
          items: [
            "Design Patterns: Singleton, Factory, Observer, Strategy",
            "SOLID principles and clean code practices",
            "Layered architecture and Domain-driven design (DDD)",
            "Monorepos with Nx, Turborepo"
          ]
        },
        {
          title: "System Design Basics",
          items: [
            "Scalability (horizontal vs vertical scaling)",
            "Load balancing and caching strategies (Redis, CDN)",
            "Message queues (RabbitMQ, Kafka)",
            "API Documentation with OpenAPI/Swagger"
          ]
        },
        {
          title: "Testing Strategy",
          items: [
            "Unit testing with Jest/Supertest",
            "Integration testing with test containers",
            "Test-driven development (TDD) practices"
          ]
        },
        {
          title: "Senior-Level Projects",
          items: [
            "Video streaming platform with uploads and transcoding",
            "Microservices-based e-commerce system",
            "Real-time collaborative platform"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Topics & Specialization",
      subtitle: "Industry Ready",
      description: "Master cutting-edge technologies and architectural patterns",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Advanced Architecture",
          items: [
            "Microservices architecture and event-driven systems",
            "Serverless computing (AWS Lambda, Cloudflare Workers)",
            "Edge computing and distributed systems",
            "Real-time applications with WebSockets"
          ]
        },
        {
          title: "Advanced Security",
          items: [
            "OWASP Top 10 vulnerabilities",
            "CSRF, XSS, SQL Injection prevention",
            "HTTPS, TLS, HSTS implementation",
            "Authentication strategies and OAuth2.0"
          ]
        },
        {
          title: "Career Preparation",
          items: [
            "Portfolio with 5+ production-ready projects",
            "System design interview preparation",
            "Open source contributions and technical writing",
            "Leadership and mentoring skills"
          ]
        },
        {
          title: "Industry-Grade Projects",
          items: [
            "Distributed chat system with microservices",
            "E-commerce platform with separate services",
            "Real-time analytics dashboard with data processing"
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
                🎉 Congratulations! You're a Fullstack Engineer!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've mastered both frontend and backend development and are ready to build complete web applications from scratch.
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
              Fullstack Developer <span className="text-blue-600">Roadmap 2025</span>
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

export default FullstackDeveloperRoadmap;