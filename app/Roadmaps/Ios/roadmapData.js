export const phases = [
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