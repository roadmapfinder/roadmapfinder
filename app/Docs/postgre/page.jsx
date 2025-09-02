"use client";
import React from "react";

const PostgreSQLCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          PostgreSQL Full Course — freeCodeCamp (Beginners)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <em>“PostgreSQL Course for Beginners”</em> by{" "}
          <strong>freeCodeCamp</strong> and taught by <strong>Beau Carnes</strong> 
          is a complete <strong>3-hour beginner-friendly</strong> tutorial. 
          It provides a hands-on introduction to PostgreSQL, one of the most 
          powerful relational databases, designed for developers, aspiring DBAs, 
          and students.
        </p>

        {/* Suggested Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Introduction:</strong> What PostgreSQL is and its advantages.</li>
          <li><strong>Installation & Setup:</strong> Installing PostgreSQL on Windows and using PgAdmin.</li>
          <li><strong>Basic SELECT queries:</strong> Core SQL fundamentals.</li>
          <li><strong>SELECT DISTINCT + Challenges:</strong> Eliminating duplicates and practice problems.</li>
          <li><strong>WHERE Clauses:</strong> Filtering query results with real-world use cases.</li>
          <li><strong>Advanced Querying:</strong> COUNT, ORDER BY, LIMIT, IN, BETWEEN, LIKE, ILIKE.</li>
          <li><strong>Aggregations & Grouping:</strong> GROUP BY, HAVING, and using aliases with AS.</li>
          <li><strong>Application Exercises:</strong> Challenges to reinforce concepts.</li>
        </ul>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Flow
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To get the best results from this PostgreSQL course, follow this sequence:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch each module in order for a structured learning experience.</li>
          <li>Pause the video to try SQL commands in your PostgreSQL setup or PgAdmin.</li>
          <li>Complete the embedded challenges to build query-writing confidence.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understand PostgreSQL fundamentals and database setup.</li>
          <li>Gain proficiency in writing SQL queries.</li>
          <li>Use filtering, aggregation, and grouping effectively.</li>
          <li>Build confidence to work on beginner-friendly PostgreSQL projects.</li>
        </ul>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Next Steps After Completion
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Practice using real-world datasets on PostgreSQL.</li>
          <li>Explore intermediate SQL topics like JOINs, subqueries, and views.</li>
          <li>Try building small applications (e.g., blog, task manager) backed by PostgreSQL.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This freeCodeCamp course is an excellent <strong>beginner crash course</strong> 
          for PostgreSQL. It balances conceptual clarity with practical challenges, 
          making it a perfect starting point for anyone new to databases and SQL. 
          Learners walk away with confidence to query, filter, aggregate, and 
          manage data effectively in PostgreSQL.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (freeCodeCamp)</p>
          <p className="mb-1"><strong>Instructor:</strong> Beau Carnes</p>
          <p className="mb-1"><strong>Duration:</strong> 3 Hours</p>
          <p className="mb-1"><strong>Language:</strong> English</p>
          <p><strong>Level:</strong> Beginner</p>
        </div>

      </article>
    </div>
  );
};

export default PostgreSQLCourse;
