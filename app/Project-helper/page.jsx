'use client';

import { useState } from 'react';
// Note: Replace with your preferred HTTP client
import { Bot, Send, Lightbulb, MapPin, Code, Package, BookOpen, Youtube, Loader2, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';

export default function ProjectHelperBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('input'); // 'input', 'loading', 'results'
  const [originalInput, setOriginalInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setOriginalInput(input);
    setCurrentPage('loading');
    setLoading(true);

    try {
      // Replace with your actual API call
      const res = await fetch('/api/generate-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectIdea: input
        })
      });

      if (!res.ok) {
        throw new Error('Failed to generate project guide');
      }

      const data = await res.json();
      setResponse(data);
      setCurrentPage('results');
    } catch (error) {
      console.error('Error:', error);
      alert('Error generating project guide. Please try again.');
      setCurrentPage('input'); // Go back to input on error
    } finally {
      setLoading(false);
    }
  };

  const handleNewProject = () => {
    setInput('');
    setResponse(null);
    setOriginalInput('');
    setCurrentPage('input');
  };

  const ProjectSection = ({ title, icon: Icon, children, bgColor = "bg-white" }) => (
    <div className={`${bgColor} rounded-xl p-6 shadow-lg border border-gray-100`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );

  const MindMapNode = ({ node, level = 0 }) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
    const bgColor = colors[level % colors.length];

    return (
      <div className="ml-0" style={{ marginLeft: `${level * 1.5}rem` }}>
        <div className={`inline-flex items-center px-3 py-2 rounded-lg text-white ${bgColor} mb-2`}>
          {node.name}
        </div>
        {node.children && (
          <div className="ml-4">
            {node.children.map((child, idx) => (
              <MindMapNode key={idx} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Loading Page Component
  const LoadingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Loader2 className="w-4 h-4 text-white animate-spin" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Creating Your Project Roadmap
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Our AI is analyzing your project idea and crafting a comprehensive development plan...
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Bot className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="font-medium text-gray-800 mb-1">Analyzing Project:</p>
                <p className="text-gray-600 text-sm italic">"{originalInput.substring(0, 100)}{originalInput.length > 100 ? '...' : ''}"</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700">Analyzing project requirements</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                <span className="text-blue-700">Generating development roadmap</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                <span className="text-gray-500">Selecting optimal tech stack</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                <span className="text-gray-500">Curating learning resources</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            This usually takes 30-60 seconds
          </p>
        </div>
      </div>
    </div>
  );

  // Input Page Component
  const InputPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RoadmapFinder</h1>
              <p className="text-sm text-gray-600">AI-Powered Project Helper Bot</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Describe Your Project Idea
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your project concept and get a complete development roadmap with tech stack recommendations
          </p>

          <div onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., I want to build a social media app for book lovers where users can share reviews, create reading lists, and follow other readers..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[120px] resize-none"
                disabled={loading}
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !input.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Generate Project Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Results Page Component
  const ResultsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RoadmapFinder</h1>
                <p className="text-sm text-gray-600">Your Project Roadmap is Ready!</p>
              </div>
            </div>

            <button
              onClick={handleNewProject}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              New Project
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Project Roadmap Generated Successfully!
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 font-medium mb-1">Your Project Idea:</p>
                <p className="text-gray-800 italic">"{originalInput}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Sections */}
        <div className="space-y-8">
          {/* Mind Map */}
          <ProjectSection 
            title="Project Mind Map" 
            icon={Lightbulb}
            bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
          >
            <div className="space-y-4">
              {response.mindMap && (
                <MindMapNode node={response.mindMap} />
              )}
            </div>
          </ProjectSection>

          {/* Roadmap */}
          <ProjectSection title="Development Roadmap" icon={MapPin}>
            <div className="space-y-4">
              {response.roadmap?.map((phase, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{phase.phase}</h4>
                  </div>
                  <p className="text-gray-600 mb-3">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.tasks?.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ProjectSection>

          {/* Tech Stack */}
          <ProjectSection title="Recommended Tech Stack" icon={Code}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(response.techStack || {}).map(([category, technologies]) => (
                <div key={category} className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2 capitalize">{category}</h5>
                  <ul className="space-y-1">
                    {technologies.map((tech, idx) => (
                      <li key={idx} className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ProjectSection>

          {/* Tools & Packages */}
          <ProjectSection title="Required Tools & Packages" icon={Package}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">NPM Packages</h5>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {response.packages?.npm?.map((pkg, idx) => (
                    <div key={idx}>npm install {pkg}</div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Development Tools</h5>
                <ul className="space-y-2">
                  {response.packages?.tools?.map((tool, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ProjectSection>

          {/* Documentation */}
          <ProjectSection title="Official Documentation" icon={BookOpen}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {response.documentation?.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h6 className="font-semibold text-gray-800 mb-1">{doc.title}</h6>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </a>
              ))}
            </div>
          </ProjectSection>

          {/* YouTube Resources */}
          <ProjectSection title="Learning Resources" icon={Youtube}>
            <div className="grid md:grid-cols-2 gap-4">
              {response.youtubeResources?.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Youtube className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="font-semibold text-gray-800 mb-1">{resource.title}</h6>
                    <p className="text-sm text-gray-600 mb-1">{resource.channel}</p>
                    <p className="text-xs text-gray-500">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );

  // Main render logic based on current page
  if (currentPage === 'loading') {
    return <LoadingPage />;
  }

  if (currentPage === 'results' && response) {
    return <ResultsPage />;
  }

  return <InputPage />;
}