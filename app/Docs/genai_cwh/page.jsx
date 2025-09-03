"use client";
import React from "react";

const GenerativeAiSeries = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <article className="prose prose-lg max-w-none">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          Generative AI Series — Project-Based Tutorials by CodeWithHarry
        </h1>

        {/* Overview */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>“Generative AI Series – Showcasing Generative AI By Building Projects”</strong>{" "}
          is a YouTube playlist by <strong>CodeWithHarry</strong> that introduces{" "}
          <em>practical Generative AI concepts</em> through hands-on, project-based tutorials. 
          Each video walks learners through building real-world AI projects, making it{" "}
          <strong>project-first and beginner-friendly</strong>.
        </p>

        {/* Core Projects */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Video Projects in the Series
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Project 1: HarryGPT – AI Discord Bot</strong> — Build a chatbot for Discord 
            that responds using Generative AI (likely powered by OpenAI/ChatGPT).
          </li>
          <li>
            <strong>Project 2: DALL·E Image Generator (Flask + Replit)</strong> — Learn to create 
            a web app that generates AI images using DALL·E, deployed on Replit.
          </li>
          <li>
            <strong>Project 3: LangChain Article Generator</strong> — A beginner-friendly tutorial 
            showing how to integrate <strong>LangChain</strong> with OpenAI for text generation.
          </li>
          <li>
            <strong>Project 4: Voice Assistant with ChatGPT API</strong> — Build a voice-based 
            assistant powered by the ChatGPT API.
          </li>
        </ul>

        {/* Suggested Learning Strategy */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Suggested Learning Strategy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Start with <strong>HarryGPT</strong> to understand chatbot logic and API integration.
          </li>
          <li>
            Move to the <strong>DALL·E Image Generator</strong> for experience with AI + web apps.
          </li>
          <li>
            Progress into <strong>LangChain</strong> to explore frameworks for Generative AI workflows.
          </li>
          <li>
            Conclude with the <strong>Voice Assistant</strong> to apply AI in speech-based apps.
          </li>
        </ul>

        {/* Expected Outcomes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Expected Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Ability to build AI-powered applications with real-world use cases.</li>
          <li>Hands-on experience with OpenAI APIs, LangChain, and DALL·E.</li>
          <li>Confidence to integrate AI into web, voice, and chatbot platforms.</li>
          <li>Strong project portfolio demonstrating applied Generative AI skills.</li>
        </ul>

        {/* Final Notes */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Final Notes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>Generative AI Series by CodeWithHarry</strong> provides{" "}
          <em>practical, beginner-friendly projects</em> to learn and apply Generative AI. 
          By the end of the series, learners will have multiple deployable projects 
          that showcase their skills in <strong>AI-powered development</strong>.
        </p>

        {/* Meta Info */}
        <hr className="my-8 border-gray-300" />
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="mb-1">
            <strong>Instructor:</strong> CodeWithHarry
          </p>
          <p className="mb-1">
            <strong>Platform:</strong> YouTube
          </p>
          <p className="mb-1">
            <strong>Language:</strong> Hindi
          </p>
          <p>
            <strong>Level:</strong> Beginner → Intermediate
          </p>
        </div>
      </article>
    </div>
  );
};

export default GenerativeAiSeries;
