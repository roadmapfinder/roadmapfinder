
"use client";
import React, { useState } from 'react';
import Chat from './chat';
import GeneratedRoadmap from './generated-roadmap';

export default function AIRoadmapGenerator() {
  const [roadmap, setRoadmap] = useState(null);

  const handleRoadmapGenerated = (generatedRoadmap) => {
    setRoadmap(generatedRoadmap);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setRoadmap(null);
  };

  return (
    <>
      {!roadmap ? (
        <Chat onRoadmapGenerated={handleRoadmapGenerated} />
      ) : (
        <GeneratedRoadmap roadmapData={roadmap} onBack={handleBack} />
      )}
    </>
  );
}
