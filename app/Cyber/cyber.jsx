
"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Download, Sun, Moon } from "lucide-react";
import { roadmapData } from './data'; // Move data to separate file for better organization

export default function Cyber() {
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

  // Optimized PDF generation
  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);

    try {
      const content = document.getElementById('roadmap-content');
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 1200,
        windowHeight: content.scrollHeight
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = pdfHeight;
      let position = 0;
      let pageHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Cybersecurity_Roadmap.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-10 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md px-4 py-4 flex justify-between items-center`}>
        <h1 className="text-xl md:text-2xl font-bold">Cybersecurity Engineer Roadmap</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-4 py-2 rounded-md text-white ${downloading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} flex items-center`}
          >
            <Download className="w-4 h-4 mr-2" />
            {downloading ? "Processing..." : "Download"}
          </button>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"}`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="roadmap-content" className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <div className={`mb-8 p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Welcome to the Cybersecurity Engineer Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive guide will help you become a proficient Cybersecurity Engineer. Each section contains carefully selected resources in both English and Hindi.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className={`w-8 h-8 rounded-full mr-3 ${darkMode ? "bg-green-600" : "bg-green-500"} text-white font-medium flex items-center justify-center`}>
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openSection === section.id ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {openSection === section.id && (
                <div className={`px-6 pb-6 pt-2 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                  {/* Section content components */}
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">✅</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li key={index} className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Courses */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>Best Courses
                    </h4>
                    <div className="space-y-4">
                      {/* English Courses */}
                      <div>
                        <h5 className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map((course, index) => (
                            <li key={index} className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                              <span className="min-w-4 text-green-500 mr-2">•</span>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5 className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map((course, index) => (
                            <li key={index} className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                              <span className="min-w-4 text-green-500 mr-2">•</span>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools to Use */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🧰</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📘</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.docsAndWebsites.map((resource, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.projectIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
