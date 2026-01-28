"use client";
import React from "react";

const FastifyCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Fastify Crash Course — High Performance Node.js Framework (Coder’s Gyan)
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>Fastify Crash Course by Coder’s Gyan</strong> introduces
          learners to one of the <strong>fastest and most efficient Node.js backend frameworks</strong>.
          The course focuses on building <strong>high-performance APIs</strong> using
          Fastify, covering routing, plugins, request handling, and production-ready practices.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Introduction to Fastify & performance advantages
          </li>
          <li>
            <strong>Module 2:</strong> Environment setup & project initialization
          </li>
          <li>
            <strong>Module 3:</strong> Creating and running a Fastify server
          </li>
          <li>
            <strong>Module 4:</strong> Routing fundamentals (GET, POST, params, queries)
          </li>
          <li>
            <strong>Module 5:</strong> Request & response handling
          </li>
          <li>
            <strong>Module 6:</strong> Plugins and extensibility
          </li>
          <li>
            <strong>Module 7:</strong> Building JSON APIs with Fastify
          </li>
          <li>
            <strong>Module 8:</strong> Error handling and validation
          </li>
          <li>
            <strong>Module 9:</strong> Mini project – REST API with Fastify
          </li>
          <li>
            <strong>Module 10:</strong> Production tips & deployment basics
          </li>
        </ul>

        {/* Suggested Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Watch the crash course end-to-end to understand Fastify fundamentals.
          </li>
          <li>
            Practice each routing and request-handling example locally.
          </li>
          <li>
            Build a small REST API alongside the tutorial.
          </li>
          <li>
            Compare Fastify with Express.js to understand performance differences.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understand Fastify core concepts and architecture.</li>
          <li>Build high-performance backend APIs using Node.js.</li>
          <li>Work confidently with routing, plugins, and errors.</li>
          <li>Prepare Fastify apps for production environments.</li>
          <li>Foundation to scale backend systems beyond Express.js.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This Fastify crash course is ideal for developers who already understand
          basic Node.js and want to move toward <strong>modern, high-performance backend development</strong>.
          It serves as a strong foundation before learning authentication,
          databases, and large-scale backend architectures.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Coder’s Gyan
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default FastifyCourse;
