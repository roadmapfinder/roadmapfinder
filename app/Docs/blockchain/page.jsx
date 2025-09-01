"use client";
import React from "react";

const BlockchainCodeEater = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Blockchain Full Course — Code Eater (Comprehensive 6-Hour Tutorial)
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Code Eater Blockchain Full Course</strong> is a{" "}
          <em>6-hour, free YouTube tutorial</em> that covers blockchain
          fundamentals, Bitcoin essentials, and Ethereum smart contract
          development. The course is split into{" "}
          <strong>three core modules</strong>:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Blockchain Fundamentals</li>
          <li>Cryptocurrency (Bitcoin)</li>
          <li>Ethereum & Smart Contract Development</li>
        </ul>

        {/* Module 1 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Module 1 — Blockchain Fundamentals
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Why study blockchain?</li>
          <li>
            How blockchain works: decentralization, blocks, transactions,
            consensus mechanisms (PoW / PoS).
          </li>
          <li>Core applications and real-world use cases.</li>
        </ul>

        {/* Module 2 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Module 2 — Cryptocurrency (Bitcoin Essentials)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Bitcoin as digital currency — why it matters.</li>
          <li>Blockchain transactions & wallets.</li>
          <li>Mining basics and how new coins are created.</li>
        </ul>

        {/* Module 3 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Module 3 — Ethereum & Smart Contract Development
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Ethereum basics and how it expands on Bitcoin.</li>
          <li>
            Introduction to smart contracts:{" "}
            <strong>writing, deploying, and interacting</strong> with them.
          </li>
          <li>Likely use of Solidity with demo examples.</li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Understand blockchain structure and consensus models.</li>
          <li>Explain Bitcoin fundamentals and how crypto transactions work.</li>
          <li>Deploy and interact with Ethereum smart contracts.</li>
          <li>Gain practical knowledge of Solidity and dApp workflows.</li>
        </ul>

        {/* Audience */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Who Is This For?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Beginners exploring blockchain and cryptocurrency.</li>
          <li>
            Developers curious about{" "}
            <strong>Ethereum & smart contract development</strong>.
          </li>
          <li>
            Tech enthusiasts who want a full-stack overview of{" "}
            <strong>Bitcoin + Ethereum</strong>.
          </li>
        </ul>

        {/* Suggested Study Plan */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Study Plan
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Week 1:</strong> Module 1 — Blockchain Fundamentals
          </li>
          <li>
            <strong>Week 2:</strong> Module 2 — Bitcoin Essentials
          </li>
          <li>
            <strong>Week 3:</strong> Module 3 — Ethereum & Smart Contracts
          </li>
        </ul>

        {/* Tools & Tech */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Tools & Technologies Covered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Blockchain transaction flow & mining concepts.</li>
          <li>Bitcoin wallets & digital currency principles.</li>
          <li>Ethereum platform & Solidity programming basics.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Code Eater’s Blockchain Full Course is a{" "}
          <strong>solid beginner-friendly resource</strong> that blends
          foundational theory with hands-on smart contract development. By the
          end of the program, learners will{" "}
          <strong>
            understand blockchain, Bitcoin, and how to build on Ethereum
          </strong>
          — making it a great entry point into Web3.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> Code Eater (YouTube)
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Length:</strong> ≈6 hours
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlockchainCodeEater;
