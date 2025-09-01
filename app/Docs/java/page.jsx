"use client";
import React from "react";

const JavaEngineeringDigest = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Complete Java Programming Course 2025 — Engineering Digest
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>comprehensive Java programming course</strong> by{" "}
          <span className="text-blue-600">Engineering Digest</span>. Hosted on{" "}
          <strong>YouTube</strong>, it spans approximately <strong>7 hours</strong> 
          and covers everything from core concepts to advanced Java topics.{" "}
          Designed for learners preparing for <strong>2025-ready skills</strong>, 
          the playlist provides step-by-step explanations, coding examples, and project insights.
        </p>

        {/* Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The following outlines the <strong>key topics</strong> based on the playlist and related content:
        </p>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Java Setup & Core Concepts
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Installing Java & JDK (OpenJDK on Windows 11 and others)</li>
          <li>Understanding JDK, JRE, JVM, javac, bytecode, and JIT compiler</li>
          <li>Basic Java development environment setup</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: Java Basics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Program structure and the <strong>main()</strong> method</li>
          <li>Primitive and reference data types</li>
          <li>Variables and scope rules</li>
          <li>Operators: arithmetic, assignment, relational, and logical</li>
          <li>Control flow: <strong>if-else</strong> and <strong>switch-case</strong></li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Loops & Iteration
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Loop constructs: <strong>for</strong>, <strong>while</strong>, and <strong>do-while</strong></li>
          <li>Iteration logic and control flow statements</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Object-Oriented Programming (OOP)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Classes & objects: defining classes and instantiating objects</li>
          <li>Fields, methods, and constructors</li>
          <li>Access modifiers: <strong>public, private, protected</strong></li>
          <li>Organizing code with Java packages</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Advanced Java Topics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Exception handling: <strong>try-catch</strong>, throws, custom exceptions</li>
          <li>Collections framework: <strong>ArrayList, HashMap</strong>, and more</li>
          <li>Java 8+ features: <strong>Lambdas, Streams</strong></li>
          <li>File I/O fundamentals</li>
          <li>Introduction to basic threading concepts</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Step-by-step progression from beginner to advanced Java</li>
          <li>Strong foundation in both core and OOP concepts</li>
          <li>Covers modern Java features up to Java 8+</li>
          <li>Playlist format allows flexible self-paced learning</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> Engineering Digest (YouTube)</p>
          <p className="mb-1"><strong>Language:</strong> English</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p><strong>Includes:</strong> YouTube playlist, structured lectures, and code demos</p>
        </div>

      </article>
    </div>
  );
};

export default JavaEngineeringDigest;
