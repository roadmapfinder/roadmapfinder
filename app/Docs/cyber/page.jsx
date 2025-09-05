"use client";
import React from "react";

const CybersecurityNetworkChuck = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-4">
          Cybersecurity Resources — NetworkChuck (YouTube)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A curated collection of cybersecurity-focused YouTube content by{" "}
          <strong>NetworkChuck</strong>, blending{" "}
          <em>certification prep, career guidance,</em> and{" "}
          <em>hands-on project ideas</em>. While not a single comprehensive
          playlist, these resources provide both foundational theory and
          real-world skill-building opportunities.
        </p>

        {/* Available Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Available Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-6 mb-6">
          <li>
            <strong>FREE Security+ SY0-601 // Complete Course</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>CompTIA Security+ certification prep playlist.</li>
              <li>
                Covers threats, vulnerabilities, IAM, risk management, secure
                protocols, and cryptography basics.
              </li>
              <li>
                Great starting point for <strong>foundational knowledge</strong>
                .
              </li>
            </ul>
          </li>
          <li>
            <strong>13 Cyber Security Projects to Get You HIRED (Updated 2025)</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                Hands-on projects for practical learning—penetration tests,
                audits, security automation, logging, and more.
              </li>
              <li>
                Helps build a strong <strong>cybersecurity portfolio</strong>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cybersecurity Career Prospects (Webinar)</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                Webinar-style session explaining <strong>career paths</strong>{" "}
                (SOC Analyst, Pentester, etc.).
              </li>
              <li>
                Covers certifications, industry expectations, and career
                strategies.
              </li>
            </ul>
          </li>
          <li>
            <strong>A Guide to Cybersec in 2025</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                Future-facing guide covering <strong>roles in demand</strong>{" "}
                like SOC Analyst, Network Security Engineer, and Pentester.
              </li>
              <li>
                Discusses emerging challenges and evolving skill
                requirements.
              </li>
            </ul>
          </li>
        </ul>

        {/* Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Begin with the <strong>Security+ course</strong> for fundamental
            theory and terminology.
          </li>
          <li>
            Reinforce concepts by applying them in{" "}
            <em>hands-on projects</em> from the “13 Projects” video.
          </li>
          <li>
            Watch the <strong>career webinar</strong> to explore role pathways
            and required certifications.
          </li>
          <li>
            Use the <strong>2025 Cybersec Guide</strong> to align learning with
            industry demand.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understanding of cybersecurity fundamentals via Security+ prep.</li>
          <li>
            Practical competence through <strong>portfolio-ready projects</strong>.
          </li>
          <li>
            Career clarity with insight into{" "}
            <em>roles, certifications, and skillsets</em>.
          </li>
        </ul>

        {/* Why This Content Works */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Content Works
        </h2>
        <p className="text-gray-700 leading-relaxed">
          NetworkChuck’s cybersecurity resources combine{" "}
          <strong>theory, projects, and career guidance</strong> in an engaging,
          beginner-friendly format. Accessible via YouTube, these videos are{" "}
          <em>free, practical, and motivational</em>, making them ideal for
          learners entering or transitioning into cybersecurity.
        </p>
      </article>
    </div>
  );
};

export default CybersecurityNetworkChuck;
