"use client";
import React from "react";

const RedisCrashCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          Redis Crash Course — Piyush Garg (CodeHelp)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <em>“Redis Crash Course”</em> by Piyush Garg provides a comprehensive{" "}
          <strong>1 hour 16 minute</strong> hands-on session covering everything 
          from installing Redis to using advanced features like Streams, Pub/Sub, 
          and optimizing Node.js applications with caching. Perfect for developers 
          who want to learn and apply Redis in a single sprint.
        </p>

        {/* Course Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Introduction:</strong> What Redis is and why it’s valuable.</li>
          <li><strong>Installation & Setup:</strong> Installing Redis server locally.</li>
          <li><strong>Strings:</strong> Basic commands and use cases.</li>
          <li><strong>Lists:</strong> Queue and stack operations.</li>
          <li><strong>Sets, Hash Maps & Ordered Sets:</strong> Core commands and practical usage.</li>
          <li><strong>Streams:</strong> Real-time data handling.</li>
          <li><strong>Geospatial Data:</strong> Storing and querying geo-coordinates.</li>
          <li><strong>Other Redis Data Types:</strong> Overview of specialized structures.</li>
          <li><strong>Pub/Sub:</strong> Messaging patterns with Redis.</li>
          <li><strong>Performance Integration:</strong> Speeding up Node.js servers with Redis caching.</li>
        </ul>

        {/* Timestamp Breakdown */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Timestamp Breakdown
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>00:00</strong> — Introduction to Redis</li>
          <li><strong>10:00</strong> — Installing Redis</li>
          <li><strong>17:00</strong> — Redis Strings</li>
          <li><strong>36:00</strong> — Redis Lists (Queues & Stacks)</li>
          <li><strong>50:35</strong> — Redis Sets</li>
          <li><strong>55:12</strong> — Redis Hash Maps</li>
          <li><strong>57:42</strong> — Ordered Sets (Priority Queue)</li>
          <li><strong>1:00:00</strong> — Redis Streams</li>
          <li><strong>1:07:00</strong> — Redis Geospatial Data</li>
          <li><strong>1:10:40</strong> — Overview of Other Redis Data Types</li>
          <li><strong>1:14:00</strong> — Pub/Sub in Redis</li>
          <li><strong>1:15:30</strong> — Speeding Up Node.js Server with Redis</li>
        </ul>

        {/* Suggested Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Flow
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To make the most out of this crash course, follow this flow:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch each module in sequence to build knowledge step-by-step.</li>
          <li>Pause and experiment with commands directly in your Redis CLI.</li>
          <li>Implement small demos in Node.js, such as caching or pub/sub features.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This crash course offers a complete guided journey into Redis — from setup, 
          to mastering its data structures, to applying real-world use cases in web 
          development. With its project-oriented teaching, it’s ideal for developers 
          wanting both conceptual understanding and immediate practical application.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (CodeHelp)</p>
          <p className="mb-1"><strong>Instructor:</strong> Piyush Garg</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default RedisCrashCourse;
