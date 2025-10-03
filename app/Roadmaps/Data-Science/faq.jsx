import React, { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "What programming languages should I know for data science?",
    answer:
      "Python is the most widely used language due to its simplicity and extensive libraries (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch). R is also popular for statistics-heavy tasks.",
  },
  {
    id: "faq2",
    question: "Do I need to learn SQL for data science?",
    answer:
      "Yes. SQL is essential for extracting, filtering, and aggregating data from databases. Most real-world datasets are stored in relational databases.",
  },
  {
    id: "faq3",
    question: "How important is mathematics in data science?",
    answer:
      "Mathematics is important, especially statistics, probability, linear algebra, and calculus. It helps in understanding machine learning algorithms and interpreting results.",
  },
  {
    id: "faq4",
    question: "Do I need to learn deep learning right away?",
    answer:
      "No. Start with data cleaning, EDA, regression, classification, and basic ML models. Deep learning is advanced and useful for image, NLP, or sequence data.",
  },
  {
    id: "faq5",
    question: "How can I handle missing or messy data?",
    answer:
      "Techniques include dropping missing values, filling with mean/median/mode, using predictive imputation, or transforming features. Libraries like Pandas make this easier.",
  },
  {
    id: "faq6",
    question: "How do I know which machine learning model to use?",
    answer:
      "It depends on the problem: regression for continuous values, classification for categories, clustering for grouping, and time series models for temporal data. Experimentation is key.",
  },
  {
    id: "faq7",
    question: "What is the best way to practice data science?",
    answer:
      "Work on real-world datasets, participate in Kaggle competitions, build end-to-end projects from data collection to visualization, and document your work in a portfolio.",
  },
  {
    id: "faq8",
    question: "Do I need to deploy my models?",
    answer:
      "Deployment is optional but highly recommended. Industry-ready data scientists often deploy models using Flask, FastAPI, Streamlit, or dashboards to showcase real-world impact.",
  },
  {
    id: "faq9",
    question: "How do I showcase my data science projects?",
    answer:
      "Create a portfolio on GitHub or personal website. Include Jupyter notebooks, dashboards, datasets used, and explanations of your approach, results, and business insights.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">❓ Data Science FAQ</h2>
          <p className="mt-2 text-gray-600">
            Answers to genuine questions learners have when starting their data science journey.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left flex justify-between items-center font-medium text-gray-900"
              >
                {faq.question}
                <span className="ml-2 text-indigo-600">{openId === faq.id ? "−" : "+"}</span>
              </button>
              {openId === faq.id && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These FAQs cover essential topics for learners to understand and apply data science effectively.
        </footer>
      </div>
    </section>
  );
}
