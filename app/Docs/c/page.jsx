"use client";
import React from "react";

const JavaScriptChaiAurCode = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          JavaScript Course — Chai aur Code (Hitesh Choudhary)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>beginner-friendly JavaScript series</strong> in Hindi 
          from the <strong>Chai aur Code</strong> YouTube channel, designed to 
          teach the fundamentals of JavaScript from scratch. It’s highly 
          regarded for its clarity and practical structure.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>No prior programming knowledge required.</li>
          <li>Basic familiarity with browsers and text editors recommended.</li>
        </ul>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Content Overview
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Basics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>JavaScript syntax, variables, data types, and console usage.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Control Flow
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Conditional statements: <strong>if/else</strong>, <strong>switch</strong>.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Iterations
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Loops: <strong>for, while, do-while</strong>.</li>
          <li>Array iteration methods.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: DOM Manipulation
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Selecting and modifying DOM elements.</li>
          <li>Class/style manipulation and dynamic updates.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Event Handling
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Event listeners and handling browser interactions.</li>
          <li>Mouse clicks, keyboard inputs, and interactive triggers.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: Projects
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Hands-on mini-projects applying JavaScript concepts.</li>
          <li>Build small functional features for real-world practice.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7: Advanced Topics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Closures and prototypes.</li>
          <li>Modern ES6 features, modules, and async programming.</li>
        </ul>

        {/* Learning Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Workflow
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the playlist sequentially on YouTube.</li>
          <li>Use the GitHub repo as a companion for code snippets.</li>
          <li>Pause lessons to practice with your own code editor.</li>
          <li>Complete mini-projects at the end of each module.</li>
        </ol>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Solid foundation in JavaScript fundamentals.</li>
          <li>Ability to build interactive, dynamic web pages.</li>
          <li>Understanding of advanced programming constructs and modern JS features.</li>
        </ul>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Next Steps
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Explore Chai aur Code’s <strong>Backend Series</strong> (Node.js, MongoDB).</li>
          <li>Build small apps like ToDo lists and gallery apps with JavaScript.</li>
        </ul>

        {/* Summary & Feedback */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary & Learner Feedback
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Learners appreciate Hitesh’s <strong>clear instruction and 
          project-driven approach</strong>. Community members often say 
          his free JavaScript playlists are <em>better than many paid courses</em>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube + GitHub</p>
          <p className="mb-1"><strong>Instructor:</strong> Hitesh Choudhary (Chai aur Code)</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p><strong>Includes:</strong> GitHub repo, projects, community support</p>
        </div>

      </article>
    </div>
  );
};

export default JavaScriptChaiAurCode;
