"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Smartphone } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const AndroidMasterRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level (0-2 months)",
      description: "Learn programming basics, Android ecosystem, and core tools",
      color: "bg-green-500",
      sections: [
        {
          title: "Programming Fundamentals",
          items: [
            "Kotlin → Variables, data types, loops, functions, OOP, collections, null safety",
            "Language choice: Kotlin (official Android language, Google-first choice)",
            "Concepts: Object-Oriented Programming principles",
            "Resources: Kotlin Docs (kotlinlang.org), Kotlin for Android Developers course"
          ]
        },
        {
          title: "Core Tools Setup",
          items: [
            "Install Android Studio (latest stable version)",
            "Learn Gradle basics (build system fundamentals)",
            "Setup Emulator and practice with physical devices",
            "Version control with Git and GitHub"
          ]
        },
        {
          title: "Android Basics",
          items: [
            "Activity & Fragment lifecycle understanding",
            "Views, Layouts (ConstraintLayout, LinearLayout)",
            "Event handling (buttons, text input, touch events)",
            "Intents (explicit & implicit navigation)",
            "Basic resource handling (strings, drawables, themes)"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Calculator App with basic UI interactions",
            "Quiz App with multiple activities",
            "Unit Converter with input validation"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Modern Android Development",
      subtitle: "Intermediate Level (2-4 months)",
      description: "Learn modern UI development and key Android APIs",
      color: "bg-orange-500",
      sections: [
        {
          title: "Jetpack Compose (UI Framework)",
          items: [
            "Composables, State & Recomposition concepts",
            "Layouts (Column, Row, Box, LazyColumn)",
            "Material3 Components and design system",
            "Theming & Dark Mode implementation",
            "Navigation with Navigation Compose"
          ]
        },
        {
          title: "App Architecture Basics",
          items: [
            "MVVM (Model–View–ViewModel) pattern",
            "ViewModel, LiveData, StateFlow fundamentals",
            "Repository pattern for data management",
            "Separation of concerns and clean code practices"
          ]
        },
        {
          title: "Core Android APIs",
          items: [
            "RecyclerView (if not using Compose lists)",
            "SharedPreferences & DataStore for local storage",
            "Room Database (SQLite wrapper)",
            "Permissions (runtime permission handling)",
            "Services & Broadcast Receivers (basics)"
          ]
        },
        {
          title: "Modern Development Projects",
          items: [
            "To-Do List App (Room + Compose UI)",
            "Notes App with MVVM architecture",
            "Weather App (API integration + Compose UI)"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Intermediate Android",
      subtitle: "Advanced Level (4-7 months)",
      description: "Build scalable apps with networking, dependency injection, and testing",
      color: "bg-blue-500",
      sections: [
        {
          title: "Networking & Async Operations",
          items: [
            "Retrofit + OkHttp for API communication",
            "Coroutines for asynchronous tasks",
            "Handling JSON with Moshi/Gson parsers",
            "Error handling and network state management"
          ]
        },
        {
          title: "Dependency Injection",
          items: [
            "Hilt (recommended DI framework)",
            "Understanding Scopes (Activity, Fragment, ViewModel)",
            "Providing and injecting dependencies",
            "Module organization and best practices"
          ]
        },
        {
          title: "Advanced Storage & Features",
          items: [
            "Room + Flow for reactive database operations",
            "Offline caching strategies and sync",
            "WorkManager for background tasks",
            "Paging 3 for infinite lists and large datasets"
          ]
        },
        {
          title: "Testing & Navigation",
          items: [
            "Unit Testing with JUnit, Mockito",
            "Espresso for UI automated tests",
            "Compose UI testing framework",
            "Navigation Graph + Deep Links implementation"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "News App (API + Paging 3 + Hilt architecture)",
            "Chat App (Firebase Realtime Database/Firestore)",
            "Expense Tracker with data visualization graphs"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Android Engineering",
      subtitle: "Advanced → Expert Level (7-12 months)",
      description: "Become industry-ready with performance, scalability, and best practices",
      color: "bg-purple-500",
      sections: [
        {
          title: "Performance Optimization",
          items: [
            "Memory leaks detection (LeakCanary)",
            "Profiling (CPU, memory, network)",
            "Optimize recomposition in Jetpack Compose",
            "App startup time and battery optimization"
          ]
        },
        {
          title: "Advanced System APIs",
          items: [
            "CameraX for camera functionality",
            "Media APIs for audio/video processing",
            "Bluetooth & NFC integration basics",
            "Location services & Google Maps SDK"
          ]
        },
        {
          title: "Security & Privacy",
          items: [
            "Encrypted SharedPreferences & Room database",
            "Secure API keys (local.properties + NDK)",
            "Biometrics API (fingerprint, face unlock)",
            "Data protection and privacy compliance"
          ]
        },
        {
          title: "App Distribution & CI/CD",
          items: [
            "Play Store publishing and optimization",
            "App Bundles (AAB) and dynamic delivery",
            "Internal Testing & Staged Rollouts",
            "GitHub Actions/GitLab CI for automation"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Fitness Tracker (sensors + Google Fit integration)",
            "E-commerce App (Cart, Payment Gateway, Firebase Auth)",
            "Full-featured Social Media Clone (Posts, Likes, Notifications)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Industry-Ready",
      subtitle: "Professional Level (12+ months)",
      description: "Work as a professional Android Engineer with advanced skills",
      color: "bg-red-500",
      sections: [
        {
          title: "Master Jetpack Libraries",
          items: [
            "Compose Multiplatform (KMP) for cross-platform",
            "Advanced WorkManager, Paging 3, Navigation",
            "DataStore, App Startup, Benchmarking",
            "Glance for Android widgets development"
          ]
        },
        {
          title: "Advanced Architecture Topics",
          items: [
            "Modularization (multi-module projects)",
            "Clean Architecture (Use Cases, Repository, Entities)",
            "Design Patterns (Factory, Singleton, Observer)",
            "Reactive Programming (Kotlin Flow, RxJava)"
          ]
        },
        {
          title: "Cross-Platform Knowledge",
          items: [
            "Kotlin Multiplatform (KMP) for iOS & Desktop",
            "Flutter/React Native basics for versatility",
            "Understanding of cross-platform trade-offs",
            "Platform-specific optimizations"
          ]
        },
        {
          title: "System Design for Mobile",
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
      subtitle: "Senior Android Developer",
      description: "Lead Android development teams and architect complex systems",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Leadership & Advanced Skills",
          items: [
            "Interview Preparation & DSA in Kotlin",
            "System design case studies (mobile-specific)",
            "Code review and mentoring practices",
            "Technical documentation and knowledge sharing"
          ]
        },
        {
          title: "Industry Portfolio Requirements",
          items: [
            "3+ polished apps published on Play Store",
            "GitHub portfolio with clean, documented code",
            "UI-rich, API-powered, offline-ready applications",
            "Demonstration of scalable architecture patterns"
          ]
        },
        {
          title: "Technical Expertise Stack",
          items: [
            "Jetpack Compose + MVVM + Hilt mastery",
            "Coroutines + Retrofit + Room proficiency",
            "CI/CD pipeline setup and maintenance",
            "Clean Architecture & comprehensive testing"
          ]
        },
        {
          title: "Final Deliverables",
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
                            className="bg-white rounded-lg border-2 border-green-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-green-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-green-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📱 Congratulations! You're Android Development Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Android Developer Mastery Roadmap and are now ready to build professional Android applications and lead development teams.
              </p>
              <div className="bg-white p-4 rounded-lg border border-green-300 mt-4">
                <h3 className="font-semibold text-green-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribute to open-source Android projects (AOSP, popular libraries)</li>
                  <li>• Publish 3+ polished apps on Google Play Store</li>
                  <li>• Create technical blogs and tutorials about your projects</li>
                  <li>• Stay updated with Android Developer Blog and I/O conferences</li>
                  <li>• Build a strong GitHub portfolio showcasing clean architecture</li>
                </ul>
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
            <Smartphone className="text-green-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Android <span className="text-green-600">Developer Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
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
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
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
                  ? 'bg-green-600 text-white'
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
                  ? 'bg-green-500 text-white'
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
                  ? 'bg-green-500 text-white'
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

export default AndroidMasterRoadmap;