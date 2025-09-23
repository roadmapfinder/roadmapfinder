"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Coffee } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const JavaRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Beginner",
      subtitle: "Java Fundamentals & Core OOP Concepts (0-3 months)",
      description: "Learn Java fundamentals, basic OOP, and write simple console applications",
      color: "bg-red-600",
      sections: [
        {
          title: "Java Basics",
          items: [
            "Installation → JDK setup, IDEs (IntelliJ IDEA, Eclipse, VS Code)",
            "Hello World → Basic syntax, printing, input/output with Scanner",
            "Data Types → Primitives, variables, constants, type conversion",
            "Operators → Arithmetic, relational, logical, bitwise operations",
            "Control Flow → if-else, switch-case, for/while/do-while loops"
          ]
        },
        {
          title: "Object-Oriented Programming",
          items: [
            "Classes & Objects → Class creation, object instantiation, methods",
            "Constructors → Default, parameterized, constructor overloading",
            "Access Modifiers → public, private, protected, default scope",
            "Encapsulation → Data hiding, getters/setters, this keyword",
            "Inheritance → extends keyword, super, method overriding, polymorphism"
          ]
        },
        {
          title: "Core Java APIs",
          items: [
            "String Handling → String methods, StringBuilder, StringBuffer",
            "Arrays → Creation, manipulation, multidimensional arrays",
            "Collections Basics → ArrayList, basic iteration patterns",
            "Exception Handling → try-catch-finally, checked/unchecked exceptions",
            "File I/O → FileReader, BufferedReader, basic file operations"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Simple Calculator → Console-based arithmetic operations",
            "Number Guessing Game → Random numbers, user input validation",
            "Temperature Converter → Celsius/Fahrenheit conversion utility",
            "Student Management → Basic CRUD with console interface",
            "Bank Account Simulation → Object-oriented account management"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate",
      subtitle: "Collections, Multithreading & Design Patterns (3-6 months)",
      description: "Master Java Collections, File I/O, multithreading, and basic design patterns",
      color: "bg-orange-500",
      sections: [
        {
          title: "Collections & Generics",
          items: [
            "Collections Framework → Lists, Sets, Maps, Queues, iterators",
            "Generics → Type safety with <T>, wildcards, bounded types",
            "HashMap Internals → Hash functions, collision handling, performance",
            "Comparator vs Comparable → Sorting objects, custom comparisons",
            "Enhanced For-loops → Iterator patterns, stream-like operations"
          ]
        },
        {
          title: "Exception Handling & I/O",
          items: [
            "Advanced Exceptions → Custom exceptions, throws vs throw",
            "File Operations → File class, BufferedReader/Writer, Scanner",
            "Serialization → Object serialization/deserialization patterns",
            "Properties Files → Configuration loading, resource management",
            "Debugging Techniques → IDE debugging, breakpoints, stack traces"
          ]
        },
        {
          title: "Multithreading & Concurrency",
          items: [
            "Thread Fundamentals → Thread class, Runnable interface, lifecycle",
            "Synchronization → synchronized keyword, thread safety, deadlocks",
            "ExecutorService → Thread pools, task management, futures",
            "Volatile & Atomic → Memory visibility, atomic operations",
            "Producer-Consumer → Classic concurrency problem implementation"
          ]
        },
        {
          title: "Design Patterns & Projects",
          items: [
            "Singleton Pattern → Thread-safe singleton implementations",
            "Factory Pattern → Object creation abstraction, factory methods",
            "Observer Pattern → Event-driven programming, listener patterns",
            "Strategy Pattern → Algorithm encapsulation, runtime behavior",
            "Employee Management → Collections + HashMap with file persistence"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced",
      subtitle: "Spring Boot, Databases & REST APIs (6-12 months)",
      description: "Become proficient in Java frameworks, databases, APIs, and advanced concepts",
      color: "bg-green-500",
      sections: [
        {
          title: "Advanced Java Features",
          items: [
            "Generics Deep Dive → Wildcards, type erasure, generic methods",
            "Annotations & Reflection → Custom annotations, runtime reflection",
            "Lambda Expressions → Functional programming, method references",
            "Streams API → Filtering, mapping, reducing, parallel streams",
            "Modern Java → Records, Sealed Classes, Optional, CompletableFuture"
          ]
        },
        {
          title: "Database Integration",
          items: [
            "JDBC Fundamentals → Database connections, CRUD operations",
            "PreparedStatement → SQL injection prevention, parameterized queries",
            "Transaction Management → Commit, rollback, isolation levels",
            "Connection Pooling → Database connection optimization",
            "Student DB System → Complete database-backed application"
          ]
        },
        {
          title: "Spring Boot & REST APIs",
          items: [
            "Spring Boot Setup → Project initialization, dependency injection",
            "REST Controllers → @RestController, @RequestMapping annotations",
            "Request Handling → @PathVariable, @RequestBody, @RequestParam",
            "Spring Data JPA → Entity mapping, repository pattern, Hibernate",
            "Exception Handling → Global exception handling, custom error responses"
          ]
        },
        {
          title: "Testing & Build Tools",
          items: [
            "Unit Testing → JUnit 5, test lifecycle, assertions",
            "Mocking → Mockito for dependency mocking, test isolation",
            "Test-Driven Development → TDD workflow, red-green-refactor cycle",
            "Maven/Gradle → Dependency management, build automation",
            "CI/CD Basics → GitHub Actions, automated testing pipelines"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry-Ready",
      subtitle: "Enterprise Frameworks & Microservices (12-18 months)",
      description: "Master enterprise-level frameworks, microservices, and cloud-ready development",
      color: "bg-blue-500",
      sections: [
        {
          title: "Spring Ecosystem",
          items: [
            "Spring Core → Dependency injection, IoC container, bean lifecycle",
            "Spring MVC → Web applications, view resolvers, form handling",
            "Spring Security → Authentication, authorization, JWT integration",
            "Spring Data JPA → Advanced querying, custom repositories",
            "Spring Boot Actuator → Application monitoring, health checks"
          ]
        },
        {
          title: "Microservices Architecture",
          items: [
            "Spring Boot Microservices → Service decomposition, independent deployment",
            "Spring Cloud → Configuration management, service registry",
            "Service Discovery → Eureka server, client-side load balancing",
            "API Gateway → Spring Cloud Gateway, request routing, filtering",
            "Circuit Breaker → Resilience4j, fault tolerance patterns"
          ]
        },
        {
          title: "Messaging & Performance",
          items: [
            "Asynchronous Processing → @Async, CompletableFuture, task scheduling",
            "Message Queues → RabbitMQ, Apache Kafka integration",
            "JMS Integration → Java Message Service, message-driven beans",
            "Caching → Redis, Ehcache, Spring Cache abstraction",
            "Performance Tuning → JVM optimization, garbage collection, profiling"
          ]
        },
        {
          title: "Cloud & DevOps",
          items: [
            "Containerization → Docker containers, multi-stage builds",
            "Cloud Deployment → AWS, Azure, GCP deployment strategies",
            "Kubernetes → Container orchestration, service meshes",
            "Monitoring → Application performance monitoring, logging",
            "CI/CD Pipelines → Jenkins, GitHub Actions, automated deployment"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Expert Level",
      subtitle: "Advanced Architecture & Specializations (18+ months)",
      description: "Master advanced Java concepts, architectural patterns, and specialized domains",
      color: "bg-purple-500",
      sections: [
        {
          title: "Advanced Architecture",
          items: [
            "System Design → Scalability patterns, load balancing, data partitioning",
            "Event-Driven Architecture → Event sourcing, CQRS, saga patterns",
            "Domain-Driven Design → Bounded contexts, aggregates, repositories",
            "Clean Architecture → Dependency inversion, hexagonal architecture",
            "Distributed Systems → CAP theorem, eventual consistency, consensus"
          ]
        },
        {
          title: "Performance & Optimization",
          items: [
            "JVM Internals → Garbage collection tuning, memory management",
            "Profiling Tools → VisualVM, JProfiler, performance bottleneck analysis",
            "Concurrent Programming → Fork/Join framework, parallel processing",
            "Memory Optimization → Heap analysis, memory leak detection",
            "Database Optimization → Query optimization, indexing strategies"
          ]
        },
        {
          title: "Specialized Technologies",
          items: [
            "Reactive Programming → Spring WebFlux, reactive streams, backpressure",
            "GraphQL APIs → Schema design, query optimization, federation",
            "Big Data → Apache Spark, Kafka Streams, distributed processing",
            "Security Advanced → OAuth2, SAML, security testing, vulnerability assessment",
            "Machine Learning → Java ML libraries, model integration, data processing"
          ]
        },
        {
          title: "Enterprise Projects",
          items: [
            "E-commerce Platform → Full microservices architecture with payment integration",
            "Banking System → High-availability, transaction processing, audit trails",
            "Real-time Chat → WebSocket, message queues, horizontal scaling",
            "Enterprise Dashboard → Complex data aggregation, real-time updates",
            "Open Source Contribution → Community involvement, library development"
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
                            className="bg-white rounded-lg border-2 border-red-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-red-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-red-50 to-red-50 rounded-lg border border-red-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ☕ Congratulations! You're Java Enterprise Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered Java development from fundamentals to enterprise architecture and are now ready to build scalable applications, lead development teams, and architect complex systems.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-300 mt-4">
                <h3 className="font-semibold text-red-600 mb-2">🎯 Final Tips to Excel in Java Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Practice coding daily - solve problems on LeetCode, HackerRank</li>
                  <li>• Build portfolio projects - showcase your Spring Boot expertise</li>
                  <li>• Stay updated with Java 21+ features and Spring ecosystem</li>
                  <li>• Contribute to open source Java projects on GitHub</li>
                  <li>• Join Java communities (Reddit r/java, Stack Overflow, DZone)</li>
                </ul>
              </div>
            </div>

            {/* Key Technologies Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">🛠️ Essential Java Ecosystem Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🏗️ Frameworks & Libraries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Spring Boot (Most popular)</li>
                    <li>• Spring Framework (Enterprise)</li>
                    <li>• Hibernate/JPA (ORM)</li>
                    <li>• Apache Maven/Gradle (Build)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">💾 Databases & Messaging</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MySQL / PostgreSQL</li>
                    <li>• MongoDB (NoSQL)</li>
                    <li>• Redis (Caching)</li>
                    <li>• Apache Kafka / RabbitMQ</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🔧 Development Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• IntelliJ IDEA / Eclipse</li>
                    <li>• JUnit 5 / Mockito (Testing)</li>
                    <li>• Docker / Kubernetes</li>
                    <li>• Jenkins / GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Paths Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">💼 Java Developer Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🚀 Backend Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: APIs, databases, business logic</li>
                    <li>• Skills: Spring Boot, microservices</li>
                    <li>• Growth: Senior → Principal Developer</li>
                    <li>• Salary: $75k - $160k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🔧 Full-Stack Java Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: End-to-end Java applications</li>
                    <li>• Skills: Spring + React/Angular</li>
                    <li>• Growth: Tech Lead → Engineering Manager</li>
                    <li>• Salary: $85k - $180k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🏗️ Java Architect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: System design, enterprise architecture</li>
                    <li>• Skills: Microservices, cloud, patterns</li>
                    <li>• Growth: Principal → Distinguished Engineer</li>
                    <li>• Salary: $130k - $280k+</li>
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
                    <li>• Oracle Java Documentation (Official)</li>
                    <li>• Spring.io Guides (Spring ecosystem)</li>
                    <li>• Baeldung (Java tutorials)</li>
                    <li>• Java Code Geeks (Articles & examples)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🎥 Video Learning Platforms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Java Brains (YouTube channel)</li>
                    <li>• Coding with John (Beginner-friendly)</li>
                    <li>• Pluralsight / Udemy (Structured courses)</li>
                    <li>• Spring Academy (Official Spring training)</li>
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
            <Coffee className="text-red-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Java <span className="text-red-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
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
            className="md:hidden bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
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
                  ? 'bg-red-600 text-white'
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
                  ? 'bg-red-500 text-white'
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
                  ? 'bg-red-500 text-white'
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

export default JavaRoadmap;