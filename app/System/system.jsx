"use client";
import { useState } from "react";
import { Github, Twitter, Linkedin, Sun, Moon } from "lucide-react";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    level: "Beginner",
    title: "Blockchain Fundamentals",
    description: "Learn the core concepts of blockchain technology",
    content: {
      whatToLearn: [
        "Blockchain Architecture",
        "Consensus Mechanisms",
        "Cryptography Basics",
        "Hash Functions",
        "Digital Signatures",
        "Decentralization Concepts",
      ],
      bestCourses: {
        english: [
          "Blockchain Basics (Coursera)",
          "Blockchain Theory 101 (Udemy)",
          "Bitcoin and Cryptocurrency Technologies (Princeton)",
          "Blockchain Fundamentals (Berkeley edX)",
        ],
        hindi: [
          "Blockchain Tutorial for Beginners (ApnaCollege)",
          "Complete Blockchain in Hindi (DigitalSikho)",
          "Blockchain Fundamentals in Hindi (LearnVern)",
          "Cryptocurrency and Blockchain Hindi (CodeWithHarry)",
        ],
      },
      toolsToUse: [
        "Blockchain Explorers",
        "Crypto Wallets",
        "Blockchain Demos",
        "Ethereum Testnets",
        "Git & GitHub",
      ],
      docsAndWebsites: [
        "Bitcoin Whitepaper",
        "Ethereum Documentation",
        "Binance Academy",
        "Blockchain.com Guides",
        "Web3.js Documentation",
      ],
      projectIdeas: [
        "Simple cryptocurrency tracker",
        "Blockchain explorer for a testnet",
        "Basic token implementation",
        "Decentralized voting application",
      ],
    },
  },
  {
    id: 2,
    level: "Beginner",
    title: "Programming for Blockchain",
    description:
      "Master the programming languages needed for blockchain development",
    content: {
      whatToLearn: [
        "JavaScript Fundamentals",
        "Solidity Programming",
        "Rust for Blockchain",
        "Smart Contract Development",
        "Web3.js / Ethers.js",
        "API Integrations",
      ],
      bestCourses: {
        english: [
          "Solidity & Ethereum in React (Stephen Grider)",
          "Rust Programming Language (Official Book)",
          "Advanced Smart Contracts (Udemy)",
          "Blockchain Developer Bootcamp (ConsenSys)",
        ],
        hindi: [
          "Complete Solidity Course Hindi (TechGyan)",
          "JavaScript for Blockchain Hindi (CodeKaro)",
          "Smart Contract Development Hindi (BlockTrain)",
          "Web3.js Tutorial in Hindi (CodeWithChai)",
        ],
      },
      toolsToUse: [
        "Remix IDE",
        "Truffle Suite",
        "Hardhat",
        "MetaMask",
        "Ganache",
        "VSCode with Solidity extensions",
      ],
      docsAndWebsites: [
        "Solidity Documentation",
        "Ethereum Stack Exchange",
        "Truffle Documentation",
        "Hardhat Guides",
        "OpenZeppelin Library",
      ],
      projectIdeas: [
        "ERC-20 token implementation",
        "Decentralized marketplace",
        "NFT minting website",
        "DAO (Decentralized Autonomous Organization)",
      ],
    },
  },
  {
    id: 3,
    level: "Intermediate",
    title: "Smart Contract Development",
    description: "Learn how to write, test, and deploy smart contracts",
    content: {
      whatToLearn: [
        "Solidity Design Patterns",
        "Gas Optimization",
        "Security Best Practices",
        "Testing Frameworks",
        "Contract Upgradability",
        "ERC Standards (20, 721, 1155)",
      ],
      bestCourses: {
        english: [
          "Ethereum and Solidity: The Complete Developer's Guide",
          "Smart Contract Security (OpenZeppelin)",
          "Blockchain A-Z™ (Udemy)",
          "Ethereum Smart Contract Security (Coursera)",
        ],
        hindi: [
          "Smart Contract Development in Hindi (BlockchainIQ)",
          "Solidity Security Course Hindi (CryptoGyaan)",
          "NFT Development in Hindi (LearnWeb3)",
          "Smart Contract Testing Hindi (CodeKriti)",
        ],
      },
      toolsToUse: [
        "Mocha/Chai",
        "OpenZeppelin Contracts",
        "Slither/Mythril",
        "Tenderly",
        "Infura/Alchemy",
        "IPFS",
      ],
      docsAndWebsites: [
        "Solidity by Example",
        "CryptoZombies",
        "DappUniversity",
        "Smart Contract Best Practices",
        "Ethereum Yellow Paper",
      ],
      projectIdeas: [
        "DeFi lending protocol",
        "Token staking platform",
        "NFT marketplace",
        "Decentralized exchange (DEX)",
      ],
    },
  },
  {
    id: 4,
    level: "Intermediate",
    title: "dApp Development",
    description: "Build decentralized applications with modern frameworks",
    content: {
      whatToLearn: [
        "Frontend Integration",
        "React.js for dApps",
        "State Management",
        "Web3 Authentication",
        "IPFS Integration",
        "User Experience Design",
      ],
      bestCourses: {
        english: [
          "Build Web3 Apps with React (Buildspace)",
          "Full Stack Ethereum Development (Nader Dabit)",
          "Moralis Web3 dApp Programming",
          "Scaffold-ETH Challenges",
        ],
        hindi: [
          "Web3 Frontend Development Hindi (BlockCoders)",
          "dApp Course in Hindi (CryptoCoding)",
          "React for Blockchain Hindi (WebDev)",
          "Moralis Hindi Tutorials (BlockExpert)",
        ],
      },
      toolsToUse: [
        "React/Next.js",
        "Ethers.js/Web3.js",
        "IPFS/Filecoin",
        "The Graph",
        "Moralis/Alchemy SDK",
        "Tailwind CSS",
      ],
      docsAndWebsites: [
        "Moralis Documentation",
        "Alchemy University",
        "useWeb3.xyz",
        "The Graph Documentation",
        "Buildspace Projects",
      ],
      projectIdeas: [
        "Web3 social network",
        "NFT gallery with metadata",
        "Decentralized crowdfunding platform",
        "Blockchain-based voting system",
      ],
    },
  },
  {
    id: 5,
    level: "Advanced",
    title: "Advanced Blockchain Concepts",
    description:
      "Dive deeper into advanced blockchain architectures and protocols",
    content: {
      whatToLearn: [
        "Layer 2 Solutions",
        "Sidechains & Bridges",
        "Zero-Knowledge Proofs",
        "Consensus Algorithms",
        "Blockchain Scalability",
        "Tokenomics",
      ],
      bestCourses: {
        english: [
          "Zero Knowledge Proofs (Coursera)",
          "Advanced Blockchain Architecture (MIT OpenCourseWare)",
          "Blockchain Scaling Solutions (Udemy)",
          "Tokenomics Design (Binance Academy)",
        ],
        hindi: [
          "Advanced Blockchain Hindi (TechDekho)",
          "Layer 2 Solutions in Hindi (CryptoGurukul)",
          "Scaling Blockchain Hindi (BlockMasters)",
          "ZK-Proofs in Hindi (CryptoVidya)",
        ],
      },
      toolsToUse: [
        "Optimism/Arbitrum",
        "Polygon SDK",
        "zkSync",
        "Chainlink Oracles",
        "Ceramic Network",
        "Tendermint",
      ],
      docsAndWebsites: [
        "Layer 2 Beat",
        "ETH Research Forum",
        "Ethereum Improvement Proposals",
        "Token Engineering Academy",
        "Polygon Documentation",
      ],
      projectIdeas: [
        "Cross-chain bridge application",
        "Layer 2 dApp implementation",
        "Zero-knowledge proof application",
        "Custom blockchain with Substrate",
      ],
    },
  },
  {
    id: 6,
    level: "Advanced",
    title: "DeFi & NFT Development",
    description: "Build applications in the most popular blockchain domains",
    content: {
      whatToLearn: [
        "DeFi Protocols & Mechanics",
        "Automated Market Makers",
        "Yield Farming & Liquidity Mining",
        "NFT Standards & Metadata",
        "Tokenization of Assets",
        "Flash Loans",
      ],
      bestCourses: {
        english: [
          "DeFi Developer Roadmap (Finematics)",
          "NFT Development Course (Ivan on Tech)",
          "Advanced DeFi Programming (Eat The Blocks)",
          "Complete NFT Development (Patrick Collins)",
        ],
        hindi: [
          "DeFi Development Hindi (BlockLearner)",
          "NFT Course for Developers Hindi (CodeDost)",
          "Smart Contract for DeFi Hindi (DappWorld)",
          "NFT Marketplace Development Hindi (Web3Hindu)",
        ],
      },
      toolsToUse: [
        "Uniswap SDK",
        "Aave Protocol",
        "OpenSea API",
        "NFT.Storage",
        "DeFi SDKs",
        "Chainlink Price Feeds",
      ],
      docsAndWebsites: [
        "DeFi Pulse",
        "DeFi Llama",
        "OpenSea Developer Docs",
        "Uniswap Documentation",
        "Compound Protocol",
      ],
      projectIdeas: [
        "Yield farming protocol",
        "NFT marketplace with royalties",
        "Decentralized exchange aggregator",
        "Dynamic NFT project",
      ],
    },
  },
  {
    id: 7,
    level: "Advanced",
    title: "Blockchain Security & Auditing",
    description: "Learn to secure blockchain systems and audit smart contracts",
    content: {
      whatToLearn: [
        "Common Attack Vectors",
        "Security Best Practices",
        "Audit Methodology",
        "Formal Verification",
        "Post-Deployment Monitoring",
        "Bug Bounty Programs",
      ],
      bestCourses: {
        english: [
          "Smart Contract Security (Secureum)",
          "Blockchain Security Course (ImmuneBytes)",
          "Smart Contract Auditing (Consensys)",
          "Formal Verification for Solidity (CertiK)",
        ],
        hindi: [
          "Blockchain Security in Hindi (SecureCoding)",
          "Smart Contract Auditing Hindi (BlockSecure)",
          "Security for Web3 Hindi (EtherPravah)",
          "Common Attacks Hindi (CryptoRakshak)",
        ],
      },
      toolsToUse: [
        "Slither",
        "MythX",
        "Echidna",
        "Manticore",
        "Consensys Scribble",
        "OpenZeppelin Defender",
      ],
      docsAndWebsites: [
        "Smart Contract Weakness Classification",
        "DeFi Safety",
        "Rekt News",
        "Ethereum Smart Contract Security",
        "Immunefi Blog",
      ],
      projectIdeas: [
        "Security monitoring dashboard",
        "Smart contract audit tool",
        "Gas optimization framework",
        "Security risk analyzer",
      ],
    },
  },
];

