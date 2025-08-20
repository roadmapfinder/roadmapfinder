import React from 'react';

export default function SpringBootRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Core Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Java Fundamentals & OOP", 
          category: "Core Concepts",
          details: "OOP principles, Exception Handling, Collections Framework, Streams API, Lambda Expressions, Generics"
        },
        { 
          step: "Step - 2", 
          topic: "Development Environment", 
          category: "Essential Tools",
          details: "Git/GitHub, Maven/Gradle, IntelliJ IDEA/Eclipse, Java 17+ LTS, Project Structure"
        },
        { 
          step: "Step - 3", 
          topic: "Spring Core Concepts", 
          category: "Dependency Injection",
          details: "IoC Container, ApplicationContext, Bean Lifecycle, @Component, @Autowired, @Bean, @Configuration"
        },
        { 
          step: "Step - 4", 
          topic: "Spring Boot Basics", 
          category: "Auto-Configuration",
          details: "Starters, Auto-Configuration, application.yml/properties, Profiles, Logging, DevTools"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Web Development",
      steps: [
        { 
          step: "Step - 5", 
          topic: "REST API Development", 
          category: "Spring Web",
          details: "@RestController, @RequestMapping, HTTP methods, @PathVariable, @RequestParam, Response handling"
        },
        { 
          step: "Step - 6", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "Spring Data JPA, Hibernate, Entities, Relationships, Repositories, JPQL, Pagination"
        },
        { 
          step: "Step - 7", 
          topic: "Validation & Error Handling", 
          category: "Request Processing",
          details: "@Valid, Hibernate Validator, @ControllerAdvice, @ExceptionHandler, Global Error Handling"
        },
        { 
          step: "Step - 8", 
          topic: "Database Management", 
          category: "SQL & Migration",
          details: "MySQL/PostgreSQL, Joins, Indexing, Transactions, Liquibase/Flyway migrations"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Enterprise Features",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Spring Security", 
          category: "Authentication & Authorization",
          details: "Authentication vs Authorization, JWT, Role-based Access, OAuth2, Password Encryption, CORS"
        },
        { 
          step: "Step - 10", 
          topic: "Advanced Spring Features", 
          category: "Cross-cutting Concerns",
          details: "Spring AOP, Events & Listeners, Profiles, Spring Mail, Spring Batch for scheduled jobs"
        },
        { 
          step: "Step - 11", 
          topic: "Messaging & Async Processing", 
          category: "Event-driven Architecture",
          details: "@Async, RabbitMQ, Kafka, WebSockets, Pub/Sub model, Event-driven Microservices"
        },
        { 
          step: "Step - 12", 
          topic: "Testing Strategies", 
          category: "Quality Assurance",
          details: "JUnit 5, Mockito, Integration Testing, TestContainers, Contract Testing, REST Assured"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Production & Scale",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Microservices Architecture", 
          category: "Distributed Systems",
          details: "Spring Cloud, Service Discovery, API Gateway, Config Server, Circuit Breakers, Distributed Tracing"
        },
        { 
          step: "Step - 14", 
          topic: "DevOps & Deployment", 
          category: "Production Ready",
          details: "Docker, Kubernetes, CI/CD, AWS/GCP/Azure, Actuator, Monitoring, ELK Stack"
        },
        { 
          step: "Step - 15", 
          topic: "System Design & Performance", 
          category: "Scalability",
          details: "Caching (Redis), Rate Limiting, Load Balancing, Event-driven Architecture, CAP Theorem"
        },
        { 
          step: "Step - 16", 
          topic: "Industry Best Practices", 
          category: "Professional Development",
          details: "Design Patterns, SOLID Principles, Domain-Driven Design, Clean Code, API Documentation"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Task Management API" },
    { level: "Intermediate", project: "E-commerce Backend" },
    { level: "Advanced", project: "Microservices Platform" },
    { level: "Mastery", project: "Enterprise Cloud Application" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 16 Essential Steps • 🏗️ 4 Skill Levels • 💼 Enterprise Ready</span>
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
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded">
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
            🚀 Spring Boot Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Spring Boot Technologies */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Spring Boot Ecosystem & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Spring Stack</div>
              <div className="text-purple-100">Spring Boot, Spring MVC, Spring Data, Spring Security</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-purple-100">MySQL, PostgreSQL, MongoDB, Redis, H2</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-purple-100">Maven, Gradle, Spring Initializr, DevTools</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-purple-100">JUnit 5, Mockito, TestContainers, REST Assured</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud & DevOps</div>
              <div className="text-purple-100">Docker, Kubernetes, AWS, Azure, GCP</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Microservices</div>
              <div className="text-purple-100">Spring Cloud, Eureka, Gateway, Config Server</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Brokers</div>
              <div className="text-purple-100">RabbitMQ, Apache Kafka, ActiveMQ, Redis Pub/Sub</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-purple-100">Actuator, Prometheus, Grafana, ELK Stack</div>
            </div>
          </div>
        </section>

        {/* Industry-Level Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Spring Boot Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📝 Task Management System</h3>
              <p className="text-sm text-gray-600 mb-3">Build a complete task management API with user authentication, project organization, and team collaboration.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">REST API • JWT Auth • MySQL</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Backend</h3>
              <p className="text-sm text-gray-600 mb-3">Create scalable e-commerce backend with products, orders, payments, and inventory management.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Microservices • Spring Security • Redis</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏦 Banking Microservices</h3>
              <p className="text-sm text-gray-600 mb-3">Design distributed banking system with account management, transactions, and fraud detection.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Spring Cloud • Event Sourcing • CQRS</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Real-time Analytics Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build streaming analytics platform with Kafka, real-time dashboards, and machine learning integration.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Kafka • WebSocket • ML Pipeline</div>
            </div>
          </div>
        </section>

        {/* Career Roles */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 Career Roles with Spring Boot</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Java Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Backend Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Full Stack Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Microservices Architect</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">DevOps Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Solution Architect</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Spring Boot is the industry standard for Java backend development. Master the fundamentals, build real projects, and focus on best practices!
          </p>
        </div>
      </div>
    </main>
  );
}