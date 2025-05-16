"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Downloads() {
  const [darkMode, setDarkMode] = useState(false);
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Load downloaded roadmaps from localStorage on component mount
  useEffect(() => {
    setLoading(true);
    try {
      // Get the dark mode preference
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode) {
        setDarkMode(JSON.parse(savedDarkMode));
      }

      // Check for downloaded roadmaps
      const roadmapData = localStorage.getItem('downloadedRoadmap');

      if (roadmapData) {
        // Get the download timestamp
        const timestamp = localStorage.getItem('downloadTimestamp') || new Date().toISOString();

        // Parse the roadmap data and add it to state with timestamp
        setDownloadedRoadmaps([{
          id: "ai-ml-roadmap",
          title: "AI/ML Engineer Roadmap",
          data: JSON.parse(roadmapData),
          timestamp: timestamp,
          sections: JSON.parse(roadmapData).length
        }]);
      }
    } catch (error) {
      console.error("Error loading downloaded roadmaps:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save dark mode preference when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle deleting a roadmap
  const handleDeleteRoadmap = (id) => {
    if (confirm("Are you sure you want to delete this roadmap?")) {
      // Remove from state
      setDownloadedRoadmaps(downloadedRoadmaps.filter(roadmap => roadmap.id !== id));

      // Remove from localStorage
      localStorage.removeItem('downloadedRoadmap');
      localStorage.removeItem('downloadTimestamp');
    }
  };

  // Handle downloading a roadmap again
  const handleDownloadAgain = (data) => {
    // Store the current timestamp
    const timestamp = new Date().toISOString();
    localStorage.setItem('downloadTimestamp', timestamp);

    // Use the jsPDF and html2canvas to download the PDF again
    // This functionality would be similar to the one in Home.jsx
    alert("Download functionality would be implemented here.");
  };

  // Format timestamp to readable date
  const formatDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return "Unknown date";
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Downloaded Roadmaps</title>
        <meta name="description" content="Your downloaded roadmaps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Downloaded Roadmaps</h1>
        <div className="flex items-center space-x-3">
          {/* Back to Roadmap Button */}
          <Link href="/"
            className={`px-4 py-2 rounded-md ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white transition-colors`}
          >
            Back to Roadmap
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-700"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <div
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Your Downloaded Roadmaps</h2>
          <p className="text-sm md:text-base leading-relaxed">
            View and manage the roadmaps you've downloaded for offline reference. 
            From here, you can download them again or delete them if needed.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* No Roadmaps State */}
        {!loading && downloadedRoadmaps.length === 0 && (
          <div 
            className={`p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md text-center`}
          >
            <svg 
              className={`w-16 h-16 mx-auto mb-4 ${
                darkMode ? "text-gray-600" : "text-gray-400"
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
            <h3 className="text-xl font-medium mb-2">No Downloads Yet</h3>
            <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              You haven't downloaded any roadmaps yet. Go to the roadmap page to download one.
            </p>
            <Link href="/"
              className={`inline-block px-4 py-2 rounded-md ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              Go to Roadmaps
            </Link>
          </div>
        )}

        {/* Roadmap Cards */}
        {!loading && downloadedRoadmaps.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {downloadedRoadmaps.map((roadmap) => (
              <div 
                key={roadmap.id}
                className={`rounded-lg shadow-md overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                {/* Card Header */}
                <div 
                  className={`px-6 py-4 ${
                    darkMode ? "bg-gray-700" : "bg-blue-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{roadmap.title}</h3>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode 
                          ? "bg-blue-600 text-white" 
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {roadmap.sections} Sections
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 py-4">
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Downloaded on:
                    </h4>
                    <p className="text-sm">{formatDate(roadmap.timestamp)}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className={`text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Sections:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.data.slice(0, 5).map((section, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {section.title}
                        </span>
                      ))}
                      {roadmap.data.length > 5 && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          +{roadmap.data.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div 
                  className={`px-6 py-4 flex justify-between items-center border-t ${
                    darkMode ? "border-gray-700" : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => handleDeleteRoadmap(roadmap.id)}
                    className={`px-3 py-1 rounded ${
                      darkMode
                        ? "text-red-400 hover:bg-red-900 hover:bg-opacity-20"
                        : "text-red-600 hover:bg-red-50"
                    } transition-colors`}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-4 h-4 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                        />
                      </svg>
                      Delete
                    </div>
                  </button>

                  <button
                    onClick={() => handleDownloadAgain(roadmap.data)}
                    className={`px-3 py-1 rounded ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white transition-colors flex items-center`}
                  >
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Download Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  );
}