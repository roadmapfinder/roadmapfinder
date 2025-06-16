import { useState } from 'react';

export default function ResponseDisplay({ response = "Sample response content...", responseRef }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('roadmap');

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

  // Parse structured response into sections
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

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Simplified section detection - removed complex regex patterns
      const lowerLine = trimmedLine.toLowerCase();

      if (lowerLine.includes('skill gap') || lowerLine.includes('skills gap') || trimmedLine.startsWith('1.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'skillGap';
        content = [];
      } else if (lowerLine.includes('learning roadmap') || lowerLine.includes('roadmap') || trimmedLine.startsWith('2.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'roadmap';
        content = [];
      } else if (lowerLine.includes('technology stack') || lowerLine.includes('tech stack') || trimmedLine.startsWith('3.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'techStack';
        content = [];
      } else if (lowerLine.includes('resources') || lowerLine.includes('learning resources') || trimmedLine.startsWith('4.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'resources';
        content = [];
      } else if (lowerLine.includes('project') || trimmedLine.startsWith('5.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'projects';
        content = [];
      } else if (lowerLine.includes('industry insights') || lowerLine.includes('market trends') || trimmedLine.startsWith('6.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'insights';
        content = [];
      } else if (lowerLine.includes('career progression') || lowerLine.includes('progression') || trimmedLine.startsWith('7.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'progression';
        content = [];
      } else if (lowerLine.includes('networking') || trimmedLine.startsWith('8.')) {
        if (currentSection && content.length > 0) {
          sections[currentSection] = content.join('\n');
        }
        currentSection = 'networking';
        content = [];
      } else if (currentSection) {
        content.push(trimmedLine);
      }
    });

    // Don't forget to add the last section
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
      return <p className="text-gray-500 italic">Content will appear here based on AI response structure.</p>;
    }

    const lines = content.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Handle bullet points and lists - simplified detection
      if (trimmed.startsWith('-') || trimmed.startsWith('•') || trimmed.startsWith('*') || 
          trimmed.startsWith('→') || trimmed.startsWith('▪')) {
        return (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3 mb-3 p-2 sm:p-3 bg-blue-50/50 rounded-lg border-l-4 border-blue-300">
            <span className="text-blue-600 font-bold text-sm sm:text-lg mt-0.5">•</span>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{trimmed.replace(/^[-•*→▪]\s*/, '')}</p>
          </div>
        );
      }

      // Handle sub-headers - simplified detection
      if (trimmed.endsWith(':') || (trimmed.includes('**') && trimmed.startsWith('**'))) {
        return (
          <h4 key={index} className="text-base sm:text-lg font-bold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 flex items-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3"></span>
            {trimmed.replace(/\*\*/g, '').replace(/:$/, '')}
          </h4>
        );
      }

      // Handle time-based milestones - simplified detection
      if (trimmed.includes('month') || trimmed.includes('Month')) {
        const monthMatch = trimmed.match(/(\d+)/);
        return (
          <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-xl border border-green-200 mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                {monthMatch && monthMatch[1] ? monthMatch[1] : '?'}M
              </span>
              <h5 className="font-bold text-gray-800 text-sm sm:text-base">Milestone</h5>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{trimmed}</p>
          </div>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          {trimmed}
        </p>
      );
    }).filter(Boolean); // Remove any null elements
  };

  const activeTabContent = tabData.find(tab => tab.id === activeTab);

  return (
    <div ref={responseRef} className="mt-4 sm:mt-8 mx-2 sm:mx-0 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-3 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Your Personalized Career Roadmap</h3>
              <p className="text-blue-100 text-xs sm:text-sm">AI-powered guidance for your professional growth</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button 
              onClick={handleShare}
              className="flex-1 sm:flex-none bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <span className="hidden sm:inline">Share</span>
            </button>
            <button 
              onClick={handleCopy}
              className="flex-1 sm:flex-none bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2 min-w-max ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600 bg-white'
                  : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-sm sm:text-lg">{tab.icon}</span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3 sm:p-6">
        <div className="bg-gray-50/50 rounded-lg sm:rounded-xl p-3 sm:p-6 min-h-64 sm:min-h-96">
          <div className="max-w-none">
            {formatContent(activeTabContent?.content)}
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl">⏱️</span>
              <h4 className="font-bold text-gray-800 text-sm sm:text-base">Start Today</h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Begin with the most critical skills identified in your gap analysis.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              View Priority Skills
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-green-200">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl">📖</span>
              <h4 className="font-bold text-gray-800 text-sm sm:text-base">Learn & Practice</h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Access curated resources and start your first project.</p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              Access Resources
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-purple-200 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl">🤝</span>
              <h4 className="font-bold text-gray-800 text-sm sm:text-base">Connect & Grow</h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Join communities and start building your professional network.</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              Find Communities
            </button>
          </div>
        </div>

        {/* Mobile-Optimized Progress Indicator */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg sm:rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-gray-800 text-sm sm:text-base">Quick Navigation</h4>
            <span className="text-xs sm:text-sm text-gray-500">Tap to switch sections</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-sm sm:text-base">{tab.icon}</span>
                  <span className="text-center leading-tight">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}