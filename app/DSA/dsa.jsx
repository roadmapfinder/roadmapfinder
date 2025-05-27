"use client";
import { useState } from "react";
import Head from "next/head";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// DSA Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description: "Master the programming language of your choice",
    content: {
      whatToLearn: [
        "Syntax and semantics",
        "Variables, data types, and operators",
        "Control structures (if/else, loops)",
        "Functions and methods",
        "Error handling",
        "Basic I/O operations",
      ],
      resources: [
        "C++: 'A Tour of C++' by Bjarne Stroustrup",
        "Java: 'Effective Java' by Joshua Bloch",
        "Python: 'Python Crash Course' by Eric Matthes",
        "JavaScript: 'Eloquent JavaScript' by Marijn Haverbeke",
        "freeCodeCamp Programming Fundamentals course",
      ],
      toolsToUse: [
        "Visual Studio Code",
        "JetBrains IDEs (PyCharm, IntelliJ)",
        "Replit (online editor)",
        "GitHub (version control)",
        "Jupyter Notebooks (for Python)",
      ],
      practiceIdeas: [
        "Implement simple math operations",
        "Create a command-line calculator",
        "Build a simple text-based game",
        "Create a to-do list application",
      ],
    },
  },
  {
    id: 2,
    title: "Basic Data Structures",
    description: "Learn the core building blocks of efficient programs",
    content: {
      whatToLearn: [
        "Arrays and dynamic arrays",
        "Linked Lists (singly, doubly)",
        "Stacks and Queues",
        "Hash Tables",
        "Trees (Binary, BST)",
        "Heaps (Min/Max)",
      ],
      resources: [
        "Introduction to Algorithms by CLRS",
        "Data Structures and Algorithms Made Easy by Narasimha Karumanchi",
        "CS50's Introduction to Computer Science (Harvard)",
        "Visualgo.net - Data Structure Visualizations",
        "GeeksforGeeks Data Structures articles",
      ],
      toolsToUse: [
        "Programming language of choice",
        "VisuAlgo (visualization tool)",
        "Data Structure Visualizations (USFCA)",
        "Algorithm Visualizer",
        "CodePen/CodeSandbox for testing",
      ],
      practiceIdeas: [
        "Implement each data structure from scratch",
        "Create a stack-based calculator",
        "Build a queue simulation",
        "Design a custom hash table",
      ],
    },
  },
  {
    id: 3,
    title: "Basic Algorithms",
    description: "Master fundamental algorithms and problem-solving approaches",
    content: {
      whatToLearn: [
        "Searching algorithms (Linear, Binary)",
        "Sorting algorithms (Bubble, Selection, Insertion, Merge, Quick)",
        "Recursion basics",
        "Time and space complexity (Big O notation)",
        "Problem-solving strategies",
        "Basic algorithm design techniques",
      ],
      resources: [
        "Grokking Algorithms by Aditya Bhargava",
        "Algorithms Illuminated (Part 1) by Tim Roughgarden",
        "MIT 6.006 Introduction to Algorithms",
        "Coursera: Algorithms Specialization (Stanford)",
        "Khan Academy: Algorithms",
      ],
      toolsToUse: [
        "LeetCode (Easy problems)",
        "HackerRank Algorithms track",
        "CLRS solution manual",
        "Algorithm Visualizer tools",
        "Time complexity calculator",
      ],
      practiceIdeas: [
        "Implement all sorting algorithms",
        "Create a binary search function",
        "Solve simple recursion problems",
        "Analyze algorithm complexities",
      ],
    },
  },
  {
    id: 4,
    title: "Advanced Data Structures",
    description: "Expand your toolkit with more complex data structures",
    content: {
      whatToLearn: [
        "Balanced Trees (AVL, Red-Black)",
        "B-Trees and B+ Trees",
        "Graphs (representation, traversal)",
        "Trie",
        "Segment Trees",
        "Disjoint Set Union (DSU)",
      ],
      resources: [
        "Advanced Data Structures by Peter Brass",
        "Competitive Programmer's Handbook by Antti Laaksonen",
        "William Fiset's Data Structures YouTube Series",
        "CP-Algorithms.com",
        "Topcoder tutorials",
      ],
      toolsToUse: [
        "Graph visualization tools",
        "LeetCode Medium problems",
        "Codeforces Div2 problems",
        "Custom test case generators",
        "Benchmarking tools",
      ],
      practiceIdeas: [
        "Implement an AVL tree with rotations",
        "Create a trie for autocomplete",
        "Build a graph with traversal algorithms",
        "Design a segment tree implementation",
      ],
    },
  },
  {
    id: 5,
    title: "Advanced Algorithms",
    description: "Study complex algorithm paradigms for challenging problems",
    content: {
      whatToLearn: [
        "Divide and Conquer",
        "Greedy Algorithms",
        "Dynamic Programming",
        "Graph Algorithms (DFS, BFS, Dijkstra, Floyd-Warshall)",
        "String Algorithms (KMP, Z, Rabin-Karp)",
        "Computational Geometry basics",
      ],
      resources: [
        "Algorithms Illuminated (Parts 2-4) by Tim Roughgarden",
        "Algorithm Design Manual by Steven Skiena",
        "Dynamic Programming for Coding Interviews",
        "Erik Demaine's lectures (MIT)",
        "Tushar Roy's Algorithm videos",
      ],
      toolsToUse: [
        "LeetCode Medium/Hard problems",
        "Codeforces Div1 problems",
        "AtCoder contests",
        "Algorithm visualization platforms",
        "OEIS (for sequence problems)",
      ],
      practiceIdeas: [
        "Solve classic DP problems (knapsack, LCS)",
        "Implement Dijkstra's algorithm",
        "Create string matching algorithms",
        "Solve geometry problems (convex hull)",
      ],
    },
  },
  {
    id: 6,
    title: "Problem Solving Patterns",
    description: "Learn common patterns to tackle algorithmic challenges",
    content: {
      whatToLearn: [
        "Sliding Window technique",
        "Two Pointers approach",
        "Fast and Slow pointers",
        "Merge Intervals",
        "Cyclic Sort",
        "Topological Sort",
        "Binary Search variations",
        "Backtracking",
      ],
      resources: [
        "Grokking the Coding Interview",
        "Element of Programming Interviews",
        "Coding Interview Patterns on Educative.io",
        "NeetCode pattern videos",
        "InterviewCamp.io",
      ],
      toolsToUse: [
        "Pattern classification tools",
        "Problem tags on LeetCode/Codeforces",
        "Spaced repetition software",
        "Personal problem database",
        "Interview preparation websites",
      ],
      practiceIdeas: [
        "Identify patterns in new problems",
        "Solve 5 problems of each pattern",
        "Create a cheat sheet of patterns",
        "Practice pattern switching",
      ],
    },
  },
  {
    id: 7,
    title: "System Design Basics",
    description: "Learn to design scalable systems using DSA principles",
    content: {
      whatToLearn: [
        "Component design",
        "API design principles",
        "Database schema design",
        "Caching strategies",
        "Load balancing basics",
        "Consistent hashing",
      ],
      resources: [
        "System Design Interview by Alex Xu",
        "Designing Data-Intensive Applications",
        "System Design Primer (GitHub)",
        "Grokking the System Design Interview",
        "ByteByteGo System Design videos",
      ],
      toolsToUse: [
        "Draw.io for diagrams",
        "Excalidraw",
        "Database design tools",
        "API documentation tools",
        "GitHub repositories with examples",
      ],
      practiceIdeas: [
        "Design a URL shortener",
        "Create a simple key-value store",
        "Design a task scheduler",
        "Build a simple rate limiter",
      ],
    },
  },
  {
    id: 8,
    title: "Competitive Programming",
    description: "Sharpen your skills with timed coding competitions",
    content: {
      whatToLearn: [
        "Contest strategies",
        "Fast implementation techniques",
        "Common CP algorithms and data structures",
        "Mathematical foundations",
        "Advanced optimization techniques",
        "Problem classification",
      ],
      resources: [
        "Competitive Programming 4 by Steven Halim",
        "USACO Guide",
        "Algorithms Live! (YouTube)",
        "Errichto's YouTube channel",
        "Codeforces educational articles",
      ],
      toolsToUse: [
        "Codeforces",
        "AtCoder",
        "CodeChef",
        "ICPC archives",
        "Competitive programming template",
        "Custom judge systems",
      ],
      practiceIdeas: [
        "Participate in weekly contests",
        "Virtual contest practice",
        "Solve past ICPC problems",
        "Create a personal code library",
      ],
    },
  },
  {
    id: 9,
    title: "Interview Preparation",
    description: "Get ready for technical interviews and assessments",
    content: {
      whatToLearn: [
        "Communication during problem-solving",
        "Test case formulation",
        "Edge case handling",
        "Solution optimization",
        "Mock interview strategies",
        "Behavioral question preparation",
      ],
      resources: [
        "Cracking the Coding Interview",
        "Tech Interview Handbook",
        "Leetcode Premium",
        "Pramp (mock interviews)",
        "AlgoExpert.io",
      ],
      toolsToUse: [
        "LeetCode",
        "HackerRank Interview Preparation Kit",
        "InterviewBit",
        "Pramp",
        "Interview preparation calendars",
      ],
      practiceIdeas: [
        "Solve company-specific questions",
        "Weekly mock interviews",
        "Practice talking while coding",
        "Time-boxed problem solving",
      ],
    },
  },
  {
    id: 10,
    title: "Continuous Learning",
    description: "Stay updated with new algorithms and techniques",
    content: {
      whatToLearn: [
        "Research papers on algorithms",
        "New data structures",
        "Language-specific optimizations",
        "Industry applications of DSA",
        "Performance engineering",
        "Domain-specific algorithms",
      ],
      resources: [
        "ArXiv CS papers",
        "CLRS 4th edition updates",
        "Algorithm conference proceedings",
        "Journal of Algorithms",
        "Specialized books in ML/AI algorithms",
      ],
      toolsToUse: [
        "GitHub trending repositories",
        "Research paper databases",
        "Tech blogs (Medium, Dev.to)",
        "DSA newsletters",
        "Algorithm visualization tools",
      ],
      practiceIdeas: [
        "Implement algorithms from research papers",
        "Contribute to open-source DSA libraries",
        "Create visualizations for complex algorithms",
        "Write blog posts explaining algorithms",
      ],
    },
  },
];

