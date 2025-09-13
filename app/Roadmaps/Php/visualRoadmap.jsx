import React from 'react';

export default function PHPMasteryRoadmap() {
  const roadmap = [
    {
      title: "PHP Foundations",
      subtitle: "Core Language Mastery",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Development Environment Setup", 
          category: "Foundation (Mandatory)",
          details: "PHP installation (XAMPP, Laragon, Docker CLI), IDE setup (VS Code, PhpStorm), server configuration (Apache, Nginx)"
        },
        { 
          step: "Step - 2", 
          topic: "PHP Syntax & Fundamentals", 
          category: "Core Language",
          details: "PHP tags, variables, constants, data types (string, int, float, bool, arrays, objects), operators, control structures"
        },
        { 
          step: "Step - 3", 
          topic: "Functions & Form Handling", 
          category: "Web Development Basics",
          details: "Function parameters, return values, scope, $_GET & $_POST handling, basic sanitization and validation"
        },
      ],
    },
    {
      title: "Intermediate PHP",
      subtitle: "Advanced Language Features",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Arrays & String Manipulation", 
          category: "Data Structures",
          details: "Indexed/associative arrays, multidimensional arrays, array functions (map, filter, reduce), string functions (substr, explode, implode)"
        },
        { 
          step: "Step - 5", 
          topic: "Object-Oriented Programming", 
          category: "OOP Mastery",
          details: "Classes, objects, constructors/destructors, inheritance, abstract classes, interfaces, traits, namespaces, encapsulation, polymorphism"
        },
        { 
          step: "Step - 6", 
          topic: "Error Handling & File Operations", 
          category: "System Integration",
          details: "Try-catch-finally blocks, custom exceptions, logging, file handling, file uploads, sessions ($_SESSION), cookies"
        },
        { 
          step: "Step - 7", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "PDO (PHP Data Objects), CRUD operations, prepared statements, SQL injection prevention, MySQL/PostgreSQL integration"
        },
      ],
    },
    {
      title: "Advanced PHP",
      subtitle: "Modern PHP Features",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Modern PHP 8+ Features", 
          category: "Language Evolution",
          details: "Anonymous functions, closures, arrow functions, type declarations, null coalescing (??), spread operator, match expressions, attributes"
        },
        { 
          step: "Step - 9", 
          topic: "Advanced OOP & Design Patterns", 
          category: "Software Architecture",
          details: "Dependency injection, design patterns (Factory, Singleton, Observer, Strategy), interfaces, contracts, SOLID principles"
        },
        { 
          step: "Step - 10", 
          topic: "Composer & Package Management", 
          category: "Modern Development",
          details: "Composer installation, package management, PSR standards (PSR-1, PSR-4), autoloading, namespace management"
        },
        { 
          step: "Step - 11", 
          topic: "APIs & JSON Integration", 
          category: "Web Services",
          details: "REST API development, JSON encoding/decoding, cURL and Guzzle HTTP client, API consumption and creation"
        },
      ],
    },
    {
      title: "Framework Mastery",
      subtitle: "Industry-Standard Tools",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Laravel Framework", 
          category: "Full-Stack Framework",
          details: "MVC architecture, routing, controllers, Blade templating, Eloquent ORM, middleware, authentication, Sanctum/Passport"
        },
        { 
          step: "Step - 13", 
          topic: "Advanced Laravel Features", 
          category: "Enterprise Development",
          details: "Queues, jobs, events, broadcasting, Laravel testing suite, service containers, facades, packages"
        },
        { 
          step: "Step - 14", 
          topic: "Security & Authentication", 
          category: "Application Security",
          details: "Password hashing, CSRF/XSS/SQL injection protection, HTTPS, secure cookies, JWT authentication, OAuth implementation"
        },
        { 
          step: "Step - 15", 
          topic: "Database Optimization", 
          category: "Performance",
          details: "Advanced SQL joins, indexing, transactions, query optimization, ORM best practices (Eloquent, Doctrine)"
        },
      ],
    },
    {
      title: "Production & Scaling",
      subtitle: "Industry-Ready Skills",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Testing & Quality Assurance", 
          category: "Code Quality",
          details: "PHPUnit/PestPHP testing, unit/integration tests, TDD practices, CI/CD pipelines (GitHub Actions, GitLab CI/CD)"
        },
        { 
          step: "Step - 17", 
          topic: "Deployment & DevOps", 
          category: "Production Deployment",
          details: "VPS/shared hosting deployment, Nginx/Apache/PHP-FPM setup, Docker containerization, cloud deployments"
        },
        { 
          step: "Step - 18", 
          topic: "Performance & Scaling", 
          category: "High-Performance Systems",
          details: "Caching (Redis, Memcached), message queues (RabbitMQ, Kafka), load balancers, horizontal scaling"
        },
        { 
          step: "Step - 19", 
          topic: "Monitoring & Maintenance", 
          category: "Production Operations",
          details: "Application monitoring, logging (ELK Stack, Sentry), performance profiling, error tracking, maintenance strategies"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "PHP Foundations", project: "Personal Blog with Admin Panel" },
    { level: "Intermediate PHP", project: "Contact Management System with Database" },
    { level: "Advanced PHP", project: "REST API with JWT Authentication" },
    { level: "Framework Mastery", project: "E-commerce Platform with Laravel" },
    { level: "Production & Scaling", project: "SaaS Application with Subscriptions" },
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
              <span className="text-sm font-medium text-gray-700">⚡ 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready</span>
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
            🏗️ PHP Development Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential PHP Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential PHP Technologies & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">PHP Frameworks</div>
              <div className="text-blue-100">Laravel, Symfony, CodeIgniter, CakePHP, Phalcon</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development Tools</div>
              <div className="text-blue-100">Composer, PHPUnit, Xdebug, PHP_CodeSniffer, PhpStorm</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-blue-100">MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Web Servers</div>
              <div className="text-blue-100">Apache, Nginx, PHP-FPM, Docker, XAMPP, Laragon</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">API Development</div>
              <div className="text-blue-100">REST, GraphQL, Guzzle, JSON APIs, OpenAPI/Swagger</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Template Engines</div>
              <div className="text-blue-100">Blade, Twig, Smarty, Plates, Mustache</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud & DevOps</div>
              <div className="text-blue-100">AWS, Digital Ocean, Heroku, Docker, Jenkins, GitLab CI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Integration</div>
              <div className="text-blue-100">HTML5, CSS3, JavaScript, Vue.js, React, Alpine.js</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level PHP Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build full-featured e-commerce with payment gateways, inventory management, and admin dashboard.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Laravel • MySQL • Stripe • Vue.js</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 SaaS Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Create multi-tenant SaaS application with subscription billing and real-time analytics.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Laravel • PostgreSQL • Redis • Chart.js</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔐 Enterprise API Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable REST API with OAuth, rate limiting, documentation, and monitoring.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Symfony • JWT • OAuth • OpenAPI</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Real-time Chat Application</h3>
              <p className="text-sm text-gray-600 mb-3">Develop real-time messaging system with WebSockets, file sharing, and user presence.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Laravel • WebSockets • Pusher • React</div>
            </div>
          </div>
        </section>

        {/* Modern PHP Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern PHP Development Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Optimization</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• OPCache optimization</li>
                <li>• Database query optimization</li>
                <li>• Caching strategies (Redis, Memcached)</li>
                <li>• Asset optimization and CDN</li>
                <li>• PHP-FPM configuration tuning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Security & Best Practices</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Input validation and sanitization</li>
                <li>• SQL injection prevention</li>
                <li>• CSRF and XSS protection</li>
                <li>• Secure password hashing</li>
                <li>• HTTPS and security headers</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg p-4 shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Development</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PHP 8+ features adoption</li>
                <li>• Type declarations and strict mode</li>
                <li>• Dependency injection patterns</li>
                <li>• API-first development</li>
                <li>• Test-driven development (TDD)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📚 Essential PHP Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📖 Must-Read Books</div>
              <div className="text-gray-700">Modern PHP (Josh Lockhart), PHP Objects Patterns Practice, Laravel Up & Running, Clean Code PHP</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎥 Video Resources</div>
              <div className="text-gray-700">Laracasts, PHP The Right Way, Codecourse, Traversy Media PHP playlist, Jeffrey Way tutorials</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">💻 Hands-on Practice</div>
              <div className="text-gray-700">PHPExercism, HackerRank PHP challenges, Laravel bootcamp, Build real projects, Contribute to open source</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 PHP Developer Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🌐 Full-Stack Developer</div>
              <div className="text-gray-700">PHP backend + frontend (Vue/React), database design, API development, DevOps basics</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Backend API Engineer</div>
              <div className="text-gray-700">REST/GraphQL APIs, microservices, database optimization, system architecture</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏢 Enterprise PHP Developer</div>
              <div className="text-gray-700">Large-scale applications, Symfony/Laravel expertise, enterprise patterns, team leadership</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">☁️ DevOps/Cloud Engineer</div>
              <div className="text-gray-700">PHP application deployment, Docker, CI/CD, cloud platforms, monitoring</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Master PHP from basics to enterprise! Build real applications, learn modern practices, and become industry-ready.
          </p>
        </div>
      </div>
    </main>
  );
}