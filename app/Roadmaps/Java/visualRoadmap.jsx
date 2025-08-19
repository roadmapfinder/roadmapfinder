import React from 'react';

export default function JavaRoadmap() {
  const roadmap = [
    {
      title: "Programming Foundations",
      subtitle: "Core Computer Science Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Fundamentals", 
          category: "CS Basics (Mandatory)",
          details: "Variables, loops, conditionals, arrays, data types, input/output, problem solving, debugging, IDE setup"
        },
        { 
          step: "Step - 2", 
          topic: "Development Environment", 
          category: "Tools Setup",
          details: "IntelliJ IDEA/Eclipse setup, JDK installation, Maven/Gradle basics, Git fundamentals, project structure"
        },
        { 
          step: "Step - 3", 
          topic: "Object-Oriented Programming", 
          category: "Core Paradigm",
          details: "Classes, objects, encapsulation, inheritance, polymorphism, abstraction, constructors, method overloading"
        },
      ],
    },
    {
      title: "Core Java (JSE)",
      subtitle: "Java Standard Edition Mastery",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Java Language Basics", 
          category: "Foundation Knowledge",
          details: "Data types, operators, control statements, Strings, StringBuilder/StringBuffer, primitive vs non-primitive types"
        },
        { 
          step: "Step - 5", 
          topic: "Collections Framework", 
          category: "Data Structures",
          details: "List, Set, Map, Queue interfaces, ArrayList, HashMap, TreeSet, LinkedList, Iterator patterns, generics"
        },
        { 
          step: "Step - 6", 
          topic: "Exception Handling & I/O", 
          category: "Error Management",
          details: "Try-catch blocks, custom exceptions, checked vs unchecked, file handling, serialization, NIO"
        },
        { 
          step: "Step - 7", 
          topic: "Multithreading & Concurrency", 
          category: "Parallel Programming",
          details: "Thread lifecycle, synchronized blocks, Executor framework, Callable/Future, Locks, concurrent collections"
        },
        { 
          step: "Step - 8", 
          topic: "Java 8+ Modern Features", 
          category: "Modern Java",
          details: "Lambda expressions, Streams API, functional interfaces, Optional, method references, Date/Time API"
        },
      ],
    },
    {
      title: "Enterprise Java (JEE)",
      subtitle: "Web Development Foundations",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Web Technologies", 
          category: "Server-Side Development",
          details: "Servlets, JSP, filters, listeners, session management, HTTP protocol understanding, web.xml configuration"
        },
        { 
          step: "Step - 10", 
          topic: "Database Connectivity", 
          category: "Data Persistence",
          details: "JDBC API, connection pooling, prepared statements, transactions, batch processing, database drivers"
        },
        { 
          step: "Step - 11", 
          topic: "SQL & Database Design", 
          category: "Database Mastery",
          details: "MySQL/PostgreSQL, joins, indexing, stored procedures, transactions, normalization, query optimization"
        },
      ],
    },
    {
      title: "Spring Ecosystem",
      subtitle: "Industry Standard Framework",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Spring Core & Boot", 
          category: "Framework Fundamentals",
          details: "IoC container, DI, beans, auto-configuration, starter dependencies, application properties, profiles"
        },
        { 
          step: "Step - 13", 
          topic: "Spring MVC & REST APIs", 
          category: "Web Services",
          details: "Controller design, RESTful principles, JSON handling, validation, exception handling, HATEOAS"
        },
        { 
          step: "Step - 14", 
          topic: "Spring Data & Security", 
          category: "Data & Auth",
          details: "JPA repositories, custom queries, JWT authentication, OAuth2, method-level security, CORS"
        },
        { 
          step: "Step - 15", 
          topic: "Spring Cloud & Microservices", 
          category: "Distributed Systems",
          details: "Service discovery, API gateway, config server, circuit breakers, load balancing, distributed tracing"
        },
      ],
    },
    {
      title: "Production & DevOps",
      subtitle: "Enterprise Deployment",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Testing & Quality", 
          category: "Code Reliability",
          details: "JUnit, Mockito, integration testing, Testcontainers, contract testing with Pact, TDD practices"
        },
        { 
          step: "Step - 17", 
          topic: "Containerization & CI/CD", 
          category: "DevOps Pipeline",
          details: "Docker containers, Kubernetes deployment, Jenkins/GitHub Actions, automated testing, deployment strategies"
        },
        { 
          step: "Step - 18", 
          topic: "Cloud & Monitoring", 
          category: "Production Systems",
          details: "AWS/Azure services, infrastructure as code, logging (SLF4J), monitoring, observability, health checks"
        },
        { 
          step: "Step - 19", 
          topic: "System Design & Architecture", 
          category: "Senior-Level Skills",
          details: "Design patterns, SOLID principles, clean architecture, scalability, caching, message queues, DDD"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Core Java", project: "Banking System with File I/O & Multithreading" },
    { level: "Spring Basics", project: "Blog REST API with JWT Authentication" },
    { level: "Microservices", project: "E-commerce Platform with Multiple Services" },
    { level: "Enterprise", project: "Real-time Chat Application with WebSockets" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
        

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">☕ 19 Essential Steps • 🏢 5 Skill Levels • 🚀 Enterprise Ready</span>
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
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
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
            🏗️ Java Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">☕ Essential Java Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Spring Ecosystem</div>
              <div className="text-blue-100">Spring Boot, MVC, Data JPA, Security, Cloud</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database & ORM</div>
              <div className="text-blue-100">Hibernate, JPA, MySQL, PostgreSQL, MongoDB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-blue-100">Maven, Gradle, SBT, Ant, Bazel</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">JUnit, Mockito, Testcontainers, AssertJ, Pact</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Queues</div>
              <div className="text-blue-100">Apache Kafka, RabbitMQ, ActiveMQ, Redis</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Microservices</div>
              <div className="text-blue-100">Eureka, Zuul, Hystrix, Feign, Resilience4j</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-blue-100">Docker, Kubernetes, Jenkins, Terraform</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-blue-100">Prometheus, Grafana, ELK Stack, Micrometer</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Java Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏦 Banking/Payment System</h3>
              <p className="text-sm text-gray-600 mb-3">Build secure banking platform with transaction handling, Kafka events, JWT auth, and audit logging.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Spring Boot • Kafka • PostgreSQL • JWT</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Microservices</h3>
              <p className="text-sm text-gray-600 mb-3">Create scalable e-commerce with Order, Payment, Inventory, and User services using Spring Cloud.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Microservices • Spring Cloud • Docker • K8s</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Develop chat application with WebSockets, Redis pub/sub, file sharing, and group management.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">WebSocket • Redis • MongoDB • Spring Security</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Enterprise Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Build high-performance analytics platform with batch processing, real-time streaming, and reporting.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Spring Batch • Kafka Streams • ClickHouse</div>
            </div>
          </div>
        </section>

        {/* Modern Java Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern Java Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Scale</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• JVM tuning & GraalVM native</li>
                <li>• Reactive programming (WebFlux)</li>
                <li>• Connection pooling optimization</li>
                <li>• Caching strategies (Redis/Hazelcast)</li>
                <li>• Async processing patterns</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Security & Quality</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zero-trust security model</li>
                <li>• OWASP compliance</li>
                <li>• Comprehensive test coverage</li>
                <li>• Static code analysis (SonarQube)</li>
                <li>• Dependency vulnerability scanning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Cloud Native</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Container-first architecture</li>
                <li>• Kubernetes deployment</li>
                <li>• Service mesh (Istio)</li>
                <li>• GitOps & Infrastructure as Code</li>
                <li>• Observability & distributed tracing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Java Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master Core Java First</div>
              <div className="text-gray-700">Solid foundation in OOP, collections, multithreading is essential before jumping to frameworks.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔨 Build Enterprise Projects</div>
              <div className="text-gray-700">Focus on real-world applications with proper architecture, testing, and deployment practices.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Stay Updated</div>
              <div className="text-gray-700">Follow Java release cycles, Spring updates, and emerging patterns in microservices architecture.</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Java Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">💼 Junior Java Developer</div>
              <div className="text-gray-700">Core Java, Spring Boot basics, SQL, basic REST APIs</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Java Backend Engineer</div>
              <div className="text-gray-700">Microservices, security, testing, Docker, cloud deployment</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏗️ Senior Java Engineer</div>
              <div className="text-gray-700">System design, architecture patterns, team leadership, DevOps</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🎯 Java Architect</div>
              <div className="text-gray-700">Enterprise architecture, distributed systems, technology strategy</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ☕ Remember: Java powers enterprise applications worldwide! Master the fundamentals, embrace Spring ecosystem, and build scalable solutions.
          </p>
        </div>
      </div>
    </main>
  );
}