// components/PostgreSQLDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "PostgreSQL Official Documentation (Core Manual)",
    description:
      "The complete and official PostgreSQL documentation including SQL reference, configuration, indexing, replication, partitioning, WAL, VACUUM, MVCC, and performance tuning.",
    url: "https://www.postgresql.org/docs/",
    citation: "PostgreSQL Docs",
  },
  {
    title: "PL/pgSQL (Procedural Language)",
    description:
      "Official guide for PL/pgSQL — triggers, functions, variables, control structures, error handling, and procedural business logic.",
    url: "https://www.postgresql.org/docs/current/plpgsql.html",
    citation: "PL/pgSQL",
  },
  {
    title: "PostgreSQL SQL Language Reference",
    description:
      "Complete SQL reference including DDL, DML, window functions, operators, aggregates, joins, and schema design.",
    url: "https://www.postgresql.org/docs/current/sql.html",
    citation: "SQL Reference",
  },
  {
    title: "PostgreSQL Indexing Guide",
    description:
      "Deep dive into B-Tree, Hash, GIN, GiST, BRIN, expression indexes, partial indexes, index-only scans, and optimization.",
    url: "https://www.postgresql.org/docs/current/indexes.html",
    citation: "Indexing",
  },
  {
    title: "EXPLAIN & Query Planning",
    description:
      "Learn how query planning works: seq scans, index scans, bitmap scans, nested loops, hash joins, merge joins, and cost-based planning.",
    url: "https://www.postgresql.org/docs/current/using-explain.html",
    citation: "EXPLAIN",
  },
  {
    title: "Performance Tuning",
    description:
      "Official performance tuning guide including memory, I/O, parallelism, vacuum tuning, autovacuum parameters, and configuration optimization.",
    url: "https://www.postgresql.org/docs/current/performance-tips.html",
    citation: "Performance",
  },
  {
    title: "PostgreSQL Configuration (postgresql.conf)",
    description:
      "Full documentation of all PostgreSQL configuration parameters including memory, WAL, checkpoints, replication, autovacuum, and query tuning.",
    url: "https://www.postgresql.org/docs/current/runtime-config.html",
    citation: "Config",
  },
  {
    title: "MVCC & Concurrency Control",
    description:
      "Official docs on MVCC snapshot isolation, transaction IDs, vacuum, freezing, and concurrency behavior.",
    url: "https://www.postgresql.org/docs/current/mvcc.html",
    citation: "MVCC",
  },
  {
    title: "Backup & Restore",
    description:
      "pg_dump, pg_restore, pg_basebackup, WAL archiving, PITR (Point In Time Recovery), base backups, and disaster recovery.",
    url: "https://www.postgresql.org/docs/current/backup.html",
    citation: "Backup",
  },
  {
    title: "Replication & High Availability",
    description:
      "Streaming replication, logical replication, synchronous vs asynchronous replication, slots, failover, and HA architecture.",
    url: "https://www.postgresql.org/docs/current/high-availability.html",
    citation: "Replication",
  },
  {
    title: "Logical Decoding & Change Data Capture",
    description:
      "Decode WAL changes for CDC, event streaming, Kafka pipelines, and trigger-less replication.",
    url: "https://www.postgresql.org/docs/current/logicaldecoding.html",
    citation: "Logical Decoding",
  },
  {
    title: "Partitioning Guide",
    description:
      "Table partitioning including range, list, hash, subpartitioning, constraints, pruning, and performance tuning.",
    url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
    citation: "Partitioning",
  },
  {
    title: "PostgreSQL Extensions",
    description:
      "Official documentation on installing and using Postgres extensions like PostGIS, UUID-OSSP, pg_trgm, pg_stat_statements, and more.",
    url: "https://www.postgresql.org/docs/current/external-extensions.html",
    citation: "Extensions",
  },
  {
    title: "PostGIS (Geospatial Extension)",
    description:
      "Industry standard spatial extension for GIS, mapping, geolocation queries, and geo-indexing.",
    url: "https://postgis.net/documentation/",
    citation: "PostGIS",
  },
  {
    title: "pgAdmin (PostgreSQL GUI)",
    description:
      "Official documentation for pgAdmin — the most popular GUI for managing PostgreSQL servers and databases.",
    url: "https://www.pgadmin.org/docs/",
    citation: "pgAdmin",
  },
  {
    title: "psql (Postgres CLI Tool)",
    description:
      "Documentation for psql — the PostgreSQL command-line client for queries, scripting, admin tasks, and automation.",
    url: "https://www.postgresql.org/docs/current/app-psql.html",
    citation: "psql",
  },
  {
    title: "Patroni (Postgres HA Automation)",
    description:
      "Documentation for Patroni — popular HA solution for automated failover, leader election, and clustering.",
    url: "https://patroni.readthedocs.io/en/latest/",
    citation: "Patroni",
  },
  {
    title: "pgBackRest (Backup & Restore Tool)",
    description:
      "Enterprise-grade backup and restore system for PostgreSQL with compression, encryption, incremental backups, and PITR.",
    url: "https://pgbackrest.org/user-guide.html",
    citation: "pgBackRest",
  },
  {
    title: "TimescaleDB (Time-Series PostgreSQL Extension)",
    description:
      "Time-series, IoT, metrics & observability workloads built on PostgreSQL.",
    url: "https://docs.timescale.com/",
    citation: "TimescaleDB",
  },
];

export default function PostgreSQLDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🐘 Official PostgreSQL Documentation
        </h1>

        <p className="text-gray-600 mb-10">
          All essential PostgreSQL documentation sources — including core SQL,
          indexing, configuration, performance tuning, replication, HA,
          extensions, PostGIS, tools, and enterprise features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {doc.title}
                <ExternalLink className="w-4 h-4" />
              </h2>
              <p className="text-gray-600 text-sm mt-2">{doc.description}</p>
              <p className="text-xs text-gray-400 mt-3">Source: {doc.citation}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
