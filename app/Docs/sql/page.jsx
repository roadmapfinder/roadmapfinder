"use client";
import React from "react";

const SQLCodeWithHarryPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-emerald-500 pb-4">
          SQL Tutorial for Beginners (Complete Course using MySQL)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>complete beginner-friendly SQL course</strong> by
          <strong> CodeWithHarry</strong> that teaches{" "}
          <strong>Structured Query Language (SQL)</strong> using{" "}
          <strong>MySQL</strong>. The course focuses on building strong database
          fundamentals through hands-on queries, real examples, and practical
          relational database concepts.
        </p>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules & Syllabus
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Module 1: Introduction to SQL</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>What is SQL and why it is used</li>
              <li>Role of SQL in software development & data analysis</li>
              <li>Introduction to MySQL</li>
              <li>Installing MySQL on Windows, Linux & macOS</li>
            </ul>
          </li>

          <li>
            <strong>Module 2: Database & Table Fundamentals</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Creating and deleting databases</li>
              <li>Creating tables</li>
              <li>Understanding SQL data types</li>
              <li>Table constraints (NOT NULL, UNIQUE)</li>
            </ul>
          </li>

          <li>
            <strong>Module 3: CRUD Operations</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>INSERT records into tables</li>
              <li>SELECT queries and filtering data</li>
              <li>UPDATE existing records</li>
              <li>DELETE records safely</li>
            </ul>
          </li>

          <li>
            <strong>Module 4: Constraints & Keys</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Primary Key</li>
              <li>Foreign Key</li>
              <li>Auto Increment</li>
              <li>Maintaining data integrity</li>
            </ul>
          </li>

          <li>
            <strong>Module 5: Altering Tables</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>ALTER TABLE operations</li>
              <li>Adding and removing columns</li>
              <li>Modifying data types</li>
            </ul>
          </li>

          <li>
            <strong>Module 6: SQL Joins</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>INNER JOIN</li>
              <li>LEFT JOIN & RIGHT JOIN</li>
              <li>Joining multiple tables</li>
              <li>Real-world relational examples</li>
            </ul>
          </li>

          <li>
            <strong>Module 7: Grouping & Aggregate Functions</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>COUNT, SUM, AVG, MIN, MAX</li>
              <li>GROUP BY clause</li>
              <li>HAVING vs WHERE</li>
            </ul>
          </li>

          <li>
            <strong>Module 8: Subqueries & Nested Queries</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Subqueries in SELECT</li>
              <li>Subqueries in WHERE clause</li>
              <li>Real problem-solving examples</li>
            </ul>
          </li>

          <li>
            <strong>Module 9: Views & Indexes</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Creating and using views</li>
              <li>Indexes for performance optimization</li>
              <li>Understanding query efficiency</li>
            </ul>
          </li>

          <li>
            <strong>Module 10: Stored Procedures & Triggers</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Introduction to stored procedures</li>
              <li>Creating and calling procedures</li>
              <li>Triggers for automatic database actions</li>
            </ul>
          </li>

          <li>
            <strong>Module 11: Transactions & Advanced Concepts</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Transactions & commit/rollback</li>
              <li>Auto-commit behavior</li>
              <li>Best practices for SQL usage</li>
            </ul>
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Write efficient SQL queries with confidence</li>
          <li>Design relational databases</li>
          <li>Use joins, subqueries, and aggregation</li>
          <li>Understand real-world database workflows</li>
        </ul>

        {/* Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Instructor:</strong> CodeWithHarry</p>
          <p><strong>Platform:</strong> YouTube</p>
          <p><strong>Database:</strong> MySQL</p>
          <p><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>
      </article>
    </div>
  );
};

export default SQLCodeWithHarryPage;
