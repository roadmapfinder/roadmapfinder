import React from 'react';

export default function KotlinRoadmap() {
  const roadmap = [
    {
      title: "Foundations",
      subtitle: "Language Basics & Setup",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Kotlin Setup & Environment", 
          category: "Development Environment",
          details: "IntelliJ IDEA/Android Studio setup, Kotlin compiler, REPL, project structure, basic I/O operations"
        },
        { 
          step: "Step - 2", 
          topic: "Core Language Fundamentals", 
          category: "Basic Syntax",
          details: "Variables (val/var), data types, operators, conditionals (if/when), loops (for/while), functions, parameters"
        },
        { 
          step: "Step - 3", 
          topic: "Object-Oriented Programming", 
          category: "OOP Concepts",
          details: "Classes, objects, constructors, properties, inheritance, polymorphism, visibility modifiers, abstract classes"
        },
      ],
    },
    {
      title: "Intermediate Kotlin",
      subtitle: "Modern Language Features",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Advanced Kotlin Features", 
          category: "Language Mastery",
          details: "Data classes, sealed classes, enums, object declarations, companion objects, extension functions, generics"
        },
        { 
          step: "Step - 5", 
          topic: "Functional Programming", 
          category: "Programming Paradigms",
          details: "Higher-order functions, lambdas, scope functions (let/apply/run/also/with), immutability, pure functions"
        },
        { 
          step: "Step - 6", 
          topic: "Collections & Standard Library", 
          category: "Kotlin Stdlib",
          details: "Lists, sets, maps, collection operators (map/filter/reduce), sequences, null safety, elvis operator"
        },
        { 
          step: "Step - 7", 
          topic: "Error Handling & Exceptions", 
          category: "Reliability",
          details: "try/catch/finally blocks, custom exceptions, Result class, error propagation, defensive programming"
        },
      ],
    },
    {
      title: "Advanced Kotlin",
      subtitle: "Production-Grade Features",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Coroutines & Concurrency", 
          category: "Asynchronous Programming",
          details: "Suspending functions, coroutine builders, dispatchers, structured concurrency, Flow, channels"
        },
        { 
          step: "Step - 9", 
          topic: "Annotations & Reflection", 
          category: "Metaprogramming",
          details: "Custom annotations, reflection API, KClass, runtime type information, annotation processing"
        },
        { 
          step: "Step - 10", 
          topic: "Design Patterns & Architecture", 
          category: "Software Design",
          details: "Singleton, Factory, Builder, Observer patterns, SOLID principles, clean architecture, DDD"
        },
        { 
          step: "Step - 11", 
          topic: "Testing & Quality Assurance", 
          category: "Code Reliability",
          details: "JUnit, Kotest, MockK, unit testing, integration testing, test-driven development, code coverage"
        },
      ],
    },
    {
      title: "Android Development",
      subtitle: "Mobile App Development",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Android Fundamentals", 
          category: "Android Basics",
          details: "Activities, fragments, intents, layouts, resources, manifest, application lifecycle, debugging"
        },
        { 
          step: "Step - 13", 
          topic: "Jetpack Components", 
          category: "Modern Android",
          details: "ViewModel, LiveData, Room, Navigation, WorkManager, Paging, DataStore, dependency injection (Hilt)"
        },
        { 
          step: "Step - 14", 
          topic: "Jetpack Compose", 
          category: "Modern UI",
          details: "Declarative UI, composables, state management, navigation, theming, animations, performance optimization"
        },
        { 
          step: "Step - 15", 
          topic: "Networking & Data", 
          category: "Data Management",
          details: "Retrofit, OkHttp, JSON parsing, REST APIs, Room database, coroutines with networking, error handling"
        },
      ],
    },
    {
      title: "Backend & Multiplatform",
      subtitle: "Server-Side & Cross-Platform",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Ktor Framework", 
          category: "Backend Development",
          details: "Ktor server, routing, middleware, serialization, authentication, WebSockets, testing, deployment"
        },
        { 
          step: "Step - 17", 
          topic: "Database Integration", 
          category: "Data Persistence",
          details: "Exposed ORM, SQLDelight, PostgreSQL/MySQL, migrations, connection pooling, transaction management"
        },
        { 
          step: "Step - 18", 
          topic: "Kotlin Multiplatform", 
          category: "Cross-Platform",
          details: "KMM setup, shared business logic, platform-specific code, expect/actual declarations, native interop"
        },
        { 
          step: "Step - 19", 
          topic: "Production & DevOps", 
          category: "Deployment",
          details: "Docker containerization, CI/CD pipelines, cloud deployment (AWS/GCP), monitoring, scaling, Gradle build optimization"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundations", project: "Console-based Task Manager with File I/O" },
    { level: "Intermediate", project: "Library Management System with Collections" },
    { level: "Advanced", project: "Concurrent Chat Server with Coroutines" },
    { level: "Android", project: "Social Media App with Jetpack Compose" },
    { level: "Backend", project: "E-commerce REST API with Ktor & Database" },
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
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
       

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 19 Essential Steps • 🎯 5 Skill Levels • 📱 Multi-Platform Ready</span>
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
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="100%" stopColor="#F97316" />
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
            🏗️ Kotlin Practice Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-orange-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Kotlin Technologies */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential Kotlin Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Android Development</div>
              <div className="text-purple-100">Jetpack Compose, Room, Hilt, Navigation, ViewModel</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Frameworks</div>
              <div className="text-purple-100">Ktor, Spring Boot, Exposed, Javalin, http4k</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Tools</div>
              <div className="text-purple-100">Gradle (KTS), Maven, Detekt, KtLint, Dokka</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-purple-100">JUnit, Kotest, MockK, Espresso, Robolectric</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database</div>
              <div className="text-purple-100">Room, SQLDelight, Exposed, PostgreSQL, MongoDB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Multiplatform</div>
              <div className="text-purple-100">KMM, Compose Multiplatform, Native interop</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">DevOps</div>
              <div className="text-purple-100">Docker, Kubernetes, GitHub Actions, AWS, GCP</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Async & Networking</div>
              <div className="text-purple-100">Coroutines, Flow, Retrofit, Ktor Client, WebSockets</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level Kotlin Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Social Media Android App</h3>
              <p className="text-sm text-gray-600 mb-3">Build scalable social platform with Jetpack Compose, Room, real-time messaging, and media sharing.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Compose • Hilt • Coroutines • Room</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌐 Microservices API Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Create scalable backend with Ktor, PostgreSQL, JWT auth, rate limiting, and service mesh.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Ktor • PostgreSQL • Docker • Kubernetes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔄 Cross-Platform Task Manager</h3>
              <p className="text-sm text-gray-600 mb-3">Develop multiplatform app with KMM, shared business logic, native UI, and real-time sync.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">KMM • SQLDelight • Compose Multiplatform</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💰 Fintech Trading Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Build high-performance trading app with real-time data, charts, security, and compliance features.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Flow • WebSockets • Security • Charts</div>
            </div>
          </div>
        </section>

        {/* Modern Kotlin Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern Kotlin Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Efficiency</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Coroutines over threads</li>
                <li>• Lazy initialization</li>
                <li>• Inline functions for lambdas</li>
                <li>• Sequence vs Collection</li>
                <li>• Memory leak prevention</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Code Quality & Safety</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Null safety first approach</li>
                <li>• Immutable data structures</li>
                <li>• Sealed classes for state</li>
                <li>• Unit testing with MockK</li>
                <li>• Static analysis (Detekt)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Modern Architecture</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clean Architecture principles</li>
                <li>• MVVM with ViewModels</li>
                <li>• Dependency Injection (Hilt)</li>
                <li>• Reactive programming (Flow)</li>
                <li>• Microservices with Ktor</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Strategy */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 Kotlin Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master the Fundamentals</div>
              <div className="text-gray-700">Focus on Kotlin language features first. Understand null safety, coroutines, and functional programming concepts deeply.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔨 Build Real Projects</div>
              <div className="text-gray-700">Create Android apps, backend services, or multiplatform projects. Deploy them and gather user feedback.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Stay Updated</div>
              <div className="text-gray-700">Follow Kotlin releases, JetBrains blog, Android updates, and contribute to open-source Kotlin projects.</div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Kotlin Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">📱 Android Developer</div>
              <div className="text-gray-700">Jetpack Compose, MVVM, Room, Hilt, Play Store optimization</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ Backend Developer</div>
              <div className="text-gray-700">Ktor/Spring Boot, microservices, databases, cloud deployment</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔧 Multiplatform Developer</div>
              <div className="text-gray-700">KMM, shared business logic, native platform integration</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏗️ Solution Architect</div>
              <div className="text-gray-700">System design, enterprise architecture, team leadership</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Remember: Kotlin is modern, safe, and versatile! Master the language, build amazing projects, and join the thriving Kotlin community.
          </p>
        </div>
      </div>
    </main>
  );
}