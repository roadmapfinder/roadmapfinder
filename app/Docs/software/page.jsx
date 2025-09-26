"use client";
import React from "react";

const SoftwareArchitectureRitesh = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Mastering Software Architecture — Complete Guide (Tech Talk with Ritesh)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>comprehensive YouTube course</strong> on Software Architecture 
          by <strong>Tech Talk with Ritesh</strong>. It spans fundamental concepts, 
          architectural principles, modern styles, and deployment considerations —
          aiming to guide learners from <strong>beginner</strong> to <strong>architect-level</strong>
          understanding.
        </p>

        {/* Full Course Content */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Full Course Content Breakdown
        </h2>

        {/* 1. Introduction */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Introduction & Motivation
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>What is software architecture?</li>
          <li>Why architecture is critical for software success</li>
          <li>Role of a software architect vs developer</li>
        </ul>

        {/* 2. Principles */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Architectural Principles & Qualities
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Separation of concerns, modularity, coupling & cohesion</li>
          <li>Non-functional requirements: scalability, performance, reliability</li>
          <li>Maintainability and trade-offs in design decisions</li>
        </ul>

        {/* 3. Styles & Patterns */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Architectural Styles & Patterns
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Monolithic architecture</li>
          <li>Layered architecture</li>
          <li>Microservices and service-oriented approaches</li>
          <li>Event-driven and space-based architectures</li>
          <li>Comparisons, use-cases, pros & cons</li>
        </ul>

        {/* 4. Decomposition */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Decomposition & Module Boundaries
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Breaking systems into modules and bounded contexts</li>
          <li>Domain decomposition techniques</li>
          <li>Partitioning responsibilities across teams</li>
        </ul>

        {/* 5. Communication */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Communication & Integration
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Synchronous vs asynchronous communication</li>
          <li>APIs, messaging, and event buses</li>
          <li>Common integration patterns</li>
        </ul>

        {/* 6. Deployment */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Deployment & Infrastructure Considerations
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Deployment strategies (on-prem, cloud, containers)</li>
          <li>Scaling: horizontal vs vertical</li>
          <li>Resilience and fault tolerance basics</li>
        </ul>

        {/* 7. Case Studies */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Case Studies & Real Examples
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Illustrative examples of architecture trade-offs</li>
          <li>Comparisons with real-world systems</li>
          <li>When to choose which architectural style</li>
        </ul>

        {/* 8. Summary */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Summary, Best Practices & Next Steps
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Architectural decision frameworks</li>
          <li>Best practices and pitfalls to avoid</li>
          <li>Guidance on continuing your learning journey</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What This Course May Not Cover in Depth
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Step-by-step coding implementation of architectures</li>
          <li>Detailed infrastructure tooling (Kubernetes, Terraform)</li>
          <li>Performance benchmarking & load testing</li>
          <li>Advanced domain-driven design (DDD), CQRS, event sourcing</li>
          <li>Governance, architecture review processes</li>
          <li>Evolution of large legacy systems</li>
          <li>Hands-on labs or project assignments</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Ritesh (Tech Talk with Ritesh)</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Level:</strong> Beginner → Intermediate → Aspiring Architect</p>
          <p><strong>Includes:</strong> Principles, styles, decomposition, communication, deployment, case studies</p>
        </div>

      </article>
    </div>
  );
};

export default SoftwareArchitectureRitesh;