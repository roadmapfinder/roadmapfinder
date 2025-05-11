"use client";
import { useState } from "react";
import Head from "next/head";

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

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
