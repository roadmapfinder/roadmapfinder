
"use client";
import { useState } from "react";
import roadmapData from './roadmapData.json';
import { handleDownloadPDF } from './downloadPdf.js';

export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle PDF download
  const handleDownload = async () => {
    await handleDownloadPDF(roadmapData, setDownloading);
  };

    return (
      <div
        className={`min-h-screen font-sans ${
          darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
      >
        {/* Sticky Navigation Bar */}
        <nav
          className={`sticky top-0 z-10 backdrop-blur-lg ${
            darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"
          } border-b shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 transition-all duration-300`}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center sm:text-left">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Graphic Designing
            </span>
            <span className={`ml-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              Roadmap
            </span>
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide text-white shadow-lg transform transition-all duration-200 ${
                downloading 
                  ? "bg-gray-500 cursor-not-allowed scale-95" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 active:scale-95"
              } flex items-center`}
            >
              {downloading ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="font-medium hidden sm:inline">Generating PDF...</span>
                  <span className="font-medium sm:hidden">PDF...</span>
                </>
              ) : (
                <>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span className="font-medium hidden sm:inline">Download PDF</span>
                  <span className="font-medium sm:hidden">PDF</span>
                </>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 sm:p-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 ${
                darkMode 
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400" 
                  : "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700"
              }`}
            >
              {darkMode ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path 
                    fillRule="evenodd" 
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                    clipRule="evenodd" 
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Graphic Designing
              </span>
              <br />
              <span className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                Roadmap
              </span>
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto px-4`}>
              A comprehensive guide to becoming a Graphic Designing with step-by-step learning path, 
              courses, tools, and project ideas.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className={`h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`}></div>
            </div>
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-6 sm:space-y-8">
            {roadmapData.map((section) => (
              <div
                key={section.id}
                className={`${
                  darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"
                } backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  openSection === section.id ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full p-4 sm:p-6 lg:p-8 text-left flex justify-between items-center ${
                    darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"
                  } transition-all duration-200 group`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0">
                        {section.id}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors truncate">
                        {section.title}
                      </h3>
                    </div>
                    <p className={`text-sm sm:text-base lg:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} ml-9 sm:ml-12 pr-4`}>
                      {section.description}
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0">
                    {openSection === section.id ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Section Content */}
                {openSection === section.id && (
                  <div className={`px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} border-t`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
                      {/* What to Learn */}
                      <div className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-green-900/20 border-green-500/20" : "bg-green-50/80 border-green-200/50"} border`}>
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-600 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">✅</span>
                          What to Learn
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {section.content?.whatToLearn?.map((item, index) => (
                            <li key={index} className={`${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`}>
                              <span className="text-green-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                              <span className="font-medium">{item}</span>
                            </li>
                          )) || []}
                        </ul>
                      </div>

                      {/* Tools to Use */}
                      <div className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-orange-900/20 border-orange-500/20" : "bg-orange-50/80 border-orange-200/50"} border`}>
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-600 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🧰</span>
                          Tools to Use
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {section.content?.toolsToUse?.map((tool, index) => (
                            <li key={index} className={`${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`}>
                              <span className="text-orange-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                              <span className="font-medium">{tool}</span>
                            </li>
                          )) || []}
                        </ul>
                      </div>

                      {/* Best Courses */}
                      <div className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-blue-900/20 border-blue-500/20" : "bg-blue-50/80 border-blue-200/50"} border`}>
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📚</span>
                          Best Courses
                        </h4>
                        <div className="space-y-4 sm:space-y-5">
                          <div>
                            <h5 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">In English:</h5>
                            <ul className="space-y-1 sm:space-y-2">
                              {section.content?.bestCourses?.english?.map((course, index) => (
                                <li key={index} className={`text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`}>
                                  <span className="text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                                  <span className="font-medium">{course}</span>
                                </li>
                              )) || []}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">In Hindi:</h5>
                            <ul className="space-y-1 sm:space-y-2">
                              {section.content?.bestCourses?.hindi?.map((course, index) => (
                                <li key={index} className={`text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`}>
                                  <span className="text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                                  <span className="font-medium">{course}</span>
                                </li>
                              )) || []}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Docs & Websites */}
                      <div className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-red-900/20 border-red-500/20" : "bg-red-50/80 border-red-200/50"} border`}>
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📘</span>
                          Docs & Websites
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {section.content?.docsAndWebsites?.map((doc, index) => (
                            <li key={index} className={`${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`}>
                              <span className="text-red-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                              <span className="font-medium">{doc}</span>
                            </li>
                          )) || []}
                        </ul>
                      </div>
                    </div>

                    {/* Project Ideas */}
                    <div className="mt-6 sm:mt-8">
                      <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-600 flex items-center">
                        <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">💡</span>
                        Project Ideas
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {section.content?.projectIdeas?.map((project, index) => (
                          <div key={index} className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-purple-900/20 border-purple-500/20" : "bg-purple-50/80 border-purple-200/50"} border transition-all duration-200 hover:shadow-lg hover:scale-105`}>
                            <div className="flex items-start">
                              <span className="text-purple-500 mr-3 sm:mr-4 mt-1 text-lg sm:text-xl flex-shrink-0">💡</span>
                              <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-medium text-sm sm:text-base leading-relaxed`}>
                                {project}
                              </span>
                            </div>
                          </div>
                        )) || []}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {roadmapData.length === 0 && (
            <div className="text-center py-16 sm:py-20">
              <div className={`p-8 sm:p-12 rounded-xl sm:rounded-2xl ${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm shadow-2xl border max-w-2xl mx-auto`}>
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📚</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  No Roadmap Data Available
                </h3>
                <p className={`text-base sm:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Add your roadmap data to get started with your Graphic Designing journey.
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 sm:mt-20 text-center">
            <div className={`p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl ${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm shadow-2xl border`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h3>
              <p className={`text-base sm:text-lg lg:text-xl font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} mb-6 sm:mb-8 max-w-2xl mx-auto px-4`}>
                Remember: Consistency is key. Start with the fundamentals and build your way up!
              </p>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold text-white shadow-2xl transform transition-all duration-300 ${
                  downloading 
                    ? "bg-gray-500 cursor-not-allowed scale-95" 
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:shadow-3xl hover:scale-105 active:scale-95"
                }`}
              >
                {downloading ? "Generating PDF..." : "Download Complete Roadmap"}
              </button>
            </div>
          </footer>
        </main>
      </div>
    );
  }