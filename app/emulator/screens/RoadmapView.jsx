import React, { useState } from "react";
import { Play, Lock, CheckCircle2, ChevronLeft, X, Info, Calendar, Flame } from "lucide-react";

export default function RoadmapView({ onboardingData, completedLessons, onToggleLesson, setTab }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

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

  // Generate dynamic curriculum based on the topic
  const getCurriculum = () => {
    switch (onboardingData.topic) {
      case "frontend":
        return [
          {
            phase: 1,
            title: "HTML & CSS Foundation",
            duration: "2 Weeks",
            emoji: "🎨",
            color: "#3B82F6",
            lessons: [
              { id: "fe-html", title: "Semantic HTML5 Elements", desc: "Learn layout tags (header, section, article) for SEO & accessibility.", difficulty: "Beginner", time: "15m", videoId: "mU6anWqODqg" },
              { id: "fe-flexbox", title: "CSS Flexbox Layouts", desc: "Master alignment, spacing, and responsive structures with Flexbox.", difficulty: "Beginner", time: "20m", videoId: "mU6anWqODqg" },
              { id: "fe-grid", title: "Modern CSS Grid", desc: "Build standard multi-column grid layouts and auto-fit containers.", difficulty: "Intermediate", time: "25m", videoId: "mU6anWqODqg" },
            ]
          },
          {
            phase: 2,
            title: "JavaScript Essentials",
            duration: "3 Weeks",
            emoji: "⚡",
            color: "#FBBF24",
            lessons: [
              { id: "js-basics", title: "JS Variables & Functions", desc: "Learn scopes, arrow functions, template literals, and array methods.", difficulty: "Beginner", time: "18m", videoId: "W6NZfCO5SIk" },
              { id: "js-dom", title: "DOM Manipulation Basics", desc: "Select and update page elements, handle event listeners, and forms.", difficulty: "Intermediate", time: "22m", videoId: "W6NZfCO5SIk" },
              { id: "js-async", title: "Promises & Async/Await", desc: "Fetch API data, handle asynchronous operations, and try-catch blocks.", difficulty: "Intermediate", time: "30m", videoId: "W6NZfCO5SIk" },
            ]
          },
          {
            phase: 3,
            title: "React Framework Core",
            duration: "4 Weeks",
            emoji: "⚛️",
            color: "#60A5FA",
            lessons: [
              { id: "react-components", title: "React Functional Components", desc: "Understand JSX, reusable components, and dynamic props passing.", difficulty: "Intermediate", time: "20m", videoId: "Ke90Tje7VS0" },
              { id: "react-state", title: "React useState & useEffect", desc: "Manage local component state and trigger API fetches on component mount.", difficulty: "Intermediate", time: "30m", videoId: "Ke90Tje7VS0" },
            ]
          }
        ];
      case "backend":
        return [
          {
            phase: 1,
            title: "Node.js & Express Basics",
            duration: "2 Weeks",
            emoji: "🟢",
            color: "#10B981",
            lessons: [
              { id: "be-node", title: "Node.js Runtime Architecture", desc: "Understand event loops, module systems, npm, and file system basics.", difficulty: "Beginner", time: "15m", videoId: "W6NZfCO5SIk" },
              { id: "be-express", title: "Express Server & Routing", desc: "Build custom web servers, manage HTTP request methods, and parameters.", difficulty: "Beginner", time: "25m", videoId: "W6NZfCO5SIk" },
            ]
          },
          {
            phase: 2,
            title: "APIs & Middlewares",
            duration: "3 Weeks",
            emoji: "🔌",
            color: "#6366F1",
            lessons: [
              { id: "be-json", title: "RESTful API Standards", desc: "Design clean JSON schemas, status codes, endpoints, and error handling.", difficulty: "Intermediate", time: "20m", videoId: "W6NZfCO5SIk" },
              { id: "be-middleware", title: "Express Custom Middlewares", desc: "Implement CORS headers, body parsers, and custom logging layers.", difficulty: "Intermediate", time: "20m", videoId: "W6NZfCO5SIk" },
            ]
          }
        ];
      case "ux-design":
        return [
          {
            phase: 1,
            title: "Design Principles Theory",
            duration: "2 Weeks",
            emoji: "🎨",
            color: "#EC4899",
            lessons: [
              { id: "ux-color", title: "Color Theory & Contrast", desc: "Learn harmonious palettes, access standards (WCAG), and visual hierarchy.", difficulty: "Beginner", time: "12m", videoId: "kbZejnPXyLM" },
              { id: "ux-typo", title: "Typography & Grids", desc: "Choose type scales, responsive font pairing, and baseline layouts.", difficulty: "Beginner", time: "15m", videoId: "kbZejnPXyLM" },
            ]
          },
          {
            phase: 2,
            title: "Figma App Mastery",
            duration: "3 Weeks",
            emoji: "📐",
            color: "#8B5CF6",
            lessons: [
              { id: "ux-figma", title: "Figma Auto Layout v5", desc: "Design highly responsive card components, grids, and navbar overlays.", difficulty: "Intermediate", time: "24m", videoId: "kbZejnPXyLM" },
              { id: "ux-proto", title: "Interactive Prototyping", desc: "Create micro-interactions, smart animate transitions, and test flows.", difficulty: "Intermediate", time: "28m", videoId: "kbZejnPXyLM" },
            ]
          }
        ];
      case "fullstack":
      default:
        return [
          {
            phase: 1,
            title: "Web Frontend Foundations",
            duration: "3 Weeks",
            emoji: "🌐",
            color: "#3B82F6",
            lessons: [
              { id: "fs-html", title: "HTML5 & CSS Grid Layouts", desc: "Learn semantic tags, media queries, and layouts from scratch.", difficulty: "Beginner", time: "20m", videoId: "mU6anWqODqg" },
              { id: "fs-js", title: "ES6 JavaScript Foundations", desc: "Master variables, loops, objects, event bindings, and DOM manipulation.", difficulty: "Beginner", time: "25m", videoId: "W6NZfCO5SIk" },
            ]
          },
          {
            phase: 2,
            title: "Backend Development Core",
            duration: "3 Weeks",
            emoji: "⚙️",
            color: "#10B981",
            lessons: [
              { id: "fs-node", title: "Express Server APIs", desc: "Setup Node server, handle GET/POST APIs, and pass query headers.", difficulty: "Intermediate", time: "22m", videoId: "W6NZfCO5SIk" },
              { id: "fs-db", title: "Relational Databases SQL", desc: "Connect Postgres, write custom SELECT queries, and join tables.", difficulty: "Intermediate", time: "30m", videoId: "W6NZfCO5SIk" },
            ]
          }
        ];
    }
  };

  const curriculum = getCurriculum();
  const totalLessons = curriculum.reduce((acc, phase) => acc + phase.lessons.length, 0);
  const masteredPercentage = Math.round((completedLessons.length / totalLessons) * 100) || 0;

  // Check lock state: A lesson is locked if the previous lesson in the curriculum is not completed
  const isLessonLocked = (phaseIndex, lessonIndex) => {
    if (phaseIndex === 0 && lessonIndex === 0) return false;
    
    // Get the previous lesson
    let prevLesson = null;
    if (lessonIndex > 0) {
      prevLesson = curriculum[phaseIndex].lessons[lessonIndex - 1];
    } else {
      const prevPhase = curriculum[phaseIndex - 1];
      prevLesson = prevPhase.lessons[prevPhase.lessons.length - 1];
    }
    
    return !completedLessons.includes(prevLesson.id);
  };

  const handleLessonAction = (lesson, locked) => {
    if (locked) return;
    setSelectedLesson(lesson);
  };

  return (
    <div className="roadmap-screen">
      {/* Header */}
      <div className="roadmap-header">
        <div className="roadmap-header-top">
          <button className="roadmap-action-btn" onClick={() => setTab("home")}>
            <ChevronLeft size={20} />
          </button>
          <div className="roadmap-title-container">
            <span className="roadmap-title-text">Path Roadmap</span>
          </div>
          <div style={{ width: 44 }} />
        </div>

        {/* Metrics Row */}
        <div className="roadmap-metrics">
          <div className="roadmap-metric">
            <div className="roadmap-metric-val">{curriculum.length}</div>
            <div className="roadmap-metric-lab">Phases</div>
          </div>
          <div className="roadmap-metric-div" />
          <div className="roadmap-metric">
            <div className="roadmap-metric-val">{totalLessons}</div>
            <div className="roadmap-metric-lab">Topics</div>
          </div>
          <div className="roadmap-metric-div" />
          <div className="roadmap-metric">
            <div className="roadmap-metric-val">{masteredPercentage}%</div>
            <div className="roadmap-metric-lab">Mastered</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="roadmap-scroll">
        <div className="roadmap-intro">
          <p className="roadmap-desc">
            Your customized path to mastering <strong>{getTopicLabel()}</strong>, dynamically structured based on your profile selection.
          </p>
          <div className="roadmap-help-banner">
            <Info size={16} style={{ flexShrink: 0 }} />
            <span>Watch lessons to earn XP and unlock consecutive modules.</span>
          </div>
        </div>

        {/* Phase List */}
        {curriculum.map((phase, pIdx) => (
          <div key={pIdx} className="roadmap-phase">
            {/* Phase Header */}
            <div className="roadmap-phase-header">
              <div className="roadmap-phase-icon" style={{ backgroundColor: phase.color }}>
                {phase.num || (pIdx + 1)}
              </div>
              <div className="roadmap-phase-head-txt">
                <div className="roadmap-phase-label">PHASE {pIdx + 1}</div>
                <div className="roadmap-phase-title">{phase.title}</div>
              </div>
              <div className="roadmap-dur-pill">
                <span>{phase.duration}</span>
              </div>
            </div>

            {/* Phase Body */}
            <div className="roadmap-phase-body">
              <div className="roadmap-timeline" style={{ backgroundColor: phase.color }} />
              
              <div className="roadmap-topics">
                {phase.lessons.map((lesson, lIdx) => {
                  const locked = isLessonLocked(pIdx, lIdx);
                  const completed = completedLessons.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      className={`roadmap-topic-card ${locked ? "locked" : ""}`}
                      onClick={() => handleLessonAction(lesson, locked)}
                    >
                      <div className="roadmap-topic-header">
                        <div className="roadmap-topic-info">
                          <h4 className="roadmap-topic-title">{lesson.title}</h4>
                          <div className="roadmap-topic-meta">
                            <span
                              className="roadmap-diff-badge"
                              style={{
                                backgroundColor:
                                  lesson.difficulty === "Beginner"
                                    ? "#F0FDF4"
                                    : "#EFF6FF",
                                color:
                                  lesson.difficulty === "Beginner"
                                    ? "#15803D"
                                    : "#1D4ED8",
                              }}
                            >
                              {lesson.difficulty}
                            </span>
                            <span style={{ fontSize: 11, color: "#94A3B8" }}>
                              ⏱️ {lesson.time}
                            </span>
                          </div>
                        </div>

                        {/* Thumbnail Preview */}
                        <div className="roadmap-video-preview">
                          <img
                            src={`https://img.youtube.com/vi/${lesson.videoId}/0.jpg`}
                            alt="Lesson preview"
                          />
                          <div className="roadmap-play-overlay">
                            <div className="roadmap-play-icon">
                              {locked ? <Lock size={12} /> : <Play size={12} className="fill-current" />}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="roadmap-topic-desc">{lesson.desc}</p>

                      {/* Status row */}
                      {completed ? (
                        <div className="roadmap-watch-badge completed">
                          <CheckCircle2 size={14} />
                          <span>Completed ✓</span>
                        </div>
                      ) : locked ? (
                        <div className="roadmap-watch-badge locked-b">
                          <Lock size={14} />
                          <span>Locked 🔒</span>
                        </div>
                      ) : (
                        <div className="roadmap-watch-badge start">
                          <Play size={14} className="fill-current" />
                          <span>Start Lesson</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Sheet */}
      {selectedLesson && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.65)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          onClick={() => setSelectedLesson(null)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
              padding: "20px",
              maxHeight: "85%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 -8px 24px rgba(0,0,0,0.15)",
              animation: "slideUp 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle */}
            <div
              style={{
                width: "48px",
                height: "6px",
                backgroundColor: "#E2E8F0",
                borderRadius: "3px",
                margin: "0 auto 16px",
              }}
            />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "10px", fontWeight: "800", color: "var(--emu-primary)", letterSpacing: "1px" }}>
                  UNLOCKED LESSON
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--emu-dark)", marginTop: "2px", lineHeight: "22px" }}>
                  {selectedLesson.title}
                </h3>
              </div>
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
                  backgroundColor: "#F1F5F9",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedLesson(null)}
              >
                <X size={18} />
              </button>
            </div>

            {/* YouTube embed */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#000",
                marginBottom: "20px",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedLesson.videoId}?autoplay=1`}
                title="Lesson video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Complete Button */}
            <button
              className="emu-continue-btn"
              style={{
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: completedLessons.includes(selectedLesson.id)
                  ? "var(--emu-green-accent)"
                  : "linear-gradient(135deg, var(--emu-primary) 0%, var(--emu-blue-dark) 100%)",
                width: "100%",
                borderRadius: "16px",
              }}
              onClick={() => {
                onToggleLesson(selectedLesson.id);
                setSelectedLesson(null);
              }}
            >
              <CheckCircle2 size={18} style={{ color: "#fff" }} />
              <span style={{ color: "#fff", fontWeight: "700" }}>
                {completedLessons.includes(selectedLesson.id)
                  ? "Mark Incomplete"
                  : "Complete Lesson (+100 XP)"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
