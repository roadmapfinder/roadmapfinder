"use client";
import React from "react";

const SystemDesignEngineeringDigest = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          System Design Playlist in Hindi — Engineering Digest (Complete Course Overview)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Engineering Digest System Design Playlist</strong> is a{" "}
          <em>Hindi-language YouTube series</em> that covers the breadth of
          system design — from fundamental principles of scalability,
          availability, and consistency, to advanced architectural patterns and
          real-world case studies. The playlist also prepares learners for{" "}
          <strong>system design interviews</strong> through mock questions and
          structured solutions, all explained in Hindi.
        </p>

        {/* Target Audience */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Who Is This For?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Developers who speak Hindi and want to strengthen their{" "}
            <strong>system architecture</strong> and design knowledge.
          </li>
          <li>
            Candidates preparing for <strong>system design interviews</strong>{" "}
            at top tech companies.
          </li>
          <li>
            Learners seeking <em>real-world examples</em> of how scalable
            systems like chat apps, feeds, or URL shorteners are designed.
          </li>
        </ul>

        {/* Likely Module Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The playlist follows a progressive structure, starting from basics and
          moving towards advanced system concepts and interview preparation.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Introduction (Scalability, load,
            availability)
          </li>
          <li>
            <strong>Module 2:</strong> Foundational Concepts (Caching, CAP
            theorem, sharding, data partitioning)
          </li>
          <li>
            <strong>Module 3:</strong> Component Design (Load balancers, queues,
            APIs, rate limiting)
          </li>
          <li>
            <strong>Module 4:</strong> Real Case Studies (Chat apps, feed
            systems, URL shorteners)
          </li>
          <li>
            <strong>Module 5:</strong> Advanced Patterns (Microservices,
            event-driven design, CQRS)
          </li>
          <li>
            <strong>Module 6:</strong> Interview Practice (Mock questions +
            structured solutions in Hindi)
          </li>
          <li>
            <strong>Module 7:</strong> Modern Architecture Concepts (Resilience,
            async processing, circuit breakers)
          </li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Watch sequentially — start with fundamentals before moving into case
            studies.
          </li>
          <li>
            Pause videos to <strong>diagram architectures</strong> on paper or a
            whiteboard.
          </li>
          <li>
            Attempt <em>self-design exercises</em> like building a notification
            service or rate limiter.
          </li>
          <li>
            Revisit interview-style questions to test understanding and improve
            clarity.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Clear understanding of{" "}
            <strong>core system design principles and trade-offs</strong>.
          </li>
          <li>
            Ability to <strong>design scalable, reliable architectures</strong>{" "}
            in Hindi.
          </li>
          <li>
            Confidence in handling{" "}
            <em>system design interview questions</em> at top companies.
          </li>
          <li>
            Strong conceptual foundation to move into{" "}
            <strong>advanced distributed systems</strong>.
          </li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>System Design Playlist by Engineering Digest</strong> is a
          <em> beginner-to-advanced roadmap</em> for mastering system design in
          Hindi. It balances foundational theory with{" "}
          <strong>hands-on case studies</strong>, ensuring both conceptual depth
          and practical applicability. For Hindi-speaking learners aiming at{" "}
          <strong>system design interviews</strong> or real-world architecture
          roles, this playlist is a valuable and accessible resource.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Creator:</strong> Engineering Digest
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Playlist:</strong> System Design Playlist (Hindi)
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate → Advanced
          </p>
        </div>
      </article>
    </div>
  );
};

export default SystemDesignEngineeringDigest;
