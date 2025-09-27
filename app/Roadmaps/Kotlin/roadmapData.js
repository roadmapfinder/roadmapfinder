// Kotlin Mastery Roadmap data structured according to the Kotlin roadmap content
export const phases = [
  {
    id: 1,
    title: "Beginner: Core Kotlin & Fundamentals",
    subtitle: "Phase 1",
    description: "Build a strong foundation in Kotlin syntax, core programming concepts, and simple projects.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🎯 Kotlin Basics",
        items: [
          "Variables (val vs var) and immutability concepts",
          "Data types (Int, Float, Double, Boolean, String)",
          "Null safety (?, !!, ?:) for safe coding practices",
          "Operators and type casting (as, is, as?)"
        ]
      },
      {
        title: "🔄 Control Flow & Functions",
        items: [
          "if, when expressions for conditional logic",
          "Loops: for, while, do-while with break/continue",
          "Function declaration, default & named arguments",
          "Lambda expressions and higher-order functions"
        ]
      },
      {
        title: "📚 Collections & OOP",
        items: [
          "Lists, Sets, Maps (immutable vs mutable)",
          "Array operations: map, filter, reduce",
          "Classes, objects, constructors & inheritance",
          "Data classes, Enum classes & companion objects"
        ]
      },
      {
        title: "🚀 Beginner Projects",
        items: [
          "✅ Simple Calculator (CLI)",
          "✅ To-Do List (in memory)",
          "✅ Number guessing game",
          "✅ Student grading system"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate: Advanced Kotlin & Practical Applications",
    subtitle: "Phase 2",
    description: "Learn advanced Kotlin features, functional programming, and start building real apps.",
    color: "bg-green-500",
    sections: [
      {
        title: "⚡ Advanced Kotlin Features",
        items: [
          "Extension functions for code reusability",
          "Generics for type-safe collections",
          "Delegation (by) and sealed classes",
          "Inline functions and higher-order functions"
        ]
      },
      {
        title: "🔄 Functional Programming",
        items: [
          "Lambda expressions & anonymous functions",
          "Map, Filter, Reduce, Fold operations",
          "Scoping functions: let, run, apply, also, with",
          "Coroutines basics for async programming"
        ]
      },
      {
        title: "🧪 Testing & Concurrency",
        items: [
          "Unit testing with JUnit5 framework",
          "Mocking with MockK library",
          "Coroutines: launch, async, await patterns",
          "Dispatchers (IO, Default, Main) usage"
        ]
      },
      {
        title: "🚀 Intermediate Projects",
        items: [
          "✅ CLI Chat Application",
          "✅ Weather App (API integration)",
          "✅ Simple Expense Tracker",
          "✅ File Organizer (read/write directories)"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Android Development with Kotlin",
    subtitle: "Phase 3",
    description: "Build real-world Android apps using Kotlin (most in-demand skill).",
    color: "bg-purple-500",
    sections: [
      {
        title: "📱 Android Fundamentals",
        items: [
          "Android Studio setup and project structure",
          "Activity & Fragment lifecycle management",
          "XML Layouts & Jetpack Compose basics",
          "Views, RecyclerView for dynamic lists"
        ]
      },
      {
        title: "🏗️ Architecture Patterns",
        items: [
          "MVVM (Model-View-ViewModel) pattern",
          "Repository pattern for data management",
          "LiveData & StateFlow for reactive programming",
          "ViewBinding / DataBinding implementation"
        ]
      },
      {
        title: "🌐 Networking & Persistence",
        items: [
          "Retrofit for REST API communication",
          "Room Database for local storage",
          "JSON parsing with Kotlinx Serialization",
          "SharedPreferences & DataStore usage"
        ]
      },
      {
        title: "🚀 Android Projects",
        items: [
          "✅ Note-taking App with MVVM architecture",
          "✅ Movie/TV Show App (API + offline caching)",
          "✅ E-Commerce App (cart, checkout, payments)",
          "✅ Chat App (Realtime with Firebase)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Kotlin for Backend Development",
    subtitle: "Phase 4",
    description: "Build server-side applications with Kotlin, APIs, and microservices.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🖥️ Backend Frameworks",
        items: [
          "Ktor basics for lightweight backend development",
          "Spring Boot with Kotlin configuration",
          "Routing, request handling & response building",
          "Authentication (JWT, OAuth2) implementation"
        ]
      },
      {
        title: "🗄️ Database & APIs",
        items: [
          "Database integration (Exposed ORM, SQLDelight)",
          "Spring Data JPA with Kotlin",
          "REST vs GraphQL API design",
          "Exception handling & validation patterns"
        ]
      },
      {
        title: "☁️ Microservices & DevOps",
        items: [
          "API versioning and service communication",
          "Containerization with Docker",
          "Testing with MockMvc framework",
          "Spring Security with JWT tokens"
        ]
      },
      {
        title: "🚀 Backend Projects",
        items: [
          "✅ URL Shortener API with database",
          "✅ Task Management API (CRUD operations)",
          "✅ Blogging Platform API with authentication",
          "✅ Online Quiz Application with real-time features"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Ready Skills & Best Practices",
    subtitle: "Phase 5",
    description: "Master real-world Kotlin development, performance, and scalability.",
    color: "bg-red-500",
    sections: [
      {
        title: "🏗️ Clean Architecture",
        items: [
          "SOLID principles implementation in Kotlin",
          "Clean Architecture (Layered Architecture)",
          "Design patterns: Singleton, Factory, Observer",
          "Writing reusable and testable code"
        ]
      },
      {
        title: "⚡ Performance & Advanced Features",
        items: [
          "Memory management in Kotlin/Android",
          "Coroutine optimization techniques",
          "Inline classes and typealiases",
          "Kotlin Multiplatform (KMM) basics"
        ]
      },
      {
        title: "🔄 DevOps & Industry Practices",
        items: [
          "Git workflows & GitHub best practices",
          "CI/CD pipelines and automated testing",
          "Docker deployment (Heroku, AWS, GCP)",
          "Code reviews & documentation standards"
        ]
      },
      {
        title: "🏆 Capstone Projects",
        items: [
          "✅ Full E-commerce Android + Backend app",
          "✅ Social Media App with realtime features",
          "✅ Fitness Tracker with REST APIs + Notifications",
          "✅ Financial Management App with Charts/Reports"
        ]
      }
    ]
  }
];