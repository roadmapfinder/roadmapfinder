import React from 'react';

export default function CppRoadmap() {
  const roadmap = [
    {
      title: "C++ Language Foundations",
      subtitle: "Core Programming Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "C++ Fundamentals & Setup", 
          category: "Getting Started",
          details: "History of C/C++, GCC/Clang/MSVC installation, IDEs (VS Code, Visual Studio), basic syntax, compilation process, hello world"
        },
        { 
          step: "Step - 2", 
          topic: "Data Types & I/O", 
          category: "Basic Concepts",
          details: "Variables, constants, primitive data types, cin/cout, namespaces, input validation, stream manipulators"
        },
        { 
          step: "Step - 3", 
          topic: "Control Flow & Functions", 
          category: "Core Operations",
          details: "If-else, switch, loops, functions, function overloading, inline functions, recursion, scope resolution"
        },
      ],
    },
    {
      title: "Memory & Pointers",
      subtitle: "Core C++ Memory Management",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Pointers & References", 
          category: "Memory Fundamentals",
          details: "Pointers vs references, pointer arithmetic, void pointers, function pointers, pointer to member functions"
        },
        { 
          step: "Step - 5", 
          topic: "Dynamic Memory Management", 
          category: "Heap Management",
          details: "new/delete operators, stack vs heap, memory leaks, dangling pointers, smart pointers introduction"
        },
        { 
          step: "Step - 6", 
          topic: "Arrays & Strings", 
          category: "Data Handling",
          details: "Static/dynamic arrays, C-style strings, std::string, string manipulation, character arrays, multi-dimensional arrays"
        },
      ],
    },
    {
      title: "Object-Oriented Programming",
      subtitle: "Core OOP Paradigm",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Classes & Objects", 
          category: "OOP Foundations",
          details: "Class definition, objects, constructors/destructors, member functions, access specifiers, static members"
        },
        { 
          step: "Step - 8", 
          topic: "Inheritance & Polymorphism", 
          category: "Advanced OOP",
          details: "Single/multiple inheritance, virtual functions, v-tables, abstract classes, pure virtual functions, diamond problem"
        },
        { 
          step: "Step - 9", 
          topic: "Operator Overloading", 
          category: "Advanced Features",
          details: "Overloading operators, friend functions, copy constructor, assignment operator, move semantics introduction"
        },
      ],
    },
    {
      title: "Modern C++ Features",
      subtitle: "C++11 to C++23 Standards",
      steps: [
        { 
          step: "Step - 10", 
          topic: "Smart Pointers & RAII", 
          category: "Memory Safety",
          details: "unique_ptr, shared_ptr, weak_ptr, RAII principles, resource management, custom deleters"
        },
        { 
          step: "Step - 11", 
          topic: "Move Semantics & Lambda", 
          category: "Performance Features",
          details: "Rvalue references, std::move, std::forward, lambda expressions, capture lists, auto keyword"
        },
        { 
          step: "Step - 12", 
          topic: "Templates & Generics", 
          category: "Generic Programming",
          details: "Function templates, class templates, template specialization, variadic templates, SFINAE, concepts (C++20)"
        },
      ],
    },
    {
      title: "STL & Advanced Topics",
      subtitle: "Professional C++ Development",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Standard Template Library", 
          category: "STL Mastery",
          details: "Containers (vector, map, set), iterators, algorithms, functors, std::pair, std::tuple, std::optional"
        },
        { 
          step: "Step - 14", 
          topic: "Multithreading & Concurrency", 
          category: "Parallel Programming",
          details: "std::thread, mutex, condition variables, futures/promises, atomic operations, thread pools, parallel algorithms"
        },
        { 
          step: "Step - 15", 
          topic: "Advanced C++ & Tools", 
          category: "Professional Skills",
          details: "Exception handling, file I/O, networking, debugging (GDB), profiling, CMake, testing frameworks (gtest)"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Beginner C++", project: "Bank Management System with OOP" },
    { level: "Intermediate", project: "Multithreaded Chat Server" },
    { level: "Advanced", project: "Custom STL Container Library" },
    { level: "Expert", project: "Game Engine with SFML" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 15 Essential Steps • 🔧 5 Mastery Levels • 🚀 Industry Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
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
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🛠️ C++ Programming Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential C++ Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">⚡ Essential C++ Technologies & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Compilers & Tools</div>
              <div className="text-blue-100">GCC, Clang, MSVC, GDB, Valgrind, Clang-tidy, ASan</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Systems</div>
              <div className="text-blue-100">CMake, Make, Ninja, Conan, vcpkg, Bazel</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Libraries & Frameworks</div>
              <div className="text-blue-100">STL, Boost, Qt, SFML, OpenCV, Eigen</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing & Quality</div>
              <div className="text-blue-100">Google Test, Catch2, Doctest, Clang-format</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Game Development</div>
              <div className="text-blue-100">Unreal Engine, SFML, SDL, OpenGL, Vulkan</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Embedded & Systems</div>
              <div className="text-blue-100">Arduino, STM32, PlatformIO, FreeRTOS, Zephyr</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">High Performance</div>
              <div className="text-blue-100">OpenMP, CUDA, TBB, MPI, Intel TBB</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Networking & GUI</div>
              <div className="text-blue-100">Boost.Asio, Qt Widgets, wxWidgets, FLTK</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level C++ Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎮 Game Engine Architecture</h3>
              <p className="text-sm text-gray-600 mb-3">Build a complete 2D/3D game engine with rendering pipeline, physics simulation, and scene management using modern C++.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">OpenGL • ECS • Memory Pools • Asset Management</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">⚡ High-Frequency Trading System</h3>
              <p className="text-sm text-gray-600 mb-3">Create ultra-low latency trading system with microsecond response times, custom memory allocators, and lock-free data structures.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Lock-free • Memory Pools • Networking • Real-time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🤖 Computer Vision Framework</h3>
              <p className="text-sm text-gray-600 mb-3">Implement image processing library with SIMD optimizations, parallel algorithms, and GPU acceleration using modern C++.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">SIMD • OpenMP • CUDA • Templates</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🗄️ Distributed Database Engine</h3>
              <p className="text-sm text-gray-600 mb-3">Build a scalable database with ACID transactions, B+ trees, query optimizer, and distributed consensus algorithms.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">B+ Trees • MVCC • Raft • Networking</div>
            </div>
          </div>
        </section>

        {/* Modern C++ Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern C++ Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Memory & Resource Safety</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use smart pointers over raw pointers</li>
                <li>• Follow RAII principles consistently</li>
                <li>• Prefer stack allocation when possible</li>
                <li>• Use AddressSanitizer & Valgrind</li>
                <li>• Implement proper exception safety</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Optimization</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use move semantics effectively</li>
                <li>• Prefer algorithms over raw loops</li>
                <li>• Leverage compiler optimizations (-O3)</li>
                <li>• Profile before optimizing (perf, gprof)</li>
                <li>• Use const correctness everywhere</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🔧 Modern Standards & Tools</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use C++17/C++20/C++23 features</li>
                <li>• CMake for cross-platform builds</li>
                <li>• Clang-tidy for static analysis</li>
                <li>• Google Test for unit testing</li>
                <li>• CI/CD with automated testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Strategy */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 C++ Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master OOP Principles</div>
              <div className="text-gray-700">Understand encapsulation, inheritance, polymorphism deeply. Practice with real-world class hierarchies and design patterns.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Learn STL Inside-Out</div>
              <div className="text-gray-700">Master containers, algorithms, iterators. STL knowledge is essential for any C++ position and competitive programming.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🚀 Build Performance-Critical Apps</div>
              <div className="text-gray-700">Focus on memory management, multithreading, and optimization. Study high-performance codebases like game engines.</div>
            </div>
          </div>
        </section>

        {/* Career Specialization Paths */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 C++ Programming Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🎮 Game Development</div>
              <div className="text-gray-700">Game engines, graphics programming, real-time systems, Unreal Engine, mobile games</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">💰 High-Frequency Trading</div>
              <div className="text-gray-700">Ultra-low latency systems, algorithmic trading, financial modeling, risk management</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🤖 Robotics & AI</div>
              <div className="text-gray-700">Computer vision, machine learning frameworks, autonomous systems, real-time control</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🖥️ Systems & Enterprise</div>
              <div className="text-gray-700">Database engines, web servers, compilers, operating systems, distributed systems</div>
            </div>
          </div>
        </section>

        {/* Competitive Programming Section */}
        <section className="mt-12 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-cyan-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏆 Competitive Programming with C++</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-200">
              <div className="font-semibold text-cyan-800 mb-2">📊 Essential Data Structures</div>
              <div className="text-gray-700">Vector, set, map, priority_queue, deque, stack, queue - master STL containers for efficient solutions</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-200">
              <div className="font-semibold text-cyan-800 mb-2">⚡ Algorithm Techniques</div>
              <div className="text-gray-700">Dynamic Programming, Graph algorithms, Greedy, Binary Search, Two Pointers, Sliding Window</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-200">
              <div className="font-semibold text-cyan-800 mb-2">🚀 Fast I/O & Optimization</div>
              <div className="text-gray-700">ios_base::sync_with_stdio(false), cin.tie(NULL), template shortcuts, precomputed values</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: C++ combines power with flexibility! Master OOP, STL, and modern features to build high-performance applications.
          </p>
        </div>
      </div>
    </main>
  );
}