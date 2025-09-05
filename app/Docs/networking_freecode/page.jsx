"use client";
import React from "react";

const NetworkingCourseCompTIA = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-600 pb-4">
          Computer Networking Course – Network Engineering [CompTIA Network+ Exam Prep] — freeCodeCamp
        </h1>

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          An end-to-end <strong>9-hour tutorial series</strong> designed to
          prepare learners for the <em>CompTIA Network+ certification</em> and
          real-world network engineering roles. Taught by{" "}
          <strong>Brian Ferrill</strong>, this course blends theoretical
          knowledge with <em>hands-on practical instruction</em>.
        </p>

        {/* Curriculum */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Curriculum Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Network Devices & Architecture</li>
          <li>Networking Services (DHCP, DNS) & Applications</li>
          <li>Cabling, Topologies & WAN Technologies</li>
          <li>IPv4, IPv6 & Routing Fundamentals</li>
          <li>NAT & Core Routing Protocols</li>
          <li>Virtualization & Cloud Networking Concepts</li>
          <li>Infrastructure Implementation & Configuration</li>
          <li>Wireless Networking & LAN Setup</li>
          <li>Network Security Strategy (Hardening, Firewalls)</li>
          <li>Troubleshooting & Tools in Network Diagnostics</li>
          <li>OSI Model and Layered Networking Stack</li>
        </ul>

        {/* Learning Approach */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Watch sequential modules, pausing to note{" "}
            <strong>key configurations</strong> and examples.
          </li>
          <li>
            Reinforce learning by setting up a{" "}
            <em>home network lab</em> (e.g., VirtualBox + GNS3 or Packet
            Tracer).
          </li>
          <li>
            Use a <strong>cheat sheet</strong> for common commands (ping,
            traceroute, ipconfig) and OSI layers.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Proficient understanding of both <strong>wired</strong> and{" "}
            <strong>wireless</strong> networking setups.
          </li>
          <li>
            Familiarity with <em>virtualization</em>,{" "}
            <em>cloud integration</em>, and{" "}
            <strong>network security best practices</strong>.
          </li>
          <li>
            Confident preparedness for the{" "}
            <strong>CompTIA Network+ exam</strong> and real-world networking
            challenges.
          </li>
        </ul>

        {/* Why This Course */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why It Stands Out
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Certification-Grade Material:</strong> Precisely aligned with{" "}
          CompTIA Network+ readiness. <br />
          <strong>Real-World Application:</strong> Focuses on{" "}
          <em>practical configuration</em> and troubleshooting, not just theory.{" "}
          <br />
          <strong>Free & Accessible:</strong> Fully available via{" "}
          <em>freeCodeCamp’s open platform</em> and YouTube.
        </p>
      </article>
    </div>
  );
};

export default NetworkingCourseCompTIA;
