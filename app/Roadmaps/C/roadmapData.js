
export const phases = [
  {
    id: 0,
    title: "Preparation",
    subtitle: "Pre-C Basics (Setup Phase)",
    description: "Prepare your programming mindset and development environment",
    color: "bg-gray-500",
    sections: [
      {
        title: "Essentials",
        items: [
          "Understanding what C is: procedural, low-level, compiled language",
          "Learn how computers execute code (compilation, linking, execution)",
          "Basic concepts of memory: stack vs heap fundamentals",
          "Setting up proper development workflow and practices"
        ]
      },
      {
        title: "Tools Installation & Setup",
        items: [
          "Compiler: GCC (GNU Compiler Collection) or Clang",
          "IDE/Editor: VS Code with C/C++ extensions, CLion, or Code::Blocks",
          "Debugger: GDB (GNU Debugger) for debugging C programs",
          "Version control: Git setup and basic commands"
        ]
      },
      {
        title: "Foundation Resources",
        items: [
          "Book: Computer Science Distilled by Wladston Ferreira Filho",
          "Video: Introduction to Programming Concepts (modern beginner course)",
          "Understanding compilation process and linking",
          "Basic command line navigation and file operations"
        ]
      },
      {
        title: "Environment Verification",
        items: [
          "Write and compile your first 'Hello World' program",
          "Test debugger functionality with simple breakpoints",
          "Verify all tools are working correctly together",
          "Setup project directory structure and workflow"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner C",
    subtitle: "Foundation Level (0-2 months)",
    description: "Learn syntax, basic constructs, and write small programs",
    color: "bg-green-500",
    sections: [
      {
        title: "Basic Syntax & Structure",
        items: [
          "main() function, printf(), scanf(), return 0 fundamentals",
          "Program structure: headers, main function, statements",
          "Comments (single-line // and multi-line /* */)",
          "Semicolons, braces, and basic C syntax rules"
        ]
      },
      {
        title: "Variables & Data Types",
        items: [
          "int, float, char, double, long data types",
          "unsigned types and their applications",
          "Variable declaration, initialization, and scope",
          "Constants using #define and const keyword"
        ]
      },
      {
        title: "Operators & Control Structures",
        items: [
          "Arithmetic operators (+, -, *, /, %), assignment operators",
          "Relational (==, !=, <, >) and logical operators (&&, ||, !)",
          "Bitwise operators (basic understanding)",
          "if, else, switch statements for decision making"
        ]
      },
      {
        title: "Loops & Functions",
        items: [
          "for, while, do-while loops with practical examples",
          "Function declaration, definition, return types",
          "Function arguments and void functions",
          "Basic I/O: console input/output with scanf and printf"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "Calculator: Basic arithmetic operations with user input",
          "Temperature Converter: Celsius/Fahrenheit conversion",
          "Number Programs: Factorial, Fibonacci sequence, prime checker",
          "Simple menu-driven programs with switch statements"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core C",
    subtitle: "Intermediate Level (2-4 months)",
    description: "Master memory, arrays, pointers, strings, and file I/O",
    color: "bg-orange-500",
    sections: [
      {
        title: "Arrays & Strings",
        items: [
          "1D arrays: declaration, initialization, accessing elements",
          "2D arrays and multi-dimensional array concepts",
          "Character arrays and string handling fundamentals",
          "String functions: strlen(), strcpy(), strcmp(), strcat()"
        ]
      },
      {
        title: "Pointers Fundamentals",
        items: [
          "Pointer basics: * (dereference) and & (address-of) operators",
          "Pointer arithmetic and memory address manipulation",
          "Pointers with arrays and functions (pass by reference)",
          "Pointer to pointer concepts and applications"
        ]
      },
      {
        title: "Dynamic Memory Management",
        items: [
          "malloc(), calloc(), realloc() for dynamic allocation",
          "free() function and preventing memory leaks",
          "Understanding heap vs stack memory usage",
          "Common memory management mistakes and solutions"
        ]
      },
      {
        title: "Structures & File I/O",
        items: [
          "struct keyword: defining and using structures",
          "Nested structures and array of structures",
          "File operations: fopen(), fclose(), fread(), fwrite()",
          "Text file I/O: fprintf(), fscanf() for data persistence"
        ]
      },
      {
        title: "Core Projects",
        items: [
          "Student Management System: structs + file I/O operations",
          "Inventory Management: dynamic arrays with structures",
          "Simple Text Editor: file manipulation and string processing",
          "Data processing programs with file input/output"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Intermediate C",
    subtitle: "Advanced Level (4-6 months)",
    description: "Develop problem-solving skills, advanced pointers, and modular programming",
    color: "bg-blue-500",
    sections: [
      {
        title: "Advanced Pointers",
        items: [
          "Function pointers: declaring and using function addresses",
          "Pointer arrays and array of function pointers",
          "Callback functions and their practical applications",
          "Complex pointer expressions and declarations"
        ]
      },
      {
        title: "Memory Management Mastery",
        items: [
          "Stack vs heap: detailed understanding and usage",
          "Avoiding memory leaks and dangling pointers",
          "Valgrind usage for memory debugging and profiling",
          "Memory alignment and optimization techniques"
        ]
      },
      {
        title: "Data Structures Implementation",
        items: [
          "Linked lists: single, double, and circular implementations",
          "Stack and Queue data structures from scratch",
          "Binary trees and Binary Search Tree basics",
          "Hash table concepts and simple implementations"
        ]
      },
      {
        title: "Modular Programming",
        items: [
          "Header files (.h) and source files (.c) organization",
          "Separate compilation and linking multiple files",
          "#include, #define, and conditional compilation",
          "Include guards and preventing multiple inclusions"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Dynamic Linked List: complete implementation with operations",
          "Mini Banking System: menu-driven with file persistence",
          "Calculator with Function Pointers: advanced calculator design",
          "Data structure visualization programs"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced C",
    subtitle: "Professional Level (6-12 months)",
    description: "Master systems programming, debugging, and performance optimization",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced Data Structures & Algorithms",
        items: [
          "Graphs, Hash tables, and Trie data structures",
          "Sorting algorithms: QuickSort, MergeSort, HeapSort",
          "Searching algorithms: Binary search, DFS, BFS traversals",
          "Algorithm complexity analysis and optimization"
        ]
      },
      {
        title: "File Handling & I/O Mastery",
        items: [
          "Binary file operations: reading/writing structures",
          "File buffering and performance optimization",
          "Random access file operations with fseek/ftell",
          "Advanced file manipulation techniques"
        ]
      },
      {
        title: "Libraries & Linking",
        items: [
          "Creating dynamic libraries (.so files) with gcc -shared",
          "Static libraries (.a files) creation and usage",
          "Library linking process and dependency management",
          "Understanding symbol tables and name resolution"
        ]
      },
      {
        title: "Debugging & Testing",
        items: [
          "GDB mastery: breakpoints, watchpoints, stack traces",
          "Valgrind for memory leak detection and profiling",
          "AddressSanitizer for runtime error detection",
          "Unit testing frameworks: CUnit, Unity testing"
        ]
      },
      {
        title: "Concurrency Basics",
        items: [
          "POSIX Threads (pthreads) introduction",
          "Thread creation, joining, and synchronization",
          "Mutex and semaphore for thread safety",
          "Basic multi-threaded programming concepts"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Multi-threaded Chat Server: sockets + pthreads implementation",
          "File Compression Program: Huffman coding algorithm",
          "CLI Database Engine: basic SQL-like operations",
          "System monitoring tools with real-time data"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Level C",
    subtitle: "Expert Level (1-2 years)",
    description: "Become professional C engineer for OS, embedded, or high-performance software",
    color: "bg-red-500",
    sections: [
      {
        title: "Systems Programming",
        items: [
          "Operating system concepts: processes, threads, memory management",
          "System calls: fork(), exec(), wait(), signal handling",
          "Inter-Process Communication: pipes, shared memory, message queues",
          "Process synchronization and communication mechanisms"
        ]
      },
      {
        title: "Networking & Communication",
        items: [
          "Socket programming: TCP/UDP client-server applications",
          "Network protocols understanding and implementation",
          "Concurrent server design patterns",
          "Network security basics and secure communication"
        ]
      },
      {
        title: "Embedded Systems & Hardware",
        items: [
          "Register-level programming and hardware interfaces",
          "Microcontroller programming: STM32/Arduino with C",
          "Device drivers and hardware abstraction layers",
          "Real-time programming concepts and constraints"
        ]
      },
      {
        title: "Performance & Security",
        items: [
          "Cache-friendly code and memory alignment optimization",
          "Profiling tools: gprof, perf for performance analysis",
          "Security: buffer overflow prevention, secure coding",
          "CERT C secure coding standards compliance"
        ]
      },
      {
        title: "Professional Practices",
        items: [
          "Version control with Git: branching, merging, workflows",
          "Continuous Integration/Deployment for C projects",
          "Documentation with Doxygen and technical writing",
          "Code review processes and quality assurance"
        ]
      },
      {
        title: "Industry Projects",
        items: [
          "Custom Shell Implementation: bash-like command interpreter",
          "Mini OS Components: basic process scheduler",
          "TCP/UDP Networking Application: complete client-server system",
          "Embedded Sensor Data Logger: hardware integration project"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Expert & Mastery",
    subtitle: "Senior C Developer",
    description: "Contribute to high-performance systems and open-source projects",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced System Topics",
        items: [
          "Operating system internals: Linux kernel understanding",
          "Compiler design and interpreter implementation",
          "High-performance computing: parallelism, SIMD, GPU integration",
          "Real-time systems and RTOS programming"
        ]
      },
      {
        title: "Specialized Domains",
        items: [
          "Embedded firmware development with FreeRTOS",
          "Device driver development for Linux kernel",
          "Database engine internals and optimization",
          "Networking stack implementation and protocols"
        ]
      },
      {
        title: "Open Source & Leadership",
        items: [
          "Contributing to major projects: Linux kernel, Redis, PostgreSQL",
          "Code review and mentoring junior developers",
          "Technical architecture design and documentation",
          "Performance benchmarking and optimization strategies"
        ]
      },
      {
        title: "Master-Level Projects",
        items: [
          "Linux Kernel Module: contribute to open-source kernel",
          "Custom Memory Allocator: high-performance memory management",
          "Real-time Embedded Project: complete RTOS application",
          "Distributed System Component: scalable C-based service"
        ]
      }
    ]
  }
];