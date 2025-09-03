"use client";
import React from "react";

const FreeCodeCampSystemDesign = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          System Design Crash Courses — freeCodeCamp (YouTube)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          freeCodeCamp doesn’t include system design in its interactive curriculum, 
          but it hosts <strong>two excellent YouTube crash courses</strong> that cover 
          both real-world applications and interview-oriented principles. 
          These are <em>free, accessible, and beginner-to-intermediate friendly</em>.
        </p>

        {/* Course A */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course A: Software System Design for Beginners
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-2">
            <strong>Instructor:</strong> Gaurav Sen
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> ~1.5 hours
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Key Topics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fundamentals of system design</li>
            <li>Architecture of a live video streaming application</li>
            <li>Principles: fault tolerance, extensibility, and testing</li>
            <li>API design, database schema, and cache strategies</li>
            <li>Protocols: WebRTC, MPEG DASH, HLS</li>
            <li>Using CDNs, MapReduce for video processing</li>
            <li>UML diagrams (use-case, class, sequence) + server-side design</li>
          </ul>
        </div>

        {/* Course B */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course B: System Design Principles for Interviews
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-2">
            <strong>Instructor:</strong> Hayk Simonyan
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> ~1 hour
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Key Topics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Core system design principles: scalability, reliability, architecture</li>
            <li>Infrastructure: CI/CD, logging, monitoring, load balancing</li>
            <li>Application protocols: HTTP, WebSockets, WebRTC, MQTT</li>
            <li>Critical metrics: CAP theorem, latency, throughput, SLOs/SLAs</li>
            <li>Caching strategies, proxies (forward/reverse), CDNs</li>
            <li>Database scaling: sharding, replication, ACID compliance</li>
          </ul>
        </div>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Flow
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with <strong>Course A</strong> (Gaurav Sen) to see 
            system design applied in a real-world context (video streaming).
          </li>
          <li>
            Then move to <strong>Course B</strong> (Hayk Simonyan) to 
            strengthen your foundation in principles, terminology, and trade-offs.
          </li>
        </ol>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Ability to articulate architecture for scalable systems.</li>
          <li>Preparedness for system design interviews.</li>
          <li>Fluency with UML diagrams, caching, and consistency models.</li>
          <li>Practical understanding of networking, databases, and protocols.</li>
        </ul>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Next Steps
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Practice designing systems (chat apps, blogs, ecommerce) on paper/whiteboard.</li>
          <li>Explore deeper resources like <em>Grokking the System Design Interview</em>.</li>
          <li>Read <em>Designing Data-Intensive Applications</em> for advanced concepts.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          freeCodeCamp provides two <strong>solid crash courses</strong> for system design: 
          a <em>real-world, application-oriented session by Gaurav Sen</em> 
          and an <em>interview-focused guide by Hayk Simonyan</em>. 
          Together, they create an excellent starting point for learners 
          preparing for scalable architecture design or technical interviews.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Platform:</strong> freeCodeCamp (YouTube)
          </p>
          <p className="mb-1">
            <strong>Level:</strong> Beginner → Intermediate
          </p>
          <p>
            <strong>Format:</strong> Crash Courses (~2.5 hours total)
          </p>
        </div>
      </article>
    </div>
  );
};

export default FreeCodeCampSystemDesign;
