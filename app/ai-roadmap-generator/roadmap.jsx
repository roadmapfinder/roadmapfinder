"use client"
import React, { useState } from 'react';
import { 
  Brain, 
  Download, 
  ChevronDown, 
  ArrowLeft, 
  Clock,
  BarChart,
  CheckCircle,
  Loader2,
  Share2,
  Bookmark
} from 'lucide-react';

const RoadmapDisplay = ({ roadmapData, onBack, onNewRoadmap }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState(new Set([0])); // First phase expanded by default

  if (!roadmapData || !roadmapData.phases) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Brain className="text-gray-400 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No Roadmap Data</h2>
          <p className="text-gray-500 mb-4">Please generate a roadmap first</p>
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(phaseId)) {
        newSet.delete(phaseId);
      } else {
        newSet.add(phaseId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedPhases(new Set(roadmapData.phases.map(p => p.id)));
  };

  const collapseAll = () => {
    setExpandedPhases(new Set());
  };

  // Calculate total items
  const totalItems = roadmapData.phases.reduce((acc, phase) => {
    return acc + phase.sections.reduce((secAcc, section) => secAcc + section.items.length, 0);
  }, 0);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Create a simple text version for download
      let textContent = `${roadmapData.title}\n`;
      textContent += `${roadmapData.subtitle}\n`;
      textContent += `${'='.repeat(80)}\n\n`;

      roadmapData.phases.forEach((phase, index) => {
        textContent += `PHASE ${phase.id + 1}: ${phase.title.toUpperCase()}\n`;
        textContent += `${phase.subtitle} - ${phase.description}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;

        phase.sections.forEach(section => {
          textContent += `${section.title}\n`;
          section.items.forEach((item, idx) => {
            textContent += `  ${idx + 1}. ${item}\n`;
          });
          textContent += '\n';
        });
        textContent += '\n';
      });

      // Create blob and download
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${roadmapData.title.replace(/\s+/g, '-').toLowerCase()}-roadmap.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download roadmap. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: roadmapData.title,
          text: `Check out this ${roadmapData.title} roadmap!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <button
                onClick={onBack || onNewRoadmap}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
                aria-label="Go back"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline font-medium">Back</span>
              </button>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl">
                <Brain className="text-white" size={28} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                aria-label="Share roadmap"
              >
                <Share2 size={18} />
                <span className="hidden sm:inline text-sm font-medium">Share</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-lg transition-all shadow-md hover:shadow-lg"
                aria-label="Download roadmap"
              >
                {isDownloading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Download size={18} />
                )}
                <span className="text-sm font-medium">
                  {isDownloading ? 'Downloading...' : 'Download'}
                </span>
              </button>
            </div>
          </div>

          {/* Roadmap Title & Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {roadmapData.title}
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              {roadmapData.subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
              {roadmapData.estimatedTime && (
                <div className="flex items-center space-x-2 text-gray-700">
                  <Clock size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">{roadmapData.estimatedTime}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-gray-700">
                <BarChart size={18} className="text-purple-600" />
                <span className="text-sm font-medium">{roadmapData.phases.length} Phases</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle size={18} className="text-green-600" />
                <span className="text-sm font-medium">{totalItems} Learning Items</span>
              </div>
              {roadmapData.difficulty && (
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium capitalize">
                  {roadmapData.difficulty}
                </div>
              )}
            </div>
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={expandAll}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Expand All
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={collapseAll}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {roadmapData.phases.map((phase, index) => {
              const isExpanded = expandedPhases.has(phase.id);

              return (
                <div key={phase.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Connection Line */}
                  {index < roadmapData.phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-1 bg-gradient-to-b from-gray-300 to-gray-200 z-0"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header - Clickable */}
                    <button
                      onClick={() => togglePhase(phase.id)}
                      className="w-full text-center mb-4 md:mb-6 px-4 hover:scale-[1.02] transition-transform cursor-pointer group"
                    >
                      <div className={`inline-block ${phase.color} text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-xl mb-2 shadow-lg group-hover:shadow-xl transition-shadow`}>
                        Phase {phase.id + 1}: {phase.title}
                        <ChevronDown 
                          size={20} 
                          className={`inline-block ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                      {phase.duration && (
                        <p className="text-gray-500 text-xs md:text-sm mt-1">⏱️ {phase.duration}</p>
                      )}
                    </button>

                    {/* Phase Content - Collapsible */}
                    <div
                      className={`w-full max-w-6xl px-4 overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-4">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-xl border-2 border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all group"
                          >
                            <h3 className="text-blue-700 font-bold text-base md:text-lg mb-4 group-hover:text-blue-800 transition-colors">
                              {section.title}
                            </h3>
                            <ol className="space-y-2.5">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed flex items-start">
                                  <span className="font-bold text-gray-900 mr-2 mt-0.5 flex-shrink-0">
                                    {itemIndex + 1}.
                                  </span>
                                  <span className="flex-1">{item}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    {index < roadmapData.phases.length - 1 && isExpanded && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-3 md:space-x-4 animate-bounce-subtle">
                        <div className="text-gray-500 font-semibold text-xs md:text-sm px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                          Phase {phase.id + 1}
                        </div>
                        <ChevronDown className="text-blue-500" size={24} />
                        <div className="text-gray-500 font-semibold text-xs md:text-sm px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                          Phase {phase.id + 2}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 md:mt-16 text-center pb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              This roadmap is your guide. Start with Phase 1 and work your way up!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onNewRoadmap}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Generate Another Roadmap
              </button>
              <button
                onClick={handleDownloadPDF}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Save This Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RoadmapDisplay;