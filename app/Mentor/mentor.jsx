"use client";

import { useState } from "react";
import Image from "next/image";
import mentor from "../Images/mentor.png";

const AIMentor = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.reply) {
        setResponse(data.reply);
      } else {
        setResponse("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Failed to fetch AI response.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 font-sora">
      <main className="flex flex-col w-full max-w-md px-4 py-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-blue-600 font-sora">AI Mentor</h1>
          <p className="text-xl text-gray-500 mt-2 font-sora font-medium">
            Get Answers to your doubtful questions instantly with the help of an AI mentor.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <div className="relative w-64 h-64">
            <Image
              src={mentor}
              alt="AI Mentor Illustration"
              width={256}
              height={256}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora placeholder:text-gray-600"
              placeholder="Enter your programming question..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>

        {loading && (
          <div className="text-blue-500 mt-4 text-sm">Thinking...</div>
        )}

        {response && (
          <div className="mt-6 bg-white border border-gray-300 p-4 rounded-lg shadow text-gray-800 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </main>
    </div>
  );
};

export default AIMentor;
