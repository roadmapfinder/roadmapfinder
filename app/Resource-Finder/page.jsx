"use client"
import React, { useState } from 'react';
import { Search, BookOpen, Video, Globe, ExternalLink, Clock, ThumbsUp, Eye, Calendar, Loader2, Sparkles, CheckCircle } from 'lucide-react';

export default function ResourceFinder() {
  const [courseQuery, setCourseQuery] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [preferLatest, setPreferLatest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchCourse = async () => {
    if (!courseQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/search-resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: courseQuery,
          language,
          preferLatest
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch resource');
      }

      setResult(data);

      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching resource:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetchCourse();
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return 'N/A';
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return duration;

    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    let result = '';
    if (hours) result += `${hours}h `;
    if (minutes) result += `${minutes}m `;
    if (seconds && !hours) result += `${seconds}s`;

    return result.trim() || 'N/A';
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 sm:p-4 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-6 sm:mb-8">
          {/* Header */}
          <div className="bg-blue-600 px-4 sm:px-8 py-6 sm:py-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-white flex-shrink-0" />
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                AI Resource Finder
              </h1>
            </div>
            <p className="text-blue-100 text-center text-xs sm:text-base mt-2 px-2">
              Find the perfect YouTube course, powered by AI
            </p>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
            {/* Search Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to learn?
              </label>
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="e.g., Learn React, Python basics, Machine Learning..."
                  value={courseQuery}
                  onChange={(e) => setCourseQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Globe className="w-4 h-4" />
                Course Language
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <button
                  onClick={() => setLanguage('hindi')}
                  className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl font-medium transition-all ${
                    language === 'hindi'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  {language === 'hindi' && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                  <span className="text-xs sm:text-base">हिंदी Hindi</span>
                </button>
                <button
                  onClick={() => setLanguage('english')}
                  className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl font-medium transition-all ${
                    language === 'english'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  {language === 'english' && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                  <span className="text-xs sm:text-base">English</span>
                </button>
              </div>
            </div>

            {/* Prefer Latest */}
            <label className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all group">
              <input
                type="checkbox"
                checked={preferLatest}
                onChange={() => setPreferLatest(!preferLatest)}
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-gray-700 font-medium text-xs sm:text-base">Prefer Latest Videos</span>
            </label>

            {/* Search Button */}
            <button
              onClick={handleFetchCourse}
              disabled={!courseQuery.trim() || isLoading}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 active:scale-98 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  <span>Finding Best Resource...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Find Best Resource</span>
                </>
              )}
            </button>

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Press Enter or click to find the best course
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 sm:mb-8 flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-red-700 text-xs sm:text-base flex-1">{error}</p>
          </div>
        )}

        {/* Result Section */}
        {result && result.video && (
          <div id="result-section" className="space-y-4 sm:space-y-6">
            {/* AI Summary */}
            {result.aiSummary && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  AI Course Analysis
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {result.aiSummary}
                </p>
              </div>
            )}

            {/* Best Resource Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <h2 className="text-white font-bold text-sm sm:text-base">Best Match for You</h2>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={result.video.thumbnail} 
                  alt={result.video.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDuration(result.video.duration)}
                </div>
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                  TOP PICK
                </div>
                {preferLatest && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    LATEST
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 leading-tight">
                  {result.video.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  {result.video.channelTitle}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-5 pb-5 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{formatNumber(result.video.viewCount)}</span>
                    <span className="text-gray-500">views</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    <span className="font-medium">{formatNumber(result.video.likeCount)}</span>
                    <span className="text-gray-500">likes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">{formatDate(result.video.publishedAt)}</span>
                  </div>
                </div>

                {/* Course Content */}
                {result.courseContent && result.courseContent.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                      What You'll Learn
                    </h4>
                    <div className="space-y-3">
                      {result.courseContent.map((content, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                            {content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Watch Button */}
                <a 
                  href={result.video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-red-700 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Description Preview */}
                {result.video.description && (
                  <div className="mt-5 pt-5 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">About this course:</h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-4 leading-relaxed">
                      {result.video.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {result && !result.video && (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Course Found</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{result.aiSummary}</p>
            <button
              onClick={() => {
                setResult(null);
                setCourseQuery('');
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Try Another Search
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Powered by AI • Finds the best YouTube resource for you
          </p>
          {result?.responseTime && (
            <p className="text-xs text-gray-500 mt-1">
              Found in {result.responseTime}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}