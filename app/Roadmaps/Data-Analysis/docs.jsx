// components/DataAnalysisDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Python Documentation",
    description:
      "The primary resource for understanding Python's syntax, libraries, and best practices.",
    url: "https://docs.python.org/3/",
    citation: "Python Docs",
  },
  {
    title: "Pandas Documentation",
    description:
      "Comprehensive guide to data structures, data manipulation, and analysis using Pandas.",
    url: "https://pandas.pydata.org/docs/",
    citation: "Pandas Docs",
  },
  {
    title: "NumPy Documentation",
    description:
      "Essential for numerical computing, providing support for arrays, matrices, and mathematical functions.",
    url: "https://numpy.org/doc/",
    citation: "NumPy Docs",
  },
  {
    title: "Matplotlib Documentation",
    description:
      "A plotting library for creating static, animated, and interactive visualizations in Python.",
    url: "https://matplotlib.org/stable/index.html",
    citation: "Matplotlib Docs",
  },
  {
    title: "Seaborn Documentation",
    description:
      "Built on Matplotlib, Seaborn simplifies the creation of informative and attractive statistical graphics.",
    url: "https://seaborn.pydata.org/",
    citation: "Seaborn Docs",
  },
  {
    title: "SQL Documentation",
    description:
      "A comprehensive resource for SQL syntax, queries, and database management.",
    url: "https://www.sql.org/",
    citation: "SQL.org",
  },
  {
    title: "Tableau Documentation",
    description:
      "Guides and tutorials for using Tableau to connect, visualize, and share data insights.",
    url: "https://help.tableau.com/current/guides/everybody/",
    citation: "Tableau Help",
  },
  {
    title: "Power BI Documentation",
    description:
      "Official documentation covering Power BI's features, including data modeling, visualization, and sharing reports.",
    url: "https://docs.microsoft.com/en-us/power-bi/",
    citation: "Power BI Docs",
  },
  {
    title: "Coursera: Python, SQL, Tableau for Data Science",
    description:
      "A hands-on, beginner-friendly program that helps you develop practical skills using essential tools: SQL, Python, Microsoft Excel, Tableau, and AWS Machine Learning.",
    url: "https://www.coursera.org/professional-certificates/python-sql-tableau-data-science",
    citation: "Coursera Program",
  },
  {
    title: "Data Analyst Bootcamp for Beginners (SQL, Tableau, Power BI)",
    description:
      "A comprehensive bootcamp covering foundational topics in data analysis.",
    url: "https://www.youtube.com/watch?v=PSNXoAs2FtQ",
    citation: "YouTube Course",
  },
  {
    title: "Power BI Projects for Beginner to Advanced Users",
    description:
      "A collection of Power BI projects ranging from beginner to advanced levels to enhance your data analysis skills.",
    url: "https://www.dataquest.io/blog/power-bi-projects/",
    citation: "Dataquest Blog",
  },
];

export default function DataAnalysisDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Data Analysis Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every Data Analyst must know — covering programming, libraries, SQL, BI tools, and learning resources.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
