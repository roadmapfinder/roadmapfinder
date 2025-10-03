import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "phase1-eda-public-dataset",
    level: "Beginner (0–2 months)",
    title: "Exploratory Data Analysis (EDA) on a Public Dataset",
    description:
      "Understand, clean, and visualize data. Focus: Pandas, NumPy, Matplotlib, Seaborn. Why: EDA is the foundation of all data science work.",
    url: "https://youtu.be/a2BDULHeb_8?si=s1xsyjXrBbOlU4WD", // Example dataset source
  },
  {
    id: "phase1-predictive-regression",
    level: "Beginner (0–2 months)",
    title: "Predictive Modeling – Regression",
    description:
      "Predict continuous outcomes. Focus: Linear regression, feature engineering, evaluation metrics. Why: Regression is essential for forecasting and business predictions.",
    url: "https://youtu.be/Wqmtf9SA_kk?si=sUmHoGDVJRfiibK9", // Example tutorial/dataset
  },
  {
    id: "phase1-classification-project",
    level: "Beginner (0–2 months)",
    title: "Classification Project",
    description:
      "Classify items into categories. Focus: Logistic Regression, Decision Trees, Random Forest, evaluation metrics. Why: Widely used in banking, healthcare, and marketing.",
    url: "https://youtu.be/0K4J_PTgysc?si=-efT3W78ESlBZzNc", // Titanic dataset tutorial
  },

  // Intermediate Projects
  {
    id: "phase2-customer-segmentation",
    level: "Intermediate (2–6 months)",
    title: "Customer Segmentation using Clustering",
    description:
      "Group similar customers for insights. Focus: K-Means, Hierarchical Clustering, PCA. Why: Helps target marketing and understand customer behavior.",
    url: "https://youtu.be/-LGwdrajMZ0?si=G6COO_W9G5EITnU3", // Example dataset
  },
  {
    id: "phase2-time-series-forecasting",
    level: "Intermediate (2–6 months)",
    title: "Time Series Forecasting",
    description:
      "Predict future trends from past data. Focus: ARIMA, Prophet, LSTM, trend/seasonality analysis. Why: Crucial for finance, operations, and supply chain.",
    url: "https://youtu.be/0KVsYgsaY5s?si=89UbRaA8G5ZyVYhh", // Example dataset
  },
  {
    id: "phase2-nlp-sentiment-analysis",
    level: "Intermediate (2–6 months)",
    title: "NLP – Sentiment Analysis",
    description:
      "Analyze text to detect sentiment. Focus: Text preprocessing, TF-IDF, embeddings, classification models. Why: Used in social media analytics and customer feedback.",
    url: "https://youtu.be/QpzMWQvxXWk?si=x8xX6vLSCR-HbJG2", // Example tutorial
  },

  // Advanced Projects
  {
    id: "phase3-recommendation-system",
    level: "Advanced (6–12 months)",
    title: "Recommendation System",
    description:
      "Suggest products or content to users. Focus: Collaborative & content-based filtering, matrix factorization. Why: Drives engagement in e-commerce, streaming, and social media.",
    url: "https://youtu.be/1xtrIEwY_zY?si=mdLajtJZvNd48KTp", // Example MovieLens dataset
  },
  {
    id: "phase3-data-pipeline-etl",
    level: "Advanced (6–12 months)",
    title: "Data Pipeline & ETL Project",
    description:
      "Automate extraction, transformation, and loading of data. Focus: Python, SQL, Airflow, Pandas. Why: Real-world data pipelines are required for production-ready systems.",
    url: "https://youtu.be/vMgFadPxOLk?si=kai5Rw6vq8i7VPYZ", // ETL tutorial reference
  },
  {
    id: "phase3-dashboard-visualization",
    level: "Advanced (6–12 months)",
    title: "Dashboard & Data Visualization Project",
    description:
      "Convert data into actionable insights with dashboards. Focus: Tableau, Power BI, Plotly/Dash. Why: Communicating insights effectively is crucial for decision-making.",
    url: "https://youtu.be/tjIWRqqMDaw?si=w3cp8aQfBGALzQan", // Visualization tutorial
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Data Science Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to advanced Data Science projects with real-world datasets and tutorials.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Dataset / Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these projects step by step. Focus on Python, data analysis, machine learning, NLP, and visualization. Showcase your top projects in your portfolio.
        </footer>
      </div>
    </section>
  );
}
