"use client";
import React from "react";

const OperatingSystemsCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-600 pb-4">
          Operating Systems Course for Beginners — freeCodeCamp (25-Hour Deep Dive)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>25-hour, beginner-to-advanced operating systems course</strong> 
          on the <strong>freeCodeCamp YouTube channel</strong>. This course 
          explores <em>theory, architecture, and implementation</em>, offering 
          learners a deep dive into how modern operating systems function. 
          The training balances <strong>conceptual clarity</strong> with 
          <strong>practical insights</strong>, making it an excellent resource 
          for computer science students and self-learners.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Platform:</strong> freeCodeCamp (YouTube)
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~25 hours
          </p>
          <p className="mb-1">
            <strong>Content Type:</strong> Comprehensive OS curriculum from 
            beginner fundamentals to advanced concepts
          </p>
        </div>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules (Estimated)
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Introduction & OS Basics</strong>
            <p>
              Historical background, key functions (resource management, 
              scheduling, system calls).
            </p>
          </li>
          <li>
            <strong>Process vs Thread Management</strong>
            <p>
              Process lifecycle, states, context switching, multithreading, 
              concurrency basics.
            </p>
          </li>
          <li>
            <strong>Memory Management Techniques</strong>
            <p>
              Virtual vs physical memory, paging, segmentation, allocation strategies.
            </p>
          </li>
          <li>
            <strong>File Systems & Storage Layout</strong>
            <p>
              Directory structures, file system types, caching, performance.
            </p>
          </li>
          <li>
            <strong>I/O Handling & Device Drivers</strong>
            <p>
              Abstractions for I/O, buffering, role of device drivers.
            </p>
          </li>
          <li>
            <strong>Scheduling Algorithms & Context Switching</strong>
            <p>
              Round Robin, Priority Scheduling, and fairness considerations.
            </p>
          </li>
          <li>
            <strong>Concurrency & Synchronization Mechanisms</strong>
            <p>
              Mutexes, semaphores, monitors, deadlock detection/prevention/recovery.
            </p>
          </li>
          <li>
            <strong>Virtualization, Containerization, and Modern OS Concepts</strong>
            <p>
              Virtual machines, container runtimes, OS adaptations for cloud/IoT.
            </p>
          </li>
        </ol>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the full course gradually, pausing to review key concepts.</li>
          <li>
            Reinforce learning with <strong>hands-on projects</strong> like 
            <em> Nand2Tetris </em> or <em> Minix </em>.
          </li>
          <li>
            Use simulators and textbooks to explore tricky topics like 
            <strong> memory management </strong> or <strong> scheduling </strong>.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Clear conceptual understanding of operating system fundamentals.</li>
          <li>Preparedness for <strong>systems programming</strong> and technical interviews.</li>
          <li>Ability to analyze <strong>low-level process and memory behavior</strong> in computing systems.</li>
        </ul>

        {/* Why Valuable */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Stands Out
        </h2>
        <p className="text-gray-700 leading-relaxed">
          With its <strong>25-hour duration</strong>, this course provides 
          <em> exceptional depth </em> compared to most free online OS tutorials. 
          Hosted on <strong>freeCodeCamp</strong>, a trusted nonprofit education 
          platform, it ensures <strong>high-quality and accessible learning</strong>. 
          Learners benefit from both a <em>structured academic approach</em> and 
          practical insights into <strong>modern OS trends</strong> like 
          containerization and virtualization.
        </p>
      </article>
    </div>
  );
};

export default OperatingSystemsCourse;
