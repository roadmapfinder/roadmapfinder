// Solidity Mastery Roadmap data structured according to the roadmap content
export const phases = [
  {
    id: 0,
    title: "Blockchain Fundamentals",
    subtitle: "Phase 0 (Must Before Solidity)",
    description: "Build essential blockchain knowledge before writing smart contracts.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🧱 Concepts",
        items: [
          "What is Blockchain, DLT",
          "Bitcoin vs Ethereum vs Solana vs L2",
          "Hashing, Merkle Trees",
          "Public / Private keys",
          "Wallets (EOA vs Contract wallets)",
          "Gas, transactions, blocks",
          "Nodes, miners, validators",
          "RPC providers (Infura, Alchemy, Ankr)",
          "Mainnet, Testnet, Devnet"
        ]
      },
      {
        title: "📚 Learn",
        items: [
          "Ethereum Yellow Paper (basic reading)",
          "EIP standards overview",
          "How Ethereum Virtual Machine works"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Create MetaMask wallet",
          "Send ETH on testnet",
          "Read transaction on Etherscan"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Solidity Language Core",
    subtitle: "Phase 1",
    description: "Master the fundamentals of Solidity programming language.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🔹 Syntax Basics",
        items: [
          "Solidity versions & compiler pragmas",
          "Data types: uint, int, bool",
          "address, payable",
          "bytes, string",
          "Variables: state, local, constant, immutable",
          "Visibility: public, private, internal, external",
          "Functions: pure, view, payable",
          "Constructors",
          "Modifiers"
        ]
      },
      {
        title: "🔀 Control Flow",
        items: [
          "if / else",
          "for / while",
          "require, assert, revert"
        ]
      },
      {
        title: "📦 Structs & Enums",
        items: [
          "Custom data models"
        ]
      },
      {
        title: "🗂️ Arrays & Mappings",
        items: [
          "Memory vs Storage vs Calldata"
        ]
      },
      {
        title: "📢 Events & Logging",
        items: []
      },
      {
        title: "✅ Practice Projects",
        items: [
          "Simple Storage Contract",
          "Counter DApp",
          "Voting System",
          "Todo List Contract"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Ethereum Smart Contract Mechanics",
    subtitle: "Phase 2",
    description: "Deep dive into Ethereum-specific contract functionality.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔹 Advanced Topics",
        items: [
          "msg.sender, msg.value, tx.origin",
          "address(this) balance, transfer, send, call",
          "ABI encoding/decoding",
          "Fallback & receive functions",
          "Ether vs Wei"
        ]
      },
      {
        title: "🔗 Contract Interaction",
        items: [
          "Calling another contract",
          "Interface usage",
          "Delegatecall vs call vs staticcall"
        ]
      },
      {
        title: "🧬 Inheritance & Polymorphism",
        items: [
          "abstract contracts",
          "interfaces",
          "multiple inheritance"
        ]
      },
      {
        title: "⚠️ Error Handling",
        items: [
          "Custom errors",
          "try/catch"
        ]
      },
      {
        title: "⚡ Gas Optimization Basics",
        items: [
          "Storage packing",
          "unchecked blocks",
          "immutable variables"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Multi-contract system",
          "Wallet contract",
          "Escrow contract"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "ERC Standards",
    subtitle: "Phase 3 (Industry Mandatory)",
    description: "Master essential token standards and governance protocols.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔹 Core Standards",
        items: [
          "ERC20",
          "ERC721",
          "ERC1155",
          "ERC777",
          "ERC4626 (Tokenized vaults)",
          "Governance",
          "ERC165",
          "ERC2981 (royalties)",
          "ERC4907 (rentable NFTs)"
        ]
      },
      {
        title: "📚 Learn OpenZeppelin Deeply",
        items: [
          "Ownable",
          "AccessControl",
          "Pausable",
          "ReentrancyGuard",
          "SafeMath (legacy)"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Custom ERC20 token",
          "NFT marketplace contract",
          "Multi-token gaming assets"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Security Engineering",
    subtitle: "Phase 4 (Most Important Phase)",
    description: "Learn to identify and prevent critical vulnerabilities.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔹 Attack Vectors",
        items: [
          "Reentrancy",
          "Integer overflow/underflow",
          "Front running / MEV",
          "Flash loan attacks",
          "Delegatecall exploits",
          "tx.origin phishing",
          "Signature replay",
          "Oracle manipulation",
          "DOS with gas"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "Slither",
          "Mythril",
          "Foundry fuzzing",
          "Echidna",
          "Tenderly debugger"
        ]
      },
      {
        title: "🎯 Patterns",
        items: [
          "Checks-Effects-Interactions",
          "Pull over Push",
          "Access control patterns",
          "Upgrade safe storage layout"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Hack vulnerable contracts",
          "Fix vulnerable contracts"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Testing & Development Frameworks",
    subtitle: "Phase 5",
    description: "Master professional development and testing tools.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "🔨 Hardhat",
        items: [
          "Deployment scripts",
          "Tasks",
          "Plugins",
          "Forking mainnet"
        ]
      },
      {
        title: "⚒️ Foundry",
        items: [
          "forge test",
          "fuzz testing",
          "cheatcodes"
        ]
      },
      {
        title: "🔧 Truffle",
        items: [
          "(legacy)"
        ]
      },
      {
        title: "🧪 Testing Types",
        items: [
          "Unit tests",
          "Integration tests",
          "Property testing",
          "Fork tests"
        ]
      },
      {
        title: "📊 Coverage",
        items: [
          "solidity-coverage"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Upgradeable Smart Contracts",
    subtitle: "Phase 6",
    description: "Implement and manage upgradeable contract systems.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🔹 Proxy Patterns",
        items: [
          "Transparent Proxy",
          "UUPS",
          "Beacon Proxy",
          "Storage collision",
          "Initializers vs constructors",
          "OpenZeppelin upgrade plugins"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Upgrade token logic safely",
          "Upgrade DeFi contract"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "DeFi Protocol Engineering",
    subtitle: "Phase 7",
    description: "Build decentralized finance applications and protocols.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🔹 Core DeFi",
        items: [
          "AMM (Uniswap V2/V3 logic)",
          "Liquidity pools",
          "Yield farming",
          "Staking"
        ]
      },
      {
        title: "💰 Lending Protocols",
        items: [
          "Liquidation engines",
          "Interest models"
        ]
      },
      {
        title: "🔮 Oracles",
        items: [
          "Chainlink",
          "TWAP",
          "Pyth"
        ]
      },
      {
        title: "⚡ Flash Loans",
        items: [
          "Aave flash loans"
        ]
      },
      {
        title: "💵 Stablecoins",
        items: [
          "Algorithmic vs collateralized"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Build DEX",
          "Lending protocol",
          "Staking system"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "NFT, Gaming & Metaverse",
    subtitle: "Phase 8",
    description: "Create NFT systems and gaming economies on-chain.",
    color: "bg-teal-500",
    sections: [
      {
        title: "🔹 NFT Advanced",
        items: [
          "NFT royalties",
          "Lazy minting",
          "Soulbound tokens",
          "On-chain metadata",
          "Randomness (VRF)"
        ]
      },
      {
        title: "🎮 Gaming & Metaverse",
        items: [
          "Gaming economies",
          "Marketplace contracts"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Layer 2 & Cross-Chain",
    subtitle: "Phase 9",
    description: "Deploy and integrate across multiple blockchain networks.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔹 L2",
        items: [
          "Optimism",
          "Arbitrum",
          "zkSync",
          "Scroll",
          "Starknet"
        ]
      },
      {
        title: "🌉 Bridges",
        items: [
          "Lock & mint",
          "Burn & release"
        ]
      },
      {
        title: "📡 Messaging",
        items: [
          "LayerZero",
          "Wormhole",
          "Axelar"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "MEV & Advanced EVM",
    subtitle: "Phase 10",
    description: "Master advanced Ethereum Virtual Machine optimization techniques.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🔹 MEV",
        items: [
          "Mempool mechanics",
          "Private transactions",
          "Flashbots"
        ]
      },
      {
        title: "⚡ Advanced Optimization",
        items: [
          "Gas golfing",
          "Opcode optimization",
          "Inline assembly (Yul)"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Auditing & Professional Level",
    subtitle: "Phase 11",
    description: "Conduct professional-grade smart contract security audits.",
    color: "bg-violet-500",
    sections: [
      {
        title: "🔹 Audit Skills",
        items: [
          "Manual code review",
          "Threat modeling",
          "Formal verification basics",
          "Writing audit reports"
        ]
      },
      {
        title: "📚 Standards",
        items: [
          "SWC registry",
          "DeFi exploits database"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Production Engineering",
    subtitle: "Phase 12",
    description: "Deploy and maintain production-ready blockchain systems.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🔹 DevOps",
        items: [
          "CI/CD for contracts",
          "Multisig deployments",
          "Timelocks",
          "Emergency pause"
        ]
      },
      {
        title: "📊 Monitoring",
        items: [
          "Tenderly",
          "OpenZeppelin Defender"
        ]
      },
      {
        title: "⚖️ Compliance",
        items: [
          "KYC ready architecture",
          "Regulatory awareness"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Capstone Projects",
    subtitle: "Portfolio Must Have",
    description: "No projects = no skill. Build real applications.",
    color: "bg-rose-500",
    sections: [
      {
        title: "🧩 Must-Build Projects",
        items: [
          "DEX",
          "Lending protocol",
          "NFT marketplace",
          "DAO governance",
          "Cross-chain bridge",
          "Upgradeable DeFi system"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Supporting Skills & Job Readiness",
    subtitle: "Phase 14",
    description: "Complete your Web3 developer skillset and get hired.",
    color: "bg-amber-500",
    sections: [
      {
        title: "🧠 Required Supporting Skills",
        items: [
          "JavaScript / TypeScript",
          "Ethers.js / Viem",
          "Web3 front-end",
          "Git & GitHub",
          "Docker",
          "Basic cryptography",
          "Economics of DeFi"
        ]
      },
      {
        title: "📌 Job Readiness Checklist",
        items: [
          "✔ Write gas-optimized secure contracts",
          "✔ Build DeFi protocols",
          "✔ Audit smart contracts",
          "✔ Use Foundry & Hardhat",
          "✔ Design upgradeable systems",
          "✔ Handle exploits & patch them",
          "✔ Deploy on L2 & mainnet",
          "✔ Write professional audit reports"
        ]
      },
      {
        title: "🎯 Career Roles After This Roadmap",
        items: [
          "Smart Contract Engineer",
          "Blockchain Protocol Engineer",
          "DeFi Engineer",
          "Solidity Auditor",
          "Web3 Architect"
        ]
      }
    ]
  }
];