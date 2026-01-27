export const phases = [
  {
    id: 0,
    title: "Foundations",
    subtitle: "Week 0-2",
    description: "Learning the Resolve interface, basic editing, and media management",
    color: "bg-gray-600",
    sections: [
      {
        title: "What is DaVinci Resolve?",
        items: [
          "Understanding Projects vs Timelines → Project organization structure",
          "Video formats → Codecs, containers, and compatibility",
          "Frame rates → 24fps, 30fps, 60fps and their uses",
          "Resolutions → HD, 4K, 8K standards",
          "Why: Professional video editing requires format knowledge"
        ]
      },
      {
        title: "Download & Install",
        items: [
          "DaVinci Resolve Free → Full-featured free version",
          "DaVinci Resolve Studio → Professional upgrade option",
          "System requirements → GPU, RAM, and storage needs",
          "Why: Installation sets foundation for everything"
        ]
      },
      {
        title: "Explore Interface",
        items: [
          "Media page → Import and organize footage",
          "Cut page → Fast editing workflow",
          "Edit page → Advanced timeline editing",
          "Fusion page → Motion graphics and VFX",
          "Color page → Professional color grading",
          "Fairlight page → Audio editing and mixing",
          "Deliver page → Export and rendering",
          "Outcome: Navigate all 7 pages confidently"
        ]
      },
      {
        title: "Media Management",
        items: [
          "Importing clips → File browser and media pool",
          "Organizing bins → Folder structure for projects",
          "Metadata basics → Tags, ratings, and keywords",
          "Syncing audio → Automatic and manual sync methods",
          "Why: Poor organization destroys productivity"
        ]
      },
      {
        title: "Basic Editing",
        items: [
          "Add clips to timeline → Drag and drop workflow",
          "Razor tool → Cut clips at playhead",
          "Trim → Adjust clip in/out points",
          "Ripple edit → Adjust and shift subsequent clips",
          "Roll edit → Adjust edit point between clips",
          "Slip edit → Change clip content without duration",
          "Transitions → Cross dissolve and basic effects",
          "Why: Master these core editing tools first"
        ]
      },
      {
        title: "Basic Exports",
        items: [
          "Quick Export → One-click YouTube export",
          "Custom settings → Codec, resolution, bitrate control",
          "H.264 vs H.265 → Understanding compression",
          "ProRes → Professional codec for quality",
          "Outcome: Export files for any platform"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Structured Editing",
    subtitle: "Week 3-6",
    description: "Building strong editorial skills and storytelling fundamentals",
    color: "bg-blue-500",
    sections: [
      {
        title: "Keyboard Shortcuts (Non-Negotiable)",
        items: [
          "J K L → Playback control (reverse, stop, forward)",
          "I O → Mark in and out points",
          "A S D → Overwrite, insert, replace editing",
          "B N → Razor and trim tools",
          "Cmd/Ctrl + Z → Undo operations",
          "Customize shortcuts → Edit shortcuts for speed",
          "Why: Speed separates professionals from amateurs"
        ]
      },
      {
        title: "Track Types & Organization",
        items: [
          "Video tracks → Layering and compositing",
          "Audio tracks → Dialogue, music, effects separation",
          "Nesting timelines → Complex sequence organization",
          "Markers → Add notes and reference points",
          "Color labels → Visual project organization",
          "Track locking → Prevent accidental changes",
          "Why: Professional projects need structure"
        ]
      },
      {
        title: "Advanced Editing Techniques",
        items: [
          "Multicam editing → Sync and switch camera angles",
          "Speed changes → Retime clips and create slow motion",
          "Compound clips → Group clips as single unit",
          "Dynamic trimming → Real-time edit adjustments",
          "Linked selection → Control audio/video linking",
          "Outcome: Edit complex multi-camera projects"
        ]
      },
      {
        title: "Timeline Tools Mastery",
        items: [
          "Snapping → Align clips precisely",
          "Magnetic timeline → Automatic gap closure",
          "Track targeting → Control which tracks receive edits",
          "Ripple delete → Remove clips and close gaps",
          "Range selection → Select portions across tracks"
        ]
      },
      {
        title: "Audio Editing Basics",
        items: [
          "Volume adjustment → Clip and track levels",
          "Audio fade → Smooth transitions in/out",
          "Audio crossfade → Blend between clips",
          "Waveform display → Visual audio editing",
          "Why: Good audio is half the production quality"
        ]
      },
      {
        title: "Editing Workflows",
        items: [
          "Proxy workflows → Edit high-res footage smoothly",
          "Optimized media → Convert for performance",
          "Offline/Online editing → Low-res edit, high-res finish",
          "Cache management → Smart and render cache",
          "Why: Workflow efficiency matters at scale"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Motion Graphics & VFX (Fusion)",
    subtitle: "Week 6-10",
    description: "Creating professional motion graphics and visual effects",
    color: "bg-green-500",
    sections: [
      {
        title: "Fusion Interface Basics",
        items: [
          "Node-based workflow → Visual programming approach",
          "Media In → Source footage input",
          "Tools → Effects and transformations",
          "Media Out → Final composite output",
          "Node tree organization → Clean workflow structure",
          "Why: Fusion is Resolve's VFX powerhouse"
        ]
      },
      {
        title: "Key Fusion Tools",
        items: [
          "Masks → Rectangle, ellipse, and polygon shapes",
          "BSpline masks → Custom curved shapes",
          "Keyframes → Animate properties over time",
          "Transform → Position, rotation, scale",
          "Merge → Composite multiple elements",
          "Background → Generate solid colors and gradients",
          "Why: These tools build everything else"
        ]
      },
      {
        title: "Visual Effects",
        items: [
          "Green screen keying → Chroma key compositing",
          "Delta Keyer → Professional keying tool",
          "Particles → Create dynamic motion effects",
          "Text animation → Animated titles and credits",
          "Glow and blur → Stylistic effects",
          "Outcome: Create professional VFX shots"
        ]
      },
      {
        title: "Motion Graphics",
        items: [
          "Lower thirds → Professional name/title graphics",
          "Logo animations → Reveal and transition effects",
          "Custom transitions → Build unique scene changes",
          "Text following path → Animated text on curves",
          "Shape animations → Geometric motion design"
        ]
      },
      {
        title: "Tracking & Stabilization",
        items: [
          "Point tracking → Track single points in footage",
          "Planar tracking → Track surfaces and planes",
          "Object removal → Remove unwanted elements",
          "Stabilization → Smooth shaky footage",
          "Match move → Attach graphics to moving objects",
          "Why: Tracking is essential for realistic composites"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Color Grading",
    subtitle: "Week 10-16",
    description: "Professional color correction and grading techniques",
    color: "bg-purple-500",
    sections: [
      {
        title: "Color Theory Fundamentals",
        items: [
          "Color vs exposure → Separating tone and color",
          "Waveform scope → Monitor luminance levels",
          "RGB Parade → Analyze color channels",
          "Vectorscope → Evaluate color saturation and hue",
          "Histogram → Understand exposure distribution",
          "Why: You can't color grade without reading scopes"
        ]
      },
      {
        title: "Color Wheels (Essential)",
        items: [
          "Lift → Adjust shadows and black point",
          "Gamma → Control midtones",
          "Gain → Adjust highlights and white point",
          "Offset → Shift overall image brightness",
          "Temperature vs Tint → Color balance control",
          "Why: Color wheels are the foundation of grading"
        ]
      },
      {
        title: "Primary Correction",
        items: [
          "Fix exposure → Balance brightness levels",
          "White balance → Correct color temperature",
          "Contrast adjustment → Set black and white points",
          "Saturation control → Color intensity management",
          "Outcome: Normalize footage before creative grading"
        ]
      },
      {
        title: "Secondary Correction",
        items: [
          "Power windows → Selective area grading",
          "Qualifiers → Select by color, luminance, saturation",
          "HSL curves → Precise color isolation",
          "Vignettes → Darken or lighten edges",
          "Skin tone isolation → Protect and enhance faces",
          "Why: Secondary corrections create professional looks"
        ]
      },
      {
        title: "Curves & Advanced Tools",
        items: [
          "Custom curves → Non-linear tonal adjustments",
          "RGB curves → Per-channel color control",
          "Hue vs Hue → Shift specific colors",
          "Hue vs Sat → Adjust color saturation selectively",
          "Lum vs Sat → Brightness-based saturation control"
        ]
      },
      {
        title: "Look Creation",
        items: [
          "Stylized grades → Cinematic color palettes",
          "LUT application → Load and apply Look-Up Tables",
          "LUT vs Grade → Understanding the difference",
          "Shot matching → Maintain consistency across scenes",
          "Creating custom LUTs → Save and export grades",
          "Why: This is where artistry meets technique"
        ]
      },
      {
        title: "Window Tracking",
        items: [
          "Track power windows → Follow moving subjects",
          "Face tracking → Automatic face detection",
          "Manual keyframing → Frame-by-frame adjustments",
          "Localized corrections → Grade specific elements",
          "Why: Static windows look amateur"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Audio (Fairlight)",
    subtitle: "Week 16-20",
    description: "Professional audio mixing, cleaning, and mastering",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Fairlight Interface",
        items: [
          "Mixer view → Track levels and routing",
          "Timeline view → Audio editing workspace",
          "Meters → Monitor audio levels accurately",
          "Track types → Mono, stereo, and surround",
          "Why: Fairlight is a professional DAW inside Resolve"
        ]
      },
      {
        title: "Audio Editing Basics",
        items: [
          "Clip gain → Adjust individual clip volume",
          "Fade handles → Create smooth audio transitions",
          "Normalization → Standardize audio levels",
          "Audio stretching → Time-stretch without pitch change",
          "Crossfades → Blend audio clips seamlessly"
        ]
      },
      {
        title: "Noise Reduction",
        items: [
          "De-noise → Remove background hiss and noise",
          "De-reverb → Reduce room echo",
          "De-hum → Remove electrical interference",
          "Voice isolation → AI-powered dialogue extraction",
          "Why: Clean audio is mandatory for professional work"
        ]
      },
      {
        title: "EQ & Compression",
        items: [
          "Parametric EQ → Frequency-specific adjustments",
          "High-pass filter → Remove low-frequency rumble",
          "Low-pass filter → Remove high-frequency noise",
          "Compression → Control dynamic range",
          "Multiband compression → Frequency-specific dynamics",
          "Clean dialogue tracks → Professional voice treatment"
        ]
      },
      {
        title: "Mixing Fundamentals",
        items: [
          "Panning → Position audio in stereo field",
          "Busses → Group tracks for processing",
          "Automation → Keyframe volume and effects",
          "Effects sends → Parallel processing chains",
          "Submixes → Organize complex projects",
          "Why: Mixing separates amateur from professional"
        ]
      },
      {
        title: "Mastering & Delivery",
        items: [
          "Loudness standards → LUFS targets for platforms",
          "Limiter → Prevent clipping and peaks",
          "Master bus processing → Final polish",
          "Export formats → WAV, MP3, AAC standards",
          "Outcome: Deliver broadcast-ready audio"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Professional Workflows",
    subtitle: "Week 20-24",
    description: "Real-world project pipelines and team collaboration",
    color: "bg-red-500",
    sections: [
      {
        title: "Team Collaboration",
        items: [
          "Project sharing → Multiple users on same project",
          "PostgreSQL database → Shared project database",
          "Concurrent editing → Simultaneous timeline work",
          "User permissions → Control access levels",
          "Why: Industry projects are always collaborative"
        ]
      },
      {
        title: "Backup & Archive",
        items: [
          "Project backup → Regular project saves",
          "Media archival → Long-term storage strategies",
          "DLT backup → Database and library backup",
          "Project restore → Recover from backups",
          "Why: Data loss means project death"
        ]
      },
      {
        title: "Media Management Techniques",
        items: [
          "Linking offline/online → Reconnect media files",
          "Proxy media → Low-res editing workflow",
          "Optimized media → Convert for performance",
          "Relinking workflows → Handle moved media",
          "Media pool organization → Enterprise-level structure"
        ]
      },
      {
        title: "Color Management",
        items: [
          "ACES workflow → Academy Color Encoding System",
          "DaVinci YRGB → Resolve's color science",
          "Color space transforms → Input and output transforms",
          "Timeline color space → Consistent color pipeline",
          "Why: Professional color requires color management"
        ]
      },
      {
        title: "Delivery Templates",
        items: [
          "YouTube presets → Optimized web delivery",
          "Apple ProRes → Broadcast and archival codec",
          "DNxHR → Avid-compatible delivery",
          "DCP → Digital Cinema Package for theaters",
          "Custom render presets → Reusable export settings",
          "Batch rendering → Export multiple versions",
          "Why: Efficient delivery saves hours weekly"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Industry-Ready Portfolio",
    subtitle: "Week 24-30",
    description: "Building professional reel and mastering advanced skills",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Reel Building Strategy",
        items: [
          "Best work examples → Edit, grade, and VFX showcase",
          "Variety demonstration → Show range of skills",
          "90-second maximum → Attention span reality",
          "Strong opening → Hook in first 5 seconds",
          "Music selection → Match energy to content",
          "Why: Your reel is your resume"
        ]
      },
      {
        title: "Client Workflow Management",
        items: [
          "Notes and revisions → Organized feedback system",
          "Version management → Track project iterations",
          "Frame.io integration → Client review platform",
          "Timecode notes → Precise revision communication",
          "Change tracking → Document all modifications"
        ]
      },
      {
        title: "Advanced Techniques",
        items: [
          "Stereoscopic 3D → Left/right eye workflow",
          "HDR workflows → High dynamic range delivery",
          "Immersive audio → 5.1 and Atmos mixing",
          "VR/360 editing → Spherical video techniques",
          "Remote collaboration → Cloud-based workflows"
        ]
      },
      {
        title: "Problem Solving Mastery",
        items: [
          "Color matching complex scenes → Consistency challenges",
          "Creative editing pacing → Rhythm and timing",
          "Salvaging bad footage → Fix exposure, focus issues",
          "Time management → Meet tight deadlines",
          "Outcome: Handle any project challenge"
        ]
      },
      {
        title: "Portfolio Checklist",
        items: [
          "✅ 3-5 edited projects → Demonstrate editing skills",
          "✅ 2-3 graded scenes → Show color expertise",
          "✅ 1 VFX/animation piece → Fusion capabilities",
          "✅ Audio mixed short → Fairlight proficiency",
          "✅ Professional reel → 60-90 second showcase",
          "✅ Case studies → Explain creative decisions",
          "Why: Portfolio gets you hired"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Specialized Skills",
    subtitle: "Optional but Powerful",
    description: "Advanced features and specialized workflows",
    color: "bg-orange-500",
    sections: [
      {
        title: "HDR Grading",
        items: [
          "HDR standards → Dolby Vision, HDR10, HLG",
          "Wide color gamut → Rec.2020 color space",
          "Nits and brightness → HDR luminance targets",
          "Tone mapping → SDR to HDR conversion",
          "When to learn: After Color basics mastered"
        ]
      },
      {
        title: "Fusion Scripting",
        items: [
          "Lua scripting → Automate Fusion tasks",
          "Expression language → Math-based animations",
          "Custom tools → Build reusable effects",
          "Macros → Save and share node groups",
          "When to learn: Intermediate Fusion level"
        ]
      },
      {
        title: "DaVinci Resolve Python API",
        items: [
          "Project automation → Batch operations",
          "Custom workflows → Tailored pipelines",
          "Metadata extraction → Database integration",
          "Render queue management → Automated exports",
          "When to learn: Advanced proficiency required"
        ]
      },
      {
        title: "Camera Workflows",
        items: [
          "RED workflow → R3D debayering and optimization",
          "ARRI workflow → ProRes and ARRIRAW handling",
          "BRAW → Blackmagic RAW processing",
          "Sony XAVC → Professional Sony camera formats",
          "When to learn: Working with professional cameras"
        ]
      },
      {
        title: "Advanced Audio Production",
        items: [
          "ADR recording → Dialogue replacement",
          "Foley creation → Sound effects design",
          "Immersive mixing → Dolby Atmos workflow",
          "Fairlight FX → Professional audio plugins",
          "When to learn: After Fairlight basics"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Anti-Patterns & Best Practices",
    subtitle: "What NOT to Do",
    description: "Common mistakes that mark amateurs",
    color: "bg-pink-500",
    sections: [
      {
        title: "Anti-Patterns (Memorize)",
        items: [
          "No project organization ❌ → Unstructured media pool chaos",
          "Editing in source resolution ❌ → Performance nightmare",
          "No backup strategy ❌ → Guaranteed disaster eventually",
          "Ignoring scopes while grading ❌ → Amateur color work",
          "Peaking audio levels ❌ → Clipped, distorted sound",
          "No proxy workflow for 4K+ ❌ → Slow, frustrating editing",
          "Overlapping dialogue ❌ → Unprofessional audio mix",
          "Using transitions as band-aids ❌ → Hides poor editing"
        ]
      },
      {
        title: "Professional Practices",
        items: [
          "✅ Name and organize everything → Bins, tracks, clips",
          "✅ Use proxies for 4K/8K → Smooth editing experience",
          "✅ Grade with scopes, not eyes → Objective color decisions",
          "✅ Mix to -23 LUFS → Broadcast standard loudness",
          "✅ Save versions frequently → Incremental backups",
          "✅ Test exports before delivery → Catch errors early",
          "✅ Document your settings → Reproducible workflows"
        ]
      },
      {
        title: "Performance Optimization",
        items: [
          "Generate optimized media → Faster playback",
          "Smart cache → Pre-render complex effects",
          "Disable clips when not needed → Reduce processing",
          "Render in place → Bake heavy effects",
          "GPU acceleration → Enable for supported effects",
          "Why: Speed is productivity in post-production"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Final Industry Checklist",
    subtitle: "Job-Ready Competencies",
    description: "Essential capabilities for professional work",
    color: "bg-teal-500",
    sections: [
      {
        title: "Core Competencies",
        items: [
          "✅ Edit a 5-minute short film → Complete editorial workflow",
          "✅ Color grade a multi-scene project → Consistent look creation",
          "✅ Create motion graphics in Fusion → Professional titles and effects",
          "✅ Mix audio to broadcast standards → Professional sound design",
          "✅ Deliver for multiple platforms → YouTube, broadcast, cinema",
          "✅ Manage team collaboration → Multi-user projects",
          "✅ Build a professional reel → Showcase your best work",
          "✅ Troubleshoot technical issues → Problem-solving under pressure"
        ]
      },
      {
        title: "Timeline Estimates",
        items: [
          "Foundations → 2 weeks (5-8 hours/week)",
          "Structured Editing → 4 weeks (8-10 hours/week)",
          "Fusion → 4 weeks (10 hours/week)",
          "Color → 6 weeks (10-12 hours/week)",
          "Fairlight → 4 weeks (8-10 hours/week)",
          "Pro Workflows → 4 weeks (10 hours/week)",
          "Portfolio → 6 weeks (12 hours/week)",
          "Total: 30 weeks to industry readiness"
        ]
      },
      {
        title: "Essential Resources",
        items: [
          "DaVinci Resolve Manual → Official documentation",
          "Blackmagic YouTube channel → Official tutorials",
          "Casey Faris → Practical tips and workflows",
          "Practice footage packs → Build skills with real footage",
          "LUT packs → Expand creative options",
          "Color grading courses → Structured learning",
          "Community forums → Problem solving and support"
        ]
      }
    ]
  }
];