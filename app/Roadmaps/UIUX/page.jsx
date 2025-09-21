"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Palette, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const UXDesignRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Foundations",
      subtitle: "Beginner Level",
      description: "Understand what UX is, basic visual design, and ship simple prototypes",
      color: "bg-gray-600",
      sections: [
        {
          title: "Mindset & Theory",
          items: [
            "Human-centered design → Design thinking principles and user empathy",
            "Nielsen's usability heuristics → 10 fundamental UX principles for usable interfaces",
            "Cognitive load basics → Mental processing, information architecture fundamentals",
            "Practice: Study popular apps and identify UX patterns and design principles"
          ]
        },
        {
          title: "Basic UX Research",
          items: [
            "Affinity mapping → Organizing research insights, pattern identification",
            "Basic interview technique → User interviews, question formulation, active listening",
            "Surveys → Quantitative research methods, survey design, data collection",
            "Simple analytics reading → Google Analytics basics, user behavior analysis"
          ]
        },
        {
          title: "Visual Design Basics",
          items: [
            "Typography scales → Font hierarchies, readability, typographic systems",
            "Spacing systems → Grid systems, consistent spacing, visual rhythm",
            "Color theory → Color psychology, accessibility, brand consistency",
            "Layout principles → Visual hierarchy, alignment, balance, contrast"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Tools & Prototyping",
      subtitle: "Beginner Level",
      description: "Learn Figma fundamentals and create your first interactive prototypes",
      color: "bg-green-500",
      sections: [
        {
          title: "Figma Fundamentals",
          items: [
            "Frames & Auto-layout → Responsive design, flexible layouts, constraints",
            "Components → Reusable design elements, variants, component libraries",
            "Prototyping → Interactive flows, transitions, micro-interactions",
            "FigJam workshops → Brainstorming, user journey mapping, collaborative design"
          ]
        },
        {
          title: "Prototyping Progression",
          items: [
            "Paper sketches → Rapid ideation, concept visualization, low-cost iteration",
            "Figma wireframes → Information architecture, content structure, layout",
            "Interactive prototypes → User testing, stakeholder demos, validation",
            "Deliverable creation → Design specs, developer handoff, documentation"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Junior UX Designer",
      subtitle: "Junior Level",
      description: "Apply research & interaction design, run small studies, produce interaction patterns",
      color: "bg-blue-500",
      sections: [
        {
          title: "Interaction Design",
          items: [
            "Microcopy → Button text, error messages, empty states, confirmation dialogs",
            "Affordances & feedback → Visual cues, hover states, loading indicators",
            "Error states → Error prevention, recovery, helpful error messaging",
            "User flows & IA → Information architecture, card sorting, task flows"
          ]
        },
        {
          title: "Usability Testing",
          items: [
            "Moderated remote testing → Screen sharing, task-based testing, observation",
            "Task success metrics → Completion rates, time on task, error analysis",
            "Test planning → Recruiting participants, writing scenarios, success criteria",
            "Analysis & reporting → Pattern identification, actionable recommendations"
          ]
        },
        {
          title: "Accessibility Fundamentals",
          items: [
            "Contrast ratios → WCAG AA standards, color accessibility, readability",
            "Semantic HTML → Screen readers, keyboard navigation, proper markup",
            "ARIA basics → Labels, roles, states, assistive technology support",
            "Inclusive design → Universal design principles, diverse user needs"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Tools & Workflow",
      subtitle: "Intermediate Level",
      description: "Master component libraries, tokens, and basic development handoff",
      color: "bg-purple-500",
      sections: [
        {
          title: "Advanced Figma",
          items: [
            "Variants → Component states, responsive behavior, conditional logic",
            "Component libraries → Design systems, documentation, maintenance",
            "Design tokens → Colors, typography, spacing, naming conventions",
            "Team collaboration → Version control, branching, review workflows"
          ]
        },
        {
          title: "Development Bridge",
          items: [
            "Basic HTML/CSS → Code understanding, developer communication, feasibility",
            "Storybook basics → Component documentation, design-dev synchronization",
            "Prototyping in code → HTML/CSS prototypes, interaction fidelity",
            "Handoff optimization → Design specs, asset export, developer tools"
          ]
        },
        {
          title: "Analytics & Research Tools",
          items: [
            "Miro/FigJam workshops → Remote collaboration, ideation, journey mapping",
            "Google Analytics → User behavior, conversion funnels, hypothesis building",
            "Hotjar basics → Heatmaps, session recordings, user feedback collection",
            "Research synthesis → Insight documentation, pattern identification"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Mid-Level UX Designer",
      subtitle: "Intermediate Level",
      description: "Design systems, metrics-driven design, and cross-functional leadership",
      color: "bg-red-500",
      sections: [
        {
          title: "Design Systems Theory",
          items: [
            "Atomic design → Atoms, molecules, organisms, templates, pages",
            "Design tokens → Cross-platform tokens, semantic naming, automation",
            "Component governance → Usage guidelines, contribution workflows, deprecation",
            "System scalability → Multi-brand systems, theming, customization"
          ]
        },
        {
          title: "Advanced Research Methods",
          items: [
            "Quantitative + qualitative → Mixed-methods research, data triangulation",
            "A/B testing → Hypothesis formation, statistical significance, test design",
            "Advanced interviews → Contextual inquiry, diary studies, longitudinal research",
            "Research operations → Participant recruitment, research repository, insights scaling"
          ]
        },
        {
          title: "Service Design & Product Thinking",
          items: [
            "User journey mapping → End-to-end experiences, touchpoint optimization",
            "Service blueprints → Behind-the-scenes processes, stakeholder mapping",
            "Product strategy → Feature prioritization, roadmap influence, business impact",
            "Cross-functional collaboration → Engineering, product, marketing alignment"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Advanced UX Tools",
      subtitle: "Advanced Level",
      description: "Production design systems, automation, and advanced prototyping",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Design System Infrastructure",
          items: [
            "Figma plugins → Automation, token synchronization, workflow optimization",
            "Automated token export → Design-to-code pipelines, CI/CD integration",
            "System maintenance → Version control, breaking changes, migration paths",
            "Multi-platform tokens → iOS, Android, web token synchronization"
          ]
        },
        {
          title: "Advanced Prototyping",
          items: [
            "Framer → High-fidelity prototypes, complex interactions, code components",
            "ProtoPie → Sensor-based prototypes, realistic mobile interactions",
            "React prototypes → Next.js, functional prototypes, data integration",
            "Motion design → Micro-interactions, animation principles, transition design"
          ]
        },
        {
          title: "Accessibility Tooling",
          items: [
            "axe DevTools → Automated accessibility testing, WCAG compliance checking",
            "WAVE → Web accessibility evaluation, error identification",
            "Lighthouse → Performance and accessibility auditing, optimization",
            "Manual testing → Screen readers, keyboard navigation, assistive technology"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Senior UX Designer",
      subtitle: "Advanced Level",
      description: "Lead product areas, run experiments, and drive measurable impact",
      color: "bg-orange-500",
      sections: [
        {
          title: "Metrics & Experimentation",
          items: [
            "A/B test leadership → Experiment design, statistical analysis, result interpretation",
            "Conversion optimization → Funnel analysis, user flow optimization, growth metrics",
            "SLIs and SLOs → Service level indicators, user experience objectives",
            "Impact measurement → Before/after metrics, ROI calculation, success criteria"
          ]
        },
        {
          title: "Cross-team Leadership",
          items: [
            "Design sprint facilitation → 5-day sprint process, stakeholder alignment",
            "Research democratization → Training non-researchers, research operations",
            "Design critique → Feedback culture, design quality, team growth",
            "Stakeholder management → Executive communication, design advocacy"
          ]
        },
        {
          title: "Advanced Interaction Design",
          items: [
            "Motion & micro-interactions → Purposeful animation, usability enhancement",
            "Complex user flows → Multi-step processes, error handling, edge cases",
            "Platform-specific design → iOS HIG, Material Design, responsive patterns",
            "Emerging technologies → AR/VR interfaces, voice UI, gesture-based design"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Lead/Principal UX Designer",
      subtitle: "Expert Level",
      description: "Influence product strategy, build design org capabilities, scale processes",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Organizational Design",
          items: [
            "Team building → Hiring, onboarding, career development, team structure",
            "Design operations → Process optimization, tool selection, workflow efficiency",
            "Mentoring → Junior designer growth, design critique, skill development",
            "Culture building → Design thinking adoption, user-centered culture"
          ]
        },
        {
          title: "Executive Communication",
          items: [
            "Design strategy → Long-term vision, competitive analysis, market positioning",
            "Metrics storytelling → Data visualization, business impact, ROI communication",
            "Roadmap influence → Feature prioritization, resource allocation, timeline planning",
            "Design advocacy → Design value, user research importance, quality standards"
          ]
        },
        {
          title: "System Governance",
          items: [
            "Design system governance → Contribution guidelines, review process, quality gates",
            "Cross-platform coordination → iOS, Android, web consistency, token management",
            "API for design tokens → Automated synchronization, developer integration",
            "Accessibility leadership → Organizational compliance, legal requirements, training"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "UX Specializations",
      subtitle: "Expert Level",
      description: "Deep expertise in specialized areas of UX design and research",
      color: "bg-pink-500",
      sections: [
        {
          title: "UX Research Specialist",
          items: [
            "Advanced methodologies → Ethnography, longitudinal studies, behavioral research",
            "Statistical analysis → Significance testing, correlation analysis, research validity",
            "Research operations → Participant panels, research repository, insight distribution",
            "Mixed methods → Combining qualitative and quantitative approaches effectively"
          ]
        },
        {
          title: "UX Engineering",
          items: [
            "Design system development → Component libraries, Storybook, documentation",
            "Cross-platform tokens → Automated synchronization, build processes, version control",
            "Prototyping frameworks → React, Vue, Angular component development",
            "Design-development workflow → CI/CD for design, automated testing"
          ]
        },
        {
          title: "Content & Accessibility",
          items: [
            "Content strategy → Information architecture, content audits, voice and tone",
            "Accessibility expertise → WCAG mastery, assistive technology testing, compliance",
            "Inclusive design → Universal design principles, diverse user needs, bias mitigation",
            "Localization → Internationalization, cultural considerations, multi-language design"
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
                🎨 Congratulations! You're UX Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the UX Design Development Roadmap and are now ready to lead user-centered design initiatives and create impactful digital experiences.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Build a portfolio with 3-5 case studies showing your complete design process</li>
                  <li>• Contribute to design communities and open-source design systems</li>
                  <li>• Stay updated with design trends, accessibility guidelines, and platform updates</li>
                  <li>• Practice whiteboard design challenges and prepare for UX interviews</li>
                  <li>• Network with other designers and join UX communities (IxDA, local meetups)</li>
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
              UX Design <span className="text-purple-600">Development Roadmap</span>
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

export default UXDesignRoadmap;