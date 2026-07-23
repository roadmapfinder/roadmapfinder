import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="emu-progress-track">
      <div className="emu-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
