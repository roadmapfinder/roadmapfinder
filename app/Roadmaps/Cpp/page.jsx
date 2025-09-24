"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Code } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const CPlusPlusProgrammingMasterRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Preparation",
      subtitle: "Pre-C++ Basics (Setup Phase)",
      description: "Prepare your programming mindset and development environment",
      color: "bg-gray-500",
      sections: [
        {
          title: "Essentials",
          items: [
            "Understanding what C++ is: object-oriented, high-level, compiled language",
            "Learn how C++ evolved from C and key differences",
            "Basic concepts of compilation process and object-oriented programming",
            "Setting up proper development workflow and practices"
          ]
        },
        {
          title: "Tools Installation & Setup",
          items: [
            "Compiler: GCC (g++) or Microsoft Visual Studio",
            "IDE/Editor: Visual Studio, CLion, Code::Blocks, or VS Code with C/C++ extensions",
            "Debugger: GDB or integrated debuggers for C++ programs",
            "Version control: Git setup and basic commands"
          ]
        },
        {
          title: "Foundation Resources",
          items: [
            "Book: Programming Principles and Practice Using C++ by Bjarne Stroustrup",
            "Video: Introduction to Object-Oriented Programming concepts",
            "Understanding compilation and linking in C++",
            "Basic command line navigation and project structure"
          ]
        },
        {
          title: "Environment Verification",
          items: [
            "Write and compile your first 'Hello World' C++ program",
            "Test debugger functionality with simple breakpoints",
            "Verify all tools are working correctly together",
            "Setup project directory structure and build system"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Beginner C++",
      subtitle: "Foundation Level (0-2 months)",
      description: "Understand C++ syntax, basic programming logic, and fundamental constructs",
      color: "bg-green-500",
      sections: [
        {
          title: "Basic Syntax & Structure",
          items: [
            "C++ syntax basics: cout, cin, main function, headers",
            "Namespaces: using namespace std and scope resolution",
            "Comments (// and /* */) and basic program structure",
            "Semicolons, braces, and C++ syntax rules"
          ]
        },
        {
          title: "Variables & Data Types",
          items: [
            "int, float, char, double, bool, string data types",
            "Variable declaration, initialization, and constants",
            "Operators: arithmetic, logical, relational, assignment",
            "Type conversion and casting fundamentals"
          ]
        },
        {
          title: "Control Structures",
          items: [
            "Decision making: if, else, switch statements",
            "Loops: for, while, do-while with practical examples",
            "Break and continue statements",
            "Nested control structures and logical flow"
          ]
        },
        {
          title: "Functions & Arrays",
          items: [
            "Function declaration, definition, parameters, return types",
            "Function overloading basics and void functions",
            "Arrays: declaration, initialization, accessing elements",
            "Basic string manipulation and character arrays"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Calculator: Basic arithmetic operations with user input",
            "Number guessing game with random number generation",
            "Simple temperature converter (Celsius/Fahrenheit)",
            "FizzBuzz problem and pattern printing programs"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate C++",
      subtitle: "OOP Fundamentals (2-5 months)",
      description: "Learn Object-Oriented Programming (OOP) and deeper C++ features",
      color: "bg-orange-500",
      sections: [
        {
          title: "Object-Oriented Programming",
          items: [
            "Classes and objects: definition, instantiation, member variables",
            "Constructors & destructors: default, parameterized, copy constructors",
            "Access specifiers: private, public, protected visibility",
            "Member functions, this pointer, and encapsulation principles"
          ]
        },
        {
          title: "Advanced OOP Concepts",
          items: [
            "Static members: static variables and static functions",
            "Operator overloading: arithmetic, comparison, stream operators",
            "Inheritance: single, multiple, multilevel inheritance",
            "Polymorphism: compile-time and runtime polymorphism"
          ]
        },
        {
          title: "Polymorphism & Virtual Functions",
          items: [
            "Virtual functions and virtual destructors",
            "Abstract classes and pure virtual functions",
            "Function overriding vs function overloading",
            "Dynamic binding and late binding concepts"
          ]
        },
        {
          title: "Memory Management & Pointers",
          items: [
            "Pointers in depth: pointer arithmetic, pointer to objects",
            "Dynamic memory allocation: new and delete operators",
            "Memory management best practices",
            "References vs pointers and their applications"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Bank Management System: console-based with OOP design",
            "Student Management System: classes, inheritance, file I/O",
            "Inventory Management System: polymorphism and data persistence",
            "Simple library management system with multiple classes"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced C++",
      subtitle: "Modern Features (5-9 months)",
      description: "Master modern C++, advanced concepts, and efficient programming",
      color: "bg-blue-500",
      sections: [
        {
          title: "Modern C++ Features",
          items: [
            "C++11/14/17 features: auto keyword, nullptr, range-based for loops",
            "Smart pointers: unique_ptr, shared_ptr, weak_ptr",
            "Lambda expressions and functional programming concepts",
            "constexpr, enum class, and type deduction"
          ]
        },
        {
          title: "STL (Standard Template Library)",
          items: [
            "Containers: vector, list, deque, set, map, unordered_map",
            "Iterators: input, output, forward, bidirectional, random access",
            "Algorithms: sort, find, count, transform, accumulate",
            "Functors and their integration with STL algorithms"
          ]
        },
        {
          title: "Templates & Generic Programming",
          items: [
            "Function templates: template parameters and specialization",
            "Class templates: generic classes and template instantiation",
            "Variadic templates and template metaprogramming basics",
            "Template specialization and SFINAE concepts"
          ]
        },
        {
          title: "Exception Handling & File I/O",
          items: [
            "Exception handling: try, catch, throw mechanisms",
            "Custom exception classes and exception safety",
            "File I/O: ifstream, ofstream, fstream operations",
            "Binary file operations and serialization techniques"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Tic-Tac-Toe Game: console-based with AI opponent",
            "Simple chat server/client: networking with sockets",
            "File-based Student Management System: complete CRUD operations",
            "Mini project using STL containers and algorithms"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      subtitle: "Problem Solving (6-12 months)",
      description: "Become proficient in problem-solving and competitive programming skills",
      color: "bg-purple-500",
      sections: [
        {
          title: "Basic Data Structures",
          items: [
            "Arrays and dynamic arrays: implementation and applications",
            "Strings: manipulation, parsing, and pattern matching",
            "Linked Lists: singly, doubly, and circular linked lists",
            "Stacks, Queues, Deques: implementation and use cases"
          ]
        },
        {
          title: "Advanced Data Structures",
          items: [
            "Trees: Binary trees, Binary Search Trees, AVL trees",
            "Graphs: representation, traversal (BFS, DFS)",
            "Heaps and Priority Queues: min-heap, max-heap operations",
            "Hash Tables: collision handling, load factor optimization"
          ]
        },
        {
          title: "Algorithm Design & Analysis",
          items: [
            "Sorting algorithms: QuickSort, MergeSort, HeapSort analysis",
            "Searching algorithms: Binary Search, Ternary Search",
            "Recursion & Backtracking: problem-solving techniques",
            "Dynamic Programming: memoization and tabulation approaches"
          ]
        },
        {
          title: "Complexity Analysis",
          items: [
            "Time complexity: Big O, Omega, Theta notations",
            "Space complexity analysis and optimization",
            "Amortized analysis and worst-case scenarios",
            "Trade-offs between time and space complexity"
          ]
        },
        {
          title: "Algorithm Projects",
          items: [
            "Maze Solver: DFS/BFS implementation with visualization",
            "Library Management System: tree-based search and indexing",
            "Implement STL containers from scratch (Vector, Map)",
            "Competitive programming practice (LeetCode, Codeforces)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "System Programming & Multi-Threading",
      subtitle: "Advanced Systems (8-14 months)",
      description: "Learn how C++ is used in real-world software and high-performance systems",
      color: "bg-red-500",
      sections: [
        {
          title: "Memory & System Programming",
          items: [
            "Stack vs Heap: detailed memory layout understanding",
            "RAII (Resource Acquisition Is Initialization) principles",
            "Memory management: custom allocators and pool allocation",
            "Memory debugging tools: Valgrind, AddressSanitizer"
          ]
        },
        {
          title: "Multi-threading & Concurrency",
          items: [
            "std::thread: thread creation, joining, and lifecycle",
            "Synchronization: mutex, locks, condition variables",
            "Thread safety: atomic operations and lock-free programming",
            "Concurrent data structures and parallel algorithms"
          ]
        },
        {
          title: "Networking & Communication",
          items: [
            "Socket programming: TCP/UDP client-server applications",
            "Network protocols: HTTP, WebSocket implementation",
            "Asynchronous I/O and event-driven programming",
            "Client-server architecture and distributed systems"
          ]
        },
        {
          title: "Design Patterns & Architecture",
          items: [
            "Creational patterns: Singleton, Factory, Builder",
            "Structural patterns: Adapter, Decorator, Facade",
            "Behavioral patterns: Observer, Strategy, Command",
            "SOLID principles and clean architecture in C++"
          ]
        },
        {
          title: "System Projects",
          items: [
            "Multi-threaded file downloader with progress tracking",
            "Simple web server: HTTP request handling",
            "Thread-safe queue implementation with benchmarking",
            "Mini HTTP server/client with REST API support"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Industry-Ready C++",
      subtitle: "Professional Level (12-18 months)",
      description: "Master C++ for real-world applications, performance, and professional practices",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Advanced Modern C++",
          items: [
            "Move semantics: std::move, rvalue references, perfect forwarding",
            "C++20/23 features: concepts, ranges, coroutines, modules",
            "std::optional, std::variant, std::any for type safety",
            "Template metaprogramming and compile-time computations"
          ]
        },
        {
          title: "Software Engineering Practices",
          items: [
            "Unit testing: GoogleTest, Catch2 testing frameworks",
            "Build systems: CMake, Makefile, package management",
            "Continuous Integration/Deployment for C++ projects",
            "Code quality: static analysis, linting, formatting"
          ]
        },
        {
          title: "Performance & Optimization",
          items: [
            "Profiling tools: gprof, Valgrind, Intel VTune",
            "Code optimization: compiler optimizations, hot paths",
            "Cache-friendly programming and memory access patterns",
            "Benchmarking and performance measurement techniques"
          ]
        },
        {
          title: "Frameworks & Libraries",
          items: [
            "Qt framework: GUI development and cross-platform apps",
            "Boost libraries: utility libraries and advanced features",
            "Networking libraries: cpp-httplib, Beast, ASIO",
            "Database integration: SQLite, PostgreSQL, MongoDB drivers"
          ]
        },
        {
          title: "Industry Projects",
          items: [
            "Mini database engine: query processing and storage",
            "Chat server with multi-threading and real-time messaging",
            "Real-time stock price tracker with WebSocket integration",
            "Game engine prototype: rendering, physics, input handling"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Expert & Mastery",
      subtitle: "Senior C++ Developer",
      description: "Contribute to high-performance systems and lead technical teams",
      color: "bg-pink-500",
      sections: [
        {
          title: "High-Performance Computing",
          items: [
            "SIMD programming: vectorization and parallel processing",
            "GPU computing: CUDA, OpenCL integration with C++",
            "Memory optimization: custom allocators, object pools",
            "Lock-free programming and atomic operations mastery"
          ]
        },
        {
          title: "Advanced System Topics",
          items: [
            "Compiler design: lexical analysis, parsing, code generation",
            "Operating system integration: system calls, kernel modules",
            "Real-time systems: RTOS programming and timing constraints",
            "Embedded C++: microcontrollers and resource-constrained systems"
          ]
        },
        {
          title: "Leadership & Architecture",
          items: [
            "Technical architecture design and documentation",
            "Code review processes and team mentoring",
            "Performance benchmarking and system scalability",
            "Open source contribution and community involvement"
          ]
        },
        {
          title: "Master-Level Projects",
          items: [
            "Contribute to major C++ projects: LLVM, Chromium, Qt",
            "Custom compiler or interpreter implementation",
            "High-performance distributed system component",
            "Real-time game engine with advanced rendering pipeline"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases, 'C++ Programming');
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
                🏆 Congratulations! You're a C++ Programming Expert!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered the C++ Programming Roadmap and are now ready to work on high-performance applications, game development, and system software.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🎯 Recommended Learning Strategy</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Practice Daily: Solve LeetCode/HackerRank problems regularly</li>
                  <li>• Master OOP: Focus heavily on object-oriented design principles</li>
                  <li>• Learn Modern C++: Stay updated with C++20/23 features</li>
                  <li>• Build Real Projects: Apply concepts in practical applications</li>
                  <li>• Read Quality Code: Study open-source C++ projects</li>
                  <li>• Performance Focus: Always consider efficiency and optimization</li>
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
            <Code className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              C++ Programming <span className="text-blue-600">Mastery Roadmap</span>
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

export default CPlusPlusProgrammingMasterRoadmap;