import React from 'react';

export default function SpringMasteryRoadmap() {
  const roadmap = [
    {
      title: "Prerequisites",
      subtitle: "Before Spring",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Java SE Mastery", 
          category: "Core Java",
          details: "OOP (Encapsulation, Inheritance, Polymorphism), Collections Framework, Generics, Streams, Lambda Expressions"
        },
        { 
          step: "Step - 2", 
          topic: "Build Tools & Database", 
          category: "Development Tools",
          details: "Maven/Gradle build automation, Basic SQL + JDBC, Database connections and operations"
        },
        { 
          step: "Step - 3", 
          topic: "Modern Java Features", 
          category: "Java 8+ Features",
          details: "Optional, Functional Interfaces, Stream API, Exception Handling, Method References"
        },
        { 
          step: "Step - 4", 
          topic: "Version Control", 
          category: "Development Workflow",
          details: "Git fundamentals, GitHub workflows, Branching strategies, Pull requests and code reviews"
        },
      ],
    },
    {
      title: "Core Spring",
      subtitle: "Framework Foundation",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Spring Core Concepts", 
          category: "IoC & DI",
          details: "Inversion of Control, Dependency Injection, ApplicationContext & BeanFactory, Spring Beans & Scopes"
        },
        { 
          step: "Step - 6", 
          topic: "Spring AOP", 
          category: "Aspect-Oriented Programming",
          details: "Cross-cutting concerns, Logging, Transactions, Security aspects, Pointcuts and Advices"
        },
        { 
          step: "Step - 7", 
          topic: "Spring JDBC & ORM", 
          category: "Data Access Layer",
          details: "JdbcTemplate, Spring with Hibernate/JPA, Data Source Configuration, Transaction Management"
        },
        { 
          step: "Step - 8", 
          topic: "Spring MVC", 
          category: "Web Layer",
          details: "Model-View-Controller, DispatcherServlet, Controllers, View Resolvers, Form Handling"
        },
      ],
    },
    {
      title: "Spring Boot",
      subtitle: "Modern Development",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Spring Boot Fundamentals", 
          category: "Auto Configuration",
          details: "Auto Configuration, Starter Dependencies, Application Properties/YAML, Profiles (Dev, Test, Prod)"
        },
        { 
          step: "Step - 10", 
          topic: "REST APIs Development", 
          category: "RESTful Services",
          details: "@RestController, @RequestMapping, PathVariable, RequestParam, Exception Handling, Validation"
        },
        { 
          step: "Step - 11", 
          topic: "Data Persistence", 
          category: "Spring Data JPA",
          details: "Hibernate, CRUD Repositories, Pagination & Sorting, Entity Relationships (OneToMany, ManyToMany)"
        },
        { 
          step: "Step - 12", 
          topic: "Testing Strategies", 
          category: "Quality Assurance",
          details: "Unit Testing (JUnit 5, Mockito), Integration Testing (@SpringBootTest), Test Slices"
        },
      ],
    },
    {
      title: "Advanced Spring",
      subtitle: "Enterprise & Cloud",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Spring Security", 
          category: "Security Framework",
          details: "Authentication & Authorization, JWT, OAuth2, OpenID Connect, Role-based Access Control"
        },
        { 
          step: "Step - 14", 
          topic: "Spring Cloud Microservices", 
          category: "Distributed Systems",
          details: "Service Discovery (Eureka), API Gateway, Config Server, Circuit Breaker, Distributed Tracing"
        },
        { 
          step: "Step - 15", 
          topic: "Reactive Programming", 
          category: "Spring WebFlux",
          details: "Reactive Programming (Mono, Flux), Reactive REST APIs, Non-blocking I/O, Backpressure"
        },
        { 
          step: "Step - 16", 
          topic: "Production Readiness", 
          category: "Enterprise Deployment",
          details: "Caching (Redis), Spring Batch, Observability (Micrometer, Prometheus), Cloud Integration"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Prerequisites", project: "Java Console Banking App" },
    { level: "Core Spring", project: "Library Management System" },
    { level: "Spring Boot", project: "E-commerce REST API" },
    { level: "Advanced Spring", project: "Microservices Banking Platform" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 16 Essential Steps • 🏗️ 4 Skill Levels • 🌱 Spring Mastery 2025</span>
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
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#3B82F6" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-green-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-green-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded">
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
            🚀 Spring Framework Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Spring Ecosystem */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🌱 Spring Ecosystem & Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Spring</div>
              <div className="text-green-100">Spring Framework, Spring Boot, Spring MVC, Spring AOP</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data & Persistence</div>
              <div className="text-green-100">Spring Data JPA, Hibernate, MySQL, PostgreSQL, MongoDB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Security & Authentication</div>
              <div className="text-green-100">Spring Security, JWT, OAuth2, OpenID Connect, LDAP</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Microservices</div>
              <div className="text-green-100">Spring Cloud, Eureka, Gateway, Config Server, Circuit Breaker</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Reactive Programming</div>
              <div className="text-green-100">Spring WebFlux, Project Reactor, Mono, Flux</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing Framework</div>
              <div className="text-green-100">JUnit 5, Mockito, Testcontainers, WireMock</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud & DevOps</div>
              <div className="text-green-100">Docker, Kubernetes, AWS, Azure, CI/CD</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring & Observability</div>
              <div className="text-green-100">Micrometer, Prometheus, Grafana, Zipkin, Sleuth</div>
            </div>
          </div>
        </section>

        {/* Capstone Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Ready Capstone Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Full-featured e-commerce with Spring Boot, JPA, Security, Swagger, and payment integration.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Spring Boot • JPA • Security • Swagger</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏦 Microservices Banking App</h3>
              <p className="text-sm text-gray-600 mb-3">Event-driven banking system with Spring Cloud, Kafka, and distributed transactions.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Spring Cloud • Eureka • Gateway • Kafka</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💼 Job Portal Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Social media-style job portal with REST APIs, JWT authentication, Redis caching, and file uploads.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">REST • JWT • Redis • Docker • Kubernetes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Real-time Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Reactive data streaming platform with Spring WebFlux, MongoDB, and real-time notifications.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">WebFlux • MongoDB • WebSocket • Reactive</div>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Learning Resources (2025 Updated)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">📕 Essential Books</div>
              <div className="text-purple-100">Spring in Action (6th Edition) - Craig Walls</div>
              <div className="text-purple-100">Spring Boot in Action - Craig Walls</div>
              <div className="text-purple-100">Cloud Native Java - Josh Long</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🎥 Video Channels</div>
              <div className="text-purple-100">Amigoscode, Java Brains</div>
              <div className="text-purple-100">in28Minutes, FreeCodeCamp</div>
              <div className="text-purple-100">SpringOne, Devoxx Talks</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🌐 Official Resources</div>
              <div className="text-purple-100">Spring.io Guides</div>
              <div className="text-purple-100">Spring Boot Documentation</div>
              <div className="text-purple-100">Spring Academy</div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mt-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 Spring Developer Career Paths</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Java Spring Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Backend Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Full Stack Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Microservices Architect</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Spring Boot Specialist</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Cloud Solutions Architect</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">DevOps Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Technical Lead</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Enterprise Architect</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Principal Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Engineering Manager</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">CTO</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌱 Remember: Spring mastery comes from building real projects. Start with basics, practice consistently, and embrace the Spring ecosystem!
          </p>
        </div>
      </div>
    </main>
  );
}