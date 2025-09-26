import React from "react";

const projects = [
  {
    id: "blockchain-beginner-1",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Basic Wallet & Transaction Tracker",
    description:
      "Learn Ethereum, Ethers.js/Web3.js, and connect to MetaMask. Build a wallet interface to track transactions and balances. Extend with ENS name resolution and token balances for more complexity.",
    cta: "Explore project",
    url: "https://youtu.be/x5FHbr0Em5A?si=sBh83jp9ZKqa7ilr"
  },
  {
    id: "blockchain-beginner-2",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Simple Voting DApp (Decentralized Polls)",
    description:
      "Create a DApp with Solidity smart contracts for decentralized voting. Learn CRUD on blockchain, event logs, and contract deployment. Add wallet-based authentication and double-vote prevention to boost complexity.",
    cta: "Explore project",
    url: "https://youtu.be/v-Fa4Es9rDE?si=3sz4AdfojUN76X3V"
  },
  {
    id: "blockchain-beginner-3",
    level: "Phase 1 — Beginner (Foundations)",
    title: "ERC-20 Token Deployment",
    description:
      "Deploy your own ERC-20 token on Ethereum. Learn contract writing, gas optimization, and tokenomics. Extend with minting/burning functions and token transfer events UI.",
    cta: "Explore project",
    url: "https://youtu.be/88-hpZE4OU8?si=pzneX3Xp0tHwnVdI"
  },
  {
    id: "blockchain-intermediate-1",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "NFT Marketplace (OpenSea Lite)",
    description:
      "Build an NFT marketplace using ERC-721/ERC-1155 tokens, IPFS/Pinata for file storage, and contract event handling. Boost complexity with bidding and auction features.",
    cta: "Explore project",
    url: "https://youtu.be/oJdGoAirTY4?si=cnmVrsQJmwAWhcen"
  },
  {
    id: "blockchain-intermediate-2",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "DeFi Lending Platform (Aave Lite)",
    description:
      "Develop a DeFi platform with smart contracts for lending and borrowing. Learn about collateral, liquidity pools, and interest calculations. Add liquidation logic for more advanced functionality.",
    cta: "Explore project",
    url: "https://youtu.be/d1ocEqWTU78?si=76rCmZs2y3xicy50"
  },
  {
    id: "blockchain-intermediate-3",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "DAO Governance Platform",
    description:
      "Create a DAO with governance tokens, proposal execution, and voting mechanisms. Learn decentralized organization frameworks. Add quadratic voting and proposal treasury to increase complexity.",
    cta: "Explore project",
    url: "https://youtu.be/t7futl5D4rs?si=DG2sfrAywRpq4RX0"
  },
  {
    id: "blockchain-advanced-1",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "Cross-Chain Bridge (Token Swap)",
    description:
      "Build a cross-chain bridge for token swaps using oracles (Chainlink) and wrapped tokens. Prepare for interoperability challenges. Extend with multi-chain liquidity pools for scalability.",
    cta: "Explore project",
    url: "https://youtu.be/7W9Ts36Dhco?si=szxE0o6W1-bCS_t_"
  },
  {
    id: "blockchain-advanced-2",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "Layer-2 Payment Channel (Lightning/State Channels)",
    description:
      "Implement off-chain payment channels to enable fast, scalable transactions. Learn dispute resolution and rollups. Extend with zkRollups or optimistic rollups for advanced scaling.",
    cta: "Explore project",
    url: "https://youtu.be/rAhe_b-CJZU?si=sCgPLtiZmuFfbuX7"
  },
  {
    id: "blockchain-advanced-3",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "Full Web3 SaaS dApp (Production Ready)",
    description:
      "Develop a decentralized freelancing platform (Upwork on blockchain). Covers smart contracts, React/Next.js frontend, wallet integration, gas optimization, and security audits. Boost with multi-sig escrow and cross-chain payments.",
    cta: "Explore project",
    url: "https://youtu.be/zi0iR3UN-u0?si=jQ_v9wvFv5qzE6yD"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🔗 Blockchain Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these blockchain projects step by step to progress from wallet basics
            to enterprise-grade Web3 SaaS applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open tutorial for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {p.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <span className="text-xs text-slate-400">~2–6 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Focus on smart contract security, gas optimization, and integration with Web3 frontends to mimic real-world blockchain projects.
        </footer>
      </div>
    </section>
  );
}
