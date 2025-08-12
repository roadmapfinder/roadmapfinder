export default function Home() {
  const roadmap = [
    {
      title: "Foundation",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Internet Basics & HTTP", 
          category: "Core Concepts",
          details: "How the web works, DNS, IP, Servers, Clients"
        },
        { 
          step: "Step - 2", 
          topic: "HTML Fundamentals", 
          category: "Structure",
          details: "Tags, Semantic HTML, Forms, Tables"
        },
        { 
          step: "Step - 3", 
          topic: "CSS Mastery", 
          category: "Styling",
          details: "Selectors, Flexbox, Grid, Animations"
        },
      ],
    },
    {
      title: "Beginner",
      steps: [
        { 
          step: "Step - 4", 
          topic: "JavaScript Basics", 
          category: "Interactivity",
          details: "DOM, Events, ES6+, Fetch API"
        },
        { 
          step: "Step - 5", 
          topic: "CSS Frameworks", 
          category: "Efficiency",
          details: "Bootstrap, Tailwind CSS"
        },
        { 
          step: "Step - 6", 
          topic: "Version Control", 
          category: "Collaboration",
          details: "Git, GitHub, GitHub Pages"
        },
      ],
    },
    {
      title: "Intermediate",
      steps: [
        { 
          step: "Step - 7", 
          topic: "React.js", 
          category: "Frontend Framework",
          details: "Components, Hooks, State Management"
        },
        { 
          step: "Step - 8", 
          topic: "Build Tools", 
          category: "Development",
          details: "NPM, Vite, ESLint, Prettier"
        },
        { 
          step: "Step - 9", 
          topic: "Backend - Node.js", 
          category: "Server-Side",
          details: "Express.js, REST APIs, Middleware"
        },
      ],
    },
    {
      title: "Advanced",
      steps: [
        { 
          step: "Step - 10", 
          topic: "Database Integration", 
          category: "Data Storage",
          details: "MongoDB, MySQL, PostgreSQL, Prisma"
        },
        { 
          step: "Step - 11", 
          topic: "Authentication & Security", 
          category: "Security",
          details: "JWT, OAuth, bcrypt, HTTPS"
        },
        { 
          step: "Step - 12", 
          topic: "Full-Stack Projects", 
          category: "Integration",
          details: "Connect Frontend & Backend"
        },
      ],
    },
    {
      title: "Professional",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Deployment", 
          category: "Production",
          details: "Vercel, Netlify, Render, Railway"
        },
        { 
          step: "Step - 14", 
          topic: "Advanced Frameworks", 
          category: "Specialization",
          details: "Next.js, TypeScript, Testing"
        },
        { 
          step: "Step - 15", 
          topic: "DevOps & Scaling", 
          category: "Enterprise",
          details: "Docker, CI/CD, Cloud Platforms"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Personal Portfolio Website" },
    { level: "Beginner", project: "Interactive To-Do App" },
    { level: "Intermediate", project: "Weather Dashboard with API" },
    { level: "Advanced", project: "E-commerce Platform" },
    { level: "Professional", project: "Full-Stack Social Media App" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-red-500 to-red-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Complete Web Developer Roadmap 2025
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive guide from absolute beginner to professional web developer. 
            Follow this structured path to master modern web development.
          </p>
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
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[130px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      {section.title}
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
                    {section.title}
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
            💡 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Documentation</div>
              <div className="text-blue-100">MDN Web Docs, React Docs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-blue-100">FreeCodeCamp, CS50</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Practice</div>
              <div className="text-blue-100">Codepen, GitHub</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Deployment</div>
              <div className="text-blue-100">Vercel, Netlify, Render</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Remember: Consistent practice and building projects is key to mastering web development!
          </p>
        </div>
      </div>
    </main>
  );
}