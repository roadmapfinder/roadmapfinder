"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const BackendDeveloperRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Fundamentals",
      subtitle: "Beginner Level",
      description: "Build core understanding of web and server technologies",
      color: "bg-green-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "How the web works (client-server, request/response, DNS, hosting)",
            "HTTP/HTTPS, methods (GET, POST, PUT, DELETE, PATCH)",
            "Linux basics (file system, permissions, shell commands)",
            "Git & GitHub (init, clone, branch, merge, pull, rebase, PRs)"
          ]
        },
        {
          title: "Project",
          items: [
            "Host a simple static site on GitHub Pages",
            "Practice Linux commands in terminal/VM"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Programming & Core Backend Concepts",
      subtitle: "Beginner → Junior Level",
      description: "Master programming fundamentals and API development",
      color: "bg-orange-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Pick one backend language (JavaScript/TypeScript, Python, Java, Go)",
            "Language fundamentals: variables, functions, loops, OOP, async/await",
            "Build REST APIs: request handling, routing, controllers",
            "Error handling and logging"
          ]
        },
        {
          title: "Project",
          items: [
            "To-Do API → CRUD operations with in-memory storage"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Databases & Persistence",
      subtitle: "Junior Level",
      description: "Learn data storage and management fundamentals",
      color: "bg-blue-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Relational databases: PostgreSQL/MySQL",
            "NoSQL databases: MongoDB",
            "Schema design, ER diagrams",
            "Queries, joins, indexes, transactions",
            "ORMs (Prisma, Sequelize, Hibernate, SQLAlchemy)"
          ]
        },
        {
          title: "Project",
          items: [
            "Extend To-Do API with database integration",
            "Add pagination, filtering, and user-task relationships"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Backend Frameworks & API Design",
      subtitle: "Mid-Level",
      description: "Build robust APIs with professional frameworks",
      color: "bg-purple-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Frameworks (Express.js, NestJS, Django, FastAPI, Spring Boot, Gin)",
            "REST API best practices (naming, versioning, status codes)",
            "Authentication & Authorization (JWT, OAuth2, sessions)",
            "Middleware, rate limiting, CORS"
          ]
        },
        {
          title: "Project",
          items: [
            "User Auth API → login/register with JWT",
            "Role-based access (admin vs user)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Advanced Backend & Scalability",
      subtitle: "Mid-Level → Advanced",
      description: "Build scalable, high-performance backend systems",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Caching (Redis, CDN)",
            "Message brokers (RabbitMQ, Kafka)",
            "File storage (AWS S3, Cloudinary)",
            "Search engines (Elasticsearch)",
            "WebSockets for real-time apps",
            "GraphQL fundamentals"
          ]
        },
        {
          title: "System Design",
          items: [
            "Monoliths vs Microservices",
            "Load balancers, reverse proxies",
            "Horizontal vs vertical scaling",
            "CAP theorem, Event-driven architecture"
          ]
        },
        {
          title: "Project",
          items: [
            "E-Commerce API → Products, cart, orders, payments",
            "Add caching, file uploads, background jobs (email sending)"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "DevOps & Deployment",
      subtitle: "Advanced Level",
      description: "Master deployment and infrastructure management",
      color: "bg-red-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Containerization (Docker, Docker Compose)",
            "CI/CD pipelines (GitHub Actions, Jenkins)",
            "Cloud hosting (AWS, GCP, Azure, Vercel, Railway)",
            "Monitoring & logging (Prometheus, Grafana, ELK)"
          ]
        },
        {
          title: "Project",
          items: [
            "Containerize E-Commerce API",
            "Deploy with CI/CD pipeline",
            "Add monitoring dashboard"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Industry-Ready Mastery",
      subtitle: "Senior-Level Prep",
      description: "Be industry-ready with enterprise-level practices",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Core Skills",
          items: [
            "Testing → unit, integration, E2E (Jest, Mocha, PyTest, JUnit)",
            "Security → OWASP Top 10, SQL injection prevention, XSS, CSRF",
            "Software architecture → Domain-Driven Design, Event-driven, Microservices",
            "Documentation & collaboration (API docs, Swagger/OpenAPI, teamwork)",
            "Performance optimization & scaling"
          ]
        },
        {
          title: "Portfolio Projects (Industry-Ready)",
          items: [
            "Full E-Commerce Platform (users, products, payments, admin panel)",
            "Social Media API (posts, likes, comments, notifications, WebSockets)",
            "SaaS App (multi-tenant, subscriptions, billing with Stripe)"
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You're Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've completed the Backend Developer Mastery Roadmap and are now ready to build enterprise-level backend systems.
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
              Backend Developer <span className="text-blue-600">Mastery Roadmap</span>
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

export default BackendDeveloperRoadmap;