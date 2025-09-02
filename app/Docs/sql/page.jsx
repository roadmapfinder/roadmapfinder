"use client";
import React from "react";

const SqlApnaCollege = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Complete SQL in One Shot — Apna College (Shradha Khapra)
        </h1>

        {/* Course Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a one-shot <strong>SQL crash course</strong> designed for 
          quick revision and placement preparation. Taught by 
          <strong> Shradha Khapra</strong>, co-founder of Apna College, 
          the session covers all fundamental SQL concepts in a single video. 
          Supporting <em>lecture slides (notes)</em> are also available on 
          Apna College’s website for structured reinforcement.
        </p>

        {/* Course Format & Resources */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Format & Resources
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Delivery:</strong> Single, comprehensive video session covering SQL end-to-end.</li>
          <li><strong>Materials:</strong> Downloadable lecture slides (PDFs) from Apna College’s Notes section.</li>
        </ul>

        {/* Core Topics */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Topics Likely Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Introduction to SQL & Databases:</strong> RDBMS basics, importance of SQL.</li>
          <li><strong>Data Types & Table Structures:</strong> INT, VARCHAR, DATE; schema definitions.</li>
          <li><strong>Basic Queries:</strong> SELECT, WHERE, ORDER BY, LIMIT.</li>
          <li><strong>Data Manipulation:</strong> INSERT, UPDATE, DELETE.</li>
          <li><strong>Joins & Set Operations:</strong> INNER, LEFT, RIGHT, FULL OUTER joins.</li>
          <li><strong>Aggregation & Grouping:</strong> COUNT, SUM, AVG, GROUP BY, HAVING.</li>
          <li><strong>Schema & Constraints:</strong> CREATE, ALTER, DROP; PRIMARY/FOREIGN keys, NOT NULL.</li>
          <li><strong>Subqueries:</strong> Nested queries for advanced filtering.</li>
          <li><strong>Views & Indexing:</strong> Creating views, optimizing with indexes.</li>
        </ul>

        {/* Suggested Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Flow
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To maximize learning and retention, follow this structure:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the complete video in one go to understand the flow.</li>
          <li>Pause at each concept and practice queries in a database environment.</li>
          <li>Use Apna College slides as a structured checklist.</li>
          <li>Revise commands regularly for better placement prep.</li>
        </ul>

        {/* What You'll Gain */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Gain
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong foundational understanding of relational databases.</li>
          <li>Ability to confidently write SQL queries for real-world scenarios.</li>
          <li>Concise revision toolset (video + notes) tailored for interviews and placements.</li>
        </ul>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Next Steps
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Practice on MySQL, PostgreSQL, or SQLite to solidify concepts.</li>
          <li>Solve SQL exercises on HackerRank or LeetCode.</li>
          <li>Pair this tutorial with Apna College’s DBMS crash course for deeper understanding.</li>
        </ul>

        {/* Course Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <em>“Complete SQL in One Shot”</em> by Shradha Khapra is a 
          concise, placement-oriented course that balances conceptual clarity 
          with hands-on SQL query writing. Its combination of a 
          <strong> comprehensive video session </strong> and 
          <strong> downloadable notes </strong> makes it perfect for 
          both revision and interview preparation.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (Apna College)</p>
          <p className="mb-1"><strong>Instructor:</strong> Shradha Khapra</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default SqlApnaCollege;
