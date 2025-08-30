"use client";
import React from "react";

const ChaiAurBackendCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          Chai aur Backend Series — Hitesh Choudhary (Chai aur Code)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Chai aur Backend</strong> video series by{" "}
          <strong>Hitesh Choudhary (Chai aur Code)</strong> is a
          hands-on, end-to-end backend development curriculum in{" "}
          <strong>Hindi</strong>.  
          It guides learners through building a complete{" "}
          <em>YouTube-like video hosting platform</em> with features such as
          authentication, video uploads, likes/dislikes, comments,
          subscriptions, and more—using{" "}
          <strong>Node.js, Express, MongoDB, Mongoose, JWT, and bcrypt</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course is supported by a{" "}
          <span className="text-blue-600">[GitHub Repository]</span> containing
          source code, structured folders, and sample <code>.env</code> files for
          hands-on learning.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic understanding of <strong>JavaScript</strong></li>
          <li>Familiarity with <strong>Node.js</strong> and <strong>Express</strong> is beneficial</li>
          <li>Comfortable following tutorials in <strong>Hindi</strong></li>
        </ul>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Modules
        </h2>

        {/* Module A */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          A. Project Setup & Foundations
        </h3>
        <p className="text-gray-700 mb-4">
          Setting up the backend project with <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong> (via Mongoose).  
          Includes initialization with <code>.env.sample</code>, clean folder
          structure, and configuration basics.
        </p>

        {/* Module B */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          B. Authentication & Security
        </h3>
        <p className="text-gray-700 mb-4">
          Implementation of secure user authentication:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>User signup & login workflows</li>
          <li>Password hashing with <strong>bcrypt</strong></li>
          <li>Access & refresh tokens with <strong>JWT</strong></li>
          <li>Session handling and secure API practices</li>
        </ul>

        {/* Module C */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          C. Core Backend Features
        </h3>
        <p className="text-gray-700 mb-4">
          Building the core functionality of a video-hosting platform:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Video uploads & storage</li>
          <li>Likes & dislikes system</li>
          <li>Commenting and replies</li>
          <li>Channel subscription & unsubscribe logic</li>
        </ul>

        {/* Module D */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          D. Routing & Controllers
        </h3>
        <p className="text-gray-700 mb-4">
          Organized backend architecture with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Modular <strong>Express.js</strong> routes</li>
          <li>Controller-driven request handling</li>
          <li>Custom error handling and middleware</li>
        </ul>

        {/* Module E */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          E. Best Practices & Project Hygiene
        </h3>
        <p className="text-gray-700 mb-4">
          Ensuring maintainability and clean project setup:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Use of <code>.env</code> for sensitive configs</li>
          <li><code>.gitignore</code> for clean repos</li>
          <li>Formatting with <code>.prettierignore</code> and <code>.prettierrc</code></li>
          <li>Encouragement for community contributions</li>
        </ul>

        {/* Module F */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          F. Summary & Recap
        </h3>
        <p className="text-gray-700 mb-6">
          The final recap video summarizes the workflow, covering project setup,
          authentication, feature implementation, and scalable design patterns.
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Build a <strong>real-world production-ready backend project</strong></li>
          <li>Learn secure authentication & RESTful API design</li>
          <li>Practice clean code architecture and scalable patterns</li>
          <li>Access to complete source code on GitHub</li>
          <li>Strong Hindi-speaking developer community support</li>
        </ul>

        {/* Course Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Hitesh Choudhary</p>
          <p className="mb-1"><strong>Channel:</strong> Chai aur Code</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p><strong>Includes:</strong> GitHub repo, assignments, and recap videos</p>
        </div>

      </article>
    </div>
  );
};

export default ChaiAurBackendCourse;
