import React from 'react';

export default function AIMLRoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Core Fundamentals",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Fundamentals", 
          category: "Programming",
          details: "Python (NumPy, Pandas, Matplotlib, Seaborn), Git/GitHub, Conda, venv, Docker"
        },
        { 
          step: "Step - 2", 
          topic: "Mathematics for AI", 
          category: "Mathematics",
          details: "Linear algebra, calculus, probability & statistics, optimization, gradient descent"
        },
        { 
          step: "Step - 3", 
          topic: "Data Fundamentals", 
          category: "Data Science",
          details: "Data types, wrangling, cleaning, EDA (Exploratory Data Analysis)"
        },
      ],
    },
    {
      title: "Machine Learning",
      subtitle: "Core ML Concepts",
      steps: [
        { 
          step: "Step - 4", 
          topic: "ML Theory & Concepts", 
          category: "ML Theory",
          details: "Supervised vs unsupervised learning, overfitting, bias-variance tradeoff, feature engineering"
        },
        { 
          step: "Step - 5", 
          topic: "Core ML Algorithms", 
          category: "Algorithms",
          details: "Linear/Logistic regression, decision trees, random forest, XGBoost, SVM, clustering"
        },
        { 
          step: "Step - 6", 
          topic: "ML Tools & Frameworks", 
          category: "Tools",
          details: "Scikit-learn, MLflow for experiment tracking, evaluation metrics"
        },
      ],
    },
    {
      title: "Deep Learning",
      subtitle: "Neural Networks & AI",
      steps: [
        { 
          step: "Step - 7", 
          topic: "Neural Network Basics", 
          category: "Deep Learning",
          details: "Perceptron, MLP, activation functions, loss functions, backpropagation"
        },
        { 
          step: "Step - 8", 
          topic: "DL Frameworks", 
          category: "Frameworks",
          details: "PyTorch (research & industry), TensorFlow/Keras (enterprise, production)"
        },
        { 
          step: "Step - 9", 
          topic: "Advanced Architectures", 
          category: "Architectures",
          details: "CNN (images), RNN/LSTM/GRU (sequences), Transformers (BERT, GPT, ViT)"
        },
      ],
    },
    {
      title: "Specialization",
      subtitle: "Domain Expertise",
      steps: [
        { 
          step: "Step - 10", 
          topic: "Natural Language Processing", 
          category: "NLP",
          details: "Tokenization, embeddings, Transformers, BERT, GPT models, Hugging Face"
        },
        { 
          step: "Step - 11", 
          topic: "Computer Vision", 
          category: "Computer Vision",
          details: "Image classification, object detection (YOLO), segmentation, OpenCV"
        },
        { 
          step: "Step - 12", 
          topic: "Generative AI", 
          category: "Generative AI",
          details: "GANs, Diffusion Models (Stable Diffusion), LLM fine-tuning (LoRA, PEFT)"
        },
        { 
          step: "Step - 13", 
          topic: "Reinforcement Learning", 
          category: "RL",
          details: "Q-Learning, Deep Q-Networks (DQN), policy gradient methods"
        },
      ],
    },
    {
      title: "Production",
      subtitle: "MLOps & Deployment",
      steps: [
        { 
          step: "Step - 14", 
          topic: "Model Serving & APIs", 
          category: "Deployment",
          details: "FastAPI, Flask, TensorFlow Serving, TorchServe, containerization"
        },
        { 
          step: "Step - 15", 
          topic: "MLOps & CI/CD", 
          category: "MLOps",
          details: "Docker, Kubernetes, GitHub Actions, MLflow pipelines, DVC for data versioning"
        },
        { 
          step: "Step - 16", 
          topic: "Cloud AI Platforms", 
          category: "Cloud",
          details: "AWS SageMaker, Google Vertex AI, Azure ML, cloud deployment strategies"
        },
        { 
          step: "Step - 17", 
          topic: "AI Ethics & Security", 
          category: "Ethics",
          details: "Bias detection, model explainability (SHAP, LIME), adversarial attacks, privacy"
        },
      ],
    },
    {
      title: "Professional",
      subtitle: "Career Development",
      steps: [
        { 
          step: "Step - 18", 
          topic: "Industry Certifications", 
          category: "Certifications",
          details: "Google ML Engineer, AWS ML Specialty, TensorFlow Developer, NVIDIA DLI"
        },
        { 
          step: "Step - 19", 
          topic: "Real-World Projects", 
          category: "Portfolio",
          details: "Kaggle competitions, open-source contributions, end-to-end AI applications"
        },
        { 
          step: "Step - 20", 
          topic: "Career & Networking", 
          category: "Career Prep",
          details: "GitHub portfolio, technical writing, research papers, AI conferences"
        },
      ],
    },
  ];

  const projectSuggestions = [
    { level: "Foundation", project: "Data Analysis with Python" },
    { level: "Machine Learning", project: "Predictive Model with Scikit-learn" },
    { level: "Deep Learning", project: "Neural Network from Scratch" },
    { level: "Specialization", project: "Computer Vision App" },
    { level: "Production", project: "MLOps Pipeline Deployment" },
    { level: "Professional", project: "Complete AI Solution & Portfolio" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-teal-500 to-teal-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          

          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚀 20 Essential Steps • 🎯 6 Skill Levels • 🤖 Industry Ready</span>
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

        {/* Project Suggestions */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            💡 Suggested Projects for Each Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.project}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">📚 Essential AI/ML Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">ML/DL Tools</div>
              <div className="text-blue-100">PyTorch, TensorFlow, Scikit-learn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Learning Platforms</div>
              <div className="text-blue-100">Coursera, Fast.ai, Kaggle Learn</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Cloud Platforms</div>
              <div className="text-blue-100">AWS, Google Cloud, Azure ML</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">Research & Practice</div>
              <div className="text-blue-100">Papers with Code, Kaggle, GitHub</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🤖 Remember: Great AI/ML engineering comes from understanding fundamentals, building real projects, and staying updated with the latest research!
          </p>
        </div>
      </div>
    </main>
  );
}