import React from 'react';

export default function BackendRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Programming & Web Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Fundamentals", 
          category: "Core Programming",
          details: "Master data structures (arrays, linked lists, trees), algorithms (sorting, searching), OOP principles, and functional programming basics. Choose your primary language: JavaScript/TypeScript, Python, Java, Go, or C#"
        },
        { 
          step: "Step - 2", 
          topic: "HTTP & Web Fundamentals", 
          category: "Web Protocols",
          details: "HTTP methods (GET, POST, PUT, DELETE), status codes (200, 404, 500), REST API design principles, GraphQL & gRPC basics, WebSockets for real-time communication"
        },
        { 
          step: "Step - 3", 
          topic: "Backend Language Deep Dive", 
          category: "Language Mastery",
          details: "JavaScript/Node.js → Express, NestJS; Python → Django, Flask, FastAPI; Java → Spring Boot; Go → Gin, Fiber; C# → .NET Core"
        },
      ],
    },
    {
      title: "Database",
      subtitle: "Data & Storage Systems",
      steps: [
        { 
          step: "Step - 4", 
          topic: "SQL Databases", 
          category: "Relational Databases",
          details: "PostgreSQL, MySQL, MariaDB mastery. SQL joins, indexes, normalization, transactions, stored procedures & triggers. Database design principles"
        },
        { 
          step: "Step - 5", 
          topic: "NoSQL & Modern Storage", 
          category: "Non-Relational Databases",
          details: "MongoDB, Cassandra, DynamoDB. Key-value stores (Redis). When to choose NoSQL over SQL, document vs graph databases"
        },
        { 
          step: "Step - 6", 
          topic: "ORM & Database Tools", 
          category: "Database Integration",
          details: "Sequelize, Prisma, TypeORM (Node.js); Django ORM (Python); Hibernate (Java). Database migrations, connection pooling, query optimization"
        },
        { 
          step: "Step - 7", 
          topic: "Caching & Performance", 
          category: "Performance Optimization",
          details: "Redis/Memcached implementation, query optimization strategies, database indexing, CDN usage for static files, horizontal vs vertical scaling"
        },
      ],
    },
    {
      title: "Security",
      subtitle: "Authentication & Protection",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Authentication Systems", 
          category: "User Authentication",
          details: "Sessions vs JWT tokens, OAuth 2.0, OpenID Connect, multi-factor authentication (MFA), password hashing (bcrypt, Argon2)"
        },
        { 
          step: "Step - 9", 
          topic: "Security Best Practices", 
          category: "Application Security",
          details: "CSRF, XSS, SQL injection prevention, rate limiting & API throttling, HTTPS & SSL/TLS, input validation, secure headers"
        },
        { 
          step: "Step - 10", 
          topic: "API Security & Authorization", 
          category: "API Protection",
          details: "Role-based access control (RBAC), API key management, request signing, CORS configuration, security middleware implementation"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Architecture & Deployment",
      steps: [
        { 
          step: "Step - 11", 
          topic: "System Architecture", 
          category: "Design Patterns",
          details: "Monolith vs Microservices, MVC, Clean Architecture, Hexagonal Architecture, message queues (RabbitMQ, Kafka, SQS), event-driven architecture"
        },
        { 
          step: "Step - 12", 
          topic: "DevOps & Deployment", 
          category: "Production Systems",
          details: "Docker & Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins), cloud platforms (AWS EC2, Lambda, RDS), Infrastructure as Code (Terraform)"
        },
        { 
          step: "Step - 13", 
          topic: "Testing & Quality", 
          category: "Code Quality",
          details: "Unit testing (Jest, PyTest, JUnit), integration & end-to-end testing, test-driven development (TDD), code coverage, automated testing pipelines"
        },
        { 
          step: "Step - 14", 
          topic: "Monitoring & Observability", 
          category: "System Health",
          details: "Logging (Winston, Log4j, Serilog), monitoring (Prometheus, Grafana), error tracking (Sentry), APM tools, distributed tracing"
        },
        { 
          step: "Step - 15", 
          topic: "Modern Backend Technologies", 
          category: "2025 Technologies",
          details: "Serverless backends (AWS Lambda, Vercel Functions), GraphQL APIs (Apollo, Hasura), gRPC for microservices, WebAssembly, AI-assisted development"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "AWS Cloud Practitioner, Google Cloud Associate" },
    { level: "Intermediate", certs: "AWS Solutions Architect Associate, Azure Developer Associate" },
    { level: "Advanced", certs: "AWS Solutions Architect Professional, Kubernetes Administrator (CKA)" },
    { level: "Specialty", certs: "AWS DevOps Engineer Professional, Google Cloud Professional Developer" },
  ];

  const practiceResources = [
    { category: "Coding Practice", resources: "LeetCode, HackerRank, Codewars, GeeksforGeeks" },
    { category: "Project Ideas", resources: "GitHub, GitLab, Bitbucket, Personal Portfolio" },
    { category: "Learning Platforms", resources: "Coursera, Udemy, Pluralsight, FreeCodeCamp" },
    { category: "Communities", resources: "Stack Overflow, Reddit r/webdev, Dev.to, Backend Developers Discord" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-[#ffffff] via-white to-[#f3f3f3] min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
           
          </div>
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 15 Essential Steps • 🎯 4 Core Areas • 💼 Industry Ready</span>
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

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Backend Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Backend Practice Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Backend Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Languages</div>
              <div className="text-blue-100">JavaScript, TypeScript, Python, Java, Go, C#</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frameworks</div>
              <div className="text-blue-100">Express, NestJS, Django, FastAPI, Spring Boot</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-blue-100">PostgreSQL, MongoDB, Redis, MySQL, DynamoDB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-blue-100">Docker, Kubernetes, AWS, Jenkins, Terraform</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Backend Career Paths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🔧 Backend Developer</div>
              <div className="text-sm text-gray-600">Junior/Senior Backend Developer, API Developer, Server-side Engineer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🏗️ DevOps Engineer</div>
              <div className="text-sm text-gray-600">DevOps Engineer, Platform Engineer, Site Reliability Engineer (SRE)</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🎨 Full-Stack Developer</div>
              <div className="text-sm text-gray-600">Full-Stack Engineer, Technical Lead, Solution Architect</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Backend Portfolio Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">📱 API & Services</div>
              <div className="text-sm text-gray-600">REST API with authentication, Real-time chat backend with WebSockets, E-commerce backend with payments, Social media API</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-pink-600 mb-2">🏗️ System Architecture</div>
              <div className="text-sm text-gray-600">Microservices system with Docker, Event-driven architecture, Serverless backend functions, Distributed system with message queues</div>
            </div>
          </div>
        </section>

        {/* Popular Frameworks Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Popular Backend Frameworks 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🟢 Node.js Ecosystem</div>
              <div className="text-sm text-gray-600">Express.js, NestJS, Fastify, Koa.js, Hapi.js</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🐍 Python Frameworks</div>
              <div className="text-sm text-gray-600">Django, FastAPI, Flask, Tornado, Pyramid</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">☕ Java & Others</div>
              <div className="text-sm text-gray-600">Spring Boot, Micronaut, Quarkus, Helidon</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Backend development is about building robust, scalable, and secure server-side applications. Focus on fundamentals, practice consistently, and always think about performance and security!
          </p>
        </div>
      </div>
    </main>
  );
}