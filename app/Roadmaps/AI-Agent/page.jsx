"use client"
import React, { useState } from 'react';
import { Brain, Download, Map, FileText, FolderOpen, ChevronDown, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF } from './downloadPdf';

const NoCodeAIAgentRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Roadmap data structured according to your No-Code AI Agent content
  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level",
      description: "Learn how AI agents work without touching heavy code.",
      color: "bg-blue-500",
      sections: [
        {
          title: "🤖 Basics of AI & LLMs",
          items: [
            "What are AI agents? (Reasoning + Tools + Memory)",
            "Core terms: prompt, context, embedding, RAG, function calling",
            "Learn about OpenAI, Claude, LLaMA, Mistral APIs (just how to connect via no-code)",
            "Understanding AI agent architecture and workflows"
          ]
        },
        {
          title: "🛠️ Tools to Start",
          items: [
            "ChatGPT / Claude (prompting basics)",
            "Perplexity AI (research assistant examples)",
            "Prompt marketplaces (PromptBase, FlowGPT)",
            "Basic prompt engineering techniques"
          ]
        },
        {
          title: "🎯 Mini Projects",
          items: [
            "Design prompts to create an email writer",
            "Prompt engineer a 'travel planner assistant'",
            "Create a personal productivity AI assistant",
            "Build a simple Q&A bot using prompts"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Agent Building with No-Code Platforms",
      subtitle: "Intermediate Level",
      description: "Start connecting LLMs with external tools using visual builders.",
      color: "bg-green-500",
      sections: [
        {
          title: "🎨 Visual Agent Builders",
          items: [
            "Langflow – drag-and-drop chains, memory, tools",
            "Flowise AI – open-source no-code LangChain UI",
            "Relevance AI – multi-agent studio with templates",
            "Poe by Quora – simple agent creation"
          ]
        },
        {
          title: "⚡ Automation + AI Workflows",
          items: [
            "Zapier AI Actions – connect LLMs to 6000+ apps",
            "Make (Integromat) – AI + API workflows",
            "n8n – open-source automation with AI integrations",
            "Power Automate + AI Builder integration"
          ]
        },
        {
          title: "🧠 Knowledge & Memory (No-Code RAG)",
          items: [
            "Chatbase (chat with your data)",
            "DocuAsk / CustomGPT for document processing",
            "Pinecone (GUI) + Flowise for embeddings",
            "Vector database integration without coding"
          ]
        },
        {
          title: "🚀 Intermediate Projects",
          items: [
            "Create a Q&A bot for a PDF (Flowise + ChromaDB)",
            "Customer support agent with memory (Langflow)",
            "AI agent that drafts social media posts (Zapier + OpenAI)",
            "Company FAQ chatbot trained on your docs"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Multi-Agent Systems",
      subtitle: "Advanced Intermediate",
      description: "Build collaborative AI agent teams without coding.",
      color: "bg-purple-500",
      sections: [
        {
          title: "👥 Multi-Agent Orchestration (No-Code)",
          items: [
            "CrewAI Studio (GUI) – define multiple roles (researcher, coder, tester)",
            "Relevance AI Multi-Agent Hub – agents collaborate visually",
            "AutoGen Studio (UI) – Microsoft's no-code agent playground",
            "Agent workflow coordination and task delegation"
          ]
        },
        {
          title: "🔗 Advanced Integrations",
          items: [
            "CRM Integrations (HubSpot, Salesforce)",
            "E-commerce AI (Shopify AI agents with Zapier)",
            "Analytics & Monitoring (LangSmith dashboard without coding)",
            "API connections through visual interfaces"
          ]
        },
        {
          title: "🎯 Multi-Agent Projects",
          items: [
            "AI research team (Researcher agent + Writer agent)",
            "Multi-agent 'startup simulation' (CEO, marketer, developer)",
            "Sales assistant that logs leads in CRM",
            "E-commerce agent that answers customer questions from product catalog"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Scaling & Deployment",
      subtitle: "Advanced Level",
      description: "Build deployable, production-ready AI agents — still no-code.",
      color: "bg-orange-500",
      sections: [
        {
          title: "🌐 Deployment & Hosting",
          items: [
            "Vercel AI SDK (GUI options) – deploy chatbots on websites",
            "Typedream + Chatbase widget – embed AI agent on site",
            "Glide / Bubble.io – no-code apps with AI backends",
            "Botpress – conversational AI without coding"
          ]
        },
        {
          title: "⚙️ Production Features",
          items: [
            "User authentication and session management",
            "Scalable hosting and load balancing",
            "Monitoring and analytics dashboards",
            "Error handling and fallback systems"
          ]
        },
        {
          title: "📈 Advanced Projects",
          items: [
            "Deploy AI customer support widget on website",
            "Launch an AI 'resume coach' app on Bubble",
            "Multi-channel chatbot (web, Slack, Discord)",
            "AI-powered workflow automation system"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Mastery",
      subtitle: "Cutting-Edge No-Code",
      description: "Build autonomous and self-improving AI agent systems.",
      color: "bg-red-500",
      sections: [
        {
          title: "🤖 Autonomous & Self-Improving Agents",
          items: [
            "Use AutoGPT UIs (Camel AGI UI, AgentGPT)",
            "Relevance AI's self-learning agents",
            "Plug-in multiple APIs to make agents truly autonomous",
            "Continuous learning and adaptation systems"
          ]
        },
        {
          title: "🏆 Capstone Projects (Industry-Ready)",
          items: [
            "Fully automated market research agent (scrapes web, summarizes, stores results)",
            "Multi-agent AI consultancy firm (Planner, Researcher, Writer, Designer agents)",
            "AI-powered business intelligence system",
            "Autonomous customer service ecosystem",
            "Self-optimizing marketing campaign manager"
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

            {/* Learning Path Section */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🛠️ Suggested Learning Path with Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">🎯 Beginner Tools</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prompting → ChatGPT / Claude / Poe</li>
                    <li>• Visual agent builders → Flowise, Langflow</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🚀 Advanced Tools</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automation → Zapier AI, Make, n8n</li>
                    <li>• Memory → Chatbase, Relevance AI, Pinecone GUI</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">👥 Multi-Agent Tools</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-agent → CrewAI Studio, Relevance AI Multi-Agent</li>
                    <li>• Deployment → Bubble, Glide, Typedream, Botpress</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="font-semibold text-orange-600 mb-2">📈 Scaling Tools</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Scaling → Vercel, LangSmith dashboards</li>
                    <li>• Autonomous → AutoGPT UIs, AgentGPT</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ⏳ Timeline (If you dedicate 10–12 hrs/week)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">Phase 1: Foundations</h3>
                  <p className="text-2xl font-bold text-blue-600">1 month</p>
                  <p className="text-sm text-gray-600">Beginner Level</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">Phase 2: Agent Building</h3>
                  <p className="text-2xl font-bold text-green-600">2-3 months</p>
                  <p className="text-sm text-gray-600">Intermediate Level</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">Phase 3: Multi-Agent</h3>
                  <p className="text-2xl font-bold text-purple-600">3-5 months</p>
                  <p className="text-sm text-gray-600">Advanced Level</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">Phase 4-5: Mastery</h3>
                  <p className="text-2xl font-bold text-red-600">Ongoing</p>
                  <p className="text-sm text-gray-600">Expert Level</p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're a No-Code AI Agent Expert!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the No-Code AI Agent Builder Roadmap and are now ready to build sophisticated AI agent systems without writing a single line of code.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Join no-code AI communities (Discord, Reddit, LinkedIn groups)</li>
                  <li>• Share your agent builds on social media & portfolio sites</li>
                  <li>• Write tutorials about your no-code AI solutions</li>
                  <li>• Stay updated via no-code newsletters and AI agent platforms</li>
                  <li>• Experiment with new no-code AI tools as they emerge</li>
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
            <Brain className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              No-Code AI <span className="text-blue-600">Agent Builder</span>
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

export default NoCodeAIAgentRoadmap;