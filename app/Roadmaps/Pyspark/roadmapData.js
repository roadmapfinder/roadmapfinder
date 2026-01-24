export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Foundation Level",
    description: "Master Python and SQL fundamentals before diving into PySpark",
    color: "bg-slate-500",
    sections: [
      {
        title: "Python for Data Engineering",
        items: [
          "Variables, loops, and functions",
          "Data structures: lists, dictionaries, sets, tuples",
          "File handling (CSV/JSON)",
          "Object-oriented programming basics (classes)",
          "Exception handling",
          "pandas basics and data manipulation"
        ]
      },
      {
        title: "SQL Fundamentals",
        items: [
          "SELECT, WHERE, GROUP BY, ORDER BY",
          "JOINs (inner, left, right, full)",
          "Window functions",
          "Common Table Expressions (CTEs)",
          "Aggregations and CASE WHEN statements"
        ]
      },
      {
        title: "Practice Tasks",
        items: [
          "Read and filter CSV data using pandas",
          "Perform groupby operations on datasets",
          "Convert pandas DataFrames to Spark DataFrames",
          "Solve 50-100 SQL problems on real datasets"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Spark Foundations",
    subtitle: "Beginner Level",
    description: "Understand core Spark concepts and distributed computing fundamentals",
    color: "bg-blue-500",
    sections: [
      {
        title: "Understanding Spark Architecture",
        items: [
          "What is Spark and why it's faster than Hadoop MapReduce",
          "Distributed computing basics",
          "Cluster concepts: Driver vs Executors",
          "Nodes, partitions, and cores",
          "DAG (Directed Acyclic Graph) execution model"
        ]
      },
      {
        title: "Environment Setup",
        items: [
          "Local PySpark installation",
          "Databricks Community Edition setup",
          "Docker Spark cluster (advanced option)",
          "Running Spark in Local mode",
          "Introduction to Spark UI basics"
        ]
      },
      {
        title: "Getting Started",
        items: [
          "Creating SparkSession",
          "Understanding Spark configuration",
          "Basic Spark operations",
          "Reading your first dataset"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PySpark DataFrame Mastery",
    subtitle: "Intermediate Level",
    description: "Master DataFrames, transformations, and core PySpark operations",
    color: "bg-purple-500",
    sections: [
      {
        title: "Loading and Inspecting Data",
        items: [
          "Reading data formats: CSV, JSON, Parquet, ORC, Avro",
          "Schema inference vs manual schema definition",
          "show(), printSchema(), describe() methods",
          "Working with large datasets locally"
        ]
      },
      {
        title: "DataFrame Operations",
        items: [
          "select(), filter(), where() operations",
          "withColumn(), drop(), alias() transformations",
          "distinct() and dropDuplicates()",
          "Adding new columns and renaming existing ones",
          "Datatype conversions and casting"
        ]
      },
      {
        title: "Working with Columns",
        items: [
          "col() and lit() functions",
          "Conditional logic: when().otherwise()",
          "String operations: regexp_replace(), split(), concat()",
          "Date functions: current_date(), to_date(), datediff(), date_add()",
          "Cleaning messy datasets (names, phone numbers, dates)"
        ]
      },
      {
        title: "Aggregations and GroupBy",
        items: [
          "groupBy().agg() patterns",
          "Aggregate functions: sum, avg, count, max, min",
          "countDistinct for unique counts",
          "Revenue analysis by region",
          "Customer order statistics"
        ]
      },
      {
        title: "Mini Projects",
        items: [
          "Clean a customer dataset with data quality issues",
          "Calculate revenue metrics by different dimensions",
          "Build data validation pipeline for incoming data"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced DataFrame Operations",
    subtitle: "Pro Level",
    description: "Master joins, window functions, and Spark SQL for complex data transformations",
    color: "bg-green-500",
    sections: [
      {
        title: "Joins in PySpark",
        items: [
          "Inner, Left, Right, and Full joins",
          "Semi Join and Anti Join patterns",
          "Broadcast joins for optimization",
          "Joining multiple tables (orders + customers + products)",
          "Optimizing slow joins with broadcast() hint"
        ]
      },
      {
        title: "Window Functions",
        items: [
          "Window.partitionBy().orderBy() syntax",
          "Ranking functions: row_number, rank, dense_rank",
          "Analytical functions: lag, lead",
          "Running totals and cumulative aggregations",
          "Top N per group patterns",
          "Latest transaction per customer analysis"
        ]
      },
      {
        title: "Spark SQL Integration",
        items: [
          "createOrReplaceTempView() for SQL access",
          "Running SQL queries on DataFrames",
          "Catalyst optimizer understanding",
          "Mixing SQL and DataFrame operations",
          "Performance comparison: SQL vs DataFrame API"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build multi-table join pipeline with optimization",
          "Create customer analytics with window functions",
          "Implement same logic in both SQL and DataFrame API",
          "Calculate monthly running revenue by region"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Big Data Engineering",
    subtitle: "Specialist Level",
    description: "Handle production-scale data with partitioning, I/O optimization, and data quality",
    color: "bg-orange-500",
    sections: [
      {
        title: "Partitioning Fundamentals",
        items: [
          "Understanding partitions and their impact",
          "Partition size optimization",
          "repartition() vs coalesce() usage",
          "Small files problem and solutions",
          "Increasing partitions for large datasets",
          "Reducing partitions before writing output"
        ]
      },
      {
        title: "Reading and Writing Data",
        items: [
          "Parquet format (industry standard)",
          "Delta Lake format (Databricks)",
          "Save modes: overwrite, append, error, ignore",
          "Partitioned writes: partitionBy('date')",
          "Creating year/month/day partitioned datasets"
        ]
      },
      {
        title: "Data Quality and Handling Nulls",
        items: [
          "dropna() and fillna() strategies",
          "Data validation checks",
          "Schema enforcement and evolution",
          "Building bad records isolation pipeline",
          "Rejecting invalid records to separate table"
        ]
      },
      {
        title: "Projects",
        items: [
          "Create partitioned data lake by date hierarchy",
          "Build data quality pipeline with validation rules",
          "Implement incremental data loading pattern"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Performance Optimization",
    subtitle: "Professional Level",
    description: "Master Spark execution model, optimization techniques, and debugging",
    color: "bg-red-500",
    sections: [
      {
        title: "Spark Execution Model",
        items: [
          "Lazy evaluation concepts",
          "Transformations vs Actions",
          "Narrow vs Wide transformations",
          "Understanding shuffles (biggest performance killer)",
          "Identifying shuffle-causing operations",
          "Partition tuning to reduce shuffles"
        ]
      },
      {
        title: "Caching and Persistence",
        items: [
          "When to use cache() and persist()",
          "Storage levels (MEMORY_ONLY, MEMORY_AND_DISK, etc.)",
          "When caching helps vs hurts performance",
          "Caching reused DataFrames in multi-query pipelines",
          "Unpersisting cached data"
        ]
      },
      {
        title: "Join Optimization",
        items: [
          "Sort merge join internals",
          "Broadcast join optimization",
          "Handling skewed joins",
          "Salting technique for skew mitigation",
          "Optimizing slow join operations"
        ]
      },
      {
        title: "Spark UI Mastery",
        items: [
          "Jobs → Stages → Tasks hierarchy",
          "Analyzing shuffle read/write metrics",
          "Identifying skewed tasks",
          "Understanding executor metrics",
          "Debugging performance issues",
          "Inspecting DAG visualization"
        ]
      },
      {
        title: "Projects",
        items: [
          "Optimize a slow groupBy operation using Spark UI",
          "Fix join performance issues with broadcast",
          "Resolve data skew in production pipeline",
          "Build performance benchmarking framework"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced PySpark",
    subtitle: "Expert Level",
    description: "User-defined functions, RDDs, complex data types, and streaming",
    color: "bg-indigo-500",
    sections: [
      {
        title: "User-Defined Functions (UDFs)",
        items: [
          "Creating Python UDFs",
          "UDF vs built-in functions (performance implications)",
          "Pandas UDF (vectorized UDF) for better performance",
          "When to avoid UDFs",
          "Best practices: prefer Spark built-in functions"
        ]
      },
      {
        title: "RDD Basics (Legacy)",
        items: [
          "What is RDD and when it was used",
          "map, filter, reduceByKey operations",
          "Why DataFrames are preferred in modern Spark",
          "RDD to DataFrame conversion",
          "Interview preparation for RDD questions"
        ]
      },
      {
        title: "Complex Data Types",
        items: [
          "Working with nested JSON",
          "StructType, ArrayType, MapType",
          "explode() for array expansion",
          "Flattening nested schemas",
          "Parsing API response JSON datasets"
        ]
      },
      {
        title: "Structured Streaming",
        items: [
          "Streaming DataFrame concepts",
          "Watermarking for late data",
          "Windowed aggregations in streams",
          "Kafka integration basics",
          "Real-time event processing",
          "Building fraud detection logic"
        ]
      },
      {
        title: "Projects",
        items: [
          "Flatten complex nested JSON from API",
          "Build real-time streaming analytics pipeline",
          "Stream events and calculate real-time counts",
          "Implement windowed aggregations on streaming data"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Delta Lake & Modern Lakehouse",
    subtitle: "Industry Standard",
    description: "Master Delta Lake for ACID transactions, time travel, and lakehouse architecture",
    color: "bg-pink-500",
    sections: [
      {
        title: "Delta Lake Fundamentals",
        items: [
          "ACID transactions on data lake",
          "Time travel and version history",
          "MERGE operation for upserts",
          "OPTIMIZE and ZORDER indexing",
          "Delta Lake vs Parquet comparison"
        ]
      },
      {
        title: "Lakehouse Architecture",
        items: [
          "Bronze → Silver → Gold layer architecture",
          "Raw data ingestion (Bronze)",
          "Cleaned and conformed data (Silver)",
          "Business-level aggregates (Gold)",
          "Medallion architecture best practices"
        ]
      },
      {
        title: "Advanced Delta Operations",
        items: [
          "Incremental pipeline using MERGE INTO",
          "Change Data Capture (CDC) basics",
          "Schema evolution and enforcement",
          "Vacuum old versions",
          "Delta table maintenance"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build Customer 360 data lakehouse with Delta",
          "Implement incremental upsert pipeline",
          "Create multi-layer medallion architecture",
          "Design CDC pipeline for database replication"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Production Engineering",
    subtitle: "Job-Ready Level",
    description: "Orchestration, monitoring, and production-grade pipeline development",
    color: "bg-teal-500",
    sections: [
      {
        title: "ETL/ELT Pipeline Design",
        items: [
          "Batch ingestion patterns",
          "Transformation layer design",
          "Analytics output generation",
          "Incremental load patterns (last_updated logic)",
          "Full vs incremental refresh strategies"
        ]
      },
      {
        title: "Workflow Orchestration",
        items: [
          "Apache Airflow DAGs",
          "Databricks Workflows",
          "Prefect flows",
          "Scheduling PySpark pipelines",
          "Retry logic and failure handling",
          "Alert mechanisms for pipeline failures"
        ]
      },
      {
        title: "Logging, Monitoring, and Debugging",
        items: [
          "Spark application logs",
          "Common failures: executor lost, shuffle errors, OOM",
          "Data validation checks in pipelines",
          "Handling corrupted files gracefully",
          "Monitoring pipeline health",
          "Setting up alerting systems"
        ]
      },
      {
        title: "Cloud and Tools Integration",
        items: [
          "S3, ADLS, GCS cloud storage",
          "Hive metastore integration",
          "Unity Catalog basics (Databricks)",
          "Git version control for code",
          "CI/CD basics for data pipelines"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Industry-Ready Portfolio",
    subtitle: "Capstone Projects",
    description: "Build real-world projects to demonstrate production-level skills",
    color: "bg-amber-500",
    sections: [
      {
        title: "Project 1: Big Data Sales Analytics Pipeline",
        items: [
          "Read raw CSV/JSON sales data",
          "Clean and transform datasets",
          "Join multiple data sources",
          "Output partitioned parquet files",
          "Generate daily KPI reports",
          "Skills: joins, groupBy, partitioned writes"
        ]
      },
      {
        title: "Project 2: Customer 360 Data Lakehouse",
        items: [
          "Bronze layer: raw data ingestion",
          "Silver layer: cleaned tables",
          "Gold layer: analytics aggregates",
          "MERGE for incremental upserts",
          "Skills: Delta Lake, merge operations, incremental loading"
        ]
      },
      {
        title: "Project 3: Real-Time Streaming Analytics",
        items: [
          "Stream clickstream data (Kafka optional)",
          "Implement windowed aggregations",
          "Store results in Delta/Parquet",
          "Real-time metrics dashboard",
          "Skills: streaming, watermarking, real-time aggregation"
        ]
      },
      {
        title: "Project 4: Performance Optimization Challenge",
        items: [
          "Run job on large dataset",
          "Optimize joins and partitioning",
          "Implement caching strategies",
          "Document Spark UI metrics analysis",
          "Skills: Spark UI, optimization, tuning"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Interview Preparation & Mastery",
    subtitle: "Career Ready",
    description: "Master interview questions and demonstrate industry expertise",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Spark Fundamentals Questions",
        items: [
          "Driver vs Executor architecture",
          "What are partitions and why they matter",
          "What causes shuffles in Spark",
          "Lazy evaluation explained",
          "Transformations vs Actions"
        ]
      },
      {
        title: "DataFrames and SQL Questions",
        items: [
          "groupBy vs window functions",
          "Different join types and use cases",
          "When to use broadcast joins",
          "Explain Catalyst optimizer",
          "SQL vs DataFrame API performance"
        ]
      },
      {
        title: "Optimization Questions",
        items: [
          "What causes slow Spark jobs?",
          "When to use repartition vs coalesce?",
          "When and how to cache data?",
          "Identifying and fixing data skew",
          "Small files problem solutions"
        ]
      },
      {
        title: "Scenario-Based Questions",
        items: [
          "My join is very slow, what will you do?",
          "Small files problem in S3, how to fix?",
          "Skewed data in groupBy, how to fix?",
          "Out of memory errors, troubleshooting steps",
          "Pipeline takes too long, optimization approach"
        ]
      },
      {
        title: "60-Day Fast Track Plan",
        items: [
          "Days 1-10: Python + SQL + Spark basics",
          "Days 11-25: DataFrames, Joins, Window functions",
          "Days 26-40: Spark SQL + partitioning + I/O",
          "Days 41-50: Performance optimization + Spark UI",
          "Days 51-60: Delta Lake + projects + interview prep"
        ]
      },
      {
        title: "Industry Tool Stack",
        items: [
          "PySpark + Spark SQL",
          "Delta Lake",
          "Cloud storage: S3, ADLS, GCS",
          "Orchestration: Airflow, Databricks workflows",
          "Catalogs: Hive metastore, Unity Catalog",
          "Version control: Git + CI/CD basics"
        ]
      }
    ]
  }
];