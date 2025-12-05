
"use client";
import React, { useState } from 'react';
import { Send, Loader2, Sparkles, TrendingUp, Clock } from 'lucide-react';

const Chat = ({ onRoadmapGenerated }) => {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('beginner to advanced');
  const [duration, setDuration] = useState('12-24 months');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const popularTopics = [
    'Full Stack Development',
    'Machine Learning & AI',
    'DevOps Engineering',
    'Blockchain Development',
    'Data Science',
    'Cybersecurity',
    'Cloud Computing (AWS/Azure/GCP)',
    'Mobile App Development'
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const response = await fetch('/api/ai-roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: topic.trim(),
          level,
          duration,
        }),
      });

      // Check if response is HTML (error page) instead of JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an error. Please check your API route configuration.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate roadmap');
      }

      if (data.success && data.roadmap) {
        onRoadmapGenerated(data.roadmap);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Generation error:', err);
      setError(err.message || 'Failed to generate roadmap. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-blue-600 mr-3" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Roadmap Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a personalized, industry-ready learning roadmap powered by AI. 
            From beginner to expert in any tech domain.
          </p>
        </div>

        {/* Main Input Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          {/* Topic Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What do you want to master? 🎯
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., React Development, Machine Learning, Cybersecurity..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-400"
              disabled={isGenerating}
            />
          </div>

          {/* Options Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <TrendingUp size={16} className="inline mr-1" />
                Skill Level
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                disabled={isGenerating}
              >
                <option value="absolute beginner">Absolute Beginner</option>
                <option value="beginner to advanced">Beginner to Advanced</option>
                <option value="intermediate to expert">Intermediate to Expert</option>
                <option value="advanced only">Advanced Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock size={16} className="inline mr-1" />
                Target Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                disabled={isGenerating}
              >
                <option value="3-6 months">3-6 months (Intensive)</option>
                <option value="6-12 months">6-12 months (Standard)</option>
                <option value="12-24 months">12-24 months (Comprehensive)</option>
                <option value="24+ months">24+ months (In-depth)</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
              <p className="font-medium">{error}</p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isGenerating ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Generating Your Roadmap...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Generate Roadmap</span>
              </>
            )}
          </button>
        </div>

        {/* Popular Topics */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🔥 Popular Roadmaps
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTopics.map((popularTopic, index) => (
              <button
                key={index}
                onClick={() => setTopic(popularTopic)}
                disabled={isGenerating}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {popularTopic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
