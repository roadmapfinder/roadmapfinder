
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Downloads() {
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
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

  const loadDownloadedRoadmaps = () => {
    try {
      // Get all keys from localStorage
      const allKeys = Object.keys(localStorage);

      // Filter for roadmap keys
      const roadmapKeys = allKeys.filter(key => key.startsWith('roadmap-'));

      const roadmaps = roadmapKeys.map(key => {
        const data = JSON.parse(localStorage.getItem(key));
        return {
          id: key.replace('roadmap-', ''),
          title: data.title || "Untitled Roadmap",
          date: data.date || new Date().toLocaleDateString(),
          category: data.category || "Other",
          pdfPath: data.pdfPath
        };
      });

      setDownloadedRoadmaps(roadmaps);
    } catch (error) {
      console.error("Error loading roadmaps:", error);
    }
  };

  const openPDF = (pdfPath) => {
    if (pdfPath) {
      // Open PDF in new tab
      window.open(pdfPath, '_blank');
    } else {
      console.error('PDF path not found');
      alert('Sorry, the PDF file is not available.');
    }
  };

  const deleteRoadmap = (e, roadmapId) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      localStorage.removeItem(`roadmap-${roadmapId}`);
      setDownloadedRoadmaps(prev => prev.filter(r => r.id !== roadmapId));
    }
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
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('darkMode', JSON.stringify(!darkMode));
            }}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"
            }`}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <button
                      onClick={(e) => deleteRoadmap(e, roadmap.id)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{roadmap.title}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Downloaded: {roadmap.date}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Category: {roadmap.category}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button
                    onClick={() => openPDF(roadmap.pdfPath)}
                    className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Open PDF
                  </button>
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
