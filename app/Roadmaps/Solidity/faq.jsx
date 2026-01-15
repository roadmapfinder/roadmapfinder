"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Solidity?",
    a: "Solidity is a statically-typed, contract-oriented programming language used to write smart contracts that run on the Ethereum Virtual Machine (EVM).",
  },
  {
    q: "Do I need to know blockchain before learning Solidity?",
    a: "Basic understanding of blockchain, Ethereum, wallets, and transactions is highly recommended before learning Solidity for faster mastery.",
  },
  {
    q: "Which tools are best for Solidity development?",
    a: "Hardhat and Foundry are the industry standard frameworks. Remix IDE is great for beginners and quick testing.",
  },
  {
    q: "Is Solidity still worth learning in 2026?",
    a: "Yes. Solidity remains the primary language for Ethereum, Layer-2s, DeFi, NFTs, DAOs, and enterprise blockchain systems.",
  },
  {
    q: "How long does it take to master Solidity?",
    a: "With consistent practice, most learners reach professional level in 6–9 months including security, DeFi, and testing skills.",
  },
  {
    q: "Is Solidity hard compared to JavaScript or Python?",
    a: "Solidity is harder because it involves blockchain concepts, immutability, gas optimization, and security-critical programming.",
  },
  {
    q: "Can I get a job only with Solidity?",
    a: "Yes. Many roles such as Smart Contract Engineer, DeFi Engineer, and Solidity Auditor are Solidity-focused.",
  },
  {
    q: "What makes a good Solidity developer?",
    a: "Security mindset, gas optimization, testing discipline, protocol design skills, and understanding of EVM internals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-14 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ Solidity FAQ
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Common questions every Solidity learner asks — answered clearly and professionally.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-base font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Tip: Solidity is not just a language — it’s financial infrastructure engineering.
        </p>
      </div>
    </section>
  );
}
