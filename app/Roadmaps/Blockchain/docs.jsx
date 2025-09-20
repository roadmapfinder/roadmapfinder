// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Ethereum Official Documentation",
    description:
      "Comprehensive guide covering Ethereum's architecture, consensus mechanisms, and how to develop decentralized applications (dApps).",
    url: "https://ethereum.org/developers/docs/",
    citation: "Ethereum Docs",
  },
  {
    title: "Solidity Documentation",
    description:
      "Primary language for writing smart contracts on Ethereum. Covers syntax, best practices, and advanced features.",
    url: "https://docs.soliditylang.org/",
    citation: "Solidity Docs",
  },
  {
    title: "Hardhat Documentation",
    description:
      "A development environment for compiling, deploying, testing, and debugging Ethereum software.",
    url: "https://hardhat.org/docs/",
    citation: "Hardhat Docs",
  },
  {
    title: "OpenZeppelin Documentation",
    description:
      "Provides a library of secure and community-vetted smart contracts, including implementations of ERC standards and utilities for contract upgrades.",
    url: "https://docs.openzeppelin.com/",
    citation: "OpenZeppelin Docs",
  },
  {
    title: "Optimism Documentation",
    description:
      "Learn about Optimism, a Layer 2 scaling solution for Ethereum that uses optimistic rollups to improve transaction throughput.",
    url: "https://docs.optimism.io/",
    citation: "Optimism Docs",
  },
  {
    title: "Slither Documentation",
    description:
      "A static analysis tool for Solidity code, helping developers identify vulnerabilities and optimize code.",
    url: "https://github.com/trailofbits/slither",
    citation: "Slither Docs",
  },
  {
    title: "Echidna Documentation",
    description:
      "A Haskell-based fuzzer for Ethereum smart contracts, designed to find vulnerabilities through property-based testing.",
    url: "https://github.com/crytic/echidna",
    citation: "Echidna Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Blockchain Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation for Ethereum development, Layer 2 solutions, and smart contract security tools. Essential for learners to build, deploy, and audit blockchain projects.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
