// roadmapData.js - SQL Mastery Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Beginner Foundations (Core SQL)",
    subtitle: "Foundational Level",
    description: "Learn syntax, querying basics, and understanding relational databases",
    color: "bg-green-500",
    sections: [
      {
        title: "Introduction to Databases",
        items: [
          "Database Fundamentals → What is a Database, DBMS vs RDBMS",
          "Database Structure → Tables, rows, columns, schema",
          "Key Concepts → Primary Key, Foreign Key, Constraints"
        ]
      },
      {
        title: "Basic SQL Queries",
        items: [
          "Core Syntax → SELECT, FROM, WHERE clauses",
          "Filtering Data → AND, OR, BETWEEN, IN, LIKE, IS NULL operators",
          "Sorting Results → ORDER BY for ascending/descending sort",
          "Limiting Results → LIMIT, TOP for result pagination"
        ]
      },
      {
        title: "Aggregations & Grouping",
        items: [
          "Aggregate Functions → COUNT, SUM, AVG, MIN, MAX",
          "Grouping Data → GROUP BY for categorical aggregation",
          "Filter Groups → HAVING clause for filtered aggregations"
        ]
      },
      {
        title: "Joins (Very Important)",
        items: [
          "INNER JOIN → Matching records from both tables",
          "Outer Joins → LEFT JOIN, RIGHT JOIN for inclusive results",
          "FULL OUTER JOIN → All records from both tables",
          "CROSS JOIN → Cartesian product of tables",
          "Self Joins → Joining a table to itself"
        ]
      },
      {
        title: "Set Operations",
        items: [
          "UNION → Combine results removing duplicates",
          "UNION ALL → Combine results keeping duplicates",
          "INTERSECT → Common records between queries",
          "EXCEPT → Records in first query but not second"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate SQL (Data Handling)",
    subtitle: "Intermediate Level",
    description: "Advanced querying, data manipulation, schema management",
    color: "bg-blue-500",
    sections: [
      {
        title: "Data Manipulation",
        items: [
          "Insert Operations → INSERT for adding new records",
          "Update Operations → UPDATE for modifying existing data",
          "Delete Operations → DELETE for removing records",
          "Transactions → BEGIN, COMMIT, ROLLBACK for data consistency",
          "Bulk Operations → Bulk Insert for multiple records"
        ]
      },
      {
        title: "Constraints & Data Integrity",
        items: [
          "Column Constraints → NOT NULL, DEFAULT, UNIQUE",
          "Referential Integrity → Primary & Foreign Keys",
          "CHECK Constraints → Custom validation rules"
        ]
      },
      {
        title: "Views",
        items: [
          "Simple Views → Virtual tables from queries",
          "Indexed Views → Views with physical storage",
          "Materialized Views → Pre-computed results for performance"
        ]
      },
      {
        title: "Subqueries & CTEs",
        items: [
          "Scalar Subqueries → Single value subqueries",
          "Correlated Subqueries → Row-by-row dependent queries",
          "Common Table Expressions → WITH clause for readable queries",
          "Recursive CTEs → Self-referencing hierarchical queries"
        ]
      },
      {
        title: "Window Functions (Must Learn)",
        items: [
          "Ranking Functions → ROW_NUMBER(), RANK(), DENSE_RANK()",
          "Running Calculations → SUM() OVER for cumulative totals",
          "Lead & Lag → LAG(), LEAD() for time-based comparisons",
          "Partitioning → OVER (PARTITION BY ...) for grouped calculations"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Database Design & Schema Mastery",
    subtitle: "Advanced Level",
    description: "Industry-ready schema design and normalization",
    color: "bg-purple-500",
    sections: [
      {
        title: "Normalization",
        items: [
          "Normal Forms → 1NF, 2NF, 3NF, BCNF, 4NF, 5NF progression",
          "Design Goals → Why normalization matters, avoiding redundancy",
          "Data Integrity → Ensuring consistency across tables"
        ]
      },
      {
        title: "Denormalization",
        items: [
          "Performance Trade-offs → When to use denormalization",
          "Design Decisions → Balancing normalization vs performance",
          "Use Cases → Read-heavy systems, reporting databases"
        ]
      },
      {
        title: "ER Diagrams",
        items: [
          "Entity Modeling → Entities, Attributes, Relationships",
          "Cardinality → One-to-One, One-to-Many relationships",
          "Complex Relations → Many-to-Many with junction tables"
        ]
      },
      {
        title: "Indexes",
        items: [
          "Index Types → Clustered vs Non-Clustered indexes",
          "Composite Indexes → Multi-column index strategies",
          "Covering Indexes → Indexes that contain all query columns",
          "Best Practices → When and how to index effectively"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced SQL & Optimization",
    subtitle: "Expert Level",
    description: "Production-level query tuning and database performance",
    color: "bg-red-500",
    sections: [
      {
        title: "Query Optimization",
        items: [
          "Execution Plans → Understanding query execution paths",
          "Cost Analysis → Cost-based optimization strategies",
          "Query Refactoring → Reducing nested subqueries",
          "Index Usage → Using indexes properly for performance"
        ]
      },
      {
        title: "Transactions & Concurrency",
        items: [
          "ACID Properties → Atomicity, Consistency, Isolation, Durability",
          "Isolation Levels → READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE",
          "Deadlock Management → Deadlocks and how to avoid them",
          "Lock Types → Shared locks, exclusive locks, row-level locking"
        ]
      },
      {
        title: "Stored Procedures & Functions",
        items: [
          "User-defined Functions → Creating custom UDFs",
          "Stored Procedures → Parameterized stored procedures",
          "Error Handling → Exception handling in stored procedures",
          "Performance → When to use procedures vs inline queries"
        ]
      },
      {
        title: "Triggers",
        items: [
          "Trigger Types → AFTER INSERT, AFTER UPDATE, AFTER DELETE",
          "Use Cases → Audit trails, data validation, cascading updates",
          "Risks → Performance impact, debugging challenges"
        ]
      },
      {
        title: "Partitioning & Sharding",
        items: [
          "Partitioning Types → Horizontal vs Vertical partitioning",
          "Table Partitioning → Range, list, hash partitioning strategies",
          "Sharding Concepts → Database scaling across servers",
          "Big Data → Handling large-scale datasets"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry Ready Skills",
    subtitle: "Production Level",
    description: "Work in production systems, integrate with applications",
    color: "bg-orange-500",
    sections: [
      {
        title: "SQL in Different Databases",
        items: [
          "Database Variants → MySQL, PostgreSQL, SQL Server, Oracle differences",
          "PostgreSQL Advanced → JSONB, CTE recursion, full-text search",
          "Database Selection → Choosing the right database for use case"
        ]
      },
      {
        title: "NoSQL & SQL Hybrid Knowledge",
        items: [
          "NoSQL Comparison → MongoDB vs SQL databases",
          "JSON Support → PostgreSQL JSON queries and operations",
          "Hybrid Approach → When to use SQL vs NoSQL",
          "Polyglot Persistence → Using multiple database types"
        ]
      },
      {
        title: "ETL & Data Engineering",
        items: [
          "ETL Concepts → Extract, Transform, Load with SQL",
          "Data Pipelines → Using SQL in data pipelines",
          "Python Integration → Pandas + SQLAlchemy for data workflows",
          "Data Quality → Validation and cleansing in SQL"
        ]
      },
      {
        title: "Analytics & BI Tools",
        items: [
          "BI Integration → SQL in Power BI, Tableau dashboards",
          "Dashboard Optimization → Writing optimized queries for reporting",
          "Time-series Analytics → Temporal queries and trends",
          "KPI Calculations → Business metrics and aggregations"
        ]
      },
      {
        title: "Big Data SQL",
        items: [
          "Distributed SQL → Spark SQL, HiveQL basics",
          "Data Lakes → Working with partitioned tables",
          "Columnar Formats → Parquet, ORC file formats",
          "Query Federation → Querying across multiple sources"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Expert / Industry Mastery",
    subtitle: "Mastery Level",
    description: "Master complex real-world use cases",
    color: "bg-gray-800",
    sections: [
      {
        title: "Advanced Performance Engineering",
        items: [
          "Index Tuning → Index tuning advisor, optimization tools",
          "Caching Strategies → Database caching, query result caching",
          "Query Optimization → Optimizing high-traffic queries",
          "Monitoring → Performance monitoring and alerting"
        ]
      },
      {
        title: "Security & Compliance",
        items: [
          "Access Control → Role-based access control (RBAC)",
          "Row-level Security → Fine-grained data access (RLS)",
          "Data Encryption → Encryption at rest and in transit",
          "Compliance → GDPR, HIPAA, data privacy regulations"
        ]
      },
      {
        title: "DevOps for SQL",
        items: [
          "Schema Migration → Database migrations with Liquibase, Flyway",
          "CI/CD Pipelines → Automated SQL schema updates",
          "Version Control → Git strategies for database changes",
          "Backup & Recovery → Backup strategies, disaster recovery"
        ]
      },
      {
        title: "Case Studies (Real World)",
        items: [
          "E-commerce Scale → Handling millions of records in transactions",
          "Financial Systems → Optimizing financial transaction queries",
          "Analytics Architecture → Scalable architecture for analytics",
          "High Availability → Replication, failover strategies"
        ]
      },
      {
        title: "Capstone Projects",
        items: [
          "Data Warehouse → Design & optimize Star Schema, Snowflake Schema",
          "Reporting Dashboard → Build dashboard using SQL + BI tool",
          "Large Dataset → Optimize queries for 10M+ row dataset",
          "Production System → End-to-end database system design"
        ]
      }
    ]
  }
];