"use client";
import React from "react";

const PythonDsaCodeAndDebug = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          Data Structures & Algorithms with Python — Free DSA Series (Code and Debug)
        </h1>

        {/* Platform Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Platform Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Code and Debug</strong> is an educational platform that offers
          programming courses focused on{" "}
          <strong>Python, Data Structures & Algorithms, Data Science,</strong>{" "}
          and <strong>Machine Learning</strong>. The goal is to build coding
          skills through a well-structured curriculum, projects, and
          problem-solving.
        </p>

        {/* Course Format */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Format & Availability
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Hosted on <strong>YouTube</strong> as a playlist:{" "}
            <em>
              “Data Structures and Algorithms with Python | Free DSA with Python
              Course”
            </em>
          </li>
          <li>
            Includes a <strong>mega video</strong> titled:{" "}
            <em>“DSA Python Course 2025 - Data Structures & Algorithms”</em>
          </li>
          <li>
            <strong>Free and open access</strong> for anyone learning Python DSA
            in 2025.
          </li>
        </ul>

        {/* Expected Content */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Course Content
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          While the course does not provide a detailed module breakdown
          publicly, based on Pythonic adaptations of standard DSA courses, the
          following outline is expected:
        </p>

        {/* Sections */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 1: Language and Environment Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Installing Python & IDE setup</li>
          <li>Python basics: syntax, loops, conditionals, functions</li>
          <li>Understanding Python interpreter and REPL</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 2: DSA Foundations
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Introduction to Algorithms</li>
          <li>Time & Space Complexity (Big O Notation)</li>
          <li>Mathematical analysis of common operations</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 3: Pythonic Data Structures
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Lists, Dictionaries, Sets, Tuples</li>
          <li>Iterators & Generators for efficient data handling</li>
          <li>Custom implementation of Linked Lists, Stacks, Queues</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 4: Searching & Sorting
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Linear & Binary Search</li>
          <li>Bubble, Selection, Insertion Sort</li>
          <li>Merge Sort & Quick Sort</li>
          <li>Python’s built-in sorting functions and Timsort</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 5: Recursion & Backtracking
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Recursive functions & call stack</li>
          <li>Classic recursion problems (Factorial, Fibonacci, etc.)</li>
          <li>Backtracking: N-Queens, Rat in a Maze, Sudoku Solver</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 6: Trees & Graph Fundamentals
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Binary Trees and Tree Traversals (Inorder, Preorder, Postorder)</li>
          <li>Binary Search Trees (BST) and operations</li>
          <li>Graph representation in Python (Adjacency List, Matrix)</li>
          <li>Breadth First Search (BFS) & Depth First Search (DFS)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Section 7: Problem-Solving Patterns
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Two-pointer technique</li>
          <li>Sliding window</li>
          <li>Greedy algorithms</li>
          <li>Dynamic Programming basics</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Strong understanding of Python syntax and its built-in data
            structures.
          </li>
          <li>
            Ability to implement core DSA problems in Python for interviews and
            competitive coding.
          </li>
          <li>
            Preparedness for advanced learning in{" "}
            <strong>Data Science, Machine Learning,</strong> and{" "}
            <strong>Competitive Programming</strong>.
          </li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Code and Debug Team
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> codeanddebug.in
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

export default PythonDsaCodeAndDebug;
