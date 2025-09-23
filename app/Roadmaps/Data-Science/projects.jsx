import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "project-titanic-survival",
    level: "Beginner",
    title: "Titanic Survival Prediction",
    description:
      "Predict survival of passengers using the Titanic dataset. Skills: Data cleaning, EDA, logistic regression, decision trees.",
    url: "https://www.youtube.com/watch?v=dhqH3kfFAzw",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-sales-analysis",
    level: "Beginner",
    title: "Sales Data Analysis",
    description:
      "Analyze sales data to find trends, best-selling products, and seasonality. Skills: Data aggregation, visualization, descriptive statistics.",
    url: "https://www.youtube.com/watch?v=GgWYEhq2vmM",
    instructor: "ExcelIsFun",
    language: "English",
  },
  {
    id: "project-customer-segmentation",
    level: "Beginner",
    title: "Customer Segmentation",
    description:
      "Cluster customers based on purchase history. Skills: K-Means clustering, PCA, visualization.",
    url: "https://www.youtube.com/watch?v=4jv1pUrG0Zk",
    instructor: "Edureka",
    language: "English",
  },
  {
    id: "project-stock-analysis",
    level: "Beginner",
    title: "Stock Market Analysis",
    description:
      "Analyze historical stock prices and trends. Skills: Time series analysis, moving averages, simple forecasting.",
    url: "https://www.youtube.com/watch?v=eS_u98hCmho",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-survey-analysis",
    level: "Beginner",
    title: "Survey Data Analysis",
    description:
      "Analyze survey responses for customer satisfaction insights. Skills: Data cleaning, visualization, basic stats.",
    url: "https://www.youtube.com/watch?v=TyrLN17MAXs",
    instructor: "Data Science Tutorials",
    language: "English",
  },

  // Intermediate Projects
  {
    id: "project-sentiment-analysis",
    level: "Intermediate",
    title: "Product Review Sentiment Analysis",
    description:
      "Analyze product reviews to detect sentiment. Skills: NLP, text preprocessing, classification models.",
    url: "https://www.youtube.com/watch?v=QpzMWQvxXWk",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-ecommerce-forecast",
    level: "Intermediate",
    title: "E-commerce Sales Forecasting",
    description:
      "Forecast future sales using historical data. Skills: Time series forecasting (ARIMA, Prophet), visualization.",
    url: "https://www.youtube.com/watch?v=faKy2fTPgdI",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-employee-attrition",
    level: "Intermediate",
    title: "Employee Attrition Prediction",
    description:
      "Predict which employees are likely to leave the company. Skills: Classification models, feature engineering, visualization.",
    url: "https://www.youtube.com/watch?v=dhqH3kfFAzw",
    instructor: "Data Science Tutorials",
    language: "English",
  },
  {
    id: "project-website-traffic",
    level: "Intermediate",
    title: "Website Traffic Analysis",
    description:
      "Analyze website traffic to understand user behavior and trends. Skills: Data aggregation, EDA, visualization.",
    url: "https://www.youtube.com/watch?v=-WPXIPBTyEw",
    instructor: "Analytics Mania",
    language: "English",
  },
  {
    id: "project-healthcare-analysis",
    level: "Intermediate",
    title: "Healthcare Data Analysis",
    description:
      "Analyze patient data for trends and insights. Skills: Data cleaning, statistics, visualization, predictive modeling.",
    url: "https://www.youtube.com/watch?v=h1BWuz0mdcs",
    instructor: "Data Science Tutorials",
    language: "English",
  },

  // Advanced Projects
  {
    id: "project-image-classification",
    level: "Advanced",
    title: "Image Classification with CNNs",
    description:
      "Build a model to classify images (e.g., CIFAR-10 or MNIST). Skills: Deep learning, convolutional neural networks, model evaluation.",
    url: "https://www.youtube.com/watch?v=IJ50ew8wi-0",
    instructor: "CodeBasics",
    language: "English",
  },
  {
    id: "project-chatbot",
    level: "Advanced",
    title: "Chatbot or Text Summarizer",
    description:
      "Build a chatbot or summarize large text documents. Skills: NLP, transformers, text preprocessing.",
    url: "https://www.youtube.com/watch?v=s33KHjHIxWk",
    instructor: "Tech With Tim",
    language: "English",
  },
  {
    id: "project-fraud-detection",
    level: "Advanced",
    title: "Fraud Detection System",
    description:
      "Detect fraudulent transactions in financial datasets. Skills: Classification, anomaly detection, feature engineering.",
    url: "https://www.youtube.com/watch?v=lP7TOc1DnaI",
    instructor: "Simplilearn",
    language: "English",
  },
  {
    id: "project-recommendation-system",
    level: "Advanced",
    title: "Recommendation System",
    description:
      "Recommend movies/products to users based on history. Skills: Collaborative filtering, content-based filtering, matrix factorization.",
    url: "https://www.youtube.com/watch?v=-LGwdrajMZ0",
    instructor: "Edureka",
    language: "English",
  },
  {
    id: "project-end-to-end-ml",
    level: "Advanced",
    title: "End-to-End ML Project Deployment",
    description:
      "Collect data → Clean → Train model → Deploy as API/dashboard. Skills: ML modeling, Flask/FastAPI, Docker, Streamlit, cloud deployment.",
    url: "https://www.youtube.com/watch?v=tiBeLLv5GJo",
    instructor: "Data Science Tutorials",
    language: "English",
  },
];

export default function DataAnalysisProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🛠 Data Science Project Ideas
          </h2>
          <p className="mt-2 text-gray-600">
            Beginner to Advanced projects with step-by-step tutorials to build practical Data Science skills.
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
          Follow the tutorials, code along, and practice on your own datasets to strengthen your Data Science skills.
        </footer>
      </div>
    </section>
  );
}
