import React from 'react';

export default function CRoadmap() {
  const roadmap = [
    {
      title: "C Language Foundations",
      subtitle: "Core Programming Basics",
      steps: [
        { 
          step: "Step - 1", 
          topic: "C Fundamentals & Setup", 
          category: "Getting Started",
          details: "History of C, GCC/Clang installation, IDEs (VS Code, CLion), basic syntax, compilation process, hello world"
        },
        { 
          step: "Step - 2", 
          topic: "Data Types & I/O", 
          category: "Basic Concepts",
          details: "Variables, constants, primitive data types, printf/scanf, format specifiers, input validation"
        },
        { 
          step: "Step - 3", 
          topic: "Operators & Expressions", 
          category: "Core Operations",
          details: "Arithmetic, logical, bitwise, relational operators, precedence, type conversion, expressions"
        },
      ],
    },
    {
      title: "Control Flow & Functions",
      subtitle: "Program Structure & Logic",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Control Structures", 
          category: "Program Flow",
          details: "If-else, switch statements, for/while/do-while loops, break/continue, nested loops, goto (when to avoid)"
        },
        { 
          step: "Step - 5", 
          topic: "Functions & Scope", 
          category: "Modular Programming",
          details: "Function definition, parameters, return types, scope (local/global/static), recursion, inline functions"
        },
        { 
          step: "Step - 6", 
          topic: "Header Files & Modules", 
          category: "Code Organization",
          details: "Creating .h files, modular compilation, preprocessor directives, include guards, separate compilation"
        },
      ],
    },
    {
      title: "Memory & Pointers",
      subtitle: "Core C Programming Power",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Pointer Fundamentals", 
          category: "Memory Management",
          details: "Address-of (&), dereference (*), pointer arithmetic, void pointers, pointer to pointer, function pointers"
        },
        { 
          step: "Step - 8", 
          topic: "Dynamic Memory", 
          category: "Heap Management",
          details: "malloc, calloc, realloc, free, memory leaks, dangling pointers, stack vs heap, memory alignment"
        },
        { 
          step: "Step - 9", 
          topic: "Arrays & Strings", 
          category: "Data Handling",
          details: "1D/2D arrays, multi-dimensional arrays, string functions (strlen, strcpy), character arrays, string literals"
        },
      ],
    },
    {
      title: "Advanced C Features",
      subtitle: "Professional Development",
      steps: [
        { 
          step: "Step - 10", 
          topic: "Structures & Unions", 
          category: "Data Structures",
          details: "Struct definition, nested structures, bit-fields, unions, enums, typedef, struct vs class concepts"
        },
        { 
          step: "Step - 11", 
          topic: "Storage Classes & Preprocessor", 
          category: "Advanced Concepts",
          details: "auto, register, static, extern, #define, #include, #ifdef, macros vs inline functions, conditional compilation"
        },
        { 
          step: "Step - 12", 
          topic: "File Handling & I/O", 
          category: "Data Persistence",
          details: "File pointers, fopen/fclose, text/binary files, fread/fwrite, fseek/ftell, error handling with errno"
        },
      ],
    },
    {
      title: "Systems Programming",
      subtitle: "Professional C Development",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Data Structures Implementation", 
          category: "Algorithms & DS",
          details: "Linked lists, stacks, queues, trees (BST, AVL), graphs, hash tables using pointers and structs"
        },
        { 
          step: "Step - 14", 
          topic: "System Programming", 
          category: "OS Integration",
          details: "Process/threads (fork, pthread), IPC (pipes, shared memory), signals, file descriptors, socket programming"
        },
        { 
          step: "Step - 15", 
          topic: "Advanced Topics & Tools", 
          category: "Professional Skills",
          details: "GDB debugging, Valgrind profiling, Makefiles/CMake, custom memory allocators, compiler basics, embedded C"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Beginner C", project: "Calculator with File-based Memory" },
    { level: "Intermediate", project: "Custom Dynamic Memory Allocator" },
    { level: "Advanced", project: "HTTP Server with Socket Programming" },
    { level: "Expert", project: "Mini Operating System Kernel Module" },
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
              <span className="text-sm font-medium text-gray-700">⚡ 15 Essential Steps • 🔧 5 Mastery Levels • 🚀 Systems Ready</span>
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
            🛠️ C Programming Practice Projects
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

        {/* Essential C Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">⚡ Essential C Technologies & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Compilers & Tools</div>
              <div className="text-blue-100">GCC, Clang, MSVC, GDB, Valgrind, AddressSanitizer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Build Systems</div>
              <div className="text-blue-100">Make, CMake, Autotools, Ninja, Bazel</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Libraries</div>
              <div className="text-blue-100">Standard C Library, POSIX, pthreads, OpenSSL</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing</div>
              <div className="text-blue-100">Unity, CMock, Check, CUnit, Google Test</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">System Programming</div>
              <div className="text-blue-100">Linux/Unix APIs, Sockets, IPC, Signals, RTOS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Embedded</div>
              <div className="text-blue-100">ARM, AVR, PIC, Arduino, FreeRTOS, Zephyr</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Performance</div>
              <div className="text-blue-100">Profiling, gprof, perf, Cachegrind, Optimization</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Graphics & GUI</div>
              <div className="text-blue-100">OpenGL, SDL, GTK, ncurses, Direct3D</div>
            </div>
          </div>
        </section>

        {/* Advanced Project Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level C Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌐 HTTP Server from Scratch</h3>
              <p className="text-sm text-gray-600 mb-3">Build a multi-threaded HTTP server with socket programming, request parsing, and file serving capabilities.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Sockets • Threads • HTTP Protocol • File I/O</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🗃️ Database Engine (Key-Value Store)</h3>
              <p className="text-sm text-gray-600 mb-3">Create a persistent key-value database with B-trees, transaction support, and query optimization.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">B-Trees • File Systems • Transactions • Indexing</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🔧 Custom Memory Allocator</h3>
              <p className="text-sm text-gray-600 mb-3">Implement malloc/free replacement with advanced features like memory pools and garbage collection.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Memory Management • Heap • Pool Allocation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">⚙️ Compiler/Interpreter</h3>
              <p className="text-sm text-gray-600 mb-3">Build a compiler for a toy language with lexer, parser, AST generation, and code generation phases.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Lexical Analysis • Parsing • AST • Code Gen</div>
            </div>
          </div>
        </section>

        {/* Modern C Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern C Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Memory Safety</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Always initialize pointers to NULL</li>
                <li>• Check malloc return values</li>
                <li>• Use AddressSanitizer & Valgrind</li>
                <li>• Implement RAII-like patterns</li>
                <li>• Static analysis with clang-tidy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Quality</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Profile before optimizing</li>
                <li>• Minimize memory allocations</li>
                <li>• Use const correctness</li>
                <li>• Leverage compiler optimizations</li>
                <li>• Write comprehensive unit tests</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🔧 Modern Tooling</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use C11/C17/C23 standards</li>
                <li>• CMake for build management</li>
                <li>• Git hooks for code quality</li>
                <li>• CI/CD with automated testing</li>
                <li>• Container-based development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Strategy */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">💡 C Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎯 Master Pointers First</div>
              <div className="text-gray-700">Pointers are the heart of C. Spend significant time understanding memory, addresses, and pointer arithmetic.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🔨 Build Low-Level Projects</div>
              <div className="text-gray-700">Focus on systems programming, memory management, and understanding how computers work at the hardware level.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📚 Read Quality C Code</div>
              <div className="text-gray-700">Study Linux kernel, SQLite, Redis source code to learn professional C programming patterns and techniques.</div>
            </div>
          </div>
        </section>

        {/* Career Specialization Paths */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 C Programming Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🖥️ Systems Programming</div>
              <div className="text-gray-700">Operating systems, device drivers, compilers, virtual machines, kernel development</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🤖 Embedded Systems</div>
              <div className="text-gray-700">IoT devices, microcontrollers, firmware, real-time systems, automotive software</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🔒 Security & Networks</div>
              <div className="text-gray-700">Cybersecurity tools, network programming, cryptography, penetration testing</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🚀 Performance Computing</div>
              <div className="text-gray-700">Scientific computing, parallel programming, GPU computing, high-frequency trading</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⚡ Remember: C is the foundation of modern computing! Master memory management, understand system internals, and build efficient solutions.
          </p>
        </div>
      </div>
    </main>
  );
}