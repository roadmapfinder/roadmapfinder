"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How long does it take to complete the entire blockchain development roadmap?",
      answer: "The timeline varies significantly based on your prior experience and time commitment. For someone with solid programming background dedicating 20-30 hours per week, expect 12-18 months to reach production readiness. Complete beginners may need 18-24 months. The key is consistency and hands-on practice rather than rushing through phases."
    },
    {
      question: "Do I need to know all programming languages mentioned in Phase 0?",
      answer: "No, you don't need to master all languages simultaneously. Start with JavaScript/TypeScript for web3 development, then add one systems language (Rust or Go recommended for 2025). Learn Solidity when you reach Phase 3. The goal is competency in your chosen stack rather than superficial knowledge of everything."
    },
    {
      question: "Is it necessary to build my own blockchain in Phase 1?",
      answer: "Absolutely! Building a mini blockchain is crucial for understanding core concepts like mining, consensus, and P2P networking. This hands-on project provides deeper insights than reading alone. Start simple with a basic proof-of-work chain in your preferred language, then gradually add features like transaction pools and network simulation."
    },
    {
      question: "What's the difference between learning smart contracts and becoming a blockchain developer?",
      answer: "Smart contract development (Phase 3-4) focuses on application logic and DeFi protocols. Full blockchain development includes protocol-level work, consensus mechanisms, node operations, and infrastructure (Phases 5-9). Smart contract developers can find excellent opportunities, but protocol developers are rarer and often command higher compensation."
    },
    {
      question: "Should I focus on Ethereum or explore other blockchains?",
      answer: "Start with Ethereum as it has the largest ecosystem and job market. Once comfortable with EVM and Solidity, explore other ecosystems like Solana (Rust), Cosmos (Go), or Polkadot (Substrate/Rust). Understanding multiple architectures makes you more valuable, but depth in Ethereum provides the strongest foundation."
    },
    {
      question: "How important is cryptography knowledge for blockchain development?",
      answer: "Cryptography is fundamental, not optional. Phase 0 covers essential concepts like hash functions and digital signatures. Phase 7 goes deeper into advanced topics like zero-knowledge proofs. You don't need to be a cryptographer, but understanding how cryptographic primitives work is crucial for secure blockchain development."
    },
    {
      question: "What kind of projects should I build to demonstrate my skills?",
      answer: "Build progressively complex projects: mini blockchain (Phase 1), DEX or lending protocol (Phase 3-4), Layer 2 solution or bridge (Phase 5-6), and governance system (Phase 8). Focus on clean code, comprehensive testing, security audits, and detailed documentation. Quality over quantity - a few excellent projects beat many mediocre ones."
    },
    {
      question: "Is formal education necessary, or can I learn blockchain development through self-study?",
      answer: "Self-study is entirely viable for blockchain development. The field moves quickly, making practical skills more valuable than degrees. However, strong CS fundamentals (Phase 0) are non-negotiable. Consider online courses, bootcamps, or degree programs if you need structured learning, but hands-on building is most important."
    },
    {
      question: "How do I stay updated with rapidly evolving blockchain technology?",
      answer: "Follow key resources: Week in Ethereum News, research.paradigm.xyz, EIP discussions, and protocol Discord/forums. Twitter/X accounts of core developers and researchers provide cutting-edge insights. Join hackathons, contribute to open source, and participate in governance discussions. The blockchain space rewards continuous learning."
    },
    {
      question: "What career paths are available after completing this roadmap?",
      answer: "Multiple paths await: Smart Contract Developer, Protocol Engineer, Security Auditor, DevRel Engineer, Blockchain Architect, Research Scientist, or Technical Founder. Compensation ranges from $120k+ for smart contract developers to $300k+ for senior protocol engineers. The field offers remote work, equity upside, and cutting-edge technology challenges."
    },
    {
      question: "Should I specialize in DeFi, NFTs, gaming, or another blockchain vertical?",
      answer: "DeFi offers the most opportunities and highest compensation, requiring deep financial knowledge. NFTs and gaming focus more on user experience and scalability. Infrastructure and tooling provide stable, well-paid roles. Consider your interests and strengths - DeFi for finance-minded developers, gaming for user experience enthusiasts."
    },
    {
      question: "How important is understanding economics and tokenomics for blockchain developers?",
      answer: "Increasingly important, especially for senior roles. Phase 8 covers tokenomics and governance for this reason. Successful blockchain projects require understanding of incentive mechanisms, game theory, and economic models. You don't need an economics degree, but grasp concepts like inflation, staking rewards, and mechanism design."
    },
    {
      question: "What's the best approach to learning security and auditing (Phase 4)?",
      answer: "Start with common vulnerability patterns (reentrancy, integer overflow, access control). Practice on Ethernaut challenges and Damn Vulnerable DeFi. Study real audit reports from firms like Trail of Bits and OpenZeppelin. Consider bug bounties on Immunefi. Security skills are highly valued - dedicated security auditors earn $200k+ annually."
    },
    {
      question: "Are bootcamps worth it for blockchain development?",
      answer: "Quality varies significantly. Look for programs with hands-on projects, experienced instructors (actual blockchain developers), job placement support, and recent curriculum updates. Self-study with this roadmap can be equally effective if you're disciplined. Bootcamps provide structure and community but aren't magic bullets."
    },
    {
      question: "How do I transition from web2 to blockchain development?",
      answer: "Leverage existing skills: JavaScript developers can start with web3.js/ethers.js, backend developers with node infrastructure, and security professionals with smart contract auditing. The transition is smoother than starting from scratch. Focus on blockchain-specific concepts while building on your existing programming foundation."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Common questions about the Blockchain Development Roadmap answered by experts
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              {openItems[index] ? (
                <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-blue-600 flex-shrink-0" size={20} />
              )}
            </button>

            {/* Answer Content */}
            {openItems[index] && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Still have questions?
        </h2>
        <p className="text-blue-800 mb-4">
          The blockchain development community is very supportive. Here are some places to get help:
        </p>
        <ul className="text-blue-700 space-y-2">
          <li>• Join developer Discord communities (Ethereum, OpenZeppelin, Hardhat)</li>
          <li>• Ask questions on Stack Overflow with blockchain/solidity tags</li>
          <li>• Participate in developer forums like r/ethdev on Reddit</li>
          <li>• Attend local blockchain meetups and online developer events</li>
          <li>• Follow blockchain educators on Twitter and engage with their content</li>
        </ul>
      </div>

      {/* Tips Section */}
      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-xl font-bold text-green-900 mb-3">
          💡 Pro Tips for Success
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-green-800">
          <div>
            <h4 className="font-semibold mb-2">Learning Strategy:</h4>
            <ul className="text-sm space-y-1">
              <li>• Build projects while learning theory</li>
              <li>• Join study groups or find accountability partners</li>
              <li>• Contribute to open source projects early</li>
              <li>• Document your learning journey publicly</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Career Development:</h4>
            <ul className="text-sm space-y-1">
              <li>• Network with other blockchain developers</li>
              <li>• Participate in hackathons and bounties</li>
              <li>• Build a strong GitHub portfolio</li>
              <li>• Consider freelancing to gain experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;