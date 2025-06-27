"use client";
import { useState } from "react";
import Head from "next/head";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Video Editor Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Understand the Basics of Video Editing",
    description: "Learn fundamental concepts and terminology",
    content: {
      whatToLearn: [
        "What is video editing?",
        "Types of editing (montage, cinematic, vlog, documentary, etc.)",
        "Basic video formats, frame rates, aspect ratios",
        "Understanding video resolution and quality",
        "Video compression fundamentals",
        "Basic editing principles and techniques",
      ],
      bestResources: {
        english: [
          "Justin Odisho YouTube Channel",
          "Video Editing 101 (LinkedIn Learning)",
          "Introduction to Video Editing (Khan Academy)",
          "Film Editing: Crash Course Film Production",
        ],
        hindi: [
          "Tech Raj - Video Editing Basics",
          "GFX Mentor - Video Editing Introduction",
          "Techno Ruhez - Video Editing Concepts",
          "Techno Vedant - Basic Tutorial Series",
        ],
      },
      toolsToUse: [
        "VLC Media Player",
        "HandBrake (for conversion)",
        "Basic editing software trials",
        "Media Info (for file details)",
      ],
      docsAndWebsites: [
        "NoFilmSchool Basics",
        "Frame.io Guides",
        "Videomaker Magazine",
        "Digital Rebellion Blog",
        "Creative COW Forums",
      ],
      projectIdeas: [
        "Create a 30-second intro for yourself",
        "Edit a simple photo montage with music",
        "Record and edit a simple vlog",
        "Re-edit an existing YouTube video",
      ],
    },
  },
  {
    id: 2,
    title: "Choose and Learn Editing Software",
    description: "Master the tools of the trade from beginner to professional",
    content: {
      whatToLearn: [
        "Software interface navigation",
        "Basic cuts and transitions",
        "Timeline management",
        "Import/export settings",
        "Organizing media files",
        "Keyboard shortcuts",
      ],
      bestResources: {
        english: [
          "Premiere Pro Masterclass (Udemy)",
          "DaVinci Resolve Official Training",
          "Final Cut Pro X Essential Training (LinkedIn Learning)",
          "Filmora Complete Tutorial (YouTube)",
        ],
        hindi: [
          "Filmora Hindi Course by Techno Vedant",
          "Premiere Pro Hindi by GFX Mentor",
          "DaVinci Resolve Hindi Tutorial by Tech Raj",
          "CapCut Master Class Hindi by Technical Sagar",
        ],
      },
      toolsToUse: [
        "Beginner: Filmora, CapCut, VN Editor",
        "Intermediate: Adobe Premiere Pro, Final Cut Pro",
        "Advanced: DaVinci Resolve, Adobe After Effects",
        "Mobile: InShot, KineMaster",
      ],
      docsAndWebsites: [
        "Adobe Help Center",
        "Blackmagic Design Support",
        "Apple Final Cut Pro Resources",
        "Filmora Learning Center",
        "CapCut Tutorials",
      ],
      projectIdeas: [
        "Create a 1-minute travel highlight reel",
        "Edit a product showcase video",
        "Create a simple interview edit",
        "Build a music video edit",
      ],
    },
  },
  {
    id: 3,
    title: "Learn Color Grading & Effects",
    description: "Enhance visual quality and add professional polish",
    content: {
      whatToLearn: [
        "Understanding color theory",
        "LUTs and color presets",
        "Color wheels and scopes",
        "Grading workflows",
        "Visual effects fundamentals",
        "Creating your own style",
      ],
      bestResources: {
        english: [
          "Color Grading Central Tutorials",
          "DaVinci Resolve Grading (Casey Faris)",
          "Premiere Pro Color Workshop (Jordy Vandeput)",
          "Lowepost Color Grading Tutorials",
        ],
        hindi: [
          "Color Grading Masterclass Hindi by Tech Raj",
          "DaVinci Resolve Color Hindi Tutorial",
          "Premiere Pro Color Grading Hindi by GFX Mentor",
          "Film Look Color Grading Hindi by Technical Guruji",
        ],
      },
      toolsToUse: [
        "DaVinci Resolve Color Page",
        "Premiere Pro Lumetri Color",
        "FilmConvert",
        "Color Finale (for FCPX)",
        "Free LUT packs",
      ],
      docsAndWebsites: [
        "Color Grading Central",
        "Mixing Light",
        "Skillshare Color Courses",
        "Lowepost Blog",
        "Learn Color Grading",
      ],
      projectIdeas: [
        "Create before/after color grade comparisons",
        "Recreate a movie look",
        "Develop your own LUT",
        "Fix problematic footage",
      ],
    },
  },
  {
    id: 4,
    title: "Sound Design and Audio Editing",
    description: "Master the crucial audio component of video production",
    content: {
      whatToLearn: [
        "Audio synchronization",
        "Noise removal techniques",
        "EQ and compression basics",
        "Background scoring",
        "Audio ducking and mixing",
        "Voice enhancement",
      ],
      bestResources: {
        english: [
          "Curtis Judd Audio for Video",
          "Adobe Audition Essential Training",
          "Sound Design Masterclass (Udemy)",
          "Music for Film (Berklee Online)",
        ],
        hindi: [
          "Audio Editing in Premiere Pro (Hindi) by GFX Mentor",
          "Sound Design Hindi Tutorial by Tech Raj",
          "Audacity Basics Hindi by Technical Sagar",
          "Music Mixing Hindi by Techno Vedant",
        ],
      },
      toolsToUse: [
        "Audacity (free)",
        "Adobe Audition",
        "FL Studio (optional)",
        "Fairlight (in DaVinci Resolve)",
        "iZotope RX (for repair)",
      ],
      docsAndWebsites: [
        "Audacity Manual",
        "Adobe Audition Tutorials",
        "Sound Design Tutorials",
        "Audio Mixing Basics",
        "Epidemic Sound Blog",
      ],
      projectIdeas: [
        "Clean up interview audio",
        "Create a soundscape for footage",
        "Record and mix a voiceover",
        "Sync and mix dialogue scenes",
      ],
    },
  },
  {
    id: 5,
    title: "Practice with Stock Assets",
    description: "Hone your skills using freely available resources",
    content: {
      whatToLearn: [
        "Finding quality stock footage",
        "Working with stock music",
        "Using sound effects libraries",
        "Creating projects from stock elements",
        "Combining stock with original footage",
        "Legal aspects of stock usage",
      ],
      bestResources: {
        english: [
          "Stock Video Editing Challenge (YouTube)",
          "Create a Demo Reel from Stock (Udemy)",
          "Envato Tutorials for Stock Usage",
          "Motion Array Training Videos",
        ],
        hindi: [
          "Stock Footage Se Video Editing by Tech Raj",
          "Free Stock Assets Guide Hindi by GFX Mentor",
          "Stock Music Selection Hindi by Technical Sagar",
          "Copyright Guide for Stock Hindi by Techno Vedant",
        ],
      },
      toolsToUse: [
        "Pexels Videos",
        "Pixabay",
        "Mixkit",
        "Videvo",
        "Free Music Archive",
        "Freesound.org",
      ],
      docsAndWebsites: [
        "Storyblocks Blog",
        "Envato Elements Tutorials",
        "Artlist.io Resources",
        "Epidemic Sound Blog",
        "Motion Array Tips",
      ],
      projectIdeas: [
        "Create a travel promo from stock footage",
        "Edit a product commercial using stock",
        "Make a movie trailer with stock footage",
        "Build a complete brand video from stock",
      ],
    },
  },
  {
    id: 6,
    title: "Follow Industry Resources & Blogs",
    description: "Stay updated with trends and techniques",
    content: {
      whatToLearn: [
        "Current editing trends",
        "Industry standards and workflows",
        "New software features and updates",
        "Professional editors' techniques",
        "Business aspects of video editing",
        "Industry news and developments",
      ],
      bestResources: {
        english: [
          "NoFilmSchool Blog",
          "RocketStock Blog",
          "Adobe Premiere Blog",
          "Frame.io Insider",
          "PremiumBeat Blog",
        ],
        hindi: [
          "Filmi Gyan Hindi Blog",
          "Video Editing Updates by Tech Raj",
          "Film Industry News Hindi by GFX Mentor",
          "Techno Vedant News Updates",
        ],
      },
      toolsToUse: [
        "Feedly (for RSS)",
        "Twitter Lists (following editors)",
        "YouTube Subscriptions",
        "LinkedIn Groups",
        "Reddit Communities",
      ],
      docsAndWebsites: [
        "NoFilmSchool",
        "RocketStock",
        "Adobe Blog",
        "Motion Array Blog",
        "Creative COW Forums",
      ],
      projectIdeas: [
        "Recreate trending editing styles",
        "Try new techniques from tutorials",
        "Join editing challenges",
        "Review new plugins or software",
      ],
    },
  },
  {
    id: 7,
    title: "Practice & Portfolio Building",
    description: "Build your showcase and gain real experience",
    content: {
      whatToLearn: [
        "Creating a cohesive style",
        "Building a demo reel",
        "Client communication",
        "Project management",
        "Time estimation",
        "Receiving and implementing feedback",
      ],
      bestResources: {
        english: [
          "How to Build a Video Editing Portfolio (LinkedIn Learning)",
          "Freelance Video Editing Guide (Udemy)",
          "Client Management for Video Editors (Skillshare)",
          "Portfolio Review Sessions (YouTube)",
        ],
        hindi: [
          "Video Editing Portfolio Guide Hindi by Tech Raj",
          "Freelancing Guide Hindi by GFX Mentor",
          "Client Communication Hindi by Technical Sagar",
          "Demo Reel Creation Hindi by Techno Vedant",
        ],
      },
      toolsToUse: [
        "Behance",
        "YouTube Channel",
        "Instagram Reels",
        "Vimeo",
        "Personal Website",
        "Dribbble (for motion graphics)",
      ],
      docsAndWebsites: [
        "Behance Editing Portfolios",
        "Vimeo Staff Picks",
        "Top Editing Reels",
        "Successful Freelancer Profiles",
        "Video Editor CV Templates",
      ],
      projectIdeas: [
        "Edit 1 video/day for 30 days",
        "Recreate transitions from famous movies",
        "Create a 60-second demo reel",
        "Volunteer for non-profit video projects",
      ],
    },
  },
  {
    id: 8,
    title: "Advanced Techniques & Specialization",
    description: "Deepen your skills and find your niche",
    content: {
      whatToLearn: [
        "Motion graphics integration",
        "VFX compositing basics",
        "Advanced color grading",
        "Cinematic techniques",
        "Specialized genres (wedding, corporate, etc.)",
        "Multicamera editing",
      ],
      bestResources: {
        english: [
          "Motion Design School",
          "School of Motion",
          "After Effects Apprentice",
          "Advanced Editing Techniques (Masterclass)",
          "Mt. Mograph on YouTube",
        ],
        hindi: [
          "Advanced Video Editing Hindi by Tech Raj",
          "After Effects Hindi Tutorial by GFX Mentor",
          "Motion Graphics Hindi by Technical Sagar",
          "VFX Compositing Hindi by Techno Vedant",
        ],
      },
      toolsToUse: [
        "After Effects",
        "Blender",
        "Fusion (in DaVinci Resolve)",
        "Canva Pro",
        "Mocha Pro",
        "Particular/Trapcode Suite",
      ],
      docsAndWebsites: [
        "Video Copilot",
        "Red Giant Tutorials",
        "Greyscalegorilla",
        "Motionographer",
        "School of Motion Blog",
      ],
      projectIdeas: [
        "Logo animation for a brand",
        "Lyric video with motion graphics",
        "VFX short film",
        "Motion graphics explainer video",
      ],
    },
  },
  {
    id: 9,
    title: "Certifications & Continuing Education",
    description: "Formal recognition and ongoing learning",
    content: {
      whatToLearn: [
        "Industry-recognized certifications",
        "Advanced courses and workshops",
        "Networking with professionals",
        "Masterclasses and conferences",
        "Film theory and critique",
        "Ethical practices in editing",
      ],
      bestResources: {
        english: [
          "Adobe Certified Professional: Video Design",
          "DaVinci Resolve Certification",
          "Final Cut Pro X Certification",
          "Avid Media Composer Certification",
          "MasterClass - Film Editing",
        ],
        hindi: [
          "Adobe Certification Guide Hindi by Tech Raj",
          "DaVinci Certification Hindi Guide by GFX Mentor",
          "Film Theory Hindi Classes by Technical Sagar",
          "Professional Growth Hindi by Techno Vedant",
        ],
      },
      toolsToUse: [
        "LinkedIn Learning",
        "Skillshare",
        "MasterClass",
        "EditMentor",
        "Coursera",
        "Udemy",
      ],
      docsAndWebsites: [
        "Adobe Certification Center",
        "Blackmagic Design Training",
        "Apple Pro Training",
        "Film Editing Pro",
        "Inside The Edit",
      ],
      projectIdeas: [
        "Study and analyze editing in award-winning films",
        "Participate in editing competitions",
        "Create tutorials for beginners",
        "Collaborate with other certified editors",
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

  // Function to handle the download process with enhanced design layout
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
      title.style.borderBottom = "3px solid #8e44ad"; // Purple color for Video Editor theme
      title.style.paddingBottom = "15px";
      title.textContent = "Video Editor Roadmap";
      downloadDiv.appendChild(title);

      // Add roadmap content with improved styling
      roadmapData.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections

        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#f4f2f7";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #8e44ad";
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
        whatToLearnTitle.textContent = "✅ What to Learn";
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

        // Best Resources with better organization
        const bestResources = document.createElement("div");
        bestResources.style.marginBottom = "25px";

        const bestResourcesTitle = document.createElement("h3");
        bestResourcesTitle.style.fontSize = "18px";
        bestResourcesTitle.style.fontWeight = "600";
        bestResourcesTitle.style.color = "#3498db";
        bestResourcesTitle.style.marginBottom = "12px";
        bestResourcesTitle.style.borderBottom = "2px solid #3498db";
        bestResourcesTitle.style.paddingBottom = "5px";
        bestResourcesTitle.textContent = "📚 Best Resources";
        bestResources.appendChild(bestResourcesTitle);

        // English resources
        const englishTitle = document.createElement("h4");
        englishTitle.style.fontSize = "16px";
        englishTitle.style.fontWeight = "500";
        englishTitle.style.color = "#2c3e50";
        englishTitle.style.marginTop = "15px";
        englishTitle.style.marginBottom = "10px";
        englishTitle.textContent = "In English:";
        bestResources.appendChild(englishTitle);

        const englishList = document.createElement("ul");
        englishList.style.paddingLeft = "25px";
        englishList.style.margin = "10px 0";
        section.content.bestResources.english.forEach((resource) => {
          const li = document.createElement("li");
          li.style.marginBottom = "6px";
          li.style.fontSize = "13px";
          li.style.lineHeight = "1.5";
          li.style.color = "#34495e";
          li.textContent = resource;
          englishList.appendChild(li);
        });
        bestResources.appendChild(englishList);

        // Hindi resources
        const hindiTitle = document.createElement("h4");
        hindiTitle.style.fontSize = "16px";
        hindiTitle.style.fontWeight = "500";
        hindiTitle.style.color = "#2c3e50";
        hindiTitle.style.marginTop = "15px";
        hindiTitle.style.marginBottom = "10px";
        hindiTitle.textContent = "In Hindi:";
        bestResources.appendChild(hindiTitle);

        const hindiList = document.createElement("ul");
        hindiList.style.paddingLeft = "25px";
        hindiList.style.margin = "10px 0";
        section.content.bestResources.hindi.forEach((resource) => {
          const li = document.createElement("li");
          li.style.marginBottom = "6px";
          li.style.fontSize = "13px";
          li.style.lineHeight = "1.5";
          li.style.color = "#34495e";
          li.textContent = resource;
          hindiList.appendChild(li);
        });
        bestResources.appendChild(hindiList);
        sectionDiv.appendChild(bestResources);

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

        // Docs & Websites with better styling
        const docs = document.createElement("div");
        docs.style.marginBottom = "25px";

        const docsTitle = document.createElement("h3");
        docsTitle.style.fontSize = "18px";
        docsTitle.style.fontWeight = "600";
        docsTitle.style.color = "#e74c3c";
        docsTitle.style.marginBottom = "12px";
        docsTitle.style.borderBottom = "2px solid #e74c3c";
        docsTitle.style.paddingBottom = "5px";
        docsTitle.textContent = "📘 Docs & Websites";
        docs.appendChild(docsTitle);

        const docsList = document.createElement("ul");
        docsList.style.paddingLeft = "25px";
        docsList.style.margin = "15px 0";
        section.content.docsAndWebsites.forEach((doc) => {
          const li = document.createElement("li");
          li.style.marginBottom = "8px";
          li.style.fontSize = "14px";
          li.style.lineHeight = "1.6";
          li.style.color = "#34495e";
          li.textContent = doc;
          docsList.appendChild(li);
        });
        docs.appendChild(docsList);
        sectionDiv.appendChild(docs);

        // Project Ideas with better styling
        const projects = document.createElement("div");
        projects.style.marginBottom = "25px";

        const projectsTitle = document.createElement("h3");
        projectsTitle.style.fontSize = "18px";
        projectsTitle.style.fontWeight = "600";
        projectsTitle.style.color = "#8e44ad"; // Purple theme for Video Editor
        projectsTitle.style.marginBottom = "12px";
        projectsTitle.style.borderBottom = "2px solid #8e44ad";
        projectsTitle.style.paddingBottom = "5px";
        projectsTitle.textContent = "💡 Project Ideas";
        projects.appendChild(projectsTitle);

        const projectsList = document.createElement("ul");
        projectsList.style.paddingLeft = "25px";
        projectsList.style.margin = "15px 0";
        section.content.projectIdeas.forEach((project) => {
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
      pdf.save("Video_Editor_Roadmap.pdf");

      // Store the downloaded roadmap data to localStorage
      localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

      // Show success message with better styling
      alert("Video Editor Roadmap downloaded successfully!");

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
        <title>Video Editor Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for becoming a professional Video Editor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Video Editor Roadmap</h1>
        <div className="flex items-center gap-4">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-4 py-2 rounded-md flex items-center ${
              darkMode
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-purple-500 text-white hover:bg-purple-600"
            } transition-colors ${downloading ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Download Roadmap as PDF"
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
                  />
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
            Welcome to the Video Editor Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a professional Video Editor. Whether
            you're creating content for YouTube, editing films, or producing
            corporate videos, each section provides curated resources in both
            English and Hindi to help you master the craft. Click on any section
            to expand it and explore its contents.
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
                      darkMode ? "bg-purple-600" : "bg-purple-500"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Resources */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>Best Resources
                    </h4>

                    <div className="space-y-4">
                      {/* English Resources */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestResources.english.map(
                            (resource, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-purple-500 mr-2">
                                  •
                                </span>
                                {resource}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Hindi Resources */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestResources.hindi.map(
                            (resource, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-purple-500 mr-2">
                                  •
                                </span>
                                {resource}
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
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
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
                Video Editor Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a professional Video Editor
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-purple-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  YouTube
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  Instagram
                </a>
              </div>
              <p className="text-xs">
                © 2025 Video Editor Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
