"use client";
import React from "react";

const PySparkCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          PySpark Tutorial | Full Course (From Zero to Pro!) — Ansh Lamba
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a detailed, all-in-one{" "}
          <strong>PySpark video tutorial</strong> created by{" "}
          <em>Ansh Lamba</em>. Clocking in at around{" "}
          <strong>5 hours and 54 minutes</strong>, it’s designed to guide learners
          from the basics to advanced PySpark operations for{" "}
          <strong>big data processing</strong>. Positioned as the only course you’ll
          need, this immersive tutorial takes you from setup to{" "}
          <em>real-world Spark applications</em>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ansh Lamba also offers a complementary course —{" "}
          <em>PySpark Optimization Full Course 2025</em> (~3 hours and 48 minutes) —
          focused on advanced performance tuning, execution planning, and scalability
          techniques.
        </p>

        {/* Modules Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules Covered
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Introduction to PySpark & Setup</strong> — Spark architecture, SparkContext, installation steps
          </li>
          <li>
            <strong>Resilient Distributed Datasets (RDDs)</strong> — Creating, transforming, and managing RDDs with{" "}
            <code>map</code>, <code>filter</code>, <code>reduce</code>, and <code>collect</code>
          </li>
          <li>
            <strong>DataFrames & Dataset API</strong> — Creating DataFrames, schema definitions, filters, transformations, and actions
          </li>
          <li>
            <strong>Spark SQL</strong> — Running SQL queries, temporary views, registering and using UDFs
          </li>
          <li>
            <strong>Handling Big Data Formats</strong> — Reading and writing Parquet, JSON, CSV; schema inference
          </li>
          <li>
            <strong>Performance & Optimization</strong> — Caching, persisting, partitioning, shuffling, and optimizing transformations
          </li>
          <li>
            <strong>PySpark Performance Tuning</strong> — Execution planning, broadcast joins, and window functions 
            (aligned with the optimization full course)
          </li>
          <li>
            <strong>Real-World Use Cases</strong> — Streaming data, ETL pipelines, batch processing patterns
          </li>
          <li>
            <strong>Integration Workflows</strong> — Using PySpark with AWS S3, Glue, or Databricks for production pipelines
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the course sequentially to build step-by-step mastery.</li>
          <li>Pause after each section and replicate examples locally (Databricks Community Edition or local cluster).</li>
          <li>Use sample datasets to practice transformations and pipeline building.</li>
          <li>Explore the Optimization course for in-depth performance tuning.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Fluency in building PySpark data pipelines.</li>
          <li>Ability to transition between RDD and DataFrame paradigms.</li>
          <li>Skill in tuning Spark jobs for scalability and performance.</li>
          <li>Preparedness for real-world ETL workflows and cloud integrations.</li>
        </ul>

        {/* Final Note */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Note
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ansh Lamba’s PySpark Full Course is a{" "}
          <strong>complete hands-on guide</strong> — from installing Spark to 
          mastering advanced optimization techniques. Combined with the{" "}
          <em>Optimization Full Course</em>, it equips learners with the 
          <strong>skills to handle big data pipelines at scale</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Instructor:</strong> Ansh Lamba
          </p>
          <p className="mb-1">
            <strong>Course Length:</strong> ~5h 54m (main course) + 3h 48m (optimization course)
          </p>
          <p>
            <strong>Focus:</strong> PySpark fundamentals, performance optimization, and real-world big data workflows
          </p>
        </div>
      </article>
    </div>
  );
};

export default PySparkCourse;
