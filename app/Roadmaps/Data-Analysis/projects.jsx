// components/DataAnalysisProjects.jsx
import React from "react";

const projects = [
  {
    id: "project-sales-analysis",
    level: "Beginner",
    title: "Sales Data Analysis",
    description:
      "Analyze sales data to identify trends, seasonality, and performance metrics. Skills: Data cleaning, aggregation, visualization.",
    url: "https://www.youtube.com/watch?v=GgWYEhq2vmM",
    instructor: "ExcelIsFun",
    language: "English",
  },
  {
    id: "project-customer-segmentation",
    level: "Beginner",
    title: "Customer Segmentation",
    description:
      "Use clustering techniques to segment customers based on purchasing behavior. Skills: K-means clustering, PCA, visualization.",
    url: "https://www.youtube.com/watch?v=4jv1pUrG0Zk",
    instructor: "Edureka",
    language: "English",
  },
  {
    id: "project-stock-analysis",
    level: "Beginner",
    title: "Stock Market Analysis",
    description:
      "Analyze historical stock prices to identify trends and make predictions. Skills: Time series analysis, moving averages, forecasting.",
    url: "https://www.youtube.com/watch?v=eS_u98hCmho",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-survey-analysis",
    level: "Beginner",
    title: "Survey Data Analysis",
    description:
      "Analyze survey responses to derive insights about customer satisfaction. Skills: Data cleaning, sentiment analysis, visualization.",
    url: "https://www.youtube.com/watch?v=TyrLN17MAXs",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-website-traffic",
    level: "Beginner",
    title: "Website Traffic Analysis",
    description:
      "Analyze website traffic data to understand user behavior and optimize performance. Skills: Data aggregation, trend analysis, visualization.",
    url: "https://www.youtube.com/watch?v=-WPXIPBTyEw",
    instructor: "Analytics Mania",
    language: "English",
  },
  {
    id: "project-sentiment-analysis",
    level: "Beginner",
    title: "Product Review Sentiment Analysis",
    description:
      "Analyze product reviews to determine customer sentiment and feedback. Skills: Text mining, sentiment analysis, NLP.",
    url: "https://www.youtube.com/watch?v=QpzMWQvxXWk",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-employee-attrition",
    level: "Beginner",
    title: "Employee Attrition Analysis",
    description:
      "Analyze employee data to predict attrition and identify retention strategies. Skills: Classification models, feature engineering, visualization.",
    url: "https://www.youtube.com/watch?v=dhqH3kfFAzw",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-ecommerce-forecast",
    level: "Beginner",
    title: "E-commerce Sales Forecasting",
    description:
      "Forecast future sales for an e-commerce platform using historical data. Skills: Time series forecasting, ARIMA, visualization.",
    url: "https://www.youtube.com/watch?v=faKy2fTPgdI",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-healthcare-analysis",
    level: "Beginner",
    title: "Healthcare Data Analysis",
    description:
      "Analyze healthcare data to identify trends and improve patient outcomes. Skills: Data cleaning, statistical analysis, visualization.",
    url: "https://www.youtube.com/watch?v=h1BWuz0mdcs",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-social-media",
    level: "Beginner",
    title: "Social Media Analytics",
    description:
      "Analyze social media data to understand public sentiment and engagement. Skills: Text mining, sentiment analysis, visualization.",
    url: "https://www.youtube.com/watch?v=4f4f4f4f4f4",
    instructor: "Simplilearn",
    language: "English",
  },
];

export default function DataAnalysisProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🛠 Data Analysis Project Ideas
          </h2>
          <p className="mt-2 text-gray-600">
            Beginner-friendly projects with step-by-step tutorials to build practical Data Analysis skills.
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
              <p className="mt-2 text-gray-500 text-xs">
                Instructor: {p.instructor} | Language: {p.language}
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the tutorials, code along, and practice on your own datasets to strengthen your Data Analysis skills.
        </footer>
      </div>
    </section>
  );
}
