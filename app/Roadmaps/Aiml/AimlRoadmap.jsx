
"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import { downloadRoadmapPDF } from "./downloadPdf";
import roadmapData from "./roadmapData";
import Docs from "./docs";
import Projects from "./projects";
import Faq from "./Faq";

export default function AimlRoadmap({ userId }) {
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState("roadmap");

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadRoadmapPDF(roadmapData.phases, userId);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                AIML Engineer Roadmap
              </h1>
              <p className="text-gray-600">
                Your complete journey from beginner to professional
              </p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              {downloading ? "Downloading..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "roadmap"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => setActiveTab("docs")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "docs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "projects"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "faq"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              FAQ
            </button>
          </div>

          <div className="p-8">
            {activeTab === "roadmap" && (
              <div className="space-y-6">
                {roadmapData.phases?.map((phase, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Phase {phase.id}: {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.sections?.map((section, sidx) => (
                        <div key={sidx} className="bg-white rounded-lg p-4">
                          <h4 className="font-semibold text-blue-600 mb-2">
                            {section.title}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {section.items?.map((item, iidx) => (
                              <li key={iidx} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "docs" && <Docs />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "faq" && <Faq />}
          </div>
        </div>
      </div>
    </div>
  );
}
