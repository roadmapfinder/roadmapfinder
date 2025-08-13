import React from 'react';

export default function DataScienceRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Skills (Python First)", 
          category: "Core Programming",
          details: "Python essentials: variables, loops, functions, classes. Libraries: Pandas (data manipulation), NumPy (arrays), Matplotlib/Seaborn/Plotly (visualization). Bonus: R for statistical analysis"
        },
        { 
          step: "Step - 2", 
          topic: "Math & Statistics", 
          category: "Mathematical Foundation",
          details: "Descriptive stats (mean, median, variance), probability theory, hypothesis testing (t-test, ANOVA, Chi-square), correlation & regression basics, sampling techniques"
        },
        { 
          step: "Step - 3", 
          topic: "Data Thinking", 
          category: "Data Fundamentals",
          details: "Understanding data types (categorical, numerical, time-series, text), data cleaning best practices (missing values, duplicates, outliers)"
        },
      ],
    },
    {
      title: "Analysis",
      subtitle: "Data Analysis Skills",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Exploratory Data Analysis (EDA)", 
          category: "Data Exploration",
          details: "Pandas Profiling/Sweetviz, GroupBy operations, Pivot tables, aggregations, outlier detection (IQR, z-score)"
        },
        { 
          step: "Step - 5", 
          topic: "Data Visualization", 
          category: "Visualization Tools",
          details: "Static: Matplotlib, Seaborn. Interactive: Plotly, Bokeh. Dashboards: Power BI, Tableau, Looker Studio"
        },
        { 
          step: "Step - 6", 
          topic: "Business Context", 
          category: "Domain Knowledge",
          details: "KPI definition & measurement, domain knowledge (finance, marketing, healthcare, etc.), business intelligence concepts"
        },
        { 
          step: "Step - 7", 
          topic: "Databases & Data Extraction", 
          category: "Data Access",
          details: "SQL (SELECT, JOIN, GROUP BY, subqueries, window functions), NoSQL (MongoDB basics), APIs & Web scraping, ETL concepts"
        },
      ],
    },
    {
      title: "Machine Learning",
      subtitle: "Data Science & ML",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Machine Learning Concepts", 
          category: "ML Fundamentals",
          details: "Supervised & unsupervised learning, train-test split, cross-validation, feature scaling & encoding, overfitting & regularization"
        },
        { 
          step: "Step - 9", 
          topic: "Core Algorithms", 
          category: "ML Algorithms",
          details: "Linear & Logistic Regression, Decision Trees, Random Forest, XGBoost, Clustering (K-Means, Hierarchical)"
        },
        { 
          step: "Step - 10", 
          topic: "ML Tools & Frameworks", 
          category: "ML Implementation",
          details: "Scikit-learn (ML models), MLflow (model tracking), model evaluation metrics, hyperparameter tuning"
        },
        { 
          step: "Step - 11", 
          topic: "Advanced Data Science", 
          category: "Advanced Techniques",
          details: "Time series forecasting (ARIMA, Prophet), NLP basics (text cleaning, TF-IDF, word embeddings), feature engineering & selection"
        },
        { 
          step: "Step - 12", 
          topic: "Deep Learning", 
          category: "Neural Networks",
          details: "Deep learning with PyTorch/TensorFlow for image classification, sentiment analysis, neural network architectures"
        },
      ],
    },
    {
      title: "Advanced",
      subtitle: "Production & Scale",
      steps: [
        { 
          step: "Step - 13", 
          topic: "Big Data & Cloud", 
          category: "Scalable Systems",
          details: "Apache Spark (PySpark), Hadoop basics, AWS (S3, Athena, Redshift, SageMaker), Google Cloud (BigQuery, Vertex AI), Azure (Data Lake, Synapse)"
        },
        { 
          step: "Step - 14", 
          topic: "MLOps & Deployment", 
          category: "Production ML",
          details: "Deploying models with Flask/FastAPI, containerization (Docker), CI/CD for ML projects, data version control (DVC)"
        },
        { 
          step: "Step - 15", 
          topic: "Data Ethics & Privacy", 
          category: "Responsible AI",
          details: "Data anonymization & encryption, GDPR, CCPA compliance, bias & fairness in models, ethical AI practices"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Entry Level", certs: "Google Data Analytics, Microsoft Data Analyst Associate" },
    { level: "Intermediate", certs: "IBM Data Science Professional, AWS Data Analytics Specialty" },
    { level: "Advanced", certs: "TensorFlow Developer, Databricks Data Engineer Professional" },
    { level: "Cloud Specialty", certs: "AWS ML Specialty, Google Cloud ML Engineer" },
  ];

  const practiceResources = [
    { category: "Competitions", resources: "Kaggle, DrivenData, Analytics Vidhya" },
    { category: "Datasets", resources: "UCI ML Repository, Kaggle Datasets, Google Dataset Search" },
    { category: "Learning Platforms", resources: "Coursera, edX, DataCamp, Udacity" },
    { category: "Communities", resources: "Towards Data Science, KDnuggets, Reddit r/MachineLearning" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📊 15 Essential Steps • 🎯 4 Skill Areas • 💼 Career Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🏆 Industry Certifications by Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💻 Hands-On Practice Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🛠️ Essential Data Science Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Programming</div>
              <div className="text-blue-100">Python, R, SQL, Jupyter, VS Code</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Data Processing</div>
              <div className="text-blue-100">Pandas, NumPy, Spark, Dask, Polars</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Machine Learning</div>
              <div className="text-blue-100">Scikit-learn, TensorFlow, PyTorch, XGBoost</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Visualization</div>
              <div className="text-blue-100">Matplotlib, Plotly, Tableau, Power BI</div>
            </div>
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎯 Career Path Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">📊 Data Analyst</div>
              <div className="text-sm text-gray-600">Business Analyst, Data Analyst, BI Developer, Reporting Analyst</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🔬 Data Scientist</div>
              <div className="text-sm text-gray-600">ML Engineer, Research Scientist, AI Specialist, Quantitative Analyst</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🏗️ Data Engineering</div>
              <div className="text-sm text-gray-600">Data Engineer, MLOps Engineer, Analytics Engineer, Platform Engineer</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 Portfolio Project Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">📈 Business Analytics</div>
              <div className="text-sm text-gray-600">Sales forecasting dashboard, Customer churn prediction, Market basket analysis, A/B testing framework</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-pink-600 mb-2">🤖 AI & ML</div>
              <div className="text-sm text-gray-600">Sentiment analysis of tweets, Image classification app, Recommendation system, Time series forecasting</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            📊 Remember: Data Science is about solving business problems with data. Stay curious, practice consistently, and always think about the story behind the numbers!
          </p>
        </div>
      </div>
    </main>
  );
}