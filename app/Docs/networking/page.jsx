"use client";
import React from "react";

const NetworkingFullCourseKunal = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
          Computer Networking Full Course — Kunal Kushwaha (YouTube, ~4h)
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A detailed yet beginner-friendly networking course with a{" "}
          <strong>deep dive into the OSI model</strong>, layered architectures,
          protocols, and real-world networking applications. The course
          emphasizes conceptual clarity with{" "}
          <em>practical, real-life examples</em> and is supported by open-source
          GitHub notes.
        </p>

        {/* Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Modules Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Overview of Computer Networking & Internet Basics</li>
          <li>Data Transmission, IP Structure, and Submarine Network Insights</li>
          <li>LAN/MAN/WAN, Networking Devices, and Topologies</li>
          <li>OSI Model Deep Dive & TCP/IP Model Comparison</li>
          <li>Core Protocols & Email Workflow (HTTP, DNS, SMTP)</li>
          <li>Transport Layer Mechanics: TCP vs UDP, 3-Way Handshake, NAT</li>
          <li>Network & Data Link Layer Concepts</li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Watch the video in <strong>sections aligned with modules</strong>{" "}
            for structured progress.
          </li>
          <li>
            Use the{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub markdown notes
            </a>{" "}
            as reference material.
          </li>
          <li>
            Pause to <em>visualize packet flow and scenarios</em> such as
            failures or bottlenecks.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Solid grasp of <strong>network layering</strong> and the OSI model.
          </li>
          <li>
            Functional understanding of <strong>protocols</strong> and packet
            handling.
          </li>
          <li>
            Prepared for roles/interviews requiring{" "}
            <em>client-server communication and troubleshooting</em>.
          </li>
        </ul>

        {/* Why This Course */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Is Worthwhile
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Concise & Comprehensive:</strong> Delivers all networking
          fundamentals in ~4 hours. <br />
          <strong>Real-World Context:</strong> Explains concepts with analogies,
          diagrams, and relatable examples. <br />
          <strong>Supported by Notes:</strong> Learners can revise with the
          GitHub markdown repository for better retention.
        </p>
      </article>
    </div>
  );
};

export default NetworkingFullCourseKunal;
