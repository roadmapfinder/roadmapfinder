import React, { useState, useEffect } from "react";
import { Wifi, Battery, Signal } from "lucide-react";
import BottomTabBar from "./BottomTabBar";

export default function PhoneFrame({ children, showBottomBar, activeTab, setActiveTab }) {
  const [time, setTime] = useState("09:41");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const strHours = hours < 10 ? `0${hours}` : hours;
      const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${strHours}:${strMinutes}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        {/* Status Bar */}
        <div className="phone-statusbar">
          <span className="time">{time}</span>
          <div className="icons" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <Signal size={12} style={{ color: "var(--emu-dark)" }} />
            <Wifi size={12} style={{ color: "var(--emu-dark)" }} />
            <Battery size={14} style={{ color: "var(--emu-dark)" }} />
          </div>
        </div>

        {/* Main Screen Content */}
        <div className="screen-container">
          {children}
        </div>

        {/* Bottom Tab Bar */}
        {showBottomBar && (
          <BottomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        {/* Home Indicator */}
        <div className="phone-home-indicator">
          <div className="bar" />
        </div>
      </div>
    </div>
  );
}
