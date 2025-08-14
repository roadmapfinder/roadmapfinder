import React from 'react';

export default function GraphicDesignRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Creative Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Design Principles", 
          category: "Visual Theory",
          details: "Color theory & psychology, typography & font pairing, layout & composition (rule of thirds, grids)"
        },
        { 
          step: "Step - 2", 
          topic: "Visual Hierarchy", 
          category: "Layout Design",
          details: "Balance, contrast & harmony, negative space utilization, visual flow and composition techniques"
        },
        { 
          step: "Step - 3", 
          topic: "Creativity & Concept Development", 
          category: "Ideation Process",
          details: "Brainstorming & mood boards, storyboarding techniques, sketching ideas, concept iteration methods"
        },
        { 
          step: "Step - 4", 
          topic: "Adobe Photoshop", 
          category: "Photo Editing",
          details: "Photo editing, retouching, compositing, layers, masks, filters, digital painting techniques"
        },
        { 
          step: "Step - 5", 
          topic: "Adobe Illustrator", 
          category: "Vector Graphics",
          details: "Vector graphics, logos, icons, pen tool mastery, pathfinder operations, typography tools"
        },
        { 
          step: "Step - 6", 
          topic: "Asset Management", 
          category: "Resource Library",
          details: "Stock libraries (Freepik, Unsplash, Pexels), licensing & copyright basics, asset organization"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Professional Skills",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Brand Identity Design", 
          category: "Branding Systems",
          details: "Logo design, brand identity systems, color palette development, typography hierarchies"
        },
        { 
          step: "Step - 8", 
          topic: "Marketing Materials", 
          category: "Print & Digital",
          details: "Social media creatives, brochures, flyers, posters, infographics, packaging design"
        },
        { 
          step: "Step - 9", 
          topic: "UI/UX Fundamentals", 
          category: "Digital Design",
          details: "Figma/Sketch mastery, web design principles, wireframing, mobile-first design, accessibility"
        },
        { 
          step: "Step - 10", 
          topic: "Motion Graphics", 
          category: "Animation",
          details: "After Effects basics, animated ads, explainer videos, timeline animation, keyframe principles"
        },
        { 
          step: "Step - 11", 
          topic: "Print Production", 
          category: "Technical Knowledge",
          details: "CMYK vs RGB, DPI/PPI resolution, bleed & trim zones, file formats (PDF, EPS, TIFF)"
        },
        { 
          step: "Step - 12", 
          topic: "Client Workflows", 
          category: "Professional Practice",
          details: "Creative briefs, client communication, feedback loops, project management, version control"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Advanced Techniques",
      steps: [
        { 
          step: "Step - 13", 
          topic: "3D Design & Illustration", 
          category: "Dimensional Design",
          details: "Blender basics, isometric illustrations, 3D mockups, Cinema 4D fundamentals, lighting & rendering"
        },
        { 
          step: "Step - 14", 
          topic: "Advanced Motion Design", 
          category: "Complex Animation",
          details: "Advanced After Effects, character animation, complex transitions, motion typography, video editing"
        },
        { 
          step: "Step - 15", 
          topic: "Web Design Integration", 
          category: "Developer Handoff",
          details: "Asset export for developers, responsive design principles, CSS basics, design systems"
        },
        { 
          step: "Step - 16", 
          topic: "Advanced Branding", 
          category: "Brand Strategy",
          details: "Brand strategy development, brand guidelines creation, touchpoint design, brand evolution"
        },
        { 
          step: "Step - 17", 
          topic: "Packaging & Product Design", 
          category: "Physical Design",
          details: "Packaging design, dielines, product mockups, material considerations, production constraints"
        },
        { 
          step: "Step - 18", 
          topic: "Portfolio Development", 
          category: "Career Preparation",
          details: "Portfolio curation, case study creation, process documentation, online presence optimization"
        },
      ],
    },
    {
      title: "Mastery",
      subtitle: "2025 Trends & Innovation",
      steps: [
        { 
          step: "Step - 19", 
          topic: "AI-Assisted Design", 
          category: "Future Technology",
          details: "Midjourney, Adobe Firefly, AI integration workflows, prompt engineering, AI ethics in design"
        },
        { 
          step: "Step - 20", 
          topic: "Sustainable Design", 
          category: "Eco-Conscious Design",
          details: "Eco-friendly branding, sustainable packaging, carbon footprint considerations, green design principles"
        },
        { 
          step: "Step - 21", 
          topic: "AR/VR Design", 
          category: "Immersive Experiences",
          details: "AR-based marketing campaigns, VR interface design, spatial design principles, 3D user experiences"
        },
        { 
          step: "Step - 22", 
          topic: "Design Leadership", 
          category: "Strategic Design",
          details: "Design team management, strategic thinking, design systems at scale, cross-functional collaboration"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Personal Logo & Brand Identity" },
    { level: "Advanced", project: "Complete Social Media Campaign" },
    { level: "Specialization", project: "E-commerce Website Design" },
    { level: "Mastery", project: "AR-Enhanced Brand Experience" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-pink-500 to-rose-600',
      'bg-gradient-to-r from-purple-500 to-indigo-600',
      'bg-gradient-to-r from-orange-500 to-red-600',
      'bg-gradient-to-r from-emerald-500 to-teal-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
        

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🎨 22 Essential Steps • 🚀 4 Skill Levels • 💼 Portfolio Ready</span>
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
                                <stop offset="0%" stopColor="#EC4899" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-pink-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-pink-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-pink-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-pink-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-pink-50 px-2 py-1 rounded">
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
            🎨 Design Practice Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Design Tools Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Design Tools & Software</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Adobe Creative Suite</div>
              <div className="text-pink-100">Photoshop, Illustrator, After Effects, Premiere Pro</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">UI/UX Tools</div>
              <div className="text-pink-100">Figma, Sketch, Adobe XD, InVision</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">3D & Motion</div>
              <div className="text-pink-100">Blender, Cinema 4D, Lottie, Principle</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Stock Resources</div>
              <div className="text-pink-100">Freepik, Unsplash, Pexels, Envato Elements</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Typography</div>
              <div className="text-pink-100">Google Fonts, Adobe Fonts, Font Squirrel</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Color Tools</div>
              <div className="text-pink-100">Coolors.co, Adobe Color, Paletton</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">AI Design</div>
              <div className="text-pink-100">Midjourney, Adobe Firefly, Canva AI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Prototyping</div>
              <div className="text-pink-100">Framer, ProtoPie, Marvel, Zeplin</div>
            </div>
          </div>
        </section>

        {/* Advanced Design Challenges */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Advanced Design Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🏢 Complete Rebrand Project</h3>
              <p className="text-sm text-gray-600 mb-3">Rebrand a famous company with new logo, color palette, typography, and brand guidelines.</p>
              <div className="text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded inline-block">Brand Strategy • Identity • Guidelines</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">📱 Mobile App Design</h3>
              <p className="text-sm text-gray-600 mb-3">Design a complete mobile app with user research, wireframes, prototypes, and final UI.</p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">UI/UX • Prototyping • User Research</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🎬 Animated Explainer Video</h3>
              <p className="text-sm text-gray-600 mb-3">Create a 60-second animated explainer video with motion graphics and sound design.</p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Motion Graphics • Storytelling • Animation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">🌍 Sustainable Packaging</h3>
              <p className="text-sm text-gray-600 mb-3">Design eco-friendly packaging with sustainable materials and environmental messaging.</p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Packaging • Sustainability • Production</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🎨 Remember: Great design solves problems beautifully. Focus on user needs, iterate constantly, and stay curious!
          </p>
        </div>
      </div>
    </main>
  );
}