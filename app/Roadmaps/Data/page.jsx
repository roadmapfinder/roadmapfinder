"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Database, Menu, X, Loader2, HelpCircle } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import {phases} from "./roadmapData"
import FAQ from "./faq"
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DataEngineeringRoadmap = () => {
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
        return <FAQ />;
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
                        Stage {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
                          Stage {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Stage {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Timeline */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📊 Suggested Learning Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🏃‍♂️ Full-Time Learning (12 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 0–2 months: Foundations + SQL + Python + small batch project</li>
                    <li>• 2–5 months: Spark + lakehouse tables + Airflow/Dagster + dbt</li>
                    <li>• 5–8 months: Streaming (Kafka + Flink) + cloud DW integrations</li>
                    <li>• 8–12 months: Advanced system design + governance + portfolio</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">🚶‍♂️ Part-Time Learning (18-24 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extend each stage by 50-75% additional time</li>
                    <li>• Focus on one major project per 3-month period</li>
                    <li>• Join data engineering communities for support</li>
                    <li>• Practice coding challenges on weekends</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Requirements */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🏆 Must-Have Portfolio Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">End-to-end Lakehouse</h3>
                  <p className="text-sm text-gray-600">Ingest → Delta/Iceberg → dbt → BigQuery/Snowflake → BI dashboard</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">Real-time Analytics</h3>
                  <p className="text-sm text-gray-600">Kafka → Flink transforms → Materialize → live dashboard</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">Data Quality & Lineage</h3>
                  <p className="text-sm text-gray-600">Great Expectations validations + lineage metadata + alerting</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">Cost Optimization</h3>
                  <p className="text-sm text-gray-600">Query tuning with before/after performance & cost metrics</p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're Data Engineering Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Data Engineering Mastery Roadmap and are now ready to build enterprise-scale data platforms and work at top tech companies.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎯 Interview & Hiring Checklist</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ 1-3 public projects with runnable code + clear READMEs</li>
                  <li>• ✅ Architecture diagrams + demo videos for each project</li>
                  <li>• ✅ At least one pipeline with automated tests + monitoring</li>
                  <li>• ✅ CV with quantified impact (runtime improvements, cost savings)</li>
                  <li>• ✅ Prepare to whiteboard system designs and explain failure modes</li>
                </ul>
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
            <Database className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Data Engineering <span className="text-blue-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
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
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
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
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Database size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
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
                  ? 'bg-blue-500 text-white'
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
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <HelpCircle size={18} className="mr-2" />
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

export default DataEngineeringRoadmap;