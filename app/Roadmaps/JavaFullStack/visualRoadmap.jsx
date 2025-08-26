import React from 'react';

export default function JavaFullStackRoadmap() {
  const roadmap = [
    {
      title: "Computer Science Fundamentals",
      subtitle: "Core Foundation Knowledge",
      steps: [
        { 
          step: "Step - 1", 
          topic: "How Web Works & Networking", 
          category: "Web Fundamentals",
          details: "HTTP/HTTPS protocols, DNS resolution, SSL/TLS certificates, Client-Server architecture, TCP/IP basics"
        },
        { 
          step: "Step - 2", 
          topic: "Programming Fundamentals", 
          category: "Core Programming",
          details: "Variables, loops, conditionals, functions, problem-solving approach, algorithmic thinking"
        },
        { 
          step: "Step - 3", 
          topic: "Data Structures & Algorithms", 
          category: "Problem Solving",
          details: "Arrays, LinkedLists, Stack, Queue, Trees, Graphs, Sorting algorithms, Searching, Time/Space complexity"
        },
        { 
          step: "Step - 4", 
          topic: "Object-Oriented Programming", 
          category: "Design Principles",
          details: "Encapsulation, Abstraction, Inheritance, Polymorphism, SOLID principles, design patterns basics"
        },
      ],
    },
    {
      title: "Core Java Mastery",
      subtitle: "Backend Foundation Language",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Java Fundamentals", 
          category: "Language Basics",
          details: "Data types, operators, control flow, methods, OOPs in Java, packages, access modifiers"
        },
        { 
          step: "Step - 6", 
          topic: "Collections Framework", 
          category: "Data Structures",
          details: "List, Set, Map, Queue interfaces, ArrayList, HashMap, TreeMap, Iterator, Comparable vs Comparator"
        },
        { 
          step: "Step - 7", 
          topic: "Advanced Java Features", 
          category: "Modern Java",
          details: "Exception handling, Multithreading, File I/O, Java 8+ features: Streams, Lambda, Optional, Date/Time API"
        },
        { 
          step: "Step - 8", 
          topic: "JVM & Performance", 
          category: "Runtime Environment",
          details: "JVM architecture, JDK vs JRE, Garbage Collection, Memory management, JVM tuning basics"
        },
      ],
    },
    {
      title: "Frontend Development",
      subtitle: "Modern User Interface",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Web Fundamentals", 
          category: "Frontend Basics",
          details: "HTML5 semantic tags, CSS3 Grid/Flexbox, JavaScript ES6+, DOM manipulation, responsive design"
        },
        { 
          step: "Step - 10", 
          topic: "React.js Framework", 
          category: "UI Library",
          details: "JSX, Components, Props/State, Hooks (useState, useEffect), Context API, React Router, lifecycle methods"
        },
        { 
          step: "Step - 11", 
          topic: "State Management & APIs", 
          category: "Data Flow",
          details: "Redux/Zustand, Axios/Fetch API, async/await, error handling, API integration, form validation"
        },
        { 
          step: "Step - 12", 
          topic: "Modern Styling & Tools", 
          category: "UI Enhancement",
          details: "TailwindCSS/Material-UI, CSS-in-JS, animations, mobile-first design, build tools (Vite/Webpack)"
        },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Server-Side Java Applications",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Spring Boot Fundamentals", 
          category: "Java Framework",
          details: "IoC, Dependency Injection, Spring Boot starters, auto-configuration, MVC pattern, REST controllers"
        },
        { 
          step: "Step - 14", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "Spring Data JPA, Hibernate ORM, entity relationships, lazy/eager loading, repository patterns"
        },
        { 
          step: "Step - 15", 
          topic: "Security & Authentication", 
          category: "Application Security",
          details: "Spring Security, JWT tokens, OAuth2, CORS, password encoding, role-based authorization"
        },
        { 
          step: "Step - 16", 
          topic: "Microservices Architecture", 
          category: "Distributed Systems",
          details: "Spring Cloud, API Gateway, Service Discovery (Eureka), Circuit Breaker, Config Server"
        },
      ],
    },
    {
      title: "Database & DevOps",
      subtitle: "Production-Ready Development",
      steps: [
        { 
          step: "Step - 17", 
          topic: "Database Systems", 
          category: "Data Management",
          details: "SQL (MySQL/PostgreSQL), NoSQL (MongoDB), Redis caching, indexing, query optimization, transactions"
        },
        { 
          step: "Step - 18", 
          topic: "Testing & Quality", 
          category: "Code Reliability",
          details: "JUnit 5, Mockito, integration testing, test-driven development, code coverage, SonarQube"
        },
        { 
          step: "Step - 19", 
          topic: "DevOps & Deployment", 
          category: "Production Deployment",
          details: "Docker containerization, CI/CD pipelines, Git workflows, Maven/Gradle, cloud deployment (AWS/GCP)"
        },
        { 
          step: "Step - 20", 
          topic: "Monitoring & Performance", 
          category: "Production Operations",
          details: "Logging (SLF4J/Logback), Spring Actuator, APM tools, performance optimization, load testing"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Java Fundamentals", project: "Library Management System (Console-based)" },
    { level: "Frontend Development", project: "E-commerce UI with React + TailwindCSS" },
    { level: "Backend Development", project: "REST API for Banking System" },
    { level: "Full-Stack Integration", project: "Social Media Platform (Java + React)" },
    { level: "Microservices", project: "Online Learning Platform with Multiple Services" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-indigo-600',
      'bg-gradient-to-r from-green-600 to-emerald-600',
      'bg-gradient-to-r from-purple-600 to-violet-600',
      'bg-gradient-to-r from-red-600 to-rose-600',
      'bg-gradient-to-r from-orange-600 to-amber-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
         

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">☕ 20 Essential Steps • 🎯 5 Skill Levels • 🏢 Enterprise Ready</span>
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
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[180px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
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

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏗️ Java Full-Stack Practice Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Java Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">☕ Essential Java Technologies Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Framework</div>
              <div className="text-blue-100">Spring Boot, Spring MVC, Spring Data, Spring Security</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Stack</div>
              <div className="text-blue-100">React.js, HTML5, CSS3, JavaScript, TypeScript</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database Systems</div>
              <div className="text-blue-100">MySQL, PostgreSQL, MongoDB, Redis, H2</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build & Testing</div>
              <div className="text-blue-100">Maven, Gradle, JUnit, Mockito, TestNG</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Microservices</div>
              <div className="text-blue-100">Spring Cloud, Eureka, Zuul, Feign, Hystrix</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Brokers</div>
              <div className="text-blue-100">Apache Kafka, RabbitMQ, ActiveMQ</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps & Cloud</div>
              <div className="text-blue-100">Docker, Kubernetes, AWS, GCP, Jenkins</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-blue-100">SLF4J, Logback, Actuator, Micrometer</div>
            </div>
          </div>
        </section>

        {/* Industry-Level Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Enterprise-Level Project Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Microservices Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable e-commerce with Spring Boot microservices, React frontend, payment gateway integration.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Spring Boot • React • PostgreSQL • Kafka • Docker</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💼 Job Portal with Real-time Features</h3>
              <p className="text-sm text-gray-600 mb-3">Create job portal with WebSocket notifications, file uploads, email services, and role-based access.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Spring Boot • WebSocket • JWT • AWS S3 • MySQL</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏦 Banking System with Security</h3>
              <p className="text-sm text-gray-600 mb-3">Develop secure banking application with transaction management, audit logging, and fraud detection.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Spring Security • JPA • Redis • Actuator • Docker</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📚 Online Learning Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build LMS with video streaming, progress tracking, certificates, payment integration, and analytics.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Spring Cloud • React • MongoDB • Stripe • Kubernetes</div>
            </div>
          </div>
        </section>

        {/* Java Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Java Enterprise Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Scalability</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• JVM tuning & GC optimization</li>
                <li>• Connection pooling (HikariCP)</li>
                <li>• Caching strategies (Redis, Caffeine)</li>
                <li>• Async processing with @Async</li>
                <li>• Database query optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Security & Quality</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Spring Security best practices</li>
                <li>• OWASP Top 10 compliance</li>
                <li>• Input validation & sanitization</li>
                <li>• JWT token management</li>
                <li>• Code quality (SonarQube, Checkstyle)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Architecture</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Microservices with Spring Cloud</li>
                <li>• Event-driven architecture</li>
                <li>• API-first development</li>
                <li>• Cloud-native applications</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interview Preparation */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Interview Preparation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔢 DSA Practice</div>
              <div className="text-gray-700">LeetCode, HackerRank, Codeforces - focus on Java solutions, time/space complexity analysis</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🏗️ System Design</div>
              <div className="text-gray-700">Low-level & high-level design, scalability patterns, database design, microservices architecture</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">☕ Core Java</div>
              <div className="text-gray-700">Collections, Multithreading, JVM internals, Spring Boot concepts, design patterns</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">💼 Project Discussion</div>
              <div className="text-gray-700">Be ready to explain your projects, challenges faced, technical decisions, and improvements</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Java Developer Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Backend Developer</div>
              <div className="text-gray-700">Spring Boot, microservices, databases, API development, cloud deployment</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 Full-Stack Developer</div>
              <div className="text-gray-700">Java backend + React frontend, end-to-end development, DevOps knowledge</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏗️ Solutions Architect</div>
              <div className="text-gray-700">System design, technology decisions, enterprise architecture, team leadership</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">☁️ Cloud Engineer</div>
              <div className="text-gray-700">AWS/GCP/Azure, Kubernetes, serverless, infrastructure automation</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ☕ Remember: Java is enterprise-ready! Master the fundamentals, build robust applications, and embrace continuous learning.
          </p>
        </div>
      </div>
    </main>
  );
}