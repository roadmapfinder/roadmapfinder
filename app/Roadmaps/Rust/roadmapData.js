// Rust Mastery Roadmap data structured according to the Rust roadmap content
export const phases = [
  {
    id: 1,
    title: "Beginner: Fundamentals of Rust",
    subtitle: "Phase 1",
    description: "Understand Rust syntax, ownership, and basic programming concepts.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🦀 Rust Basics",
        items: [
          "Variables, data types, constants, and mutability",
          "Functions, expressions, and control flow patterns",
          "Ownership, borrowing, and lifetimes (core Rust concept)",
          "References and slices for memory safety"
        ]
      },
      {
        title: "📦 Data Structures",
        items: [
          "Structs, enums, and tuples implementation",
          "Pattern matching (match, if let, while let)",
          "Collections: Vec, HashMap, String manipulation",
          "Error handling: Result and Option types"
        ]
      },
      {
        title: "🏗️ Project Structure",
        items: [
          "Modules and use statements for code organization",
          "Cargo basics: building and running projects",
          "Package management and dependencies",
          "Testing fundamentals in Rust"
        ]
      },
      {
        title: "🎯 Sample Projects",
        items: [
          "✅ CLI calculator with basic operations",
          "✅ To-Do list CLI application",
          "✅ Simple guessing game with user input",
          "Practice projects focusing on ownership"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Rust: Deep Dive",
    subtitle: "Phase 2",
    description: "Gain a deeper understanding of Rust concepts and standard library.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔧 Advanced Types",
        items: [
          "Generics implementation and usage patterns",
          "Traits and trait bounds for code reuse",
          "Lifetimes in depth and complex scenarios",
          "Associated types and trait objects"
        ]
      },
      {
        title: "🧠 Smart Pointers",
        items: [
          "Box for heap allocation and recursive types",
          "Rc and Arc for reference counting",
          "RefCell and Cell for interior mutability",
          "Memory management patterns and best practices"
        ]
      },
      {
        title: "⚡ Error Handling Patterns",
        items: [
          "Advanced error handling with ? operator",
          "Custom error types and error propagation",
          "unwrap vs expect usage guidelines",
          "Result and Option chaining techniques"
        ]
      },
      {
        title: "📚 Collections & Iterators",
        items: [
          "Collections in depth: HashMap, BTreeMap, HashSet",
          "Iterator patterns and functional programming",
          "Closures and their capture semantics",
          "Performance considerations with iterators"
        ]
      },
      {
        title: "🧪 Testing & Debugging",
        items: [
          "Unit tests and integration tests setup",
          "Test organization and documentation tests",
          "Logging and debugging techniques in Rust",
          "Benchmarking and performance profiling"
        ]
      },
      {
        title: "🚀 Intermediate Projects",
        items: [
          "✅ File parser for CSV/JSON data",
          "✅ Text-based adventure game with complex state",
          "✅ Basic HTTP client using reqwest crate",
          "Real-world applications with error handling"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Rust: Systems Programming",
    subtitle: "Phase 3",
    description: "Write performant, safe, and concurrent Rust applications.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⚠️ Unsafe Rust",
        items: [
          "Raw pointers and unsafe blocks usage",
          "Foreign Function Interface (FFI) with C/C++",
          "Advanced memory management techniques",
          "Safety contracts and invariants"
        ]
      },
      {
        title: "🔄 Concurrency & Parallelism",
        items: [
          "Threads and thread safety mechanisms",
          "Async/await and futures programming",
          "Tokio runtime for asynchronous programming",
          "Message passing and shared state patterns"
        ]
      },
      {
        title: "🎭 Macros",
        items: [
          "Declarative macros with macro_rules!",
          "Procedural macros: derive, attribute, function-like",
          "Custom derive macros for code generation",
          "Advanced macro patterns and hygiene"
        ]
      },
      {
        title: "🌐 File I/O & Networking",
        items: [
          "File system operations and path handling",
          "Network programming with TCP/UDP sockets",
          "Serialization/Deserialization with serde",
          "Performance optimization techniques"
        ]
      },
      {
        title: "📈 Advanced Projects",
        items: [
          "✅ Multi-threaded web scraper",
          "✅ CLI file encryption tool with crypto",
          "✅ Custom procedural macro implementation",
          "✅ Async REST API client with error handling"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Web & Backend Development",
    subtitle: "Phase 4",
    description: "Use Rust for web services, APIs, and backend systems.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🌐 Web Frameworks",
        items: [
          "Actix Web framework setup and configuration",
          "Rocket framework for rapid development",
          "REST API design and implementation",
          "Middleware and request/response handling"
        ]
      },
      {
        title: "🗄️ Database Integration",
        items: [
          "Diesel ORM for type-safe database operations",
          "SQLx for async database programming",
          "SeaORM as modern async ORM solution",
          "Database migrations and schema management"
        ]
      },
      {
        title: "🔐 Authentication & Security",
        items: [
          "JWT token authentication implementation",
          "Authorization patterns and role-based access",
          "Password hashing and security best practices",
          "CORS and security headers configuration"
        ]
      },
      {
        title: "⚡ Real-time Features",
        items: [
          "WebSockets for real-time communication",
          "GraphQL with async-graphql crate",
          "Server-Sent Events (SSE) implementation",
          "Performance monitoring and optimization"
        ]
      },
      {
        title: "🏗️ Web Projects",
        items: [
          "✅ REST API for blog with full CRUD",
          "✅ Real-time chat application with WebSockets",
          "✅ GraphQL API for e-commerce platform",
          "Production-ready web services"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Systems & Embedded Programming",
    subtitle: "Phase 5",
    description: "Use Rust for low-level programming and embedded systems.",
    color: "bg-red-500",
    sections: [
      {
        title: "💻 Systems Programming",
        items: [
          "Operating system development concepts",
          "Memory management and kernel programming",
          "Device driver development patterns",
          "Hardware abstraction layer design"
        ]
      },
      {
        title: "🔧 Embedded Rust",
        items: [
          "no_std programming for embedded systems",
          "cortex-m crate for ARM Cortex-M development",
          "RTIC (Real-Time Interrupt-driven Concurrency)",
          "Embedded HAL and peripheral access"
        ]
      },
      {
        title: "🌐 Network Programming",
        items: [
          "TCP/UDP socket programming",
          "Custom protocol implementation",
          "Network security and encryption",
          "High-performance network applications"
        ]
      },
      {
        title: "⛓️ Specialized Applications",
        items: [
          "Blockchain and cryptocurrency development",
          "Cross-compilation for different targets",
          "CLI tools with advanced features",
          "Performance-critical application optimization"
        ]
      },
      {
        title: "🎯 Systems Projects",
        items: [
          "✅ Embedded sensor monitoring system",
          "✅ CLI file manager with advanced features",
          "✅ Custom OS kernel (tutorial level)",
          "✅ Blockchain client prototype implementation"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Industry-Ready Rust Developer",
    subtitle: "Phase 6",
    description: "Achieve professional-level expertise for production applications.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "📋 Best Practices",
        items: [
          "Idiomatic Rust code patterns and conventions",
          "Security best practices in Rust development",
          "Code review guidelines and team collaboration",
          "Documentation and API design principles"
        ]
      },
      {
        title: "🚀 Performance & Architecture",
        items: [
          "Async and scalable architecture patterns",
          "Performance profiling and optimization techniques",
          "Memory usage analysis and optimization",
          "Benchmarking and performance regression testing"
        ]
      },
      {
        title: "🔄 DevOps Integration",
        items: [
          "CI/CD pipelines for Rust projects",
          "Docker containerization and deployment",
          "Package publishing on crates.io",
          "Cross-platform compilation and distribution"
        ]
      },
      {
        title: "🌍 Open Source Contribution",
        items: [
          "Contributing to major Rust projects (Tokio, Actix)",
          "Maintaining open-source Rust libraries",
          "Community involvement and mentorship",
          "Speaking at conferences and writing technical content"
        ]
      },
      {
        title: "🏆 Industry Projects",
        items: [
          "✅ Production-ready e-commerce backend",
          "✅ Distributed systems/microservices architecture",
          "✅ High-performance game server",
          "✅ Published Rust library on crates.io"
        ]
      }
    ]
  }
];