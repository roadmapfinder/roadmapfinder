import React from 'react';

export default function VideoEditingRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Core Editing Mastery",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Core Editing Software", 
          category: "Essential Tools",
          details: "Master Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve for editing, color grading, and audio post-production"
        },
        { 
          step: "Step - 2", 
          topic: "Advanced Editing Features", 
          category: "Technical Skills",
          details: "Multicam editing, keyframing, masking, and integration with After Effects for professional workflows"
        },
        { 
          step: "Step - 3", 
          topic: "Storytelling & Visual Narrative", 
          category: "Creative Foundation",
          details: "Structure videos with strong beginning-middle-end, pacing for emotion, and effective transitions"
        },
        { 
          step: "Step - 4", 
          topic: "Essential Workflow Skills", 
          category: "Organization",
          details: "Develop organizational habits and time-management for juggling multiple projects efficiently"
        },
      ],
    },
    {
      title: "Visual Polish",
      subtitle: "Graphics & Enhancement",
      steps: [
        { 
          step: "Step - 5", 
          topic: "Motion Graphics & VFX", 
          category: "Visual Effects",
          details: "After Effects, Cinema 4D, and Blender for animated texts, kinetic typography, and 2D/3D overlays"
        },
        { 
          step: "Step - 6", 
          topic: "Color Correction & Grading", 
          category: "Visual Enhancement",
          details: "Grading workflows in DaVinci Resolve, create LUTs for mood, consistency, and cinematic quality"
        },
        { 
          step: "Step - 7", 
          topic: "Sound Design & Audio Mastery", 
          category: "Audio Production",
          details: "Layer audio with music, effects, ambient sound using Adobe Audition for clarity and atmosphere"
        },
      ],
    },
    {
      title: "Emerging Tech",
      subtitle: "AI & Modern Formats",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Short-Form & Vertical Video", 
          category: "Content Formats",
          details: "Optimize for TikTok, Reels, and Shorts with 9:16 ratio, quick storytelling, and punchy visuals"
        },
        { 
          step: "Step - 9", 
          topic: "AI-Powered Editing", 
          category: "AI Integration",
          details: "Runway ML, Adobe Sensei, Pika Labs, Reelmind.ai for auto-detection, subtitles, and smart edits"
        },
        { 
          step: "Step - 10", 
          topic: "Cloud Collaboration", 
          category: "Team Workflows",
          details: "Frame.io, WeVideo, and DaVinci Resolve collaborative features for real-time teamwork"
        },
      ],
    },
    {
      title: "Immersive Media",
      subtitle: "Future Technologies",
      steps: [
        { 
          step: "Step - 11", 
          topic: "360° Video, VR & AR Editing", 
          category: "Immersive Content",
          details: "Mistika VR, Adobe VR options, Unity, and Adobe Aero for immersive editing techniques"
        },
        { 
          step: "Step - 12", 
          topic: "3D Spatial & Interactive Media", 
          category: "Interactive Design",
          details: "Spatial layers, interactive 3D overlays, AR effects, and product demos with advanced platforms"
        },
        { 
          step: "Step - 13", 
          topic: "Ethical AI & Sustainability", 
          category: "Professional Ethics",
          details: "AI ethics, deepfake detection, sustainable workflows, and resource-efficient media practices"
        },
        { 
          step: "Step - 14", 
          topic: "LLM-Enhanced Workflows", 
          category: "Innovation",
          details: "AI-driven storyboard assistance, intelligent scene ordering, and narrative cohesion via language models"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Career Development",
      steps: [
        { 
          step: "Step - 15", 
          topic: "Diversify Skillset", 
          category: "Skill Expansion",
          details: "Combine editing with motion design, VFX, audio, 3D (Blender, Unreal Engine), and AI prompting"
        },
        { 
          step: "Step - 16", 
          topic: "Build Impactful Portfolio", 
          category: "Portfolio",
          details: "Showcase case studies across formats: short-form, long-form, immersive, motion graphics, AI-enhanced"
        },
        { 
          step: "Step - 17", 
          topic: "Network & Collaborate", 
          category: "Community",
          details: "Join Reddit, Discord, LinkedIn communities. Share tutorials, collaborate, and learn from pros"
        },
        { 
          step: "Step - 18", 
          topic: "Continuous Learning", 
          category: "Growth",
          details: "Stay updated with software, AI tools, trends. Attend NAB, watch tutorials, follow industry blogs"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Short Documentary Edit" },
    { level: "Visual Polish", project: "Music Video with Motion Graphics" },
    { level: "Emerging Tech", project: "AI-Enhanced Social Media Campaign" },
    { level: "Immersive Media", project: "360° VR Experience" },
    { level: "Professional", project: "Complete Brand Video Series" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-red-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🎥 18 Essential Steps • 🎯 5 Skill Levels • 🚀 Career Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-red-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💡 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential Video Editing Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Editing Software</div>
              <div className="text-red-100">Premiere Pro, Final Cut Pro, DaVinci Resolve</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">VFX & Motion</div>
              <div className="text-red-100">After Effects, Cinema 4D, Blender</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">AI Tools</div>
              <div className="text-red-100">Runway ML, Adobe Sensei, Pika Labs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-red-100">YouTube Creators, NAB Events, Industry Blogs</div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            ⏱️ Learning Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="font-bold text-red-600 mb-2">Months 0-3</div>
              <div className="text-sm text-gray-600">Foundation</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="font-bold text-purple-600 mb-2">Months 3-6</div>
              <div className="text-sm text-gray-600">Visual Polish</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="font-bold text-blue-600 mb-2">Months 6-9</div>
              <div className="text-sm text-gray-600">Emerging Tech</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="font-bold text-green-600 mb-2">Months 9-12+</div>
              <div className="text-sm text-gray-600">Immersive Media</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="font-bold text-orange-600 mb-2">Ongoing</div>
              <div className="text-sm text-gray-600">Professional Growth</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🎬 Remember: Great video editing combines technical mastery with storytelling, creativity, and continuous adaptation to new technologies!
          </p>
        </div>
      </div>
    </main>
  );
}