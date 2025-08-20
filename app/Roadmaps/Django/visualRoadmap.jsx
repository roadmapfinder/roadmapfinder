import React from 'react';

export default function DjangoRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Fundamentals", 
          category: "Python Mastery",
          details: "Python basics (syntax, loops, functions), data structures (list, tuple, set, dict), OOP concepts, exception handling, virtual environments (venv, pipenv, poetry), package management (pip, PyPI)"
        },
        { 
          step: "Step - 2", 
          topic: "Web & Backend Basics", 
          category: "Web Fundamentals",
          details: "How web works (HTTP/HTTPS, DNS, client-server), HTTP methods (GET, POST, PUT, DELETE), REST APIs vs GraphQL, JSON & XML, authentication basics (Sessions, Cookies, JWT, OAuth)"
        },
        { 
          step: "Step - 3", 
          topic: "Django Core", 
          category: "Django Framework",
          details: "Django project structure, MVT pattern, Models & ORM, Django Admin customization, Templates (Jinja), Forms & ModelForms, Class-Based & Function-Based Views, Middleware, Signals"
        },
      ],
    },
    {
      title: "Development",
      subtitle: "Backend Skills",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Databases & ORM Mastery", 
          category: "Data Management",
          details: "PostgreSQL/MySQL/SQLite, advanced Django ORM (select_related, prefetch_related), transactions & migrations, indexing & optimization, database normalization, Redis for caching"
        },
        { 
          step: "Step - 5", 
          topic: "Django REST Framework", 
          category: "API Development",
          details: "DRF basics (Serializers, ViewSets, Routers), JWT/OAuth2 authentication, permissions & throttling, API versioning, pagination & filtering, file uploads, OpenAPI/Swagger docs"
        },
        { 
          step: "Step - 6", 
          topic: "Authentication & Authorization", 
          category: "Security Implementation",
          details: "Django Auth System, custom User models, Role-Based Access Control (RBAC), social authentication (Google, GitHub), JWT authentication with DRF"
        },
        { 
          step: "Step - 7", 
          topic: "Asynchronous Django", 
          category: "Real-time Features",
          details: "Django Channels for WebSockets, Celery for background tasks, Redis/RabbitMQ message brokers, async views in Django 4+, real-time chat applications"
        },
      ],
    },
    {
      title: "Production",
      subtitle: "Professional Development",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Testing & Debugging", 
          category: "Quality Assurance",
          details: "Unit testing with unittest, Pytest for Django, DRF API tests, coverage reports, debugging tools (django-debug-toolbar), test-driven development"
        },
        { 
          step: "Step - 9", 
          topic: "Security Best Practices", 
          category: "Application Security",
          details: "CSRF & XSS protection, SQL injection prevention, HTTPS & SSL, Django security middleware, rate limiting, secure password hashing (PBKDF2, Argon2)"
        },
        { 
          step: "Step - 10", 
          topic: "Scaling & Performance", 
          category: "Optimization",
          details: "Query optimization, caching strategies (Redis, Memcached), database indexing, load balancing (Nginx, HAProxy), asynchronous processing, CDN integration"
        },
        { 
          step: "Step - 11", 
          topic: "DevOps & Deployment", 
          category: "Production Deployment",
          details: "Gunicorn/uWSGI servers, Nginx reverse proxy, Docker containerization, CI/CD pipelines, cloud platforms (AWS, GCP, Azure), PostgreSQL in production, monitoring (Sentry, ELK)"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Expert Level",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Advanced Topics", 
          category: "Specialized Skills",
          details: "GraphQL with Django (graphene-django), WebSockets, multi-tenant applications, microservices architecture, Domain-Driven Design (DDD), API rate limiting, advanced CI/CD"
        },
        { 
          step: "Step - 13", 
          topic: "Complementary Skills", 
          category: "Industry Tools",
          details: "Git & GitHub workflows, Docker & Docker Compose, Linux commands, API testing (Postman/Insomnia), design patterns in Django, system design basics (scaling, caching, sharding)"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "Python Institute PCAP, Django Basics Certificate" },
    { level: "Intermediate", certs: "AWS Developer Associate, Google Cloud Developer" },
    { level: "Advanced", certs: "AWS Solutions Architect, Kubernetes Administrator" },
    { level: "Specialized", certs: "Docker Certified Associate, PostgreSQL Professional" },
  ];

  const practiceResources = [
    { category: "Project Platforms", resources: "GitHub, GitLab, Bitbucket, SourceForge" },
    { category: "Learning Resources", resources: "Django Documentation, Real Python, Mozilla Developer Network" },
    { category: "Practice Sites", resources: "HackerRank, Codewars, LeetCode, Django Girls Tutorial" },
    { category: "Communities", resources: "Django Forum, Stack Overflow, Reddit r/django, Django Discord" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        
          <p className="text-lg sm:text-xl text-gray-600 mb-6">Industry-Ready Backend Development Path • 2025 Edition</p>
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🐍 13 Essential Steps • 🎯 4 Skill Areas • 💼 Career Ready</span>
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

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Industry Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Hands-On Practice Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Django Development Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Framework</div>
              <div className="text-green-100">Django, Django REST Framework, Python 3.9+, Jinja2, Celery</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-green-100">PostgreSQL, MySQL, SQLite, Redis, MongoDB, Elasticsearch</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps & Deploy</div>
              <div className="text-green-100">Docker, Nginx, Gunicorn, AWS, GCP, Azure, Heroku</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing & Tools</div>
              <div className="text-green-100">Pytest, Postman, Git, VS Code, PyCharm, Sentry</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Career Path Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🐍 Backend Developer</div>
              <div className="text-sm text-gray-600">Django Developer, Python Developer, Backend Engineer, API Developer</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🏗️ Full-Stack Developer</div>
              <div className="text-sm text-gray-600">Full-Stack Engineer, Web Developer, Software Engineer, Technical Lead</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">☁️ DevOps & Cloud</div>
              <div className="text-sm text-gray-600">DevOps Engineer, Cloud Architect, Platform Engineer, Site Reliability Engineer</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Portfolio Project Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">📝 Blog Application</div>
              <div className="text-sm text-gray-600">User authentication, CRUD operations, admin panel, comments system</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🛒 E-commerce API</div>
              <div className="text-sm text-gray-600">Product catalog, shopping cart, order management, payment integration</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">💬 Chat Application</div>
              <div className="text-sm text-gray-600">Real-time messaging, Django Channels, WebSocket connections, user presence</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">📊 Quiz Platform</div>
              <div className="text-sm text-gray-600">Question management, timer functionality, scoring system, leaderboards</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-pink-600 mb-2">📱 Social Media API</div>
              <div className="text-sm text-gray-600">User profiles, posts, likes, followers, news feed, notifications</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-indigo-600 mb-2">🏦 Banking System</div>
              <div className="text-sm text-gray-600">Account management, transactions, security features, reporting dashboard</div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">⏱️ Estimated Learning Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Months 1-2</div>
              <div className="text-gray-200">Python fundamentals, web basics, Django core concepts</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Months 3-4</div>
              <div className="text-gray-200">Database mastery, DRF, authentication, first major project</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Months 5-6</div>
              <div className="text-gray-200">Async Django, testing, security, performance optimization</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Months 7-8</div>
              <div className="text-gray-200">DevOps, deployment, advanced topics, portfolio completion</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Remember: Django is about building robust, scalable web applications. Practice consistently, contribute to open source, and always focus on writing clean, maintainable code!
          </p>
        </div>
      </div>
    </main>
  );
}