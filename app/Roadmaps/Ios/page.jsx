"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Smartphone } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const iOSRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Prerequisites",
      subtitle: "Programming Fundamentals (0-1 month)",
      description: "Master programming basics, logic, and Object-Oriented Programming concepts",
      color: "bg-gray-600",
      sections: [
        {
          title: "Swift Fundamentals",
          items: [
            "Variables & Constants → var, let keywords, naming conventions",
            "Data Types → Int, String, Double, Bool, type inference and annotations",
            "Operators → Arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (&&, ||, !)",
            "Optionals → Understanding nil, optional binding with if-let, guard-let",
            "String Interpolation → Embedding variables in strings with \\(variable)"
          ]
        },
        {
          title: "Control Flow & Functions",
          items: [
            "Conditionals → if-else statements, switch-case with pattern matching",
            "Loops → for-in loops, while, repeat-while, range operators (1...5, 1..<5)",
            "Functions → Parameter labels, return types, default parameters",
            "Closures → Anonymous functions, trailing closure syntax, capturing values",
            "Error Handling → do-try-catch blocks, throwing functions, custom errors"
          ]
        },
        {
          title: "Object-Oriented Programming",
          items: [
            "Classes & Structs → Reference vs value types, initialization, properties",
            "Protocols → Interface contracts, protocol conformance, delegation patterns",
            "Enums → Associated values, raw values, switch statement patterns",
            "Inheritance → Superclass, subclass, method overriding with override keyword",
            "Access Control → private, fileprivate, internal, public, open modifiers"
          ]
        },
        {
          title: "Development Tools & Mini Projects",
          items: [
            "Xcode IDE → Project navigation, Interface Builder, Swift Playgrounds",
            "Version Control → Git basics, GitHub repository management, commit workflows",
            "Calculator App → Basic arithmetic operations with console or simple UI",
            "Tic-Tac-Toe Game → Logic implementation, game state management",
            "Temperature Converter → Celsius/Fahrenheit conversion with input validation"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Beginner",
      subtitle: "iOS Development Fundamentals (1-3 months)",
      description: "Learn to build simple iOS apps with SwiftUI and understand basic iOS concepts",
      color: "bg-blue-600",
      sections: [
        {
          title: "iOS Development Setup",
          items: [
            "Xcode 15 → Interface overview, project templates, simulator usage",
            "iOS Simulator → Device testing, different screen sizes, debugging tools",
            "SwiftUI vs UIKit → Modern declarative vs imperative UI approaches",
            "App Structure → ContentView, App delegate, scene delegate lifecycle",
            "SF Symbols → Apple's icon library, symbol variants and configurations"
          ]
        },
        {
          title: "SwiftUI Fundamentals",
          items: [
            "Basic Views → Text, Image, Button, TextField, basic styling and modifiers",
            "Layout Containers → VStack, HStack, ZStack, Spacer for UI organization",
            "Modifiers → .padding(), .background(), .cornerRadius(), .font() styling",
            "State Management → @State for local state, @Binding for two-way data flow",
            "Navigation → NavigationView, NavigationLink, programmatic navigation"
          ]
        },
        {
          title: "User Interface Components",
          items: [
            "Lists → List view, ForEach, dynamic content, list styling and customization",
            "Forms → Form container, sections, input validation, picker controls",
            "Alerts & Sheets → .alert(), .sheet(), .actionSheet() modifiers",
            "Images → AsyncImage, SF Symbols, image scaling and aspect ratios",
            "Gestures → Tap, drag, long press gesture recognizers"
          ]
        },
        {
          title: "Beginner Projects & Storage",
          items: [
            "Simple To-Do List → Add, delete, mark complete functionality",
            "Tip Calculator → Input handling, calculation logic, result formatting",
            "Notes App → Text editing, local storage with UserDefaults",
            "Basic Weather App → Static data display, UI components practice",
            "UserDefaults → Simple data persistence, storing user preferences"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate",
      subtitle: "Data Management & Architecture (3-6 months)",
      description: "Master data handling, networking, MVVM architecture, and intermediate iOS concepts",
      color: "bg-green-600",
      sections: [
        {
          title: "MVVM Architecture",
          items: [
            "Model-View-ViewModel → Separation of concerns, data binding patterns",
            "ObservableObject → @Published properties, automatic UI updates",
            "@StateObject vs @ObservedObject → Object lifecycle management, ownership",
            "@EnvironmentObject → Global state management, dependency injection",
            "ViewModels → Business logic separation, testable code structure"
          ]
        },
        {
          title: "Networking & APIs",
          items: [
            "URLSession → HTTP requests, response handling, error management",
            "Async/Await → Modern concurrency, asynchronous programming patterns",
            "JSON Parsing → Codable protocol, custom CodingKeys, nested objects",
            "API Integration → RESTful services, authentication headers, request building",
            "Error Handling → Network errors, custom error types, user feedback"
          ]
        },
        {
          title: "Data Persistence",
          items: [
            "Core Data → Entity modeling, NSManagedObjectContext, fetch requests",
            "FileManager → Document directory, file operations, data serialization",
            "Realm Database → Alternative ORM, object relationships, migrations",
            "Keychain Services → Secure storage, credentials management, biometric access",
            "Data Synchronization → Local cache, offline support, conflict resolution"
          ]
        },
        {
          title: "Advanced UI & Projects",
          items: [
            "Custom Views → ViewBuilder, reusable components, modifier creation",
            "Animations → withAnimation, transitions, custom timing curves",
            "Dark Mode → Color schemes, adaptive colors, appearance customization",
            "Accessibility → VoiceOver support, accessibility labels and hints",
            "Weather App with API → Real network integration, location services"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced",
      subtitle: "Production-Ready Development (6-12 months)",
      description: "Build production-quality apps with advanced architecture, testing, and iOS features",
      color: "bg-orange-600",
      sections: [
        {
          title: "Advanced Architecture Patterns",
          items: [
            "MVVM-C → Coordinator pattern, navigation management, deep linking",
            "Clean Architecture → Use cases, repositories, dependency inversion",
            "Combine Framework → Reactive programming, publishers, subscribers, operators",
            "Swift Concurrency → Actors, async sequences, structured concurrency",
            "Dependency Injection → Protocol-based DI, container patterns, testing support"
          ]
        },
        {
          title: "Advanced Networking & Background Tasks",
          items: [
            "Alamofire → HTTP client library, request interceptors, response validation",
            "Background Tasks → Background app refresh, background processing",
            "Push Notifications → APNs setup, remote notifications, rich notifications",
            "WebSocket → Real-time communication, socket management, reconnection logic",
            "Caching Strategies → NSCache, disk caching, cache invalidation policies"
          ]
        },
        {
          title: "iOS System Integration",
          items: [
            "Core Location → GPS, region monitoring, location permissions",
            "Core Motion → Accelerometer, gyroscope, device motion data",
            "HealthKit → Health data reading/writing, authorization, privacy",
            "In-App Purchases → StoreKit 2, subscription management, receipt validation",
            "Universal Links → Deep linking, custom URL schemes, app-to-app communication"
          ]
        },
        {
          title: "Testing & Production Projects",
          items: [
            "Unit Testing → XCTest framework, test doubles, dependency mocking",
            "UI Testing → XCUITest, automated UI validation, accessibility testing",
            "Test-Driven Development → Red-green-refactor cycle, test first approach",
            "Social Media App → Complex navigation, image handling, real-time updates",
            "Fitness Tracker → HealthKit integration, data visualization, user goals"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Professional",
      subtitle: "Industry-Ready & App Store (12-18 months)",
      description: "Master professional development practices and publish production apps",
      color: "bg-purple-600",
      sections: [
        {
          title: "Professional Development Practices",
          items: [
            "SOLID Principles → Single responsibility, open/closed, interface segregation",
            "Design Patterns → Factory, Observer, Strategy, Singleton implementations",
            "Code Review → Pull request workflows, code quality standards, team collaboration",
            "Documentation → Code comments, README files, API documentation, architecture docs",
            "Continuous Integration → GitHub Actions, Bitrise, automated testing pipelines"
          ]
        },
        {
          title: "Advanced iOS Features",
          items: [
            "Widgets → WidgetKit, timeline entries, configuration intents",
            "App Extensions → Share extensions, notification extensions, keyboard extensions",
            "Shortcuts Integration → Siri shortcuts, intent donations, voice commands",
            "ARKit Development → Augmented reality, 3D object tracking, plane detection",
            "Machine Learning → Core ML, model integration, on-device inference"
          ]
        },
        {
          title: "App Store & Distribution",
          items: [
            "App Store Connect → App metadata, screenshots, app review process",
            "TestFlight → Beta testing, internal/external testers, feedback management",
            "App Store Optimization → Keywords, descriptions, visual assets, ratings",
            "Analytics → App Store analytics, crash reporting, user behavior tracking",
            "Monetization → In-app purchases, subscriptions, advertising integration"
          ]
        },
        {
          title: "Enterprise & Capstone Projects",
          items: [
            "Instagram Clone → Photo sharing, filters, social features, real-time updates",
            "E-commerce App → Product catalog, shopping cart, payment integration, order tracking",
            "Banking App → Biometric authentication, secure transactions, account management",
            "News App → Offline reading, push notifications, personalized content, search",
            "Multi-module Architecture → Framework development, code reusability, team collaboration"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Expert Level",
      subtitle: "Advanced Specialization & Leadership (18+ months)",
      description: "Master advanced iOS concepts, performance optimization, and architectural leadership",
      color: "bg-red-600",
      sections: [
        {
          title: "Performance & Optimization",
          items: [
            "Instruments Profiling → Time profiler, allocations, leaks detection, energy usage",
            "Memory Management → ARC, retain cycles, weak/unowned references, memory debugging",
            "Launch Time Optimization → App startup performance, dylib loading, main thread blocking",
            "Battery Optimization → Background execution, location usage, network efficiency",
            "Core Animation → Layer-based animations, GPU acceleration, performance best practices"
          ]
        },
        {
          title: "Advanced Swift & iOS APIs",
          items: [
            "Swift Concurrency Advanced → Custom actors, async algorithms, cancellation",
            "Metal Framework → GPU programming, custom shaders, high-performance graphics",
            "Core Graphics → Custom drawing, path manipulation, context management",
            "Accelerate Framework → High-performance computing, image processing, mathematical operations",
            "Network Framework → Low-level networking, custom protocols, connection management"
          ]
        },
        {
          title: "Architecture & System Design",
          items: [
            "Modular Architecture → Dynamic frameworks, static libraries, package dependencies",
            "Micro-frontends → Feature modules, independent deployments, team ownership",
            "Reactive Architecture → Unidirectional data flow, state machines, event sourcing",
            "Cross-platform Strategy → Shared business logic, platform-specific UI, code reuse",
            "Scalability Patterns → Caching layers, data synchronization, conflict resolution"
          ]
        },
        {
          title: "Leadership & Advanced Projects",
          items: [
            "Technical Leadership → Architecture decisions, code standards, mentoring developers",
            "Open Source Contribution → Library development, community involvement, framework creation",
            "Conference Speaking → Technical presentations, knowledge sharing, industry recognition",
            "Enterprise Solutions → Large-scale app architecture, team coordination, delivery management",
            "Innovation Projects → Emerging technologies, research and development, proof of concepts"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📱 Congratulations! You're iOS Expert Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered iOS development from Swift fundamentals to enterprise architecture and are now ready to build world-class iOS applications, lead development teams, and architect complex mobile systems.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🎯 Final Tips to Excel in iOS Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Practice daily - solve iOS challenges on LeetCode, build mini apps</li>
                  <li>• Build portfolio apps - showcase your SwiftUI and architectural skills</li>
                  <li>• Stay updated with iOS 18+ features and Swift evolution</li>
                  <li>• Contribute to open source iOS projects on GitHub</li>
                  <li>• Join iOS communities (Reddit r/iOSProgramming, Swift Forums, iOS Dev Weekly)</li>
                </ul>
              </div>
            </div>

            {/* Key Technologies Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">🛠️ Essential iOS Development Ecosystem</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">📱 Frameworks & UI</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• SwiftUI (Modern declarative UI)</li>
                    <li>• UIKit (Traditional iOS UI)</li>
                    <li>• Combine (Reactive programming)</li>
                    <li>• Core Data / Realm (Data persistence)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🔧 Development Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Xcode (Official IDE)</li>
                    <li>• Instruments (Performance profiling)</li>
                    <li>• TestFlight (Beta testing)</li>
                    <li>• Alamofire (Networking library)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🚀 Advanced Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Core ML (Machine Learning)</li>
                    <li>• ARKit (Augmented Reality)</li>
                    <li>• HealthKit (Health integration)</li>
                    <li>• StoreKit (In-app purchases)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Paths Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">💼 iOS Developer Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">📱 iOS App Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: Native iOS applications, App Store</li>
                    <li>• Skills: SwiftUI, UIKit, Core Data</li>
                    <li>• Growth: Junior → Senior iOS Developer</li>
                    <li>• Salary: $70k - $150k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🔧 Mobile Architect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: App architecture, team leadership</li>
                    <li>• Skills: MVVM, Clean Architecture, mentoring</li>
                    <li>• Growth: Lead → Principal Mobile Architect</li>
                    <li>• Salary: $120k - $220k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">🚀 Mobile Product Engineer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: Product development, user experience</li>
                    <li>• Skills: iOS + product sense + analytics</li>
                    <li>• Growth: Senior → Staff Product Engineer</li>
                    <li>• Salary: $110k - $200k+</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Resources Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-orange-50 to-orange-50 rounded-lg border border-orange-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">📚 Recommended iOS Learning Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-orange-600 mb-2">📖 Documentation & References</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Apple Developer Documentation (Official)</li>
                    <li>• Swift.org Language Guide (Swift fundamentals)</li>
                    <li>• Hacking with Swift (Paul Hudson's tutorials)</li>
                    <li>• Ray Wenderlich iOS Tutorials</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-orange-600 mb-2">🎥 Video Learning Platforms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• iOS Academy (YouTube channel)</li>
                    <li>• CodeWithChris (Beginner-friendly iOS)</li>
                    <li>• WWDC Sessions (Apple's annual conference)</li>
                    <li>• Stanford CS193p (SwiftUI course)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Smartphone className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              iOS <span className="text-blue-600">Development Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default iOSRoadmap;