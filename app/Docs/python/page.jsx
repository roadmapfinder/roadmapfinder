"use client";
import React from "react";

const PythonApnaCollege = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Python Full Course for Beginners — Apna College
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>comprehensive and beginner-friendly Python programming course</strong>{" "}
          by <span className="text-blue-600">Apna College</span>. Available through their{" "}
          <strong>YouTube full course video</strong> and <strong>detailed class notes</strong>, it
          covers the essentials of Python — from basic concepts to advanced features.{" "}
          The curriculum is designed for absolute beginners, with structured lectures
          and downloadable material.
        </p>

        {/* Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The following outlines the <strong>core modules</strong> based on lecture notes,
          available via <span className="text-blue-600">apnacollege.in</span>.
        </p>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Variables & Data Types
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understanding variables and identifiers</li>
          <li>Data types: <strong>int, float, str, bool</strong></li>
          <li>Assignment and type conversion</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Operators & Conditionals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Arithmetic, assignment, comparison, and logical operators</li>
          <li>Conditional statements: <strong>if, elif, else</strong></li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Loops & Strings
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Loop constructs: <strong>for</strong> and <strong>while</strong> loops</li>
          <li>String operations and manipulation techniques</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Arrays (Lists in Python)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>List creation, indexing, and slicing</li>
          <li>Built-in list methods for data handling</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Functions & Methods
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Defining and calling functions</li>
          <li>Parameters, arguments, and return values</li>
          <li>Using methods on built-in data types</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>No prior programming experience required</li>
          <li>Step-by-step guidance with lecture notes</li>
          <li>Beginner to advanced Python concepts included</li>
          <li>Practical examples to strengthen understanding</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> Apna College</p>
          <p className="mb-1"><strong>Language:</strong> Hinglish (mix of Hindi & English)</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Intermediate</p>
          <p><strong>Includes:</strong> YouTube full course, notes, and structured lectures</p>
        </div>

      </article>
    </div>
  );
};

export default PythonApnaCollege;
