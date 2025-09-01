"use client";
import React from "react";

const SolidityFreeCodeCamp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-yellow-500 pb-4">
          Solidity & Blockchain — freeCodeCamp (Full Crash Course) — In-Depth Course Breakdown
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>freeCodeCamp Solidity & Blockchain Crash Course</strong> is a{" "}
          <em>16-hour, one-shot YouTube program</em> designed to teach blockchain
          fundamentals, Solidity programming, and smart contract deployment. It
          combines <strong>theory, live coding in Remix, and real-world projects</strong> 
          with Web3.py, ERC20/ERC721 tokens, Chainlink oracles, and security
          best practices. This end-to-end program is one of the most comprehensive
          free introductions to Web3 development available.
        </p>

        {/* Format & Scope */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Format & Scope
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Format:</strong> Single long YouTube crash course (≈16 hours) split into lessons.
          </li>
          <li>
            <strong>Includes:</strong> Blockchain basics → Solidity → smart contract
            design patterns → Web3.py integration → ERC20/ERC721 → Chainlink → security.
          </li>
          <li>
            <strong>Style:</strong> Lecture + live coding + project demos.
          </li>
        </ul>

        {/* Audience */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Audience
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Beginners curious about blockchain and Solidity.</li>
          <li>Developers with some JS or Python background.</li>
          <li>Programmers seeking an end-to-end smart contract pathway.</li>
        </ul>

        {/* Learning Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Explain blockchain transactions, consensus, and accounts.</li>
          <li>Write and deploy Solidity contracts using Remix IDE.</li>
          <li>Implement patterns like factories, ERC20, ERC721, and Chainlink oracles.</li>
          <li>Deploy and interact with contracts using <strong>Web3.py</strong>.</li>
          <li>Understand smart contract security best practices.</li>
        </ul>

        {/* Course Structure */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Structure & Lessons
        </h2>

        {/* Lesson 0 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 0 — Welcome to Blockchain
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What is a blockchain (blocks, miners, validators).</li>
          <li>Making your first transaction and wallets.</li>
          <li>Consensus basics and why smart contracts matter.</li>
        </ul>

        {/* Lesson 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 1 — Remix & Simple Storage (Solidity Basics)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Remix IDE intro and Solidity syntax.</li>
          <li>State variables, functions, visibility, events.</li>
          <li>Deploying and calling a <strong>SimpleStorage</strong> contract.</li>
        </ul>

        {/* Lesson 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 2 — Storage Factory & Contract Patterns
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Inheritance and factory patterns.</li>
          <li>Deploying child contracts from manager contracts.</li>
          <li>Designing modular, reusable systems.</li>
        </ul>

        {/* Lesson 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 3 — Fund Me (Payable Functions & Oracles)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>payable, msg.sender, msg.value, wei/ether conversions.</li>
          <li>Integrating <strong>Chainlink Price Feeds</strong>.</li>
          <li>Withdraw patterns and safe payment handling.</li>
        </ul>

        {/* Lesson 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Lesson 4 — Web3.py Integration
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Installing Python + Web3.py.</li>
          <li>Deploying contracts via scripts.</li>
          <li>Calling contract functions and reading events.</li>
        </ul>

        {/* Further Topics */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Further Topics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>ERC20 fungible tokens & ERC721 NFTs.</li>
          <li>DeFi demos and upgradeable contracts.</li>
          <li>Front-end/back-end smart contract integration.</li>
          <li>Smart contract security checklist.</li>
        </ul>

        {/* Projects */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Projects & Hands-On Exercises
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>SimpleStorage:</strong> basic storage/retrieve contract.</li>
          <li><strong>Factory Pattern:</strong> deploy & track child contracts.</li>
          <li><strong>FundMe:</strong> accept payments + Chainlink integration.</li>
          <li><strong>ERC20 & ERC721:</strong> tokens and minting examples.</li>
          <li><strong>Web3.py deploy scripts:</strong> automate deployment & interaction.</li>
        </ul>

        {/* Study Plan */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Study Plan (4-Week Bootcamp)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Week 1:</strong> Lesson 0 + Lesson 1 (SimpleStorage).</li>
          <li><strong>Week 2:</strong> Lesson 2 + Lesson 3 (Factory + FundMe).</li>
          <li><strong>Week 3:</strong> Lesson 4 (Web3.py deploy & scripts).</li>
          <li><strong>Week 4:</strong> ERC20/ERC721 demos + security checklist + mini project.</li>
        </ul>

        {/* Tools */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Tools & Tech Used
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Remix IDE (Solidity development & deployment).</li>
          <li>Web3.py (Python library for contract interaction).</li>
          <li>Injected wallets + testnets.</li>
          <li>freeCodeCamp Solidity blog & handbook.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          freeCodeCamp’s Solidity Crash Course is{" "}
          <strong>one of the most complete free Web3 learning resources</strong>.
          By the end, learners will have built real-world contracts, integrated
          with oracles and tokens, and understood security best practices. It’s
          ideal for anyone seeking a <strong>practical jump-start into blockchain
          development</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> freeCodeCamp.org</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube + freeCodeCamp Blog</p>
          <p className="mb-1"><strong>Length:</strong> ≈16 hours</p>
          <p><strong>Level:</strong> Beginner → Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default SolidityFreeCodeCamp;
