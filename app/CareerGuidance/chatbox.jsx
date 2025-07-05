// /components/Chatbox.jsx (Fully Responsive Enhanced Version)
"use client"
import { useState, useEffect, useRef } from 'react';
import ResponseDisplay from './ResponseDisplay';
import { useRouter } from 'next/navigation'; // Importing useRouter


export default function Chatbox() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [usageCount, setUsageCount] = useState(0);
  const [showUsageWarning, setShowUsageWarning] = useState(false);
  const textareaRef = useRef(null);
  const responseRef = useRef(null);
  const router = useRouter(); // Initializing useRouter

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
        // Encode the response data and redirect to results page
        const encodedResponse = encodeURIComponent(data.result);
        const encodedPrompt = encodeURIComponent(prompt);

        router.push(`/CareerGuidance/results?data=${encodedResponse}&prompt=${encodedPrompt}`);

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
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Career AI Coach
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">Your personalized career guidance companion</p>
              </div>
            </div>

            {/* Usage Counter and Reset Button */}
            <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/30">
                <div className="flex space-x-1 sm:space-x-1.5">
                  {[...Array(MAX_USAGE)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                        i < usageCount 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm' 
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  {usageCount}/{MAX_USAGE}
                </span>
              </div>

              {usageCount >= MAX_USAGE && (
                <button
                  onClick={resetUsage}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Usage Warning */}
        {showUsageWarning && (
          <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-amber-800 mb-1">Usage Limit Notice</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
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
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Career AI Assistant</h2>
                <p className="text-blue-100 text-sm">Get personalized career guidance tailored to your goals</p>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What's your career goal?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share your current skills, experience level, and where you want to go. 
                The more specific you are, the better guidance you'll receive.
              </p>
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
                placeholder="Example: I'm a junior developer with 2 years of JavaScript and React experience. I want to become a senior full-stack developer specializing in modern web technologies and leading development teams..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none min-h-[120px] bg-gray-50 placeholder-gray-500 text-gray-700 text-base leading-relaxed"
                style={{ height: 'auto' }}
                disabled={usageCount >= MAX_USAGE}
              />

              <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                <div className="hidden sm:block bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200">
                  Ctrl+Enter to send
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-500 border border-gray-200">
                  {prompt.length}/2000
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <button
                onClick={handleSend}
                disabled={loading || !prompt.trim() || usageCount >= MAX_USAGE}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing your path...
                  </span>
                ) : usageCount >= MAX_USAGE ? (
                  <span>🚫 Usage Limit Reached</span>
                ) : (
                  <span>🚀 Generate My Career Roadmap</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-red-800 mb-1">Something went wrong</h3>
                <p className="text-sm text-red-700 leading-relaxed">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="mt-6 w-full">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    Analyzing your career path...
                  </p>
                  <p className="text-sm text-gray-600">
                    Our AI is crafting a personalized roadmap just for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Example Prompts */}
        {!loading && !error && (
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Need inspiration? Try these examples:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "I want to become a full-stack developer with React and Node.js",
                  "Help me transition from marketing to data science",
                  "I'm a beginner, guide me to become an AI/ML engineer",
                  "I know Python basics, what's next for backend development?"
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setPrompt(example);
                      autoResize();
                    }}
                    className="text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 text-sm text-gray-700 hover:text-blue-700"
                    disabled={loading || usageCount >= MAX_USAGE}
                  >
                    <span className="font-medium">💡 </span>
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              🌟 What makes our career guidance special?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🧠</span>
                </div>
                <span className="font-medium text-gray-700">AI-Powered Analysis</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="font-medium text-gray-700">Personalized Plans</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📚</span>
                </div>
                <span className="font-medium text-gray-700">Learning Resources</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                <span className="font-medium text-gray-700">Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}