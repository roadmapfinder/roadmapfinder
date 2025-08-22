import React from 'react';

export default function FlutterRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Programming & Core Concepts",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Dart Language Mastery", 
          category: "Programming Fundamentals",
          details: "Variables, data types, OOP concepts, null safety (?!, late), async/await, futures, streams, error handling, and functional programming principles"
        },
        { 
          step: "Step - 2", 
          topic: "Development Environment Setup", 
          category: "Tools & Configuration",
          details: "Flutter SDK installation, IDE setup (VS Code/Android Studio), emulators, device debugging, hot reload, and development workflow"
        },
        { 
          step: "Step - 3", 
          topic: "Flutter Architecture Understanding", 
          category: "Core Concepts",
          details: "Widgets → Elements → Render Objects pipeline, widget tree, element tree, render tree, build context, and Flutter's reactive framework"
        },
      ],
    },
    {
      title: "Flutter Basics",
      subtitle: "UI Building & Core Widgets",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Core Widgets & Layouts", 
          category: "UI Components",
          details: "Text, Container, Row, Column, Stack, Image, Icon, Button, ListView, GridView, Padding, Align, Expanded, Flexible, SafeArea, SizedBox"
        },
        { 
          step: "Step - 5", 
          topic: "State Management Basics", 
          category: "State Handling",
          details: "StatelessWidget vs StatefulWidget, setState(), widget lifecycle, local state management, and understanding when to rebuild widgets"
        },
        { 
          step: "Step - 6", 
          topic: "Navigation & Routing", 
          category: "App Flow",
          details: "Navigator 1.0 & 2.0, push/pop operations, named routes, passing data between screens, modal routes, and navigation drawer"
        },
        { 
          step: "Step - 7", 
          topic: "Forms & Input Handling", 
          category: "User Interaction",
          details: "TextField, Form widgets, validation, TextEditingController, FocusNode, keyboard handling, and form submission patterns"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Advanced UI & Data Management",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Animations & Gestures", 
          category: "Interactive UI",
          details: "Implicit animations (AnimatedContainer, AnimatedOpacity), explicit animations (AnimationController), Hero animations, gesture detection"
        },
        { 
          step: "Step - 9", 
          topic: "Networking & APIs", 
          category: "Data Integration",
          details: "HTTP package, REST API integration (GET, POST, PUT, DELETE), JSON parsing, error handling, dio package, and API authentication"
        },
        { 
          step: "Step - 10", 
          topic: "Local Storage Solutions", 
          category: "Data Persistence",
          details: "SharedPreferences, SQLite with sqflite, Hive NoSQL database, file system operations, and secure storage implementation"
        },
        { 
          step: "Step - 11", 
          topic: "Modern State Management", 
          category: "Architecture Patterns",
          details: "Provider, Riverpod (recommended 2025), BLoC/Cubit, Redux patterns, dependency injection, and scalable state architecture"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Production & Enterprise Development",
      steps: [
        { 
          step: "Step - 12", 
          topic: "App Architecture & Testing", 
          category: "Enterprise Patterns",
          details: "MVVM, Clean Architecture, Repository pattern, dependency injection (get_it), unit testing, widget testing, integration testing"
        },
        { 
          step: "Step - 13", 
          topic: "Performance & Optimization", 
          category: "Production Quality",
          details: "Avoiding rebuilds, const widgets, Isolates for heavy tasks, Flutter DevTools, memory management, and performance profiling"
        },
        { 
          step: "Step - 14", 
          topic: "Advanced Features & Integration", 
          category: "Platform Integration",
          details: "Push notifications (FCM), in-app purchases, maps, location services, camera, biometrics, platform channels, and native integration"
        },
        { 
          step: "Step - 15", 
          topic: "Deployment & DevOps", 
          category: "Production Deployment",
          details: "App signing, Play Store/App Store publishing, CI/CD (GitHub Actions, Codemagic), versioning, OTA updates, and release management"
        },
      ],
    },
  ];

  const practiceProjects = [
    { level: "Beginner", projects: "Todo App, Calculator, Weather App, Simple News Reader" },
    { level: "Intermediate", projects: "E-commerce App, Chat Application, Recipe Book, Expense Tracker" },
    { level: "Advanced", projects: "Social Media App, Video Streaming, Banking App, Real-time Dashboard" },
    { level: "Expert", projects: "Multi-platform SaaS, IoT Dashboard, AR/VR Apps, Enterprise Solutions" },
  ];

  const learningResources = [
    { category: "Official Resources", resources: "Flutter.dev, Dart.dev, Flutter YouTube, Codelabs" },
    { category: "Learning Platforms", resources: "Flutter Apprentice, Academind, The Net Ninja, Vandad Nahavandipoor" },
    { category: "Practice Platforms", resources: "DartPad, Flutter Samples, GitHub Flutter Repos, CodePen Flutter" },
    { category: "Communities", resources: "Flutter Discord, Reddit r/FlutterDev, Stack Overflow, Medium Flutter" },
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-3">
              Flutter Development Roadmap 2025
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Complete guide from Dart fundamentals to production-ready cross-platform applications
            </p>
          </div>
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 15 Essential Steps • 📱 4 Core Areas • 💼 Industry Ready</span>
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

        {/* Practice Projects Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🎯 Flutter Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceProjects.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.projects}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            📚 Flutter Learning Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {learningResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* State Management Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🧠 State Management Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🎯 Riverpod</div>
              <div className="text-blue-100">Recommended 2025, compile-time safety, provider 2.0</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🧩 BLoC/Cubit</div>
              <div className="text-blue-100">Enterprise apps, predictable state, reactive programming</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">📦 Provider</div>
              <div className="text-blue-100">Beginner-friendly, inherited widget wrapper, simple API</div>
            </div>
          </div>
        </section>

        {/* Flutter Platforms Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📱 Flutter Platforms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">📱 Mobile</div>
              <div className="text-sm text-gray-600">iOS & Android native performance, platform-specific designs, app store ready</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🌐 Web</div>
              <div className="text-sm text-gray-600">PWA support, responsive design, single codebase for web apps</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">💻 Desktop</div>
              <div className="text-sm text-gray-600">Windows, macOS, Linux applications with native feel</div>
            </div>
          </div>
        </section>

        {/* Essential Packages Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📦 Essential Flutter Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🌐 Networking</div>
              <div className="text-sm text-gray-600">dio, http, chopper, retrofit, graphql_flutter</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">💾 Storage</div>
              <div className="text-sm text-gray-600">hive, sqflite, shared_preferences, secure_storage</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🎨 UI/UX</div>
              <div className="text-sm text-gray-600">lottie, cached_network_image, shimmer, auto_size_text</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🏗️ Architecture</div>
              <div className="text-sm text-gray-600">get_it, freezed, json_annotation, injectable</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-red-600 mb-2">🧪 Testing</div>
              <div className="text-sm text-gray-600">mockito, bloc_test, golden_toolkit, integration_test</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-indigo-600 mb-2">🚀 DevOps</div>
              <div className="text-sm text-gray-600">firebase_crashlytics, sentry, code_push, fastlane</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🛠️ Flutter Portfolio Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🛒 E-commerce App</div>
              <div className="text-sm text-gray-600">Product catalog, cart, payments, user auth, order tracking with real-time updates and push notifications</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">💬 Chat Application</div>
              <div className="text-sm text-gray-600">Real-time messaging, media sharing, group chats, message encryption, online status indicators</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">📊 Expense Tracker</div>
              <div className="text-sm text-gray-600">Budget management, transaction categorization, charts, reports, bank sync, financial insights</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🎵 Music Streaming</div>
              <div className="text-sm text-gray-600">Audio playback, playlists, offline mode, social features, recommendation engine</div>
            </div>
          </div>
        </section>

        {/* Career Applications Section */}
        <section className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💼 Flutter in Industry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-emerald-600 mb-2">🏦 FinTech</div>
              <div className="text-sm text-gray-600">Banking apps, payment gateways, cryptocurrency wallets, trading platforms</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🏥 HealthTech</div>
              <div className="text-sm text-gray-600">Telemedicine, health monitoring, fitness tracking, medical records management</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🎓 EdTech</div>
              <div className="text-sm text-gray-600">Learning platforms, virtual classrooms, assessment tools, progress tracking</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Remember: Flutter is the future of cross-platform development. Master the fundamentals, build real projects, and focus on clean architecture. One codebase, multiple platforms, infinite possibilities!
          </p>
        </div>
      </div>
    </main>
  );
}