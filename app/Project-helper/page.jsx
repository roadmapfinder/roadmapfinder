"use client"
import React, { useState, useEffect } from 'react';
import { Search, Loader2, CheckCircle, AlertCircle, Brain, Lightbulb, Code, Database, Globe, Smartphone, Cpu, Palette } from 'lucide-react';

// Main App Component
export default function ProjectGeneratorApp() {
  const [projectIdea, setProjectIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectIdea.trim()) return;

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/generate-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectIdea }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate project');
      }

      setResult(data);
      setActiveTab('overview');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const projectTypes = [
    { icon: Globe, label: 'Web App', example: 'E-commerce platform with user authentication' },
    { icon: Smartphone, label: 'Mobile App', example: 'Fitness tracking app with social features' },
    { icon: Brain, label: 'AI/ML Project', example: 'Image recognition system for medical diagnosis' },
    { icon: Database, label: 'Backend API', example: 'RESTful API for inventory management' },
    { icon: Palette, label: 'Design System', example: 'Component library for enterprise applications' },
    { icon: Cpu, label: 'Blockchain', example: 'NFT marketplace with smart contracts' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Lightbulb },
    { id: 'roadmap', label: 'Roadmap', icon: Code },
    { id: 'tech', label: 'Tech Stack', icon: Cpu },
    { id: 'resources', label: 'Resources', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">AI Project Generator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into actionable project plans with comprehensive tech stacks, roadmaps, and resources.
          </p>
        </div>

        {/* Project Input Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <label htmlFor="projectIdea" className="block text-lg font-semibold text-gray-900 mb-4">
                Describe your project idea
              </label>
              <div className="relative">
                <textarea
                  id="projectIdea"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                  placeholder="e.g., A task management app with AI-powered priority suggestions, team collaboration features, and real-time notifications..."
                  className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-base"
                  rows={4}
                  disabled={isLoading}
                />
                <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                  {projectIdea.length}/1000
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !projectIdea.trim()}
                className="mt-6 w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Project Plan...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Generate Project Plan
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Project Type Examples */}
          {!result && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular project types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => setProjectIdea(type.example)}
                    className="text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <type.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">{type.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">
                      {type.example}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="max-w-6xl mx-auto">
            {/* Success Header */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                Project plan generated successfully! Here's your comprehensive guide.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600 bg-blue-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {result.mindMap?.name || 'Project Overview'}
                      </h2>

                      {result.mindMap?.children && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {result.mindMap.children.map((component, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {component.name}
                              </h3>
                              {component.children && (
                                <ul className="space-y-2">
                                  {component.children.map((subComponent, subIndex) => (
                                    <li key={subIndex} className="flex items-center gap-2 text-gray-700">
                                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                      {subComponent.name}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Roadmap Tab */}
                {activeTab === 'roadmap' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900">Development Roadmap</h2>

                    {result.roadmap && result.roadmap.length > 0 ? (
                      <div className="space-y-6">
                        {result.roadmap.map((phase, index) => (
                          <div key={index} className="relative">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    {index + 1}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {phase.phase}
                                  </h3>
                                  <p className="text-gray-700 mb-4">{phase.description}</p>
                                  {phase.tasks && (
                                    <ul className="space-y-2">
                                      {phase.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                            {index < result.roadmap.length - 1 && (
                              <div className="absolute left-4 top-14 w-0.5 h-6 bg-gray-300"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No roadmap data available.</p>
                    )}
                  </div>
                )}

                {/* Tech Stack Tab */}
                {activeTab === 'tech' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900">Technology Stack</h2>

                    {result.techStack && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(result.techStack).map(([category, technologies]) => (
                          <div key={category} className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="space-y-2">
                              {Array.isArray(technologies) ? (
                                technologies.map((tech, index) => (
                                  <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                                    {tech}
                                  </div>
                                ))
                              ) : (
                                <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                                  {technologies}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {result.packages && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Packages & Tools</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.entries(result.packages).map(([type, packages]) => (
                            Array.isArray(packages) && packages.length > 0 && (
                              <div key={type} className="bg-gray-50 rounded-xl p-6">
                                <h4 className="font-semibold text-gray-900 mb-3 capitalize">{type}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {packages.map((pkg, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                      {pkg}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>

                    {/* Documentation */}
                    {result.documentation && result.documentation.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {result.documentation.map((doc, index) => (
                            <a
                              key={index}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                            >
                              <h4 className="font-semibold text-gray-900 mb-2">{doc.title}</h4>
                              <p className="text-sm text-gray-600">{doc.description}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* YouTube Resources */}
                    {result.youtubeResources && result.youtubeResources.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Tutorials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {result.youtubeResources.map((video, index) => (
                            <a
                              key={index}
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                            >
                              <h4 className="font-semibold text-gray-900 mb-1">{video.title}</h4>
                              <p className="text-sm text-blue-600 mb-2">{video.channel}</p>
                              <p className="text-sm text-gray-600">{video.description}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Generate New Project Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setProjectIdea('');
                  setError('');
                }}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
              >
                Generate Another Project
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}