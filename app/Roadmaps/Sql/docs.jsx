import React from "react";

const docs = [
  {
    id: "sql-standard",
    level: "Official",
    title: "SQL Standard / General SQL",
    description:
      "While the ANSI/ISO SQL standard is not freely available in full, many database vendors follow it. Wikipedia provides a good overview.",
    cta: "Open Docs",
    url: "https://en.wikipedia.org/wiki/ISO/IEC_9075"
  },
  {
    id: "postgresql",
    level: "Official",
    title: "PostgreSQL Documentation",
    description:
      "Comprehensive PostgreSQL docs covering SQL syntax, functions, administration, and advanced database features.",
    cta: "Open Docs",
    url: "https://www.postgresql.org/docs/"
  },
  {
    id: "mysql",
    level: "Official",
    title: "MySQL Reference Manual",
    description:
      "Detailed MySQL documentation covering SQL syntax, functions, server configuration, and optimization.",
    cta: "Open Docs",
    url: "https://dev.mysql.com/doc/"
  },
  {
    id: "sql-server",
    level: "Official",
    title: "Microsoft SQL Server Documentation",
    description:
      "Microsoft Learn official documentation for SQL Server, including T-SQL reference and administration guides.",
    cta: "Open Docs",
    url: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17"
  },
  {
    id: "oracle-sql",
    level: "Official",
    title: "Oracle Database SQL Language Reference",
    description:
      "Oracle’s official SQL and PL/SQL documentation with extensive details on features, syntax, and administration.",
    cta: "Open Docs",
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/23/cncpt/sql.html"
  },
  {
    id: "sqlite",
    level: "Official",
    title: "SQLite Documentation",
    description:
      "Authoritative documentation for SQLite including SQL syntax, pragmas, and detailed implementation notes.",
    cta: "Open Docs",
    url: "https://www.sqlite.org/docs.html"
  },
  {
    id: "spark-sql",
    level: "Official",
    title: "Apache Spark SQL Guide",
    description:
      "Spark SQL programming guide and reference covering DataFrames, SQL syntax, and optimization techniques.",
    cta: "Open Docs",
    url: "https://spark.apache.org/docs/latest/sql-ref.html"
  },
  {
    id: "mongodb",
    level: "Official",
    title: "MongoDB Documentation",
    description:
      "MongoDB official documentation covering CRUD, aggregation, schema design, indexing, and distributed systems.",
    cta: "Open Docs",
    url: "https://www.mongodb.com/docs/"
  },
  // --- BI / ETL / Data Engineering Extensions ---
  {
    id: "power-bi",
    level: "Official",
    title: "Microsoft Power BI Documentation",
    description:
      "Official Power BI documentation covering dashboards, DAX, Power Query, and enterprise BI solutions.",
    cta: "Open Docs",
    url: "https://learn.microsoft.com/en-us/power-bi/"
  },
  {
    id: "tableau",
    level: "Official",
    title: "Tableau Documentation",
    description:
      "Official Tableau documentation for building dashboards, visualizations, and connecting to multiple data sources.",
    cta: "Open Docs",
    url: "https://help.tableau.com/"
  },
  {
    id: "airflow",
    level: "Official",
    title: "Apache Airflow Documentation",
    description:
      "Apache Airflow docs for workflow orchestration, DAGs, scheduling, and running ETL pipelines at scale.",
    cta: "Open Docs",
    url: "https://airflow.apache.org/docs/"
  },
  {
    id: "dbt",
    level: "Official",
    title: "dbt Documentation",
    description:
      "dbt (Data Build Tool) official documentation covering data transformations, models, testing, and deployment.",
    cta: "Open Docs",
    url: "https://docs.getdbt.com/"
  },
  {
    id: "snowflake",
    level: "Official",
    title: "Snowflake Documentation",
    description:
      "Snowflake cloud data platform documentation covering SQL, performance tuning, data sharing, and pipelines.",
    cta: "Open Docs",
    url: "https://docs.snowflake.com/"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            📘 SQL, Databases & BI/ETL — Official Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore official documentation resources every SQL developer, data
            engineer, and BI analyst must know. These cover SQL standards,
            databases, NoSQL, big data engines, and modern BI/ETL tools.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${d.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {d.level}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open documentation for ${d.title}`}
                >
                  🔗 Docs
                </a>
              </div>

              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {d.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <span className="text-xs text-slate-400">Reference</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Bookmark these resources and revisit often. Mastery in SQL +
          Databases + BI/ETL tools is the real path to becoming an
          industry-ready data professional.
        </footer>
      </div>
    </section>
  );
}
