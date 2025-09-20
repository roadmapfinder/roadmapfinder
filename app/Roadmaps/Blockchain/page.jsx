"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Link } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const BlockchainRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
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

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're Blockchain Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Blockchain Development Roadmap and are now ready to build cutting-edge blockchain systems and lead Web3 initiatives.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribute to open-source blockchain projects (Ethereum, Bitcoin, Layer 2s)</li>
                  <li>• Build comprehensive portfolio with DeFi, NFT, and infrastructure projects</li>
                  <li>• Participate in hackathons, bug bounties, and protocol governance</li>
                  <li>• Stay updated via research.paradigm.xyz, Week in Ethereum, and EIP discussions</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Blockchain <span className="text-blue-600">Development Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default BlockchainRoadmap;