import React from 'react';

export default function UXUIRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "User-Centered Design & Research", 
          category: "Core Principles",
          details: "UCD principles, empathy mapping, personas, scenarios, journey maps, and service design thinking"
        },
        { 
          step: "Step - 2", 
          topic: "Research Methods", 
          category: "User Research",
          details: "Interviews, surveys, usability tests, A/B testing, heatmaps, eye tracking, ethnographic studies"
        },
        { 
          step: "Step - 3", 
          topic: "Visual Design & UI Fundamentals", 
          category: "Visual Foundation",
          details: "Visual hierarchy, typography, color theory, layout, grids, and iconography"
        },
        { 
          step: "Step - 4", 
          topic: "Interactive Prototypes", 
          category: "Interaction Design",
          details: "Microinteractions, animations, gesture-based navigation, and feedback cues"
        },
        { 
          step: "Step - 5", 
          topic: "Tool Proficiency", 
          category: "Design Tools",
          details: "Figma, Sketch, Adobe XD, InVision, Axure, ProtoPie, Framer for prototyping"
        },
        { 
          step: "Step - 6", 
          topic: "Accessibility & Inclusive Design", 
          category: "Inclusive Design",
          details: "WCAG standards, color contrast, screen readers, keyboard navigation, diverse abilities"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Thinking & Execution",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Data-Driven Design & Analytics", 
          category: "Analytics",
          details: "A/B testing, engagement metrics, Google Analytics, Mixpanel, Maze, Hotjar"
        },
        { 
          step: "Step - 8", 
          topic: "Data Visualization & Insights", 
          category: "Communication",
          details: "Visualize and communicate insights from data clearly to stakeholders"
        },
        { 
          step: "Step - 9", 
          topic: "Interaction Design & Microinteractions", 
          category: "Micro UX",
          details: "Hover states, loading cues, form feedback, delightful user interactions"
        },
        { 
          step: "Step - 10", 
          topic: "Design Systems & Consistency", 
          category: "Scalability",
          details: "Atomic design, Figma Libraries, Storybook, scalable design consistency"
        },
        { 
          step: "Step - 11", 
          topic: "Front-End Collaboration", 
          category: "Development",
          details: "HTML, CSS, JavaScript basics, React, Vue, Git for effective collaboration"
        },
        { 
          step: "Step - 12", 
          topic: "No-Code Tools & Prototyping", 
          category: "Rapid Prototyping",
          details: "Webflow, Framer, Bravo Studio for prototyping and streamlined handoff"
        },
        { 
          step: "Step - 13", 
          topic: "UX Writing & Content Strategy", 
          category: "Content Design",
          details: "Clear microcopy, onboarding flows, error messages, tooltips, empathetic writing"
        },
        { 
          step: "Step - 14", 
          topic: "Agile & Collaboration", 
          category: "Process",
          details: "Agile/Scrum environments, Jira, Trello, stakeholder alignment"
        },
        { 
          step: "Step - 15", 
          topic: "Communication & Soft Skills", 
          category: "Leadership",
          details: "Storytelling, stakeholder alignment, feedback literacy, presentation skills"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Future Technologies",
      steps: [
        { 
          step: "Step - 16", 
          topic: "Strategic & Visionary Thinking", 
          category: "Strategy",
          details: "Connect research, UX insights, and business goals for strategic impact"
        },
        { 
          step: "Step - 17", 
          topic: "AI & Generative Design", 
          category: "AI Integration",
          details: "Uizard, Galileo AI, Framer AI for ideation, ethics and trust in AI interfaces"
        },
        { 
          step: "Step - 18", 
          topic: "Voice & Multimodal Interfaces", 
          category: "Voice Design",
          details: "Voice UI, transitions across modalities, Alexa design patterns"
        },
        { 
          step: "Step - 19", 
          topic: "Immersive & 3D UX", 
          category: "AR/VR Design",
          details: "AR/VR design, spatial interaction, usability in immersive environments"
        },
        { 
          step: "Step - 20", 
          topic: "Ethical & Inclusive UX", 
          category: "Ethics",
          details: "Privacy, fairness, bias mitigation, inclusive design considerations"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Career Development",
      steps: [
        { 
          step: "Step - 21", 
          topic: "Portfolio Design", 
          category: "Presentation",
          details: "Interactive portfolios, storytelling, case studies: problem → process → outcome"
        },
        { 
          step: "Step - 22", 
          topic: "Strategic Portfolio Content", 
          category: "Impact Showcase",
          details: "Strategic thinking, UX impact, metrics like engagement lift, retention improvement"
        },
        { 
          step: "Step - 23", 
          topic: "Remote Collaboration Skills", 
          category: "Modern Work",
          details: "Async communication, empathy, feedback, leadership presence in remote settings"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "User Research for Local Business" },
    { level: "Advanced", project: "Design System for SaaS Platform" },
    { level: "Specialization", project: "AI-Powered Mobile App UX" },
    { level: "Professional", project: "Complete UX Strategy & Portfolio" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📊 23 Essential Steps • 🎯 4 Skill Levels • 🚀 Career Ready</span>
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
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential UX/UI Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Design Tools</div>
              <div className="text-purple-100">Figma, Sketch, Adobe XD, Framer</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning</div>
              <div className="text-purple-100">UX Design Institute, Coursera</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Research Tools</div>
              <div className="text-purple-100">Maze, Hotjar, Google Analytics</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Inspiration</div>
              <div className="text-purple-100">Dribbble, Behance, Awwwards</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🎨 Remember: Great UX/UI design comes from understanding users, iterating based on feedback, and continuous learning!
          </p>
        </div>
      </div>
    </main>
  );
}