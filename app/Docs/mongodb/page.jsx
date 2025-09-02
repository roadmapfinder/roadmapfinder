"use client";
import React from "react";

const MongodbThapaTechnical = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          MongoDB Crash Course — Thapa Technical (Livestream Bootcamp)
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <em>“MongoDB Crash Course”</em> by Thapa Technical is a{" "}
          <strong>6-hour Hindi-language live bootcamp</strong> covering
          MongoDB from fundamentals to advanced operations. It emphasizes
          hands-on learning, real-world integration with Node.js, and Mongoose
          for structured schema-based development.
        </p>

        {/* Learning Format */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Format
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>6-hour live video session on YouTube (recorded bootcamp).</li>
          <li>Supplementary resources including PPT slides and source code.</li>
          <li>Guided mini-projects for practical reinforcement.</li>
        </ul>

        {/* Core Modules */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Core Modules
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>NoSQL vs SQL:</strong> Understanding document vs relational databases, and why MongoDB.</li>
          <li><strong>MongoDB Basics:</strong> Architecture, BSON vs JSON storage format.</li>
          <li><strong>MongoDB Atlas & Compass:</strong> Working with cloud-hosted MongoDB and GUI management tools.</li>
          <li><strong>CRUD Operations:</strong> insertOne, insertMany, find, findOne, updateOne, updateMany, deleteOne, deleteMany.</li>
          <li><strong>Advanced Reads:</strong> Projections, filters, sorting, and pagination.</li>
          <li><strong>Indexes & Optimization:</strong> createIndex, query performance with explain(), index types and use cases.</li>
          <li><strong>Aggregation Framework:</strong> $match, $group, $unwind, $project, $push, $addFields for analytics and transformations.</li>
          <li><strong>Node.js Integration:</strong> Using the official MongoDB Node.js driver for database operations.</li>
          <li><strong>Mongoose ODM:</strong> Benefits of schemas, validation, middleware, and managing relations in collections.</li>
          <li><strong>Hands-On Projects:</strong> Building Node.js applications with MongoDB and Mongoose.</li>
          <li><strong>Notes & Resources:</strong> Downloadable slides and structured documentation.</li>
        </ul>

        {/* Suggested Workflow */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Workflow
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Watch the session sequentially to grasp flow and concepts.</li>
          <li>Pause and practice CRUD queries in MongoDB Atlas or local setup.</li>
          <li>Follow along in Node.js to implement MongoClient-based operations.</li>
          <li>Switch to Mongoose for schema-based modeling and practice examples.</li>
          <li>Apply lessons in guided mini-projects for real-world reinforcement.</li>
        </ul>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Master MongoDB fundamentals — CRUD, indexing, aggregation.</li>
          <li>Understand performance optimization with indexes and explain plans.</li>
          <li>Confidently integrate MongoDB with Node.js applications.</li>
          <li>Build structured apps with schema-driven design using Mongoose.</li>
          <li>Gain hands-on practice through guided mini-projects and exercises.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>MongoDB Crash Course</strong> by Thapa Technical provides
          a complete, practical introduction to MongoDB — from{" "}
          <em>NoSQL foundations</em> to <em>Node.js and Mongoose integration</em>.
          In just 6 hours, learners are equipped with the tools needed to apply
          MongoDB confidently in modern web development projects, making it
          an ideal resource for students and aspiring developers.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1"><strong>Platform:</strong> YouTube (Thapa Technical)</p>
          <p className="mb-1"><strong>Instructor:</strong> Thapa Technical</p>
          <p className="mb-1"><strong>Language:</strong> Hindi</p>
          <p><strong>Level:</strong> Beginner to Intermediate</p>
        </div>

      </article>
    </div>
  );
};

export default MongodbThapaTechnical;
