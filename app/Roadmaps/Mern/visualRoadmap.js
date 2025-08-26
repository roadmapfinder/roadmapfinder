import React from 'react';

export default function MERNRoadmap() {
  const roadmap = [
    {
      title: "Prerequisites",
      subtitle: "Programming Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "JavaScript Mastery", 
          category: "Core Programming",
          details: "Variables, data types, operators, loops, conditions, functions, scope, hoisting, arrays & objects"
        },
        { 
          step: "Step - 2", 
          topic: "DOM & Events", 
          category: "Web Fundamentals",
          details: "DOM manipulation, event handling, browser APIs, local storage, form validation"
        },
        { 
          step: "Step - 3", 
          topic: "ES6+ Features", 
          category: "Modern JavaScript",
          details: "Arrow functions, spread/rest, destructuring, modules, promises, async/await, template literals"
        },
      ],
    },
    {
      title: "Frontend",
      subtitle: "React.js Development",
      steps: [
        { 
          step: "Step - 4", 
          topic: "React Fundamentals", 
          category: "Component Architecture",
          details: "JSX, components (functional & class), props & state, event handling, conditional rendering"
        },
        { 
          step: "Step - 5", 
          topic: "Advanced React", 
          category: "State & Navigation",
          details: "React Router, Context API, hooks (useState, useEffect, custom hooks), error boundaries"
        },
        { 
          step: "Step - 6", 
          topic: "Styling & UI", 
          category: "Frontend Design",
          details: "CSS3, Flexbox, Grid, CSS Modules, Styled Components, TailwindCSS, Material UI"
        },
        { 
          step: "Step - 7", 
          topic: "Testing & Performance", 
          category: "Quality Assurance",
          details: "Jest, React Testing Library, Cypress E2E, code splitting, memo, lazy loading"
        },
      ],
    },
    {
      title: "Backend",
      subtitle: "Node.js & Express.js",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Node.js Fundamentals", 
          category: "Runtime Mastery",
          details: "Node.js runtime, NPM, file system, event loop, streams, modules, package management"
        },
        { 
          step: "Step - 9", 
          topic: "Express.js Framework", 
          category: "Web Framework",
          details: "REST API development, middleware, routing, controllers, error handling, logging"
        },
        { 
          step: "Step - 10", 
          topic: "Authentication & Security", 
          category: "Security Implementation",
          details: "JWT tokens, OAuth, bcrypt hashing, rate limiting, helmet.js, CORS, environment variables"
        },
        { 
          step: "Step - 11", 
          topic: "File Handling & APIs", 
          category: "Advanced Features",
          details: "Multer file uploads, cloud storage (S3, Cloudinary), API documentation, validation"
        },
      ],
    },
    {
      title: "Database",
      subtitle: "MongoDB Integration",
      steps: [
        { 
          step: "Step - 12", 
          topic: "MongoDB Basics", 
          category: "NoSQL Database",
          details: "Collections, documents, CRUD operations, indexing, query optimization, data modeling"
        },
        { 
          step: "Step - 13", 
          topic: "Mongoose ODM", 
          category: "Data Layer",
          details: "Schema design, models, middleware, validation, population, aggregation pipelines"
        },
        { 
          step: "Step - 14", 
          topic: "Advanced Database", 
          category: "Scalability",
          details: "MongoDB Atlas, transactions, relationships (embedding vs referencing), performance tuning"
        },
      ],
    },
    {
      title: "Integration",
      subtitle: "Fullstack Development",
      steps: [
        { 
          step: "Step - 15", 
          topic: "API Integration", 
          category: "Frontend-Backend Connection",
          details: "Axios/Fetch, CORS handling, proxy setup, error handling, loading states"
        },
        { 
          step: "Step - 16", 
          topic: "Authentication Flow", 
          category: "User Management",
          details: "JWT implementation, protected routes, role-based authorization, refresh tokens"
        },
        { 
          step: "Step - 17", 
          topic: "Real-time Features", 
          category: "Live Applications",
          details: "Socket.io integration, WebSockets, real-time chat, notifications, live updates"
        },
        { 
          step: "Step - 18", 
          topic: "Payment Integration", 
          category: "E-commerce Features",
          details: "Stripe/Razorpay integration, payment processing, webhooks, order management"
        },
      ],
    },
    {
      title: "Production",
      subtitle: "Deployment & Scaling",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Deployment Strategy", 
          category: "DevOps",
          details: "Netlify/Vercel (frontend), Render/Heroku/AWS (backend), MongoDB Atlas, environment configs"
        },
        { 
          step: "Step - 20", 
          topic: "Performance & Caching", 
          category: "Optimization",
          details: "Redis caching, CDN setup, image optimization, lazy loading, code splitting"
        },
        { 
          step: "Step - 21", 
          topic: "Monitoring & CI/CD", 
          category: "Operations",
          details: "GitHub Actions, error tracking, logging, health checks, automated testing pipelines"
        },
        { 
          step: "Step - 22", 
          topic: "Advanced Patterns", 
          category: "System Design",
          details: "MVC pattern, clean code, SOLID principles, microservices, GraphQL, system architecture"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Frontend", project: "To-do App with React & Local Storage" },
    { level: "Backend", project: "Blog API with Express & MongoDB" },
    { level: "Integration", project: "E-commerce Store with Payment Gateway" },
    { level: "Production", project: "Social Media Platform with Real-time Chat" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-white-50 via-white to-white-60 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 22 Essential Steps • 🎯 6 Skill Levels • 💼 Industry Ready</span>
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
                                <stop offset="50%" stopColor="#10B981" />
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
            🏗️ MERN Practice Projects
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

        {/* Essential MERN Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential MERN Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Tools</div>
              <div className="text-blue-100">React Router, Redux, Context API, Hooks</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Styling Libraries</div>
              <div className="text-blue-100">TailwindCSS, Material UI, Styled Components</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Framework</div>
              <div className="text-blue-100">Express.js, Middleware, REST APIs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database & ODM</div>
              <div className="text-blue-100">MongoDB, Mongoose, Atlas, Aggregation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Authentication</div>
              <div className="text-blue-100">JWT, bcrypt, OAuth, Passport.js</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Real-time</div>
              <div className="text-blue-100">Socket.io, WebSockets, Live Chat</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Jest, React Testing Library, Cypress</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Deployment</div>
              <div className="text-blue-100">Vercel, Netlify, Heroku, AWS, Docker</div>
            </div>
          </div>
        </section>

        {/* Capstone Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Capstone Projects (Industry Level)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Store</h3>
              <p className="text-sm text-gray-600 mb-3">Full-featured online store with product catalog, cart, user accounts, and Stripe/Razorpay payment integration.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">React • Express • MongoDB • Stripe</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Social Media Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Complete social network with posts, likes, comments, real-time chat, and user profiles.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Socket.io • JWT • File Upload • Real-time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Project Management Tool</h3>
              <p className="text-sm text-gray-600 mb-3">Task management system with drag & drop, team collaboration, role-based access, and analytics.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Drag & Drop • Teams • RBAC • Analytics</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📝 Blog Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Modern blogging platform with rich text editor, comments, SEO optimization, and content management.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Rich Editor • SEO • CMS • Comments</div>
            </div>
          </div>
        </section>

        {/* MERN Stack Architecture */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏗️ MERN Stack Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 text-center">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-green-800 mb-2">React.js</h3>
              <p className="text-sm text-gray-700">Frontend UI library for building interactive user interfaces with component-based architecture.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-green-800 mb-2">Express.js</h3>
              <p className="text-sm text-gray-700">Backend web framework for Node.js to build REST APIs and handle server-side logic.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 text-center">
              <div className="text-4xl mb-3">🟢</div>
              <h3 className="font-semibold text-green-800 mb-2">Node.js</h3>
              <p className="text-sm text-gray-700">JavaScript runtime environment for server-side development and package management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 text-center">
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="font-semibold text-green-800 mb-2">MongoDB</h3>
              <p className="text-sm text-gray-700">NoSQL database for storing application data in flexible, JSON-like documents.</p>
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 MERN Learning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master JavaScript First</div>
              <div className="text-gray-700">Strong JavaScript fundamentals are crucial. Focus on ES6+, async programming, and DOM manipulation before React.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔄 Build Projects Progressively</div>
              <div className="text-gray-700">Start with simple to-do apps, then gradually add complexity. Each project should introduce new concepts.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Learn by Doing</div>
              <div className="text-gray-700">Code along with tutorials initially, then build similar projects from scratch to reinforce learning.</div>
            </div>
          </div>
        </section>

        {/* Soft Skills & Extras */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎪 Soft Skills & Professional Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-3">💻 Problem Solving</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Data Structures & Algorithms</li>
                <li>• LeetCode practice (Easy to Medium)</li>
                <li>• Debugging techniques</li>
                <li>• Code optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-3">🔧 Development Tools</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Git & GitHub workflow</li>
                <li>• VS Code extensions</li>
                <li>• Postman/Insomnia for APIs</li>
                <li>• Browser DevTools</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-3">📋 Project Management</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Agile & Scrum methodologies</li>
                <li>• Jira, Trello for task management</li>
                <li>• API documentation (Swagger)</li>
                <li>• Portfolio & resume building</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Remember: MERN stack is about building fullstack applications with JavaScript. Focus on connecting all pieces together!
          </p>
        </div>
      </div>
    </main>
  );
}