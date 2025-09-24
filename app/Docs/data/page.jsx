"use client";
import React from "react";

const DataEngineeringWithPythonVideo = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          Data Engineering with Python and AI/LLMs — Data Loading Tutorial
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The{" "}
          <strong>
            “Data Engineering with Python and AI/LLMs – Data Loading Tutorial”
          </strong>{" "}
          is a free YouTube workshop by <strong>FreeCodeCamp</strong> in
          collaboration with <strong>Data Talks Club</strong>. It focuses on the{" "}
          <em>extract → transform → load (ETL / ELT)</em> portion of data
          engineering, especially using <strong>Python</strong> and{" "}
          <strong>dlt (Data Loading Tool)</strong> for building pipelines. The
          video is divided into two parts (Alexey’s and Adrian’s), covering data
          ingestion, schema management, orchestration, and even{" "}
          <strong>modern LLM-powered pipelines</strong>.
        </p>

        {/* Outline */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Detailed Outline (with timestamps)
        </h2>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Alexey’s Part
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>0:00:00 – Introduction</li>
          <li>0:08:02 – What is data ingestion</li>
          <li>0:10:04 – Extracting data: Streaming & Batching</li>
          <li>0:14:00 – Extracting data: Working with REST API</li>
          <li>0:29:36 – Normalizing data</li>
          <li>0:43:41 – Loading data into DuckDB</li>
          <li>0:48:39 – Dynamic schema management</li>
          <li>0:56:26 – What is next?</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Adrian’s Part
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>0:56:36 – Introduction & Overview</li>
          <li>1:02:08 – Extracting data with dlt: RestAPI Client</li>
          <li>1:08:05 – dlt Resources</li>
          <li>1:10:42 – Configuring secrets</li>
          <li>1:15:12 – Normalizing data with dlt</li>
          <li>1:24:09 – Data Contracts</li>
          <li>1:31:05 – Alerting schema changes</li>
          <li>1:33:56 – Loading data with dlt & write dispositions</li>
          <li>1:37:34 – Incremental loading</li>
          <li>1:43:46 – SQL DB → SQL DB loading</li>
          <li>1:47:46 – Backfilling</li>
          <li>1:50:42 – SCD2 (Slowly Changing Dimensions type 2)</li>
          <li>1:54:29 – Performance tuning</li>
          <li>2:03:12 – Loading to Data Lakes, Lakehouses, Catalogs</li>
          <li>2:12:17 – Loading to Warehouses / MPPs, Staging</li>
          <li>2:18:15 – Deployment & orchestration</li>
          <li>2:18:15 – GitHub Actions / crontab / Dagster / Airflow</li>
          <li>3:07:00 – LLM pipelines: Understanding the challenge</li>
          <li>
            3:10:35 – LLM pipelines: Prompts & LLM-friendly documentation
          </li>
          <li>3:31:38 – LLM pipelines: Demo</li>
        </ul>

        {/* Topics Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Topics / Concepts Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Data Ingestion / Extraction</strong> — Streaming vs batching,
            APIs, SQL databases.
          </li>
          <li>
            <strong>Normalization & Transformation</strong> — Structuring incoming
            data to consistent schema.
          </li>
          <li>
            <strong>Loading & Storage</strong> — DuckDB, warehouses, data lakes,
            lakehouses.
          </li>
          <li>
            <strong>Dynamic Schema Management</strong> — Handling schema changes
            gracefully.
          </li>
          <li>
            <strong>dlt Library</strong> — REST client, resources, normalization,
            incremental loading.
          </li>
          <li>
            <strong>Data Contracts & Schema Alerts</strong> — Enforcing
            consistency, detecting schema drifts.
          </li>
          <li>
            <strong>Incremental Loading, Backfills, SCD2</strong> — Updating and
            maintaining historical consistency.
          </li>
          <li>
            <strong>Performance Tuning</strong> — Optimizing pipelines and loads.
          </li>
          <li>
            <strong>Orchestration & Deployment</strong> — GitHub Actions,
            crontab, Dagster, Airflow.
          </li>
          <li>
            <strong>Integration with Storage Systems</strong> — Data lakes,
            lakehouses, warehouses, catalogs.
          </li>
          <li>
            <strong>Using LLMs in Pipelines</strong> — Prompt design,
            documentation, pipeline generation.
          </li>
        </ul>

        {/* Covered vs Not Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What It Covers vs What It Does Not
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Covered Well
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Data ingestion from APIs, SQL, streams</li>
          <li>Data normalization & transformation logic</li>
          <li>dlt pipelines: setup, resources, incremental loads</li>
          <li>Schema management & data contracts</li>
          <li>Deployment & orchestration strategies</li>
          <li>Incremental, backfills, SCD2 handling</li>
          <li>Integration with warehouses & lakes</li>
          <li>LLM integration in data pipelines</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Gaps / Less Emphasis
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Data modeling, star/snowflake schemas</li>
          <li>Distributed systems (Hadoop, Spark internals)</li>
          <li>Streaming frameworks (Kafka, Flink)</li>
          <li>Advanced real-time processing</li>
          <li>Query optimization, indexing, partitioning</li>
          <li>Fundamentals of relational DB theory</li>
          <li>Large-scale project management or end-to-end architecture</li>
        </ul>

        {/* Fit in Larger Path */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          How This Fits in a Larger Data Engineering Path
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This video can be seen as{" "}
          <strong>one module in a broader Data Engineering with Python path</strong>.
          It emphasizes ingestion and pipelines. A full path would also include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Python fundamentals (data types, async, modules)</li>
          <li>Databases & SQL (joins, normalization)</li>
          <li>Data modeling & schema design</li>
          <li>ETL / ELT pipelines (this video)</li>
          <li>Streaming & real-time data (Kafka, Spark Streaming, Flink)</li>
          <li>Distributed frameworks (Spark, Hadoop)</li>
          <li>Data storage (lakes, warehouses, columnar stores)</li>
          <li>Workflow orchestration (Airflow, Dagster)</li>
          <li>Data governance, quality, security</li>
          <li>ML / AI pipelines</li>
          <li>Optimization, scaling, monitoring</li>
          <li>LLMs in data pipelines (covered partially here)</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The{" "}
          <strong>
            Data Engineering with Python and AI/LLMs – Data Loading Tutorial
          </strong>{" "}
          provides an <em>in-depth practical look</em> at ingestion and pipeline
          building with <strong>dlt</strong>. It fills a crucial gap for learners
          who want to learn <strong>modern ETL/ELT workflows</strong> in Python,
          while also exploring the cutting edge of{" "}
          <strong>LLM-integrated pipelines</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructors:</strong> Alexey & Adrian (Data Talks Club)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> FreeCodeCamp / YouTube
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~3h+ (split into two parts)
          </p>
          <p>
            <strong>Focus:</strong> Data ingestion, pipelines, orchestration, LLM
            integration
          </p>
        </div>
      </article>
    </div>
  );
};

export default DataEngineeringWithPythonVideo;
