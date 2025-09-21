"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Palette, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const GraphicDesignRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Beginner Stage",
      description: "Master design basics, visual language, and fundamental tools",
      color: "bg-gray-600",
      sections: [
        {
          title: "Design Basics & Visual Language",
          items: [
            "Color Theory → Primary, secondary, complementary, triadic, monochromatic schemes",
            "Typography → Font families, pairing principles, visual hierarchy techniques",
            "Layouts & Composition → Grid systems, white space usage, balance, alignment",
            "Visual Hierarchy → Gestalt principles, focal points, information organization",
            "Iconography & Symbolism → Visual communication, cultural context, meaning"
          ]
        },
        {
          title: "Essential Tools to Learn",
          items: [
            "Traditional skills → Pen & paper sketching fundamentals for ideation",
            "Beginner tools → Canva for quick designs, Figma for digital layouts",
            "Free alternatives → GIMP for photo editing, Inkscape for vectors",
            "File management → Organizing projects, naming conventions, backups",
            "Basic workflow → From concept to final deliverable process"
          ]
        },
        {
          title: "Software Basics",
          items: [
            "Adobe Photoshop → Raster editing, photo manipulation, digital painting",
            "Adobe Illustrator → Vector graphics, logos, icons, scalable designs",
            "Figma/Canva → UI/UX design, collaborative design, web layouts",
            "Alternative tools → Affinity Designer/Photo as budget-friendly options",
            "Export formats → JPG, PNG, SVG, PDF understanding and optimization"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Event poster → Simple composition, typography, color application",
            "Social media post → Quote design, brand consistency, platform specs",
            "Flyer redesign → Layout improvement, visual hierarchy, readability",
            "Business card → Contact information design, branding elements"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Skill Building",
      subtitle: "Intermediate Level",
      description: "Develop branding expertise and advanced design techniques",
      color: "bg-blue-500",
      sections: [
        {
          title: "Color & Typography Mastery",
          items: [
            "RGB vs CMYK → Digital vs print color modes, color space understanding",
            "Palette creation → Adobe Color, Coolors tools, harmony principles",
            "Typography hierarchy → Headlines, body text, captions, readability",
            "Font psychology → Emotional impact, brand personality through type",
            "Color accessibility → Contrast ratios, colorblind-friendly design"
          ]
        },
        {
          title: "Branding & Identity Design",
          items: [
            "Logo design → Symbolic, typography, combination marks, versatility",
            "Brand identity → Color palettes, font systems, visual voice development",
            "Brand guidelines → Style guides, usage rules, consistency standards",
            "Mockup creation → Realistic brand application, presentation skills",
            "Brand strategy → Target audience, positioning, competitive analysis"
          ]
        },
        {
          title: "Advanced Typography & Layout",
          items: [
            "Typography mechanics → Kerning, leading, tracking fine-tuning",
            "Grid systems → Print and digital layout structures, modular grids",
            "Editorial design → Magazine layouts, e-books, long-form content",
            "White space mastery → Breathing room, visual rest, emphasis",
            "Layout psychology → Reading patterns, visual flow, user experience"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Brand identity package → Logo, business cards, letterheads, social media",
            "Magazine layout → 4-8 pages with advanced typography and imagery",
            "Brochure design → Tri-fold or bi-fold with compelling layout",
            "Mini brand guide → Colors, fonts, logo usage, visual examples"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Design",
      subtitle: "Industry Standard Skills",
      description: "Master UI/UX, motion graphics, and professional workflows",
      color: "bg-green-500",
      sections: [
        {
          title: "UI/UX & Digital Design",
          items: [
            "Wireframing & prototyping → User flow mapping, interactive mockups",
            "App & web design → Mobile-first approach, responsive layouts",
            "Color accessibility → WCAG compliance, contrast testing tools",
            "User research basics → Personas, journey mapping, usability testing",
            "Design systems → Component libraries, style guides, scalability"
          ]
        },
        {
          title: "Motion Graphics & Animation",
          items: [
            "Animation principles → Squash/stretch, timing, easing, anticipation",
            "Social media GIFs → Short video creation, platform optimization",
            "Typography animation → Kinetic type, text reveals, dynamic layouts",
            "Logo animation → Brand identity in motion, professional presentations",
            "Micro-interactions → Hover effects, button states, user feedback"
          ]
        },
        {
          title: "Advanced Illustration & Vector Work",
          items: [
            "Character illustration → Style development, consistency, storytelling",
            "Icon set design → Cohesive visual language, scalability, clarity",
            "Digital painting → Brush techniques, color theory application",
            "Vector mastery → Pen tool expertise, complex path manipulation",
            "Style exploration → Finding unique voice, trend awareness"
          ]
        },
        {
          title: "Advanced Tools Mastery",
          items: [
            "Adobe InDesign → Professional layouts, print preparation, typography",
            "After Effects → Motion graphics, video editing, animation",
            "Figma advanced → Auto-layout, variants, component systems",
            "Procreate/iPad Pro → Digital sketching, illustration workflows"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Complete app redesign → UX case study, user research, prototyping",
            "Motion graphics reel → Logo animations, social media content",
            "Custom icon library → 20+ icons with consistent style guide",
            "Editorial spread → Complex magazine layout with advanced typography"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry Readiness",
      subtitle: "Professional Level",
      description: "Build portfolio, client skills, and specialized expertise",
      color: "bg-purple-500",
      sections: [
        {
          title: "Specialization Areas",
          items: [
            "Brand Designer → Logo design, identity systems, brand strategy",
            "UI/UX Designer → Digital interfaces, user experience, app design",
            "Motion Designer → Social media animation, video content, kinetic graphics",
            "Illustrator → Digital art, concept design, editorial illustration",
            "Print Designer → Packaging, publications, traditional media"
          ]
        },
        {
          title: "Real-World Industry Skills",
          items: [
            "Portfolio development → 8-12 case studies, process documentation",
            "Client interaction → Brief handling, feedback management, presentations",
            "Project management → Timeline management, deliverable organization",
            "Pricing strategies → Freelance rates, project scoping, contracts",
            "Communication skills → Design rationale, stakeholder presentations"
          ]
        },
        {
          title: "Professional Workflows",
          items: [
            "File organization → Asset management, version control, backups",
            "Print production → Bleed, trim, color profiles, press-ready files",
            "Digital delivery → Web optimization, multiple format exports",
            "Collaboration tools → Design handoff, developer collaboration",
            "Quality control → Proofing processes, error checking, standards"
          ]
        },
        {
          title: "Portfolio Projects",
          items: [
            "Complete brand identity → Research, strategy, full visual system",
            "Digital product design → App or website with full UX process",
            "Editorial design → Magazine or book with complex typography",
            "Packaging design → 3D mockups, production considerations",
            "Campaign design → Multi-touchpoint brand experience"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Mastery & Trends",
      subtitle: "2025 and Beyond",
      description: "Stay current with AI tools, emerging trends, and industry evolution",
      color: "bg-red-500",
      sections: [
        {
          title: "AI Integration & Advanced Tools",
          items: [
            "AI design tools → MidJourney, DALL·E, Leonardo.ai for inspiration and mockups",
            "Adobe Firefly → Generative AI for creative assets and variations",
            "RunwayML → Video and motion AI for dynamic content creation",
            "AI workflow → Combining human creativity with AI efficiency",
            "Prompt engineering → Effective AI tool communication and results"
          ]
        },
        {
          title: "3D & Advanced Visual Effects",
          items: [
            "3D modeling basics → Blender fundamentals, Cinema 4D introduction",
            "Product visualization → 3D rendering, lighting, material design",
            "3D typography → Dimensional text, logo visualization",
            "AR/VR design → Immersive experience design principles",
            "3D integration → Combining 3D elements with 2D design"
          ]
        },
        {
          title: "Emerging Design Trends",
          items: [
            "Sustainable design → Eco-conscious materials, green printing practices",
            "Inclusive design → Accessibility, cultural sensitivity, universal design",
            "Variable fonts → Dynamic typography, responsive text systems",
            "Glassmorphism → Modern UI trends, depth and transparency",
            "Neo-brutalism → Bold, experimental digital design approaches"
          ]
        },
        {
          title: "Professional Development",
          items: [
            "Industry networking → Design communities, conferences, mentorship",
            "Continuous learning → Online courses, workshops, skill updates",
            "Thought leadership → Design writing, case study sharing, teaching",
            "Global perspectives → International design trends, cultural awareness",
            "Business acumen → Entrepreneurship, agency management, leadership"
          ]
        },
        {
          title: "Portfolio & Career Advancement",
          items: [
            "Online presence → Behance, Dribbble, LinkedIn portfolio optimization",
            "Interview preparation → Design challenges, portfolio presentations",
            "Freelance vs agency → Career path decision, skill specialization",
            "Design leadership → Team management, creative direction skills",
            "Industry recognition → Awards, publications, speaking opportunities"
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
                        Level {phase.id}: {phase.title}
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
                            className="bg-white rounded-lg border-2 border-purple-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-purple-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
                          Level {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Level {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎨 Congratulations! You're Graphic Design Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Graphic Design Mastery Roadmap and are now ready to create stunning visual designs and work professionally in the industry.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Build a diverse portfolio showcasing different design styles and industries</li>
                  <li>• Stay updated with current design trends while developing your unique style</li>
                  <li>• Network with other designers, agencies, and potential clients</li>
                  <li>• Practice working with real client briefs and tight deadlines</li>
                  <li>• Join design communities and seek feedback to continuously improve</li>
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
            <Palette className="text-purple-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Graphic Design <span className="text-purple-600">Mastery Roadmap</span>
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
            className="md:hidden bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
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
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Palette size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-purple-500 text-white'
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
                  ? 'bg-purple-500 text-white'
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

export default GraphicDesignRoadmap;