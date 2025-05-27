"use client";
import { useState } from "react";
import Head from "next/head";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Understand the Basics of Design",
    description: "Master the fundamental concepts of graphic design",
    content: {
      whatToLearn: [
        "What is Graphic Design?",
        "Importance of Visual Communication",
        "Color Theory",
        "Typography",
        "Layout Principles",
        "Design Thinking Process",
      ],
      resources: [
        "Design Elements: Form and Space (Ellen Lupton)",
        "The Fundamentals of Graphic Design (Gavin Ambrose)",
        "Graphic Design School: The Principles and Practice",
        "YouTube: The Futur (Graphic Design Basics)",
      ],
      toolsToUse: [
        "Adobe Color Wheel",
        "Google Fonts",
        "Coolors.co",
        "Unsplash (for images)",
        "FontPair",
      ],
      practiceIdeas: [
        "Recreate classic design layouts",
        "Create a mood board for a project",
        "Design a simple business card",
        "Practice with type pairings",
      ],
    },
  },
  {
    id: 2,
    title: "Learn Design Tools (Pick 1–2)",
    description: "Master essential graphic design software",
    content: {
      whatToLearn: [
        "Interface navigation",
        "Selection and transformation tools",
        "Working with layers",
        "Typography tools",
        "Color and effects",
        "Export formats",
      ],
      resources: [
        "Adobe Photoshop Essentials (LinkedIn Learning)",
        "Illustrator CC 2023 Essential Training",
        "Figma Tutorial for Beginners (YouTube)",
        "Canva Design School (Free courses)",
      ],
      toolsToUse: [
        "Adobe Photoshop 🖼️",
        "Adobe Illustrator 🎨",
        "Figma (Free alternative) 🧩",
        "Canva (for social media/posters) ✨",
        "Affinity Designer (one-time payment)",
      ],
      practiceIdeas: [
        "Recreate a logo in different tools",
        "Edit and enhance photographs",
        "Create vector illustrations",
        "Design social media graphics",
      ],
    },
  },
  {
    id: 3,
    title: "Follow the Best Courses (Hindi + English)",
    description: "Learn from industry experts through structured content",
    content: {
      whatToLearn: [
        "Design theory and principles",
        "Software-specific techniques",
        "Design workflow and process",
        "Portfolio development",
        "Client communication",
        "Design critique",
      ],
      resources: [
        "Great Learning - Graphic Design in Hindi (YouTube)",
        "Coursera - CalArts Graphic Design Specialization",
        "Udemy - Adobe Photoshop Masterclass",
        "Figma Hindi Tutorial (YouTube)",
        "Domestika - Brand Identity courses",
        "Skillshare - Logo Design Masterclass",
      ],
      toolsToUse: [
        "YouTube",
        "Coursera",
        "Udemy",
        "Skillshare",
        "LinkedIn Learning",
        "Domestika",
      ],
      practiceIdeas: [
        "Complete course assignments",
        "Create projects based on tutorials",
        "Join course communities",
        "Get feedback from instructors",
      ],
    },
  },
  {
    id: 4,
    title: "Practice Projects",
    description: "Build your skills through real-world design projects",
    content: {
      whatToLearn: [
        "Project planning",
        "Asset collection",
        "Ideation and sketching",
        "Design execution",
        "Iteration based on feedback",
        "Finalization and delivery",
      ],
      resources: [
        "Briefbox (practice design briefs)",
        "Sharpen.design (random design challenges)",
        "Daily UI Challenge",
        "r/graphic_design subreddit challenges",
      ],
      toolsToUse: [
        "Miro/Figma for planning",
        "Pinterest for inspiration",
        "Your chosen design software",
        "Version control (for iterative work)",
        "PDF creation tools",
      ],
      practiceIdeas: [
        "Create logos for fictional brands",
        "Poster/flyer for an event",
        "Instagram carousels",
        "Resume design in Figma",
        "UI for a basic app or landing page",
      ],
    },
  },
  {
    id: 5,
    title: "Learn UI Design Principles",
    description: "Master the fundamentals of user interface design",
    content: {
      whatToLearn: [
        "Spacing, Alignment, Contrast, Consistency",
        "Mobile-first thinking",
        "Component-based thinking",
        "Typography for screens",
        "Color for digital interfaces",
        "Accessibility considerations",
      ],
      resources: [
        "Refactoring UI (Steve Schoger)",
        "UI Design for Developers (YouTube)",
        "Laws of UX website",
        "Material Design Guidelines",
        "Apple Human Interface Guidelines",
      ],
      toolsToUse: ["Figma", "Adobe XD", "Sketch", "InVision Studio", "Framer"],
      practiceIdeas: [
        "Redesign a popular app interface",
        "Create a design system",
        "Design a responsive website",
        "Create a mobile app concept",
      ],
    },
  },
  {
    id: 6,
    title: "Build a Portfolio",
    description: "Showcase your best work to attract clients and employers",
    content: {
      whatToLearn: [
        "Portfolio curation",
        "Project presentation",
        "Case studies",
        "Personal branding",
        "Online presence",
        "Client testimonials",
      ],
      resources: [
        "Behance discover page",
        "Dribbble inspiration",
        "Designer portfolio websites",
        "Portfolio review YouTube videos",
        "The Design of Everyday Things (for case studies)",
      ],
      toolsToUse: [
        "Behance or Dribbble account",
        "Personal website (WordPress/Webflow)",
        "PDF portfolio",
        "Instagram professional account",
        "LinkedIn profile",
      ],
      practiceIdeas: [
        "Create case studies for your projects",
        "Design your personal logo/brand",
        "Build a personal website",
        "Present each project with before/after visuals",
      ],
    },
  },
  {
    id: 7,
    title: "Tools & Platforms to Use",
    description: "Essential resources for every graphic designer",
    content: {
      whatToLearn: [
        "Asset collection",
        "Font pairing",
        "Color selection",
        "Inspiration gathering",
        "Community involvement",
        "Resource management",
      ],
      resources: [
        "Design blogs (Smashing Magazine, etc)",
        "Design Weekly newsletter",
        "Inspiration galleries",
        "Typography websites",
        "Color palette generators",
      ],
      toolsToUse: [
        "Unsplash, Freepik (assets)",
        "Google Fonts, FontPair",
        "Colors.lol, Coolors.co",
        "Figma Community",
        "IconScout, Heroicons",
        "Notion (for organizing resources)",
      ],
      practiceIdeas: [
        "Create a resource library",
        "Build a custom icon set",
        "Develop a color system",
        "Curate an inspiration board",
      ],
    },
  },
  {
    id: 8,
    title: "Extra Skills (Optional but Useful)",
    description: "Expand your design capabilities with specialized skills",
    content: {
      whatToLearn: [
        "Animation principles",
        "3D modeling basics",
        "Interaction design",
        "Basic frontend development",
        "Print production",
        "Photography/Videography",
      ],
      resources: [
        "School of Motion courses",
        "Blender Guru tutorials",
        "ProtoPie documentation",
        "Frontend Masters (HTML/CSS)",
        "Print production guides",
      ],
      toolsToUse: [
        "Motion Design (Adobe After Effects / Rive)",
        "3D Tools: Blender / Spline",
        "UI Prototyping: Framer / ProtoPie",
        "Basic HTML/CSS",
        "Premiere Pro / Final Cut",
      ],
      practiceIdeas: [
        "Animate a logo",
        "Create a 3D product mockup",
        "Build an interactive prototype",
        "Code a simple landing page",
      ],
    },
  },
  {
    id: 9,
    title: "Where to Practice",
    description: "Places to hone your skills and get real-world experience",
    content: {
      whatToLearn: [
        "Design challenges",
        "Feedback collection",
        "Design community interaction",
        "Design critique process",
        "Regular practice habits",
        "Skill improvement tracking",
      ],
      resources: [
        "Design challenge websites",
        "Design communities",
        "Online forums",
        "Local meetups",
        "Design conferences",
      ],
      toolsToUse: [
        "Daily UI Challenge",
        "FrontEnd Mentor - UI Challenges",
        "Dribbble Weekly Warm-Up",
        "Designercize",
        "Awwwards challenges",
      ],
      practiceIdeas: [
        "Commit to a 30-day design challenge",
        "Participate in design hackathons",
        "Join a design accountability group",
        "Redesign something every week",
      ],
    },
  },
  {
    id: 10,
    title: "Stay Updated",
    description:
      "Keep your skills and knowledge current in a fast-changing field",
    content: {
      whatToLearn: [
        "Industry trends",
        "New software features",
        "Emerging design techniques",
        "Design criticism",
        "Historical context",
        "Cross-discipline knowledge",
      ],
      resources: [
        "Design blogs (Smashing Magazine, etc)",
        "Design podcasts",
        "YouTube design channels",
        "Design books",
        "Industry reports",
      ],
      toolsToUse: [
        "Twitter (design community)",
        "YouTube",
        "Podcast apps",
        "Design newsletters",
        "Discord communities",
      ],
      practiceIdeas: [
        "Follow designers on Twitter, YouTube",
        "Watch breakdowns on YouTube",
        "Join Figma/Adobe Discords",
        "Attend virtual design events",
      ],
    },
  },
  {
    id: 11,
    title: "Freelancing/Job",
    description: "Start your career and find clients or employers",
    content: {
      whatToLearn: [
        "Client acquisition",
        "Project management",
        "Contract writing",
        "Pricing your work",
        "Job application process",
        "Interview preparation",
      ],
      resources: [
        "The Business of Design (YouTube)",
        "Freelance forums",
        "Job boards",
        "Contract templates",
        "Portfolio review services",
      ],
      toolsToUse: [
        "Fiverr, Upwork, Freelancer",
        "Internshala for internships",
        "LinkedIn",
        "Indeed, Glassdoor",
        "Personal portfolio site",
      ],
      practiceIdeas: [
        "Create your personal portfolio site",
        "Write a compelling resume/CV",
        "Prepare a design test project",
        "Practice interview questions",
      ],
    },
  },
];

