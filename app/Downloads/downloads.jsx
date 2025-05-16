"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function Downloads() {
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if local storage is available
    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

    if (isLocalStorageAvailable) {
      // Load dark mode setting
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      }

      // Load downloaded roadmaps
      try {
        const roadmapData = localStorage.getItem('downloadedRoadmap');
        if (roadmapData) {
          setDownloadedRoadmaps([{
            id: 'ai-ml-roadmap',
            title: 'AI/ML Engineer Roadmap',
            date: new Date().toLocaleDateString(),
            data: JSON.parse(roadmapData)
          }]);
        }
      } catch (error) {
        console.error("Error loading roadmap data:", error);
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  // Navigate back to home
  const goToHome = () => {
    router.push('/Roadmap');
  };

  // Regenerate PDF from stored data
  const regeneratePDF = async (roadmapData) => {
    setRegenerating(true);

    try {
      // Create a temporary div to render the roadmap content
      const downloadDiv = document.createElement('div');
      downloadDiv.className = "roadmap-download-content";

      // Set styles for better PDF output
      downloadDiv.style.padding = "20px";
      downloadDiv.style.color = "black";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily = "Arial, sans-serif";

      // Add title
      const title = document.createElement('h1');
      title.style.textAlign = "center";
      title.style.marginBottom = "20px";
      title.textContent = "AI/ML Engineer Roadmap";
      downloadDiv.appendChild(title);

      // Add roadmap content
      roadmapData.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.style.marginBottom = "30px";

        // Section header
        const header = document.createElement('h2');
        header.style.backgroundColor = "#f0f0f0";
        header.style.padding = "10px";
        header.style.borderRadius = "5px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);

        // Section description
        const desc = document.createElement('p');
        desc.style.marginBottom = "15px";
        desc.style.fontStyle = "italic";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);

        // What to Learn
        const whatToLearn = document.createElement('div');
        whatToLearn.style.marginBottom = "15px";

        const whatToLearnTitle = document.createElement('h3');
        whatToLearnTitle.textContent = "✅ What to Learn";
        whatToLearn.appendChild(whatToLearnTitle);

        const whatToLearnList = document.createElement('ul');
        section.content.whatToLearn.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          whatToLearnList.appendChild(li);
        });
        whatToLearn.appendChild(whatToLearnList);
        sectionDiv.appendChild(whatToLearn);

        // Best Courses
        const bestCourses = document.createElement('div');
        bestCourses.style.marginBottom = "15px";

        const bestCoursesTitle = document.createElement('h3');
        bestCoursesTitle.textContent = "📚 Best Courses";
        bestCourses.appendChild(bestCoursesTitle);

        // English courses
        const englishTitle = document.createElement('h4');
        englishTitle.textContent = "In English:";
        bestCourses.appendChild(englishTitle);

        const englishList = document.createElement('ul');
        section.content.bestCourses.english.forEach(course => {
          const li = document.createElement('li');
          li.textContent = course;
          englishList.appendChild(li);
        });
        bestCourses.appendChild(englishList);

        // Hindi courses
        const hindiTitle = document.createElement('h4');
        hindiTitle.textContent = "In Hindi:";
        bestCourses.appendChild(hindiTitle);

        const hindiList = document.createElement('ul');
        section.content.bestCourses.hindi.forEach(course => {
          const li = document.createElement('li');
          li.textContent = course;
          hindiList.appendChild(li);
        });
        bestCourses.appendChild(hindiList);
        sectionDiv.appendChild(bestCourses);

        // Tools to Use
        const tools = document.createElement('div');
        tools.style.marginBottom = "15px";

        const toolsTitle = document.createElement('h3');
        toolsTitle.textContent = "🧰 Tools to Use";
        tools.appendChild(toolsTitle);

        const toolsList = document.createElement('ul');
        section.content.toolsToUse.forEach(tool => {
          const li = document.createElement('li');
          li.textContent = tool;
          toolsList.appendChild(li);
        });
        tools.appendChild(toolsList);
        sectionDiv.appendChild(tools);

        // Docs & Websites
        const docs = document.createElement('div');
        docs.style.marginBottom = "15px";

        const docsTitle = document.createElement('h3');
        docsTitle.textContent = "📘 Docs & Websites";
        docs.appendChild(docsTitle);

        const docsList = document.createElement('ul');
        section.content.docsAndWebsites.forEach(doc => {
          const li = document.createElement('li');
          li.textContent = doc;
          docsList.appendChild(li);
        });
        docs.appendChild(docsList);
        sectionDiv.appendChild(docs);

        // Project Ideas
        const projects = document.createElement('div');
        projects.style.marginBottom = "15px";

        const projectsTitle = document.createElement('h3');
        projectsTitle.textContent = "💡 Project Ideas";
        projects.appendChild(projectsTitle);

        const projectsList = document.createElement('ul');
        section.content.projectIdeas.forEach(project => {
          const li = document.createElement('li');
          li.textContent = project;
          projectsList.appendChild(li);
        });
        projects.appendChild(projectsList);
        sectionDiv.appendChild(projects);

        downloadDiv.appendChild(sectionDiv);
      });

      // Temporarily add the div to the document to render it
      document.body.appendChild(downloadDiv);

      // Use html2canvas to create an image of the content
      const canvas = await html2canvas(downloadDiv, {
        scale: 1,
        useCORS: true,
        logging: false,
      });

      // Remove the temporary div
      document.body.removeChild(downloadDiv);

      // Create PDF from the canvas
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Calculate the required height based on canvas dimensions to fit the page width
      const imgWidth = 210; // A4 width in mm (210mm)
      const imgHeight = canvas.height * imgWidth / canvas.width;

      // Add image to PDF (first page)
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      );

      // If the content requires multiple pages
      let heightLeft = imgHeight;
      let position = 0;

      // Subtract the height of the first page
      heightLeft -= 297; // A4 height in mm (297mm)

      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL('image/png'),
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= 297;
      }

      // Save the PDF
      pdf.save("AI_ML_Engineer_Roadmap.pdf");
    } catch (error) {
      console.error("Error regenerating PDF:", error);
      alert("There was an error regenerating the PDF. Please try again.");
    } finally {
      setRegenerating(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Downloads | AI/ML Engineer Roadmap</title>
        <meta
          name="description"
          content="Your downloaded roadmaps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Downloads</h1>
        <div className="flex items-center space-x-3">
          {/* Back to Home Button */}
          <button
            onClick={goToHome}
            className={`px-4 py-2 rounded-md ${
              darkMode 
                ? "bg-gray-700 hover:bg-gray-600" 
                : "bg-gray-200 hover:bg-gray-300"
            } transition-colors flex items-center`}
          >
            <svg 
              className="w-4 h-4 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd"
              />
            </svg>
            Back to Roadmap
          </button>

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
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Your Downloaded Resources
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Here you can find all the roadmaps and resources you've downloaded for offline use. 
            Click on any card to reopen the PDF.
          </p>
        </div>

        {/* Downloaded Roadmaps */}
        {downloadedRoadmaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadedRoadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                onClick={() => regeneratePDF(roadmap.data)}
                className={`cursor-pointer rounded-lg shadow-md p-6 flex flex-col transition-transform duration-200 transform hover:scale-105 ${
                  darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4">
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{roadmap.title}</h3>
                <p 
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Downloaded: {roadmap.date}
                </p>
                <div className="mt-auto">
                  <button
                    className={`w-full py-2 rounded-md text-white ${
                      regenerating 
                        ? "bg-gray-500 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700"
                    } transition-colors flex items-center justify-center`}
                    disabled={regenerating}
                  >
                    {regenerating ? (
                      <>
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
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
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg 
                          className="w-4 h-4 mr-2" 
                          fill="currentColor" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5z" />
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
          <div 
            className={`p-10 rounded-lg ${
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
                strokeWidth="2" 
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">No Downloads Yet</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Return to the roadmap page and download a roadmap to see it here.
            </p>
            <button
              onClick={goToHome}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Go Back to Roadmap
            </button>
          </div>
        )}
      </main>

    </div>
  );
}