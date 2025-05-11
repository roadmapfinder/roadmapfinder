"use client";
import { useState } from "react";
import Head from "next/head";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Basics of Data",
    description: "Understand fundamental data concepts and thinking",
    content: {
      whatToLearn: [
        "Data Types & Structures",
        "Structured vs Unstructured Data",
        "Qualitative vs Quantitative",
        "Data Collection Methods",
        "Data Quality Assessment",
        "Introduction to Analytics",
      ],
      bestCourses: {
        english: [
          "Data Science Math Skills (Duke University/Coursera)",
          "Introduction to Data (DataCamp)",
          "Data Science Foundations (IBM/edX)",
          "Data Science: Foundations using R (Johns Hopkins)",
        ],
        hindi: [
          "Data Science Basics in Hindi (Great Learning)",
          "Data Science Fundamentals Hindi (WsCube Tech)",
          "Learn Data Analytics in Hindi (Intellipaat)",
          "Data Science Introduction in Hindi (Analytics Vidhya)",
        ],
      },
      toolsToUse: [
        "Google Sheets",
        "Microsoft Excel",
        "Note-taking Software",
        "Mendeley/Zotero",
        "Notion/Obsidian",
      ],
      docsAndWebsites: [
        "Khan Academy Statistics",
        "Data Science Central",
        "Towards Data Science Medium",
        "DataCamp Community",
        "Open Data Institute",
      ],
      projectIdeas: [
        "Data collection exploration project",
        "Data quality assessment report",
        "Personal data dashboard",
        "Data dictionary creation",
      ],
    },
  },
  {
    id: 2,
    title: "Excel & Sheets",
    description: "Master spreadsheet basics for data manipulation",
    content: {
      whatToLearn: [
        "Basic Functions & Formulas",
        "Data Cleaning & Preprocessing",
        "Pivot Tables & Charts",
        "VLOOKUP & HLOOKUP",
        "Conditional Formatting",
        "Data Analysis ToolPak",
      ],
      bestCourses: {
        english: [
          "Excel Skills for Business (Macquarie University/Coursera)",
          "Microsoft Excel - Excel from Beginner to Advanced (Udemy)",
          "Excel Skills for Data Analytics (LinkedIn Learning)",
          "Advanced Excel Formulas & Functions (Leila Gharani)",
        ],
        hindi: [
          "Complete Excel Course Hindi (TeachingTube)",
          "Advanced Excel Hindi (Career Anna)",
          "Excel for Data Analysis Hindi (ExcelHindi)",
          "MS Excel Masterclass Hindi (SkillShare)",
        ],
      },
      toolsToUse: [
        "Microsoft Excel",
        "Google Sheets",
        "LibreOffice Calc",
        "Power Query",
        "Excel Add-ins",
      ],
      docsAndWebsites: [
        "Microsoft Excel Documentation",
        "ExcelJet",
        "Chandoo.org",
        "Excel Easy",
        "Excel Campus",
      ],
      projectIdeas: [
        "Sales data analysis dashboard",
        "Personal finance tracker",
        "Data cleaning automation project",
        "Interactive budget template",
      ],
    },
  },
  {
    id: 3,
    title: "Statistics",
    description: "Build a solid foundation in statistical concepts",
    content: {
      whatToLearn: [
        "Descriptive Statistics",
        "Probability Distributions",
        "Hypothesis Testing",
        "Correlation & Regression",
        "ANOVA & Chi-square Tests",
        "Bayesian Statistics",
      ],
      bestCourses: {
        english: [
          "Statistics with R (Duke University/Coursera)",
          "Statistics and Probability (Khan Academy)",
          "Statistical Learning (Stanford Online)",
          "Statistics Fundamentals (DataCamp)",
        ],
        hindi: [
          "Statistics for Data Science Hindi (Great Learning)",
          "Probability & Statistics Hindi (MathsLearningHindi)",
          "Statistical Methods in Hindi (StatTech)",
          "Applied Statistics Hindi (LearnVern)",
        ],
      },
      toolsToUse: [
        "R & RStudio",
        "Python (NumPy, SciPy, StatsModels)",
        "JASP/SPSS",
        "StatCrunch",
        "GraphPad",
      ],
      docsAndWebsites: [
        "Seeing Theory",
        "Statistics How To",
        "StatQuest with Josh Starmer",
        "OpenIntro Statistics",
        "R-statistics blog",
      ],
      projectIdeas: [
        "A/B testing analysis",
        "Exploratory data analysis report",
        "Statistical inference project",
        "Regression model case study",
      ],
    },
  },
  {
    id: 4,
    title: "Python",
    description: "Learn Python for data manipulation and analysis",
    content: {
      whatToLearn: [
        "Python Basics & Data Types",
        "NumPy & Pandas",
        "Data Cleaning & Manipulation",
        "Matplotlib & Seaborn",
        "Data Analysis Workflows",
        "Automation & Scripting",
      ],
      bestCourses: {
        english: [
          "Python for Data Science and Machine Learning Bootcamp (Udemy)",
          "Python for Everybody (Coursera)",
          "Data Analysis with Python (FreeCodeCamp)",
          "Python Data Science Handbook (Jake VanderPlas)",
        ],
        hindi: [
          "Python for Data Science Hindi (CodeWithHarry)",
          "Complete Python Course Hindi (Krish Naik)",
          "Python Programming Hindi (ApniKaksha)",
          "Pandas & NumPy Hindi (DataScienceHindi)",
        ],
      },
      toolsToUse: [
        "Jupyter Notebooks",
        "VS Code",
        "Google Colab",
        "Anaconda",
        "PyCharm",
      ],
      docsAndWebsites: [
        "Python Documentation",
        "Pandas Documentation",
        "Real Python",
        "Python Data Science Handbook",
        "Kaggle Learn",
      ],
      projectIdeas: [
        "Automated data cleaning script",
        "Exploratory data analysis notebook",
        "Web scraping project",
        "Data visualization dashboard",
      ],
    },
  },
  {
    id: 5,
    title: "SQL",
    description: "Master database querying and management",
    content: {
      whatToLearn: [
        "Basic SQL Syntax",
        "Data Retrieval (SELECT)",
        "Filtering & Sorting",
        "Joins & Relationships",
        "Aggregations & Window Functions",
        "Database Design Basics",
      ],
      bestCourses: {
        english: [
          "SQL for Data Science (UC Davis/Coursera)",
          "The Complete SQL Bootcamp (Udemy)",
          "SQL Essential Training (LinkedIn Learning)",
          "SQL Practice on HackerRank",
        ],
        hindi: [
          "SQL Complete Course Hindi (MySirG)",
          "Database & SQL Hindi (DigitalSikho)",
          "SQL for Data Analysis Hindi (TechGyan)",
          "Advanced SQL in Hindi (SQLGuru)",
        ],
      },
      toolsToUse: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "DBeaver",
        "SQL Server Management Studio",
      ],
      docsAndWebsites: [
        "Mode SQL Tutorial",
        "W3Schools SQL",
        "SQLZoo",
        "LearnSQL.com",
        "PostgreSQL Documentation",
      ],
      projectIdeas: [
        "Database design for e-commerce",
        "SQL data analysis project",
        "Database migration script",
        "SQL dashboard integration",
      ],
    },
  },
  {
    id: 6,
    title: "Visualization Tools",
    description: "Learn to create effective data visualizations",
    content: {
      whatToLearn: [
        "Data Visualization Principles",
        "Chart Types & Selection",
        "Interactive Dashboards",
        "Storytelling with Data",
        "Color Theory & Accessibility",
        "Geographic Visualizations",
      ],
      bestCourses: {
        english: [
          "Data Visualization with Tableau (UC Davis/Coursera)",
          "Data Visualization with Python (IBM/Coursera)",
          "Data Visualization Nanodegree (Udacity)",
          "Storytelling with Data (Cole Nussbaumer)",
        ],
        hindi: [
          "Tableau Complete Course Hindi (Data Science Learner)",
          "Power BI Hindi Tutorial (DataTrained)",
          "Data Visualization in Hindi (VisualizeTech)",
          "Dashboard Development Hindi (Intellipaat)",
        ],
      },
      toolsToUse: [
        "Tableau",
        "Power BI",
        "Python (Matplotlib, Seaborn, Plotly)",
        "Google Data Studio",
        "D3.js",
      ],
      docsAndWebsites: [
        "Tableau Public Gallery",
        "Power BI Community",
        "Data Visualization Society",
        "Information is Beautiful",
        "Flowing Data",
      ],
      projectIdeas: [
        "Interactive sales dashboard",
        "COVID-19 data visualization",
        "Geographic data exploration",
        "Industry trend analysis dashboard",
      ],
    },
  },
  {
    id: 7,
    title: "Machine Learning",
    description: "Understand and apply machine learning algorithms",
    content: {
      whatToLearn: [
        "Supervised vs Unsupervised Learning",
        "Classification & Regression",
        "Model Evaluation Metrics",
        "Feature Engineering",
        "Ensemble Methods",
        "Clustering & Dimensionality Reduction",
      ],
      bestCourses: {
        english: [
          "Machine Learning (Andrew Ng/Stanford)",
          "Introduction to Machine Learning (Udacity)",
          "Applied Machine Learning in Python (UMich/Coursera)",
          "Hands-On Machine Learning with Scikit-Learn (O'Reilly)",
        ],
        hindi: [
          "Machine Learning Hindi (GreatLearning)",
          "ML for Beginners Hindi (ScikitIndia)",
          "ML Algorithms Hindi (DataMentor)",
          "Data Science Machine Learning Hindi (Analytics Vidhya)",
        ],
      },
      toolsToUse: [
        "Scikit-Learn",
        "Pandas & NumPy",
        "Keras & TensorFlow",
        "MLflow",
        "Google Colab/Kaggle",
      ],
      docsAndWebsites: [
        "Scikit-Learn Documentation",
        "Towards Data Science",
        "Machine Learning Mastery",
        "Papers with Code",
        "Kaggle Competitions",
      ],
      projectIdeas: [
        "Customer churn prediction",
        "Product recommendation system",
        "Sentiment analysis model",
        "Image classification project",
      ],
    },
  },
  {
    id: 8,
    title: "Projects",
    description: "Build a portfolio of data science projects",
    content: {
      whatToLearn: [
        "Problem Definition",
        "Data Collection & Cleaning",
        "Analysis & Modeling",
        "Visualization & Communication",
        "Deployment Basics",
        "Documentation & GitHub",
      ],
      bestCourses: {
        english: [
          "Building Data Science Portfolio (DataCamp)",
          "Real-World Data Science Projects (Udemy)",
          "Applied Data Science Capstone (IBM/Coursera)",
          "Data Science Project Management (LinkedIn Learning)",
        ],
        hindi: [
          "Data Science Projects Hindi (IndiaAI)",
          "End-to-End DS Projects Hindi (ProjectGurukul)",
          "Portfolio Development Hindi (LearnData)",
          "Hands-on Projects Hindi (DataMastery)",
        ],
      },
      toolsToUse: [
        "GitHub",
        "Jupyter Notebooks",
        "Streamlit/Flask",
        "Docker",
        "Heroku/Netlify",
      ],
      docsAndWebsites: [
        "Kaggle Datasets",
        "GitHub Data Science Showcase",
        "DataQuest Projects",
        "UCI Machine Learning Repository",
        "Data.gov",
      ],
      projectIdeas: [
        "Customer segmentation analysis",
        "Predictive maintenance system",
        "Stock price prediction",
        "NLP-based text analyzer",
      ],
    },
  },
  {
    id: 9,
    title: "Practice Platforms",
    description: "Sharpen your skills with challenges and competitions",
    content: {
      whatToLearn: [
        "Problem-Solving Approach",
        "Competition Strategies",
        "Code Optimization",
        "Collaborative Data Science",
        "Peer Review Process",
        "Real-world Applications",
      ],
      bestCourses: {
        english: [
          "Kaggle Mini-Courses",
          "HackerRank Data Science Path",
          "DataCamp Competitions Tutorial",
          "How to Win Data Science Competitions (Coursera)",
        ],
        hindi: [
          "Kaggle Introduction Hindi (CodeBasics)",
          "Data Science Competitions Hindi (CompeteIndia)",
          "Problem Solving in DS Hindi (SkillBoost)",
          "Competitive Analytics Hindi (DataSports)",
        ],
      },
      toolsToUse: [
        "Kaggle",
        "DrivenData",
        "HackerRank",
        "LeetCode",
        "DataHack",
      ],
      docsAndWebsites: [
        "Kaggle Learn",
        "Analytics Vidhya",
        "Machine Hack",
        "AIcrowd",
        "DataQuest Community",
      ],
      projectIdeas: [
        "Kaggle competition submission",
        "Analytics Vidhya hackathon",
        "Predictive modeling challenge",
        "Collaborative open-source project",
      ],
    },
  },
  {
    id: 10,
    title: "Resources & Docs",
    description: "Key references and learning materials for your journey",
    content: {
      whatToLearn: [
        "Documentation Reading",
        "Research Paper Analysis",
        "Community Engagement",
        "Technical Writing",
        "Continuous Learning",
        "Specialized Knowledge Areas",
      ],
      bestCourses: {
        english: [
          "Technical Writing for Data Scientists (DataCamp)",
          "How to Read Research Papers (Stanford)",
          "Data Science Community Building (O'Reilly)",
          "Specialized Data Science Topics (MIT OpenCourseWare)",
        ],
        hindi: [
          "Technical Documentation Hindi (DocsTech)",
          "Research Reading in Hindi (ResearchWala)",
          "Community Building Hindi (DataNetwork)",
          "Advanced Resources Hindi (DSAdvance)",
        ],
      },
      toolsToUse: [
        "Zotero/Mendeley",
        "Google Scholar",
        "arXiv",
        "Medium/Substack",
        "Discord/Slack Communities",
      ],
      docsAndWebsites: [
        "Papers with Code",
        "Distill.pub",
        "Towards Data Science",
        "r/datascience",
        "Data Science Stack Exchange",
      ],
      projectIdeas: [
        "Tutorial blog series",
        "Data science newsletter",
        "Research paper implementation",
        "Open-source contribution",
      ],
    },
  },
];

export default function Data() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen font-['Inter', sans-serif] ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Data Analyst & Data Scientist Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for becoming a professional Data Analyst and Data Scientist"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">
          Data Analyst & Data Scientist Roadmap
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-700 text-yellow-300"
              : "bg-gray-200 text-gray-700"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <div
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Your Path to Becoming a Data Professional
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap guides you through the essential skills,
            tools, and resources needed to become a proficient Data Analyst and
            Data Scientist. Each section is carefully curated with resources in
            both English and Hindi to help you master every stage of your data
            science journey. Click on any section to explore its contents in
            detail.
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {openSection === section.id && (
                <div
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Courses */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🎓</span>Best Courses
                    </h4>

                    <div className="space-y-4">
                      {/* English Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools to Use */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🛠️</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🔗</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.docsAndWebsites.map(
                        (resource, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            {resource}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Project Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.projectIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Data Analyst & Data Scientist Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a data professional
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 Data Science Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
