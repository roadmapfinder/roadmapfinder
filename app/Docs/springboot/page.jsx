"use client";
import React from "react";

const SpringBootCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Spring Boot Mastery: From Basics to Advanced — Engineering Digest
        </h1>

        {/* Quick Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Engineering Digest</strong> provides a comprehensive{" "}
          <em>Spring Boot tutorial series</em> on YouTube, guiding learners from
          <strong> fundamentals</strong> to <strong>advanced backend development</strong>.
          The course includes REST API creation, database integration, advanced Spring
          features, NoSQL demonstrations, and real-world architecture practices.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Module 1:</strong> Getting Started with Spring Boot — Initializr, core
            annotations, and project structure
          </li>
          <li>
            <strong>Module 2:</strong> Developing RESTful APIs — CRUD endpoints with
            @GetMapping, @PostMapping, etc.
          </li>
          <li>
            <strong>Module 3:</strong> Database Integration — Spring Data JPA, entities,
            repositories, SQL database setup
          </li>
          <li>
            <strong>Module 4:</strong> Advanced Features — Bean lifecycle, profiles, property
            configurations
          </li>
          <li>
            <strong>Module 5:</strong> MongoDB & NoSQL Integration — Building apps with MongoDB
            and Spring Boot
          </li>
          <li>
            <strong>Module 6:</strong> Best Practices & Architecture — Microservices,
            deployment, and production tips
          </li>
        </ul>

        {/* Suggested Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Start with <strong>Spring Boot fundamentals</strong> and core setup.</li>
          <li>Progress to <strong>REST API building</strong> and CRUD operations.</li>
          <li>Integrate <strong>SQL databases</strong> using Spring Data JPA.</li>
          <li>Experiment with <strong>NoSQL (MongoDB)</strong> integration.</li>
          <li>Study <strong>advanced features</strong> like profiles & configuration.</li>
          <li>Apply <strong>architecture and deployment strategies</strong> in mini-projects.</li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Confidently set up and run Spring Boot projects.</li>
          <li>Build and deploy RESTful APIs with CRUD operations.</li>
          <li>Use Spring Data JPA for database persistence.</li>
          <li>Understand and implement NoSQL (MongoDB) with Spring Boot.</li>
          <li>Apply production-ready architecture tips and best practices.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Engineering Digest’s Spring Boot series</strong> is a{" "}
          <em>well-rounded backend learning path</em> for aspiring Java developers. It blends
          fundamentals, databases, and modern practices to make learners{" "}
          <strong>industry-ready</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Engineering Digest Team
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Language:</strong> English
          </p>
          <p>
            <strong>Level:</strong> Beginner → Advanced
          </p>
        </div>
      </article>
    </div>
  );
};

export default SpringBootCourse;
