import React from 'react';

export default function SoftwareEngineeringRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Core Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Computer Fundamentals", 
          category: "System Basics",
          details: "CPU, Memory, I/O, OS basics, Number systems (binary, hex), Compilation vs Interpretation"
        },
        { 
          step: "Step - 2", 
          topic: "Mathematics for Engineers", 
          category: "Mathematical Foundation",
          details: "Discrete Mathematics, Sets, Logic, Graph Theory, Probability & Statistics, Linear Algebra"
        },
        { 
          step: "Step - 3", 
          topic: "Programming Languages", 
          category: "Core Languages",
          details: "C/C++ (Memory management), Java/C# (OOP, JVM), Python (Scripting), JavaScript (ES6+, Async)"
        },
        { 
          step: "Step - 4", 
          topic: "Data Structures & Algorithms", 
          category: "DSA Mastery",
          details: "Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Dynamic Programming, Time/Space Complexity"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Core CS & Development",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Object-Oriented Programming", 
          category: "Design Principles",
          details: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID Principles, Design Patterns"
        },
        { 
          step: "Step - 6", 
          topic: "Operating Systems & Networks", 
          category: "System Knowledge",
          details: "Processes, Threads, Memory Management, TCP/IP, HTTP/HTTPS, DNS, REST APIs"
        },
        { 
          step: "Step - 7", 
          topic: "Database Management", 
          category: "Data Persistence",
          details: "SQL (Joins, Indexing, Transactions), NoSQL (MongoDB, Redis), ACID, Normalization"
        },
        { 
          step: "Step - 8", 
          topic: "Version Control & Collaboration", 
          category: "Team Development",
          details: "Git/GitHub, Branching, Merging, Code Reviews, Agile/Scrum, CI/CD Pipelines"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Full-Stack Development",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Backend Development", 
          category: "Server-Side Engineering",
          details: "Node.js/Express, Spring Boot, Django/Flask, REST/GraphQL APIs, Authentication (JWT, OAuth2)"
        },
        { 
          step: "Step - 10", 
          topic: "Frontend Development", 
          category: "Client-Side Engineering",
          details: "React/Next.js, Angular/Vue.js, HTML/CSS/JS, State Management, Responsive Design"
        },
        { 
          step: "Step - 11", 
          topic: "System Design Principles", 
          category: "Architecture Patterns",
          details: "Scalability, Load Balancing, Caching, Microservices, Message Queues, Design Patterns"
        },
        { 
          step: "Step - 12", 
          topic: "Testing & Quality Assurance", 
          category: "Quality Engineering",
          details: "Unit Testing (JUnit, Jest), Integration Testing, E2E (Cypress), TDD, Code Quality"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Enterprise & Leadership",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Cloud & DevOps", 
          category: "Infrastructure & Deployment",
          details: "AWS/Azure/GCP, Docker, Kubernetes, Terraform, Infrastructure as Code, Monitoring"
        },
        { 
          step: "Step - 14", 
          topic: "Security & Best Practices", 
          category: "Secure Development",
          details: "OWASP Top 10, XSS/CSRF Prevention, Secure Coding, Authentication, Rate Limiting"
        },
        { 
          step: "Step - 15", 
          topic: "Advanced System Design", 
          category: "Distributed Systems",
          details: "CAP Theorem, Eventual Consistency, Sharding, Partitioning, High Availability, Fault Tolerance"
        },
        { 
          step: "Step - 16", 
          topic: "Professional Development", 
          category: "Leadership & Communication",
          details: "Technical Communication, Documentation, Open Source, Project Management, Team Leadership"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Console-based Task Manager" },
    { level: "Intermediate", project: "Full-Stack Web Application" },
    { level: "Advanced", project: "Distributed E-commerce Platform" },
    { level: "Mastery", project: "Cloud-Native Microservices" },
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
            🚀 Software Engineering Practice Projects
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

        {/* Technology Stack */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Software Engineering Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Programming Languages</div>
              <div className="text-purple-100">C/C++, Java, Python, JavaScript, TypeScript, Go</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Frontend Frameworks</div>
              <div className="text-purple-100">React, Angular, Vue.js, Next.js, Svelte</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Frameworks</div>
              <div className="text-purple-100">Node.js, Spring Boot, Django, Flask, Express</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Databases</div>
              <div className="text-purple-100">PostgreSQL, MySQL, MongoDB, Redis, Cassandra</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-purple-100">AWS, Azure, GCP, Vercel, Netlify</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps Tools</div>
              <div className="text-purple-100">Docker, Kubernetes, Jenkins, GitHub Actions</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing Tools</div>
              <div className="text-purple-100">JUnit, Jest, Cypress, Selenium, Postman</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Version Control</div>
              <div className="text-purple-100">Git, GitHub, GitLab, Bitbucket, SVN</div>
            </div>
          </div>
        </section>

        {/* Industry-Level Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Software Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Social Media Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build a scalable social media platform with real-time messaging, content feeds, and user interactions.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">React • Node.js • MongoDB • WebSocket</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 E-commerce Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Create a full-featured e-commerce platform with payments, inventory, and order management.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Microservices • Spring Boot • PostgreSQL</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Data Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Design a real-time analytics dashboard with data visualization and business intelligence features.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Python • Django • D3.js • Apache Kafka</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎮 Multiplayer Game Backend</h3>
              <p className="text-sm text-gray-600 mb-3">Build a real-time multiplayer game backend with matchmaking, leaderboards, and chat systems.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Go • WebSocket • Redis • Docker</div>
            </div>
          </div>
        </section>

        {/* Career Roles */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 Career Roles in Software Engineering</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Software Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Full Stack Developer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Backend Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Frontend Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">DevOps Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Solutions Architect</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Tech Lead</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Engineering Manager</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Principal Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Staff Engineer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">CTO</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="font-semibold">Product Engineer</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: Software Engineering is about solving problems efficiently. Master the fundamentals, build real projects, and never stop learning!
          </p>
        </div>
      </div>
    </main>
  );
}