// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-toy-blockchain",
    level: "Phase 1 — Beginner",
    title: "Toy Blockchain (PoW + Mempool + P2P Gossip)",
    description:
      "Implement a simple blockchain with proof-of-work, transaction mempool, and peer-to-peer gossip networking. Focus on consensus & data structures.",
    url: "https://www.youtube.com/watch?v=j66ib9b35XI" // Blockchain PoW in Python
  },
  {
    id: "phase2-erc20-token",
    level: "Phase 2 — Beginner",
    title: "ERC-20 Token + Unit Tests + Faucet",
    description:
      "Write, compile, deploy an ERC-20 token on testnet using Hardhat. Learn ABI interaction, unit testing, and deployment workflows.",
    url: "https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-create-and-deploy-an-erc20-token" // QuickNode tutorial
  },
  {
    id: "phase3-nft-marketplace",
    level: "Phase 3 — Intermediate",
    title: "NFT Marketplace (Mint / Buy / Sell / Royalties)",
    description:
      "Build a full NFT marketplace with smart contracts (ERC-721) using OpenZeppelin. Handle minting, buying, selling, and events efficiently.",
    url: "https://chain.link/tutorials/how-to-build-an-nft-marketplace-with-hardhat-and-solidity" // Chainlink NFT Marketplace
  },
  {
    id: "phase4-multisig-timelock",
    level: "Phase 4 — Intermediate",
    title: "Multi-sig Wallet + Timelock",
    description:
      "Create a secure Gnosis-style multi-signature wallet with timelock and proxy upgradeability. Focus on access control and governance patterns.",
    url: "https://forum.openzeppelin.com/t/tutorial-on-using-a-gnosis-safe-multisig-with-a-timelock-to-upgrade-contracts-and-use-functions-in-a-proxy-contract/7272" // OpenZeppelin Forum
  },
  {
    id: "phase5-dex-amm",
    level: "Phase 5 — Advanced",
    title: "Decentralized Exchange (AMM Clone + Flashloan)",
    description:
      "Develop an AMM-style DEX with swap, liquidity pools, and k-constant math. Add flashloan detection and tests. Focus on precision & economic attacks.",
    url: "https://www.youtube.com/watch?v=FJEVuhyywI8" // Flash Loans & Arbitrage on Uniswap V3
  },
  {
    id: "phase6-layer2-rollup",
    level: "Phase 6 — Advanced",
    title: "Layer-2 Experiment (Optimistic Rollup)",
    description:
      "Build a simple optimistic-rollup prototype or zk-proof flow. Learn sequencing, fraud-proof flow, batching, and data availability.",
    url: "https://www.youtube.com/watch?v=PcgAKoUKRv4" // Launch your own Rollup (OP Stack)
  },
  {
    id: "phase7-security-audit",
    level: "Phase 7 — Advanced",
    title: "Security Audit & Formal Check",
    description:
      "Pick a deployed smart contract and run Slither, Echidna, fuzz tests, and MythX. Prepare a professional audit report. Focus on production readiness.",
    url: "https://www.youtube.com/watch?v=TmZ8gH-toX0" // Smart Contract Audit tutorial
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⛓️ Blockchain Full-Stack Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced blockchain projects with latest tutorials (Hindi & English). 
            Build, deploy, audit, and scale your own dApps and blockchain systems.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, code along, and polish top 2–3 projects into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
