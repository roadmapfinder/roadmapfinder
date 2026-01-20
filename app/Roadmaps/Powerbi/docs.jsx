// components/PowerBIDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Power BI Official Documentation (Main Hub)",
    description:
      "Complete official Power BI documentation including reports, dashboards, datasets, service, gateways, security, refresh, modeling, and administration.",
    url: "https://learn.microsoft.com/en-us/power-bi/",
    citation: "Power BI Docs",
  },
  {
    title: "Power BI Getting Started Guide",
    description:
      "Official beginner guide covering installation, interface overview, first report, data connection, and publishing to Power BI Service.",
    url: "https://learn.microsoft.com/en-us/power-bi/fundamentals/",
    citation: "Getting Started",
  },
  {
    title: "Power Query (M Language) Documentation",
    description:
      "Official Power Query documentation covering transformations, query folding, M language syntax, functions, parameters, and advanced data shaping.",
    url: "https://learn.microsoft.com/en-us/powerquery-m/",
    citation: "Power Query",
  },
  {
    title: "DAX (Data Analysis Expressions) Documentation",
    description:
      "Complete official DAX language reference including functions, operators, syntax, time intelligence, filter context, and advanced calculations.",
    url: "https://learn.microsoft.com/en-us/dax/",
    citation: "DAX",
  },
  {
    title: "Power BI Data Modeling Guide",
    description:
      "Official guide for star schema modeling, relationships, cardinality, cross filtering, and semantic model best practices.",
    url: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    citation: "Modeling",
  },
  {
    title: "Power BI Visualization & Reports",
    description:
      "Learn how to build professional reports including visuals, formatting, interactions, drillthrough, tooltips, bookmarks, and storytelling.",
    url: "https://learn.microsoft.com/en-us/power-bi/create-reports/",
    citation: "Reports",
  },
  {
    title: "Power BI Service Documentation",
    description:
      "Power BI Service concepts including workspaces, apps, sharing, permissions, collaboration, and governance.",
    url: "https://learn.microsoft.com/en-us/power-bi/collaborate-share/",
    citation: "Service",
  },
  {
    title: "Row-Level Security (RLS)",
    description:
      "Official documentation for implementing dynamic and static row-level security using roles and DAX filters.",
    url: "https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-rls",
    citation: "RLS",
  },
  {
    title: "Power BI Gateway Documentation",
    description:
      "Learn about personal and enterprise gateways, installation, configuration, troubleshooting, and refresh pipelines.",
    url: "https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem",
    citation: "Gateway",
  },
  {
    title: "Incremental Refresh",
    description:
      "Official guide for incremental refresh setup, partitions, parameters, and enterprise refresh strategies.",
    url: "https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview",
    citation: "Incremental Refresh",
  },
  {
    title: "Power BI Performance Optimization",
    description:
      "Performance tuning techniques including query folding, storage modes, DAX optimization, and Performance Analyzer.",
    url: "https://learn.microsoft.com/en-us/power-bi/guidance/power-bi-optimization",
    citation: "Performance",
  },
  {
    title: "Power BI Developer Documentation",
    description:
      "Embedding, REST APIs, automation, service principals, authentication, and developer integration guides.",
    url: "https://learn.microsoft.com/en-us/power-bi/developer/",
    citation: "Developer",
  },
  {
    title: "Power BI REST API Reference",
    description:
      "Official REST API reference for datasets, reports, dashboards, refresh, users, and workspaces.",
    url: "https://learn.microsoft.com/en-us/rest/api/power-bi/",
    citation: "REST API",
  },
  {
    title: "Paginated Reports",
    description:
      "Documentation for pixel-perfect paginated reports using Power BI Report Builder and SSRS style reporting.",
    url: "https://learn.microsoft.com/en-us/power-bi/paginated-reports/",
    citation: "Paginated Reports",
  },
  {
    title: "Power BI Report Server (On-Prem)",
    description:
      "Documentation for Power BI Report Server deployment, configuration, security, and administration.",
    url: "https://learn.microsoft.com/en-us/power-bi/report-server/",
    citation: "Report Server",
  },
  {
    title: "Power BI Admin & Governance",
    description:
      "Tenant settings, audit logs, governance strategy, capacity management, and security administration.",
    url: "https://learn.microsoft.com/en-us/power-bi/admin/",
    citation: "Admin",
  },
  {
    title: "Power BI Blog (Official)",
    description:
      "Official announcements, feature releases, roadmap updates, case studies, and tips from Microsoft Power BI team.",
    url: "https://powerbi.microsoft.com/en-us/blog/",
    citation: "Power BI Blog",
  },
  {
    title: "Microsoft Learn Power BI Training",
    description:
      "Official interactive learning paths, labs, and exercises for Power BI learners from beginner to advanced.",
    url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
    citation: "Microsoft Learn",
  },
  {
    title: "Power BI Community Forum",
    description:
      "Official Power BI community forum for asking questions, sharing solutions, and learning from experts.",
    url: "https://community.powerbi.com/",
    citation: "Community",
  },
  {
    title: "Download Power BI Desktop",
    description:
      "Official download page for Power BI Desktop application.",
    url: "https://powerbi.microsoft.com/desktop/",
    citation: "Download",
  },
];

export default function PowerBIDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📊 Official Power BI Documentation
        </h1>

        <p className="text-gray-600 mb-10">
          All essential official Power BI documentation sources — including DAX,
          Power Query, modeling, visualization, service, security, performance,
          administration, developer APIs, and enterprise deployment.
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
              <p className="text-xs text-gray-400 mt-3">
                Source: {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
