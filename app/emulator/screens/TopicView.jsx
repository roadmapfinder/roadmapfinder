import React, { useState } from "react";
import { Layers, Wand2, Server, Brush, Check, User } from "lucide-react";
import ProgressBar from "../components/ProgressBar";

const TOPICS = [
  {
    id: "fullstack",
    label: "Full Stack",
    sublabel: "End-to-End Web Development",
    icon: Layers,
  },
  {
    id: "frontend",
    label: "Frontend",
    sublabel: "UI & Client-Side Logic",
    icon: Wand2,
  },
  {
    id: "backend",
    label: "Backend",
    sublabel: "Servers, DBs & APIs",
    icon: Server,
  },
  {
    id: "ux-design",
    label: "UX Design",
    sublabel: "User Experience & Interface",
    icon: Brush,
  },
];

export default function TopicView({ value, onChange, onNext }) {
  const [selected, setSelected] = useState(value || "fullstack");

  const handleContinue = () => {
    onChange(selected);
    onNext();
  };

  return (
    <div className="topic-screen">
      {/* Progress Bar */}
      <ProgressBar progress={16.6} />

      {/* Header */}
      <div className="emu-header-row">
        <span className="emu-header-title">Learning Path</span>
        <span className="emu-step-label">Step 1 of 4</span>
        <div className="emu-avatar">
          <User size={18} />
        </div>
      </div>

      <div className="topic-scroll">
        {/* Title */}
        <h3 className="emu-question">What do you want to learn?</h3>
        <p className="emu-subtitle">
          Select your primary interest to personalize your AI-guided learning journey.
        </p>

        {/* Grid */}
        <div className="topic-grid">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            const isSelected = selected === topic.id;
            return (
              <div
                key={topic.id}
                className={`topic-card ${isSelected ? "selected" : ""}`}
                onClick={() => setSelected(topic.id)}
              >
                {isSelected && (
                  <div className="check-badge">
                    <Check size={12} />
                  </div>
                )}
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="card-label">{topic.label}</div>
                <div className="card-sub">{topic.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Page Dots */}
        <div className="emu-dots-row">
          <div className="emu-dot active" />
          <div className="emu-dot" />
          <div className="emu-dot" />
          <div className="emu-dot" />
        </div>
      </div>

      {/* Footer */}
      <div className="emu-footer">
        <button className="emu-continue-btn" onClick={handleContinue}>
          <span>Continue</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}
