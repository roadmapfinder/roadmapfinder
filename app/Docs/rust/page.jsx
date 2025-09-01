"use client";
import React from "react";

const RustBootcampHarkirat = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 pb-4">
          Rust Bootcamp — Harkirat Singh (Web3 Cohort)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Rust Bootcamp by Harkirat Singh</strong> is part of his{" "}
          <strong>Web3/Blockchain Cohort</strong>. It provides a deep dive into
          Rust programming — from <em>ownership and borrowing</em> to advanced
          async concepts — within the context of building Web3 applications.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic programming knowledge (JavaScript/TypeScript preferred).</li>
          <li>Enrolled in or have access to Harkirat’s Web3 Cohort.</li>
          <li>Familiarity with Solidity and blockchain fundamentals is helpful.</li>
        </ul>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rust is introduced around <strong>Week 26</strong> of the cohort and
          continues into <strong>Week 27</strong>. Below is the detailed breakdown:
        </p>

        {/* Week 26 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Week 26.1 — Rust Bootcamp Part 1
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Core syntax: data types, variables, conditionals, loops.</li>
          <li>Functions (<code>fn</code>) and modular coding.</li>
          <li>Introduction to <strong>structs</strong> and <strong>enums</strong>.</li>
          <li>Rust memory model: <strong>ownership and borrowing</strong>.</li>
        </ul>

        {/* Week 27 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Week 27.1 — Rust Bootcamp Part 2 (Likely Topics)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Advanced collections: <code>Vec</code>, <code>HashMap</code>, strings.</li>
          <li>Traits, generics, and lifetimes.</li>
          <li>Asynchronous Rust with <strong>Future</strong> and async/await.</li>
          <li>Macros and multithreading.</li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Finish JS/React/Solidity modules before starting Rust.</li>
          <li>Follow the cohort timeline and complete Rust assignments weekly.</li>
          <li>Practice by building CLI tools and small Rust projects.</li>
          <li>Use cohort Discord/forums for guidance and support.</li>
        </ol>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong foundation in Rust’s <strong>memory-safety model</strong>.</li>
          <li>Contextualized learning for <strong>Web3 and blockchain</strong>.</li>
          <li>Prepares you for <strong>Solana programs</strong> and smart contracts.</li>
          <li>Hands-on, project-oriented cohort learning environment.</li>
        </ul>

        {/* Considerations */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Considerations
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Rust is not offered as a standalone course — it’s part of the Web3 track.</li>
          <li>Advanced topics (like async & macros) may feel steep for beginners.</li>
          <li>Requires consistent practice outside of cohort lectures.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This Bootcamp is ideal for developers aiming to master <strong>systems-level 
          programming in Rust</strong> with a Web3 focus. While not easy, it’s one of the
          most practical routes to becoming a <strong>Rust + blockchain developer</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Harkirat Singh</p>
          <p className="mb-1"><strong>Platform:</strong> Web3/Blockchain Cohort</p>
          <p className="mb-1"><strong>Language:</strong> English + Hindi (mixed)</p>
          <p><strong>Level:</strong> Intermediate to Advanced</p>
        </div>

      </article>
    </div>
  );
};

export default RustBootcampHarkirat;
