"use client";
import React from "react";

const CSSCodeWithSagar = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          CSS Complete Course — Code With Sagar
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a <strong>complete CSS full course</strong> by 
          <strong> Code With Sagar</strong>, designed to teach 
          <strong> modern CSS from absolute basics to advanced layout techniques</strong>.  
          The course focuses on real-world styling, responsive design, Flexbox, Grid, 
          animations, and practical UI building.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Basic HTML knowledge recommended.</li>
          <li>No prior CSS experience required.</li>
          <li>A modern browser and VS Code preferred.</li>
        </ul>

        {/* Content Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Content Overview
        </h2>

        {/* Module 1 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 1: Introduction to CSS
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>What CSS is and why it’s used.</li>
          <li>How CSS works with HTML.</li>
          <li>Inline, internal, and external CSS.</li>
          <li>Using browser DevTools.</li>
        </ul>

        {/* Module 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 2: CSS Syntax & Selectors
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Selectors, properties, and values.</li>
          <li>Class, ID, and element selectors.</li>
          <li>Grouping and attribute selectors.</li>
        </ul>

        {/* Module 3 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 3: Colors, Fonts & Text Styling
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Colors: HEX, RGB, HSL.</li>
          <li>Fonts, font-weight, font-family.</li>
          <li>Text alignment, spacing, decoration.</li>
        </ul>

        {/* Module 4 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 4: Box Model & Display
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Content, padding, border, margin.</li>
          <li>Box sizing and overflow.</li>
          <li>Display types: block, inline, inline-block.</li>
        </ul>

        {/* Module 5 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 5: Flexbox Layout
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Flex container and items.</li>
          <li>Main axis vs cross axis.</li>
          <li>justify-content and align-items.</li>
          <li>Flex direction and wrapping.</li>
        </ul>

        {/* Module 6 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 6: CSS Grid Layout
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Grid containers and items.</li>
          <li>Rows, columns, and gaps.</li>
          <li>Grid template areas.</li>
          <li>Real layout structuring.</li>
        </ul>

        {/* Module 7 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 7: Positioning & Float
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Static, relative, absolute positioning.</li>
          <li>Fixed and sticky layouts.</li>
          <li>Float, clear, and z-index.</li>
        </ul>

        {/* Module 8 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 8: Responsive Design
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Media queries.</li>
          <li>Breakpoints for devices.</li>
          <li>Responsive units (%, rem, vw, vh).</li>
        </ul>

        {/* Module 9 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 9: Backgrounds & Borders
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Background images and gradients.</li>
          <li>Border styles and radius.</li>
          <li>Box shadows.</li>
        </ul>

        {/* Module 10 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 10: Transitions & Animations
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>CSS transitions.</li>
          <li>Timing functions.</li>
          <li>Keyframe animations.</li>
        </ul>

        {/* Module 11 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 11: Pseudo-classes & Pseudo-elements
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>:hover, :focus, :active.</li>
          <li>::before and ::after.</li>
          <li>Structural selectors.</li>
        </ul>

        {/* Module 12 */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Module 12: Practical Projects
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Navigation bar design.</li>
          <li>Hero sections and cards.</li>
          <li>Responsive landing pages.</li>
          <li>Styled forms.</li>
        </ul>

        {/* Learning Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Workflow
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the course sequentially.</li>
          <li>Practice every layout concept.</li>
          <li>Build sections alongside the instructor.</li>
          <li>Apply CSS to real projects.</li>
        </ol>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Strong CSS fundamentals.</li>
          <li>Ability to create responsive layouts.</li>
          <li>Confidence with Flexbox & Grid.</li>
          <li>Professional-looking UI designs.</li>
        </ul>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Instructor:</strong> Code With Sagar</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p className="mb-1"><strong>Level:</strong> Beginner to Advanced</p>
          <p><strong>Includes:</strong> One-shot full CSS course + practical layouts</p>
        </div>

      </article>
    </div>
  );
};

export default CSSCodeWithSagar;
