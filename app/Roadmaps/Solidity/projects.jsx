"use client"
import React from "react";

const projects = [
  {
    id: "sol-beginner-1",
    level: "Phase 1 — Beginner (Solidity Foundations)",
    title: "Decentralized Voting System",
    description:
      "Build a transparent voting smart contract with proposals, one-vote-per-user, events, and result tallying. Teaches structs, mappings, modifiers, and access control.",
    cta: "Explore project",
    url: "https://youtu.be/igkbpv43OVs?si=s3j6siZKg_DOZXvI"
  },
  {
    id: "sol-beginner-2",
    level: "Phase 1 — Beginner (Solidity Foundations)",
    title: "ERC20 Token with Mint & Burn",
    description:
      "Create a custom ERC20 token using OpenZeppelin with minting, burning, pausing, and ownership control. Learn ERC standards and inheritance patterns.",
    cta: "Explore project",
    url: "https://youtu.be/wtta1AWoNOY?si=KcWPGXNzy0Ufm3EG"
  },
  {
    id: "sol-intermediate-1",
    level: "Phase 2 — Intermediate (Smart Contract Systems)",
    title: "NFT Marketplace",
    description:
      "Build an ERC721 NFT marketplace with listing, buying, royalties, and secure payment handling. Learn reentrancy protection and payable flows.",
    cta: "Explore project",
    url: "https://youtu.be/KJuxS9mUg5Q?si=qqgUQ9WBYl6EVSsj"
  },
  {
    id: "sol-intermediate-2",
    level: "Phase 2 — Intermediate (Smart Contract Systems)",
    title: "Token Staking & Rewards Protocol",
    description:
      "Users stake ERC20 tokens to earn rewards over time. Teaches precision math, block timestamps, reward calculation, and withdrawal safety.",
    cta: "Explore project",
    url: "https://youtu.be/5VCtvnlaZGs?si=5l3WUfnMeF2mty4w"
  },

  {
    id: "sol-advanced-1",
    level: "Phase 3 — Advanced (DeFi Protocol Engineering)",
    title: "Decentralized Exchange (AMM)",
    description:
      "Build a Uniswap-style AMM with liquidity pools, swaps, LP tokens, and pricing formulas. Learn core DeFi mechanics and invariant math.",
    cta: "Explore project",
    url: "https://youtu.be/BEDaoVBX9RY?si=slwkdhjySr6ZLa-a"
  },
  {
    id: "sol-advanced-2",
    level: "Phase 3 — Advanced (DeFi Protocol Engineering)",
    title: "Lending & Borrowing Protocol",
    description:
      "Implement collateral deposits, borrowing, interest accrual, liquidations, and oracle pricing. Teaches financial-grade Solidity engineering.",
    cta: "Explore project",
    url: "https://youtu.be/kpSagGtxhuM?si=msOekUHM4xm5Ki89"
  },
  
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🔐 Solidity Project Roadmap — Beginner → Industry Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these smart contract projects step by step to progress from
            basic Solidity syntax to production-grade DeFi and DAO systems.
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
                  aria-label={`Open documentation for ${p.title}`}
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

                <span className="text-xs text-slate-400">~1–4 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Don’t just deploy — audit your contracts, write tests, optimize gas,
          and simulate attacks. That’s how Solidity engineers become industry ready.
        </footer>
      </div>
    </section>
  );
}
