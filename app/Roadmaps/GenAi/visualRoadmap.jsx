import React from 'react';

export default function GenAIRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Build Your Core",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Math & Statistics", 
          category: "Mathematical Foundations",
          details: "Linear Algebra (vectors, matrices, eigenvalues), Probability & Statistics (distributions, Bayes' theorem), Calculus (gradients, derivatives for optimization)"
        },
        { 
          step: "Step - 2", 
          topic: "Programming Essentials", 
          category: "Development Skills",
          details: "Python mastery (NumPy, Pandas, Matplotlib, Seaborn), Git/GitHub version control workflows"
        },
        { 
          step: "Step - 3", 
          topic: "Computer Science Basics", 
          category: "CS Fundamentals",
          details: "Data Structures & Algorithms, Database fundamentals (SQL + NoSQL), system design basics"
        },
        { 
          step: "Step - 4", 
          topic: "Core Machine Learning", 
          category: "ML Algorithms",
          details: "Regression, Classification, Clustering, Decision Trees, Random Forests, SVM, KNN, Scikit-learn"
        },
        { 
          step: "Step - 5", 
          topic: "ML Mathematics", 
          category: "ML Theory",
          details: "Loss functions, optimization algorithms, gradient descent, bias-variance tradeoff, cross-validation"
        },
        { 
          step: "Step - 6", 
          topic: "Advanced ML Tools", 
          category: "ML Libraries",
          details: "XGBoost, LightGBM, feature engineering, hyperparameter tuning, model evaluation metrics"
        },
      ],
    },
    {
      title: "Deep Learning",
      subtitle: "Neural Networks",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Neural Network Basics", 
          category: "DL Foundations",
          details: "Perceptrons, Multi-Layer Perceptrons, Backpropagation, Activation Functions (ReLU, Softmax, Sigmoid)"
        },
        { 
          step: "Step - 8", 
          topic: "Deep Learning Frameworks", 
          category: "DL Tools",
          details: "PyTorch (industry preferred), TensorFlow/Keras, model building, training loops, optimization"
        },
        { 
          step: "Step - 9", 
          topic: "CNN & Computer Vision", 
          category: "Vision Models",
          details: "Convolutional Neural Networks, image classification, object detection, transfer learning with pre-trained models"
        },
        { 
          step: "Step - 10", 
          topic: "RNN & Sequence Models", 
          category: "Sequential Data",
          details: "Recurrent Neural Networks, LSTMs, GRUs, time series analysis, sequence-to-sequence models"
        },
        { 
          step: "Step - 11", 
          topic: "Autoencoders", 
          category: "Unsupervised Learning",
          details: "Vanilla autoencoders, denoising autoencoders, sparse autoencoders, dimensionality reduction"
        },
      ],
    },
    {
      title: "Generative AI",
      subtitle: "Content Creation",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Generative Adversarial Networks", 
          category: "GANs",
          details: "DCGAN, CycleGAN, StyleGAN, adversarial training, generator-discriminator architecture"
        },
        { 
          step: "Step - 13", 
          topic: "Variational Autoencoders", 
          category: "VAEs",
          details: "Latent space modeling, probabilistic encoders, reconstruction loss, KL divergence"
        },
        { 
          step: "Step - 14", 
          topic: "Diffusion Models", 
          category: "Diffusion",
          details: "Stable Diffusion, DDPM, image generation, noise scheduling, denoising process"
        },
        { 
          step: "Step - 15", 
          topic: "Transformer Architecture", 
          category: "Attention Mechanisms",
          details: "Self-Attention, Multi-Head Attention, Positional Encoding, Encoder-Decoder architecture"
        },
        { 
          step: "Step - 16", 
          topic: "Large Language Models", 
          category: "LLMs",
          details: "BERT, GPT series, T5, LLaMA, tokenization (BPE, SentencePiece), pretraining vs fine-tuning"
        },
        { 
          step: "Step - 17", 
          topic: "LLM Training & Optimization", 
          category: "LLM Advanced",
          details: "RLHF (Reinforcement Learning with Human Feedback), LoRA/PEFT, instruction tuning, alignment"
        },
      ],
    },
    {
      title: "Advanced & Deployment",
      subtitle: "Production Ready",
      steps: [
        { 
          step: "Step - 18", 
          topic: "Multimodal AI", 
          category: "Vision + Language",
          details: "CLIP, BLIP, Flamingo, Kosmos, Gemini, cross-modal understanding and generation"
        },
        { 
          step: "Step - 19", 
          topic: "Audio & Video GenAI", 
          category: "Media Generation",
          details: "Whisper (speech-to-text), MusicLM (text-to-music), Sora, Runway video generation"
        },
        { 
          step: "Step - 20", 
          topic: "RAG Systems", 
          category: "Retrieval Augmented",
          details: "Vector databases (Pinecone, Weaviate), LangChain, LlamaIndex, document retrieval and generation"
        },
        { 
          step: "Step - 21", 
          topic: "Model Deployment & APIs", 
          category: "Production",
          details: "FastAPI, Flask, Hugging Face Inference, model serving, containerization with Docker"
        },
        { 
          step: "Step - 22", 
          topic: "MLOps for GenAI", 
          category: "Operations",
          details: "Model monitoring, A/B testing, prompt engineering, guardrails, safety filtering"
        },
        { 
          step: "Step - 23", 
          topic: "Agentic AI & Advanced", 
          category: "AI Agents",
          details: "AutoGPT, BabyAGI, CrewAI, multi-agent systems, tool use, reasoning chains"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "ML Classification Project with Scikit-learn" },
    { level: "Deep Learning", project: "CNN Image Classifier with PyTorch" },
    { level: "Generative AI", project: "Fine-tuned GPT Chatbot with RAG" },
    { level: "Advanced", project: "Multimodal AI SaaS Application" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
        

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🤖 23 Essential Steps • 🧠 4 Skill Levels • 🚀 Industry Ready</span>
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
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
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
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"></div>
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
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded">
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

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🚀 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">🧠 Essential GenAI Tools & Frameworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">ML/DL Frameworks</div>
              <div className="text-purple-100">PyTorch, TensorFlow, Scikit-learn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">GenAI Models</div>
              <div className="text-purple-100">GPT, BERT, LLaMA, Stable Diffusion</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">LLM Libraries</div>
              <div className="text-purple-100">Hugging Face, LangChain, LlamaIndex</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Vector Databases</div>
              <div className="text-purple-100">Pinecone, Weaviate, Milvus, Chroma</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-purple-100">OpenAI API, Anthropic, AWS, GCP</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Development</div>
              <div className="text-purple-100">Jupyter, Colab, Streamlit, Gradio</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Model Training</div>
              <div className="text-purple-100">PEFT, LoRA, QLoRA, RLHF</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning Resources</div>
              <div className="text-purple-100">Coursera, Udacity, Fast.ai, Papers</div>
            </div>
          </div>
        </section>

        {/* Latest Models Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            🔥 Latest Models to Follow (2025)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Language Models</h3>
              <p className="text-sm text-gray-600">GPT-4.5, Claude 4, LLaMA 3, Mistral 8x22B, Gemini Ultra</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Vision Models</h3>
              <p className="text-sm text-gray-600">DALL-E 3, Midjourney v6, Stable Diffusion 3.0, Firefly</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Multimodal</h3>
              <p className="text-sm text-gray-600">GPT-4V, Gemini Pro Vision, Claude 3 Vision, LLaVA</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🚀 Remember: GenAI is rapidly evolving. Focus on fundamentals, build projects, and stay updated with latest research!
          </p>
        </div>
      </div>
    </main>
  );
}