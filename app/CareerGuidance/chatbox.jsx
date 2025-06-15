// /components/Chatbox.jsx (Enhanced with usage limits and modern UI)
"use client"
import { useState, useEffect, useRef } from 'react';

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
    // Load usage count from memory (since localStorage isn't available)
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Career Guidance AI
                </h1>
                <p className="text-sm text-gray-600">Get personalized career roadmaps</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(MAX_USAGE)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i < usageCount ? 'bg-indigo-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {usageCount}/{MAX_USAGE} uses
                </span>
              </div>

              {usageCount >= MAX_USAGE && (
                <button
                  onClick={resetUsage}
                  className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Usage Warning */}
        {showUsageWarning && (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-amber-800">Usage Limit Notice</h3>
              <p className="mt-1 text-sm text-amber-700">
                {usageCount >= MAX_USAGE ? 
                  'You have reached the maximum usage limit. Click Reset to continue.' :
                  `You have ${MAX_USAGE - usageCount} query remaining.`
                }
              </p>
            </div>
          </div>
        )}

        {/* Main Chat Interface */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Input Section */}
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              Describe your career goals and current skills
            </label>
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  autoResize();
                }}
                onKeyPress={handleKeyPress}
                placeholder="e.g., I'm a junior developer with JavaScript and React skills. I want to become a senior full-stack developer specializing in modern web technologies..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none min-h-[100px] bg-gray-50/50"
                style={{ height: 'auto' }}
                disabled={usageCount >= MAX_USAGE}
              />
              <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                <span className="text-xs text-gray-400">Ctrl+Enter to send</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-400">{prompt.length}/2000</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-6 bg-gray-50/50">
            <button
              onClick={handleSend}
              disabled={loading || !prompt.trim() || usageCount >= MAX_USAGE}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing your profile...
                </span>
              ) : usageCount >= MAX_USAGE ? (
                'Usage Limit Reached'
              ) : (
                'Generate Career Roadmap ✨'
              )}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-red-800">Something went wrong</h3>
                <p className="mt-1 text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Response Display */}
        {response && (
          <div ref={responseRef} className="mt-6 bg-white rounded-2xl border-2 border-indigo-100 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Your Personalized Career Roadmap</h3>
                  <p className="text-indigo-100 text-sm">AI-generated guidance based on your profile</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="prose prose-gray max-w-none">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                  <pre className="whitespace-pre-wrap text-gray-800 font-sans leading-relaxed text-sm">
                    {response}
                  </pre>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm font-medium">Share Roadmap</span>
                  </button>

                  <button 
                    onClick={() => navigator.clipboard.writeText(response)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Copy</span>
                  </button>
                </div>

                <div className="text-xs text-gray-500">
                  Generated with AI • {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Get personalized career guidance powered by advanced AI
          </p>
          <div className="mt-4 flex items-center justify-center space-x-6 text-xs text-gray-400">
            <span>✨ Intelligent Analysis</span>
            <span>🎯 Personalized Roadmaps</span>
            <span>📚 Free Resources</span>
          </div>
        </div>
      </div>
    </div>
  );
}