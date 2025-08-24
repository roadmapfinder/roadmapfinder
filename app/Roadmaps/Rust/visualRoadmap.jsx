import React from 'react';

export default function RustRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Core Rust Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Rust Basics & Installation", 
          category: "Getting Started",
          details: "Why Rust (memory safety, zero-cost abstractions, concurrency), Installing Rust (rustup, cargo, rustc), Rust Playground"
        },
        { 
          step: "Step - 2", 
          topic: "Core Syntax & Ownership", 
          category: "Language Fundamentals",
          details: "Variables & mutability, Data types, Functions & control flow, Ownership, borrowing, lifetimes 🔑"
        },
        { 
          step: "Step - 3", 
          topic: "Collections & Data Structures", 
          category: "Data Management",
          details: "Strings, Vectors, HashMaps, Slices & arrays, Basic data manipulation"
        },
        { 
          step: "Step - 4", 
          topic: "Enums, Structs & Error Handling", 
          category: "Type System",
          details: "Enums & Pattern Matching, Structs & Traits, Result<T, E> and Option<T>, unwrap, expect, ? operator"
        },
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Advanced Language Features",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Memory Management Deep Dive", 
          category: "System Programming",
          details: "Ownership vs references, Lifetimes deep dive, Memory layout understanding"
        },
        { 
          step: "Step - 6", 
          topic: "Generics, Traits & Modules", 
          category: "Code Organization",
          details: "Generics & Traits, Trait bounds, Associated types, Derive macros, Modules & Crates (mod, pub, use)"
        },
        { 
          step: "Step - 7", 
          topic: "Smart Pointers & Concurrency", 
          category: "Advanced Memory",
          details: "Box<T>, Rc<T>, Arc<T>, RefCell<T>, Threads & std::thread, Channels (mpsc)"
        },
        { 
          step: "Step - 8", 
          topic: "Async Programming & Testing", 
          category: "Modern Development",
          details: "Async Rust (async/await, tokio, async-std), Unit & Integration testing, Benchmarking (criterion)"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Expert-Level Rust",
      steps: [
        { 
          step: "Step - 9", 
          topic: "Macros & Metaprogramming", 
          category: "Code Generation",
          details: "Declarative macros (macro_rules!), Procedural macros, Code generation patterns"
        },
        { 
          step: "Step - 10", 
          topic: "Unsafe Rust & FFI", 
          category: "Systems Integration",
          details: "Unsafe Rust, Raw pointers, FFI (C interop), Memory safety considerations"
        },
        { 
          step: "Step - 11", 
          topic: "Performance & Optimization", 
          category: "High Performance",
          details: "Advanced Error Handling (thiserror, anyhow), Performance Tuning, Profiling tools (perf, flamegraph)"
        },
        { 
          step: "Step - 12", 
          topic: "Functional Programming Patterns", 
          category: "Advanced Patterns",
          details: "Iterators & closures, Higher-order functions, Functional programming paradigms"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "Industry & Specialization",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Web Development & APIs", 
          category: "Backend Systems",
          details: "Actix-web, Axum, Rocket frameworks, REST & GraphQL APIs, Database integration (Diesel, SQLx, SeaORM)"
        },
        { 
          step: "Step - 14", 
          topic: "Systems Programming", 
          category: "Low-Level Development",
          details: "Embedded Rust (no_std, embedded-hal), OS Development, Custom allocators, Memory layout"
        },
        { 
          step: "Step - 15", 
          topic: "DevOps & Tooling", 
          category: "Production Ready",
          details: "Cargo advanced features, CI/CD with GitHub Actions, Linters (clippy, rustfmt), Security audits"
        },
        { 
          step: "Step - 16", 
          topic: "Industry Applications", 
          category: "Career Specialization",
          details: "Blockchain (Substrate, Solana), Game Development (Bevy), AI/ML bindings, Cloud Native (WASM)"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Beginner", project: "CLI To-do App with clap" },
    { level: "Intermediate", project: "REST API with Axum + PostgreSQL" },
    { level: "Advanced", project: "Chat Server with WebSockets" },
    { level: "Expert", project: "Blockchain Prototype with Substrate" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-orange-500 to-red-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🦀 16 Essential Steps • ⚡ Memory Safe • 🚀 Systems Programming</span>
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
                                <stop offset="0%" stopColor="#F97316" />
                                <stop offset="100%" stopColor="#DC2626" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-orange-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-orange-50 px-2 py-1 rounded">
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
            🚀 Rust Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Rust Ecosystem */}
        <section className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Rust Ecosystem & Libraries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">CLI Development</div>
              <div className="text-orange-100">clap, structopt, indicatif</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Web Frameworks</div>
              <div className="text-orange-100">Actix-web, Axum, Rocket, Warp</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Database ORMs</div>
              <div className="text-orange-100">Diesel, SQLx, SeaORM</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Async Runtime</div>
              <div className="text-orange-100">tokio, async-std, smol</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Serialization</div>
              <div className="text-orange-100">serde, bincode, ron, toml</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">HTTP Clients</div>
              <div className="text-orange-100">reqwest, surf, ureq</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Testing & Benchmarks</div>
              <div className="text-orange-100">criterion, proptest, quickcheck</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Error Handling</div>
              <div className="text-orange-100">thiserror, anyhow, eyre</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Portfolio-Ready Rust Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌐 High-Performance Web API</h3>
              <p className="text-sm text-gray-600 mb-3">Build a blazingly fast REST API with authentication, rate limiting, and database integration.</p>
              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Axum • PostgreSQL • JWT • Redis</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💬 Real-time Chat Server</h3>
              <p className="text-sm text-gray-600 mb-3">Create a WebSocket-based chat server with rooms, authentication, and message persistence.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">tokio • WebSockets • MongoDB</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">⛓️ Blockchain Implementation</h3>
              <p className="text-sm text-gray-600 mb-3">Build a simple blockchain with proof-of-work, transactions, and a REST API interface.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Substrate • Cryptography • P2P</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎮 Game Engine Core</h3>
              <p className="text-sm text-gray-600 mb-3">Develop a 2D game engine with entity-component-system architecture and OpenGL rendering.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Bevy • OpenGL • ECS • Physics</div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🏭 Industry Applications of Rust</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🌐 Web Backends</div>
              <div className="text-blue-100">Discord, Dropbox, Cloudflare use Rust for high-performance services</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">⛓️ Blockchain & Crypto</div>
              <div className="text-blue-100">Polkadot, Solana, Libra built with Rust for security</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🎮 Game Development</div>
              <div className="text-blue-100">Bevy engine, game studios using Rust for performance</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🔧 DevOps Tools</div>
              <div className="text-blue-100">CLI tools, automation, infrastructure tooling</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🤖 AI/ML</div>
              <div className="text-blue-100">Python bindings, TensorFlow integration, HuggingFace</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">☁️ Cloud Native</div>
              <div className="text-blue-100">WASM, serverless functions, container orchestration</div>
            </div>
          </div>
        </section>

        {/* Career Preparation */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💼 Career Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">🚀 Open Source Contributions</h3>
              <div className="text-sm text-green-100">Contribute to RustLang, Actix, Bevy, tokio, and other major projects</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">💪 Technical Interviews</h3>
              <div className="text-sm text-green-100">Practice DSA in Rust, LeetCode, system design with Rust focus</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">🏢 Industry Understanding</h3>
              <div className="text-sm text-green-100">Backend systems, embedded, blockchain, game engines, DevOps tools</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">📚 Continuous Learning</h3>
              <div className="text-sm text-green-100">Rust Book, Rustlings, async programming, performance optimization</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🦀 Remember: Rust is about fearless concurrency and memory safety. Master ownership, build real systems, and embrace zero-cost abstractions!
          </p>
        </div>
      </div>
    </main>
  );
}