"use client";
import { useState } from "react";
import { Github, Twitter, Linkedin, Sun, Moon , Download} from "lucide-react";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
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


  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
        let html2canvas;
        let jsPDF;

        // This ensures these modules are only imported on the client side
        if (typeof window !== 'undefined') {
          import('html2canvas').then((module) => {
            html2canvas = module.default;
          });
          import('jspdf').then((module) => {
            jsPDF = module.default;
          });
        }

        export default function Home() {
          const [openSection, setOpenSection] = useState(null);
          const [darkMode, setDarkMode] = useState(false);
          const [downloading, setDownloading] = useState(false);

          // Toggle section open/close
          const toggleSection = (id) => {
            setOpenSection(openSection === id ? null : id);
          };

          // Toggle dark mode
          const toggleDarkMode = () => {
            setDarkMode(!darkMode);
          };

          // Function to handle the download process
          const handleDownload = async () => {
            if (!html2canvas || !jsPDF) {
              alert("PDF generation libraries are still loading. Please try again in a moment.");
              return;
            }

            setDownloading(true);

            try {
              // Create a temporary div to render the roadmap content for downloading
              const downloadDiv = document.createElement('div');
              downloadDiv.className = "roadmap-download-content";

              // Set styles for better PDF output
              downloadDiv.style.padding = "20px";
              downloadDiv.style.color = "black";
              downloadDiv.style.backgroundColor = "white";
              downloadDiv.style.fontFamily = "Arial, sans-serif";

              // Add title
              const title = document.createElement('h1');
              title.style.textAlign = "center";
              title.style.marginBottom = "20px";
              title.textContent = "Blockchain Developer Roadmap";
              downloadDiv.appendChild(title);

              // Add roadmap content
              roadmapData.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.style.marginBottom = "30px";

                // Section header
                const header = document.createElement('h2');
                header.style.backgroundColor = "#f0f0f0";
                header.style.padding = "10px";
                header.style.borderRadius = "5px";
                header.textContent = `${section.id}. ${section.title}`;
                sectionDiv.appendChild(header);

                // Section description
                const desc = document.createElement('p');
                desc.style.marginBottom = "15px";
                desc.style.fontStyle = "italic";
                desc.textContent = section.description;
                sectionDiv.appendChild(desc);

                // What to Learn
                const whatToLearn = document.createElement('div');
                whatToLearn.style.marginBottom = "15px";

                const whatToLearnTitle = document.createElement('h3');
                whatToLearnTitle.textContent = "✅ What to Learn";
                whatToLearn.appendChild(whatToLearnTitle);

                const whatToLearnList = document.createElement('ul');
                section.content.whatToLearn.forEach(item => {
                  const li = document.createElement('li');
                  li.textContent = item;
                  whatToLearnList.appendChild(li);
                });
                whatToLearn.appendChild(whatToLearnList);
                sectionDiv.appendChild(whatToLearn);

                // Best Courses
                const bestCourses = document.createElement('div');
                bestCourses.style.marginBottom = "15px";

                const bestCoursesTitle = document.createElement('h3');
                bestCoursesTitle.textContent = "📚 Best Courses";
                bestCourses.appendChild(bestCoursesTitle);

                // English courses
                const englishTitle = document.createElement('h4');
                englishTitle.textContent = "In English:";
                bestCourses.appendChild(englishTitle);

                const englishList = document.createElement('ul');
                section.content.bestCourses.english.forEach(course => {
                  const li = document.createElement('li');
                  li.textContent = course;
                  englishList.appendChild(li);
                });
                bestCourses.appendChild(englishList);

                // Hindi courses
                const hindiTitle = document.createElement('h4');
                hindiTitle.textContent = "In Hindi:";
                bestCourses.appendChild(hindiTitle);

                const hindiList = document.createElement('ul');
                section.content.bestCourses.hindi.forEach(course => {
                  const li = document.createElement('li');
                  li.textContent = course;
                  hindiList.appendChild(li);
                });
                bestCourses.appendChild(hindiList);
                sectionDiv.appendChild(bestCourses);

                // Tools to Use
                const tools = document.createElement('div');
                tools.style.marginBottom = "15px";

                const toolsTitle = document.createElement('h3');
                toolsTitle.textContent = "🧰 Tools to Use";
                tools.appendChild(toolsTitle);

                const toolsList = document.createElement('ul');
                section.content.toolsToUse.forEach(tool => {
                  const li = document.createElement('li');
                  li.textContent = tool;
                  toolsList.appendChild(li);
                });
                tools.appendChild(toolsList);
                sectionDiv.appendChild(tools);

                // Docs & Websites
                const docs = document.createElement('div');
                docs.style.marginBottom = "15px";

                const docsTitle = document.createElement('h3');
                docsTitle.textContent = "📘 Docs & Websites";
                docs.appendChild(docsTitle);

                const docsList = document.createElement('ul');
                section.content.docsAndWebsites.forEach(doc => {
                  const li = document.createElement('li');
                  li.textContent = doc;
                  docsList.appendChild(li);
                });
                docs.appendChild(docsList);
                sectionDiv.appendChild(docs);

                // Project Ideas
                const projects = document.createElement('div');
                projects.style.marginBottom = "15px";

                const projectsTitle = document.createElement('h3');
                projectsTitle.textContent = "💡 Project Ideas";
                projects.appendChild(projectsTitle);

                const projectsList = document.createElement('ul');
                section.content.projectIdeas.forEach(project => {
                  const li = document.createElement('li');
                  li.textContent = project;
                  projectsList.appendChild(li);
                });
                projects.appendChild(projectsList);
                sectionDiv.appendChild(projects);

                downloadDiv.appendChild(sectionDiv);
              });

              // Temporarily add the div to the document to render it
              document.body.appendChild(downloadDiv);

              // Use html2canvas to create an image of the content
              const canvas = await html2canvas(downloadDiv, {
                scale: 1,
                useCORS: true,
                logging: false,
              });

              // Remove the temporary div
              document.body.removeChild(downloadDiv);

              // Create PDF from the canvas
              const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
              });

              // Calculate the required height based on canvas dimensions to fit the page width
              const imgWidth = 210; // A4 width in mm (210mm)
              const imgHeight = canvas.height * imgWidth / canvas.width;

              // Add image to PDF (first page)
              pdf.addImage(
                canvas.toDataURL('image/png'),
                'PNG',
                0,
                0,
                imgWidth,
                imgHeight
              );

              // If the content requires multiple pages
              let heightLeft = imgHeight;
              let position = 0;

              // Subtract the height of the first page
              heightLeft -= 297; // A4 height in mm (297mm)

              // Add subsequent pages if needed
              while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(
                  canvas.toDataURL('image/png'),
                  'PNG',
                  0,
                  position,
                  imgWidth,
                  imgHeight
                );
                heightLeft -= 297;
              }

              // Save the PDF
              pdf.save("Blockchain_Developer_Roadmap.pdf");

              // Store the downloaded roadmap data to localStorage
              localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

              // Navigate to Downloads page
              router.push('/Downloads');
            } catch (error) {
              console.error("Error generating PDF:", error);
              alert("There was an error generating the PDF. Please try again.");
            } finally {
              setDownloading(false);
            }
          };

          return (
            <div
              className={`min-h-screen ${
                darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
              } transition-colors duration-300`}
            >
              {/* Sticky Navigation Bar */}
              <nav
                className={`sticky top-0 z-10 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
              >
                <h1 className="text-xl md:text-2xl font-bold">
                  Roadmap to Become a Blockchain Developer
                </h1>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className={`p-2 rounded-full mr-2 ${
                      darkMode
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    } ${downloading ? "opacity-50 cursor-not-allowed" : ""}`}
                    aria-label="Download Roadmap"
                  >
                    {downloading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                      </span>
                    ) : (
                      <Download size={20} />
                    )}
                  </button>
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${
                      darkMode
                        ? "bg-gray-700 text-yellow-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    aria-label="Toggle Dark Mode"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </nav>

              <main className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Introduction */}
                <section
                  className={`mb-8 p-6 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-md transition-colors duration-300`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Welcome to the Blockchain Developer Roadmap
                    </h2>
                    <button
                      onClick={handleDownload}
                      disabled={downloading}
                      className={`px-4 py-2 rounded-md flex items-center ${
                        darkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      } ${downloading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {downloading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating PDF...
                        </span>
                      ) : (
                        <>
                          <Download size={16} className="mr-2" />
                          Download as PDF
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed">
                    This roadmap will guide you through the essential skills, tools, and
                    resources needed to become a proficient Blockchain Developer. Each
                    section contains curated resources in both English and Hindi to help
                    you master each stage of your blockchain journey. Click on any
                    section to expand it and explore its contents.
                  </p>
                </section>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <article
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
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
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">✅</span>What to Learn
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
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>Best Courses
                    </h4>

                    <div className="space-y-4">
                      {/* English Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
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
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🧰</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📘</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.projectIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>


    </div>
  );
}