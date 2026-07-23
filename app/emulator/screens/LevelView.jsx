import React, { useState } from "react";
import { GraduationCap, Laptop, Briefcase, Compass, Check, ChevronLeft } from "lucide-react";
import ProgressBar from "../components/ProgressBar";

const LEVELS = [
  {
    id: "student",
    label: "Student",
    desc: "Just starting out. Looking to build foundational skills and land first internships.",
    icon: GraduationCap,
  },
  {
    id: "freelancer",
    label: "Freelancer",
    desc: "Have some coding skills. Want to learn production-level design patterns and build clients' apps.",
    icon: Laptop,
    recommended: true,
  },
  {
    id: "experienced",
    label: "Experienced Professional",
    desc: "Already working. Looking to upskill, transition to senior roles, or change tech stacks.",
    icon: Briefcase,
  },
  {
    id: "other",
    label: "Self Learner / Explorer",
    desc: "Learning at your own pace for hobbies, personal side-projects, or curiosity.",
    icon: Compass,
  },
];

export default function LevelView({ value, onChange, onNext, onBack }) {
  const [selected, setSelected] = useState(value || "student");

  const handleContinue = () => {
    onChange(selected);
    onNext();
  };

  return (
    <div className="level-screen">
      {/* Progress Bar */}
      <ProgressBar progress={66.6} />

      {/* Header */}
      <div className="emu-header-row" style={{ paddingLeft: "10px" }}>
        <button className="emu-back-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>
        <span className="emu-step-label">Step 3 of 4</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="level-scroll">
        <h3 className="level-title">Select your level</h3>
        <p className="level-subtitle">
          We will adjust the initial difficulty and depth of explanations based on your experience.
        </p>

        {/* Level list */}
        <div className="level-list">
          {LEVELS.map((lvl) => {
            const Icon = lvl.icon;
            const isSelected = selected === lvl.id;
            return (
              <div
                key={lvl.id}
                className={`level-card ${isSelected ? "selected" : ""}`}
                onClick={() => setSelected(lvl.id)}
              >
                {lvl.recommended && (
                  <div className="recommended">RECOMMENDED</div>
                )}
                
                <div className="card-top">
                  <div className="icon-wrap">
                    <Icon size={20} />
                  </div>
                  {isSelected ? (
                    <div className="check-circle">
                      <Check size={12} />
                    </div>
                  ) : (
                    <div className="radio-outer" />
                  )}
                </div>

                <div className="card-label">{lvl.label}</div>
                <div className="card-desc">{lvl.desc}</div>

                {isSelected && (
                  <div className="current-sel">
                    <Check size={14} />
                    <span>Current Selection</span>
                  </div>
                )}
              </div>
            );
          })}
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
