import React from 'react';


export default function ReactNativeRoadmap2025() {
  const roadmap = [
    {
      title: "Foundations",
      subtitle: "Core Prerequisites",
      steps: [
        {
          step: "Step - 1",
          topic: "JavaScript (ES6+)",
          category: "Language Fundamentals",
          details: "Variables (let, const), scopes, arrow functions, higher-order functions, modules, promises, async/await, closures, prototypes, event loop, 'this' keyword."
        },
        {
          step: "Step - 2",
          topic: "TypeScript",
          category: "Strong Typing",
          details: "Interfaces, types, generics, utility types (Partial, Pick, Omit, Record), type safety in props & hooks."
        },
        {
          step: "Step - 3",
          topic: "React Fundamentals",
          category: "React Basics",
          details: "JSX, Virtual DOM, components (functional/class), state, props, lifecycle methods, hooks (useState, useEffect, useRef, useContext, useReducer), context API, rendering optimizations."
        }
      ],
    },
    {
      title: "React Native Basics",
      subtitle: "Core Concepts",
      steps: [
        {
          step: "Step - 4",
          topic: "Core RN Components",
          category: "UI Building Blocks",
          details: "View, Text, ScrollView, SafeAreaView, FlatList, SectionList, styling with Flexbox, StyleSheet, Tailwind RN, Dimensions, PixelRatio, Platform APIs."
        },
        {
          step: "Step - 5",
          topic: "Navigation",
          category: "App Flow",
          details: "React Navigation (Stack, Bottom Tabs, Drawer), deep linking, navigation guards."
        },
        {
          step: "Step - 6",
          topic: "Networking & APIs",
          category: "Data Handling",
          details: "Fetch, Axios, REST APIs, error handling, loading states, caching (React Query / TanStack)."
        },
        {
          step: "Step - 7",
          topic: "Forms & Validation",
          category: "User Input",
          details: "Controlled/uncontrolled inputs, Formik, React Hook Form, Yup validation."
        }
      ],
    },
    {
      title: "State Management",
      subtitle: "App Data Handling",
      steps: [
        {
          step: "Step - 8",
          topic: "Local State",
          category: "React Hooks",
          details: "useState, useReducer."
        },
        {
          step: "Step - 9",
          topic: "Global State",
          category: "Advanced State",
          details: "Context API, Redux Toolkit, Zustand, Jotai, Recoil."
        },
        {
          step: "Step - 10",
          topic: "Async Storage",
          category: "Persistence",
          details: "Secure local storage with AsyncStorage/MMKV."
        }
      ],
    },
    {
      title: "Advanced React Native",
      subtitle: "Performance & Native Features",
      steps: [
        {
          step: "Step - 11",
          topic: "Animations",
          category: "User Experience",
          details: "Reanimated v3, Gesture Handler, Lottie animations."
        },
        {
          step: "Step - 12",
          topic: "Performance",
          category: "Optimization",
          details: "FlatList optimizations, avoiding re-renders, Hermes engine, profiling (Flipper, Perf Monitor)."
        },
        {
          step: "Step - 13",
          topic: "Native Modules & Bridges",
          category: "Native Integration",
          details: "Bridging with Swift/Java, device APIs (Camera, GPS, Bluetooth), Expo Modules."
        },
        {
          step: "Step - 14",
          topic: "Offline First",
          category: "Resilient Apps",
          details: "AsyncStorage/MMKV, SQLite, WatermelonDB, Realm, Redux Persist."
        }
      ],
    },
    {
      title: "Industry-Ready Features",
      subtitle: "Real-World Integrations",
      steps: [
        {
          step: "Step - 15",
          topic: "Authentication & Security",
          category: "User Access",
          details: "Firebase Auth, Supabase, Auth0, JWT, secure storage, biometric auth (FaceID, TouchID)."
        },
        {
          step: "Step - 16",
          topic: "Push Notifications",
          category: "User Engagement",
          details: "FCM, OneSignal, Expo Notifications."
        },
        {
          step: "Step - 17",
          topic: "File Handling",
          category: "Media",
          details: "Image/file upload, Image Picker, Camera, Firebase/AWS S3 storage."
        },
        {
          step: "Step - 18",
          topic: "Payments",
          category: "Monetization",
          details: "Stripe SDK, Razorpay, PayPal SDK."
        },
        {
          step: "Step - 19",
          topic: "Maps & Location",
          category: "Geo Features",
          details: "React Native Maps, Geolocation API, Google Maps SDK."
        }
      ],
    },
    {
      title: "Backend & Integration",
      subtitle: "Connecting to Server",
      steps: [
        {
          step: "Step - 20",
          topic: "Node.js & Express",
          category: "REST APIs",
          details: "Basic CRUD APIs, middleware, authentication."
        },
        {
          step: "Step - 21",
          topic: "GraphQL",
          category: "Flexible APIs",
          details: "Apollo, URQL, querying, mutations."
        },
        {
          step: "Step - 22",
          topic: "Firebase & Supabase",
          category: "BAAS",
          details: "Firestore, Realtime DB, instant APIs with Supabase/Hasura."
        },
        {
          step: "Step - 23",
          topic: "Realtime Apps",
          category: "WebSockets",
          details: "Socket.IO for chat and live updates."
        }
      ],
    },
    {
      title: "Testing & Debugging",
      subtitle: "App Reliability",
      steps: [
        {
          step: "Step - 24",
          topic: "Testing",
          category: "Quality Assurance",
          details: "Jest, React Native Testing Library, Detox for E2E."
        },
        {
          step: "Step - 25",
          topic: "Debugging",
          category: "Diagnostics",
          details: "Flipper, React DevTools, performance monitoring."
        }
      ],
    },
    {
      title: "CI/CD & Deployment",
      subtitle: "Production Delivery",
      steps: [
        {
          step: "Step - 26",
          topic: "Deployment",
          category: "App Stores",
          details: "App signing, Play Store & App Store deployment."
        },
        {
          step: "Step - 27",
          topic: "CI/CD",
          category: "Automation",
          details: "Expo EAS builds, GitHub Actions, Bitrise, Fastlane."
        },
        {
          step: "Step - 28",
          topic: "OTA Updates",
          category: "Continuous Delivery",
          details: "Expo Updates, CodePush for instant updates."
        }
      ],
    },
    {
      title: "System Design & Scalability",
      subtitle: "Enterprise Ready",
      steps: [
        {
          step: "Step - 29",
          topic: "Architecture",
          category: "Code Organization",
          details: "Monorepos (Nx, Turborepo), modular feature-based folders."
        },
        {
          step: "Step - 30",
          topic: "Monitoring",
          category: "Error Handling",
          details: "Sentry, Firebase Crashlytics, logging & monitoring."
        }
      ],
    },
    {
      title: "Extra Skills",
      subtitle: "Industry Best Practices",
      steps: [
        {
          step: "Step - 31",
          topic: "Version Control",
          category: "Collaboration",
          details: "Git, GitHub, GitLab."
        },
        {
          step: "Step - 32",
          topic: "Agile & Clean Code",
          category: "Best Practices",
          details: "Agile/Scrum, SOLID principles, mobile-specific UX patterns."
        }
      ],
    }
  ];

  const projectSuggestions = [
    { level: "Beginner", project: "Chat App with Firebase + Push Notifications" },
    { level: "Intermediate", project: "Food Delivery App with Maps & Payments" },
    { level: "Intermediate", project: "Fitness Tracker with Graphs & Wearable Integration" },
    { level: "Advanced", project: "E-commerce App with Cart, Payments, Auth, Notifications" },
    { level: "Advanced", project: "Social Media App with Infinite Scroll & Video Uploads" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-pink-500 to-pink-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx % colors.length];
  };

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📱 32 Essential Steps • 🎯 9 Skill Levels • 🚀 Industry Ready</span>
            
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx}>
              <div className="flex items-center mb-6">
                <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                  <div className="font-bold">{section.title}</div>
                  <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
              </div>

              <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                {section.steps.map((item, stepIdx) => (
                  <div key={stepIdx} className="relative group">
                    <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-indigo-500 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {item.step}
                        </div>
                        <div className="text-xs text-gray-500 bg-indigo-50 px-2 py-1 rounded">
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
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏗️ React Native Practice Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm sm:text-base px-4">📱 Master React Native 2025 — build cross-platform, scalable, and industry-ready mobile apps!</p>
        </div>
      </div>
    </main>
  );
}
