// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Apache Spark Official Documentation",
    description:
      "The primary official documentation for Apache Spark covering core concepts, architecture, Spark SQL, Structured Streaming, MLlib, and cluster deployment.",
    url: "https://spark.apache.org/docs/latest/",
    citation: "Apache Spark — Official Documentation",
  },
  {
    title: "PySpark Official API Reference",
    description:
      "Complete official PySpark API reference including SparkSession, DataFrame, SQL functions, window functions, UDFs, and Spark configuration.",
    url: "https://spark.apache.org/docs/latest/api/python/",
    citation: "Apache Spark — PySpark API Docs",
  },
  {
    title: "PySpark DataFrame API",
    description:
      "Detailed reference for the PySpark DataFrame API, the most widely used abstraction for big data processing in Spark-based production systems.",
    url: "https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html",
    citation: "Apache Spark — PySpark DataFrame API",
  },
  {
    title: "Spark SQL & DataFrame Programming Guide",
    description:
      "Official guide explaining Spark SQL, DataFrame operations, query optimization (Catalyst), joins, aggregations, and SQL interoperability.",
    url: "https://spark.apache.org/docs/latest/sql-programming-guide.html",
    citation: "Apache Spark — Spark SQL Programming Guide",
  },
  {
    title: "Structured Streaming Programming Guide",
    description:
      "Official documentation for real-time stream processing using Spark Structured Streaming, including event-time windows, watermarks, and fault tolerance.",
    url: "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html",
    citation: "Apache Spark — Structured Streaming Guide",
  },
  {
    title: "Spark Performance Tuning Guide",
    description:
      "Official performance tuning guide covering partitioning, caching, shuffles, joins, memory management, and Spark configuration best practices.",
    url: "https://spark.apache.org/docs/latest/tuning.html",
    citation: "Apache Spark — Performance Tuning",
  },
  {
    title: "Spark Configuration Reference",
    description:
      "Complete reference of all Spark configuration properties used to tune executors, memory, shuffle behavior, serialization, and cluster execution.",
    url: "https://spark.apache.org/docs/latest/configuration.html",
    citation: "Apache Spark — Configuration Docs",
  },
  {
    title: "Databricks PySpark Documentation",
    description:
      "Databricks official PySpark documentation explaining how PySpark is used in real-world lakehouse architectures and production pipelines.",
    url: "https://docs.databricks.com/en/pyspark/index.html",
    citation: "Databricks Docs — PySpark",
  },
  {
    title: "Databricks PySpark API Reference",
    description:
      "Databricks-hosted PySpark API reference with examples, optimized for production usage on Databricks Lakehouse Platform.",
    url: "https://api-docs.databricks.com/python/pyspark/latest/index.html",
    citation: "Databricks API Docs — PySpark",
  },
  {
    title: "Delta Lake Official Documentation",
    description:
      "Official Delta Lake documentation covering ACID transactions, MERGE (upserts), time travel, schema evolution, and lakehouse architecture.",
    url: "https://docs.delta.io/latest/index.html",
    citation: "Delta Lake — Official Docs",
  },
  {
    title: "Delta Lake on Databricks",
    description:
      "Production-focused Delta Lake documentation for Databricks users, including optimization techniques like Z-ORDER and OPTIMIZE.",
    url: "https://docs.databricks.com/en/delta/index.html",
    citation: "Databricks Docs — Delta Lake",
  },
  {
    title: "Apache Spark GitHub Repository",
    description:
      "Official Apache Spark GitHub repository containing source code, configuration defaults, examples, and release notes.",
    url: "https://github.com/apache/spark",
    citation: "Apache Spark — GitHub Repository",
  },
  {
    title: "Delta Lake GitHub Repository",
    description:
      "Official Delta Lake GitHub repository with implementation details, releases, and advanced lakehouse features.",
    url: "https://github.com/delta-io/delta",
    citation: "Delta Lake — GitHub Repository",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚡ PySpark Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Explore official Apache Spark, PySpark, Databricks, and Delta Lake
          documentation to master big data processing and become an
          industry-ready PySpark engineer.
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
