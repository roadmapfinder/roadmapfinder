"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, HelpCircle } from 'lucide-react';
import { phases} from './roadmapData';
import Docs from './docs';
import Projects from './projects';
import Faq from './faq';
import { downloadRoadmapPDF } from './downloadPdf';

const ExcelMasteryRoadmap = () => {
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

  // Render roadmap timeline component
  const RoadmapTimeline = () => (
    <div className="relative">
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
                  Level {phase.id}: {phase.title}
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
              </div>

              {/* Phase Content */}
              <div className="w-full max-w-5xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  {phase.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
                    Level {phase.id}
                  </div>
                  <ChevronDown className="text-gray-400" size={20} />
                  <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                    Level {phase.id + 1}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Final Message */}
      <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          🎉 Congratulations! You've Mastered Excel!
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          You've completed the Excel Mastery Roadmap and are now ready to tackle real-world Excel challenges. Keep practicing and exploring advanced features to become an Excel expert!
        </p>
      </div>



   
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      case 'faq':
        return <Faq />;
      default:
        return <RoadmapTimeline />;
    }
  };

  const navigationTabs = [
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'documentation', label: 'Documentation', icon: FileText },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Excel <span className="text-purple-600">Mastery Roadmap</span> <span className="text-gray-500 text-lg md:text-xl">(2025)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
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
            className="md:hidden bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
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
            {navigationTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <IconComponent size={18} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ExcelMasteryRoadmap;