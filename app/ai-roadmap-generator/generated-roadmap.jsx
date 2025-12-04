
"use client";
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, Map, ArrowLeft, Loader2, Share2 } from 'lucide-react';

const GeneratedRoadmap = ({ roadmapData, onBack }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadJSON = () => {
    const dataStr = JSON.stringify(roadmapData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${roadmapData.title.replace(/\s+/g, '_')}_roadmap.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: roadmapData.title,
          text: `Check out this ${roadmapData.title} roadmap!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!roadmapData || !roadmapData.phases) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No roadmap data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <button
            onClick={onBack}
            className="mb-4 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Generate New Roadmap
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                {roadmapData.title}
              </h1>
              {roadmapData.subtitle && (
                <p className="text-gray-600 text-sm md:text-base">
                  {roadmapData.subtitle}
                </p>
              )}
              {roadmapData.totalDuration && (
                <p className="text-blue-600 font-medium mt-1">
                  📅 Estimated Duration: {roadmapData.totalDuration}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Share2 size={18} />
                <span className="hidden md:inline">Share</span>
              </button>
              <button
                onClick={handleDownloadJSON}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download size={18} />
                <span className="hidden md:inline">Download JSON</span>
              </button>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {roadmapData.phases.map((phase, index) => (
              <div key={phase.id || index} className="relative">
                {/* Connection Line */}
                {index < roadmapData.phases.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                )}

                {/* Phase Card */}
                <div className="flex flex-col items-center">
                  {/* Phase Header */}
                  <div className="text-center mb-4 md:mb-6 px-4">
                    <div className={`inline-block ${phase.color || 'bg-blue-500'} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                      Phase {phase.id !== undefined ? phase.id : index}: {phase.title}
                    </div>
                    {phase.subtitle && (
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                    )}
                    {phase.description && (
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">
                        {phase.description}
                      </p>
                    )}
                  </div>

                  {/* Phase Content */}
                  <div className="w-full max-w-6xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                      {phase.sections?.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                            {section.title}
                          </h3>
                          <ol className="space-y-2">
                            {section.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Indicators */}
                  {index < roadmapData.phases.length - 1 && (
                    <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                      <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                        Phase {phase.id !== undefined ? phase.id : index}
                      </div>
                      <ChevronDown className="text-gray-400" size={20} />
                      <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                        Phase {(phase.id !== undefined ? phase.id : index) + 1}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              🎉 Congratulations on Your Learning Journey!
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Follow this roadmap step by step, build projects, and you'll master {roadmapData.title.replace(' Mastery Roadmap', '').replace(' 2025', '')}!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedRoadmap;
