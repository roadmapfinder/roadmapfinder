"use client"
import { useState, useEffect } from 'react';
import { downloadRoadmapPDF, downloadQuickSummaryPDF } from './pdfGenerator'; // Adjust path as needed

export default function ResponseDisplay({ response = "Sample response content...", responseRef }) {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [roadmapData, setRoadmapData] = useState(null); // Added roadmapData state

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

  // Parse response into graph data when response changes
  useEffect(() => {
    if (response) {
      const graphData = parseResponseToRoadmap(response);
      setRoadmapData(graphData);
    }
  }, [response]);

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
        <div className="py-4 text-gray-500 italic">
          Content will be generated based on your career goals and current skills.
        </div>
      );
    }

    const lines = content.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Bullet points - clean and minimal
      if (trimmed.match(/^[-•*→▪]\s/)) {
        return (
          <div key={index} className="flex items-start space-x-3 mb-3">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              {trimmed.replace(/^[-•*→▪]\s*/, '')}
            </p>
          </div>
        );
      }

      // Sub-headers - clean typography
      if (trimmed.endsWith(':') || trimmed.match(/^\*\*.*\*\*$/)) {
        return (
          <div key={index} className="mt-6 mb-3">
            <h4 className="text-lg font-semibold text-gray-800">
              {trimmed.replace(/\*\*/g, '').replace(/:$/, '')}
            </h4>
          </div>
        );
      }

      // Timeline milestones - subtle highlighting
      if (trimmed.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed font-medium">
              {trimmed}
            </p>
          </div>
        );
      }

      // Regular paragraphs - clean and readable
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    }).filter(Boolean);
  };

   // Dummy function for parseResponseToRoadmap, replace with your actual implementation
   const parseResponseToRoadmap = (response) => {
    // This is where you would parse your AI response
    // and transform it into a graph data structure suitable
    // for a graph visualization library like Cytoscape.js,
    // Vis.js, or similar.
    // For now, let's return some dummy data:

    return {
        nodes: [
            { id: 'start', label: 'Start' },
            { id: 'context', label: 'Context' },
            { id: 'skillGap', label: 'Skill Gap' },
            { id: 'roadmap', label: 'Roadmap' },
            { id: 'end', label: 'End' }
        ],
        edges: [
            { source: 'start', target: 'context' },
            { source: 'context', target: 'skillGap' },
            { source: 'skillGap', target: 'roadmap' },
            { source: 'roadmap', target: 'end' }
        ]
    };
};

  return (
    <div ref={responseRef} className="w-full max-w-4xl mx-auto bg-white">
      {/* Header - Minimal and clean */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Career Roadmap</h1>
            <p className="text-gray-600">Personalized guidance for your professional journey</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* PDF Download Buttons */}
            <div className="relative">
              <button
                onClick={() => handleDownloadPDF('full')}
                disabled={isDownloading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors text-sm font-medium"
              >
                <span className="text-base">📄</span>
                <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => handleDownloadPDF('summary')}
                disabled={isDownloading}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400 rounded-lg transition-colors text-sm font-medium"
              >
                <span className="text-base">📋</span>
                <span>{isDownloading ? 'Generating...' : 'Summary PDF'}</span>
              </button>
            </div>

            {/* Existing buttons */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-sm"
            >
              <span className="text-base">{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-sm"
            >
              <span className="text-base">🔗</span>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {downloadSuccess && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg text-sm border border-green-200 flex items-center space-x-2">
            <span className="text-green-600">✓</span>
            <span>{downloadSuccess}</span>
          </div>
        )}

        {downloadError && (
          <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-lg text-sm border border-red-200 flex items-center space-x-2">
            <span className="text-red-600">⚠</span>
            <span>{downloadError}</span>
          </div>
        )}
      </div>

      {/* Roadmap Steps - Clean step-by-step layout */}
      <div className="space-y-6">
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connecting line */}
            {index < roadmapSteps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-6 bg-gray-200"></div>
            )}

            <div className="bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              {/* Step Header */}
              <div 
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleSection(step.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{step.icon}</span>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${expandedSections[step.id] ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Step Content */}
              {expandedSections[step.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    {formatContent(step.content)}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer - Minimal */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Generated roadmap based on your career goals and current skills</p>
          <div className="flex items-center space-x-4">
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