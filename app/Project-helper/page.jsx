"use client";
import React, { useState } from "react";
import {
  Search,
  Loader2,
  CheckCircle,
  AlertCircle,
  Brain,
  Lightbulb,
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Palette,
} from "lucide-react";

export default function ProjectGeneratorApp() {
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectIdea.trim()) return;

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/generate-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectIdea }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to generate project");

      setResult(data);
      setActiveTab("overview");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const projectTypes = [
    { icon: Globe, label: "Web App", example: "E-commerce platform with user authentication" },
    { icon: Smartphone, label: "Mobile App", example: "Fitness tracking app with social features" },
    { icon: Brain, label: "AI/ML Project", example: "Image recognition system for medical diagnosis" },
    { icon: Database, label: "Backend API", example: "RESTful API for inventory management" },
    { icon: Palette, label: "Design System", example: "Component library for enterprise applications" },
    { icon: Cpu, label: "Blockchain", example: "NFT marketplace with smart contracts" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Lightbulb },
    { id: "roadmap", label: "Roadmap", icon: Code },
    { id: "tech", label: "Tech Stack", icon: Cpu },
    { id: "resources", label: "Resources", icon: Database },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Header */}
        <header className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              AI Project Generator
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into actionable project plans with comprehensive tech stacks, roadmaps, and resources.
          </p>
        </header>

        {/* Project Input Form */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-busy={isLoading}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <label
                htmlFor="projectIdea"
                className="block text-lg font-semibold text-gray-900 mb-3 sm:mb-4"
              >
                Describe your project idea
              </label>
              <div className="relative">
                <textarea
                  id="projectIdea"
                  aria-label="Describe your project idea"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                  placeholder="e.g., A task management app with AI-powered priority suggestions..."
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-base sm:text-lg"
                  rows={4}
                  maxLength={1000}
                  disabled={isLoading}
                />
                <div className="absolute bottom-3 right-4 text-xs sm:text-sm text-gray-400">
                  {projectIdea.length}/1000
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !projectIdea.trim()}
                className="mt-4 sm:mt-6 w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    Generating Project Plan...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" aria-hidden="true" />
                    Generate Project Plan
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Project Type Examples */}
          {!result && (
            <section className="mt-6 sm:mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Popular project types
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {projectTypes.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => setProjectIdea(type.example)}
                    className="text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3 mb-1 sm:mb-2">
                      <type.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span className="font-medium text-gray-900">{type.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">
                      {type.example}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div
            className="max-w-4xl mx-auto mb-6 sm:mb-8"
            role="alert"
            aria-live="polite"
          >
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="max-w-6xl mx-auto">
            {/* Success Header */}
            <div
              className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 sm:mb-8 flex items-center gap-3"
              role="status"
              aria-live="polite"
            >
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-green-800 font-medium">
                Project plan generated successfully! Here's your guide.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 overflow-x-auto">
                <nav
                  className="flex min-w-max sm:min-w-0 sm:flex-wrap"
                  role="tablist"
                  aria-label="Project Sections"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium border-b-2 transition-all duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        activeTab === tab.id
                          ? "border-blue-600 text-blue-600 bg-blue-50"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                    >
                      <tab.icon className="w-4 h-4" aria-hidden="true" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6 sm:p-8">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {result.mindMap?.name || "Project Overview"}
                    </h2>
                    {result.mindMap?.children && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {result.mindMap.children.map((component, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {component.name}
                            </h3>
                            {component.children && (
                              <ul className="space-y-2">
                                {component.children.map((subComponent, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="flex items-center gap-2 text-gray-700"
                                  >
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                    {subComponent.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Roadmap Tab */}
                {activeTab === "roadmap" && (
                  <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Development Roadmap
                    </h2>
                    {result.roadmap?.length > 0 ? (
                      <div className="space-y-6">
                        {result.roadmap.map((phase, index) => (
                          <div key={index} className="relative">
                            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    {index + 1}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {phase.phase}
                                  </h3>
                                  <p className="text-gray-700 mb-4">{phase.description}</p>
                                  {phase.tasks && (
                                    <ul className="space-y-2">
                                      {phase.tasks.map((task, taskIndex) => (
                                        <li
                                          key={taskIndex}
                                          className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                            {index < result.roadmap.length - 1 && (
                              <div className="absolute left-4 top-14 w-0.5 h-6 bg-gray-300"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No roadmap data available.</p>
                    )}
                  </div>
                )}

                {/* Tech Stack Tab */}
                {activeTab === "tech" && (
                  <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Technology Stack
                    </h2>
                    {result.techStack && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {Object.entries(result.techStack).map(([category, technologies]) => (
                          <div key={category} className="bg-gray-50 rounded-xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                              {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="space-y-2">
                              {Array.isArray(technologies)
                                ? technologies.map((tech, index) => (
                                    <div
                                      key={index}
                                      className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                                    >
                                      {tech}
                                    </div>
                                  ))
                                : (
                                  <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                                    {technologies}
                                  </div>
                                )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Resources Tab */}
                {activeTab === "resources" && (
                  <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Learning Resources
                    </h2>
                    {/* Documentation */}
                    {result.documentation?.length > 0 && (
                      <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Documentation
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {result.documentation.map((doc, index) => (
                            <a
                              key={index}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                            >
                              <h4 className="font-semibold text-gray-900 mb-1">{doc.title}</h4>
                              <p className="text-sm text-gray-600">{doc.description}</p>
                            </a>
                          ))}
                        </div>
                      </section>
                    )}
                    {/* YouTube */}
                    {result.youtubeResources?.length > 0 && (
                      <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Video Tutorials
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {result.youtubeResources.map((video, index) => (
                            <a
                              key={index}
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                            >
                              <h4 className="font-semibold text-gray-900 mb-1">{video.title}</h4>
                              <p className="text-sm text-blue-600 mb-1">{video.channel}</p>
                              <p className="text-sm text-gray-600">{video.description}</p>
                            </a>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Generate Another Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setProjectIdea("");
                  setError("");
                }}
                className="px-5 sm:px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200 min-h-[44px]"
              >
                Generate Another Project
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
