"use client";
import React from "react";

const PandasCodingWithSagar = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Pandas for Data Analysis in Python — Coding With Sagar
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This beginner-friendly YouTube tutorial series introduces{" "}
          <strong>Pandas</strong>, one of the most widely used Python libraries
          for data analysis. The course is taught in Hindi by{" "}
          <strong>Sagar Chouksey</strong>, a popular programming educator on his
          channel <em>Coding With Sagar</em>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The first video is titled{" "}
          <em>
            “Pandas for Data Analysis in Python | Sagar Chouksey | Part-1”
          </em>, suggesting that it’s part of a multi-video series covering the
          fundamentals of Pandas in depth.
        </p>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Inferred Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Introduction & Setup:</strong> Installing Pandas via pip or
            conda, overview of Pandas and its role in data analysis.
          </li>
          <li>
            <strong>Foundational Data Structures:</strong> Understanding{" "}
            <code>Series</code> and <code>DataFrames</code>; creating structures
            from dictionaries, lists, and CSV files.
          </li>
          <li>
            <strong>Inspecting Data:</strong> Reading datasets using{" "}
            <code>read_csv</code>; exploring data with{" "}
            <code>.head()</code>, <code>.info()</code>, <code>.describe()</code>
            , <code>.shape</code>.
          </li>
          <li>
            <strong>Selecting Columns & Rows:</strong> Using{" "}
            <code>.loc[]</code>, <code>.iloc[]</code>, and boolean indexing.
          </li>
          <li>
            <strong>Basic Aggregations:</strong> Applying methods such as{" "}
            <code>.sum()</code>, <code>.mean()</code>, <code>.min()</code>,{" "}
            <code>.max()</code>, and <code>.nunique()</code>.
          </li>
          <li>
            <strong>Filtering & Grouping Data:</strong> Applying filters and
            using <code>.groupby()</code> for aggregated insights.
          </li>
          <li>
            <strong>Handling Missing Data:</strong> Detecting and managing
            missing values using <code>.isnull()</code>, <code>.dropna()</code>,
            and <code>.fillna()</code>.
          </li>
          <li>
            <strong>Advanced Operations:</strong> Combining DataFrames with{" "}
            <code>merge()</code> and concatenation tools.
          </li>
        </ul>

        {/* Learning Workflow */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Suggested Learning Workflow
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Start with the Part-1 video and practice alongside the examples.</li>
          <li>Experiment with your own datasets in CSV format.</li>
          <li>
            Explore each Pandas function interactively using Jupyter Notebook or
            Google Colab.
          </li>
          <li>
            Document your practice notebooks and build a small project, such as
            analyzing a dataset from Kaggle.
          </li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary & Recommendation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This Pandas tutorial series by <strong>Sagar Chouksey</strong> is well
          suited for <strong>beginners in Python data analysis</strong>. It
          covers foundational concepts with practical examples, helping learners
          get hands-on with real-world data quickly. As more parts are released,
          it can serve as a complete introduction to Pandas.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Platform:</strong> YouTube (Coding With Sagar)
          </p>
          <p className="mb-1">
            <strong>Instructor:</strong> Sagar Chouksey
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Level:</strong> Beginner
          </p>
        </div>
      </article>
    </div>
  );
};

export default PandasCodingWithSagar;
 