export default function GraphicDesignRoadmap() {
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

  // Handle download functionality
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
      title.style.marginBottom = "20px";
      title.style.fontSize = "32px";
      title.style.fontWeight = "700";
      title.style.color = "#2c3e50";
      title.style.borderBottom = "3px solid #e74c3c";
      title.style.paddingBottom = "15px";
      title.textContent = "Graphic Design Roadmap";
      downloadDiv.appendChild(title);

      // Add subtitle with better styling
      const subtitle = document.createElement("div");
      subtitle.style.marginBottom = "40px";
      subtitle.style.textAlign = "center";
      subtitle.style.padding = "20px";
      subtitle.style.backgroundColor = "#f8f9fa";
      subtitle.style.borderRadius = "10px";
      subtitle.style.border = "1px solid #e9ecef";

      const subtitleText = document.createElement("p");
      subtitleText.style.fontSize = "16px";
      subtitleText.style.lineHeight = "1.7";
      subtitleText.style.color = "#495057";
      subtitleText.style.fontStyle = "italic";
      subtitleText.style.margin = "0";
      subtitleText.textContent = "Your comprehensive guide to becoming a Graphic Designer";
      subtitle.appendChild(subtitleText);
      downloadDiv.appendChild(subtitle);

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
        header.style.borderLeft = "5px solid #e74c3c";
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
      const footer = document.createElement("footer");
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
      footerText.textContent = "© 2025 Graphic Design Roadmap. All rights reserved.";
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
      pdf.save("Graphic_Design_Roadmap.pdf");

      // Note: Removed localStorage usage as per requirements
      console.log('Graphic Design Roadmap successfully downloaded!');

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
        <title>Graphic Designing Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for becoming a Graphic Designer"
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
          Graphic Designing Roadmap 🧑‍🎨
        </h1>
        <div className="flex items-center space-x-3">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-3 py-2 rounded ${
              darkMode 
                ? "bg-pink-600 hover:bg-pink-700 text-white" 
                : "bg-pink-500 hover:bg-pink-600 text-white"
            } transition-colors flex items-center ${downloading ? "opacity-70 cursor-not-allowed" : ""}`}
            aria-label="Download Roadmap"
          >
            {downloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
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
        <section
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Welcome to the Graphic Design Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through the essential
            skills, tools, and resources needed to become a proficient Graphic
            Designer. From understanding the fundamentals to securing freelance
            work or full-time positions, this guide covers everything you need
            to start and grow your design career. Click on any section to expand
            it and explore its contents.
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
                      darkMode ? "bg-pink-600" : "bg-pink-500"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
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
                          <span className="min-w-4 text-pink-500 mr-2">•</span>
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
                Graphic Designing Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a Graphic Designer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 Graphic Designing Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
