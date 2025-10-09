"use client"
import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, Globe, ExternalLink, Clock, ThumbsUp, Eye, Calendar, Download, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function ResourceFinder() {
  const [courseQuery, setCourseQuery] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [formats, setFormats] = useState({
    latestVideo: false,
    documentation: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [selectedDocumentation, setSelectedDocumentation] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const handleFormatChange = (format) => {
    setFormats(prev => ({
      ...prev,
      [format]: !prev[format]
    }));
  };

  const handleFetchCourse = async () => {
    if (!courseQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setResults(null);
    setSelectedDocumentation(null);

    try {
      const response = await fetch('/api/fetched-resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: courseQuery,
          language,
          formats
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch resources');
      }

      setResults(data);
      // Scroll to results smoothly
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching resources:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetchCourse();
    }
  };

  const toggleCardExpansion = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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

  const DocumentationViewer = ({ documentation, video }) => {
    const parseDocumentation = (doc) => {
      const sections = [];
      const lines = doc.split('\n');
      let currentSection = { title: '', content: [] };

      lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        if (trimmed.startsWith('## ')) {
          if (currentSection.title) sections.push(currentSection);
          currentSection = { title: trimmed.replace('## ', ''), content: [], type: 'main' };
        }
        else if (trimmed.startsWith('### ')) {
          currentSection.content.push({ type: 'subheader', text: trimmed.replace('### ', '') });
        }
        else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          currentSection.content.push({ type: 'bullet', text: trimmed.substring(2) });
        }
        else if (/^\d+\./.test(trimmed)) {
          currentSection.content.push({ type: 'numbered', text: trimmed });
        }
        else {
          currentSection.content.push({ type: 'text', text: trimmed });
        }
      });

      if (currentSection.title) sections.push(currentSection);
      return sections;
    };

    const sections = parseDocumentation(documentation);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 sm:p-6 flex justify-between items-start sticky top-0 z-10">
            <div className="flex-1 pr-4">
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">{video.title}</h2>
              <p className="text-purple-100 text-xs sm:text-sm line-clamp-1">{video.channelTitle}</p>
            </div>
            <button 
              onClick={() => setSelectedDocumentation(null)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1.5 sm:p-2 transition-all flex-shrink-0"
              aria-label="Close documentation"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-1">
            <article className="prose prose-sm sm:prose-lg max-w-none">
              {sections.map((section, idx) => (
                <div key={idx} className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b-2 border-purple-500 pb-2">
                    {section.title}
                  </h2>

                  {section.content.map((item, itemIdx) => {
                    if (item.type === 'subheader') {
                      return (
                        <h3 key={itemIdx} className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">
                          {item.text}
                        </h3>
                      );
                    } else if (item.type === 'bullet') {
                      return (
                        <li key={itemIdx} className="text-gray-700 text-sm sm:text-base ml-4 sm:ml-6 mb-2">
                          {item.text}
                        </li>
                      );
                    } else if (item.type === 'numbered') {
                      return (
                        <p key={itemIdx} className="text-gray-700 text-sm sm:text-base mb-2 font-medium">
                          {item.text}
                        </p>
                      );
                    } else {
                      return (
                        <p key={itemIdx} className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                          {item.text}
                        </p>
                      );
                    }
                  })}
                </div>
              ))}
            </article>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 sm:p-6 border-t flex flex-col sm:flex-row gap-2 sm:gap-3 sticky bottom-0">
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-red-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-red-700 transition-all"
            >
              Watch Course
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setSelectedDocumentation(null)}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 text-sm sm:text-base font-medium rounded-lg hover:bg-gray-300 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 sm:p-4 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-6 sm:mb-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-8 py-6 sm:py-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <BookOpen className="w-7 h-7 sm:w-10 sm:h-10 text-white flex-shrink-0" />
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                AI Resource Finder
              </h1>
            </div>
            <p className="text-blue-100 text-center text-xs sm:text-base mt-2 px-2">
              Discover the perfect Youtube resources tailored for you
            </p>
          </div>

          {/* Content Section */}
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
                  placeholder="e.g., Python, Machine Learning..."
                  value={courseQuery}
                  onChange={(e) => setCourseQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
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
                  className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 ${
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
                  className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 ${
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

            {/* Format Selection */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FileText className="w-4 h-4" />
                Preferred Format
              </label>
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-start sm:items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 group">
                  <input
                    type="checkbox"
                    checked={formats.latestVideo}
                    onChange={() => handleFormatChange('latestVideo')}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer mt-0.5 sm:mt-0 flex-shrink-0"
                  />
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-gray-700 font-medium flex-1 text-xs sm:text-base">Latest Video Courses</span>
                </label>

                <label className="flex items-start sm:items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:border-purple-300 hover:bg-purple-50 group">
                  <input
                    type="checkbox"
                    checked={formats.documentation}
                    onChange={() => handleFormatChange('documentation')}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer mt-0.5 sm:mt-0 flex-shrink-0"
                  />
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple-500 transition-colors flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium text-xs sm:text-base block">Generate Documentation</span>
                    <span className="text-xs text-gray-500 mt-1 block">AI-powered course structure & content</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Fetch Button */}
            <button
              onClick={handleFetchCourse}
              disabled={!courseQuery.trim() || isLoading}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 active:scale-98 transition-all duration-200 shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-indigo-600 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-xs sm:text-base">{formats.documentation ? 'Generating...' : 'Searching...'}</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Find Resources</span>
                </>
              )}
            </button>

            {/* Helper Text */}
            <p className="text-xs sm:text-sm text-gray-500 text-center px-2">
              Press Enter or click the button to search
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 sm:mb-8">
            <p className="text-red-700 text-xs sm:text-base">{error}</p>
          </div>
        )}

        {/* Results Section */}
        {results && (
          <div id="results-section" className="space-y-4 sm:space-y-6">
            {/* AI Summary */}
            {results.aiSummary && !results.hasDocumentation && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                  AI Course Overview
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">{results.aiSummary}</p>
              </div>
            )}

            {/* Documentation Mode Header */}
            {results.hasDocumentation && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                  Documentation Generated
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  AI-powered course documentation has been created for {results.videos.length} course(s). 
                  Click "View Docs" to see the complete structure and content.
                </p>
              </div>
            )}

            {/* Video Resources */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 px-1">
                <Video className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 flex-shrink-0" />
                <span className="line-clamp-1">Recommended Resources ({results.videos.length})</span>
              </h2>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {results.videos.map((video, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-200 hover:shadow-xl">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-40 sm:h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {formatDuration(video.duration)}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-1">{video.channelTitle}</p>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{formatNumber(video.viewCount)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{formatNumber(video.likeCount)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{new Date(video.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Course Outline */}
                      {video.courseOutline && !results.hasDocumentation && (
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-xs font-semibold text-gray-700">Course Content:</p>
                            <button
                              onClick={() => toggleCardExpansion(index)}
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                              aria-label={expandedCards[index] ? "Show less" : "Show more"}
                            >
                              {expandedCards[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                          <p className={`text-xs text-gray-600 transition-all duration-300 ${expandedCards[index] ? '' : 'line-clamp-2'}`}>
                            {video.courseOutline}
                          </p>
                        </div>
                      )}

                      {/* Documentation Preview */}
                      {results.hasDocumentation && video.documentation && (
                        <div className="bg-purple-50 rounded-lg p-3 mb-4 border border-purple-200">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <p className="text-xs font-semibold text-purple-700">Documentation Available</p>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {video.documentation.substring(0, 120)}...
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-2">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200"
                        >
                          Watch Course
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>

                        {results.hasDocumentation && video.documentation && (
                          <button
                            onClick={() => setSelectedDocumentation({ video, documentation: video.documentation })}
                            className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 sm:flex-initial"
                          >
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                            View Docs
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-6 sm:mt-8 text-center px-2">
          <p className="text-xs sm:text-sm text-gray-600">
            Powered by AI • Curated learning resources from across the web
          </p>
          {results?.responseTime && (
            <p className="text-xs text-gray-500 mt-1">
              Response time: {results.responseTime}
            </p>
          )}
        </div>
      </div>

      {/* Documentation Modal */}
      {selectedDocumentation && (
        <DocumentationViewer 
          documentation={selectedDocumentation.documentation}
          video={selectedDocumentation.video}
        />
      )}
    </div>
  );
}