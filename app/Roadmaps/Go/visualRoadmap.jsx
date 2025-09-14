import React from 'react';

export default function GoRoadmap() {
  const roadmap = [
    {
      title: "Foundations",
      subtitle: "Go Basics & Setup",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Go Setup & Environment", 
          category: "Development Environment",
          details: "Install Go, learn go run/build/mod commands, understand $GOPATH and Go Modules, workspace setup, basic project structure"
        },
        { 
          step: "Step - 2", 
          topic: "Core Language Fundamentals", 
          category: "Basic Syntax",
          details: "Variables, constants, data types, operators, conditionals (if/switch), loops (for/range), functions, parameters, return values"
        },
        { 
          step: "Step - 3", 
          topic: "Data Structures & Error Handling", 
          category: "Core Concepts",
          details: "Arrays, slices, maps, structs, pointers, error type, panic/recover, multiple return values, basic error patterns"
        },
      ],
    },
    {
      title: "Intermediate Go",
      subtitle: "Go-Specific Features",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Advanced Go Features", 
          category: "Language Mastery",
          details: "Interfaces (duck typing), type aliases, custom types, packages, modular code, defer statement, method sets"
        },
        { 
          step: "Step - 5", 
          topic: "Concurrency Fundamentals", 
          category: "Core Go Strength",
          details: "Goroutines, channels (buffered/unbuffered), select statement, mutex, WaitGroups, worker pools, channel patterns"
        },
        { 
          step: "Step - 6", 
          topic: "File & Network Handling", 
          category: "I/O Operations",
          details: "File I/O operations, JSON/XML parsing, HTTP client/server (net/http), TCP/UDP sockets, network programming basics"
        },
      ],
    },
    {
      title: "Advanced Go",
      subtitle: "Production-Grade Features",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Advanced Concepts & Generics", 
          category: "Modern Go",
          details: "Reflection (reflect package), generics (Go 1.18+), context package, middleware patterns, dependency injection"
        },
        { 
          step: "Step - 8", 
          topic: "Testing & Quality Assurance", 
          category: "Code Reliability",
          details: "Unit testing, table-driven tests, mocking dependencies, benchmarking, test coverage, integration testing"
        },
        { 
          step: "Step - 9", 
          topic: "Production Error Handling", 
          category: "Reliability",
          details: "Error wrapping (fmt.Errorf), custom error types, logging (zap/logrus), structured logging, error propagation"
        },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Web Services & APIs",
      steps: [
        { 
          step: "Step - 10", 
          topic: "REST API Development", 
          category: "Web Development",
          details: "net/http, Gin/Fiber/Echo frameworks, middleware, authentication (JWT/OAuth2), request handling, file upload"
        },
        { 
          step: "Step - 11", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "database/sql, GORM/sqlx ORMs, PostgreSQL/MySQL/SQLite, NoSQL (MongoDB/Redis), connection pooling"
        },
        { 
          step: "Step - 12", 
          topic: "gRPC & Microservices", 
          category: "Distributed Systems",
          details: "Protocol Buffers, gRPC services, service discovery, API gateways, event-driven architecture, message brokers"
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Production Deployment",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Container & Orchestration", 
          category: "DevOps Integration",
          details: "Docker utilities in Go, Client-Go for Kubernetes API, building Kubernetes operators, container runtime interfaces"
        },
        { 
          step: "Step - 14", 
          topic: "Cloud Development", 
          category: "Cloud Native",
          details: "AWS/GCP/Azure SDKs, serverless Go functions (Lambda), cloud-native patterns, infrastructure as code"
        },
        { 
          step: "Step - 15", 
          topic: "DevOps Tools & CLI", 
          category: "Tooling",
          details: "CLI applications (Cobra/urfave), configuration management, logging/monitoring (Prometheus), automation tools"
        },
        { 
          step: "Step - 16", 
          topic: "Scaling & Performance", 
          category: "Production Ready",
          details: "Memory management, profiling (pprof), race condition prevention, distributed systems, caching strategies"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundations", project: "CLI Task Manager with File I/O" },
    { level: "Intermediate", project: "Concurrent Web Scraper with Goroutines" },
    { level: "Advanced", project: "REST API with JWT Authentication" },
    { level: "Backend", project: "Microservices Chat Application with gRPC" },
    { level: "Cloud", project: "Kubernetes Operator for Custom Resources" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-cyan-500 to-blue-600',
      'bg-gradient-to-r from-blue-500 to-purple-600',
      'bg-gradient-to-r from-purple-500 to-pink-600',
      'bg-gradient-to-r from-pink-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-yellow-600'
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
              <span className="text-sm font-medium text-gray-700">🚀 16 Essential Steps • 🎯 5 Skill Levels • ☁️ Cloud Native Ready</span>
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
                                <stop offset="0%" stopColor="#0891b2" />
                                <stop offset="100%" stopColor="#7c3aed" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-cyan-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-cyan-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-cyan-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-cyan-50 px-2 py-1 rounded">
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
            🏗️ Go Practice Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Go Technologies */}
        <section className="mt-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Go Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Web Frameworks</div>
              <div className="text-cyan-100">Gin, Fiber, Echo, Beego, Buffalo</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database & ORM</div>
              <div className="text-cyan-100">GORM, sqlx, Ent, PostgreSQL, MongoDB, Redis</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Message Brokers</div>
              <div className="text-cyan-100">Kafka, NATS, RabbitMQ, Apache Pulsar</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-cyan-100">Testify, GoMock, Ginkgo, Go Convey</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">gRPC & APIs</div>
              <div className="text-cyan-100">Protocol Buffers, gRPC-Gateway, Twirp</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud & DevOps</div>
              <div className="text-cyan-100">Docker, Kubernetes, Terraform, Helm</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">CLI Tools</div>
              <div className="text-cyan-100">Cobra, urfave/cli, Viper, Prometheus</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud SDKs</div>
              <div className="text-cyan-100">AWS SDK, GCP Client, Azure SDK, Pulumi</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Go Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔗 URL Shortener Service</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable URL shortener with Redis caching, analytics, rate limiting, and custom domains support.</p>
              <div className="text-xs text-cyan-600 bg-cyan-50 px-2 py-1 rounded inline-block">Gin • Redis • PostgreSQL • Docker</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat Application</h3>
              <p className="text-sm text-gray-600 mb-3">Create WebSocket-based chat with rooms, message history, user authentication, and message broadcasting.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">WebSockets • Gorilla • JWT • MongoDB</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏗️ Microservices E-commerce</h3>
              <p className="text-sm text-gray-600 mb-3">Build distributed e-commerce with user, product, order services using gRPC, service mesh, and event sourcing.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">gRPC • Kubernetes • NATS • Istio</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">⚙️ Custom Kubernetes Operator</h3>
              <p className="text-sm text-gray-600 mb-3">Develop Kubernetes operator for managing custom resources, automated deployments, and cluster operations.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Client-Go • CRDs • Controller Runtime</div>
            </div>
          </div>
        </section>

        {/* Modern Go Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern Go Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Concurrency</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Goroutines over threads</li>
                <li>• Channel-based communication</li>
                <li>• Context for cancellation</li>
                <li>• Memory pool patterns</li>
                <li>• Profiling with pprof</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Code Quality & Safety</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Explicit error handling</li>
                <li>• Interface segregation</li>
                <li>• Dependency injection</li>
                <li>• Table-driven tests</li>
                <li>• Static analysis (golangci-lint)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Architecture</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clean Architecture principles</li>
                <li>• Microservices with gRPC</li>
                <li>• Event-driven architecture</li>
                <li>• Cloud-native patterns</li>
                <li>• Observability (metrics/traces)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Strategy */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Go Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master Concurrency</div>
              <div className="text-gray-700">Focus on goroutines and channels first. Understand Go's concurrent programming model and CSP principles.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔨 Build Real Systems</div>
              <div className="text-gray-700">Create backend services, CLI tools, and cloud-native applications. Deploy them to production environments.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Stay Current</div>
              <div className="text-gray-700">Follow Go releases, contribute to open-source projects like Kubernetes, Docker, and other Go-based tools.</div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Go Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Backend Developer</div>
              <div className="text-gray-700">REST/gRPC APIs, microservices, databases, message queues</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">☁️ Cloud Engineer</div>
              <div className="text-gray-700">Kubernetes, Docker, serverless, infrastructure automation</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 DevOps Engineer</div>
              <div className="text-gray-700">CI/CD tools, monitoring, configuration management, SRE</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏗️ Systems Architect</div>
              <div className="text-gray-700">Distributed systems, platform engineering, technical leadership</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Remember: Go is simple, fast, and powerful! Master concurrency, build scalable systems, and join the vibrant Go community.
          </p>
        </div>
      </div>
    </main>
  );
}