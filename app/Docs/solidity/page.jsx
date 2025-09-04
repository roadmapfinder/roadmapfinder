"use client";
import React from "react";

const BlockchainSolidityCourse = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-emerald-600 pb-4">
          Learn Blockchain & Solidity Development Full Course 2024 — Dapp University
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>YouTube full-course tutorial</strong> by{" "}
          <strong>Dapp University (Gregory)</strong>, designed to teach{" "}
          <em>blockchain development, smart contracts, Solidity programming, and
          Dapp creation</em>. The course spans{" "}
          <em>4–6 hours</em> and combines theory with{" "}
          <strong>step-by-step project development</strong>. Learners gain
          experience in building decentralized applications with{" "}
          <strong>Solidity, Web3.js/Ethers.js, Hardhat/Truffle,</strong> and{" "}
          <strong>React</strong>.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="mb-1">
            <strong>Provider:</strong> Dapp University (Gregory)
          </p>
          <p className="mb-1">
            <strong>Format:</strong> YouTube full-course video
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> ~4–6 hours
          </p>
          <p>
            <strong>Focus:</strong> Blockchain development, Solidity, Dapps,
            Web3 integration
          </p>
        </div>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
          <li>
            <strong>Introduction to Blockchain & Smart Contracts</strong>
            <p>
              Covers decentralization, consensus, immutable ledgers, and the role
              of smart contracts in Ethereum.
            </p>
          </li>
          <li>
            <strong>Solidity Basics: Contracts, Data Types, Functions</strong>
            <p>
              Learn the structure of Solidity programs, data types, functions, and
              how to deploy basic smart contracts.
            </p>
          </li>
          <li>
            <strong>Development Environment: Hardhat/Truffle Setup & Local
            Testing</strong>
            <p>
              Installing and configuring development tools for compiling, testing,
              and deploying smart contracts.
            </p>
          </li>
          <li>
            <strong>Building Dapps</strong>
            <p>
              Hands-on projects including:
              <ul className="list-disc list-inside ml-4">
                <li>Todo List Dapp</li>
                <li>Voting Dapp</li>
                <li>ERC-20 Token Creation (with ICO basics)</li>
                <li>Full-stack Dapps combining frontend + contracts</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Smart Contract Testing Techniques</strong>
            <p>
              Writing unit tests with Hardhat/Truffle, using assertions and mock
              environments.
            </p>
          </li>
          <li>
            <strong>Integrating with Web3 Frontends</strong>
            <p>
              Using <strong>Web3.js</strong> or <strong>Ethers.js</strong> to
              connect frontend apps (React) with deployed contracts.
            </p>
          </li>
          <li>
            <strong>Deploying & Securing Smart Contracts</strong>
            <p>
              Best practices for deploying to testnets or mainnet, plus security
              guidelines (input validation, reentrancy protection).
            </p>
          </li>
        </ol>

        {/* Learning Flow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Flow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow the video step-by-step while coding along.</li>
          <li>
            Build complete applications that combine{" "}
            <strong>smart contract backends</strong> with{" "}
            <strong>frontend interaction</strong>.
          </li>
          <li>
            Write and run <strong>unit tests</strong> before deploying contracts.
          </li>
          <li>
            Apply <strong>security best practices</strong> when pushing contracts
            to testnets or mainnet.
          </li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Practical skills in <strong>writing, testing, and deploying smart
            contracts</strong>.
          </li>
          <li>
            Ability to build decentralized applications with{" "}
            <strong>Solidity + Web3</strong>.
          </li>
          <li>
            Experience with <strong>blockchain dev tools</strong> like Hardhat,
            Truffle, Web3.js, and Ethers.js.
          </li>
          <li>
            Confidence in deploying secure smart contracts to live networks.
          </li>
        </ul>

        {/* Why Valuable */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why This Course Works
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Dapp University</strong> emphasizes{" "}
          <em>project-based learning</em>, ensuring learners build real-world
          blockchain applications. The course starts with{" "}
          <strong>fundamentals</strong> and progresses to{" "}
          <strong>advanced full-stack Dapp workflows</strong>. With its{" "}
          <em>hands-on approach</em>, it’s highly practical and accessible for
          beginners who want to enter the blockchain development space.
        </p>
      </article>
    </div>
  );
};

export default BlockchainSolidityCourse;
