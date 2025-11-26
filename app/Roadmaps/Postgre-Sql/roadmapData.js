export const phases = [
  {
    id: 0,
    title: "Fundamentals",
    subtitle: "Beginner Level (0% → 20%)",
    description: "Core SQL foundations and PostgreSQL architecture overview.",
    color: "bg-slate-500",
    sections: [
      {
        title: "💾 Absolute Basics",
        items: [
          "What is a Database and RDBMS concepts",
          "SQL vs NoSQL comparisons",
          "OLTP vs OLAP workloads",
          "ACID properties and transactions",
          "PostgreSQL architecture overview"
        ]
      },
      {
        title: "🔥 Must Learn SQL Basics",
        items: [
          "SELECT, WHERE, GROUP BY, HAVING queries",
          "ORDER BY and LIMIT operations",
          "INSERT, UPDATE, DELETE statements",
          "Basic Joins: INNER, LEFT, RIGHT",
          "Table creation with CREATE TABLE"
        ]
      },
      {
        title: "🛠️ Tools to Practice",
        items: [
          "PgAdmin or Beekeeper Studio",
          "PostgreSQL on Docker",
          "Local setup using PostgreSQL 16+",
          "Command line interface basics"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Intermediate SQL",
    subtitle: "Intermediate Level (20% → 40%)",
    description: "Master advanced SQL operations, joins, and PostgreSQL data types.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🔥 Master JOIN Operations",
        items: [
          "FULL JOIN for complete result sets",
          "CROSS JOIN for Cartesian products",
          "SELF JOIN for hierarchical data",
          "LATERAL JOIN (PostgreSQL superpower)"
        ]
      },
      {
        title: "📊 Aggregates & Window Functions",
        items: [
          "SUM, COUNT, AVG, MIN, MAX aggregations",
          "Ranking: ROW_NUMBER, DENSE_RANK, RANK",
          "OVER(PARTITION BY ...) window operations",
          "LAG, LEAD, and cumulative functions"
        ]
      },
      {
        title: "🔒 Constraints & Data Integrity",
        items: [
          "Primary key constraints",
          "Foreign key relationships",
          "Unique constraints",
          "Check constraints and Not Null",
          "Data validation at database level"
        ]
      },
      {
        title: "📝 PostgreSQL Data Types (In-Depth)",
        items: [
          "Numeric types: INT, BIGINT, DECIMAL, FLOAT",
          "Text types: VARCHAR, TEXT, CHAR",
          "Boolean, Arrays, and Range types",
          "JSON & JSONB for document storage",
          "ENUM and Composite types"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PostgreSQL Advanced Concepts",
    subtitle: "Advanced Level (40% → 60%)",
    description: "Deep dive into PostgreSQL internals, indexing, and query planning.",
    color: "bg-green-500",
    sections: [
      {
        title: "⚙️ PostgreSQL Architecture Deep Dive",
        items: [
          "Shared buffers and memory management",
          "WAL (Write-Ahead Log) mechanism",
          "Checkpoint process and tuning",
          "Background workers and processes",
          "Vacuum & AutoVacuum operations",
          "MVCC (Multi-Version Concurrency Control)"
        ]
      },
      {
        title: "📌 Indexing (Super Important)",
        items: [
          "B-Tree Index (default, most-used)",
          "Hash Index for equality operations",
          "GIN Index (JSONB, full-text search)",
          "GiST Index (geospatial, ltree)",
          "BRIN Index (large sequential datasets)",
          "Partial Index and Expression Index",
          "Know when to use what — industry critical"
        ]
      },
      {
        title: "🔥 Query Planning & EXPLAIN",
        items: [
          "EXPLAIN for query execution plans",
          "EXPLAIN ANALYZE for actual runtime statistics",
          "EXPLAIN BUFFERS for memory usage",
          "Identify: Seq Scan, Index Scan, Bitmap Scan",
          "Understand: Nested Loops, Hash Joins, Merge Joins",
          "Reading and interpreting query costs"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Performance Tuning Mastery",
    subtitle: "Advanced Level (60% → 75%)",
    description: "Master parameter tuning, query optimization, and partitioning strategies.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔧 Parameter Tuning (postgresql.conf)",
        items: [
          "shared_buffers for cache sizing",
          "work_mem for sort operations",
          "maintenance_work_mem for index creation",
          "effective_cache_size estimation",
          "checkpoint_timeout and checkpoint tuning",
          "max_parallel_workers for parallelism",
          "WAL tuning: wal_buffers, min_wal_size, max_wal_size"
        ]
      },
      {
        title: "🔥 Query Optimization Techniques",
        items: [
          "Reduce nested queries and subqueries",
          "Avoid SELECT * in production queries",
          "Use correct indexes for query patterns",
          "Partition large tables strategically",
          "Normalize/denormalize smartly for use case",
          "Optimize joins and join order",
          "Tune autovacuum for write-heavy workloads"
        ]
      },
      {
        title: "⚡ Partitioning",
        items: [
          "Range partitioning for time-series data",
          "List partitioning for categorical data",
          "Hash partitioning for even distribution",
          "Subpartitioning for complex hierarchies",
          "When partitioning hurts performance",
          "Partition pruning and constraint exclusion"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backup & Recovery",
    subtitle: "Production Level (75% → 85%)",
    description: "Mission-critical backup strategies and disaster recovery planning.",
    color: "bg-orange-500",
    sections: [
      {
        title: "📦 Types of Backup",
        items: [
          "SQL dump backup (pg_dump, pg_restore)",
          "Physical backup (pg_basebackup)",
          "WAL archiving for continuous backup",
          "PITR (Point In Time Recovery) setup",
          "Incremental backup strategies"
        ]
      },
      {
        title: "🆘 Disaster Recovery",
        items: [
          "PITR recovery procedures",
          "Restore from WAL segments",
          "Rebuilding corrupt databases",
          "Testing recovery procedures regularly",
          "Recovery time objectives (RTO) and recovery point objectives (RPO)"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "High Availability & Replication",
    subtitle: "Production Level (85% → 95%)",
    description: "Build resilient, highly available PostgreSQL clusters.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔁 Replication Types",
        items: [
          "Physical replication (streaming)",
          "Logical replication for selective data",
          "Synchronous vs Asynchronous replication",
          "Cascading replication setup",
          "Replication slots and monitoring"
        ]
      },
      {
        title: "🏗️ Clustering & HA Tools (2026 Demand)",
        items: [
          "Patroni for automated failover",
          "Pgpool-II for connection pooling and load balancing",
          "repmgr for replication management",
          "Stolon for cloud-native HA",
          "TimescaleDB clustering for time-series"
        ]
      },
      {
        title: "⚙️ Failover Strategies",
        items: [
          "Automatic failover configuration",
          "Manual failover procedures",
          "Switchover for planned maintenance",
          "Failback after primary recovery",
          "Testing failover scenarios"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Security, Auditing & Compliance",
    subtitle: "Expert Level (95% → 110%)",
    description: "Implement enterprise-grade security and compliance measures.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🔒 Security Concepts",
        items: [
          "Role-based access control (RBAC)",
          "Row-level security (RLS) policies",
          "Column-level masking for sensitive data",
          "SSL/TLS encryption for connections",
          "Database encryption at rest",
          "Password policies and authentication methods"
        ]
      },
      {
        title: "📋 Compliance Standards",
        items: [
          "GDPR compliance for EU data",
          "HIPAA for healthcare data",
          "PCI-DSS for payment card data",
          "SOC2 logging and auditing requirements",
          "Data retention and deletion policies"
        ]
      },
      {
        title: "🔍 Auditing Tools",
        items: [
          "pgaudit for comprehensive auditing",
          "pg_stat_statements for query tracking",
          "EDB audit for enterprise features",
          "Custom audit triggers and logging",
          "Log analysis and monitoring"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "PostgreSQL + DevOps",
    subtitle: "Expert Level (110% → 130%)",
    description: "Integrate PostgreSQL with modern DevOps practices and tools.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🧪 CI/CD Integration",
        items: [
          "GitHub Actions for database tests",
          "Flyway for version-controlled migrations",
          "Liquibase for database change management",
          "Prisma Migrate for modern workflows",
          "Django migrations for Python projects",
          "Automated schema testing and validation"
        ]
      },
      {
        title: "🐳 Docker & Kubernetes",
        items: [
          "PostgreSQL on Docker containers",
          "StatefulSets in Kubernetes",
          "Persistent volumes for data storage",
          "pgBackRest with Kubernetes",
          "Container orchestration patterns",
          "Health checks and readiness probes"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Cloud PostgreSQL",
    subtitle: "Cloud Mastery (130% → 150%)",
    description: "Master cloud-managed PostgreSQL services across major providers.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "☁️ Cloud Offerings You Must Learn",
        items: [
          "AWS RDS for PostgreSQL",
          "AWS Aurora PostgreSQL (MySQL-compatible)",
          "Google Cloud SQL for PostgreSQL",
          "Azure PostgreSQL Flexible Server",
          "Neon Serverless PostgreSQL (2026 Hot)",
          "Supabase (popular for startups)"
        ]
      },
      {
        title: "🎛️ Cloud Features & Operations",
        items: [
          "Automated backups and snapshots",
          "Read replicas for scaling reads",
          "Parameter groups and configuration",
          "Monitoring: CloudWatch, GCP Ops, Azure Monitor",
          "Scaling: storage, IOPS, compute",
          "Multi-AZ and cross-region replication"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Expert Topics",
    subtitle: "Specialization (150% → 180%)",
    description: "Advanced PostgreSQL features and specialized use cases.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🌍 Real Advanced Stuff",
        items: [
          "PostGIS for geospatial data and queries",
          "Full-Text Search with tsvector and tsquery",
          "LTree for hierarchical data structures",
          "PL/pgSQL Functions & Triggers programming",
          "Custom Extensions development",
          "Logical decoding + Kafka streaming integration",
          "Performance profiling with auto_explain",
          "Hyper-optimized schema design patterns"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Industry Projects",
    subtitle: "Industry Ready (180% → Production)",
    description: "Build real-world production-grade PostgreSQL projects.",
    color: "bg-amber-500",
    sections: [
      {
        title: "✔ Project 1 — E-commerce Database",
        items: [
          "Normalized schema: products, orders, payments, reviews",
          "Comprehensive indexing strategy",
          "Stored procedures for business logic",
          "Triggers and audit trails"
        ]
      },
      {
        title: "✔ Project 2 — Real-Time Analytics Database",
        items: [
          "Partitioned tables for time-series data",
          "Incremental updates and aggregations",
          "TimescaleDB for hypertables",
          "Continuous aggregates and retention policies"
        ]
      },
      {
        title: "✔ Project 3 — Full-Text Search Engine",
        items: [
          "GIN indexes with tsvector",
          "Ranking and relevance scoring",
          "Multilingual search support",
          "Highlighting and snippet generation"
        ]
      },
      {
        title: "✔ Project 4 — Financial Transactions DB",
        items: [
          "Constraint-heavy design for data integrity",
          "Multi-row atomic operations with transactions",
          "Audit logs and compliance tracking",
          "Double-entry bookkeeping patterns"
        ]
      },
      {
        title: "✔ Project 5 — Microservices + PostgreSQL",
        items: [
          "Connection pooling via PgBouncer",
          "Database per service pattern",
          "Saga pattern for distributed transactions",
          "Event sourcing with logical replication"
        ]
      },
      {
        title: "✔ Project 6 — Production-Grade HA Cluster",
        items: [
          "Patroni for cluster management",
          "Multi-node replication setup",
          "Automatic failover testing",
          "Load balancing and read replica routing"
        ]
      },
      {
        title: "✔ Project 7 — Backup/Restore Automation",
        items: [
          "pg_basebackup automation scripts",
          "Cron jobs with S3/cloud storage",
          "PITR testing and validation",
          "Disaster recovery runbooks"
        ]
      }
    ]
  }
];