"use client";
import React from "react";

const DataAnalystBootcamp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Data Analyst Bootcamp — Alex The Analyst (YouTube)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Alex Freberg, widely known as <strong>Alex The Analyst</strong>, offers a completely 
          free <strong>YouTube Bootcamp</strong> designed to teach essential tools and practices 
          for data analysis. This immersive program helps learners build a strong foundation 
          in SQL, Excel, Tableau, Power BI, and Python — complete with real-world projects. 
          The course is also supported by a <strong>GitHub repository</strong> containing code 
          files and project materials.
        </p>

        {/* Curriculum Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Curriculum Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>SQL – Basic, Intermediate & Advanced:</strong> Installation, creating tables, 
            SELECT, WHERE, GROUP BY, ORDER BY, joins, unions, CASE statements, window functions, 
            CTEs, stored procedures, subqueries.
          </li>
          <li>
            <strong>Excel Fundamentals:</strong> Functions, pivot tables, and dashboards (covered through projects).
          </li>
          <li>
            <strong>Tableau Visualizations:</strong> Build interactive dashboards via guided projects.
          </li>
          <li>
            <strong>Power BI:</strong> Create dynamic and shareable reports and dashboards.
          </li>
          <li>
            <strong>Python for Analysis:</strong> Data manipulation, scripting, and analytical workflows.
          </li>
          <li>
            <strong>Portfolio Projects:</strong> Hands-on practice with SQL, Excel, Python, Tableau, and Power BI.
          </li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Suggested approach to maximize your learning from the Bootcamp:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow each video or module sequentially for structured learning.</li>
          <li>Clone the GitHub repository and practice exercises locally.</li>
          <li>Pause tutorials to apply concepts — e.g., writing SQL queries or creating dashboards.</li>
          <li>Document and showcase your completed projects in your GitHub portfolio.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Proficiency in SQL (basic to advanced queries).</li>
          <li>Practical knowledge of Excel for analysis and visualization.</li>
          <li>Hands-on skills in Tableau and Power BI for dashboards.</li>
          <li>Python scripting for data manipulation and analysis.</li>
          <li>Portfolio-ready real-world projects across multiple tools.</li>
        </ul>

        {/* Community Feedback */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Community Feedback
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Bootcamp is highly recommended by learners across communities. On Class Central, 
          it is recognized for offering around <strong>20 hours of comprehensive training</strong> 
          covering SQL, Excel, Tableau, Power BI, Python, and cloud tools. Reddit learners highlight 
          its practical orientation, step-by-step clarity, and usefulness for career changers.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            “I am almost done with it... as someone in his 40s wanting a career change, I appreciate this.”
          </li>
          <li>
            “Alex is great at explaining at a 5th-grade level… He introduces a tool, shows installation, and then gets hands-on.”
          </li>
        </ul>

        {/* Summary & Recommendation */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary & Recommendation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <em>Data Analyst Bootcamp</em> by Alex The Analyst is one of the most accessible 
          and comprehensive free resources for aspiring analysts. Its structured curriculum, 
          hands-on projects, and community recognition make it an excellent starting point 
          for anyone transitioning into data analytics.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube + GitHub</p>
          <p className="mb-1"><strong>Instructor:</strong> Alex Freberg (Alex The Analyst)</p>
          <p className="mb-1"><strong>Language:</strong> English</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default DataAnalystBootcamp;
