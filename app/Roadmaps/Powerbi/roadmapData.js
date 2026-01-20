export const phases = [
  {
    id: 0,
    title: "Data & BI Foundations",
    subtitle: "Week 1-2",
    description: "Understand how BI works before touching Power BI.",
    color: "bg-slate-500",
    sections: [
      {
        title: "📚 Core Concepts",
        items: [
          "What is Business Intelligence",
          "OLTP vs OLAP",
          "Fact vs Dimension tables",
          "Star schema vs Snowflake schema",
          "KPIs, Metrics, Measures",
          "Data Warehousing basics",
          "ETL vs ELT",
          "CSV, Excel, JSON, SQL sources"
        ]
      },
      {
        title: "🔑 Must Know Concepts",
        items: [
          "Primary / Foreign Keys",
          "Granularity",
          "Slowly Changing Dimensions",
          "Surrogate Keys"
        ]
      },
      {
        title: "💡 Practice",
        items: [
          "Design a star schema for Sales system",
          "Design a star schema for E-commerce",
          "Design a star schema for HR analytics"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Power BI Interface Mastery",
    subtitle: "Week 2-3",
    description: "Become comfortable with Power BI Desktop.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🖥️ Learn",
        items: [
          "Power BI Desktop layout",
          "Report / Data / Model view",
          "Import vs DirectQuery vs Live connection",
          "Data sources connection",
          "File types (.pbix, .pbit)"
        ]
      },
      {
        title: "🔌 Practice",
        items: [
          "Connect to Excel",
          "Connect to CSV",
          "Connect to SQL Server / MySQL",
          "Connect to Web API JSON"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Power Query (M Language) Deep Dive",
    subtitle: "Week 3-5 - Data Engineering Layer",
    description: "Master Power Query for data transformation and preparation.",
    color: "bg-green-500",
    sections: [
      {
        title: "🛠️ Learn",
        items: [
          "Query Editor interface",
          "Applied Steps",
          "Data profiling tools",
          "Data types",
          "Column operations"
        ]
      },
      {
        title: "🧹 Cleaning Techniques",
        items: [
          "Remove duplicates",
          "Replace values",
          "Trim / Clean",
          "Split / Merge columns",
          "Conditional columns",
          "Custom columns",
          "Group By",
          "Pivot / Unpivot"
        ]
      },
      {
        title: "⚡ Advanced",
        items: [
          "M Language basics",
          "Parameters",
          "Functions",
          "Merge vs Append",
          "Fuzzy matching"
        ]
      },
      {
        title: "💼 Practice Projects",
        items: [
          "Clean raw sales data",
          "Normalize multi-sheet Excel",
          "Merge multiple monthly files"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Modeling",
    subtitle: "Week 5-7 - Where 90% of beginners fail",
    description: "Build robust data models with proper relationships and schema design.",
    color: "bg-purple-500",
    sections: [
      {
        title: "📐 Learn",
        items: [
          "Star schema modeling",
          "Relationships",
          "Cardinality",
          "Cross filter direction",
          "Active vs Inactive relationships"
        ]
      },
      {
        title: "❌ Learn To Avoid",
        items: [
          "Many-to-many misuse",
          "Snowflake overuse",
          "Bi-directional everywhere"
        ]
      },
      {
        title: "🔥 Advanced",
        items: [
          "Role playing dimensions",
          "Bridge tables",
          "Factless fact tables"
        ]
      },
      {
        title: "💡 Practice",
        items: [
          "Build a complete Sales model",
          "Finance reporting model",
          "Marketing funnel model"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "DAX Fundamentals",
    subtitle: "Week 7-10 - Brain of Power BI",
    description: "Master DAX for calculations, measures, and business logic.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🧠 Core Concepts",
        items: [
          "Calculated columns vs Measures",
          "Row context vs Filter context",
          "CALCULATE",
          "FILTER",
          "ALL / ALLEXCEPT / ALLSELECTED",
          "VALUES",
          "DISTINCTCOUNT"
        ]
      },
      {
        title: "📅 Time Intelligence",
        items: [
          "YTD",
          "QTD",
          "MTD",
          "SAMEPERIODLASTYEAR",
          "DATEADD"
        ]
      },
      {
        title: "🔀 Logical",
        items: [
          "IF",
          "SWITCH",
          "COALESCE"
        ]
      },
      {
        title: "🏆 Ranking",
        items: [
          "RANKX",
          "TOPN"
        ]
      },
      {
        title: "💼 Practice",
        items: [
          "Sales growth",
          "YoY comparison",
          "Running total",
          "Market share"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced DAX",
    subtitle: "Week 10-13",
    description: "Deep dive into advanced DAX patterns and optimization techniques.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔥 Learn",
        items: [
          "Variables",
          "Iterators (SUMX, AVERAGEX)",
          "Virtual tables",
          "TREATAS",
          "USERELATIONSHIP",
          "CROSSFILTER"
        ]
      },
      {
        title: "🎯 Advanced Scenarios",
        items: [
          "Dynamic KPIs",
          "What-If parameters",
          "Dynamic titles",
          "Calculation groups (Tabular Editor)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Visualization & UX Design",
    subtitle: "Week 13-15 - Industry dashboards judged on design",
    description: "Create stunning, user-friendly dashboards with effective storytelling.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🎨 Learn",
        items: [
          "Chart selection logic",
          "Color psychology",
          "Data-Ink ratio",
          "Storytelling with data"
        ]
      },
      {
        title: "📊 Visual Types",
        items: [
          "Bar, Line, Area",
          "Combo charts",
          "Waterfall",
          "Funnel",
          "Matrix",
          "KPI cards",
          "Decomposition tree",
          "Key Influencers"
        ]
      },
      {
        title: "✨ UX",
        items: [
          "Tooltips pages",
          "Drillthrough",
          "Bookmarks",
          "Buttons",
          "Page navigation"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Power BI Service & Sharing",
    subtitle: "Week 15-17",
    description: "Deploy and share reports in the Power BI Service with proper security.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "☁️ Learn",
        items: [
          "Workspaces",
          "Apps",
          "Sharing permissions",
          "Row Level Security (RLS)",
          "Object Level Security",
          "Incremental refresh"
        ]
      },
      {
        title: "🔌 Gateways",
        items: [
          "Personal vs Enterprise gateway",
          "Scheduled refresh"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Enterprise BI Architecture",
    subtitle: "Week 17-20",
    description: "Understand enterprise-level BI architecture and patterns.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🏢 Learn",
        items: [
          "Dataflows",
          "Datamarts",
          "Fabric concepts",
          "Semantic models",
          "Composite models"
        ]
      },
      {
        title: "🏗️ Architecture Patterns",
        items: [
          "Import + DirectQuery hybrid",
          "Thin report layer",
          "Central dataset strategy"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Performance Optimization",
    subtitle: "Advanced Level",
    description: "Optimize Power BI reports for speed and efficiency.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "⚡ Learn",
        items: [
          "Query folding",
          "Storage modes",
          "DAX optimization",
          "Relationship optimization",
          "Performance Analyzer"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Real Industry Projects",
    subtitle: "Production Ready",
    description: "Build production-grade dashboards for real-world scenarios.",
    color: "bg-amber-500",
    sections: [
      {
        title: "💼 Build These Projects",
        items: [
          "Sales Performance Dashboard",
          "Finance P&L Dashboard",
          "HR Attrition Analytics",
          "Marketing Campaign ROI",
          "Supply Chain Dashboard",
          "Executive KPI Dashboard"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Deployment & Governance",
    subtitle: "Enterprise Level",
    description: "Implement proper governance and deployment strategies.",
    color: "bg-lime-500",
    sections: [
      {
        title: "📋 Learn",
        items: [
          "Version control",
          "Workspace strategies",
          "Naming conventions",
          "Dataset ownership",
          "Documentation"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Interview Preparation",
    subtitle: "Job Ready",
    description: "Prepare for Power BI developer interviews.",
    color: "bg-teal-500",
    sections: [
      {
        title: "💬 Expect Questions On",
        items: [
          "DAX scenarios",
          "Modeling problems",
          "Performance issues",
          "Row Level Security (RLS)",
          "Data refresh",
          "Business case design"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Career Tracks",
    subtitle: "Professional Development",
    description: "Explore career opportunities in the Power BI ecosystem.",
    color: "bg-violet-500",
    sections: [
      {
        title: "🚀 You Can Move Into",
        items: [
          "Power BI Developer",
          "BI Analyst",
          "Analytics Engineer",
          "Data Analyst",
          "BI Architect",
          "Fabric Engineer"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Tools To Learn Along With Power BI",
    subtitle: "Complementary Skills",
    description: "Master these tools to become a complete BI professional.",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "🛠️ Essential Tools",
        items: [
          "SQL - Mandatory",
          "Excel - Still heavily used",
          "Tabular Editor - DAX & calc groups",
          "DAX Studio - Performance",
          "Python - Optional",
          "Azure / Fabric - Enterprise"
        ]
      }
    ]
  }
];