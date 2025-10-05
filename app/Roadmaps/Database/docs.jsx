import React from "react";

const docs = [
  // Relational / SQL Databases
  {
    id: "postgresql-docs",
    level: "Essential",
    title: "PostgreSQL Official Documentation",
    description:
      "Complete reference, tutorials, and developer guides for PostgreSQL.",
    url: "https://www.postgresql.org/docs/",
    instructor: "PostgreSQL Global Development Group",
    language: "English",
  },
  {
    id: "mysql-docs",
    level: "Essential",
    title: "MySQL Reference Manual",
    description:
      "Official manual for MySQL: SQL syntax, configurations, utilities.",
    url: "https://dev.mysql.com/doc/",
    instructor: "Oracle / MySQL",
    language: "English",
  },
  {
    id: "mariadb-docs",
    level: "Essential",
    title: "MariaDB Documentation",
    description:
      "Docs for MariaDB: features, administration, SQL compatibility.",
    url: "https://mariadb.org/documentation/",
    instructor: "MariaDB Foundation",
    language: "English",
  },
  {
    id: "cockroachdb-docs",
    level: "Advanced",
    title: "CockroachDB Documentation",
    description:
      "Distributed SQL database docs: architecture, SQL, deployment.",
    url: "https://www.cockroachlabs.com/docs/stable/",
    instructor: "Cockroach Labs",
    language: "English",
  },
  {
    id: "tidb-docs",
    level: "Advanced",
    title: "TiDB Documentation",
    description:
      "TiDB docs: distributed transactional database, compatibility, operations.",
    url: "https://docs.pingcap.com/",
    instructor: "PingCAP",
    language: "English",
  },

  // NoSQL / NewSQL / Cloud-native DBs
  {
    id: "mongodb-docs",
    level: "Essential",
    title: "MongoDB Manual & Docs",
    description: "Official documentation for MongoDB — CRUD, aggregation, drivers.",
    url: "https://www.mongodb.com/docs/",
    instructor: "MongoDB, Inc.",
    language: "English",
  },
  {
    id: "redis-docs",
    level: "Essential",
    title: "Redis Documentation",
    description: "Commands, data structures, modules, deployment guide.",
    url: "https://redis.io/docs/",
    instructor: "Redis Labs",
    language: "English",
  },
  {
    id: "cassandra-docs",
    level: "Advanced",
    title: "Apache Cassandra Documentation",
    description:
      "Cassandra internals, CQL reference, deployment & operations guide.",
    url: "https://cassandra.apache.org/doc/latest/",
    instructor: "Apache Cassandra",
    language: "English",
  },
  {
    id: "dynamodb-docs",
    level: "Advanced",
    title: "Amazon DynamoDB Developer Guide",
    description:
      "AWS official guide for DynamoDB: API, design patterns, scaling.",
    url: "https://docs.aws.amazon.com/dynamodb/",
    instructor: "Amazon Web Services",
    language: "English",
  },
  {
    id: "snowflake-docs",
    level: "Advanced",
    title: "Snowflake Documentation",
    description:
      "Snowflake’s official docs: architecture, SQL, data loading, security.",
    url: "https://docs.snowflake.com/",
    instructor: "Snowflake Inc.",
    language: "English",
  },

  // Big Data / Distributed / Streaming / Analytics
  {
    id: "spark-docs",
    level: "Essential",
    title: "Apache Spark Documentation",
    description:
      "Core and Structured APIs, deployment, streaming & MLlib docs.",
    url: "https://spark.apache.org/docs/latest/",
    instructor: "The Apache Software Foundation",
    language: "English",
  },
  {
    id: "hadoop-docs",
    level: "Optional",
    title: "Apache Hadoop Documentation",
    description:
      "HDFS, MapReduce, YARN, ecosystem components reference.",
    url: "https://hadoop.apache.org/docs/",
    instructor: "Apache Hadoop",
    language: "English",
  },

  // Cloud / Infrastructure / Tools
  {
    id: "aws-rds-docs",
    level: "Essential",
    title: "AWS RDS & Database Services Docs",
    description:
      "Documentation for AWS managed relational DB services (RDS, Aurora).",
    url: "https://docs.aws.amazon.com/rds/",
    instructor: "Amazon Web Services",
    language: "English",
  },
  {
    id: "azure-cosmos-docs",
    level: "Optional",
    title: "Azure Cosmos DB Documentation",
    description:
      "Microsoft’s multi-model database as a service (NoSQL, graph, etc.).",
    url: "https://learn.microsoft.com/azure/cosmos-db/",
    instructor: "Microsoft Azure",
    language: "English",
  },
  {
    id: "gcp-bigquery-docs",
    level: "Essential",
    title: "Google BigQuery Documentation",
    description:
      "Serverless data warehouse docs: SQL, loading, pricing, best practices.",
    url: "https://cloud.google.com/bigquery/docs",
    instructor: "Google Cloud",
    language: "English",
  },

  // Tools / Migration / DevOps & Ops
  {
    id: "flyway-docs",
    level: "Optional",
    title: "Flyway Documentation",
    description:
      "Database migrations tool: SQL-based versioning & migration docs.",
    url: "https://flywaydb.org/documentation/",
    instructor: "Redgate / Flyway",
    language: "English",
  },
  {
    id: "liquibase-docs",
    level: "Optional",
    title: "Liquibase Documentation",
    description:
      "Open source database refactoring & versioning tool docs.",
    url: "https://www.liquibase.com/documentation",
    instructor: "Liquibase",
    language: "English",
  },
  {
    id: "prometheus-docs",
    level: "Optional",
    title: "Prometheus Documentation",
    description:
      "Monitoring & alerting: metrics, query language, exporters.",
    url: "https://prometheus.io/docs/",
    instructor: "Prometheus Authors",
    language: "English",
  },
  {
    id: "grafana-docs",
    level: "Optional",
    title: "Grafana Documentation",
    description:
      "Visualization tool for metrics & dashboards (used in DB ops).",
    url: "https://grafana.com/docs/",
    instructor: "Grafana Labs",
    language: "English",
  },

  // Bonus / Ecosystem
  {
    id: "dbt-docs",
    level: "Optional",
    title: "dbt Documentation",
    description:
      "Analytics engineering tool: transform data in warehouse and docs.",
    url: "https://docs.getdbt.com/",
    instructor: "dbt Labs",
    language: "English",
  },
  {
    id: "airflow-docs",
    level: "Optional",
    title: "Apache Airflow Documentation",
    description:
      "Workflow orchestration for ETL / data pipelines.",
    url: "https://airflow.apache.org/docs/",
    instructor: "Apache Airflow",
    language: "English",
  },
];

export default function DatabaseDocs() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📚 Official Database & Data Infrastructure Documentation
          </h2>
          <p className="mt-2 text-gray-600">
            Key reference docs for relational, NoSQL, cloud, and data infrastructure you must know.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${d.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {d.level}
              </span>
              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {d.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{d.description}</p>
              <p className="mt-2 text-gray-500 text-xs">
                Source: {d.instructor} | Language: {d.language}
              </p>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Visit Documentation ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Use these links as your authoritative reference hubs as you learn and build
          production-grade systems.
        </footer>
      </div>
    </section>
  );
}
