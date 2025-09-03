"use client";
import React from "react";

const ExpressJsCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Express.js – Routing & Middleware (Node.js Backend Series) — Sheryians Coding School
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Sheryians Coding School</strong> provides a detailed{" "}
          <em>Express.js learning path</em> within their broader{" "}
          <strong>Node.js Backend series</strong> and standalone modules. This
          covers <strong>routing, middleware, API handling, and backend architecture</strong>,
          offering both conceptual depth and practical project-based learning.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Introduction to Express.js framework
          </li>
          <li>
            <strong>Module 2:</strong> Project setup and basic routing
          </li>
          <li>
            <strong>Module 3:</strong> Request handling – parameters, queries, and body
          </li>
          <li>
            <strong>Module 4:</strong> Middleware mechanics and custom functions
          </li>
          <li>
            <strong>Module 5:</strong> Route structuring and modularization
          </li>
          <li>
            <strong>Module 6:</strong> Error handling strategies
          </li>
          <li>
            <strong>Module 7:</strong> Serving static files and templating engines
          </li>
          <li>
            <strong>Module 8:</strong> Database connectivity & CRUD operations
          </li>
          <li>
            <strong>Module 9:</strong> Mini Project – REST API backend build
          </li>
        </ul>

        {/* Suggested Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with the <strong>standalone Express.js video</strong> (Routing & Middleware).
          </li>
          <li>
            Move to the <strong>Backend Node.js series</strong> for deeper exploration.
          </li>
          <li>
            Apply concepts by <strong>building a mini backend project</strong> with routes & APIs.
          </li>
          <li>
            Reinforce skills with database CRUD operations & middleware patterns.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understand and use Express.js for backend systems.</li>
          <li>Master routing, request handling, and middleware usage.</li>
          <li>Ability to structure scalable routes and APIs.</li>
          <li>Practical experience with CRUD and database integration.</li>
          <li>Confidence to build and deploy a RESTful backend service.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Sheryians Coding School’s Express.js modules</strong> provide{" "}
          <em>industry-ready backend training</em>, focusing on practical API design,
          routing, middleware, and database connectivity. Whether through their{" "}
          standalone videos or integrated backend series, this is an{" "}
          excellent resource to master backend development with Express.js.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Sheryians Coding School Team
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

export default ExpressJsCourse;
