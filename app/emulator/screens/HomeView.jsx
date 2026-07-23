import React from "react";
import { Bell, Flame, Zap, BookOpen, Bookmark, ArrowRight, Check, Lock, Calendar, Play } from "lucide-react";

export default function HomeView({ onboardingData, completedLessons, setTab }) {
  // Determine text based on onboarding choices
  const getTopicLabel = () => {
    switch (onboardingData.topic) {
      case "frontend": return "Frontend Developer";
      case "backend": return "Backend Engineer";
      case "ux-design": return "UI/UX Designer";
      case "fullstack":
      default:
        return "Full Stack Developer";
    }
  };

  const getLanguageLabel = () => {
    switch (onboardingData.lang) {
      case "hindi": return "Hindi";
      case "english": return "English";
      case "hinglish":
      default:
        return "Hinglish";
    }
  };

  // Dynamic metrics
  const completedCount = completedLessons.length;
  const xp = 1250 + (completedCount * 100);
  const streak = completedCount > 0 ? 6 : 5;

  const mockPhases = [
    { num: 1, name: "HTML & CSS Foundation", emoji: "🎨", topics: 8, dur: "2 weeks", status: "done" },
    { num: 2, name: "JavaScript Essentials", emoji: "⚡", topics: 12, dur: "3 weeks", status: "active" },
    { num: 3, name: "React Framework", emoji: "⚛️", topics: 15, dur: "4 weeks", status: "locked" },
    { num: 4, name: "API & Deployment", emoji: "🌐", topics: 6, dur: "1 week", status: "locked" },
  ];

  return (
    <div className="home-screen">
      <div className="home-scroll">
        {/* Header */}
        <div className="home-header">
          <div>
            <div className="home-greeting">Good morning,</div>
            <div className="home-username">Sohel 👋</div>
          </div>
          <div className="home-header-right">
            <div className="home-icon-btn">
              <Bell size={16} />
              <div className="notif-dot" />
            </div>
            <div className="home-avatar">SK</div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="home-stats-banner">
          <div className="home-stats-top">
            <div className="home-stat-block">
              <div className="home-stat-row">
                <Flame className="home-stat-emoji" size={18} style={{ color: "#F59E0B" }} />
                <span className="home-stat-val">{streak}</span>
              </div>
              <div className="home-stat-label">DAY STREAK</div>
            </div>
            <div className="home-stat-divider" />
            <div className="home-stat-block">
              <div className="home-stat-row">
                <Zap className="home-stat-emoji" size={18} style={{ color: "#FBBF24" }} />
                <span className="home-stat-val">{xp}</span>
              </div>
              <div className="home-stat-label">TOTAL XP</div>
            </div>
            <div className="home-stat-divider" />
            <div className="home-stat-block">
              <div className="home-stat-row">
                <BookOpen className="home-stat-emoji" size={18} style={{ color: "#60A5FA" }} />
                <span className="home-stat-val">{completedCount + 8}</span>
              </div>
              <div className="home-stat-label">TOPICS DONE</div>
            </div>
          </div>

          <div className="home-banner-hdiv" />

          {/* Week Row */}
          <div>
            <div className="home-week-title">THIS WEEK'S ACTIVITY</div>
            <div className="home-week-row">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => {
                // mock done/today days
                const isDone = idx < 5 || (idx === 5 && completedCount > 0);
                const isToday = idx === 5;
                return (
                  <div key={idx} className="home-week-col">
                    <div className={`home-week-label ${isToday ? "today" : ""}`}>{day}</div>
                    <div className={`home-week-circle ${isDone ? "done" : isToday ? "today-c" : "empty"}`}>
                      {isDone && !isToday && <Check size={10} />}
                      {isToday && <div className="today-dot" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Path Row */}
        <div className="home-section-row">
          <span className="home-section-title">Current Path</span>
          <span className="home-section-link" onClick={() => setTab("roadmap")}>
            View roadmap →
          </span>
        </div>

        {/* Path Card */}
        <div className="home-path-card">
          <div className="home-path-top">
            <div>
              <div className="home-phase-pill">PHASE 2 OF 4</div>
              <h4 className="home-path-title">{getTopicLabel()} Path</h4>
              <div className="home-path-meta">{getLanguageLabel()} Language • Recommended for you</div>
            </div>
            <div className="home-path-emoji">⚡</div>
          </div>

          <div className="home-current-phase">
            <Bookmark size={14} style={{ marginRight: 6 }} />
            <span>Currently: JavaScript Essentials</span>
          </div>

          <div className="home-dots-wrap">
            <div className="home-dots-line" />
            <div className="home-dots-row">
              <div className="home-dot done">
                <Check size={10} />
              </div>
              <div className="home-dot current">
                <div className="inner" />
              </div>
              <div className="home-dot locked">
                <div className="inner-locked" />
              </div>
              <div className="home-dot locked">
                <div className="inner-locked" />
              </div>
            </div>
          </div>

          <button className="home-continue-btn" onClick={() => setTab("roadmap")}>
            <span>Continue Learning</span>
            <div className="arrow">
              <ArrowRight size={10} />
            </div>
          </button>
        </div>

        {/* Up Next Section */}
        <div className="home-section-row">
          <span className="home-section-title">Up Next</span>
        </div>

        <div className="home-next-card" onClick={() => setTab("roadmap")} style={{ cursor: "pointer" }}>
          <div className="home-next-icon">
            <Play size={18} style={{ color: "#D97706" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="home-next-lbl">NEXT TOPIC</div>
            <div className="home-next-title">
              {completedLessons.includes("js-dom") ? "JavaScript Async/Await" : "DOM Manipulation Basics"}
            </div>
            <div className="home-next-meta">
              <span className="home-next-time">⏱️ 15 mins</span>
              <span className="home-next-time">• Medium</span>
            </div>
          </div>
        </div>

        {/* Roadmap Overview */}
        <div className="home-section-row">
          <span className="home-section-title">Roadmap Overview</span>
        </div>

        <div className="home-phases-scroll">
          {mockPhases.map((phase) => (
            <div
              key={phase.num}
              className={`home-phase-card ${phase.status === "active" ? "active" : ""}`}
              onClick={() => setTab("roadmap")}
            >
              <div className={`home-phase-status ${phase.status === "done" ? "done" : phase.status === "active" ? "active-s" : "locked-s"}`}>
                {phase.status === "done" && <Check size={10} />}
                {phase.status === "active" && <Play size={8} className="fill-current" />}
                {phase.status === "locked" && <Lock size={8} />}
              </div>
              <div className="home-phase-emoji">{phase.emoji}</div>
              <div className="home-phase-num">PHASE {phase.num}</div>
              <div className="home-phase-name">{phase.name}</div>
              <div className="home-phase-topic-count">{phase.topics} Topics</div>
              <div className="home-phase-dur">
                <Calendar size={10} />
                <span>{phase.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
