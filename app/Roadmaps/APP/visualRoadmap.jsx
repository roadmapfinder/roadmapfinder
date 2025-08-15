import React from 'react';

export default function MobileAppRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Programming & CS Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Core Programming Languages", 
          category: "Programming",
          details: "JavaScript/TypeScript (React Native), Dart (Flutter), Swift (iOS), Kotlin (Android), C# (Xamarin/.NET MAUI)"
        },
        { 
          step: "Step - 2", 
          topic: "Computer Science Concepts", 
          category: "CS Fundamentals",
          details: "Data structures, algorithms, OOP, API consumption, HTTP methods, JSON/XML handling"
        },
        { 
          step: "Step - 3", 
          topic: "Mobile Development Basics", 
          category: "Mobile Concepts",
          details: "App lifecycle, state management, navigation patterns, device features (camera, GPS), push notifications"
        },
      ],
    },
    {
      title: "Frontend",
      subtitle: "UI/UX Development",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Design Principles", 
          category: "UI/UX Design",
          details: "Material Design (Android), Human Interface Guidelines (iOS), responsive layouts, accessibility standards"
        },
        { 
          step: "Step - 5", 
          topic: "Cross-Platform Frameworks", 
          category: "Frameworks",
          details: "Flutter (Dart), React Native (JS/TS), Ionic, Xamarin, .NET MAUI for multi-platform development"
        },
        { 
          step: "Step - 6", 
          topic: "Native UI Frameworks", 
          category: "Native Development",
          details: "SwiftUI (iOS), Jetpack Compose (Android), UIKit, Android Views for platform-specific apps"
        },
      ],
    },
    {
      title: "Backend",
      subtitle: "Server-Side Development",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Backend Technologies", 
          category: "Server Development",
          details: "Node.js + Express, Django/FastAPI, GraphQL, REST APIs, serverless functions"
        },
        { 
          step: "Step - 8", 
          topic: "Database Management", 
          category: "Data Storage",
          details: "Local: SQLite, Room (Android), CoreData (iOS). Cloud: Firebase Firestore, Supabase, PostgreSQL"
        },
        { 
          step: "Step - 9", 
          topic: "Authentication & Security", 
          category: "Security",
          details: "JWT tokens, OAuth2, Firebase Auth, biometric authentication, secure storage, encryption"
        },
      ],
    },
    {
      title: "Integration",
      subtitle: "APIs & Third-Party Services",
      steps: [
        { 
          step: "Step - 10", 
          topic: "Payment Integration", 
          category: "Payments",
          details: "Stripe, Razorpay, PayPal, Apple Pay, Google Pay, in-app purchases, subscription models"
        },
        { 
          step: "Step - 11", 
          topic: "Maps & Location Services", 
          category: "Location",
          details: "Google Maps API, Mapbox, Apple Maps, geolocation, location tracking, geofencing"
        },
        { 
          step: "Step - 12", 
          topic: "Social & AI Integration", 
          category: "Third-Party APIs",
          details: "Social logins (Google, Apple, Facebook), AI APIs (ChatGPT, Stable Diffusion), cloud services"
        },
      ],
    },
    {
      title: "Testing & Deployment",
      subtitle: "Quality & Distribution",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Testing Strategies", 
          category: "Quality Assurance",
          details: "Unit testing (Jest, Flutter test), integration testing, UI testing (Appium, Detox), performance profiling"
        },
        { 
          step: "Step - 14", 
          topic: "App Store Publishing", 
          category: "Distribution",
          details: "Google Play Console, App Store Connect, TestFlight, app signing, store policies, release management"
        },
        { 
          step: "Step - 15", 
          topic: "CI/CD & DevOps", 
          category: "Automation",
          details: "Fastlane, GitHub Actions, Bitrise, automated testing, versioning, continuous deployment"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Cutting-Edge Technologies",
      steps: [
        { 
          step: "Step - 16", 
          topic: "AI-Powered Features", 
          category: "Artificial Intelligence",
          details: "Voice assistants, ML recommendations, computer vision, natural language processing, on-device AI"
        },
        { 
          step: "Step - 17", 
          topic: "AR/VR & Emerging Tech", 
          category: "Immersive Tech",
          details: "ARKit, ARCore, Unity 3D, WebXR, blockchain integrations, IoT connectivity, foldable displays"
        },
        { 
          step: "Step - 18", 
          topic: "Performance & Architecture", 
          category: "Optimization",
          details: "120Hz displays, memory optimization, battery efficiency, micro-frontends, super app architecture"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Simple Calculator with Basic Navigation" },
    { level: "Frontend", project: "Weather App with Beautiful UI" },
    { level: "Backend", project: "To-Do App with Cloud Sync" },
    { level: "Integration", project: "E-commerce App with Payments" },
    { level: "Testing & Deployment", project: "Social Media App (Published)" },
    { level: "Advanced", project: "AI-Powered AR Shopping Assistant" },
  ];

  const portfolioProjects = [
    { name: "To-Do App", description: "Offline sync, task management" },
    { name: "E-commerce App", description: "Shopping cart, payment gateway" },
    { name: "Social Chat App", description: "Real-time messaging, media sharing" },
    { name: "AI Image Generator", description: "AI-powered creative tools" },
    { name: "AR Object Viewer", description: "3D visualization, camera integration" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-teal-500 to-teal-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-[#ffffff] via-white to-[#f3f3f3] min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📱 18 Essential Steps • 🚀 6 Skill Levels • 💻 Industry Ready</span>
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
            💡 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            🏗️ Essential Portfolio Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioProjects.map((project, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-1 text-sm">{project.name}</div>
                <div className="text-xs text-gray-600">{project.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential Mobile Development Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cross-Platform</div>
              <div className="text-purple-100">Flutter, React Native, Ionic</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Native Development</div>
              <div className="text-purple-100">SwiftUI, Jetpack Compose, Xcode</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Backend Services</div>
              <div className="text-purple-100">Firebase, Supabase, AWS Amplify</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning & Practice</div>
              <div className="text-purple-100">GitHub, Stack Overflow, Dev.to</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            📱 Remember: Great mobile app development combines strong fundamentals, user-centric design, and real-world project experience!
          </p>
        </div>
      </div>
    </main>
  );
}