"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need strong coding skills to become a Data Engineer?",
    answer:
      "Yes, but you don’t need to be a software engineer. Strong SQL skills are mandatory, and knowledge of Python/Scala/Java for ETL pipelines and scripting is essential.",
  },
  {
    question: "Which databases should I focus on as a beginner?",
    answer:
      "Start with relational databases like PostgreSQL or MySQL, then explore distributed systems like Apache Hive, Snowflake, and columnar stores like BigQuery or Redshift.",
  },
  {
    question: "What are the most important tools for a Data Engineer?",
    answer:
      "ETL/Orchestration tools (Airflow, dbt), Data Warehouses (Snowflake, BigQuery, Redshift), Stream Processing (Kafka, Spark), and Cloud platforms (AWS, Azure, GCP).",
  },
  {
    question: "Do I need to learn big data frameworks like Hadoop and Spark?",
    answer:
      "Hadoop is less common now, but Spark is still widely used for batch and stream processing. Understanding distributed systems concepts is very valuable.",
  },
  {
    question: "What cloud services should I learn first?",
    answer:
      "Focus on AWS (S3, Glue, Redshift, EMR), GCP (BigQuery, Dataflow, Pub/Sub), or Azure (Data Factory, Synapse, Databricks). Start with one cloud deeply, then generalize.",
  },
  {
    question: "What role does SQL play in data engineering?",
    answer:
      "SQL is the backbone of data engineering. Almost every ETL job, pipeline, and analytics task relies on SQL. Advanced concepts like window functions, CTEs, and optimization are critical.",
  },
  {
    question: "How can I practice data engineering skills at home?",
    answer:
      "Set up a data pipeline: ingest CSV/JSON data into a database, transform it with Python or dbt, and visualize it using a BI tool like Metabase or Superset.",
  },
  {
    question: "What projects should I build to showcase my skills?",
    answer:
      "Build an end-to-end pipeline: collect API data, store it in a warehouse (Postgres/BigQuery), transform with dbt, orchestrate with Airflow, and visualize with Power BI or Tableau.",
  },
  {
    question: "Do data engineers need machine learning knowledge?",
    answer:
      "Not necessarily. Your main role is to build reliable data pipelines for analysts and ML engineers. However, understanding ML workflows helps you design better pipelines.",
  },
  {
    question: "How do I stay updated in the data engineering field?",
    answer:
      "Follow blogs (Airbnb Engineering, Netflix Tech Blog), join communities like r/dataengineering, read data newsletters, and keep learning new tools as the ecosystem evolves.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        📊 Data Engineering FAQ
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl border shadow-md p-5 transition-all duration-300 cursor-pointer ${
              openIndex === index ? "bg-blue-50 border-blue-400" : "bg-white"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-blue-600" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
