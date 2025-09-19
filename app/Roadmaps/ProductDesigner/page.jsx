"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const ProductDesignerRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Level",
      description: "Understand design basics, principles, and thinking",
      color: "bg-blue-500",
      sections: [
        {
          title: "Design Fundamentals",
          items: [
            "Visual hierarchy, contrast, balance, proximity, alignment, repetition",
            "Typography basics (serif vs sans-serif, pairing, readability)",
            "Color theory (complementary, analogous, accessibility contrast)",
            "Layout and composition (grids, spacing, white space)"
          ]
        },
        {
          title: "Design Thinking & Problem Solving",
          items: [
            "Double diamond process (Discover → Define → Develop → Deliver)",
            "Human-Centered Design principles",
            "Understanding business goals vs user needs"
          ]
        },
        {
          title: "Basic Tools",
          items: [
            "Figma (or Sketch/XD but Figma dominates 2025)",
            "Whiteboarding: FigJam, Miro",
            "Iconography: Material Icons, Phosphor, Lucide"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Redesign an existing app (e.g., Spotify, YouTube)",
            "Create a landing page UI in Figma",
            "Build a design system mini-style guide (colors, typography, buttons)"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "UX Foundations",
      subtitle: "Junior Level",
      description: "Learn UX Research + Wireframing + Prototyping",
      color: "bg-purple-500",
      sections: [
        {
          title: "UX Research",
          items: [
            "User personas, empathy maps",
            "Surveys & interviews",
            "Competitive analysis",
            "Journey mapping"
          ]
        },
        {
          title: "Information Architecture",
          items: [
            "Card sorting, sitemap creation",
            "Navigation & hierarchy"
          ]
        },
        {
          title: "Wireframing & Prototyping",
          items: [
            "Low-fidelity wireframes (paper, Balsamiq, Figma)",
            "High-fidelity prototypes (Figma interactive prototypes)",
            "Micro-interactions & motion design basics"
          ]
        },
        {
          title: "Accessibility & Inclusivity",
          items: [
            "WCAG 2.2 standards (color contrast, screen reader-friendly)",
            "Designing for all devices (responsive, mobile-first)"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "UI & Product Design",
      subtitle: "Mid-Level",
      description: "Become a Product Designer with a solid portfolio",
      color: "bg-green-500",
      sections: [
        {
          title: "UI Specialization",
          items: [
            "Advanced grids & layouts",
            "Design systems (Material Design 3, Apple HIG)",
            "Component libraries & reusable elements in Figma",
            "Dark mode design principles"
          ]
        },
        {
          title: "Product Design Skills",
          items: [
            "Understanding product strategy & business goals",
            "Metrics-driven design (KPIs, A/B testing)",
            "Growth & retention design patterns",
            "Design for scalability (modular design systems)"
          ]
        },
        {
          title: "Collaboration & Handoff",
          items: [
            "Figma → Dev handoff (Zeplin, Figma Inspect)",
            "Working with PMs, Developers, Marketing",
            "Agile/scrum workflow for designers"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced & Industry-Ready",
      subtitle: "Senior Level",
      description: "Be job-ready with strong portfolio + industry practices",
      color: "bg-orange-500",
      sections: [
        {
          title: "Advanced UX & Research",
          items: [
            "Data-informed design (Mixpanel, Hotjar, Google Analytics)",
            "Conversion Rate Optimization (CRO)",
            "Usability testing (moderated/unmoderated, A/B testing)"
          ]
        },
        {
          title: "Design Leadership Skills",
          items: [
            "Storytelling in design presentations",
            "Giving & receiving design critiques",
            "Mentoring junior designers"
          ]
        },
        {
          title: "Specializations",
          items: [
            "Interaction Design (IxD): Animations, transitions, motion UI",
            "UX Writing & Content Design",
            "Service Design (cross-platform journeys)",
            "AI + Product Design (AI-driven UX, personalization)"
          ]
        },
        {
          title: "Industry Tools & Skills",
          items: [
            "Figma (master auto-layout, variables, tokens, plugins)",
            "Prototyping tools: Principle, ProtoPie, Framer",
            "Analytics + experimentation tools: Mixpanel, Amplitude, Maze",
            "Dev collaboration: Notion, Jira, GitHub (basic understanding)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Career & Growth",
      subtitle: "Professional Level",
      description: "Land a job / freelance as Product Designer",
      color: "bg-red-500",
      sections: [
        {
          title: "Portfolio Building",
          items: [
            "At least 3–5 case studies (show thought process, not just pretty screens)",
            "Document iterations & research insights",
            "Use storytelling → 'This is the problem I solved…'"
          ]
        },
        {
          title: "Resume & Branding",
          items: [
            "LinkedIn optimization",
            "Personal website (showcasing portfolio, blog, case studies)",
            "Networking (Design Twitter, Dribbble, Behance, ProductHunt)"
          ]
        },
        {
          title: "Interviews & Job Prep",
          items: [
            "Whiteboard challenges (designing flows in real time)",
            "Portfolio presentations",
            "Product thinking questions (e.g., 'How would you improve Uber's driver onboarding?')"
          ]
        },
        {
          title: "Continuous Learning",
          items: [
            "Follow top designers (Jared Spool, Julie Zhuo, Pablo Stanley)",
            "Read: Don't Make Me Think (Steve Krug), The Design of Everyday Things (Don Norman)",
            "Keep up with AI in design (Figma AI, Galileo AI, Uizard)"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        // Optional: Show success toast/notification
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
        // Optional: Show error toast/notification
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Step {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Step {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You're Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've completed the Product Designer Roadmap and are now ready to take on professional design challenges.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Product Designer <span className="text-blue-600">Roadmap</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductDesignerRoadmap;