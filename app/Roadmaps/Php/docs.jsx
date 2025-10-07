// components/PHPDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "PHP Official Docs",
    description:
      "Comprehensive documentation covering all core PHP features, functions, and language reference.",
    url: "https://www.php.net/docs.php",
    citation: "PHP Docs",
  },
  {
    title: "PHP Language Reference",
    description:
      "In-depth explanation of PHP syntax, types, variables, operators, control structures, and functions.",
    url: "https://www.php.net/manual/en/langref.php",
    citation: "PHP Docs",
  },
  {
    title: "Arrays",
    description:
      "Learn how to use indexed, associative, and multidimensional arrays in PHP.",
    url: "https://www.php.net/manual/en/language.types.array.php",
    citation: "PHP Docs",
  },
  {
    title: "Strings",
    description:
      "Understand string manipulation, interpolation, and advanced string functions in PHP.",
    url: "https://www.php.net/manual/en/language.types.string.php",
    citation: "PHP Docs",
  },
  {
    title: "Functions",
    description:
      "Complete list of PHP functions for arrays, strings, files, date/time, and more.",
    url: "https://www.php.net/manual/en/indexes.functions.php",
    citation: "PHP Docs",
  },
  {
    title: "Error Handling",
    description:
      "Learn about exceptions, error levels, and best practices for handling errors in PHP.",
    url: "https://www.php.net/manual/en/language.errors.php",
    citation: "PHP Docs",
  },
  {
    title: "PHP Installation & Configuration",
    description:
      "Guide to installing PHP on Windows, macOS, Linux, and configuring runtime settings.",
    url: "https://www.php.net/manual/en/install.php",
    citation: "PHP Docs",
  },
  {
    title: "Security",
    description:
      "Best practices for securing PHP applications, including input validation, sessions, and password handling.",
    url: "https://www.php.net/manual/en/security.php",
    citation: "PHP Docs",
  },
];

export default function PHPDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official PHP Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official PHP documentation every learner should follow — from language reference, arrays, strings, functions, error handling, installation, to security best practices.
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
