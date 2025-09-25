// Software Architect Mastery Roadmap data structured according to your roadmap content
export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner → Junior Developer Thinking Like an Architect",
    description: "Build strong fundamentals in programming, design, and systems thinking.",
    color: "bg-blue-500",
    sections: [
      {
        title: "💻 Programming & Computer Science",
        items: [
          "Solidify knowledge in one backend language (Java, C#, Go, Python, or Node.js)",
          "Data Structures & Algorithms (time/space complexity, hashing, trees, graphs)",
          "OS basics: memory, concurrency, threads",
          "Networking: HTTP/HTTPS, REST, TCP/IP, DNS, sockets"
        ]
      },
      {
        title: "🎨 Software Design Basics",
        items: [
          "OOP & SOLID principles mastery",
          "Design Patterns (GoF): Factory, Singleton, Observer, Strategy, Builder",
          "Clean Code & Refactoring (Robert C. Martin's Clean Code)",
          "Unit Testing with TDD/BDD methodologies"
        ]
      },
      {
        title: "🔧 Version Control & Collaboration",
        items: [
          "Git advanced concepts, branching strategies",
          "PR reviews and code quality practices",
          "GitHub/GitLab workflows and CI/CD basics",
          "Team collaboration and code documentation"
        ]
      },
      {
        title: "🎯 Foundation Projects",
        items: [
          "✅ Task manager with REST API and layered architecture",
          "✅ Apply proper design patterns in real application",
          "Code review and refactoring exercises",
          "Unit testing and TDD implementation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "System Design & Architecture Basics",
    subtitle: "Intermediate Level",
    description: "Transition from developer to system thinker.",
    color: "bg-green-500",
    sections: [
      {
        title: "🏗️ System Design Fundamentals",
        items: [
          "Scalability, availability, reliability principles",
          "Load balancing, caching strategies, replication, sharding",
          "Databases: SQL (Postgres, MySQL) + NoSQL (MongoDB, Redis, Cassandra)",
          "CAP theorem & PACELC understanding"
        ]
      },
      {
        title: "🏛️ Architecture Styles",
        items: [
          "Monolithic vs. Microservices vs. Modular Monolith",
          "Event-driven architectures and patterns",
          "Layered (N-tier) vs. Hexagonal (Ports & Adapters)",
          "SOA vs. Microservices trade-offs"
        ]
      },
      {
        title: "📊 Diagramming & Communication",
        items: [
          "C4 model for architecture visualization (Simon Brown)",
          "UML basics and system modeling",
          "Technical documentation and architecture decision records",
          "Stakeholder communication skills"
        ]
      },
      {
        title: "🚀 System Design Projects",
        items: [
          "✅ Scalable e-commerce backend with microservices",
          "✅ Implement caching layer and load balancing",
          "✅ Database design with proper normalization",
          "Architecture documentation with C4 diagrams"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Architecture Practices",
    subtitle: "Advanced Level",
    description: "Master advanced concepts, patterns, and leadership.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🎯 Domain-Driven Design (DDD)",
        items: [
          "Entities, Value Objects, Aggregates, Repositories (Eric Evans book)",
          "Bounded Contexts & Context Mapping strategies",
          "Strategic vs. Tactical DDD implementation",
          "Domain modeling and ubiquitous language"
        ]
      },
      {
        title: "🏢 Enterprise Architecture",
        items: [
          "TOGAF (The Open Group) for large-scale enterprise systems",
          "Zachman Framework understanding",
          "Enterprise integration patterns",
          "Architecture governance and compliance"
        ]
      },
      {
        title: "🌐 Distributed Systems",
        items: [
          "Consensus algorithms (Raft, Paxos)",
          "Message queues (Kafka, RabbitMQ) and event streaming",
          "Event sourcing & CQRS patterns",
          "Distributed transactions and saga patterns"
        ]
      },
      {
        title: "☁️ Cloud & DevOps",
        items: [
          "Cloud providers (AWS, Azure, GCP) architecture patterns",
          "Containers & orchestration (Docker, Kubernetes)",
          "Infrastructure as Code (Terraform, Pulumi)",
          "Advanced CI/CD pipelines and deployment strategies"
        ]
      },
      {
        title: "📈 Observability & Reliability",
        items: [
          "The three pillars: logs, metrics, traces (CNCF)",
          "Distributed tracing (Jaeger, OpenTelemetry)",
          "SRE practices (SLI/SLO/SLA) and error budgets",
          "Chaos Engineering principles and implementation"
        ]
      },
      {
        title: "🎯 Advanced Projects",
        items: [
          "✅ Streaming service architecture (Netflix-like) with microservices",
          "✅ Implement Kafka for event streaming",
          "✅ Observability setup with distributed tracing",
          "DDD implementation in complex domain"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Expert & Industry-Ready Architect",
    subtitle: "Expert Level",
    description: "Lead teams, design for scale, and stay future-proof.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔧 Advanced Architectural Patterns",
        items: [
          "Microservices best practices (Martin Fowler's Microservices Guide)",
          "Serverless architecture patterns and serverless-first design",
          "Event-driven architecture with Event Sourcing at scale",
          "Modular Monoliths (when not to do microservices)"
        ]
      },
      {
        title: "👥 Leadership & Communication",
        items: [
          "Tech leadership and mentoring developers",
          "Trade-off analysis (cost vs. performance vs. maintainability)",
          "Stakeholder management and business alignment",
          "Architecture review processes and governance"
        ]
      },
      {
        title: "🚀 Emerging Trends (2024-2025)",
        items: [
          "AI-powered architecture (AI Ops, AI-assisted observability)",
          "Edge computing + 5G-aware architectures",
          "Green software architecture (energy-efficient systems)",
          "WASM & new runtime platforms adoption"
        ]
      },
      {
        title: "🏆 Certifications & Recognition",
        items: [
          "AWS Certified Solutions Architect (Associate → Professional)",
          "TOGAF Certification for enterprise architecture",
          "Kubernetes Certified Administrator (CKA)",
          "Industry speaking and thought leadership"
        ]
      },
      {
        title: "📈 Expert Projects",
        items: [
          "✅ Multi-tenant SaaS platform design",
          "✅ Global scale deployment with CI/CD",
          "✅ Security-first architecture implementation",
          "Technical leadership in complex system migrations"
        ]
      }
    ]
  }
];

// Additional roadmap content sections
export const capstoneProjects = [
  {
    title: "🏗️ Multi-Tenant SaaS Platform",
    description: "Complete scalable, secure SaaS with global deployment & CI/CD",
    color: "border-green-300",
    bgColor: "text-green-600"
  },
  {
    title: "🎬 Streaming Service Architecture",
    description: "Netflix-like platform with microservices, Kafka & observability",
    color: "border-blue-300",
    bgColor: "text-blue-600"
  },
  {
    title: "🛒 Enterprise E-commerce System",
    description: "Domain-driven design with event sourcing & CQRS",
    color: "border-purple-300",
    bgColor: "text-purple-600"
  },
  {
    title: "🌐 Distributed Financial System",
    description: "High-frequency trading system with microsecond latency",
    color: "border-orange-300",
    bgColor: "text-orange-600"
  }
];

export const resources = [
  {
    title: "📚 Architecture Books",
    color: "border-blue-300",
    bgColor: "text-blue-600",
    items: [
      "• Clean Architecture (Robert C. Martin)",
      "• Domain-Driven Design (Eric Evans)",
      "• Building Microservices (Sam Newman)"
    ]
  },
  {
    title: "🛠️ Design Patterns",
    color: "border-green-300",
    bgColor: "text-green-600",
    items: [
      "• Gang of Four Design Patterns",
      "• Enterprise Integration Patterns",
      "• Microservices Patterns (Chris Richardson)"
    ]
  },
  {
    title: "☁️ Cloud Architecture",
    color: "border-purple-300",
    bgColor: "text-purple-600",
    items: [
      "• AWS Well-Architected Framework",
      "• Azure Architecture Center",
      "• Google Cloud Architecture Framework"
    ]
  },
  {
    title: "📊 System Design",
    color: "border-orange-300",
    bgColor: "text-orange-600",
    items: [
      "• Designing Data-Intensive Applications",
      "• System Design Interview (Alex Xu)",
      "• High Scalability blog"
    ]
  },
  {
    title: "🔍 Observability",
    color: "border-red-300",
    bgColor: "text-red-600",
    items: [
      "• Observability Engineering (Honeycomb)",
      "• Site Reliability Engineering (Google)",
      "• Distributed Systems Observability"
    ]
  },
  {
    title: "🎓 Learning Platforms",
    color: "border-indigo-300",
    bgColor: "text-indigo-600",
    items: [
      "• Coursera System Design",
      "• Pluralsight Architecture Paths",
      "• O'Reilly Learning Platform"
    ]
  }
];

export const timeline = [
  {
    phase: "Phase 1",
    duration: "3-4 months",
    description: "Foundations",
    color: "border-blue-300",
    bgColor: "text-blue-600"
  },
  {
    phase: "Phase 2",
    duration: "4-5 months",
    description: "System Design",
    color: "border-green-300",
    bgColor: "text-green-600"
  },
  {
    phase: "Phase 3",
    duration: "6-8 months",
    description: "Advanced Practices",
    color: "border-purple-300",
    bgColor: "text-purple-600"
  },
  {
    phase: "Phase 4",
    duration: "4-6 months",
    description: "Expert Level",
    color: "border-orange-300",
    bgColor: "text-orange-600"
  },
  {
    phase: "Ongoing",
    duration: "Continuous",
    description: "Industry Leadership",
    color: "border-red-300",
    bgColor: "text-red-600"
  }
];

export const finalTips = [
  "• Contribute to open-source architecture projects and frameworks",
  "• Write technical blogs about architecture decisions and trade-offs",
  "• Speak at conferences and tech meetups about architecture topics",
  "• Mentor junior developers and help them think architecturally",
  "• Stay updated with ThoughtWorks Technology Radar and industry trends",
  "• Build a portfolio showcasing different architectural styles and patterns",
  "• Join architecture communities (DDD, microservices, cloud-native)",
  "• Practice system design interviews and architectural decision making"
];