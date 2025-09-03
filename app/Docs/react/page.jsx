"use client";
import React from "react";

const ChaiAurReact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Chai aur React – Complete React.js Playlist (Chai aur Code)
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This <strong>comprehensive React.js learning series</strong> in{" "}
          <em>Hindi</em> by <strong>Chai aur Code (Hitesh Choudhary)</strong>{" "}
          takes learners from foundational concepts to{" "}
          <strong>production-ready React applications</strong>. The playlist
          follows a <em>project-driven approach</em>, ensuring that each concept
          is applied through real-world coding practice. Perfect for learners
          who want to master React hands-on.
        </p>

        {/* GitHub Repository */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Official GitHub Repository
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Each lesson and project is backed by an{" "}
          <strong>official GitHub repository</strong>, allowing students to
          clone, install, and code along. The{" "}
          <em>project-based repo structure</em> reinforces practical
          understanding alongside theoretical learning.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> React JS Roadmap & Learning Strategy
          </li>
          <li>
            <strong>Module 2:</strong> Project Foundations (setup, file
            structure, dependencies)
          </li>
          <li>
            <strong>Module 3:</strong> Basic React Flow & JSX (rendering,
            components, JSX syntax)
          </li>
          <li>
            <strong>Module 4:</strong> Hooks & Functional Patterns (useState,
            useEffect, useRef, useCallback)
          </li>
          <li>
            <strong>Module 5:</strong> Routing with React Router
          </li>
          <li>
            <strong>Module 6:</strong> Context API (state sharing, persistence
            with localStorage)
          </li>
          <li>
            <strong>Module 7:</strong> Redux Toolkit (global state management
            best practices)
          </li>
          <li>
            <strong>Module 8:</strong> Mega Project – Production-scale app with
            Appwrite backend (auth, database, file uploads)
          </li>
          <li>
            <strong>Module 9:</strong> Advanced Components & Forms (React Hook
            Form, complex component patterns)
          </li>
          <li>
            <strong>Module 10:</strong> Debugging, CORS, and Deployment
          </li>
          <li>
            <strong>Module 11:</strong> Interview Prep & API Handling (React
            Query, Axios, Q&A sessions)
          </li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Begin with <strong>conceptual modules</strong> (JSX, components,
            hooks).
          </li>
          <li>
            Progress into <strong>state management and routing</strong> with
            Context API and Redux Toolkit.
          </li>
          <li>
            Work through the <strong>Mega Project</strong> to simulate real-world
            app development with backend integration.
          </li>
          <li>
            Use the <strong>GitHub repository</strong> for code references and
            hands-on practice.
          </li>
          <li>
            Complete with <strong>deployment and interview preparation</strong>{" "}
            modules.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Ability to build and deploy modern React applications.</li>
          <li>
            Mastery of hooks, state management, routing, and advanced
            components.
          </li>
          <li>
            Practical experience with a <strong>production-like project</strong>{" "}
            using Appwrite.
          </li>
          <li>
            Interview readiness with strong grasp of{" "}
            <strong>React fundamentals and best practices</strong>.
          </li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Chai aur Code’s React.js playlist</strong> offers a{" "}
          <em>project-first approach</em>, making it one of the most effective
          resources for learning React in Hindi. From basic concepts to a
          production-scale application, this course ensures that learners
          achieve <strong>both theoretical clarity</strong> and{" "}
          <strong>hands-on expertise</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Hitesh Choudhary (Chai aur Code)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube + GitHub Repository
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Level:</strong> Beginner → Advanced
          </p>
        </div>
      </article>
    </div>
  );
};

export default ChaiAurReact;
