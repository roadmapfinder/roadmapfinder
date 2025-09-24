"use client"
import React, { useState } from 'react';
import { Brain, Download, Map, FileText, FolderOpen, ChevronDown, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF } from './downloadPdf';

const AIMLMasteryRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // AI/ML Roadmap data structured according to your AI/ML Mastery content
  const phases = [
    {
      id: 1,
      title: "Core Foundations",
      subtitle: "Beginner Level",
      description: "Build strong math, programming, and data fundamentals.",
      color: "bg-blue-500",
      sections: [
        {
          title: "🧮 Mathematics for ML",
          items: [
            "Linear Algebra → Vectors, matrices, eigenvalues, SVD",
            "Probability & Statistics → Bayes theorem, distributions, hypothesis testing",
            "Calculus → Derivatives, gradients, chain rule, optimization basics",
            "Khan Academy Linear Algebra & MIT OCW Statistics courses"
          ]
        },
        {
          title: "💻 Programming & Tools",
          items: [
            "Python (NumPy, Pandas, Matplotlib, Seaborn)",
            "Jupyter Notebook / Google Colab",
            "Git + GitHub version control",
            "Python Official Docs, NumPy, Pandas documentation"
          ]
        },
        {
          title: "🎯 Foundation Projects",
          items: [
            "✅ Basic data cleaning (Titanic dataset)",
            "✅ Visualization dashboard (COVID-19, Stock market trends)",
            "Data manipulation and exploration exercises",
            "Statistical analysis on real-world datasets"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Core Machine Learning",
      subtitle: "Intermediate Level",
      description: "Master ML algorithms & model building.",
      color: "bg-green-500",
      sections: [
        {
          title: "📊 Supervised Learning",
          items: [
            "Regression: Linear, Polynomial, Ridge/Lasso",
            "Classification: Logistic Regression, Decision Trees, Random Forests, SVMs",
            "Evaluation: Confusion matrix, Precision/Recall, ROC-AUC",
            "Model selection and performance metrics"
          ]
        },
        {
          title: "🔍 Unsupervised Learning",
          items: [
            "Clustering (KMeans, DBSCAN, Hierarchical)",
            "Dimensionality Reduction (PCA, t-SNE)",
            "Anomaly detection techniques",
            "Association rule learning"
          ]
        },
        {
          title: "⚡ Model Improvement",
          items: [
            "Cross-validation, Hyperparameter tuning (GridSearchCV, RandomizedSearchCV)",
            "Feature engineering, Regularization",
            "Scikit-learn, XGBoost, LightGBM",
            "Ensemble methods and model stacking"
          ]
        },
        {
          title: "🚀 ML Projects",
          items: [
            "✅ Spam Email Classifier",
            "✅ Customer Segmentation using Clustering",
            "✅ House Price Prediction",
            "End-to-end ML pipeline development"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Deep Learning",
      subtitle: "Advanced Level",
      description: "Learn neural networks and modern DL frameworks.",
      color: "bg-purple-500",
      sections: [
        {
          title: "🧠 Neural Networks Basics",
          items: [
            "Perceptron, Multi-Layer Perceptron (MLP)",
            "Activation functions (ReLU, Sigmoid, Tanh, Softmax)",
            "Backpropagation & optimization (SGD, Adam, RMSProp)",
            "Loss functions and gradient descent variants"
          ]
        },
        {
          title: "🔧 Deep Learning Frameworks",
          items: [
            "TensorFlow ecosystem and Keras API",
            "PyTorch framework and dynamic computation graphs",
            "Model architecture design patterns",
            "GPU acceleration and distributed training"
          ]
        },
        {
          title: "👁️ Computer Vision",
          items: [
            "CNNs (Convolutional Neural Networks)",
            "Transfer Learning (ResNet, VGG, EfficientNet)",
            "Object Detection (YOLO, Faster R-CNN)",
            "Image segmentation and GANs"
          ]
        },
        {
          title: "📝 Natural Language Processing",
          items: [
            "Word Embeddings (Word2Vec, GloVe, FastText)",
            "RNN, LSTM, GRU architectures",
            "Transformers & Attention mechanisms",
            "Text preprocessing and tokenization"
          ]
        },
        {
          title: "🎯 Deep Learning Projects",
          items: [
            "✅ Handwritten Digit Recognition (MNIST)",
            "✅ Image Classifier with Transfer Learning",
            "✅ Sentiment Analysis on Tweets",
            "Multi-modal learning projects"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Modern AI & Industry-Ready Skills",
      subtitle: "Advanced Level",
      description: "Master cutting-edge AI/ML for real-world applications.",
      color: "bg-orange-500",
      sections: [
        {
          title: "🤖 Large Language Models (LLMs)",
          items: [
            "Transformers in detail (BERT, GPT, T5)",
            "Fine-tuning & Prompt Engineering",
            "Hugging Face Transformers library",
            "LLM deployment and optimization"
          ]
        },
        {
          title: "🚀 MLOps & Deployment",
          items: [
            "Model Serving (Flask, FastAPI, Streamlit, Gradio)",
            "Docker, Kubernetes basics for ML",
            "MLflow for experiment tracking",
            "CI/CD for ML models"
          ]
        },
        {
          title: "☁️ Cloud & Big Data",
          items: [
            "AWS/GCP/Azure ML services",
            "Big Data processing (Spark, Hadoop basics)",
            "Distributed training and inference",
            "Auto-scaling and model monitoring"
          ]
        },
        {
          title: "⚖️ Ethics & AI Safety",
          items: [
            "Fairness, Bias detection and mitigation in ML",
            "Responsible AI practices and guidelines",
            "Model interpretability and explainability",
            "Privacy-preserving ML techniques"
          ]
        },
        {
          title: "📈 Industry Projects",
          items: [
            "✅ AI-powered Chatbot with Transformers",
            "✅ Image Captioning System",
            "✅ Model Deployment on AWS/GCP with Docker",
            "Production-ready ML systems"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Specializations",
      subtitle: "Expert Level",
      description: "Master niche domains in AI/ML - Choose one or more paths.",
      color: "bg-red-500",
      sections: [
        {
          title: "👁️ Computer Vision Specialization",
          items: [
            "Advanced object detection and tracking",
            "Medical imaging and diagnostic AI",
            "Generative Adversarial Networks (GANs)",
            "Real-time video processing and analysis"
          ]
        },
        {
          title: "💬 NLP Specialization",
          items: [
            "Advanced chatbots and conversational AI",
            "Question-answering systems",
            "Document summarization and information extraction",
            "Multilingual and cross-lingual NLP"
          ]
        },
        {
          title: "🎨 Generative AI",
          items: [
            "GANs and Variational Autoencoders",
            "Diffusion models and Stable Diffusion",
            "Text-to-image and image-to-image generation",
            "Creative AI applications"
          ]
        },
        {
          title: "🎮 Reinforcement Learning",
          items: [
            "Q-Learning and Deep Q-Networks (DQN)",
            "Policy Gradient Methods (PPO, A3C)",
            "Multi-agent reinforcement learning",
            "RL for robotics and game AI"
          ]
        },
        {
          title: "🔧 AI for Edge/Robotics",
          items: [
            "Model optimization (TensorRT, ONNX)",
            "IoT AI and edge computing",
            "Robotics perception and control",
            "Real-time inference on embedded systems"
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
                    <div className="w-full max-w-6xl px-4">
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

            {/* Capstone Projects Section */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Capstone Projects (Industry-Ready Portfolio)
              </h2>
              <p className="text-gray-700 mb-6">Build 3–4 production-grade projects to showcase your expertise:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">🏗️ End-to-End ML Pipeline</h3>
                  <p className="text-sm text-gray-600">Complete workflow: Data → Training → Deployment → Monitoring</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🤖 LLM-Powered AI Assistant</h3>
                  <p className="text-sm text-gray-600">Chatbot with LangChain + OpenAI API/HuggingFace</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">👁️ Computer Vision App</h3>
                  <p className="text-sm text-gray-600">Real-time Object Detection with YOLO</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="font-semibold text-orange-600 mb-2">📝 NLP System</h3>
                  <p className="text-sm text-gray-600">Document Summarizer/Search Engine</p>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                📚 Key Resources & Tools by Phase
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">🔤 Mathematics</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Khan Academy Linear Algebra</li>
                    <li>• MIT OCW Statistics</li>
                    <li>• 3Blue1Brown YouTube</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">🐍 Programming</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Python Official Docs</li>
                    <li>• NumPy, Pandas, Matplotlib</li>
                    <li>• Jupyter Notebooks</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">🧠 Deep Learning</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Fast.ai Course</li>
                    <li>• Deep Learning Specialization</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="font-semibold text-orange-600 mb-2">☁️ MLOps</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Docker & Kubernetes</li>
                    <li>• MLflow, Weights & Biases</li>
                    <li>• AWS/GCP/Azure ML</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">🤖 Advanced AI</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hugging Face Hub</li>
                    <li>• Papers with Code</li>
                    <li>• OpenAI Gymnasium</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-300">
                  <h3 className="font-semibold text-indigo-600 mb-2">📖 Research</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ArXiv papers</li>
                    <li>• Google Scholar</li>
                    <li>• AI/ML conferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ⏳ Suggested Timeline (12-15 hrs/week)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h3 className="font-semibold text-blue-600 mb-2">Phase 1</h3>
                  <p className="text-2xl font-bold text-blue-600">2-3 months</p>
                  <p className="text-sm text-gray-600">Foundations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-600 mb-2">Phase 2</h3>
                  <p className="text-2xl font-bold text-green-600">3-4 months</p>
                  <p className="text-sm text-gray-600">Core ML</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h3 className="font-semibold text-purple-600 mb-2">Phase 3</h3>
                  <p className="text-2xl font-bold text-purple-600">4-6 months</p>
                  <p className="text-sm text-gray-600">Deep Learning</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="font-semibentfold text-orange-600 mb-2">Phase 4</h3>
                  <p className="text-2xl font-bold text-orange-600">3-4 months</p>
                  <p className="text-sm text-gray-600">Modern AI</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-600 mb-2">Phase 5</h3>
                  <p className="text-2xl font-bold text-red-600">Ongoing</p>
                  <p className="text-sm text-gray-600">Specialization</p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🏆 Final Tips to Become Industry-Ready
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                Congratulations! You've completed the AI/ML Mastery Roadmap and are ready to tackle real-world AI challenges.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🎯 Next Steps for Success</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribute to open-source AI projects (HuggingFace, Scikit-learn, PyTorch)</li>
                  <li>• Build portfolio projects & showcase on GitHub + LinkedIn</li>
                  <li>• Write blogs/tutorials to explain your work and share knowledge</li>
                  <li>• Stay updated via paperswithcode.com, ArXiv, and AI newsletters</li>
                  <li>• Join AI/ML communities and participate in competitions (Kaggle, DrivenData)</li>
                  <li>• Attend conferences and workshops to network with professionals</li>
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
            <Brain className="text-blue-600" size={32} />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              AI/ML <span className="text-blue-600">Mastery Roadmap</span>
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
              <Map size={18} className="mr-2" />
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

export default AIMLMasteryRoadmap;