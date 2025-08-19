import React from 'react';

export default function NestJSRoadmap() {
  const roadmap = [
    {
      title: "Prerequisites",
      subtitle: "Must Know Before",
      steps: [
        { 
          step: "Step - 1", 
          topic: "JavaScript Mastery", 
          category: "ES6+ Fundamentals",
          details: "Variables, scoping, arrow functions, promises, async/await, destructuring, classes & inheritance"
        },
        { 
          step: "Step - 2", 
          topic: "TypeScript Essentials", 
          category: "Type Safety (Mandatory)",
          details: "Types & interfaces, generics, enums, decorators (critical), utility types, modules & namespaces"
        },
        { 
          step: "Step - 3", 
          topic: "Node.js Fundamentals", 
          category: "Runtime Mastery",
          details: "Event loop, async programming, file system, HTTP basics, NPM/PNPM/Yarn dependency management"
        },
      ],
    },
    {
      title: "Fundamentals",
      subtitle: "NestJS Core Concepts",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Project Setup", 
          category: "Getting Started",
          details: "nest new project-name, CLI commands, project structure, development workflow"
        },
        { 
          step: "Step - 5", 
          topic: "Core Building Blocks", 
          category: "Architecture",
          details: "Modules (grouping), Controllers (routes), Providers/Services (business logic), Dependency Injection"
        },
        { 
          step: "Step - 6", 
          topic: "Request Lifecycle", 
          category: "HTTP Processing",
          details: "Pipes (validation), Guards (auth), Interceptors (logging/transform), Filters (exceptions), Middleware"
        },
        { 
          step: "Step - 7", 
          topic: "Configuration Management", 
          category: "App Settings",
          details: "@nestjs/config, environment variables, validation schemas, dynamic configuration"
        },
      ],
    },
    {
      title: "Database & APIs",
      subtitle: "Data & Communication",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "TypeORM, Prisma (modern choice), Mongoose for MongoDB, migrations, relationships, transactions"
        },
        { 
          step: "Step - 9", 
          topic: "Authentication & Security", 
          category: "Security Implementation",
          details: "Passport.js, JWT tokens, refresh tokens, RBAC, OAuth2.0, session-based auth with Redis"
        },
        { 
          step: "Step - 10", 
          topic: "API Development", 
          category: "Multiple API Types",
          details: "REST with versioning, GraphQL with Apollo, gRPC microservices, tRPC integration, Swagger docs"
        },
        { 
          step: "Step - 11", 
          topic: "Validation & Documentation", 
          category: "Quality Assurance",
          details: "Class-validator, Zod validation, OpenAPI/Swagger, API versioning strategies"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Production Features",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Event-Driven Architecture", 
          category: "Messaging Systems",
          details: "EventEmitter, RabbitMQ, Kafka integration, NATS, Redis Pub/Sub patterns"
        },
        { 
          step: "Step - 13", 
          topic: "Microservices", 
          category: "Distributed Systems",
          details: "TCP transport, gRPC services, message brokers, service discovery, circuit breakers"
        },
        { 
          step: "Step - 14", 
          topic: "Real-time Features", 
          category: "Live Applications",
          details: "WebSockets with Socket.IO, real-time chat, file uploads (Multer + S3), caching strategies"
        },
        { 
          step: "Step - 15", 
          topic: "Performance & Scaling", 
          category: "Optimization",
          details: "Rate limiting, throttling, scheduling, monorepo with Nx, horizontal scaling"
        },
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Production Ready",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Testing Strategy", 
          category: "Quality Assurance",
          details: "Unit testing with Jest, integration tests, E2E testing, test coverage, mocking strategies"
        },
        { 
          step: "Step - 17", 
          topic: "DevOps & Deployment", 
          category: "Operations",
          details: "Docker containerization, CI/CD pipelines, cloud deployment (AWS/GCP), Kubernetes"
        },
        { 
          step: "Step - 18", 
          topic: "Monitoring & Logging", 
          category: "Observability",
          details: "Winston/Pino logging, Sentry error tracking, Prometheus + Grafana metrics"
        },
        { 
          step: "Step - 19", 
          topic: "Enterprise Patterns", 
          category: "Architecture Design",
          details: "Clean Architecture, CQRS, Event Sourcing, DDD, multi-tenant architecture"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Fundamentals", project: "Task Manager API (CRUD + Validation)" },
    { level: "Database & APIs", project: "Blog API with Prisma & PostgreSQL" },
    { level: "Advanced", project: "Real-time Chat with Redis & WebSockets" },
    { level: "Enterprise", project: "E-commerce Platform with Microservices" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-white-50 via-white to-white-60 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4">
         
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Master TypeScript-first Node.js framework for building scalable enterprise applications
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Enterprise Ready</span>
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
                                <stop offset="0%" stopColor="#DC2626" />
                                <stop offset="100%" stopColor="#9333EA" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-red-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded">
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
            🏗️ NestJS Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential NestJS Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database ORMs</div>
              <div className="text-red-100">Prisma, TypeORM, Mongoose, Sequelize</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Authentication</div>
              <div className="text-red-100">Passport.js, JWT, OAuth2, Auth0</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">API Types</div>
              <div className="text-red-100">REST, GraphQL, gRPC, tRPC</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-red-100">Jest, Supertest, E2E, Coverage</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Queues</div>
              <div className="text-red-100">RabbitMQ, Kafka, Redis, NATS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Validation</div>
              <div className="text-red-100">Class-validator, Zod, Joi, Ajv</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-red-100">Docker, Kubernetes, CI/CD, AWS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-red-100">Winston, Pino, Sentry, Prometheus</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced NestJS Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Microservices</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable platform with user, product, order, and payment services using NestJS microservices.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Microservices • gRPC • Kafka</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Create enterprise chat with WebSockets, file sharing, presence, typing indicators using NestJS.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">WebSockets • Redis • Guards</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Job Portal API</h3>
              <p className="text-sm text-gray-600 mb-3">Build monorepo job portal with multiple NestJS apps, shared libraries, and CI/CD pipeline.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Nx Monorepo • RBAC • GraphQL</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏥 Healthcare Management</h3>
              <p className="text-sm text-gray-600 mb-3">Design HIPAA-compliant system with patient records, appointments, and secure messaging.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">CQRS • Event Sourcing • Security</div>
            </div>
          </div>
        </section>

        {/* Industry Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Industry Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">🔧 Modern Toolchain (2025)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PNPM (package manager)</li>
                <li>• Nx/Turborepo (monorepo)</li>
                <li>• SWC/esbuild (fast builds)</li>
                <li>• Prisma (type-safe ORM)</li>
                <li>• Zod (runtime validation)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">🏗️ Architecture Patterns</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clean Architecture</li>
                <li>• Domain-Driven Design</li>
                <li>• CQRS + Event Sourcing</li>
                <li>• Hexagonal Architecture</li>
                <li>• Multi-tenant systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">🚀 Deployment Strategy</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Docker containerization</li>
                <li>• Kubernetes orchestration</li>
                <li>• CI/CD with GitHub Actions</li>
                <li>• Blue-green deployments</li>
                <li>• Monitoring & alerting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 NestJS Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master TypeScript First</div>
              <div className="text-gray-700">NestJS heavily uses decorators and TypeScript features. Strong TS knowledge is essential for success.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🏗️ Understand DI Pattern</div>
              <div className="text-gray-700">Dependency Injection is core to NestJS. Learn how providers, modules, and injection tokens work.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Official Documentation</div>
              <div className="text-gray-700">NestJS docs are excellent and comprehensive. Always start there before looking for external tutorials.</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🦅 Remember: NestJS brings enterprise-level architecture to Node.js. Focus on TypeScript, decorators, and scalable patterns!
          </p>
        </div>
      </div>
    </main>
  );
}