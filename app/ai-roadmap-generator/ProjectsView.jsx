import React, { useState } from 'react';
import { Code, Clock, TrendingUp, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsView = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getLevelIcon = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return '🌱';
      case 'intermediate':
        return '🚀';
      case 'advanced':
        return '💎';
      default:
        return '📋';
    }
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
        <Code className="mx-auto text-gray-400 mb-4" size={48} />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Available</h3>
        <p className="text-gray-500">Projects will appear here once the roadmap is generated.</p>
      </div>
    );
  }

  const groupedProjects = projects.reduce((acc, project) => {
    const level = project.level || 'Other';
    if (!acc[level]) acc[level] = [];
    acc[level].push(project);
    return acc;
  }, {});

  const levelOrder = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-200 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          🚀 Project-Based Learning Path
        </h2>
        <p className="text-gray-700 text-center text-base md:text-lg">
          Build {projects.length} real-world projects to master your skills from beginner to industry-ready
        </p>
      </div>

      {/* Projects by Level */}
      {levelOrder.map((level) => {
        const levelProjects = groupedProjects[level];
        if (!levelProjects) return null;

        return (
          <div key={level} className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{getLevelIcon(level)}</span>
              <h3 className="text-2xl font-bold text-gray-800">{level} Projects</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {levelProjects.length} projects
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {levelProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl border-2 border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Project Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-blue-600">#{project.id}</span>
                          <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${getLevelColor(project.level)} ml-4 flex-shrink-0`}>
                        {project.level}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock size={16} className="text-blue-600" />
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code size={16} className="text-purple-600" />
                        <span className="font-medium">{project.skills?.length || 0} Skills</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="p-6">
                    {/* Skills Tags */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <TrendingUp size={16} className="mr-2 text-purple-600" />
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.skills?.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center space-x-2"
                    >
                      <span>{expandedProject === project.id ? 'Hide Details' : 'View Details'}</span>
                      {expandedProject === project.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {expandedProject === project.id && (
                      <div className="mt-6 space-y-4 animate-fadeIn">
                        {/* Features */}
                        {project.features?.length > 0 && (
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
                              <CheckCircle size={18} className="mr-2" />
                              Key Features to Implement
                            </h5>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-700 text-sm flex items-start">
                                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Learning Outcomes */}
                        {project.learningOutcomes?.length > 0 && (
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h5 className="font-semibold text-green-900 mb-3 flex items-center">
                              <TrendingUp size={18} className="mr-2" />
                              What You'll Learn
                            </h5>
                            <ul className="space-y-2">
                              {project.learningOutcomes.map((outcome, idx) => (
                                <li key={idx} className="text-gray-700 text-sm flex items-start">
                                  <span className="text-green-600 mr-2 font-bold">→</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Pro Tips */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-3">💡</span>
          Project Building Tips
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-amber-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Start with beginner projects to build confidence before moving to complex ones</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Deploy each project and add it to your portfolio with live demo links</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Document your code and write README files explaining your project</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Share your projects on GitHub and LinkedIn to showcase your skills</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsView;