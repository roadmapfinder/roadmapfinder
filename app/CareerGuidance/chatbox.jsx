// /components/Chatbox.jsx (Enhanced with better UX and visual appeal)
"use client"
import { useState, useEffect, useRef } from 'react';
import ResponseDisplay from './ResponseDisplay';

export default function Chatbox() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [usageCount, setUsageCount] = useState(0);
  const [showUsageWarning, setShowUsageWarning] = useState(false);
  const textareaRef = useRef(null);
  const responseRef = useRef(null);

  const MAX_USAGE = 3;

  useEffect(() => {
    // Load usage count from session storage
    const stored = sessionStorage?.getItem('career_usage_count');
    if (stored) {
      setUsageCount(parseInt(stored, 10));
    }
  }, []);

  useEffect(() => {
    // Save usage count to session storage
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('career_usage_count', usageCount.toString());
    }
  }, [usageCount]);

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  const handleSend = async () => {
    if (!prompt.trim()) {
      setError('Please enter your career question or current skills');
      return;
    }

    if (usageCount >= MAX_USAGE) {
      setError('You have reached the maximum usage limit of 3 queries. Please refresh the page to reset.');
      return;
    }

    setLoading(true);
    setResponse('');
    setError('');
    setShowUsageWarning(false);

    try {
      console.log('Sending request to API...');

      const res = await fetch('/api/career', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      console.log('Response status:', res.status);

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await res.text();
        console.error('Non-JSON response:', textResponse);

        if (res.status === 404) {
          throw new Error('API route not found. Make sure /app/api/career/route.js exists');
        }

        throw new Error(`Server returned HTML instead of JSON. Status: ${res.status}`);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `HTTP error! status: ${res.status}`);
      }

      if (data.result) {
        setResponse(data.result);
        setUsageCount(prev => prev + 1);
        setPrompt(''); // Clear input after successful response

        // Show usage warning when user has 1 use left
        if (usageCount + 1 >= MAX_USAGE - 1) {
          setShowUsageWarning(true);
        }
      } else {
        setError('No response received from AI');
      }

    } catch (err) {
      console.error('Error details:', err);
      setError(err.message || 'Error contacting AI backend. Please try again.');
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetUsage = () => {
    setUsageCount(0);
    setError('');
    setResponse('');
    setShowUsageWarning(false);
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.removeItem('career_usage_count');
    }
  };

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Career AI Coach
                </h1>
                <p className="text-slate-600 font-medium">Your personalized career guidance companion</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <div className="flex space-x-1.5">
                  {[...Array(MAX_USAGE)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i < usageCount 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm' 
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {usageCount}/{MAX_USAGE}
                </span>
              </div>

              {usageCount >= MAX_USAGE && (
                <button
                  onClick={resetUsage}
                  className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-10">
        {/* Usage Warning */}
        {showUsageWarning && (
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-800">Usage Limit Notice</h3>
                <p className="mt-2 text-amber-700 leading-relaxed">
                  {usageCount >= MAX_USAGE ? 
                    'You have reached the maximum usage limit. Click Reset to continue exploring your career path.' :
                    `You have ${MAX_USAGE - usageCount} query remaining. Make it count!`
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Chat Interface */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          {/* Input Section */}
          <div className="p-8 bg-gradient-to-br from-white/50 to-slate-50/50">
            <div className="mb-6">
              <label className="block text-lg font-bold text-slate-800 mb-2">
                🎯 What's your career aspiration?
              </label>
              <p className="text-slate-600">Share your current skills, experience, and where you want to go</p>
            </div>

            <div className="relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  autoResize();
                }}
                onKeyPress={handleKeyPress}
                placeholder="✨ Example: I'm a junior developer with 2 years of JavaScript and React experience. I want to become a senior full-stack developer specializing in modern web technologies and leading development teams..."
                className="w-full p-6 border-2 border-slate-200/50 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200 resize-none min-h-[140px] bg-white/70 backdrop-blur-sm placeholder-slate-400 text-slate-700 text-lg leading-relaxed shadow-sm"
                style={{ height: 'auto' }}
                disabled={usageCount >= MAX_USAGE}
              />

              <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-500 border border-slate-200/50">
                  Ctrl+Enter to send
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-500 border border-slate-200/50">
                  {prompt.length}/2000
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 bg-gradient-to-br from-slate-50/50 to-white/50 border-t border-slate-200/30">
            <button
              onClick={handleSend}
              disabled={loading || !prompt.trim() || usageCount >= MAX_USAGE}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-5 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:transform-none relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>

              {loading ? (
                <span className="flex items-center justify-center relative z-10">
                  <svg className="animate-spin -ml-1 mr-4 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Crafting your personalized roadmap...
                </span>
              ) : usageCount >= MAX_USAGE ? (
                <span className="relative z-10">🚫 Usage Limit Reached</span>
              ) : (
                <span className="relative z-10">🚀 Generate My Career Roadmap</span>
              )}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-800">Oops! Something went wrong</h3>
                <p className="mt-2 text-red-700 leading-relaxed">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Response Display */}
        {response && (
          <ResponseDisplay 
            response={response} 
            responseRef={responseRef}
          />
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              🌟 Unlock Your Career Potential
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Get AI-powered insights tailored to your unique skills and aspirations
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm font-semibold text-slate-500">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🧠</span>
                <span>Smart Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎯</span>
                <span>Personalized Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span>Learning Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span>Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}