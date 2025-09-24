// components/CDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "ISO/IEC 9899:2024 (C23) – Official C Language Standard",
    description:
      "The ISO/IEC 9899 standard defines the syntax, semantics, and constraints of the C programming language. The latest version, C23, was published in October 2024. While the full standard is behind a paywall, drafts and summaries are available.",
    url: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf",
    citation: "ISO/IEC Draft N3220",
  },
  {
    title: "GNU C Library Documentation",
    description:
      "The GNU C Library (glibc) is the standard C library for many Unix-like systems. This documentation provides detailed information on functions, macros, and header files.",
    url: "https://www.gnu.org/software/libc/manual/",
    citation: "GNU Project",
  },
  {
    title: "C Reference Manual by K&R",
    description:
      "Authored by Brian W. Kernighan and Dennis M. Ritchie, this manual is a concise and authoritative guide to the C programming language. Summaries and excerpts are available online.",
    url: "https://colorcomputerarchive.com/repo/Documents/Books/The%20C%20Programming%20Language%20%28Kernighan%20Ritchie%29.pdf",
    citation: "Kernighan & Ritchie",
  },
  {
    title: "Microsoft C Language Documentation",
    description:
      "Microsoft provides comprehensive documentation for C programming, including tutorials, language references, and usage with Visual Studio.",
    url: "https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170",
    citation: "Microsoft Docs",
  },
];

export default function CDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 C Programming Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and authoritative resources every C learner should know —
          C language standard, libraries, reference manuals, and vendor documentation.
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
