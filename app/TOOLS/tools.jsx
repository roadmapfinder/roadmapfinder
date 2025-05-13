"use client";

import React, { useState, useMemo } from "react";
import {
  Monitor,
  Smartphone,
  Palette,
  PenTool,
  Film,
  Server,
  Code,
  Bitcoin,
  Brain,
  Network,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  X,
} from "lucide-react";

export default function ToolHub() {
  // Regular JavaScript useState (no TypeScript types)

  const categories = [
    {
      id: "web-development",
      name: "Web Development",
      icon: <Monitor size={24} />,
      tools: [
        {
          name: "VS Code",
          description: "Powerful code editor with extensive extensions",
          link: "https://code.visualstudio.com/",
        },
        {
          name: "GitHub",
          description: "Version control and collaboration platform",
          link: "https://github.com/",
        },
        {
          name: "Netlify",
          description: "Deployment and hosting platform for web projects",
          link: "https://www.netlify.com/",
        },
        {
          name: "Vercel",
          description: "Platform for frontend frameworks and static sites",
          link: "https://vercel.com/",
        },
        {
          name: "Postman",
          description: "API development and testing environment",
          link: "https://www.postman.com/",
        },
        {
          name: "Chrome DevTools",
          description: "Built-in debugging tools for web development",
          link: "https://developers.google.com/web/tools/chrome-devtools",
        },
        {
          name: "Figma",
          description: "Interface design and prototyping tool",
          link: "https://www.figma.com/",
        },
        {
          name: "CodeSandbox",
          description: "Online code editor for web applications",
          link: "https://codesandbox.io/",
        },
        {
          name: "WebStorm",
          description: "Integrated development environment for JavaScript",
          link: "https://www.jetbrains.com/webstorm/",
        },
        {
          name: "Lighthouse",
          description: "Automated auditing tool for web quality metrics",
          link: "https://developers.google.com/web/tools/lighthouse",
        },
      ],
    },
    {
      id: "app-development",
      name: "App Development",
      icon: <Smartphone size={24} />,
      tools: [
        {
          name: "Android Studio",
          description: "Official IDE for Android development",
          link: "https://developer.android.com/studio",
        },
        {
          name: "Xcode",
          description: "IDE for Apple platforms development",
          link: "https://developer.apple.com/xcode/",
        },
        {
          name: "Flutter",
          description: "UI toolkit for building natively compiled applications",
          link: "https://flutter.dev/",
        },
        {
          name: "React Native",
          description: "Framework for building native apps with React",
          link: "https://reactnative.dev/",
        },
        {
          name: "Expo",
          description: "Platform for making universal React applications",
          link: "https://expo.dev/",
        },
        {
          name: "Firebase",
          description: "App development platform with tools and infrastructure",
          link: "https://firebase.google.com/",
        },
        {
          name: "Postman",
          description: "API development and testing environment",
          link: "https://www.postman.com/",
        },
        {
          name: "Bitrise",
          description: "Mobile continuous integration and delivery",
          link: "https://www.bitrise.io/",
        },
        {
          name: "App Center",
          description: "DevOps for mobile app development",
          link: "https://appcenter.ms/",
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and project management",
          link: "https://www.notion.so/",
        },
      ],
    },
    {
      id: "ui-ux",
      name: "UI/UX",
      icon: <Palette size={24} />,
      tools: [
        {
          name: "Figma",
          description: "Collaborative interface design and prototyping tool",
          link: "https://www.figma.com/",
        },
        {
          name: "Adobe XD",
          description: "Vector-based user experience design tool",
          link: "https://www.adobe.com/products/xd.html",
        },
        {
          name: "Framer",
          description: "Interactive design and prototyping tool",
          link: "https://www.framer.com/",
        },
        {
          name: "Zeplin",
          description: "Connected workspace for product teams",
          link: "https://zeplin.io/",
        },
        {
          name: "Sketch",
          description: "Digital design platform for Mac",
          link: "https://www.sketch.com/",
        },
        {
          name: "Balsamiq",
          description: "Rapid wireframing tool",
          link: "https://balsamiq.com/",
        },
        {
          name: "Overflow",
          description: "User flow diagramming tool for designers",
          link: "https://overflow.io/",
        },
        {
          name: "Whimsical",
          description: "Visual workspace for thinking and collaboration",
          link: "https://whimsical.com/",
        },
        {
          name: "Contrast Checker",
          description: "Accessibility tool for checking color contrast",
          link: "https://webaim.org/resources/contrastchecker/",
        },
        {
          name: "ColorHunt",
          description: "Color palette discovery platform",
          link: "https://colorhunt.co/",
        },
      ],
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      icon: <PenTool size={24} />,
      tools: [
        {
          name: "Adobe Photoshop",
          description: "Raster graphics editor for photo editing",
          link: "https://www.adobe.com/products/photoshop.html",
        },
        {
          name: "Illustrator",
          description: "Vector graphics editor for illustrations",
          link: "https://www.adobe.com/products/illustrator.html",
        },
        {
          name: "Canva",
          description: "Online design and publishing platform",
          link: "https://www.canva.com/",
        },
        {
          name: "Affinity Designer",
          description: "Professional graphic design software",
          link: "https://affinity.serif.com/en-us/designer/",
        },
        {
          name: "CorelDRAW",
          description: "Vector illustration and page layout software",
          link: "https://www.coreldraw.com/",
        },
        {
          name: "GIMP",
          description: "Free and open-source raster graphics editor",
          link: "https://www.gimp.org/",
        },
        {
          name: "Fotor",
          description: "Online photo editor and design maker",
          link: "https://www.fotor.com/",
        },
        {
          name: "Pixlr",
          description: "Suite of online photo editors",
          link: "https://pixlr.com/",
        },
        {
          name: "Gravit",
          description: "Full-featured free vector design app",
          link: "https://www.designer.io/",
        },
        {
          name: "Remove.bg",
          description: "Remove image backgrounds automatically",
          link: "https://www.remove.bg/",
        },
      ],
    },
    {
      id: "video-editing",
      name: "Video Editing",
      icon: <Film size={24} />,
      tools: [
        {
          name: "Adobe Premiere Pro",
          description: "Timeline-based video editing software",
          link: "https://www.adobe.com/products/premiere.html",
        },
        {
          name: "Final Cut Pro",
          description: "Professional video editing software for Mac",
          link: "https://www.apple.com/final-cut-pro/",
        },
        {
          name: "DaVinci Resolve",
          description: "Color correction and non-linear video editing",
          link: "https://www.blackmagicdesign.com/products/davinciresolve/",
        },
        {
          name: "CapCut",
          description: "All-in-one video editing application",
          link: "https://www.capcut.com/",
        },
        {
          name: "After Effects",
          description: "Visual effects and motion graphics software",
          link: "https://www.adobe.com/products/aftereffects.html",
        },
        {
          name: "Filmora",
          description: "Easy-to-use video editor for beginners",
          link: "https://filmora.wondershare.com/",
        },
        {
          name: "RunwayML",
          description: "AI-powered creative tools for video editing",
          link: "https://runwayml.com/",
        },
        {
          name: "Animoto",
          description: "Online video maker for social media",
          link: "https://animoto.com/",
        },
        {
          name: "VEED",
          description: "Online video editor for creators",
          link: "https://www.veed.io/",
        },
        {
          name: "Clipchamp",
          description: "Online video editor with templates",
          link: "https://clipchamp.com/",
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Server size={24} />,
      tools: [
        {
          name: "Docker",
          description: "Container platform for application deployment",
          link: "https://www.docker.com/",
        },
        {
          name: "Kubernetes",
          description: "Container orchestration system",
          link: "https://kubernetes.io/",
        },
        {
          name: "Jenkins",
          description: "Open-source automation server",
          link: "https://www.jenkins.io/",
        },
        {
          name: "GitHub Actions",
          description: "CI/CD platform integrated with GitHub",
          link: "https://github.com/features/actions",
        },
        {
          name: "Travis CI",
          description: "Continuous integration service",
          link: "https://travis-ci.org/",
        },
        {
          name: "CircleCI",
          description: "CI/CD platform for software development",
          link: "https://circleci.com/",
        },
        {
          name: "Terraform",
          description: "Infrastructure as code software tool",
          link: "https://www.terraform.io/",
        },
        {
          name: "AWS CLI",
          description: "Command-line interface for AWS services",
          link: "https://aws.amazon.com/cli/",
        },
        {
          name: "Azure DevOps",
          description: "Set of development tools for teams",
          link: "https://azure.microsoft.com/en-us/services/devops/",
        },
        {
          name: "Ansible",
          description: "IT automation platform",
          link: "https://www.ansible.com/",
        },
      ],
    },
    {
      id: "programming",
      name: "Programming",
      icon: <Code size={24} />,
      tools: [
        {
          name: "Git",
          description: "Distributed version control system",
          link: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          description: "Platform for code hosting and collaboration",
          link: "https://github.com/",
        },
        {
          name: "Visual Studio Code",
          description: "Source code editor with debugging support",
          link: "https://code.visualstudio.com/",
        },
        {
          name: "IntelliJ",
          description: "IDE for Java and other JVM languages",
          link: "https://www.jetbrains.com/idea/",
        },
        {
          name: "PyCharm",
          description: "IDE for Python development",
          link: "https://www.jetbrains.com/pycharm/",
        },
        {
          name: "Replit",
          description: "Online IDE for collaborative coding",
          link: "https://replit.com/",
        },
        {
          name: "Jupyter Notebook",
          description: "Interactive computing environment",
          link: "https://jupyter.org/",
        },
        {
          name: "StackBlitz",
          description: "Online IDE for web development",
          link: "https://stackblitz.com/",
        },
        {
          name: "Prettier",
          description: "Opinionated code formatter",
          link: "https://prettier.io/",
        },
        {
          name: "ESLint",
          description: "Static code analysis tool for JavaScript",
          link: "https://eslint.org/",
        },
      ],
    },
    {
      id: "blockchain",
      name: "Blockchain",
      icon: <Bitcoin size={24} />,
      tools: [
        {
          name: "Remix IDE",
          description: "Browser-based compiler and IDE for Solidity",
          link: "https://remix.ethereum.org/",
        },
        {
          name: "Metamask",
          description: "Crypto wallet and gateway to blockchain apps",
          link: "https://metamask.io/",
        },
        {
          name: "Hardhat",
          description: "Development environment for Ethereum software",
          link: "https://hardhat.org/",
        },
        {
          name: "Truffle",
          description: "Development framework for Ethereum",
          link: "https://www.trufflesuite.com/",
        },
        {
          name: "Ganache",
          description: "Personal blockchain for Ethereum development",
          link: "https://www.trufflesuite.com/ganache",
        },
        {
          name: "Alchemy",
          description: "Blockchain developer platform",
          link: "https://www.alchemy.com/",
        },
        {
          name: "Infura",
          description: "API suite for Ethereum and IPFS",
          link: "https://infura.io/",
        },
        {
          name: "Etherscan",
          description: "Block explorer for Ethereum blockchain",
          link: "https://etherscan.io/",
        },
        {
          name: "OpenZeppelin",
          description: "Library for secure smart contract development",
          link: "https://openzeppelin.com/",
        },
        {
          name: "SolidityScan",
          description: "Security scanner for Solidity contracts",
          link: "https://solidityscan.com/",
        },
      ],
    },
    {
      id: "ai-ml",
      name: "AI/ML",
      icon: <Brain size={24} />,
      tools: [
        {
          name: "Jupyter",
          description: "Interactive computing environment for data science",
          link: "https://jupyter.org/",
        },
        {
          name: "Colab",
          description: "Free Jupyter notebook environment by Google",
          link: "https://colab.research.google.com/",
        },
        {
          name: "TensorFlow",
          description: "Open-source machine learning platform",
          link: "https://www.tensorflow.org/",
        },
        {
          name: "PyTorch",
          description: "Open-source machine learning library",
          link: "https://pytorch.org/",
        },
        {
          name: "HuggingFace",
          description: "Platform for building ML applications",
          link: "https://huggingface.co/",
        },
        {
          name: "Scikit-learn",
          description: "ML library for classical algorithms",
          link: "https://scikit-learn.org/",
        },
        {
          name: "Weights & Biases",
          description: "MLOps platform for experiment tracking",
          link: "https://wandb.ai/",
        },
        {
          name: "OpenAI Playground",
          description: "Interface to experiment with AI models",
          link: "https://beta.openai.com/playground",
        },
        {
          name: "RunwayML",
          description: "Platform for creative AI tools",
          link: "https://runwayml.com/",
        },
        {
          name: "MLflow",
          description: "Platform for ML lifecycle management",
          link: "https://mlflow.org/",
        },
      ],
    },
    {
      id: "system-design",
      name: "System Design",
      icon: <Network size={24} />, // Changed from FlowChart to Network
      tools: [
        {
          name: "Draw.io",
          description: "Diagramming tool for flowcharts and wireframes",
          link: "https://draw.io/",
        },
        {
          name: "Excalidraw",
          description: "Virtual collaborative whiteboard",
          link: "https://excalidraw.com/",
        },
        {
          name: "Lucidchart",
          description: "Cloud-based diagramming software",
          link: "https://www.lucidchart.com/",
        },
        {
          name: "Whimsical",
          description: "Visual workspace for diagrams and docs",
          link: "https://whimsical.com/",
        },
        {
          name: "Cacoo",
          description: "Online diagram and wireframing tool",
          link: "https://cacoo.com/",
        },
        {
          name: "Mermaid.js",
          description: "Markdown-inspired tool for diagrams",
          link: "https://mermaid-js.github.io/",
        },
        {
          name: "PlantUML",
          description: "Open-source tool to create diagrams from text",
          link: "https://plantuml.com/",
        },
        {
          name: "Diagrams.net",
          description: "Free diagram software",
          link: "https://www.diagrams.net/",
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and databases",
          link: "https://www.notion.so/",
        },
        {
          name: "Miro",
          description: "Online collaborative whiteboard platform",
          link: "https://miro.com/",
        },
      ],
    },
  ];
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      // Filter by selected category
      if (selectedCategory !== "all" && category.id !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const matchesCategory = category.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesTools = category.tools.some(
          (tool) =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchesCategory || matchesTools;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Developer Tool Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover and organize essential tools across all tech disciplines
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
              placeholder="Search tools or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {React.cloneElement(category.icon, { size: 16 })}
                {category.name}
              </button>
            ))}
          </div>

          {(searchQuery || selectedCategory !== "all") && (
            <div className="text-center">
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 mx-auto"
              >
                <X size={14} />
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No tools found
            </h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredCategories.length} category
            {filteredCategories.length !== 1 ? "s" : ""} with matching tools
          </p>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 ${
                expandedCategory === category.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-6 cursor-pointer focus:outline-none"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={expandedCategory === category.id}
                aria-controls={`category-${category.id}-content`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 ${category.color} rounded-lg`}>
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.tools.length} tools
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedCategory === category.id ? (
                    <ChevronUp size={20} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={20} aria-hidden="true" />
                  )}
                </div>
              </button>

              {expandedCategory === category.id && (
                <div
                  id={`category-${category.id}-content`}
                  className="bg-gray-50 p-6 border-t border-gray-200 transition-all duration-300"
                >
                  <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {category.tools.map((tool, index) => (
                      <li
                        key={`${category.id}-${index}`}
                        className="flex items-start bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900 truncate">
                              {tool.name}
                            </h4>
                            {tool.link && (
                              <a
                                href={tool.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-500 hover:text-blue-600 inline-flex items-center flex-shrink-0"
                                aria-label={`Visit ${tool.name} website (opens in new tab)`}
                              >
                                <ExternalLink size={14} aria-hidden="true" />
                              </a>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {tool.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
