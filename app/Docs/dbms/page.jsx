"use client";
import React from "react";

const DbmsCodeHelp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Complete DBMS in 1 Video — CodeHelp (by Babbar)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This video offers a full-spectrum <strong>100-minute walkthrough</strong> of essential 
          Database Management Systems (DBMS) topics — ideal for last-minute revision in a single session. 
          It’s focused, placement-oriented, and backed by supplemental notes.
        </p>

        {/* Key Topics Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Key Topics Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Introduction to DBMS:</strong> Definition, advantages over file systems, and types (centralized vs distributed).</li>
          <li><strong>DBMS Architecture:</strong> Three-level schema — internal, conceptual, external layers.</li>
          <li><strong>Data Modeling:</strong> ER model, ER diagrams, converting ER to relational schema.</li>
          <li><strong>Relational Model:</strong> Tuples, relations, attributes.</li>
          <li><strong>Keys in DBMS:</strong> Primary, foreign, candidate, super keys.</li>
          <li><strong>Normalization:</strong> 1NF, 2NF, 3NF, BCNF — with examples.</li>
          <li><strong>SQL Foundations:</strong> DDL (CREATE, ALTER, DROP) & DML (SELECT, INSERT, UPDATE, DELETE).</li>
          <li><strong>Joins in SQL:</strong> Inner, left/right outer, cross join.</li>
          <li><strong>Transaction Management:</strong> ACID properties & operations.</li>
          <li><strong>Indexes & Views:</strong> Concepts, performance improvements, abstraction.</li>
        </ul>

        {/* Suggested Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Structure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Here’s the best way to navigate the course:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the full video to grasp flow and coverage.</li>
          <li>Pause and note key commands and diagrams.</li>
          <li>Recreate ER models, write SQL queries, and normalize example tables.</li>
        </ul>

        {/* Course Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <em>“Complete DBMS in 1 Video”</em> is a succinct, placement-oriented course that spans all 
          fundamental DBMS topics in a single tutorial session.
        </p>

        {/* Key Learning Modules */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Key Learning Modules
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>DBMS Overview & Architecture</li>
          <li>Conceptual Modeling with ER Diagrams</li>
          <li>Relational Schema Fundamentals</li>
          <li>Data Integrity via Keys</li>
          <li>Database Normalization</li>
          <li>Mastering SQL: DDL + DML</li>
          <li>Understanding Joins</li>
          <li>Handling Transactions & ACID Properties</li>
          <li>Database Optimization with Indexes and Views</li>
        </ul>

        {/* Workflow */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Learning Workflow
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch and revise sequentially.</li>
          <li>Pause and recreate ER diagrams and queries.</li>
          <li>Focus on examples for normalization and SQL joins.</li>
        </ul>

        {/* Summary & Recommendation */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary & Recommendation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This crash course is a powerful, rapid way to review all core DBMS concepts, 
          especially useful when time-constrained. It balances conceptual clarity with 
          practical SQL exposure — making it prime for interview preparation.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (CodeHelp)</p>
          <p className="mb-1"><strong>Instructor:</strong> Love Babbar</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default DbmsCodeHelp;
