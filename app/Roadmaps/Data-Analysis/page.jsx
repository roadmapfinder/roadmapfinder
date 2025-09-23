"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, BarChart3, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DataAnalystRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
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
                        Phase {phase.id}: {phase.title}
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
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
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
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Timeline */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📊 Suggested Learning Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🏃‍♂️ Full-Time Learning (6-12 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 0–1 month: Foundation (Excel + basic stats + first projects)</li>
                    <li>• 1–3 months: Core skills (SQL + visualization + data cleaning)</li>
                    <li>• 3–6 months: Advanced analysis (Python/R + BI tools + statistics)</li>
                    <li>• 6–12 months: Industry readiness (portfolio + certifications)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">🚶‍♂️ Part-Time Learning (12-18 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extend each phase by 50-100% additional time</li>
                    <li>• Focus on one major skill per month</li>
                    <li>• Complete one project every 2-3 months</li>
                    <li>• Join data analyst communities for support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Requirements */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🏆 Must-Have Portfolio Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">Sales Dashboard</h3>
                  <p className="text-sm text-gray-600">Tableau/Power BI dashboard with interactive filters and KPIs</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">Customer Analysis</h3>
                  <p className="text-sm text-gray-600">Python/R analysis with churn prediction and segmentation</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">A/B Testing</h3>
                  <p className="text-sm text-gray-600">Statistical analysis with hypothesis testing and recommendations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">Automated Reports</h3>
                  <p className="text-sm text-gray-600">Self-updating dashboard with scheduled data refresh</p>
                </div>
              </div>
            </div>

            {/* Suggested Learning Path */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🛤️ Recommended Learning Path
              </h2>
              <div className="bg-white p-4 rounded-lg border border-yellow-300">
                <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">Excel</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">SQL</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-green-100 px-3 py-1 rounded-full font-medium">Python/R</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-purple-100 px-3 py-1 rounded-full font-medium">Visualization</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-red-100 px-3 py-1 rounded-full font-medium">Advanced SQL</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-indigo-100 px-3 py-1 rounded-full font-medium">Dashboards</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-pink-100 px-3 py-1 rounded-full font-medium">Portfolio</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-orange-100 px-3 py-1 rounded-full font-medium">Certification</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Pro Tip:</strong> Build a GitHub portfolio of 5–10 projects. Recruiters look for practical work, not just certificates.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're Data Analysis Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Data Analyst Mastery Roadmap and are now ready to extract insights from data and drive business decisions at top companies.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎯 Job Application Checklist</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Portfolio with 3-5 diverse projects showing different skills</li>
                  <li>• ✅ Interactive dashboards hosted online (Tableau Public/Power BI)</li>
                  <li>• ✅ SQL and Python code samples on GitHub</li>
                  <li>• ✅ Resume with quantified achievements (% improvements, insights delivered)</li>
                  <li>• ✅ LinkedIn profile optimized with relevant keywords and projects</li>
                  <li>• ✅ Practice explaining technical concepts to non-technical audiences</li>
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
            <BarChart3 className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Data Analyst <span className="text-blue-600">Mastery Roadmap</span>
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
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
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
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
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
                  ? 'bg-blue-500 text-white'
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

export default DataAnalystRoadmap;