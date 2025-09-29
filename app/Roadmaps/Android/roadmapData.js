          // Android Development Roadmap data structured similarly to AI/ML format
          export const phases = [
            {
              id: 1,
              title: "Foundations",
              subtitle: "Beginner Level",
              description: "Build strong programming, Android ecosystem, and core tools knowledge.",
              color: "bg-green-500",
              sections: [
                {
                  title: "💻 Programming Fundamentals",
                  items: [
                    "Kotlin → Variables, data types, loops, functions, OOP, collections, null safety",
                    "Language choice: Kotlin (official Android language, Google-first choice)",
                    "Concepts: Object-Oriented Programming principles",
                    "Resources: Kotlin Docs (kotlinlang.org), Kotlin for Android Developers course"
                  ]
                },
                {
                  title: "🛠️ Core Tools Setup",
                  items: [
                    "Install Android Studio (latest stable version)",
                    "Learn Gradle basics (build system fundamentals)",
                    "Setup Emulator and practice with physical devices",
                    "Version control with Git and GitHub"
                  ]
                },
                {
                  title: "📱 Android Basics",
                  items: [
                    "Activity & Fragment lifecycle understanding",
                    "Views, Layouts (ConstraintLayout, LinearLayout)",
                    "Event handling (buttons, text input, touch events)",
                    "Intents (explicit & implicit navigation)",
                    "Basic resource handling (strings, drawables, themes)"
                  ]
                },
                {
                  title: "🎯 Foundation Projects",
                  items: [
                    "✅ Calculator App with basic UI interactions",
                    "✅ Quiz App with multiple activities",
                    "✅ Unit Converter with input validation",
                    "Practice building simple interactive apps"
                  ]
                }
              ]
            },
            {
              id: 2,
              title: "Modern Android Development",
              subtitle: "Intermediate Level",
              description: "Master modern UI development and key Android APIs.",
              color: "bg-orange-500",
              sections: [
                {
                  title: "🎨 Jetpack Compose (UI Framework)",
                  items: [
                    "Composables, State & Recomposition concepts",
                    "Layouts (Column, Row, Box, LazyColumn)",
                    "Material3 Components and design system",
                    "Theming & Dark Mode implementation",
                    "Navigation with Navigation Compose"
                  ]
                },
                {
                  title: "🏗️ App Architecture Basics",
                  items: [
                    "MVVM (Model–View–ViewModel) pattern",
                    "ViewModel, LiveData, StateFlow fundamentals",
                    "Repository pattern for data management",
                    "Separation of concerns and clean code practices"
                  ]
                },
                {
                  title: "⚡ Core Android APIs",
                  items: [
                    "RecyclerView (if not using Compose lists)",
                    "SharedPreferences & DataStore for local storage",
                    "Room Database (SQLite wrapper)",
                    "Permissions (runtime permission handling)",
                    "Services & Broadcast Receivers (basics)"
                  ]
                },
                {
                  title: "🚀 Modern Development Projects",
                  items: [
                    "✅ To-Do List App (Room + Compose UI)",
                    "✅ Notes App with MVVM architecture",
                    "✅ Weather App (API integration + Compose UI)",
                    "Build apps with modern architecture patterns"
                  ]
                }
              ]
            },
            {
              id: 3,
              title: "Intermediate Android",
              subtitle: "Advanced Level",
              description: "Build scalable apps with networking, dependency injection, and testing.",
              color: "bg-blue-500",
              sections: [
                {
                  title: "🌐 Networking & Async Operations",
                  items: [
                    "Retrofit + OkHttp for API communication",
                    "Coroutines for asynchronous tasks",
                    "Handling JSON with Moshi/Gson parsers",
                    "Error handling and network state management"
                  ]
                },
                {
                  title: "💉 Dependency Injection",
                  items: [
                    "Hilt (recommended DI framework)",
                    "Understanding Scopes (Activity, Fragment, ViewModel)",
                    "Providing and injecting dependencies",
                    "Module organization and best practices"
                  ]
                },
                {
                  title: "💾 Advanced Storage & Features",
                  items: [
                    "Room + Flow for reactive database operations",
                    "Offline caching strategies and sync",
                    "WorkManager for background tasks",
                    "Paging 3 for infinite lists and large datasets"
                  ]
                },
                {
                  title: "🧪 Testing & Navigation",
                  items: [
                    "Unit Testing with JUnit, Mockito",
                    "Espresso for UI automated tests",
                    "Compose UI testing framework",
                    "Navigation Graph + Deep Links implementation"
                  ]
                },
                {
                  title: "🎯 Intermediate Projects",
                  items: [
                    "✅ News App (API + Paging 3 + Hilt architecture)",
                    "✅ Chat App (Firebase Realtime Database/Firestore)",
                    "✅ Expense Tracker with data visualization graphs",
                    "Complex apps with professional architecture"
                  ]
                }
              ]
            },
            {
              id: 4,
              title: "Advanced Android Engineering",
              subtitle: "Advanced Level",
              description: "Become industry-ready with performance, scalability, and best practices.",
              color: "bg-purple-500",
              sections: [
                {
                  title: "⚡ Performance Optimization",
                  items: [
                    "Memory leaks detection (LeakCanary)",
                    "Profiling (CPU, memory, network)",
                    "Optimize recomposition in Jetpack Compose",
                    "App startup time and battery optimization"
                  ]
                },
                {
                  title: "📷 Advanced System APIs",
                  items: [
                    "CameraX for camera functionality",
                    "Media APIs for audio/video processing",
                    "Bluetooth & NFC integration basics",
                    "Location services & Google Maps SDK"
                  ]
                },
                {
                  title: "🔒 Security & Privacy",
                  items: [
                    "Encrypted SharedPreferences & Room database",
                    "Secure API keys (local.properties + NDK)",
                    "Biometrics API (fingerprint, face unlock)",
                    "Data protection and privacy compliance"
                  ]
                },
                {
                  title: "🚀 App Distribution & CI/CD",
                  items: [
                    "Play Store publishing and optimization",
                    "App Bundles (AAB) and dynamic delivery",
                    "Internal Testing & Staged Rollouts",
                    "GitHub Actions/GitLab CI for automation"
                  ]
                },
                {
                  title: "🎯 Advanced Projects",
                  items: [
                    "✅ Fitness Tracker (sensors + Google Fit integration)",
                    "✅ E-commerce App (Cart, Payment Gateway, Firebase Auth)",
                    "✅ Full-featured Social Media Clone (Posts, Likes, Notifications)",
                    "Production-quality applications"
                  ]
                }
              ]
            },
            {
              id: 5,
              title: "Industry-Ready",
              subtitle: "Professional Level",
              description: "Work as a professional Android Engineer with advanced skills.",
              color: "bg-red-500",
              sections: [
                {
                  title: "📚 Master Jetpack Libraries",
                  items: [
                    "Compose Multiplatform (KMP) for cross-platform",
                    "Advanced WorkManager, Paging 3, Navigation",
                    "DataStore, App Startup, Benchmarking",
                    "Glance for Android widgets development"
                  ]
                },
                {
                  title: "🏛️ Advanced Architecture Topics",
                  items: [
                    "Modularization (multi-module projects)",
                    "Clean Architecture (Use Cases, Repository, Entities)",
                    "Design Patterns (Factory, Singleton, Observer)",
                    "Reactive Programming (Kotlin Flow, RxJava)"
                  ]
                },
                {
                  title: "🌍 Cross-Platform Knowledge",
                  items: [
                    "Kotlin Multiplatform (KMP) for iOS & Desktop",
                    "Flutter/React Native basics for versatility",
                    "Understanding of cross-platform trade-offs",
                    "Platform-specific optimizations"
                  ]
                },
                {
                  title: "📐 System Design for Mobile",
                  items: [
                    "Scaling apps for millions of users",
                    "Offline-first architecture approach",
                    "API design & backend integration",
                    "Mobile-specific system design patterns"
                  ]
                }
              ]
            },
            {
              id: 6,
              title: "Professional Mastery",
              subtitle: "Expert Level",
              description: "Lead Android development teams and architect complex systems.",
              color: "bg-indigo-500",
              sections: [
                {
                  title: "👨‍💼 Leadership & Advanced Skills",
                  items: [
                    "Interview Preparation & DSA in Kotlin",
                    "System design case studies (mobile-specific)",
                    "Code review and mentoring practices",
                    "Technical documentation and knowledge sharing"
                  ]
                },
                {
                  title: "📱 Industry Portfolio Requirements",
                  items: [
                    "3+ polished apps published on Play Store",
                    "GitHub portfolio with clean, documented code",
                    "UI-rich, API-powered, offline-ready applications",
                    "Demonstration of scalable architecture patterns"
                  ]
                },
                {
                  title: "🔧 Technical Expertise Stack",
                  items: [
                    "Jetpack Compose + MVVM + Hilt mastery",
                    "Coroutines + Retrofit + Room proficiency",
                    "CI/CD pipeline setup and maintenance",
                    "Clean Architecture & comprehensive testing"
                  ]
                },
                {
                  title: "🎯 Final Deliverables",
                  items: [
                    "Ability to build secure, scalable, optimized apps",
                    "Knowledge of latest Android development trends",
                    "Experience with app performance monitoring",
                    "Understanding of Play Store policies and optimization"
                  ]
                }
              ]
            }
          ];
