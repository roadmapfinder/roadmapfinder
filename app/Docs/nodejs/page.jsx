"use client";
import React from "react";

const NodeJsMasterclassCodersGyan = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Node.js Masterclass — Coders Gyan
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a comprehensive free <strong>Node.js Masterclass</strong> by{" "}
          <span className="text-green-600">Coders Gyan</span> on YouTube titled{" "}
          <strong>“Build Real Projects with FS, HTTP, Streams & More”</strong>.  
          The masterclass deeply explores Node.js core modules and real-world 
          backend projects — focusing on the <strong>File System (fs)</strong>,{" "}
          <strong>HTTP</strong>, <strong>Streams</strong>, and other built-in APIs.  
          Rather than depending on frameworks like Express, it emphasizes 
          mastering Node.js fundamentals from scratch.
        </p>
        <p className="text-gray-700 mb-6">
          Available on <strong>YouTube</strong> for free, this class is ideal for 
          backend learners who want to understand how Node works under the hood 
          and build production-level applications using core modules.
        </p>

        {/* Prerequisites */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Basic JavaScript and ES6+ knowledge</li>
          <li>Understanding of asynchronous concepts (callbacks, promises)</li>
          <li>VS Code or any modern IDE installed</li>
          <li>Node.js and npm installed on your system</li>
        </ul>

        {/* Course Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Course Workflow
        </h2>

        {/* Modules */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Introduction & Setup
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>What is Node.js and how it works with the V8 engine</li>
          <li>Understanding event loop and asynchronous I/O</li>
          <li>Installing Node.js and npm</li>
          <li>Project folder structure and first “Hello World” program</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. Module Systems & Dependency Management
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>CommonJS vs ES Modules</li>
          <li>Using <code>require</code>, <code>import</code>, and <code>export</code></li>
          <li>Working with <code>package.json</code> and semantic versioning</li>
          <li>Using npm / npx for module installation</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Core Modules — File System (fs)
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Reading and writing files synchronously and asynchronously</li>
          <li>Creating streams with <code>fs.createReadStream()</code> and <code>fs.createWriteStream()</code></li>
          <li>Watching files and directories</li>
          <li>Error handling and performance optimization</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Core Modules — Path, OS & Process
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Working with file paths using <code>path.join()</code> and <code>path.resolve()</code></li>
          <li>Fetching OS-level details with <code>os</code></li>
          <li>Understanding global objects like <code>process</code></li>
          <li>Environment variables and configurations</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Buffers & Binary Data
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Understanding buffers and their role in Node</li>
          <li>Converting between buffers and strings</li>
          <li>Handling binary files, slicing, and concatenation</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Streams (Readable / Writable / Transform / Duplex)
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Creating and using streams</li>
          <li>Handling backpressure and memory efficiency</li>
          <li>Piping data between streams</li>
          <li>Error handling and object mode streams</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. HTTP Module & Server Creation
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Using the <code>http</code> module to create a server</li>
          <li>Routing logic and request/response handling</li>
          <li>Serving static files manually</li>
          <li>Handling query strings and URL parsing</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Asynchronous Patterns
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Callbacks, Promises, and Async/Await</li>
          <li>Error-first callbacks and propagation</li>
          <li>Managing concurrency and async flows</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          9. Event Emitter & Custom Events
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Using Node’s <code>events</code> module</li>
          <li>Emitting and listening to events</li>
          <li>Designing event-driven architectures</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          10. Real-World Project Integration
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Combining <code>fs</code>, <code>http</code>, and <code>streams</code> in a real project</li>
          <li>Building a mini file streaming web server</li>
          <li>Error management and modular code structure</li>
        </ul>

        {/* What You'll Learn */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          What You’ll Learn
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Core Node.js fundamentals and architecture</li>
          <li>Mastery of FS, HTTP, and Streams modules</li>
          <li>Building projects without external frameworks</li>
          <li>Deep understanding of event-driven programming</li>
          <li>Modular, maintainable Node project structuring</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 mb-6">
          The <strong>Node.js Masterclass</strong> by{" "}
          <span className="text-green-600">Coders Gyan</span> is an 
          in-depth practical series that dives into the heart of Node.js 
          — focusing on real backend concepts and not just Express wrappers.  
          You’ll learn to build real-world projects, handle file I/O, 
          create HTTP servers, and work with streams and events efficiently.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Instructor:</strong> Coders Gyan</p>
          <p className="mb-1"><strong>Platform:</strong> YouTube</p>
          <p className="mb-1"><strong>Duration:</strong> ~5 hours (Free Masterclass)</p>
          <p className="mb-1"><strong>Level:</strong> Intermediate to Advanced</p>
          <p><strong>Format:</strong> Project-based, hands-on Node.js backend development</p>
        </div>

      </article>
    </div>
  );
};

export default NodeJsMasterclassCodersGyan;
