"use client";
import React from "react";

const JavascriptDsaHuxnWebDev = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Data Structures & Algorithms with JavaScript — Complete Course (HuXn WebDev)
        </h1>

        {/* Platform Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Platform Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>HuXn WebDev</strong> provides a complete{" "}
          <strong>Data Structures & Algorithms (DSA)</strong> course in{" "}
          <strong>JavaScript</strong>, available as a free YouTube playlist. The
          course is ideal for developers aiming to strengthen their problem-solving
          skills using JavaScript while preparing for coding interviews and
          technical assessments.
        </p>

        {/* Course Format */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Format & Availability
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Hosted on <strong>YouTube</strong> as a playlist:{" "}
            <em>“Data Structures & Algorithms In JavaScript Complete Course 2024”</em>
          </li>
          <li>
            Includes an <strong>“ALL IN ONE” summary video</strong> for quick
            revision and overview.
          </li>
          <li>
            Accompanied by a <strong>GitHub repository</strong> with organized
            source code covering arrays, linked lists, trees, graphs, and more.
          </li>
        </ul>

        {/* Curriculum */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Detailed Curriculum Structure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The course follows a structured module-based approach, closely aligned
          with the GitHub repository organization:
        </p>

        {/* Modules */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 1: Introduction & Fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Course introduction and expectations</li>
          <li>Understanding asymptotic complexity (Big O Notation)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 2: Arrays
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Array structure, indexing, traversal</li>
          <li>Common array operations & manipulations</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 3: Linked Lists
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Singly linked list implementation</li>
          <li>Insertion, deletion, and traversal</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 4: Stacks & Queues
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Stack (LIFO) implementation in JavaScript</li>
          <li>Queue (FIFO) implementation with classes/arrays</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 5: Hash Table
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Building a hash table from scratch</li>
          <li>Managing key-value pairs efficiently</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 6: Trees
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Binary tree fundamentals and node structure</li>
          <li>Tree traversals: Inorder, Preorder, Postorder</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 7: Graphs
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Graph representation (Adjacency List & Matrix)</li>
          <li>Breadth-First Search (BFS) & Depth-First Search (DFS)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Module 8: Sorting Algorithms
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Classic sorting methods: QuickSort, MergeSort</li>
          <li>Other common algorithms for practice</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Mastery of core DSA topics using JavaScript</li>
          <li>Ability to implement efficient algorithms for problem-solving</li>
          <li>
            Hands-on coding practice with real implementations via the GitHub repo
          </li>
          <li>Interview readiness for JavaScript-based DSA questions</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> HuXn WebDev
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube + GitHub
          </p>
          <p className="mb-1">
            <strong>Availability:</strong> Free on YouTube
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default JavascriptDsaHuxnWebDev;
