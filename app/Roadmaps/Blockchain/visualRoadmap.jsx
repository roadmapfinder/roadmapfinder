import React from 'react';

export default function BlockchainRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "0-2 Months",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Fundamentals", 
          category: "Core Programming",
          details: "JavaScript, Python basics, then Solidity for Ethereum. Optional: Rust (Solana), Go"
        },
        { 
          step: "Step - 2", 
          topic: "Blockchain Basics", 
          category: "Core Concepts",
          details: "Cryptographic primitives, hashing, signatures, block structure, Merkle trees"
        },
        { 
          step: "Step - 3", 
          topic: "Consensus Mechanisms", 
          category: "Protocol Understanding",
          details: "Proof of Work (PoW), Proof of Stake (PoS), consensus algorithms, network security"
        },
        { 
          step: "Step - 4", 
          topic: "Git & Version Control", 
          category: "Development Tools",
          details: "Git workflows, GitHub collaboration, branching strategies, code management"
        },
        { 
          step: "Step - 5", 
          topic: "Web3 Architecture", 
          category: "System Design",
          details: "Decentralized vs centralized systems, blockchain layers, network topology"
        },
        { 
          step: "Step - 6", 
          topic: "Cryptocurrency Economics", 
          category: "Tokenomics",
          details: "Token standards, digital wallets, transaction fees, economic models"
        },
      ],
    },
    {
      title: "Smart Contracts",
      subtitle: "2-4 Months",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Solidity Development", 
          category: "Smart Contracts",
          details: "Writing, compiling, and deploying smart contracts on Ethereum blockchain"
        },
        { 
          step: "Step - 8", 
          topic: "Development Tools", 
          category: "Tooling",
          details: "Remix IDE, Hardhat, Truffle Suite, testing frameworks, debugging tools"
        },
        { 
          step: "Step - 9", 
          topic: "Contract Testing", 
          category: "Quality Assurance",
          details: "Unit testing, integration testing, test-driven development for smart contracts"
        },
        { 
          step: "Step - 10", 
          topic: "Security Best Practices", 
          category: "Security",
          details: "Reentrancy attacks, overflow protection, access controls, security audits"
        },
        { 
          step: "Step - 11", 
          topic: "Gas Optimization", 
          category: "Performance",
          details: "Gas cost analysis, optimization techniques, efficient contract design"
        },
        { 
          step: "Step - 12", 
          topic: "Alternative Languages", 
          category: "Multi-Platform",
          details: "Vyper for Ethereum, Rust for Solana, Move for Aptos/Sui platforms"
        },
      ],
    },
    {
      title: "Full-Stack dApps",
      subtitle: "4-6 Months",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Frontend Integration", 
          category: "Web Development",
          details: "React.js, Next.js, Web3.js, Ethers.js for blockchain interaction"
        },
        { 
          step: "Step - 14", 
          topic: "Wallet Integration", 
          category: "User Experience",
          details: "MetaMask, WalletConnect, wallet authentication, transaction signing"
        },
        { 
          step: "Step - 15", 
          topic: "Decentralized Storage", 
          category: "Infrastructure",
          details: "IPFS integration, Arweave, decentralized file storage solutions"
        },
        { 
          step: "Step - 16", 
          topic: "The Graph Protocol", 
          category: "Data Indexing",
          details: "Subgraphs, data querying, off-chain data management and indexing"
        },
        { 
          step: "Step - 17", 
          topic: "Development Environment", 
          category: "Local Testing",
          details: "Ganache, local blockchain networks, test environment setup"
        },
        { 
          step: "Step - 18", 
          topic: "Cloud Infrastructure", 
          category: "Deployment",
          details: "Docker containers, AWS node hosting, enterprise development frameworks"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "6-12 Months+",
      steps: [
        { 
          step: "Step - 19", 
          topic: "DeFi Development", 
          category: "Finance",
          details: "DEX protocols, lending platforms, yield farming, liquidity pools"
        },
        { 
          step: "Step - 20", 
          topic: "NFT & Digital Assets", 
          category: "Digital Assets",
          details: "ERC-721, ERC-1155, NFT marketplaces, metadata standards, royalties"
        },
        { 
          step: "Step - 21", 
          topic: "Layer-2 Solutions", 
          category: "Scalability",
          details: "Rollups, Plasma, Lightning Network, sidechains, scaling solutions"
        },
        { 
          step: "Step - 22", 
          topic: "Cross-Chain Development", 
          category: "Interoperability",
          details: "Polkadot, Cosmos, bridge protocols, multi-chain architecture"
        },
        { 
          step: "Step - 23", 
          topic: "Enterprise Blockchain", 
          category: "Enterprise",
          details: "Hyperledger Fabric, private networks, consortium blockchains"
        },
        { 
          step: "Step - 24", 
          topic: "AI & Blockchain Integration", 
          category: "Emerging Tech",
          details: "AI-powered DApps, autonomous agents, machine learning on blockchain"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Career Development",
      steps: [
        { 
          step: "Step - 25", 
          topic: "Portfolio Development", 
          category: "Career Building",
          details: "GitHub projects, deployed DApps, technical documentation, case studies"
        },
        { 
          step: "Step - 26", 
          topic: "Certifications", 
          category: "Credentials",
          details: "Ethereum Certified Developer, Hyperledger certifications, Blockchain Council"
        },
        { 
          step: "Step - 27", 
          topic: "Community Engagement", 
          category: "Networking",
          details: "Open-source contributions, hackathons, DAO participation, tech communities"
        },
        { 
          step: "Step - 28", 
          topic: "Security Auditing", 
          category: "Advanced Security",
          details: "Smart contract audits, vulnerability assessment, security consulting"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Simple Token Contract (ERC-20)" },
    { level: "Smart Contracts", project: "Decentralized Voting System" },
    { level: "Full-Stack dApps", project: "NFT Marketplace with IPFS" },
    { level: "Specialization", project: "DeFi Yield Farming Platform" },
    { level: "Professional", project: "Cross-Chain Bridge Protocol" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-pink-500 to-pink-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">⚡ 28 Essential Steps • 🎯 5 Skill Levels • 🚀 Industry Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💡 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Blockchain Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development Tools</div>
              <div className="text-blue-100">Remix, Hardhat, Truffle, Ganache</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning Platforms</div>
              <div className="text-blue-100">Ethereum.org, Solidity Docs, Web3 University</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Libraries</div>
              <div className="text-blue-100">Web3.js, Ethers.js, OpenZeppelin</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Infrastructure</div>
              <div className="text-blue-100">IPFS, The Graph, Alchemy, Infura</div>
            </div>
          </div>
        </section>

        {/* Continuous Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🔄 Continuous Learning Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white/60 rounded-lg p-4">
              <div className="font-semibold mb-2 text-gray-800">Community Engagement</div>
              <div className="text-gray-600">Join Reddit communities, Discord servers, attend hackathons, contribute to open-source projects</div>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <div className="font-semibold mb-2 text-gray-800">Stay Current</div>
              <div className="text-gray-600">Follow blockchain news, read whitepapers, monitor protocol upgrades, track industry trends</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            ⛓️ Remember: Blockchain development requires continuous learning, security-first mindset, and active community participation!
          </p>
        </div>
      </div>
    </main>
  );
}