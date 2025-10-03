
 export const phases = [
    {
      id: 0,
      title: "Foundation",
      subtitle: "Foundation Stage (0–1 month)",
      description: "Understand the role of a Data Analyst, basic math, and computer skills",
      color: "bg-gray-600",
      sections: [
        {
          title: "Understanding Data Analyst Role",
          items: [
            "Role responsibilities → Data collection, analysis, reporting, and insights",
            "Business context → How data drives decision-making",
            "Industry applications → Marketing, finance, operations, healthcare",
            "Career paths → Junior to senior analyst progression",
            "Key competencies → Technical skills, business acumen, communication"
          ]
        },
        {
          title: "Basic Statistics & Probability",
          items: [
            "Descriptive statistics → Mean, median, mode calculations",
            "Measures of spread → Standard deviation, variance, range",
            "Probability basics → Events, outcomes, distributions",
            "Data interpretation → Understanding what numbers tell us",
            "Statistical thinking → Correlation vs causation concepts"
          ]
        },
        {
          title: "Excel Fundamentals",
          items: [
            "Basic formulas → SUM, AVERAGE, COUNT functions",
            "Data organization → Proper data entry and formatting",
            "File management → CSV handling, data import/export",
            "Basic charting → Creating simple visualizations",
            "Conditional formatting → Highlighting important data"
          ]
        },
        {
          title: "Computer Literacy Essentials",
          items: [
            "File system navigation → Folders, files, organization",
            "Data formats → Understanding CSV, Excel, JSON basics",
            "Basic troubleshooting → Common software issues",
            "Data backup → Protecting your work and datasets",
            "Keyboard shortcuts → Efficiency improvements"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Personal expense tracker → Monthly budget analysis in Excel",
            "Survey data analysis → Calculate averages, percentages",
            "Simple charts creation → Bar, line, pie chart basics",
            "Data cleaning practice → Fix inconsistencies and errors",
            "Basic reporting → Summarize findings clearly"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Beginner Skills",
      subtitle: "Beginner Level (1–2 months)",
      description: "Learn core data handling and visualization techniques",
      color: "bg-blue-500",
      sections: [
        {
          title: "Data Types & Cleaning",
          items: [
            "Data types → Numerical, categorical, datetime formats",
            "Data quality issues → Missing values, duplicates, outliers",
            "Cleaning techniques → Standardization, validation methods",
            "Data transformation → Formatting for analysis",
            "Documentation → Tracking changes and assumptions"
          ]
        },
        {
          title: "Data Visualization Fundamentals",
          items: [
            "Chart selection → When to use bar, line, pie charts",
            "Visual best practices → Clear labels, appropriate scales",
            "Color usage → Accessibility and meaning in charts",
            "Dashboard basics → Combining multiple visualizations",
            "Storytelling → Using visuals to communicate insights"
          ]
        },
        {
          title: "SQL Introduction",
          items: [
            "Database basics → Tables, rows, columns concepts",
            "SELECT statements → Retrieving specific data",
            "WHERE clauses → Filtering data with conditions",
            "ORDER BY → Sorting results logically",
            "LIMIT → Managing result set sizes"
          ]
        },
        {
          title: "Advanced Excel Skills",
          items: [
            "PivotTables → Dynamic data summarization",
            "VLOOKUP → Data matching and retrieval",
            "Conditional formatting → Advanced highlighting rules",
            "Data validation → Ensuring data integrity",
            "Advanced charting → Combo charts, secondary axes"
          ]
        },
        {
          title: "Beginner Projects",
          items: [
            "Sales analysis dashboard → Revenue trends in Excel",
            "SQL practice → Queries on Chinook/Northwind datasets",
            "Google Data Studio → Interactive sales/profit visualizations",
            "Data cleaning project → Real messy dataset cleanup",
            "Comparison analysis → Before/after performance metrics"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate Analysis",
      subtitle: "Intermediate Level (2–4 months)",
      description: "Handle real datasets, perform analysis, and create meaningful insights",
      color: "bg-green-500",
      sections: [
        {
          title: "Programming for Analysis",
          items: [
            "Python basics → Variables, loops, functions for data work",
            "pandas library → Data manipulation and analysis",
            "NumPy → Numerical computations and arrays",
            "R fundamentals → Statistical programming alternative",
            "Jupyter notebooks → Interactive analysis environment"
          ]
        },
        {
          title: "Data Visualization Libraries",
          items: [
            "matplotlib → Python plotting fundamentals",
            "seaborn → Statistical visualizations made easy",
            "plotly → Interactive charts and dashboards",
            "ggplot2 → R's powerful visualization grammar",
            "Chart customization → Professional-quality outputs"
          ]
        },
        {
          title: "Exploratory Data Analysis",
          items: [
            "Data profiling → Understanding dataset characteristics",
            "Pattern recognition → Trends, seasonality, anomalies",
            "Correlation analysis → Relationship identification",
            "Hypothesis formation → Asking the right questions",
            "Statistical testing → Validating assumptions"
          ]
        },
        {
          title: "Intermediate SQL",
          items: [
            "JOIN operations → Combining data from multiple tables",
            "GROUP BY → Aggregating data by categories",
            "Aggregate functions → SUM, COUNT, AVG with grouping",
            "Subqueries → Nested query structures",
            "Data modeling → Understanding table relationships"
          ]
        },
        {
          title: "Business Intelligence Tools",
          items: [
            "Tableau fundamentals → Drag-and-drop visualization",
            "Power BI basics → Microsoft's analytics platform",
            "Dashboard design → User-friendly interface creation",
            "Report automation → Scheduled updates and delivery",
            "Stakeholder presentations → Effective communication"
          ]
        },
        {
          title: "Intermediate Projects",
          items: [
            "Customer churn analysis → Predictive insights with Python",
            "Sales trend analysis → SQL + visualization combination",
            "Tableau dashboard → E-commerce or marketing data",
            "A/B test analysis → Statistical significance testing",
            "Business case study → End-to-end analysis project"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Analytics",
      subtitle: "Advanced Level (4–6 months)",
      description: "Master complex analysis, predictive analytics, and automation",
      color: "bg-purple-500",
      sections: [
        {
          title: "Advanced Excel & Automation",
          items: [
            "Excel macros → Automating repetitive tasks",
            "VBA basics → Custom functions and procedures",
            "Advanced formulas → Complex calculations and logic",
            "Data connections → Linking to external data sources",
            "Template creation → Reusable analysis frameworks"
          ]
        },
        {
          title: "Advanced SQL Techniques",
          items: [
            "Window functions → ROW_NUMBER, RANK, LEAD/LAG",
            "Common Table Expressions → Complex query organization",
            "Advanced subqueries → Correlated and nested queries",
            "Performance optimization → Query tuning basics",
            "Data warehousing → Star schema understanding"
          ]
        },
        {
          title: "Statistical Analysis",
          items: [
            "Hypothesis testing → t-tests, chi-square, ANOVA",
            "Regression analysis → Linear and logistic regression",
            "Time series → Trend analysis and forecasting",
            "Statistical significance → p-values and confidence intervals",
            "Experimental design → A/B testing best practices"
          ]
        },
        {
          title: "Introduction to Machine Learning",
          items: [
            "Supervised learning → Classification and regression basics",
            "Model evaluation → Accuracy, precision, recall metrics",
            "Feature engineering → Creating meaningful variables",
            "scikit-learn → Python ML library fundamentals",
            "Interpretation → Making ML results business-friendly"
          ]
        },
        {
          title: "Advanced Visualization",
          items: [
            "Interactive dashboards → User-driven exploration",
            "Advanced Tableau → Calculated fields, parameters",
            "Power BI advanced → DAX formulas, custom visuals",
            "Plotly Dash → Web-based Python dashboards",
            "Design principles → Professional presentation standards"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Market basket analysis → Association rules in retail",
            "Employee attrition prediction → ML classification model",
            "Automated dashboard → Power BI/Tableau with refresh",
            "A/B testing framework → Statistical analysis pipeline",
            "Financial forecasting → Time series analysis project"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Industry Ready",
      subtitle: "Industry Ready (6–12 months)",
      description: "Build portfolio, master industry tools, and gain real-world experience",
      color: "bg-red-500",
      sections: [
        {
          title: "Business Intelligence Mastery",
          items: [
            "Tableau advanced → Complex calculations, advanced charts",
            "Power BI expert → Custom visuals, PowerQuery, DAX mastery",
            "Dashboard best practices → User experience design",
            "Performance optimization → Fast-loading, responsive dashboards",
            "Enterprise features → Row-level security, deployment"
          ]
        },
        {
          title: "Advanced Data Skills",
          items: [
            "SQL optimization → Query performance tuning",
            "Data pipeline basics → ETL process understanding",
            "API integration → Pulling data from web services",
            "Web scraping → Automated data collection",
            "Database design → Normalized table structures"
          ]
        },
        {
          title: "Cloud Analytics Platforms",
          items: [
            "Google Analytics → Web traffic analysis",
            "BigQuery → Cloud data warehousing basics",
            "AWS analytics → Redshift, QuickSight introduction",
            "Snowflake → Modern data platform fundamentals",
            "Cloud cost management → Efficient resource usage"
          ]
        },
        {
          title: "Communication & Soft Skills",
          items: [
            "Data storytelling → Narrative structure for insights",
            "Executive presentations → C-level communication",
            "Business requirements → Translating needs to analysis",
            "Project management → Planning and delivering projects",
            "Stakeholder management → Building relationships"
          ]
        },
        {
          title: "Professional Development",
          items: [
            "Portfolio creation → GitHub showcase of projects",
            "LinkedIn optimization → Professional online presence",
            "Networking → Data community engagement",
            "Interview preparation → Technical and behavioral questions",
            "Continuous learning → Staying current with trends"
          ]
        },
        {
          title: "Industry Projects",
          items: [
            "Sales analysis dashboard → Complete Tableau/Power BI solution",
            "Social media sentiment → Python text analysis project",
            "Predictive analytics → Customer behavior forecasting",
            "Automation dashboard → Self-updating reports",
            "Kaggle competition → Public data science challenge"
          ]
        },
        {
          title: "Certifications",
          items: [
            "Google Data Analytics → Professional certificate program",
            "Microsoft Excel/Power BI → Official certifications",
            "Tableau Desktop Specialist → Platform-specific credential",
            "SQL certifications → Database-specific credentials",
            "Python for Data Analysis → Programming certifications"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Advanced Specialization",
      subtitle: "Expert Level (12+ months)",
      description: "Transition into advanced analytics, Data Science, or specialized fields",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Machine Learning Specialization",
          items: [
            "Advanced algorithms → Random Forest, SVM, clustering",
            "Deep learning basics → Neural networks with TensorFlow",
            "Model deployment → Making models production-ready",
            "Feature engineering → Advanced variable creation",
            "MLOps basics → Model lifecycle management"
          ]
        },
        {
          title: "Data Engineering Basics",
          items: [
            "ETL pipelines → Data extraction, transformation, loading",
            "Apache Airflow → Workflow orchestration",
            "Data quality → Automated validation and monitoring",
            "Big data tools → Spark, Hadoop introduction",
            "Cloud data platforms → AWS, GCP, Azure data services"
          ]
        },
        {
          title: "Advanced Analytics",
          items: [
            "Time series forecasting → ARIMA, seasonal decomposition",
            "Cohort analysis → Customer lifecycle understanding",
            "Statistical modeling → Advanced regression techniques",
            "Optimization → Linear programming, resource allocation",
            "Simulation → Monte Carlo methods"
          ]
        },
        {
          title: "Specialized Domains",
          items: [
            "Marketing analytics → Attribution, campaign optimization",
            "Financial analytics → Risk modeling, portfolio analysis",
            "Healthcare analytics → Clinical data, outcomes analysis",
            "Operations research → Supply chain, logistics optimization",
            "Web analytics → User behavior, conversion optimization"
          ]
        },
        {
          title: "Leadership & Strategy",
          items: [
            "Team management → Leading analyst teams",
            "Data strategy → Organizational data initiatives",
            "Training & mentoring → Developing junior analysts",
            "Business partnership → Strategic decision support",
            "Innovation → Identifying new analytical opportunities"
          ]
        },
        {
          title: "Master Projects",
          items: [
            "Predictive modeling → Advanced ML for business outcomes",
            "Automated reporting → End-to-end self-service analytics",
            "Real-time analytics → Live dashboard with streaming data",
            "Data science pipeline → Research to production workflow",
            "Business transformation → Analytics-driven process improvement"
          ]
        }
      ]
    }
  ];
