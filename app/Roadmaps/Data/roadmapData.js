export const phases = [
  {
    id: 0,
    title: "Essentials",
    subtitle: "Foundation Stage (0–6 weeks)",
    description: "Remove friction so you can focus on data tools",
    color: "bg-gray-600",
    sections: [
      {
        title: "Python Fundamentals",
        items: [
          "Python basics → Variables, data types, control structures, functions",
          "Idiomatic code → List comprehensions, generators, decorators",
          "Environment management → virtualenv, poetry, pip package management",
          "Practice project → Write scripts to parse CSV/JSON and produce summaries",
          "Libraries → pandas, numpy for data manipulation"
        ]
      },
      {
        title: "SQL Mastery",
        items: [
          "Core queries → SELECT, WHERE, GROUP BY, ORDER BY",
          "Advanced joins → INNER, LEFT, RIGHT, FULL OUTER joins",
          "Window functions → ROW_NUMBER(), RANK(), LAG(), LEAD()",
          "CTEs → Common Table Expressions for complex queries",
          "Aggregation → SUM, COUNT, AVG, advanced grouping",
          "Indexes → Understanding performance optimization",
          "Practice → Solve 100 SQL problems (LeetCode/Mode Analytics/Strata)"
        ]
      },
      {
        title: "Linux & Development Tools",
        items: [
          "Linux navigation → cd, ls, find, grep command mastery",
          "Text processing → awk, sed for data manipulation",
          "Automation → cron jobs, shell scripting",
          "Remote access → SSH, secure file transfer",
          "Git + GitHub → branching, pull requests, CI basics",
          "Practice project → Schedule a daily ETL script"
        ]
      },
      {
        title: "Data Mathematics",
        items: [
          "Probability basics → Distributions, sampling methods",
          "Statistics fundamentals → Mean, median, standard deviation",
          "Error metrics → MSE, RMSE, MAE for model evaluation",
          "Precision and recall → Classification metrics understanding",
          "Data quality concepts → Completeness, accuracy, consistency"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core Data Engineering",
    subtitle: "Intermediate Level (1–3 months)",
    description: "Build reliable batch pipelines and data stores",
    color: "bg-blue-500",
    sections: [
      {
        title: "Apache Spark Mastery",
        items: [
          "Spark architecture → Driver, executors, cluster managers",
          "DataFrame API → Transformations, actions, lazy evaluation",
          "PySpark → Python API for Spark programming",
          "Spark SQL → SQL queries on distributed data",
          "Performance → Partitioning strategies, caching, broadcast joins",
          "Deployment → Local, Databricks, EMR, Dataproc environments"
        ]
      },
      {
        title: "Storage & File Formats",
        items: [
          "Columnar formats → Parquet, Avro, ORC advantages",
          "Compression benefits → Storage efficiency, query performance",
          "Predicate pushdown → Query optimization techniques",
          "Schema evolution → Handling changing data structures",
          "Partitioning strategies → Time-based, value-based partitioning"
        ]
      },
      {
        title: "Lakehouse Architecture",
        items: [
          "Delta Lake → ACID transactions, time travel, schema enforcement",
          "Apache Iceberg → Table format for large analytic datasets",
          "Apache Hudi → Incremental data processing, upserts",
          "Metadata management → Table statistics, optimization",
          "ACID properties → Atomicity, Consistency, Isolation, Durability"
        ]
      },
      {
        title: "Data Modeling",
        items: [
          "Star schema → Fact tables, dimension tables design",
          "Dimensional modeling → Kimball methodology, data warehousing",
          "OLTP vs OLAP → Transaction vs analytical processing",
          "Slowly changing dimensions → SCD Type 1, 2, 3 strategies",
          "Data vault modeling → Hub, link, satellite architecture"
        ]
      },
      {
        title: "Hands-on Projects",
        items: [
          "Batch ETL pipeline → S3/GCS ingestion to processed Parquet tables",
          "PySpark transformations → Data cleaning, aggregations, joins",
          "Partitioned data lakes → Organized storage for analytics",
          "Performance optimization → Measure time/cost improvements",
          "Documentation → GitHub repos with clear READMEs"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Orchestration & CI/CD",
    subtitle: "Production Ready (1–2 months)",
    description: "Make pipelines production-grade and maintainable",
    color: "bg-green-500",
    sections: [
      {
        title: "Workflow Orchestration",
        items: [
          "Apache Airflow → DAGs, operators, sensors, XComs",
          "Dagster → Asset-aware orchestration, better local development",
          "Dependencies management → Task scheduling, failure handling",
          "Backfills → Historical data processing strategies",
          "Monitoring → Pipeline health, SLA tracking, alerting"
        ]
      },
      {
        title: "Testing & Quality",
        items: [
          "Unit tests → SQL and Python code validation",
          "Integration tests → End-to-end pipeline testing",
          "Data quality → Great Expectations for validation checkpoints",
          "Schema validation → Data contract enforcement",
          "Regression testing → Preventing data pipeline breaks"
        ]
      },
      {
        title: "CI/CD for Data",
        items: [
          "GitHub Actions → Automated testing and deployment",
          "GitLab CI → Pipeline automation, code quality checks",
          "Deployment strategies → Blue-green, rolling deployments",
          "Environment management → Dev, staging, production pipelines",
          "Code reviews → Data engineering best practices"
        ]
      },
      {
        title: "Infrastructure as Code",
        items: [
          "Terraform → Cloud infrastructure provisioning",
          "Cloud resources → Buckets, clusters, IAM management",
          "Version control → Infrastructure versioning and rollbacks",
          "Resource optimization → Cost management, scaling strategies",
          "Security → Access controls, encryption, compliance"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Production pipeline → Airflow/Dagster DAG with Spark ETL",
          "Quality validation → Great Expectations integration",
          "Cloud deployment → Terraform-provisioned infrastructure",
          "CI/CD implementation → Automated testing and deployment",
          "Monitoring dashboard → Pipeline health visualization"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Streaming & Real-time",
    subtitle: "Advanced Skills (2–3 months)",
    description: "Build low-latency pipelines and streaming architectures",
    color: "bg-purple-500",
    sections: [
      {
        title: "Event Architecture",
        items: [
          "Event-driven design → Producers, consumers, topics",
          "Message queues → Event ordering, partitioning strategies",
          "Delivery semantics → At-most-once, at-least-once, exactly-once",
          "Event sourcing → Immutable event logs, state reconstruction",
          "CQRS patterns → Command Query Responsibility Segregation"
        ]
      },
      {
        title: "Apache Kafka",
        items: [
          "Kafka fundamentals → Brokers, topics, partitions, replicas",
          "Producer/Consumer APIs → Message publishing and consumption",
          "Kafka Connect → Source and sink connectors",
          "Schema Registry → Avro, Protobuf schema management",
          "Stream processing → Kafka Streams, ksqlDB for SQL on streams"
        ]
      },
      {
        title: "Stream Processing Engines",
        items: [
          "Apache Flink → Stateful stream processing, event time",
          "Windowing → Tumbling, sliding, session windows",
          "State management → Checkpoints, savepoints, fault tolerance",
          "Watermarks → Late data handling, event time processing",
          "Materialize → Streaming database, incremental views"
        ]
      },
      {
        title: "Architecture Patterns",
        items: [
          "Lambda architecture → Batch and speed layer combination",
          "Kappa architecture → Stream-only processing approach",
          "Microservices → Event-driven service communication",
          "Data mesh → Decentralized data ownership",
          "Real-time analytics → Low-latency dashboard updates"
        ]
      },
      {
        title: "Streaming Projects",
        items: [
          "End-to-end streaming → Producer to consumer with transformations",
          "Real-time analytics → Kafka + Flink + warehouse integration",
          "Event sourcing system → Immutable event log implementation",
          "Stream joins → Multiple data stream correlation",
          "Real-time dashboard → Live data visualization"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cloud Data Platforms",
    subtitle: "Enterprise Scale (1–2 months)",
    description: "Master managed services and cloud-native solutions",
    color: "bg-red-500",
    sections: [
      {
        title: "Google Cloud Platform",
        items: [
          "BigQuery → Serverless data warehouse, SQL analytics",
          "Cloud Storage → Data lake storage, lifecycle policies",
          "Dataflow → Apache Beam for batch and stream processing",
          "Cloud Composer → Managed Apache Airflow service",
          "Pub/Sub → Real-time messaging service"
        ]
      },
      {
        title: "Amazon Web Services",
        items: [
          "Amazon Redshift → Columnar data warehouse service",
          "AWS Glue → ETL service with data catalog",
          "Amazon Athena → Serverless query service",
          "EMR → Managed Hadoop/Spark clusters",
          "Kinesis → Real-time data streaming platform"
        ]
      },
      {
        title: "Snowflake Platform",
        items: [
          "Architecture → Separation of storage and compute",
          "Virtual warehouses → Scalable compute resources",
          "Data sharing → Secure multi-tenant data exchange",
          "Time travel → Historical data access and recovery",
          "Zero-copy cloning → Instant data environment creation"
        ]
      },
      {
        title: "Platform Integration",
        items: [
          "Multi-cloud strategy → Vendor lock-in avoidance",
          "Cost optimization → Resource scheduling, auto-scaling",
          "Security → IAM, encryption, compliance frameworks",
          "Monitoring → Cloud-native observability tools",
          "Disaster recovery → Backup and recovery strategies"
        ]
      },
      {
        title: "Certification Prep",
        items: [
          "Google Cloud Professional Data Engineer → GCP data expertise",
          "AWS Certified Big Data → AWS data services mastery",
          "Databricks Certified Data Engineer → Lakehouse specialist",
          "SnowPro Core → Snowflake platform certification",
          "Practice exams → Hands-on preparation and study guides"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Governance & Advanced Topics",
    subtitle: "Expert Level (Ongoing)",
    description: "Data governance, observability, security, and system design",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Data Governance",
        items: [
          "Data lineage → OpenLineage, Marquez, automated tracking",
          "Data catalogs → Metadata management, data discovery",
          "Data quality → Automated validation, anomaly detection",
          "Privacy compliance → GDPR, CCPA, data anonymization",
          "Access controls → RBAC, attribute-based access control"
        ]
      },
      {
        title: "Observability & Monitoring",
        items: [
          "Pipeline monitoring → Metrics, logs, distributed tracing",
          "SLA/SLI management → Service level objectives",
          "Alerting systems → PagerDuty, Slack integration",
          "Cost monitoring → FinOps for data platforms",
          "Performance optimization → Query tuning, resource allocation"
        ]
      },
      {
        title: "Advanced Architecture",
        items: [
          "System design → Scalability, fault tolerance, consistency",
          "Capacity planning → Growth forecasting, resource scaling",
          "Multi-region deployment → Global data distribution",
          "Disaster recovery → RTO/RPO planning, backup strategies",
          "Performance tuning → Spark optimization, query acceleration"
        ]
      },
      {
        title: "Security & Compliance",
        items: [
          "Data encryption → At-rest and in-transit protection",
          "Identity management → SSO, MFA, service accounts",
          "Audit logging → Compliance reporting, access tracking",
          "Data masking → PII protection, synthetic data generation",
          "Regulatory frameworks → SOX, HIPAA, industry standards"
        ]
      },
      {
        title: "Master Projects",
        items: [
          "Complete data platform → Ingestion to visualization",
          "Real-time ML pipeline → Feature store, model serving",
          "Data mesh implementation → Domain-driven architecture",
          "Compliance framework → End-to-end governance solution",
          "Cost optimization study → 40%+ cost reduction demonstration"
        ]
      }
    ]
  }
];