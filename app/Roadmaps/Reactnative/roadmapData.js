// Roadmap Data
 export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level (0–2 months)",
    description: "Learn the fundamentals of React Native and JavaScript/React",
    color: "bg-green-500",
    estimatedTime: "0–2 months",
    sections: [
      {
        title: "Core Skills",
        items: [
          "JavaScript/ES6+: let/const, arrow functions, async/await, promises, destructuring",
          "React basics: JSX, props, state, components, hooks (useState, useEffect)",
          "Core components: View, Text, Image, ScrollView, FlatList",
          "Styling with StyleSheet + Flexbox",
          "Handling user input: TextInput, TouchableOpacity, Button",
          "Debugging with React Native Debugger/Flipper"
        ]
      },
      {
        title: "Projects",
        items: [
          "Counter App — Learn state & hooks",
          "To-do App — CRUD with FlatList",
          "Weather App — Fetch API + display UI"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Core",
    subtitle: "Intermediate Level (2–4 months)",
    description: "Build real-world features, navigation, and API integration",
    color: "bg-orange-500",
    estimatedTime: "2–4 months",
    sections: [
      {
        title: "Core Skills",
        items: [
          "Navigation: React Navigation v7 (Stack, Tab, Drawer, Nested Navigators)",
          "Data Fetching: Fetch, Axios, React Query (TanStack)",
          "Forms: Formik + Yup OR React Hook Form",
          "Async Storage: Local storage for persisting small data",
          "Context API & Hooks: Global state management basics",
          "UI Libraries: React Native Paper / NativeBase / ShadCN for RN (experimental)"
        ]
      },
      {
        title: "Projects",
        items: [
          "Movie App — API integration with search",
          "Notes App — CRUD + AsyncStorage",
          "Recipe App — Navigation + API + forms"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "State Management & Data Layer",
    subtitle: "Intermediate-Advanced (4–6 months)",
    description: "Scale apps with structured data management",
    color: "bg-blue-500",
    estimatedTime: "4–6 months",
    sections: [
      {
        title: "State Management Options",
        items: [
          "Redux Toolkit (standard in industry)",
          "Zustand/Recoil (lightweight options)",
          "TanStack Query for server state"
        ]
      },
      {
        title: "Data Persistence & API Layer",
        items: [
          "SQLite, WatermelonDB, Realm for local database",
          "REST + GraphQL (Apollo/Relay) for API integration"
        ]
      },
      {
        title: "Projects",
        items: [
          "Chat App — Redux + WebSocket/Socket.io",
          "E-commerce App — API, Redux Toolkit, persist cart/wishlist"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced React Native",
    subtitle: "Advanced Level (6–9 months)",
    description: "Master RN ecosystem, performance, and animations",
    color: "bg-purple-500",
    estimatedTime: "6–9 months",
    sections: [
      {
        title: "Performance Optimization",
        items: [
          "Avoid unnecessary re-renders (memo, useCallback, useMemo)",
          "Virtualized lists & FlatList optimizations",
          "Hermes engine usage"
        ]
      },
      {
        title: "Animations & Advanced Features",
        items: [
          "React Native Reanimated v3",
          "Gesture Handler",
          "Shared transitions",
          "Offline-first Apps: Caching strategies with React Query + SQLite/Realm",
          "Deep Linking & Universal Links",
          "Push Notifications: FCM / OneSignal"
        ]
      },
      {
        title: "Projects",
        items: [
          "Fitness Tracker App — Charts + offline data sync",
          "Finance App — Reanimated animations, charts, push notifications"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Native Modules & Integrations",
    subtitle: "Expert Level (9–12 months)",
    description: "Learn to integrate with native Android/iOS modules",
    color: "bg-yellow-500",
    estimatedTime: "9–12 months",
    sections: [
      {
        title: "Bridging Native Code",
        items: [
          "Write custom native modules in Java/Kotlin (Android)",
          "Write custom native modules in Swift/Objective-C (iOS)"
        ]
      },
      {
        title: "Device Features Integration",
        items: [
          "Camera (Expo Camera / react-native-vision-camera)",
          "Location (react-native-geolocation-service)",
          "Sensors, Bluetooth, biometrics",
          "File System & Media: react-native-fs, react-native-video",
          "Maps: react-native-maps, Mapbox"
        ]
      },
      {
        title: "Projects",
        items: [
          "Ride Sharing Clone (Uber Lite) — Maps, geolocation, sockets",
          "Instagram Clone — Camera, media upload, likes/comments (Firebase)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Production-Ready",
    subtitle: "Production Level (12–15 months)",
    description: "Learn CI/CD, testing, app distribution, scaling for real users",
    color: "bg-red-500",
    estimatedTime: "12–15 months",
    sections: [
      {
        title: "Testing & Quality Assurance",
        items: [
          "Unit testing: Jest + React Native Testing Library",
          "E2E testing: Detox"
        ]
      },
      {
        title: "App Deployment & Security",
        items: [
          "iOS: App Store Connect, provisioning profiles",
          "Android: Play Store, signing configs",
          "CI/CD: GitHub Actions / Fastlane / Bitrise",
          "OTA updates with Expo EAS/CodePush",
          "Secure storage (Keychain/Keystore)",
          "Environment variables (react-native-config)",
          "API keys protection"
        ]
      },
      {
        title: "Projects",
        items: [
          "Banking App Clone — Secure login, transactions, encryption",
          "Video Streaming App — Secure API, subscriptions, payments"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Industry-Ready",
    subtitle: "Senior-Level (15–18 months)",
    description: "Become a full React Native engineer who can deliver production apps at scale",
    color: "bg-indigo-500",
    estimatedTime: "15–18 months",
    sections: [
      {
        title: "Scalable Architecture",
        items: [
          "Feature-based folder structure",
          "Dependency injection",
          "Monorepos (Turborepo / Nx)"
        ]
      },
      {
        title: "Advanced Topics & Team Practices",
        items: [
          "Microfrontends in RN",
          "App performance profiling (Flipper, Systrace)",
          "Native performance tuning",
          "Code reviews, PRs, Git branching strategies",
          "Agile/Scrum practices"
        ]
      },
      {
        title: "Capstone Projects",
        items: [
          "Full E-commerce App (Amazon Clone) — Auth, payments, push notifications, animations, CI/CD",
          "Social Media Super App — Messaging, stories, reels, maps, wallet integration"
        ]
      }
    ]
  }
];

// Learning resources and recommendations
const learningResources = {
  books: [
    "React Native in Action",
    "Fullstack React Native",
    "Learning React Native",
    "React Native Cookbook"
  ],
  platforms: [
    "Official React Native Docs",
    "React Navigation Docs",
    "Expo Documentation",
    "Udemy (Mosh Hamedani, Stephen Grider)",
    "FrontendMasters",
    "YouTube Channels: CodeWithChris, Net Ninja, Programming with Mash"
  ],
  practiceProjects: [
    "Weather App with location services",
    "Social media app with image sharing",
    "E-commerce app with payment integration",
    "Real-time chat application",
    "Food delivery app with maps integration"
  ]
};

// Popular tech stacks and tools
const techStacks = {
  expo: {
    name: "Expo Managed Workflow",
    tools: ["Expo CLI", "Expo SDK", "EAS Build", "EAS Update"],
    databases: ["SQLite", "Firebase", "Supabase"],
    stateManagement: ["Redux Toolkit", "Zustand", "Context API"]
  },
  bareCLI: {
    name: "React Native CLI (Bare Workflow)",
    tools: ["React Native CLI", "Metro", "Flipper", "Fastlane"],
    databases: ["Realm", "WatermelonDB", "SQLite", "Firebase"],
    stateManagement: ["Redux Toolkit", "MobX", "Recoil"]
  },
  crossPlatform: {
    name: "Cross-Platform Integration",
    tools: ["CodePush", "App Center", "Firebase", "OneSignal"],
    testing: ["Jest", "Detox", "Appium"],
    deployment: ["GitHub Actions", "Bitrise", "CircleCI"]
  }
};

