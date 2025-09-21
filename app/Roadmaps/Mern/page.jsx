"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const MERNStackRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Web Development Foundations",
      subtitle: "Beginner Level",
      description: "Build strong web basics before diving into MERN",
      color: "bg-blue-500",
      sections: [
        {
          title: "HTML5 & CSS3",
          items: [
            "Semantic HTML5 (forms, tables, media, accessibility basics)",
            "CSS3 (flexbox, grid, responsive design, transitions)",
            "CSS frameworks (Tailwind CSS - modern industry choice)",
            "Mobile-first approach & cross-browser compatibility"
          ]
        },
        {
          title: "JavaScript (ES6+)",
          items: [
            "Variables (let/const), functions, scope, closures",
            "DOM manipulation, events, event delegation",
            "Promises, async/await, Fetch API",
            "ES6+ features (arrow functions, destructuring, spread operator)",
            "JSON handling & local storage"
          ]
        },
        {
          title: "Version Control & Tools",
          items: [
            "Git basics (init, add, commit, push, pull)",
            "GitHub workflow (repositories, branches, pull requests)",
            "NPM package manager basics",
            "Code editor setup (VS Code extensions)"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Frontend with React",
      subtitle: "Junior Level",
      description: "Master React - the 'R' in MERN stack",
      color: "bg-purple-500",
      sections: [
        {
          title: "React Core Concepts",
          items: [
            "Components, JSX, props, state management",
            "Event handling & form management",
            "Conditional rendering & lists with keys",
            "Hooks (useState, useEffect, useContext, useRef)"
          ]
        },
        {
          title: "React Advanced Features",
          items: [
            "Custom hooks creation & reusability",
            "React Router (navigation & dynamic routing)",
            "Context API for global state management",
            "Performance optimization (React.memo, lazy loading)"
          ]
        },
        {
          title: "React Ecosystem & Styling",
          items: [
            "State management with Redux Toolkit",
            "UI libraries (Material-UI, Chakra UI, shadcn/ui)",
            "Styling solutions (Tailwind CSS, styled-components)",
            "Build tools (Vite, Create React App alternatives)"
          ]
        },
        {
          title: "React Projects",
          items: [
            "Todo App with local state management",
            "Weather App with API integration",
            "Blog interface with React Router"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Backend with Node.js & Express",
      subtitle: "Mid-Level",
      description: "Build robust APIs and server-side logic",
      color: "bg-green-500",
      sections: [
        {
          title: "Node.js Fundamentals",
          items: [
            "Event loop, modules, NPM ecosystem",
            "File system operations, path handling",
            "Environment variables & configuration",
            "Debugging Node.js applications"
          ]
        },
        {
          title: "Express.js Framework",
          items: [
            "Routing, middleware, request/response handling",
            "REST API design & implementation",
            "Error handling & validation",
            "CORS, security headers, rate limiting"
          ]
        },
        {
          title: "Authentication & Security",
          items: [
            "JWT token-based authentication",
            "Password hashing with bcrypt",
            "OAuth2 implementation (Google, GitHub)",
            "Role-based access control (RBAC)"
          ]
        },
        {
          title: "Backend Projects",
          items: [
            "RESTful API for blog system",
            "Authentication system with JWT",
            "File upload service with Multer"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Database with MongoDB",
      subtitle: "Mid-Level → Advanced",
      description: "Master NoSQL database operations and data modeling",
      color: "bg-orange-500",
      sections: [
        {
          title: "MongoDB Basics",
          items: [
            "Documents, Collections, CRUD operations",
            "Query operations & filtering",
            "Indexing for performance optimization",
            "Data types & schema design patterns"
          ]
        },
        {
          title: "Mongoose ODM",
          items: [
            "Schema definition & data modeling",
            "Validation, middleware hooks",
            "Population & relationship management",
            "Query building & aggregation pipelines"
          ]
        },
        {
          title: "Advanced Database Operations",
          items: [
            "Aggregation framework & complex queries",
            "Database transactions & error handling",
            "Performance monitoring & optimization",
            "Backup strategies & data migration"
          ]
        },
        {
          title: "Database Projects",
          items: [
            "User management system with MongoDB",
            "E-commerce product catalog with relationships",
            "Blog system with comments & categories"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Full MERN Integration",
      subtitle: "Senior-Level Prep",
      description: "Connect all pieces into production-ready applications",
      color: "bg-red-500",
      sections: [
        {
          title: "Full-Stack Architecture",
          items: [
            "Client-server communication patterns",
            "API design & documentation with Swagger",
            "Error handling across the stack",
            "Data flow & state synchronization"
          ]
        },
        {
          title: "Advanced Features",
          items: [
            "Real-time features with Socket.io",
            "File uploads & cloud storage (Cloudinary, AWS S3)",
            "Email integration (SendGrid, Nodemailer)",
            "Payment integration (Stripe, PayPal)"
          ]
        },
        {
          title: "Testing & Quality Assurance",
          items: [
            "Unit testing with Jest & React Testing Library",
            "API testing with Supertest & Postman",
            "End-to-end testing with Cypress",
            "Code quality tools (ESLint, Prettier, Husky)"
          ]
        },
        {
          title: "DevOps & Deployment",
          items: [
            "Environment configuration & secrets management",
            "CI/CD pipelines with GitHub Actions",
            "Docker containerization basics",
            "Deployment on Vercel, Netlify, Heroku, Digital Ocean"
          ]
        },
        {
          title: "Production-Ready Projects",
          items: [
            "Full-stack E-commerce platform with payments",
            "Social media application with real-time features",
            "Project management tool with team collaboration"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Professional Development & Career",
      subtitle: "Industry-Ready Level",
      description: "Become job-ready with industry best practices",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Advanced Concepts",
          items: [
            "Microservices architecture introduction",
            "GraphQL with Apollo Server & Client",
            "Serverless functions & edge computing",
            "Performance optimization & monitoring"
          ]
        },
        {
          title: "System Design & Scalability",
          items: [
            "Database design & normalization",
            "Caching strategies (Redis, CDN)",
            "Load balancing & horizontal scaling",
            "API rate limiting & throttling"
          ]
        },
        {
          title: "Portfolio & Career Prep",
          items: [
            "Building impressive portfolio projects",
            "Open source contributions",
            "Technical writing & documentation",
            "Interview preparation (coding challenges, system design)"
          ]
        },
        {
          title: "Industry Skills",
          items: [
            "Agile/Scrum methodology",
            "Code review practices",
            "Technical communication",
            "Continuous learning & staying updated"
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You're MERN Stack Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've mastered the complete MERN stack and are ready to build full-stack web applications professionally.
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
              MERN Stack <span className="text-green-600">Mastery Roadmap</span>
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
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
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
                  ? 'bg-green-500 text-white'
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
                  ? 'bg-green-500 text-white'
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
                  ? 'bg-green-500 text-white'
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

export default MERNStackRoadmap;