export default function System() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Group roadmap data by level
  const groupedRoadmap = roadmapData.reduce((acc, section) => {
    if (!acc[section.level]) {
      acc[section.level] = [];
    }
    acc[section.level].push(section);
    return acc;
  }, {});

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Add or remove dark class from document
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-[#F9FAFB] text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 md:px-6 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">
          Blockchain Developer Roadmap
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-colors`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Introduction */}
        <section
          className={`mb-8 p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300 border ${
            darkMode ? "border-gray-700" : "border-gray-100"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Welcome to Your Blockchain Developer Journey
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a proficient Blockchain Developer. We've
            organized the content by experience levels from beginner to
            advanced, with curated resources in both English and Hindi. Each
            section contains what to learn, recommended courses, tools,
            documentation, and project ideas to help you master blockchain
            development step by step.
          </p>
        </section>

        {/* Roadmap By Levels */}
        {Object.keys(groupedRoadmap).map((level) => (
          <div key={level} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`h-8 w-2 rounded-full ${
                  level === "Beginner"
                    ? "bg-green-500"
                    : level === "Intermediate"
                    ? "bg-blue-500"
                    : "bg-purple-500"
                }`}
              ></div>
              <h2 className="text-2xl font-bold">{level} Level</h2>
            </div>

            <div className="space-y-4">
              {groupedRoadmap[level].map((section) => (
                <article
                  key={section.id}
                  className={`roadmap-card ${
                    darkMode ? "roadmap-card-dark" : ""
                  }`}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="roadmap-header"
                    aria-expanded={openSection === section.id}
                  >
                    <div className="flex items-center">
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 text-white font-medium ${
                          level === "Beginner"
                            ? "bg-green-500"
                            : level === "Intermediate"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                        }`}
                      >
                        {section.id}
                      </span>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">
                          {section.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openSection === section.id ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Section Content */}
                  {openSection === section.id && (
                    <div
                      className={`roadmap-content ${
                        darkMode ? "border-gray-700" : ""
                      }`}
                    >
                      {/* What to Learn */}
                      <div className="mb-8">
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <span className="mr-2">🧠</span>Core Concepts
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {section.content.whatToLearn.map((item, index) => (
                            <li
                              key={index}
                              className={`flex items-center ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best Courses */}
                      <div className="mb-8">
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <span className="mr-2">📚</span>Learning Resources
                        </h4>

                        <div className="space-y-5">
                          {/* English Courses */}
                          <div
                            className={`p-4 rounded-lg ${
                              darkMode ? "bg-gray-700" : "bg-gray-50"
                            }`}
                          >
                            <h5
                              className={`font-medium mb-3 ${
                                darkMode ? "text-gray-200" : "text-gray-800"
                              }`}
                            >
                              In English:
                            </h5>
                            <ul className="space-y-2">
                              {section.content.bestCourses.english.map(
                                (course, index) => (
                                  <li
                                    key={index}
                                    className={`resource-item ${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    <span className="inline-block w-5 text-blue-500">
                                      •
                                    </span>
                                    {course}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Hindi Courses */}
                          <div
                            className={`p-4 rounded-lg ${
                              darkMode ? "bg-gray-700" : "bg-gray-50"
                            }`}
                          >
                            <h5
                              className={`font-medium mb-3 ${
                                darkMode ? "text-gray-200" : "text-gray-800"
                              }`}
                            >
                              In Hindi:
                            </h5>
                            <ul className="space-y-2">
                              {section.content.bestCourses.hindi.map(
                                (course, index) => (
                                  <li
                                    key={index}
                                    className={`resource-item ${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    <span className="inline-block w-5 text-blue-500">
                                      •
                                    </span>
                                    {course}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Tools to Use */}
                      <div className="mb-8">
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <span className="mr-2">🔧</span>Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {section.content.toolsToUse.map((tool, index) => (
                            <span
                              key={index}
                              className={`skill-pill ${
                                darkMode ? "bg-gray-700 text-gray-200" : ""
                              }`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Docs & Websites */}
                      <div className="mb-8">
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <span className="mr-2">📘</span>Documentation &
                          Resources
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                          {section.content.docsAndWebsites.map(
                            (resource, index) => (
                              <li
                                key={index}
                                className={`flex items-center ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                                {resource}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Project Ideas */}
                      <div>
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <span className="mr-2">💻</span>Project Ideas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.content.projectIdeas.map(
                            (project, index) => (
                              <div
                                key={index}
                                className={`project-card ${
                                  darkMode ? "bg-gray-700 text-gray-200" : ""
                                }`}
                              >
                                <div className="flex items-center">
                                  <span className="text-blue-500 mr-2 text-lg">
                                    🚀
                                  </span>
                                  <span>{project}</span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Tips Section */}
        <section
          className={`mt-8 p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300 border ${
            darkMode ? "border-gray-700" : "border-gray-100"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">💡</span>
            Tips for Your Blockchain Development Journey
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Start with understanding the fundamentals thoroughly before
                diving into development
              </span>
            </li>
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Build practical projects for your portfolio as you learn each
                concept
              </span>
            </li>
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Join blockchain developer communities like Ethereum Stack
                Exchange, Discord servers, and local meetups
              </span>
            </li>
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Follow blockchain security best practices from the beginning of
                your journey
              </span>
            </li>
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Stay updated with the latest blockchain protocols and
                improvements through forums and newsletters
              </span>
            </li>
            <li className="flex items-start">
              <span className={`inline-block w-5 text-blue-500 mt-1`}>•</span>
              <span>
                Participate in hackathons to accelerate your learning and expand
                your network
              </span>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Blockchain Developer Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a skilled Blockchain
                Developer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-3">
                <a
                  href="#"
                  className={`hover:text-blue-500 transition-colors p-2 rounded-full ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className={`hover:text-blue-500 transition-colors p-2 rounded-full ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className={`hover:text-blue-500 transition-colors p-2 rounded-full ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <p className="text-xs">
                © {new Date().getFullYear()} Blockchain Developer Roadmap. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
