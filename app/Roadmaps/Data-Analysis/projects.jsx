import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "phase1-sales-dashboard",
    level: "Beginner (0–2 months)",
    title: "Sales Data Dashboard",
    description:
      "Analyze raw sales data using Excel or Google Sheets. Create pivot tables, calculate KPIs like monthly revenue, top products, and visualize trends. Why: Builds strong Excel fundamentals and business KPIs.",
    url: "https://youtu.be/fZn83JRt4Nk?si=9FBGo7Paxp49pt-f", // Sample Sales Data
  },
  {
    id: "phase1-sql-customer-insights",
    level: "Beginner (0–2 months)",
    title: "Customer Insights with SQL",
    description:
      "Query an e-commerce database to find most profitable customers, repeat purchase rates, and cart abandonment patterns. Why: Essential SQL practice for business problem-solving.",
    url: "https://youtu.be/2VMAdlzNuTw?si=61DMx63bIOzA40Ji", // E-commerce dataset
  },
  {
    id: "phase1-survey-cleaning",
    level: "Beginner (0–2 months)",
    title: "Survey Data Cleaning & Insights",
    description:
      "Work on raw messy survey data. Perform cleaning (nulls, duplicates, formatting) and generate insights like satisfaction scores by demographics. Why: Learn real-world ETL basics.",
    url: "https://youtu.be/r7GDQt3lZxs?si=kMJq36rOKFDYEyug", // Kaggle Survey Data
  },

  // Intermediate Projects
  {
    id: "phase2-hr-analytics",
    level: "Intermediate (2–6 months)",
    title: "HR Analytics Dashboard",
    description:
      "Analyze employee attrition trends and build an interactive dashboard using Power BI or Tableau. Why: Common business use-case for HR and workforce planning.",
    url: "https://youtu.be/j4xlVLgsmNQ?si=KDUDHAdeYiDOmQos", // HR dataset
  },
  {
    id: "phase2-marketing-analysis",
    level: "Intermediate (2–6 months)",
    title: "Marketing Campaign Analysis",
    description:
      "Measure campaign ROI, CTR, and conversions across email, SMS, and ads. Why: Develops ability to assess marketing effectiveness with SQL + Python.",
    url: "https://youtu.be/iCj4lT5KvJk?si=dCr3VyNoxD-BzmvG", // Marketing dataset
  },
  {
    id: "phase2-financial-forecasting",
    level: "Intermediate (2–6 months)",
    title: "Financial/Stock Data Forecasting",
    description:
      "Use time series data (stocks or company revenue) to analyze trends, moving averages, and forecasting. Why: Builds skills in Python, pandas, and forecasting.",
    url: "https://youtu.be/IY8HZ2Z_sn4?si=Bcsg6pKlZVppMSmV", // Stock dataset
  },

  // Advanced Projects
  {
    id: "phase3-customer-segmentation",
    level: "Advanced (6–12 months)",
    title: "Customer Segmentation with RFM & Clustering",
    description:
      "Segment customers with Recency, Frequency, and Monetary (RFM) analysis, then apply clustering (K-means). Why: Combines analytics with machine learning basics.",
    url: "https://youtu.be/afPJeQuVeuY?si=Pa3xxTPZRSLeLlWi", // RFM dataset
  },
  {
    id: "phase3-web-analytics",
    level: "Advanced (6–12 months)",
    title: "Web Analytics Funnel Dashboard",
    description:
      "Perform funnel analysis: visits → cart → checkout → purchase. Build BI dashboards in Power BI/Tableau. Why: Key for product & e-commerce analytics.",
    url: "https://youtu.be/c_AhsKuNrWk?si=i76wsAaebYzLIjQ4", // Web analytics dataset
  },
  {
    id: "phase3-executive-vendor",
    level: "Advanced (6–12 months)",
    title: "Vendor Perfromance",
    description:
      "Take a real dataset, clean it, analyze KPIs, visualize insights, and prepare an executive summary with dashboards. Why: Showcases complete industry-ready workflow.",
    url: "https://youtu.be/nmCfNHjfgEY?si=5BaIXVS3zMCnqeii", // Kaggle datasets directory
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Data Analyst Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to advanced Data Analytics projects with real-world datasets & tools (Excel, SQL, Python, Power BI, Tableau).
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-green-600 font-medium hover:underline"
              >
                Explore Dataset ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these projects step by step. Master Excel, SQL, Python, BI tools, and data storytelling. Showcase dashboards and reports in your portfolio to stand out.
        </footer>
      </div>
    </section>
  );
}
