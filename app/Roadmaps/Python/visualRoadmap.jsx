import React from 'react';

export default function PythonRoadmap2025() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Python Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Python Syntax & Basics", 
          category: "Core Fundamentals",
          details: "Variables, data types, operators, input/output, conditional statements (if-else), loops (for, while)"
        },
        { 
          step: "Step - 2", 
          topic: "Data Structures", 
          category: "Built-in Types",
          details: "Strings, Lists, Tuples, Sets, Dictionaries, comprehensions, slicing, advanced operations"
        },
        { 
          step: "Step - 3", 
          topic: "Functions & Control", 
          category: "Program Flow",
          details: "Function definition, arguments, return values, recursion, lambda functions, map, filter, reduce"
        },
        { 
          step: "Step - 4", 
          topic: "Error Handling & Files", 
          category: "Robust Programming",
          details: "Try-except blocks, finally, custom exceptions, file I/O, context managers, working with paths"
        },
        { 
          step: "Step - 5", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Build a file organizer script with error handling, file operations, and user input validation"
        },
      ],
    },
    {
      title: "OOP & Advanced",
      subtitle: "Object-Oriented Python",
      steps: [
        { 
          step: "Step - 6", 
          topic: "Object-Oriented Programming", 
          category: "Classes & Objects",
          details: "Classes, objects, inheritance, polymorphism, encapsulation, magic/dunder methods, method types"
        },
        { 
          step: "Step - 7", 
          topic: "Modules & Packages", 
          category: "Code Organization",
          details: "Import systems, creating modules/packages, pip, virtual environments (venv, pipenv, poetry)"
        },
        { 
          step: "Step - 8", 
          topic: "Advanced Features", 
          category: "Python Mastery",
          details: "Iterators, generators, decorators, context managers, type hinting, dataclasses, metaclasses"
        },
        { 
          step: "Step - 9", 
          topic: "Concurrency & Testing", 
          category: "Production Ready",
          details: "asyncio, concurrent.futures, multiprocessing, unittest, pytest, logging, debugging techniques"
        },
        { 
          step: "Step - 10", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Create a library management system with OOP, async operations, comprehensive testing, and logging"
        },
      ],
    },
    {
      title: "Web Development",
      subtitle: "Backend & APIs",
      steps: [
        { 
          step: "Step - 11", 
          topic: "FastAPI / Flask", 
          category: "Web Frameworks",
          details: "REST API design, routing, middleware, request/response handling, Pydantic validation, async endpoints"
        },
        { 
          step: "Step - 12", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis), SQLAlchemy ORM, database migrations, relationships"
        },
        { 
          step: "Step - 13", 
          topic: "Authentication & Security", 
          category: "User Management",
          details: "JWT tokens, OAuth2, password hashing (bcrypt), input validation, CORS, rate limiting"
        },
        { 
          step: "Step - 14", 
          topic: "Django Framework", 
          category: "Full-Stack Development",
          details: "Django models, views, templates, admin panel, Django REST Framework, authentication, middleware"
        },
        { 
          step: "Step - 15", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Build a blog API with FastAPI, JWT auth, PostgreSQL, async operations, and comprehensive testing"
        },
      ],
    },
    {
      title: "Data & Automation",
      subtitle: "Python for Data",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Data Analysis", 
          category: "Data Science",
          details: "NumPy arrays, Pandas DataFrames, data cleaning, visualization with Matplotlib/Seaborn, statistical analysis"
        },
        { 
          step: "Step - 17", 
          topic: "Web Scraping & Automation", 
          category: "Data Collection",
          details: "BeautifulSoup, Scrapy, Selenium, Playwright, API automation with requests/httpx, file automation"
        },
        { 
          step: "Step - 18", 
          topic: "Machine Learning Basics", 
          category: "AI/ML Introduction",
          details: "Scikit-learn, supervised/unsupervised learning, model evaluation, feature engineering, preprocessing"
        },
        { 
          step: "Step - 19", 
          topic: "Advanced ML & AI", 
          category: "Deep Learning",
          details: "TensorFlow/PyTorch, neural networks, NLP, computer vision, model deployment, MLOps basics"
        },
        { 
          step: "Step - 20", 
          topic: "Mini Project", 
          category: "Practice",
          details: "Create a data pipeline with web scraping, data analysis, ML prediction, and automated reporting"
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      subtitle: "Production Deployment",
      steps: [
        { 
          step: "Step - 21", 
          topic: "Docker & Containerization", 
          category: "Container Technology",
          details: "Dockerfile creation, multi-stage builds, docker-compose, container orchestration, image optimization"
        },
        { 
          step: "Step - 22", 
          topic: "CI/CD & Version Control", 
          category: "Automation Pipeline",
          details: "Git workflows, GitHub Actions, GitLab CI, Jenkins, automated testing, code quality checks"
        },
        { 
          step: "Step - 23", 
          topic: "Cloud Deployment", 
          category: "Scalable Infrastructure",
          details: "AWS (Lambda, EC2, S3, RDS), Azure, GCP, serverless deployment, monitoring, logging"
        },
        { 
          step: "Step - 24", 
          topic: "Production Optimization", 
          category: "Performance & Scale",
          details: "Gunicorn/Uvicorn, Nginx, load balancing, caching (Redis), monitoring (Prometheus), security best practices"
        },
      ],
    },
    {
      title: "System Design",
      subtitle: "Enterprise Scale",
      steps: [
        { 
          step: "Step - 25", 
          topic: "Microservices Architecture", 
          category: "Distributed Systems",
          details: "Service decomposition, API gateways, inter-service communication, service discovery, fault tolerance"
        },
        { 
          step: "Step - 26", 
          topic: "Message Queues & Caching", 
          category: "Async Communication",
          details: "RabbitMQ, Apache Kafka, Celery task queues, Redis caching, pub-sub patterns, event-driven architecture"
        },
        { 
          step: "Step - 27", 
          topic: "Advanced Patterns", 
          category: "Software Architecture",
          details: "Design patterns, SOLID principles, clean architecture, dependency injection, testing strategies"
        },
        { 
          step: "Step - 28", 
          topic: "Performance & Security", 
          category: "Production Ready",
          details: "Code profiling, optimization techniques, security auditing, penetration testing, compliance standards"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "File Organizer Script" },
    { level: "OOP & Advanced", project: "Library Management System" },
    { level: "Web Development", project: "Blog API with Authentication" },
    { level: "Data & Automation", project: "Data Analysis Pipeline" },
    { level: "DevOps & Cloud", project: "Containerized Web App" },
    { level: "System Design", project: "Microservices E-commerce" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600'
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
              <span className="text-sm font-medium text-gray-700">🐍 28 Essential Steps • 🎯 6 Skill Levels • 🚀 Industry Ready</span>
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
            🏗️ Python Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
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
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Python Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Core Language</div>
              <div className="text-green-100">Python 3.11+, Type Hints, Async/Await</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Web Frameworks</div>
              <div className="text-green-100">FastAPI, Django, Flask, Pydantic</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Science</div>
              <div className="text-green-100">NumPy, Pandas, Matplotlib, Scikit-learn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-green-100">PostgreSQL, MongoDB, SQLAlchemy, Redis</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-green-100">pytest, unittest, coverage, mock</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-green-100">Docker, GitHub Actions, AWS, Gunicorn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Automation</div>
              <div className="text-green-100">Selenium, BeautifulSoup, Scrapy, Celery</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">AI/ML</div>
              <div className="text-green-100">TensorFlow, PyTorch, OpenAI, Transformers</div>
            </div>
          </div>
        </section>

        {/* Final Portfolio Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Portfolio-Ready Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Microservices</h3>
              <p className="text-sm text-gray-600 mb-3">Microservices architecture with FastAPI, PostgreSQL, Redis, message queues, and comprehensive testing.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">FastAPI • Docker • Microservices • Async</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Data Analytics Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Real-time data pipeline with web scraping, machine learning predictions, and interactive dashboards.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Pandas • ML • Scraping • Visualization</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🤖 AI-Powered Chatbot</h3>
              <p className="text-sm text-gray-600 mb-3">NLP chatbot with TensorFlow, real-time responses, context awareness, and multi-language support.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">TensorFlow • NLP • WebSocket • AI</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔐 Security Monitoring System</h3>
              <p className="text-sm text-gray-600 mb-3">Cybersecurity tool with network monitoring, threat detection, automated alerts, and vulnerability scanning.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Security • Monitoring • Automation • Alerts</div>
            </div>
          </div>
        </section>

        {/* Learning Path Tips */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Python Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🐍 Pythonic Code</div>
              <div className="text-gray-700">Write clean, readable code following PEP 8. Use list comprehensions, context managers, and Python idioms.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Choose Your Path</div>
              <div className="text-gray-700">Specialize in web development, data science, automation, or DevOps based on your career goals.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🚀 Build & Deploy</div>
              <div className="text-gray-700">Focus on complete projects from development to production deployment with proper testing and documentation.</div>
            </div>
          </div>
        </section>

        {/* Specialization Tracks */}
        <section className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Choose Your Specialization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">🌐 Web Development</div>
              <div className="text-gray-700">Focus on Django/FastAPI, REST APIs, databases, authentication, and scalable web applications.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">📊 Data Science & AI</div>
              <div className="text-gray-700">Master NumPy, Pandas, ML libraries, data visualization, and deep learning frameworks.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">🔧 DevOps & Automation</div>
              <div className="text-gray-700">Specialize in CI/CD, Docker, cloud deployment, infrastructure automation, and monitoring.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">🛡️ Cybersecurity</div>
              <div className="text-gray-700">Focus on ethical hacking, security automation, penetration testing, and vulnerability assessment.</div>
            </div>
          </div>
        </section>

        {/* Learning Timeline */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📅 Suggested Learning Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Months 1-2: Foundation</div>
              <div className="text-gray-700">Python syntax, data structures, OOP, error handling. Build automation scripts and simple applications.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Months 3-4: Advanced Python</div>
              <div className="text-gray-700">Advanced features, testing, packages, concurrency. Create libraries and complex applications.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Months 5-7: Web/Data Track</div>
              <div className="text-gray-700">Choose specialization: web development with FastAPI/Django or data science with NumPy/Pandas.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Months 8-10: Production Skills</div>
              <div className="text-gray-700">Docker, CI/CD, cloud deployment, monitoring. Build scalable applications with best practices.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Months 11-12: System Design</div>
              <div className="text-gray-700">Microservices, message queues, advanced patterns. Create enterprise-level applications.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <div className="font-semibold text-green-800 mb-2">🗓️ Month 13+: Job Ready</div>
              <div className="text-gray-700">Portfolio optimization, open source contributions, interview preparation, and job applications.</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🐍 Master Python 3.11+, modern frameworks, and production practices. Build applications that solve real problems!
          </p>
        </div>
      </div>
    </main>
  );
}