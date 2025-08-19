import React from 'react';

export default function NodeJSRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "JavaScript Mastery", 
          category: "Language Fundamentals",
          details: "ES6+, modules, async programming, event loop, error handling, OOP & functional programming"
        },
        { 
          step: "Step - 2", 
          topic: "TypeScript Essentials", 
          category: "Type Safety",
          details: "Interfaces, types, enums, generics, decorators, strict typing for APIs (must-have in 2025)"
        },
        { 
          step: "Step - 3", 
          topic: "Computer Science Basics", 
          category: "Core Concepts",
          details: "Data structures, algorithms, Big-O notation, performance awareness, memory management"
        },
        { 
          step: "Step - 4", 
          topic: "Node.js Architecture", 
          category: "Runtime Understanding",
          details: "Single-threaded, non-blocking I/O, V8 engine, event-driven model, EventEmitter patterns"
        },
        { 
          step: "Step - 5", 
          topic: "Core Modules", 
          category: "Built-in APIs",
          details: "File System (fs), Path, OS, HTTP module, NPM/Yarn/PNPM, environment variables, debugging"
        },
        { 
          step: "Step - 6", 
          topic: "Basic HTTP Servers", 
          category: "Server Fundamentals",
          details: "Raw HTTP servers, routing basics, request/response handling, middleware concepts"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Frameworks & APIs",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Express.js Mastery", 
          category: "Web Framework",
          details: "Routing, middleware, error handling, template engines, file uploads, authentication, REST APIs"
        },
        { 
          step: "Step - 8", 
          topic: "Modern Alternatives", 
          category: "Performance Frameworks",
          details: "Fastify (schema validation), NestJS (enterprise, TypeScript-first, DI, microservices)"
        },
        { 
          step: "Step - 9", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "PostgreSQL/MySQL (Prisma, Sequelize), MongoDB (Mongoose), Redis caching, ORM/ODM patterns"
        },
        { 
          step: "Step - 10", 
          topic: "Authentication & Security", 
          category: "Security Implementation",
          details: "JWT, OAuth2.0, SSO, Helmet.js, rate limiting, CORS, input validation, password hashing"
        },
        { 
          step: "Step - 11", 
          topic: "Beyond REST APIs", 
          category: "Advanced API Types",
          details: "GraphQL (Apollo), gRPC, WebSockets (Socket.io), tRPC (TypeScript-first APIs)"
        },
        { 
          step: "Step - 12", 
          topic: "Testing & Quality", 
          category: "Code Quality",
          details: "Jest/Mocha, integration testing, E2E testing, test coverage, ESLint, Prettier"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Production Systems",
      steps: [
        { 
          step: "Step - 13", 
          topic: "DevOps Fundamentals", 
          category: "Deployment",
          details: "Git workflows, CI/CD pipelines, Docker containerization, Kubernetes orchestration"
        },
        { 
          step: "Step - 14", 
          topic: "Cloud & Serverless", 
          category: "Cloud Platforms",
          details: "AWS/GCP/Azure deployment, Lambda functions, Vercel, Netlify, serverless architectures"
        },
        { 
          step: "Step - 15", 
          topic: "Monitoring & Logging", 
          category: "Observability",
          details: "Winston/Pino logging, ELK stack, Prometheus + Grafana, error tracking, performance monitoring"
        },
        { 
          step: "Step - 16", 
          topic: "Scaling Strategies", 
          category: "Performance",
          details: "Clustering (PM2), load balancing (NGINX), horizontal scaling, caching strategies"
        },
        { 
          step: "Step - 17", 
          topic: "Event-Driven Architecture", 
          category: "Messaging Systems",
          details: "Kafka, RabbitMQ, pub/sub patterns, event sourcing, CQRS, distributed communication"
        },
        { 
          step: "Step - 18", 
          topic: "Microservices", 
          category: "Distributed Systems",
          details: "Service communication, API gateways (Kong, NGINX), service discovery, circuit breakers"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Industry Standards",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Advanced Patterns", 
          category: "Architecture Design",
          details: "Clean Architecture, DDD, layered architecture, dependency injection, design patterns"
        },
        { 
          step: "Step - 20", 
          topic: "Modern Toolchain", 
          category: "2025 Tools",
          details: "PNPM, NX/Turborepo monorepos, esbuild/SWC, Vite builds, advanced bundling"
        },
        { 
          step: "Step - 21", 
          topic: "Real-time Systems", 
          category: "Live Applications",
          details: "WebRTC, real-time video/audio, live streaming, collaborative apps, socket management"
        },
        { 
          step: "Step - 22", 
          topic: "API Documentation", 
          category: "Developer Experience",
          details: "Swagger/OpenAPI, Postman collections, API validation (Zod, Ajv), developer portals"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "CLI Todo App & Basic HTTP Server" },
    { level: "Advanced", project: "REST API with Authentication" },
    { level: "Specialization", project: "Microservices E-commerce Platform" },
    { level: "Mastery", project: "Real-time Chat with Video Streaming" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
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
              <span className="text-sm font-medium text-gray-700">🚀 22 Essential Steps • 🎯 4 Skill Levels • 💼 Production Ready</span>
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
            🏗️ Node.js Practice Projects
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

        {/* Essential Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Node.js Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frameworks</div>
              <div className="text-green-100">Express.js, Fastify, NestJS, Koa</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-green-100">PostgreSQL, MongoDB, Redis, MySQL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">ORM/ODM</div>
              <div className="text-green-100">Prisma, Mongoose, Sequelize, TypeORM</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-green-100">Jest, Mocha, Cypress, Supertest</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Queues</div>
              <div className="text-green-100">Kafka, RabbitMQ, Bull, Agenda</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Authentication</div>
              <div className="text-green-100">Passport, JWT, OAuth2, Auth0</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-green-100">Docker, Kubernetes, PM2, NGINX</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-green-100">Winston, Prometheus, ELK, Pino</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced Node.js Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Microservices</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable e-commerce with user service, product catalog, order processing, and payment gateway.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Microservices • Docker • Kafka</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Create Slack/Discord clone with WebSocket, file sharing, presence indicators, and message history.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Socket.io • Redis • MongoDB</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Build real-time analytics with data ingestion, processing, and visualization APIs.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">GraphQL • ClickHouse • Bull</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎥 Video Streaming API</h3>
              <p className="text-sm text-gray-600 mb-3">Design video upload, transcoding, streaming with CDN integration and adaptive bitrate.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">FFmpeg • AWS S3 • HLS</div>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Pro Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Practice First</div>
              <div className="text-gray-700">Build projects while learning. Don't just read - code along and experiment with examples.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Read Documentation</div>
              <div className="text-gray-700">Node.js and npm docs are excellent. Always check official docs before third-party tutorials.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔍 Understand Internals</div>
              <div className="text-gray-700">Learn how Node.js event loop works. Understanding internals helps debug and optimize applications.</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Node.js is about non-blocking I/O and event-driven architecture. Build, deploy, and scale real applications!
          </p>
        </div>
      </div>
    </main>
  );
}