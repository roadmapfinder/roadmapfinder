"use client";
import React from "react";

const DsaJavaEngineeringDigest = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Data Structures & Algorithms (DSA) in Java — Engineering Digest (Complete Course Overview)
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Engineering Digest DSA Bootcamp</strong> is a{" "}
          <em>multi-video course on YouTube</em> that covers algorithmic thinking, 
          common data structures, and interview-focused problem solving in Java. 
          The course begins with fundamentals like asymptotic notation and arrays, 
          then advances into linked lists, trees, graphs, sorting, searching, dynamic programming, 
          and standard interview problem patterns.
        </p>

        {/* Audience / Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Who Is This For?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Students or developers comfortable with basic Java (variables, classes, methods).</li>
          <li>Anyone who can run Java code in an IDE or terminal (IntelliJ, Eclipse, VS Code, javac/java).</li>
          <li>Learners seeking an <strong>interview-focused DSA path</strong> with both theory and implementation.</li>
        </ul>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Core Modules</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The playlist is structured like a bootcamp — <em>learn → implement in Java → solve problems</em>. 
          Below is a mapped module outline:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Module A:</strong> Foundations & Complexity (Asymptotic notation, Big-O, Big-Ω, Big-Θ)</li>
          <li><strong>Module B:</strong> Arrays & Strings (two-pointer, sliding window, substring problems)</li>
          <li><strong>Module C:</strong> Loops & Patterns (nested loops, complexity practice, pattern printing)</li>
          <li><strong>Module D:</strong> Linked Lists (singly/doubly lists, reversal, pointers)</li>
          <li><strong>Module E:</strong> Stacks & Queues (balanced parentheses, monotonic stacks, deques)</li>
          <li><strong>Module F:</strong> Trees & Binary Trees (traversals, BSTs, LCA, height, diameter)</li>
          <li><strong>Module G:</strong> Heaps & Priority Queues (k-th problems, stream merging)</li>
          <li><strong>Module H:</strong> Graphs & Traversals (BFS, DFS, connected components, topological sort)</li>
          <li><strong>Module I:</strong> Searching & Sorting (binary search, quick sort, merge sort, heap sort)</li>
          <li><strong>Module J:</strong> Dynamic Programming & Greedy (knapsack, LIS, tabulation vs memoization)</li>
          <li><strong>Module K:</strong> Interview Patterns (two-pointers, sliding window, divide & conquer, backtracking)</li>
        </ul>

        {/* Practice Plan */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Practice Path & Problem Sets</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Engineering Digest provides a structured <strong>“DSA Sheet / LeetCode 200 Path”</strong> 
          organizing problems by topic. Suggested progression:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Warm-up (2–3 weeks):</strong> Arrays, Strings, Loop patterns.</li>
          <li><strong>Core ADTs (3–4 weeks):</strong> Linked Lists, Stacks, Queues, Heaps.</li>
          <li><strong>Trees & Graphs (3–4 weeks):</strong> Traversals, BFS, DFS, tree-based problems.</li>
          <li><strong>Advanced (3–4 weeks):</strong> DP, Greedy strategies, Shortest paths.</li>
          <li><strong>Mock Interviews:</strong> Ongoing — solve 3–5 timed problems, review optimizations.</li>
        </ul>

        {/* Projects & Assignments */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Projects & Assignments</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Personal DSA notes repo — implementations of each data structure in Java with complexity notes.</li>
          <li>Collection of solved LeetCode/GeeksforGeeks problems organized by topic.</li>
          <li>Mini-projects applying algorithms — e.g., BFS/DFS path-finding visualizer, task scheduler using heaps.</li>
        </ul>

        {/* Tools & Environment */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Tools & Environment</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>IDE:</strong> IntelliJ IDEA, Eclipse, or VS Code (with Java extensions).</li>
          <li><strong>Java version:</strong> Java 11+ recommended (Java 8+ syntax works).</li>
          <li><strong>Version control:</strong> GitHub for storing solutions & progress.</li>
          <li><strong>Platforms:</strong> LeetCode (main), GeeksforGeeks (explanations), Codeforces (competitive practice).</li>
        </ul>

        {/* Study Schedule */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Suggested 12-Week Study Schedule</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Weeks 1–2:</strong> Complexity + Arrays/Strings (≈40 problems)</li>
          <li><strong>Weeks 3–4:</strong> Linked Lists + Stacks/Queues (≈30 problems)</li>
          <li><strong>Weeks 5–6:</strong> Trees (BSTs) + Recursion (≈40 problems)</li>
          <li><strong>Week 7:</strong> Heaps & Sorting (≈20 problems)</li>
          <li><strong>Weeks 8–9:</strong> Graphs BFS/DFS + Shortest Paths (≈30 problems)</li>
          <li><strong>Week 10:</strong> DP basics (Knapsack, LIS) (≈30 problems)</li>
          <li><strong>Week 11:</strong> Mixed sets + timed mocks (≈50 problems)</li>
          <li><strong>Week 12:</strong> Final review + GitHub repo + mock interviews</li>
        </ul>

        {/* Study Tips */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Study Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Code while you watch — pause, type, and test solutions.</li>
          <li>Write clean code with comments for complexity & edge cases.</li>
          <li>Keep a single GitHub repo with topic-based folders.</li>
          <li>Follow the DSA Sheet checklist — it maps to common interview patterns.</li>
          <li>Explain your solution out loud — great interview practice.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Final Notes</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Engineering Digest’s DSA in Java bootcamp is a{" "}
          <strong>comprehensive, interview-oriented program</strong>. 
          It balances theory with practical problem solving and provides a clear roadmap 
          for mastering DSA in Java. By following the study plan and problem sheet, 
          learners can become <strong>interview-ready within 12 weeks</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Engineering Digest (YouTube)</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Length:</strong> Multi-video playlist (DSA Bootcamp 2025)</p>
          <p><strong>Level:</strong> Beginner → Intermediate → Interview Prep</p>
        </div>
      </article>
    </div>
  );
};

export default DsaJavaEngineeringDigest;
