"use client";
import React from "react";

const ApnaCollegeWebDevCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Apna College Course Series: HTML, CSS, JavaScript, Projects, Git & GitHub
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This comprehensive beginner-to-advanced web development series from{" "}
          <strong>Apna College (Aman Dhattarwal’s platform)</strong> covers
          essential front-end technologies—HTML, CSS, JavaScript—alongside
          project-based learning and version control using Git & GitHub. It
          includes full-length video tutorials with downloadable notes and code
          examples.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>No prior programming experience required; suitable for beginners.</li>
          <li>
            Basic computer skills and willingness to follow tutorials in{" "}
            <strong>Hinglish</strong> (mix of Hindi and English).
          </li>
        </ul>

        {/* Course Breakdown */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Full Course Content Breakdown
        </h2>

        {/* HTML & Project */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          A. HTML & Project Introduction
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>HTML Tutorial for Beginners:</strong> Full-length video covering
          HTML concepts, includes notes and code. <span className="text-blue-600">[YouTube]</span>
        </p>
        <p className="text-gray-700 mb-4">
          GitHub repository referenced by learners includes structured folders:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong>Lecture 0:</strong> Introduction to Web Development</li>
          <li><strong>Lecture 1:</strong> Elements & Attributes</li>
          <li><strong>Lecture 2:</strong> Lists & Tables</li>
          <li><strong>Lecture 3:</strong> Media Elements & Forms</li>
          <li><strong>Mega Project:</strong> Structuring a large project using HTML components <span className="text-blue-600">[GitHub]</span></li>
        </ul>

        {/* CSS Tutorial */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          B. CSS Tutorial & Project
        </h3>
        <p className="text-gray-700 mb-6">
          <strong>CSS Tutorial for Beginners:</strong> Complete with project, notes,
          and code files. <span className="text-blue-600">[YouTube]</span>
        </p>

        {/* JavaScript Course */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          C. JavaScript Course
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>JavaScript Tutorial (2024) — Beginners to Pro:</strong> Covers
          JavaScript fundamentals, including DOM manipulation and more.{" "}
          <span className="text-blue-600">[YouTube]</span>
        </p>
        <p className="text-gray-700 mb-4">
          Downloadable JavaScript Full Course notes available from the Apna College notes page, covering:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Variables, Data Types</li>
          <li>Operators & Conditionals</li>
          <li>Loops & Strings</li>
          <li>Arrays</li>
          <li>Functions & Methods</li>
          <li>DOM, Events</li>
          <li>Classes & Objects</li>
          <li>Callback, Promises & Async-await</li>
          <li>Fetch API</li>
        </ul>

        {/* Git & GitHub */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          D. Git & GitHub Tutorial
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Complete Git and GitHub Tutorial for Beginners:</strong> Video
          walkthrough of version control basics using Git and GitHub.{" "}
          <span className="text-blue-600">[YouTube]</span>
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Git Cheat-sheet by GitHub:</strong> Downloadable concise guide for
          Git commands and workflows.
        </p>

        {/* Course Meta */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Course Provider:</strong> Apna College (Aman Dhattarwal)</p>
          <p className="mb-1"><strong>Language:</strong> Hinglish (Hindi + English)</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p className="mb-1"><strong>Mode:</strong> YouTube + Notes + GitHub</p>
          <p><strong>Includes:</strong> Full notes, projects, and code examples</p>
        </div>

      </article>
    </div>
  );
};

export default ApnaCollegeWebDevCourse;
