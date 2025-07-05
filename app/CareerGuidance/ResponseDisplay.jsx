"use client"
import { useState } from 'react';
import { downloadRoadmapPDF, downloadQuickSummaryPDF } from './pdfGenerator'; // Adjust path as needed

export default function ResponseDisplay({ response = "Sample response content...", responseRef }) {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

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

      if (type === 'summary') {
        await downloadQuickSummaryPDF(sections, 'Career_Roadmap_Summary.pdf');
        setDownloadSuccess('Summary PDF downloaded successfully!');
      } else {
        await downloadRoadmapPDF(sections, 'Career_Roadmap_Complete.pdf');
        setDownloadSuccess('Complete roadmap PDF downloaded successfully!');
      }

      setTimeout(() => setDownloadSuccess(''), 3000);
    } catch (error) {
      console.error('PDF download error:', error);
      setDownloadError('Failed to generate PDF. Please try again.');
      setTimeout(() => setDownloadError(''), 5000);
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Enhanced parsing with better section detection
  const parseResponse = (text) => {
    if (!text || typeof text !== 'string') {
      return {
        context: 'This is your assumed context and profile analysis...',
        skillGap: 'Skill gap analysis will appear here...',
        roadmap: 'Your 0-12 month strategic plan...',
        techStack: 'Recommended technology stack for 2025...',
        resources: 'Curated learning resources and materials...',
        projects: 'Real projects to build for your portfolio...',
        career: 'Career progression path and salary insights...',
        mentorship: 'Bonus mentorship tips and guidance...'
      };
    }

    const sections = {
      context: '',
      skillGap: '',
      roadmap: '',
      techStack: '',
      resources: '',
      projects: '',
      career: '',
      mentorship: ''
    };

    const lines = text.split('\n');
    let currentSection = '';
    let content = [];

    // Enhanced section detection patterns
    const sectionPatterns = {
      context: /(?:assumed.*context|current.*profile|profile.*analysis)/i,
      skillGap: /(?:skill.*gap|gap.*analysis|positioning.*analysis)/i,
      roadmap: /(?:strategic.*plan|month.*plan|roadmap|timeline)/i,
      techStack: /(?:tech.*stack|technology.*stack|tools.*frameworks)/i,
      resources: /(?:learning.*resources|curated.*resources|resources)/i,
      projects: /(?:real.*projects|portfolio.*projects|proof.*work)/i,
      career: /(?:career.*track|salary|progression|hiring)/i,
      mentorship: /(?:bonus.*mentorship|mentorship|tips|guidance)/i
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

  const roadmapSteps = [
    {
      id: 'context',
      number: '0',
      title: 'Assumed Context',
      icon: '🧩',
      description: 'Current profile analysis and inferred goals',
      content: sections.context,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'skillGap',
      number: '1',
      title: 'Skill Gap Analysis',
      icon: '🔍',
      description: 'Skills assessment and market positioning',
      content: sections.skillGap,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'roadmap',
      number: '2',
      title: 'Strategic 0-12 Month Plan',
      icon: '📅',
      description: 'Timeline and milestones for your journey',
      content: sections.roadmap,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'techStack',
      number: '3',
      title: 'Tech Stack 2025',
      icon: '🧰',
      description: 'Modern tools and frameworks to master',
      content: sections.techStack,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'resources',
      number: '4',
      title: 'Curated Resources',
      icon: '📚',
      description: 'Best learning materials and courses',
      content: sections.resources,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'projects',
      number: '5',
      title: 'Portfolio Projects',
      icon: '💼',
      description: 'Real projects to showcase your skills',
      content: sections.projects,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'career',
      number: '6',
      title: 'Career Track & Salary',
      icon: '🚀',
      description: 'Job market insights and earning potential',
      content: sections.career,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'mentorship',
      number: '7',
      title: 'Bonus Mentorship',
      icon: '🧠',
      description: 'Expert tips and common pitfalls',
      content: sections.mentorship,
      color: 'from-red-500 to-red-600'
    }
  ];

  const formatContent = (content) => {
    if (!content || typeof content !== 'string') {
      return (
        <div className="py-4 sm:py-6 text-gray-500 italic text-sm sm:text-base text-center">
          Content will be generated based on your career goals and current skills.
        </div>
      );
    }

    const lines = content.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Bullet points - mobile-friendly spacing
      if (trimmed.match(/^[-•*→▪]\s/)) {
        return (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {trimmed.replace(/^[-•*→▪]\s*/, '')}
            </p>
          </div>
        );
      }

      // Sub-headers - responsive typography
      if (trimmed.endsWith(':') || trimmed.match(/^\*\*.*\*\*$/)) {
        return (
          <div key={index} className="mt-4 sm:mt-6 mb-2 sm:mb-3">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 break-words">
              {trimmed.replace(/\*\*/g, '').replace(/:$/, '')}
            </h4>
          </div>
        );
      }

      // Timeline milestones - mobile-optimized highlighting
      if (trimmed.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 mb-3 sm:mb-4 rounded-r-lg">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium break-words">
              {trimmed}
            </p>
          </div>
        );
      }

      // Tables - mobile-friendly formatting
      if (trimmed.includes('|') && trimmed.split('|').length > 2) {
        const cells = trimmed.split('|').map(cell => cell.trim()).filter(Boolean);
        return (
          <div key={index} className="overflow-x-auto mb-4 sm:mb-6">
            <div className="min-w-full bg-gray-50 rounded-lg p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
                {cells.map((cell, cellIndex) => (
                  <div key={cellIndex} className="bg-white p-2 sm:p-3 rounded border break-words">
                    <span className="font-medium text-gray-700">{cell}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      // Links - touch-friendly
      if (trimmed.includes('http')) {
        return (
          <div key={index} className="mb-3 sm:mb-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-all">
              {trimmed.split(' ').map((word, wordIndex) => {
                if (word.startsWith('http')) {
                  return (
                    <a
                      key={wordIndex}
                      href={word}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline break-all inline-block min-h-[44px] sm:min-h-auto py-1 sm:py-0"
                    >
                      {word}
                    </a>
                  );
                }
                return word + ' ';
              })}
            </p>
          </div>
        );
      }

      // Regular paragraphs - responsive and readable
      return (
        <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
          {trimmed}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div ref={responseRef} className="w-full max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
      {/* Header - Enhanced responsive design */}
      <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Your Career Roadmap
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Personalized guidance for your professional journey
            </p>
          </div>

          {/* Action Buttons - Mobile-first responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:justify-center xl:justify-start">
            {/* PDF Download Buttons */}
            <button
              onClick={() => handleDownloadPDF('full')}
              disabled={isDownloading}
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors text-xs sm:text-sm font-medium min-h-[44px] touch-manipulation"
            >
              <span className="text-sm sm:text-base">📄</span>
              <span className="hidden sm:inline">{isDownloading ? 'Generating...' : 'Download PDF'}</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={() => handleDownloadPDF('summary')}
              disabled={isDownloading}
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400 rounded-lg transition-colors text-xs sm:text-sm font-medium min-h-[44px] touch-manipulation"
            >
              <span className="text-sm sm:text-base">📋</span>
              <span className="hidden sm:inline">{isDownloading ? 'Generating...' : 'Summary PDF'}</span>
              <span className="sm:hidden">Summary</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm min-h-[44px] touch-manipulation"
            >
              <span className="text-sm sm:text-base">{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm min-h-[44px] touch-manipulation"
            >
              <span className="text-sm sm:text-base">🔗</span>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Status Messages - Mobile optimized */}
        {downloadSuccess && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg text-xs sm:text-sm border border-green-200 flex items-center space-x-2">
            <span className="text-green-600 flex-shrink-0">✓</span>
            <span className="break-words">{downloadSuccess}</span>
          </div>
        )}

        {downloadError && (
          <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-lg text-xs sm:text-sm border border-red-200 flex items-center space-x-2">
            <span className="text-red-600 flex-shrink-0">⚠</span>
            <span className="break-words">{downloadError}</span>
          </div>
        )}
      </div>

      {/* Roadmap Steps - Enhanced responsive layout */}
      <div className="space-y-4 sm:space-y-6">
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connecting line - Hidden on mobile for cleaner look */}
            {index < roadmapSteps.length - 1 && (
              <div className="hidden sm:block absolute left-6 lg:left-8 top-16 lg:top-20 w-0.5 h-6 lg:h-8 bg-gray-200"></div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden">
              {/* Step Header - Mobile-first responsive */}
              <div 
                className="flex items-start sm:items-center justify-between p-4 sm:p-6 lg:p-8 cursor-pointer hover:bg-gray-50/50 transition-colors touch-manipulation"
                onClick={() => toggleSection(step.id)}
              >
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 line-clamp-2 sm:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-2">
                  <span className="text-lg sm:text-xl lg:text-2xl">{step.icon}</span>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 touch-manipulation">
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${expandedSections[step.id] ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Step Content - Enhanced responsive content */}
              {expandedSections[step.id] && (
                <div className="border-t border-gray-100">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                      {formatContent(step.content)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer - Enhanced responsive footer */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <p className="text-center sm:text-left">
            Generated roadmap based on your career goals and current skills
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="flex items-center space-x-1">
              <span>📊</span>
              <span>Analysis Complete</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🎯</span>
              <span>Personalized</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}