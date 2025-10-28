export const phases = [
  {
    id: 0,
    title: "Spreadsheet & Data Foundations",
    subtitle: "Foundation Level",
    description: "Build intuition of how Excel handles data, formulas, and memory in cells",
    color: "bg-gray-500",
    sections: [
      {
        title: "Excel Interface",
        items: [
          "Worksheets, cells, and references (A1 vs R1C1)",
          "Named ranges and cell management",
          "Navigation and workspace organization",
          "Resources: ExcelJet, Microsoft Learn"
        ]
      },
      {
        title: "Data Types & Formatting",
        items: [
          "Numbers, dates, text, logical values, and errors",
          "Currency and accounting formats",
          "Custom number formatting for reports",
          "Resources: Chandoo.org, Excel Bible"
        ]
      },
      {
        title: "Keyboard Efficiency",
        items: [
          "Essential shortcuts for navigation",
          "Fill handles and quick data entry",
          "Selection and formatting shortcuts",
          "Resources: ExcelJet Shortcuts Guide"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Build personal budget sheet with conditional formatting",
          "Create custom date and currency formats for reports",
          "Practice keyboard shortcuts for faster workflows"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Data Manipulation & Core Analysis",
    subtitle: "Beginner Level",
    description: "Perform reliable analysis using best practices and structured data",
    color: "bg-green-500",
    sections: [
      {
        title: "Structured Tables",
        items: [
          "Auto-expanding data tables",
          "Table references and structured references",
          "Table formatting and design best practices",
          "Converting ranges to tables"
        ]
      },
      {
        title: "Sorting & Filtering",
        items: [
          "Multi-level sorting techniques",
          "Advanced filter criteria",
          "Slicers for interactive filtering",
          "Filter by color and custom filters"
        ]
      },
      {
        title: "Basic Formulas",
        items: [
          "SUM, AVERAGE, COUNT functions",
          "IF statements and nested logic",
          "Error handling with IFERROR",
          "Relative vs absolute cell references"
        ]
      },
      {
        title: "Lookup & Text Functions",
        items: [
          "XLOOKUP for modern lookups",
          "VLOOKUP and INDEX/MATCH (legacy)",
          "Text functions: TEXTJOIN, TRIM, LEFT/RIGHT",
          "Date functions: NETWORKDAYS, DATEDIF"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Product lookup catalog using XLOOKUP with Data Validation",
          "Regional sales PivotTable with slicers",
          "Employee database with lookup functions"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Formulas & Dynamic Arrays",
    subtitle: "Intermediate Level",
    description: "Build scalable, smart, formula-driven systems with modern Excel",
    color: "bg-blue-500",
    sections: [
      {
        title: "Dynamic Arrays",
        items: [
          "UNIQUE function for distinct values",
          "FILTER for conditional data extraction",
          "SORT and SORTBY for dynamic sorting",
          "SEQUENCE and WRAPROWS for array generation"
        ]
      },
      {
        title: "Conditional Aggregation",
        items: [
          "SUMIFS for multi-criteria summation",
          "COUNTIFS for conditional counting",
          "AVERAGEIFS for conditional averaging",
          "Complex criteria with wildcards and dates"
        ]
      },
      {
        title: "Power Formulas",
        items: [
          "SUMPRODUCT for array calculations",
          "INDIRECT for dynamic references (use sparingly)",
          "OFFSET for flexible range references",
          "Array formulas and spill ranges"
        ]
      },
      {
        title: "Formula Architecture",
        items: [
          "LET function for readable formulas",
          "LAMBDA for reusable custom functions",
          "Formula debugging techniques",
          "Performance optimization strategies"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Dynamic dashboard with auto-updating lists and KPIs",
          "Create reusable LAMBDA functions library",
          "Sales analysis with conditional aggregation"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Cleaning & ETL with Power Query",
    subtitle: "Advanced Level",
    description: "Replace manual cleanup with automated data pipelines",
    color: "bg-purple-500",
    sections: [
      {
        title: "Data Import",
        items: [
          "Import from CSV, Excel, and text files",
          "Connect to SQL databases",
          "Web data extraction and APIs",
          "SharePoint and cloud data sources"
        ]
      },
      {
        title: "Transformations",
        items: [
          "Unpivot and pivot operations",
          "Split and merge columns",
          "Fill down and fill up operations",
          "Merge queries (joins: inner, outer, left, right)"
        ]
      },
      {
        title: "M Language Basics",
        items: [
          "Fundamental M syntax and structure",
          "Error handling and data type conversions",
          "Custom functions in Power Query",
          "Advanced transformations with M code"
        ]
      },
      {
        title: "Refresh Workflows",
        items: [
          "Scheduled refresh setup",
          "Connection management and parameters",
          "Query folding for performance",
          "Incremental refresh strategies"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Automate monthly report refresh from raw CSV dumps",
          "Consolidated sales model (multiple files to one clean table)",
          "Web scraping dashboard with automatic updates"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Data Modeling & Analytics with Power Pivot",
    subtitle: "Expert Level",
    description: "Perform enterprise-scale analytics inside Excel with DAX",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Data Model Design",
        items: [
          "Relationships and cardinality management",
          "Star schema and dimensional modeling",
          "Fact tables and dimension tables",
          "Many-to-many relationships"
        ]
      },
      {
        title: "DAX Fundamentals",
        items: [
          "CALCULATE function for context modification",
          "Iterator functions: SUMX, AVERAGEX, COUNTX",
          "FILTER and ALL for advanced filtering",
          "Row context vs filter context"
        ]
      },
      {
        title: "Time Intelligence",
        items: [
          "YOY (Year over Year) comparisons",
          "YTD (Year to Date) calculations",
          "MTD, QTD calculations",
          "Auto-date table creation and management"
        ]
      },
      {
        title: "KPI Analytics",
        items: [
          "Measures vs calculated columns",
          "Model optimization techniques",
          "Performance tuning strategies",
          "Complex KPI calculations"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Full data model (Orders, Products, Customers)",
          "Revenue, Margin, and YoY KPI measures with PivotCharts",
          "Interactive sales analytics dashboard"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Automation & Scripting",
    subtitle: "Automation Level",
    description: "Eliminate repetitive work and become a superhuman analyst",
    color: "bg-red-500",
    sections: [
      {
        title: "VBA Automation",
        items: [
          "Desktop automation for legacy systems",
          "User forms and custom dialogs",
          "Macro recording and editing",
          "User workflow automation"
        ]
      },
      {
        title: "Office Scripts",
        items: [
          "Cloud automation in Excel on web",
          "TypeScript-based scripting",
          "Cross-workbook automation",
          "Integration with Power Automate"
        ]
      },
      {
        title: "Power Automate",
        items: [
          "Scheduled scripts and flows",
          "Email notifications and alerts",
          "Integration with other Microsoft services",
          "Approval workflows and data routing"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Auto-export PDF reports for stakeholders",
          "Batch file cleanup and format standardization macro",
          "Automated email distribution system"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Dashboarding & Data Storytelling",
    subtitle: "Visualization Level",
    description: "Present insights with clarity, interactivity, and executive polish",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Visualization",
        items: [
          "Waterfall charts for variance analysis",
          "Bullet charts for KPI tracking",
          "Sparklines for trend visualization",
          "Custom chart types and combinations"
        ]
      },
      {
        title: "Interactivity",
        items: [
          "Form controls (buttons, dropdowns, sliders)",
          "Slicers and timelines for filtering",
          "Dynamic chart updates",
          "Drill-through and drill-down navigation"
        ]
      },
      {
        title: "Design Principles",
        items: [
          "Layout and whitespace management",
          "Color psychology and accessibility",
          "UX principles for dashboards",
          "Mobile-friendly dashboard design"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "One-page business dashboard with slicers and drill-through",
          "Weekly KPI deck with automated refresh",
          "Executive summary dashboard with storytelling"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Cloud & BI Integration",
    subtitle: "Enterprise Level",
    description: "Scale beyond spreadsheets and work with enterprise systems",
    color: "bg-pink-500",
    sections: [
      {
        title: "Power BI Integration",
        items: [
          "Publish dashboards to Power BI Service",
          "Row-level security (RLS) implementation",
          "Power BI datasets and Excel connections",
          "Mobile app deployment"
        ]
      },
      {
        title: "Database Connectivity",
        items: [
          "Basic SQL queries for data extraction",
          "Excel data connections to databases",
          "ODBC and OLEDB connections",
          "Query optimization techniques"
        ]
      },
      {
        title: "Collaboration Tools",
        items: [
          "Excel Online and co-authoring workflows",
          "OneDrive and SharePoint integration",
          "Version control and change tracking",
          "Shared workbook management"
        ]
      },
      {
        title: "APIs & Advanced Integration",
        items: [
          "Power Automate with external tools",
          "REST API connections",
          "Custom connectors development",
          "Real-time data streaming"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Recreate Excel dashboard in Power BI and compare performance",
          "End-to-end automated pipeline (ETL to Model to Distribution)",
          "Multi-user collaborative analytics platform"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Industry-Ready Engineering",
    subtitle: "Professional Level",
    description: "Deliver production-quality analysis with documentation and governance",
    color: "bg-teal-500",
    sections: [
      {
        title: "Best Practices",
        items: [
          "Build reproducible workflows with refresh instructions",
          "Monitor performance and avoid volatile formulas",
          "Clear versioning and backup strategies",
          "Communication: translate insights to business actions"
        ]
      },
      {
        title: "Documentation & Governance",
        items: [
          "Comprehensive documentation standards",
          "Data dictionary and metadata management",
          "Audit trails and change logs",
          "Security and access control"
        ]
      },
      {
        title: "Tooling & Version Control",
        items: [
          "Version control using OneDrive/SharePoint or Git",
          "Reviewer workflows for changes",
          "Testing and validation procedures",
          "Deployment and rollback strategies"
        ]
      },
      {
        title: "Portfolio Must-Haves",
        items: [
          "Power Query ETL pipeline (shows automation maturity)",
          "DAX-based analytics model (advanced analytics)",
          "Executive dashboard (visualization and storytelling)",
          "VBA/Office Script automation (productivity impact)"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Professional & Certification Track",
    subtitle: "Career Level",
    description: "Validate skills and open career doors with certifications",
    color: "bg-orange-500",
    sections: [
      {
        title: "Microsoft Certifications",
        items: [
          "Microsoft Office Specialist: Excel Associate",
          "Microsoft Excel Expert Certification",
          "Power BI Data Analyst with Excel specialization",
          "Microsoft 365 Certified: Modern Desktop Administrator"
        ]
      },
      {
        title: "Excel Engineer Ready Checklist",
        items: [
          "Clean and automate data ingestion pipelines",
          "Build analytical models using DAX",
          "Create polished dashboards with UX principles",
          "Automate workflows and document them thoroughly",
          "Work with Power BI when scaling is required"
        ]
      },
      {
        title: "Learning Resources by Level",
        items: [
          "Beginner: ExcelJet, Chandoo, Microsoft Learn",
          "Intermediate: Excel Skills for Business (Coursera)",
          "Advanced: Power Query & DAX (MyOnlineTrainingHub/Udemy)",
          "Pro: Power BI + Excel Integration courses",
          "Practice: Kaggle datasets and portfolio projects"
        ]
      },
      {
        title: "Career Development",
        items: [
          "Build public portfolio on GitHub or personal website",
          "Contribute to Excel communities and forums",
          "Network with data professionals",
          "Stay updated with Excel and Power Platform updates"
        ]
      }
    ]
  }
];