"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  Brain, 
  Send, 
  Loader2, 
  Sparkles, 
  ArrowLeft, 
  MessageSquare,
  Lightbulb,
  Zap,
  Target
} from 'lucide-react';

const ChatInterface = ({ onRoadmapGenerated, onBack }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, loading]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [query]);

  const generateRoadmap = async () => {
    if (!query.trim()) {
      setError('Please enter a skill or topic to learn');
      return;
    }

    if (query.length > 500) {
      setError('Query is too long. Please keep it under 500 characters.');
      return;
    }

    setLoading(true);
    setError('');

    // Add user message to chat
    const userMessage = { role: 'user', content: query, timestamp: new Date() };
    setChatHistory(prev => [...prev, userMessage]);
    const currentQuery = query;
    setQuery('');

    try {
      const response = await fetch('/api/ai-roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: currentQuery
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        // Handle specific error codes
        if (response.status === 429) {
          throw new Error(data.error || 'API quota exceeded. Please wait a minute and try again.');
        }
        if (response.status === 400) {
          throw new Error(data.error || 'Invalid request. Please check your query.');
        }
        throw new Error(data.error || 'Failed to generate roadmap. Please try again.');
      }

      if (!data.roadmap) {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response format from server. Missing roadmap data.');
      }

      // Add success message to chat
      const assistantMessage = {
        role: 'assistant',
        content: `✨ Successfully generated your "${data.roadmap.title}" roadmap! Click the button below to view it.`,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, assistantMessage]);

      // Pass roadmap to parent component
      setTimeout(() => {
        onRoadmapGenerated(data.roadmap);
      }, 500);

    } catch (err) {
      console.error('Generation error:', err);
      const errorMsg = err.message || 'Failed to generate roadmap. Please try again.';
      setError(errorMsg);

      // Add error message to chat
      const errorMessage = {
        role: 'error',
        content: errorMsg,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateRoadmap();
    }
  };

  const exampleQueries = [
    { icon: <Zap size={16} />, text: "Full Stack Web Development", category: "Popular" },
    { icon: <Target size={16} />, text: "Cloud Computing with AWS", category: "Popular" },
    { icon: <Lightbulb size={16} />, text: "Data Science & Machine Learning", category: "Trending" },
    { icon: <Sparkles size={16} />, text: "Cybersecurity Engineer", category: "High Demand" },
    { icon: <Zap size={16} />, text: "DevOps Engineering", category: "Popular" },
    { icon: <Target size={16} />, text: "Mobile App Development (React Native)", category: "Trending" }
  ];

  const handleExampleClick = (exampleText) => {
    setQuery(exampleText);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
                aria-label="Go back"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline font-medium">Back</span>
              </button>
            )}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Brain className="text-white" size={24} />
              </div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                AI Roadmap <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Generator</span>
              </h1>
            </div>
            <div className="w-16 sm:w-20"></div>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
          {chatHistory.length === 0 ? (
            /* Welcome Screen */
            <div className="text-center py-8 md:py-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Sparkles className="text-white" size={40} />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Generate Your Learning Roadmap
              </h2>
              <p className="text-gray-600 mb-8 md:mb-10 text-sm md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
                Describe what you want to learn, and I'll create a comprehensive, step-by-step roadmap tailored to your goals with industry-standard practices.
              </p>

              {/* Example Queries Grid */}
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-500 mb-4 flex items-center justify-center gap-2">
                  <Lightbulb size={16} />
                  Try these examples or create your own
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
                  {exampleQueries.map((example, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleExampleClick(example.text)}
                      className="group relative px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all text-left overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-bl-lg font-medium">
                        {example.category}
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <span className="text-blue-600 mt-0.5 group-hover:scale-110 transition-transform">
                          {example.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                          {example.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Target className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Path</h3>
                  <p className="text-sm text-gray-600">Tailored to your goals and current skill level</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Sparkles className="text-purple-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
                  <p className="text-sm text-gray-600">Latest industry trends and best practices</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Zap className="text-green-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Action-Oriented</h3>
                  <p className="text-sm text-gray-600">Clear steps with practical projects</p>
                </div>
              </div>
            </div>
          ) : (
            /* Chat History */
            <div className="space-y-4 md:space-y-6">
              {chatHistory.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                        : message.role === 'error'
                        ? 'bg-red-50 text-red-700 border-2 border-red-200'
                        : 'bg-white text-gray-800 shadow-md border border-gray-200'
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {loading && (
                <div className="flex justify-start animate-slide-up">
                  <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Loader2 size={20} className="animate-spin text-blue-600" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Generating your roadmap...</span>
                        <span className="text-xs text-gray-500">This may take a few seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 shadow-2xl sticky bottom-0">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg animate-shake">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="E.g., 'Machine Learning Engineer', 'Frontend Development', 'Blockchain Development'..."
                rows={1}
                disabled={loading}
                maxLength={500}
                className="w-full px-4 py-3 md:py-4 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed text-sm md:text-base transition-all"
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
              <MessageSquare className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={20} />
              {query.length > 400 && (
                <span className="absolute right-4 bottom-2 text-xs text-gray-400">
                  {query.length}/500
                </span>
              )}
            </div>

            <button
              onClick={generateRoadmap}
              disabled={loading || !query.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white p-3 md:p-4 rounded-xl transition-all flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none group"
              aria-label="Generate roadmap"
            >
              {loading ? (
                <Loader2 size={22} className="animate-spin" />
              ) : (
                <Send size={22} className="group-hover:translate-x-0.5 transition-transform" />
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Powered by Google Gemini AI • Free and unlimited roadmaps
          </p>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;