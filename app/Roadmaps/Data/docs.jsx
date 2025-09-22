// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Apache Spark Documentation",
    description:
      "Official docs for Spark 3.x — DataFrame API, Spark SQL, PySpark, advanced configuration, and performance tuning.",
    url: "https://spark.apache.org/docs/latest/",
    citation: "Apache Spark Docs",
  },
  {
    title: "Apache Kafka Documentation",
    description:
      "Producer/consumer API reference, Streams API, Connectors ecosystem, exactly-once semantics, and best practices.",
    url: "https://kafka.apache.org/documentation/",
    citation: "Apache Kafka Docs",
  },
  {
    title: "Apache Flink Documentation",
    description:
      "Stream & batch processing — DataStream, Table/SQL APIs, state management, windowing, and deployment guides.",
    url: "https://nightlies.apache.org/flink/flink-docs-stable/",
    citation: "Apache Flink Docs",
  },
  {
    title: "Apache Airflow Documentation",
    description:
      "Orchestration platform — DAG authoring, operators, sensors, scheduling, and production deployment best practices.",
    url: "https://airflow.apache.org/docs/",
    citation: "Apache Airflow Docs",
  },
  {
    title: "Dagster Documentation",
    description:
      "Modern data orchestration alternative — asset-based workflows, testing, observability, and cloud-native execution.",
    url: "https://docs.dagster.io/",
    citation: "Dagster Docs",
  },
  {
    title: "dbt (Data Build Tool)",
    description:
      "Analytics engineering platform — SQL transformations, testing, macros, docs, and deployment for DWs like Snowflake & BigQuery.",
    url: "https://docs.getdbt.com/",
    citation: "dbt Labs Docs",
  },
  {
    title: "Delta Lake Documentation",
    description:
      "Databricks’ open table format for lakehouses — ACID transactions, schema evolution, and time travel queries.",
    url: "https://docs.delta.io/",
    citation: "Delta Lake Docs",
  },
  {
    title: "Apache Iceberg Documentation",
    description:
      "Open table format with snapshots, partitioning, time-travel, and engine-agnostic support for lakehouse architectures.",
    url: "https://iceberg.apache.org/docs/latest/",
    citation: "Apache Iceberg Docs",
  },
  {
    title: "Apache Hudi Documentation",
    description:
      "Lakehouse storage engine for streaming data ingestion, incremental processing, and ACID transactions.",
    url: "https://hudi.apache.org/docs/overview/",
    citation: "Apache Hudi Docs",
  },
  {
    title: "Snowflake Documentation",
    description:
      "Data Cloud docs — Snowpark APIs, data loading, security, performance optimization, and data engineering patterns.",
    url: "https://docs.snowflake.com/",
    citation: "Snowflake Docs",
  },
  {
    title: "Google BigQuery Documentation",
    description:
      "Serverless cloud data warehouse — ingestion, partitioning, clustering, cost optimization, and SQL analytics.",
    url: "https://cloud.google.com/bigquery/docs",
    citation: "Google BigQuery Docs",
  },
  {
    title: "Databricks Documentation",
    description:
      "Lakehouse platform docs — Delta Lake, batch & streaming pipelines, ML integration, and production deployment.",
    url: "https://docs.databricks.com/",
    citation: "Databricks Docs",
  },
  {
    title: "Great Expectations Documentation",
    description:
      "Data quality and validation framework — expectations, test suites, data docs, and CI/CD integration.",
    url: "https://docs.greatexpectations.io/",
    citation: "Great Expectations Docs",
  },
  {
    title: "OpenLineage Documentation",
    description:
      "Open metadata & lineage standard — integrations with Airflow, dbt, and other orchestration tools.",
    url: "https://openlineage.io/docs/",
    citation: "OpenLineage Docs",
  },
  {
    title: "Refonte Learning Blog",
    description:
      "Curated 2025 overview of essential DE tools like Spark, Kafka, Airflow, Snowflake, and dbt with learning paths.",
    url: "https://www.refontelearning.com/blog/top-data-engineering-tools-you-need-to-learn-in-2025-kafka-spark-airflow-and-more",
    citation: "Refonte Learning",
  },
  {
    title: "Rakuten SixthSense Blog",
    description:
      "Top Data Engineering concepts and architectures — Spark, Kafka, Airflow, dbt, Snowflake, and Iceberg.",
    url: "https://sixthsense.rakuten.com/blog/Top-Data-Engineering-Concepts-and-Architectures-You-Need-to-Know",
    citation: "Rakuten SixthSense",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Data Engineering Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every Data Engineer must
          know — covering ETL frameworks, streaming, orchestration, lakehouse
          formats, data quality, and cloud platforms.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
