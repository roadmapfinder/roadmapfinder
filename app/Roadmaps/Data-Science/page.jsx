"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, BarChart3, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DataScienceRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 0,
      title: "Foundation",
      subtitle: "Building Strong Fundamentals (0–2 months)",
      description: "Build strong mathematical and programming fundamentals",
      color: "bg-gray-600",
      sections: [
        {
          title: "Programming (Python & SQL)",
          items: [
            "Python basics → Syntax, variables, data types, loops, functions, OOP basics",
            "Essential libraries → NumPy, Pandas, Matplotlib, Seaborn",
            "SQL mastery → CRUD operations, joins, aggregations, window functions",
            "Resources → Python Docs, W3Schools, LeetCode SQL problems",
            "Mini project → Analyze CSV dataset (like Titanic) using Pandas",
            "Database project → Build small SQL database and query data (employee DB)"
          ]
        },
        {
          title: "Mathematics & Statistics",
          items: [
            "Linear Algebra → Vectors, matrices, matrix operations",
            "Probability & Statistics → Descriptive stats, probability distributions",
            "Hypothesis testing → p-values, confidence intervals",
            "Calculus basics → Derivatives for gradient descent understanding",
            "Partial derivatives → Multi-variable optimization",
            "Resources → Khan Academy, StatQuest (YouTube)",
            "Mini project → Statistical analysis of dataset (mean, median, variance, correlations)"
          ]
        },
        {
          title: "Data Visualization",
          items: [
            "Python libraries → Matplotlib, Seaborn, Plotly, Dash",
            "Chart types → Bar charts, line charts, scatter plots, heatmaps",
            "Interactive dashboards → Building engaging visualizations",
            "Resources → Plotly Docs, Seaborn Docs",
            "Color theory → Effective visual communication",
            "Mini project → Interactive dashboard showing COVID-19 data trends"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Core Data Science Skills",
      subtitle: "Real-world Data Handling (2–5 months)",
      description: "Handle real-world datasets, data cleaning, and analysis",
      color: "bg-blue-500",
      sections: [
        {
          title: "Data Wrangling & Cleaning",
          items: [
            "Missing data handling → Imputation strategies, deletion methods",
            "Duplicate detection → Identification and removal techniques",
            "Feature engineering → Encoding, normalization, scaling",
            "Data transformation → Log transforms, binning, aggregation",
            "Tools mastery → Pandas, NumPy, OpenCV (image preprocessing)",
            "Data validation → Quality checks and consistency verification"
          ]
        },
        {
          title: "Exploratory Data Analysis (EDA)",
          items: [
            "Correlation analysis → Pearson, Spearman correlation coefficients",
            "Outlier detection → Statistical methods, visualization techniques",
            "Distribution analysis → Histograms, box plots, Q-Q plots",
            "Visual storytelling → Using Seaborn/Matplotlib effectively",
            "Pattern recognition → Trend identification, seasonality",
            "Summary statistics → Central tendency, variability measures"
          ]
        },
        {
          title: "Machine Learning Fundamentals",
          items: [
            "Supervised Learning → Linear regression, logistic regression, decision trees",
            "Tree methods → Random forest, gradient boosting basics",
            "Instance-based → k-NN algorithm and applications",
            "Unsupervised Learning → K-means clustering, hierarchical clustering",
            "Dimensionality reduction → PCA, feature selection",
            "Model evaluation → Train-test split, cross-validation, metrics",
            "Performance metrics → Accuracy, precision, recall, F1-score, RMSE"
          ]
        },
        {
          title: "Hands-on Projects",
          items: [
            "Regression project → Predict house prices with feature engineering",
            "Classification project → Titanic survival prediction",
            "Clustering project → Customer segmentation analysis",
            "EDA project → Complete exploratory analysis with insights",
            "End-to-end pipeline → Data loading to model evaluation"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Intermediate & Specialization",
      subtitle: "Industry-Relevant Skills (5–10 months)",
      description: "Get industry-relevant ML & data skills, start building a portfolio",
      color: "bg-green-500",
      sections: [
        {
          title: "Advanced Machine Learning",
          items: [
            "Ensemble Methods → Random Forest, Gradient Boosting deep dive",
            "Advanced boosting → XGBoost, LightGBM, CatBoost optimization",
            "Time Series Forecasting → ARIMA models, Prophet, seasonal decomposition",
            "LSTM basics → Recurrent neural networks for sequences",
            "Recommendation Systems → Collaborative filtering, content-based filtering",
            "Feature importance → SHAP values, permutation importance"
          ]
        },
        {
          title: "Deep Learning Basics",
          items: [
            "Frameworks mastery → TensorFlow, Keras, PyTorch",
            "Neural network concepts → Architecture, activation functions, loss functions",
            "Backpropagation → Understanding gradient computation",
            "Optimization → SGD, Adam, learning rate scheduling",
            "Regularization → Dropout, batch normalization, early stopping",
            "Mini projects → Digit recognition (MNIST), Image classification (CIFAR-10)"
          ]
        },
        {
          title: "Big Data & Cloud Tools",
          items: [
            "Big Data processing → Spark fundamentals, PySpark for large datasets",
            "Cloud platforms → AWS S3, AWS SageMaker, GCP AI Platform",
            "Azure ML → Microsoft cloud ML services",
            "Distributed computing → Cluster management, parallel processing",
            "Data pipelines → ETL processes, workflow management",
            "Scalability → Handling datasets too large for memory"
          ]
        },
        {
          title: "Advanced Projects",
          items: [
            "Time series project → Sales forecasting with multiple models",
            "Computer Vision → Image classification using CNNs",
            "NLP project → Sentiment analysis or text classification",
            "Model deployment → Flask/Django app with ML model",
            "Cloud deployment → Deploy model on AWS/GCP/Azure"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Industry-Ready Skills",
      subtitle: "Production Systems (10–15 months)",
      description: "Learn production-ready tools, MLOps, and portfolio development",
      color: "bg-purple-500",
      sections: [
        {
          title: "Model Deployment & MLOps",
          items: [
            "Deployment frameworks → Flask, FastAPI, Streamlit applications",
            "Containerization → Docker for model packaging",
            "CI/CD pipelines → GitHub Actions, Jenkins for ML",
            "Model monitoring → Prometheus, Grafana for ML metrics",
            "Version control → DVC (Data Version Control), Git for ML",
            "Model registry → MLflow, experiment tracking"
          ]
        },
        {
          title: "Natural Language Processing",
          items: [
            "NLP libraries → NLTK, SpaCy for text processing",
            "Modern NLP → Transformers, HuggingFace ecosystem",
            "Text preprocessing → Tokenization, stemming, lemmatization",
            "Sentiment analysis → Building opinion mining systems",
            "Text summarization → Extractive and abstractive methods",
            "Named entity recognition → Information extraction"
          ]
        },
        {
          title: "Computer Vision",
          items: [
            "OpenCV mastery → Image processing, feature detection",
            "CNN architectures → LeNet, AlexNet, VGG, ResNet",
            "Object detection → YOLO, R-CNN, SSD implementations",
            "Transfer learning → Pre-trained models, fine-tuning",
            "Advanced CV → Detectron2, state-of-the-art models",
            "Image augmentation → Data augmentation techniques"
          ]
        },
        {
          title: "Business Analytics & Skills",
          items: [
            "KPI analysis → Business metrics, performance indicators",
            "Dashboard creation → Power BI, Tableau for stakeholders",
            "A/B testing → Experimental design, statistical significance",
            "Business problem framing → Translating business to ML problems",
            "Stakeholder communication → Presenting technical results",
            "Domain expertise → Understanding business context"
          ]
        },
        {
          title: "Capstone Projects",
          items: [
            "End-to-end ML project → Data collection → Cleaning → Modeling → Deployment",
            "NLP application → Chatbot or advanced text classification system",
            "Computer Vision → Face recognition or object detection system",
            "Recommendation engine → Full-stack recommendation system",
            "Time series forecasting → Production-ready forecasting system"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Portfolio & Job Readiness",
      subtitle: "Career Preparation (Ongoing)",
      description: "Build impressive portfolio and prepare for data science interviews",
      color: "bg-red-500",
      sections: [
        {
          title: "Portfolio Development",
          items: [
            "GitHub portfolio → 5-10 industry-style projects with clear documentation",
            "Project documentation → READMEs, technical reports, methodology",
            "Code quality → Clean, commented, reusable code",
            "Diverse projects → Regression, classification, clustering, NLP, CV",
            "End-to-end demos → Deployed applications with live demos",
            "Impact metrics → Quantified results and business value"
          ]
        },
        {
          title: "Kaggle Competitions",
          items: [
            "Beginner competitions → Titanic, House Prices for learning",
            "Intermediate challenges → Feature engineering competitions",
            "Advanced competitions → NLP, Computer Vision challenges",
            "Ensemble methods → Combining multiple models for better performance",
            "Competition strategies → EDA, feature selection, model stacking",
            "Community engagement → Learning from discussion forums"
          ]
        },
        {
          title: "Interview Preparation",
          items: [
            "Technical interviews → Machine learning concepts, algorithms",
            "Coding challenges → LeetCode Python problems, data manipulation",
            "SQL proficiency → Complex queries, optimization, database design",
            "System design → ML system architecture, scalability considerations",
            "Case studies → Business problem solving, analytical thinking",
            "Mock interviews → Practice with peers, feedback incorporation"
          ]
        },
        {
          title: "Professional Skills",
          items: [
            "Resume optimization → Highlighting projects, quantified achievements",
            "LinkedIn presence → Professional network, thought leadership",
            "Technical writing → Blog posts, Medium articles",
            "Presentation skills → Explaining complex concepts simply",
            "Domain expertise → Industry-specific knowledge development",
            "Continuous learning → Staying updated with latest developments"
          ]
        }
      ]
    }
  ];

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Phase {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Phase {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Phase {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Timeline */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📊 Suggested Learning Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🏃‍♂️ Full-Time Learning (15 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 0–2 months: Foundation (Python, SQL, Math, Statistics)</li>
                    <li>• 2–5 months: Core skills (ML fundamentals, EDA, projects)</li>
                    <li>• 5–10 months: Advanced ML, Deep Learning, Big Data tools</li>
                    <li>• 10–15 months: Production skills, MLOps, specialization</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">🚶‍♂️ Part-Time Learning (24-30 months)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extend each phase by 75-100% additional time</li>
                    <li>• Focus on one major concept per week</li>
                    <li>• Complete one project per month minimum</li>
                    <li>• Join data science communities and study groups</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Requirements */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🏆 Must-Have Portfolio Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">🏠 House Price Prediction</h3>
                  <p className="text-sm text-gray-600">Regression analysis with feature engineering and model comparison</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">👥 Customer Segmentation</h3>
                  <p className="text-sm text-gray-600">Unsupervised learning with K-means and business insights</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">📈 Sales Forecasting</h3>
                  <p className="text-sm text-gray-600">Time series analysis with ARIMA, Prophet, and LSTM</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">💬 Sentiment Analysis</h3>
                  <p className="text-sm text-gray-600">NLP project with preprocessing, modeling, and deployment</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-300">
                  <h3 className="font-semibold text-indigo-600 mb-2">🖼️ Image Classification</h3>
                  <p className="text-sm text-gray-600">Computer Vision with CNNs and transfer learning</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="font-semibold text-orange-600 mb-2">🚀 End-to-End ML App</h3>
                  <p className="text-sm text-gray-600">Full deployment with Flask/Streamlit and cloud hosting</p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're Data Science Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the Data Science Mastery Roadmap and are now ready to solve complex business problems with machine learning and work at top tech companies.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-300 mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎯 Interview & Hiring Checklist</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ 5-10 diverse projects showcasing different ML techniques</li>
                  <li>• ✅ GitHub portfolio with clean code and detailed documentation</li>
                  <li>• ✅ At least 2 end-to-end deployed applications</li>
                  <li>• ✅ Kaggle participation with top 20% finishes</li>
                  <li>• ✅ Strong SQL skills and statistical knowledge for interviews</li>
                  <li>• ✅ Ability to explain complex ML concepts in simple terms</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <BarChart3 className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Data Science <span className="text-blue-600">Mastery Roadmap</span>
              <span className="text-sm md:text-base font-normal text-gray-600 ml-2">(2025 Edition)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default DataScienceRoadmap;