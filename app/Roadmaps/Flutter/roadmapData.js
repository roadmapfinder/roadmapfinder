export const phases = [
  {
    id: 0,
    title: "Phase 1",
    subtitle: "Beginner - Foundations (0-6 months)",
    description: "Get comfortable with Dart, Flutter basics, widgets, layouts, and simple apps",
    color: "bg-green-600",
    sections: [
      {
        title: "Learn Dart Language First",
        items: [
          "Variables & Data Types → var, final, const keywords, null safety",
          "Functions & Classes → Function syntax, class definition, objects creation",
          "Collections → List (arrays), Map (key-value), Set (unique values)",
          "Control Flow → if-else statements, switch-case, for/while loops",
          "OOP Concepts → Inheritance, mixins, abstract classes, interfaces",
          "Async Programming → Future for single async operations, async/await syntax, Streams for continuous data"
        ]
      },
      {
        title: "Flutter Basics",
        items: [
          "Setup & IDE → Flutter SDK installation, VSCode/Android Studio configuration",
          "Widget Tree → Understanding build methods, widget composition, tree structure",
          "Stateless vs Stateful → Immutable widgets vs widgets with mutable state",
          "Basic UI Widgets → Text, Image, Container, Row, Column, Stack layout widgets",
          "Styling & Themes → Colors, fonts, ThemeData, MaterialApp theming",
          "Navigation → Navigator.push/pop for screen transitions, MaterialPageRoute",
          "Asset Management → Images, fonts, icons in pubspec.yaml, loading assets"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "To-Do List App → CRUD operations with local storage, task management",
          "BMI Calculator → Input handling, calculation logic, result display",
          "Weather App → OpenWeather API integration, async data fetching, UI updates",
          "Notes App → SQLite or Hive database, create/read/update/delete notes"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Phase 2",
    subtitle: "Intermediate - Building Real Apps (6-12 months)",
    description: "Learn state management, APIs, persistence, navigation, and scaling apps",
    color: "bg-blue-600",
    sections: [
      {
        title: "State Management (Core Skill)",
        items: [
          "Local State → setState() for simple widget state changes",
          "Provider → InheritedWidget wrapper, ChangeNotifier, Consumer widgets",
          "Riverpod → Modern provider, compile-safe, better testing, no BuildContext",
          "Bloc/Cubit → Business logic separation, stream-based state, event-driven",
          "Redux → Unidirectional data flow, single store, actions and reducers"
        ]
      },
      {
        title: "Networking & APIs",
        items: [
          "HTTP Package → Basic GET/POST requests, response handling",
          "JSON Serialization → Parsing JSON, model classes, fromJson/toJson methods",
          "Dio Package → Advanced networking, interceptors, request logging, retries",
          "REST API Best Practices → Error handling, status codes, authentication headers",
          "Error Handling → Try-catch blocks, custom exceptions, user-friendly messages"
        ]
      },
      {
        title: "Data Persistence",
        items: [
          "SharedPreferences → Simple key-value storage, user settings, preferences",
          "Hive → Lightweight NoSQL database, fast read/write, no native dependencies",
          "Sqflite → SQL-based database, complex queries, relational data",
          "ObjectBox/Isar → Fast NoSQL databases, object relationships, reactive queries"
        ]
      },
      {
        title: "Navigation & Routing",
        items: [
          "Named Routes → Route registration, Navigator.pushNamed, arguments passing",
          "go_router → Modern routing package, deep linking support, URL-based navigation",
          "Deep Linking → URL scheme handling, app launch from external links",
          "Nested Navigation → Bottom navigation, tab bars, nested navigators"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Expense Tracker → Hive for persistence, categories, charts, budget tracking",
          "Movie App → TMDb API integration, Provider state management, movie details",
          "E-commerce App → Product catalog, shopping cart, API integration, checkout",
          "Chat App → Firebase backend, real-time messaging, user authentication"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Phase 3",
    subtitle: "Advanced - Industry-Ready Skills (12-18 months)",
    description: "Write scalable, maintainable, production-grade apps",
    color: "bg-orange-600",
    sections: [
      {
        title: "Architecture & Best Practices",
        items: [
          "Clean Architecture → Domain, Data, Presentation layer separation",
          "MVVM Pattern → Model-View-ViewModel, UI and business logic separation",
          "Bloc Architecture → Business logic components, event-state-view pattern",
          "Repository Pattern → Data source abstraction, single source of truth",
          "Dependency Injection → get_it service locator, Riverpod providers, testability"
        ]
      },
      {
        title: "Advanced State Management",
        items: [
          "Riverpod Advanced → Async providers, StateNotifier, family modifiers, autodispose",
          "Bloc Advanced Patterns → Hydrated bloc for persistence, multi-bloc coordination",
          "Performance Optimization → Minimize rebuilds, const constructors, RepaintBoundary"
        ]
      },
      {
        title: "Backend & Cloud Integration",
        items: [
          "Firebase Suite → Authentication, Firestore database, Cloud Storage, Functions",
          "Firebase Messaging → Push notifications, FCM tokens, notification handling",
          "Supabase/Appwrite → Alternative backends, PostgreSQL, real-time subscriptions",
          "GraphQL APIs → graphql_flutter package, queries, mutations, subscriptions",
          "Push Notifications → OneSignal, Firebase Cloud Messaging, local notifications"
        ]
      },
      {
        title: "Advanced UI & UX",
        items: [
          "Custom Animations → Implicit (AnimatedContainer) vs Explicit (AnimationController)",
          "Lottie Animations → JSON animations, lottie package, animated illustrations",
          "Hero Animations → Shared element transitions between screens",
          "Responsive Layouts → MediaQuery, LayoutBuilder, mobile/tablet/web/desktop",
          "Adaptive Design → Material 3 for Android, Cupertino for iOS, platform detection"
        ]
      },
      {
        title: "Security & Performance",
        items: [
          "Secure Storage → flutter_secure_storage, encrypted data, keychain/keystore",
          "Code Obfuscation → Dart obfuscation, app signing, release builds",
          "Performance Profiling → DevTools, timeline view, memory leaks, frame rendering",
          "Caching Strategies → Dio interceptors, Hive cache, image caching, offline-first"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Social Media App → Firebase backend, Riverpod, posts, comments, likes, profiles",
          "Video Streaming App → YouTube API, video player, caching, offline downloads",
          "Project Management App → Multi-user collaboration, real-time updates, task management",
          "FinTech App → Secure authentication, charts, transactions, payment integration"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Phase 4",
    subtitle: "Expert - Industry Professional (18+ months)",
    description: "Become an industry-ready Flutter engineer",
    color: "bg-purple-600",
    sections: [
      {
        title: "Testing & Quality",
        items: [
          "Unit Testing → mockito for mocking, test isolation, business logic tests",
          "Widget Testing → testWidgets, finder, pump, widget interaction testing",
          "Integration Testing → flutter_driver, integration_test, end-to-end flows",
          "Test Coverage → Coverage reports, 80%+ coverage goal, continuous monitoring",
          "CI/CD Pipelines → Automated testing on every commit, build verification"
        ]
      },
      {
        title: "DevOps & Deployment",
        items: [
          "Git Workflows → Feature branches, pull requests, code review process",
          "CI/CD Tools → GitHub Actions, Codemagic, Bitrise automated build/deploy",
          "Automated Testing → Run tests on pipelines, quality gates, build failure prevention",
          "App Store Deployment → Play Store and App Store submission, review process",
          "App Versioning → Semantic versioning, OTA updates, version management"
        ]
      },
      {
        title: "Advanced Flutter Ecosystem",
        items: [
          "Flutter Web → Responsive web apps, browser-specific features, PWA support",
          "Flutter Desktop → Windows, macOS, Linux applications, desktop-specific UI",
          "Platform Channels → MethodChannel, calling native iOS/Android code",
          "Plugin Development → Create custom plugins, platform-specific implementations",
          "Package Publishing → Publish packages to pub.dev, versioning, documentation",
          "FFI Integration → Flutter + Rust/C for performance-critical operations"
        ]
      },
      {
        title: "Industry Practices",
        items: [
          "Agile/Scrum → Sprint planning, daily standups, retrospectives, story points",
          "Code Reviews → Pull request best practices, constructive feedback, standards",
          "Documentation → README, API docs, architecture diagrams, onboarding guides",
          "Monitoring → Firebase Crashlytics, Sentry error tracking, crash reports",
          "Analytics → User behavior tracking, event logging, Firebase Analytics, mixpanel"
        ]
      },
      {
        title: "Expert-Level Projects",
        items: [
          "Full E-commerce App → Payments (Stripe/PayPal), cart, auth, admin dashboard",
          "SaaS Application → Subscription model, recurring billing, user management",
          "Enterprise Chat App → End-to-end encryption, WebRTC video/voice calls, group chat",
          "Cross-platform Productivity → Works on Web, Android, iOS, Desktop with shared codebase"
        ]
      },
      {
        title: "Essential Development Tools",
        items: [
          "IDE → VSCode with Flutter extension, Android Studio with Flutter plugin",
          "Version Control → Git fundamentals, GitHub/GitLab, branching strategies",
          "Package Manager → pub.dev for packages, dependency management in pubspec.yaml",
          "API Testing → Postman for API testing, Swagger for API documentation",
          "Design Tools → Figma for UI/UX design, asset export, design handoff",
          "Deployment → Codemagic for CI/CD, Firebase App Distribution for beta testing",
          "Monitoring → Firebase Crashlytics for crash reports, Sentry for error tracking"
        ]
      }
    ]
  }
];