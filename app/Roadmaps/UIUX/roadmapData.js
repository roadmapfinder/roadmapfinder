// roadmapData.js
export const phases = [
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