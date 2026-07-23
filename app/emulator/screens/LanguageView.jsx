import React, { useState } from "react";
import { Globe, Languages, MessageSquare, Sparkles, ChevronLeft } from "lucide-react";
import ProgressBar from "../components/ProgressBar";

const LANGUAGES = [
  {
    id: "hindi",
    label: "Hindi (हिंदी)",
    sublabel: "Best for conceptual understanding in native Hindi",
    icon: Globe,
  },
  {
    id: "english",
    label: "English",
    sublabel: "Universal tech terminology & global resources",
    icon: Languages,
  },
  {
    id: "hinglish",
    label: "Hinglish",
    sublabel: "Engaging mix of Hindi speech and English slides",
    icon: MessageSquare,
  },
];

export default function LanguageView({ value, onChange, onNext, onBack }) {
  const [selected, setSelected] = useState(value || "hinglish");

  const handleContinue = () => {
    onChange(selected);
    onNext();
  };

  return (
    <div className="lang-screen">
      {/* Progress Bar */}
      <ProgressBar progress={33.3} />

      {/* Header */}
      <div className="emu-header-row" style={{ paddingLeft: "10px" }}>
        <button className="emu-back-btn" onClick={onBack}>
          <ChevronLeft size={20} />
        </button>
        <span className="emu-step-label">Step 2 of 4</span>
        <div style={{ width: 36 }} /> {/* spacer */}
      </div>

      <div className="lang-scroll">
        <h3 className="lang-title">Choose your learning language</h3>
        <p className="lang-subtitle">
          We will curate high-quality YouTube resources and documentation in your preferred language.
        </p>

        {/* Options */}
        <div className="lang-options">
          {LANGUAGES.map((lang) => {
            const Icon = lang.icon;
            const isSelected = selected === lang.id;
            return (
              <div
                key={lang.id}
                className={`lang-option ${isSelected ? "selected" : ""}`}
                onClick={() => setSelected(lang.id)}
              >
                <div className="left">
                  <div className="icon-circle">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="opt-label">{lang.label}</div>
                    <div className="opt-sub">{lang.sublabel}</div>
                  </div>
                </div>
                <div className="radio">
                  <div className="radio-dot" />
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Banner */}
        <div className="lang-ai-banner">
          <Sparkles className="sparkle" size={20} style={{ color: "var(--emu-primary)", margin: "0 auto 6px" }} />
          <p>
            Our AI engine recommends <strong>Hinglish</strong> for a highly engaging mix of colloquial explanations and professional English terminology.
          </p>
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
