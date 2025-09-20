"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2, Brain } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const AIMasterRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Core Foundations",
      subtitle: "Beginner Level",
      description: "Build strong math, programming, and data fundamentals",
      color: "bg-green-500",
      sections: [
        {
          title: "Mathematics for ML",
          items: [
            "Linear Algebra → Vectors, matrices, eigenvalues, SVD",
            "Probability & Statistics → Bayes theorem, distributions, hypothesis testing",
            "Calculus → Derivatives, gradients, chain rule, optimization basics",
            "Resources: Khan Academy (Linear Algebra), MIT OCW (Probability & Statistics)"
          ]
        },
        {
          title: "Programming & Tools",
          items: [
            "Python (NumPy, Pandas, Matplotlib, Seaborn)",
            "Jupyter Notebook / Google Colab",
            "Git + GitHub version control",
            "Data manipulation and visualization fundamentals"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Basic data cleaning (Titanic dataset)",
            "Visualization dashboard (COVID-19, Stock market trends)",
            "Exploratory Data Analysis (EDA) on real datasets"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Core Machine Learning",
      subtitle: "Intermediate Level",
      description: "Master ML algorithms and model building fundamentals",
      color: "bg-orange-500",
      sections: [
        {
          title: "Supervised Learning",
          items: [
            "Regression: Linear, Polynomial, Ridge/Lasso",
            "Classification: Logistic Regression, Decision Trees, Random Forests, SVMs",
            "Evaluation: Confusion matrix, Precision/Recall, ROC-AUC",
            "Cross-validation and model selection techniques"
          ]
        },
        {
          title: "Unsupervised Learning & Tools",
          items: [
            "Clustering (KMeans, DBSCAN, Hierarchical)",
            "Dimensionality Reduction (PCA, t-SNE)",
            "Feature engineering and selection",
            "ML Libraries: Scikit-learn, XGBoost, LightGBM"
          ]
        },
        {
          title: "Core ML Projects",
          items: [
            "Spam Email Classifier with feature engineering",
            "Customer Segmentation using Clustering algorithms",
            "House Price Prediction with hyperparameter tuning"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Deep Learning",
      subtitle: "Advanced Level",
      description: "Learn neural networks and modern deep learning frameworks",
      color: "bg-blue-500",
      sections: [
        {
          title: "Neural Networks Fundamentals",
          items: [
            "Perceptron, Multi-Layer Perceptron (MLP)",
            "Activation functions (ReLU, Sigmoid, Tanh, Softmax)",
            "Backpropagation & optimization (SGD, Adam, RMSProp)",
            "Loss functions and gradient descent variants"
          ]
        },
        {
          title: "Deep Learning Frameworks",
          items: [
            "TensorFlow and Keras for model building",
            "PyTorch for research and experimentation",
            "Model architecture design and implementation",
            "GPU acceleration and performance optimization"
          ]
        },
        {
          title: "Computer Vision & NLP",
          items: [
            "CNNs for image processing and computer vision",
            "Transfer Learning (ResNet, VGG, EfficientNet)",
            "RNN, LSTM, GRU for sequence modeling",
            "Word Embeddings (Word2Vec, GloVe, FastText)"
          ]
        },
        {
          title: "Deep Learning Projects",
          items: [
            "Handwritten Digit Recognition (MNIST)",
            "Image Classifier with Transfer Learning",
            "Sentiment Analysis on social media data",
            "Object Detection with pre-trained models"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Modern AI & LLMs",
      subtitle: "Advanced → Expert Level",
      description: "Master cutting-edge AI and Large Language Models",
      color: "bg-purple-500",
      sections: [
        {
          title: "Large Language Models",
          items: [
            "Transformers architecture (BERT, GPT, T5)",
            "Attention mechanisms and self-attention",
            "Fine-tuning pre-trained models",
            "Prompt Engineering and few-shot learning",
            "Hugging Face Transformers library"
          ]
        },
        {
          title: "Advanced NLP & Vision",
          items: [
            "Question-Answering systems",
            "Text summarization and generation",
            "Named Entity Recognition (NER)",
            "Object Detection (YOLO, Faster R-CNN)",
            "Image captioning and multimodal AI"
          ]
        },
        {
          title: "Modern AI Projects",
          items: [
            "AI-powered Chatbot with Transformers",
            "Document Q&A system with RAG",
            "Image Captioning System",
            "Multi-modal AI applications"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "MLOps & Deployment",
      subtitle: "Industry-Ready Level",
      description: "Deploy and scale ML models in production environments",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Model Deployment",
          items: [
            "Model Serving (Flask, FastAPI, Streamlit, Gradio)",
            "REST APIs for ML models",
            "Docker containerization for ML apps",
            "Model versioning and A/B testing"
          ]
        },
        {
          title: "MLOps Infrastructure",
          items: [
            "MLflow for experiment tracking",
            "CI/CD pipelines for ML models",
            "Model monitoring and drift detection",
            "Kubernetes basics for ML deployment"
          ]
        },
        {
          title: "Cloud & Big Data",
          items: [
            "AWS/GCP/Azure ML services",
            "Big Data processing (Spark, Hadoop basics)",
            "Distributed training and inference",
            "Cloud storage and data pipelines"
          ]
        },
        {
          title: "Production Projects",
          items: [
            "End-to-End ML pipeline (Data → Training → Deployment)",
            "Model Deployment on AWS/GCP with Docker",
            "Real-time prediction API with monitoring",
            "Scalable ML system architecture"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "AI Specializations",
      subtitle: "Expert Level",
      description: "Master specialized domains and cutting-edge AI techniques",
      color: "bg-red-500",
      sections: [
        {
          title: "Advanced Computer Vision",
          items: [
            "Generative Adversarial Networks (GANs)",
            "Diffusion Models and Stable Diffusion",
            "Medical imaging and healthcare AI",
            "Real-time video processing and analysis"
          ]
        },
        {
          title: "Advanced NLP & Generative AI",
          items: [
            "Large Language Model fine-tuning",
            "Retrieval-Augmented Generation (RAG)",
            "Multi-agent systems and AI orchestration",
            "Custom transformer architectures"
          ]
        },
        {
          title: "Emerging AI Fields",
          items: [
            "Reinforcement Learning (Q-Learning, DQN, PPO)",
            "AI for Edge computing and IoT",
            "Robotics and autonomous systems",
            "Quantum Machine Learning basics"
          ]
        },
        {
          title: "Ethics & AI Safety",
          items: [
            "Fairness and bias detection in ML models",
            "Responsible AI practices and governance",
            "Explainable AI (XAI) techniques",
            "AI security and adversarial attacks"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Industry Mastery",
      subtitle: "Senior AI/ML Engineer",
      description: "Build production-grade AI systems and lead AI initiatives",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Advanced System Design",
          items: [
            "Distributed ML systems architecture",
            "Real-time inference at scale",
            "Multi-model serving and orchestration",
            "AI system performance optimization",
            "Cost optimization for AI workloads"
          ]
        },
        {
          title: "Leadership & Strategy",
          items: [
            "AI project management and team leadership",
            "Technical documentation and knowledge sharing",
            "Open-source contributions to AI projects",
            "Research paper reading and implementation",
            "AI strategy and business impact assessment"
          ]
        },
        {
          title: "Capstone Portfolio (Industry-Ready)",
          items: [
            "LLM-powered AI Assistant (ChatGPT-like application)",
            "Computer Vision App (Real-time Object Detection)",
            "NLP System (Document Summarizer/Search Engine)",
            "End-to-End AI Platform (Data → Model → Deployment → Monitoring)",
            "Research project with novel AI technique implementation"
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
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🚀 Congratulations! You're AI/ML Industry Ready!
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                You've completed the AI/ML Mastery Roadmap and are now ready to build cutting-edge AI systems and lead AI initiatives.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-300 mt-4">
                <h3 className="font-semibold text-blue-600 mb-2">🏆 Final Tips to Become Industry-Ready</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribute to open-source AI projects (HuggingFace, Scikit-learn, PyTorch)</li>
                  <li>• Build portfolio projects & showcase on GitHub + LinkedIn</li>
                  <li>• Write blogs/tutorials to explain your work</li>
                  <li>• Stay updated via paperswithcode.com, Arxiv, and AI newsletters</li>
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

export default AIMasterRoadmap;