import React from 'react';

export default function DeepLearningCourse2025() {
  const course = {
    title: "Deep Learning Full Course with Python, Scikit Learn, Keras — WsCube Tech",
    format: "Comprehensive Hindi-language YouTube series providing end-to-end coverage of Deep Learning fundamentals to real-world applications.",
    targetAudience: [
      "Beginners looking to enter deep learning from a Python/ML background",
      "Students seeking Hindi explanations for complex neural network concepts",
      "Learners aiming to apply Keras and Python frameworks to practical projects"
    ],
    modules: [
      {
        id: 1,
        name: "Introduction to Deep Learning",
        topics: [
          "What is Deep Learning",
          "Difference between Machine Learning and Deep Learning",
          "Real-world applications of deep learning"
        ]
      },
      {
        id: 2,
        name: "Neurons and Neural Networks",
        topics: [
          "Concept of biological vs artificial neurons",
          "Mathematical formulation of a neuron",
          "Basic architecture of neural networks"
        ]
      },
      {
        id: 3,
        name: "Forward & Backward Propagation",
        topics: [
          "Feedforward process",
          "Error calculation",
          "Backpropagation and weight updates"
        ]
      },
      {
        id: 4,
        name: "Activation Functions",
        topics: [
          "ReLU",
          "Sigmoid",
          "Tanh",
          "Role in enabling non-linear transformations"
        ]
      },
      {
        id: 5,
        name: "Model Training in Keras",
        topics: [
          "Defining models",
          "Compiling models with optimizers",
          "Training and evaluating networks"
        ]
      },
      {
        id: 6,
        name: "Loss Functions & Optimizers",
        topics: [
          "Mean Squared Error, Cross-Entropy",
          "Gradient Descent, SGD",
          "Adam optimizer"
        ]
      },
      {
        id: 7,
        name: "Network Architectures",
        topics: [
          "Artificial Neural Networks (ANNs)",
          "Convolutional Neural Networks (CNNs)",
          "Use cases in image classification"
        ]
      },
      {
        id: 8,
        name: "Advanced Patterns & Projects",
        topics: [
          "Working with image datasets",
          "Segmentation tasks",
          "Hands-on classification project"
        ]
      }
    ],
    learningApproach: [
      "Follow the playlist sequentially to build a solid foundation",
      "Code along in Python using Scikit Learn and Keras",
      "Reinforce concepts with exercises and small experiments",
      "Complete mini-projects to solidify applied understanding"
    ],
    expectedOutcomes: [
      "Clear understanding of neural networks and deep learning workflow",
      "Ability to design and train ANN and CNN models in Python",
      "Practical experience with Keras model training and evaluation",
      "Confidence to move toward advanced topics like RNNs or NLP"
    ],
    summary: "WsCube Tech’s Deep Learning Full Course is a complete Hindi-language bootcamp designed to demystify deep learning. It covers everything from neurons and backpropagation to hands-on CNN projects, making it ideal for beginners looking for an applied yet clear introduction."
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.format}</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Target Audience</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.targetAudience.map((audience, idx) => (
          <li key={idx}>{audience}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">📚 Modules</h2>
      <div className="space-y-4">
        {course.modules.map((module) => (
          <div key={module.id} className="p-4 border rounded-lg shadow">
            <h3 className="font-semibold">{module.id}. {module.name}</h3>
            <ul className="list-disc ml-6">
              {module.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">📝 Learning Approach</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.learningApproach.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🏆 Expected Outcomes</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.expectedOutcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📌 Final Summary</h2>
      <p>{course.summary}</p>
    </div>
  );
}
