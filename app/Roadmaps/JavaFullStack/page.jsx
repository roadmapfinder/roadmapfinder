"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const JavaFullStackRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Beginner Foundations",
      subtitle: "0–3 months",
      description: "Learn Java basics, OOP, basic frontend, and simple projects",
      color: "bg-green-500",
      sections: [
        {
          title: "Core Java",
          items: [
            "Syntax, data types, operators",
            "Control flow: if, switch, loops",
            "Methods & constructors",
            "Object-Oriented Programming: Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation",
            "Arrays, Strings, Collections (List, Set, Map)",
            "Exception Handling",
            "File I/O basics",
            "Java 8+ features: Streams, Lambda expressions"
          ]
        },
        {
          title: "HTML, CSS, JavaScript Basics",
          items: [
            "HTML: Tags, forms, tables, semantic HTML",
            "CSS: Selectors, Flexbox, Grid, responsive design",
            "JavaScript: Variables, functions, DOM manipulation, ES6+, fetch API"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Calculator CLI",
            "Student Management System",
            "Simple Banking App",
            "Personal Portfolio Website",
            "To-Do List App (Vanilla JS)"
          ]
        },
        {
          title: "Resources",
          items: [
            "Java Programming Masterclass (Udemy / FreeCodeCamp)",
            "Oracle Java Docs",
            "Practice coding on HackerRank/LeetCode"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Backend Fundamentals",
      subtitle: "2–4 months",
      description: "Build Java backend skills, REST APIs, DB integration",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Advanced Java / Core Concepts",
          items: [
            "Multi-threading & Concurrency",
            "Generics",
            "Collections in depth",
            "Design Patterns (Singleton, Factory, Observer)",
            "Logging (SLF4J / Log4j)",
            "Unit testing: JUnit"
          ]
        },
        {
          title: "Databases",
          items: [
            "Relational: MySQL / PostgreSQL",
            "CRUD queries, joins, indexing",
            "NoSQL: MongoDB basics",
            "JDBC: Java Database Connectivity"
          ]
        },
        {
          title: "Java Frameworks",
          items: [
            "Spring Core: Dependency Injection, Beans, Application Context",
            "Spring Boot: Rapid REST API development",
            "Spring Data JPA / Hibernate: ORM mapping, database integration"
          ]
        },
        {
          title: "Backend Projects",
          items: [
            "Employee Management System (Java + MySQL)",
            "CRUD API with JDBC",
            "RESTful API for Book Management",
            "Simple Blog Backend (CRUD + authentication)"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Frontend Mastery",
      subtitle: "2–3 months",
      description: "Build modern frontend with React or Angular",
      color: "bg-orange-500",
      sections: [
        {
          title: "Frontend Framework",
          items: [
            "React: Components, JSX, State & Props, Hooks, Context API",
            "OR Angular: Components, Services, RxJS, Forms",
            "Routing: React Router / Angular Router",
            "State Management: Redux / NgRx",
            "UI Libraries: Material-UI / Bootstrap / Tailwind CSS"
          ]
        },
        {
          title: "Integration with Backend",
          items: [
            "Axios / Fetch API",
            "JSON handling",
            "Error handling and notifications",
            "Authentication: JWT token flow"
          ]
        },
        {
          title: "Frontend Projects",
          items: [
            "Dynamic Dashboard (React + API)",
            "E-Commerce Product Listing Page",
            "Fullstack To-Do App (React + Spring Boot)",
            "Blog Application (CRUD + Login)"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Backend + Microservices",
      subtitle: "3–4 months",
      description: "Industry-ready backend with advanced architecture",
      color: "bg-blue-500",
      sections: [
        {
          title: "Advanced Spring",
          items: [
            "Spring Security: Authentication & Authorization",
            "Spring Boot Actuator, Health Checks",
            "Spring Batch (ETL / Job scheduling)",
            "Exception handling & Global controllers"
          ]
        },
        {
          title: "REST & GraphQL APIs",
          items: [
            "REST principles",
            "Postman testing",
            "API versioning",
            "GraphQL basics"
          ]
        },
        {
          title: "Microservices & Cloud Basics",
          items: [
            "Microservices architecture concepts",
            "Spring Cloud: Eureka, Config Server",
            "Docker: Containerization",
            "Kubernetes basics"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Secure REST API with JWT",
            "E-Commerce Backend with Product, Cart, Order services",
            "Microservices for E-Commerce (Product, Cart, Order)",
            "Dockerized Spring Boot apps"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "DevOps & Cloud Integration",
      subtitle: "2–3 months",
      description: "Prepare apps for deployment, CI/CD, cloud readiness",
      color: "bg-purple-500",
      sections: [
        {
          title: "DevOps Basics",
          items: [
            "Git & GitHub: Branching, Pull Requests",
            "Maven / Gradle: Build tools",
            "Jenkins / GitHub Actions: CI/CD pipelines"
          ]
        },
        {
          title: "Containerization & Deployment",
          items: [
            "Docker: Images, containers, volumes",
            "Kubernetes: Deployment, services"
          ]
        },
        {
          title: "Cloud Platforms",
          items: [
            "AWS: EC2, RDS, S3 basics",
            "Azure / GCP optional",
            "Cloud deployment strategies"
          ]
        },
        {
          title: "DevOps Projects",
          items: [
            "Deploy Spring Boot app to AWS EC2",
            "CI/CD pipeline: Git push → Jenkins → Deploy",
            "Containerized full-stack application"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Testing & Quality Assurance",
      subtitle: "1–2 months",
      description: "Ensure code quality and reliability",
      color: "bg-red-500",
      sections: [
        {
          title: "Testing Strategies",
          items: [
            "Unit Testing: JUnit, Mockito",
            "Integration Testing: Spring Boot Test",
            "API Testing: Postman / Rest Assured",
            "End-to-End testing (Selenium / Cypress)"
          ]
        },
        {
          title: "Quality Assurance",
          items: [
            "Code coverage analysis",
            "Static code analysis tools",
            "Performance testing basics",
            "Security testing fundamentals"
          ]
        },
        {
          title: "Testing Projects",
          items: [
            "Fullstack App with test coverage",
            "Automated API testing scripts",
            "E2E testing for web applications"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Real Industry-Level Projects",
      subtitle: "3–4 months",
      description: "Build portfolio-worthy applications",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Major Projects",
          items: [
            "E-Commerce Platform: Fullstack (Spring Boot + React)",
            "Job Portal / Recruitment App: REST API + Frontend dashboard",
            "Social Media Platform Clone: Posts, Comments, Likes, JWT Security",
            "Inventory Management System: Multi-user, microservices-based"
          ]
        },
        {
          title: "Project Features",
          items: [
            "Authentication & Authorization",
            "Product Catalog & Cart Management",
            "Payment Integration",
            "Real-time notifications",
            "File upload and processing"
          ]
        },
        {
          title: "Portfolio Development",
          items: [
            "Portfolio + Blog: Full deployment with CI/CD + Docker + AWS",
            "GitHub repositories with proper documentation",
            "Live deployed applications",
            "Technical blog posts about your projects"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Optional Advanced Skills",
      subtitle: "Ongoing",
      description: "Specialized skills for senior roles",
      color: "bg-pink-500",
      sections: [
        {
          title: "Advanced Backend",
          items: [
            "Reactive Programming: Spring WebFlux, Project Reactor",
            "Message Brokers: RabbitMQ, Kafka",
            "Search Engine: Elasticsearch",
            "Performance Tuning & Caching: Redis, Ehcache"
          ]
        },
        {
          title: "Cloud & Serverless",
          items: [
            "Serverless: AWS Lambda / Azure Functions",
            "Advanced AWS services (SQS, SNS, CloudWatch)",
            "Infrastructure as Code (Terraform, CloudFormation)"
          ]
        },
        {
          title: "Modern Architecture",
          items: [
            "Event-driven architecture",
            "CQRS and Event Sourcing",
            "GraphQL Advanced: Apollo Server / Client integration",
            "API Gateway patterns"
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
                🎉 Congratulations! You're a Java Full Stack Developer!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've mastered the complete Java Full Stack development cycle and are ready to build enterprise-level applications.
              </p>

              {/* Recommended Learning Path */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Recommended Learning Path</h3>
                <div className="text-sm text-blue-800 space-y-2">
                  <p>1. Start with <strong>Core Java</strong> → build CLI apps</p>
                  <p>2. Move to <strong>Backend (Spring Boot)</strong> → build REST APIs</p>
                  <p>3. Learn <strong>Frontend (React / Angular)</strong> → integrate with backend</p>
                  <p>4. Work on <strong>Fullstack Projects</strong> → combine frontend + backend</p>
                  <p>5. Learn <strong>DevOps & Cloud</strong> → deploy projects</p>
                  <p>6. <strong>Microservices & Advanced Architecture</strong> → prepare for enterprise roles</p>
                  <p>7. Build <strong>Real-World Portfolio</strong> → showcase to recruiters</p>
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
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Java Full Stack <span className="text-blue-600">Developer Roadmap 2025</span>
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

export default JavaFullStackRoadmap;