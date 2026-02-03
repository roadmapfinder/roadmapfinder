export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Non-Negotiable Foundation",
    description: "Essential web fundamentals before touching D3.js",
    color: "bg-gray-600",
    sections: [
      {
        title: "Core Web Fundamentals",
        items: [
          "HTML5 → SVG and Canvas basics",
          "CSS → Flexbox and Grid layout",
          "Responsive design → Mobile-first approach",
          "Why: D3 builds on top of web standards"
        ]
      },
      {
        title: "JavaScript Must-Haves",
        items: [
          "ES6+ → Arrow functions, destructuring, modules",
          "Arrays & Objects → Deep understanding required",
          ".map(), .filter(), .reduce() → Data transformation methods",
          "Promises & async/await → Asynchronous operations",
          "DOM manipulation → getElementById, querySelector, createElement",
          "Why: D3 is NOT beginner-friendly without JS mastery"
        ]
      },
      {
        title: "Math & Data Basics",
        items: [
          "Linear vs logarithmic scale → Understanding scale types",
          "Percentages and ratios → Data normalization",
          "Min/max/domain/range → Mapping concepts",
          "Why: Visualization is applied mathematics"
        ]
      },
      {
        title: "Checkpoint",
        items: [
          "Can manipulate the DOM → Create, update, delete elements",
          "Understand datasets → Work with JSON and CSV data",
          "Write ES6+ JavaScript → Modern syntax fluency",
          "Outcome: Ready to learn D3 effectively"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "D3 Fundamentals",
    subtitle: "Beginner Level",
    description: "Core D3 concepts and basic visualizations",
    color: "bg-blue-500",
    sections: [
      {
        title: "What is D3.js (Mental Model)",
        items: [
          "Data → Bind → Visualize → Core workflow",
          "D3 = low-level visualization engine → Not a chart library",
          "Visual grammar → Declarative approach to graphics",
          "Data-driven documents → DOM manipulation based on data",
          "Why: Understanding the philosophy prevents confusion"
        ]
      },
      {
        title: "SVG Basics (Critical)",
        items: [
          "<svg>, <circle>, <rect>, <line>, <path> → Essential elements",
          "<g> → Group elements for organization",
          "ViewBox & coordinate system → Scalable graphics",
          "Transforms → translate, scale, rotate",
          "Why: 80% of D3 outputs to SVG, not Canvas"
        ]
      },
      {
        title: "Selections & Data Binding",
        items: [
          "d3.select() vs d3.selectAll() → Single vs multiple elements",
          ".data() → Bind data to DOM elements",
          ".enter(), .update(), .exit() → Traditional data join pattern",
          ".join() → Modern simplified approach",
          "d3.selectAll('circle').data(data).join('circle') → Complete pattern",
          "Why: Data binding is D3's superpower"
        ]
      },
      {
        title: "Scales",
        items: [
          "scaleLinear → Continuous numeric mapping",
          "scaleBand → Categorical data with spacing",
          "scaleTime → Date and time scaling",
          "scaleOrdinal → Discrete color/category mapping",
          "domain() and range() → Input/output mapping",
          "Why: Scales transform data values to visual positions"
        ]
      },
      {
        title: "Axes",
        items: [
          "axisBottom → Horizontal axis at bottom",
          "axisLeft → Vertical axis on left",
          "Tick formatting → Custom labels and numbers",
          "Axis styling → CSS and D3 customization",
          "Why: Professional charts need proper axes"
        ]
      },
      {
        title: "Basic Charts",
        items: [
          "Bar Chart → Categorical data visualization",
          "Line Chart → Time series and trends",
          "Scatter Plot → Correlation and distribution",
          "Outcome: Build fundamental visualizations"
        ]
      },
      {
        title: "Beginner Projects",
        items: [
          "📊 Sales Bar Chart → Build from scratch",
          "📈 Time-series Line Chart → Stock prices or weather data",
          "🔵 Scatter Plot with tooltips → Interactive exploration",
          "Industry Insight: 80% of D3 bugs come from misunderstanding scales + data binding"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Interactivity & Transitions",
    subtitle: "Intermediate Level",
    description: "Making visualizations dynamic and engaging",
    color: "bg-green-500",
    sections: [
      {
        title: "Transitions & Animations",
        items: [
          ".transition() → Animate changes smoothly",
          ".duration() → Control animation timing",
          ".ease() → Easing functions for natural motion",
          "Animated updates on data change → Smooth transitions",
          "Chaining transitions → Sequential animations",
          "Why: Animations guide user attention and show change"
        ]
      },
      {
        title: "Events & User Interaction",
        items: [
          "mouseover, mouseout, click → Event listeners",
          "Tooltips → Display data on hover",
          "Hover highlights → Visual feedback",
          "Event delegation → Efficient event handling",
          "Why: Interactivity makes data explorable"
        ]
      },
      {
        title: "Dynamic Data Updates",
        items: [
          "Enter/Update/Exit pattern → Handle data changes",
          "Real-time data updates → Live dashboards",
          "Chart re-rendering → Efficient updates",
          "Key functions → Maintain object constancy",
          "Why: Static charts are boring, dynamic charts engage"
        ]
      },
      {
        title: "Layouts (Huge in Industry)",
        items: [
          "d3.stack → Stacked bar and area charts",
          "d3.pie → Pie and donut charts",
          "d3.force → Network and node-link diagrams",
          "d3.tree → Hierarchical tree visualizations",
          "d3.cluster → Clustered tree layouts",
          "Why: Layouts handle complex positioning math for you"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "📊 Interactive Dashboard → Multiple linked charts",
          "🥧 Animated Pie/Donut Chart → Smooth transitions",
          "🌐 Force-directed Graph → Network visualization",
          "📈 Live-updating chart → Real-time data stream",
          "Industry Insight: Most dashboards fail because updates are not optimized"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Data Visualization",
    subtitle: "Advanced Techniques",
    description: "Professional-grade visualizations and data handling",
    color: "bg-purple-500",
    sections: [
      {
        title: "Data Loading & Parsing",
        items: [
          "d3.csv() → Load CSV files",
          "d3.json() → Load JSON data",
          "d3.tsv() → Tab-separated values",
          "Data cleaning → Handle missing values and outliers",
          "Data normalization → Standardize formats",
          "Why: Real data is messy, cleaning is mandatory"
        ]
      },
      {
        title: "Time & Date Handling",
        items: [
          "d3.timeParse → Parse date strings",
          "d3.timeFormat → Format dates for display",
          "Time scales → scaleTime with proper domains",
          "Time intervals → d3.timeDay, d3.timeMonth, etc.",
          "Why: Time series data requires special handling"
        ]
      },
      {
        title: "Color Theory",
        items: [
          "d3.scaleSequential → Continuous color scales",
          "d3.interpolateViridis → Perceptually uniform colors",
          "d3.schemeCategory10 → Categorical color schemes",
          "Accessibility → Color-blind safe palettes",
          "Contrast ratios → WCAG compliance",
          "Why: Color communicates meaning and must be accessible"
        ]
      },
      {
        title: "Responsive Charts",
        items: [
          "Resize observers → Detect container size changes",
          "Recalculating scales → Update on resize",
          "Mobile-friendly SVG → Touch interactions",
          "viewBox preservation → Maintain aspect ratio",
          "Why: Charts must work on all screen sizes"
        ]
      },
      {
        title: "Custom Shapes & Paths",
        items: [
          "d3.line() → Create line generators",
          "d3.area() → Create area generators",
          "Bézier curves → Smooth path interpolation",
          "Custom path generators → Build unique shapes",
          "Why: Complex visualizations need custom graphics"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "📉 Financial Stock Chart → Candlestick with volume",
          "🌍 Responsive Analytics Dashboard → Multi-chart system",
          "🎨 Themed chart system → Dark/light mode switching",
          "Outcome: Create production-quality visualizations"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "D3 + Frameworks",
    subtitle: "Industry Reality",
    description: "Integrating D3 with modern JavaScript frameworks",
    color: "bg-yellow-500",
    sections: [
      {
        title: "D3 + React (Most Important)",
        items: [
          "D3 for math & scales → Calculate positions and sizes",
          "React for rendering → Manage DOM lifecycle",
          "Avoid DOM conflicts → D3 calculates, React renders",
          "useRef for SVG container → Direct DOM access when needed",
          "useEffect for updates → Sync with React lifecycle",
          "Controlled updates → React state drives visualization",
          "Why: Nobody writes pure D3 in production anymore"
        ]
      },
      {
        title: "D3 + Next.js",
        items: [
          "Server-side data → Fetch data in getServerSideProps",
          "Client-only rendering → Use useEffect for D3",
          "Performance optimization → Code splitting and lazy loading",
          "Dynamic imports → Load D3 only when needed",
          "Why: Next.js is standard for modern web apps"
        ]
      },
      {
        title: "D3 + Canvas",
        items: [
          "Large datasets → 10k+ points performance",
          "Hybrid SVG + Canvas → Use both strategically",
          "Canvas for points → Faster rendering",
          "SVG for axes/legends → Easier interaction",
          "Why: SVG has performance limits at scale"
        ]
      },
      {
        title: "Framework Integration Projects",
        items: [
          "📊 React Analytics Dashboard → Component-based architecture",
          "🧠 Data-heavy Canvas Chart → Performance optimization",
          "⚡ High-performance visualization → 100k+ data points",
          "Industry Insight: D3 controls data, frameworks control UI"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Data Storytelling & UX",
    subtitle: "Communication Through Visualization",
    description: "Making data meaningful and compelling",
    color: "bg-red-500",
    sections: [
      {
        title: "Storytelling Concepts",
        items: [
          "Narrative flow → Guide viewer through insights",
          "Highlighting insights → Draw attention to key points",
          "Progressive disclosure → Reveal complexity gradually",
          "Context and comparison → Make data relatable",
          "Why: Visualization without story is just decoration"
        ]
      },
      {
        title: "Scrollytelling",
        items: [
          "Scroll-based animations → Triggered by scroll position",
          "Narrative visualizations → Story unfolds with scroll",
          "Waypoints and triggers → Detect scroll milestones",
          "Intersection Observer → Modern scroll detection",
          "Why: Scrollytelling is standard for data journalism"
        ]
      },
      {
        title: "Annotation Systems",
        items: [
          "Labels → Clear data point identification",
          "Callouts → Highlight important values",
          "Highlights → Emphasize regions or trends",
          "d3-annotation library → Professional annotations",
          "Why: Annotations guide interpretation"
        ]
      },
      {
        title: "Storytelling Projects",
        items: [
          "📰 Interactive News Visualization → Multi-chart narrative",
          "📖 Data Storytelling Page → Scrollytelling implementation",
          "Outcome: Communicate insights effectively"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Performance, Testing & Production",
    subtitle: "Production-Ready Development",
    description: "Professional practices for deployment",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Performance Optimization",
        items: [
          "Avoid full re-renders → Update only changed elements",
          "Debounce resize events → Prevent excessive recalculations",
          "Virtualization → Render only visible items",
          "Memoization → Cache expensive calculations",
          "Web Workers → Offload heavy computations",
          "Why: Speed is productivity in data visualization"
        ]
      },
      {
        title: "Accessibility (Very Important)",
        items: [
          "ARIA roles → Semantic markup for charts",
          "Keyboard navigation → Focus management",
          "Screen reader support → Alternative text descriptions",
          "Color-blind safe palettes → Inclusive design",
          "Contrast ratios → WCAG AA/AAA compliance",
          "Why: Accessibility is not optional"
        ]
      },
      {
        title: "Testing",
        items: [
          "Visual regression testing → Catch visual changes",
          "Snapshot testing → Component output verification",
          "Edge cases → Empty data, single point, outliers",
          "Unit tests for calculations → Verify scales and transformations",
          "Why: Bugs in visualizations mislead decisions"
        ]
      },
      {
        title: "Deployment",
        items: [
          "Bundle size optimization → Tree shaking and code splitting",
          "Code splitting → Load charts on demand",
          "Lazy loading charts → Improve initial load time",
          "CDN for D3 → Consider tradeoffs",
          "Why: Efficient delivery improves user experience"
        ]
      },
      {
        title: "Capstone Project",
        items: [
          "🏆 Industry-grade Analytics Platform → Complete system",
          "Multiple chart types → Bar, line, scatter, pie, network",
          "Filters & interactions → Dynamic data exploration",
          "Responsive → Mobile to desktop",
          "Accessible → Screen reader and keyboard support",
          "Production performance → Optimized rendering",
          "Outcome: Portfolio-ready professional project"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Topics",
    subtitle: "Specialized Skills",
    description: "Optional but powerful advanced techniques",
    color: "bg-orange-500",
    sections: [
      {
        title: "Geographic Visualizations",
        items: [
          "d3.geoPath → Render geographic features",
          "Map projections → Mercator, Albers, orthographic",
          "TopoJSON → Efficient geographic data format",
          "Choropleth maps → Color-coded regions",
          "When to learn: After mastering core D3"
        ]
      },
      {
        title: "3D Visualizations",
        items: [
          "Three.js + D3 → Combine for 3D charts",
          "WebGL rendering → Hardware-accelerated graphics",
          "3D scatter plots → Multi-dimensional data",
          "Globe visualizations → Interactive 3D earth",
          "When to learn: After 2D mastery"
        ]
      },
      {
        title: "Advanced Layouts",
        items: [
          "d3.sankey → Flow diagrams",
          "d3.chord → Circular relationship diagrams",
          "d3.treemap → Hierarchical space-filling",
          "d3.pack → Circle packing layouts",
          "When to learn: Project-specific needs"
        ]
      },
      {
        title: "Data Streaming",
        items: [
          "WebSocket integration → Live data feeds",
          "Real-time updates → Streaming visualizations",
          "Data buffers → Manage memory for streams",
          "Throttling updates → Performance for high-frequency data",
          "When to learn: Building dashboards"
        ]
      },
      {
        title: "Custom Interpolators",
        items: [
          "d3.interpolate → Create smooth transitions",
          "Custom easing functions → Unique animations",
          "Color interpolation → Smooth color transitions",
          "Path interpolation → Morph between shapes",
          "When to learn: Advanced animation needs"
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
          "Mixing D3 and React DOM manipulation ❌ → Causes conflicts and bugs",
          "Not using scales ❌ → Hardcoded positions break on data change",
          "Ignoring accessibility ❌ → Excludes users with disabilities",
          "Over-animating ❌ → Distracts from insights",
          "No responsive design ❌ → Breaks on mobile",
          "Inefficient re-renders ❌ → Performance nightmare",
          "Rainbow colors everywhere ❌ → Unprofessional and confusing",
          "No axis labels ❌ → Data without context is useless"
        ]
      },
      {
        title: "Professional Practices",
        items: [
          "✅ Use scales for all positioning → Domain/range consistency",
          "✅ Separate concerns → D3 calculates, framework renders",
          "✅ Design for accessibility → ARIA, keyboard, screen readers",
          "✅ Test edge cases → Empty data, single point, outliers",
          "✅ Optimize performance → Debounce, virtualize, memoize",
          "✅ Use semantic color → Meaning, not decoration",
          "✅ Provide context → Titles, labels, legends, annotations"
        ]
      },
      {
        title: "Performance Best Practices",
        items: [
          "Use .join() over enter/update/exit → Cleaner and faster",
          "Avoid unnecessary transitions → Only when they add value",
          "Cache selections → Don't re-select repeatedly",
          "Use CSS for static styles → Faster than D3 .attr()",
          "Throttle/debounce events → Prevent excessive updates",
          "Why: Performance affects user experience directly"
        ]
      },
      {
        title: "Code Organization",
        items: [
          "Modular chart components → Reusable and testable",
          "Consistent naming conventions → Readable code",
          "Document complex calculations → Future-proof your work",
          "Version control → Track changes and collaborate",
          "Why: Professional code is maintainable code"
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
          "✅ Build interactive dashboards → Multiple linked charts",
          "✅ Create responsive visualizations → Mobile to desktop",
          "✅ Implement accessibility → WCAG AA compliance",
          "✅ Optimize for performance → 60fps interactions",
          "✅ Integrate with React/Next.js → Modern framework workflow",
          "✅ Handle real-time data → Live updates and streaming",
          "✅ Tell stories with data → Narrative visualizations",
          "✅ Deploy production systems → Bundle optimization and delivery"
        ]
      },
      {
        title: "Timeline Estimates",
        items: [
          "Prerequisites → 2-4 weeks (10 hours/week)",
          "D3 Fundamentals → 3-4 weeks (10-12 hours/week)",
          "Interactivity & Transitions → 3-4 weeks (10 hours/week)",
          "Advanced Visualization → 4-5 weeks (12 hours/week)",
          "D3 + Frameworks → 4-6 weeks (12-15 hours/week)",
          "Storytelling & UX → 3-4 weeks (10 hours/week)",
          "Production & Testing → 4-5 weeks (10-12 hours/week)",
          "Total: 23-32 weeks to industry readiness"
        ]
      },
      {
        title: "Essential Resources",
        items: [
          "D3 Official Documentation → Primary reference",
          "Observable D3 Examples → Learn from Mike Bostock",
          "Mike Bostock Blocks → Thousands of examples",
          "D3 Graph Gallery → Comprehensive chart collection",
          "Amelia Wattenberger → Modern D3 with React",
          "Curran Kelleher → Video tutorials",
          "Vega & Vega-Lite → Conceptual inspiration",
          "Community forums → Stack Overflow, D3 Slack"
        ]
      },
      {
        title: "Skills You'll Have at the End",
        items: [
          "✅ Data Visualization Engineer → Professional title",
          "✅ Frontend + Data Thinking → Hybrid skillset",
          "✅ Dashboard Architect → System design capability",
          "✅ Storytelling with Data → Communication mastery",
          "✅ Production-ready D3 systems → Deploy with confidence",
          "✅ Framework integration → React, Next.js, Vue",
          "✅ Performance optimization → Scale to millions of points",
          "✅ Accessibility champion → Inclusive design advocate"
        ]
      }
    ]
  }
];