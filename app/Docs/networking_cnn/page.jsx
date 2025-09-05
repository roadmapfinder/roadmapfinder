"use client";
import React from "react";

const CCNACourseNetworkChuck = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          FREE CCNA 200–301 Complete Course — NetworkChuck
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A guided, <strong>entry-to-intermediate</strong> level YouTube playlist
          that covers essential networking concepts and{" "}
          <strong>CCNA foundational topics</strong> using{" "}
          <em>hands-on explanations</em> and real-life analogies. Delivered by{" "}
          <strong>NetworkChuck</strong> in his engaging, beginner-friendly style.
        </p>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules Taught
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Networking Basics: Types and Purpose</li>
          <li>Switching Concepts: Functionality and CLI Usage</li>
          <li>Routing Fundamentals: Role and Configurations</li>
          <li>Protocol Stack: TCP/IP vs OSI Layers</li>
          <li>IP Addressing / Subnetting</li>
          <li>VLANs & Segmentation</li>
          <li>DNS & Basic Infrastructure Protocols</li>
          <li>Network Troubleshooting & Real-World Applications</li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Progress through each video sequentially,{" "}
            <strong>practicing alongside</strong> using analogies and examples.
          </li>
          <li>
            Pause frequently to apply concepts in{" "}
            <em>Packet Tracer, Cisco Packet Emulator</em>, or a home lab setup.
          </li>
          <li>
            Maintain concise notes on <strong>key commands</strong>,{" "}
            <strong>layer functions</strong>, and terminology for quick
            reference.
          </li>
        </ul>

        {/* Objectives / Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Objectives / Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Solid conceptual understanding of <strong>network devices</strong>{" "}
            and communication layers.
          </li>
          <li>
            Familiarity with <em>CCNA-relevant topics</em> like routing,
            switching, and protocols.
          </li>
          <li>
            Readiness for entry-level networking roles or{" "}
            <strong>CCNA exam preparation</strong> through engaging,
            visualization-based learning.
          </li>
        </ul>

        {/* Learner Feedback */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What Learners Say
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          On Reddit, some CCNA students praised NetworkChuck’s energetic,
          approachable delivery:
        </p>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 mb-4">
          “NetworkChuck has a free CCNA course on YouTube and I like his style a
          bit more…”
        </blockquote>
        <p className="text-gray-700 leading-relaxed mb-4">
          Others pointed out that while engaging, the playlist may not cover the
          <em> full exam depth</em>:
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600">
          “NetworkChuck’s course isn’t even a course… he never finished it…”
        </blockquote>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 leading-relaxed">
          NetworkChuck’s <strong>FREE CCNA Complete Course</strong> is a
          motivational and accessible introduction to networking—perfect for{" "}
          <em>video-based learners</em> who enjoy{" "}
          <strong>storytelling and analogies</strong>. However, for{" "}
          <strong>serious CCNA exam prep</strong>, supplementing with structured
          resources (e.g., Jeremy’s or David Bombal’s courses) is recommended.
        </p>
      </article>
    </div>
  );
};

export default CCNACourseNetworkChuck;
