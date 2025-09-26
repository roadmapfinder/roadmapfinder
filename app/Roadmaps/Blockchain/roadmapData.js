// roadmapData.js - Blockchain Development Roadmap Data

export const phases = [
  {
    id: 0,
    title: "Core Prerequisites",
    subtitle: "Foundational Level",
    description: "Essential programming and CS fundamentals for blockchain development",
    color: "bg-gray-600",
    sections: [
      {
        title: "Programming Languages",
        items: [
          "JavaScript/TypeScript → Essential for web3 frontend and tooling",
          "Systems Language → Go, Rust, or Python for backend/node development",
          "Solidity → Primary smart contract language for Ethereum",
          "Practice: Build small CLI tools and web applications"
        ]
      },
      {
        title: "Computer Science Fundamentals",
        items: [
          "Data Structures → Maps, tries, hash tables, merkle trees",
          "Algorithms → Sorting, searching, graph algorithms",
          "Complexity Analysis → Big O notation, time/space complexity",
          "Networking Basics → TCP/IP, HTTP, WebSockets, P2P concepts"
        ]
      },
      {
        title: "System & Security Basics",
        items: [
          "Linux/Unix → Command line, file systems, process management",
          "Docker → Containerization for development and deployment",
          "Version Control → Git workflows, branching, collaborative development",
          "Testing → Unit testing, integration testing, CI/CD pipelines"
        ]
      },
      {
        title: "Cryptography Fundamentals",
        items: [
          "Hash Functions → SHA256, Keccak-256, collision resistance",
          "Asymmetric Cryptography → ECDSA/secp256k1, public/private keys",
          "Digital Signatures → Message signing, verification, non-repudiation",
          "Message Authentication Codes (MACs) → HMAC, integrity verification"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Foundational Experiment",
    subtitle: "Beginner Level",
    description: "Hands-on blockchain implementation to understand core concepts",
    color: "bg-green-500",
    sections: [
      {
        title: "Build a Mini Blockchain",
        items: [
          "Block Structure → Headers, transactions, previous hash linking",
          "Proof of Work → Mining algorithm, difficulty adjustment, nonce",
          "Chain Validation → Block verification, longest chain rule",
          "Basic P2P Simulation → Node communication, gossip protocol"
        ]
      },
      {
        title: "Core Concepts Implementation",
        items: [
          "Merkle Trees → Transaction batching, efficient verification",
          "Mining Loop → Hash target, difficulty calculation, block rewards",
          "Transaction Pool → Mempool management, fee prioritization",
          "Network Simulation → Multiple nodes, consensus simulation"
        ]
      },
      {
        title: "Essential Reading",
        items: [
          "Bitcoin Whitepaper → Understand the original blockchain design",
          "Mastering Bitcoin (Andreas Antonopoulos) → UTXO model deep dive",
          "Ethereum Whitepaper → Smart contracts and world computer concept",
          "Research: Compare Bitcoin vs Ethereum architectures"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Blockchain Internals",
    subtitle: "Intermediate Level",
    description: "Deep dive into blockchain architecture and consensus mechanisms",
    color: "bg-blue-500",
    sections: [
      {
        title: "Transaction Models",
        items: [
          "UTXO Model → Bitcoin-style, unspent outputs, transaction graphs",
          "Account-Based Model → Ethereum-style, balance tracking, state changes",
          "Transaction Validation → Signature verification, double-spend prevention",
          "Fee Markets → Gas pricing, transaction prioritization, MEV"
        ]
      },
      {
        title: "Data Structures & Storage",
        items: [
          "Merkle Trees → Binary trees, proof generation, efficient verification",
          "Patricia Tries → Ethereum state storage, key-value optimization",
          "State Management → World state, state root, historical states",
          "Receipt Tries → Transaction receipts, event logs, proof generation"
        ]
      },
      {
        title: "Consensus Algorithms",
        items: [
          "Proof of Work → Bitcoin, Ethereum (pre-merge), mining economics",
          "Byzantine Fault Tolerance → PBFT, practical consensus, 3f+1 nodes",
          "Proof of Stake → Casper, validator economics, slashing conditions",
          "Tendermint → BFT consensus, instant finality, validator sets"
        ]
      },
      {
        title: "Networking & Security",
        items: [
          "P2P Networks → Peer discovery, Kademlia DHT, network topology",
          "Gossip Protocols → Message propagation, network efficiency, DoS resistance",
          "Mempool Design → Transaction ordering, spam prevention, fee markets",
          "Anti-DoS Patterns → Rate limiting, reputation systems, resource management"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Smart Contracts & EVM",
    subtitle: "Advanced Level",
    description: "Master Ethereum Virtual Machine and smart contract development",
    color: "bg-purple-500",
    sections: [
      {
        title: "EVM Fundamentals",
        items: [
          "Stack Machine → 256-bit words, stack operations, memory model",
          "Opcodes → Arithmetic, logical, storage, control flow instructions",
          "Gas Accounting → Execution costs, gas limits, out-of-gas handling",
          "Execution Context → Call data, return data, contract state, msg object"
        ]
      },
      {
        title: "Solidity Programming",
        items: [
          "Language Features → Types, inheritance, modifiers, libraries, interfaces",
          "Contract Lifecycle → Constructor, deployment, upgradeability patterns",
          "Special Functions → Payable, fallback, receive, view, pure functions",
          "Events & ABI → Event emission, Application Binary Interface, encoding"
        ]
      },
      {
        title: "Development Environment",
        items: [
          "Hardhat Framework → Local networks, mainnet forking, automated testing",
          "Foundry Toolkit → Forge testing, Cast CLI, Anvil local node",
          "Development Workflow → Compile, deploy, verify, interact with contracts",
          "Network Management → Local, testnet, mainnet deployments"
        ]
      },
      {
        title: "Testing & Quality Assurance",
        items: [
          "Unit Testing → Mocha/Chai (Hardhat), Foundry test framework",
          "Property Testing → Echidna fuzzer, invariant testing, edge cases",
          "Integration Testing → Multi-contract interactions, complex scenarios",
          "Fuzzing → Random input generation, unexpected behavior discovery"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Security & Auditing",
    subtitle: "Expert Level",
    description: "Master smart contract security and professional auditing practices",
    color: "bg-red-500",
    sections: [
      {
        title: "Common Vulnerabilities",
        items: [
          "Reentrancy Attacks → Cross-function, same-function, read-only reentrancy",
          "Integer Issues → Overflow/underflow (pre-0.8), precision loss, rounding",
          "Access Control → Privilege escalation, role-based security, admin keys",
          "External Call Risks → Return value checks, gas limitations, call injection"
        ]
      },
      {
        title: "Advanced Security Issues",
        items: [
          "tx.origin vs msg.sender → Authentication bypass, phishing attacks",
          "Oracle Manipulation → Price feeds, MEV, flash loan attacks",
          "Front-running → Transaction ordering, MEV bots, commit-reveal schemes",
          "Denial of Service → Gas limit DoS, unexpected revert, block stuffing"
        ]
      },
      {
        title: "Security Tooling",
        items: [
          "Static Analysis → Slither, MythX, automated vulnerability detection",
          "Symbolic Execution → Manticore, symbolic fuzzing, path exploration",
          "Formal Verification → SMT solvers, mathematical proofs, spec languages",
          "Dynamic Analysis → Echidna property testing, runtime monitoring"
        ]
      },
      {
        title: "Professional Practices",
        items: [
          "Secure Libraries → OpenZeppelin Contracts, battle-tested implementations",
          "Code Review → Security-focused reviews, checklist-driven audits",
          "Deployment Pipeline → Staged deployments, monitoring, emergency procedures",
          "Bug Bounties → Responsible disclosure, security researcher engagement"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Scaling & Layer 2",
    subtitle: "Advanced Level",
    description: "Understand blockchain scaling solutions and cross-chain technologies",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Layer 2 Solutions",
        items: [
          "Optimistic Rollups → Fraud proofs, challenge periods, Arbitrum/Optimism",
          "ZK Rollups → Validity proofs, zero-knowledge, StarkNet/zkSync",
          "State Channels → Payment channels, Lightning Network, off-chain computation",
          "Sidechains → Independent chains, two-way pegs, Polygon PoS"
        ]
      },
      {
        title: "Zero-Knowledge Cryptography",
        items: [
          "zk-SNARKs → Succinct proofs, trusted setup, Groth16, PLONK",
          "zk-STARKs → Transparent, post-quantum, scalable, no trusted setup",
          "Circuit Design → Constraint systems, R1CS, arithmetic circuits",
          "ZK Applications → Privacy, scaling, identity, voting systems"
        ]
      },
      {
        title: "Data Availability & Consensus",
        items: [
          "Data Availability Problem → Full nodes, light clients, data withholding",
          "Fraud Proofs → Interactive verification, bisection games, dispute resolution",
          "Validity Proofs → Mathematical guarantees, immediate finality, compression",
          "Modular Architecture → Execution, consensus, data availability separation"
        ]
      },
      {
        title: "Cross-Chain Infrastructure",
        items: [
          "Bridge Security → Trust models, validator sets, multi-signature schemes",
          "Atomic Swaps → Hash time-locked contracts, trustless exchange",
          "IBC Protocol → Inter-blockchain communication, Cosmos ecosystem",
          "Relayer Networks → Message passing, cross-chain state verification"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Infrastructure & Operations",
    subtitle: "Production Level",
    description: "Run blockchain infrastructure and build production-ready applications",
    color: "bg-orange-500",
    sections: [
      {
        title: "Node Operations",
        items: [
          "Full Nodes → Complete blockchain state, validation, network participation",
          "Archive Nodes → Historical data, state queries, dApp backends",
          "Light Clients → Minimal storage, header verification, mobile applications",
          "RPC Endpoints → JSON-RPC, WebSocket, batch requests, rate limiting"
        ]
      },
      {
        title: "Infrastructure Services",
        items: [
          "RPC Providers → Infura, Alchemy, QuickNode, load balancing, redundancy",
          "Self-hosted Infrastructure → Node management, monitoring, backup strategies",
          "Caching Strategies → Redis, CDN, query optimization, response caching",
          "Scaling Solutions → Load balancers, multiple regions, failover systems"
        ]
      },
      {
        title: "Monitoring & Observability",
        items: [
          "Node Monitoring → Prometheus metrics, Grafana dashboards, alerting",
          "Application Monitoring → Transaction tracking, event parsing, error handling",
          "Block Explorers → Etherscan, custom explorers, transaction analysis",
          "Performance Optimization → Query optimization, indexing, parallel processing"
        ]
      },
      {
        title: "Security & Key Management",
        items: [
          "Wallet Architecture → HD wallets, BIP-32/39/44, seed phrase security",
          "Hardware Security → HSMs, hardware wallets, secure enclaves",
          "Multi-signature → Gnosis Safe, threshold signatures, governance",
          "Key Rotation → Backup strategies, emergency procedures, social recovery"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Cryptography & Privacy",
    subtitle: "Expert Level",
    description: "Master advanced cryptographic techniques and privacy protocols",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Signature Schemes",
        items: [
          "Threshold Signatures → Multi-party signing, secret sharing, BLS signatures",
          "Multi-Party Computation → Secure computation, privacy-preserving protocols",
          "Ring Signatures → Anonymity sets, unlinkability, Monero-style privacy",
          "Schnorr Signatures → Bitcoin Taproot, signature aggregation, efficiency"
        ]
      },
      {
        title: "Zero-Knowledge Development",
        items: [
          "Cairo Language → StarkNet smart contracts, provable computation",
          "Circom/snarkjs → Circuit development, constraint generation, proof systems",
          "Halo2 → Recursive proofs, universal setup, advanced circuit techniques",
          "zkEVM → Ethereum compatibility, bytecode proving, state transition proofs"
        ]
      },
      {
        title: "Privacy Protocols",
        items: [
          "Mixing Services → CoinJoin, Tornado Cash, transaction privacy",
          "Zero-Knowledge Identity → Semaphore, anonymous credentials, reputation",
          "Private Voting → Confidential ballots, verifiable elections, coercion resistance",
          "Regulatory Considerations → Compliance, AML requirements, privacy tradeoffs"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Tokenomics & Governance",
    subtitle: "Business Level",
    description: "Design token economies and decentralized governance systems",
    color: "bg-pink-500",
    sections: [
      {
        title: "Token Standards & Mechanics",
        items: [
          "ERC-20 → Fungible tokens, allowances, transfer mechanics, supply models",
          "ERC-721 → Non-fungible tokens, metadata, ownership transfers, marketplaces",
          "ERC-1155 → Multi-token standard, batch operations, gaming applications",
          "Advanced Standards → ERC-4626 vaults, ERC-2981 royalties, composability"
        ]
      },
      {
        title: "Upgradeability Patterns",
        items: [
          "Proxy Patterns → Transparent proxy, UUPS, beacon proxy, diamond pattern",
          "Upgrade Safety → Storage layout, initialization, migration strategies",
          "Governance Integration → Timelock controllers, proposal systems, multisig",
          "Risk Management → Circuit breakers, pause mechanisms, emergency procedures"
        ]
      },
      {
        title: "Governance Systems",
        items: [
          "On-chain Voting → Governor contracts, proposal lifecycle, delegation",
          "Token-weighted Governance → Quadratic voting, conviction voting, rage quitting",
          "Multi-signature Governance → Threshold requirements, role-based permissions",
          "Hybrid Models → Off-chain signaling, on-chain execution, snapshot integration"
        ]
      },
      {
        title: "Regulatory & Compliance",
        items: [
          "Securities Laws → Token classification, utility vs security, regulatory guidance",
          "AML/KYC Requirements → Identity verification, transaction monitoring, reporting",
          "Cross-border Compliance → Jurisdictional requirements, regulatory arbitrage",
          "Best Practices → Legal frameworks, compliance audits, regulatory engagement"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Research & Leadership",
    subtitle: "Expert Level",
    description: "Contribute to protocol development and lead blockchain initiatives",
    color: "bg-gray-800",
    sections: [
      {
        title: "Protocol Development",
        items: [
          "EIP Authoring → Ethereum Improvement Proposals, specification writing",
          "Core Client Development → Geth, Erigon, consensus client contributions",
          "Research Implementation → Academic papers, novel consensus mechanisms",
          "Cross-chain Protocols → New interoperability solutions, bridge designs"
        ]
      },
      {
        title: "Advanced Architecture",
        items: [
          "Consensus Innovation → Novel BFT algorithms, finality gadgets, hybrid consensus",
          "Data Availability → New solutions, erasure coding, fraud proof optimization",
          "Execution Environments → Alternative VMs, WASM, parallel execution",
          "Modular Blockchain → Separation of concerns, pluggable components, rollup stacks"
        ]
      },
      {
        title: "Industry Leadership",
        items: [
          "Technical Writing → Documentation, tutorials, best practice guides",
          "Open Source Contribution → Core protocol work, tooling, educational resources",
          "Community Building → Developer relations, ecosystem growth, mentoring",
          "Standards Development → Multi-chain standards, interoperability protocols"
        ]
      }
    ]
  }
];