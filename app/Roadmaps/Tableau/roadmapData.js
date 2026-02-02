export const phases = [
  {
    id: 0,
    title: "BI & Data Thinking",
    subtitle: "Don't Skip This",
    description: "Tableau pros think like analysts first, designers second",
    color: "bg-green-600",
    sections: [
      {
        title: "Core Concepts",
        items: [
          "What Business Intelligence actually is",
          "KPI vs Metrics vs Dimensions",
          "Descriptive vs Diagnostic vs Predictive Analytics",
          "Stakeholder-driven dashboards",
          "Data storytelling basics"
        ]
      },
      {
        title: "Must-Understand Questions",
        items: [
          "What decision will this dashboard influence?",
          "Who is the audience (CXO, manager, ops)?",
          "What actions should the user take?",
          "Outcome: You stop building 'pretty charts' and start building decision tools"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Tableau Foundations",
    subtitle: "Beginner Level",
    description: "Learn core Tableau skills and interface mastery",
    color: "bg-green-500",
    sections: [
      {
        title: "Tableau Ecosystem",
        items: [
          "Tableau Desktop",
          "Tableau Public vs Server vs Cloud",
          "Tableau Prep (intro)",
          "Tableau licensing types"
        ]
      },
      {
        title: "Tableau Interface Deep Dive",
        items: [
          "Data pane (Dimensions vs Measures)",
          "Shelves (Rows, Columns, Filters, Marks)",
          "Marks card (Color, Size, Label, Detail, Tooltip)",
          "Show Me (when to use / when not)"
        ]
      },
      {
        title: "Data Connections",
        items: [
          "Excel, CSV, Google Sheets",
          "Text files",
          "SQL databases (MySQL / PostgreSQL)",
          "Live vs Extract",
          "Hyper extracts (why they matter)"
        ]
      },
      {
        title: "Basic Charts (Master, not just use)",
        items: [
          "Bar, Line, Area",
          "Pie (when not to use)",
          "Scatter plot",
          "Tables & Highlight tables",
          "Maps (basic)"
        ]
      },
      {
        title: "Basic Calculations",
        items: [
          "Calculated fields",
          "IF / CASE statements",
          "String, Date, Number functions",
          "Basic aggregations (SUM, AVG, COUNT)",
          "Beginner Projects: Sales Performance Dashboard, Marketing Campaign Analysis, Simple Profit & Loss Dashboard"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data Modeling & Core Analytics",
    subtitle: "Junior → Mid Level",
    description: "Master data modeling and answer complex business questions",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Tableau Data Model (VERY IMPORTANT)",
        items: [
          "Relationships vs Joins (2020+ model)",
          "Cardinality & referential integrity",
          "When to use joins vs relationships",
          "Star schema basics"
        ]
      },
      {
        title: "Filters & Interactivity",
        items: [
          "Extract vs Data source vs Context filters",
          "Quick filters vs Parameters",
          "Filter actions",
          "Highlight actions",
          "URL actions"
        ]
      },
      {
        title: "Table Calculations",
        items: [
          "Running total",
          "Moving average",
          "Rank, Percent of total",
          "Difference from",
          "Compute using (deep understanding)"
        ]
      },
      {
        title: "Date & Time Analysis",
        items: [
          "Date parts vs date values",
          "Continuous vs discrete dates",
          "Fiscal calendars",
          "YoY, MoM, QoQ growth"
        ]
      },
      {
        title: "Level of Detail (LOD) Expressions ⭐",
        items: [
          "FIXED expressions",
          "INCLUDE expressions",
          "EXCLUDE expressions",
          "LOD vs Table Calc comparison",
          "Performance considerations",
          "Mid-Level Projects: Executive KPI Dashboard, Customer Cohort Analysis, Sales Forecast vs Actual, Retention & Churn Dashboard"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Visualization & UX",
    subtitle: "Industry Expectations",
    description: "Build enterprise-grade dashboards with professional design",
    color: "bg-orange-500",
    sections: [
      {
        title: "Advanced Charts",
        items: [
          "Dual-axis charts (with synchronization)",
          "Combo charts",
          "Bullet charts",
          "Waterfall charts",
          "Funnel analysis",
          "Heatmaps & Treemaps",
          "Advanced maps (custom geocoding)"
        ]
      },
      {
        title: "Dashboard Design (Non-Negotiable Skill)",
        items: [
          "F-pattern & Z-pattern layouts",
          "Visual hierarchy",
          "Color psychology",
          "Accessibility (color blindness)",
          "Minimalist BI design"
        ]
      },
      {
        title: "Dynamic Dashboards",
        items: [
          "Parameters + Calculations",
          "Parameter actions",
          "Dynamic titles",
          "Toggle metrics",
          "Switch views (chart/table)"
        ]
      },
      {
        title: "Tooltips & Micro-Interactions",
        items: [
          "Viz in tooltip",
          "Contextual explanations",
          "Drill-down UX",
          "UX-Focused Projects: CEO Executive Overview, Product Growth Dashboard, Operations Monitoring Dashboard, Finance Budget vs Actual Dashboard"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Performance, Scale & Real-World BI",
    subtitle: "Advanced Level",
    description: "Handle real company data at scale with optimized performance",
    color: "bg-blue-500",
    sections: [
      {
        title: "Performance Optimization",
        items: [
          "Extract optimization",
          "Reducing marks",
          "Context filter usage",
          "LOD performance tuning",
          "Performance recorder"
        ]
      },
      {
        title: "Tableau Prep Builder",
        items: [
          "Cleaning messy data",
          "Unions & pivots",
          "Aggregations",
          "Scheduled flows"
        ]
      },
      {
        title: "SQL + Tableau Integration",
        items: [
          "Writing optimized SQL",
          "Custom SQL vs Tableau logic",
          "Views vs Stored procedures",
          "Incremental refresh"
        ]
      },
      {
        title: "Tableau Server / Cloud",
        items: [
          "Publishing best practices",
          "Permissions & roles",
          "Row-level security (RLS)",
          "Data source certification",
          "Subscriptions & alerts",
          "Enterprise Projects: Role-based Sales Dashboard, Multi-region Performance System, Self-Service BI Platform, Secure HR Analytics Dashboard"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Analytics Engineering & Advanced BI",
    subtitle: "Senior Level",
    description: "Operate like a Lead BI Engineer with advanced analytics",
    color: "bg-purple-500",
    sections: [
      {
        title: "Advanced Analytics",
        items: [
          "Statistical functions",
          "Trend lines & forecasting models",
          "Clustering",
          "What-if analysis"
        ]
      },
      {
        title: "Python / R Integration",
        items: [
          "TabPy basics",
          "Predictive scoring",
          "Advanced calculations",
          "ML model integration"
        ]
      },
      {
        title: "Data Governance",
        items: [
          "Metric definitions",
          "Single source of truth",
          "Documentation inside Tableau",
          "Version control strategies"
        ]
      },
      {
        title: "Stakeholder Communication",
        items: [
          "Requirement gathering",
          "KPI definition workshops",
          "Data storytelling",
          "Handling conflicting metrics",
          "Senior-Level Projects: End-to-End BI Solution, Revenue Forecasting System, Marketing Attribution Dashboard, Product Experimentation Dashboard"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Industry Readiness & Career Prep",
    subtitle: "Expert Level",
    description: "Prepare for interviews, certifications, and industry work",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Tableau Certifications (Optional but Helpful)",
        items: [
          "Tableau Desktop Specialist",
          "Tableau Certified Data Analyst",
          "Tableau Server Certified Associate"
        ]
      },
      {
        title: "Portfolio Must-Haves",
        items: [
          "6–10 dashboards (variety of domains)",
          "Clean storytelling",
          "Documented assumptions",
          "Public Tableau profile"
        ]
      },
      {
        title: "Interview Topics",
        items: [
          "LOD vs Table Calculations",
          "Extract vs Live",
          "Performance optimization cases",
          "Real business scenarios",
          "Dashboard redesign questions"
        ]
      },
      {
        title: "Tech Stack to Pair with Tableau",
        items: [
          "SQL (mandatory)",
          "Excel (advanced)",
          "Python (optional but powerful)",
          "dbt (analytics engineering)",
          "Snowflake / BigQuery / Redshift",
          "Git (for BI assets)"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Final Industry Checklist",
    subtitle: "Expert Level",
    description: "Skills that make you industry-ready",
    color: "bg-pink-500",
    sections: [
      {
        title: "Core Competencies",
        items: [
          "Translate vague business questions into KPIs",
          "Model messy data cleanly",
          "Build fast, interactive dashboards",
          "Optimize performance",
          "Communicate insights clearly"
        ]
      },
      {
        title: "You Are Industry-Ready When You Can:",
        items: [
          "Turn stakeholder requests into actionable dashboards",
          "Design scalable data models",
          "Debug performance issues independently",
          "Present insights to non-technical audiences",
          "Build end-to-end BI solutions from scratch"
        ]
      },
      {
        title: "Continuous Learning",
        items: [
          "Follow Tableau community and updates",
          "Contribute to Tableau Public",
          "Participate in Makeover Monday",
          "Read BI blogs and case studies",
          "Network with other Tableau professionals"
        ]
      },
      {
        title: "Career Opportunities",
        items: [
          "BI Analyst / Developer",
          "Data Analyst",
          "Analytics Engineer",
          "Business Intelligence Engineer",
          "Data Visualization Specialist",
          "Tableau Consultant"
        ]
      }
    ]
  }
];