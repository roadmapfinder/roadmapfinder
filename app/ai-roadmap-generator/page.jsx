"use client"
import React, { useState } from 'react';
import { Brain, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import RoadmapView from './RoadmapView';
import ProjectsView from './ProjectsView';
import ResourcesView from './ResourcesView';

const AIRoadmapGenerator = () => {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('roadmap');

  const generateRoadmap = async () => {
    if (!query.trim()) {
      setError('Please enter a learning goal or career path');
      return;
    }

    if (query.length > 2000) {
      setError('Query is too long. Maximum 2000 characters.');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const response = await fetch('/api/generate-roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate roadmap');
      }

      const data = await response.json();
      setRoadmap(data);
      setActiveTab('roadmap'); // Switch to roadmap tab after generation
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Error generating roadmap:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateRoadmap();
    }
  };

  const resetRoadmap = () => {
    setRoadmap(null);
    setQuery('');
    setError('');
    setActiveTab('roadmap');
  };

  const tabs = [
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 md:p-3 rounded-xl shadow-lg">
              <Brain className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Roadmap Generator
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Powered by AI • 2025 Edition
              </p>
            </div>
          </div>
          {roadmap && (
            <button
              onClick={resetRoadmap}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm md:text-base font-medium shadow-lg"
            >
              New Roadmap
            </button>
          )}
        </div>

        {/* Input Section */}
        {!roadmap && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="text-purple-600" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  What do you want to learn?
                </h2>
              </div>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Describe your learning goal, career path, or skill you want to master. 
                Our AI will create a personalized roadmap with projects and resources just for you.
              </p>

              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Example: I want to become a full-stack developer specializing in React and Node.js..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-sm md:text-base"
                rows="5"
                disabled={isGenerating}
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-xs md:text-sm text-gray-500">
                  {query.length} / 2000 characters
                </span>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-red-800 font-medium text-sm">Error</p>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              )}

              <button
                onClick={generateRoadmap}
                disabled={isGenerating || !query.trim()}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Generating Your Roadmap...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    <span>Generate AI Roadmap</span>
                  </>
                )}
              </button>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm font-medium mb-2">💡 Pro Tips:</p>
                <ul className="text-blue-700 text-xs md:text-sm space-y-1">
                  <li>• Be specific about your current skill level</li>
                  <li>• Mention any preferred technologies or frameworks</li>
                  <li>• Include your career goals or target role</li>
                  <li>• You'll get a complete roadmap with 9-10 projects and curated resources</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Display with Tabs */}
        {roadmap && (
          <div className="relative">
            {/* Generated Query Display */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
              <div className="flex items-start space-x-3">
                <Sparkles className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Your Learning Goal:</h3>
                  <p className="text-gray-600 text-sm md:text-base">{query}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-2 mb-8 border border-gray-100">
              <div className="flex space-x-2 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-300">
              {activeTab === 'roadmap' && <RoadmapView roadmap={roadmap} />}
              {activeTab === 'projects' && <ProjectsView projects={roadmap.projects} />}
              {activeTab === 'resources' && <ResourcesView resources={roadmap.resources} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRoadmapGenerator;