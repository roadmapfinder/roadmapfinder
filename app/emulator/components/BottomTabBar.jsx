import React from "react";
import { Home, Map, MessageSquare, User } from "lucide-react";

export default function BottomTabBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "roadmap", label: "Roadmap", icon: Map },
    { id: "mentor", label: "Mentor", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="emu-tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`emu-tab-item ${isActive ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            style={{ border: "none", background: "none", outline: "none" }}
          >
            <Icon className="tab-icon" size={22} />
            <span className="tab-label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
