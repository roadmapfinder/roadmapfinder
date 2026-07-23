import React, { useState } from "react";
import { Smile, Compass, Briefcase, Rocket, Target, Check, ChevronLeft, Sparkles } from "lucide-react";

const GOALS = [
  {
    id: "fun",
    label: "For Fun",
    desc: "Experimenting with code, building small utilities, and satisfying curiosity.",
    icon: Smile,
  },
  {
    id: "explore",
    label: "Explore Technology",
    desc: "Understanding what is possible and finding out if tech is the right path for me.",
    icon: Compass,
  },
  {
    id: "job",
    label: "Get a Job",
    desc: "Studying core concepts, building complex portfolios, and prep for technical interviews.",
    icon: Briefcase,
  },
  {
    id: "startup",
    label: "Build a Startup",
    desc: "Learning to ship MVPs quickly, choosing developer stacks, and launching products.",
    icon: Rocket,
  },
];

export default function GoalView({ value, onChange, onGenerate, onBack }) {
  const [selected, setSelected] = useState(value || "job");

  const handleGenerate = () => {
    onChange(selected);
    onGenerate();
  };

  return (
    <div className="goal-screen">
      {/* Goal Header (Progress bar representation) */}
      <div className="goal-header">
        <button className="emu-back-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>
        <div className="goal-progress-pill">
          <div className="goal-progress-fill" style={{ width: "100%" }} />
        </div>
        <span className="goal-step-text">Step 4 of 4</span>
      </div>

      <div className="goal-scroll">
        {/* Hero Icon */}
        <div className="goal-hero">
          <div className="icon-circle">
            <Target size={32} />
          </div>
        </div>

        <h3 className="goal-title">Why are you learning?</h3>
        <p className="goal-subtitle">
          We will prioritize projects and practical use cases that align directly with your goals.
        </p>

        {/* Goal Cards */}
        <div className="goal-list">
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selected === goal.id;
            return (
              <div
                key={goal.id}
                className={`goal-card ${isSelected ? "selected" : ""}`}
                onClick={() => setSelected(goal.id)}
              >
                <div className="icon-wrap">
                  <Icon size={18} />
                </div>
                <div className="text-wrap">
                  <div className="goal-label">{goal.label}</div>
                  <div className="goal-desc">{goal.desc}</div>
                </div>
                {isSelected && (
                  <div className="check-circle">
                    <Check size={12} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="emu-footer">
        <button className="emu-generate-btn" onClick={handleGenerate}>
          <span>Generate My Roadmap</span>
          <Sparkles className="sparkle" size={16} style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}
