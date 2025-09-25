export const phases = [
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