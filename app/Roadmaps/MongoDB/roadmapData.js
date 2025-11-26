export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Prep (0-2 weeks)",
    description: "Set up MongoDB environment and complete basic connection flow.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🚀 Installation & Setup",
        items: [
          "Install MongoDB locally",
          "Create Atlas free tier account (cloud product)",
          "Set up development environment",
          "Familiarize with MongoDB ecosystem"
        ]
      },
      {
        title: "🔧 Basic Tools",
        items: [
          "Learn basic shell commands with mongosh",
          "Explore Compass GUI for visual database management",
          "Pick a driver (Node.js recommended for web/backend)",
          "Complete connect, insert, find, update, delete flow"
        ]
      },
      {
        title: "📚 Initial Resources",
        items: [
          "MongoDB University beginner tutorials",
          "Node.js learning path on learn.mongodb.com",
          "Official MongoDB documentation",
          "Community forums and support channels"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core Fundamentals",
    subtitle: "Beginner Level (2-6 weeks)",
    description: "Be fluent in CRUD, BSON, simple queries, and one driver.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📄 BSON & Document Model",
        items: [
          "Understand BSON types and data structures",
          "Learn how documents map to application objects",
          "Document design principles",
          "Data type considerations and best practices"
        ]
      },
      {
        title: "🔍 CRUD & Queries",
        items: [
          "Equality and comparison operators",
          "Projection, sorting, limit/skip operations",
          "Query operators and expressions",
          "Basic query patterns and optimization"
        ]
      },
      {
        title: "🔌 Drivers & API",
        items: [
          "Connect using Node.js/Python/Java driver",
          "Learn connection pooling and options",
          "Driver-specific features and patterns",
          "Error handling and connection management"
        ]
      },
      {
        title: "📊 Indexes Basics",
        items: [
          "Single-field indexes",
          "Compound indexes",
          "Unique and sparse indexes",
          "TTL indexes for time-based data"
        ]
      },
      {
        title: "🏗️ Schema Design Patterns",
        items: [
          "Embedding vs referencing strategies",
          "Bucketing patterns for time-series data",
          "Polymorphic schemas and use cases",
          "Pros and cons of different approaches"
        ]
      },
      {
        title: "🛠️ Tools Mastery",
        items: [
          "MongoDB Compass for visual queries",
          "mongosh for shell operations",
          "MongoDB Atlas UI navigation",
          "Developer tools and extensions"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "Build Notes app (Node.js + Express) with CRUD",
          "Implement basic indexing for quick search",
          "Create 3 different schema designs for same dataset",
          "Benchmark queries for embedded vs referenced approaches"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Skills",
    subtitle: "Intermediate Level (1-3 months)",
    description: "Master aggregation, transactions, data validation, and performance tuning.",
    color: "bg-green-500",
    sections: [
      {
        title: "📈 Aggregation Framework",
        items: [
          "Pipeline stages: $match, $group, $project",
          "$lookup for joins, $facet for multiple pipelines",
          "$sortByCount and statistical operations",
          "Practice multi-stage complex pipelines"
        ]
      },
      {
        title: "💳 Transactions",
        items: [
          "Multi-document ACID transactions",
          "When to use transactions and their cost implications",
          "Transaction best practices and patterns",
          "Rollback and failure case handling"
        ]
      },
      {
        title: "✅ Data Validation & Schema",
        items: [
          "JSON Schema validation rules",
          "Enforce structure at database level",
          "Validation operators and expressions",
          "Schema evolution strategies"
        ]
      },
      {
        title: "🚀 Advanced Indexing",
        items: [
          "Covered indexes for query optimization",
          "Collation and locale-specific sorting",
          "Wildcard indexes for dynamic fields",
          "Text indexes and geospatial indexes"
        ]
      },
      {
        title: "🔍 Query Profiler & Explain Plans",
        items: [
          "Interpret explain() output",
          "Identify query bottlenecks",
          "Optimize query execution plans",
          "Index selection strategies"
        ]
      },
      {
        title: "⚡ Performance Tuning",
        items: [
          "Schema-driven performance optimization",
          "Index selection and management",
          "Memory and working set considerations",
          "Query pattern optimization"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "Build analytics pipeline with aggregation (sales reports)",
          "Create monthly cohort analysis",
          "Implement transactions for bank-style transfers",
          "Test rollback and failure scenarios"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Ops & Scale",
    subtitle: "Advanced Level (3-6 months)",
    description: "Run production-grade clusters and plan for scale, HA, and reliability.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔄 Replication (Replica Sets)",
        items: [
          "Primary/secondary architecture and roles",
          "Election rules and failover behavior",
          "Read preferences and consistency levels",
          "Replica set configuration and management"
        ]
      },
      {
        title: "🗂️ Sharding",
        items: [
          "Shard keys and their tradeoffs",
          "Chunking and balancing mechanisms",
          "Zone sharding for geographic distribution",
          "Choosing optimal shard key strategies"
        ]
      },
      {
        title: "💾 Backups & Disaster Recovery",
        items: [
          "Point-in-time recovery strategies",
          "Snapshots and backup scheduling",
          "Cloud backups with Atlas managed backups",
          "Disaster recovery planning and testing"
        ]
      },
      {
        title: "📊 Monitoring & Alerting",
        items: [
          "MMS/Atlas monitoring setup",
          "Key metrics: ops/sec, page faults, replication lag",
          "Prometheus/Grafana integration",
          "Atlas metrics and alerting configuration"
        ]
      },
      {
        title: "🔒 Security",
        items: [
          "Authentication: SCRAM, x.509 certificates",
          "RBAC (Role-Based Access Control)",
          "Encryption at rest and in transit",
          "Network peering, VPC, and IP allowlists"
        ]
      },
      {
        title: "💰 Capacity Planning & Cost Optimization",
        items: [
          "Instance sizing and resource allocation",
          "Storage engine considerations (WiredTiger)",
          "Index bloat management and compaction",
          "Cost optimization strategies"
        ]
      },
      {
        title: "📋 Playbook Tasks",
        items: [
          "Deploy 3-node replica set and simulate failover",
          "Configure sharded cluster on Atlas or locally",
          "Create runbooks: node-replace, recover failed shard",
          "Document procedures for slow query investigation"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cloud, Integrations & New Workloads",
    subtitle: "Advanced Specialization (6-9 months)",
    description: "Master Atlas-managed services and modern MongoDB features (AI/data streaming).",
    color: "bg-orange-500",
    sections: [
      {
        title: "☁️ Atlas-Managed Capabilities",
        items: [
          "Serverless instances and auto-scaling",
          "Global clusters for multi-region deployment",
          "Managed backups and monitoring",
          "Zero-downtime upgrades and maintenance"
        ]
      },
      {
        title: "🤖 Vector Search & AI Features",
        items: [
          "Store and index embeddings for AI applications",
          "Atlas vector search configuration",
          "Combine vector search with text filtering",
          "Integration with embedding models and LLMs"
        ]
      },
      {
        title: "📡 Change Streams & Event-Driven",
        items: [
          "Change Data Capture (CDC) for real-time pipelines",
          "Integration with Kafka and cloud functions",
          "Event-driven architecture patterns",
          "Stream processing and real-time updates"
        ]
      },
      {
        title: "📱 Realm / Mobile Sync",
        items: [
          "Mobile-first data synchronization",
          "Offline-first app development",
          "Conflict resolution strategies",
          "Device sync and authentication"
        ]
      },
      {
        title: "🗄️ Data Lake & BI Connectors",
        items: [
          "Federated queries across data sources",
          "Compass/BI connector for analytics",
          "Connectors to Spark and Kafka",
          "Data pipeline orchestration"
        ]
      },
      {
        title: "🔍 Vector & Search Use-Cases",
        items: [
          "Hybrid search (text + vector)",
          "Retrieval-augmented generation (RAG) flows",
          "Semantic search implementations",
          "AI-powered search experiences"
        ]
      },
      {
        title: "🎯 Advanced Projects",
        items: [
          "Build RAG demo: ingest docs, compute embeddings",
          "Store in MongoDB vector index and query by similarity",
          "Create change-stream consumer pushing to Elasticsearch/Kafka",
          "Return filtered results to LLM client"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Specialization, Certifications & Interviews",
    subtitle: "Mastery Level (9-12 months)",
    description: "Present yourself as MongoDB-capable engineer and clear interviews.",
    color: "bg-red-500",
    sections: [
      {
        title: "🎓 Certifications & Official Paths",
        items: [
          "MongoDB Certified Developer Associate exam",
          "Validates app-building skills for job-readiness",
          "MongoDB University learning paths (Node.js, Java, Python)",
          "Certification preparation and practice exams"
        ]
      },
      {
        title: "💼 Interview Preparation",
        items: [
          "System design: social feed with write-scale strategy",
          "Design product search with text + vector hybrid",
          "Design time-series storage with bucketing pattern",
          "Architecture tradeoffs and cost analysis"
        ]
      },
      {
        title: "🔧 Hands-On Problem Solving",
        items: [
          "Optimize slow queries using explain()",
          "Design shard key for ecommerce orders collection",
          "Fix replication lag scenarios",
          "Capacity planning and recovery scenarios"
        ]
      },
      {
        title: "📂 Portfolio & Projects",
        items: [
          "Production-like app on Atlas with monitoring",
          "Backups setup and cost reporting",
          "Performance tuning case study with before/after metrics",
          "RAG demo or real-time pipeline using change streams"
        ]
      },
      {
        title: "🛠️ Tools & Ecosystem Mastery",
        items: [
          "mongosh (shell), MongoDB Compass (GUI)",
          "MongoDB Atlas Console administration",
          "Drivers: node-mongodb-native, PyMongo, Java driver",
          "ODMs: Mongoose for Node.js applications"
        ]
      },
      {
        title: "📊 Observability Stack",
        items: [
          "Atlas metrics and dashboards",
          "Prometheus + Grafana integration",
          "DataDog integrations and monitoring",
          "Custom alerting and reporting"
        ]
      },
      {
        title: "🔌 Connectors & Integrations",
        items: [
          "Kafka Connector for streaming data",
          "Atlas Data Lake for analytics",
          "BI Connector for business intelligence",
          "Cloud provider integrations (AWS, Azure, GCP)"
        ]
      }
    ]
  }
];