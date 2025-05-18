
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function Downloads() {
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [processingRoadmapId, setProcessingRoadmapId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
      const allKeys = Object.keys(localStorage);
      const roadmapKeys = allKeys.filter(key => key.startsWith('roadmap-'));
      
      const roadmaps = roadmapKeys.map(key => {
        const data = JSON.parse(localStorage.getItem(key));
        return {
          id: key.replace('roadmap-', ''),
          title: data.title || "Untitled Roadmap",
          date: data.date || new Date().toLocaleDateString(),
          content: data.content,
          category: data.category || "Other",
          pdfData: data.pdfData // Store PDF data
        };
      });

      setDownloadedRoadmaps(roadmaps);
    } catch (error) {
      console.error("Error loading roadmaps:", error);
    }
  };

  const openPDF = (roadmap) => {
    if (roadmap.pdfData) {
      const blob = new Blob([atob(roadmap.pdfData)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } else {
      generatePDF(roadmap);
    }
  };

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

      const title = document.createElement('h1');
      title.style.textAlign = "center";
      title.style.marginBottom = "20px";
      title.textContent = roadmap.title;
      downloadDiv.appendChild(title);

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

      const pdfOutput = pdf.output('arraybuffer');
      const base64PDF = btoa(String.fromCharCode(...new Uint8Array(pdfOutput)));

      // Update localStorage with PDF data
      const updatedRoadmap = {
        ...roadmap,
        pdfData: base64PDF
      };
      localStorage.setItem(`roadmap-${roadmap.id}`, JSON.stringify(updatedRoadmap));
      loadDownloadedRoadmaps(); // Reload the list

      // Open PDF
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

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Head>
        <title>Downloads | Your Learning Roadmaps</title>
        <meta name="description" content="Your downloaded roadmaps" />
      </Head>

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
                onClick={() => openPDF(roadmap)}
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
                    className={`w-full py-3 rounded-md ${
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
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Open PDF
                      </>
                    )}
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
