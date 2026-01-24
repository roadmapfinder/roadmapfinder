export const phases = [
  {
    id: 0,
    title: "Setup Like a Pro",
    subtitle: "Phase 0 (1 Day)",
    description: "Install and configure your development environment with all essential tools.",
    color: "bg-gray-500",
    sections: [
      {
        title: "✅ Install & Environment",
        items: [
          "Python 3.10+",
          "Jupyter Notebook / Google Colab",
          "IDE: VS Code + Python extension"
        ]
      },
      {
        title: "✅ Must-have libraries with Matplotlib",
        items: [
          "numpy (data generation + math)",
          "pandas (real datasets)",
          "scipy (scientific plots)",
          "seaborn (statistical plots)",
          "plotly (interactive dashboards)",
          "scikit-learn (ML plotting)"
        ]
      },
      {
        title: "✅ Install Command",
        items: [
          "pip install matplotlib numpy pandas seaborn scipy scikit-learn"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner Foundation",
    subtitle: "Phase 1 (Week 1)",
    description: "Master the fundamentals of Matplotlib and create your first professional visualizations.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📊 Understand Matplotlib Ecosystem",
        items: [
          "What is Matplotlib used for?",
          "Pyplot vs Object-Oriented API",
          "Figure, Axes, Axis concepts",
          "✅ Key idea: plt is quick but not scalable",
          "OO style is industry standard"
        ]
      },
      {
        title: "📈 Your First Plots",
        items: [
          "plt.plot()",
          "plt.title(), xlabel(), ylabel()",
          "plt.grid()",
          "plt.legend()",
          "✅ Practice: Simple line chart",
          "Multiple lines",
          "Grid & legends"
        ]
      },
      {
        title: "📁 Work With Data (Real Datasets)",
        items: [
          "Use pandas.read_csv()",
          "Plot column trends",
          "Missing values handling",
          "✅ Practice: Sales dataset trend plot",
          "Temperature dataset line plot"
        ]
      },
      {
        title: "📊 Essential Plot Types",
        items: [
          "✅ Line Plot",
          "✅ Scatter Plot",
          "✅ Bar Plot",
          "✅ Histogram",
          "✅ Pie (use rarely in industry)",
          "✅ Box Plot"
        ]
      },
      {
        title: "🎯 Phase 1 Mini Projects",
        items: [
          "✅ Project 1: Student Performance Visualizer - Histogram of marks, Bar chart of subject averages, Scatter marks vs attendance",
          "✅ Project 2: Sales Analytics (CSV) - Monthly revenue line plot, Category-wise bar chart, Profit distribution histogram"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate Matplotlib",
    subtitle: "Phase 2 (Week 2-3)",
    description: "Learn professional plotting techniques with Object-Oriented API and advanced customization.",
    color: "bg-green-500",
    sections: [
      {
        title: "🎨 Master the Object-Oriented API (Most Important)",
        items: [
          "fig, ax = plt.subplots()",
          "ax.plot(), ax.set_title(), etc.",
          "Multiple axes control",
          "✅ Why industry uses it: Clean code, Multi-plots & dashboards, Better customization"
        ]
      },
      {
        title: "📐 Subplots Like a Professional",
        items: [
          "plt.subplot() vs plt.subplots()",
          "Grid layout",
          "Shared axes",
          "Adjust spacing using plt.tight_layout() and fig.subplots_adjust()",
          "✅ Practice: 2x2 analytics dashboard"
        ]
      },
      {
        title: "🎨 Styling & Customization (Real-world level)",
        items: [
          "Colors, line styles, marker styles",
          "Tick formatting",
          "Grid customization",
          "Font sizes & themes",
          "✅ Important: Plot readability > fancy design"
        ]
      },
      {
        title: "📝 Annotations & Labels",
        items: [
          "ax.annotate()",
          "Text on chart",
          "Highlighting peaks/min points",
          "✅ Practice: Stock price peak annotation chart"
        ]
      },
      {
        title: "💾 Figure Exporting (Industry Quality)",
        items: [
          "plt.savefig()",
          "DPI & resolution",
          "PNG vs SVG vs PDF",
          "✅ Best practice: Reports (PDF), Web dashboards (PNG/SVG)"
        ]
      },
      {
        title: "🎯 Phase 2 Mini Projects",
        items: [
          "✅ Project 3: Analytics Dashboard Plot (4 Charts) - Line chart, Bar chart, Histogram, Scatter plot",
          "✅ Project 4: COVID / Weather Time-Series Report - Rolling mean line chart, Peak annotations, Save as PDF"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Matplotlib",
    subtitle: "Phase 3 (Week 4-5)",
    description: "Master advanced chart types, formatting, and professional visualization techniques.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📊 Advanced Chart Types (Highly used in companies)",
        items: [
          "✅ Area plots",
          "✅ Step plots",
          "✅ Error bars",
          "✅ Stacked bar charts",
          "✅ Heatmaps",
          "✅ Violin plots",
          "✅ KDE overlays (with seaborn)"
        ]
      },
      {
        title: "🎯 Legends, Ticks, and Axis Formatting (Pro level)",
        items: [
          "Customize legend position & layout",
          "Minor ticks + major ticks",
          "Rotate labels",
          "Scientific notation formatting",
          "✅ Use: matplotlib.ticker module"
        ]
      },
      {
        title: "🌈 Colormaps & Normalization",
        items: [
          "cmap usage in scatter/heatmap",
          "Normalize values for color ranges",
          "Continuous vs categorical colormaps",
          "✅ Industry usage: Heatmaps in analytics, ML confusion matrices"
        ]
      },
      {
        title: "📈 Twin Axes & Secondary Axis",
        items: [
          "ax.twinx() / ax.twiny()",
          "Dual y-axis plots (use carefully)",
          "✅ Practice: Revenue vs Profit chart"
        ]
      },
      {
        title: "🧊 3D Plots (Optional but useful)",
        items: [
          "mpl_toolkits.mplot3d",
          "Surface plots",
          "3D scatter",
          "⚠️ Note: Often avoid 3D in business analytics"
        ]
      },
      {
        title: "🎯 Phase 3 Projects",
        items: [
          "✅ Project 5: Stock Market Visualizer - Moving average lines, Volume bar chart, Annotate highs and lows",
          "✅ Project 6: Heatmap Report Generator - Correlation heatmap of dataset, Export high-quality PDF"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Industry Ready Skills",
    subtitle: "Phase 4 (Week 6-8)",
    description: "Develop production-level visualization skills for professional data science work.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔧 Writing Reusable Plot Functions (Production Code)",
        items: [
          "Create functions like plot_sales_trend(df) and plot_distribution(df, column)",
          "Return fig, ax for reuse",
          "✅ Pro workflow: Clean utility plotting modules"
        ]
      },
      {
        title: "🤝 Matplotlib + Pandas + Seaborn (Industry combo)",
        items: [
          "When to use Matplotlib directly",
          "When to use Seaborn",
          "Customize Seaborn plots using Matplotlib ax=",
          "✅ Use seaborn for quick plots, Matplotlib for precision control"
        ]
      },
      {
        title: "📄 Report Automation (Huge industry skill)",
        items: [
          "Auto-generate charts from datasets",
          "Save to folders",
          "Combine in PDF reports",
          "✅ Stack: Matplotlib + Python scripts, Matplotlib + Jinja2 + PDF export"
        ]
      },
      {
        title: "🔬 Scientific & Research Level Plotting",
        items: [
          "Log scales: ax.set_xscale('log')",
          "Error bands",
          "Confidence intervals",
          "Publication-ready formatting",
          "✅ Must learn: matplotlib.rcParams, Stylesheets"
        ]
      },
      {
        title: "⚡ Matplotlib Performance Optimization",
        items: [
          "Large dataset plotting (downsampling)",
          "Use LineCollection",
          "Rasterization for big plots",
          "Avoid slow loops",
          "✅ Important for ML + data pipelines"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Matplotlib Mastery",
    subtitle: "Phase 5 (Week 9-12)",
    description: "Achieve mastery with advanced techniques, ML visualizations, and portfolio projects.",
    color: "bg-red-500",
    sections: [
      {
        title: "🎨 Create Your Own Plot Style System",
        items: [
          "Matplotlib styles (plt.style.use)",
          "Build custom theme",
          "Standardize dashboard design",
          "✅ Best practice: Consistent design across company charts"
        ]
      },
      {
        title: "💼 Real Business Visualizations",
        items: [
          "KPI dashboards",
          "Product performance charts",
          "Funnel & cohort charts (custom)",
          "Growth metrics charts",
          "✅ This is what companies pay for"
        ]
      },
      {
        title: "🤖 Matplotlib + Machine Learning Visualization",
        items: [
          "Confusion matrix",
          "ROC curve",
          "Precision-Recall curve",
          "Feature importance plots",
          "Residual plots",
          "✅ Used in: Data science roles, ML engineering"
        ]
      },
      {
        title: "🐛 Debugging & Fixing Ugly Plots (Most useful skill)",
        items: [
          "Overlapping labels",
          "Wrong scaling",
          "Misleading data visuals",
          "Colorblind safe palettes",
          "Removing noise / clutter",
          "✅ Industry rule: If it's not readable in 3 seconds, it's a bad chart"
        ]
      },
      {
        title: "🏆 Final Industry Projects (Portfolio Must-Have)",
        items: [
          "✅ Project A: Automated Data Report Generator - Input CSV, Output summary plots dashboard, Saved PNG + PDF report",
          "✅ Project B: Business KPI Dashboard (Matplotlib only) - Revenue trend, Category distribution, Region performance, Customer retention trend",
          "✅ Project C: ML Model Evaluation Plot Pack - Confusion matrix, ROC + PR curves, Feature importance plot, Error analysis plot"
        ]
      },
      {
        title: "✅ Interview / Job Readiness Checklist",
        items: [
          "✅ Use OO API confidently",
          "✅ Build multi-chart dashboards",
          "✅ Export publication-quality figures",
          "✅ Write reusable plotting functions",
          "✅ Format ticks/labels cleanly",
          "✅ Make readable visuals from messy datasets",
          "✅ Explain why a chart is correct or misleading"
        ]
      }
    ]
  }
];