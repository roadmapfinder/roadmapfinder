"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Video, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const VideoEditingRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Stage",
      description: "Understand basics of editing, storytelling, and technical essentials",
      color: "bg-gray-600",
      sections: [
        {
          title: "Core Editing Concepts",
          items: [
            "What video editing actually is → Assembling shots to tell a story",
            "Timeline, cuts, transitions, keyframes → Basic editing interface understanding",
            "Types of cuts → Jump cut, J-cut, L-cut, match cut, montage techniques",
            "Aspect ratios & frame rates → 16:9, 9:16, 1:1 formats, 24fps, 30fps, 60fps standards",
            "Color space basics → sRGB, Rec.709, HDR fundamentals"
          ]
        },
        {
          title: "Beginner Software (Pick One)",
          items: [
            "Free options → DaVinci Resolve, CapCut Desktop, HitFilm Express, iMovie",
            "Industry standard → Adobe Premiere Pro, Final Cut Pro, Avid Media Composer",
            "Import/export workflow → File management, codec understanding, project organization",
            "Cutting & trimming → Basic timeline navigation, ripple edit, blade tool",
            "Adding audio → Music tracks, sound effects, basic audio mixing",
            "Simple transitions → Cross dissolve, fade in/out, basic wipes"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Edit a vlog → Simple storytelling, pacing, basic cuts",
            "Create a short montage → Music synchronization, beat matching",
            "Cut a social media reel → 9:16 vertical format, TikTok style editing",
            "Practice basic workflow → From import to final export"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Skill Building",
      subtitle: "Intermediate Level",
      description: "Go beyond cutting → start controlling story, mood, and style",
      color: "bg-blue-500",
      sections: [
        {
          title: "Audio Mastery",
          items: [
            "Audio levels → -6dB to -12dB for voice, -18dB for background music",
            "Noise reduction, EQ, compression → Clean audio production techniques",
            "Syncing video & audio → Manual sync, timecode, multicam audio",
            "Royalty-free music sources → Licensing, copyright, music selection"
          ]
        },
        {
          title: "Motion & Effects",
          items: [
            "Keyframing → Scale, position, opacity animation over time",
            "Speed effects → Speed ramping, slow motion, freeze frames",
            "Green screen basics → Chroma key, keying techniques, compositing",
            "Simple text & lower thirds → Typography, safe areas, graphic design"
          ]
        },
        {
          title: "Color Correction & Grading",
          items: [
            "Correction vs Grading → Technical fixes vs creative styling",
            "Essential tools → Scopes, curves, color wheels, LUTs",
            "Primary vs secondary → Overall adjustments vs selective color work",
            "Popular looks → Cinematic teal & orange, film emulation, vintage styles"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Short documentary (3–5 mins) → Interview editing, B-roll integration",
            "Music video edit → Creative transitions, rhythm-based editing",
            "Instagram reel with beat sync → Advanced transition timing",
            "Color-graded travel video → Cinematic look development"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Editing",
      subtitle: "Industry Standard Skills",
      description: "Achieve professional-level quality with high-end workflows",
      color: "bg-green-500",
      sections: [
        {
          title: "Advanced Editing Techniques",
          items: [
            "Multi-cam editing → Concerts, podcasts, interviews, angle switching",
            "Proxy workflows → Managing 4K/8K footage, transcoding, offline editing",
            "Nested sequences → Advanced timeline management, organization",
            "Advanced transitions → Masking, morph cuts, seamless scene changes"
          ]
        },
        {
          title: "VFX & Motion Graphics",
          items: [
            "After Effects or Fusion → Motion graphics software fundamentals",
            "Motion tracking & stabilization → Camera shake removal, object tracking",
            "Compositing → Adding elements into footage, green screen mastery",
            "2D/3D title animations → Kinetic typography, logo animation"
          ]
        },
        {
          title: "Industry Audio Workflows",
          items: [
            "Advanced audio mixing → Multi-track mixing, automation, effects chains",
            "ADR basics → Automated Dialogue Replacement, sync techniques",
            "Sound design → Creating atmosphere, Foley, audio storytelling",
            "Surround sound intro → 5.1, Dolby Atmos basics, spatial audio"
          ]
        },
        {
          title: "Professional Color Grading",
          items: [
            "DaVinci Resolve nodes → Node-based color correction workflow",
            "Skin tone isolation → Secondary color correction, power windows",
            "Shot matching → Consistency across scenes, color continuity",
            "HDR workflows → Dolby Vision, HLG, high dynamic range delivery"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Full short film (5–15 mins) → Complete post-production pipeline",
            "Corporate promo/ad video → Commercial editing standards",
            "Motion graphics explainer → Educational content creation",
            "Multi-camera live event → Concert or presentation editing"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry Readiness",
      subtitle: "Professional Level",
      description: "Become hire-ready as freelance editor, studio editor, or content creator",
      color: "bg-purple-500",
      sections: [
        {
          title: "Software Ecosystem (Pro Tools)",
          items: [
            "Editing platforms → Premiere Pro, Final Cut Pro, Avid, DaVinci Resolve mastery",
            "VFX/Motion Graphics → After Effects, Blender, Cinema 4D integration",
            "Audio tools → Audition, Pro Tools, Logic Pro X workflow",
            "Collaboration → Frame.io, Adobe Team Projects, review systems"
          ]
        },
        {
          title: "Professional Workflows",
          items: [
            "Format specialization → Ads, YouTube, films, reels, broadcast TV standards",
            "Codec mastery → ProRes, DNxHD, H.264, H.265, RAW formats",
            "File management → Naming conventions, proxies, archive systems",
            "Deliverable specs → Social media exports, broadcast specs, DCP for cinema"
          ]
        },
        {
          title: "Portfolio Building",
          items: [
            "Demo reel creation → 1–2 minute showreel showcasing best work",
            "Content creator editing → YouTube, TikTok, podcast specialization",
            "Commercial/advertising → Brand work, product videos, campaigns",
            "Film & storytelling → Narrative work, documentary style",
            "Event/wedding editing → Live event coverage, highlight reels"
          ]
        },
        {
          title: "Industry Skills",
          items: [
            "Team collaboration → Working with cinematographers, sound designers, directors",
            "Client communication → Feedback handling, revision management",
            "Time management → Meeting deadlines, efficient workflow optimization",
            "Freelance platforms → Upwork, Fiverr networking, business development"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Mastery & Trends",
      subtitle: "2025 and Beyond",
      description: "Stay updated with latest editing tech & trends",
      color: "bg-red-500",
      sections: [
        {
          title: "AI in Video Editing",
          items: [
            "AI-powered editing → Runway, Pika Labs, Adobe Firefly, DaVinci AI tools",
            "Auto-cutting features → Speech-to-text captions, automated scene detection",
            "Generative content → AI object removal, background extension, content generation",
            "Workflow automation → Smart conforming, auto-sync, intelligent organization"
          ]
        },
        {
          title: "Specialized Industry Areas",
          items: [
            "Short-form content → TikTok, Instagram Reels, YouTube Shorts optimization",
            "Long-form YouTube → Documentary style, educational content, storytelling",
            "Corporate & events → Business communications, live event production",
            "Feature films & OTT → Cinema workflows, streaming platform requirements"
          ]
        },
        {
          title: "Continuous Growth",
          items: [
            "Cinematography basics → Understanding footage quality, camera techniques",
            "Study great editors → Walter Murch, Thelma Schoonmaker editing styles",
            "Emerging formats → 8K workflows, VR/360° video, immersive content",
            "Industry networking → Professional associations, conferences, mentorship"
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
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
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
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
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
                🎬 Congratulations! You're Video Editing Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Video Editing Mastery Roadmap and are now ready to create professional-quality content and work in the industry.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Create a compelling demo reel showcasing your best work across different styles</li>
                  <li>• Build relationships with content creators, filmmakers, and production companies</li>
                  <li>• Stay updated with new software features, codecs, and industry standards</li>
                  <li>• Practice working under tight deadlines and client feedback scenarios</li>
                  <li>• Join video editing communities and attend industry events for networking</li>
                </ul>
              </div>
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
            <Video className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Video Editing <span className="text-blue-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
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
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Video size={18} className="mr-2" />
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

export default VideoEditingRoadmap;