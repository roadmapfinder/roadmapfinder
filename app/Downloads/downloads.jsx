"use client";
import { useState, useEffect } from 'react';
import Head from "next/head";
import { useRouter } from "next/navigation";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Downloads() {
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [processingRoadmapId, setProcessingRoadmapId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if local storage is available and load settings
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
      loadDownloadedRoadmaps();
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Load downloaded roadmaps from localStorage
    const loadDownloadedRoadmaps = () => {
      const allKeys = Object.keys(localStorage);
      const roadmapKeys = allKeys.filter(key => key.startsWith('roadmap-'));
      const roadmaps = roadmapKeys.map(key => {
        try {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        } catch (e) {
          console.error('Error parsing roadmap:', e);
          return null;
        }
      }).filter(Boolean);
      setDownloadedRoadmaps(roadmaps);
    };

    loadDownloadedRoadmaps();
  }, []);

  const generatePDF = async (roadmap) => {
    setProcessingRoadmapId(roadmap.id);

    try {
      const downloadDiv = document.createElement('div');
      downloadDiv.className = "roadmap-download-content";
      downloadDiv.style.padding = "20px";
      downloadDiv.style.color = "black";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily = "Arial, sans-serif";
      downloadDiv.style.width = "800px";

      // Add roadmap content
      const title = document.createElement('h1');
      title.style.textAlign = "center";
      title.style.marginBottom = "20px";
      title.textContent = roadmap.title;
      downloadDiv.appendChild(title);

      // Add content sections
      if (roadmap.content) {
        Object.entries(roadmap.content).forEach(([section, content]) => {
          const sectionDiv = document.createElement('div');
          sectionDiv.style.marginBottom = "30px";
          sectionDiv.innerHTML = content;
          downloadDiv.appendChild(sectionDiv);
        });
      }

      document.body.appendChild(downloadDiv);
      const canvas = await html2canvas(downloadDiv, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      document.body.removeChild(downloadDiv);

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.95),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight
      );

      pdf.save(`${roadmap.title.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setProcessingRoadmapId(null);
    }
  };

  const deleteRoadmap = (e, roadmapId) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      localStorage.removeItem(`roadmap-${roadmapId}`);
      setDownloadedRoadmaps(prev => prev.filter(r => r.id !== roadmapId));
    }
  };

  const handleOpenPDF = (roadmap) => {
    // Generate PDF from roadmap data
    generatePDF(roadmap);
  };

  const handleDelete = (id) => {
    const key = `roadmap-${id}`;
    localStorage.removeItem(key);
    setDownloadedRoadmaps(prev => prev.filter(roadmap => roadmap.id !== id));
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Head>
        <title>Downloads | Your Learning Roadmaps</title>
        <meta name="description" content="Your downloaded roadmaps" />
      </Head>

      {/* Header */}
      <nav className={`sticky top-0 z-10 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md px-4 py-4 flex justify-between items-center`}>
        <h1 className="text-xl md:text-2xl font-bold">Downloads</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.push('/Roadmap')}
            className={`px-4 py-2 rounded-md ${
              darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
            } transition-colors`}
          >
            Back to Roadmaps
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : downloadedRoadmaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadedRoadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className={`rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}

              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{roadmap.title}</h2>
                  <p className="text-gray-600 mb-4">Downloaded on: {roadmap.date}</p>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleOpenPDF(roadmap)}
                      className={`px-4 py-2 rounded-md ${
                        processingRoadmapId === roadmap.id
                          ? "bg-gray-400"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white font-medium flex items-center justify-center`}
                      disabled={processingRoadmapId === roadmap.id}
                    >
                      {processingRoadmapId === roadmap.id ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Open PDF"
                      )}
                    </button>
                    <button
                      onClick={(e) => deleteRoadmap(e, roadmap.id)}
                      className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-12 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No Downloads Yet</h3>
            <p>Download a roadmap to see it here</p>
            <button
              onClick={() => router.push('/Roadmap')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Roadmaps
            </button>
          </div>
        )}
      </main>
    </div>
  );
}