"use client";

import React, { useState } from "react";
import "./emulator.css";
import PhoneFrame from "./components/PhoneFrame";
import SplashView from "./screens/SplashView";
import TopicView from "./screens/TopicView";
import LanguageView from "./screens/LanguageView";
import LevelView from "./screens/LevelView";
import GoalView from "./screens/GoalView";
import GenerateView from "./screens/GenerateView";
import HomeView from "./screens/HomeView";
import RoadmapView from "./screens/RoadmapView";
import MentorView from "./screens/MentorView";
import ProfileView from "./screens/ProfileView";

export default function EmulatorPage() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [activeTab, setActiveTab] = useState("home");
  
  // User selections
  const [onboardingData, setOnboardingData] = useState({
    topic: "fullstack",
    lang: "hinglish",
    level: "student",
    goal: "job",
  });

  // Main application states
  const [completedLessons, setCompletedLessons] = useState([]);
  const [mentorMessages, setMentorMessages] = useState([]);

  // Onboarding handlers
  const updateOnboarding = (key, value) => {
    setOnboardingData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSendMessage = (msg) => {
    setMentorMessages((prev) => [...prev, msg]);
  };

  const handleClearMessages = () => {
    setMentorMessages([]);
  };

  const handleToggleLesson = (lessonId) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  // View Router inside Phone
  const renderPhoneContent = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashView onStartOnboarding={() => setCurrentScreen("topic")} />;
      
      case "topic":
        return (
          <TopicView
            value={onboardingData.topic}
            onChange={(val) => updateOnboarding("topic", val)}
            onNext={() => setCurrentScreen("language")}
          />
        );
      
      case "language":
        return (
          <LanguageView
            value={onboardingData.lang}
            onChange={(val) => updateOnboarding("lang", val)}
            onNext={() => setCurrentScreen("level")}
            onBack={() => setCurrentScreen("topic")}
          />
        );
      
      case "level":
        return (
          <LevelView
            value={onboardingData.level}
            onChange={(val) => updateOnboarding("level", val)}
            onNext={() => setCurrentScreen("goal")}
            onBack={() => setCurrentScreen("language")}
          />
        );
      
      case "goal":
        return (
          <GoalView
            value={onboardingData.goal}
            onChange={(val) => updateOnboarding("goal", val)}
            onGenerate={() => setCurrentScreen("generating")}
            onBack={() => setCurrentScreen("level")}
          />
        );
      
      case "generating":
        return <GenerateView onFinish={() => setCurrentScreen("app")} />;
      
      case "app":
        // Show main app tabs: Home, Roadmap, Mentor, Profile
        if (activeTab === "home") {
          return (
            <HomeView
              onboardingData={onboardingData}
              completedLessons={completedLessons}
              setTab={setActiveTab}
            />
          );
        } else if (activeTab === "roadmap") {
          return (
            <RoadmapView
              onboardingData={onboardingData}
              completedLessons={completedLessons}
              onToggleLesson={handleToggleLesson}
              setTab={setActiveTab}
            />
          );
        } else if (activeTab === "mentor") {
          return (
            <MentorView
              messages={mentorMessages}
              onSendMessage={handleSendMessage}
              onClearMessages={handleClearMessages}
            />
          );
        } else if (activeTab === "profile") {
          return <ProfileView onboardingData={onboardingData} />;
        }
        return null;
        
      default:
        return <SplashView onStartOnboarding={() => setCurrentScreen("topic")} />;
    }
  };

  const showBottomBar = currentScreen === "app";

  return (
    <div className="emu-page">
      <div className="emu-page-layout">
        {/* Sidebar Info */}
        <div className="emu-sidebar">
          <div className="emu-screen-label">
            <span className="dot" />
            <span>Interactive Simulator</span>
          </div>
          <h1 style={{ marginTop: "16px", marginBottom: "12px" }}>RoadmapFinder App Clone</h1>
          <p>
            Experience the complete user flow of our RoadmapFinder mobile application. Select a tech path, choose your language, set custom objectives, and test drive the dashboard, syllabus, and interactive AI mentor.
          </p>
          <div style={{ marginTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
              Active State
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
              <span style={{ fontSize: "11px", backgroundColor: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px", color: "#93C5FD" }}>
                🎯 {onboardingData.topic}
              </span>
              <span style={{ fontSize: "11px", backgroundColor: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px", color: "#93C5FD" }}>
                🗣️ {onboardingData.lang}
              </span>
              <span style={{ fontSize: "11px", backgroundColor: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px", color: "#93C5FD" }}>
                📈 {onboardingData.level}
              </span>
              <span style={{ fontSize: "11px", backgroundColor: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px", color: "#93C5FD" }}>
                🏆 {completedLessons.length} Done
              </span>
            </div>
            {currentScreen === "app" && (
              <button
                style={{
                  marginTop: "24px",
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                onClick={() => {
                  setCurrentScreen("splash");
                  setActiveTab("home");
                  setCompletedLessons([]);
                  setMentorMessages([]);
                }}
              >
                Reset Emulator Flow
              </button>
            )}
          </div>
        </div>

        {/* Central Phone Mockup */}
        <PhoneFrame
          showBottomBar={showBottomBar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {renderPhoneContent()}
        </PhoneFrame>
      </div>
    </div>
  );
}
