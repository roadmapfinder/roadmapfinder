import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need to know React before learning React Native?",
          answer: "Yes, React knowledge is essential. You should be comfortable with JSX, components, props, state, and hooks (useState, useEffect) before diving into React Native. If you're new to React, spend 2-4 weeks learning React fundamentals first."
        },
        {
          question: "Should I choose Expo or React Native CLI?",
          answer: "Start with Expo for faster development and easier setup. Expo provides a managed workflow with pre-built modules and simplified deployment. Move to React Native CLI (bare workflow) when you need custom native modules, specific native configurations, or more control over the build process. Many developers start with Expo and eject when needed."
        },
        {
          question: "What's the difference between React and React Native?",
          answer: "React is for web development using HTML elements, while React Native is for mobile app development using native components. React Native uses components like <View> instead of <div>, <Text> instead of <p>, and StyleSheet instead of CSS. The core React concepts (components, state, props) remain the same."
        },
        {
          question: "Can I build apps for both iOS and Android with React Native?",
          answer: "Yes! React Native's main advantage is cross-platform development. You write one codebase and it runs on both iOS and Android. While you might need some platform-specific code for advanced features, typically 90-95% of your code can be shared between platforms."
        }
      ]
    },
    {
      category: "Learning Path & Timeline",
      questions: [
        {
          question: "How long does it take to learn React Native?",
          answer: "Timeline depends on your background: If you know React: 3-6 months to build solid apps, 12-15 months to be industry-ready. If you're new to React: Add 2-3 months for React fundamentals first. Consistent daily practice (2-3 hours) is key. Focus on building projects rather than just consuming tutorials."
        },
        {
          question: "Should I learn JavaScript or TypeScript for React Native?",
          answer: "Start with JavaScript if you're a beginner. Once comfortable with React Native basics (after Phase 2), gradually introduce TypeScript. TypeScript provides better code quality, autocomplete, and error catching - highly valued in professional development. Many companies prefer TypeScript for React Native projects."
        },
        {
          question: "What if I skip some phases in the roadmap?",
          answer: "Don't skip phases! Each builds on the previous one. Skipping fundamentals leads to knowledge gaps that hurt you later. However, you can adjust time spent on each phase based on your background. If you're already strong in JavaScript, you might move through Phase 1 faster."
        },
        {
          question: "How much time should I spend on each phase?",
          answer: "The timeline is flexible based on your schedule: Full-time learning (6-8 hours/day): Follow the suggested timeline. Part-time learning (2-3 hours/day): Double the timeline. Weekend learning: Triple the timeline. Focus on understanding concepts deeply rather than rushing through phases."
        }
      ]
    },
    {
      category: "Technical Decisions",
      questions: [
        {
          question: "Which state management solution should I use?",
          answer: "Start simple and scale up: Phase 1-2: React's built-in state (useState, useReducer) and Context API. Phase 3+: Redux Toolkit (industry standard) for complex apps. Alternatives: Zustand (lightweight), Recoil (experimental). For server state: TanStack Query (React Query) is excellent for API data management."
        },
        {
          question: "Should I learn Redux or Context API for state management?",
          answer: "Learn both, but in order: Start with Context API for simple global state. Then learn Redux Toolkit for complex applications. Context API is great for theme, auth, or simple shared state. Redux excels in large apps with complex state logic, time-travel debugging, and predictable state updates."
        },
        {
          question: "Which database should I use for local storage?",
          answer: "Depends on your needs: AsyncStorage: Simple key-value storage, good for settings/preferences. SQLite: Relational data, complex queries, good performance. Realm: Object database, great for complex relationships and offline-first apps. WatermelonDB: High-performance, built for scale. Start with AsyncStorage for simple needs, then upgrade as your app grows."
        },
        {
          question: "React Navigation vs other navigation libraries?",
          answer: "React Navigation is the standard and recommended choice. It's actively maintained, well-documented, and supports all navigation patterns (stack, tab, drawer). Other options like React Native Navigation offer native performance but are harder to implement. Stick with React Navigation unless you have specific performance requirements."
        }
      ]
    },
    {
      category: "Development & Deployment",
      questions: [
        {
          question: "Do I need a Mac to develop React Native apps?",
          answer: "For Android development: No, you can use Windows, Mac, or Linux. For iOS development: Yes, you need a Mac for building and testing iOS apps. However, you can develop most of your app on any platform and test iOS functionality later. Expo Go app allows iOS testing without a Mac during development."
        },
        {
          question: "How do I test my React Native apps?",
          answer: "Multiple testing approaches: Development: Expo Go app or device simulators (iOS Simulator, Android Emulator). Physical devices: USB debugging for real device testing. Automated testing: Jest for unit tests, React Native Testing Library for component tests, Detox for E2E testing. Always test on both platforms before release."
        },
        {
          question: "How do I deploy React Native apps to app stores?",
          answer: "Deployment process: iOS: Xcode + Apple Developer Account ($99/year) + App Store Connect. Android: Android Studio + Google Play Developer Account ($25 one-time). Tools: Fastlane for automation, EAS Build (Expo) for cloud builds, CodePush for OTA updates. Learn the manual process first, then automate with tools."
        },
        {
          question: "What about app performance and optimization?",
          answer: "Performance best practices: Use FlatList for large lists, implement lazy loading. Optimize images (proper sizes, formats). Use memo, useCallback, useMemo to prevent unnecessary re-renders. Profile with Flipper or React DevTools. Consider Hermes engine for better startup performance. Learn these concepts in Phase 4 of the roadmap."
        }
      ]
    },
    {
      category: "Career & Industry",
      questions: [
        {
          question: "What's the job market like for React Native developers?",
          answer: "Strong demand exists, especially for developers who can: Build cross-platform apps efficiently, work with both React and native code, understand mobile app deployment and optimization. Salary ranges from $70k-$150k+ depending on experience and location. Many companies choose React Native for cost-effective mobile development."
        },
        {
          question: "Should I learn native iOS/Android development too?",
          answer: "Not required initially, but beneficial long-term: Start with React Native and JavaScript/TypeScript. Learn native development (Swift/iOS, Kotlin/Android) when you need custom modules or advanced native features. Understanding native concepts helps debug issues and optimize performance. Many senior RN developers know some native development."
        },
        {
          question: "How do I build a portfolio for React Native jobs?",
          answer: "Build diverse projects showing different skills: Phase 1-2: Simple apps (todo, weather) showing basics. Phase 3-4: Complex apps (e-commerce, social) with state management and APIs. Phase 5-6: Apps with native features (camera, maps, notifications). Phase 7: Production-ready apps with proper testing, deployment. Open-source contributions and detailed README files help."
        },
        {
          question: "What companies use React Native?",
          answer: "Many major companies use React Native: Facebook, Instagram, Airbnb (previously), UberEats, Pinterest, Shopify, Discord, Microsoft (partially). Many startups choose RN for rapid cross-platform development. The ecosystem is mature and production-ready for most app types."
        }
      ]
    },
    {
      category: "Common Challenges",
      questions: [
        {
          question: "How do I handle different screen sizes and orientations?",
          answer: "Use flexible layouts: Flexbox for responsive designs, Dimensions API for screen measurements, responsive units (percentages instead of fixed pixels). Libraries like react-native-super-grid help with responsive grids. Test on multiple device sizes and orientations throughout development."
        },
        {
          question: "What about app security and sensitive data?",
          answer: "Security best practices: Use react-native-keychain for sensitive storage, never store secrets in plain text or AsyncStorage. Implement certificate pinning for API security, use environment variables for configuration. Enable code obfuscation for production builds. Learn these concepts thoroughly in Phase 6."
        },
        {
          question: "How do I handle offline functionality?",
          answer: "Offline-first approach: Use libraries like react-native-netinfo to detect connectivity. Implement caching with TanStack Query + AsyncStorage/SQLite. Queue actions for when connection returns. Consider libraries like react-native-offline-queue. This is covered extensively in Phase 4."
        },
        {
          question: "What if I get stuck on native modules or platform-specific issues?",
          answer: "Debugging strategies: Check React Native and library documentation first. Use React Native CLI doctor to diagnose common issues. Search GitHub issues for specific error messages. Join React Native communities (Discord, Reddit) for help. For native issues, basic iOS/Android knowledge helps significantly."
        }
      ]
    },
    {
      category: "Advanced Topics",
      questions: [
        {
          question: "When should I consider writing custom native modules?",
          answer: "Write custom modules when: Existing libraries don't meet your needs, you need specific native APIs not available in JavaScript, performance requirements demand native code. This is advanced (Phase 5+). Start by thoroughly exploring existing libraries first - most needs are already covered by the community."
        },
        {
          question: "How important are animations in React Native apps?",
          answer: "Very important for user experience! Smooth animations make apps feel native and professional. React Native Reanimated v3 provides 60fps animations running on UI thread. Learn basic animations in Phase 2-3, advanced animations in Phase 4. Good animations differentiate professional apps from amateur ones."
        },
        {
          question: "What about CodePush and over-the-air updates?",
          answer: "CodePush allows updating JavaScript code without app store approval: Great for bug fixes and small feature updates. Cannot update native code changes. Microsoft CodePush or Expo EAS Update are popular options. Implement in Phase 6 when learning deployment strategies. Very valuable for maintaining production apps."
        },
        {
          question: "How do I scale React Native apps for large teams?",
          answer: "Enterprise strategies: Implement proper project structure (feature-based folders). Use monorepos for multiple related apps. Establish coding standards and ESLint rules. Implement proper testing strategies. Use CI/CD for automated builds and deployments. These advanced topics are covered in Phase 7."
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6">
          Comprehensive answers to the most common questions about learning React Native development.
        </p>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mr-3">
                {category.questions.length}
              </span>
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.questions.map((faq, questionIndex) => {
                const faqId = `${categoryIndex}-${questionIndex}`;
                const isOpen = openFaq === faqId;

                return (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(categoryIndex, questionIndex)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronDown size={20} className="text-blue-500" />
                        ) : (
                          <ChevronRight size={20} className="text-gray-400" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <div className="pt-4">
                          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Quick Tips for Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-blue-600">Learning Strategy</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Build projects, don't just watch tutorials</li>
              <li>• Practice daily, even if just 30 minutes</li>
              <li>• Join React Native communities for help</li>
              <li>• Read official documentation regularly</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-green-600">Development Best Practices</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Test on both iOS and Android regularly</li>
              <li>• Use TypeScript for better code quality</li>
              <li>• Implement proper error handling early</li>
              <li>• Focus on performance from the beginning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Still Need Help?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Official Docs</h4>
            <p className="text-sm text-gray-600">React Native and React Navigation documentation</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Community</h4>
            <p className="text-sm text-gray-600">Discord, Reddit, and Stack Overflow communities</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Practice</h4>
            <p className="text-sm text-gray-600">Build the projects in each phase of the roadmap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;