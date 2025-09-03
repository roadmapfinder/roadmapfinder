"use client";
import React from "react";

const MasterNodeJsPlaylist = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Master NodeJS Playlist — Piyush Garg: Complete Content Breakdown
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This course is a robust, hands-on workshop covering all aspects of
          backend development using <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>, delivered in
          Hindi by <strong>Piyush Garg</strong>. The course is available as a{" "}
          <strong>YouTube playlist</strong> and backed by a well-structured{" "}
          <strong>GitHub repository</strong> containing source code and detailed
          notes aligned with each lesson.
        </p>

        {/* Quick Links */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 not-prose mb-6">
          <ul className="list-disc list-inside text-gray-700 grid gap-1">
            <li>
              <span className="font-semibold">YouTube:</span> Master NodeJS
              Playlist (Hindi)
            </li>
            <li>
              <span className="font-semibold">GitHub:</span> Source code & notes
              mapped to lessons
            </li>
          </ul>
        </div>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic understanding of JavaScript and command-line operations</li>
          <li>
            Willingness to follow along in <strong>Hindi</strong> (core concepts
            explained with JavaScript examples)
          </li>
        </ul>

        {/* Course Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Full Course Breakdown
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The following is the complete, sequential module list as mirrored in
          the GitHub repository, capturing all available lessons—this reflects
          each lesson’s topic and learning outcome.
        </p>

        {/* Module Content Overview */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module Content Overview
        </h3>
        <div className="overflow-x-auto not-prose">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3 border-b border-gray-200 w-20">
                  Lesson
                </th>
                <th className="text-left px-4 py-3 border-b border-gray-200">
                  Topic
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["01", "What is NodeJS — understanding the JS engine and its advantages"],
                ["02", "NodeJS installation — includes npm setup"],
                ["03", "Hello World in NodeJS — your first Node script"],
                ["04", "Modules in NodeJS — modular code structure"],
                ["05", "File Handling with fs — sync vs async, CRUD operations"],
                ["06", "How NodeJS Works — client-server model, blocking vs non-blocking"],
                ["07", "Building HTTP server using the built-in http module"],
                ["08", "Handling URLs — URL structure and using the url module"],
                ["09", "HTTP methods — GET, POST, PUT, DELETE"],
                ["10", "Getting started with ExpressJS — setup and routing basics"],
                ["11", "Understanding NodeJS versioning — semantic versioning explained"],
                ["12", "What is a REST API? — architecture and best practices"],
                ["13", "Building REST APIs using NodeJS + Express"],
                ["14", "Introduction to Postman — API testing basics"],
                ["15", "Express middleware — concept and usage"],
                ["16", "HTTP headers in APIs — significance and practical usage"],
                ["17", "HTTP status codes — standard responses"],
                ["18", "Getting started with MongoDB — basic database commands"],
                ["19", "Connecting NodeJS with MongoDB via Mongoose and schemas"],
                ["20", "MVC architecture in NodeJS — organizing code professionally"],
                ["21", "Building a custom URL shortener project"],
                ["22", "Server-side rendering with EJS"],
                ["23", "Building NodeJS authentication from scratch (stateful vs stateless)"],
                ["24", "JWT-based authentication — token strategy"],
                ["25", "Working with cookies in NodeJS"],
                ["26", "Implementing authorization (roles & access control)"],
                ["27", "Creating a Discord bot using NodeJS"],
                ["28", "File uploads with Multer module"],
                ["29", "Setting up a blog app structure"],
                ["30", "Adding authentication to the blog application"],
                ["31", "Completing the blog app (end-to-end implementation)"],
                ["32", "Deploying NodeJS app in the cloud — using .env, deployment steps"],
                ["33", "Working with WebSockets (Socket.io) for real-time communication"],
                ["34", "Using Streams in NodeJS for efficient data handling"],
                ["35", "Scaling NodeJS applications using the Cluster module"],
                ["36", "Introduction to Nginx — its purpose and advantages"],
                ["37", "Installing and setting up Nginx (via Docker)"],
                ["42", "Introduction to GraphQL in NodeJS — why and how to use it"],
                ["43", "Building a GraphQL clone (Threads App)"],
              ].map(([lesson, topic]) => (
                <tr key={lesson}>
                  <td className="px-4 py-3 align-top font-mono text-sm text-gray-700">
                    {lesson}
                  </td>
                  <td className="px-4 py-3 align-top text-gray-800">{topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Learn
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Core Backend Skills
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Designing and building RESTful APIs with Express</li>
          <li>Data modeling and CRUD operations using MongoDB & Mongoose</li>
          <li>Authentication & Authorization (sessions, JWT, role-based access)</li>
          <li>Real-time communication with WebSockets (Socket.io)</li>
          <li>Production readiness: environment variables, logging, scaling</li>
          <li>Reverse proxy & static serving via Nginx; Docker-based setups</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Professional Practices
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>MVC architecture and clean folder structures</li>
          <li>Middleware patterns, error handling, and HTTP semantics</li>
          <li>Testing with Postman and API-first development workflows</li>
          <li>Performance with Streams, Clustering, and non-blocking I/O</li>
          <li>Deployments to cloud, using <code>.env</code>, and CI-friendly patterns</li>
        </ul>

        {/* Projects Highlight */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Hands-on Projects & Milestones
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>URL Shortener:</strong> End-to-end REST API with MongoDB,
            validation, and redirects
          </li>
          <li>
            <strong>Blog App:</strong> Full auth, roles, protected routes, EJS
            views, and CRUD
          </li>
          <li>
            <strong>Discord Bot:</strong> Practical Node.js integrations with
            third-party APIs
          </li>
          <li>
            <strong>Threads-like (GraphQL Clone):</strong> API schema,
            resolvers, and queries/mutations
          </li>
        </ul>

        {/* Resources */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Supplementary Resources
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          GitHub Repository Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Lesson-wise folders with source code and notes</li>
          <li>Clear README and scripts to run projects locally</li>
          <li>Example environment files and configuration tips</li>
          <li>Mongoose models, controllers, and route samples</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Learning Support
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Detailed explanations in Hindi with real-world analogies</li>
          <li>Postman collections and request examples</li>
          <li>Community Q&A through comments and discussions</li>
          <li>Regular content improvements and additions</li>
        </ul>

        {/* Pathing */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Recommended Progression
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Beginner Phase
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Install Node.js & npm; write your first scripts</li>
          <li>Understand modules, fs, HTTP, and URL fundamentals</li>
          <li>Practice HTTP methods and build a basic server</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Intermediate Phase
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Move to Express routing, middleware, and REST architecture</li>
          <li>Connect MongoDB with Mongoose; design schemas & models</li>
          <li>Implement auth (sessions/JWT), cookies, and role-based access</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Advanced Phase
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Real-time apps with Socket.io; streaming and clustering</li>
          <li>Production deployments with Nginx, Docker, and environment config</li>
          <li>Explore GraphQL APIs and build the Threads-like clone</li>
        </ol>

        {/* Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Course Provider:</strong> Piyush Garg
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p className="mb-1">
            <strong>Level:</strong> Beginner → Advanced (Backend Focus)
          </p>
          <p className="mb-1">
            <strong>Format:</strong> YouTube Playlist + GitHub Repository
          </p>
          <p className="mb-1">
            <strong>Includes:</strong> Source code, lesson-mapped notes, and
            projects
          </p>
          <p className="mb-1">
          </p>
        </div>
      </article>
    </div>
  );
};

export default MasterNodeJsPlaylist;
