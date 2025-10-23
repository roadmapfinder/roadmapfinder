"use client"
import React, { useState } from 'react';
import { Brain, Sparkles, Loader2, AlertCircle, Target, Rocket, BookOpen, ChevronRight } from 'lucide-react';
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
      setActiveTab('roadmap');
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
    { id: 'roadmap', label: 'Roadmap', icon: Target },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10">
              <Brain className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                AI Roadmap Generator
              </h1>
              
            </div>
          </div>
          {roadmap && (
            <button
              onClick={resetRoadmap}
              className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all text-sm font-medium shadow-lg shadow-slate-900/10"
            >
              New Roadmap
            </button>
          )}
        </div>

        {/* Input Section */}
        {!roadmap && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-slate-700" size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  What do you want to learn?
                </h2>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed">
                Describe your learning goal, career path, or skill you want to master. 
                Our AI will create a personalized roadmap with projects and resources.
              </p>

              <div className="space-y-4">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Example: I want to become a full-stack developer specializing in React and Node.js..."
                  className="w-full p-4 border border-slate-200 rounded-xl focus:border-slate-400 focus:ring-4 focus:ring-slate-100 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                  rows="6"
                  disabled={isGenerating}
                />

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{query.length} / 2000 characters</span>
                </div>
              </div>

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-red-900 font-medium text-sm">Error</p>
                    <p className="text-red-700 text-sm mt-0.5">{error}</p>
                  </div>
                </div>
              )}

              <button
                onClick={generateRoadmap}
                disabled={isGenerating || !query.trim()}
                className="w-full mt-8 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-3"
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

              <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-slate-900 text-sm font-semibold mb-3">💡 Pro Tips</p>
                <ul className="text-slate-600 text-sm space-y-2 leading-relaxed">
                  <li>• Be specific about your current skill level</li>
                  <li>• Mention any preferred technologies or frameworks</li>
                  <li>• Include your career goals or target role</li>
                  <li>• You'll get a complete roadmap with projects and curated resources</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Display with Tabs */}
        {roadmap && (
          <div className="space-y-6">
            {/* Generated Query Display */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-slate-700" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Your Learning Goal</h3>
                  <p className="text-slate-600 leading-relaxed">{query}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2">
              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        activeTab === tab.id
                          ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
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