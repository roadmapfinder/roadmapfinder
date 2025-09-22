"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const GenerativeAIRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "0–3 months",
      description: "Build strong fundamentals in AI, math, and programming",
      color: "bg-green-500",
      sections: [
        {
          title: "Mathematics",
          items: [
            "Linear Algebra (vectors, matrices, eigenvalues)",
            "Probability & Statistics (distributions, Bayes rule, hypothesis testing)",
            "Calculus (gradients, derivatives, optimization basics)"
          ]
        },
        {
          title: "Programming",
          items: [
            "Python (NumPy, Pandas, Matplotlib, Scikit-Learn)",
            "Git/GitHub (collaboration & version control)",
            "Basic Linux + Command Line (for ML environments)"
          ]
        },
        {
          title: "Machine Learning Basics",
          items: [
            "Regression, Classification, Clustering",
            "Overfitting/underfitting, bias-variance tradeoff",
            "Gradient Descent & Optimization"
          ]
        },
        {
          title: "Foundation Projects",
          items: [
            "Implement Linear Regression & Logistic Regression from scratch",
            "Build a spam classifier using Naive Bayes",
            "Simple recommendation system"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Deep Learning Core",
      subtitle: "3–6 months",
      description: "Master neural networks, optimization, and deep learning foundations",
      color: "bg-yellow-500",
      sections: [
        {
          title: "Neural Networks",
          items: [
            "Feedforward networks, backpropagation, loss functions",
            "Optimization (Adam, SGD, momentum, LR schedulers)",
            "Regularization (dropout, batch norm, weight decay)"
          ]
        },
        {
          title: "Frameworks",
          items: [
            "PyTorch (primary industry standard in 2025)",
            "TensorFlow/Keras (secondary)",
            "Deep learning best practices and debugging"
          ]
        },
        {
          title: "Deep Learning Architectures",
          items: [
            "CNNs (computer vision)",
            "RNNs, LSTMs, GRUs (sequential data)",
            "Attention Mechanisms"
          ]
        },
        {
          title: "Deep Learning Projects",
          items: [
            "Handwritten digit classifier (MNIST/CIFAR-10)",
            "Image classifier with transfer learning (ResNet, EfficientNet)",
            "Sentiment analysis on IMDB/Yelp reviews"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Generative AI Foundations",
      subtitle: "6–9 months",
      description: "Learn fundamental generative models & understand how machines create",
      color: "bg-orange-500",
      sections: [
        {
          title: "Generative Models",
          items: [
            "Autoencoders (AE, VAE)",
            "GANs (Generative Adversarial Networks)",
            "DCGAN, StyleGAN, CycleGAN"
          ]
        },
        {
          title: "Modern Architectures",
          items: [
            "Diffusion Models (state-of-the-art for images, audio, video)",
            "Transformers (backbone of LLMs & diffusion models)",
            "Understanding latent spaces and generation quality"
          ]
        },
        {
          title: "Implementation Practice",
          items: [
            "Hugging Face ecosystem and model hub",
            "Papers with Code implementations",
            "Model evaluation and metrics"
          ]
        },
        {
          title: "Generative Projects",
          items: [
            "Image colorization with Autoencoders",
            "GAN for generating new fashion designs",
            "Text-to-Image Diffusion model (using Hugging Face)"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Large Language Models & Multimodal AI",
      subtitle: "9–15 months",
      description: "Develop expertise with modern LLMs and multimodal foundation models",
      color: "bg-blue-500",
      sections: [
        {
          title: "Transformers in Depth",
          items: [
            "Attention, self-attention, multi-head attention",
            "Encoder-decoder architectures",
            "Scaling laws, tokenization (BPE, WordPiece, SentencePiece)"
          ]
        },
        {
          title: "LLM Training & Fine-Tuning",
          items: [
            "Pretraining vs. Fine-tuning",
            "LoRA (Low-Rank Adaptation), QLoRA",
            "Retrieval-Augmented Generation (RAG)",
            "Prompt Engineering & Prompt Tuning"
          ]
        },
        {
          title: "Advanced Training Techniques",
          items: [
            "Instruction tuning & alignment (RLHF, DPO, Constitutional AI)",
            "Model evaluation and safety considerations",
            "Distributed training and optimization"
          ]
        },
        {
          title: "Multimodal Models",
          items: [
            "CLIP (text+image alignment)",
            "BLIP, Flamingo, LLaVA, Gemini-style architectures",
            "Audio (Whisper, SpeechT5, MusicGen)",
            "Video generation (Pika, Sora-style diffusion transformers)"
          ]
        },
        {
          title: "LLM Projects",
          items: [
            "Train a small GPT-like model on custom dataset",
            "Build a chatbot with RAG + vector databases (FAISS, Pinecone, Weaviate)",
            "Fine-tune LLaMA-2/3 or Mistral for domain-specific tasks",
            "Image caption generator (CLIP + LLM)",
            "Voice-to-text assistant (Whisper + GPT + TTS)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Systems, Deployment & Scaling",
      subtitle: "15–20 months",
      description: "Move from building models to building products & systems",
      color: "bg-purple-500",
      sections: [
        {
          title: "MLOps for Generative AI",
          items: [
            "Experiment tracking (Weights & Biases, MLflow)",
            "Model versioning (DVC, Hugging Face Hub)",
            "CI/CD pipelines for ML",
            "Model monitoring (latency, drift, hallucination tracking)"
          ]
        },
        {
          title: "Serving & Deployment",
          items: [
            "REST & gRPC APIs (FastAPI, Flask)",
            "Model quantization & optimization (ONNX, TensorRT, vLLM)",
            "Serverless + cloud (AWS, GCP, Azure)",
            "Edge deployment (mobile & IoT inference)"
          ]
        },
        {
          title: "Scalable Infrastructure",
          items: [
            "Kubernetes, Docker, Ray, Spark",
            "Vector databases for RAG (Weaviate, Pinecone, Milvus)",
            "GPU acceleration (CUDA, Triton inference server)",
            "Load balancing and auto-scaling"
          ]
        },
        {
          title: "Production Projects",
          items: [
            "Deploy a fine-tuned chatbot as SaaS (with FastAPI + Docker + Streamlit)",
            "Create an AI writing assistant (RAG + LLaMA + Pinecone)",
            "Build scalable API for image generation (Stable Diffusion inference)",
            "Implement AI video generator pipeline (diffusion + transformer)"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Industry Readiness & Advanced Topics",
      subtitle: "20–24 months",
      description: "Become a full-stack Generative AI Engineer ready for top companies or startups",
      color: "bg-red-500",
      sections: [
        {
          title: "Advanced Model Research",
          items: [
            "Efficient Transformers (FlashAttention, MoE, RWKV)",
            "Reinforcement Learning with LLMs (PPO, DPO)",
            "AI safety & alignment (hallucinations, bias, interpretability)",
            "Evaluation metrics for LLMs & diffusion models"
          ]
        },
        {
          title: "Specialization Tracks",
          items: [
            "NLP/LLMs: Custom GPT-like assistants",
            "Vision & Diffusion: Image/video generation at scale",
            "Audio & Speech: AI voices, music generation",
            "Multimodal Agents: AI that sees, hears, and talks"
          ]
        },
        {
          title: "Industry Tools",
          items: [
            "Hugging Face, LangChain, LlamaIndex",
            "OpenAI/Anthropic API integrations",
            "Vector DBs + RAG at scale",
            "Production monitoring and optimization"
          ]
        },
        {
          title: "Capstone Projects",
          items: [
            "Build your own domain-specific GPT (healthcare, law, finance)",
            "AI-powered video generator with captions + voiceover",
            "End-to-end multimodal assistant (speech → text → image → video)",
            "Open-source contribution (implementing a new LLM feature/model)"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Portfolio & Career",
      subtitle: "Parallel Throughout",
      description: "Prove expertise & land opportunities",
      color: "bg-indigo-500",
      sections: [
        {
          title: "Portfolio Development",
          items: [
            "GitHub projects (clean repos, notebooks, demos)",
            "Write blogs/papers on Medium, Substack, arXiv (if research-oriented)",
            "Contribute to open-source (Hugging Face, LangChain, Stable Diffusion repos)",
            "Create 2–3 real-world deployable apps (SaaS-style)"
          ]
        },
        {
          title: "Professional Presence",
          items: [
            "Build a personal website showcasing Generative AI Portfolio",
            "Technical writing and thought leadership",
            "Conference presentations and networking",
            "Industry mentorship and community involvement"
          ]
        },
        {
          title: "Career Preparation",
          items: [
            "System design for AI systems interview prep",
            "Technical interview practice for AI roles",
            "Understanding of AI ethics and responsible AI practices",
            "Business acumen and product thinking for AI applications"
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
        // Optional: Show success toast/notification
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
        // Optional: Show error toast/notification
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
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You're a Generative AI Expert!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've mastered the complete Generative AI stack and are ready to build cutting-edge AI applications and systems.
              </p>
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
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Generative AI <span className="text-blue-600">Mastery Roadmap 2025</span>
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
                  ? 'bg-blue-500 text-white'
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

export default GenerativeAIRoadmap;