export const phases = [
  {
    id: 0,
    title: "Foundation",
    subtitle: "Mindset + Setup",
    description: "After Effects basics - understand before you create.",
    color: "bg-gray-500",
    sections: [
      {
        title: "💡 What You Must Understand First",
        items: [
          "After Effects = motion + compositing, not video editing",
          "AE is layer-based, not timeline-cut based (unlike Premiere)",
          "Composition vs Project fundamentals",
          "Frame rate (24 / 30 / 60 fps) and Resolution (HD, 4K)"
        ]
      },
      {
        title: "🛠️ Setup & Interface",
        items: [
          "Install Adobe After Effects (latest version)",
          "Project Panel navigation",
          "Composition Panel and Timeline",
          "Effects & Presets panel",
          "Keyboard shortcuts (non-negotiable)",
          "RAM Preview vs Render understanding"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner",
    subtitle: "0-1 Month",
    description: "Learn motion basics and build confidence.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📐 Core After Effects Basics",
        items: [
          "Layers (Text, Shape, Solid, Image, Video)",
          "Transform properties: Position, Scale, Rotation, Opacity",
          "Anchor Point (CRITICAL)",
          "Timeline navigation and layer management"
        ]
      },
      {
        title: "🎬 Keyframes & Animation Fundamentals",
        items: [
          "Linear vs Easy Ease",
          "Graph Editor (Speed Graph first)",
          "Timing & spacing principles",
          "Motion blur application"
        ]
      },
      {
        title: "✏️ Text & Shape Animation",
        items: [
          "Text Animator (Position, Opacity, Scale)",
          "Shape layers: Rectangle, Ellipse, Pen tool",
          "Trim Paths animation",
          "Stroke vs Fill understanding"
        ]
      },
      {
        title: "✨ Essential Effects",
        items: [
          "Blur (Gaussian, Fast Box)",
          "Glow and Drop Shadow",
          "CC Light Sweep",
          "Gradient Ramp"
        ]
      },
      {
        title: "🚀 Beginner Projects",
        items: [
          "✅ Animated name intro",
          "✅ Instagram reel text animation",
          "✅ Simple logo reveal",
          "✅ Lower thirds animation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate",
    subtitle: "1-3 Months",
    description: "Control motion like a designer.",
    color: "bg-green-500",
    sections: [
      {
        title: "🎨 Motion Design Principles",
        items: [
          "12 Principles of Animation (Disney)",
          "Easing theory and application",
          "Anticipation & Overshoot",
          "Follow-through, Weight & realism"
        ]
      },
      {
        title: "🔷 Advanced Shape Animation",
        items: [
          "Shape modifiers: Repeater, Offset Paths, Merge Paths",
          "Complex trim animations",
          "Icon animations and morphing",
          "Advanced path manipulation"
        ]
      },
      {
        title: "💻 Expressions (Very Important)",
        items: [
          "What expressions are and when to use them",
          "Linking properties dynamically",
          "Basic expressions: wiggle(2, 30), time*100",
          "Looping, auto animations, and reactive motion"
        ]
      },
      {
        title: "🎭 Masks & Mattes",
        items: [
          "Masking techniques and best practices",
          "Mask feather & expansion",
          "Track mattes: Alpha Matte, Luma Matte",
          "Reveal animations and transitions"
        ]
      },
      {
        title: "🎯 Intermediate Projects",
        items: [
          "✅ Explainer video scene",
          "✅ Animated infographic",
          "✅ Logo animation with expressions",
          "✅ UI animation mockup"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced",
    subtitle: "3-6 Months",
    description: "Look professional, not 'tutorial-made'.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🎬 Compositing & VFX Basics",
        items: [
          "Blend modes and adjustment layers",
          "Rotoscoping (Rotobrush 2.0)",
          "Green screen (Keylight)",
          "Light wrap basics and integration"
        ]
      },
      {
        title: "🌐 3D in After Effects",
        items: [
          "3D layers and space navigation",
          "Cameras (1-node & 2-node)",
          "Lights (Point, Spot, Ambient)",
          "Depth of field and parallax animation"
        ]
      },
      {
        title: "🎨 Color & Visual Polish",
        items: [
          "Color correction: Levels, Curves, Lumetri",
          "Matching footage and color grading",
          "Film grain and texture",
          "Visual consistency across projects"
        ]
      },
      {
        title: "🔌 Plugins (Industry Standard)",
        items: [
          "Motion: Motion 4 / Motion Tools",
          "Transitions: Flow, EaseCopy",
          "Effects: Saber, Element 3D (optional)",
          "Productivity: Overlord (Illustrator → AE)"
        ]
      },
      {
        title: "🚀 Advanced Projects",
        items: [
          "✅ Product promo video",
          "✅ Brand identity animation",
          "✅ Cinematic logo reveal",
          "✅ VFX composite shot"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Specialization Track",
    subtitle: "Pick Your Path",
    description: "Become employable in your chosen field.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🎨 Motion Graphics Designer",
        items: [
          "Brand animations and identity",
          "Social media ads and content",
          "Explainer videos and storytelling",
          "UI/UX motion design"
        ]
      },
      {
        title: "🎥 VFX Artist",
        items: [
          "Green screen compositing mastery",
          "Screen replacement techniques",
          "Camera tracking and match moving",
          "Realistic effects and integration"
        ]
      },
      {
        title: "📱 Content Creator / Reels Editor",
        items: [
          "Fast-paced motion editing",
          "Typography-driven edits",
          "Beat sync and music integration",
          "Trend-based animation styles"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry Ready",
    subtitle: "6-12 Months",
    description: "Professional workflow and career launch.",
    color: "bg-red-500",
    sections: [
      {
        title: "⚙️ Professional Workflow",
        items: [
          "Naming conventions and organization",
          "Pre-compositions and nesting",
          "Clean timelines and project structure",
          "Version control best practices"
        ]
      },
      {
        title: "📤 Rendering & Export",
        items: [
          "Render Queue vs Media Encoder",
          "Codecs: H.264, ProRes, Alpha channels",
          "Optimization for social platforms",
          "Quality vs file size balance"
        ]
      },
      {
        title: "💼 Portfolio Building (MOST IMPORTANT)",
        items: [
          "6–10 best projects with breakdowns",
          "Motion clarity and before/after shots",
          "Platforms: Behance, Vimeo, Instagram",
          "Personal website or showreel"
        ]
      },
      {
        title: "💰 Freelancing & Jobs",
        items: [
          "Fiverr / Upwork profile setup",
          "LinkedIn content and networking",
          "Cold outreach strategies",
          "Client communication and pricing motion work"
        ]
      },
      {
        title: "🎓 Must-Know Resources & Pro Tips",
        items: [
          "Adobe After Effects Docs and Learn platform",
          "Master timing before effects",
          "Don't rely on plugins early",
          "Study motion daily (Dribbble, Behance)",
          "Less effects = more professionalism"
        ]
      }
    ]
  }
];