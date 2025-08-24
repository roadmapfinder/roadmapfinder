import React from 'react';

export default function IOSDevelopmentRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Computer Science Fundamentals", 
          category: "Programming Basics",
          details: "Data structures (arrays, linked lists, stacks, queues, trees, graphs), algorithms, Big-O notation, OOP principles"
        },
        { 
          step: "Step - 2", 
          topic: "Swift Programming Language", 
          category: "Language Mastery",
          details: "Variables, constants, optionals, data types, control flow, functions, closures, classes, structs, enums"
        },
        { 
          step: "Step - 3", 
          topic: "Xcode Development Environment", 
          category: "Development Tools",
          details: "Xcode interface, navigators, inspectors, storyboards, iOS Simulator, debugging tools, Git integration"
        },
        { 
          step: "Step - 4", 
          topic: "Swift Memory Management", 
          category: "Advanced Swift",
          details: "ARC (Automatic Reference Counting), strong/weak/unowned references, retain cycles, memory optimization"
        },
        { 
          step: "Step - 5", 
          topic: "Swift Advanced Features", 
          category: "Modern Swift",
          details: "Generics, protocols & extensions, error handling, Swift concurrency (async/await), property wrappers"
        },
        { 
          step: "Step - 6", 
          topic: "iOS App Architecture", 
          category: "Design Patterns",
          details: "MVC, MVVM, MVP, VIPER patterns, dependency injection, clean architecture principles, SOLID principles"
        },
      ],
    },
    {
      title: "UI Development",
      subtitle: "User Interfaces",
      steps: [
        { 
          step: "Step - 7", 
          topic: "UIKit Framework", 
          category: "Legacy UI Framework",
          details: "ViewControllers, Navigation/TabBar controllers, TableView/CollectionView, Auto Layout, Storyboards"
        },
        { 
          step: "Step - 8", 
          topic: "SwiftUI Framework", 
          category: "Modern UI Framework",
          details: "Views, Stacks (VStack, HStack, ZStack), state management (@State, @Binding, @ObservedObject), NavigationStack"
        },
        { 
          step: "Step - 9", 
          topic: "SwiftUI Advanced", 
          category: "Advanced UI",
          details: "Animations, gestures, custom views, ViewModifiers, @StateObject, @EnvironmentObject, Combine integration"
        },
        { 
          step: "Step - 10", 
          topic: "App Lifecycle Management", 
          category: "System Integration",
          details: "AppDelegate, SceneDelegate, app states (foreground, background, terminated), lifecycle methods"
        },
        { 
          step: "Step - 11", 
          topic: "Navigation & Flow", 
          category: "User Experience",
          details: "Navigation patterns, deep linking, universal links, custom transitions, coordinator pattern"
        },
        { 
          step: "Step - 12", 
          topic: "Responsive Design", 
          category: "Multi-Device Support",
          details: "Size classes, trait collections, iPad adaptivity, iPhone/iPad universal apps, landscape/portrait"
        },
      ],
    },
    {
      title: "Backend Integration",
      subtitle: "Data & Services",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Networking & APIs", 
          category: "Data Communication",
          details: "URLSession, REST APIs, GraphQL, Codable protocol, JSON parsing, Alamofire, error handling"
        },
        { 
          step: "Step - 14", 
          topic: "Data Persistence", 
          category: "Local Storage",
          details: "UserDefaults, File System, Core Data ORM, SQLite, Realm database, keychain for secure storage"
        },
        { 
          step: "Step - 15", 
          topic: "Cloud Integration", 
          category: "Cloud Services",
          details: "iCloud, CloudKit, Firebase, AWS integration, data synchronization across devices"
        },
        { 
          step: "Step - 16", 
          topic: "Authentication & Security", 
          category: "App Security",
          details: "Keychain services, Face ID/Touch ID, OAuth, JWT tokens, API security, data encryption"
        },
        { 
          step: "Step - 17", 
          topic: "Real-time Communication", 
          category: "Live Data",
          details: "WebSockets, Socket.IO, real-time messaging, push notifications, background sync"
        },
        { 
          step: "Step - 18", 
          topic: "Concurrency & Threading", 
          category: "Performance",
          details: "GCD (Grand Central Dispatch), Operation Queues, Swift Concurrency, background tasks, thread safety"
        },
      ],
    },
    {
      title: "Advanced Features",
      subtitle: "Modern iOS",
      steps: [
        { 
          step: "Step - 19", 
          topic: "Push Notifications", 
          category: "User Engagement",
          details: "APNs (Apple Push Notification service), local notifications, Firebase Cloud Messaging, notification actions"
        },
        { 
          step: "Step - 20", 
          topic: "Device Integration", 
          category: "Hardware Features",
          details: "Camera, Photo Library, CoreLocation (GPS), CoreMotion (sensors), HealthKit, device capabilities"
        },
        { 
          step: "Step - 21", 
          topic: "Machine Learning", 
          category: "AI Integration",
          details: "CoreML, Vision framework, Natural Language processing, on-device ML models, AI-powered features"
        },
        { 
          step: "Step - 22", 
          topic: "App Store & Monetization", 
          category: "Business",
          details: "In-App Purchases, subscriptions, StoreKit 2, App Store optimization, TestFlight, app deployment"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Calculator App with Swift" },
    { level: "UI Development", project: "Weather App with SwiftUI" },
    { level: "Backend Integration", project: "Todo App with Core Data" },
    { level: "Advanced Features", project: "Chat App with Real-time Features" },
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
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
     

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📱 22 Essential Steps • 🚀 4 Skill Levels • 💼 Industry Ready</span>
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
            📱 iOS Development Practice Projects
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

        {/* iOS Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential iOS Development Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">UI Frameworks</div>
              <div className="text-blue-100">SwiftUI, UIKit, Auto Layout, Storyboards</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Storage</div>
              <div className="text-blue-100">Core Data, SQLite, Realm, UserDefaults</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Networking</div>
              <div className="text-blue-100">URLSession, Alamofire, Codable, WebSockets</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Services</div>
              <div className="text-blue-100">iCloud, CloudKit, Firebase, AWS SDK</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Device Features</div>
              <div className="text-blue-100">Camera, CoreLocation, CoreMotion, HealthKit</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing & Debug</div>
              <div className="text-blue-100">XCTest, Instruments, TestFlight, Simulator</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Architecture</div>
              <div className="text-blue-100">MVVM, MVC, Coordinator, Clean Architecture</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Advanced Features</div>
              <div className="text-blue-100">CoreML, ARKit, Push Notifications, In-App Purchase</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced iOS Development Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Social Media App</h3>
              <p className="text-sm text-gray-600 mb-3">Build Instagram-like app with photo sharing, stories, real-time chat, and social features.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Camera • Real-time • Social</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏪 E-Commerce App</h3>
              <p className="text-sm text-gray-600 mb-3">Create shopping app with product catalog, cart, payment integration, and order tracking.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Payment • API • User Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏃‍♂️ Fitness Tracker</h3>
              <p className="text-sm text-gray-600 mb-3">Develop health app with workout tracking, step counter, heart rate monitoring, and progress analytics.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">HealthKit • CoreMotion • Analytics</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎵 Music Streaming App</h3>
              <p className="text-sm text-gray-600 mb-3">Build Spotify-like app with audio streaming, playlists, offline downloads, and recommendations.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Audio • Streaming • ML Recommendations</div>
            </div>
          </div>
        </section>

        {/* Interview Preparation */}
        <section className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 iOS Interview Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">🧠 Technical Concepts</h3>
              <ul className="text-sm space-y-1 text-indigo-100">
                <li>• Swift language features & ARC</li>
                <li>• iOS app lifecycle & memory management</li>
                <li>• Multithreading & concurrency</li>
                <li>• Design patterns & architecture</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">💻 Coding Challenges</h3>
              <ul className="text-sm space-y-1 text-indigo-100">
                <li>• Data structures & algorithms</li>
                <li>• Swift problem solving</li>
                <li>• System design for mobile apps</li>
                <li>• Code optimization techniques</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">🔧 Practical Skills</h3>
              <ul className="text-sm space-y-1 text-indigo-100">
                <li>• Live coding in Xcode</li>
                <li>• Debugging & troubleshooting</li>
                <li>• Performance optimization</li>
                <li>• App Store submission process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            📱 Master iOS development through hands-on practice, real projects, and continuous learning. Build amazing apps!
          </p>
        </div>
      </div>
    </main>
  );
}