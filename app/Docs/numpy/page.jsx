"use client";
import React from "react";

const NumpyChaiAurCode = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          Complete NumPy Course (Hindi) — Chai aur Code (Hitesh Choudhary)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A detailed YouTube tutorial on <strong>NumPy</strong>, delivered in Hindi and 
          tailored for data science learners. This course covers essential and 
          intermediate NumPy concepts, explained in Hitesh Choudhary’s clear and 
          practical teaching style.
        </p>

        {/* Curriculum Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Curriculum Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">

          <li>
            <strong>Introduction & Setup:</strong> What NumPy is, installation via pip, 
            and environment setup.
          </li>

          <li>
            <strong>NumPy Arrays:</strong> Difference between Python lists and NumPy arrays; 
            creating arrays using <code>array</code>, <code>arange</code>, 
            <code>zeros</code>, <code>ones</code>, <code>linspace</code>.
          </li>

          <li>
            <strong>Array Properties:</strong> Shape, dimensions (<code>ndim</code>), 
            data types (<code>dtype</code>), and memory layout.
          </li>

          <li>
            <strong>Indexing & Slicing:</strong> Accessing elements, multi-dimensional slicing, 
            boolean indexing.
          </li>

          <li>
            <strong>Vectorized Operations:</strong> Element-wise arithmetic, broadcasting rules, 
            and performance benefits.
          </li>

          <li>
            <strong>Universal Functions (ufuncs):</strong> Mathematical operations like 
            <code>sin</code>, <code>exp</code>, <code>sqrt</code>, and aggregation functions 
            (<code>sum</code>, <code>mean</code>, <code>max</code>).
          </li>

          <li>
            <strong>Reshaping & Stacking:</strong> Using <code>reshape</code>, 
            <code>ravel</code>, concatenation (<code>vstack</code>, <code>hstack</code>), 
            and splitting.
          </li>

          <li>
            <strong>Random Module:</strong> Generating random numbers with 
            <code>random.rand</code>, <code>random.randn</code>, and controlling randomness 
            using <code>seed</code>.
          </li>

          <li>
            <strong>File I/O:</strong> Loading and saving arrays using 
            <code>np.save</code>, <code>np.load</code>, <code>np.genfromtxt</code>, and CSV.
          </li>

          <li>
            <strong>Mini Projects / Use Cases:</strong> Hands-on examples such as 
            image data manipulation, statistical analysis, and preprocessing datasets.
          </li>

        </ul>

        {/* Learning Workflow */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Suggested Learning Workflow
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Follow along each video sequentially and replicate code examples.</li>
          <li>Experiment by modifying array operations and reshaping tasks.</li>
          <li>Apply NumPy in mini projects like statistical analysis or image data.</li>
          <li>Save and document your practice in a GitHub repo for portfolio building.</li>
        </ul>

        {/* Summary & Recommendation */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary & Recommendation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This NumPy course is ideal for <strong>beginners and intermediate learners</strong> 
          aiming to strengthen their Python data science foundation. It combines practical 
          coding with conceptual clarity, making it an excellent resource for students and 
          professionals transitioning into analytics and machine learning.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (Chai aur Code)</p>
          <p className="mb-1"><strong>Instructor:</strong> Hitesh Choudhary</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default NumpyChaiAurCode;
 