"use client";
import React from "react";

const DataVisualizationCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Complete Data Visualization Course — Matplotlib & Seaborn (Sheryians AI School)
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A one-shot, beginner-friendly tutorial that teaches{" "}
          <strong>core data visualization techniques in Python</strong> using both{" "}
          <em>Matplotlib</em> (the foundational plotting library) and{" "}
          <em>Seaborn</em> (a high-level statistical visualization library built on Matplotlib).  
          Tailored for learners who want to quickly get up to speed with{" "}
          <strong>visual storytelling in Python</strong>.
        </p>

        {/* Modules Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules Covered
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Introduction to Data Visualization</strong> — Why visualization matters; 
            differences between Matplotlib & Seaborn
          </li>
          <li>
            <strong>Matplotlib Basics</strong> — Importing, creating simple plots, customizing 
            axes/labels, and setting titles
          </li>
          <li>
            <strong>Plot Types with Matplotlib</strong> — Line plots, bar charts, scatter plots, 
            histograms, pie charts
          </li>
          <li>
            <strong>Styling and Layouts</strong> — Legends, grids, color/style themes, subplots 
            (multiple visuals together)
          </li>
          <li>
            <strong>Introduction to Seaborn</strong> — High-level plotting API, styling themes, 
            integration with Pandas
          </li>
          <li>
            <strong>Seaborn Plot Types</strong> — <code>sns.barplot</code>, <code>sns.scatterplot</code>,{" "}
            <code>sns.histplot</code>, <code>sns.boxplot</code>, etc.
          </li>
          <li>
            <strong>Statistical Visualizations</strong> — Facet grids, violin plots, pair plots, 
            regression visuals
          </li>
          <li>
            <strong>Final Example / Mini Project</strong> — Building a combined visualization 
            (e.g., dashboard or multi-plot figure)
          </li>
        </ol>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow a structured, beginner-friendly tutorial format in Hindi.</li>
          <li>Practice by coding along with Matplotlib and Seaborn examples.</li>
          <li>Apply learning to build a final combined visualization mini project.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understand the strengths and differences between Matplotlib and Seaborn.</li>
          <li>Gain the ability to create, customize, and style plots in Python.</li>
          <li>Learn to represent data statistically with Seaborn’s advanced charts.</li>
          <li>Build a polished final visualization project to showcase skills.</li>
        </ul>

        {/* Final Note */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Note
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This course is a <strong>fast-track path to mastering Python visualization</strong>. 
          By combining <em>Matplotlib’s flexibility</em> with <em>Seaborn’s simplicity</em>, 
          learners can quickly move from basic plots to professional-quality statistical graphics.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Platform:</strong> Sheryians AI School (YouTube)
          </p>
          <p className="mb-1">
            <strong>Mode:</strong> One-shot tutorial video
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Focus:</strong> Data visualization fundamentals using Matplotlib & Seaborn
          </p>
        </div>
      </article>
    </div>
  );
};

export default DataVisualizationCourse;
