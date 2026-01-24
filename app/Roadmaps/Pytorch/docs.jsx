// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "PyTorch Official Documentation",
    description:
      "The primary official documentation for PyTorch covering tensors, autograd, neural networks, training loops, CUDA, distributed training, and production APIs.",
    url: "https://pytorch.org/docs/stable/index.html",
    citation: "PyTorch — Official Docs",
  },
  {
    title: "PyTorch Official Tutorials",
    description:
      "Step-by-step official tutorials from beginner to advanced, including deep learning basics, CNNs, NLP, deployment, and optimization.",
    url: "https://pytorch.org/tutorials/",
    citation: "PyTorch — Official Tutorials",
  },
  {
    title: "PyTorch API Reference",
    description:
      "Complete PyTorch API reference for torch, torch.nn, torch.optim, autograd, CUDA, distributed training, and utilities.",
    url: "https://pytorch.org/docs/stable/torch.html",
    citation: "PyTorch — API Reference",
  },
  {
    title: "TorchVision Documentation",
    description:
      "Official PyTorch computer vision library documentation covering datasets, transforms, pretrained models, detection, and segmentation.",
    url: "https://pytorch.org/vision/stable/index.html",
    citation: "PyTorch — TorchVision Docs",
  },
  {
    title: "TorchAudio Documentation",
    description:
      "Official PyTorch audio processing documentation including audio I/O, signal processing transforms, and pretrained models.",
    url: "https://pytorch.org/audio/stable/index.html",
    citation: "PyTorch — TorchAudio Docs",
  },
  {
    title: "TorchText Documentation",
    description:
      "Official PyTorch NLP utilities documentation covering text datasets, tokenization, vocabularies, and preprocessing pipelines.",
    url: "https://pytorch.org/text/stable/index.html",
    citation: "PyTorch — TorchText Docs",
  },
  {
    title: "PyTorch Lightning Documentation",
    description:
      "Official documentation for PyTorch Lightning, an industry-standard framework for scalable, clean, and production-ready training.",
    url: "https://lightning.ai/docs/pytorch/stable/",
    citation: "PyTorch Lightning — Official Docs",
  },
  {
    title: "TorchServe Documentation",
    description:
      "Official PyTorch model serving documentation for deploying, scaling, and managing PyTorch models in production.",
    url: "https://pytorch.org/serve/",
    citation: "PyTorch — TorchServe Docs",
  },
  {
    title: "ONNX Documentation",
    description:
      "Official ONNX documentation for exporting PyTorch models for cross-platform inference and production deployment.",
    url: "https://onnx.ai/",
    citation: "ONNX — Official Docs",
  },
  {
    title: "Hugging Face Transformers (PyTorch)",
    description:
      "Official documentation for transformer-based models (BERT, GPT, LLaMA) with native PyTorch training and fine-tuning support.",
    url: "https://huggingface.co/docs/transformers/index",
    citation: "Hugging Face — Transformers Docs",
  },
  {
    title: "Hugging Face Datasets (PyTorch)",
    description:
      "Official documentation for using large-scale NLP & vision datasets efficiently with PyTorch DataLoader.",
    url: "https://huggingface.co/docs/datasets/use_with_pytorch",
    citation: "Hugging Face — Datasets Docs",
  },
  {
    title: "PyTorch Distributed Training Docs",
    description:
      "Official guide for multi-GPU and multi-node training using DistributedDataParallel (DDP) and torch.distributed.",
    url: "https://pytorch.org/docs/stable/distributed.html",
    citation: "PyTorch — Distributed Training",
  },
  {
    title: "PyTorch Performance Tuning Guide",
    description:
      "Official performance tuning documentation covering AMP, CUDA optimization, memory management, and inference speed-up.",
    url: "https://pytorch.org/tutorials/recipes/recipes/tuning_guide.html",
    citation: "PyTorch — Performance Tuning",
  },
  {
    title: "PyTorch GitHub Repository",
    description:
      "Official PyTorch GitHub repository containing source code, examples, RFCs, and release notes used by core contributors.",
    url: "https://github.com/pytorch/pytorch",
    citation: "PyTorch — GitHub Repository",
  },
  {
    title: "PyTorch Discussion Forum",
    description:
      "Official PyTorch community forum for debugging, best practices, research discussions, and real-world issues.",
    url: "https://discuss.pytorch.org/",
    citation: "PyTorch — Community Forum",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔥 PyTorch Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Explore official PyTorch, Lightning, Hugging Face, and deployment
          documentation required to become an industry-ready PyTorch & Deep
          Learning engineer.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>
              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
