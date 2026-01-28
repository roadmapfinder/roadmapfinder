"use client";
import React from "react";

const HTMLChaiAurCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-5xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              <span className="text-white font-bold text-sm tracking-wide uppercase">Free Course</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 mb-6 leading-tight">
            HTML Complete Course
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-orange-900 mb-4">
            Chai aur Code
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-orange-800 font-semibold shadow-md">
              🎥 YouTube Course
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-orange-800 font-semibold shadow-md">
              🇮🇳 Hindi
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-orange-800 font-semibold shadow-md">
              🎯 Beginner
            </span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white/90 backdrop-blur rounded-3xl p-8 sm:p-10 shadow-2xl border border-orange-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-orange-900">Introduction</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is a complete HTML course by <span className="font-bold text-orange-700">Chai aur Code</span>, designed for absolute beginners who want to start their web development journey the right way. The course focuses on core HTML fundamentals, semantic structure, accessibility, and real-world page building.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-orange-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-2xl">✅</span>
            </div>
            <h2 className="text-3xl font-black text-orange-900">Prerequisites</h2>
          </div>
          <ul className="space-y-3">
            {[
              "No prior programming knowledge required",
              "Basic computer and browser usage",
              "Any code editor (VS Code recommended)"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-lg text-gray-800">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Content Overview */}
        <section className="mb-12">
          <h2 className="text-4xl font-black text-orange-900 mb-8 text-center">
            📚 Course Modules
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Module 1 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  1
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Introduction to Web & HTML
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>What HTML is and why it exists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>How websites work (browser & server)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Setting up VS Code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Understanding browser DevTools</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  2
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  HTML Syntax & Structure
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>HTML document boilerplate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Tags, elements, and attributes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Head vs Body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Meta tags and page titles</span>
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  3
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Text Content & Formatting
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Headings (h1–h6) and paragraphs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Bold, italic, underline, strike</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Inline vs block elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Semantic text tags</span>
                </li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  4
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Links & Images
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Anchor tags and navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Target attributes and external links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Image tags and attributes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Accessibility using alt text</span>
                </li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  5
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Lists & Tables
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Ordered, unordered, and description lists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Table structure and semantics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Table headers, rows, and cells</span>
                </li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  6
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Forms & Inputs
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Form tag and form submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Input types: text, email, password</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Labels, placeholders, required fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Checkboxes, radio buttons, dropdowns</span>
                </li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  7
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Multimedia & Embeds
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Audio and video tags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Embedding external content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Using iframes</span>
                </li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  8
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Semantic HTML5
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>header, nav, main, footer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>section, article, aside</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Why semantic HTML matters</span>
                </li>
              </ul>
            </div>

            {/* Module 9 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  9
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  HTML Best Practices
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Accessibility fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>SEO-friendly HTML structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Clean and readable markup</span>
                </li>
              </ul>
            </div>

            {/* Module 10 */}
            <div className="group bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                  10
                </span>
                <h3 className="text-xl font-black text-orange-900 group-hover:text-orange-700 transition-colors">
                  Real Page Building
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Complete website layout using HTML</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Navigation bar structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>Content sections and footer</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Workflow */}
        <section className="mb-12 bg-white/90 backdrop-blur rounded-3xl p-8 sm:p-10 shadow-2xl border border-orange-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-orange-900">Learning Workflow</h2>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, text: "Watch the course sequentially", icon: "🎬" },
              { step: 2, text: "Practice every tag hands-on", icon: "💻" },
              { step: 3, text: "Build pages while learning", icon: "🏗️" },
              { step: 4, text: "Prepare for CSS & JavaScript", icon: "🚀" }
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">
                  {item.step}
                </div>
                <span className="text-2xl">{item.icon}</span>
                <p className="text-lg font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-green-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-green-900">Expected Outcomes</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Strong HTML fundamentals",
              "Ability to structure real websites",
              "Understanding of semantic and accessible HTML",
              "Ready for CSS and JavaScript"
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/80 rounded-xl shadow-md">
                <span className="flex-shrink-0 text-2xl">🎯</span>
                <p className="text-lg font-semibold text-gray-800">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-4">
            Ready to Start Your Journey? ☕
          </h3>
          <p className="text-xl text-orange-100 mb-6">
            Head over to YouTube and begin learning with Chai aur Code!
          </p>
          <button className="px-8 py-4 bg-white text-orange-700 font-black text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Watch on YouTube →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HTMLChaiAurCode;