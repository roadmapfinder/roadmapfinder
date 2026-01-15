// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Solidity Official Documentation",
    description:
      "The official Solidity language reference covering syntax, compiler behavior, examples, and best practices.",
    url: "https://docs.soliditylang.org/",
    citation: "Solidity Docs",
  },
  {
    title: "Solidity by Example",
    description:
      "Practical Solidity code snippets demonstrating core language concepts and patterns.",
    url: "https://docs.soliditylang.org/en/latest/solidity-by-example.html",
    citation: "Solidity Examples",
  },
  {
    title: "Solidity Security Considerations",
    description:
      "Official security guidelines explaining common vulnerabilities and how to avoid them.",
    url: "https://docs.soliditylang.org/en/latest/security-considerations.html",
    citation: "Solidity Security",
  },
  {
    title: "Solidity ABI Specification",
    description:
      "Defines how smart contracts encode and decode function calls and data for EVM interaction.",
    url: "https://docs.soliditylang.org/en/latest/abi-spec.html",
    citation: "Solidity ABI",
  },
  {
    title: "Solidity Assembly (Yul)",
    description:
      "Official guide for writing low-level EVM optimized code using Yul and inline assembly.",
    url: "https://docs.soliditylang.org/en/latest/yul.html",
    citation: "Solidity Yul",
  },
  {
    title: "Ethereum Developer Docs",
    description:
      "Official Ethereum documentation covering smart contracts, EVM, gas, transactions, and architecture.",
    url: "https://ethereum.org/developers/docs/",
    citation: "Ethereum Docs",
  },
  {
    title: "Ethereum Virtual Machine (EVM)",
    description:
      "In-depth explanation of how Ethereum executes smart contracts at the virtual machine level.",
    url: "https://ethereum.org/developers/docs/evm/",
    citation: "EVM Docs",
  },
  {
    title: "Ethereum Standards (ERCs)",
    description:
      "Official registry of Ethereum Improvement Proposals including ERC20, ERC721, ERC1155 and more.",
    url: "https://ethereum.org/developers/docs/standards/",
    citation: "ERC Standards",
  },
  {
    title: "OpenZeppelin Contracts",
    description:
      "Industry standard secure Solidity libraries for ERC tokens, access control, security, and utilities.",
    url: "https://docs.openzeppelin.com/contracts",
    citation: "OpenZeppelin Contracts",
  },
  {
    title: "OpenZeppelin Defender",
    description:
      "Tools for smart contract automation, monitoring, upgrades, and secure operations.",
    url: "https://docs.openzeppelin.com/defender",
    citation: "OpenZeppelin Defender",
  },
  {
    title: "Hardhat Documentation",
    description:
      "Official Hardhat framework docs for Solidity development, testing, and deployment.",
    url: "https://hardhat.org/docs",
    citation: "Hardhat Docs",
  },
  {
    title: "Foundry Documentation",
    description:
      "High-performance Solidity testing, fuzzing, and scripting framework documentation.",
    url: "https://book.getfoundry.sh/",
    citation: "Foundry Docs",
  },
  {
    title: "Chainlink Documentation",
    description:
      "Official docs for decentralized oracle integration with Solidity smart contracts.",
    url: "https://docs.chain.link/",
    citation: "Chainlink Docs",
  },
  {
    title: "Ethers.js Documentation",
    description:
      "JavaScript library documentation for interacting with Solidity contracts from frontend or backend.",
    url: "https://docs.ethers.org/",
    citation: "Ethers.js Docs",
  },
  {
    title: "Viem Documentation",
    description:
      "Modern TypeScript-first Ethereum interface library for Solidity contract interaction.",
    url: "https://viem.sh/docs",
    citation: "Viem Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔐 Solidity & Ethereum Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation resources every Solidity and Web3 learner must
          know — covering language specs, security, EVM, ERC standards, and
          professional tooling.
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
