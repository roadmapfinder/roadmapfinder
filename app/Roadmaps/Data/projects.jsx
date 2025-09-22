// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-csv-etl",
    level: "Beginner",
    title: "CSV → Database ETL Pipeline",
    description:
      "Learn to transform CSV data before loading it into a database using Python, Pandas, and automate ETL with Airflow/Dagster.",
    url: "https://www.youtube.com/watch?v=y20tLpSBZS4" // ETL Tutorial: Advanced CSV to Database Mapping
  },
  {
    id: "phase1-web-scraping",
    level: "Beginner",
    title: "Web Scraping Data Pipeline",
    description:
      "Scrape data from a public website and load it into PostgreSQL. Learn data cleaning, batch ingestion, and cloud storage integration.",
    url: "https://www.youtube.com/watch?v=6lRynB8i94Y" // Build your first web scraping ETL Pipeline using Python
  },
  {
    id: "phase1-log-processing",
    level: "Beginner",
    title: "Log Processing Pipeline",
    description:
      "Parse application logs (JSON/CSV), transform into structured format, and load into Elasticsearch or a data warehouse.",
    url: "https://www.youtube.com/watch?v=9ILNzR95AzU" // Step by step guide to Pipeline Logging
  },
  {
    id: "phase2-twitter-kafka",
    level: "Intermediate",
    title: "Real-Time Twitter/Kafka Stream",
    description:
      "Stream tweets using Twitter API and Apache Kafka, process with Spark Structured Streaming or Flink, and store results in Cassandra/Elastic/BigQuery.",
    url: "https://www.youtube.com/watch?v=DROI7I2sbj8" // Real-Time Twitter Streaming with Apache Kafka & Python
  },
  {
    id: "phase2-iot-pipeline",
    level: "Intermediate",
    title: "IoT Sensor Data Pipeline",
    description:
      "Simulate IoT sensor readings, stream data to Kafka, process with Spark/Flink, and visualize metrics using Grafana.",
    url: "https://www.youtube.com/watch?v=KLSfXCYLDMQ" // This AWS IoT Data Pipeline Runs Completely Serverless!
  },
  {
    id: "phase2-data-warehouse-dbt",
    level: "Intermediate",
    title: "Data Warehouse + dbt Project",
    description:
      "Ingest an e-commerce dataset, build star schema in Snowflake/BigQuery, transform with dbt, and create reports in Looker/Metabase.",
    url: "https://www.youtube.com/watch?v=C6BNAfaeqXY" // dbt(Data Build Tool) crash course for beginners
  },
  {
    id: "phase3-lakehouse",
    level: "Advanced",
    title: "Batch + Streaming Lakehouse with Delta/Iceberg/Hudi",
    description:
      "Build hybrid pipelines with batch ingestion from CSVs and real-time Kafka streams, storing data in Delta Lake or Apache Iceberg and querying with Spark SQL + Presto/Trino.",
    url: "https://www.youtube.com/watch?v=iL4tub9GIu0" // DATABRICKS - DELTA LIVE TABLES - Medallion - Streaming
  },
  {
    id: "phase3-netflix-analytics",
    level: "Advanced",
    title: "End-to-End Data Platform (Mini Netflix Analytics)",
    description:
      "Collect user streaming events, process via Kafka → Spark/Flink → Delta Lake, transform with dbt, orchestrate with Airflow, and create dashboards for analytics.",
    url: "https://www.youtube.com/watch?v=tjIWRqqMDaw" // Full Data Science Project: Netflix Data Analysis
  },
  {
    id: "phase3-data-quality-lineage",
    level: "Advanced",
    title: "Data Quality + Lineage System",
    description:
      "Validate incoming data with Great Expectations, integrate OpenLineage for metadata tracking, store validation results in a warehouse, and monitor data quality KPIs.",
    url: "https://www.youtube.com/watch?v=YhvCS_UXkiI" // Building Scraping Pipelines With Apache Airflow
  },
  {
    id: "phase3-cloud-data-pipeline",
    level: "Advanced",
    title: "Modern Cloud Data Engineering Project",
    description:
      "Build a cloud-native data pipeline: Kafka → dbt + BigQuery/Snowflake → Airflow/Dagster Cloud, with monitoring via DataDog and OpenLineage.",
    url: "https://www.youtube.com/watch?v=OLXkGB7krGo" // Code along - build an ELT Pipeline in 1 Hour (dbt, Snowflake, Airflow)
  },
  {
    id: "phase4-capstone-youtube",
    level: "Capstone",
    title: "YouTube Trending Analytics Platform",
    description:
      "Scrape YouTube trending video data daily, store raw data in S3, process with Spark, transform with dbt, schedule with Airflow, and expose metrics via Grafana dashboard.",
    url: "https://www.youtube.com/watch?v=l74gAP-qDms" // End to End Web Scraping and ML Data Pipeline Project Using Python
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🛠 Data Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced Data Engineering projects, with English & Hindi tutorials.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, code along, customize, and deploy projects. 
          Document them well and polish top 2–3 into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
