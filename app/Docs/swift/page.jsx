"use client";
import React from "react";

const SwiftProgrammingFCC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Swift Programming Tutorial — Full Course for Beginners — freeCodeCamp
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>7-hour, full-length tutorial</strong> on{" "}
          <strong>Swift programming</strong>, offered by{" "}
          <span className="text-blue-600">freeCodeCamp</span> on their{" "}
          YouTube channel and taught by <strong>Vandad Nahavandipoor</strong>.
          It covers every modern aspect of the Swift language in a structured, 
          beginner-friendly way, moving from the very basics to advanced concepts.
        </p>

        {/* Full Course Content */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Full Course Content Breakdown
        </h2>

        {/* 1. Core Language Foundations */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Core Language Foundations
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Variables and constants</li>
          <li>Operators</li>
          <li>Control flow: <code>if</code> and <code>else</code></li>
        </ul>

        {/* 2. Functions & Closures */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Functions & Closures
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Defining and calling functions</li>
          <li>Closures and higher-order functions</li>
        </ul>

        {/* 3. Data Structures */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Data Structures
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Structures</li>
          <li>Enumerations</li>
          <li>Classes</li>
        </ul>

        {/* 4. Protocols & Extensions */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Protocols & Extensions
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Protocols for abstraction</li>
          <li>Extending types with functionality</li>
        </ul>

        {/* 5. Advanced Generics & Optionals */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Generics & Optionals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Generic programming in Swift</li>
          <li>Optionals, unwrapping, and safe handling</li>
        </ul>

        {/* 6. Error Handling */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Error Handling
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Throwing and catching errors</li>
          <li>Custom error types</li>
        </ul>

        {/* 7. Collections */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Collections
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Arrays</li>
          <li>Sets</li>
          <li>Dictionaries</li>
        </ul>

        {/* 8. Operators & Equality */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Operators & Equality
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Equality and hashing</li>
          <li>Defining custom operators</li>
        </ul>

        {/* 9. Asynchronous Programming */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          9. Asynchronous Programming
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Async/await in Swift</li>
          <li>Handling concurrency effectively</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Master the <strong>Swift language</strong> from basics to advanced</li>
          <li>Learn modern programming patterns like generics, optionals, and async/await</li>
          <li>Understand real-world Swift usage with protocols and extensions</li>
          <li>Free access via <span className="text-blue-600">YouTube</span></li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Vandad Nahavandipoor</p>
          <p className="mb-1"><strong>Platform:</strong> freeCodeCamp (YouTube)</p>
          <p className="mb-1"><strong>Duration:</strong> ~7 hours</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p><strong>Includes:</strong> Swift language foundations, OOP, protocols, generics, error handling, collections, async programming</p>
        </div>

      </article>
    </div>
  );
};

export default SwiftProgrammingFCC;
