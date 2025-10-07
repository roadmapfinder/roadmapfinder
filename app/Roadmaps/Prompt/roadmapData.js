export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level",
    description: "Understand what prompts are, how LLMs work, and how to structure basic inputs effectively",
    color: "bg-blue-500",
    sections: [
      {
        title: "Introduction to LLMs",
        items: [
          "What are large language models?",
          "Transformer architecture basics (conceptual understanding)",
          "Pretraining vs. fine-tuning vs. instruction tuning",
          "Understanding context windows, temperature, and sampling parameters",
          "Roles (system, user, assistant) and their influence"
        ]
      },
      {
        title: "Prompt Basics",
        items: [
          "What is prompt engineering?",
          "Difference between prompt, completion, and tokens",
          "Zero-shot, one-shot, and few-shot prompting",
          "Formatting and consistency",
          "Understanding model limitations and hallucinations"
        ]
      },
      {
        title: "Prompt Components",
        items: [
          "Instruction clarity and specificity",
          "Context relevance",
          "Output constraints (length, tone, format)"
        ]
      },
      {
        title: "Tools to Learn",
        items: [
          "OpenAI Playground",
          "Poe / Hugging Face Chat",
          "ChatGPT Custom Instructions",
          "PromptPerfect / FlowGPT"
        ]
      },
      {
        title: "Mini Projects",
        items: [
          "Build a 'Prompt Testing Notebook' using OpenAI or Anthropic API",
          "Compare zero-shot vs. few-shot results on the same question",
          "Create a 'Prompt Journal' documenting what works and why"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Structural Prompt Engineering",
    subtitle: "Intermediate Level",
    description: "Learn structured prompting, frameworks, and prompt templates for consistent performance",
    color: "bg-purple-500",
    sections: [
      {
        title: "Prompt Patterns & Frameworks",
        items: [
          "CRISP (Context, Role, Instruction, Steps, Purpose)",
          "RACE (Role, Action, Context, Expectation)",
          "COT (Chain-of-Thought prompting)",
          "ReAct (Reason + Act) prompting",
          "Self-Consistency prompting"
        ]
      },
      {
        title: "Formatting & Structuring Techniques",
        items: [
          "Bullet lists, numbered steps, and markdown to guide structure",
          "Prompt delimiters and context boundaries",
          "Handling multi-turn interactions"
        ]
      },
      {
        title: "Evaluation & Refinement",
        items: [
          "How to debug poor outputs",
          "Adding constraints (tone, format, safety)",
          "Using evaluation frameworks (BLEU, ROUGE, GPT-eval)"
        ]
      },
      {
        title: "Tools",
        items: [
          "LangChain / LlamaIndex",
          "PromptLayer (prompt tracking)",
          "OpenAI Eval / Guidance",
          "Promptfoo (A/B testing prompts)"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build a prompt template library for different LLM tasks (content, data extraction, coding)",
          "Create a multi-step reasoning assistant using ReAct prompting",
          "Compare structured vs. unstructured prompt performance"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Prompt Engineering",
    subtitle: "Pro Level",
    description: "Move from text-based prompting to multimodal, API-integrated, and autonomous prompt systems",
    color: "bg-green-500",
    sections: [
      {
        title: "Prompt Chaining & Modularization",
        items: [
          "How to break large tasks into sub-prompts",
          "Context passing between steps",
          "Using intermediate reasoning steps (scratchpad memory)"
        ]
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        items: [
          "How to feed documents, PDFs, or data into prompts",
          "Embeddings & vector databases (FAISS, Pinecone)",
          "Query + context + response pipeline"
        ]
      },
      {
        title: "Function Calling & API Integration",
        items: [
          "Using function calling for automation",
          "Building tools and agents using OpenAI function-calling or LangChain tools"
        ]
      },
      {
        title: "Multimodal Prompting",
        items: [
          "Prompting with images, audio, and video",
          "Descriptive and visual-context prompts"
        ]
      },
      {
        title: "Evaluation & Optimization",
        items: [
          "Building your own evaluation metrics",
          "Automated prompt testing with scripts",
          "Fine-tuning vs. advanced prompt tuning"
        ]
      },
      {
        title: "Tools",
        items: [
          "LangChain, LlamaIndex",
          "Pinecone, Weaviate, ChromaDB",
          "OpenAI Functions, Anthropic Tools API",
          "Gradio / Streamlit for frontends"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build a RAG chatbot with retrieval and summarization",
          "Create a multi-agent system (e.g., 'Researcher + Writer + Reviewer')",
          "Design a prompt API that dynamically adjusts prompts based on context"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Domain-Specific Applications",
    subtitle: "Specialist Level",
    description: "Apply domain knowledge to solve real-world business problems using prompt engineering",
    color: "bg-orange-500",
    sections: [
      {
        title: "Software Development",
        items: [
          "Code generation, debugging, and doc automation",
          "System prompt design for developer copilots"
        ]
      },
      {
        title: "Data Science & Analytics",
        items: [
          "Data cleaning, summarization, and SQL generation",
          "Prompting for data-to-insight conversions"
        ]
      },
      {
        title: "Education & Content Creation",
        items: [
          "Quiz, syllabus, lesson plan generation",
          "Adaptive tutoring using multi-turn prompts"
        ]
      },
      {
        title: "Marketing & Product Design",
        items: [
          "Persona-based copywriting prompts",
          "Brainstorming product ideas, taglines, and campaigns"
        ]
      },
      {
        title: "Business & Decision Support",
        items: [
          "Prompting for decision trees, SWOT, and financial summaries"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build a Custom GPT or AI Assistant specialized in one domain",
          "Create a PromptOps dashboard for enterprise use"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Industry-Ready Level",
    subtitle: "Professional Level",
    description: "Transition from engineer to Prompt Architect / AI System Designer",
    color: "bg-red-500",
    sections: [
      {
        title: "PromptOps & Workflow Management",
        items: [
          "Versioning, monitoring, and auditing prompts",
          "Continuous improvement cycles"
        ]
      },
      {
        title: "Ethics & Safety",
        items: [
          "Avoiding bias, toxicity, and sensitive content",
          "Safety filters and guardrails"
        ]
      },
      {
        title: "Collaboration & Documentation",
        items: [
          "Building prompt style guides for teams",
          "Shared prompt libraries and repositories"
        ]
      },
      {
        title: "Prompt Tuning & Fine-tuning",
        items: [
          "Comparison: prompting vs. fine-tuning",
          "Parameter-efficient tuning (LoRA, PEFT)"
        ]
      },
      {
        title: "Capstone Projects",
        items: [
          "Design an AI Agent System using LangChain or Autogen",
          "Build a prompt evaluation dashboard with metrics tracking",
          "Create an LLM-powered SaaS MVP (content generator, code reviewer, or resume optimizer)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Continuous Mastery & Research",
    subtitle: "Expert Level",
    description: "Stay ahead with the latest methods and frameworks",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Topics to Explore",
        items: [
          "Self-reflective prompting (MetaPrompting)",
          "Autonomous agents (BabyAGI, AutoGPT, CrewAI, OpenDevin)",
          "Prompt compilation & model-specific optimizations",
          "Multimodal LLMs (GPT-4o, Gemini 1.5 Pro, Claude 3 Opus)",
          "Context compression & retrieval pipelines",
          "Synthetic data generation for AI training"
        ]
      },
      {
        title: "Learning Resources - Books",
        items: [
          "The Art of Prompt Engineering — Packt (2024)",
          "Prompt Engineering for Everyone — Andrew Ng / DeepLearning.AI"
        ]
      },
      {
        title: "Learning Resources - Courses",
        items: [
          "DeepLearning.AI 'ChatGPT Prompt Engineering'",
          "Learn Prompting (free, learnprompting.org)",
          "LangChain Academy"
        ]
      },
      {
        title: "Communities",
        items: [
          "r/PromptEngineering",
          "FlowGPT, PromptHero",
          "AI Village / Discord AI Labs"
        ]
      }
    ]
  }
];