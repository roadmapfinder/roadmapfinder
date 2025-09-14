import React from 'react';

export default function PromptEngineeringRoadmap() {
  const roadmap = [
    {
      title: "AI Foundations",
      subtitle: "Understanding LLMs & Core Concepts",
      steps: [
        { 
          step: "Step - 1", 
          topic: "AI & LLM Fundamentals", 
          category: "Foundation (Mandatory)",
          details: "What is AI, NLP, LLM (Large Language Model), GPT, Claude, LLaMA architecture, tokens, embeddings, parameters, context length"
        },
        { 
          step: "Step - 2", 
          topic: "Model Understanding & Limitations", 
          category: "Core Knowledge",
          details: "Hallucination, bias, cutoff dates, model capabilities and boundaries, different model families comparison"
        },
        { 
          step: "Step - 3", 
          topic: "Basic Prompting Techniques", 
          category: "Fundamental Skills",
          details: "Role-based prompting (You are an expert), zero-shot prompting, few-shot prompting, chain-of-thought prompting (CoT)"
        },
      ],
    },
    {
      title: "Intermediate Prompting",
      subtitle: "Structured Real-World Techniques",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Advanced Prompt Patterns", 
          category: "Pattern Mastery",
          details: "Refinement prompts, decomposition prompts, self-consistency prompting, ReAct (Reason + Act), Tree of Thoughts (ToT)"
        },
        { 
          step: "Step - 5", 
          topic: "Prompt Chaining & Structure", 
          category: "Multi-Step Reasoning",
          details: "Multi-step reasoning, prompt chaining, conversation design, structured output (JSON, Markdown, Tables)"
        },
        { 
          step: "Step - 6", 
          topic: "Applied Prompting Use Cases", 
          category: "Practical Applications",
          details: "Summarization, paraphrasing, expansion, Q&A, information extraction, multi-turn conversations, content generation"
        },
        { 
          step: "Step - 7", 
          topic: "Prompt Engineering Tools", 
          category: "Toolchain Mastery",
          details: "ChatGPT, Claude, Gemini interfaces, OpenAI Playground, LM Studio, prompt repositories (FlowGPT, PromptBase)"
        },
      ],
    },
    {
      title: "Advanced Engineering",
      subtitle: "Production-Level Techniques",
      steps: [
        { 
          step: "Step - 8", 
          topic: "System Prompts & Control", 
          category: "Behavior Engineering",
          details: "System prompts design, guardrails & safety prompts, error recovery prompts, controlling tone, style, verbosity"
        },
        { 
          step: "Step - 9", 
          topic: "Role-Playing & Multi-Agent", 
          category: "Complex Interactions",
          details: "Role-playing simulations, customer support bots, tutoring systems, multi-agent prompting, AI agent collaboration"
        },
        { 
          step: "Step - 10", 
          topic: "Prompt Evaluation & Testing", 
          category: "Quality Assurance",
          details: "Hallucination reduction techniques, testing prompts across different LLMs, performance evaluation, A/B testing"
        },
        { 
          step: "Step - 11", 
          topic: "Prompt Frameworks & Libraries", 
          category: "Framework Integration",
          details: "LangChain PromptTemplates, Semantic Kernel orchestration, DSPy (declarative prompt engineering), prompt versioning"
        },
      ],
    },
    {
      title: "Domain Specialization",
      subtitle: "Industry-Specific Applications",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Software Development Prompts", 
          category: "Developer Tools",
          details: "Code generation & debugging prompts, API documentation generation, unit test creation, code review assistance"
        },
        { 
          step: "Step - 13", 
          topic: "Business Applications", 
          category: "Enterprise Solutions",
          details: "Customer support automation, market research prompts, competitive analysis, report & proposal generation"
        },
        { 
          step: "Step - 14", 
          topic: "Content & Creative Prompts", 
          category: "Creative Industries",
          details: "Copywriting, blogging, ad copy creation, scriptwriting, storytelling, image prompts (DALL·E, MidJourney, Stable Diffusion)"
        },
        { 
          step: "Step - 15", 
          topic: "Specialized Domain Applications", 
          category: "Vertical Expertise",
          details: "Healthcare prompts, legal document analysis, education & tutoring, finance & accounting, research assistance"
        },
      ],
    },
    {
      title: "Production & Integration",
      subtitle: "Industry-Ready Implementation",
      steps: [
        { 
          step: "Step - 16", 
          topic: "LLM Integration & APIs", 
          category: "Technical Implementation",
          details: "OpenAI, Anthropic, Google Gemini APIs, Hugging Face Hub integration, Ollama (local LLMs), SDK mastery"
        },
        { 
          step: "Step - 17", 
          topic: "RAG & Vector Databases", 
          category: "Advanced AI Systems",
          details: "Retrieval-Augmented Generation, vector databases (Pinecone, Weaviate, Milvus, FAISS), embeddings, semantic search"
        },
        { 
          step: "Step - 18", 
          topic: "PromptOps & Automation", 
          category: "Operations & Scaling",
          details: "Prompt versioning, automated testing, performance monitoring, LangChain/LlamaIndex integration, multi-agent frameworks"
        },
        { 
          step: "Step - 19", 
          topic: "Deployment & Production", 
          category: "Full-Stack AI Apps",
          details: "Deploy AI chatbots, integrate LLMs into SaaS products, AWS/GCP/Azure deployment, cost optimization, edge LLMs"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "AI Foundations", project: "AI-Powered Q&A Assistant" },
    { level: "Intermediate Prompting", project: "Multi-Step Research Tool" },
    { level: "Advanced Engineering", project: "Customer Support Chatbot" },
    { level: "Domain Specialization", project: "Code Generation IDE Plugin" },
    { level: "Production & Integration", project: "Enterprise RAG System" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
         

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🤖 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready</span>
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
            🤖 AI Development Practice Projects
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

        {/* Essential AI Technologies Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🚀 Essential AI Technologies & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">AI Frameworks</div>
              <div className="text-blue-100">LangChain, LlamaIndex, Haystack, AutoGen, CrewAI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">LLM APIs</div>
              <div className="text-blue-100">OpenAI, Anthropic, Google Gemini, Hugging Face, Cohere</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Vector Databases</div>
              <div className="text-blue-100">Pinecone, Weaviate, Milvus, FAISS, Chroma</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Local LLMs</div>
              <div className="text-blue-100">Ollama, LM Studio, GPT4All, LocalAI, Llama.cpp</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Prompt Tools</div>
              <div className="text-blue-100">PromptBase, FlowGPT, OpenAI Playground, Anthropic Console</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Fine-tuning</div>
              <div className="text-blue-100">LoRA, QLoRA, PEFT, Axolotl, Unsloth</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">MLOps & Deployment</div>
              <div className="text-blue-100">MLflow, Weights & Biases, Modal, Replicate, RunPod</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development Stack</div>
              <div className="text-blue-100">Python, JavaScript, React, Next.js, Streamlit, Gradio</div>
            </div>
          </div>
        </section>

        {/* Industry-Level AI Projects */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Industry-Level AI Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🤖 AI Customer Support System</h3>
              <p className="text-sm text-gray-600 mb-3">Build intelligent customer support with RAG, knowledge base integration, and multi-turn conversations.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">LangChain • RAG • Pinecone • OpenAI</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📊 AI Research Assistant</h3>
              <p className="text-sm text-gray-600 mb-3">Create automated research tool with web scraping, document analysis, and report generation.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">LlamaIndex • FAISS • Anthropic • Streamlit</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">💻 Code Generation IDE Plugin</h3>
              <p className="text-sm text-gray-600 mb-3">Build VS Code extension for intelligent code generation, documentation, and debugging assistance.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">VS Code API • CodeLlama • TypeScript</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Multi-Agent AI Workflow</h3>
              <p className="text-sm text-gray-600 mb-3">Develop multi-agent system for complex task automation with specialized AI agents.</p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">AutoGen • CrewAI • Multi-Agent • Python</div>
            </div>
          </div>
        </section>

        {/* Modern AI Best Practices */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🏢 Modern AI Development Best Practices (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">⚡ Performance & Optimization</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Token optimization strategies</li>
                <li>• Prompt caching techniques</li>
                <li>• Model selection for cost/performance</li>
                <li>• Batch processing optimization</li>
                <li>• Response streaming implementation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Safety & Responsible AI</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hallucination detection and mitigation</li>
                <li>• Content filtering and moderation</li>
                <li>• Bias detection and fairness</li>
                <li>• Privacy-preserving techniques</li>
                <li>• Ethical AI guidelines compliance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🚀 Production Excellence</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Prompt versioning and management</li>
                <li>• A/B testing for prompts</li>
                <li>• Monitoring and observability</li>
                <li>• Error handling and fallbacks</li>
                <li>• Scalable architecture patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">📚 Essential AI Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">📖 Must-Read Books</div>
              <div className="text-gray-700">Prompt Engineering Guide, The Prompt Engineering Handbook, AI for People in a Hurry, Pattern Recognition</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">🎥 Video Resources</div>
              <div className="text-gray-700">DeepLearning.AI courses, Andrew Ng's AI courses, LangChain tutorials, Prompt Engineering by OpenAI</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
              <div className="font-semibold text-orange-800 mb-2">💻 Hands-on Practice</div>
              <div className="text-gray-700">LangChain tutorials, OpenAI Cookbook, Hugging Face Hub, AI hackathons, Open source contributions</div>
            </div>
          </div>
        </section>

        {/* Career Path Options */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 AI Engineer Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🤖 Prompt Engineer</div>
              <div className="text-gray-700">Advanced prompting, LLM optimization, RAG systems, AI application development</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">⚙️ AI Application Developer</div>
              <div className="text-gray-700">Full-stack AI apps, LLM integration, chatbots, AI-powered SaaS products</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">🏢 Enterprise AI Architect</div>
              <div className="text-gray-700">Large-scale AI systems, MLOps, AI strategy, team leadership, enterprise AI adoption</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
              <div className="font-semibold text-indigo-800 mb-2">☁️ AI/ML DevOps Engineer</div>
              <div className="text-gray-700">Model deployment, CI/CD for AI, monitoring, scaling, cloud AI infrastructure</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🌟 Master AI from foundations to production! Build intelligent applications, master prompt engineering, and become industry-ready.
          </p>
        </div>
      </div>
    </main>
  );
}