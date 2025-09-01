"use client";
import React from "react";

const PhpCodeStepByStep = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          PHP (Hindi) Complete Learning Path — Code Step By Step
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="text-blue-600">Code Step By Step</span> hosts a{" "}
          <strong>multi-part PHP tutorial in Hindi</strong> that begins with the
          basics (installation, first script) and progresses through{" "}
          <strong>functions, arrays, forms, sessions/cookies, and MySQL</strong>.
          A dedicated PHP Project playlist applies these skills in building a{" "}
          <strong>real-world web app</strong> with structured source code.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>No prior PHP experience required</li>
          <li>A computer with internet access (Windows/macOS/Linux supported)</li>
          <li>XAMPP or similar local server stack (for the project series)</li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Learn (Outcomes)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Set up PHP locally and run your first scripts</li>
          <li>Understand variables, operators, control flow, and functions</li>
          <li>Work with arrays, strings, and form handling</li>
          <li>Implement error handling, comments, and debugging</li>
          <li>Manage sessions, cookies, and user state</li>
          <li>Connect PHP with MySQL and perform CRUD operations</li>
          <li>Build a structured end-to-end PHP project</li>
        </ul>

        {/* Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The playlist is organized in a <strong>step-by-step progression</strong>. 
          Below are the major modules with example lessons:
        </p>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Setup & First Steps
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Why PHP / Course Introduction</li>
          <li>Learn PHP without installation (portable/online options)</li>
          <li>Install VS Code for PHP (example: macOS setup)</li>
          <li>Hello World & program basics</li>
          <li>Enable error reporting during development</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Language Fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Variables and naming rules</li>
          <li>Operators & expressions: arithmetic, comparison, logical</li>
          <li>Comments & code readability</li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Functions & Scope
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Defining and calling functions</li>
          <li>Using parameters, return values</li>
          <li>Nested functions and structuring logic</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Arrays & Strings (Deep Dive)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Indexed arrays: creation, traversal, operations</li>
          <li>Associative and multidimensional arrays</li>
          <li>String functions and manipulation</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Forms, Validation & State
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Handling form input with $_GET and $_POST</li>
          <li>Form validation basics</li>
          <li>Sessions & cookies for persisting data</li>
          <li>Include/require for templating and site structure</li>
        </ul>

        {/* Module 6 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: Working with MySQL
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Connect PHP with MySQL</li>
          <li>CRUD operations using mysqli/PDO</li>
        </ul>

        {/* Module 7 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7: Build a Basic Website
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Making a basic website with PHP</li>
          <li>Combining forms, includes, and MySQL integration</li>
        </ul>

        {/* Companion Playlist */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Companion Playlist — PHP Project (with Source Code)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A practical hands-on series where you{" "}
          <strong>build a PHP app step by step</strong>. Source code is provided
          for all lessons.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>#1 Project Introduction & goals</li>
          <li>#2 Install PHP in Windows (XAMPP)</li>
          <li>#4 Project structure — entry file & folders</li>
          <li>#7 Database configuration with MySQL</li>
          <li>#12 Dynamic category listing from DB</li>
          <li>#18 CRUD & category listing build-out</li>
          <li>#25 Uploading final code to GitHub</li>
        </ul>

        {/* Study Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Recommended Study Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Begin with Modules 1–4 to master syntax and arrays</li>
          <li>Move to MySQL integration (Module 6) for DB knowledge</li>
          <li>Follow the PHP Project playlist step by step</li>
          <li>Review Module 7 to reinforce structure and includes</li>
        </ul>

        {/* Tools */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Tools & Environment
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Editor: Visual Studio Code</li>
          <li>Local server: XAMPP (Apache, MySQL, PHP)</li>
        </ul>

        {/* Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Notes & Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Keep error display enabled during development</li>
          <li>Add comments to clarify intent in multi-file projects</li>
          <li>Practice database workflows: connect → query → fetch → sanitize output</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> Code Step By Step (YouTube)</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Intermediate</p>
          <p><strong>Includes:</strong> YouTube tutorials, project series with source code</p>
        </div>

      </article>
    </div>
  );
};

export default PhpCodeStepByStep;
