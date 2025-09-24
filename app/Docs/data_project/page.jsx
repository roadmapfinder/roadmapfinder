import React from "react";

export default function DataWarehouseFromScratch() {
  const course = {
    title: "Full Hands-On Data Warehouse from Scratch",
    platform: "YouTube",
    instructor: "Data with Baraa",
    goal: [
      "Teach how to build a modern data warehouse from scratch",
      "Bridge theory and practice with a hands-on project",
      "Show how data warehouses are built in real companies",
    ],
    targetAudience: [
      "Learners with basic SQL / data background",
      "People wanting to level up into ETL & warehouse systems",
      "Aspiring data engineers and analytics engineers",
    ],
    modules: [
      {
        title: "Introduction & Project Setup",
        subtopics: [
          "Why a data warehouse",
          "Architecture overview",
          "Project scope & objectives",
        ],
        comments: "Sets up goals and the system to be built",
      },
      {
        title: "Data Modeling & Schema Design",
        subtopics: [
          "Star schema",
          "Snowflake schema",
          "Dimension tables & Fact tables",
          "Defining relationships",
        ],
        comments: "Core foundation of any warehouse project",
      },
      {
        title: "Source Systems & Extracting Data (ETL / ELT)",
        subtopics: [
          "Connecting to source databases & APIs",
          "Extracting data into staging areas",
          "Data validation on extraction",
        ],
        comments: "Focus on reliable ingestion from sources",
      },
      {
        title: "Transformations & Business Logic",
        subtopics: [
          "Data cleaning & normalization",
          "Joining & aggregations",
          "Derived metrics & KPIs",
          "Handling large volumes of data",
        ],
        comments: "The main logic layer of the warehouse",
      },
      {
        title: "Loading into the Data Warehouse",
        subtopics: [
          "Populating final tables",
          "Incremental loading",
          "Handling updates & deletes",
        ],
        comments: "Practical warehouse population strategies",
      },
      {
        title: "Optimizations & Partitioning / Indexing",
        subtopics: [
          "Partition strategies",
          "Clustering",
          "Indexing",
          "Query performance tuning",
        ],
        comments: "Ensures scalability and fast querying",
      },
      {
        title: "Handling Schema Evolution / Changes Over Time",
        subtopics: [
          "Managing table changes",
          "Schema versioning",
          "Migrating schema safely",
        ],
        comments: "Crucial for real-world adaptability",
      },
      {
        title: "Querying & Analytics",
        subtopics: [
          "Writing analytical queries",
          "Joins & aggregations",
          "OLAP-style queries",
          "Dashboard integration",
        ],
        comments: "The ultimate consumer layer of the warehouse",
      },
      {
        title: "Deployment, Automation & Orchestration",
        subtopics: [
          "Automating ETL tasks",
          "Scheduling with orchestration tools",
          "Monitoring workflows",
        ],
        comments: "Makes the project production-ready",
      },
      {
        title: "Case Study / Real World Implementation",
        subtopics: [
          "Applying to a real dataset",
          "Full end-to-end workflow",
          "Lessons from industry scenarios",
        ],
        comments: "Bridges the gap between tutorial & reality",
      },
    ],
    strengths: [
      "Strong focus on schema design & ETL/ELT pipelines",
      "Detailed SQL queries for analytics",
      "Covers incremental loads & updates",
      "Hands-on examples with real data",
    ],
    lighterAreas: [
      "Advanced distributed data frameworks (Spark, Hadoop)",
      "Deep governance & security",
      "Massive scalability considerations",
      "Real-time / streaming pipelines",
      "Machine learning pipeline integration",
    ],
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {course.title}
      </h1>
      <p className="text-lg mb-2">
        <strong>Platform:</strong> {course.platform}
      </p>
      <p className="text-lg mb-6">
        <strong>Instructor:</strong> {course.instructor}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overall Goal</h2>
        <ul className="list-disc pl-6">
          {course.goal.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Target Audience</h2>
        <ul className="list-disc pl-6">
          {course.targetAudience.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Modules</h2>
        <div className="space-y-6">
          {course.modules.map((m, i) => (
            <div key={i} className="border p-4 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{m.title}</h3>
              <ul className="list-disc pl-6 mb-2">
                {m.subtopics.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
              <p className="text-gray-600 italic">{m.comments}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Strengths</h2>
        <ul className="list-disc pl-6">
          {course.strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Lighter / Less Covered Areas</h2>
        <ul className="list-disc pl-6">
          {course.lighterAreas.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
