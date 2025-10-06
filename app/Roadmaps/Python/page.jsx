"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Code } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import {phases} from "./roadmapData"
import Faq from "./faq"
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const PythonRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

 
  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      case 'faq':
        return <Faq />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-green-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-green-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-green-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🐍 Congratulations! You're Python Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've mastered Python development and are now ready to build scalable applications, work with data science, and lead development teams.
              </p>
              <div className="bg-white p-4 rounded-lg border border-green-300 mt-4">
                <h3 className="font-semibold text-green-600 mb-2">🎯 Final Tips to Excel in Python Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Code daily - consistency beats intensity for skill building</li>
                  <li>• Build real projects - practical experience trumps theoretical knowledge</li>
                  <li>• Contribute to open source - Python community values collaboration</li>
                  <li>• Stay updated with PEPs and Python releases for modern practices</li>
                  <li>• Join Python communities (PySlackers, Reddit r/Python) for networking</li>
                </ul>
              </div>
            </div>

            {/* Key Technologies Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">🚀 Essential Python Ecosystem Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🛠️ Development Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• VS Code / PyCharm</li>
                    <li>• Poetry / pip (Package management)</li>
                    <li>• Black + Flake8 (Code formatting)</li>
                    <li>• pytest (Testing framework)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">🌐 Web Development</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Django (Full-stack)</li>
                    <li>• FastAPI (Modern APIs)</li>
                    <li>• Flask (Microservices)</li>
                    <li>• SQLAlchemy (ORM)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">📊 Data & AI</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pandas (Data manipulation)</li>
                    <li>• Scikit-learn (Machine Learning)</li>
                    <li>• TensorFlow / PyTorch</li>
                    <li>• Jupyter Notebooks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Paths Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">💼 Python Developer Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🌐 Backend Developer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: API development, databases</li>
                    <li>• Skills: Django/FastAPI, SQL, cloud</li>
                    <li>• Growth: Senior → Lead Backend</li>
                    <li>• Salary: $75k - $160k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">📊 Data Scientist</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: Data analysis, ML models</li>
                    <li>• Skills: Pandas, scikit-learn, stats</li>
                    <li>• Growth: Senior → Principal Data Scientist</li>
                    <li>• Salary: $90k - $200k+</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">🤖 AI/ML Engineer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus: ML systems, deployment</li>
                    <li>• Skills: TensorFlow, MLOps, cloud</li>
                    <li>• Growth: Senior → Principal ML Engineer</li>
                    <li>• Salary: $100k - $220k+</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Code className="text-green-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Python <span className="text-green-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-green-500 hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
            <button
              onClick={() => {
                setActiveTab('faq');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'faq'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
             Faq
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default PythonRoadmap;