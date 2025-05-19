"use client";
import { useState } from "react";
import Head from "next/head";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Learn Design Fundamentals",
    description: "Master the basic principles of design",
    content: {
      whatToLearn: [
        "Color Theory",
        "Typography",
        "Layout Design",
        "Visual Hierarchy",
        "Gestalt Principles",
        "Design Systems",
      ],
      bestCourses: {
        english: [
          "Design for Developers (Frontend Masters)",
          "Fundamentals of Design (Coursera)",
          "UI/UX Design Specialization (Coursera)",
          "Figma Academy (Udemy)",
        ],
        hindi: [
          "UI/UX Design Complete Course in Hindi (YouTube)",
          "Design Fundamentals by Great Learning (Hindi)",
          "UI/UX Master Course by DesignGuru (Hindi)",
        ],
      },
      toolsToUse: [
        "Figma (Free to start)",
        "Adobe Color Wheel",
        "FontJoy",
        "Coolors.co",
      ],
      docsAndWebsites: [
        "Nielsen Norman Group",
        "Smashing Magazine",
        "Material Design Guidelines",
        "Figma Community Resources",
      ],
      projectIdeas: [
        "Redesign a landing page",
        "Create a color palette for an app",
        "Design a simple logo",
        "Create a typography system",
      ],
    },
  },
  {
    id: 2,
    title: "Master Design Tools",
    description: "Get proficient with industry-standard design tools",
    content: {
      whatToLearn: [
        "Figma Interface & Features",
        "Prototyping",
        "Design Components",
        "Auto Layout",
        "Responsive Design",
        "Design Handoff",
      ],
      bestCourses: {
        english: [
          "Figma Essential Training (LinkedIn Learning)",
          "Figma for UX Design (Udemy)",
          "Learn Figma - UI/UX Design Essential Training",
          "Adobe XD Masterclass (Skillshare)",
        ],
        hindi: [
          "Figma Complete Course Hindi (YouTube)",
          "UI/UX Design with Figma (Hindi) - DesignCourse",
          "Master Figma in Hindi - TechLearners",
        ],
      },
      toolsToUse: [
        "Figma",
        "Adobe XD",
        "Sketch (Mac only)",
        "InVision",
        "Framer",
      ],
      docsAndWebsites: [
        "Figma Help Center",
        "Adobe XD User Guide",
        "Sketch Documentation",
        "UI Design Daily",
        "Dribbble for inspiration",
      ],
      projectIdeas: [
        "Clone popular app interfaces",
        "Design a multi-screen mobile app",
        "Create an interactive prototype",
        "Design a component library",
      ],
    },
  },
  {
    id: 3,
    title: "Learn User Experience Principles",
    description: "Understand how users interact with interfaces",
    content: {
      whatToLearn: [
        "User Research Methods",
        "Information Architecture",
        "User Journey Mapping",
        "Wireframing",
        "Usability Principles",
        "Accessibility Standards",
      ],
      bestCourses: {
        english: [
          "Don Norman: The Design of Everyday Things (Udacity)",
          "UX Research & Strategy (Coursera)",
          "Human-Computer Interaction (edX)",
          "Interaction Design Foundation Courses",
        ],
        hindi: [
          "UX Research Hindi Course (DigitalSikho)",
          "User Experience Design in Hindi (Udemy)",
          "Complete UX Course in Hindi (SkillShare)",
        ],
      },
      toolsToUse: [
        "Maze",
        "Optimal Workshop",
        "Hotjar",
        "Miro for journey mapping",
        "Balsamiq for wireframes",
      ],
      docsAndWebsites: [
        "UX Collective",
        "A List Apart",
        "Baymard Institute",
        "Laws of UX",
        "Web Content Accessibility Guidelines (WCAG)",
      ],
      projectIdeas: [
        "Conduct user interviews",
        "Create user personas",
        "Build an information architecture",
        "Design low-fidelity wireframes",
      ],
    },
  },
  {
    id: 4,
    title: "UI Design Patterns",
    description: "Learn common interface patterns and when to use them",
    content: {
      whatToLearn: [
        "Navigation Patterns",
        "Data Display Patterns",
        "Form Design",
        "Search Patterns",
        "Onboarding Flows",
        "Feedback & Error States",
      ],
      bestCourses: {
        english: [
          "Advanced UI Design Patterns (UI.dev)",
          "Practical UI Patterns for Design Systems (Udemy)",
          "Mobile UI Design Patterns (Skillshare)",
          "Web UI Design Patterns (FrontendMasters)",
        ],
        hindi: [
          "UI Design Patterns Hindi (LearningStudio)",
          "Modern UI Design in Hindi (TechGuru)",
          "Mobile Design Patterns Hindi (DesignInsight)",
        ],
      },
      toolsToUse: [
        "UI Pattern Libraries",
        "Mobbin (mobile app patterns)",
        "UI Garage",
        "Page Flows",
      ],
      docsAndWebsites: [
        "UI Patterns.com",
        "Mobile Patterns",
        "Pttrns",
        "Design System Repo",
        "Apple Human Interface Guidelines",
      ],
      projectIdeas: [
        "Design an e-commerce checkout flow",
        "Create a mobile app onboarding",
        "Design a complex form with validation",
        "Build a search results interface",
      ],
    },
  },
  {
    id: 5,
    title: "Interactive Prototyping",
    description: "Create high-fidelity interactive prototypes",
    content: {
      whatToLearn: [
        "Interaction Design",
        "Animation Principles",
        "Micro-interactions",
        "User Testing Methods",
        "Prototype Fidelity Levels",
        "Feedback Collection",
      ],
      bestCourses: {
        english: [
          "Advanced Prototyping in Figma (Figma)",
          "Designing For Motion (Skillshare)",
          "Micro-interactions: Design with Animation (Udemy)",
          "Interaction Design Specialization (Coursera)",
        ],
        hindi: [
          "Interactive Prototyping Hindi Course (DesignHindi)",
          "Animation in UI Design Hindi (LearnFigma)",
          "Advanced Figma Animation Hindi (CreativeCourse)",
        ],
      },
      toolsToUse: [
        "Figma Prototyping",
        "Principle",
        "ProtoPie",
        "Framer",
        "After Effects (for advanced animations)",
      ],
      docsAndWebsites: [
        "Figma Prototyping Docs",
        "UX in Motion Manifesto",
        "Motion UI Design",
        "Animation Handbook (Invision)",
        "Microinteractions: Full Color Edition book",
      ],
      projectIdeas: [
        "Design interactive card animations",
        "Create a custom mobile navigation",
        "Design an animated onboarding flow",
        "Build an interactive product page",
      ],
    },
  },
  {
    id: 6,
    title: "UI/UX for Developers",
    description: "Learn how to implement designs in code",
    content: {
      whatToLearn: [
        "Design to Code Workflow",
        "CSS Layout Techniques",
        "UI Component Libraries",
        "Responsive Design Implementation",
        "CSS Animations",
        "Frontend Frameworks Integration",
      ],
      bestCourses: {
        english: [
          "Frontend Masters UI/UX for Developers",
          "CSS for JavaScript Developers (Josh Comeau)",
          "Learn CSS Animation (Scrimba)",
          "Building Design Systems (Frontend Masters)",
        ],
        hindi: [
          "UI Development in Hindi (CodeWithHarry)",
          "CSS Advanced Course Hindi (ApnaCollege)",
          "Modern Frontend Development Hindi (TeachCode)",
        ],
      },
      toolsToUse: [
        "Tailwind CSS",
        "Storybook",
        "Bootstrap",
        "Material UI",
        "Framer Motion",
        "CSS-in-JS libraries",
      ],
      docsAndWebsites: [
        "MDN Web Docs",
        "CSS-Tricks",
        "Tailwind Documentation",
        "Design Systems For Developers",
        "Smashing Magazine Frontend Articles",
      ],
      projectIdeas: [
        "Convert a Figma design to HTML/CSS",
        "Build a responsive landing page",
        "Create a custom component library",
        "Implement complex UI animations in CSS",
      ],
    },
  },
  {
    id: 7,
    title: "Portfolio & Job Preparation",
    description: "Prepare yourself for the job market",
    content: {
      whatToLearn: [
        "Portfolio Building",
        "Case Study Writing",
        "Interview Preparation",
        "Design Challenge Practice",
        "Resume Optimization",
        "Networking Skills",
      ],
      bestCourses: {
        english: [
          "Building a Design Portfolio (Skillshare)",
          "How to Get a UX Job (Udemy)",
          "Design Interview Preparation (Coursera)",
          "UX Portfolio Formula (DesignLab)",
        ],
        hindi: [
          "Portfolio Building Hindi Course (DesignSkills)",
          "UI/UX Interview Preparation Hindi (CareerGuru)",
          "Case Study Writing in Hindi (DesignXpert)",
        ],
      },
      toolsToUse: [
        "Notion for case studies",
        "Webflow/Squarespace for portfolio",
        "Behance",
        "Dribbble",
        "LinkedIn",
        "PDF portfolio maker",
      ],
      docsAndWebsites: [
        "UX Portfolio Best Practices",
        "Case Study Template",
        "Designer News",
        "ADPList for mentorship",
        "UX Jobs Board",
      ],
      projectIdeas: [
        "Create a personal design website",
        "Write detailed case studies",
        "Participate in design challenges",
        "Contribute to open-source design projects",
      ],
    },
  },
];

