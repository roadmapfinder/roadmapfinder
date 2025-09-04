"use client";
import React from "react";

const OperatingSystemOneShot = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-600 pb-4">
          Operating System In One Shot — Anuj Bhaiya (Coding Shuttle)
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A concise <strong>15-minute crash course</strong> summarizing essential{" "}
          <em>Operating System concepts</em>, designed as a quick refresher for
          campus placement exams and technical interviews. The session is
          placement-focused, compact, and ideal for last-minute preparation.
        </p>

        {/* Key Topics */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Key Topics Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Definition & Role of Operating Systems</li>
          <li>Process Management & CPU Scheduling Basics</li>
          <li>Memory Management (Segmentation, Paging)</li>
          <li>Concurrency & Synchronization Fundamentals</li>
          <li>File System Overview</li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the entire video as a rapid refresher session.</li>
          <li>Pause on each concept to make quick notes or flashcards.</li>
          <li>
            Use alongside more detailed OS playlists for comprehensive mastery.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Quickly refreshed understanding of core OS concepts.</li>
          <li>Boosted confidence before interviews or placement tests.</li>
          <li>
            Clear, high-level snapshot of processes, memory, concurrency, and
            files.
          </li>
        </ul>

        {/* Why Useful */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Video Is Useful
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Time-efficient:</strong> Covers fundamental OS topics in just
          15 minutes. <br />
          <strong>Placement Ready:</strong> Structured for quick revision before
          technical rounds. <br />
          <strong>High Impact:</strong> Perfect for learners who prefer concise,
          to-the-point content without lengthy lectures.
        </p>
      </article>
    </div>
  );
};

export default OperatingSystemOneShot;
