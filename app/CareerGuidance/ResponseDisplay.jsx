"use client"
import { useState } from 'react';
import { downloadRoadmapPDF, downloadQuickSummaryPDF } from './pdfGenerator';

export default function ResponseDisplay({ response = "Sample response content...", responseRef }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('roadmap');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Career Roadmap',
          text: response,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      handleCopy();
    }
  };

  const handleDownloadPDF = async (type = 'full') => {
    setIsDownloading(true);
    setDownloadError('');
    setDownloadSuccess('');

    try {
      const sections = parseResponse(response);
      const currentDate = new Date().toISOString().split('T')[0];
      const fileName = type === 'full' 
        ? `Career_Roadmap_${currentDate}.pdf`
        : `Career_Roadmap_Summary_${currentDate}.pdf`;

      if (type === 'full') {
        await downloadRoadmapPDF(sections, fileName);
        setDownloadSuccess('Full roadmap PDF downloaded successfully! 🎉');
      } else {
        await downloadQuickSummaryPDF(sections, fileName);
        setDownloadSuccess('Summary PDF downloaded successfully! ⚡');
      }

      setTimeout(() => setDownloadSuccess(''), 3000);
    } catch (error) {
      console.error('PDF download error:', error);
      setDownloadError('Failed to download PDF. Please try again.');
      setTimeout(() => setDownloadError(''), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  // Enhanced parsing with better section detection
  const parseResponse = (text) => {
    if (!text || typeof text !== 'string') {
      return {
        skillGap: '',
        roadmap: '',
        techStack: '',
        resources: '',
        projects: '',
        insights: '',
        progression: '',
        networking: ''
      };
    }

    const sections = {
      skillGap: '',
      roadmap: '',
      techStack: '',
      resources: '',
      projects: '',
      insights: '',
      progression: '',
      networking: ''
    };

    const lines = text.split('\n');
    let currentSection = '';
    let content = [];

    // Enhanced section detection patterns
    const sectionPatterns = {
      skillGap: /(?:skill.*gap|gap.*analysis|skills.*needed|competency.*gap)/i,
      roadmap: /(?:learning.*roadmap|roadmap|learning.*path|study.*plan)/i,
      techStack: /(?:technology.*stack|tech.*stack|technologies|tools)/i,
      resources: /(?:resources|learning.*resources|study.*materials|references)/i,
      projects: /(?:projects|recommended.*projects|practice.*projects|portfolio)/i,
      insights: /(?:industry.*insights|market.*trends|industry.*analysis)/i,
      progression: /(?:career.*progression|next.*steps|advancement|growth)/i,
      networking: /(?:networking|professional.*network|connections)/i
    };

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Check for section headers
      let foundSection = false;
      for (const [key, pattern] of Object.entries(sectionPatterns)) {
        if (pattern.test(trimmedLine) && (trimmedLine.includes('#') || trimmedLine.includes('**') || trimmedLine.match(/^\d+\./))) {
          if (currentSection && content.length > 0) {
            sections[currentSection] = content.join('\n');
          }
          currentSection = key;
          content = [];
          foundSection = true;
          break;
        }
      }

      if (!foundSection && currentSection) {
        content.push(trimmedLine);
      }
    });

    // Add the last section
    if (currentSection && content.length > 0) {
      sections[currentSection] = content.join('\n');
    }

    return sections;
  };

  const sections = parseResponse(response);

  const tabData = [
    { id: 'roadmap', label: 'Learning Path', icon: '🗺️', content: sections.roadmap },
    { id: 'skills', label: 'Skills Gap', icon: '🎯', content: sections.skillGap },
    { id: 'tech', label: 'Tech Stack', icon: '💻', content: sections.techStack },
    { id: 'resources', label: 'Resources', icon: '📚', content: sections.resources },
    { id: 'projects', label: 'Projects', icon: '🛠️', content: sections.projects },
    { id: 'career', label: 'Career Path', icon: '📈', content: sections.progression }
  ];

  const formatContent = (content) => {
    if (!content || typeof content !== 'string') {
      return (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-gray-500 italic text-lg mb-2">Content will appear here</p>
          <p className="text-gray-400 text-sm">Based on AI response structure</p>
        </div>
      );
    }

    const lines = content.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Enhanced bullet points with better visual hierarchy
      if (trimmed.match(/^[-•*→▪]\s/)) {
        return (
          <div key={index} className="group flex items-start space-x-3 mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-bold">•</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base group-hover:text-gray-800 transition-colors">
              {trimmed.replace(/^[-•*→▪]\s*/, '')}
            </p>
          </div>
        );
      }

      // Enhanced sub-headers with better styling
      if (trimmed.endsWith(':') || trimmed.match(/^\*\*.*\*\*$/)) {
        return (
          <div key={index} className="mt-8 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">▶</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 flex-1">
                {trimmed.replace(/\*\*/g, '').replace(/:$/, '')}
              </h4>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
        );
      }

      // Enhanced timeline milestones with better visual design
      if (trimmed.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
        const timeMatch = trimmed.match(/(\d+)\s*(month|Month|weeks?|days?)/i);
        const timeValue = timeMatch ? timeMatch[1] : '?';
        const timeUnit = timeMatch ? timeMatch[2].toLowerCase() : 'time';

        return (
          <div key={index} className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-5 rounded-2xl border border-green-200 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {timeValue}{timeUnit.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-green-700 font-semibold text-sm">Milestone</span>
                  <span className="text-green-600 text-xs">Timeline Goal</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-green-300">
              {trimmed}
            </p>
          </div>
        );
      }

      // Enhanced regular paragraphs with better readability
      return (
        <div key={index} className="mb-4 p-3 bg-gray-50/50 rounded-lg border-l-2 border-gray-200 hover:border-blue-300 transition-colors">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {trimmed}
          </p>
        </div>
      );
    }).filter(Boolean);
  };

  const activeTabContent = tabData.find(tab => tab.id === activeTab);

  return (
    <div ref={responseRef} className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header with Action Buttons */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Your Career Roadmap</h2>
            <p className="text-indigo-100">Personalized guidance for your professional journey</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium"
            >
              <span>{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium"
            >
              <span>🔗</span>
              <span>Share</span>
            </button>

            <button
              onClick={() => handleDownloadPDF('summary')}
              disabled={isDownloading}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium disabled:opacity-50"
            >
              <span>⚡</span>
              <span>{isDownloading ? 'Loading...' : 'Quick PDF'}</span>
            </button>

            <button
              onClick={() => handleDownloadPDF('full')}
              disabled={isDownloading}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium disabled:opacity-50"
            >
              <span>📄</span>
              <span>{isDownloading ? 'Loading...' : 'Full PDF'}</span>
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {downloadSuccess && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
            {downloadSuccess}
          </div>
        )}

        {downloadError && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
            {downloadError}
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTabContent ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">{activeTabContent.icon}</span>
              <h3 className="text-2xl font-bold text-gray-800">{activeTabContent.label}</h3>
            </div>

            <div className="space-y-4">
              {formatContent(activeTabContent.content)}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 italic text-lg">No content found for this section</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Generated roadmap based on your career goals and current skills</p>
          <div className="flex items-center space-x-4">
            <span>📊 Analysis Complete</span>
            <span>🎯 Personalized for You</span>
          </div>
        </div>
      </div>
    </div>
  );
}