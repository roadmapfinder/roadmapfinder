import React from "react";

const docs = [
  // Programming Languages & Libraries
  {
    id: "python-docs",
    level: "Essential",
    title: "Python Official Documentation",
    description: "The foundational language for data science.",
    url: "https://docs.python.org/3/",
    instructor: "Python Org",
    language: "English",
  },
  {
    id: "numpy-docs",
    level: "Essential",
    title: "NumPy Documentation",
    description: "Core library for numerical computing in Python.",
    url: "https://numpy.org/doc/stable/",
    instructor: "NumPy Org",
    language: "English",
  },
  {
    id: "pandas-docs",
    level: "Essential",
    title: "Pandas Documentation",
    description: "Data manipulation and analysis library.",
    url: "https://pandas.pydata.org/pandas-docs/stable/",
    instructor: "Pandas Org",
    language: "English",
  },
  {
    id: "matplotlib-docs",
    level: "Essential",
    title: "Matplotlib Documentation",
    description: "Plotting and visualization library.",
    url: "https://matplotlib.org/stable/contents.html",
    instructor: "Matplotlib Org",
    language: "English",
  },
  {
    id: "seaborn-docs",
    level: "Essential",
    title: "Seaborn Documentation",
    description: "Statistical data visualization built on Matplotlib.",
    url: "https://seaborn.pydata.org/",
    instructor: "Seaborn Org",
    language: "English",
  },
  {
    id: "scikit-learn-docs",
    level: "Essential",
    title: "Scikit-learn Documentation",
    description: "Machine learning library for Python.",
    url: "https://scikit-learn.org/stable/",
    instructor: "Scikit-learn Org",
    language: "English",
  },
  {
    id: "tensorflow-docs",
    level: "Essential",
    title: "TensorFlow Documentation",
    description: "Open-source platform for machine learning.",
    url: "https://www.tensorflow.org/learn",
    instructor: "TensorFlow Org",
    language: "English",
  },
  {
    id: "keras-docs",
    level: "Essential",
    title: "Keras Documentation",
    description: "High-level neural networks API, running on top of TensorFlow.",
    url: "https://keras.io",
    instructor: "Keras Org",
    language: "English",
  },
  {
    id: "pytorch-docs",
    level: "Essential",
    title: "PyTorch Documentation",
    description: "Deep learning framework.",
    url: "https://pytorch.org/docs/stable/index.html",
    instructor: "PyTorch Org",
    language: "English",
  },
  {
    id: "sql-docs",
    level: "Essential",
    title: "SQL Documentation",
    description: "Essential for database querying.",
    url: "https://www.w3schools.com/sql/",
    instructor: "W3Schools",
    language: "English",
  },

  // Big Data & Cloud Platforms
  {
    id: "spark-docs",
    level: "Essential",
    title: "Apache Spark Documentation",
    description: "Unified analytics engine for big data processing.",
    url: "https://spark.apache.org/docs/latest/",
    instructor: "Apache Spark Org",
    language: "English",
  },
  {
    id: "aws-docs",
    level: "Essential",
    title: "AWS Documentation",
    description: "Amazon Web Services for cloud computing.",
    url: "https://docs.aws.amazon.com/",
    instructor: "AWS",
    language: "English",
  },
  {
    id: "gcp-docs",
    level: "Essential",
    title: "GCP Documentation",
    description: "Cloud computing services by Google.",
    url: "https://cloud.google.com/docs",
    instructor: "Google Cloud",
    language: "English",
  },
  {
    id: "azure-docs",
    level: "Essential",
    title: "Azure Documentation",
    description: "Cloud computing service by Microsoft.",
    url: "https://learn.microsoft.com/en-us/azure/",
    instructor: "Microsoft Azure",
    language: "English",
  },

  // Data Visualization Tools
  {
    id: "tableau-docs",
    level: "Optional",
    title: "Tableau Documentation",
    description: "Data visualization software.",
    url: "https://help.tableau.com/current/guides.htm",
    instructor: "Tableau",
    language: "English",
  },
  {
    id: "powerbi-docs",
    level: "Optional",
    title: "Power BI Documentation",
    description: "Business analytics service by Microsoft.",
    url: "https://docs.microsoft.com/en-us/power-bi/",
    instructor: "Microsoft Power BI",
    language: "English",
  },

  // Deployment & MLOps
  {
    id: "docker-docs",
    level: "Optional",
    title: "Docker Documentation",
    description: "Platform for developing, shipping, and running applications.",
    url: "https://docs.docker.com",
    instructor: "Docker",
    language: "English",
  },
  {
    id: "streamlit-docs",
    level: "Optional",
    title: "Streamlit Documentation",
    description: "Framework for building data applications.",
    url: "https://docs.streamlit.io",
    instructor: "Streamlit",
    language: "English",
  },
  {
    id: "mlflow-docs",
    level: "Optional",
    title: "MLflow Documentation",
    description: "Open-source platform for managing the machine learning lifecycle.",
    url: "https://www.mlflow.org/docs/latest/index.html",
    instructor: "MLflow",
    language: "English",
  },

  // Additional Resources
  {
    id: "kaggle-docs",
    level: "Optional",
    title: "Kaggle",
    description: "Platform for data science competitions and datasets.",
    url: "https://www.kaggle.com/",
    instructor: "Kaggle",
    language: "English",
  },
  {
    id: "awesome-ds-docs",
    level: "Optional",
    title: "Awesome Data Science GitHub Repository",
    description: "A curated list of data science resources.",
    url: "https://github.com/academic/awesome-datascience",
    instructor: "GitHub",
    language: "English",
  },
];

export default function DataAnalysisProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📘 Essential Data Science Documentation
          </h2>
          <p className="mt-2 text-gray-600">
            Official documentation for all major data science tools and technologies you must know.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${d.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {d.level}
              </span>
              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {d.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{d.description}</p>
              <p className="mt-2 text-gray-500 text-xs">
                Source: {d.instructor} | Language: {d.language}
              </p>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Visit Documentation ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Use these official documentation links to explore, learn, and master essential data science technologies.
        </footer>
      </div>
    </section>
  );
}
