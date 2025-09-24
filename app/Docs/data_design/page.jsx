"use client";
import React from "react";

const DatabaseDesignVideo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          From Idea to Production-Ready Database Design (No More Mistakes!) — Jan
          Marshal
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The{" "}
          <strong>
            “From Idea to Production-Ready Database Design (No More Mistakes!)”
          </strong>{" "}
          is a YouTube video by <strong>Jan Marshal</strong> that introduces{" "}
          <em>relational database design</em> from the ground up. It is aimed at
          developers and learners who want to transform conceptual ideas into{" "}
          <strong>real, production-ready database schemas</strong> while avoiding
          common mistakes. The video is positioned as a{" "}
          <strong>Beginner’s Guide to Designing a Relational Database</strong>{" "}
          and focuses on structured design (ERD, normalization, schema integrity)
          rather than unstructured or NoSQL systems.
        </p>

        {/* Likely Topics Covered */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Likely Topics Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Idea & Requirements Gathering</strong> — Understanding what
            data you need, business rules, and identifying entities.
          </li>
          <li>
            <strong>Entity-Relationship Diagrams (ERDs)</strong> — Defining
            entities, relationships, attributes, and keys.
          </li>
          <li>
            <strong>Schema Design / Logical Modeling</strong> — Translating ERD
            into relational tables, deciding on primary keys, foreign keys, and
            constraints.
          </li>
          <li>
            <strong>Normalization</strong> — Applying 1NF, 2NF, 3NF (and maybe
            beyond) to avoid redundancy and anomalies.
          </li>
          <li>
            <strong>Constraints & Integrity</strong> — Using NOT NULL, UNIQUE,
            CHECK, and FOREIGN KEY constraints to ensure data integrity.
          </li>
          <li>
            <strong>Common Mistakes & Pitfalls</strong> — Highlighting issues
            like over-denormalization, poor indexing, or overly flexible schemas.
          </li>
          <li>
            <strong>Indexing & Performance Considerations</strong> — When and
            where to add indexes, query performance tradeoffs.
          </li>
          <li>
            <strong>From Design to Production</strong> — Implementing schemas in
            real databases, migrations, and schema changes.
          </li>
          <li>
            <strong>Scaling & Future Changes</strong> — Designing databases that
            can evolve with new features and data growth.
          </li>
        </ul>

        {/* Suggested Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with <strong>requirements gathering</strong> to clarify data
            needs.
          </li>
          <li>
            Build <strong>ERDs</strong> and gradually move to schema design.
          </li>
          <li>
            Apply <strong>normalization</strong> before enforcing constraints.
          </li>
          <li>
            Explore <strong>common mistakes</strong> to learn what to avoid.
          </li>
          <li>
            Conclude with <strong>production-ready schema deployment</strong> and
            performance optimization.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Ability to design structured relational databases from scratch.
          </li>
          <li>
            Understanding of ERDs, normalization, and schema integrity
            principles.
          </li>
          <li>
            Knowledge of indexing, constraints, and performance considerations.
          </li>
          <li>
            Confidence to take a design from idea to{" "}
            <strong>production-ready implementation</strong>.
          </li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The{" "}
          <strong>
            “From Idea to Production-Ready Database Design (No More Mistakes!)”
          </strong>{" "}
          video by <strong>Jan Marshal</strong> provides a{" "}
          <em>step-by-step introduction to relational database design</em>. It
          helps beginners and intermediate learners build strong foundations and
          avoid mistakes when creating real-world, production-grade databases.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Jan Marshal
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Focus:</strong> Relational Database Design
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default DatabaseDesignVideo;