export default function DSARoadmap() {
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

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Create a temporary div to render the roadmap content for downloading
      const downloadDiv = document.createElement("div");
      downloadDiv.className = "roadmap-download-content";

      // IMPROVED STYLES for better PDF output and readability
      downloadDiv.style.padding = "40px";
      downloadDiv.style.color = "#2c3e50";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
      downloadDiv.style.fontSize = "14px";
      downloadDiv.style.lineHeight = "1.6";
      downloadDiv.style.maxWidth = "800px";
      downloadDiv.style.margin = "0 auto";

      // Add title with better styling
      const title = document.createElement("h1");
      title.style.textAlign = "center";
      title.style.marginBottom = "30px";
      title.style.fontSize = "32px";
      title.style.fontWeight = "700";
      title.style.color = "#2c3e50";
      title.style.borderBottom = "3px solid #3498db";
      title.style.paddingBottom = "15px";
      title.textContent = "DSA Mastery Roadmap";
      downloadDiv.appendChild(title);

      // Add introduction with better styling
      const intro = document.createElement("div");
      intro.style.marginBottom = "40px";
      intro.style.textAlign = "center";
      intro.style.padding = "20px";
      intro.style.backgroundColor = "#f8f9fa";
      intro.style.borderRadius = "10px";
      intro.style.border = "1px solid #e9ecef";

      const introParagraph = document.createElement("p");
      introParagraph.style.fontSize = "16px";
      introParagraph.style.lineHeight = "1.7";
      introParagraph.style.color = "#495057";
      introParagraph.style.fontStyle = "italic";
      introParagraph.style.margin = "0";
      introParagraph.textContent = "This comprehensive roadmap will guide you through learning Data Structures and Algorithms efficiently. From programming fundamentals to advanced algorithm techniques, interview preparation, and competitive programming.";
      intro.appendChild(introParagraph);
      downloadDiv.appendChild(intro);

      // Add roadmap content with improved styling
      roadmapData.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections

        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #3498db";
        header.style.fontSize = "20px";
        header.style.fontWeight = "600";
        header.style.color = "#2c3e50";
        header.style.marginBottom = "20px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);

        // Section description with better typography
        const desc = document.createElement("p");
        desc.style.marginBottom = "25px";
        desc.style.fontStyle = "italic";
        desc.style.fontSize = "15px";
        desc.style.color = "#7f8c8d";
        desc.style.lineHeight = "1.7";
        desc.style.padding = "0 10px";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);

        // What to Learn with improved styling
        const whatToLearn = document.createElement("div");
        whatToLearn.style.marginBottom = "25px";

        const whatToLearnTitle = document.createElement("h3");
        whatToLearnTitle.style.fontSize = "18px";
        whatToLearnTitle.style.fontWeight = "600";
        whatToLearnTitle.style.color = "#27ae60";
        whatToLearnTitle.style.marginBottom = "12px";
        whatToLearnTitle.style.borderBottom = "2px solid #27ae60";
        whatToLearnTitle.style.paddingBottom = "5px";
        whatToLearnTitle.textContent = "📚 What to Learn";
        whatToLearn.appendChild(whatToLearnTitle);

        const whatToLearnList = document.createElement("ul");
        whatToLearnList.style.paddingLeft = "25px";
        whatToLearnList.style.margin = "15px 0";
        section.content.whatToLearn.forEach((item) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = item;
          whatToLearnList.appendChild(li);
        });
        whatToLearn.appendChild(whatToLearnList);
        sectionDiv.appendChild(whatToLearn);

        // Resources with better styling
        const resources = document.createElement("div");
        resources.style.marginBottom = "25px";

        const resourcesTitle = document.createElement("h3");
        resourcesTitle.style.fontSize = "18px";
        resourcesTitle.style.fontWeight = "600";
        resourcesTitle.style.color = "#3498db";
        resourcesTitle.style.marginBottom = "12px";
        resourcesTitle.style.borderBottom = "2px solid #3498db";
        resourcesTitle.style.paddingBottom = "5px";
        resourcesTitle.textContent = "🔍 Resources";
        resources.appendChild(resourcesTitle);

        const resourcesList = document.createElement("ul");
        resourcesList.style.paddingLeft = "25px";
        resourcesList.style.margin = "15px 0";
        section.content.resources.forEach((resource) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = resource;
          resourcesList.appendChild(li);
        });
        resources.appendChild(resourcesList);
        sectionDiv.appendChild(resources);

        // Tools to Use with better styling
        const tools = document.createElement("div");
        tools.style.marginBottom = "25px";

        const toolsTitle = document.createElement("h3");
        toolsTitle.style.fontSize = "18px";
        toolsTitle.style.fontWeight = "600";
        toolsTitle.style.color = "#f39c12";
        toolsTitle.style.marginBottom = "12px";
        toolsTitle.style.borderBottom = "2px solid #f39c12";
        toolsTitle.style.paddingBottom = "5px";
        toolsTitle.textContent = "🧰 Tools to Use";
        tools.appendChild(toolsTitle);

        const toolsList = document.createElement("ul");
        toolsList.style.paddingLeft = "25px";
        toolsList.style.margin = "15px 0";
        section.content.toolsToUse.forEach((tool) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = tool;
          toolsList.appendChild(li);
        });
        tools.appendChild(toolsList);
        sectionDiv.appendChild(tools);

        // Practice Ideas with better styling
        const projects = document.createElement("div");
        projects.style.marginBottom = "25px";

        const projectsTitle = document.createElement("h3");
        projectsTitle.style.fontSize = "18px";
        projectsTitle.style.fontWeight = "600";
        projectsTitle.style.color = "#9b59b6";
        projectsTitle.style.marginBottom = "12px";
        projectsTitle.style.borderBottom = "2px solid #9b59b6";
        projectsTitle.style.paddingBottom = "5px";
        projectsTitle.textContent = "💡 Practice Ideas";
        projects.appendChild(projectsTitle);

        const projectsList = document.createElement("ul");
        projectsList.style.paddingLeft = "25px";
        projectsList.style.margin = "15px 0";
        section.content.practiceIdeas.forEach((project) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = project;
          projectsList.appendChild(li);
        });
        projects.appendChild(projectsList);
        sectionDiv.appendChild(projects);

        downloadDiv.appendChild(sectionDiv);
      });

      // Footer with improved styling
      const footer = document.createElement("div");
      footer.style.marginTop = "40px";
      footer.style.borderTop = "2px solid #ecf0f1";
      footer.style.paddingTop = "20px";
      footer.style.textAlign = "center";
      footer.style.backgroundColor = "#f8f9fa";
      footer.style.borderRadius = "8px";
      footer.style.padding = "20px";

      const footerText = document.createElement("p");
      footerText.style.fontSize = "12px";
      footerText.style.color = "#6c757d";
      footerText.style.margin = "0";
      footerText.style.fontWeight = "500";
      footerText.textContent = "© 2025 DSA Mastery Roadmap. Created with html2canvas and jsPDF.";
      footer.appendChild(footerText);

      downloadDiv.appendChild(footer);

      // Temporarily add the div to the document to render it
      document.body.appendChild(downloadDiv);

      // IMPROVED html2canvas settings for better quality
      const canvas = await html2canvas(downloadDiv, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        letterRendering: true, // Better text rendering
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: downloadDiv.scrollWidth,
        height: downloadDiv.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      // Remove the temporary div
      document.body.removeChild(downloadDiv);

      // Create PDF with better settings
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true, // Compress for smaller file size
        precision: 2
      });

      // Calculate dimensions for better fitting
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 0.95), // Use JPEG with high quality
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
      );
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          0,
          position,
          imgWidth,
          imgHeight,
        );
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save("DSA_Mastery_Roadmap.pdf");

      // Store the downloaded roadmap data (if needed)
      // Note: Removed localStorage usage as per requirements
      console.log('DSA Roadmap successfully downloaded!');

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };
  return (

    
        <div
          className={`min-h-screen ${
            darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          <Head>
            <title>DSA Mastery Roadmap</title>
            <meta
              name="description"
              content="Complete roadmap for mastering Data Structures and Algorithms"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {/* Sticky Navigation Bar */}
          <nav
            className={`sticky top-0 z-10 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
          >
            <h1 className="text-xl md:text-2xl font-bold">
              DSA Mastery Roadmap 🧠
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white flex items-center ${downloading ? "opacity-70 cursor-not-allowed" : ""}`}
                aria-label="Download Roadmap"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
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
        <section
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Your Path to DSA Mastery
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through learning Data
            Structures and Algorithms efficiently. From programming fundamentals
            to advanced algorithm techniques, interview preparation, and
            competitive programming, this guide covers everything you need for
            technical interviews and problem-solving excellence. Click on any
            section to explore its contents in detail.
          </p>
        </section>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
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

              {/* Section Content */}
              {openSection === section.id && (
                <div
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🔍</span>Resources
                    </h4>
                    <ul className="space-y-1">
                      {section.content.resources.map((resource, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="min-w-4 text-blue-500 mr-2">•</span>
                          {resource}
                        </li>
                      ))}
                    </ul>
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
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Practice Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Practice Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.practiceIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
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
  )

}
