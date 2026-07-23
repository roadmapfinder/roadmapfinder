import React, { useState, useEffect } from "react";
import { Compass, BookOpen, ShieldCheck, Check, Cpu } from "lucide-react";

export default function GenerateView({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait a brief moment at 100% to let user see it complete
          setTimeout(() => {
            onFinish();
          }, 800);
          return 100;
        }
        // Increment progress faster at start, slower near end
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return Math.min(100, prev + increment);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onFinish]);

  // Determine status of the three validation steps
  const getStepStatus = (stepIndex) => {
    if (stepIndex === 1) {
      if (progress >= 35) return "complete";
      return "active";
    }
    if (stepIndex === 2) {
      if (progress >= 70) return "complete";
      if (progress >= 35) return "active";
      return "inactive";
    }
    if (stepIndex === 3) {
      if (progress >= 100) return "complete";
      if (progress >= 70) return "active";
      return "inactive";
    }
    return "inactive";
  };

  return (
    <div className="generate-screen">
      {/* Gen Cluster */}
      <div className="gen-cluster">
        <div className="gen-orbit-ring" />
        <div className="gen-center-icon">
          <Cpu size={32} />
        </div>
        <div className="gen-badge gen-badge-1">
          <Check size={10} style={{ color: "#16A34A" }} />
          <span>Profile Parsed</span>
        </div>
        <div className="gen-badge gen-badge-2">
          <span className="animate-pulse">🔍</span>
          <span>Scanning Modules</span>
        </div>
      </div>

      <h3 className="gen-title">Building your personalized roadmap...</h3>
      <p className="gen-subtitle">
        Curating learning pathways, mapping prerequisites, and selecting hands-on challenges.
      </p>

      {/* Progress Section */}
      <div className="gen-progress">
        <div className="gen-progress-labels">
          <span className="gen-progress-label">PROCESSING</span>
          <span className="gen-progress-pct">{progress}%</span>
        </div>
        <div className="gen-progress-track">
          <div className="gen-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Steps Cards */}
      <div className="gen-steps">
        {/* Step 1 */}
        <div className={`gen-step-card ${getStepStatus(1)}`}>
          <div className="gen-step-icon">
            <Compass size={16} />
          </div>
          <span className="gen-step-label">Cognitive Load Assessment</span>
          {getStepStatus(1) === "active" && <div className="gen-step-spinner" />}
          {getStepStatus(1) === "complete" && <Check size={16} style={{ color: "#15803D" }} />}
        </div>

        {/* Step 2 */}
        <div className={`gen-step-card ${getStepStatus(2)}`}>
          <div className="gen-step-icon">
            <BookOpen size={16} />
          </div>
          <span className="gen-step-label">Prerequisite Mapping</span>
          {getStepStatus(2) === "active" && <div className="gen-step-spinner" />}
          {getStepStatus(2) === "complete" && <Check size={16} style={{ color: "#15803D" }} />}
        </div>

        {/* Step 3 */}
        <div className={`gen-step-card ${getStepStatus(3)}`}>
          <div className="gen-step-icon">
            <ShieldCheck size={16} />
          </div>
          <span className="gen-step-label">Final Path Validation</span>
          {getStepStatus(3) === "active" && <div className="gen-step-spinner" />}
          {getStepStatus(3) === "complete" && <Check size={16} style={{ color: "#15803D" }} />}
        </div>
      </div>

      <div className="gen-footer-tag">AI-POWERED OPTIMIZATION ENGINE v2.4</div>
    </div>
  );
}
