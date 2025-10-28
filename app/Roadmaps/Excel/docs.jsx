"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Excel Help & Learning – Microsoft Support",
    description:
      "Official Microsoft Excel learning resource for all levels including basics, formulas, and data management.",
    url: "https://support.microsoft.com/en-us/excel",
    citation: "Microsoft Support",
  },
  {
    title: "Formulas and Functions – Microsoft Support",
    description:
      "Learn how to apply functions and build formulas effectively with official Microsoft guidance.",
    url: "https://support.microsoft.com/en-us/excel-formulas",
    citation: "Microsoft Support",
  },
  {
    title: "Excel Functions (Alphabetical List)",
    description:
      "Complete A–Z index of all Excel functions with usage examples and syntax.",
    url: "https://support.microsoft.com/en-us/office/excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188",
    citation: "Microsoft Support",
  },
  {
    title: "Excel Development & Customization",
    description:
      "Official Microsoft Learn guide for Excel automation, macros, add-ins, and API integration.",
    url: "https://learn.microsoft.com/en-us/office/dev/add-ins/excel/",
    citation: "Microsoft Learn",
  },
  {
    title: "Power Query Documentation",
    description:
      "Complete documentation for Power Query: importing, cleaning, and transforming data efficiently.",
    url: "https://learn.microsoft.com/en-us/power-query/",
    citation: "Microsoft Learn",
  },
  {
    title: "What is Power Query?",
    description:
      "Beginner-friendly introduction to Power Query concepts and applications in Excel.",
    url: "https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query",
    citation: "Microsoft Learn",
  },
  {
    title: "Power Query M Formula Language",
    description:
      "Technical reference for M language used to build advanced data transformations in Power Query.",
    url: "https://learn.microsoft.com/en-us/powerquery-m/",
    citation: "Microsoft Learn",
  },
  {
    title: "DAX Reference (Power Pivot & Data Model)",
    description:
      "Data Analysis Expressions reference for Excel and Power BI to build advanced data models.",
    url: "https://learn.microsoft.com/en-us/dax/",
    citation: "Microsoft Learn",
  },
  {
    title: "DAX Function Library",
    description:
      "Complete list of DAX functions with syntax, examples, and business analytics usage.",
    url: "https://learn.microsoft.com/en-us/dax/dax-function-reference",
    citation: "Microsoft Learn",
  },
  {
    title: "Microsoft 365 Excel Documentation",
    description:
      "Official guidance on Excel features inside the Microsoft 365 ecosystem: cloud, collaboration, AI tools.",
    url: "https://learn.microsoft.com/en-us/microsoft-365/excel/",
    citation: "Microsoft Learn",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📌 Excel Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Verified and beginner-to-advanced official Microsoft learning resources
          to master Excel, Power Query, DAX, Functions and Automation.
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
