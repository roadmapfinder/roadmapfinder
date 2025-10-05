export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Beginner Level (0-3 months)",
    description: "Core database concepts and SQL fundamentals",
    color: "bg-gray-600",
    sections: [
      {
        title: "Computer Science & Database Basics",
        items: [
          "Database fundamentals → What is a database, why use one",
          "Database types → Relational vs Non-Relational systems",
          "Core concepts → Tables, rows, columns, relationships",
          "Keys → Primary keys, foreign keys, unique constraints",
          "Schema design → Normalization principles, data organization",
          "ACID properties → Atomicity, Consistency, Isolation, Durability",
          "Data lifecycle → Create, Read, Update, Delete operations"
        ]
      },
      {
        title: "SQL Mastery",
        items: [
          "Basic queries → SELECT, WHERE, ORDER BY, LIMIT",
          "Aggregation → COUNT, SUM, AVG, MIN, MAX functions",
          "Grouping → GROUP BY, HAVING clauses",
          "Joins → INNER, LEFT, RIGHT, FULL OUTER joins",
          "Subqueries → Nested queries, correlated subqueries",
          "Constraints → UNIQUE, CHECK, NOT NULL, DEFAULT",
          "Views & Aliases → Virtual tables, query simplification",
          "Practice → SQLZoo, LeetCode SQL, Mode SQL Tutorial"
        ]
      },
      {
        title: "Database Installation & Practice",
        items: [
          "PostgreSQL → Installation, configuration, best all-rounder",
          "MySQL/MariaDB → Common web stack database",
          "GUI tools → DBeaver, pgAdmin, TablePlus for management",
          "Practice project → Student Management System with CRUD",
          "Practice project → Movie Rating database with relationships"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Data Modeling & Design",
    subtitle: "Intermediate Level (3-6 months)",
    description: "Schema design, optimization, and database internals",
    color: "bg-blue-500",
    sections: [
      {
        title: "Data Modeling & Normalization",
        items: [
          "ER diagrams → Entity-Relationship modeling",
          "Normal forms → 1NF, 2NF, 3NF, BCNF principles",
          "Relationships → One-to-one, one-to-many, many-to-many",
          "Denormalization → Strategic denormalization for performance",
          "Design tools → Draw.io, dbdiagram.io, Lucidchart",
          "Schema evolution → Managing database changes over time"
        ]
      },
      {
        title: "Transactions & Concurrency",
        items: [
          "ACID compliance → Transaction guarantees and consistency",
          "Isolation levels → Read uncommitted to serializable",
          "Locks & deadlocks → Understanding and preventing deadlocks",
          "Transaction management → BEGIN, COMMIT, ROLLBACK",
          "Concurrency control → Multi-version concurrency control (MVCC)",
          "Performance trade-offs → Consistency vs availability"
        ]
      },
      {
        title: "Indexing & Query Optimization",
        items: [
          "Index types → B-Tree, Hash, Bitmap, GiST indexes",
          "Index strategies → When to index, composite indexes",
          "Query execution plans → EXPLAIN and EXPLAIN ANALYZE",
          "Query optimization → Identifying bottlenecks and improvements",
          "Statistics → Table statistics and query planning",
          "Performance tuning → Index maintenance, query rewriting"
        ]
      },
      {
        title: "Advanced SQL Features",
        items: [
          "Stored procedures → Encapsulating business logic",
          "Functions → User-defined functions in SQL",
          "Triggers → Event-driven database actions",
          "Views → Materialized and regular views",
          "CTEs → Common Table Expressions for complex queries",
          "Window functions → Analytical queries and ranking"
        ]
      },
      {
        title: "Hands-on Projects",
        items: [
          "Inventory system → Stock management with triggers",
          "E-commerce database → Orders, products, customers schema",
          "Analytics dashboard → Optimized reporting queries",
          "Performance benchmarking → Before/after optimization metrics"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "NoSQL & Modern Databases",
    subtitle: "Advanced Level (6-9 months)",
    description: "Non-relational databases and specialized systems",
    color: "bg-green-500",
    sections: [
      {
        title: "NoSQL Database Types",
        items: [
          "Document databases → MongoDB, CouchDB for dynamic schemas",
          "Key-value stores → Redis, DynamoDB for caching and sessions",
          "Column-family → Cassandra, HBase for high-volume distributed systems",
          "Graph databases → Neo4j, ArangoDB for relationship-heavy data",
          "Time-series → InfluxDB, TimescaleDB for temporal data"
        ]
      },
      {
        title: "NoSQL Theory & Patterns",
        items: [
          "CAP theorem → Consistency, Availability, Partition tolerance",
          "BASE model → Basically Available, Soft state, Eventual consistency",
          "Data replication → Master-slave, peer-to-peer replication",
          "Sharding strategies → Horizontal partitioning, consistent hashing",
          "Denormalization patterns → Data duplication for performance",
          "Query patterns → Designing schemas for access patterns"
        ]
      },
      {
        title: "Performance & Scalability",
        items: [
          "Query profiling → Identifying slow queries and bottlenecks",
          "Indexing strategies → Database-specific index types",
          "Caching layers → Redis, Memcached integration",
          "Connection pooling → PgBouncer, connection management",
          "Partitioning → Table partitioning for large datasets",
          "Clustering → Multi-node database clusters"
        ]
      },
      {
        title: "High Availability & Recovery",
        items: [
          "Backup strategies → Full, incremental, differential backups",
          "Point-in-time recovery → PITR for PostgreSQL and MySQL",
          "Replication → Master-slave, master-master configurations",
          "Hot standby → Read replicas and failover systems",
          "WAL → Write-Ahead Logging for durability",
          "Disaster recovery → RTO and RPO planning"
        ]
      },
      {
        title: "NoSQL Projects",
        items: [
          "User analytics → MongoDB tracking system with aggregations",
          "Real-time leaderboard → Redis sorted sets implementation",
          "Social network → Neo4j graph database with relationship queries",
          "IoT data pipeline → Cassandra time-series data storage",
          "Caching layer → Redis integration with relational database"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Cloud & Distributed Systems",
    subtitle: "Industry Ready (9-12 months)",
    description: "Cloud databases and distributed architectures",
    color: "bg-purple-500",
    sections: [
      {
        title: "Amazon Web Services",
        items: [
          "Amazon RDS → Managed PostgreSQL, MySQL, MariaDB, Oracle",
          "Amazon Aurora → High-performance MySQL and PostgreSQL compatible",
          "DynamoDB → Serverless NoSQL key-value and document database",
          "Amazon Redshift → Data warehouse for analytics",
          "ElastiCache → Managed Redis and Memcached",
          "Database Migration Service → Schema and data migration"
        ]
      },
      {
        title: "Google Cloud Platform",
        items: [
          "Cloud SQL → Managed PostgreSQL, MySQL, SQL Server",
          "Cloud Spanner → Globally distributed relational database",
          "Firestore → NoSQL document database",
          "Bigtable → Wide-column NoSQL for analytics",
          "BigQuery → Serverless data warehouse",
          "Memorystore → Managed Redis and Memcached"
        ]
      },
      {
        title: "Microsoft Azure",
        items: [
          "Azure SQL Database → Managed SQL Server instances",
          "Cosmos DB → Multi-model globally distributed database",
          "Azure Database for PostgreSQL → Managed PostgreSQL",
          "Azure Database for MySQL → Managed MySQL",
          "Azure Cache for Redis → In-memory caching",
          "Azure Synapse Analytics → Enterprise data warehousing"
        ]
      },
      {
        title: "Cloud Infrastructure",
        items: [
          "Infrastructure as Code → Terraform, CloudFormation for provisioning",
          "Backup automation → Scheduled backups, retention policies",
          "Monitoring → CloudWatch, Prometheus, Grafana dashboards",
          "Cost optimization → Right-sizing, reserved instances",
          "Security → VPC, encryption, IAM roles and policies",
          "Multi-region → Geographic distribution and latency optimization"
        ]
      },
      {
        title: "Cloud Projects",
        items: [
          "Migrated application → On-premise to cloud database migration",
          "Multi-region deployment → Global application with replication",
          "Cost optimization → Demonstrate 30%+ cost reduction",
          "Monitoring dashboard → Complete observability solution",
          "IaC deployment → Terraform-managed database infrastructure"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Distributed & Big Data",
    subtitle: "Expert Level (12-18 months)",
    description: "Large-scale distributed systems and data platforms",
    color: "bg-red-500",
    sections: [
      {
        title: "Distributed Database Architecture",
        items: [
          "Horizontal scaling → Sharding, partitioning strategies",
          "Consistent hashing → Data distribution across nodes",
          "Distributed transactions → Two-phase commit protocol",
          "Consensus algorithms → Raft, Paxos for distributed agreement",
          "Vector clocks → Conflict resolution in distributed systems",
          "Quorum reads/writes → Tunable consistency levels"
        ]
      },
      {
        title: "NewSQL Databases",
        items: [
          "CockroachDB → Distributed SQL with ACID guarantees",
          "TiDB → MySQL-compatible distributed database",
          "YugabyteDB → PostgreSQL-compatible distributed SQL",
          "VoltDB → In-memory transactional database",
          "NuoDB → Elastic SQL database for cloud",
          "Spanner-inspired → Global consistency at scale"
        ]
      },
      {
        title: "Big Data Ecosystem",
        items: [
          "Apache Hadoop → Distributed storage and processing",
          "Apache Spark → Fast distributed data processing",
          "Apache Hive → SQL on Hadoop data warehouse",
          "Apache HBase → Column-family NoSQL on Hadoop",
          "Apache Kafka → Distributed event streaming platform",
          "Presto/Trino → Distributed SQL query engine"
        ]
      },
      {
        title: "Data Lakes & Warehouses",
        items: [
          "Data lake architecture → Raw data storage and processing",
          "ETL pipelines → Extract, Transform, Load workflows",
          "Delta Lake → ACID transactions for data lakes",
          "Apache Iceberg → Table format for large datasets",
          "Snowflake → Cloud data warehouse platform",
          "Databricks → Unified analytics platform"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Distributed database → Multi-region CockroachDB deployment",
          "Big data pipeline → Kafka to Spark to data warehouse",
          "Sharded application → Custom sharding implementation",
          "Real-time analytics → Streaming data processing pipeline",
          "Data platform → End-to-end data architecture design"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Database DevOps & Mastery",
    subtitle: "Advanced Expert (18+ months)",
    description: "Database operations, security, and system design",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Database DevOps",
        items: [
          "Schema migrations → Flyway, Liquibase for version control",
          "CI/CD pipelines → Automated testing and deployment",
          "Version control → Git for SQL scripts and schemas",
          "Blue-green deployments → Zero-downtime migrations",
          "Rollback strategies → Safe schema change management",
          "Automated testing → Unit and integration tests for databases"
        ]
      },
      {
        title: "Database Security",
        items: [
          "Encryption → At-rest and in-transit data protection",
          "Access control → Role-based access control (RBAC)",
          "Authentication → SSO, MFA, service accounts",
          "Audit logging → Compliance tracking and monitoring",
          "Data masking → PII protection and anonymization",
          "SQL injection → Prevention and security best practices"
        ]
      },
      {
        title: "Monitoring & Observability",
        items: [
          "Metrics collection → Database performance metrics",
          "Query monitoring → Slow query logs and analysis",
          "Alerting → PagerDuty, Slack integration for incidents",
          "Log aggregation → Centralized logging with ELK stack",
          "Tracing → Distributed tracing for database calls",
          "SLA management → Service level objectives and monitoring"
        ]
      },
      {
        title: "Compliance & Governance",
        items: [
          "GDPR compliance → Data protection and privacy regulations",
          "HIPAA → Healthcare data security requirements",
          "SOX compliance → Financial data audit requirements",
          "Data retention → Policies and automated enforcement",
          "Data lineage → Tracking data flow and transformations",
          "Privacy frameworks → CCPA, regional data regulations"
        ]
      },
      {
        title: "System Design & Architecture",
        items: [
          "Database selection → Choosing the right database for use case",
          "Capacity planning → Growth forecasting and scaling",
          "Performance tuning → Advanced optimization techniques",
          "Multi-tenancy → Shared vs isolated database architectures",
          "Microservices data → Database per service pattern",
          "Event sourcing → CQRS and event-driven architectures"
        ]
      },
      {
        title: "Master Projects",
        items: [
          "Complete platform → Multi-database architecture with monitoring",
          "Zero-downtime migration → Large-scale database migration project",
          "Performance optimization → 10x improvement case study",
          "Compliance framework → End-to-end governance implementation",
          "Multi-tenant SaaS → Scalable database architecture design"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Real-World Projects & Interview Prep",
    subtitle: "Industry-Level Experience",
    description: "Production-ready projects and interview preparation",
    color: "bg-pink-500",
    sections: [
      {
        title: "Industry-Level Projects",
        items: [
          "E-commerce database → Users, orders, inventory, payments schema",
          "Analytics data warehouse → ETL pipelines with BI dashboard integration",
          "Real-time event stream → Kafka + Cassandra for streaming data",
          "Multi-region replication → Global database deployment with failover",
          "Microservices architecture → Database per service pattern implementation"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "SQL challenges → LeetCode, HackerRank, StrataScratch problems",
          "Database design → System design case studies and architecture",
          "Performance tuning → Query optimization and scaling scenarios",
          "Mock interviews → Database modeling and technical discussions",
          "Behavioral questions → Project experience and problem-solving"
        ]
      },
      {
        title: "Essential Tools Mastery",
        items: [
          "SQL engines → PostgreSQL, MySQL, MariaDB, SQLite proficiency",
          "NoSQL platforms → MongoDB, Redis, Cassandra, DynamoDB",
          "GUI clients → DBeaver, DataGrip, pgAdmin expertise",
          "Monitoring → Prometheus, Grafana, CloudWatch dashboards",
          "Migrations → Flyway, Liquibase version control",
          "Cloud platforms → AWS RDS, GCP Cloud SQL, Azure SQL",
          "ETL/BI tools → Airflow, dbt, Power BI, Tableau"
        ]
      },
      {
        title: "Advanced Specializations",
        items: [
          "Vector databases → Pinecone, Weaviate for AI applications",
          "Time-series databases → TimescaleDB, InfluxDB for metrics",
          "OLAP systems → ClickHouse, DuckDB, Snowflake analytics",
          "Graph databases → Advanced Neo4j, relationship modeling",
          "Search engines → Elasticsearch, OpenSearch full-text search",
          "Data governance → Encryption, RBAC, audit logging frameworks"
        ]
      },
      {
        title: "Career Development",
        items: [
          "Portfolio → GitHub with documented database projects",
          "Blog posts → Technical writing on database topics",
          "Certifications → AWS Database Specialty, GCP Professional",
          "Open source → Contributions to database projects",
          "Networking → Database community engagement and conferences"
        ]
      }
    ]
  }
];

