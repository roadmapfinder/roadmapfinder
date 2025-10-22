import React from 'react';
import { ChevronDown } from 'lucide-react';

const RoadmapView = ({ roadmap }) => {
  return (
    <div>
      {/* Timeline */}
      <div className="flex flex-col space-y-8 md:space-y-12 mb-12">
        {roadmap.phases?.map((phase, index) => (
          <div key={phase.id} className="relative">
            {/* Connection Line */}
            {index < roadmap.phases.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-1 bg-gradient-to-b from-purple-400 to-blue-400 z-10"></div>
            )}

            {/* Phase Card */}
            <div className="flex flex-col items-center">
              {/* Phase Header */}
              <div className="text-center mb-4 md:mb-6 px-4">
                <div className={`inline-block ${phase.color} text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl mb-3 shadow-lg transform hover:scale-105 transition-transform`}>
                  Phase {phase.id}: {phase.title}
                </div>
                <p className="text-gray-600 text-sm md:text-base font-medium">{phase.subtitle}</p>
                <p className="text-gray-800 font-medium mt-2 text-base md:text-lg">{phase.description}</p>
              </div>

              {/* Phase Content */}
              <div className="w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {phase.sections?.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="bg-white rounded-xl border-2 border-blue-200 p-5 md:p-6 shadow-md hover:shadow-xl transition-all hover:border-purple-300 transform hover:-translate-y-1"
                    >
                      <h3 className="text-blue-600 font-bold text-base md:text-lg mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-sm">
                          {sectionIndex + 1}
                        </span>
                        {section.title}
                      </h3>
                      <ol className="space-y-2.5">
                        {section.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 text-sm md:text-base leading-relaxed flex">
                            <span className="font-bold text-purple-600 mr-2 flex-shrink-0">{itemIndex + 1}.</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Indicators */}
              {index < roadmap.phases.length - 1 && (
                <div className="mt-6 md:mt-8 flex items-center space-x-3 md:space-x-4">
                  <div className="text-purple-600 font-bold text-sm md:text-base">
                    Phase {phase.id}
                  </div>
                  <ChevronDown className="text-purple-500" size={24} />
                  <div className="text-blue-600 font-bold text-sm md:text-base">
                    Phase {phase.id + 1}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Path Data */}
      {roadmap.learningPathData && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-200 shadow-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            📚 Essential Resources & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmap.learningPathData.coreFrameworks?.length > 0 && (
              <div className="bg-white p-5 rounded-xl border-2 border-purple-200 shadow-sm">
                <h3 className="font-bold text-purple-600 mb-3 text-lg">🔧 Core Frameworks</h3>
                <ul className="space-y-2">
                  {roadmap.learningPathData.coreFrameworks.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {roadmap.learningPathData.essentialTools?.length > 0 && (
              <div className="bg-white p-5 rounded-xl border-2 border-blue-200 shadow-sm">
                <h3 className="font-bold text-blue-600 mb-3 text-lg">🛠️ Essential Tools</h3>
                <ul className="space-y-2">
                  {roadmap.learningPathData.essentialTools.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {roadmap.learningPathData.keyTechnologies?.length > 0 && (
              <div className="bg-white p-5 rounded-xl border-2 border-green-200 shadow-sm">
                <h3 className="font-bold text-green-600 mb-3 text-lg">💻 Key Technologies</h3>
                <ul className="space-y-2">
                  {roadmap.learningPathData.keyTechnologies.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {roadmap.learningPathData.certifications?.length > 0 && (
              <div className="bg-white p-5 rounded-xl border-2 border-pink-200 shadow-sm">
                <h3 className="font-bold text-pink-600 mb-3 text-lg">🎓 Certifications</h3>
                <ul className="space-y-2">
                  {roadmap.learningPathData.certifications.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {roadmap.learningPathData.practiceWebsites?.length > 0 && (
              <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-sm">
                <h3 className="font-bold text-indigo-600 mb-3 text-lg">💪 Practice Platforms</h3>
                <ul className="space-y-2">
                  {roadmap.learningPathData.practiceWebsites.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Timeline Section */}
      {roadmap.timelineData?.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-indigo-200 shadow-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            ⏳ Suggested Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.timelineData.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-indigo-600 mb-2">{item.phase}</h3>
                <p className="text-3xl font-bold text-indigo-700 mb-2">{item.months || item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final Tips */}
      {roadmap.finalTips?.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-200 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            🏆 Final Tips for Success
          </h2>
          <p className="text-gray-700 text-center text-lg mb-6">
            Follow these proven strategies to accelerate your learning journey
          </p>
          <div className="bg-white p-6 rounded-xl border-2 border-blue-300 shadow-sm">
            <ul className="space-y-3">
              {roadmap.finalTips.map((tip, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm md:text-base">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapView;