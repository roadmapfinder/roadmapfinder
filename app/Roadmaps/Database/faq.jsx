import React from "react";

const faqs = [
  {
    id: "q1",
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases use structured, table-based schemas with predefined relationships — ideal for complex queries and transactions (e.g., PostgreSQL, MySQL). NoSQL databases are schema-less and handle unstructured or semi-structured data — ideal for scalability and flexibility (e.g., MongoDB, Cassandra).",
  },
  {
    id: "q2",
    question: "What is database normalization and why is it important?",
    answer:
      "Normalization organizes data to reduce redundancy and improve data integrity. It divides large tables into smaller related ones and defines relationships between them. The goal is efficient storage, consistent updates, and minimized anomalies.",
  },
  {
    id: "q3",
    question: "What are database indexes and how do they improve performance?",
    answer:
      "Indexes act like a book’s index — they allow faster data retrieval without scanning entire tables. However, they come with trade-offs: while SELECT queries speed up, INSERT and UPDATE operations may slow down slightly due to index maintenance.",
  },
  {
    id: "q4",
    question: "When should I use a relational database vs. a NoSQL database?",
    answer:
      "Use relational databases when you need ACID transactions, complex joins, or strong consistency — such as banking or ERP systems. Choose NoSQL when handling large-scale, evolving data or real-time analytics — like user activity feeds, IoT data, or caching systems.",
  },
  {
    id: "q5",
    question: "What is the difference between OLTP and OLAP databases?",
    answer:
      "OLTP (Online Transaction Processing) handles real-time transactions — optimized for insert/update operations (e.g., PostgreSQL, MySQL). OLAP (Online Analytical Processing) is optimized for complex analytical queries — used in data warehouses (e.g., Snowflake, BigQuery).",
  },
  {
    id: "q6",
    question: "What is ACID in databases and why does it matter?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability. It ensures reliable transactions — all-or-nothing execution, valid data states, isolated operations, and persistence after crashes. It's essential for maintaining trust in data systems.",
  },
  {
    id: "q7",
    question: "What are ETL pipelines and why are they used in data engineering?",
    answer:
      "ETL stands for Extract, Transform, Load. It’s the process of moving data from various sources into a data warehouse or database system. It’s used for analytics, dashboards, and machine learning — tools like Apache Airflow and dbt help automate these pipelines.",
  },
  {
    id: "q8",
    question: "How do distributed databases ensure high availability?",
    answer:
      "Distributed databases replicate data across multiple nodes. They use consensus algorithms like Raft or Paxos and follow CAP theorem trade-offs (Consistency, Availability, Partition Tolerance) to stay operational even during network or node failures.",
  },
  {
    id: "q9",
    question: "What are common real-world challenges database engineers face?",
    answer:
      "Key challenges include query optimization, schema evolution, handling massive data volume, ensuring consistency in distributed systems, managing replication/partitioning, and balancing performance vs. cost in cloud environments.",
  },
];

export default function DatabaseFAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💬 Database Engineering FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Genuine, industry-level questions and answers every aspiring database engineer must understand.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform"
            >
              <summary className="cursor-pointer flex justify-between items-center font-medium text-gray-900 group-hover:text-indigo-600">
                {faq.question}
                <span className="ml-2 text-indigo-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These FAQs cover practical concepts asked in interviews and used daily
          in real-world database systems — from design to distributed architecture.
        </footer>
      </div>
    </section>
  );
}