export default function Home() {
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

  // Function to handle the download process
  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Create a temporary div to render the roadmap content for downloading
      const downloadDiv = document.createElement("div");
      downloadDiv.className = "roadmap-download-content";

      // Set styles for better PDF output
      downloadDiv.style.padding = "20px";
      downloadDiv.style.color = "black";
      downloadDiv.style.backgroundColor = "white";
      downloadDiv.style.fontFamily = "Arial, sans-serif";

      // Add title
      const title = document.createElement("h1");
      title.style.textAlign = "center";
      title.style.marginBottom = "20px";
      title.textContent = "UI/UX Design Roadmap";
      downloadDiv.appendChild(title);

      // Add roadmap content
      roadmapData.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "30px";

        // Section header
        const header = document.createElement("h2");
        header.style.backgroundColor = "#f0f0f0";
        header.style.padding = "10px";
        header.style.borderRadius = "5px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);

        // Section description
        const desc = document.createElement("p");
        desc.style.marginBottom = "15px";
        desc.style.fontStyle = "italic";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);

        // What to Learn
        const whatToLearn = document.createElement("div");
        whatToLearn.style.marginBottom = "15px";

        const whatToLearnTitle = document.createElement("h3");
        whatToLearnTitle.textContent = "✅ What to Learn";
        whatToLearn.appendChild(whatToLearnTitle);

        const whatToLearnList = document.createElement("ul");
        section.content.whatToLearn.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          whatToLearnList.appendChild(li);
        });
        whatToLearn.appendChild(whatToLearnList);
        sectionDiv.appendChild(whatToLearn);

        // Best Courses
        const bestCourses = document.createElement("div");
        bestCourses.style.marginBottom = "15px";

        const bestCoursesTitle = document.createElement("h3");
        bestCoursesTitle.textContent = "📚 Best Courses";
        bestCourses.appendChild(bestCoursesTitle);

        // English courses
        const englishTitle = document.createElement("h4");
        englishTitle.textContent = "In English:";
        bestCourses.appendChild(englishTitle);

        const englishList = document.createElement("ul");
        section.content.bestCourses.english.forEach((course) => {
          const li = document.createElement("li");
          li.textContent = course;
          englishList.appendChild(li);
        });
        bestCourses.appendChild(englishList);

        // Hindi courses
        const hindiTitle = document.createElement("h4");
        hindiTitle.textContent = "In Hindi:";
        bestCourses.appendChild(hindiTitle);

        const hindiList = document.createElement("ul");
        section.content.bestCourses.hindi.forEach((course) => {
          const li = document.createElement("li");
          li.textContent = course;
          hindiList.appendChild(li);
        });
        bestCourses.appendChild(hindiList);
        sectionDiv.appendChild(bestCourses);

        // Tools to Use
        const tools = document.createElement("div");
        tools.style.marginBottom = "15px";

        const toolsTitle = document.createElement("h3");
        toolsTitle.textContent = "🧰 Tools to Use";
        tools.appendChild(toolsTitle);

        const toolsList = document.createElement("ul");
        section.content.toolsToUse.forEach((tool) => {
          const li = document.createElement("li");
          li.textContent = tool;
          toolsList.appendChild(li);
        });
        tools.appendChild(toolsList);
        sectionDiv.appendChild(tools);

        // Docs & Websites
        const docs = document.createElement("div");
        docs.style.marginBottom = "15px";

        const docsTitle = document.createElement("h3");
        docsTitle.textContent = "📘 Docs & Websites";
        docs.appendChild(docsTitle);

        const docsList = document.createElement("ul");
        section.content.docsAndWebsites.forEach((doc) => {
          const li = document.createElement("li");
          li.textContent = doc;
          docsList.appendChild(li);
        });
        docs.appendChild(docsList);
        sectionDiv.appendChild(docs);

        // Project Ideas
        const projects = document.createElement("div");
        projects.style.marginBottom = "15px";

        const projectsTitle = document.createElement("h3");
        projectsTitle.textContent = "💡 Project Ideas";
        projects.appendChild(projectsTitle);

        const projectsList = document.createElement("ul");
        section.content.projectIdeas.forEach((project) => {
          const li = document.createElement("li");
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
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Calculate the required height based on canvas dimensions to fit the page width
      const imgWidth = 210; // A4 width in mm (210mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image to PDF (first page)
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight,
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
          canvas.toDataURL("image/png"),
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
        );
        heightLeft -= 297;
      }

      // Save the PDF
      pdf.save("UI_UX_Design_Roadmap.pdf");

      // Store the downloaded roadmap data to localStorage
      localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

      // Navigate to Downloads page
      router.push('/Downloads');

      // Store the downloaded roadmap data (optional)
      localStorage.setItem("downloadedRoadmap", JSON.stringify(roadmapData));

      // Optional: Navigate to Downloads page or show confirmation
      // router.push('/Downloads');
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
        <title>UI/UX Design Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for learning UI/UX design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">UI/UX Design Roadmap</h1>
        <div className="flex items-center space-x-4">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-4 py-2 rounded-lg flex items-center ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-500 hover:bg-indigo-600"
            } text-white transition-colors font-medium`}
          >
            {downloading ? (
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
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Download PDF
              </>
            )}
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
            Welcome to the UI/UX Design Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a proficient UI/UX designer. Each section
            contains curated resources in both English and Hindi to help you
            master each stage of the design journey. Click on any section to
            expand it and explore its contents.
          </p>
        </div>

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
                      darkMode ? "bg-indigo-600" : "bg-indigo-500"
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
                      <span className="mr-2">✅</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
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
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-indigo-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-indigo-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            ),
                          )}
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

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📘</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.docsAndWebsites.map(
                        (resource, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                            {resource}
                          </li>
                        ),
                      )}
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

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                UI/UX Design Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a UI/UX designer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Dribbble
                </a>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  GitHub
                </a>
              </div>
              <p className="text-xs">
                © 2025 UI/UX Design Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
